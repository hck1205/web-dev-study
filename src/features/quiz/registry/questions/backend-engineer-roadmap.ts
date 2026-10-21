import type { QuizQuestion } from "../types";

export const BACKEND_ENGINEER_ROADMAP: QuizQuestion[] = [
  {
    id: "backend-engineer-roadmap-1",
    post: "backend-engineer-roadmap",
    question:
      "GET /orders만 처리하는 서버에 POST /orders를 보냈더니 404가 왔다. 더 정확한 응답은?",
    choices: [
      "400 Bad Request. 요청 본문이 잘못됐다는 뜻이라서",
      "500 Internal Server Error. 서버가 처리하지 못했으니까",
      "405 Method Not Allowed와 Allow: GET 헤더. 경로는 있고 메서드만 다르니까",
      "404 그대로 둔다. 없는 처리기는 없는 자원과 같아서",
    ],
    answer: 2,
    explanation:
      "/orders라는 자원은 있고 그 자원이 POST를 받지 않을 뿐이라 405가 맞고, 허용되는 메서드를 Allow 헤더로 알려 준다. 404로 답하면 클라이언트는 주소를 잘못 썼다고 오해한다.",
    anchor: "1층-요청-한-줄을-읽는다",
  },
  {
    id: "backend-engineer-roadmap-2",
    post: "backend-engineer-roadmap",
    question:
      "로그인한 사용자 7이 GET /orders/42를 보낸다. 세션 확인은 통과했다. 남의 주문을 보는 IDOR을 막으려면 쿼리를 어떻게 써야 하나?",
    choices: [
      "WHERE id = 42 AND user_id = 7처럼 사용자 조건을 함께 건다",
      "WHERE id = 42로 꺼내고, 세션이 유효하니 그대로 돌려준다",
      "주문 번호를 UUID로 바꿨으니 id만으로 꺼내도 된다",
      "응답을 Redis에 캐시해서 DB를 덜 부르게 한다",
    ],
    answer: 0,
    explanation:
      "세션 확인은 누구인지 아는 인증까지만 한다. 이 사용자가 주문 42를 봐도 되는지는 인가라서 쿼리 조건에도 들어가야 한다. 번호를 추측하기 어렵게 바꾸는 것만으로는 인가가 되지 않는다.",
    anchor: "4층-막고-확인하고-어디서나-똑같이-띄운다",
  },
  {
    id: "backend-engineer-roadmap-3",
    post: "backend-engineer-roadmap",
    question:
      "응답 시간 [38, 1800, 35, 2100, 52, …] 20건의 p99를 구하면서 values.sort()를 비교 함수 없이 썼다. 결과는 어떻게 되나?",
    choices: [
      "정확한 p99가 나온다. 숫자 배열은 기본 정렬도 숫자 순이다",
      "에러가 난다. 숫자 배열에는 sort를 쓸 수 없다",
      "p99가 평균과 같아진다",
      "1800과 2100이 앞쪽으로 정렬돼 느린 요청이 p99에서 사라진다",
    ],
    answer: 3,
    explanation:
      "기본 sort()는 값을 문자열로 바꿔 비교하므로 \"1800\"과 \"2100\"이 \"35\"보다 앞에 온다. 그래서 본문 예에서 p99가 2100이 아니라 52로 나온다. 숫자는 (a, b) => a - b로 정렬한다.",
    anchor: "5층-요청이-끝난-뒤에도-일하는-서비스",
  },
  {
    id: "backend-engineer-roadmap-4",
    post: "backend-engineer-roadmap",
    question:
      "세션을 앱 메모리에 두던 서비스를 로드 밸런서 뒤 두 대로 늘렸더니 로그인이 자꾸 풀린다. 가장 근본적인 해결은?",
    choices: [
      "세션 쿠키의 만료 시간을 늘린다",
      "세션을 Redis 같은 공용 저장소로 옮겨 앱을 무상태로 만든다",
      "로드 밸런서 알고리즘을 라운드 로빈에서 최소 연결로 바꾼다",
      "앱 서버의 메모리를 두 배로 늘린다",
    ],
    answer: 1,
    explanation:
      "로그인한 서버와 다음 요청을 받은 서버가 달라서 세션을 못 찾는 것이다. 세션을 공용 저장소로 빼면 어느 서버로 가든 같은 세션을 본다. 분산 알고리즘을 바꿔도 요청은 여전히 다른 서버로 갈 수 있다.",
    anchor: "6층-서버-한-대로-안-될-때",
  },
  {
    id: "backend-engineer-roadmap-5",
    post: "backend-engineer-roadmap",
    question:
      "느린 요청을 추적하니 SQL 실행 시간은 5ms인데 요청 전체는 1초가 넘는다. 먼저 의심할 곳은?",
    choices: [
      "인덱스가 없어서 Seq Scan을 하고 있다",
      "HTTP/1.1이라 헤더가 커서 느리다",
      "커넥션 풀이 고갈돼 쿼리가 연결을 기다리고 있다",
      "Redis 캐시의 TTL이 너무 길다",
    ],
    answer: 2,
    explanation:
      "쿼리 자체가 빠르니 실행 계획보다는 쿼리가 시작되기 전의 대기를 본다. 풀에 빈 연결이 없으면 요청은 연결을 기다리느라 늦어지고, DB 쪽에서는 아무 이상이 보이지 않는다. 인덱스 문제라면 쿼리 시간 자체가 길게 찍힌다.",
    anchor: "위층에서-막히면-아래층을-본다",
  },
];
