import type { VocabEntry } from "../types";

export const WORDS_T: VocabEntry[] = [
  {
    word: "tangible",
    pos: ["adjective"],
    ipa: "/ˈtændʒəbəl/",
    level: "C1",
    forms: ["tangibility"],
    meaning: "실재하는, 눈에 보이는, 구체적인",
    definition: "Real and able to be shown, seen, or felt; clear enough to be measured or proved.",
    explanation:
      "원래는 '손으로 만질 수 있는'이라는 뜻이지만, 실제로는 '말뿐이 아니라 눈에 보이게 드러나는'이라는 비유적 의미로 훨씬 많이 쓴다. tangible results, tangible benefits, tangible evidence처럼 성과나 증거를 말할 때 자주 붙고, 회의나 보고서에서 '숫자로 보여 줄 수 있는 성과'를 강조할 때 유용하다. concrete와 비슷하지만 concrete는 '구체적인(추상적이지 않은)'에, tangible은 '실제로 체감·측정할 수 있는'에 무게가 있다. 회계에서는 tangible assets(유형자산)와 intangible assets(무형자산)를 구분한다.",
    examples: [
      {
        en: "Six months after the rewrite, we still haven't seen any tangible improvement in page load times.",
        ko: "다시 짠 지 6개월이 지났는데도 페이지 로딩 시간이 눈에 띄게 나아진 게 없다.",
        note: "말로만 '좋아졌다'가 아니라 측정 가능한 개선을 요구하는 뉘앙스다.",
      },
      {
        en: "Investors want tangible results, not another roadmap slide.",
        ko: "투자자들은 또 하나의 로드맵 슬라이드가 아니라 실질적인 성과를 원한다.",
      },
      {
        en: "Land and buildings are tangible assets, while patents and brand value are intangible.",
        ko: "토지와 건물은 유형자산이고, 특허와 브랜드 가치는 무형자산이다.",
        note: "회계 용어 tangible/intangible assets. 반의어 intangible도 함께 알아 두면 좋다.",
      },
      {
        en: "There was a tangible sense of relief in the room when the results came in.",
        ko: "결과가 나오자 방 안에 안도감이 확연히 감돌았다.",
      },
    ],
    collocations: ["tangible results", "tangible benefits", "tangible evidence", "tangible assets", "a tangible sense of"],
    synonyms: ["concrete", "palpable", "real", "measurable", "perceptible"],
    antonyms: ["intangible", "abstract", "theoretical"],
    family: ["tangibly (adv.)", "tangibility (n.)", "intangible (adj.)"],
    confusedWith: [
      { word: "tangential", note: "tangential은 '본론에서 벗어난, 지엽적인'이라는 뜻이다. 같은 라틴어 어근(tangere)에서 왔지만 의미가 전혀 다르다." },
    ],
    origin: "라틴어 tangere(만지다)에서 왔다. '만질 수 있을 만큼 실재하는'.",
    themes: ["business", "academic"],
  },
  {
    word: "tenuous",
    pos: ["adjective"],
    ipa: "/ˈtenjuəs/",
    level: "C2",
    meaning: "빈약한, 미약한, 근거가 약한",
    definition: "Very weak, slight, or thin, and therefore easily broken or disproved.",
    explanation:
      "관계, 연결, 근거, 장악력처럼 보이지 않는 것이 '아주 가늘고 약해서 쉽게 끊어질 것 같다'는 뜻이다. tenuous link, tenuous connection, tenuous grasp, tenuous hold처럼 쓰고, 논쟁이나 분석 글에서 상대 논리의 연결 고리가 약하다고 지적할 때 자주 보인다. weak보다 격식 있고 '가늘다'는 이미지가 살아 있다. 물리적으로 얇은 물체에 쓰는 일은 드물고 거의 추상적인 대상에 쓴다.",
    examples: [
      {
        en: "The connection between the deploy and the outage is tenuous at best; the error rate started climbing an hour earlier.",
        ko: "배포와 장애 사이의 연관성은 기껏해야 미약하다. 오류율은 그보다 한 시간 전부터 오르기 시작했다.",
        note: "tenuous at best(잘 봐줘도 약한)는 관계가 거의 없다고 정중하게 말하는 관용 표현이다.",
      },
      {
        en: "The coalition has only a tenuous hold on power.",
        ko: "연립 정부는 겨우 권력을 유지하고 있을 뿐이다.",
        note: "hold/grasp와 붙으면 '불안하게 붙잡고 있다'는 뜻이 된다.",
      },
      {
        en: "His grasp of the rules was tenuous, so he kept asking the referee questions.",
        ko: "그는 규칙을 어설프게만 알고 있어서 심판에게 계속 질문했다.",
      },
    ],
    collocations: ["tenuous link", "tenuous connection", "tenuous grasp", "tenuous hold", "tenuous at best"],
    synonyms: ["weak", "flimsy", "slight", "fragile", "shaky"],
    antonyms: ["strong", "solid", "firm", "substantial"],
    family: ["tenuously (adv.)", "tenuousness (n.)"],
    confusedWith: [
      { word: "tenacious", note: "tenacious는 '끈질긴, 꽉 붙잡고 놓지 않는'이라는 뜻으로 tenuous와 거의 반대다. 철자가 비슷해 헷갈리기 쉽다." },
    ],
    origin: "라틴어 tenuis(가는, 얇은)에서 왔다.",
    themes: ["argument", "academic"],
  },
  {
    word: "trepidation",
    pos: ["noun"],
    ipa: "/ˌtrepɪˈdeɪʃən/",
    level: "C2",
    meaning: "불안, 두려움, 걱정",
    definition: "A feeling of fear or anxiety about something that may happen.",
    explanation:
      "앞으로 일어날 일에 대해 조마조마하고 불안한 마음을 뜻하는 격식 있는 명사다. 공포에 질린 상태라기보다는 '걱정되지만 그래도 해야 하는 일'을 앞둔 긴장감에 가깝다. 셀 수 없는 명사라서 a trepidation이나 trepidations로 쓰지 않고, with trepidation(불안한 마음으로), some trepidation, trepidation about/over처럼 쓴다. 일상 대화에서는 nervous나 worried가 자연스럽고, trepidation은 글이나 다소 격식 있는 말에서 쓴다.",
    examples: [
      {
        en: "I approached the legacy billing module with some trepidation, since nobody had touched it in years.",
        ko: "몇 년 동안 아무도 손대지 않은 레거시 결제 모듈이라서 조금 불안한 마음으로 들여다봤다.",
        note: "with some trepidation처럼 셀 수 없는 명사로 쓴다. a trepidation이라고 하지 않는다.",
      },
      {
        en: "There is widespread trepidation among staff about the planned restructuring.",
        ko: "예정된 구조조정을 두고 직원들 사이에 불안감이 널리 퍼져 있다.",
        note: "무엇에 대한 불안인지는 about이나 over로 잇는다.",
      },
      {
        en: "She opened the envelope with trepidation, expecting bad news.",
        ko: "그녀는 나쁜 소식일 거라 생각하며 조마조마한 마음으로 봉투를 열었다.",
      },
    ],
    collocations: ["with trepidation", "some trepidation", "a sense of trepidation", "trepidation about", "fear and trepidation"],
    synonyms: ["apprehension", "anxiety", "unease", "nervousness", "dread"],
    antonyms: ["confidence", "calm", "composure"],
    family: ["trepidatious (adj.)", "intrepid (adj.)"],
    confusedWith: [
      { word: "intrepid", note: "intrepid는 '두려움 없는, 용감한'이라는 형용사로 trepidation과 어근이 같지만 뜻은 반대다." },
    ],
    origin: "라틴어 trepidare(떨다, 허둥대다)에서 왔다.",
    themes: ["emotion"],
  },
];
