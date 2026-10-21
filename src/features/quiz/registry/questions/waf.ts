import type { QuizQuestion } from "../types";

export const WAF: QuizQuestion[] = [
  {
    id: "waf-1",
    post: "waf",
    question: "보안 그룹에서 443번만 열어 두었는데도 SQL 인젝션 요청이 앱까지 닿았다. 왜 L4 방화벽으로는 이 요청을 못 막을까?",
    choices: [
      "보안 그룹은 상태를 기억하지 않아서",
      "L4 방화벽은 IP와 포트만 보고, 암호화된 HTTP 요청 안의 인자는 해석하지 않아서",
      "SQL 인젝션은 UDP로 오기 때문에",
      "443번은 방화벽 규칙의 예외 포트라서",
    ],
    answer: 1,
    explanation:
      "L3/L4 방화벽에게 443번으로 온 연결은 모두 같은 모양이다. 요청의 URI, 인자, 본문을 해석하려면 TLS가 끝난 뒤 HTTP를 읽는 WAF가 필요하다.",
    anchor: "443번이-열려-있으면-방화벽은-할-일이-끝난다",
  },
  {
    id: "waf-2",
    post: "waf",
    question: "CRS 기본 설정(요청 문턱 5)에서 WARNING(3점) 규칙 하나만 걸린 요청은 어떻게 되나?",
    choices: [
      "점수 3이 문턱 5에 못 미쳐 통과하고, 기록만 남는다",
      "규칙이 걸렸으니 바로 403으로 막힌다",
      "phase 1에서 연결이 끊긴다",
      "응답 문턱 4와 비교해 막힌다",
    ],
    answer: 0,
    explanation:
      "이상 점수 방식은 규칙마다 점수를 쌓고 phase 2 끝에서 합계를 문턱과 비교한다. WARNING 하나는 3점이라 넘어가고, 다른 규칙이 겹쳐 5점 이상이 되거나 CRITICAL이 하나 걸려야 막힌다. 응답 문턱은 응답 규칙의 점수에만 쓴다.",
    anchor: "규칙은-점수를-더하고-마지막에-한-번-판정한다",
  },
  {
    id: "waf-3",
    post: "waf",
    question: "WAF를 DetectionOnly로 일주일 돌린 뒤 nginx 에러 로그가 비어 있어서 차단 모드로 바꿨더니 정상 사용자가 막혔다. 무엇을 놓쳤을까?",
    choices: [
      "탐지 전용 모드에서는 규칙이 아예 돌지 않는다",
      "에러 로그는 하루가 지나면 지워진다",
      "탐지 모드는 GET 요청만 검사한다",
      "탐지 모드의 판정 기록은 막지 않았으니 에러 로그가 아니라 감사 로그에 Warning으로 남는다",
    ],
    answer: 3,
    explanation:
      "DetectionOnly에서도 규칙은 다 돌고 949110까지 판정하지만, 막지 않았으니 error 레벨 로그가 없다. '막았을' 요청은 감사 로그나 클라우드 WAF의 Count 기록에서 모아 오탐을 정리해야 한다.",
    anchor: "막기-전에-먼저-세기만-한다",
  },
  {
    id: "waf-4",
    post: "waf",
    question: "댓글 본문이 942360 규칙에 오탐으로 걸린다. 가장 알맞은 조치는?",
    choices: [
      "SecRuleRemoveById 942360으로 규칙을 끈다",
      "SecRuleEngine을 Off로 바꾼다",
      "댓글 경로에서 ARGS:body만 SQLi 태그 규칙의 검사 대상에서 빼고, XSS와 다른 인자 검사는 남긴다",
      "문턱값을 100으로 올린다",
    ],
    answer: 2,
    explanation:
      "규칙을 끄거나 문턱을 크게 올리면 사이트 전체의 보호가 함께 사라진다. 경로, 인자, 규칙을 좁힌 예외를 걸고, 같은 경로의 XSS나 다른 인자의 SQLi가 여전히 막히는지 확인한다.",
    anchor: "오탐은-규칙을-끄지-말고-과녁을-좁힌다",
  },
  {
    id: "waf-5",
    post: "waf",
    question: "ModSecurity v3 앞단을 폼 요청으로 테스트할 때는 SQLi가 잘 막혔는데, JSON API로 같은 값을 보내자 통과했다. 원인으로 가장 그럴듯한 것은?",
    choices: [
      "JSON 본문 처리기(requestBodyProcessor=JSON)를 켜는 규칙이 없어 JSON 필드가 인자로 풀리지 않았다",
      "CRS는 JSON 안의 문자열을 검사하지 않도록 설계됐다",
      "JSON 요청은 phase 1에서 끝나기 때문에",
      "Content-Length가 없어서 본문을 버렸다",
    ],
    answer: 0,
    explanation:
      "Content-Type이 application/json일 때 JSON 처리기를 지정하는 규칙(권장 설정의 200001)이 있어야 ARGS:json.id 같은 인자가 생긴다. WAF가 본문을 앱과 다르게 해석하면 그 차이가 우회 통로가 된다.",
    anchor: "json-본문은-따로-켜야-읽는다",
  },
  {
    id: "waf-6",
    post: "waf",
    question: "CDN에 관리형 WAF를 붙였는데 WAF 로그에 없는 공격 요청이 오리진 로그에 찍힌다. 먼저 확인할 것은?",
    choices: [
      "CDN 캐시 TTL",
      "오리진이 CDN 대역이 아닌 곳에서 오는 직접 연결도 받고 있는지",
      "앱의 세션 만료 시간",
      "WAF 규칙 그룹의 우선순위 숫자",
    ],
    answer: 1,
    explanation:
      "엣지 WAF는 엣지를 지나는 요청만 본다. 오리진 IP가 새어 직접 들어오면 WAF를 건너뛰므로, 오리진 보안 그룹을 CDN 대역만 허용하거나 비밀 헤더·mTLS로 엣지를 거친 요청만 받게 한다.",
    anchor: "어디에-세울까-엣지-프록시-앱-안",
  },
];
