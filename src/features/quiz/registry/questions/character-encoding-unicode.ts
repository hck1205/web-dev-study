import type { QuizQuestion } from "../types";

export const CHARACTER_ENCODING_UNICODE: QuizQuestion[] = [
  {
    id: "character-encoding-unicode-1",
    post: "character-encoding-unicode",
    question: "한(U+D55C)을 UTF-8로 적으면 몇 바이트이고, 첫 바이트는 왜 1110으로 시작하나?",
    choices: [
      "2바이트. 한글은 EUC-KR과 같이 2바이트로 적는다",
      "3바이트. U+0800~U+FFFF 범위라 첫 바이트의 1110이 3바이트짜리 글자라는 표시다",
      "4바이트. 한글은 BMP 밖에 있다",
      "3바이트. 1110은 한글 영역이라는 표시다",
    ],
    answer: 1,
    explanation:
      "UTF-8은 첫 바이트의 앞 비트로 길이를 알린다. U+D55C는 3바이트 범위라 1110xxxx 10xxxxxx 10xxxxxx 틀에 비트를 채워 ED 95 9C가 된다. 1110은 언어와 상관없이 길이 표시일 뿐이다.",
    anchor: "utf-8은-글자마다-칸-수가-다르다",
  },
  {
    id: "character-encoding-unicode-2",
    post: "character-encoding-unicode",
    question: "자바스크립트에서 \"😀\".length가 2인 이유는?",
    choices: [
      "이모지는 UTF-8로 4바이트라 2바이트씩 세기 때문이다",
      "이모지는 코드 포인트 두 개로 이루어져 있기 때문이다",
      "문자열이 UTF-16 코드 유닛 배열이고, BMP 밖 글자는 서로게이트 쌍으로 유닛 두 개를 쓰기 때문이다",
      "자바스크립트가 이모지를 그래핌 클러스터 두 개로 보기 때문이다",
    ],
    answer: 2,
    explanation:
      "U+1F600은 BMP 밖이라 UTF-16에서 D83D DE00 두 유닛으로 적힌다. length는 유닛 수를 센다. 코드 포인트는 하나뿐이라 [...s].length는 1이다.",
    anchor: "utf-16과-서로게이트-쌍",
  },
  {
    id: "character-encoding-unicode-3",
    post: "character-encoding-unicode",
    question: "BOM이 붙은 UTF-8 CSV를 파이썬에서 encoding=\"utf-8\"로 읽었더니 row[\"name\"]이 KeyError를 낸다. 왜일까?",
    choices: [
      "첫 열 이름 앞에 보이지 않는 U+FEFF가 붙어 \\ufeffname이 됐기 때문이다",
      "BOM이 있으면 파이썬이 파일을 UTF-16으로 읽기 때문이다",
      "CSV 모듈은 BOM이 있으면 첫 줄을 건너뛰기 때문이다",
      "BOM 때문에 줄바꿈 문자가 바뀌었기 때문이다",
    ],
    answer: 0,
    explanation:
      "utf-8 코덱은 BOM을 글자로 남겨 두어 첫 데이터의 일부가 된다. utf-8-sig로 읽으면 있으면 떼고 읽는다. 엑셀용 CSV가 아닌 JSON이나 설정 파일에는 BOM을 붙이지 않는다.",
    anchor: "bom-utf-8에-붙은-세-바이트",
  },
  {
    id: "character-encoding-unicode-4",
    post: "character-encoding-unicode",
    question: "깨진 글자를 발견했다. 저장된 바이트를 보니 EF BF BD가 반복된다. 무엇을 뜻하나?",
    choices: [
      "읽는 쪽 설정만 틀렸으니 올바른 인코딩으로 다시 읽으면 복구된다",
      "BOM이 여러 번 들어갔다",
      "MySQL utf8mb3에 이모지를 넣었다",
      "어딘가에서 잘못 읽어 대체 문자(U+FFFD)로 바꾼 채 저장해서 원래 바이트를 잃었다",
    ],
    answer: 3,
    explanation:
      "EF BF BD는 대체 문자 U+FFFD의 UTF-8이다. 이미 원래 바이트가 사라져서 다시 읽어도 복구되지 않는다. 바이트가 올바른 UTF-8로 남아 있을 때만 설정을 고쳐 복구할 수 있다.",
    anchor: "한글이-깨지는-길",
  },
  {
    id: "character-encoding-unicode-5",
    post: "character-encoding-unicode",
    question: "맥에서 올린 파일 이름 \"김철수.pdf\"가 DB의 \"김철수\"로 검색되지 않는다. 가장 그럴듯한 원인은?",
    choices: [
      "파일 이름이 EUC-KR로 저장됐다",
      "파일 이름이 자모로 분해된 NFD라서 NFC로 저장된 값과 바이트가 다르다",
      "PostgreSQL varchar가 바이트 수로 세기 때문이다",
      "맥은 파일 이름에 BOM을 붙이기 때문이다",
    ],
    answer: 1,
    explanation:
      "NFD 한글은 화면에는 같아 보여도 코드 포인트가 세 배이고 바이트가 달라 = 비교가 실패한다. 입력 경계에서 NFC로 정규화해 저장한다.",
    anchor: "같은-글자-다른-바이트-정규화",
  },
  {
    id: "character-encoding-unicode-6",
    post: "character-encoding-unicode",
    question: "MySQL 테이블의 문자 집합이 utf8인데 이모지 닉네임을 넣으면 Incorrect string value 에러가 난다. 고치는 방법은?",
    choices: [
      "컬럼 길이를 두 배로 늘린다",
      "테이블과 연결 문자 집합을 모두 utf8mb4로 바꾼다",
      "클라이언트에서 이모지를 Base64로 바꿔 넣는다",
      "utf8 대신 latin1로 바꾼다",
    ],
    answer: 1,
    explanation:
      "MySQL의 utf8은 글자당 3바이트까지인 utf8mb3라 4바이트 이모지를 담지 못한다. 진짜 UTF-8은 utf8mb4이고, 서버만 바꾸고 드라이버 연결 문자 집합이 utf8로 남아 있으면 여전히 깨진다.",
    anchor: "mysql의-utf8은-utf-8이-아니다",
  },
  {
    id: "character-encoding-unicode-7",
    post: "character-encoding-unicode",
    question: "PostgreSQL varchar(5) 컬럼에 화면상 두 글자인 😀👍🏽을 넣었더니 char_length가 3으로 나온다. 이유는?",
    choices: [
      "PostgreSQL이 이모지를 2자로 세기 때문이다",
      "UTF-16 코드 유닛 수를 세기 때문이다",
      "PostgreSQL은 코드 포인트를 세고, 피부색 엄지는 엄지와 피부색 수식자 두 코드 포인트이기 때문이다",
      "BOM이 함께 저장됐기 때문이다",
    ],
    answer: 2,
    explanation:
      "varchar(n)과 char_length는 코드 포인트 단위다. 사람 눈의 글자(그래핌)와 다르므로, 프런트엔드가 그래핌으로 센 제한과 DB 제한이 어긋날 수 있다. 바이트 수는 octet_length로 따로 본다.",
    anchor: "db에서-글자-수와-바이트-수",
  },
];
