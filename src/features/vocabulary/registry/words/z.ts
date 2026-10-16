import type { VocabEntry } from "../types";

export const WORDS_Z: VocabEntry[] = [
  {
    word: "zealous",
    pos: ["adjective"],
    ipa: "/ˈzeləs/",
    level: "C2",
    meaning: "열성적인, 열렬한, 지나치게 열심인",
    definition: "Showing great energy and enthusiasm for a cause, belief, or goal.",
    explanation:
      "어떤 목표나 신념에 매우 열정적으로 몰두한다는 뜻이다. 칭찬으로도 쓰지만, 열의가 지나쳐 융통성이 없다는 뉘앙스가 깔리는 경우가 많아 enthusiastic보다 조심해서 써야 한다. 그래서 '과하게 열심인'을 뜻하는 overzealous가 실제로 더 자주 보이며, overzealous security guard처럼 비판에 쓴다. 무엇에 열성적인지는 zealous in doing이나 zealous about, zealous for로 잇는다. 발음은 zeal(/ziːl/)과 달리 첫 모음이 짧은 /ˈzeləs/라는 점도 주의한다.",
    examples: [
      {
        en: "Our linter was a little too zealous and flagged hundreds of perfectly valid lines.",
        ko: "우리 린터가 좀 지나치게 열심이어서 멀쩡한 코드 수백 줄을 문제로 표시했다.",
        note: "도구나 규칙이 '과하게 엄격하다'고 말할 때 too zealous나 overzealous를 쓴다.",
        context: "tech",
      },
      {
        en: "She was zealous in defending her team's budget during the planning meetings.",
        ko: "그녀는 기획 회의 내내 팀 예산을 지키는 데 열성적이었다.",
        note: "zealous in -ing 구조로 무엇에 열성적인지 나타낸다.",
        context: "business",
      },
      {
        en: "The regulator has been zealous about enforcing the new privacy rules.",
        ko: "규제 당국은 새 개인정보 보호 규정을 집행하는 데 열을 올리고 있다.",
        context: "argument",
      },
      {
        en: "The security guard was so zealous about the rules that he wouldn't let me back in for my umbrella.",
        ko: "경비원이 규칙을 너무 철저하게 지켜서 우산을 가지러 다시 들어가는 것조차 막았다.",
        context: "everyday",
      },
      {
        en: "The archive was zealously guarded by the family, and few historians ever saw it.",
        ko: "그 기록 보관물은 가족이 철저히 지켜서 실제로 본 역사학자가 거의 없었다.",
        note: "zealously guard/protect는 '지나칠 만큼 철저히 지키다'라는 흔한 연어다.",
        context: "academic",
      },
      {
        en: "Having just taken up running, he was zealous about it in a way his friends found exhausting.",
        ko: "막 달리기를 시작한 그는 친구들이 지칠 만큼 거기에 열을 올렸다.",
        note: "새로 빠진 사람의 과한 열의를 묘사할 때 잘 어울린다.",
        context: "emotion",
      },
      {
        en: "\"Let's not get too zealous with the cleanup. Some of those old flags are still in use.\"",
        ko: "\"정리하는 데 너무 열 올리지 말자. 오래된 플래그 중에 아직 쓰는 것도 있어.\"",
        context: "tech",
      },
    ],
    collocations: ["zealous supporter", "zealous in pursuing", "zealous enforcement", "overzealous", "zealous advocate"],
    synonyms: ["fervent", "ardent", "passionate", "enthusiastic", "fanatical"],
    antonyms: ["apathetic", "indifferent", "half-hearted", "lukewarm"],
    family: ["zeal (n.)", "zealot (n.)", "zealously (adv.)", "zealotry (n.)", "overzealous (adj.)"],
    confusedWith: [
      { word: "jealous", note: "jealous는 '질투하는'이라는 뜻이다. 둘 다 그리스어 zēlos에서 왔지만 지금은 의미가 갈라졌다." },
    ],
    origin: "그리스어 zēlos(열의, 경쟁심)에서 왔다. jealous와 같은 뿌리다.",
    themes: ["emotion", "argument"],
  },
];
