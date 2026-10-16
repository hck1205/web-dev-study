import type { VocabEntry } from "../types";

export const WORDS_G: VocabEntry[] = [
  {
    word: "galvanize",
    pos: ["verb"],
    ipa: "/ˈɡælvənaɪz/",
    level: "C2",
    meaning: "자극하다, (행동하도록) 불러일으키다, 아연 도금하다",
    definition: "To shock or excite someone into taking action.",
    explanation:
      "가만히 있던 사람이나 집단을 갑자기 움직이게 만든다는 뜻이다. 그래서 'galvanize someone into action'이나 'galvanize support'처럼 행동·지지를 이끌어 내는 문맥에 자주 쓴다. motivate보다 강하고 순간적인 충격의 느낌이 있으며, 사건·위기·연설이 주어로 오는 경우가 많다. 기사·연설·비즈니스 글에서 쓰는 격식 있는 말이다. 전치사는 into를 쓰며 'galvanize to action'보다 'galvanize into action'이 일반적이다.",
    examples: [
      {
        en: "The production outage galvanized the team into finally investing in proper monitoring.",
        ko: "운영 장애가 터지자 팀은 그제서야 제대로 된 모니터링에 투자하기 시작했다.",
        note: "galvanize A into B(-ing/명사) 구조. 계기가 된 사건이 주어로 온다.",
        context: "tech",
      },
      {
        en: "Her speech galvanized support for the proposal among the board members.",
        ko: "그녀의 연설이 이사진 사이에서 그 제안에 대한 지지를 끌어냈다.",
        note: "galvanize support/opposition처럼 집단의 반응을 목적어로 받기도 한다.",
        context: "business",
      },
      {
        en: "\"What would it take to galvanize the rest of the org behind this?\" she asked at the all-hands.",
        ko: "\"나머지 조직이 이 일에 힘을 싣게 하려면 뭐가 필요할까요?\" 그녀가 전체 회의에서 물었다.",
        note: "galvanize A behind B는 '사람들을 B 쪽으로 결집시키다'라는 뜻이다.",
        context: "business",
      },
      {
        en: "The disaster galvanized local residents, who organized relief efforts within hours.",
        ko: "참사는 지역 주민들을 움직였고, 그들은 몇 시간 만에 구호 활동을 꾸렸다.",
        context: "emotion",
      },
      {
        en: "The report's warnings didn't galvanize anyone, and the budget stayed exactly the same.",
        ko: "보고서의 경고에도 아무도 움직이지 않았고 예산은 그대로였다.",
        note: "부정문에서는 '경고가 있었는데도 행동으로 이어지지 않았다'는 실망을 드러낸다.",
        context: "argument",
      },
      {
        en: "The 1911 Triangle Shirtwaist fire is often cited as the event that galvanized the labor movement in New York.",
        ko: "1911년 트라이앵글 셔츠웨이스트 공장 화재는 뉴욕 노동운동에 불을 붙인 사건으로 자주 꼽힌다.",
        context: "academic",
      },
      {
        en: "The steel beams are galvanized to protect them from rust.",
        ko: "그 강철 빔은 녹슬지 않도록 아연 도금이 되어 있다.",
        note: "기술 문맥에서는 '아연 도금하다'라는 원래 뜻으로 쓴다. galvanized steel(아연 도금 강철)이 흔하다.",
        context: "tech",
      },
    ],
    collocations: ["galvanize someone into action", "galvanize support", "galvanize public opinion", "galvanized steel"],
    synonyms: ["spur", "rouse", "stir", "mobilize", "energize"],
    antonyms: ["discourage", "dampen", "deter"],
    family: ["galvanization (n.)", "galvanic (adj.)", "galvanized (adj.)"],
    confusedWith: [
      { word: "motivate", note: "motivate는 꾸준한 동기를 주는 일반적인 말이고, galvanize는 충격이나 사건으로 갑자기 행동에 나서게 만드는 느낌이 강하다." },
    ],
    origin: "근육에 전류를 흘려 움직이게 한 이탈리아 의사 루이지 갈바니(Galvani)의 이름에서 왔다. '전기 충격으로 움직이게 하다'로 외우면 된다.",
    themes: ["business", "emotion"],
  },
  {
    word: "gratuitous",
    pos: ["adjective"],
    ipa: "/ɡrəˈtuːɪtəs/",
    level: "C2",
    meaning: "불필요한, 쓸데없는, 이유 없는",
    definition: "Done without good reason; uncalled for or unnecessary.",
    explanation:
      "필요도 이유도 없는데 굳이 들어간 것을 비판할 때 쓴다. gratuitous violence, gratuitous insult처럼 부정적인 대상과 붙는 경우가 가장 흔하고, 영화 평론·기사·코드 리뷰처럼 무언가를 평가하는 글에서 자주 보인다. unnecessary보다 '지나치고 의도가 의심스럽다'는 비난조가 강하다. 법률 문맥에서는 '무상의'라는 중립적인 뜻도 있지만 일상에서는 거의 쓰지 않는다. gratuity(팁)와 어원이 같지만 뜻은 다르다는 점에 주의한다.",
    examples: [
      {
        en: "Critics complained that the film's violence was gratuitous and added nothing to the story.",
        ko: "평론가들은 그 영화의 폭력 장면이 불필요하고 이야기에 아무것도 보태지 않는다고 불평했다.",
        note: "gratuitous violence/sex는 영화·미디어 비평의 고정 표현에 가깝다.",
        context: "argument",
      },
      {
        en: "That was a gratuitous insult, and you owe him an apology.",
        ko: "그건 괜한 모욕이었으니 그에게 사과해야 한다.",
        context: "emotion",
      },
      {
        en: "The pull request adds a lot of gratuitous abstraction for a feature that has only one caller.",
        ko: "이 PR은 호출하는 곳이 하나뿐인 기능에 쓸데없는 추상화를 잔뜩 추가한다.",
        note: "코드 리뷰에서 '필요 이상으로 덧붙였다'고 비판할 때 쓰기 좋다.",
        context: "tech",
      },
      {
        en: "Was that comment really necessary, or was it just gratuitous?",
        ko: "그 말 꼭 해야 했어, 아니면 그냥 괜히 한 거야?",
        note: "대화에서 상대의 말이 불필요하게 날이 서 있었다고 따질 때 쓴다.",
        context: "everyday",
      },
      {
        en: "The report gratuitously named junior staff who had nothing to do with the decision.",
        ko: "그 보고서는 결정과 아무 관련 없는 하급 직원들의 이름을 쓸데없이 거론했다.",
        context: "business",
      },
      {
        en: "The redesign isn't gratuitous; every change came out of usability testing.",
        ko: "이번 리디자인은 괜히 바꾼 게 아니다. 모든 변경이 사용성 테스트에서 나왔다.",
        note: "부정문으로 '근거 없이 한 게 아니다'라고 방어할 때도 자연스럽다.",
        context: "tech",
      },
      {
        en: "Reviewers flagged several gratuitous citations that did nothing to support the paper's claims.",
        ko: "심사위원들은 논문의 주장을 전혀 뒷받침하지 않는 불필요한 인용 몇 개를 지적했다.",
        context: "academic",
      },
    ],
    collocations: ["gratuitous violence", "gratuitous insult", "gratuitous complexity", "entirely gratuitous"],
    synonyms: ["unnecessary", "unwarranted", "uncalled-for", "unjustified", "superfluous"],
    antonyms: ["justified", "necessary", "warranted"],
    family: ["gratuitously (adv.)", "gratuitousness (n.)"],
    confusedWith: [
      { word: "gratuity", note: "gratuity는 '팁, 봉사료'라는 명사다. 어원(무상으로 주는 것)은 같지만 gratuitous의 '불필요한'이라는 비판적 뜻과는 관계가 없다." },
      { word: "grateful", note: "grateful은 '고마워하는'이다. 철자가 비슷해 보여도 뜻이 전혀 다르다." },
    ],
    origin: "라틴어 gratuitus(대가 없는, 공짜의)에서 왔다. '대가 없이 → 이유 없이 → 불필요하게'로 뜻이 옮겨 갔다.",
    themes: ["argument", "everyday"],
  },
];
