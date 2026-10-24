import type { QuizQuestion } from "../types";

export const LEETCODE_ENCODE_AND_DECODE_STRINGS: QuizQuestion[] = [
  {
    id: "leetcode-encode-and-decode-strings-1",
    post: "leetcode-encode-and-decode-strings",
    question: "`strs.join(\",\")`와 `s.split(\",\")`로 인코딩하면, 내용에 쉼표가 없어도 틀리는 입력은?",
    choices: ["[] (빈 목록)", "[\"a\", \"b\"]", "[\"한글\"]", "[\"#\", \"3\"]"],
    answer: 0,
    explanation:
      "구분자는 문자열 사이에만 들어가서 빈 목록과 빈 문자열 하나짜리 목록이 모두 빈 결과가 된다. split은 빈 문자열에서 [\"\"]를 돌려주니 빈 목록이 틀린다. 문자열마다 머리나 끝 표시를 붙이는 방식이면 개수가 결과에 드러나 이 문제가 없다.",
    anchor: "쉼표를-찍으면-어디서-깨지나",
  },
  {
    id: "leetcode-encode-and-decode-strings-2",
    post: "leetcode-encode-and-decode-strings",
    question: "길이 접두 decode에서 지금 자리부터 처음 나오는 `#`를 길이의 끝으로 믿어도 되는 이유는?",
    choices: [
      "내용에는 #가 들어올 수 없기 때문",
      "#는 항상 문자열 맨 끝에만 있기 때문",
      "지금 자리는 항상 숫자로만 된 길이의 첫 자리이고, 내용은 길이만큼 통째로 건너뛰어 그 안의 #를 찾을 일이 없기 때문",
      "indexOf가 마지막 #를 찾기 때문",
    ],
    answer: 2,
    explanation:
      "decode는 언제나 다음 문자열의 길이 숫자 첫 자리에서 출발한다. 숫자 다음에 처음 오는 #는 encode가 찍은 것이고, 내용 속 #는 길이로 잘라 가져가는 구간 안에 있어 검사되지 않는다. 내용에는 어떤 문자든 들어올 수 있다.",
    anchor: "길이를-먼저-적는다",
  },
  {
    id: "leetcode-encode-and-decode-strings-3",
    post: "leetcode-encode-and-decode-strings",
    question: "이스케이프 규칙(내용의 `/`는 `//`, 문자열 끝은 `/:`)으로 `[\"a/\", \":\"]`을 인코딩한 결과는?",
    choices: ["\"a/:/::\"", "\"a///::/:\"", "\"a//:/:\"", "\"a/,:\""],
    answer: 1,
    explanation:
      "첫 문자열 a/의 /가 //로 바뀌어 a//가 되고 끝 표시 /:가 붙어 a///:가 된다. 두 번째 문자열 :에 끝 표시가 붙어 ::/:가 되니 합치면 a///::/:다. decode는 /를 만나면 다음 글자가 /인지 :인지로 내용과 끝을 가른다.",
    anchor: "구분자를-이스케이프하기",
  },
  {
    id: "leetcode-encode-and-decode-strings-4",
    post: "leetcode-encode-and-decode-strings",
    question: "길이를 한 글자만 읽는 decode가 짧은 문자열 테스트는 통과하는데 실제로는 틀리는 입력은?",
    choices: ["빈 문자열", "#가 들어 있는 문자열", "숫자로만 된 문자열", "길이가 10 이상인 문자열"],
    answer: 3,
    explanation:
      "길이가 두 자리가 되면 첫 자리만 읽어 엉뚱한 만큼 가져가고, 그 뒤로는 내용 한가운데를 길이로 읽게 된다. \"12#abcdefghijkl1#x\"에서 실제로 ['#', '']이 나왔다. 예외 없이 조용히 틀리니 테스트에 긴 문자열을 꼭 넣는다.",
    anchor: "틀리기-쉬운-자리",
  },
  {
    id: "leetcode-encode-and-decode-strings-5",
    post: "leetcode-encode-and-decode-strings",
    question: "HTTP/1.1의 `Content-Length`와 Redis RESP의 `$5\\r\\nhello\\r\\n`이 이 문제의 어떤 풀이와 같은 생각인가?",
    choices: ["구분자로 잇기", "이스케이프", "길이 접두", "JSON 직렬화"],
    answer: 2,
    explanation:
      "둘 다 내용 앞에 길이를 먼저 알려 주고 그만큼만 읽게 한다. TCP는 메시지 경계를 주지 않는 바이트 흐름이라 그 위의 프로토콜이 이렇게 경계를 정한다. 반면 HTTP 헤더는 줄바꿈을 구분자로 써서, 값에 줄바꿈이 섞이면 헤더 인젝션이 생긴다.",
    anchor: "실제-프로토콜은-경계를-이렇게-정한다",
  },
];
