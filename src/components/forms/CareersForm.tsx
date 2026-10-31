"use client";

import { useState, type FormEvent } from "react";
import { usePathname } from "next/navigation";
import { useFormToken } from "@/lib/useFormToken";
import { site } from "@/content/site";
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

const interests = ["Field crew / installer helper", "Experienced installer or carpenter", "Office & scheduling", "Not sure yet"];

/** Job application. Posts to /api/contact with the extra fields packed into `message`. */
export default function CareersForm() {
  const pathname = usePathname();
  const [status, setStatus] = useState<FormStatus>("idle");
  const [error, setError] = useState("");
  const getToken = useFormToken();

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const first = val(fd, "first");
    const last = val(fd, "last");
    const phone = val(fd, "phone");
    const email = val(fd, "email");
    const city = val(fd, "city");
    const interest = val(fd, "interest");
    const about = val(fd, "about");
    const consent = fd.get("consent") === "on";

    if (!first || !last || !phone || !city) {
      setStatus("error");
      setError("Please fill in your name, phone and the city you live in.");
      return;
    }
    if (!consent) {
      setStatus("error");
      setError("Please confirm we can contact you about this application.");
      return;
    }

    const message = [
      "CAREERS APPLICATION",
      `City: ${city}`,
      `Interested in: ${interest || "-"}`,
      "",
      "About them:",
      about || "-",
    ].join("\n");

    setStatus("sending");
    setError("");
    try {
      await postContact({
        name: `${first} ${last}`,
        phone,
        email,
        message,
        service: "Careers application",
        page: pathname ?? "/careers",
        company: val(fd, "company"),
      }, await getToken());
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <SuccessCard title="Thanks for applying.">
        <p>
          One of the owners will read this and get back to you. Want to talk sooner? Call{" "}
          <a href={site.phoneHref} className="font-semibold text-sea-600 hover:underline">
            {site.phone}
          </a>{" "}
          and ask about hiring.
        </p>
      </SuccessCard>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="relative rounded-[14px] border border-sand-200 bg-white p-6 shadow-card md:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field id="cf-first" label="First name" required>
          <input id="cf-first" name="first" type="text" required autoComplete="given-name" className={fieldCls} />
        </Field>
        <Field id="cf-last" label="Last name" required>
          <input id="cf-last" name="last" type="text" required autoComplete="family-name" className={fieldCls} />
        </Field>
        <Field id="cf-phone" label="Phone" required>
          <input id="cf-phone" name="phone" type="tel" required autoComplete="tel" inputMode="tel" className={fieldCls} />
        </Field>
        <Field id="cf-email" label="Email">
          <input id="cf-email" name="email" type="email" autoComplete="email" className={fieldCls} />
        </Field>
        <Field id="cf-city" label="City you live in" required>
          <input id="cf-city" name="city" type="text" required autoComplete="address-level2" className={fieldCls} />
        </Field>
        <Field id="cf-interest" label="What interests you">
          <select id="cf-interest" name="interest" defaultValue="" className={fieldCls}>
            <option value="">Choose one</option>
            {interests.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </Field>
        <Field id="cf-about" label="Anything else you'd like to share" className="sm:col-span-2">
          <textarea
            id="cf-about"
            name="about"
            rows={4}
            placeholder="Past jobs, trade experience, when you can start, hours that work for you."
            className={fieldCls}
          />
        </Field>
        <div className="sm:col-span-2">
          <label className="flex items-start gap-3 text-sm text-ink-900">
            <input name="consent" type="checkbox" required className="mt-0.5 h-4 w-4 accent-amber-500" />
            <span>I agree to Prestigious Home Improvements contacting me about this application.</span>
          </label>
        </div>
        <Honeypot id="cf-company" />
      </div>

      {status === "error" && error ? <ErrorNote message={error} /> : null}

      <button type="submit" disabled={status === "sending"} className={submitCls}>
        {status === "sending" ? "Sending…" : "Send my application"}
      </button>
      <p className="mt-3 text-center text-xs text-ink-500">An owner reads every application, not a screening program.</p>
    </form>
  );
}
