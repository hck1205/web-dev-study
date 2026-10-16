import type { VocabEntry } from "../types";

export const WORDS_S: VocabEntry[] = [
  {
    word: "salient",
    pos: ["adjective"],
    ipa: "/ˈseɪliənt/",
    level: "C1",
    meaning: "가장 두드러진, 핵심적인, 눈에 띄는",
    definition: "Most noticeable or important; standing out from the rest.",
    explanation:
      "여러 사실이나 특징 가운데 특히 눈에 띄고 중요한 것을 가리킬 때 쓴다. 거의 항상 명사 앞에 붙어 salient point, salient features, salient facts처럼 쓰이고, 보고서·논문·회의 요약 같은 격식 있는 글에 어울린다. important는 중요하다는 판단만 담지만 salient는 '많은 것 중에서 튀어나와 보인다'는 느낌이 있어 요점을 추릴 때 잘 맞는다. 일상 대화에서는 main이나 key가 더 자연스럽다.",
    examples: [
      {
        en: "Before the meeting, could you pull out the salient points from the customer interviews?",
        ko: "회의 전에 고객 인터뷰에서 핵심적인 내용만 뽑아 줄 수 있어?",
        note: "salient points는 긴 자료에서 '요점'을 추릴 때 가장 흔히 쓰는 짝이다.",
      },
      {
        en: "The most salient feature of the new design is that it works entirely offline.",
        ko: "새 설계에서 가장 두드러진 특징은 완전히 오프라인으로 동작한다는 점이다.",
      },
      {
        en: "The report summarizes the salient facts of the case without taking sides.",
        ko: "그 보고서는 어느 쪽 편도 들지 않고 사건의 주요 사실만 정리한다.",
        note: "법률·뉴스 문맥에서 salient facts는 판단에 꼭 필요한 사실을 뜻한다.",
      },
    ],
    collocations: ["salient point", "salient features", "salient facts", "most salient", "salient issue"],
    synonyms: ["prominent", "notable", "conspicuous", "striking", "key"],
    antonyms: ["minor", "inconspicuous", "insignificant"],
    family: ["salience (n.)", "saliency (n.)", "saliently (adv.)"],
    confusedWith: [
      { word: "saline", note: "saline은 '소금기가 있는, 식염수'라는 뜻으로 철자만 비슷하고 의미는 전혀 다르다." },
    ],
    origin: "라틴어 salire(뛰다, 뛰어오르다)에서 왔다. '튀어나와 보이는 것'으로 외우면 쉽다.",
    themes: ["academic", "business"],
  },
  {
    word: "scrutinize",
    pos: ["verb"],
    ipa: "/ˈskruːtənaɪz/",
    level: "C1",
    forms: ["scrutinise", "scrutinised", "scrutinising"],
    meaning: "면밀히 검토하다, 꼼꼼히 뜯어보다",
    definition: "To examine or inspect something closely and thoroughly, often looking for faults.",
    explanation:
      "대충 훑는 것이 아니라 하나하나 따져 가며 자세히 살펴본다는 뜻이다. 계약서, 예산, 코드, 후보자의 경력처럼 문제가 숨어 있을 수 있는 대상을 '흠을 찾을 듯이' 본다는 뉘앙스가 있어 examine보다 강하다. 타동사라서 scrutinize the data처럼 목적어를 바로 쓰고, scrutinize on이나 scrutinize into처럼 전치사를 붙이면 틀린다. 영국식 철자는 scrutinise이고, 명사형은 scrutiny로 come under scrutiny(감시·검증을 받다)라는 표현이 아주 흔하다.",
    examples: [
      {
        en: "Reviewers scrutinized every line of the migration script before it ran in production.",
        ko: "리뷰어들은 마이그레이션 스크립트가 운영 환경에서 실행되기 전에 한 줄 한 줄 꼼꼼히 검토했다.",
        note: "목적어를 바로 받는 타동사다. 'scrutinized on every line'이라고 쓰지 않는다.",
      },
      {
        en: "The board will scrutinize the budget proposal at next week's meeting.",
        ko: "이사회는 다음 주 회의에서 예산안을 면밀히 검토할 것이다.",
      },
      {
        en: "Her research has been heavily scrutinised by other scientists in the field.",
        ko: "그녀의 연구는 같은 분야의 다른 과학자들에게 철저한 검증을 받아 왔다.",
        note: "영국식 철자 scrutinise다. 수동태로 '검증 대상이 되다'라는 의미로도 자주 쓴다.",
      },
      {
        en: "He scrutinized the menu as if it were a legal document.",
        ko: "그는 메뉴판을 무슨 법률 문서라도 되는 양 뚫어지게 들여다봤다.",
      },
    ],
    collocations: ["scrutinize closely", "carefully scrutinize", "scrutinize the evidence", "scrutinize every detail", "be publicly scrutinized"],
    synonyms: ["examine", "inspect", "analyze", "vet", "pore over"],
    antonyms: ["skim", "glance at", "overlook"],
    family: ["scrutiny (n.)", "scrutineer (n.)", "inscrutable (adj.)"],
    confusedWith: [
      { word: "examine", note: "examine은 중립적으로 '살펴보다'이고, scrutinize는 결함을 찾듯 훨씬 꼼꼼하고 비판적으로 본다는 느낌이 있다." },
    ],
    origin: "라틴어 scrutari(샅샅이 뒤지다)에서 나온 scrutiny에 동사 어미 -ize가 붙었다.",
    themes: ["academic", "business", "tech"],
  },
  {
    word: "spurious",
    pos: ["adjective"],
    ipa: "/ˈspjʊriəs/",
    level: "C2",
    meaning: "거짓의, 그럴듯하지만 근거 없는, 가짜의",
    definition: "Not genuine or valid, though it may appear to be; based on false reasoning.",
    explanation:
      "겉보기엔 그럴싸하지만 실제로는 근거가 없거나 진짜가 아니라는 뜻이다. 논증이나 주장(spurious argument, spurious claim), 통계(spurious correlation, 겉으로만 관련 있어 보이는 상관관계)에 자주 쓰여 학술·논쟁 문맥에서 많이 보인다. 기술 분야에서도 spurious wakeup(이유 없이 깨어나는 스레드), spurious alert(실제 문제 없이 울린 경보)처럼 '진짜 원인 없이 생긴 것'을 가리킨다. fake는 의도적으로 속인다는 느낌이 강하지만 spurious는 속일 의도가 없어도 '잘못된, 근거 없는'을 뜻할 수 있다.",
    examples: [
      {
        en: "Most of the spurious alerts came from a health check with a timeout that was far too short.",
        ko: "엉뚱하게 울린 경보 대부분은 타임아웃이 너무 짧게 잡힌 헬스 체크 하나에서 나왔다.",
        note: "실제 장애 없이 발생한 경보를 spurious alerts라고 한다. 모니터링 문맥에서 흔하다.",
      },
      {
        en: "Ice cream sales and drowning rates rise together, but the link between them is spurious.",
        ko: "아이스크림 판매량과 익사율은 함께 오르지만, 둘 사이의 관계는 허구다.",
        note: "통계에서 spurious correlation(가짜 상관관계)은 제3의 요인(여기선 더운 날씨) 때문에 생긴 관계를 말한다.",
      },
      {
        en: "The lawyer dismissed the accusation as spurious and politically motivated.",
        ko: "변호사는 그 비난을 근거 없고 정치적 의도가 깔린 것이라며 일축했다.",
      },
    ],
    collocations: ["spurious correlation", "spurious argument", "spurious claim", "spurious accuracy", "entirely spurious"],
    synonyms: ["false", "bogus", "specious", "unfounded", "fake"],
    antonyms: ["genuine", "valid", "authentic", "legitimate"],
    family: ["spuriously (adv.)", "spuriousness (n.)"],
    confusedWith: [
      { word: "specious", note: "specious는 '겉보기에만 그럴듯한(논리)'을 강조하고, spurious는 '근거가 없거나 진짜가 아님' 자체를 강조한다. 둘이 겹치는 경우가 많다." },
    ],
    origin: "라틴어 spurius(사생아의, 가짜의)에서 왔다.",
    themes: ["academic", "argument", "tech"],
  },
  {
    word: "substantiate",
    pos: ["verb"],
    ipa: "/səbˈstænʃieɪt/",
    level: "C2",
    meaning: "입증하다, (주장을) 뒷받침하다",
    definition: "To provide evidence to support or prove the truth of a claim or statement.",
    explanation:
      "주장, 혐의, 보고 내용이 사실임을 증거로 뒷받침한다는 뜻이다. 목적어는 거의 claim, allegation, accusation, theory처럼 '주장'에 해당하는 말이 오고, 법률·감사·학술·언론 글에서 자주 쓰는 격식 있는 단어다. prove는 완전히 증명한다는 느낌이지만 substantiate는 '증거로 근거를 댄다'는 쪽이라 증거가 부분적이어도 쓸 수 있다. 부정형 unsubstantiated(근거 없는)가 뉴스에서 특히 흔하고, '증거로'는 with evidence나 by data처럼 쓴다.",
    examples: [
      {
        en: "If you think the new index made writes slower, substantiate it with benchmark numbers.",
        ko: "새 인덱스 때문에 쓰기가 느려졌다고 생각하면 벤치마크 수치로 뒷받침해 줘.",
        note: "substantiate A with B(B로 A를 뒷받침하다) 구조가 자연스럽다.",
      },
      {
        en: "The auditors could not substantiate several of the expenses claimed last quarter.",
        ko: "감사인들은 지난 분기에 청구된 비용 몇 건의 근거를 확인할 수 없었다.",
      },
      {
        en: "None of the allegations in the article have been substantiated.",
        ko: "기사에 나온 의혹 중 어느 것도 입증되지 않았다.",
        note: "수동태와 부정문으로 '근거가 확인되지 않았다'라는 뉴스 문장에 자주 쓴다.",
      },
    ],
    collocations: ["substantiate a claim", "substantiate the allegations", "substantiate with evidence", "fail to substantiate", "unsubstantiated rumors"],
    synonyms: ["corroborate", "verify", "back up", "support", "confirm"],
    antonyms: ["refute", "disprove", "contradict"],
    family: ["substantiation (n.)", "unsubstantiated (adj.)", "substantial (adj.)", "substance (n.)"],
    confusedWith: [
      { word: "corroborate", note: "corroborate는 이미 있는 진술을 '다른 증거나 증언이 확인해 준다'는 뜻이고, substantiate는 주장한 사람이 직접 근거를 대는 상황에도 쓴다." },
    ],
    origin: "라틴어 substantia(실체, 본질)에서 왔다. '주장에 실체를 부여하다'로 외우면 된다.",
    themes: ["academic", "argument", "business"],
  },
  {
    word: "superfluous",
    pos: ["adjective"],
    ipa: "/suːˈpɝːfluəs/",
    level: "C2",
    meaning: "불필요한, 쓸데없는, 남아도는",
    definition: "Unnecessary, especially because more than enough already exists.",
    explanation:
      "이미 충분한데 더해져서 필요 없는 것을 가리킨다. 문장 속 군더더기 단어, 중복된 설정, 남는 인력처럼 '있어도 아무 역할을 하지 않는' 것에 쓰는 격식 있는 말이다. unnecessary보다 '넘쳐서 남는다'는 느낌이 분명하고, redundant와 비슷하지만 redundant는 기술 문맥에서 '예비로 일부러 중복해 둔(이중화)'이라는 긍정적인 뜻도 있다는 점이 다르다. 영국 영어에는 superfluous to requirements(필요 이상이라 쓸모없는)라는 관용 표현이 있다.",
    examples: [
      {
        en: "Since the framework already escapes HTML, the extra sanitizing call is superfluous.",
        ko: "프레임워크가 이미 HTML을 이스케이프하므로 추가로 넣은 정제 호출은 불필요하다.",
        note: "이미 다른 곳에서 처리하고 있어서 '중복된 코드'라는 맥락이다.",
      },
      {
        en: "Cut the superfluous words and the email will be half as long.",
        ko: "쓸데없는 단어를 빼면 이메일 길이가 절반으로 줄어들 거야.",
      },
      {
        en: "After the merger, many middle-management roles were deemed superfluous.",
        ko: "합병 후 많은 중간 관리직이 불필요하다고 판단됐다.",
        note: "deem/consider + superfluous 구조로 '불필요하다고 보다'를 격식 있게 표현한다.",
      },
    ],
    collocations: ["superfluous detail", "superfluous words", "seem superfluous", "render superfluous", "superfluous to requirements"],
    synonyms: ["unnecessary", "redundant", "surplus", "excess", "extraneous"],
    antonyms: ["essential", "necessary", "indispensable"],
    family: ["superfluity (n.)", "superfluously (adv.)"],
    confusedWith: [
      { word: "redundant", note: "redundant도 '불필요한 중복'을 뜻하지만, IT에서는 장애 대비로 일부러 중복한 '이중화된'이라는 좋은 뜻도 있고 영국 영어에선 '정리해고된'이라는 뜻도 있다." },
    ],
    origin: "라틴어 super(넘어서) + fluere(흐르다). '넘쳐흐르는 것'이라 필요 없는 것이 됐다.",
    themes: ["academic", "everyday"],
  },
];
