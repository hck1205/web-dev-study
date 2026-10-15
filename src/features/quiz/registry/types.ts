/** 글 하나에서 나온 4지선다 문제. 글을 쓸 때마다 questions/{slug}.ts 에 함께 추가한다. */
export interface QuizQuestion {
  /** 전체에서 유일. 보통 "{slug}-{번호}" */
  id: string;
  /** 문제가 나온 글. 이 글의 토픽(과 상위 토픽) 퀴즈에 자동으로 포함된다 */
  post: string;
  question: string;
  /** 보기 2~5개. 풀 때마다 순서가 섞인다 */
  choices: string[];
  /** 정답 보기의 인덱스 (choices 기준, 0부터) */
  answer: number;
  /** 정답 공개 후 보여 줄 해설 (평서체, 2~4문장) */
  explanation: string;
  /** 글 안에서 근거가 되는 섹션의 헤딩 id (rehype-slug 규칙). 해설의 "관련 글" 링크가 이 위치로 간다 */
  anchor?: string;
}

/** 토픽별 퀴즈 요약 (퀴즈 목록 화면용) */
export interface TopicQuizSummary {
  key: string;
  path: string[];
  label: string;
  depth: number;
  count: number;
}
