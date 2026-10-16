import type { Metadata } from "next";
import type { ReactNode } from "react";
import { findWord, VOCABULARY } from "@/features/vocabulary/registry";

// 사전의 모든 단어 페이지를 빌드 시점에 정적으로 만든다. (client page.tsx에서는 export할 수 없어 layout에 둔다)
export const dynamicParams = false;

export function generateStaticParams() {
  return VOCABULARY.map(({ word }) => ({ word }));
}

export async function generateMetadata({ params }: { params: Promise<{ word: string }> }): Promise<Metadata> {
  const entry = findWord((await params).word);
  return entry ? { title: `${entry.word} 뜻과 예문`, description: `${entry.meaning}. ${entry.definition}` } : {};
}

export default function VocabularyWordLayout({ children }: { children: ReactNode }) {
  return children;
}
