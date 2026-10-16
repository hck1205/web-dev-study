import type { VocabEntry } from "../types";

export const WORDS_B: VocabEntry[] = [
  {
    word: "bolster",
    pos: ["verb"],
    ipa: "/ˈboʊlstər/",
    level: "C1",
    meaning: "강화하다, 북돋우다, 뒷받침하다",
    definition: "To support or strengthen something, such as confidence, an argument, or a position.",
    explanation:
      "이미 있는 것을 받쳐서 더 튼튼하게 만든다는 뜻의 타동사다. 목적어로 confidence, morale 같은 감정이나 an argument, a case 같은 주장, the economy, security 같은 체계가 자주 온다. strengthen보다 '부족한 부분을 받쳐 준다'는 느낌이 있고, 신문 기사와 비즈니스 글에서 아주 흔하다. bolster up이라고도 쓰지만 보통은 bolster만 쓴다. 명사로는 침대 위에 놓는 길쭉한 베개를 뜻한다.",
    examples: [
      {
        en: "We added end-to-end tests to bolster confidence before the big release.",
        ko: "큰 릴리스를 앞두고 확신을 높이려고 E2E 테스트를 추가했다.",
        note: "bolster confidence는 가장 흔한 조합 중 하나다. 없는 자신감을 만든다기보다 있는 것을 더 단단히 한다.",
      },
      {
        en: "The strong quarterly results bolstered the CEO's case for expanding into Asia.",
        ko: "좋은 분기 실적 덕분에 아시아 진출을 주장하는 CEO의 논리가 힘을 얻었다.",
        note: "bolster one's case/argument는 '주장을 뒷받침하다'라는 뜻으로 회의·토론에서 자주 쓴다.",
      },
      {
        en: "The central bank cut interest rates to bolster the slowing economy.",
        ko: "중앙은행은 둔화하는 경제를 떠받치려고 금리를 내렸다.",
      },
      {
        en: "A few kind words from her coach bolstered her morale before the match.",
        ko: "경기 전에 코치가 건넨 따뜻한 말 몇 마디가 그녀의 사기를 끌어올렸다.",
      },
    ],
    collocations: ["bolster confidence", "bolster morale", "bolster one's case", "bolster the economy", "bolster security"],
    synonyms: ["strengthen", "reinforce", "shore up", "boost", "buttress"],
    antonyms: ["undermine", "weaken", "erode"],
    family: ["bolster (n.)"],
    origin: "고대 영어 bolster(길쭉한 베개)에서 왔다. 베개로 받쳐 준다는 데서 '뒷받침하다'라는 뜻이 생겼다.",
    themes: ["business", "argument"],
  },
  {
    word: "burgeon",
    pos: ["verb"],
    ipa: "/ˈbɜːrdʒən/",
    level: "C2",
    meaning: "급성장하다, 빠르게 늘어나다, 싹트다",
    definition: "To begin to grow or increase rapidly; to flourish.",
    explanation:
      "새싹이 돋듯 빠르게 자라거나 늘어난다는 뜻의 자동사다. 그래서 burgeon the market처럼 목적어를 쓰면 틀린다. 실제로는 동사보다 형용사처럼 쓰는 burgeoning이 훨씬 흔하다(a burgeoning industry, burgeoning demand). 신문, 경제 기사, 학술 글에서 주로 쓰는 문어적인 말이고, grow fast나 boom보다 격식이 있다. 대개 긍정적이거나 중립적인 성장에 쓰지만 burgeoning debt처럼 우려스러운 증가에도 쓴다.",
    examples: [
      {
        en: "The burgeoning demand for GPUs has pushed cloud prices up across the industry.",
        ko: "GPU 수요가 급격히 늘면서 업계 전반에서 클라우드 가격이 올랐다.",
        note: "burgeoning + 명사 형태가 가장 흔하다. demand, market, industry와 자주 붙는다.",
      },
      {
        en: "Small coffee roasters have burgeoned in the city over the past five years.",
        ko: "지난 5년 동안 이 도시에 소규모 커피 로스터리가 우후죽순 생겨났다.",
        note: "자동사라서 주어 자체가 늘어난다. 무엇을 늘린다고 할 때는 쓸 수 없다.",
      },
      {
        en: "The report warns that burgeoning household debt could slow consumer spending.",
        ko: "보고서는 급증하는 가계 부채가 소비 지출을 둔화시킬 수 있다고 경고한다.",
      },
    ],
    collocations: ["burgeoning industry", "burgeoning demand", "burgeoning market", "burgeoning population", "burgeoning career"],
    synonyms: ["flourish", "boom", "mushroom", "proliferate", "thrive"],
    antonyms: ["dwindle", "decline", "wither", "shrink"],
    family: ["burgeoning (adj.)"],
    origin: "고대 프랑스어 burjon(싹, 봉오리)에서 왔다. 싹이 트듯 자라는 모습을 떠올리면 된다.",
    themes: ["business", "academic"],
  },
  {
    word: "belie",
    pos: ["verb"],
    ipa: "/bɪˈlaɪ/",
    level: "C2",
    forms: ["belying", "belies", "belied"],
    meaning: "(겉모습이 실제와) 다른 인상을 주다, 거짓임을 드러내다",
    definition: "To give a false impression of something, or to show that something is not true.",
    explanation:
      "두 가지 뜻이 있다. 첫째는 겉모습이 실제를 가려서 '다르게 보이게 하다'로, 주어가 겉모습이고 목적어가 숨겨진 실제다(His smile belied his anger: 웃고 있었지만 사실 화가 나 있었다). 둘째는 어떤 주장이 '틀렸음을 보여 주다'로, The data belie the claim처럼 쓴다. 주어와 목적어 방향을 거꾸로 써서 뜻이 반대가 되는 실수가 흔하다. 격식 있는 문어체 표현이고 기사, 평론, 에세이에서 주로 보인다.",
    examples: [
      {
        en: "The library's tiny API surface belies how much complexity it hides internally.",
        ko: "그 라이브러리는 API가 아주 단순해 보이지만, 내부에는 엄청난 복잡성을 숨기고 있다.",
        note: "주어(작은 API)가 겉모습, 목적어(내부 복잡성)가 실제다. 겉과 속이 다르다는 첫 번째 뜻이다.",
      },
      {
        en: "Her calm voice belied the panic she felt during the investor call.",
        ko: "그녀는 투자자 통화 내내 차분한 목소리였지만 속으로는 무척 당황하고 있었다.",
      },
      {
        en: "The latest sales figures belie the company's claim that demand is recovering.",
        ko: "최근 판매 수치는 수요가 회복되고 있다는 회사의 주장이 틀렸음을 보여 준다.",
        note: "두 번째 뜻으로, 증거가 주장을 반박할 때 쓴다. contradict와 비슷하다.",
      },
    ],
    collocations: ["belie the fact that", "belie one's age", "belie the claim", "a calm that belied"],
    synonyms: ["disguise", "mask", "misrepresent", "contradict", "disprove"],
    antonyms: ["reveal", "confirm", "attest to"],
    confusedWith: [
      { word: "betray", note: "betray는 숨기려던 진짜 감정을 '드러내 버리는' 것이고(His voice betrayed his nerves), belie는 겉모습이 진짜를 '가리는' 것이다. 방향이 반대다." },
    ],
    origin: "고대 영어 belēogan(속이다)에서 왔다. be- + lie(거짓말하다)로 '겉모습이 거짓말을 한다'고 외우면 된다.",
    themes: ["argument", "academic"],
  },
];
