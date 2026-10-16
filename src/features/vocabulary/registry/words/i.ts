import type { VocabEntry } from "../types";

export const WORDS_I: VocabEntry[] = [
  {
    word: "impede",
    pos: ["verb"],
    ipa: "/ɪmˈpiːd/",
    level: "C1",
    meaning: "방해하다, 지연시키다, 가로막다",
    definition: "To delay or prevent someone or something by obstructing them.",
    explanation:
      "앞으로 나아가는 움직임이나 진행을 가로막아 느리게 하거나 어렵게 만든다는 뜻이다. 타동사라서 'impede on'이나 'impede to'처럼 전치사를 붙이지 않고 바로 목적어를 쓴다. hamper와 뜻이 거의 같지만 impede가 더 격식 있고 학술 논문·법률·정책 문서에 잘 어울린다. 명사 impediment는 '장애물'이고 speech impediment(언어 장애)라는 표현도 있다. 완전히 막는다는 뜻이 필요하면 prevent나 block이 더 정확하다.",
    examples: [
      {
        en: "Excessive approval steps impede the team's ability to ship small fixes quickly.",
        ko: "지나치게 많은 승인 단계가 작은 수정을 빠르게 배포하는 팀의 역량을 가로막는다.",
        note: "impede 뒤에 바로 목적어가 온다. 'impede on'은 틀린 표현이다.",
      },
      {
        en: "High interest rates may impede economic recovery.",
        ko: "높은 금리가 경기 회복을 더디게 할 수 있다.",
      },
      {
        en: "Fallen trees impeded access to the village for several days.",
        ko: "쓰러진 나무 때문에 며칠 동안 마을로 들어가기가 어려웠다.",
      },
      {
        en: "The lack of reliable data has seriously impeded research into the disease.",
        ko: "믿을 만한 데이터가 없어서 그 질병에 대한 연구가 크게 지체됐다.",
        note: "seriously, severely 같은 부사와 함께 정도를 나타낸다. 학술 글의 전형적인 문장이다.",
      },
    ],
    collocations: ["impede progress", "impede growth", "impede access", "seriously impede", "impede the flow of"],
    synonyms: ["hinder", "hamper", "obstruct", "hold up", "inhibit"],
    antonyms: ["facilitate", "expedite", "advance"],
    family: ["impediment (n.)", "unimpeded (adj.)"],
    confusedWith: [
      { word: "hamper", note: "뜻은 거의 같다. impede가 더 격식 있고 학술적이며, hamper는 기사·업무 글에서 더 흔하다." },
      { word: "impinge", note: "impinge (on)은 '(권리·영역을) 침해하다, 영향을 미치다'로, 진행을 늦춘다는 impede와 다르다." },
    ],
    origin: "라틴어 impedire(발을 묶다)에서 왔다. in(안에) + pes/pedis(발): 발에 족쇄를 채워 못 가게 한다는 그림이다.",
    themes: ["academic", "business"],
  },
  {
    word: "impetus",
    pos: ["noun"],
    ipa: "/ˈɪmpɪtəs/",
    level: "C1",
    meaning: "자극, 추진력, 원동력",
    definition: "Something that makes a process or activity happen or happen more quickly.",
    explanation:
      "어떤 일이 시작되거나 속도가 붙게 만드는 힘·계기를 말한다. 'the impetus for change', 'give (fresh) impetus to'처럼 for와 to를 함께 기억해 두면 좋다. 보통 단수로 쓰고 셀 수 없는 명사처럼 다루는 경우가 많지만, 'an impetus', 'a new impetus'도 자연스럽다. motivation이 사람 마음속 동기라면 impetus는 일·변화를 밀어 주는 외부의 계기에 더 가깝다. 보고서·기사·학술 글에서 쓰는 격식 있는 말이다.",
    examples: [
      {
        en: "A series of security incidents provided the impetus for adopting zero-trust networking.",
        ko: "잇따른 보안 사고가 제로 트러스트 네트워크를 도입하는 계기가 됐다.",
        note: "the impetus for + 명사/동명사. 무엇의 계기인지는 for로 나타낸다.",
      },
      {
        en: "The new funding gave fresh impetus to the stalled project.",
        ko: "새로운 투자금이 멈춰 있던 프로젝트에 다시 힘을 불어넣었다.",
        note: "give impetus to + 대상. fresh, new, added 같은 형용사가 자주 붙는다.",
      },
      {
        en: "The reform movement lost its impetus after the election.",
        ko: "개혁 운동은 선거 이후 추진력을 잃었다.",
      },
      {
        en: "Moving to a new city was the impetus I needed to finally learn to cook.",
        ko: "새 도시로 이사한 게 마침내 요리를 배우게 된 계기였다.",
      },
    ],
    collocations: ["the impetus for", "give impetus to", "provide the impetus", "gain impetus", "lose impetus"],
    synonyms: ["stimulus", "momentum", "catalyst", "incentive", "spur"],
    antonyms: ["deterrent", "hindrance"],
    confusedWith: [
      { word: "momentum", note: "momentum은 이미 움직이는 것이 계속 나아가는 '탄력'이고, impetus는 움직이게 만드는 '계기·자극'에 가깝다. 실제로는 겹쳐 쓰기도 한다." },
      { word: "impetuous", note: "impetuous는 '성급한, 충동적인'이라는 형용사로, 같은 어원이지만 사람 성격을 묘사한다." },
    ],
    origin: "라틴어 impetus(돌진, 공격)에서 왔다. impetere(덤벼들다)에서 나온 말로, 앞으로 밀어붙이는 힘이라는 뜻이 남았다.",
    themes: ["business", "academic"],
  },
  {
    word: "implicit",
    pos: ["adjective"],
    ipa: "/ɪmˈplɪsɪt/",
    level: "C1",
    meaning: "암시적인, 내재된, 절대적인(신뢰 등)",
    definition: "Suggested or understood without being directly stated.",
    explanation:
      "말이나 글로 드러내지 않았지만 그 안에 담겨 있어 이해되는 것을 가리킨다. 반대말 explicit(명시적인)과 짝지어 기억하는 게 좋다. 프로그래밍에서는 implicit conversion(암시적 형 변환), implicit return처럼 '코드에 쓰지 않아도 언어가 알아서 하는 동작'을 뜻한다. 'implicit in ~'은 '~에 내재된'이라는 뜻이고, implicit trust/faith는 '의심 없는 절대적 신뢰'라는 다른 의미다. 비슷한 implied는 주로 '누군가가 넌지시 암시한'이라는 쪽에 무게가 있다.",
    examples: [
      {
        en: "JavaScript performs implicit type conversion when you compare a string with a number using ==.",
        ko: "자바스크립트는 ==로 문자열과 숫자를 비교할 때 암시적으로 형 변환을 한다.",
        note: "기술 문서에서 implicit은 '코드에 쓰지 않았는데 자동으로 일어나는'이라는 뜻이다. 반대는 explicit.",
      },
      {
        en: "There was an implicit agreement that nobody would deploy on Fridays.",
        ko: "금요일에는 아무도 배포하지 않는다는 암묵적인 합의가 있었다.",
      },
      {
        en: "A criticism of the old policy was implicit in the minister's remarks.",
        ko: "장관의 발언에는 이전 정책에 대한 비판이 담겨 있었다.",
        note: "be implicit in ~: '~에 (드러나지 않게) 담겨 있다'. 전치사 in을 쓴다.",
      },
      {
        en: "She trusted her doctor implicitly.",
        ko: "그녀는 주치의를 전적으로 믿었다.",
        note: "trust implicitly는 '암시적으로'가 아니라 '의심 없이, 절대적으로' 믿는다는 뜻이다.",
      },
    ],
    collocations: ["implicit assumption", "implicit in", "implicit agreement", "implicit conversion", "implicit trust"],
    synonyms: ["implied", "tacit", "unspoken", "inherent", "absolute"],
    antonyms: ["explicit", "stated", "overt"],
    family: ["implicitly (adv.)", "implicitness (n.)"],
    confusedWith: [
      { word: "explicit", note: "explicit은 '분명히 드러낸, 명시적인'으로 implicit의 반대말이다. 철자가 비슷해 섞어 쓰기 쉽다." },
      { word: "implied", note: "implied는 누군가가 넌지시 '내비친' 것에 초점이 있고, implicit은 그 안에 '내재되어 있는' 상태에 초점이 있다." },
    ],
    origin: "라틴어 implicare(안으로 접어 넣다, 얽다)에서 왔다. 겉으로 펼치지 않고 안에 접혀 있는 것이 implicit, 펼쳐 놓은 것이 explicit이다.",
    themes: ["tech", "academic"],
  },
  {
    word: "inadvertent",
    pos: ["adjective"],
    ipa: "/ˌɪnədˈvɜːrtənt/",
    level: "C1",
    meaning: "의도하지 않은, 부주의로 인한, 무심코 한",
    definition: "Not resulting from or achieved through deliberate planning; unintentional.",
    explanation:
      "일부러 한 게 아니라 주의를 덜 기울여서 생긴 일에 쓴다. accidental과 비슷하지만 inadvertent는 '본인이 미처 신경 쓰지 못해서'라는 부주의의 뉘앙스가 더 있다. 형용사보다 부사 inadvertently가 훨씬 자주 쓰이며, 사과문·사고 보고서·포스트모템처럼 책임을 다루는 격식 있는 글에 잘 맞는다. unintentional보다 조금 더 격식 있는 말이다.",
    examples: [
      {
        en: "An engineer inadvertently committed an API key to the public repository.",
        ko: "한 엔지니어가 실수로 API 키를 공개 저장소에 커밋했다.",
        note: "부사 inadvertently가 가장 흔하다. 포스트모템에서 고의가 아니었음을 밝힐 때 자주 쓴다.",
      },
      {
        en: "The inadvertent disclosure of customer data led to a formal investigation.",
        ko: "의도치 않은 고객 데이터 유출로 정식 조사가 시작됐다.",
      },
      {
        en: "I inadvertently replied to everyone instead of just my manager.",
        ko: "무심코 팀장님에게만 보낼 답장을 전체 회신으로 보내 버렸다.",
      },
      {
        en: "The new rule had the inadvertent effect of discouraging small businesses from applying.",
        ko: "새 규정은 의도와 달리 소규모 기업이 지원을 꺼리게 만드는 결과를 낳았다.",
        note: "inadvertent effect/consequence는 정책·제도의 의도치 않은 부작용을 말할 때 쓴다.",
      },
    ],
    collocations: ["inadvertently delete", "inadvertent error", "inadvertent disclosure", "inadvertent consequence"],
    synonyms: ["unintentional", "accidental", "unwitting", "careless"],
    antonyms: ["deliberate", "intentional", "calculated"],
    family: ["inadvertently (adv.)", "inadvertence (n.)"],
    confusedWith: [
      { word: "unwitting", note: "unwitting은 '자기도 모르는 사이에'로, 상황을 몰랐다는 데 초점이 있다(an unwitting accomplice). inadvertent는 주의를 덜 기울였다는 데 초점이 있다." },
    ],
    origin: "in(아닌) + 라틴어 advertere(~로 주의를 돌리다)에서 왔다. '주의를 돌리지 않은'이 '무심코 한'이 됐다.",
    themes: ["business", "everyday"],
  },
  {
    word: "incongruous",
    pos: ["adjective"],
    ipa: "/ɪnˈkɑːŋɡruəs/",
    level: "C2",
    meaning: "어울리지 않는, 부조화한, 앞뒤가 맞지 않는",
    definition: "Not in harmony or keeping with the surroundings or other aspects of something; out of place.",
    explanation:
      "주변이나 맥락과 어울리지 않아 이상하게 튀어 보이는 것을 묘사한다. 장소와 어울리지 않는 물건, 분위기와 맞지 않는 말, 서로 모순되는 두 사실 등에 쓴다. 문어적이고 묘사적인 말이라 기사·소설·평론에서 자주 보이며, 일상 대화에서는 out of place나 weird가 더 흔하다. 'incongruous with ~'로 비교 대상을 밝힐 수 있다. inconsistent가 논리·데이터가 맞지 않는 데 초점이 있다면, incongruous는 겉보기·분위기의 부조화에 더 가깝다.",
    examples: [
      {
        en: "The cheerful error message felt incongruous with the fact that the user had just lost all their data.",
        ko: "사용자가 방금 데이터를 전부 잃었는데 오류 메시지가 명랑하니 어울리지 않아 보였다.",
        note: "incongruous with ~로 무엇과 어울리지 않는지 밝힌다.",
      },
      {
        en: "A modern glass tower looks incongruous among the old stone buildings.",
        ko: "오래된 석조 건물들 사이에 현대식 유리 빌딩이 있으니 어색해 보인다.",
        note: "주변 환경과 시각적으로 어울리지 않을 때 쓰는 전형적인 예다.",
      },
      {
        en: "There was something incongruous about a CEO who preached frugality while flying private jets.",
        ko: "검소함을 설파하면서 전용기를 타는 CEO에게는 뭔가 앞뒤가 맞지 않는 구석이 있었다.",
      },
      {
        en: "His formal suit looked incongruous at the beach barbecue.",
        ko: "해변 바비큐 자리에 그의 정장 차림은 영 어울리지 않았다.",
      },
    ],
    collocations: ["seem incongruous", "incongruous with", "an incongruous sight", "strangely incongruous"],
    synonyms: ["out of place", "inappropriate", "discordant", "incompatible", "jarring"],
    antonyms: ["appropriate", "fitting", "harmonious", "congruous"],
    family: ["incongruity (n.)", "incongruously (adv.)", "congruous (adj.)"],
    confusedWith: [
      { word: "inconsistent", note: "inconsistent는 사실·논리·행동이 서로 맞지 않는 것에, incongruous는 분위기·모양새가 어울리지 않는 것에 주로 쓴다." },
    ],
    origin: "라틴어 incongruus(맞지 않는)에서 왔다. in(아닌) + congruus(일치하는). congruent(합동인)와 같은 뿌리다.",
    themes: ["academic", "everyday"],
  },
  {
    word: "indispensable",
    pos: ["adjective"],
    ipa: "/ˌɪndɪˈspensəbəl/",
    level: "C1",
    meaning: "없어서는 안 될, 필수적인",
    definition: "Absolutely necessary; too important to be without.",
    explanation:
      "빠지면 일이 돌아가지 않을 만큼 꼭 필요한 것을 말한다. essential과 비슷하지만 '없이 지낼 수 없다'는 뜻이 더 직접적이고, 사람에게도 자주 쓴다(an indispensable member of the team). 대상은 to나 for로 받는다: indispensable to the project, indispensable for success. 반대말은 dispensable이 아니라 일상적으로 expendable, unnecessary를 더 많이 쓴다. 이미 최상급에 가까운 뜻이라 'very indispensable'보다 'absolutely indispensable'이나 'almost indispensable'이 자연스럽다.",
    examples: [
      {
        en: "Good observability is indispensable for running microservices in production.",
        ko: "마이크로서비스를 운영 환경에서 돌리려면 좋은 관측성이 필수다.",
        note: "indispensable for + 목적/활동. 무엇을 하는 데 꼭 필요한지 나타낸다.",
      },
      {
        en: "She has made herself indispensable to the company over the past ten years.",
        ko: "그녀는 지난 10년 동안 회사에 없어서는 안 될 사람이 됐다.",
        note: "make oneself indispensable은 '없어서는 안 될 존재가 되다'라는 관용적인 표현이다. 대상은 to로 받는다.",
      },
      {
        en: "Clean water is indispensable to public health.",
        ko: "깨끗한 물은 공중 보건에 없어서는 안 된다.",
      },
      {
        en: "For me, a good pair of headphones is indispensable on long flights.",
        ko: "나한테 장거리 비행에서 좋은 헤드폰은 필수품이다.",
      },
    ],
    collocations: ["indispensable to", "indispensable for", "absolutely indispensable", "make oneself indispensable", "an indispensable tool"],
    synonyms: ["essential", "vital", "crucial", "necessary", "requisite"],
    antonyms: ["dispensable", "expendable", "unnecessary", "superfluous"],
    family: ["indispensability (n.)", "dispensable (adj.)", "dispense (v.)"],
    confusedWith: [
      { word: "indisputable", note: "indisputable은 '반박할 수 없는'이라는 뜻으로 철자가 비슷하지만 의미가 전혀 다르다." },
    ],
    origin: "in(아닌) + dispensable(없어도 되는)에서 왔다. dispense with(~없이 지내다)를 떠올리면 '없이는 지낼 수 없는'이 된다.",
    themes: ["business", "everyday"],
  },
  {
    word: "inherent",
    pos: ["adjective"],
    ipa: "/ɪnˈhɪrənt/",
    level: "C1",
    meaning: "내재된, 고유의, 본래 갖고 있는",
    definition: "Existing in something as a permanent, essential, or characteristic attribute.",
    explanation:
      "어떤 것의 성질이나 구조에 처음부터 들어 있어서 떼어 낼 수 없는 특성을 말한다. inherent risk, inherent limitation, inherent bias처럼 위험·한계·문제와 짝을 이루는 경우가 특히 많다. 전치사는 in을 쓴다(risks inherent in the design). intrinsic과 많이 겹치지만, inherent는 '구조상 필연적으로 따라오는' 성질(특히 단점)에, intrinsic은 '외부와 무관한 그 자체의' 가치·성질에 자주 쓴다. 발음은 /ɪnˈhɪrənt/와 /ɪnˈherənt/ 둘 다 쓰인다.",
    examples: [
      {
        en: "There is an inherent trade-off between consistency and availability in distributed systems.",
        ko: "분산 시스템에는 일관성과 가용성 사이의 본질적인 트레이드오프가 있다.",
        note: "설계·구조상 피할 수 없는 성질을 말할 때 inherent가 잘 맞는다.",
      },
      {
        en: "Every investment carries some inherent risk.",
        ko: "모든 투자에는 어느 정도 내재된 위험이 따른다.",
      },
      {
        en: "The dangers inherent in nuclear power have shaped public debate for decades.",
        ko: "원자력에 내재된 위험성은 수십 년 동안 사회적 논쟁의 틀을 만들어 왔다.",
        note: "명사 뒤에서 'inherent in ~'으로 수식한다. of가 아니라 in을 쓴다.",
      },
      {
        en: "There's nothing inherently wrong with eating late, as long as you sleep well.",
        ko: "잠만 잘 잔다면 늦게 먹는 것 자체가 나쁜 건 아니다.",
        note: "부사 inherently는 '그 자체로, 본질적으로'라는 뜻으로 일상에서도 자주 쓴다.",
      },
    ],
    collocations: ["inherent risk", "inherent in", "inherent limitation", "inherent bias", "inherently unstable"],
    synonyms: ["intrinsic", "innate", "built-in", "essential", "fundamental"],
    antonyms: ["extrinsic", "acquired", "incidental"],
    family: ["inherently (adv.)", "inhere (v.)"],
    confusedWith: [
      { word: "intrinsic", note: "거의 같은 뜻이지만 inherent는 구조상 따라오는 성질(특히 위험·한계)에, intrinsic은 외부 요인과 무관한 그 자체의 가치·성질에 더 자주 쓴다." },
      { word: "inherit", note: "inherit은 '물려받다'라는 동사로 철자가 비슷하지만 어원도 뜻도 다르다." },
    ],
    origin: "라틴어 inhaerere(~에 달라붙다)에서 왔다. in(안에) + haerere(붙다). adhere(들러붙다)와 같은 뿌리다.",
    themes: ["academic", "tech"],
  },
  {
    word: "intrinsic",
    pos: ["adjective"],
    ipa: "/ɪnˈtrɪnzɪk/",
    level: "C1",
    meaning: "본질적인, 고유한, 내재적인",
    definition: "Belonging naturally to something; essential to its nature, independent of external factors.",
    explanation:
      "외부 조건이나 다른 것과의 관계와 상관없이 그것 자체가 원래 갖고 있는 성질을 말한다. intrinsic value(본질적 가치), intrinsic motivation(내적 동기)처럼 '밖에서 주어진 것'과 대비할 때 특히 잘 맞고, 반대말 extrinsic과 짝을 이룬다. 전치사는 to를 쓴다(intrinsic to the design). inherent와 많이 겹치지만, inherent는 구조상 따라오는 성질(특히 위험·한계)에 자주 쓰는 반면 intrinsic은 가치·동기처럼 대상 자체에 속한 것을 강조할 때 쓴다. 발음은 /-zɪk/와 /-sɪk/ 둘 다 쓰인다.",
    examples: [
      {
        en: "Readability is intrinsic to good code, not something you add at the end.",
        ko: "가독성은 좋은 코드의 본질적인 요소이지 마지막에 덧붙이는 게 아니다.",
        note: "intrinsic to ~: '~에 본래 속한'. inherent in과 달리 to를 쓴다.",
      },
      {
        en: "Studies suggest that intrinsic motivation leads to more creative work than bonuses do.",
        ko: "연구에 따르면 내적 동기가 보너스보다 더 창의적인 결과를 낳는다고 한다.",
        note: "intrinsic motivation(내적 동기)은 extrinsic motivation(외적 동기)과 짝을 이루는 심리학 용어다.",
      },
      {
        en: "A banknote has little intrinsic value; its worth comes from trust in the issuer.",
        ko: "지폐는 그 자체의 가치가 거의 없고, 가치는 발행 기관에 대한 신뢰에서 나온다.",
      },
      {
        en: "Compiler intrinsics let programmers call specific CPU instructions directly.",
        ko: "컴파일러 인트린식을 쓰면 특정 CPU 명령을 직접 호출할 수 있다.",
        note: "기술 용어로 intrinsic은 명사로도 쓰여 '컴파일러가 직접 처리하는 내장 함수'를 뜻한다.",
      },
    ],
    collocations: ["intrinsic value", "intrinsic motivation", "intrinsic to", "intrinsic part of", "intrinsically linked"],
    synonyms: ["inherent", "innate", "essential", "fundamental", "inbuilt"],
    antonyms: ["extrinsic", "external", "acquired"],
    family: ["intrinsically (adv.)", "extrinsic (adj.)"],
    confusedWith: [
      { word: "inherent", note: "intrinsic은 외부와 무관한 그 자체의 가치·성질을, inherent는 구조상 필연적으로 따라오는 성질(특히 위험·한계)을 말할 때 더 자주 쓴다. 전치사도 intrinsic to, inherent in으로 다르다." },
      { word: "extrinsic", note: "extrinsic은 '외부에서 주어진'으로 intrinsic의 반대말이다." },
    ],
    origin: "라틴어 intrinsecus(안쪽으로)에서 왔다. 반대쪽인 extrinsecus(바깥쪽으로)에서 extrinsic이 나왔다.",
    themes: ["academic", "tech"],
  },
  {
    word: "intricate",
    pos: ["adjective"],
    ipa: "/ˈɪntrɪkət/",
    level: "C1",
    meaning: "복잡한, 정교한, 얽히고설킨",
    definition: "Very complicated or detailed, with many small parts that fit together.",
    explanation:
      "작은 부분이 많고 서로 촘촘히 얽혀 있어서 복잡하고 정교한 것을 말한다. complicated가 '어렵고 귀찮다'는 부정적 뉘앙스가 있는 반면, intricate은 무늬·장치·구조가 '섬세하게 짜여 있다'는 감탄의 뉘앙스도 담을 수 있다. 그래서 intricate pattern, intricate design처럼 디자인·공예에도, intricate details, intricate relationship처럼 이해하기 어려운 관계에도 쓴다. 발음은 마지막 음절이 /-kət/로 약하게 소리 나며 동사처럼 /-keɪt/로 읽지 않는다.",
    examples: [
      {
        en: "The scheduler relies on an intricate set of locks that only two people on the team fully understand.",
        ko: "스케줄러는 팀에서 두 사람만 제대로 이해하는 복잡한 락 구조에 의존한다.",
        note: "복잡하게 얽혀 있어서 이해하기 어렵다는 뉘앙스다. 유지 보수 부담을 말할 때 자주 쓴다.",
      },
      {
        en: "The carpet is woven with an intricate floral pattern.",
        ko: "그 카펫에는 정교한 꽃무늬가 짜여 있다.",
        note: "디자인·공예품에서는 '섬세하고 정교한'이라는 긍정적인 뜻이 된다.",
      },
      {
        en: "The book explores the intricate relationship between trade policy and national security.",
        ko: "그 책은 무역 정책과 국가 안보 사이의 얽히고설킨 관계를 탐구한다.",
      },
      {
        en: "Negotiating the deal required an intricately balanced compromise between all three partners.",
        ko: "그 거래를 성사시키려면 세 파트너 모두를 아우르는 정교한 타협이 필요했다.",
      },
    ],
    collocations: ["intricate details", "intricate pattern", "intricate design", "intricate relationship", "intricately carved"],
    synonyms: ["complex", "elaborate", "convoluted", "detailed", "involved"],
    antonyms: ["simple", "straightforward", "plain"],
    family: ["intricacy (n.)", "intricately (adv.)"],
    confusedWith: [
      { word: "complicated", note: "complicated는 '어렵고 성가시다'는 부정적인 느낌이 강하고, intricate은 정교하게 짜여 있다는 감탄의 뉘앙스도 가질 수 있다." },
      { word: "convoluted", note: "convoluted는 쓸데없이 꼬여서 이해하기 어렵다는 비판적인 말이다. intricate보다 부정적이다." },
    ],
    origin: "라틴어 intricare(얽히게 하다)에서 왔다. 뒤엉킨 실타래를 떠올리면 된다.",
    themes: ["tech", "academic"],
  },
];
