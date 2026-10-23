import { shuffle } from "@/common/utils/shuffle";
import { getPostBySlug, postHref } from "@/features/posts/registry";
import type { QuizQuestion } from "@/features/quiz/registry/types";
import type { InterviewQuestion } from "../../registry";
import type { ReviewCard } from "./review-session.type";

/**
 * 글마다 카드 한 장을 만든다. 면접 질문이 있으면 그중 하나를 무작위로,
 * 세 장에 한 장은 4지선다로 바꿔 형식을 섞고, 둘 다 없으면 "이 글을 한 줄로" 카드를 낸다.
 */
export function buildCards(
  slugs: string[],
  interview: Record<string, InterviewQuestion[]>,
  questionsFor: (slug: string) => QuizQuestion[],
): ReviewCard[] {
  return shuffle(slugs).flatMap((slug, index): ReviewCard[] => {
    const post = getPostBySlug(slug);
    if (!post) return [];
    const base = { slug, title: post.title, href: postHref(slug) };
    const quizPool = questionsFor(slug);
    if (index % 3 === 2 && quizPool.length > 0) {
      const question = quizPool[Math.floor(Math.random() * quizPool.length)];
      return [{ ...base, kind: "quiz" as const, question: question.question, answer: "", quiz: { question, order: shuffle(question.choices.map((_, i) => i)) } }];
    }
    const pool = interview[slug] ?? [];
    if (pool.length > 0) {
      const picked = pool[Math.floor(Math.random() * pool.length)];
      return [{ ...base, kind: "interview" as const, question: picked.question, answer: picked.answer }];
    }
    return [{ ...base, kind: "summary" as const, question: `"${post.title}"는 무엇을 설명하는 글인가? 핵심을 한두 문장으로 떠올려 본다.`, answer: post.summary }];
  });
}

export const KIND_LABELS = { interview: "면접 질문", summary: "한 줄 요약", quiz: "4지선다" } as const;
