import type { QuizQuestion } from "../types";

export const ENCRYPTION_AT_REST: QuizQuestion[] = [
  {
    id: "encryption-at-rest-1",
    post: "encryption-at-rest",
    question: "DB 디스크를 EBS 암호화로 보호하고 있다. SQL 인젝션으로 고객 테이블을 조회당하면 어떻게 되나?",
    choices: [
      "디스크가 암호화돼 있으니 공격자는 암호문만 받는다",
      "DB가 평소처럼 복호화해서 돌려주므로 평문이 나간다",
      "KMS가 비정상 쿼리를 감지해 키 사용을 막는다",
      "TDE를 같이 켰다면 막힌다",
    ],
    answer: 1,
    explanation:
      "디스크·TDE 암호화는 매체나 파일이 통째로 샐 때를 막는 장치다. 인젝션된 쿼리도 DB가 실행하는 정상 쿼리라 블록은 평소처럼 복호화되어 평문 행이 돌아간다. 막는 건 파라미터 바인딩이다.",
    anchor: "저장-암호화가-막지-못하는-것",
  },
  {
    id: "encryption-at-rest-2",
    post: "encryption-at-rest",
    question: "LUKS 볼륨의 패스프레이즈를 luksChangeKey로 바꿨다. 4TB 디스크인데 몇 초 만에 끝난 이유는?",
    choices: [
      "데이터는 볼륨 키로 암호화돼 있고 패스프레이즈는 키 슬롯에서 그 볼륨 키를 감쌀 뿐이라서",
      "변경분만 백그라운드에서 천천히 다시 암호화하기 때문에",
      "XTS 모드는 키를 바꿔도 같은 암호문이 나오기 때문에",
      "실제로는 다음 마운트 때 전체 재암호화가 일어나기 때문에",
    ],
    answer: 0,
    explanation:
      "볼륨 키는 포맷할 때 한 번 만들어지고 패스프레이즈 교체는 키 슬롯만 다시 쓴다. 실습에서도 볼륨 키 digest가 바뀌지 않았다. 그래서 볼륨 키를 이미 빼 간 사람은 패스프레이즈 교체로 막을 수 없고, 그때는 reencrypt가 필요하다.",
    anchor: "패스프레이즈를-바꿔도-데이터는-다시-암호화되지-않는다",
  },
  {
    id: "encryption-at-rest-3",
    post: "encryption-at-rest",
    question: "봉투 암호화에서 마스터 키(KEK)를 교체할 때 해야 하는 일로 가장 맞는 것은?",
    choices: [
      "모든 데이터를 복호화해 새 마스터 키로 다시 암호화한다",
      "아무것도 하지 않아도 옛 키를 바로 지울 수 있다",
      "감싼 데이터 키만 옛 KEK로 풀고 새 KEK로 다시 감싼 뒤, 옛 KEK를 쓰는 레코드가 0개일 때 옛 키를 내린다",
      "데이터 키를 모두 새로 만들어야 한다",
    ],
    answer: 2,
    explanation:
      "데이터는 데이터 키로 암호화돼 있어서 마스터 키를 바꿀 때는 수십 바이트짜리 감싼 키만 다시 감싸면 된다. 실습에서도 다시 감싼 뒤 암호문이 그대로였다. 옛 키는 그 키로 감싼 레코드가 남지 않았는지 확인한 뒤에 내린다.",
    anchor: "키-교체와-재암호화",
  },
  {
    id: "encryption-at-rest-4",
    post: "encryption-at-rest",
    question: "AES-GCM으로 행마다 암호화하면서 행 id를 AAD로 묶었다. 이것이 막는 공격은?",
    choices: [
      "키를 모르는 사람이 암호문을 해독하는 것",
      "DB 쓰기 권한이 있는 사람이 다른 행의 암호문을 자기 행에 복사해 앱이 풀어 주게 하는 것",
      "같은 IV를 재사용했을 때의 평문 노출",
      "KMS 호출 한도 초과",
    ],
    answer: 1,
    explanation:
      "AAD가 없으면 옮겨 붙인 암호문도 멀쩡해서 복호화가 성공한다. 행 id를 AAD로 넣으면 다른 문맥에서 풀 때 인증 태그 검사가 실패한다. IV 재사용은 AAD로 막을 수 없다.",
    anchor: "봉투-암호화-데이터-키와-마스터-키",
  },
  {
    id: "encryption-at-rest-5",
    post: "encryption-at-rest",
    question: "pgp_sym_decrypt로 암호화한 이메일 컬럼을 WHERE에서 풀어 비교했더니 2만 행에 9초가 걸렸다. 같음 검색을 빠르게 하는 일반적인 방법은?",
    choices: [
      "pgp_sym_decrypt(email_enc, key)에 표현식 인덱스를 건다",
      "암호문 컬럼에 B-tree 인덱스를 건다",
      "정규화한 값의 HMAC을 별도 키로 계산한 블라인드 인덱스 컬럼을 두고 인덱스를 건다",
      "LIKE 검색으로 바꾼다",
    ],
    answer: 2,
    explanation:
      "암호문은 같은 평문이라도 매번 달라서 인덱스가 소용없다. HMAC은 같은 입력에 같은 값을 내므로 같음 비교에 인덱스를 쓸 수 있다. 복호화 결과에 표현식 인덱스를 걸면 평문이 인덱스에 그대로 저장되어 암호화가 무의미해진다.",
    anchor: "암호화한-컬럼은-찾을-수-없다",
  },
  {
    id: "encryption-at-rest-6",
    post: "encryption-at-rest",
    question: "같은 키와 같은 IV로 AES-GCM 암호화를 두 번 했다. 무엇이 문제인가?",
    choices: [
      "두 암호문의 XOR이 두 평문의 XOR이 되어 한쪽 평문을 알면 다른 쪽이 풀린다",
      "두 번째 암호화가 오류로 실패한다",
      "암호문 길이가 두 배가 된다",
      "인증 태그가 생성되지 않을 뿐 기밀성은 유지된다",
    ],
    answer: 0,
    explanation:
      "GCM은 CTR 기반이라 같은 키와 IV면 키 스트림이 같다. 키를 몰라도 알려진 평문 하나로 다른 평문을 복원할 수 있고, 인증 키까지 드러나 위조도 가능해진다. 그래서 IV는 매번 무작위로 새로 만든다.",
    anchor: "gcm에서-nonce를-다시-쓰면",
  },
  {
    id: "encryption-at-rest-7",
    post: "encryption-at-rest",
    question: "pgcrypto로 SQL 안에서 키를 넘겨 암호화할 때 따로 조심해야 하는 점은?",
    choices: [
      "키 길이가 16자를 넘으면 잘린다",
      "키 문자열이 느린 쿼리 로그, pg_stat_statements, 실행 계획에 그대로 남을 수 있다",
      "pgcrypto는 PostgreSQL 16에서 제거되었다",
      "암호화된 값은 bytea가 아니라 text로만 저장된다",
    ],
    answer: 1,
    explanation:
      "키가 쿼리 문자열의 일부라서 쿼리를 기록하는 모든 곳에 같이 남는다. 실습의 EXPLAIN 출력 Filter 줄에도 키가 보였다. DB 운영자에게서도 숨기려면 앱에서 암호화해 bytea만 넣는다.",
    anchor: "데이터베이스-안에서-tde와-컬럼-암호화",
  },
];
