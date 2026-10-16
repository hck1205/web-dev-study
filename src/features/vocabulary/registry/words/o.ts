import type { VocabEntry } from "../types";

export const WORDS_O: VocabEntry[] = [
  {
    word: "obsolete",
    pos: ["adjective"],
    ipa: "/ˌɑːbsəˈliːt/",
    level: "C1",
    meaning: "더 이상 쓰이지 않는, 구식이 된, 폐기된",
    definition: "No longer produced or used because something newer has replaced it; out of date.",
    explanation:
      "일반적으로는 새것이 나와서 더는 쓰지 않게 된 물건·방법·단어를 가리킨다. old-fashioned는 '유행이 지난' 정도지만 obsolete는 '쓸모가 사라졌다'는 데까지 간다. 기술 분야에서는 지원이 끝났거나 대체된 API·프로토콜·하드웨어를 말할 때 쓰고, 아직 동작하지만 곧 없앨 예정인 것은 deprecated, 쓰임이 줄어 가는 중인 것은 obsolescent로 구분한다. render ~ obsolete, make ~ obsolete(쓸모없게 만들다) 형태가 아주 흔하다. 영국 영어에서는 드물게 동사로도 쓰지만 기본은 형용사로 익혀 두면 된다.",
    examples: [
      {
        en: "Once every client upgraded to HTTP/2, the domain-sharding hack became obsolete.",
        ko: "모든 클라이언트가 HTTP/2로 넘어가자 도메인 샤딩이라는 편법은 쓸모없어졌다.",
        note: "HTTP/2의 다중화가 문제를 풀어 버려서 예전 해결책이 필요 없어졌다는 기술적 쓰임이다.",
      },
      {
        en: "The old endpoint is deprecated now and will be obsolete after the March release.",
        ko: "기존 엔드포인트는 지금 deprecated 상태이고 3월 릴리스 이후에는 완전히 폐기된다.",
        note: "deprecated(사용 중단 예고)와 obsolete(이미 대체·폐기)의 순서를 함께 보여 준다.",
      },
      {
        en: "Many fear that automation will render certain office jobs obsolete within a decade.",
        ko: "많은 사람이 자동화 때문에 10년 안에 일부 사무직이 필요 없어질까 걱정한다.",
      },
      {
        en: "My parents still keep a drawer full of obsolete chargers and cables.",
        ko: "우리 부모님은 아직도 못 쓰는 충전기와 케이블을 서랍 한가득 보관하신다.",
      },
    ],
    collocations: ["become obsolete", "render something obsolete", "make something obsolete", "obsolete technology", "largely obsolete"],
    synonyms: ["outdated", "outmoded", "defunct", "superseded", "antiquated"],
    antonyms: ["current", "up-to-date", "modern", "cutting-edge"],
    family: ["obsolescence (n.)", "obsolescent (adj.)", "obsoleteness (n.)"],
    confusedWith: [
      { word: "obsolescent", note: "obsolescent는 '구식이 되어 가는 중인' 상태이고, obsolete는 이미 쓰이지 않게 된 상태다." },
      { word: "deprecated", note: "소프트웨어에서 deprecated는 아직 동작하지만 쓰지 말라고 예고한 것이고, obsolete는 대체되어 더는 쓰지 않는 것이다." },
    ],
    origin: "라틴어 obsolescere(낡아 쓰이지 않게 되다)의 과거분사 obsoletus에서 왔다.",
    themes: ["tech", "business", "everyday"],
  },
  {
    word: "ostensibly",
    pos: ["adverb"],
    ipa: "/ɑːˈstɛnsəbli/",
    level: "C2",
    meaning: "표면상으로는, 명목상, 겉으로 내세운 바로는",
    definition: "Apparently or purportedly, but perhaps not actually.",
    explanation:
      "겉으로 내세운 이유나 모습이 그렇다는 뜻으로, 실제는 다를 수 있다는 의심이 깔려 있다. 그래서 뒤에 but, while, in reality 같은 반전이 따라오는 경우가 많다. apparently는 '보아하니 그런 것 같다'는 중립적인 추측이고, supposedly는 '남들 말로는'에 가까운데, ostensibly는 '명분상'이라는 냉소가 더 짙다. 기사·논평·비평처럼 격식 있는 글에서 주로 쓴다. 형용사 ostensible은 'the ostensible reason'처럼 명사 앞에서만 쓴다.",
    examples: [
      {
        en: "The meeting was ostensibly about the Q3 roadmap, but everyone knew it was about the layoffs.",
        ko: "회의는 명목상 3분기 로드맵 논의였지만, 다들 실제로는 구조조정 이야기라는 걸 알았다.",
        note: "겉으로 내세운 목적과 실제 목적이 다르다는 대비가 ostensibly의 전형적인 쓰임이다.",
      },
      {
        en: "The extension, ostensibly a simple ad blocker, was quietly collecting users' browsing history.",
        ko: "겉으로는 단순한 광고 차단기였던 그 확장 프로그램이 몰래 사용자의 방문 기록을 수집하고 있었다.",
        note: "삽입구로 넣어 '겉모습'을 설명하고, 뒤에서 실제 행동을 밝힌다.",
      },
      {
        en: "The law was ostensibly passed to protect consumers, yet critics say it mainly benefits large retailers.",
        ko: "그 법은 표면상 소비자 보호를 위해 통과됐지만, 비판자들은 주로 대형 유통업체에 이익이 된다고 말한다.",
      },
    ],
    collocations: ["ostensibly about", "ostensibly to", "ostensibly because", "ostensibly designed to"],
    synonyms: ["apparently", "supposedly", "seemingly", "purportedly", "nominally"],
    antonyms: ["actually", "genuinely", "really"],
    family: ["ostensible (adj.)"],
    confusedWith: [
      { word: "ostentatiously", note: "ostentatiously는 '과시하듯 요란하게'라는 뜻이다. 어원은 비슷하지만 ostensibly는 '표면상'이다." },
    ],
    origin: "라틴어 ostendere(보여 주다)에서 왔다. '보여 주는 것으로는'이라는 뜻에서 '겉으로는'이 되었다.",
    themes: ["argument", "business", "academic"],
  },
];
