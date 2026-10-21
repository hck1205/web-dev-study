import type { QuizQuestion } from "../types";

export const FASTAPI_BASICS: QuizQuestion[] = [
  {
    id: "fastapi-basics-1",
    post: "fastapi-basics",
    question: "async def 엔드포인트 안에서 time.sleep(0.5)를 부르고 요청 10개를 동시에 보냈다. 전체 시간은 대략?",
    choices: [
      "0.5초. async라서 겹쳐 돈다",
      "5초. 이벤트 루프가 sleep 동안 묶여 하나씩 처리된다",
      "0.5초. FastAPI가 자동으로 스레드 풀로 보낸다",
      "요청이 422로 거절된다",
    ],
    answer: 1,
    explanation:
      "async def 함수는 이벤트 루프 스레드에서 직접 돈다. await 없는 블로킹 호출은 루프 전체를 멈춰 요청이 한 줄로 선다. 같은 코드를 def로 쓰면 스레드 풀에서 돌아 0.56초였다.",
    anchor: "async-def에-블로킹을-넣으면-한-줄로-선다",
  },
  {
    id: "fastapi-basics-2",
    post: "fastapi-basics",
    question: "0.5초씩 걸리는 def 엔드포인트에 요청 80개를 한꺼번에 보내면 시작 시각은 어떻게 나뉘나?",
    choices: [
      "80개가 모두 동시에 시작한다",
      "4개씩 20무리로 나뉜다",
      "40개가 먼저 시작하고 나머지 40개는 0.5초 뒤에 시작한다",
      "1개씩 차례로 시작한다",
    ],
    answer: 2,
    explanation:
      "def 함수는 AnyIO 스레드 풀에서 도는데 기본 크기가 40이다. 41번째부터는 스레드가 반납될 때까지 기다린다. 4칸은 Node.js libuv 풀의 기본값이다.",
    anchor: "def도-무한히-동시에-돌지-않는다",
  },
  {
    id: "fastapi-basics-3",
    post: "fastapi-basics",
    question: "read_order(order_id, db: DB, user: User)에서 토큰 없는 요청이 오면 어떤 일이 생기나?",
    choices: [
      "인증부터 확인해서 DB는 열지 않는다",
      "DB 세션을 먼저 열고 나서 인증에 실패해 401이 나간다",
      "의존성은 병렬로 풀려서 순서가 정해져 있지 않다",
      "엔드포인트 본문까지 돈 뒤에 401이 나간다",
    ],
    answer: 1,
    explanation:
      "FastAPI는 의존성을 함수 인자 순서대로 푼다. db가 앞에 있으니 세션을 열고 나서 인증에 실패했다. user를 앞으로 옮기면 토큰이 없을 때 DB를 열지 않는다.",
    anchor: "depends는-함수-인자로-하는-주입이다",
  },
  {
    id: "fastapi-basics-4",
    post: "fastapi-basics",
    question: "기본 설정의 Pydantic 모델(qty: int)에 {\"qty\": \"2\", \"is_admin\": true}를 넣으면?",
    choices: [
      "qty가 문자열이라 422가 난다",
      "is_admin 때문에 422가 난다",
      "qty=2로 바뀌고 is_admin은 조용히 버려진다",
      "qty는 \"2\" 그대로, is_admin도 모델에 들어간다",
    ],
    answer: 2,
    explanation:
      "Pydantic v2의 기본 lax 모드는 손실 없이 바꿀 수 있는 값을 바꾸고, 모르는 필드는 무시한다. 막으려면 ConfigDict(strict=True, extra=\"forbid\")를 준다.",
    anchor: "pydantic은-기본으로-관대하다",
  },
  {
    id: "fastapi-basics-5",
    post: "fastapi-basics",
    question: "한 uvicorn 프로세스에서 순수 파이썬 CPU 계산을 하는 def 엔드포인트 4개를 동시에 돌리면?",
    choices: [
      "스레드 4개가 코어 4개를 써서 1개일 때와 비슷한 시간에 끝난다",
      "GIL 때문에 코어 하나 분량만 진행해 각각 몇 배씩 느려진다",
      "이벤트 루프가 막혀 422가 난다",
      "스레드 풀이 40이라 40배 빨라진다",
    ],
    answer: 1,
    explanation:
      "CPython의 GIL은 한 프로세스에서 파이썬 코드를 실행하는 스레드를 하나로 제한한다. 기다리는 동안에는 GIL을 놓지만 계산은 겹치지 않는다. 계산을 나누려면 --workers나 복제본으로 프로세스를 늘린다.",
    anchor: "스레드로는-계산이-빨라지지-않는다",
  },
  {
    id: "fastapi-basics-6",
    post: "fastapi-basics",
    question: "Express의 express.json()과 비교했을 때 FastAPI·uvicorn의 기본 동작으로 맞는 것은?",
    choices: [
      "JSON 본문 크기의 기본 한도가 없어서 20MB 본문도 그냥 받는다",
      "기본 100kb를 넘으면 413을 보낸다",
      "깨진 JSON에 400을 보낸다",
      "처리 안 된 예외가 나면 프로세스가 종료된다",
    ],
    answer: 0,
    explanation:
      "실험에서 20MB JSON을 200으로 받았다. 한도는 앞단 nginx나 미들웨어에서 건다. 깨진 JSON은 422이고, 처리 안 된 예외는 500으로 바뀌며 프로세스는 계속 산다.",
    anchor: "기본값이-다른-곳들",
  },
  {
    id: "fastapi-basics-7",
    post: "fastapi-basics",
    question: "uvicorn --workers 4로 띄웠는데 요청이 한 워커에 몰렸다. 이유로 가장 알맞은 것은?",
    choices: [
      "uvicorn이 라운드 로빈 대신 해시로 나눠서",
      "GIL이 프로세스 사이에서도 공유돼서",
      "워커들이 같은 소켓에서 각자 accept하고, 누가 가져갈지는 커널이 정해서",
      "워커 수가 코어 수보다 많아서",
    ],
    answer: 2,
    explanation:
      "uvicorn 워커는 공유 리슨 소켓에서 연결을 집어 가는 구조라 순간적으로 한가해 보이는 프로세스에 몰릴 수 있다. Node.js cluster는 리눅스에서 primary가 라운드 로빈으로 넘긴다.",
    anchor: "스레드로는-계산이-빨라지지-않는다",
  },
];
