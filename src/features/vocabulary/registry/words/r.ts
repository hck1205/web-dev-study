import type { VocabEntry } from "../types";

export const WORDS_R: VocabEntry[] = [
  {
    word: "reconcile",
    pos: ["verb"],
    ipa: "/ˈrɛkənsaɪl/",
    level: "C1",
    meaning: "조화시키다, 일치시키다, 화해시키다",
    definition: "To make two apparently conflicting things compatible or consistent; to restore friendly relations between people.",
    explanation:
      "서로 맞지 않아 보이는 두 가지를 맞춰 함께 성립하게 만든다는 뜻이다. 생각·요구·데이터를 맞출 때는 'reconcile A with B', 사람 사이를 화해시킬 때는 'be reconciled (with someone)'를 주로 쓴다. 'reconcile oneself to ~' 또는 'be reconciled to ~'는 '받아들이기 싫은 현실을 체념하고 받아들이다'라는 뜻이니 구별한다. 회계·데이터 분야에서는 두 기록을 대조해 차이를 맞추는 것(reconcile accounts)을 말하고, 쿠버네티스 같은 시스템에서는 실제 상태를 원하는 상태에 맞추는 reconciliation loop라는 용어로도 쓴다. 격식 있는 말이라 일상에서 친구와 화해했다고 할 때는 make up이 더 흔하다.",
    examples: [
      {
        en: "The controller continuously reconciles the actual state of the cluster with the desired state in the manifest.",
        ko: "컨트롤러는 클러스터의 실제 상태를 매니페스트에 적힌 원하는 상태와 계속 맞춘다.",
        note: "reconcile A with B로 두 상태를 일치시킨다는 기술적 쓰임이다.",
      },
      {
        en: "Finance spent two days reconciling the payment records with the bank statements.",
        ko: "재무팀은 결제 기록을 은행 거래 내역과 대조해 맞추는 데 이틀을 썼다.",
      },
      {
        en: "It's hard to reconcile his talk about work-life balance with the emails he sends at midnight.",
        ko: "워라밸을 강조하는 그의 말과 한밤중에 보내는 이메일이 도무지 맞아떨어지지 않는다.",
        note: "말과 행동처럼 모순되어 보이는 두 가지를 함께 납득하기 어렵다는 뜻이다.",
      },
      {
        en: "After years of silence, the two brothers were finally reconciled.",
        ko: "몇 년 동안 연락을 끊고 지내던 두 형제가 마침내 화해했다.",
      },
    ],
    collocations: ["reconcile A with B", "be reconciled with someone", "reconcile oneself to", "reconcile the accounts", "reconcile differences"],
    synonyms: ["harmonize", "square", "resolve", "settle", "reunite"],
    antonyms: ["alienate", "estrange", "divide"],
    family: ["reconciliation (n.)", "reconcilable (adj.)", "irreconcilable (adj.)"],
    origin: "라틴어 reconciliare(다시 하나로 모으다)에서 왔다. re(다시) + conciliare(모으다, 화합시키다).",
    themes: ["business", "tech", "emotion"],
  },
  {
    word: "redundant",
    pos: ["adjective"],
    ipa: "/rɪˈdʌndənt/",
    level: "C1",
    meaning: "불필요한, 중복된, (장애 대비로) 이중화된",
    definition: "Not needed because something else already does the job; in engineering, duplicated so that the system keeps working if one part fails.",
    explanation:
      "일반적인 뜻은 '이미 있는 것과 겹쳐서 필요 없는'으로, 문장 속 군더더기 단어나 겹치는 절차를 비판할 때 쓴다. 엔지니어링에서는 반대로 긍정적인 뜻이 되는데, 하나가 고장 나도 버티도록 일부러 여분을 두는 것을 말한다(redundant power supplies, redundant servers). 그래서 문맥을 보고 '쓸데없다'인지 '이중화했다'인지 구분해야 한다. 영국 영어에서 'be made redundant'는 '정리 해고되다'라는 뜻이고 미국에서는 laid off가 일반적이다. 명사는 redundancy이며 장애 대비 설계를 말할 때 'add redundancy'처럼 쓴다.",
    examples: [
      {
        en: "We run redundant database replicas in two availability zones, so a single zone outage won't take us down.",
        ko: "가용 영역 두 곳에 데이터베이스 복제본을 이중으로 두고 있어서, 한 영역에 장애가 나도 서비스가 멈추지 않는다.",
        note: "엔지니어링에서의 긍정적인 뜻(장애 대비 이중화)이다.",
      },
      {
        en: "This null check is redundant because the type system already guarantees the value exists.",
        ko: "타입 시스템이 이미 값이 있다고 보장하니 이 null 검사는 불필요하다.",
        note: "같은 코드 리뷰라도 이 문장에서는 '쓸데없는 중복'이라는 일반적인 뜻이다.",
      },
      {
        en: "Around 300 staff were made redundant when the factory closed.",
        ko: "공장이 문을 닫으면서 약 300명의 직원이 정리 해고되었다.",
      },
      {
        en: "\"Free gift\" is redundant, since every gift is free.",
        ko: "선물은 원래 공짜이니 '무료 선물'은 겹말이다.",
      },
    ],
    collocations: ["redundant power supply", "make someone redundant", "largely redundant", "redundant code", "render redundant"],
    synonyms: ["superfluous", "unnecessary", "surplus", "duplicate", "backup"],
    antonyms: ["necessary", "essential", "indispensable"],
    family: ["redundancy (n.)", "redundantly (adv.)"],
    confusedWith: [
      { word: "obsolete", note: "obsolete는 새것에 밀려 쓰이지 않게 된 것이고, redundant는 다른 것과 겹쳐서 필요 없거나 여분으로 둔 것이다." },
    ],
    origin: "라틴어 redundare(넘쳐흐르다)에서 왔다. re(다시) + unda(물결), 즉 '넘칠 만큼 남는'이다.",
    themes: ["tech", "business", "everyday"],
  },
  {
    word: "resilient",
    pos: ["adjective"],
    ipa: "/rɪˈzɪliənt/",
    level: "C1",
    meaning: "회복력 있는, 잘 버티는, 탄력 있는",
    definition: "Able to withstand or recover quickly from difficult conditions, shocks, or failures.",
    explanation:
      "충격을 받아도 꺾이지 않고 빨리 원래 상태로 돌아오는 성질을 말한다. 사람·공동체·경제에 쓰면 '역경을 딛고 회복하는'이라는 칭찬이고, 물체에 쓰면 눌려도 다시 펴지는 탄력을 뜻한다. 엔지니어링에서 resilient system은 일부 구성 요소가 실패해도 전체가 계속 동작하거나 빠르게 복구되는 시스템이며, 재시도·서킷 브레이커·이중화 같은 기법이 여기에 쓰인다. strong은 버티는 힘 자체이고, resilient는 '쓰러져도 회복한다'는 점에 초점이 있어 robust(애초에 잘 안 깨지는)와도 결이 다르다. 대상은 'resilient to/against ~'로 쓴다.",
    examples: [
      {
        en: "Adding retries with exponential backoff made the client more resilient to transient network errors.",
        ko: "지수 백오프를 둔 재시도를 추가하자 클라이언트가 일시적인 네트워크 오류에 더 잘 버티게 됐다.",
        note: "resilient to ~ 형태로 어떤 실패에 강한지 밝힌다. 장애를 '견디고 회복하는' 설계를 말한다.",
      },
      {
        en: "The economy proved surprisingly resilient despite rising interest rates.",
        ko: "금리 상승에도 경제는 놀라울 만큼 잘 버텼다.",
      },
      {
        en: "Kids are often more resilient than we give them credit for.",
        ko: "아이들은 우리가 생각하는 것보다 회복력이 강한 경우가 많다.",
        note: "사람에게 쓰면 힘든 일을 겪고도 다시 일어서는 정신적인 힘을 말한다.",
      },
    ],
    collocations: ["resilient to", "highly resilient", "remarkably resilient", "resilient system", "prove resilient"],
    synonyms: ["robust", "tough", "hardy", "durable", "adaptable"],
    antonyms: ["fragile", "brittle", "vulnerable"],
    family: ["resilience (n.)", "resiliency (n.)", "resiliently (adv.)"],
    confusedWith: [
      { word: "robust", note: "robust는 애초에 잘 깨지지 않는 튼튼함이고, resilient는 깨지거나 흔들려도 빨리 회복하는 능력에 초점이 있다." },
    ],
    origin: "라틴어 resilire(뒤로 튀어 오르다)에서 왔다. re(뒤로) + salire(뛰다).",
    themes: ["tech", "emotion", "business"],
  },
  {
    word: "rigorous",
    pos: ["adjective"],
    ipa: "/ˈrɪɡərəs/",
    level: "C1",
    meaning: "엄격한, 철저한, 엄밀한",
    definition: "Extremely thorough, careful, and accurate, following strict standards.",
    explanation:
      "기준을 높게 잡고 빠짐없이 꼼꼼하게 한다는 뜻으로, 대개 긍정적인 평가다. testing, analysis, standards, training, process처럼 절차나 검증을 나타내는 명사와 잘 붙는다. strict는 규칙을 엄하게 적용하는 것이고, rigorous는 방법 자체가 정밀하고 철저하다는 데 초점이 있다. 수학·과학에서는 '엄밀한 증명(rigorous proof)'처럼 논리에 빈틈이 없다는 뜻이다. 사람을 직접 꾸미기보다 사람이 하는 일을 꾸미는 경우가 많다.",
    examples: [
      {
        en: "Every change to the payment service goes through rigorous testing before it reaches production.",
        ko: "결제 서비스의 모든 변경은 운영 환경에 나가기 전에 철저한 테스트를 거친다.",
        note: "rigorous testing은 기술 문서에서 아주 흔한 조합이다.",
      },
      {
        en: "The candidates went through a rigorous selection process that lasted three months.",
        ko: "지원자들은 석 달에 걸친 엄격한 선발 과정을 거쳤다.",
      },
      {
        en: "The paper was criticized for not analyzing the data rigorously enough.",
        ko: "그 논문은 데이터를 충분히 엄밀하게 분석하지 않았다는 비판을 받았다.",
        note: "부사 rigorously로 분석·검증 방법의 정밀함을 말한다.",
      },
    ],
    collocations: ["rigorous testing", "rigorous analysis", "rigorous standards", "rigorous proof", "intellectually rigorous"],
    synonyms: ["thorough", "meticulous", "exacting", "stringent", "strict"],
    antonyms: ["lax", "sloppy", "careless", "superficial"],
    family: ["rigor (n.)", "rigorously (adv.)", "rigorousness (n.)"],
    confusedWith: [
      { word: "vigorous", note: "vigorous는 '활기찬, 격렬한'(vigorous exercise)이다. 철자 한 글자 차이지만 rigorous는 '철저한, 엄밀한'이다." },
    ],
    origin: "라틴어 rigor(뻣뻣함, 엄격함)에서 왔다. rigere(뻣뻣하다)는 rigid와 같은 뿌리다.",
    themes: ["academic", "tech", "business"],
  },
  {
    word: "relinquish",
    pos: ["verb"],
    ipa: "/rɪˈlɪŋkwɪʃ/",
    level: "C2",
    meaning: "(권리·권력 등을) 내주다, 포기하다, 손을 놓다",
    definition: "To voluntarily give up or let go of something such as power, control, a right, or a claim.",
    explanation:
      "가지고 있던 권리·권력·통제권·자리를 (흔히 내키지 않지만) 내놓는다는 격식 있는 타동사다. 목적어로 control, power, the title, one's claim, one's grip이 자주 오고, 바로 목적어를 받으므로 'relinquish of ~'처럼 of를 넣지 않는다. 넘겨받는 쪽을 밝힐 때는 'relinquish A to B'로 쓴다. give up은 일상적이고 범위가 넓으며, abandon은 버려두고 떠난다는 느낌, relinquish는 쥐고 있던 것을 공식적으로 놓는다는 느낌이다. 프로그래밍에서 '락이나 자원을 해제한다'는 뜻으로 쓰기도 하지만 보통은 release가 더 흔하다.",
    examples: [
      {
        en: "The founder was reluctant to relinquish control of the codebase, even after the team had grown to fifty engineers.",
        ko: "창업자는 팀이 엔지니어 50명으로 커진 뒤에도 코드베이스에 대한 통제권을 내려놓으려 하지 않았다.",
        note: "relinquish control은 가장 흔한 조합이다. 'be reluctant to relinquish'처럼 마지못해 내놓는 맥락이 많다.",
      },
      {
        en: "The general eventually relinquished power to a civilian government.",
        ko: "그 장군은 결국 민간 정부에 권력을 넘겨주었다.",
        note: "넘겨받는 쪽은 to로 이어 쓴다.",
      },
      {
        en: "She relinquished her seat on the board to focus on her health.",
        ko: "그녀는 건강에 집중하려고 이사회 자리에서 물러났다.",
      },
    ],
    collocations: ["relinquish control", "relinquish power", "relinquish one's claim to", "relinquish one's grip on", "reluctant to relinquish"],
    synonyms: ["give up", "surrender", "renounce", "cede", "hand over"],
    antonyms: ["retain", "keep", "seize", "hold on to"],
    family: ["relinquishment (n.)"],
    origin: "라틴어 relinquere(뒤에 남겨 두다)에서 왔다. re(뒤에) + linquere(남기다). relic도 같은 뿌리다.",
    themes: ["business", "argument"],
  },
];
