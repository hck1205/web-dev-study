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
      },
      {
        en: "She was zealous in defending her team's budget during the planning meetings.",
        ko: "그녀는 기획 회의 내내 팀 예산을 지키는 데 열성적이었다.",
        note: "zealous in -ing 구조로 무엇에 열성적인지 나타낸다.",
      },
      {
        en: "The regulator has been zealous about enforcing the new privacy rules.",
        ko: "규제 당국은 새 개인정보 보호 규정을 집행하는 데 열을 올리고 있다.",
      },
      {
        en: "The security guard was so zealous about the rules that he wouldn't let me back in for my umbrella.",
        ko: "경비원이 규칙을 너무 철저하게 지켜서 우산을 가지러 다시 들어가는 것조차 막았다.",
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
