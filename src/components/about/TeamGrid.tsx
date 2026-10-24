import { initials } from "@/components/company/utils";
import { about } from "@/content/about";

/**
 * Team grid for /about/team. Real people only (the two owners) plus one card for
 * the crew as a group. Initials avatars, no stock portraits.
 */
export default function TeamGrid() {
  return (
    <ul className="grid gap-6 md:grid-cols-3">
      {about.team.map((m, i) => {
        const [title, focus] = m.role.split("·").map((s) => s.trim());
        return (
          <li key={m.name} className="flex flex-col overflow-hidden rounded-[14px] border border-sand-200 bg-white shadow-card">
            <div className={`grid h-44 place-items-center ${i === 2 ? "bg-sand-100" : "bg-navy-900"}`}>
              <span
                aria-hidden="true"
                className={`grid h-24 w-24 place-items-center rounded-full font-heading text-3xl font-extrabold ${
                  i === 2 ? "bg-navy-900 text-amber-500" : "bg-amber-500 text-navy-950"
                }`}
              >
                {i === 2 ? (
                  <svg viewBox="0 0 24 24" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth={1.8}>
                    <circle cx="9" cy="8" r="3.2" />
                    <circle cx="17" cy="9" r="2.6" />
                    <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6M14.5 14.3c.8-.2 1.6-.3 2.5-.3 2.8 0 5 2.2 5 5" />
                  </svg>
                ) : (
                  initials(m.name)
                )}
              </span>
            </div>
            <div className="flex flex-1 flex-col p-7">
              <p className="eyebrow !text-[11px]">{title}</p>
              <h3 className="mt-2 text-xl font-bold">{m.name}</h3>
              {focus ? <p className="mt-1 text-sm font-semibold text-sea-600">{focus}</p> : null}
              <p className="mt-4 text-[15px] leading-relaxed text-ink-500">{m.bio}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
