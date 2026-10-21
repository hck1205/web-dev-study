import type { QuizQuestion } from "../types";

export const SD_URL_SHORTENER_KEY_GENERATION: QuizQuestion[] = [
  {
    id: "sd-url-shortener-key-generation-1",
    post: "sd-url-shortener-key-generation",
    question: "MD5의 16진수 앞 7글자(약 2억 6,800만 칸)를 키로 썼다. 링크 100만 개는 칸의 0.4%뿐인데도 1,863번 겹친 이유는?",
    choices: [
      "MD5가 비슷한 주소에 비슷한 해시를 내기 때문이다",
      "겹칠 수 있는 짝의 수가 링크 수의 제곱에 비례해 늘어나는 생일 문제 때문이다",
      "16진수에는 대문자가 없어서 같은 글자가 반복되기 때문이다",
      "Set이 문자열을 비교할 때 앞 4글자만 보기 때문이다",
    ],
    answer: 1,
    explanation:
      "새 키 하나가 겹칠 확률은 작아도 짝의 수가 제곱으로 늘어서, 대략 키 공간의 제곱근(약 1만 6천)만큼 넣으면 충돌이 시작된다. 실험의 충돌 수도 확률로 계산한 기대값과 거의 같았다.",
    anchor: "해시를-잘라-쓰면-생기는-일",
  },
  {
    id: "sd-url-shortener-key-generation-2",
    post: "sd-url-shortener-key-generation",
    question: "\"겹치면 덧붙여 다시 해시\" 방식에서 키 공간이 90% 찼다. 새 링크 하나에 DB에 평균 몇 번 묻게 되나?",
    choices: ["약 1.1번", "약 2번", "약 10번", "약 141번"],
    answer: 2,
    explanation:
      "평균 시도 횟수는 1 ÷ (1 − 채운 비율)이라 90%면 약 10번이다. 141번은 실험에서 가장 운이 나빴던 요청이고, 그래서 해시 방식은 키 공간이 차오르지 않게 길이를 넉넉히 잡는다.",
    anchor: "겹치면-다시-해시하고-다시-묻는다",
  },
  {
    id: "sd-url-shortener-key-generation-3",
    post: "sd-url-shortener-key-generation",
    question: "블룸 필터로 충돌 확인을 하는데도 short_key에 UNIQUE 제약을 남겨 두는 이유는?",
    choices: [
      "블룸 필터는 \"없다\"를 틀리게 말할 수 있기 때문이다",
      "UNIQUE가 있어야 블룸 필터가 동작하기 때문이다",
      "두 서버가 동시에 같은 키를 고르는 경쟁은 블룸 필터로 막을 수 없기 때문이다",
      "블룸 필터는 키를 지울 수 없어서 쓸 때마다 다시 만들어야 하기 때문이다",
    ],
    answer: 2,
    explanation:
      "블룸 필터의 \"없다\"는 정확하지만, 두 서버가 같은 순간에 같은 키를 확인하면 둘 다 없다고 본다. 그래서 최종 판정은 DB의 UNIQUE 제약이 하고, 삽입이 실패하면 다시 해시한다.",
    anchor: "겹치면-다시-해시하고-다시-묻는다",
  },
  {
    id: "sd-url-shortener-key-generation-4",
    post: "sd-url-shortener-key-generation",
    question: "아래 Base62 변환 함수에 0을 넣으면 무엇이 나오나? 코드: let s = \"\"; while (n > 0) { s = A[n % 62] + s; n = Math.floor(n / 62); } return s;",
    choices: ["\"0\"", "\"\" (빈 문자열)", "\"a\"", "무한 반복"],
    answer: 1,
    explanation:
      "n이 0이면 while 조건이 처음부터 거짓이라 반복문이 한 번도 돌지 않고 빈 문자열을 돌려준다. 그래서 0은 따로 \"0\"을 돌려주게 처리해야 한다.",
    anchor: "번호를-62진수로-바꾸기",
  },
  {
    id: "sd-url-shortener-key-generation-5",
    post: "sd-url-shortener-key-generation",
    question: "번호를 Base62로 바꾸는 방식에서 키를 62^7과 서로소인 큰 수를 곱해 섞는 이유와 한계로 맞는 것은?",
    choices: [
      "충돌을 없애려는 것이고, 대신 키 길이가 늘어난다",
      "키를 암호화해 원래 번호를 아무도 모르게 하려는 것이고, 대신 되돌릴 수 없다",
      "키를 짧게 만들려는 것이고, 대신 충돌 확인이 필요해진다",
      "다음 키를 짐작하기 어렵게 하려는 것이고, 키와 번호 몇 쌍을 아는 사람은 곱한 수를 계산해 낼 수 있다",
    ],
    answer: 3,
    explanation:
      "서로소인 수를 곱하고 나머지를 쓰면 서로 다른 번호가 서로 다른 키가 되면서 연속성이 사라진다. 역원을 곱하면 되돌릴 수도 있지만 암호가 아닌 가리기라서, 정말 짐작하면 안 되는 링크는 무작위 키와 로그인·만료로 지킨다.",
    anchor: "다음-키가-보이는-문제",
  },
  {
    id: "sd-url-shortener-key-generation-6",
    post: "sd-url-shortener-key-generation",
    question: "클릭이 인기 순위에 반비례하게 몰리는 시뮬레이션에서, 링크의 1%만 담는 LRU 캐시는 클릭의 약 몇 %를 막았나?",
    choices: ["약 1%", "약 20%", "약 51%", "약 99%"],
    answer: 2,
    explanation:
      "상위 1% 링크가 클릭의 62%를 받기 때문에 작은 캐시로도 절반 넘게 막는다. 캐시를 20%로 늘려도 81%로 조금씩만 오르는데, 나머지가 드물게 눌리는 긴 꼬리이기 때문이다.",
    anchor: "인기-링크는-캐시가-받는다",
  },
  {
    id: "sd-url-shortener-key-generation-7",
    post: "sd-url-shortener-key-generation",
    question: "누군가 없는 키를 마구 찍어 보며 DB를 두드린다. 같은 없는 키가 반복될 때 본문이 쓴 방법은?",
    choices: [
      "없는 키도 빈 값으로 짧게 캐시해 두고, 빈 값이면 DB에 묻지 않고 404를 준다",
      "없는 키에는 301을 줘서 브라우저가 다시 오지 않게 한다",
      "키 길이를 늘려 찍어 보기 어렵게 한다",
      "캐시 기한을 0으로 해서 항상 DB에서 확인한다",
    ],
    answer: 0,
    explanation:
      "없다는 결과를 빈 값으로 60초쯤 저장하는 부정 캐시를 두면 같은 없는 키는 DB까지 가지 않는다. 키가 매번 다르면 블룸 필터와 IP별 요청 수 제한을 함께 쓴다.",
    anchor: "인기-링크는-캐시가-받는다",
  },
];
