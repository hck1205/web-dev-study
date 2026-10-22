"use client";

import { Button } from "@/common/design-system";
import { QuizPlayer } from "../quiz-player";
import { usePostQuiz } from "./post-quiz";
import { Note, Root } from "./post-quiz.styled";
import type { PostQuizProps } from "./post-quiz.type";

/** 글 끝에서 그 글의 문제만 바로 푸는 작은 퀴즈 */
export function PostQuiz(props: PostQuizProps) {
  const quiz = usePostQuiz(props);

  if (quiz.questions === null) {
    return (
      <Root>
        <Button variant="secondary" onClick={quiz.load} disabled={quiz.loading}>
          {quiz.loading ? "문제 불러오는 중" : "이 글 퀴즈 풀기"}
        </Button>
      </Root>
    );
  }

  if (quiz.empty) return <Note>이 글에는 아직 문제가 없다.</Note>;

  return (
    <Root>
      <QuizPlayer runner={quiz.runner} home={{ href: "/roadmap", label: "로드맵으로" }} />
    </Root>
  );
}
