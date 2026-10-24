"use client";

import { useState, type FormEvent } from "react";
import { usePathname } from "next/navigation";
import { nav, site } from "@/content/site";
import {
  ErrorNote,
  Field,
  Honeypot,
  SuccessCard,
  fieldCls,
  postContact,
  submitCls,
  val,
  type FormStatus,
} from "@/components/about/formKit";

const serviceOptions = [...nav.services.map((s) => s.label), "Not sure yet"];

/**
 * Referral form: the referrer's details go into name/phone/email (so the
 * reward can be matched to their account); the friend's details are packed
 * into `message`. Posts to /api/contact.
 */
export default function ReferralForm() {
  const pathname = usePathname();
  const [status, setStatus] = useState<FormStatus>("idle");
  const [error, setError] = useState("");
  const reward = site.referral.reward; // TODO confirm reward amount with client

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const you = { name: val(fd, "yourName"), phone: val(fd, "yourPhone"), email: val(fd, "yourEmail") };
    const friend = {
      name: val(fd, "friendName"),
      phone: val(fd, "friendPhone"),
      email: val(fd, "friendEmail"),
      city: val(fd, "friendCity"),
      service: val(fd, "friendService"),
      details: val(fd, "details"),
    };

    if (!you.name || !you.phone || !friend.name || !friend.phone) {
      setStatus("error");
      setError("Please add your name and phone, plus your friend's name and phone.");
      return;
    }

    const message = [
      "REFERRAL",
      `Referred by: ${you.name} (${you.phone}${you.email ? `, ${you.email}` : ""})`,
      "",
      `Friend: ${friend.name}`,
      `Friend phone: ${friend.phone}`,
      `Friend email: ${friend.email || "-"}`,
      `Friend city: ${friend.city || "-"}`,
      `Interested in: ${friend.service || "-"}`,
      "",
      "Details:",
      friend.details || "-",
    ].join("\n");

    setStatus("sending");
    setError("");
    try {
      await postContact({
        name: you.name,
        phone: you.phone,
        email: you.email,
        message,
        service: "Referral",
        page: pathname ?? "/referral",
        company: val(fd, "company"),
      });
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <SuccessCard title="Referral sent. Thank you.">
        <p>
          We will reach out to your friend soon. When their project is finished, we send you {reward}.
        </p>
      </SuccessCard>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="relative rounded-[14px] border border-sand-200 bg-white p-6 shadow-card md:p-8">
      <fieldset>
        <legend className="font-heading text-lg font-bold text-navy-900">Your information</legend>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <Field id="rf-your-name" label="Your name" required className="sm:col-span-2">
            <input id="rf-your-name" name="yourName" type="text" required autoComplete="name" className={fieldCls} />
          </Field>
          <Field id="rf-your-phone" label="Your phone" required>
            <input id="rf-your-phone" name="yourPhone" type="tel" required autoComplete="tel" inputMode="tel" className={fieldCls} />
          </Field>
          <Field id="rf-your-email" label="Your email">
            <input id="rf-your-email" name="yourEmail" type="email" autoComplete="email" className={fieldCls} />
          </Field>
        </div>
        <p className="mt-2 text-xs text-ink-500">We use this to match the referral to your past project.</p>
      </fieldset>

      <div className="mt-8 border-t border-sand-200 pt-6">
      <fieldset>
        <legend className="font-heading text-lg font-bold text-navy-900">Who you are referring</legend>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <Field id="rf-friend-name" label="Their name" required>
            <input id="rf-friend-name" name="friendName" type="text" required autoComplete="off" className={fieldCls} />
          </Field>
          <Field id="rf-friend-phone" label="Their phone" required>
            <input id="rf-friend-phone" name="friendPhone" type="tel" required autoComplete="off" inputMode="tel" className={fieldCls} />
          </Field>
          <Field id="rf-friend-email" label="Their email">
            <input id="rf-friend-email" name="friendEmail" type="email" autoComplete="off" className={fieldCls} />
          </Field>
          <Field id="rf-friend-city" label="Their city">
            <input id="rf-friend-city" name="friendCity" type="text" autoComplete="off" className={fieldCls} />
          </Field>
          <Field id="rf-friend-service" label="What they might need" className="sm:col-span-2">
            <select id="rf-friend-service" name="friendService" defaultValue="" className={fieldCls}>
              <option value="">Choose a service</option>
              {serviceOptions.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
          </Field>
          <Field id="rf-details" label="Anything we should know" className="sm:col-span-2">
            <textarea
              id="rf-details"
              name="details"
              rows={3}
              placeholder="Best time to call, whether they know to expect us, what they mentioned."
              className={fieldCls}
            />
          </Field>
          <Honeypot id="rf-company" />
        </div>
      </fieldset>
      </div>

      {status === "error" && error ? <ErrorNote message={error} /> : null}

      <button type="submit" disabled={status === "sending"} className={submitCls}>
        {status === "sending" ? "Sending…" : "Send referral"}
      </button>
      <p className="mt-3 text-center text-xs text-ink-500">
        We only contact your friend about their project. Your {reward} is sent when their job is complete.
      </p>
    </form>
  );
}
