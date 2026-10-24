import type { QuizQuestion } from "../types";

export const ML_EXPERIMENT_TRACKING: QuizQuestion[] = [
  {
    id: "ml-experiment-tracking-1",
    post: "ml-experiment-tracking",
    question:
      "분할 시드와 모델 시드를 모두 42로 고정했는데, 같은 데이터를 행 순서만 바꿔 넣었더니 AUC가 0.9673에서 0.9646으로 바뀌었다. 이유는?",
    choices: [
      "같은 시드는 같은 위치의 행을 고르는데, 행 순서가 바뀌면 그 위치에 다른 행이 있어 분할이 달라지기 때문이다",
      "랜덤 포레스트는 시드를 고정해도 항상 결과가 달라지기 때문이다",
      "AUC 계산이 행 순서에 따라 다른 값을 내기 때문이다",
      "시드는 분할에만 적용되고 모델에는 적용되지 않기 때문이다",
    ],
    answer: 0,
    explanation:
      "train_test_split은 시드로 위치를 고르므로 입력 순서가 달라지면 다른 행이 시험 세트에 들어간다. ORDER BY 없는 쿼리로 데이터를 뽑으면 이런 일이 생기니 데이터 스냅숏과 해시를 함께 남긴다.",
    anchor: "같은-코드-같은-데이터인데-숫자가-다르다",
  },
  {
    id: "ml-experiment-tracking-2",
    post: "ml-experiment-tracking",
    question: "DVC로 데이터를 추적할 때 Git 저장소에 실제로 커밋되는 것은?",
    choices: [
      "원본 CSV 파일 전체를 압축한 것",
      "원본 파일과 그 해시가 적힌 파일 둘 다",
      "파일의 md5 해시와 크기가 적힌 작은 .dvc 포인터 파일과, 원본을 Git에서 빼는 .gitignore",
      "아무것도 커밋되지 않고 DVC 원격 저장소에만 남는다",
    ],
    answer: 2,
    explanation:
      "dvc add는 원본을 캐시에 넣고 포인터(.dvc)와 .gitignore를 만든다. Git 커밋은 이 포인터를 통해 데이터 해시를 가리키고, 실제 데이터는 dvc push로 원격 저장소에 올라간다.",
    anchor: "큰-데이터는-git-밖에-버전은-git-안에-dvc",
  },
  {
    id: "ml-experiment-tracking-3",
    post: "ml-experiment-tracking",
    question:
      "2.2MB CSV에 한 줄만 추가해 dvc add, dvc push를 했더니 원격 저장소가 4.4MB가 됐다. 매일 조금씩 쌓이는 데이터라면 어떻게 두는 게 나을까?",
    choices: [
      "DVC 대신 Git에 직접 커밋한다",
      "날짜별 파일로 나눈 디렉터리로 관리해 바뀌지 않은 파일은 다시 저장되지 않게 한다",
      "dvc push를 하지 않고 로컬 캐시에만 둔다",
      "파일을 압축하면 DVC가 줄 단위 차이만 저장한다",
    ],
    answer: 1,
    explanation:
      "DVC는 파일 내용 해시 단위로 중복을 없애고 줄 단위 차이는 저장하지 않는다. 날짜별 파일로 나누면 바뀌지 않은 파일의 해시가 같아 다시 올라가지 않는다.",
    anchor: "큰-데이터는-git-밖에-버전은-git-안에-dvc",
  },
  {
    id: "ml-experiment-tracking-4",
    post: "ml-experiment-tracking",
    question: "Git LFS 대신 DVC를 고르는 이유로 가장 알맞은 것은?",
    choices: [
      "DVC는 Git 없이도 동작하므로 커밋이 필요 없다",
      "LFS는 큰 파일을 Git 밖에 두지 못한다",
      "DVC는 push를 따로 하지 않아도 자동으로 데이터를 올린다",
      "이미 쓰는 S3·GCS를 원격으로 쓸 수 있고, dvc.yaml로 단계 의존을 적어 바뀐 단계만 다시 돌리며 파라미터·지표 차이를 비교할 수 있다",
    ],
    answer: 3,
    explanation:
      "둘 다 포인터만 커밋하지만 LFS는 호스팅 서비스 용량에 묶이고 파이프라인 개념이 없다. 대신 DVC는 dvc push를 따로 해야 해서 잊으면 데이터 없는 커밋이 생긴다.",
    anchor: "git-lfs로는-안-되나",
  },
  {
    id: "ml-experiment-tracking-5",
    post: "ml-experiment-tracking",
    question:
      "서빙이 models:/churn-model@champion으로 모델을 불러온다. v3로 승격한 뒤 문제가 생겨 v2로 되돌리려면?",
    choices: [
      "v3를 레지스트리에서 지우면 자동으로 v2가 champion이 된다",
      "champion 별칭을 v2로 다시 옮긴다. v2 파일이 레지스트리에 남아 있어 재학습이 필요 없다",
      "v2의 실행을 다시 돌려 새 버전 v4로 등록한다",
      "서빙 코드의 모델 경로를 v2 파일 경로로 바꿔 다시 배포한다",
    ],
    answer: 1,
    explanation:
      "별칭은 한 버전을 가리키는 포인터라 승격도 되돌리기도 별칭을 옮기는 일이다. 버전은 지우지 않고 쌓아 두며, 서빙 코드는 이름만 보므로 바뀌지 않는다.",
    anchor: "운영에-나간-모델에-이름표를-붙인다-모델-레지스트리",
  },
  {
    id: "ml-experiment-tracking-6",
    post: "ml-experiment-tracking",
    question: "MLflow 레지스트리에서 Staging·Production 같은 stage 대신 alias를 쓰게 된 이유는?",
    choices: [
      "stage는 네 가지로 고정돼 A/B 테스트 중인 두 모델이나 지역별 운영 모델을 표현하기 어려웠기 때문이다",
      "alias는 여러 버전을 동시에 가리킬 수 있어 트래픽을 자동으로 나누기 때문이다",
      "stage는 모델 파일을 pickle로만 저장할 수 있었기 때문이다",
      "alias를 쓰면 서빙 서버가 재시작 없이 항상 즉시 새 모델을 읽기 때문이다",
    ],
    answer: 0,
    explanation:
      "MLflow 2.9부터 stage는 사용 중단 예고가 붙었고, 이름을 자유롭게 짓는 별칭과 태그로 바뀌었다. 별칭은 한 번에 한 버전만 가리키고, 서빙이 별칭을 언제 다시 읽느냐는 따로 정해야 한다.",
    anchor: "운영에-나간-모델에-이름표를-붙인다-모델-레지스트리",
  },
  {
    id: "ml-experiment-tracking-7",
    post: "ml-experiment-tracking",
    question:
      "팀원이 커밋을 받아 dvc pull을 했더니 데이터 파일을 찾을 수 없다는 오류가 났다. 가장 흔한 원인과 예방법은?",
    choices: [
      "포인터 파일이 손상됐다. .dvc 파일을 지우고 다시 만든다",
      "데이터가 너무 커서 Git이 거부했다. Git LFS로 옮긴다",
      "커밋한 사람이 dvc push를 잊었다. CI에서 dvc status -c로 원격과 비교하거나 훅으로 push를 강제한다",
      "DVC 캐시가 가득 찼다. 캐시를 비우면 해결된다",
    ],
    answer: 2,
    explanation:
      "Git에는 포인터만 올라가므로 dvc push를 잊으면 원격에 데이터가 없는 커밋이 생긴다. 원격과의 차이를 CI에서 검사하거나 Git 훅으로 push를 묶어 막는다.",
    anchor: "기록을-남기고도-재현이-안-되는-경우",
  },
];
