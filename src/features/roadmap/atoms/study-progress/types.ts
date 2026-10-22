/** 글 하나의 마스터 단계. 0 안 봄 → 1 읽음 → 2 설명함(내 말로) → 3 적용(퀴즈 통과) → 4 응용(다른 글과 엮어 답함) */
export type Stage = 0 | 1 | 2 | 3 | 4;

export interface PostProgress {
  stage: Stage;
  /** 라이트너 상자 0~5. 복습에서 맞히면 올라가고 틀리면 1로 */
  box: number;
  /** 다음 복습일 (YYYY-MM-DD, 로컬 날짜) */
  due: string;
  correct: number;
  wrong: number;
  /** "내 말로 설명하기"에 쓴 글 */
  explanation?: string;
  /** 마지막으로 바뀐 날 */
  updatedAt: string;
}

export interface CheckpointResult {
  score: number;
  total: number;
  /** 80% 이상이면 통과 */
  passedAt?: string;
  updatedAt: string;
}

export interface StudyProgress {
  posts: Record<string, PostProgress>;
  checkpoints: Record<string, CheckpointResult>;
}
