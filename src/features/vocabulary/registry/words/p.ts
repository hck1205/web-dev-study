import type { VocabEntry } from "../types";

export const WORDS_P: VocabEntry[] = [
  {
    word: "paradigm",
    pos: ["noun"],
    ipa: "/ˈpærədaɪm/",
    level: "C1",
    meaning: "패러다임, 사고의 틀, 전형적인 모델",
    definition: "A typical model or pattern of something; a framework of assumptions and methods shared by a field.",
    explanation:
      "일반적으로는 어떤 분야가 당연하게 받아들이는 생각의 틀이나 대표적인 본보기를 뜻한다. 토머스 쿤이 『과학혁명의 구조』(1962)에서 쓴 뒤 paradigm shift(사고 틀의 전환)라는 표현이 널리 퍼졌는데, 비즈니스에서는 남용돼 유행어처럼 들릴 수 있으니 정말 큰 변화에만 쓰는 편이 좋다. 프로그래밍에서는 객체지향·함수형·선언형처럼 코드를 구성하는 방식(programming paradigm)을 가리킨다. model은 구체적인 모형, framework는 작업 구조를 말하는 데 비해 paradigm은 그 밑에 깔린 전제까지 포함한다. 셀 수 있는 명사이고 발음은 끝의 g가 소리 나지 않는 '패러다임'이다.",
    examples: [
      {
        en: "React pushed front-end developers toward a declarative paradigm, where you describe the UI for a given state.",
        ko: "리액트는 프런트엔드 개발자들을 상태에 맞는 UI를 기술하는 선언형 패러다임으로 이끌었다.",
        note: "programming paradigm의 쓰임이다. declarative, functional, object-oriented 같은 형용사가 앞에 온다.",
      },
      {
        en: "Remote work has caused a paradigm shift in how companies think about office space.",
        ko: "재택근무는 기업이 사무 공간을 바라보는 방식에 큰 전환을 가져왔다.",
        note: "paradigm shift는 흔한 표현이지만 회의에서 남발하면 상투적으로 들린다.",
      },
      {
        en: "Germ theory replaced the miasma paradigm that had dominated medicine for centuries.",
        ko: "세균설은 수백 년 동안 의학을 지배한 독기(미아즈마) 패러다임을 대체했다.",
      },
    ],
    collocations: ["paradigm shift", "programming paradigm", "dominant paradigm", "a new paradigm", "challenge the paradigm"],
    synonyms: ["model", "framework", "pattern", "archetype", "worldview"],
    family: ["paradigmatic (adj.)"],
    confusedWith: [
      { word: "paragon", note: "paragon은 '완벽한 본보기가 되는 사람·것'(a paragon of virtue)이고, paradigm은 사고의 틀이나 전형적인 모델이다." },
    ],
    origin: "그리스어 paradeigma(본보기, 견본)에서 왔다. para(옆에) + deiknynai(보여 주다), 즉 '나란히 놓고 보여 주는 것'이다.",
    themes: ["academic", "tech", "business"],
  },
  {
    word: "paramount",
    pos: ["adjective"],
    ipa: "/ˈpærəmaʊnt/",
    level: "C2",
    meaning: "가장 중요한, 최고의, 무엇보다 우선하는",
    definition: "More important than anything else; supreme.",
    explanation:
      "여러 고려 사항 가운데 가장 위에 놓인다는 뜻이다. 그 자체로 최상급이라 more paramount, most paramount는 원칙적으로 쓰지 않는다. 'Safety is paramount'처럼 be동사 뒤에 오거나 'of paramount importance'라는 고정 표현으로 많이 쓴다. important보다 훨씬 격식 있고 강해서, 공식 발표·정책·안전 수칙에 잘 어울린다. primary는 '첫째의, 주된'이고 paramount는 '다른 무엇보다 우선한다'는 점이 다르다.",
    examples: [
      {
        en: "When handling payment data, security is paramount; convenience comes second.",
        ko: "결제 데이터를 다룰 때는 보안이 무엇보다 우선이고 편의성은 그다음이다.",
        note: "be paramount 형태로 서술어 자리에 쓰였다. 비교급 없이 단독으로 충분히 강하다.",
      },
      {
        en: "Customer trust is of paramount importance to a bank.",
        ko: "은행에게는 고객의 신뢰가 가장 중요하다.",
        note: "of paramount importance는 of great importance보다 한 단계 강한 고정 표현이다.",
      },
      {
        en: "The court ruled that the child's welfare was the paramount consideration.",
        ko: "법원은 아이의 복지가 최우선 고려 사항이라고 판결했다.",
      },
    ],
    collocations: ["of paramount importance", "safety is paramount", "paramount concern", "paramount consideration"],
    synonyms: ["supreme", "foremost", "chief", "overriding", "preeminent"],
    antonyms: ["minor", "secondary", "negligible", "trivial"],
    family: ["paramountcy (n.)"],
    confusedWith: [
      { word: "tantamount", note: "tantamount to는 '~와 마찬가지인'(tantamount to fraud)이라는 뜻이다. 끝 모양만 비슷하다." },
    ],
    origin: "앵글로프랑스어 paramont(맨 위에)에서 왔다. par(~로) + amont(위로, 라틴어 ad montem '산으로')가 합쳐진 말이다.",
    themes: ["business", "argument"],
  },
  {
    word: "pervasive",
    pos: ["adjective"],
    ipa: "/pərˈveɪsɪv/",
    level: "C2",
    meaning: "널리 스며든, 만연한, 구석구석 퍼진",
    definition: "Spreading widely throughout an area, group, or system and present in every part of it.",
    explanation:
      "어떤 영향이나 현상이 한 곳에 머물지 않고 전체에 스며들어 있다는 뜻이다. 문제·문화·편견·불안처럼 부정적인 대상에 자주 쓰여서 '없애기 어렵다'는 느낌을 준다. widespread는 넓게 퍼졌다는 범위에 초점이 있고, pervasive는 곳곳에 배어 있어 피할 수 없다는 깊이에 초점이 있다. ubiquitous는 '어디에나 보이는'이라 대개 중립적이고 물건·기술에 잘 쓴다. 격식 있는 글이나 보고서에서 많이 쓴다.",
    examples: [
      {
        en: "Global mutable state was so pervasive in the codebase that we couldn't test any module in isolation.",
        ko: "코드베이스 곳곳에 전역 가변 상태가 퍼져 있어서 어떤 모듈도 따로 떼어 테스트할 수 없었다.",
        note: "한 군데가 아니라 전체에 배어 있어 손쓰기 어렵다는 뉘앙스다.",
      },
      {
        en: "The report found a pervasive culture of overwork across the company's offices.",
        ko: "보고서는 회사 사무실 전반에 과로 문화가 만연해 있다고 지적했다.",
      },
      {
        en: "Smartphones have become a pervasive presence in children's lives.",
        ko: "스마트폰은 아이들 생활 깊숙이 스며든 존재가 되었다.",
        note: "influence, presence, effect 같은 명사와 함께 '영향이 어디에나 미친다'는 뜻으로도 쓴다.",
      },
    ],
    collocations: ["pervasive influence", "pervasive problem", "all-pervasive", "pervasive culture of", "pervasive sense of"],
    synonyms: ["widespread", "prevalent", "ubiquitous", "rampant", "endemic"],
    antonyms: ["rare", "limited", "isolated", "sporadic"],
    family: ["pervade (v.)", "pervasively (adv.)", "pervasiveness (n.)"],
    confusedWith: [
      { word: "persuasive", note: "persuasive는 '설득력 있는'이다. 철자가 비슷하지만 pervasive는 '널리 퍼진'이다." },
    ],
    origin: "라틴어 pervadere(구석구석 지나가다)에서 왔다. per(끝까지) + vadere(가다).",
    themes: ["academic", "argument", "tech"],
  },
  {
    word: "plausible",
    pos: ["adjective"],
    ipa: "/ˈplɔːzəbəl/",
    level: "C1",
    meaning: "그럴듯한, 타당해 보이는, 개연성 있는",
    definition: "Seeming reasonable or probable; believable, though not necessarily true.",
    explanation:
      "설명이나 주장이 들었을 때 말이 된다, 믿을 만해 보인다는 뜻이다. 다만 '그럴듯해 보인다'일 뿐 사실이라는 보장은 없어서, 문맥에 따라 '그럴싸하게 둘러댄'이라는 의심이 섞이기도 한다. explanation, theory, scenario, excuse 같은 명사와 함께 쓰고, 'It is plausible that ~' 구문도 흔하다. feasible은 '실행 가능한'이라 계획에 쓰고, plausible은 설명·추론이 믿을 만한지에 쓴다는 점이 다르다. 법률·보안 용어 plausible deniability는 '그럴듯하게 부인할 여지'를 뜻한다.",
    examples: [
      {
        en: "A race condition is the most plausible explanation for why the test fails only on CI.",
        ko: "그 테스트가 CI에서만 실패하는 이유로는 경쟁 상태가 가장 그럴듯한 설명이다.",
        note: "디버깅에서 가설의 타당성을 말할 때 자연스럽다. 아직 확정된 원인은 아니라는 뜻도 담겨 있다.",
      },
      {
        en: "It is plausible that interest rates will stay high through next year.",
        ko: "금리가 내년까지 높게 유지될 가능성은 충분히 있다.",
      },
      {
        en: "He came up with a plausible excuse, but nobody really believed him.",
        ko: "그는 그럴싸한 핑계를 댔지만 아무도 진짜로 믿지는 않았다.",
        note: "plausible이 '겉보기에만 그럴듯한'이라는 의심을 담은 쓰임이다.",
      },
    ],
    collocations: ["plausible explanation", "plausible scenario", "perfectly plausible", "it is plausible that", "plausible deniability"],
    synonyms: ["credible", "believable", "reasonable", "conceivable", "likely"],
    antonyms: ["implausible", "far-fetched", "unlikely", "improbable"],
    family: ["plausibility (n.)", "plausibly (adv.)", "implausible (adj.)"],
    confusedWith: [
      { word: "feasible", note: "feasible은 계획이 '실행 가능한'지에, plausible은 설명이 '믿을 만한'지에 쓴다." },
    ],
    origin: "라틴어 plausibilis(박수받을 만한)에서 왔다. plaudere(박수 치다)는 applaud와 같은 뿌리다.",
    themes: ["argument", "academic", "everyday"],
  },
  {
    word: "pragmatic",
    pos: ["adjective"],
    ipa: "/præɡˈmætɪk/",
    level: "C1",
    meaning: "실용적인, 현실적인, 실리를 따지는",
    definition: "Dealing with things sensibly and realistically, based on practical rather than theoretical considerations.",
    explanation:
      "이상이나 원칙보다 실제로 통하는 방법을 고르는 태도를 말한다. 사람(a pragmatic leader)과 결정·접근(a pragmatic approach/solution) 모두에 쓰고, 대체로 칭찬이지만 '원칙 없이 타협한다'는 비판으로 쓰일 때도 있다. practical은 '실제로 쓸모 있는, 실용적인 물건·기술'에 넓게 쓰고, pragmatic은 판단하는 태도와 방식에 초점이 있다. idealistic, dogmatic과 대비해서 자주 쓴다. 언어학에서는 pragmatics(화용론)의 형용사로도 쓴다.",
    examples: [
      {
        en: "Rewriting the service in Rust would be ideal, but the pragmatic choice is to add a cache and move on.",
        ko: "서비스를 러스트로 다시 짜면 이상적이겠지만, 현실적인 선택은 캐시를 붙이고 넘어가는 것이다.",
        note: "이상적인 해법과 현실적인 해법을 대비할 때 자주 쓴다.",
      },
      {
        en: "The two parties took a pragmatic approach and agreed to split the difference.",
        ko: "양측은 실리적인 접근을 택해 중간 지점에서 합의했다.",
      },
      {
        en: "She's very pragmatic about money and never buys anything she doesn't need.",
        ko: "그녀는 돈 문제에 아주 현실적이라 필요 없는 건 절대 사지 않는다.",
        note: "be pragmatic about ~ 형태로 사람의 태도를 말한다.",
      },
    ],
    collocations: ["pragmatic approach", "pragmatic solution", "pragmatic decision", "pragmatic about", "purely pragmatic"],
    synonyms: ["practical", "realistic", "sensible", "down-to-earth", "matter-of-fact"],
    antonyms: ["idealistic", "impractical", "dogmatic", "theoretical"],
    family: ["pragmatically (adv.)", "pragmatism (n.)", "pragmatist (n.)", "pragmatics (n.)"],
    confusedWith: [
      { word: "practical", note: "practical은 물건·기술이 '실제로 쓸모 있는'에 넓게 쓰고, pragmatic은 결정하는 태도가 '현실적인'에 초점이 있다." },
    ],
    origin: "그리스어 pragmatikos(일에 능한)에서 왔다. pragma는 '행해진 일, 실제의 일'이다.",
    themes: ["business", "tech", "argument"],
  },
  {
    word: "precarious",
    pos: ["adjective"],
    ipa: "/prɪˈkɛriəs/",
    level: "C2",
    meaning: "불안정한, 위태로운, 아슬아슬한",
    definition: "Not securely held or in position; dangerously likely to fall, collapse, or change for the worse.",
    explanation:
      "물리적으로 금방 떨어지거나 무너질 듯한 상태와, 재정·고용·건강처럼 상황이 언제 나빠질지 모르는 상태 모두에 쓴다. dangerous는 위험 자체를 말하고, precarious는 '균형이 깨지기 직전'이라는 불안정함에 초점이 있다. unstable보다 문어적이고 감정이 더 실려 있다. a precarious position/balance/financial situation이 흔한 조합이고, 노동 분야에서는 precarious work(불안정 노동)라는 용어로도 쓴다.",
    examples: [
      {
        en: "The whole deployment rested on a precarious chain of shell scripts that nobody fully understood.",
        ko: "배포 전체가 아무도 완전히 이해하지 못하는 셸 스크립트들의 위태로운 연결에 기대고 있었다.",
        note: "기술 부채 때문에 언제 무너질지 모르는 구조를 말할 때 어울린다.",
      },
      {
        en: "After losing its biggest client, the agency was in a precarious financial position.",
        ko: "가장 큰 고객을 잃은 뒤 그 대행사는 재정적으로 위태로운 처지에 놓였다.",
        note: "financial position, situation과 함께 쓰는 전형적인 경제 기사 표현이다.",
      },
      {
        en: "A stack of books was balanced precariously on the edge of the desk.",
        ko: "책 더미가 책상 모서리에 아슬아슬하게 걸쳐 있었다.",
      },
    ],
    collocations: ["precarious position", "precarious balance", "precarious situation", "precarious work", "precariously balanced"],
    synonyms: ["unstable", "insecure", "shaky", "perilous", "tenuous"],
    antonyms: ["secure", "stable", "safe", "steady"],
    family: ["precariously (adv.)", "precariousness (n.)", "precarity (n.)"],
    origin: "라틴어 precarius(간청해서 얻은)에서 왔다. 남의 허락에 달려 있어 언제든 거둬질 수 있다는 데서 '불안정한'이 되었다.",
    themes: ["business", "everyday", "emotion"],
  },
  {
    word: "preclude",
    pos: ["verb"],
    ipa: "/prɪˈkluːd/",
    level: "C2",
    meaning: "불가능하게 하다, 미리 막다, 배제하다",
    definition: "To prevent something from happening or someone from doing something; to make impossible in advance.",
    explanation:
      "어떤 조건이나 사실이 앞으로의 가능성을 미리 차단한다는 뜻의 격식 있는 타동사다. 'preclude the possibility of ~'나 'preclude someone from doing ~' 형태로 쓰고, prevent와 비슷하지만 계약서·법률 문서·논문에서 훨씬 자주 보인다. 주어는 대개 사람이 아니라 규칙·조건·상황이다. 'does not preclude'(~을 배제하지 않는다)처럼 부정문으로 '그래도 가능성은 남아 있다'고 말하는 쓰임도 흔하다. from 없이 'preclude him to go'처럼 to부정사를 쓰는 것은 틀린 형태다.",
    examples: [
      {
        en: "Using a single shared database precludes deploying the services independently.",
        ko: "데이터베이스 하나를 공유하면 서비스들을 독립적으로 배포할 수 없게 된다.",
        note: "주어가 사람이 아닌 설계 조건이다. preclude + 동명사로 막히는 행위를 쓴다.",
      },
      {
        en: "The non-compete clause precludes employees from joining a rival firm for a year.",
        ko: "경업 금지 조항 때문에 직원은 1년 동안 경쟁사에 입사할 수 없다.",
        note: "preclude someone from doing 구문이다. to부정사를 쓰지 않는다.",
      },
      {
        en: "A negative result does not preclude the possibility of infection.",
        ko: "음성 결과가 나왔다고 감염 가능성을 배제할 수는 없다.",
      },
    ],
    collocations: ["preclude the possibility of", "preclude someone from doing", "does not preclude", "effectively preclude"],
    synonyms: ["prevent", "rule out", "prohibit", "exclude", "forestall"],
    antonyms: ["allow", "permit", "enable", "facilitate"],
    family: ["preclusion (n.)", "preclusive (adj.)"],
    confusedWith: [
      { word: "prelude", note: "prelude는 '서곡, 전조'라는 명사다. 철자 하나 차이지만 preclude는 '미리 막다'는 동사다." },
    ],
    origin: "라틴어 praecludere(앞을 닫다)에서 왔다. prae(미리) + claudere(닫다). close·exclude와 같은 뿌리다.",
    themes: ["business", "academic", "argument"],
  },
  {
    word: "proliferate",
    pos: ["verb"],
    ipa: "/prəˈlɪfəreɪt/",
    level: "C2",
    meaning: "급증하다, 확산되다, 우후죽순 늘어나다",
    definition: "To increase rapidly in number or amount; to multiply or spread.",
    explanation:
      "수가 짧은 시간에 빠르게 늘어난다는 뜻의 자동사다. 원래 세포·생물이 증식하는 것을 말하는 생물학 용어였고, 지금은 앱·가게·규정·가짜 뉴스처럼 '너무 많이 생겨나는' 것에 두루 쓴다. 통제되지 않고 퍼진다는 약간 부정적인 뉘앙스가 있을 때가 많다. increase는 중립적인 증가이고, proliferate는 '개수'가 여기저기서 불어나는 그림이다. 명사 proliferation은 nuclear proliferation(핵 확산)이라는 표현으로 특히 유명하다.",
    examples: [
      {
        en: "Without clear ownership, internal dashboards proliferated until nobody knew which one was accurate.",
        ko: "담당자가 분명하지 않자 사내 대시보드가 우후죽순 늘어나서 어느 것이 정확한지 아무도 몰랐다.",
        note: "관리되지 않고 개수만 불어나는 상황을 말한다. 자동사라 목적어가 없다.",
      },
      {
        en: "Coffee shops have proliferated across the city over the past decade.",
        ko: "지난 10년 동안 도시 곳곳에 커피숍이 급격히 늘어났다.",
      },
      {
        en: "Cancer cells proliferate uncontrollably because the normal signals that stop cell division fail.",
        ko: "암세포는 세포 분열을 멈추는 정상적인 신호가 작동하지 않아 걷잡을 수 없이 증식한다.",
        note: "생물학의 원래 의미(세포 증식)다.",
      },
    ],
    collocations: ["proliferate rapidly", "begin to proliferate", "nuclear proliferation", "cells proliferate"],
    synonyms: ["multiply", "mushroom", "spread", "burgeon", "snowball"],
    antonyms: ["dwindle", "decline", "decrease", "shrink"],
    family: ["proliferation (n.)", "prolific (adj.)", "proliferative (adj.)"],
    confusedWith: [
      { word: "prolific", note: "prolific은 작가·선수처럼 '다작하는, 많이 만들어 내는'이고, proliferate는 무언가가 '급증하다'는 동사다." },
    ],
    origin: "proliferation에서 거꾸로 만든 말로, 프랑스어 prolifère를 거쳐 라틴어 proles(자손) + ferre(낳다)에서 왔다.",
    themes: ["academic", "tech", "business"],
  },
  {
    word: "prudent",
    pos: ["adjective"],
    ipa: "/ˈpruːdənt/",
    level: "C1",
    meaning: "신중한, 분별 있는, 현명한",
    definition: "Acting with or showing care and thought for the future, especially to avoid risk.",
    explanation:
      "앞일을 내다보고 위험을 피하도록 조심스럽게 판단한다는 뜻이다. 돈·투자·정책처럼 손해를 볼 수 있는 결정에 특히 잘 쓰고, 'It would be prudent to ~'는 공손하게 조언할 때 쓰는 단골 표현이다. careful은 실수하지 않도록 주의하는 것 일반이고, prudent는 장기적인 손익을 따져 현명하게 고른다는 판단력에 초점이 있다. cautious는 위험을 피하려고 머뭇거리는 성향이 더 강하다. prudish(성적으로 지나치게 점잔 빼는)와 헷갈리지 않도록 주의한다.",
    examples: [
      {
        en: "It would be prudent to take a database snapshot before running the migration.",
        ko: "마이그레이션을 실행하기 전에 데이터베이스 스냅숏을 떠 두는 게 현명하겠다.",
        note: "It would be prudent to ~는 지시가 아니라 정중한 권고로 들린다.",
      },
      {
        en: "Given the uncertain market, the board made the prudent decision to delay the expansion.",
        ko: "시장이 불확실해서 이사회는 사업 확장을 미루는 신중한 결정을 내렸다.",
      },
      {
        en: "She has always been prudent with money, so the sudden layoff didn't ruin her.",
        ko: "그녀는 늘 돈을 신중하게 써 와서 갑작스러운 해고에도 무너지지 않았다.",
        note: "prudent with money는 '돈 관리가 알뜰하고 분별 있다'는 뜻이다.",
      },
    ],
    collocations: ["it would be prudent to", "prudent decision", "prudent with money", "prudent investment", "financially prudent"],
    synonyms: ["wise", "sensible", "judicious", "cautious", "careful"],
    antonyms: ["imprudent", "reckless", "rash", "unwise"],
    family: ["prudence (n.)", "prudently (adv.)", "imprudent (adj.)"],
    confusedWith: [
      { word: "prudish", note: "prudish는 성이나 노출에 대해 '지나치게 점잔 빼는'이라는 뜻이다. prudent와 뜻이 전혀 다르다." },
    ],
    origin: "라틴어 prudens에서 왔고, providens(앞을 내다보는)가 줄어든 말이다. provide와 같은 뿌리다.",
    themes: ["business", "everyday"],
  },
  {
    word: "pertinent",
    pos: ["adjective"],
    ipa: "/ˈpɜːrtnənt/",
    level: "C2",
    meaning: "적절한, 관련 있는, 핵심을 짚는",
    definition: "Relevant or applicable to a particular matter; directly to the point.",
    explanation:
      "지금 다루는 문제와 직접 관련이 있어서 짚을 가치가 있다는 뜻이다. relevant와 거의 같지만 더 격식 있고, 'a pertinent question'처럼 '핵심을 찌르는'이라는 칭찬이 담기기도 한다. 관련 대상은 전치사 to로 이어 'pertinent to the case'처럼 쓴다. 법률·학술·회의록에서 information, details, question, facts와 자주 붙는다. pertinacious(끈질긴, 완고한)는 철자가 비슷하지만 전혀 다른 말이다.",
    examples: [
      {
        en: "Please attach only the log lines pertinent to the error, not the entire file.",
        ko: "파일 전체 말고 에러와 관련된 로그 줄만 첨부해 주세요.",
        note: "pertinent to ~ 형태로 명사를 뒤에서 꾸민다. 전치사는 to다.",
      },
      {
        en: "That's a pertinent question, and it's one we haven't answered yet.",
        ko: "핵심을 짚는 질문인데, 우리가 아직 답하지 못한 문제다.",
        note: "회의에서 상대 질문이 적절하다고 인정할 때 자연스럽다.",
      },
      {
        en: "The lawyer argued that the defendant's past convictions were not pertinent to the case.",
        ko: "변호사는 피고인의 전과가 이 사건과 관련이 없다고 주장했다.",
      },
    ],
    collocations: ["pertinent to", "pertinent question", "pertinent information", "pertinent details", "highly pertinent"],
    synonyms: ["relevant", "applicable", "germane", "apposite", "to the point"],
    antonyms: ["irrelevant", "extraneous", "immaterial", "beside the point"],
    family: ["pertinence (n.)", "pertinently (adv.)", "impertinent (adj.)"],
    confusedWith: [
      { word: "pertinacious", note: "pertinacious는 '끈질긴, 고집스러운'이라는 뜻으로 관련성과는 상관이 없다." },
      { word: "impertinent", note: "impertinent는 '무례한, 건방진'으로 주로 쓴다. pertinent의 단순한 반대말(무관한)로는 잘 쓰지 않는다." },
    ],
    origin: "라틴어 pertinere(~에 닿다, 관계되다)에서 왔다. per(끝까지) + tenere(잡다).",
    themes: ["academic", "business", "argument"],
  },
];
