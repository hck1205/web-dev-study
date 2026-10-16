/** 단어 하나의 학습 상태 (라이트너 상자 방식) */
export interface WordProgress {
  /** 0~5. 맞힐 때마다 한 칸 올라가고, 틀리면 1로 돌아간다. 높을수록 복습 간격이 길다 */
  box: number;
  /** 다음 복습일 (YYYY-MM-DD, 로컬 날짜) */
  due: string;
  correct: number;
  wrong: number;
}

/** 표제어 → 학습 상태. 한 번도 공부하지 않은 단어는 없다 */
export type VocabProgress = Record<string, WordProgress>;

export type WordStatus = "new" | "due" | "learning" | "mastered";
