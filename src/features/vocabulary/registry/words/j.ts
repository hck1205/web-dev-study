import type { VocabEntry } from "../types";

export const WORDS_J: VocabEntry[] = [
  {
    word: "juxtapose",
    pos: ["verb"],
    ipa: "/ˈdʒʌkstəpoʊz/",
    level: "C2",
    meaning: "나란히 놓다, 병치하다, 대비시키다",
    definition: "To place two or more things side by side, especially to compare or contrast them.",
    explanation:
      "두 가지를 일부러 나란히 놓아 차이나 공통점이 드러나게 한다는 뜻이다. 단순히 옆에 두는 것보다 '비교·대비 효과'를 노린다는 의도가 담겨 있다. 'juxtapose A with B'나 'A and B are juxtaposed'처럼 쓰고, 명사 juxtaposition이 동사만큼 자주 쓰인다. 미술·문학 비평, 디자인, 학술 글에서 쓰는 격식 있는 말이며, 일상 대화에서는 put side by side나 compare가 자연스럽다. 비교의 결과보다 '배치'에 초점이 있다는 점이 compare, contrast와 다르다.",
    examples: [
      {
        en: "The dashboard juxtaposes this week's error rate with last week's so regressions stand out immediately.",
        ko: "대시보드는 이번 주 오류율을 지난주 것과 나란히 보여 줘서 회귀가 바로 눈에 띈다.",
        note: "juxtapose A with B. 둘을 나란히 놓아 차이가 드러나게 한다는 의도가 담겨 있다.",
      },
      {
        en: "The exhibition juxtaposes ancient sculptures and contemporary installations.",
        ko: "그 전시는 고대 조각과 현대 설치 작품을 나란히 배치한다.",
      },
      {
        en: "In the novel, scenes of extreme wealth are juxtaposed with scenes of poverty.",
        ko: "그 소설에서는 극단적인 부의 장면과 빈곤의 장면이 대비되어 놓인다.",
        note: "문학·영화 비평에서는 수동태로 대비 효과를 설명하는 경우가 많다.",
      },
      {
        en: "The juxtaposition of the tiny café and the giant shopping mall next door always makes me smile.",
        ko: "작은 카페 바로 옆에 거대한 쇼핑몰이 붙어 있는 모습은 볼 때마다 웃음이 난다.",
      },
    ],
    collocations: ["juxtapose A with B", "be juxtaposed with", "sharply juxtaposed", "the juxtaposition of"],
    synonyms: ["contrast", "compare", "place side by side", "set against"],
    antonyms: ["separate", "isolate"],
    family: ["juxtaposition (n.)", "juxtaposed (adj.)"],
    confusedWith: [
      { word: "compare", note: "compare는 비교하는 '행위'에 초점이 있고, juxtapose는 비교되도록 나란히 '배치'하는 데 초점이 있다." },
    ],
    origin: "프랑스어 juxtaposer에서 왔다. 라틴어 juxta(바로 옆에) + 프랑스어 poser(놓다): '바로 옆에 놓다'.",
    themes: ["academic", "argument"],
  },
  {
    word: "judicious",
    pos: ["adjective"],
    ipa: "/dʒuˈdɪʃəs/",
    level: "C2",
    meaning: "분별 있는, 신중한, 현명한",
    definition: "Having, showing, or done with good judgment or sense.",
    explanation:
      "상황을 잘 따져 보고 알맞게 판단해서 하는 것을 칭찬할 때 쓴다. 특히 'judicious use of ~'처럼 무언가를 '적당히, 필요한 곳에만' 쓴다는 문맥이 매우 흔하다. wise보다 격식 있고, prudent가 위험을 피하는 조심성에 초점이 있다면 judicious는 균형 잡힌 판단력과 적절한 양 조절에 초점이 있다. judicial(사법의)과 철자가 비슷해 혼동하기 쉬우니 주의한다. 사람보다는 사용·선택·결정을 꾸미는 경우가 많다.",
    examples: [
      {
        en: "Judicious use of caching can cut response times without making the system hard to reason about.",
        ko: "캐시를 필요한 곳에만 신중하게 쓰면 시스템을 복잡하게 만들지 않고도 응답 시간을 줄일 수 있다.",
        note: "judicious use of ~는 '과하지 않게 알맞게 쓰는 것'을 뜻하는 가장 대표적인 조합이다.",
      },
      {
        en: "The committee made a judicious choice in delaying the launch until the audit was complete.",
        ko: "위원회는 감사가 끝날 때까지 출시를 미루는 현명한 선택을 했다.",
      },
      {
        en: "A judicious editor can cut a third of a manuscript without losing its voice.",
        ko: "분별 있는 편집자는 원고의 색깔을 잃지 않고도 3분의 1을 덜어 낼 수 있다.",
      },
      {
        en: "She judiciously avoided mentioning the budget during dinner with her in-laws.",
        ko: "그녀는 시댁 식구들과의 저녁 자리에서 현명하게도 예산 이야기를 꺼내지 않았다.",
        note: "부사 judiciously는 '눈치 있게, 현명하게'라는 뜻으로 일상 묘사에도 쓴다.",
      },
    ],
    collocations: ["judicious use of", "a judicious choice", "judicious selection", "judiciously applied"],
    synonyms: ["wise", "prudent", "sensible", "discerning", "shrewd"],
    antonyms: ["injudicious", "reckless", "imprudent", "rash"],
    family: ["judiciously (adv.)", "judiciousness (n.)", "injudicious (adj.)"],
    confusedWith: [
      { word: "judicial", note: "judicial은 '사법의, 재판의'(the judicial system)라는 뜻이다. judicious는 '분별 있는'으로 법정과 상관없다." },
      { word: "prudent", note: "prudent는 위험을 피하는 조심성에, judicious는 균형 잡힌 판단과 알맞은 양 조절에 초점이 있다." },
    ],
    origin: "라틴어 judicium(판단)에서 프랑스어 judicieux를 거쳐 왔다. judge(판단하다)와 같은 뿌리다.",
    themes: ["business", "argument"],
  },
];
