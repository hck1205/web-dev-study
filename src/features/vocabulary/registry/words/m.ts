import type { VocabEntry } from "../types";

export const WORDS_M: VocabEntry[] = [
  {
    word: "meticulous",
    pos: ["adjective"],
    ipa: "/məˈtɪkjələs/",
    level: "C1",
    meaning: "꼼꼼한, 세심한, 빈틈없는",
    definition: "Showing great attention to detail; very careful and precise.",
    explanation:
      "작은 부분까지 하나하나 신경 써서 빈틈없이 하는 태도를 말한다. 대체로 칭찬으로 쓰며 사람(a meticulous researcher)과 일·결과물(meticulous planning, meticulous records)을 모두 꾸민다. 'meticulous about/in ~'으로 무엇에 꼼꼼한지 밝힌다. careful보다 정도가 훨씬 강하고, 지나치게 따지는 부정적 느낌이 필요하면 fussy나 pedantic을 쓴다. thorough가 '빠짐없이 전부'에 초점이 있다면 meticulous는 '세부까지 정확하게'에 초점이 있다.",
    examples: [
      {
        en: "Her meticulous code reviews catch edge cases that the tests miss.",
        ko: "그녀의 꼼꼼한 코드 리뷰는 테스트가 놓치는 엣지 케이스를 잡아낸다.",
      },
      {
        en: "He is meticulous about documenting every change to the production database.",
        ko: "그는 운영 데이터베이스에 대한 모든 변경 사항을 빠짐없이 기록하는 데 철저하다.",
        note: "be meticulous about + 명사/동명사. 무엇에 꼼꼼한지 about이나 in으로 밝힌다.",
      },
      {
        en: "The historians reconstructed the timeline from meticulously kept shipping records.",
        ko: "역사학자들은 꼼꼼하게 작성된 선적 기록을 바탕으로 연대표를 재구성했다.",
        note: "부사 meticulously는 kept, planned, crafted 같은 과거분사 앞에 자주 온다.",
      },
      {
        en: "My grandmother is meticulous in the kitchen and measures everything to the gram.",
        ko: "할머니는 부엌에서 무척 꼼꼼하셔서 모든 재료를 그램 단위로 잰다.",
      },
    ],
    collocations: ["meticulous attention to detail", "meticulous planning", "meticulous records", "meticulous about", "meticulously researched"],
    synonyms: ["thorough", "painstaking", "scrupulous", "precise", "careful"],
    antonyms: ["careless", "sloppy", "slapdash", "negligent"],
    family: ["meticulously (adv.)", "meticulousness (n.)"],
    confusedWith: [
      { word: "thorough", note: "thorough는 빠짐없이 '전부' 다룬다는 데, meticulous는 세부까지 '정확하게' 다룬다는 데 초점이 있다." },
      { word: "pedantic", note: "pedantic은 사소한 규칙·세부를 지나치게 따지는 것을 비꼬는 말이다. meticulous는 대체로 칭찬이다." },
    ],
    origin: "라틴어 meticulosus(겁 많은)에서 왔다. metus(두려움)가 뿌리로, '실수할까 두려워 조심하는'이 '꼼꼼한'이 됐다.",
    themes: ["business", "everyday"],
  },
  {
    word: "mitigate",
    pos: ["verb"],
    ipa: "/ˈmɪtɪɡeɪt/",
    level: "C1",
    meaning: "완화하다, 경감하다, 누그러뜨리다",
    definition: "To make something bad less severe, serious, or painful.",
    explanation:
      "위험·피해·영향처럼 나쁜 것의 정도를 줄인다는 뜻이다. 보안·리스크 관리 문서에서 mitigate the risk, mitigate a vulnerability처럼 아주 자주 쓰고, 명사 mitigation도 '완화 조치'라는 업무 용어로 굳어졌다. 문제를 없애는 게 아니라 줄인다는 점에서 eliminate, prevent와 다르다. 가장 흔한 실수는 militate와 섞어 쓰는 것인데, 'mitigate against'는 틀린 표현으로 보는 사람이 많다. 법률에서 mitigating circumstances는 '정상 참작 사유'다.",
    examples: [
      {
        en: "Rate limiting mitigates the impact of a denial-of-service attack but doesn't prevent one.",
        ko: "요청 수 제한은 서비스 거부 공격의 피해를 줄여 주지만 공격 자체를 막지는 못한다.",
        note: "mitigate는 '줄이다'이고 prevent는 '막다'다. 보안 문서에서 이 차이를 분명히 쓴다.",
      },
      {
        en: "The team proposed several steps to mitigate the risk of delays.",
        ko: "팀은 일정 지연 위험을 줄이기 위한 몇 가지 조치를 제안했다.",
      },
      {
        en: "Planting trees in cities can help mitigate the effects of extreme heat.",
        ko: "도시에 나무를 심으면 폭염의 영향을 완화하는 데 도움이 된다.",
      },
      {
        en: "The judge considered his age a mitigating factor and reduced the sentence.",
        ko: "판사는 그의 나이를 정상 참작 사유로 보고 형량을 줄였다.",
        note: "mitigating factor/circumstances는 법률 문맥에서 '형을 가볍게 해 주는 사정'을 뜻한다.",
      },
    ],
    collocations: ["mitigate the risk", "mitigate the impact", "mitigate the effects of", "mitigating circumstances", "help mitigate"],
    synonyms: ["alleviate", "reduce", "lessen", "ease", "ameliorate"],
    antonyms: ["aggravate", "exacerbate", "intensify", "worsen"],
    family: ["mitigation (n.)", "mitigating (adj.)", "unmitigated (adj.)"],
    confusedWith: [
      { word: "militate", note: "militate against는 '~에 불리하게 작용하다'라는 뜻이다. mitigate는 against 없이 목적어를 바로 받는다." },
      { word: "ameliorate", note: "ameliorate는 상황 전체를 '나아지게' 하는 데, mitigate는 위험·피해의 '정도를 줄이는' 데 초점이 있다." },
    ],
    origin: "라틴어 mitigare(부드럽게 하다)에서 왔다. mitis(부드러운, 온화한)가 뿌리다.",
    themes: ["business", "tech"],
  },
  {
    word: "mundane",
    pos: ["adjective"],
    ipa: "/mʌnˈdeɪn/",
    level: "C1",
    meaning: "평범한, 일상적인, 재미없는",
    definition: "Lacking interest or excitement; ordinary and part of everyday life.",
    explanation:
      "특별할 것 없이 매일 반복되는 평범한 일을 가리키며, 그래서 '지루하고 재미없다'는 뉘앙스가 따라온다. mundane tasks, mundane details처럼 일·세부 사항과 자주 붙는다. boring보다 격식 있고, ordinary보다 '따분하다'는 평가가 더 들어 있다. 'the mundane'처럼 명사처럼 써서 '평범한 일상'을 가리키기도 한다. 원래는 '세속의, 이 세상의'라는 뜻으로 spiritual과 대비됐는데, 이 뜻은 지금은 문어적이다.",
    examples: [
      {
        en: "We automated the mundane parts of the release process so engineers can focus on the code.",
        ko: "엔지니어들이 코드에 집중할 수 있도록 릴리스 과정의 단순 반복 작업을 자동화했다.",
        note: "mundane tasks/parts는 '자동화할 만한 따분한 반복 업무'라는 맥락에서 자주 쓴다.",
      },
      {
        en: "The meeting got bogged down in mundane details about room bookings.",
        ko: "회의가 회의실 예약 같은 사소한 세부 사항에 발목이 잡혔다.",
      },
      {
        en: "The documentary finds beauty in the mundane rhythms of village life.",
        ko: "그 다큐멘터리는 시골 생활의 평범한 리듬 속에서 아름다움을 찾아낸다.",
      },
      {
        en: "Sometimes I enjoy the mundane, like folding laundry while listening to a podcast.",
        ko: "가끔은 팟캐스트를 들으며 빨래를 개는 것 같은 평범한 일상이 즐겁다.",
        note: "the mundane처럼 정관사를 붙여 '평범한 일상'이라는 명사처럼 쓸 수 있다.",
      },
    ],
    collocations: ["mundane tasks", "mundane details", "mundane chores", "the mundane", "rather mundane"],
    synonyms: ["ordinary", "routine", "humdrum", "dull", "everyday"],
    antonyms: ["extraordinary", "exciting", "remarkable", "spiritual"],
    family: ["mundanely (adv.)", "mundanity (n.)"],
    confusedWith: [
      { word: "ordinary", note: "ordinary는 '보통의'라는 중립적인 말이고, mundane은 평범해서 '따분하다'는 평가가 담겨 있다." },
    ],
    origin: "라틴어 mundanus(세상의)에서 왔다. mundus(세상)가 뿌리라 '하늘이 아닌 이 세상의 → 평범한 일상의'로 뜻이 옮겨 갔다.",
    themes: ["everyday", "business"],
  },
  {
    word: "myriad",
    pos: ["noun", "adjective"],
    ipa: "/ˈmɪriəd/",
    level: "C2",
    meaning: "무수한, 수많은, 무수히 많음",
    definition: "A countless or extremely great number of people or things.",
    explanation:
      "셀 수 없을 만큼 많다는 뜻으로 many, countless보다 문어적이고 묘사적이다. 형용사로 'myriad options'처럼 바로 명사를 꾸밀 수도 있고, 명사로 'a myriad of options'처럼 쓸 수도 있다. 'a myriad of'를 틀렸다고 보는 사람도 있지만 실제로는 둘 다 오래 쓰여 왔고 사전에서도 인정하는 표현이다. 형용사로 쓸 때는 'myriads options'처럼 myriad에 s를 붙이거나 'a myriad options'처럼 of 없이 관사를 붙이지 않는다. 기사·에세이·마케팅 글에서 자주 보이며 일상 대화에서는 lots of가 더 자연스럽다.",
    examples: [
      {
        en: "A modern web app depends on myriad third-party packages, any of which could introduce a vulnerability.",
        ko: "현대 웹 앱은 수많은 서드파티 패키지에 의존하고, 그중 어느 하나라도 취약점을 들여올 수 있다.",
        note: "형용사 용법: myriad 바로 뒤에 복수 명사가 온다. 관사를 붙이지 않는다.",
      },
      {
        en: "The new manager faced a myriad of problems in her first month.",
        ko: "새 매니저는 첫 달에 수많은 문제에 맞닥뜨렸다.",
        note: "명사 용법: a myriad of + 복수 명사. 형용사 용법과 둘 다 맞는 표현이다.",
      },
      {
        en: "Coral reefs support myriad species of fish, many of which are still undescribed.",
        ko: "산호초에는 무수한 어종이 사는데, 그중 상당수는 아직 학계에 보고되지 않았다.",
      },
      {
        en: "From the hill we could see the myriad lights of the city below.",
        ko: "언덕에서 아래 도시의 무수한 불빛이 보였다.",
      },
    ],
    collocations: ["myriad ways", "a myriad of", "myriad options", "myriad reasons", "myriads of"],
    synonyms: ["countless", "innumerable", "numerous", "multitudinous", "untold"],
    antonyms: ["few", "handful"],
    origin: "그리스어 myrias(만, 10,000)에서 왔다. 정확한 '만'이라는 수가 '셀 수 없이 많은'으로 넓어졌다.",
    themes: ["academic", "everyday"],
  },
];
