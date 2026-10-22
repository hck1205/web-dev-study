export interface PostQuizProps {
  slug: string;
  /** 한 바퀴 다 풀었을 때. 80% 이상이면 "적용함"으로 올리는 데 쓴다 */
  onDone?: (score: number, total: number) => void;
}
