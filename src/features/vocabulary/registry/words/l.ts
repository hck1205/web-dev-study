import type { VocabEntry } from "../types";

export const WORDS_L: VocabEntry[] = [
  {
    word: "lucid",
    pos: ["adjective"],
    ipa: "/ˈluːsɪd/",
    level: "C2",
    meaning: "명쾌한, 알기 쉬운, 정신이 맑은",
    definition: "Expressed clearly and easy to understand; also, able to think clearly.",
    explanation:
      "글이나 설명이 군더더기 없이 또렷해서 이해하기 쉬울 때 쓴다. clear보다 격식 있고 칭찬의 느낌이 강해 서평·추천사·리뷰에서 자주 보인다. 사람에게 쓰면 '(아프거나 혼란스러운 와중에도) 정신이 또렷한'이라는 뜻이 되는데, 환자가 의식이 또렷한 상태를 말할 때 흔하다. lucid dream(자각몽)이라는 고정 표현도 있다. 비슷한 coherent는 앞뒤 논리가 맞는다는 데, lucid는 읽는 사람이 쉽게 이해한다는 데 초점이 있다.",
    examples: [
      {
        en: "The RFC gives a lucid explanation of why the protocol needs a handshake.",
        ko: "그 RFC는 프로토콜에 왜 핸드셰이크가 필요한지 명쾌하게 설명한다.",
        note: "lucid explanation/account는 설명이 이해하기 쉽다고 칭찬하는 대표적인 조합이다.",
      },
      {
        en: "Her presentation was lucid and well organized, so the board approved the budget quickly.",
        ko: "그녀의 발표가 명쾌하고 잘 정리되어 있어서 이사회는 예산을 금방 승인했다.",
      },
      {
        en: "Despite the high fever, the patient remained lucid and answered every question.",
        ko: "고열에도 환자는 정신이 또렷해서 모든 질문에 답했다.",
        note: "사람에게 쓰면 '의식·정신이 또렷한'이라는 뜻이다. 의료 문맥에서 자주 쓴다.",
      },
      {
        en: "I sometimes have lucid dreams where I know I'm dreaming.",
        ko: "나는 가끔 꿈인 걸 알면서 꾸는 자각몽을 꾼다.",
      },
    ],
    collocations: ["lucid explanation", "lucid account", "lucid prose", "remain lucid", "lucid dream"],
    synonyms: ["clear", "intelligible", "articulate", "coherent", "comprehensible"],
    antonyms: ["confusing", "muddled", "obscure", "incoherent"],
    family: ["lucidity (n.)", "lucidly (adv.)"],
    confusedWith: [
      { word: "lurid", note: "lurid는 '선정적인, 끔찍하게 자극적인'(lurid details)이라는 뜻으로 철자가 한 글자만 다르다." },
    ],
    origin: "라틴어 lucidus(빛나는, 밝은)에서 왔다. lux(빛)와 같은 뿌리로, '빛이 비쳐 잘 보이는'이 '명쾌한'이 됐다.",
    themes: ["academic", "argument"],
  },
  {
    word: "lucrative",
    pos: ["adjective"],
    ipa: "/ˈluːkrətɪv/",
    level: "C1",
    meaning: "수익성이 좋은, 돈벌이가 되는",
    definition: "Producing a great deal of profit or money.",
    explanation:
      "돈을 많이 벌 수 있는 일·사업·계약을 말한다. profitable과 뜻이 겹치지만 lucrative는 '꽤 큰돈이 된다'는 강조가 있고, 사람 자체가 아니라 job, contract, deal, market 같은 대상을 꾸민다. 비즈니스 기사와 업무 대화에서 흔히 쓰는 중간 격식의 말이다. 'a lucrative person'처럼 사람에게 쓰면 틀린 표현이다. 돈 이외의 이익에는 쓰지 않으므로 '보람 있는'은 rewarding을 쓴다.",
    examples: [
      {
        en: "Enterprise support contracts turned out to be far more lucrative than the consumer app.",
        ko: "기업용 지원 계약이 소비자용 앱보다 훨씬 수익성이 좋다는 게 드러났다.",
        note: "contract, deal처럼 돈이 오가는 대상을 꾸민다. 사람에게는 쓰지 않는다.",
      },
      {
        en: "The company is trying to break into the lucrative Asian market.",
        ko: "그 회사는 수익성 높은 아시아 시장에 진출하려 하고 있다.",
      },
      {
        en: "He left a lucrative career in finance to become a teacher.",
        ko: "그는 돈 잘 버는 금융업 경력을 그만두고 교사가 됐다.",
        note: "보람(rewarding)과 돈(lucrative)을 대비하는 문장에서 자주 보인다.",
      },
    ],
    collocations: ["lucrative contract", "lucrative deal", "lucrative market", "highly lucrative", "lucrative career"],
    synonyms: ["profitable", "money-making", "well-paid", "remunerative", "gainful"],
    antonyms: ["unprofitable", "loss-making"],
    family: ["lucratively (adv.)", "lucre (n.)"],
    confusedWith: [
      { word: "profitable", note: "profitable은 이익이 난다는 중립적인 말이고, lucrative는 '큰돈이 된다'는 강조가 있다. profitable은 비유적으로 '유익한'에도 쓰지만 lucrative는 돈에만 쓴다." },
    ],
    origin: "라틴어 lucrum(이익)에서 왔다. filthy lucre(더러운 돈)의 lucre와 같은 뿌리다.",
    themes: ["business"],
  },
  {
    word: "latent",
    pos: ["adjective"],
    ipa: "/ˈleɪtənt/",
    level: "C2",
    meaning: "잠재적인, 숨어 있는, 잠복 중인",
    definition: "Existing but not yet developed, visible, or active.",
    explanation:
      "이미 존재하지만 아직 겉으로 드러나지 않았거나 활성화되지 않은 상태를 말한다. potential이 '앞으로 될 수 있는 가능성'이라면 latent는 '이미 안에 있는데 숨어 있는 것'이라는 점이 다르다. 의학(latent infection, 잠복 감염), 심리학(latent talent), 머신러닝(latent space, latent variable) 같은 전문 분야에서 자주 쓰는 격식 있는 말이다. latency(지연 시간)와 어원이 같지만, 네트워크에서 latency는 '응답이 오기까지 걸리는 시간'이라는 별도의 기술 용어로 굳어졌다.",
    examples: [
      {
        en: "The model maps each image to a point in a latent space with 128 dimensions.",
        ko: "그 모델은 각 이미지를 128차원 잠재 공간의 한 점으로 매핑한다.",
        note: "머신러닝에서 latent는 '직접 관측되지 않는 숨은 표현'을 뜻한다. latent variable, latent vector도 같은 쓰임이다.",
      },
      {
        en: "The bug had been latent for years until a leap-year date finally triggered it.",
        ko: "그 버그는 윤년 날짜가 마침내 발동시키기 전까지 몇 년 동안 잠복해 있었다.",
      },
      {
        en: "Tuberculosis can remain latent in the body for decades without causing symptoms.",
        ko: "결핵은 증상 없이 수십 년 동안 몸속에 잠복해 있을 수 있다.",
        note: "의학에서 latent는 '감염됐지만 아직 발병하지 않은'이라는 뜻이다.",
      },
      {
        en: "The workshop helped her discover a latent talent for public speaking.",
        ko: "그 워크숍 덕분에 그녀는 숨어 있던 말하기 재능을 발견했다.",
      },
    ],
    collocations: ["latent talent", "latent space", "latent infection", "remain latent", "latent demand"],
    synonyms: ["dormant", "hidden", "undeveloped", "underlying", "concealed"],
    antonyms: ["manifest", "active", "overt", "apparent"],
    family: ["latency (n.)", "latently (adv.)"],
    confusedWith: [
      { word: "potential", note: "potential은 앞으로 생길 수 있는 '가능성'이고, latent는 이미 존재하지만 아직 드러나지 않은 것이다." },
      { word: "dormant", note: "dormant는 한때 활동하다가 '잠들어 있는'(dormant volcano) 느낌이 강하고, latent는 처음부터 숨어 있던 것에 자주 쓴다." },
    ],
    origin: "라틴어 latere(숨어 있다)에서 왔다. latens(숨어 있는)가 영어 latent가 됐다.",
    themes: ["academic", "tech"],
  },
];
