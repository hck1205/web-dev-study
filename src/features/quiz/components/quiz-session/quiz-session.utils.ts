import { shuffle } from "@/common/utils/shuffle";
import { getPostBySlug, postHref } from "@/features/posts/registry";
import type { QuizQuestion } from "../../registry";
import type { DeckItem, QuizAnswer } from "./quiz-session.type";

/** 문제 순서와 각 문제의 보기 순서를 함께 섞는다. 정답 위치를 외워서 푸는 걸 막는다. */
export const buildDeck = (questions: QuizQuestion[]): DeckItem[] =>
  shuffle(questions).map((question) => ({ question, order: shuffle(question.choices.map((_, index) => index)) }));

export const countCorrect = (answers: QuizAnswer[]) => answers.filter((answer) => answer.correct).length;

/** 문제가 나온 글 목록 (중복 없이, 처음 나온 순서) */
export const sourcePosts = (questions: QuizQuestion[]) =>
  [...new Set(questions.map((q) => q.post))]
    .map(getPostBySlug)
    .filter((post) => post !== undefined)
    .map((post) => ({ slug: post.slug, title: post.title, href: postHref(post.slug) }));
