import type { QuizQuestion } from "../types";

export const GITHUB_APPS_API: QuizQuestion[] = [
  {
    id: "github-apps-api-1",
    post: "github-apps-api",
    question:
      "동료의 classic PAT(repo 범위)로 돌던 사내 봇이 동료 퇴사 후 401로 멈췄다. 이 구성의 문제를 가장 정확히 말한 것은?",
    choices: [
      "토큰이 사람 계정에 묶여 수명이 그 사람과 같고, 그 사람이 접근할 수 있는 모든 저장소 권한을 봇이 함께 가졌다",
      "classic PAT는 원래 1시간마다 만료되어 갱신 코드가 필요했다",
      "PAT로는 REST API를 부를 수 없고 GraphQL만 쓸 수 있다",
      "봇이 웹훅 서명을 검증하지 않아서 토큰이 취소됐다",
    ],
    answer: 0,
    explanation:
      "PAT는 사람의 신원이라 계정이 조직에서 빠지면 함께 무효가 되고, classic의 repo 범위는 그 사람이 볼 수 있는 모든 비공개 저장소에 걸린다. GitHub App은 조직 소유이고 고른 저장소의 항목별 권한만 받아 두 문제를 함께 푼다.",
    anchor: "프로그램에게-줄-수-있는-세-가지-신원",
  },
  {
    id: "github-apps-api-2",
    post: "github-apps-api",
    question:
      "GitHub App 개인 키로 만든 JWT를 Authorization 헤더에 넣고 PR에 댓글을 달려고 하면 어떻게 되나?",
    choices: [
      "JWT는 10분짜리라 그 안에서는 모든 저장소 작업이 된다",
      "댓글이 앱을 만든 사람 이름으로 달린다",
      "JWT는 설치 토큰 발급 같은 앱 관리 API용이라 저장소 작업은 설치 토큰으로 해야 한다",
      "JWT를 쓰면 레이트 리밋이 없어져 더 빠르다",
    ],
    answer: 2,
    explanation:
      "JWT는 앱 자신을 증명해 설치 목록을 보거나 설치 토큰을 받는 데만 쓴다. 저장소를 만지는 일은 그 JWT로 받은 1시간짜리 설치 토큰으로 하고, 작성자는 앱의 [bot] 계정이 된다.",
    anchor: "github-app은-두-단계로-인증한다",
  },
  {
    id: "github-apps-api-3",
    post: "github-apps-api",
    question:
      "GitHub App JWT를 만들 때 iat를 현재 시각보다 60초 앞으로 잡는 이유는?",
    choices: [
      "토큰 수명을 11분으로 늘리기 위해서",
      "봇 서버 시계가 GitHub보다 조금 빠를 때 아직 발급되지 않은 토큰으로 거절되는 것을 피하려고",
      "설치 토큰이 60초 일찍 발급되게 하려고",
      "RS256 서명은 과거 시각만 받기 때문에",
    ],
    answer: 1,
    explanation:
      "서버 사이 시계 차이 때문에 iat가 GitHub 기준 미래가 되면 거절된다. 그래서 iat를 조금 당기고, exp는 10분 한도 안에 둔다. 실습 JWT도 iat와 exp 차이를 600초로 맞췄다.",
    anchor: "github-app은-두-단계로-인증한다",
  },
  {
    id: "github-apps-api-4",
    post: "github-apps-api",
    question:
      "봇이 저장소 목록을 5분마다 REST로 훑다가 시간당 한도를 다 쓰고 있다. 동작을 바꾸지 않고 소비를 가장 크게 줄이는 방법은?",
    choices: [
      "per_page를 1로 줄여 응답을 작게 만든다",
      "요청을 병렬 100개로 보내 빨리 끝낸다",
      "인증을 빼고 익명으로 요청한다",
      "ETag를 저장해 If-None-Match로 조건부 요청을 보내고, 바뀌지 않아 304를 받으면 한도에서 빠지게 한다",
    ],
    answer: 3,
    explanation:
      "바뀐 게 없으면 GitHub은 본문 없이 304를 주고 이 요청을 한도에 세지 않는다. 병렬 요청은 2차 한도에 걸리고, 익명 요청은 한도가 시간당 60번으로 오히려 작다. 더 근본적으로는 웹훅으로 바뀐 순간에만 일한다.",
    anchor: "rest와-graphql은-비용을-다르게-센다",
  },
  {
    id: "github-apps-api-5",
    post: "github-apps-api",
    question:
      "저장소 20개의 최근 머지 PR을 한 화면에 모으는 대시보드를 만든다. REST 대신 GraphQL이 유리한 이유는?",
    choices: [
      "GraphQL은 레이트 리밋이 전혀 없어서",
      "GraphQL은 쿼리 비용을 점수로 세서, 여러 자원을 엮는 읽기를 한 쿼리로 적은 점수에 끝낼 수 있어서",
      "GraphQL만 비공개 저장소를 읽을 수 있어서",
      "REST는 PR 목록을 주지 않아서",
    ],
    answer: 1,
    explanation:
      "REST는 요청 하나를 하나로 세니 저장소마다 따로 불러야 하지만, GraphQL은 한 쿼리에 묶고 그 비용을 점수로 계산한다. 대신 중첩을 크게 잡으면 한 쿼리가 수백 점을 먹으니 rateLimit 필드로 비용을 확인한다.",
    anchor: "rest와-graphql은-비용을-다르게-센다",
  },
  {
    id: "github-apps-api-6",
    post: "github-apps-api",
    question:
      "REST 목록을 훑는 스크립트가 page=1, 2, 3을 직접 만들어 부르다가 어떤 엔드포인트에서 첫 페이지만 반복해서 받는다. 올바른 방법은?",
    choices: [
      "Link 헤더의 rel=\"next\" 주소를 그대로 따라가고 next가 없으면 멈춘다",
      "per_page를 1000으로 올려 한 번에 받는다",
      "page 대신 offset 파라미터를 붙인다",
      "last 주소의 페이지 번호까지 반복문을 돈다",
    ],
    answer: 0,
    explanation:
      "일부 엔드포인트는 페이지 번호 대신 커서로 넘기고, 이때는 last도 없다. 주소를 만들지 않고 next를 따라가면 두 방식 모두에서 맞게 동작한다. per_page는 최대 100이다.",
    anchor: "페이지를-넘기는-방식도-다르다",
  },
  {
    id: "github-apps-api-7",
    post: "github-apps-api",
    question:
      "배포하느라 봇 서버가 5분 꺼져 있었다. 그 사이 머지된 PR의 웹훅은 어떻게 되나?",
    choices: [
      "GitHub이 지수 백오프로 몇 시간 동안 자동 재시도한다",
      "다음 웹훅에 함께 묶여서 온다",
      "실패로 기록될 뿐 자동으로 다시 오지 않으니 직접 재전송을 요청하거나 주기적 조회로 맞춰야 한다",
      "GitHub App은 웹훅을 큐에 보관했다가 서버가 살아나면 순서대로 보낸다",
    ],
    answer: 2,
    explanation:
      "GitHub은 실패한 배달을 자동으로 다시 보내지 않는다. Recent Deliveries나 API로 재전송을 요청해야 하고, 중요한 작업은 최근 상태를 주기적으로 조회해 놓친 이벤트를 맞추는 보조 작업을 둔다.",
    anchor: "웹훅을-받는-쪽에서-할-일",
  },
];
