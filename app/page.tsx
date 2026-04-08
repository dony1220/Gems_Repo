import Link from "next/link";
import { CategoryCard } from "@/components/category-card";
import {
  IconArrowRight,
  IconGrid,
  IconLock,
} from "@/components/icons";
import { UpdatesSection } from "@/components/updates-section";
import { CATEGORIES, UPDATES } from "@/lib/content";

export default function HomePage() {
  return (
    <div className="flex min-h-full flex-1 flex-col bg-white text-neutral-900">
      <main className="mx-auto w-full max-w-5xl flex-1 px-6 pb-20 pt-16 md:pt-20">
        <header className="mb-14 md:mb-16">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            <span className="text-neutral-900">Custom Gem </span>
            <span className="text-[#0055CC]">Library</span>
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-500 md:text-lg">
            내부 마케팅·리서치 업무를 위한 Gem 모음 틀입니다. (데모 문구 — 나중에
            실제 안내로 교체)
          </p>
          <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2 text-xs text-neutral-600">
            <IconLock className="shrink-0 text-[#0055CC]" />
            <span>접근: 사내 지정 Google 계정 필요 (샘플)</span>
          </div>
          <div className="mt-8">
            <Link
              href="#categories"
              className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-neutral-800"
            >
              이용 가이드 보기
              <IconArrowRight className="-mr-0.5" />
            </Link>
          </div>
        </header>

        <div className="mb-14 space-y-14">
          <UpdatesSection items={UPDATES} />

          <section id="categories" aria-labelledby="categories-heading">
            <h2
              id="categories-heading"
              className="mb-6 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-neutral-500"
            >
              <IconGrid className="text-neutral-500" />
              Categories
            </h2>
            <div className="grid gap-0 sm:grid-cols-2 lg:grid-cols-3">
              {CATEGORIES.map((c) => (
                <CategoryCard key={c.slug} category={c} />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
