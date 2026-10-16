import type { VocabEntry } from "../types";

export const WORDS_H: VocabEntry[] = [
  {
    word: "hamper",
    pos: ["verb"],
    ipa: "/ˈhæmpər/",
    level: "C1",
    meaning: "방해하다, 지장을 주다, 발목을 잡다",
    definition: "To hinder or slow the progress or movement of something or someone.",
    explanation:
      "일이나 움직임이 제 속도로 나아가지 못하게 발목을 잡는다는 뜻이다. 완전히 막는 게 아니라 느리게, 어렵게 만든다는 느낌이라 efforts, progress, growth, investigation 같은 목적어가 잘 어울린다. 수동태(be hampered by)로 원인을 밝히는 문장이 매우 흔하다. impede와 거의 같은 뜻이지만 impede가 더 격식 있고 딱딱하며, hamper는 기사와 업무 글에서 두루 쓰는 중간 격식이다. 명사 hamper는 '뚜껑 달린 바구니'로 전혀 다른 단어다.",
    examples: [
      {
        en: "The migration was hampered by a lack of documentation for the legacy schema.",
        ko: "레거시 스키마에 대한 문서가 없어서 마이그레이션이 더디게 진행됐다.",
        note: "be hampered by + 원인. 무엇 때문에 지장이 생겼는지 밝히는 전형적인 수동태 문장이다.",
      },
      {
        en: "Supply chain problems continue to hamper growth in the manufacturing sector.",
        ko: "공급망 문제가 제조업 성장의 발목을 계속 잡고 있다.",
      },
      {
        en: "Heavy snow hampered rescue efforts throughout the night.",
        ko: "폭설 때문에 밤새 구조 작업이 난항을 겪었다.",
        note: "hamper efforts는 뉴스에서 아주 자주 보는 조합이다. 구조가 중단된 게 아니라 '어려워졌다'는 뜻이다.",
      },
      {
        en: "My knee injury has been hampering my running for weeks.",
        ko: "무릎 부상 때문에 몇 주째 달리기를 제대로 못 하고 있다.",
      },
    ],
    collocations: ["hamper efforts", "hamper progress", "hamper growth", "be seriously hampered by", "hamper an investigation"],
    synonyms: ["hinder", "impede", "obstruct", "hold back"],
    antonyms: ["facilitate", "assist", "expedite"],
    confusedWith: [
      { word: "impede", note: "뜻은 거의 같지만 impede가 더 격식 있고 학술·법률 글에 어울린다. 일상·기사에서는 hamper가 더 자연스럽다." },
      { word: "pamper", note: "pamper는 '애지중지하다, 응석을 받아 주다'로 발음만 비슷하다." },
    ],
    themes: ["business", "everyday"],
  },
  {
    word: "heuristic",
    pos: ["noun", "adjective"],
    ipa: "/hjʊˈrɪstɪk/",
    level: "C2",
    meaning: "어림법, 경험적 판단 규칙, 발견적인",
    definition: "A practical rule or approach that finds a good-enough solution quickly, without guaranteeing that it is optimal or correct.",
    explanation:
      "항상 정답을 보장하지는 않지만 빠르게 '꽤 괜찮은' 답을 찾게 해 주는 경험 법칙을 말한다. 컴퓨터 과학에서는 최적해 대신 근사해를 찾는 알고리즘(A*의 휴리스틱 함수 등)을, 심리학에서는 사람이 판단할 때 쓰는 지름길(가용성 휴리스틱 등)을 가리킨다. 명사로는 셀 수 있어서 a heuristic, heuristics로 쓴다. rule of thumb과 뜻이 비슷하지만 heuristic이 더 학술적이고 기술적인 말이다. algorithm과 달리 '정확성을 보장하지 않는다'는 점이 핵심 차이다.",
    examples: [
      {
        en: "The linter uses a simple heuristic to guess whether a file is generated code.",
        ko: "린터는 간단한 어림 규칙으로 파일이 자동 생성된 코드인지 추측한다.",
        note: "가산명사라 a heuristic이라고 쓴다. 틀릴 수도 있다는 전제가 담겨 있다.",
      },
      {
        en: "A* search is only as good as the heuristic it uses to estimate the remaining distance.",
        ko: "A* 탐색의 성능은 남은 거리를 추정하는 휴리스틱 함수가 얼마나 좋은지에 달려 있다.",
      },
      {
        en: "People often rely on mental heuristics, such as how easily an example comes to mind, when judging risk.",
        ko: "사람들은 위험을 판단할 때 예시가 얼마나 쉽게 떠오르는지 같은 머릿속 지름길에 자주 기댄다.",
        note: "심리학·행동경제학에서는 사람이 쓰는 판단의 지름길을 heuristics라고 부른다.",
      },
      {
        en: "As a rough heuristic, I never schedule more than three meetings in a day.",
        ko: "대충 정한 내 규칙으로는 하루에 회의를 세 개 넘게 잡지 않는다.",
      },
    ],
    collocations: ["a simple heuristic", "rely on heuristics", "heuristic approach", "heuristic algorithm", "use a heuristic"],
    synonyms: ["rule of thumb", "shortcut", "approximation", "guideline"],
    family: ["heuristics (n.)", "heuristically (adv.)"],
    confusedWith: [
      { word: "algorithm", note: "algorithm은 정해진 절차로 정확한 답을 내는 방법이고, heuristic은 빠르지만 정답을 보장하지 않는 어림 규칙이다. 휴리스틱을 쓰는 알고리즘도 있다." },
    ],
    origin: "그리스어 heuriskein(찾아내다)에서 왔다. 아르키메데스가 외쳤다는 eureka(찾았다)와 같은 뿌리다.",
    themes: ["tech", "academic"],
  },
];
