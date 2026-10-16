import type { VocabEntry } from "../types";

export const WORDS_C: VocabEntry[] = [
  {
    word: "candid",
    pos: ["adjective"],
    ipa: "/ˈkændɪd/",
    level: "C1",
    meaning: "솔직한, 숨김없는, (사진이) 꾸미지 않은",
    definition: "Truthful and straightforward, especially about something unpleasant or difficult; (of a photo) taken without the subject posing.",
    explanation:
      "듣기 불편한 내용까지 감추지 않고 솔직하게 말하는 태도를 가리킨다. 대상은 about, 상대는 with로 받는다(be candid with you about the budget). honest보다 '터놓고 말한다'는 느낌이 강하고, blunt처럼 무례하다는 뉘앙스는 없어서 칭찬으로 쓰기 좋다. 회의나 피드백 자리에서 To be candid,처럼 말을 시작하기도 한다. 사진에서는 포즈를 잡지 않고 자연스럽게 찍은 것을 candid shot이라고 한다.",
    examples: [
      {
        en: "To be candid, I don't think we can ship this feature by Friday without cutting tests.",
        ko: "솔직히 말하면 테스트를 줄이지 않고는 금요일까지 이 기능을 내보내기 어렵다고 생각한다.",
        note: "To be candid,는 불편한 의견을 꺼낼 때 쓰는 정중한 도입부다. frankly보다 약간 부드럽다.",
      },
      {
        en: "The CEO was unusually candid with employees about the company's financial problems.",
        ko: "CEO는 회사의 재정 문제를 직원들에게 이례적으로 솔직하게 털어놓았다.",
        note: "사람은 with, 주제는 about으로 받는다.",
      },
      {
        en: "In a candid interview, the actor talked openly about his struggle with anxiety.",
        ko: "그 배우는 솔직한 인터뷰에서 불안 장애와 싸워 온 이야기를 터놓고 했다.",
      },
      {
        en: "My favorite wedding photos are the candid ones, not the posed portraits.",
        ko: "내가 가장 좋아하는 결혼식 사진은 포즈를 잡은 사진이 아니라 자연스럽게 찍힌 사진들이다.",
      },
    ],
    collocations: ["candid conversation", "candid feedback", "candid interview", "be candid about", "candid photo"],
    synonyms: ["frank", "honest", "forthright", "outspoken", "open"],
    antonyms: ["evasive", "guarded", "disingenuous", "secretive"],
    family: ["candidly (adv.)", "candor (n.)"],
    confusedWith: [
      { word: "blunt", note: "blunt는 상대 기분을 배려하지 않고 직설적으로 말해 무례하게 들릴 수 있고, candid는 솔직하되 긍정적인 평가에 가깝다." },
    ],
    origin: "라틴어 candidus(하얀, 순수한)에서 왔다. 하얗게, 숨김없이라고 외우면 된다.",
    themes: ["business", "everyday"],
  },
  {
    word: "capricious",
    pos: ["adjective"],
    ipa: "/kəˈprɪʃəs/",
    level: "C2",
    meaning: "변덕스러운, 예측할 수 없는",
    definition: "Given to sudden and unaccountable changes of mood or behavior.",
    explanation:
      "기분이나 판단이 이유 없이 갑자기 바뀌어서 예측할 수 없다는 뜻이다. 사람(a capricious boss)뿐 아니라 날씨, 시장, 운명처럼 통제할 수 없는 대상에도 자주 쓴다. fickle은 주로 애정·충성심이 쉽게 변하는 사람에게, capricious는 결정이나 행동의 변덕에 초점이 있다. 문어적이고 비판적인 말이라 칭찬으로는 쓰지 않는다. arbitrary와 함께 arbitrary and capricious라는 법률 표현으로도 쓴다.",
    examples: [
      {
        en: "The app store's review process felt capricious: the same build was rejected on Monday and approved on Tuesday.",
        ko: "앱 스토어 심사는 종잡을 수 없었다. 똑같은 빌드가 월요일엔 거절됐다가 화요일엔 승인됐다.",
        note: "같은 조건에서 결과가 이유 없이 달라지는 상황을 비판할 때 잘 맞는다.",
      },
      {
        en: "Working for such a capricious manager meant priorities changed every week.",
        ko: "그렇게 변덕스러운 매니저 밑에서 일하다 보니 우선순위가 매주 바뀌었다.",
      },
      {
        en: "Farmers in the region are at the mercy of capricious weather.",
        ko: "그 지역 농민들은 변덕스러운 날씨에 좌우된다.",
        note: "capricious weather는 굳어진 조합이다. 사람이 아닌 대상에도 쓴다.",
      },
    ],
    collocations: ["capricious weather", "capricious decision", "capricious nature", "arbitrary and capricious", "capricious boss"],
    synonyms: ["fickle", "erratic", "mercurial", "unpredictable", "whimsical"],
    antonyms: ["consistent", "steady", "predictable", "dependable"],
    family: ["caprice (n.)", "capriciously (adv.)", "capriciousness (n.)"],
    confusedWith: [
      { word: "arbitrary", note: "arbitrary는 '근거 없이 정한' 것이고, capricious는 거기에 더해 '기분에 따라 자꾸 바뀌는' 것이다." },
    ],
    origin: "이탈리아어 capriccio(변덕)에서 프랑스어 capricieux를 거쳐 들어왔다.",
    themes: ["emotion", "everyday"],
  },
  {
    word: "circumvent",
    pos: ["verb"],
    ipa: "/ˌsɜːrkəmˈvent/",
    level: "C1",
    meaning: "우회하다, (규칙·제한을) 피해 가다",
    definition: "To find a way around an obstacle, rule, or restriction, often in a clever or questionable way.",
    explanation:
      "장애물이나 규칙을 정면으로 어기지 않고 '빙 돌아서' 피해 간다는 뜻의 타동사다. 규칙, 제재, 검열, 보안 장치처럼 막으려고 만든 것이 목적어로 오고, 꼼수라는 부정적인 뉘앙스가 자주 따른다. bypass와 비슷하지만 bypass는 기술적으로 거치지 않고 지나간다는 중립적인 뜻으로도 쓰고, circumvent는 의도적으로 제한을 빠져나간다는 느낌이 더 강하다. 법률·뉴스·보안 문서에서 많이 쓰는 격식 있는 말이다.",
    examples: [
      {
        en: "Some users circumvent the rate limit by rotating API keys across multiple accounts.",
        ko: "일부 사용자는 여러 계정의 API 키를 돌려 쓰는 식으로 요청 제한을 우회한다.",
        note: "막으려고 만든 장치(rate limit)를 꼼수로 피해 가는 상황이라 circumvent가 딱 맞다.",
      },
      {
        en: "The company was fined for setting up shell firms to circumvent export sanctions.",
        ko: "그 회사는 수출 제재를 피하려고 유령 회사를 세운 일로 벌금을 물었다.",
        note: "circumvent sanctions/the law는 뉴스에서 흔한 조합이다.",
      },
      {
        en: "Many people use VPNs to circumvent internet censorship.",
        ko: "많은 사람이 인터넷 검열을 피하려고 VPN을 쓴다.",
      },
      {
        en: "We circumvented the traffic jam by taking the back roads.",
        ko: "우리는 뒷길로 가서 교통 체증을 피했다.",
      },
    ],
    collocations: ["circumvent the rules", "circumvent restrictions", "circumvent the law", "circumvent security measures", "circumvent censorship"],
    synonyms: ["bypass", "get around", "evade", "sidestep", "dodge"],
    antonyms: ["comply with", "obey", "confront"],
    family: ["circumvention (n.)"],
    confusedWith: [
      { word: "circumscribe", note: "circumscribe는 범위를 '제한하다, 한정하다'라는 뜻이다. circumvent는 그런 제한을 '피해 가는' 쪽이다." },
    ],
    origin: "라틴어 circum(둘레) + venire(오다). 둘레로 돌아서 온다는 뜻이다.",
    themes: ["tech", "business"],
  },
  {
    word: "coalesce",
    pos: ["verb"],
    ipa: "/ˌkoʊəˈles/",
    level: "C2",
    meaning: "합쳐지다, 하나로 뭉치다",
    definition: "To come together to form one mass, group, or whole.",
    explanation:
      "흩어져 있던 것들이 자연스럽게 모여 하나가 된다는 뜻의 자동사다. 무엇으로 합쳐지는지는 into, 무엇을 중심으로 뭉치는지는 around로 받는다(coalesce into a plan, coalesce around a candidate). merge나 combine보다 '서서히, 저절로 형태를 갖춘다'는 느낌이 있고, 의견·운동·아이디어처럼 추상적인 대상에 자주 쓴다. 문어적이고 격식 있는 말이다. 개발에서는 SQL의 COALESCE 함수(처음으로 NULL이 아닌 값을 고름)나 여러 요청을 하나로 묶는 request coalescing으로 접한다.",
    examples: [
      {
        en: "The cache coalesces concurrent requests for the same key into a single backend call.",
        ko: "캐시는 같은 키에 대한 동시 요청을 백엔드 호출 한 번으로 합친다.",
        note: "기술 문서에서는 타동사처럼 '합치다'로도 쓴다. request coalescing이라는 용어가 여기서 나왔다.",
      },
      {
        en: "After weeks of debate, the team's scattered ideas began to coalesce into a clear roadmap.",
        ko: "몇 주간 논의한 끝에 팀의 흩어진 아이디어가 명확한 로드맵으로 모이기 시작했다.",
        note: "coalesce into는 서서히 형태를 갖춰 가는 과정을 보여 준다.",
      },
      {
        en: "Opposition groups have coalesced around a single presidential candidate.",
        ko: "야권 단체들은 한 명의 대선 후보를 중심으로 결집했다.",
      },
      {
        en: "Tiny water droplets coalesce to form raindrops.",
        ko: "작은 물방울들이 합쳐져서 빗방울이 된다.",
      },
    ],
    collocations: ["coalesce into", "coalesce around", "begin to coalesce", "ideas coalesce", "coalesce requests"],
    synonyms: ["merge", "unite", "combine", "come together", "fuse"],
    antonyms: ["separate", "fragment", "disperse", "split"],
    family: ["coalescence (n.)", "coalescent (adj.)", "coalition (n.)"],
    origin: "라틴어 coalescere(함께 자라다)에서 왔다. co-(함께) + alescere(자라다). coalition(연합)도 같은 뿌리다.",
    themes: ["academic", "tech"],
  },
  {
    word: "cogent",
    pos: ["adjective"],
    ipa: "/ˈkoʊdʒənt/",
    level: "C2",
    meaning: "설득력 있는, 타당한, 논리적인",
    definition: "(Of an argument or case) clear, logical, and convincing.",
    explanation:
      "논리가 분명하고 근거가 탄탄해서 반박하기 어렵다는 뜻이다. 주로 argument, case, reason, explanation 같은 말을 꾸미고, 사람에게 직접 쓰는 일은 드물다. persuasive가 감정이나 말솜씨로 설득하는 것까지 포함한다면 cogent는 '논리'로 설득한다는 데 초점이 있다. 학술 글, 법률 문서, 평가서에서 쓰는 격식 있는 말이다.",
    examples: [
      {
        en: "She made a cogent case for dropping the legacy API instead of maintaining two versions.",
        ko: "그녀는 두 버전을 유지하는 대신 레거시 API를 없애야 한다는 설득력 있는 근거를 내놓았다.",
        note: "make a cogent case for ~는 '~해야 한다는 논리 정연한 주장을 펴다'라는 뜻으로 자주 쓴다.",
      },
      {
        en: "The board found no cogent reason to delay the acquisition any further.",
        ko: "이사회는 인수를 더 미룰 타당한 이유를 찾지 못했다.",
      },
      {
        en: "The essay was well written but lacked a cogent argument.",
        ko: "그 에세이는 잘 쓰였지만 설득력 있는 논지가 없었다.",
        note: "글쓰기 평가에서 자주 보는 표현이다. 문장력(well written)과 논리(cogent)를 구분한다.",
      },
    ],
    collocations: ["cogent argument", "cogent case", "cogent reason", "cogent explanation", "cogently argued"],
    synonyms: ["compelling", "convincing", "persuasive", "well-reasoned", "sound"],
    antonyms: ["weak", "unconvincing", "flimsy", "specious"],
    family: ["cogency (n.)", "cogently (adv.)"],
    origin: "라틴어 cogere(몰아붙이다, 강제하다)에서 왔다. 듣는 사람이 동의할 수밖에 없게 만드는 논리라는 뜻이다.",
    themes: ["argument", "academic"],
  },
  {
    word: "commensurate",
    pos: ["adjective"],
    ipa: "/kəˈmenʃərət/",
    level: "C2",
    meaning: "상응하는, 비례하는, 걸맞은",
    definition: "Corresponding in size, extent, amount, or degree; in proportion.",
    explanation:
      "크기나 정도가 다른 것에 '맞먹는', '비례하는'이라는 뜻이다. 거의 항상 commensurate with 형태로 쓰고, 드물게 to를 쓰기도 한다. 채용 공고의 salary commensurate with experience(경력에 따라 연봉 책정)가 가장 유명한 쓰임이다. proportionate와 비슷하지만 commensurate는 '그에 걸맞은 수준'이라는 평가가 들어간다. 계약서, 공고, 정책 문서에서 쓰는 격식 있는 말이다.",
    examples: [
      {
        en: "Salary will be commensurate with experience and qualifications.",
        ko: "연봉은 경력과 자격에 따라 책정된다.",
        note: "채용 공고의 상투적인 문장이다. commensurate with를 한 덩어리로 기억한다.",
      },
      {
        en: "The amount of testing should be commensurate with the risk of the change.",
        ko: "테스트의 양은 변경이 가진 위험도에 걸맞아야 한다.",
        note: "위험과 대응 수준을 맞춰야 한다는 원칙을 말할 때 자연스럽다.",
      },
      {
        en: "Critics say the punishment was not commensurate with the crime.",
        ko: "비판하는 쪽은 그 처벌이 범죄의 무게에 상응하지 않는다고 말한다.",
      },
    ],
    collocations: ["commensurate with experience", "commensurate with the risk", "commensurate with one's abilities", "a commensurate increase"],
    synonyms: ["proportionate", "corresponding", "in line with", "equivalent", "appropriate to"],
    antonyms: ["disproportionate", "incommensurate", "inadequate"],
    family: ["commensurately (adv.)", "incommensurate (adj.)"],
    confusedWith: [
      { word: "commiserate", note: "commiserate는 남의 불행에 '함께 안타까워하다, 위로하다'라는 동사다. 철자가 비슷하지만 뜻은 전혀 다르다." },
    ],
    origin: "후기 라틴어 commensuratus에서 왔다. com-(함께) + mensurare(재다). 같은 잣대로 잴 수 있다는 뜻이다.",
    themes: ["business", "academic"],
  },
  {
    word: "complacent",
    pos: ["adjective"],
    ipa: "/kəmˈpleɪsnt/",
    level: "C1",
    forms: ["complacency"],
    meaning: "자만하는, 현실에 안주하는",
    definition: "Showing uncritical satisfaction with oneself or one's situation, so that one fails to notice danger or the need to improve.",
    explanation:
      "지금 상태에 만족한 나머지 위험이나 개선할 점을 보지 못한다는 비판적인 말이다. 전치사는 about을 쓴다(complacent about security). smug가 남에게 우쭐대는 태도를 드러내는 것이라면 complacent는 경계심이 풀려 있다는 데 초점이 있다. 비즈니스, 보안, 스포츠, 정책 이야기에서 We can't afford to be complacent처럼 경고하는 문장에 자주 나온다. 명사 complacency도 매우 흔하다.",
    examples: [
      {
        en: "Six months without an incident made us complacent about reviewing our alerts.",
        ko: "반년 동안 장애가 없자 우리는 알림을 점검하는 일에 소홀해졌다.",
        note: "complacent about ~ 형태다. 잘되고 있을 때 경계가 풀리는 상황을 정확히 짚는다.",
      },
      {
        en: "Market leaders often become complacent and miss the next shift in technology.",
        ko: "시장 선두 기업은 현실에 안주하다가 다음 기술 변화를 놓치는 경우가 많다.",
      },
      {
        en: "Health officials warned against complacency as case numbers began to fall.",
        ko: "보건 당국은 확진자 수가 줄기 시작하자 방심해서는 안 된다고 경고했다.",
        note: "명사 complacency는 warn against complacency처럼 경고 문맥에서 자주 쓴다.",
      },
      {
        en: "We won the first game easily, but the coach told us not to get complacent.",
        ko: "첫 경기는 쉽게 이겼지만 코치는 방심하지 말라고 했다.",
      },
    ],
    collocations: ["become complacent", "complacent about", "can't afford to be complacent", "guard against complacency"],
    synonyms: ["self-satisfied", "smug", "overconfident", "lax"],
    antonyms: ["vigilant", "alert", "watchful", "diligent"],
    family: ["complacency (n.)", "complacently (adv.)"],
    confusedWith: [
      { word: "complaisant", note: "complaisant는 남의 뜻에 잘 맞춰 주는 '고분고분한'이라는 뜻이다. 발음이 비슷해서 헷갈리지만 complacent는 자기 만족에 빠진 상태다." },
    ],
    origin: "라틴어 complacere(매우 기쁘게 하다)에서 왔다. 스스로에게 너무 만족한 상태라고 외우면 된다.",
    themes: ["business", "emotion"],
  },
  {
    word: "conducive",
    pos: ["adjective"],
    ipa: "/kənˈduːsɪv/",
    level: "C1",
    meaning: "(~에) 도움이 되는, ~하기 좋은",
    definition: "Making a certain situation or outcome likely or possible.",
    explanation:
      "어떤 결과가 생기기 쉬운 환경이나 조건을 만든다는 뜻이다. 항상 conducive to + 명사/동명사 형태로 쓰고, conducive for는 틀린 형태다. 주로 learning, growth, productivity 같은 좋은 결과와 함께 쓰며, 부정문(not conducive to)으로 '방해가 된다'를 완곡하게 말할 때도 많다. helpful보다 격식 있고, 환경이나 분위기가 결과를 '이끈다'는 느낌이 있다.",
    examples: [
      {
        en: "An open-plan office with constant chatter is not conducive to deep work.",
        ko: "끊임없이 말소리가 들리는 개방형 사무실은 깊이 몰입해서 일하기에 좋지 않다.",
        note: "not conducive to는 '방해가 된다'를 부드럽게 말하는 방법이다.",
      },
      {
        en: "Low interest rates create conditions conducive to investment.",
        ko: "낮은 금리는 투자하기 좋은 여건을 만든다.",
      },
      {
        en: "Blameless postmortems foster a culture conducive to learning from failure.",
        ko: "책임을 묻지 않는 사후 분석은 실패에서 배우는 문화를 만드는 데 도움이 된다.",
        note: "to 뒤에 동명사(learning)가 온다. to를 부정사로 착각해 conducive to learn이라고 쓰지 않는다.",
      },
      {
        en: "A dark, cool bedroom is more conducive to sleep.",
        ko: "어둡고 서늘한 침실이 잠들기에 더 좋다.",
      },
    ],
    collocations: ["conducive to learning", "conducive to growth", "conducive environment", "not conducive to", "conditions conducive to"],
    synonyms: ["favorable", "helpful", "beneficial", "advantageous", "contributory"],
    antonyms: ["detrimental", "unfavorable", "harmful", "counterproductive"],
    family: ["conduce (v.)", "conduciveness (n.)"],
    confusedWith: [
      { word: "conductive", note: "conductive는 열·전기를 '전도하는'이라는 과학 용어다(conductive metal). 철자 한 글자 차이라 자주 틀린다." },
    ],
    origin: "라틴어 conducere(함께 이끌다, 가져오다)에서 왔다. 결과를 이끌어 낸다는 뜻이다.",
    themes: ["academic", "everyday"],
  },
  {
    word: "conjecture",
    pos: ["noun", "verb"],
    ipa: "/kənˈdʒektʃər/",
    level: "C1",
    meaning: "추측, 짐작; 추측하다",
    definition: "An opinion or conclusion formed on the basis of incomplete information; (verb) to form such an opinion.",
    explanation:
      "확실한 증거 없이 불완전한 정보로 내린 추측을 뜻한다. 불가산으로 쓰면 '추측 그 자체'(pure conjecture, a matter of conjecture), 가산으로 쓰면 '하나의 추측'이다. 수학에서는 아직 증명되지 않았지만 참일 것으로 보는 명제를 conjecture라고 한다(골드바흐의 추측). guess보다 격식 있고, speculation과 비슷하지만 conjecture는 근거가 부족하다는 점을 더 강조한다. 동사로 쓸 때는 conjecture that ~ 형태가 흔하다.",
    examples: [
      {
        en: "Without logs from that night, any explanation of the outage is pure conjecture.",
        ko: "그날 밤 로그가 없으니 장애에 대한 설명은 무엇이든 순전히 추측일 뿐이다.",
        note: "pure conjecture는 '근거 없는 추측'이라고 선을 그을 때 쓰는 고정 표현이다.",
      },
      {
        en: "Analysts conjectured that the delay was linked to supply problems, but the company never confirmed it.",
        ko: "분석가들은 지연이 공급 문제와 관련 있다고 추측했지만 회사는 끝내 확인해 주지 않았다.",
        note: "동사로 쓰면 conjecture that 절을 받는다.",
      },
      {
        en: "Goldbach's conjecture has been checked for enormous numbers but never proven.",
        ko: "골드바흐의 추측은 엄청나게 큰 수까지 확인됐지만 아직 증명되지 않았다.",
      },
      {
        en: "Why she left the party early remains a matter of conjecture.",
        ko: "그녀가 왜 파티에서 일찍 갔는지는 여전히 추측만 무성하다.",
      },
    ],
    collocations: ["pure conjecture", "a matter of conjecture", "open to conjecture", "idle conjecture", "conjecture that"],
    synonyms: ["speculation", "guess", "supposition", "surmise", "hypothesis"],
    antonyms: ["fact", "certainty", "proof"],
    family: ["conjectural (adj.)"],
    confusedWith: [
      { word: "hypothesis", note: "hypothesis는 실험·검증을 하려고 세운 '가설'이고, conjecture는 근거가 부족한 '추측'이다. 수학에서는 증명되지 않은 명제를 conjecture라고 부른다." },
    ],
    origin: "라틴어 conicere(함께 던지다)에서 왔다. 조각난 정보를 한데 던져 짐작한다는 뜻이다.",
    themes: ["academic", "argument"],
  },
  {
    word: "contentious",
    pos: ["adjective"],
    ipa: "/kənˈtenʃəs/",
    level: "C1",
    meaning: "논란이 많은, 논쟁을 일으키는, 다투기 좋아하는",
    definition: "Causing or likely to cause disagreement or argument; (of a person) likely to argue.",
    explanation:
      "의견이 크게 갈려서 다툼이 생기기 쉬운 주제나 상황을 가리킨다. a contentious issue, highly contentious처럼 쓰고, 사람에게 쓰면 '걸핏하면 따지는'이라는 부정적인 뜻이 된다. controversial과 거의 같지만 controversial은 사회적 논란에, contentious는 당사자 간의 실제 다툼이나 긴장에 조금 더 초점이 있다. 뉴스, 회의록, 법률 문서에서 흔히 쓴다. 발음이 비슷한 conscientious(성실한)와 헷갈리지 않게 주의한다.",
    examples: [
      {
        en: "Tabs versus spaces turned out to be a surprisingly contentious topic in the code review.",
        ko: "탭이냐 스페이스냐가 코드 리뷰에서 의외로 논쟁적인 주제가 됐다.",
      },
      {
        en: "The most contentious item on the agenda was the plan to close the Berlin office.",
        ko: "안건 가운데 가장 논란이 된 것은 베를린 사무소를 닫는 계획이었다.",
        note: "the most contentious item/issue는 회의에서 의견이 가장 크게 갈린 안건을 가리킨다.",
      },
      {
        en: "Immigration remains one of the most contentious issues in the election.",
        ko: "이민 문제는 여전히 이번 선거에서 가장 첨예한 쟁점 가운데 하나다.",
        note: "contentious issue는 뉴스에서 아주 흔한 조합이다.",
      },
    ],
    collocations: ["contentious issue", "highly contentious", "contentious debate", "contentious relationship", "remain contentious"],
    synonyms: ["controversial", "divisive", "disputed", "polemical", "argumentative"],
    antonyms: ["uncontroversial", "undisputed", "agreeable"],
    family: ["contention (n.)", "contend (v.)", "contentiously (adv.)"],
    confusedWith: [
      { word: "conscientious", note: "conscientious는 '양심적인, 성실한'이라는 칭찬이다. contentious는 '논쟁적인'이라 뜻이 전혀 다르다." },
    ],
    origin: "라틴어 contentio(다툼, 겨룸)에서 왔다. contend(다투다)와 같은 뿌리다.",
    themes: ["argument", "business"],
  },
  {
    word: "corroborate",
    pos: ["verb"],
    ipa: "/kəˈrɑːbəreɪt/",
    level: "C1",
    meaning: "(증거로) 뒷받침하다, 입증하다",
    definition: "To confirm or give support to a statement, theory, or finding with additional evidence.",
    explanation:
      "이미 나온 주장이나 진술이 맞다는 것을 다른 증거로 '더 단단하게' 확인해 준다는 뜻의 타동사다. 주어는 보통 증거, 증인, 데이터이고 목적어는 story, claim, findings, account 같은 말이다. confirm보다 '독립적인 다른 출처가 같은 말을 한다'는 느낌이 강하다. 법정, 기사, 연구 논문에서 자주 쓰고, 일상에서는 back up이 자연스럽다. 철자가 비슷한 collaborate(협업하다)와 혼동하지 않는다.",
    examples: [
      {
        en: "The load balancer logs corroborated the user's report that requests were timing out.",
        ko: "로드 밸런서 로그가 요청이 타임아웃되고 있다는 사용자 제보를 뒷받침했다.",
        note: "한 출처(사용자 제보)를 다른 출처(로그)가 확인해 주는 구조다. corroborate의 핵심 뉘앙스다.",
      },
      {
        en: "Two witnesses corroborated her account of the accident.",
        ko: "두 명의 목격자가 사고에 대한 그녀의 진술을 뒷받침했다.",
        note: "corroborate one's account/story는 법정·사건 기사에서 흔한 조합이다.",
      },
      {
        en: "Later studies corroborated the original findings with a much larger sample.",
        ko: "후속 연구들이 훨씬 큰 표본으로 원래의 연구 결과를 입증했다.",
      },
    ],
    collocations: ["corroborate a story", "corroborate the findings", "corroborate a claim", "corroborating evidence", "independently corroborate"],
    synonyms: ["confirm", "substantiate", "verify", "back up", "support"],
    antonyms: ["contradict", "refute", "disprove"],
    family: ["corroboration (n.)", "corroborative (adj.)"],
    confusedWith: [
      { word: "collaborate", note: "collaborate는 '협업하다'라는 자동사다. corroborate는 증거로 '뒷받침하다'라는 타동사다." },
    ],
    origin: "라틴어 corroborare(튼튼하게 하다)에서 왔다. robur(힘, 단단한 참나무)가 들어 있다.",
    themes: ["academic", "argument"],
  },
  {
    word: "culminate",
    pos: ["verb"],
    ipa: "/ˈkʌlmɪneɪt/",
    level: "C1",
    meaning: "절정에 이르다, (결국) ~로 끝나다",
    definition: "To reach a climax or point of highest development; to end with a particular result.",
    explanation:
      "긴 과정이나 일련의 사건이 쌓이고 쌓여 마지막에 어떤 결과나 정점에 이른다는 뜻이다. 거의 항상 culminate in(또는 with) + 결과 형태의 자동사로 쓴다. 결과는 좋은 것(a championship)일 수도, 나쁜 것(a lawsuit)일 수도 있다. end in이나 result in과 비슷하지만 culminate는 '단계적으로 쌓여 온 끝'이라는 흐름을 강조한다. 기사, 전기, 보고서에서 자주 쓰는 격식 있는 말이다.",
    examples: [
      {
        en: "Months of refactoring culminated in a release that cut page load time by half.",
        ko: "몇 달간 이어진 리팩터링은 페이지 로딩 시간을 절반으로 줄인 릴리스로 결실을 맺었다.",
        note: "culminate in + 결과. 오랜 과정의 끝이라는 흐름이 드러난다.",
      },
      {
        en: "The dispute between the two partners culminated in a lawsuit.",
        ko: "두 동업자 사이의 갈등은 결국 소송으로 번졌다.",
        note: "나쁜 결과에도 쓴다. 갈등이 점점 커진 끝이라는 뜻이다.",
      },
      {
        en: "The festival culminates with a fireworks show over the river.",
        ko: "축제는 강 위의 불꽃놀이로 절정을 맞는다.",
      },
    ],
    collocations: ["culminate in", "culminate with", "culminating point", "the culmination of years of work"],
    synonyms: ["climax", "peak", "conclude", "end in", "result in"],
    family: ["culmination (n.)", "culminating (adj.)"],
    origin: "후기 라틴어 culminare에서 왔다. culmen(꼭대기, 정상)이 들어 있다.",
    themes: ["academic", "business"],
  },
];
