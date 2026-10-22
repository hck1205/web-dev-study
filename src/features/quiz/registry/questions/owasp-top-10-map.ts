import type { QuizQuestion } from "../types";

export const OWASP_TOP_10_MAP: QuizQuestion[] = [
  {
    id: "owasp-top-10-map-1",
    post: "owasp-top-10-map",
    question: "정책 서버 호출이 실패하면 catch에서 allowed = true로 넘어가는 관리자 API가 있다. 2025년 판의 어느 칸에 가장 가깝고, 어떻게 고치나?",
    choices: [
      "A05 주입, 입력을 이스케이프한다",
      "A10 예외 상황 처리, 확인하지 못했으면 거절하도록(fail-closed) 바꾼다",
      "A04 암호화 실패, 정책 서버와 TLS로 통신한다",
      "A03 공급망, 정책 라이브러리를 업데이트한다",
    ],
    answer: 1,
    explanation:
      "오류가 나면 문이 열리는 fail-open은 2025년 판에 새로 들어온 A10의 대표 사례다. 데모에서 정책 서버를 꺼 두자 관리자 API가 200을 돌려줬고, 거절하도록 바꾸자 403이 됐다.",
    anchor: "일부러-구멍을-낸-앱을-점검해-본다",
  },
  {
    id: "owasp-top-10-map-2",
    post: "owasp-top-10-map",
    question: "2021년 판의 독립 항목이던 SSRF는 2025년 판에서 어디로 갔나?",
    choices: ["A05 주입", "A02 설정 실수", "A01 접근 제어", "A06 안전하지 않은 설계"],
    answer: 2,
    explanation:
      "2025년 판은 SSRF를 접근 제어 칸에 합쳤다. 서버를 시켜 사용자가 갈 수 없는 내부 주소에 가게 만든다는 점에서 접근 제어 실패의 한 형태로 본 것이다.",
    anchor: "열-칸은-어떻게-정해지나",
  },
  {
    id: "owasp-top-10-map-3",
    post: "owasp-top-10-map",
    question: "로그인 뒤 이동 주소를 next.startsWith(\"/\")로만 검사했다. 통과해 버리는 입력은?",
    choices: ["https://evil.com", "javascript:alert(1)", "//evil.com", "evil.com"],
    answer: 2,
    explanation:
      "//evil.com은 슬래시로 시작하지만 스킴을 생략한 외부 주소로 해석된다. URL 파서로 해석한 결과의 출처를 내 사이트와 비교해야 이런 우회 표기를 막을 수 있다.",
    anchor: "a01-접근-제어-남의-것을-열-수-있나",
  },
  {
    id: "owasp-top-10-map-4",
    post: "owasp-top-10-map",
    question: "npm audit 결과에 경고가 하나도 없다. 이것만으로 말할 수 있는 것은?",
    choices: [
      "공급망 위험이 없다",
      "모든 패키지가 서명돼 있다",
      "공개된 권고 데이터베이스에 있는 알려진 취약 버전과는 일치하지 않는다",
      "설치 스크립트가 안전하다",
    ],
    answer: 2,
    explanation:
      "npm audit은 권고와 버전을 대조할 뿐이라 권고가 나오기 전의 악성 버전이나 이름을 흉내 낸 패키지는 잡지 못한다. lockfile, npm ci, 검토된 업그레이드 같은 겹이 함께 필요하다.",
    anchor: "a03-공급망-내가-쓰지-않은-코드",
  },
  {
    id: "owasp-top-10-map-5",
    post: "owasp-top-10-map",
    question: "외부 CDN 스크립트에 integrity 속성을 달았는데 CDN 파일이 바뀌었다. 크로미움은 어떻게 하나?",
    choices: [
      "해시가 맞지 않아 실행하지 않고 콘솔에 차단 메시지를 남긴다",
      "경고만 띄우고 실행한다",
      "원래 파일을 캐시에서 꺼내 실행한다",
      "CSP 위반 보고를 보낸다",
    ],
    answer: 0,
    explanation:
      "Subresource Integrity는 받은 파일의 해시가 적어 둔 값과 다르면 실행하지 않는다. 데모에서 바뀐 파일은 실행되지 않았고 'Failed to find a valid digest' 메시지가 남았다. 무결성 확인이라 A08 칸이다.",
    anchor: "a08-무결성-실패-받은-것이-그것인가",
  },
  {
    id: "owasp-top-10-map-6",
    post: "owasp-top-10-map",
    question: "잘못된 JSON 입력에 500과 함께 스택 트레이스를 응답으로 돌려준다. 가장 알맞은 고침은?",
    choices: [
      "스택 트레이스를 base64로 인코딩해 보낸다",
      "WAF로 JSON 요청을 모두 막는다",
      "오류를 삼키고 200을 돌려준다",
      "잘못된 입력은 400으로, 처리하지 못한 오류는 추적 ID만 담은 500으로 돌려주고 자세한 내용은 서버 로그에 남긴다",
    ],
    answer: 3,
    explanation:
      "스택 트레이스에는 파일 경로와 내부 구조가 들어 있어 공격자에게 힌트가 된다. 오류를 삼키고 200을 주면 예외를 숨기는 또 다른 A10 문제가 된다.",
    anchor: "a10-예외-상황-처리-실패했을-때-어느-쪽으로-넘어지나",
  },
  {
    id: "owasp-top-10-map-7",
    post: "owasp-top-10-map",
    question: "'남의 주문이 열린다'는 제보를 받았다. 코드를 고치기 전에 먼저 할 일로 가장 알맞은 것은?",
    choices: [
      "제보자에게 답하지 않고 조용히 고친다",
      "모든 사용자의 비밀번호를 초기화한다",
      "DB를 통째로 복원한다",
      "재현해서 칸을 정하고, 로그로 이미 악용됐는지 확인하고, 앞단에서 임시로 막는다",
    ],
    answer: 3,
    explanation:
      "재현해서 범위를 정하고, 로그로 악용 여부를 확인해야 영향 받은 사용자를 알 수 있다. WAF 규칙이나 기능 플래그 같은 임시 차단은 수정할 시간을 벌어 준다.",
    anchor: "제보를-받은-날-어디서부터-보나",
  },
];
