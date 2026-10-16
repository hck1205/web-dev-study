import type { VocabEntry } from "../types";

export const WORDS_U: VocabEntry[] = [
  {
    word: "ubiquitous",
    pos: ["adjective"],
    ipa: "/juːˈbɪkwɪtəs/",
    level: "C1",
    forms: ["ubiquity"],
    meaning: "어디에나 있는, 아주 흔한",
    definition: "Present, appearing, or found everywhere.",
    explanation:
      "어디를 가도 보일 만큼 흔하다는 뜻이다. 스마트폰, 광고, 특정 기술이나 유행처럼 '사방에 퍼져 있어 이제 당연해진 것'에 자주 쓰고, 다소 격식 있지만 기사나 기술 글에서 흔히 보인다. common은 단순히 흔하다는 뜻이지만 ubiquitous는 '빠지는 곳이 없을 정도'라는 과장된 느낌이 있다. 가끔 '너무 흔해서 지겹다'는 가벼운 비꼼을 담기도 한다. 명사형은 ubiquity로, 철자가 어간에서 바뀌므로 따로 외워 둔다.",
    examples: [
      {
        en: "JSON has become so ubiquitous that most developers never think about alternative formats.",
        ko: "JSON이 워낙 어디에나 쓰이다 보니 대부분의 개발자는 다른 형식을 떠올리지도 않는다.",
        note: "기술이나 표준이 '사실상 기본값'이 되었다는 문맥에 잘 어울린다.",
      },
      {
        en: "Smartphones are now ubiquitous, even in remote rural areas.",
        ko: "이제 스마트폰은 외딴 시골에서도 흔하게 볼 수 있다.",
      },
      {
        en: "The ubiquity of short-form video has changed how brands advertise.",
        ko: "숏폼 영상이 어디에나 퍼지면서 브랜드의 광고 방식이 바뀌었다.",
        note: "명사형 ubiquity. the ubiquity of ~(~의 편재, ~이 어디에나 있다는 사실) 형태로 자주 쓴다.",
      },
      {
        en: "That song was ubiquitous last summer; you couldn't walk into a café without hearing it.",
        ko: "그 노래는 지난여름 어디서나 흘러나왔다. 카페에 들어가면 꼭 들렸다.",
      },
    ],
    collocations: ["become ubiquitous", "almost ubiquitous", "ubiquitous presence", "ubiquitous computing", "the ubiquity of"],
    synonyms: ["omnipresent", "pervasive", "widespread", "universal", "everywhere"],
    antonyms: ["rare", "scarce", "uncommon"],
    family: ["ubiquity (n.)", "ubiquitously (adv.)"],
    confusedWith: [
      { word: "omnipresent", note: "omnipresent는 '동시에 모든 곳에 존재하는'이라는 더 강하고 다소 종교적·문어적인 말이고, ubiquitous는 '어디서나 흔히 보이는' 일상적 과장에 가깝다." },
    ],
    origin: "라틴어 ubique(어디에나)에서 왔다.",
    themes: ["tech", "everyday", "academic"],
  },
  {
    word: "undermine",
    pos: ["verb"],
    ipa: "/ˌʌndərˈmaɪn/",
    level: "C1",
    meaning: "약화시키다, 서서히 무너뜨리다, 훼손하다",
    definition: "To gradually weaken or damage something, especially in a way that is not obvious at first.",
    explanation:
      "눈에 잘 띄지 않게, 밑에서부터 조금씩 약하게 만든다는 뜻이다. 신뢰(trust, confidence), 권위(authority), 노력(efforts), 주장(an argument)처럼 추상적인 것을 목적어로 자주 받고, 회의·뉴스·논쟁 어디서나 많이 쓴다. weaken보다 '은근히, 의도적이든 아니든 기반을 무너뜨린다'는 느낌이 강하고, 남의 권위를 깎아내린다는 부정적 행동을 묘사할 때도 쓴다. 타동사라 undermine on처럼 전치사를 붙이지 않는다.",
    examples: [
      {
        en: "Skipping tests to hit the deadline will only undermine confidence in the release.",
        ko: "마감을 맞추려고 테스트를 건너뛰면 릴리스에 대한 신뢰만 떨어질 뿐이다.",
        note: "undermine confidence/trust는 가장 흔한 짝이다. 목적어를 바로 받는다.",
      },
      {
        en: "He felt that his manager was undermining him by overruling his decisions in front of the team.",
        ko: "그는 매니저가 팀원들 앞에서 자기 결정을 뒤집어 자신의 권위를 깎아내린다고 느꼈다.",
        note: "사람을 목적어로 쓰면 '그 사람의 입지나 권위를 깎는다'는 뜻이 된다.",
      },
      {
        en: "Critics argue that the new law undermines press freedom.",
        ko: "비판론자들은 새 법이 언론의 자유를 훼손한다고 주장한다.",
      },
      {
        en: "Constant late nights are undermining my health.",
        ko: "계속 늦게 자는 게 내 건강을 갉아먹고 있다.",
      },
    ],
    collocations: ["undermine confidence", "undermine trust", "undermine authority", "undermine efforts to", "seriously undermine"],
    synonyms: ["weaken", "erode", "sabotage", "subvert", "impair"],
    antonyms: ["strengthen", "reinforce", "bolster", "support"],
    family: ["underminer (n.)"],
    confusedWith: [
      { word: "underestimate", note: "underestimate는 '과소평가하다'로 판단의 문제이고, undermine은 실제로 무언가를 약화시키는 행동이다." },
    ],
    origin: "under(아래) + mine(굴을 파다). 성벽 밑에 굴을 파서 무너뜨리던 공성 전술에서 왔다.",
    themes: ["argument", "business"],
  },
  {
    word: "unprecedented",
    pos: ["adjective"],
    ipa: "/ʌnˈpresɪdentɪd/",
    level: "C1",
    meaning: "전례 없는, 유례없는",
    definition: "Never having happened or existed before.",
    explanation:
      "이전에 한 번도 없었던 일이라는 뜻이다. 규모, 속도, 수준이 기록적일 때 unprecedented scale, unprecedented levels, unprecedented growth처럼 쓰고, 뉴스와 보고서에서 아주 흔하다. 뜻 자체가 '전에 없던'이라 very unprecedented처럼 정도 부사를 붙이면 어색하고, 대신 almost, largely, truly 정도와 어울린다. 너무 자주 쓰여 상투적으로 들릴 수 있으니 정말 전례가 없는지 확인하고 쓰는 게 좋다.",
    examples: [
      {
        en: "The launch drove traffic to unprecedented levels, and the autoscaler couldn't keep up.",
        ko: "출시로 트래픽이 전례 없는 수준까지 치솟았고 오토스케일러가 따라가지 못했다.",
        note: "unprecedented levels/scale은 숫자가 기록적일 때 쓰는 전형적인 표현이다.",
      },
      {
        en: "The company is facing unprecedented competition from overseas rivals.",
        ko: "그 회사는 해외 경쟁사들과 유례없는 경쟁에 직면해 있다.",
      },
      {
        en: "It was almost unprecedented for a first-year student to publish in that journal.",
        ko: "1학년 학생이 그 학술지에 논문을 싣는 것은 거의 전례가 없는 일이었다.",
        note: "very unprecedented는 어색하다. almost, largely, truly 같은 부사가 자연스럽다.",
      },
    ],
    collocations: ["unprecedented levels", "unprecedented scale", "on an unprecedented scale", "unprecedented growth", "almost unprecedented"],
    synonyms: ["unparalleled", "unheard-of", "record-breaking", "novel", "unequaled"],
    antonyms: ["common", "routine", "familiar", "precedented"],
    family: ["precedent (n.)", "unprecedentedly (adv.)", "precede (v.)"],
    confusedWith: [
      { word: "unpredictable", note: "unpredictable은 '예측할 수 없는'이고, unprecedented는 '전에 없던'이다. 둘 다 위기 상황 뉴스에 자주 나와 헷갈리기 쉽다." },
    ],
    origin: "un(아닌) + precedent(선례). precedent는 라틴어 praecedere(앞서 가다)에서 왔다.",
    themes: ["business", "academic"],
  },
];
