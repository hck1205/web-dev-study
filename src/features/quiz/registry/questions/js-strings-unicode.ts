import type { QuizQuestion } from "../types";

export const JS_STRINGS_UNICODE: QuizQuestion[] = [
  {
    id: "js-strings-unicode-1",
    post: "js-strings-unicode",
    question: '"좋아요👍".length가 4가 아니라 5인 이유는?',
    choices: [
      "한글 한 글자가 UTF-8로 3바이트라서",
      "👍가 U+FFFF를 넘는 글자라 UTF-16 코드 유닛 두 칸(서로게이트 쌍)으로 저장되어서",
      "문자열 끝에 보이지 않는 종료 문자가 하나 붙어서",
      "👍 뒤에 피부색 수식자가 자동으로 붙어서",
    ],
    answer: 1,
    explanation:
      "length는 UTF-16 코드 유닛 수를 센다. BMP 밖의 글자인 👍는 D83D와 DC4D 두 칸이 되어 한글 세 칸과 합쳐 5가 된다. 바이트 수는 TextEncoder로 따로 재야 하고, 그 값은 13이다.",
    anchor: "이모지-하나가-두-칸을-먹는-이유",
  },
  {
    id: "js-strings-unicode-2",
    post: "js-strings-unicode",
    question: '가족 이모지 "👨‍👩‍👧"를 사람이 보는 한 글자로 세려면 무엇을 써야 하나?',
    choices: [
      "s.length",
      "[...s].length",
      'new Intl.Segmenter("ko", { granularity: "grapheme" })로 나눈 조각 수',
      "s.normalize(\"NFC\").length",
    ],
    answer: 2,
    explanation:
      "가족 이모지는 이모지 세 개를 ZWJ 두 개로 이은 코드 포인트 5개라서 펼쳐도 5가 나온다. 여러 코드 포인트가 모인 자소 클러스터는 Intl.Segmenter를 grapheme 단위로 써야 1로 센다. NFC 변환은 이모지 조합을 합치지 않는다.",
    anchor: "intlsegmenter로-사람이-보는-글자를-센다",
  },
  {
    id: "js-strings-unicode-3",
    post: "js-strings-unicode",
    question: '검색어를 slice(0, 4)로 자른 뒤 encodeURIComponent를 불렀더니 특정 입력에서만 URIError가 난다. 가장 그럴듯한 원인은?',
    choices: [
      "slice가 서로게이트 쌍 가운데를 잘라 짝 잃은 반쪽이 남았다",
      "encodeURIComponent는 한글을 처리하지 못한다",
      "slice는 음수 인덱스를 받지 못해 예외를 던진다",
      "검색어에 공백이 있으면 encodeURIComponent가 실패한다",
    ],
    answer: 0,
    explanation:
      "slice는 코드 유닛 단위라 이모지의 앞 칸만 남길 수 있다. 짝 잃은 서로게이트는 UTF-8로 바꿀 수 없어서 encodeURIComponent가 URIError를 던진다. isWellFormed()로 확인하고, 자를 때는 자소 단위로 나눈 뒤 자른다.",
    anchor: "칸-단위-메서드로-자르면-반쪽이-남는다",
  },
  {
    id: "js-strings-unicode-4",
    post: "js-strings-unicode",
    question: '맥에서 올린 "한글.png"를 name.includes("한글")로 찾지 못했다. name.length는 10이다. 무엇을 해야 하나?',
    choices: [
      'name.toLowerCase()를 먼저 부른다',
      'name.localeCompare("한글.png")가 0인지 본다',
      "파일 이름을 UTF-8 바이트 배열로 바꿔 비교한다",
      'name.normalize("NFC")로 완성형으로 맞춘 뒤 비교·저장한다',
    ],
    answer: 3,
    explanation:
      "자모로 풀린 NFD라서 '한글'이 6칸이 되어 전체가 10칸이다. 완성형으로 쓴 '한글'과는 다른 문자열이라 includes가 실패한다. localeCompare는 두 표현을 같다고 보지만 검색이나 키 비교에는 쓸 수 없으니 입구에서 NFC로 맞춘다.",
    anchor: "같은-한글이-서로-다른-문자열일-때",
  },
  {
    id: "js-strings-unicode-5",
    post: "js-strings-unicode",
    question: '["가", "b", "A", "a"].sort()의 결과가 [ "A", "a", "b", "가" ]인 이유는?',
    choices: [
      "sort는 기본적으로 문자열 길이 순으로 정렬한다",
      "비교 함수가 없으면 UTF-16 코드 유닛 번호 순으로 비교한다",
      "sort는 실행 환경의 로캘 순서를 기본으로 따른다",
      "한글은 숫자로 바뀐 뒤 비교되어 맨 뒤로 간다",
    ],
    answer: 1,
    explanation:
      "기본 sort는 코드 유닛 번호를 비교한다. 대문자 A(U+0041)가 소문자보다 작고, 한글은 U+AC00 이상이라 라틴 문자 뒤로 간다. 사용자 언어 순서가 필요하면 Intl.Collator의 compare를 넘긴다.",
    anchor: "정렬은-코드-유닛-순서가-아니라-사람의-순서로",
  },
  {
    id: "js-strings-unicode-6",
    post: "js-strings-unicode",
    question: "10만 개 이름을 한국어 순서로 정렬할 때 sort((a, b) => a.localeCompare(b, \"ko\"))보다 나은 방법과 그 이유는?",
    choices: [
      "Intl.Collator를 한 번 만들어 compare를 넘긴다. 호출마다 비교 규칙을 준비하지 않아서 빠르다",
      "기본 sort()를 쓴다. 한국어 순서와 코드 유닛 순서가 같다",
      "모든 이름을 NFKC로 바꾼 뒤 기본 sort()를 쓴다. 호환 문자가 합쳐져 순서가 맞는다",
      "localeCompare 대신 < 연산자를 쓴다. 로캘 순서를 따르면서 더 빠르다",
    ],
    answer: 0,
    explanation:
      "localeCompare와 Collator는 같은 규칙을 쓰지만 Collator는 한 번 만들어 재사용한다. 글의 실험에서는 세 배 넘게 빨랐다. < 연산자와 기본 sort는 코드 유닛 순서라 대소문자와 한글 위치가 사람의 순서와 다르다.",
    anchor: "정렬은-코드-유닛-순서가-아니라-사람의-순서로",
  },
  {
    id: "js-strings-unicode-7",
    post: "js-strings-unicode",
    question: '자바스크립트에서 5로 세어지는 "좋아요👍"를 PostgreSQL VARCHAR(4) 열에 넣으면 어떻게 되나?',
    choices: [
      "길이 초과로 거절된다. PostgreSQL도 UTF-16 코드 유닛으로 센다",
      "길이 초과로 거절된다. PostgreSQL은 바이트로 센다",
      "들어간다. PostgreSQL의 문자 길이는 코드 포인트 기준이라 4다",
      "들어가지만 👍가 반쪽으로 잘려 저장된다",
    ],
    answer: 2,
    explanation:
      "PostgreSQL의 length와 VARCHAR(n)은 코드 포인트를 세서 이 문자열은 4다. 바이트로는 13이다. 같은 값이 층마다 다르게 세어지니 화면 제한과 서버 검증을 같은 단위로 맞춰야 한다.",
    anchor: "화면과-서버가-같은-단위로-세야-한다",
  },
];
