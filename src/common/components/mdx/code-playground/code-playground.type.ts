export type PlaygroundLanguage = "javascript" | "typescript";

export interface TestCase {
  /** 함수에 펼쳐서 넘길 인자 목록. 예) [[2, 7, 11, 15], 9] */
  args: unknown[];
  expected: unknown;
  /** 결과 목록에 보일 이름. 없으면 인자를 그대로 보여 준다 */
  label?: string;
  /** "unordered": 배열 순서를 무시하고 비교한다 (정답이 여러 순서로 나올 수 있을 때) */
  compare?: "exact" | "unordered";
}

export interface CodePlaygroundProps {
  initialCode: string;
  language?: PlaygroundLanguage;
  /** tests를 돌릴 함수 이름. 없으면 코드만 실행하고 console 출력을 보여 준다 */
  functionName?: string;
  tests?: TestCase[];
  /** "풀이 보기"로 바꿔 넣을 코드 */
  solution?: string;
  caption?: string;
  /** 무한 루프를 끊는 시간 (ms). 기본 2000 */
  timeoutMs?: number;
}

export interface TestResult {
  label: string;
  expected: string;
  actual?: string;
  error?: string;
  pass: boolean;
  ms: number;
}

export type RunResult =
  | { status: "done"; tests: TestResult[]; logs: string[]; ms: number }
  | { status: "error"; message: string; logs: string[] }
  | { status: "timeout"; logs: string[] };
