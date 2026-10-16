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
        context: "tech",
      },
      {
        en: "Smartphones are now ubiquitous, even in remote rural areas.",
        ko: "이제 스마트폰은 외딴 시골에서도 흔하게 볼 수 있다.",
        context: "everyday",
      },
      {
        en: "The ubiquity of short-form video has changed how brands advertise.",
        ko: "숏폼 영상이 어디에나 퍼지면서 브랜드의 광고 방식이 바뀌었다.",
        note: "명사형 ubiquity. the ubiquity of ~(~의 편재, ~이 어디에나 있다는 사실) 형태로 자주 쓴다.",
        context: "business",
      },
      {
        en: "That song was ubiquitous last summer; you couldn't walk into a café without hearing it.",
        ko: "그 노래는 지난여름 어디서나 흘러나왔다. 카페에 들어가면 꼭 들렸다.",
        context: "everyday",
      },
      {
        en: "Microplastics are now ubiquitous in the environment, from deep-sea sediment to Arctic ice.",
        ko: "미세플라스틱은 이제 심해 퇴적물부터 북극 얼음까지 환경 어디에서나 발견된다.",
        context: "academic",
      },
      {
        en: "Cameras are so ubiquitously installed downtown that privacy advocates say anonymity no longer exists there.",
        ko: "도심 곳곳에 카메라가 깔려 있어서, 개인정보 보호 운동가들은 그곳에 더 이상 익명성이 없다고 말한다.",
        note: "부사형 ubiquitously는 다소 딱딱한 문어체다.",
        context: "argument",
      },
      {
        en: "\"Why is this helper so ubiquitous? It's imported in about three hundred files.\"",
        ko: "\"이 헬퍼는 왜 이렇게 여기저기 다 쓰여? 300개 파일쯤에서 import하고 있어.\"",
        note: "구어에서도 '안 쓰이는 곳이 없다'는 과장된 느낌으로 쓸 수 있다.",
        context: "tech",
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
        context: "tech",
      },
      {
        en: "He felt that his manager was undermining him by overruling his decisions in front of the team.",
        ko: "그는 매니저가 팀원들 앞에서 자기 결정을 뒤집어 자신의 권위를 깎아내린다고 느꼈다.",
        note: "사람을 목적어로 쓰면 '그 사람의 입지나 권위를 깎는다'는 뜻이 된다.",
        context: "business",
      },
      {
        en: "Critics argue that the new law undermines press freedom.",
        ko: "비판론자들은 새 법이 언론의 자유를 훼손한다고 주장한다.",
        context: "argument",
      },
      {
        en: "Constant late nights are undermining my health.",
        ko: "계속 늦게 자는 게 내 건강을 갉아먹고 있다.",
        context: "everyday",
      },
      {
        en: "The study's findings were undermined by a small and unrepresentative sample.",
        ko: "표본이 작고 대표성이 없어서 그 연구 결과의 신뢰도가 떨어졌다.",
        note: "수동태 be undermined by로 무엇 때문에 약해졌는지 밝힌다.",
        context: "academic",
      },
      {
        en: "Years of criticism had quietly undermined her self-confidence.",
        ko: "수년간 이어진 비판이 어느새 그녀의 자신감을 갉아먹었다.",
        context: "emotion",
      },
      {
        en: "\"I'm not trying to undermine you. I just think we need another pair of eyes on this.\"",
        ko: "\"네 입지를 깎으려는 게 아니야. 그냥 이건 한 사람이 더 봐야 할 것 같아서 그래.\"",
        note: "회의에서 반대 의견을 낼 때 오해를 막으려고 부정문으로 자주 쓰는 말이다.",
        context: "business",
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
        context: "tech",
      },
      {
        en: "The company is facing unprecedented competition from overseas rivals.",
        ko: "그 회사는 해외 경쟁사들과 유례없는 경쟁에 직면해 있다.",
        context: "business",
      },
      {
        en: "It was almost unprecedented for a first-year student to publish in that journal.",
        ko: "1학년 학생이 그 학술지에 논문을 싣는 것은 거의 전례가 없는 일이었다.",
        note: "very unprecedented는 어색하다. almost, largely, truly 같은 부사가 자연스럽다.",
        context: "academic",
      },
      {
        en: "Unprecedented rainfall flooded several subway stations within an hour.",
        ko: "기록적인 폭우로 한 시간 만에 지하철역 몇 곳이 물에 잠겼다.",
        context: "everyday",
      },
      {
        en: "Calling the crisis unprecedented doesn't excuse the government's lack of preparation.",
        ko: "위기가 전례 없다고 말한다고 해서 정부의 준비 부족이 용서되는 것은 아니다.",
        note: "unprecedented를 책임을 피하는 수사로 쓰는 것을 비판하는 문장이다.",
        context: "argument",
      },
      {
        en: "The outpouring of support after the fire was unprecedented, and it moved the family to tears.",
        ko: "화재 뒤에 쏟아진 응원은 유례가 없을 정도였고, 가족은 감동해 눈물을 흘렸다.",
        context: "emotion",
      },
      {
        en: "\"Is a 40% spike in a single day unprecedented for us?\" \"Completely. We've never seen anything close.\"",
        ko: "\"하루에 40%가 튀는 게 우리한테 처음 있는 일이야?\" \"완전히 처음이야. 비슷한 것도 본 적 없어.\"",
        note: "강조할 때는 completely, totally, truly unprecedented처럼 쓴다.",
        context: "tech",
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
