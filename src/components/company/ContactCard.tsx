import { site } from "@/content/site";
import { ClockIcon, FacebookIcon, InstagramIcon, MailIcon, PhoneIcon, PinIcon, ShieldIcon } from "./icons";

/** Navy contact card: phone, email, hours, counties, license, socials. */
export default function ContactCard() {
  const rows = [
    {
      icon: <PhoneIcon className="h-5 w-5" />,
      label: "Call or text",
      value: (
        <a href={site.phoneHref} className="text-lg font-bold text-white hover:text-amber-500">
          {site.phone}
        </a>
      ),
    },
    {
      icon: <MailIcon className="h-5 w-5" />,
      label: "Email",
      value: (
        <a href={`mailto:${site.email}`} className="break-all font-semibold text-white hover:text-amber-500">
          {site.email}
        </a>
      ),
    },
    {
      icon: <ClockIcon className="h-5 w-5" />,
      label: "Hours",
      value: <span className="text-white">{site.hours}</span>,
    },
    {
      icon: <PinIcon className="h-5 w-5" />,
      label: "Based in",
      value: (
        <span className="text-white">
          {site.address.city}, {site.address.state} {site.address.zip}
          <span className="mt-1 block text-sm text-navy-100/75">Serving {site.counties.join(", ")}</span>
        </span>
      ),
    },
    {
      icon: <ShieldIcon className="h-5 w-5" />,
      label: "License",
      value: <span className="text-white">{site.licenseLabel}</span>,
    },
  ];

  return (
    <aside className="rounded-xl bg-navy-900 p-7 text-navy-100 shadow-card md:p-8">
      <p className="eyebrow">Talk to Tim directly</p>
      <h2 className="mt-3 text-2xl font-bold !text-white">Prefer the phone?</h2>
      <p className="mt-2 text-[15px] leading-relaxed text-navy-100/80">
        You will reach an owner, not a call center. Leave a message after hours and we call back within one business day.
      </p>
      <dl className="mt-7 space-y-5">
        {rows.map((r) => (
          <div key={r.label} className="flex gap-4">
            <dt className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/10 text-amber-500">
              {r.icon}
              <span className="visually-hidden">{r.label}</span>
            </dt>
            <dd className="min-w-0">
              <span aria-hidden="true" className="block text-xs font-semibold uppercase tracking-[.14em] text-navy-100/60">
                {r.label}
              </span>
              <span className="mt-0.5 block">{r.value}</span>
            </dd>
          </div>
        ))}
      </dl>
      <div className="mt-7 flex gap-3 border-t border-white/15 pt-6">
        <a
          href={site.social.facebook}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Prestigious Home Improvements on Facebook"
          className="grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white hover:text-navy-950"
        >
          <FacebookIcon className="h-5 w-5" />
        </a>
        <a
          href={site.social.instagram}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Prestigious Home Improvements on Instagram"
          className="grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white hover:text-navy-950"
        >
          <InstagramIcon className="h-5 w-5" />
        </a>
      </div>
    </aside>
  );
}
