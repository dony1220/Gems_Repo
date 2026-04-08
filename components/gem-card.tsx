import type { Gem } from "@/lib/content";
import { IconExternal } from "@/components/icons";

export function GemCard({ gem }: { gem: Gem }) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-neutral-200/90 bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
      <div className="mb-3 flex items-start justify-between gap-2">
        <div className="flex flex-wrap gap-1.5">
          {gem.tags.map((t) => (
            <span
              key={t}
              className="rounded-md bg-sky-50 px-2 py-0.5 text-xs font-medium text-[#0055CC]"
            >
              {t}
            </span>
          ))}
        </div>
        <a
          href={gem.href}
          className="shrink-0 rounded-md p-1 text-neutral-400 transition-colors hover:bg-neutral-50 hover:text-[#0055CC]"
          aria-label="새 창에서 열기 (샘플)"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconExternal />
        </a>
      </div>
      <h3 className="mb-2 flex gap-2 text-base font-bold leading-snug text-neutral-900">
        <span className="shrink-0" aria-hidden>
          {gem.icon}
        </span>
        <span>{gem.title}</span>
      </h3>
      <p className="mb-5 flex-1 text-sm leading-relaxed text-neutral-600">
        {gem.description}
      </p>
      <a
        href={gem.href}
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#0055CC] py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#0044a3]"
      >
        Gemを開く
        <span aria-hidden>→</span>
      </a>
    </article>
  );
}
