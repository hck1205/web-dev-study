import type { ReactNode } from "react";
import { QUIZ_TOPICS } from "@/features/quiz/registry";

// 문제가 있는 토픽만 정적으로 만든다. (client page.tsx에서는 export할 수 없어 layout에 둔다)
export const dynamicParams = false;

export function generateStaticParams() {
  return QUIZ_TOPICS.map(({ path }) => ({ path }));
}

export default function QuizTopicLayout({ children }: { children: ReactNode }) {
  return children;
}
