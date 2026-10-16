import type { VocabEntry } from "../types";

export const WORDS_V: VocabEntry[] = [
  {
    word: "verbose",
    pos: ["adjective"],
    ipa: "/vɚˈboʊs/",
    level: "C2",
    meaning: "장황한, 말이 많은, 상세 출력의",
    definition: "Using or containing more words than are needed.",
    explanation:
      "필요 이상으로 말이나 글이 길다는 뜻으로, 대개 부정적인 평가다. 글, 문서, 설명, 사람의 말투에 쓰고, wordy보다 격식 있으며 long-winded보다는 덜 구어적이다. 개발자에게는 --verbose 옵션이나 verbose logging처럼 '평소보다 자세한 정보를 출력하는 모드'라는 중립적인 뜻이 익숙한데, 이때는 흉이 아니다. 명사형은 verbosity이고 log verbosity(로그 상세 수준)처럼 쓴다.",
    examples: [
      {
        en: "Run the installer with the verbose flag so we can see which step is hanging.",
        ko: "어느 단계에서 멈추는지 볼 수 있게 설치 프로그램을 verbose 옵션으로 실행해 줘.",
        note: "CLI의 verbose 모드는 '자세히 출력하는'이라는 중립적 의미다.",
        context: "tech",
      },
      {
        en: "The spec is accurate but so verbose that nobody reads past the first page.",
        ko: "명세서는 정확하지만 너무 장황해서 아무도 첫 페이지 이후로 읽지 않는다.",
        note: "글에 대해 쓰면 '불필요하게 길다'는 비판이다.",
        context: "business",
      },
      {
        en: "Java has a reputation for being verbose compared with Python.",
        ko: "자바는 파이썬에 비해 코드가 장황하다는 평을 듣는다.",
        context: "tech",
      },
      {
        en: "We turned down the log verbosity because the disk kept filling up.",
        ko: "디스크가 계속 가득 차서 로그 상세 수준을 낮췄다.",
        context: "tech",
      },
      {
        en: "The committee found the dissertation verbose and asked for the literature review to be cut by a third.",
        ko: "심사위원회는 논문이 장황하다고 보고 선행 연구 검토 부분을 3분의 1로 줄이라고 요구했다.",
        context: "academic",
      },
      {
        en: "\"Sorry, I'm being verbose again. The short version is that the car needs new brakes.\"",
        ko: "\"미안, 또 말이 길어졌네. 간단히 말하면 차 브레이크를 갈아야 해.\"",
        note: "자기 말이 길어졌을 때 사과하며 스스로를 가리켜 쓰기도 한다.",
        context: "everyday",
      },
      {
        en: "The minister answered verbosely but never actually addressed the question.",
        ko: "장관은 길게 답했지만 정작 질문에는 한 번도 답하지 않았다.",
        note: "부사형 verbosely는 '말만 길게'라는 비판의 뉘앙스가 있다.",
        context: "argument",
      },
    ],
    collocations: ["verbose logging", "verbose mode", "overly verbose", "verbose explanation", "log verbosity"],
    synonyms: ["wordy", "long-winded", "prolix", "rambling", "garrulous"],
    antonyms: ["concise", "succinct", "terse", "brief"],
    family: ["verbosity (n.)", "verbosely (adv.)"],
    confusedWith: [
      { word: "verbal", note: "verbal은 '말의, 구두의'라는 뜻으로 길이와는 상관없다. verbose는 '말이 너무 많은'이다." },
    ],
    origin: "라틴어 verbum(말, 단어)에서 나온 verbosus(말이 많은)에서 왔다.",
    themes: ["tech", "everyday"],
  },
  {
    word: "viable",
    pos: ["adjective"],
    ipa: "/ˈvaɪəbəl/",
    level: "C1",
    forms: ["viability"],
    meaning: "실행 가능한, 성공할 수 있는, 생존 가능한",
    definition: "Capable of working successfully; able to survive or develop.",
    explanation:
      "계획, 대안, 사업이 '실제로 굴러갈 수 있는'이라는 뜻이다. viable option, viable alternative, commercially viable처럼 회의나 기획 문서에서 아주 자주 쓴다. possible은 '일어날 수 있다'에 그치지만 viable은 '해 보면 실제로 성공적으로 작동한다'는 현실성을 담는다. 스타트업 용어 MVP(minimum viable product)도 여기서 나왔다. 생물학·의학에서는 '생존할 수 있는'이라는 원래 뜻으로 쓰이며, 명사형 viability는 어간 철자가 바뀐다.",
    examples: [
      {
        en: "Rewriting the service in Rust isn't a viable option with only two engineers and a three-month deadline.",
        ko: "엔지니어 둘에 마감이 석 달인 상황에서 서비스를 Rust로 다시 짜는 건 현실적인 선택지가 아니다.",
        note: "viable option은 '가능하긴 하다'가 아니라 '현실적으로 해낼 수 있다'는 판단이다.",
        context: "tech",
      },
      {
        en: "The pilot showed that the subscription model is commercially viable.",
        ko: "시범 운영으로 구독 모델이 상업적으로 수익성이 있다는 것이 확인됐다.",
        note: "commercially/economically viable은 '수익을 내며 지속할 수 있는'이라는 뜻이다.",
        context: "business",
      },
      {
        en: "Researchers are still questioning the long-term viability of the project.",
        ko: "연구자들은 여전히 그 프로젝트가 장기적으로 지속 가능한지 의문을 품고 있다.",
        context: "academic",
      },
      {
        en: "Only a few of the seeds were still viable after years in storage.",
        ko: "몇 년 동안 보관한 씨앗 가운데 아직 싹을 틔울 수 있는 것은 몇 개뿐이었다.",
        context: "academic",
      },
      {
        en: "Opponents say the plan is not politically viable without support from rural voters.",
        ko: "반대 측은 농촌 유권자의 지지 없이는 그 계획이 정치적으로 실현될 수 없다고 말한다.",
        note: "politically viable은 '정치적으로 통과·유지될 수 있는'이라는 뜻이다.",
        context: "argument",
      },
      {
        en: "\"Is living without a car actually viable out here?\" \"Not really. The nearest bus stop is two miles away.\"",
        ko: "\"여기서 차 없이 사는 게 정말 가능해?\" \"별로. 제일 가까운 버스 정류장이 3킬로미터 넘게 떨어져 있어.\"",
        context: "everyday",
      },
      {
        en: "After the third rejection, I began to wonder whether a career in music was still viable for me.",
        ko: "세 번째로 떨어지고 나니 음악으로 먹고사는 게 나한테 아직 가능한 일인지 의심이 들기 시작했다.",
        context: "emotion",
      },
    ],
    collocations: ["viable option", "viable alternative", "commercially viable", "economically viable", "minimum viable product"],
    synonyms: ["feasible", "workable", "practicable", "realistic", "sustainable"],
    antonyms: ["unviable", "impractical", "unworkable", "nonviable"],
    family: ["viability (n.)", "nonviable (adj.)", "unviable (adj.)"],
    confusedWith: [
      { word: "feasible", note: "feasible은 '할 수 있는(실행 자체가 가능한)'에, viable은 '해 놓으면 계속 굴러갈 수 있는(지속 가능성)'에 무게가 있다." },
    ],
    origin: "프랑스어 vie(생명)에서 왔고, 라틴어 vita(삶)와 같은 뿌리다. 원래 '살아남을 수 있는'이라는 뜻이었다.",
    themes: ["business", "tech"],
  },
  {
    word: "vindicate",
    pos: ["verb"],
    ipa: "/ˈvɪndɪkeɪt/",
    level: "C2",
    meaning: "옳음을 입증하다, 결백을 증명하다",
    definition: "To show that someone or something is right, true, or free from blame, especially after doubt or criticism.",
    explanation:
      "의심받거나 비판받던 사람, 결정, 주장이 결국 옳았음을 보여 준다는 뜻이다. 주어로는 결과나 증거(the results, events, time)가 자주 오고, 사람은 be vindicated, feel vindicated처럼 수동형으로 많이 쓴다. prove right와 의미가 비슷하지만 '그동안 억울하게 의심받았다'는 배경이 깔려 있다는 점이 다르다. 격식 있는 말이지만 feel vindicated는 일상 대화에서도 자연스럽게 쓴다.",
    examples: [
      {
        en: "When the outage hit, the team's decision to invest in failover was fully vindicated.",
        ko: "장애가 터지자 페일오버에 투자하기로 했던 팀의 결정이 옳았다는 게 완전히 증명됐다.",
        note: "처음엔 과하다는 비판을 받았을 결정이 나중에 옳았음이 드러나는 전형적인 상황이다.",
        context: "tech",
      },
      {
        en: "She felt vindicated when the audit confirmed the numbers she had questioned.",
        ko: "그녀가 의문을 제기했던 수치를 감사가 확인해 주자 그녀는 자기가 옳았다고 느꼈다.",
        note: "feel vindicated는 '거 봐, 내 말이 맞았지' 하는 감정을 표현하는 흔한 말이다.",
        context: "emotion",
      },
      {
        en: "New evidence vindicated the man, who had spent twelve years in prison.",
        ko: "새로운 증거로 12년을 감옥에서 보낸 그 남성의 결백이 입증됐다.",
        context: "argument",
      },
      {
        en: "The CFO's cautious forecast was vindicated when demand slumped in the fourth quarter.",
        ko: "4분기에 수요가 급감하면서 CFO의 보수적인 전망이 옳았음이 드러났다.",
        context: "business",
      },
      {
        en: "Wegener's theory of continental drift was vindicated decades after it had been dismissed.",
        ko: "베게너의 대륙 이동설은 무시당한 지 수십 년 뒤에 옳았음이 입증됐다.",
        note: "처음엔 외면받던 이론이 나중에 인정받을 때 be vindicated를 쓴다.",
        context: "academic",
      },
      {
        en: "\"Well, that's vindicating,\" he said when the flaky test finally failed on someone else's machine.",
        ko: "불안정한 테스트가 마침내 다른 사람 컴퓨터에서도 실패하자 그는 \"거 봐, 내 말이 맞았지\"라고 말했다.",
        note: "that's vindicating은 '내가 옳았다는 게 드러나서 속이 시원하다'는 구어 표현이다.",
        context: "tech",
      },
      {
        en: "The verdict did not vindicate the company; it only found that there wasn't enough evidence to convict.",
        ko: "그 판결이 회사의 결백을 입증한 것은 아니었다. 유죄로 볼 증거가 부족하다고 판단했을 뿐이다.",
        context: "argument",
      },
    ],
    collocations: ["feel vindicated", "be fully vindicated", "vindicate a decision", "vindicated by events", "vindicate one's reputation"],
    synonyms: ["justify", "exonerate", "clear", "prove right", "confirm"],
    antonyms: ["discredit", "incriminate", "disprove"],
    family: ["vindication (n.)", "vindicated (adj.)"],
    confusedWith: [
      { word: "vindictive", note: "vindictive는 '앙심을 품은, 복수심에 불타는'이라는 뜻이다. 어원은 같지만 vindicate와 의미가 완전히 다르다." },
    ],
    origin: "라틴어 vindicare(권리를 주장하다, 보호하다, 원수를 갚다)에서 왔다.",
    themes: ["argument", "emotion"],
  },
];
