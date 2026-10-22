export type { InterviewQuestion } from "./types";

/**
 * 면접 질문 전체(약 2.5MB)는 /study 복습을 시작할 때만 내려받는다.
 * 정적으로 import하면 글 페이지 번들에도 실리니 이 함수만 쓴다.
 */
export const loadInterviewQuestions = async () => (await import("./interview.generated")).INTERVIEW_QUESTIONS;
