import type { VocabEntry } from "../types";

export const WORDS_N: VocabEntry[] = [
  {
    word: "nuance",
    pos: ["noun", "verb"],
    ipa: "/ˈnuːɑːns/",
    level: "C1",
    meaning: "미묘한 차이, 뉘앙스, 섬세한 결",
    definition: "A subtle difference in meaning, expression, tone, or feeling.",
    explanation:
      "의미·말투·색·감정에서 한눈에 드러나지 않는 아주 작은 차이를 말한다. 셀 수 있는 명사로 'the nuances of the language'처럼 복수로 자주 쓰고, '섬세함' 자체를 말할 때는 'without nuance'처럼 셀 수 없는 명사로도 쓴다. 형용사 nuanced(미묘한 차이까지 고려한)는 'a nuanced view/argument'처럼 칭찬하는 말로 아주 흔하다. difference는 차이 일반이고 nuance는 알아채기 어려운 차이라는 점이 다르다. 한국어 '뉘앙스'처럼 '말투에서 풍기는 느낌'만 뜻하지는 않으니, 'I don't like his nuance'처럼 쓰면 어색하고 tone이 맞다.",
    examples: [
      {
        en: "Machine translation still struggles with the nuances of honorifics in Korean.",
        ko: "기계 번역은 여전히 한국어 높임말의 미묘한 차이를 잘 다루지 못한다.",
        note: "the nuances of + 언어·문화·관계처럼 복수형으로 쓰는 경우가 가장 흔하다.",
      },
      {
        en: "The postmortem gave a nuanced account of the outage instead of blaming a single engineer.",
        ko: "사후 분석 보고서는 엔지니어 한 명을 탓하지 않고 장애를 여러 측면에서 차분히 설명했다.",
        note: "nuanced는 '단순하게 흑백으로 나누지 않은'이라는 긍정적 평가다.",
      },
      {
        en: "Her argument lacked nuance, treating every regulation as a burden on business.",
        ko: "그녀의 주장은 섬세함이 부족해서 모든 규제를 기업의 부담으로만 취급했다.",
      },
      {
        en: "A good actor can convey a whole range of nuance with just a glance.",
        ko: "좋은 배우는 눈빛 하나로도 온갖 미묘한 감정을 전달할 수 있다.",
      },
    ],
    collocations: ["subtle nuances", "the nuances of", "a nuanced view", "lack nuance", "shades and nuances"],
    synonyms: ["subtlety", "shade", "nicety", "distinction", "refinement"],
    family: ["nuanced (adj.)"],
    confusedWith: [
      { word: "tone", note: "말투에서 풍기는 태도·기분은 tone이다. nuance는 의미나 표현 사이의 작은 차이에 초점이 있다." },
    ],
    origin: "프랑스어 nuance(색의 농담)에서 왔고, nuer(그늘지게 하다)·nue(구름, 라틴어 nubes)와 이어진다.",
    themes: ["academic", "argument", "everyday"],
  },
  {
    word: "nebulous",
    pos: ["adjective"],
    ipa: "/ˈnɛbjələs/",
    level: "C2",
    meaning: "모호한, 흐릿한, 막연한",
    definition: "Unclear, vague, or ill-defined, especially in form or meaning.",
    explanation:
      "생각·계획·개념이 구름처럼 형체가 분명하지 않아 붙잡기 어렵다는 뜻이다. vague보다 격식 있고, '그래서 실제로 무엇을 하겠다는 건지 모르겠다'는 비판의 뉘앙스가 자주 실린다. goals, concept, plan, term 같은 추상명사와 잘 어울리고, 사람에게 직접 쓰는 일은 드물다. ambiguous는 해석이 둘 이상으로 갈리는 것이고 nebulous는 애초에 윤곽이 잡히지 않은 것이라 다르다. 천문학에서는 '성운(nebula)의'라는 뜻도 남아 있다.",
    examples: [
      {
        en: "The ticket only said \"improve performance,\" which is too nebulous to estimate.",
        ko: "티켓에는 '성능 개선'이라고만 적혀 있었는데, 그건 너무 막연해서 일정을 산정할 수가 없다.",
        note: "요구사항이 구체적이지 않아 실행할 수 없다는 비판으로 쓰였다.",
      },
      {
        en: "Investors grew impatient with the startup's nebulous path to profitability.",
        ko: "투자자들은 그 스타트업의 불분명한 수익화 경로에 점점 조바심을 냈다.",
      },
      {
        en: "\"Culture fit\" remains a nebulous concept that can easily hide bias in hiring.",
        ko: "'컬처 핏'은 여전히 모호한 개념이라 채용에서 편견을 쉽게 감출 수 있다.",
        note: "concept, notion, idea처럼 추상명사와 붙는 전형적인 쓰임이다.",
      },
    ],
    collocations: ["nebulous concept", "nebulous goals", "remain nebulous", "nebulous notion"],
    synonyms: ["vague", "hazy", "ill-defined", "fuzzy", "indistinct"],
    antonyms: ["clear", "precise", "well-defined", "concrete"],
    family: ["nebulously (adv.)", "nebulousness (n.)", "nebula (n.)"],
    confusedWith: [
      { word: "ambiguous", note: "ambiguous는 뜻이 둘 이상으로 해석될 수 있는 것이고, nebulous는 윤곽 자체가 흐릿한 것이다." },
    ],
    origin: "라틴어 nebula(안개, 구름)에서 왔다. 성운(nebula)처럼 뿌옇다고 외우면 된다.",
    themes: ["academic", "argument", "business"],
  },
];
