import type { QuizQuestion } from "../types";

export const DATA_ORCHESTRATORS_COMPARISON: QuizQuestion[] = [
  {
    id: "data-orchestrators-comparison-1",
    post: "data-orchestrators-comparison",
    question: "Prefect 플로에서 처리할 날짜를 date.today() - 1일로 고르면 생길 수 있는 문제는?",
    choices: [
      "Prefect가 date 모듈을 막아서 오류가 난다",
      "재시도할 때마다 날짜가 하루씩 늘어난다",
      "예약 실행이 장애로 다음 날 돌면 원래 맡았어야 할 날짜가 아닌 다른 날짜를 처리한다",
      "임시 서버가 날짜를 UTC로 바꿔 항상 하루 앞선다",
    ],
    answer: 2,
    explanation:
      "Prefect에는 Airflow의 데이터 구간 같은 '이 실행이 맡은 기간'이 기본으로 묶여 있지 않다. 현재 시각으로 날짜를 고르면 실행이 밀린 날 엉뚱한 날짜를 처리하므로, scheduled_start_time이나 명시적인 날짜 파라미터로 정해야 한다.",
    anchor: "prefect-파이썬-함수에-장식만-붙인다",
  },
  {
    id: "data-orchestrators-comparison-2",
    post: "data-orchestrators-comparison",
    question: "실험에서 Dagster로 ad_cost_daily의 21일 파티션만 머티리얼라이즈했더니 실패했다. 이유는?",
    choices: [
      "위쪽 자산 raw_clicks의 21일 칸이 아직 없어서 IO 매니저가 읽을 값이 없었다",
      "파티션 키 형식이 틀려서 날짜를 해석하지 못했다",
      "자산 검사 cost_not_negative가 먼저 실패했다",
      "DuckDB 파일이 다른 프로세스에 잠겨 있었다",
    ],
    answer: 0,
    explanation:
      "raw_clicks가 반환한 값은 IO 매니저가 DAGSTER_HOME/storage 아래에 저장하고 다음 자산이 거기서 읽는다. 21일 칸이 없으니 FileNotFoundError가 났고, 두 자산을 함께 고르자 성공했다. 자산 검사는 자산이 실패해 실행조차 되지 않았다.",
    anchor: "dagster-만들-결과물을-먼저-적는다",
  },
  {
    id: "data-orchestrators-comparison-3",
    post: "data-orchestrators-comparison",
    question: "원본 20일 데이터가 늦게 고쳐졌을 때, 자산 중심 모델이 태스크 중심 모델보다 유리한 점은?",
    choices: [
      "20일을 포함한 전체 기간을 자동으로 다시 돌린다",
      "위쪽 칸이 아래쪽 칸보다 최근에 바뀐 것을 알고 오래된 20일 칸만 골라 다시 만들 수 있다",
      "원본이 고쳐지면 아래쪽 자산을 자동으로 지운다",
      "실행 기록을 지우고 처음부터 다시 쌓는다",
    ],
    answer: 1,
    explanation:
      "자산 모델은 파티션마다 언제 만들어졌는지를 알아서 위쪽보다 오래된 아래쪽 칸을 계산할 수 있다. 태스크 중심 모델에서는 영향받는 하위 작업과 날짜를 사람이 찾아 백필해야 하고, 범위에 들어간 성공한 날짜도 다시 돈다.",
    anchor: "자산-중심이면-백필이-빈칸-채우기가-된다",
  },
  {
    id: "data-orchestrators-comparison-4",
    post: "data-orchestrators-comparison",
    question: "Luigi로 AdCostDaily를 두 번째 실행했을 때 아무 태스크도 돌지 않았다. 이 방식의 한계는?",
    choices: [
      "중앙 스케줄러가 없으면 아예 실행할 수 없다",
      "태스크가 실패하면 결과 파일이 반쯤 쓰인 채 남는다",
      "같은 태스크가 동시에 두 번 돌 수 있다",
      "결과 파일의 존재만 보므로 원본이 고쳐져도 다시 돌지 않아 사람이 파일을 지워야 한다",
    ],
    answer: 3,
    explanation:
      "Luigi는 output() 파일이 있으면 완료로 본다. 신선도를 모르니 원본이 바뀌어도 건너뛴다. LocalTarget은 임시 파일에 쓰고 이름을 바꿔 반쯤 쓰인 파일을 막고, --local-scheduler로도 실행은 된다.",
    anchor: "luigi가-먼저-했던-것",
  },
  {
    id: "data-orchestrators-comparison-5",
    post: "data-orchestrators-comparison",
    question: "AWS Glue와 GCP Dataflow를 설명한 것으로 가장 알맞은 것은?",
    choices: [
      "둘 다 관리형 Airflow라서 DAG를 그대로 올릴 수 있다",
      "Glue는 서버리스 Spark, Dataflow는 관리형 Beam 처리 엔진이라 일정과 의존은 보통 다른 오케스트레이터가 맡는다",
      "Glue는 스트리밍 전용, Dataflow는 배치 전용이다",
      "둘 다 화면에서 끌어다 놓는 방식으로만 파이프라인을 만든다",
    ],
    answer: 1,
    explanation:
      "Glue와 Dataflow는 계산을 대신하는 처리 엔진 칸에 있다. 매일 언제 무엇을 돌릴지는 MWAA, Cloud Composer, Step Functions 같은 오케스트레이터가 정하는 구조가 흔하다. 관리형 Airflow는 MWAA와 Cloud Composer다.",
    anchor: "클라우드가-대신-돌려-주는-것들",
  },
  {
    id: "data-orchestrators-comparison-6",
    post: "data-orchestrators-comparison",
    question: "작은 작업 수백 개를 각각 Glue 작업으로 돌리는 구성이 비싸지는 이유와 대응으로 알맞은 것은?",
    choices: [
      "작업마다 최소 청구와 기동 시간이 붙으니 작업을 묶거나 가벼운 실행 방식을 쓴다",
      "Glue는 동시에 하나만 돌 수 있으니 작업을 더 잘게 쪼갠다",
      "Glue는 실행 횟수가 아니라 저장 용량으로 청구하니 데이터를 지운다",
      "DPU를 최대로 올리면 작업이 빨리 끝나 항상 더 싸진다",
    ],
    answer: 0,
    explanation:
      "Glue 2.0 이후 Spark 작업은 초 단위 청구지만 최소 1분이 붙고, 작업마다 기동 시간도 든다. 작은 작업이 많으면 이 고정비가 쌓이므로 하나로 묶거나 Python shell 작업, 컨테이너처럼 가벼운 방식으로 돌린다.",
    anchor: "관리형으로-갈-때-잃는-것",
  },
];
