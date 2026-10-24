import type { QuizQuestion } from "../types";

export const MONGODB_SECURITY: QuizQuestion[] = [
  {
    id: "mongodb-security-1",
    post: "mongodb-security",
    question: "다른 서버에서 붙어야 해서 `bindIp`를 `0.0.0.0`으로 바꿨다. 이때 반드시 함께 확인해야 하는 것은?",
    choices: [
      "WiredTiger 캐시 크기",
      "`security.authorization: enabled`와 방화벽으로 앱 서버에서만 받는지",
      "oplog 크기",
      "저장 암호화가 켜져 있는지",
    ],
    answer: 1,
    explanation:
      "인증이 꺼진 채 바인딩만 넓히면 누구나 접속해 모든 명령을 실행할 수 있고, 몸값 메모만 남기고 비워지는 사고가 여기서 난다. 저장 암호화는 디스크 도난을 막을 뿐 로그인 없는 접속은 막지 못한다.",
    anchor: "열린-문-두-개-bindip와-authorization",
  },
  {
    id: "mongodb-security-2",
    post: "mongodb-security",
    question: "`openssl x509 -noout -subject` 출력 `C = KR, O = shop, OU = apps, CN = orders-api`를 그대로 복사해 x.509 사용자를 만들었더니 인증서는 맞는데 로그인이 안 된다. 왜일까?",
    choices: [
      "x.509 사용자는 admin DB에 만들어야 한다",
      "클라이언트 인증서에는 반드시 DC가 있어야 한다",
      "MongoDB는 RFC 2253 형식(`CN=orders-api,OU=apps,O=shop,C=KR`)의 subject를 사용자 이름으로 쓴다",
      "x.509 인증은 Enterprise에서만 된다",
    ],
    answer: 2,
    explanation:
      "OpenSSL 기본 출력은 순서가 반대이고 공백이 있다. `-nameopt RFC2253`으로 찍은 문자열로 `$external`에 사용자를 만들어야 맞는다. x.509 인증은 Community에서도 된다.",
    anchor: "인증서-subject가-사용자-이름이-된다",
  },
  {
    id: "mongodb-security-3",
    post: "mongodb-security",
    question: "주문 API 계정에 `readWrite` 대신 `orders`의 find·insert·update와 `products`의 find만 담은 사용자 정의 역할을 주는 이유로 가장 알맞은 것은?",
    choices: [
      "사용자 정의 역할이 내장 역할보다 권한 검사가 빠르다",
      "readWrite는 Enterprise 전용이다",
      "readWrite로는 인덱스를 쓸 수 없다",
      "readWrite에는 컬렉션 삭제 같은 동작까지 들어 있어, 주입 사고가 났을 때 피해 범위가 넓어진다",
    ],
    answer: 3,
    explanation:
      "권한은 리소스와 액션의 묶음이라, 앱이 실제로 하는 동작만 묶으면 사고가 나도 그 컬렉션과 그 동작으로 피해가 줄어든다. 최소 권한을 주는 이유는 성능이 아니라 피해 범위다.",
    anchor: "권한은-리소스와-액션의-묶음이다",
  },
  {
    id: "mongodb-security-4",
    post: "mongodb-security",
    question: "복제본 셋 멤버 인증을 keyFile에서 x.509로 바꾸려는 이유로 가장 알맞은 것은?",
    choices: [
      "keyFile은 모든 멤버가 같은 비밀을 나눠 가져서, 한 대가 털리면 전체가 털리고 교체도 모든 멤버에 배포해야 한다",
      "keyFile을 쓰면 클라이언트 인증을 켤 수 없다",
      "keyFile은 TLS와 함께 쓸 수 없다",
      "keyFile은 샤드 클러스터에서 지원되지 않는다",
    ],
    answer: 0,
    explanation:
      "keyFile은 사실상 공유 비밀번호다. x.509는 멤버마다 자기 인증서를 갖고 CA가 신뢰를 보증하니 한 대만 교체하거나 폐기할 수 있다. keyFile을 켜면 클라이언트 인증도 함께 켜지므로 두 번째 보기는 틀렸다.",
    anchor: "멤버끼리도-서로-확인한다-keyfile과-x509",
  },
  {
    id: "mongodb-security-5",
    post: "mongodb-security",
    question: "WiredTiger 저장 암호화를 켠 서버에서 `mongodump`로 뜬 백업 파일은 어떤 상태인가?",
    choices: [
      "같은 마스터 키로 암호화되어 있다",
      "평문 BSON이라 백업은 따로 암호화해야 한다",
      "KMIP 서버 없이는 열 수 없다",
      "필드 단위로 무작위 암호화되어 있다",
    ],
    answer: 1,
    explanation:
      "저장 암호화는 데이터 파일이 디스크에 쓰일 때만 암호화한다. mongodump는 정상 쿼리로 데이터를 읽어 가므로 결과는 평문이다. 그래서 저장 암호화는 로그인한 사용자나 덤프로 새는 것을 막지 못한다.",
    anchor: "디스크에-쓰인-것-저장-암호화가-막는-것과-못-막는-것",
  },
  {
    id: "mongodb-security-6",
    post: "mongodb-security",
    question: "CSFLE 결정적 암호화를 `bloodType`(A, B, O, AB) 필드에 쓰면 무엇이 문제인가?",
    choices: [
      "결정적 암호화는 문자열에 쓸 수 없다",
      "값이 짧아서 암호화가 실패한다",
      "같은 평문이 늘 같은 암호문이라 암호문 종류가 네 개뿐이고, 개수를 세면 값을 추측할 수 있다",
      "결정적 암호화는 인덱스를 만들 수 없어 느리다",
    ],
    answer: 2,
    explanation:
      "결정적 암호화가 일치 검색을 가능하게 하는 성질이 곧 약점이다. 값의 종류가 적으면 분포만으로 무엇인지 드러난다. 그래서 결정적은 주민번호처럼 값이 거의 겹치지 않는 필드에만 쓰고, 나머지는 무작위나 Queryable Encryption을 쓴다.",
    anchor: "서버도-평문을-못-보게-클라이언트-측-필드-암호화",
  },
  {
    id: "mongodb-security-7",
    post: "mongodb-security",
    question: "CSFLE를 켰는데도 DB 관리자가 주민번호를 읽을 수 있는 경우는?",
    choices: [
      "관리자에게 KMS에서 CMK로 복호화할 권한도 있을 때",
      "관리자가 root 역할을 가졌을 때",
      "관리자가 감사 로그를 껐을 때",
      "컬렉션에 인덱스가 있을 때",
    ],
    answer: 0,
    explanation:
      "서버는 키를 갖지 않으니 DB 권한만으로는 BinData 암호문만 보인다. 하지만 같은 사람이 KMS 복호화 권한이나 앱 서버 접근 권한을 가졌다면 DEK를 풀어 다 읽을 수 있다. CSFLE의 보안은 DB 권한과 키 권한을 나누는 데 달려 있다.",
    anchor: "csfle를-쓰면-db-관리자도-못-보나",
  },
];
