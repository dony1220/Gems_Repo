import Link from "next/link";
import type { Category } from "@/lib/content";
import { IconArrowRight } from "@/components/icons";

export function CategoryCard({ category }: { category: Category }) {
  return (
    <Link
      href={`/categories/${category.slug}`}
      className="group relative block border border-neutral-200 bg-white p-6 transition-shadow hover:z-10 hover:border-sky-200/80 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0055CC]"
    >
      <span
        className="pointer-events-none absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#0055CC] text-white opacity-0 shadow-md transition-opacity group-hover:opacity-100"
        aria-hidden
      >
        <IconArrowRight className="-mr-0.5" />
      </span>
      <p className="mb-2 text-4xl font-light tabular-nums text-neutral-300 transition-colors group-hover:font-normal group-hover:text-[#0055CC]">
        {category.index}
      </p>
      <h3 className="mb-1 text-xl font-bold tracking-tight text-neutral-900">
        {category.title}
      </h3>
      <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-[#0055CC]">
        {category.subtitleEn}
      </p>
      <p className="mb-6 text-sm leading-relaxed text-neutral-500">
        {category.description}
      </p>
      <p className="text-xs font-medium uppercase tracking-wide text-neutral-400">
        {category.gemCount} gems inside
      </p>
    </Link>
  );
}
