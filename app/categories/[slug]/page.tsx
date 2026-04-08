import Link from "next/link";
import { notFound } from "next/navigation";
import { GemCard } from "@/components/gem-card";
import { IconClose } from "@/components/icons";
import { getCategory, getGemsForCategory } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  const gems = getGemsForCategory(slug);

  return (
    <div className="min-h-full bg-white text-neutral-900">
      <div className="mx-auto max-w-7xl px-6 pb-20 pt-10">
        <header className="relative mb-10 flex flex-col gap-4 pr-12 md:pr-0">
          <Link
            href="/"
            className="absolute right-0 top-0 rounded-lg p-2 text-neutral-400 transition-colors hover:bg-neutral-100 hover:text-neutral-700"
            aria-label="홈으로 돌아가기"
          >
            <IconClose />
          </Link>
          <p className="text-xs font-semibold uppercase tracking-wide text-[#0055CC]">
            {category.subtitleEn}
          </p>
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
            {category.title}
          </h1>
          <p className="max-w-2xl text-sm leading-relaxed text-neutral-500 md:text-base">
            {category.description}
          </p>
        </header>

        {gems.length === 0 ? (
          <p className="rounded-2xl border border-dashed border-neutral-200 bg-neutral-50/50 px-6 py-12 text-center text-neutral-500">
            이 카테고리에 등록된 Gem 샘플이 없습니다.{" "}
            <code className="rounded bg-neutral-100 px-1.5 py-0.5 text-sm">
              lib/content.ts
            </code>
            에서 추가하세요.
          </p>
        ) : (
          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {gems.map((gem) => (
              <li key={gem.id}>
                <GemCard gem={gem} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
