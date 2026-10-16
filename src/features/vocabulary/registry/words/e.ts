import type { VocabEntry } from "../types";

export const WORDS_E: VocabEntry[] = [
  {
    word: "eclectic",
    pos: ["adjective"],
    ipa: "/ɪˈklektɪk/",
    level: "C1",
    meaning: "다양한 것을 골라 섞은, 절충적인, 폭넓은",
    definition: "Made up of a wide variety of styles, ideas, or sources chosen from different places.",
    explanation:
      "한 가지 방식이나 출처에 얽매이지 않고 여러 곳에서 좋은 것을 골라 모은 상태를 말한다. 음악 취향, 인테리어, 수집품, 학문적 접근법 등에 쓰며 대체로 긍정적이거나 중립적인 평가다. diverse가 단순히 '다양하다'는 사실을 말한다면 eclectic은 '여러 갈래에서 골라 섞었다'는 선택과 조합의 뉘앙스가 있다. 'an eclectic mix of ~', 'eclectic taste(s)'가 대표적인 형태다. 문맥에 따라 일관성이 없다는 약한 비판으로 읽힐 수도 있다.",
    examples: [
      {
        en: "Our stack is a bit eclectic: a Go backend, a Rails admin panel, and a few Python scripts holding it together.",
        ko: "우리 기술 스택은 좀 잡다하다. Go 백엔드에 Rails 관리 화면, 그걸 이어 붙이는 파이썬 스크립트 몇 개가 있다.",
        note: "여기서는 일관성이 없다는 가벼운 자조로 쓰였다. 문맥에 따라 칭찬도, 은근한 비판도 된다.",
      },
      {
        en: "The café attracts an eclectic mix of students, freelancers, and retirees.",
        ko: "그 카페에는 학생, 프리랜서, 은퇴한 사람들까지 다양한 사람들이 모인다.",
        note: "an eclectic mix of ~는 가장 흔한 결합이다.",
      },
      {
        en: "Her eclectic taste in music ranges from Baroque opera to Korean indie rock.",
        ko: "그녀의 음악 취향은 바로크 오페라부터 한국 인디 록까지 폭넓다.",
      },
      {
        en: "The author takes an eclectic approach, drawing on economics, psychology, and history.",
        ko: "저자는 경제학, 심리학, 역사학을 두루 끌어오는 절충적인 접근을 취한다.",
      },
    ],
    collocations: ["an eclectic mix of", "eclectic taste", "eclectic collection", "eclectic approach", "eclectic style"],
    synonyms: ["diverse", "varied", "wide-ranging", "heterogeneous", "assorted"],
    antonyms: ["uniform", "homogeneous", "narrow"],
    family: ["eclecticism (n.)", "eclectically (adv.)"],
    confusedWith: [
      { word: "eccentric", note: "eccentric은 사람이나 행동이 '별난, 괴짜인'이라는 뜻이다. eclectic은 여러 출처에서 골라 섞은 '다양함'을 말한다." },
    ],
    origin: "그리스어 eklektikos(ek- 밖으로 + legein 고르다)에서 왔다. '골라 뽑은'이 원래 뜻이다.",
    themes: ["everyday", "academic"],
  },
  {
    word: "efficacy",
    pos: ["noun"],
    ipa: "/ˈefɪkəsi/",
    level: "C2",
    meaning: "효능, 효험, (의도한 결과를 내는) 효과",
    definition: "The ability of something, such as a drug or method, to produce the intended result.",
    explanation:
      "약, 치료법, 정책, 방법이 의도한 결과를 실제로 만들어 내는 능력을 말한다. 의학과 과학 글에서 특히 많이 쓰며, 임상에서는 통제된 조건에서의 효능(efficacy)과 실제 현장에서의 효과(effectiveness)를 구분하기도 한다. efficiency(효율, 적은 자원으로 해내는 정도)와는 뜻이 다르니 섞어 쓰지 않는다. 불가산 명사이고 'the efficacy of ~'가 기본 형태다. 일상 대화에서는 '잘 듣는다, 효과가 있다'(work, be effective)로 말하는 게 자연스럽다.",
    examples: [
      {
        en: "Before rolling out the new rate limiter, we ran an A/B test to measure its efficacy against bot traffic.",
        ko: "새 레이트 리미터를 전면 적용하기 전에 봇 트래픽에 실제로 효과가 있는지 A/B 테스트로 측정했다.",
        note: "'의도한 결과를 내는가'를 묻는 것이라 efficacy가 맞다. 처리 속도나 자원 사용을 말한다면 efficiency다.",
      },
      {
        en: "Clinical trials confirmed the vaccine's efficacy in preventing severe illness.",
        ko: "임상 시험에서 그 백신이 중증 예방에 효능이 있다는 사실이 확인됐다.",
        note: "efficacy in -ing / efficacy against ~로 무엇에 대한 효능인지 밝힌다.",
      },
      {
        en: "Critics questioned the efficacy of sanctions as a tool of foreign policy.",
        ko: "비판론자들은 외교 정책 수단으로서 제재가 과연 효과가 있는지 의문을 제기했다.",
      },
    ],
    collocations: ["the efficacy of", "proven efficacy", "efficacy and safety", "clinical efficacy", "question the efficacy of"],
    synonyms: ["effectiveness", "potency", "efficaciousness", "success"],
    antonyms: ["inefficacy", "ineffectiveness", "futility"],
    family: ["efficacious (adj.)", "efficaciously (adv.)", "self-efficacy (n.)"],
    confusedWith: [
      { word: "efficiency", note: "efficiency는 시간·자원을 아끼며 해내는 '효율'이고, efficacy는 원하는 결과를 내는 '효능'이다. 효과는 있지만 비효율적인 방법도 있다." },
      { word: "effectiveness", note: "의학에서는 통제된 시험 조건의 효능을 efficacy, 실제 사용 환경의 효과를 effectiveness로 구분한다. 일반 글에서는 거의 같은 뜻으로 쓴다." },
    ],
    origin: "라틴어 efficax(효력 있는)에서 왔다. efficere(해내다)와 같은 뿌리라 effect, efficient와 친척이다.",
    themes: ["academic"],
  },
  {
    word: "elicit",
    pos: ["verb"],
    ipa: "/iˈlɪsɪt/",
    level: "C1",
    meaning: "(반응·정보를) 끌어내다, 이끌어 내다",
    definition: "To draw out a response, reaction, or piece of information from someone.",
    explanation:
      "질문이나 행동으로 상대에게서 반응, 대답, 정보, 감정을 끌어낸다는 뜻이다. get보다 격식 있고, 숨어 있거나 저절로 나오지 않는 것을 '이끌어 낸다'는 느낌이 있다. 'elicit A from B' 형태로 쓰고, 목적어로 response, reaction, information, feedback, requirements가 흔하다. 소프트웨어 분야에서는 요구사항을 이해관계자에게서 끌어내는 일을 requirements elicitation이라고 부른다. 발음이 같은 illicit(불법의)과 철자를 혼동하는 실수가 잦다.",
    examples: [
      {
        en: "Good user interviews elicit real pain points instead of feature wish lists.",
        ko: "좋은 사용자 인터뷰는 기능 희망 목록이 아니라 진짜 불편한 점을 끌어낸다.",
        note: "요구사항 수집(requirements elicitation)의 맥락이다. 저절로 나오지 않는 것을 질문으로 꺼낸다는 뉘앙스다.",
      },
      {
        en: "The CEO's announcement elicited a mixed reaction from employees.",
        ko: "CEO의 발표에 직원들의 반응은 엇갈렸다.",
        note: "elicit a reaction/response from ~. 반응의 주체는 from으로 나타낸다.",
      },
      {
        en: "Researchers used images of food to elicit hunger responses in participants.",
        ko: "연구자들은 음식 사진을 보여 참가자들에게서 배고픔 반응을 유도했다.",
      },
      {
        en: "Despite repeated questions, the police failed to elicit any useful information from the witness.",
        ko: "거듭 질문했지만 경찰은 목격자에게서 쓸 만한 정보를 하나도 얻어 내지 못했다.",
      },
    ],
    collocations: ["elicit a response", "elicit a reaction", "elicit information from", "elicit feedback", "elicit requirements"],
    synonyms: ["draw out", "evoke", "extract", "obtain", "provoke"],
    antonyms: ["suppress", "repress"],
    family: ["elicitation (n.)"],
    confusedWith: [
      { word: "illicit", note: "illicit은 '불법의, 부정한'이라는 형용사다(illicit drugs). elicit은 '끌어내다'라는 동사다. 발음이 거의 같아 철자를 자주 틀린다." },
      { word: "evoke", note: "evoke는 기억·감정·이미지를 '불러일으키다'에 가깝고, elicit은 질문이나 자극으로 대답·반응을 '끌어내다'에 가깝다." },
    ],
    origin: "라틴어 elicere(e- 밖으로 + lacere 꾀어내다)에서 왔다. '꾀어서 밖으로 끌어내다'로 외우면 쉽다.",
    themes: ["business", "academic", "tech"],
  },
  {
    word: "elucidate",
    pos: ["verb"],
    ipa: "/iˈluːsɪdeɪt/",
    level: "C2",
    meaning: "(알기 쉽게) 밝히다, 해명하다, 설명하다",
    definition: "To make something that is difficult to understand clear by explaining it.",
    explanation:
      "이해하기 어렵거나 불분명한 것을 설명해서 환하게 밝힌다는 뜻이다. explain보다 훨씬 격식 있고 학술적이어서 논문, 강연, 공식 답변에서 주로 쓴다. 메커니즘, 원인, 역할처럼 복잡한 대상을 목적어로 받는 일이 많다. 타동사로 쓰는 게 기본이고 자동사로 'elucidate on ~'이라고 쓰기도 하지만, 격식 있는 글에서는 전치사 없이 목적어를 바로 쓰는 편이 무난하다. 일상 대화에서 쓰면 과하게 딱딱하게 들린다.",
    examples: [
      {
        en: "The postmortem elucidates how a single misconfigured DNS record took down three regions.",
        ko: "장애 회고 문서는 잘못 설정된 DNS 레코드 하나가 어떻게 세 리전을 멈추게 했는지 밝힌다.",
        note: "복잡한 원인과 경위를 '알기 쉽게 밝힌다'는 쓰임이다. how 절을 바로 목적어로 받는다.",
      },
      {
        en: "Further research is needed to elucidate the mechanism by which the drug reduces inflammation.",
        ko: "그 약이 염증을 줄이는 기전을 밝히려면 추가 연구가 필요하다.",
        note: "elucidate the mechanism은 과학 논문에서 매우 흔한 결합이다.",
      },
      {
        en: "Could you elucidate what you meant by 'restructuring' in your email?",
        ko: "메일에서 말한 '구조 조정'이 무슨 뜻인지 좀 더 자세히 설명해 줄 수 있나요?",
      },
    ],
    collocations: ["elucidate the mechanism", "elucidate the role of", "help to elucidate", "further elucidate", "elucidate the meaning of"],
    synonyms: ["clarify", "explain", "illuminate", "explicate", "shed light on"],
    antonyms: ["obscure", "confuse", "obfuscate"],
    family: ["elucidation (n.)", "elucidatory (adj.)"],
    confusedWith: [
      { word: "elaborate", note: "elaborate (on)은 이미 한 말에 세부를 '덧붙여 자세히 말하다'이고, elucidate는 어려운 것을 '이해되게 밝히다'이다." },
    ],
    origin: "라틴어 lucidus(밝은), lux(빛)에서 왔다. lucid(명료한)와 같은 뿌리라 '빛을 비춰 밝히다'로 외우면 쉽다.",
    themes: ["academic", "argument"],
  },
  {
    word: "empirical",
    pos: ["adjective"],
    ipa: "/ɪmˈpɪrɪkl/",
    level: "C1",
    meaning: "경험적인, 실증적인, 관찰·실험에 근거한",
    definition: "Based on observation, measurement, or experience rather than on theory or pure logic.",
    explanation:
      "이론이나 추론만이 아니라 실제 관찰, 측정, 실험에서 얻은 근거에 기반한다는 뜻이다. 학술 글에서 가장 자주 보이는 형용사 중 하나이고 'empirical evidence', 'empirical data', 'empirical study'처럼 근거를 강조할 때 쓴다. theoretical(이론적인)과 대비되는 말이다. 실험뿐 아니라 설문, 로그 분석 같은 관찰 연구도 empirical에 들어가므로 experimental보다 넓다. 회의에서도 '감이 아니라 데이터로'라는 뜻으로 쓸 수 있다.",
    examples: [
      {
        en: "We don't have empirical data showing that the redesign improved retention; it's still a hunch.",
        ko: "리디자인으로 리텐션이 좋아졌다는 실측 데이터는 아직 없다. 아직은 감일 뿐이다.",
        note: "'감(hunch)'과 대비되는 '실제로 측정한' 근거라는 뉘앙스다.",
      },
      {
        en: "There is little empirical evidence that the four-day week reduces productivity.",
        ko: "주 4일제가 생산성을 떨어뜨린다는 실증적 근거는 거의 없다.",
        note: "empirical evidence는 가장 흔한 결합이다. evidence는 불가산이라 a를 붙이지 않는다.",
      },
      {
        en: "The theory was elegant, but it failed every empirical test researchers devised.",
        ko: "그 이론은 깔끔했지만 연구자들이 고안한 실증 검증을 하나도 통과하지 못했다.",
      },
    ],
    collocations: ["empirical evidence", "empirical data", "empirical study", "empirical research", "empirically tested"],
    synonyms: ["observational", "experiential", "evidence-based", "experimental"],
    antonyms: ["theoretical", "speculative", "hypothetical"],
    family: ["empirically (adv.)", "empiricism (n.)", "empiricist (n.)"],
    confusedWith: [
      { word: "experimental", note: "experimental은 통제된 실험을 거친 것이고, empirical은 실험뿐 아니라 관찰·조사 등 실제 경험으로 얻은 근거를 모두 포함한다." },
    ],
    origin: "그리스어 empeiria(경험)에서 왔다. '경험에서 나온'이 원래 뜻이다.",
    themes: ["academic", "argument"],
  },
  {
    word: "encompass",
    pos: ["verb"],
    ipa: "/ɪnˈkʌmpəs/",
    level: "C1",
    meaning: "포함하다, 아우르다, 둘러싸다",
    definition: "To include a wide range of things, or to surround something completely.",
    explanation:
      "여러 가지를 범위 안에 폭넓게 아우른다는 뜻이다. include보다 격식 있고, 범위가 넓어서 '전부를 감싸 안는다'는 느낌이 강하다. 주어로 role, project, term, field 같은 말이 오고 목적어로 여러 항목이 온다. 타동사이므로 'encompass of'처럼 전치사를 붙이지 않는다. 물리적으로 '둘러싸다'라는 뜻도 있지만 현대 영어에서는 '포함하다' 뜻이 훨씬 흔하다.",
    examples: [
      {
        en: "The platform team's role encompasses CI pipelines, observability, and developer tooling.",
        ko: "플랫폼 팀의 역할은 CI 파이프라인, 관측성, 개발 도구까지 아우른다.",
        note: "여러 항목을 넓게 포괄할 때 include보다 무게감 있게 들린다. 목적어가 바로 온다.",
      },
      {
        en: "The term 'cybersecurity' encompasses everything from password hygiene to national defense.",
        ko: "'사이버 보안'이라는 말은 비밀번호 관리부터 국방까지 모든 것을 포괄한다.",
        note: "everything from A to B와 함께 범위의 넓이를 강조하는 전형적인 패턴이다.",
      },
      {
        en: "The new national park will encompass nearly 2,000 square kilometers of forest.",
        ko: "새 국립공원은 거의 2,000제곱킬로미터에 이르는 숲을 아우르게 된다.",
      },
    ],
    collocations: ["encompass a wide range of", "encompass everything from", "broadly encompass", "all-encompassing"],
    synonyms: ["include", "cover", "comprise", "embrace", "span"],
    antonyms: ["exclude", "omit", "leave out"],
    family: ["all-encompassing (adj.)"],
    confusedWith: [
      { word: "comprise", note: "comprise는 전체가 '구성 요소로 이루어지다'로 부분을 빠짐없이 나열할 때 쓰고, encompass는 넓은 범위를 '아우르다'로 일부만 예로 들어도 된다." },
    ],
    origin: "en-(안에) + compass(둘레, 원)에서 왔다. '원 안에 넣다'로 외우면 쉽다.",
    themes: ["academic", "business"],
  },
  {
    word: "ephemeral",
    pos: ["adjective"],
    ipa: "/ɪˈfemərəl/",
    level: "C2",
    meaning: "덧없는, 수명이 짧은, 일시적인",
    definition: "Lasting for only a very short time.",
    explanation:
      "아주 짧은 시간만 존재하고 사라진다는 뜻이다. temporary가 '임시의'라는 중립적인 말이라면 ephemeral은 '금방 사라져 버리는 덧없음'이라는 문학적 뉘앙스가 있어서 유행, 명성, 아름다움 같은 말과 잘 어울린다. 한편 기술 분야에서는 감정 없이 '수명이 짧은'이라는 전문 용어로 쓴다(ephemeral port, ephemeral storage, ephemeral environment). 격식 있는 말이라 일상 대화에서는 short-lived가 더 자연스럽다.",
    examples: [
      {
        en: "Each pull request spins up an ephemeral environment that is destroyed when the branch is merged.",
        ko: "풀 리퀘스트마다 브랜치가 병합되면 삭제되는 임시 환경이 하나씩 뜬다.",
        note: "기술 용어로서의 ephemeral은 감상 없이 '수명이 짧은, 쓰고 버리는'이라는 뜻이다.",
      },
      {
        en: "Containers should treat local disk as ephemeral storage and keep state elsewhere.",
        ko: "컨테이너는 로컬 디스크를 언제든 사라질 수 있는 저장소로 보고 상태는 다른 곳에 둬야 한다.",
      },
      {
        en: "Viral fame on social media is often ephemeral, lasting only a few days.",
        ko: "소셜 미디어에서 얻은 유명세는 대개 덧없어서 며칠 만에 끝난다.",
        note: "문학적·감성적인 쓰임이다. fame, beauty, pleasure 같은 말과 어울린다.",
      },
    ],
    collocations: ["ephemeral nature", "ephemeral pleasures", "ephemeral environment", "ephemeral storage", "ephemeral port"],
    synonyms: ["transient", "fleeting", "short-lived", "transitory", "momentary"],
    antonyms: ["permanent", "enduring", "lasting", "persistent"],
    family: ["ephemera (n.)", "ephemerally (adv.)", "ephemerality (n.)"],
    confusedWith: [
      { word: "ethereal", note: "ethereal은 '천상의, 가볍고 섬세한'이라는 아름다움의 묘사다. ephemeral은 '짧게 존재하다 사라지는' 시간의 묘사다." },
    ],
    origin: "그리스어 ephēmeros(epi 위에 + hēmera 하루)에서 왔다. '하루만 사는'이 원래 뜻이다.",
    themes: ["tech", "academic", "emotion"],
  },
  {
    word: "equivocal",
    pos: ["adjective"],
    ipa: "/ɪˈkwɪvəkl/",
    level: "C2",
    meaning: "모호한, 애매한, 이중적인 (해석이 갈리는)",
    definition: "Open to more than one interpretation, often deliberately; or uncertain and inconclusive.",
    explanation:
      "말이나 결과가 두 가지 이상으로 해석될 수 있어서 분명하지 않다는 뜻이다. ambiguous와 가깝지만 equivocal은 확답을 피하려고 '일부러' 흐린다는 뉘앙스가 담길 때가 많다. 연구 결과에 쓰면 '결론이 나지 않은'(inconclusive)이라는 뜻이 된다. 격식 있는 말이고, 반대말 unequivocal(명백한, 단호한)이 오히려 더 자주 쓰인다. 동사 equivocate는 '얼버무리다'라는 부정적인 뜻이다.",
    examples: [
      {
        en: "The vendor gave an equivocal answer when we asked whether the bug would be fixed in the next release.",
        ko: "다음 릴리스에서 버그가 고쳐지느냐고 묻자 업체는 애매한 답을 내놓았다.",
        note: "확답을 피하려고 일부러 흐리는 대답이라는 뉘앙스다. an equivocal answer/response가 흔하다.",
      },
      {
        en: "The results of the trial were equivocal, so the drug was not approved.",
        ko: "임상 시험 결과가 결론을 내리기 어려워서 그 약은 승인되지 않았다.",
        note: "연구·실험 결과에 쓰면 '어느 쪽으로도 결론이 안 난'이라는 뜻이다.",
      },
      {
        en: "Her equivocal smile made it hard to tell whether she agreed or not.",
        ko: "그녀의 애매한 미소로는 동의하는 건지 아닌지 알 수 없었다.",
      },
    ],
    collocations: ["an equivocal answer", "equivocal evidence", "equivocal results", "deliberately equivocal"],
    synonyms: ["ambiguous", "vague", "inconclusive", "noncommittal", "ambivalent"],
    antonyms: ["unequivocal", "clear", "definite", "explicit"],
    family: ["equivocate (v.)", "equivocation (n.)", "equivocally (adv.)", "unequivocal (adj.)"],
    confusedWith: [
      { word: "ambiguous", note: "ambiguous는 표현 자체가 여러 뜻으로 읽히는 상태를 중립적으로 말하고, equivocal은 일부러 흐리거나 결론이 나지 않았다는 뉘앙스가 더해진다." },
      { word: "equivalent", note: "앞부분 철자가 비슷하지만 equivalent는 '동등한'이다. equivocal은 '모호한'이다." },
    ],
    origin: "후기 라틴어 aequivocus(aequus 같은 + vox 목소리)에서 왔다. '같은 말이 두 뜻을 낸다'로 외우면 쉽다.",
    themes: ["argument", "academic"],
  },
  {
    word: "exacerbate",
    pos: ["verb"],
    ipa: "/ɪɡˈzæsərbeɪt/",
    level: "C1",
    meaning: "악화시키다, 더 심하게 만들다",
    definition: "To make a problem, bad situation, or negative feeling worse.",
    explanation:
      "이미 있는 문제나 나쁜 상황을 더 나쁘게 만든다는 뜻이다. worsen과 같은 뜻이지만 격식 있고, 반드시 '원래 나쁜 것'을 목적어로 받는다는 점이 중요하다. 좋은 상태를 나쁘게 만드는 데는 쓰지 않는다. 문제, 증상, 긴장, 불평등, 부족 같은 말과 자주 붙고 뉴스, 보고서, 장애 분석에서 흔히 보인다. 타동사로 쓰며 aggravate와 거의 같은 뜻이다.",
    examples: [
      {
        en: "Retrying failed requests without backoff only exacerbated the outage.",
        ko: "백오프 없이 실패한 요청을 재시도하는 바람에 장애가 오히려 더 커졌다.",
        note: "이미 있던 문제(outage)를 더 키운다는 전형적인 쓰임이다. only와 함께 '오히려'라는 느낌을 준다.",
      },
      {
        en: "The layoffs exacerbated tensions between management and the union.",
        ko: "정리 해고로 경영진과 노조 사이의 갈등이 더 깊어졌다.",
      },
      {
        en: "Rising rents have exacerbated the housing shortage in major cities.",
        ko: "임대료 상승이 대도시의 주택 부족 문제를 악화시켰다.",
        note: "shortage, inequality, problem처럼 원래 부정적인 명사가 목적어로 온다.",
      },
      {
        en: "Scratching will only exacerbate the rash.",
        ko: "긁으면 발진이 더 심해질 뿐이다.",
      },
    ],
    collocations: ["exacerbate the problem", "exacerbate tensions", "exacerbate symptoms", "further exacerbate", "be exacerbated by"],
    synonyms: ["worsen", "aggravate", "intensify", "compound", "inflame"],
    antonyms: ["alleviate", "ameliorate", "mitigate", "ease"],
    family: ["exacerbation (n.)"],
    confusedWith: [
      { word: "exasperate", note: "exasperate는 사람을 '몹시 짜증 나게 하다'로 목적어가 사람이다. exacerbate는 문제·상황을 '악화시키다'로 목적어가 상황이다." },
    ],
    origin: "라틴어 exacerbare(ex- + acerbus 쓴, 가혹한)에서 왔다. acerbic(신랄한)과 같은 뿌리다.",
    themes: ["business", "academic", "tech"],
  },
  {
    word: "expedite",
    pos: ["verb"],
    ipa: "/ˈekspədaɪt/",
    level: "C1",
    meaning: "신속히 처리하다, 촉진하다, 앞당기다",
    definition: "To make a process or action happen more quickly.",
    explanation:
      "절차나 일이 더 빨리 진행되도록 처리한다는 뜻이다. speed up과 같은 뜻이지만 업무·행정 문맥에서 쓰는 격식 있는 말이고, 주문, 배송, 승인, 심사, 처리 같은 '절차'를 목적어로 받는 일이 많다. 'expedited shipping'(빠른 배송)처럼 비용을 더 내고 우선 처리하는 서비스를 가리키기도 한다. 사람을 목적어로 받지 않는다. 'expedite the process'가 가장 흔한 결합이다.",
    examples: [
      {
        en: "Can we expedite the security review so the hotfix ships before the weekend?",
        ko: "핫픽스가 주말 전에 나갈 수 있게 보안 검토를 좀 빨리 처리해 줄 수 있을까요?",
        note: "검토·승인 같은 절차를 앞당겨 달라는 업무 요청에 딱 맞는다.",
      },
      {
        en: "For an extra fee, the embassy will expedite your visa application.",
        ko: "추가 비용을 내면 대사관에서 비자 신청을 신속하게 처리해 준다.",
      },
      {
        en: "I paid for expedited shipping, but the package still arrived late.",
        ko: "빠른 배송비를 냈는데도 택배가 늦게 왔다.",
        note: "expedited shipping/delivery는 쇼핑몰에서 흔히 보는 표현이다.",
      },
    ],
    collocations: ["expedite the process", "expedite delivery", "expedited shipping", "expedite approval", "help expedite"],
    synonyms: ["speed up", "accelerate", "hasten", "fast-track", "facilitate"],
    antonyms: ["delay", "hinder", "slow down", "obstruct"],
    family: ["expedition (n.)", "expeditious (adj.)", "expeditiously (adv.)", "expediter (n.)"],
    confusedWith: [
      { word: "expedient", note: "expedient는 '(원칙보다) 편의상 유리한, 방편'이라는 뜻의 형용사·명사다. expedite는 '빨리 처리하다'라는 동사다." },
    ],
    origin: "라틴어 expedire(ex- 밖으로 + pes, ped- 발)에서 왔다. '묶인 발을 풀어 주다'에서 '일이 막힘없이 나아가게 하다'가 됐다.",
    themes: ["business", "tech"],
  },
  {
    word: "extrapolate",
    pos: ["verb"],
    ipa: "/ɪkˈstræpəleɪt/",
    level: "C2",
    meaning: "추정하다, (기존 자료로) 미루어 짐작하다, 외삽하다",
    definition: "To estimate or conclude something unknown by extending known facts, data, or trends beyond their range.",
    explanation:
      "알고 있는 자료나 추세를 그 범위 밖으로 늘려서 모르는 값이나 미래를 추정한다는 뜻이다. 통계·과학에서는 '외삽'이라는 전문 용어이고, 일반 글에서는 '일부에서 전체를 미루어 짐작하다'라는 뜻으로 쓴다. 'extrapolate from A (to B)'가 기본 형태다. 범위 밖으로 넘어가는 추정이라 틀릴 위험이 있다는 경고와 함께 자주 쓰인다. 범위 안의 빈 곳을 메우는 interpolate와 반대 개념이다.",
    examples: [
      {
        en: "If we extrapolate from last quarter's growth, we'll run out of disk space by March.",
        ko: "지난 분기 증가세로 미루어 보면 3월이면 디스크 공간이 바닥난다.",
        note: "extrapolate from ~. 기존 추세를 앞으로 늘려 미래를 예측하는 쓰임이다.",
      },
      {
        en: "It's risky to extrapolate the results of a ten-person pilot to the entire company.",
        ko: "열 명짜리 시범 운영 결과를 회사 전체로 확대해 짐작하는 건 위험하다.",
        note: "작은 표본에서 전체로 넓히는 위험을 경고할 때 자주 쓴다. extrapolate A to B 형태다.",
      },
      {
        en: "Scientists extrapolated past temperature records to project warming over the next century.",
        ko: "과학자들은 과거 기온 기록을 바탕으로 다음 세기의 온난화를 추정했다.",
      },
    ],
    collocations: ["extrapolate from", "extrapolate the results", "extrapolate to", "difficult to extrapolate", "extrapolate a trend"],
    synonyms: ["infer", "project", "estimate", "deduce", "generalize"],
    family: ["extrapolation (n.)"],
    confusedWith: [
      { word: "interpolate", note: "interpolate는 아는 값들 '사이'의 빈 곳을 추정하는 것(보간)이고, extrapolate는 아는 범위 '바깥'을 추정하는 것(외삽)이다." },
    ],
    origin: "19세기에 extra-(바깥)에 interpolate(보간하다)를 본떠 만든 말이다.",
    themes: ["academic", "tech", "argument"],
  },
];
