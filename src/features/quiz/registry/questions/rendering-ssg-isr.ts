import type { QuizQuestion } from "../types";

export const RENDERING_SSG_ISR: QuizQuestion[] = [
  {
    id: "rendering-ssg-isr-1",
    post: "rendering-ssg-isr",
    question: "revalidate = 10인 페이지가 만들어진 지 40초 동안 아무 요청도 없다가 요청이 하나 왔다. 이 요청은 무엇을 받나?",
    choices: [
      "10초마다 미리 다시 만들어 둔 최신 페이지",
      "렌더링을 기다린 뒤 새 페이지",
      "40초 전에 만든 옛 페이지. 재생성은 이 요청을 계기로 뒤에서 시작된다",
      "404",
    ],
    answer: 2,
    explanation:
      "revalidate는 '10초마다 다시 만든다'가 아니라 '10초가 지난 뒤 요청이 오면 다시 만든다'이다. 만료 뒤 첫 요청은 STALE로 옛 페이지를 즉시 받고 재생성을 깨운다. 요청이 없으면 페이지는 계속 낡은 채로 있다.",
    anchor: "시간이-지나면-다시-만든다",
  },
  {
    id: "rendering-ssg-isr-2",
    post: "rendering-ssg-isr",
    question: "가격을 바꾸고 revalidatePath('/products/1')을 부른 직후 첫 요청의 결과는? (Next.js 16 실측)",
    choices: [
      "STALE로 옛 가격을 받는다",
      "MISS로 렌더링을 기다린 뒤 새 가격을 받는다",
      "HIT로 옛 가격을 받는다",
      "모든 인스턴스에서 즉시 새 페이지가 미리 만들어져 HIT로 받는다",
    ],
    answer: 1,
    explanation:
      "revalidatePath는 캐시를 무효로 표시만 하고, 다시 만드는 건 다음 요청 때 한다. 그 요청은 옛 페이지를 받지 않고 546ms를 기다려 새 가격을 받았다. 다른 인스턴스의 캐시는 건드리지 않는다.",
    anchor: "저장하는-순간-바로-갱신하기",
  },
  {
    id: "rendering-ssg-isr-3",
    post: "rendering-ssg-isr",
    question: "Next.js 16의 revalidateTag(tag, \"max\")와 revalidateTag(tag, { expire: 0 })의 차이는?",
    choices: [
      "\"max\"는 다음 요청에 옛 사본을 주며 뒤에서 갱신하고, expire: 0은 옛 사본을 버려 다음 요청이 기다린다",
      "\"max\"는 1년 동안 갱신을 막고, expire: 0은 즉시 모든 페이지를 다시 만든다",
      "둘 다 같고 두 번째 인자는 무시된다",
      "\"max\"는 서버 액션에서만 쓸 수 있다",
    ],
    answer: 0,
    explanation:
      "두 번째 인자는 옛 사본을 얼마나 더 줄지 정한다. 실측에서 \"max\"는 STALE 다음 HIT, expire: 0은 MISS(528ms)였다. 늦어도 되는 내용은 \"max\", 틀리면 안 되는 가격은 expire: 0을 고른다.",
    anchor: "저장하는-순간-바로-갱신하기",
  },
  {
    id: "rendering-ssg-isr-4",
    post: "rendering-ssg-isr",
    question: "next start 두 대 앞에 로드 밸런서를 두고 기본 캐시를 쓴다. 갱신 요청이 A로만 갔다면?",
    choices: [
      "A와 B 모두 갱신된다",
      "B만 갱신된다",
      "A만 갱신되어 사용자는 새로고침마다 새 값과 옛 값을 오가게 된다",
      "두 인스턴스 모두 500을 낸다",
    ],
    answer: 2,
    explanation:
      "기본 캐시는 인스턴스마다 파일 시스템과 메모리에 따로 있다. 실측에서 B는 계속 옛 가격을 줬다. 공유 캐시 핸들러를 두거나 모든 인스턴스에 갱신을 보내야 한다.",
    anchor: "서버가-두-대면-한-대만-갱신된다",
  },
  {
    id: "rendering-ssg-isr-5",
    post: "rendering-ssg-isr",
    question: "ISR 페이지에서 상품 API 실패를 try/catch로 잡아 '가격 정보를 불러오지 못했습니다'를 그렸다. 무엇이 문제인가?",
    choices: [
      "그 오류 화면이 정상 결과로 캐시되어 다음 갱신 때까지 모두에게 나간다",
      "Next.js가 빌드를 멈춘다",
      "페이지가 동적 렌더링으로 바뀐다",
      "문제없다. Next.js가 자동으로 마지막 정상 페이지를 쓴다",
    ],
    answer: 0,
    explanation:
      "재생성 중 예외가 던져지면 마지막으로 성공한 페이지가 그대로 나간다. 하지만 오류를 잡아 화면을 그리면 그건 성공한 렌더링이라 캐시에 들어간다. ISR 페이지에서는 조회 실패를 잡지 말고 던진다.",
    anchor: "다시-만들다-실패하면",
  },
  {
    id: "rendering-ssg-isr-6",
    post: "rendering-ssg-isr",
    question: "revalidate = 10인 페이지에 Next.js가 붙인 Cache-Control: s-maxage=10, stale-while-revalidate=31535990의 뜻은?",
    choices: [
      "브라우저가 10초 동안 캐시하고 그 뒤 1년 동안 서버에 묻지 않는다",
      "공유 캐시가 10초 동안 신선하게 쓰고, 그 뒤로는 옛 사본을 주면서 뒤에서 새로 받아 온다",
      "10초 뒤 캐시를 지우고 1년 동안 저장하지 않는다",
      "CDN만 1년 동안 캐시하고 Next.js는 캐시하지 않는다",
    ],
    answer: 1,
    explanation:
      "s-maxage는 CDN 같은 공유 캐시만 쓰는 신선한 시간이고 브라우저는 무시한다. stale-while-revalidate는 만료 뒤 옛 사본을 주며 재검증하라는 뜻이라, CDN과 Next.js 캐시가 각자 한 번씩 낡을 수 있다.",
    anchor: "응답-헤더에-적힌-약속",
  },
];
