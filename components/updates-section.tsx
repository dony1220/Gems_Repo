import type { UpdateItem } from "@/lib/content";
import { IconBell } from "@/components/icons";

export function UpdatesSection({ items }: { items: UpdateItem[] }) {
  return (
    <section
      className="rounded-2xl border border-sky-100/80 bg-sky-50/80 px-6 py-5 shadow-sm"
      aria-labelledby="updates-heading"
    >
      <h2
        id="updates-heading"
        className="mb-4 flex items-center gap-2 text-sm font-bold tracking-wide text-[#0055CC]"
      >
        <IconBell className="shrink-0 text-[#0055CC]" />
        UPDATES
      </h2>
      <ul className="space-y-3 text-sm leading-relaxed">
        {items.map((row, i) => (
          <li key={i} className="flex flex-col gap-0.5 sm:flex-row sm:gap-4">
            <time
              className="shrink-0 font-medium text-slate-500 tabular-nums"
              dateTime={row.date.replace(/\./g, "-")}
            >
              {row.date}
            </time>
            <p className="text-neutral-800">
              {row.parts.map((p, j) =>
                p.highlight ? (
                  <strong key={j} className="font-semibold text-red-600">
                    {p.text}
                  </strong>
                ) : (
                  <span key={j}>{p.text}</span>
                ),
              )}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
