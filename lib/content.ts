/** 샘플 데이터 — 실제 운영 시 JSON/DB/CMS로 교체하면 됩니다. */

export type UpdatePart = { text: string; highlight?: boolean };

export type UpdateItem = {
  date: string;
  parts: UpdatePart[];
};

export type Category = {
  slug: string;
  index: string;
  title: string;
  subtitleEn: string;
  description: string;
  gemCount: number;
};

export type Gem = {
  id: string;
  tags: string[];
  title: string;
  description: string;
  /** Gem 링크 (샘플은 #) */
  href: string;
  icon: string;
};

export const UPDATES: UpdateItem[] = [
  {
    date: "2026.04.01",
    parts: [
      { text: "샘플: " },
      { text: "Google Cloud", highlight: true },
      { text: " 연동 가이드를 추가했습니다. (데모 텍스트)" },
    ],
  },
  {
    date: "2026.03.15",
    parts: [
      { text: "샘플 업데이트 — " },
      { text: "MBTI", highlight: true },
      { text: " 관련 Gem 카테고리를 정리했습니다." },
    ],
  },
  {
    date: "2026.03.01",
    parts: [{ text: "Custom Gem Library 베타 틀 오픈 (내용은 추후 반영)" }],
  },
];

export const CATEGORIES: Category[] = [
  {
    slug: "business",
    index: "01",
    title: "商談・提案",
    subtitleEn: "BUSINESS NEGOTIATION & PROPOSAL",
    description:
      "제안서·협상 자료용 Gem 샘플 설명입니다. 실제 문구로 바꿔서 사용하세요.",
    gemCount: 4,
  },
  {
    slug: "research",
    index: "02",
    title: "調査・分析",
    subtitleEn: "RESEARCH & ANALYSIS",
    description:
      "시장 조사, 리서치 보조용 Gem 틀. 카드와 설명은 placeholder입니다.",
    gemCount: 2,
  },
  {
    slug: "operations",
    index: "03",
    title: "業務効率化",
    subtitleEn: "OPERATIONS & EFFICIENCY",
    description:
      "내부 업무 자동화·문서 초안 등을 위한 Gem 자리 표시자.",
    gemCount: 1,
  },
  {
    slug: "creative",
    index: "04",
    title: "クリエイティブ",
    subtitleEn: "CREATIVE & CONTENT",
    description:
      "카피, 크리에이티브 브레인스토밍용. 호버 시 강조 스타일 테스트용 카드.",
    gemCount: 2,
  },
];

const GEMS_BY_CATEGORY: Record<string, Gem[]> = {
  business: [
    {
      id: "b1",
      tags: ["Report", "Market"],
      title: "サンプル：市場概況レポート補助",
      description:
        "placeholder 설명입니다. 실제 Gem 설명과 링크로 교체하세요. 세 줄 정도의 짧은 요약을 넣습니다.",
      href: "#",
      icon: "🔍",
    },
    {
      id: "b2",
      tags: ["Proposal"],
      title: "サンプル：提案書アウトライン生成",
      description:
        "또 다른 샘플 카드입니다. 태그·아이콘·버튼 동작만 확인용입니다.",
      href: "#",
      icon: "📋",
    },
    {
      id: "b3",
      tags: ["Analysis"],
      title: "サンプル：競合比較メモ",
      description:
        "그리드 레이아웃 테스트를 위한 더미 텍스트입니다....",
      href: "#",
      icon: "📊",
    },
    {
      id: "b4",
      tags: ["Meeting"],
      title: "サンプル：商談サマリー",
      description:
        "미팅 노트 정리용 placeholder Gem 카드.",
      href: "#",
      icon: "📝",
    },
  ],
  research: [
    {
      id: "r1",
      tags: ["Survey"],
      title: "調査設計サンプル",
      description: "리서치 설문 초안용 더미.",
      href: "#",
      icon: "📐",
    },
    {
      id: "r2",
      tags: ["Data"],
      title: "データ要約サンプル",
      description: "표·텍스트 요약 placeholder.",
      href: "#",
      icon: "🧮",
    },
  ],
  operations: [
    {
      id: "o1",
      tags: ["Docs"],
      title: "業務ドキュメント下書き",
      description: "내부 문서 초안 샘플.",
      href: "#",
      icon: "📁",
    },
  ],
  creative: [
    {
      id: "c1",
      tags: ["Copy"],
      title: "コピーライティング支援",
      description: "크리에이티브 샘플 카드 1.",
      href: "#",
      icon: "✨",
    },
    {
      id: "c2",
      tags: ["Ideas"],
      title: "アイデア発想サポート",
      description: "크리에이티브 샘플 카드 2.",
      href: "#",
      icon: "💡",
    },
  ],
};

export function getCategory(slug: string): Category | undefined {
  return CATEGORIES.find((c) => c.slug === slug);
}

export function getGemsForCategory(slug: string): Gem[] {
  return GEMS_BY_CATEGORY[slug] ?? [];
}
