import type { QuizQuestion } from "../types";

export const JENKINS_PIPELINE_BASICS: QuizQuestion[] = [
  {
    id: "jenkins-pipeline-basics-1",
    post: "jenkins-pipeline-basics",
    question: "PR 빌드가 실패도 성공도 하지 않고 대기열에 머물며 \"There are no nodes with the label ‘docker’\"가 보인다. 먼저 볼 곳은?",
    choices: [
      "Jenkinsfile의 stage 이름 오타",
      "docker 레이블을 가진 에이전트가 온라인인지와 executor가 비었는지",
      "GitHub 브랜치 보호 규칙의 필수 리뷰어 수",
      "shared library의 태그 버전",
    ],
    answer: 1,
    explanation:
      "잡은 레이블로 에이전트를 고르므로, 맞는 에이전트가 없거나 전부 오프라인이면 빌드는 실패하지 않고 기다리기만 한다. 디스크 부족으로 에이전트가 스스로 오프라인이 된 경우가 흔하다. Jenkinsfile 오타라면 대기열이 아니라 실행 중에 실패한다.",
    anchor: "일을-나눠-주는-쪽과-돌리는-쪽",
  },
  {
    id: "jenkins-pipeline-basics-2",
    post: "jenkins-pipeline-basics",
    question: "post 블록에 failure, always, cleanup을 이 순서로 적었다. 빌드가 실패하면 어떤 순서로 실행되나?",
    choices: [
      "적은 순서대로 failure → always → cleanup",
      "always → failure → cleanup",
      "cleanup → always → failure",
      "failure만 실행되고 always와 cleanup은 성공일 때만 실행된다",
    ],
    answer: 1,
    explanation:
      "post 조건은 적은 순서가 아니라 정해진 순서(always, changed, fixed, regression, aborted, failure, success, unstable, unsuccessful, cleanup)로 평가된다. cleanup은 언제나 맨 끝이라 작업 공간 지우기를 여기에 둔다.",
    anchor: "병렬-단계와-post가-결과를-정하는-순서",
  },
  {
    id: "jenkins-pipeline-basics-3",
    post: "jenkins-pipeline-basics",
    question: "새로 만든 feature 브랜치의 첫 빌드에서 src/를 고쳤는데 when { changeset 'src/**' } 단계가 건너뛰어졌다. 이유는?",
    choices: [
      "changeset은 main 브랜치에서만 동작한다",
      "패턴의 **가 하위 폴더를 포함하지 않는다",
      "변경 목록을 이전 빌드와 비교해 만드는데 첫 빌드에는 비교할 빌드가 없어 목록이 비어 있다",
      "beforeAgent true를 쓰지 않아서 조건이 평가되지 않았다",
    ],
    answer: 2,
    explanation:
      "changeset은 이 잡의 이전 빌드 이후 들어온 커밋으로 변경 목록을 만든다. 첫 빌드는 목록이 비어 있어 조건이 거짓이 된다. PR에서 대상 브랜치와의 차이가 필요하면 git diff로 직접 판단하는 편이 확실하다.",
    anchor: "단계를-건너뛰는-조건",
  },
  {
    id: "jenkins-pipeline-basics-4",
    post: "jenkins-pipeline-basics",
    question: "빌드는 success로 끝났는데 PR의 필수 상태 체크가 여전히 \"Waiting for status to be reported\"다. 가장 그럴듯한 원인은?",
    choices: [
      "PR 빌드 전략을 바꿔 상태 이름(pr-head/pr-merge)이 브랜치 보호 규칙의 필수 체크 이름과 달라졌다",
      "에이전트의 executor가 0개다",
      "웹훅이 Jenkins에 도착하지 않았다",
      "withCredentials가 비밀값을 가렸다",
    ],
    answer: 0,
    explanation:
      "빌드가 돌고 성공했다면 웹훅과 에이전트는 문제가 아니다. 필수 체크는 이름으로 결과를 기다리므로, 다른 이름으로 success가 붙으면 옛 이름은 계속 대기 상태로 남는다.",
    anchor: "브랜치마다-잡이-생기는-multibranch-pipeline",
  },
  {
    id: "jenkins-pipeline-basics-5",
    post: "jenkins-pipeline-basics",
    question: "sh \"curl -H 'Authorization: Bearer ${TOKEN}' ...\"처럼 큰따옴표로 비밀값을 넘기면 무엇이 문제인가?",
    choices: [
      "셸이 환경 변수를 읽지 못해 빈 값이 넘어간다",
      "Jenkins가 빌드를 바로 실패시킨다",
      "작은따옴표보다 실행이 느리다",
      "Groovy가 값을 먼저 끼워 넣어 비밀값이 명령 문자열에 박히고 프로세스 목록 등에 노출될 수 있다",
    ],
    answer: 3,
    explanation:
      "큰따옴표 안의 ${TOKEN}은 Groovy가 먼저 치환해 명령 문자열 자체에 비밀값을 넣는다. Jenkins는 이때 경고를 남긴다. 작은따옴표로 쓰면 명령에는 $TOKEN이라는 글자만 있고 셸이 환경 변수로 값을 읽는다.",
    anchor: "비밀값은-필요한-단계에서만-꺼낸다",
  },
  {
    id: "jenkins-pipeline-basics-6",
    post: "jenkins-pipeline-basics",
    question: "서비스 스무 개가 @Library('ci-lib@main')으로 shared library를 쓰고 있다. 어떤 위험이 있나?",
    choices: [
      "라이브러리가 샌드박스 안에서만 돌아서 sh를 쓸 수 없다",
      "라이브러리를 고친 순간 모든 서비스의 다음 빌드가 한꺼번에 바뀌어, 실수 하나가 전부를 깨고 재현도 어려워진다",
      "main 브랜치는 Jenkins가 읽지 못한다",
      "라이브러리의 vars 폴더가 무시된다",
    ],
    answer: 1,
    explanation:
      "브랜치로 걸면 라이브러리 변경이 바로 모든 빌드에 퍼진다. 태그로 버전을 고정하고 서비스 하나에서 먼저 올려 본 뒤 넓힌다.",
    anchor: "여러-저장소가-같은-단계를-쓸-때",
  },
  {
    id: "jenkins-pipeline-basics-7",
    post: "jenkins-pipeline-basics",
    question: "빌드 사이에 정규식 Matcher 객체를 변수로 들고 있다가 java.io.NotSerializableException이 났다. 왜인가?",
    choices: [
      "파이프라인이 재시작 후 이어 돌 수 있게 진행 상태를 저장하는데, 그 객체는 저장할 수 없어서",
      "에이전트의 Java 버전이 컨트롤러와 달라서",
      "샌드박스가 정규식 사용을 막아서",
      "stash로 넘긴 파일이 너무 커서",
    ],
    answer: 0,
    explanation:
      "파이프라인은 CPS 방식으로 진행 상태를 계속 직렬화해 저장한다. 직렬화할 수 없는 객체를 단계 사이에 들고 있으면 이 예외가 난다. @NonCPS 함수 안에서 계산을 끝내고 단순한 값만 돌려주면 된다.",
    anchor: "빌드가-안-돌거나-이상하게-돌-때",
  },
];
