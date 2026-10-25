import type { QuizQuestion } from "../types";

export const ML_PIPELINES_CI_CD: QuizQuestion[] = [
  {
    id: "ml-pipelines-ci-cd-1",
    post: "ml-pipelines-ci-cd",
    question:
      "후보 모델의 전체 AUC는 0.7242에서 0.7843으로 올랐지만 신규 사용자 구간 AUC는 0.7989에서 0.7398로 떨어졌다. 학습 데이터의 신규 사용자 비율은 1%였다. 가장 알맞은 판단은?",
    choices: [
      "전체 AUC가 크게 올랐으니 승격한다",
      "신규 사용자는 15%뿐이라 무시해도 된다",
      "전체 AUC가 올랐으니 구간 지표 계산은 생략해도 된다",
      "기존 사용자가 평균을 가린 것이므로 구간별 관문에서 막고, 신규 사용자 행이 빠진 데이터 문제를 고친다",
    ],
    answer: 3,
    explanation:
      "기존 사용자가 85%라 전체 평균이 신규 구간의 하락을 가렸다. 구간별 허용치를 두면 막을 수 있고, 근본 원인은 신규 사용자 비율 1%라는 데이터 문제라 데이터 검증 단계에서 잡혀야 했다.",
    anchor: "전체-auc가-올랐는데-내보내면-안-되는-모델",
  },
  {
    id: "ml-pipelines-ci-cd-2",
    post: "ml-pipelines-ci-cd",
    question:
      "승격 관문을 짤 때 후보 평가 코드가 어떤 구간 지표를 내지 않았다. 이 경우를 어떻게 처리해야 할까?",
    choices: [
      "없는 지표는 실패로 처리한다. 비교할 게 없다고 통과시키면 구간 회귀를 놓친다",
      "비교할 수 없으니 그 구간은 건너뛰고 통과시킨다",
      "운영 모델의 값을 후보 값으로 복사해 비교한다",
      "전체 AUC로 그 구간 값을 대신한다",
    ],
    answer: 0,
    explanation:
      "구간 지표가 없으면 비교가 안 돼 통과로 처리되기 쉽고, 그게 바로 구간 회귀가 새는 구멍이다. 없는 지표는 missing으로 실패시킨다.",
    anchor: "전체-auc가-올랐는데-내보내면-안-되는-모델",
  },
  {
    id: "ml-pipelines-ci-cd-3",
    post: "ml-pipelines-ci-cd",
    question:
      "이탈 모델에 '접속 안 한 날이 늘면 이탈 확률이 떨어지면 안 된다'는 pytest를 걸었더니 실패했다. AUC는 괜찮았다. 이 테스트가 잡은 것은?",
    choices: [
      "시험 세트와 학습 세트가 섞인 데이터 누수",
      "유연한 모델이 표본의 우연한 흔들림을 배워 기대한 방향과 반대로 움직이는 구간이 생긴 것",
      "모델 서버의 지연이 늘어난 것",
      "정답 라벨이 늦게 도착한 것",
    ],
    answer: 1,
    explanation:
      "행동 테스트는 평균 지표로 안 보이는 이상한 행동을 잡는다. 실습에서는 단조 제약(monotonic_cst)을 주고 다시 학습해 통과시켰고, 제약을 못 주는 모델이면 특징을 빼거나 규제를 세게 건다.",
    anchor: "행동-테스트를-pytest로-걸어-보면",
  },
  {
    id: "ml-pipelines-ci-cd-4",
    post: "ml-pipelines-ci-cd",
    question:
      "CML로 PR마다 학습 리포트를 붙이려 한다. 포크에서 온 PR에서도 데이터를 받게 하려고 pull_request_target으로 바꿔 저장소 키를 넘기면 생기는 문제는?",
    choices: [
      "dvc pull이 main 브랜치 데이터만 받는다",
      "cml comment create가 동작하지 않는다",
      "누구나 학습 코드를 고친 PR로 데이터 저장소 키와 데이터를 빼 갈 수 있다",
      "dvc metrics diff가 비교할 기준 브랜치를 찾지 못한다",
    ],
    answer: 2,
    explanation:
      "GitHub Actions는 포크 PR의 pull_request 실행에 비밀 값을 넘기지 않는다. 이를 우회하면 PR 작성자가 실행되는 코드를 정하므로 키가 새어 나간다.",
    anchor: "pr마다-학습-결과를-붙인다-cml",
  },
  {
    id: "ml-pipelines-ci-cd-5",
    post: "ml-pipelines-ci-cd",
    question: "Kubeflow Pipelines가 Airflow보다 잘 맞는 상황은?",
    choices: [
      "이미 Airflow로 ETL을 돌리고 있고 학습이 그 뒤에 붙는 단계 하나일 때",
      "지난 날짜 구간을 다시 채우는 백필이 가장 중요할 때",
      "태스크 사이에 작은 설정값만 넘기면 될 때",
      "쿠버네티스 위에서 GPU 학습 단계가 많고, 단계별 캐시와 아티팩트 계보를 남겨야 할 때",
    ],
    answer: 3,
    explanation:
      "KFP는 단계마다 컨테이너를 띄우고 데이터셋·모델 아티팩트를 넘기며 enableCache와 계보 메타데이터를 남긴다. 일정·재시도·백필이 중심이고 ETL이 이미 Airflow에 있다면 Airflow에 학습 DAG를 붙이는 편이 운영 부담이 적다.",
    anchor: "학습-파이프라인을-돌리는-곳-kubeflow-pipelines와-airflow",
  },
  {
    id: "ml-pipelines-ci-cd-6",
    post: "ml-pipelines-ci-cd",
    question:
      "매일 최신 데이터로 학습하고 같은 파이프라인에서 시험 세트도 새로 뽑아, 통과하면 자동 배포한다. 업스트림 쿼리 버그로 데이터가 망가지면 어떻게 될까?",
    choices: [
      "시험 세트도 함께 망가져 망가진 시험에서 높은 점수가 나오고, 사람 확인 없이 운영에 나갈 수 있다",
      "시험 세트가 새로 뽑히므로 버그가 자동으로 상쇄된다",
      "학습이 항상 실패하므로 운영에는 영향이 없다",
      "자동 배포는 데이터 버그와 무관하다",
    ],
    answer: 0,
    explanation:
      "학습 데이터와 시험 세트가 같은 경로에서 나오면 둘 다 같은 버그를 가진다. 사람이 검토한 고정 골든 세트로도 비교하고, 승격에는 사람 승인이나 섀도·카나리·자동 되돌리기를 겹쳐 둔다.",
    anchor: "지속-학습이-자동-배포까지-가면-위험한-이유",
  },
  {
    id: "ml-pipelines-ci-cd-7",
    post: "ml-pipelines-ci-cd",
    question: "재학습 주기를 정하는 가장 근거 있는 방법은?",
    choices: [
      "업계에서 흔히 쓰는 주기인 매일로 정한다",
      "드리프트 경보가 울릴 때만 돌린다",
      "과거 한 시점에 학습한 모델을 다음 달, 그다음 달 데이터로 평가해 성능이 떨어지는 속도를 재고 정한다",
      "GPU 비용이 가장 싼 요일에 맞춘다",
    ],
    answer: 2,
    explanation:
      "성능이 한 달에 조금 떨어지면 자주 돌릴 이유가 없고, 일주일 만에 크게 떨어지면 매일 돌려야 한다. 보통 그렇게 정한 일정을 기본으로 두고 드리프트나 성능 경보가 오면 앞당긴다.",
    anchor: "언제-다시-학습하나-일정과-드리프트",
  },
];
