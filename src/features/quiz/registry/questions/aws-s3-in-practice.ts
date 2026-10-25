import type { QuizQuestion } from "../types";

export const AWS_S3_IN_PRACTICE: QuizQuestion[] = [
  {
    id: "aws-s3-in-practice-1",
    post: "aws-s3-in-practice",
    question: "같은 계정의 역할에 IAM 정책으로 s3:GetObject를 허용했고, 버킷 정책에는 그 역할에 대한 언급이 없다. 그런데 버킷 정책에 HTTP 요청을 거부하는 Deny 문장이 있다. HTTPS로 요청하면?",
    choices: [
      "버킷 정책이 그 역할을 허용하지 않았으니 거부된다",
      "같은 계정이라 IAM 허용만으로 통과하고, HTTPS라 Deny 조건에 걸리지 않으니 허용된다",
      "Deny 문장이 있는 버킷은 모든 요청을 거부한다",
      "다른 계정 요청처럼 양쪽 허용이 필요해 거부된다",
    ],
    answer: 1,
    explanation:
      "같은 계정 요청은 IAM 정책과 버킷 정책 중 한쪽만 허용해도 된다. Deny는 조건(aws:SecureTransport가 false)에 맞을 때만 걸리니 HTTPS 요청에는 영향이 없다. 다른 계정이라면 양쪽 허용이 필요하다.",
    anchor: "요청-하나가-허용되는-판정",
  },
  {
    id: "aws-s3-in-practice-2",
    post: "aws-s3-in-practice",
    question: "ECS 작업 역할로 만든 presigned GET URL의 만료를 24시간으로 줬는데 몇 시간 뒤 ExpiredToken 에러가 난다. 이유는?",
    choices: [
      "presigned URL은 최대 1시간까지만 된다",
      "S3가 하루에 한 번 서명 키를 바꾸기 때문이다",
      "URL이 역할의 임시 자격 증명으로 서명돼, 그 세션 토큰이 만료되면 URL도 함께 무효가 되기 때문이다",
      "CloudFront 캐시가 만료됐기 때문이다",
    ],
    answer: 2,
    explanation:
      "presigned URL은 서명한 주체의 자격 증명을 빌린다. 임시 자격 증명이 끝나면 X-Amz-Expires가 남아 있어도 쓸 수 없다. SigV4의 최대 만료는 7일이지만 그건 장기 자격 증명일 때 이야기다.",
    anchor: "브라우저가-s3에-직접-올리게-한다",
  },
  {
    id: "aws-s3-in-practice-3",
    post: "aws-s3-in-practice",
    question: "사용자가 5MB 이하 이미지만 올리게 하고 싶다. S3가 업로드 시점에 큰 파일을 거절하게 하려면?",
    choices: [
      "presigned POST 정책에 content-length-range 조건을 넣는다",
      "presigned PUT URL의 만료를 짧게 한다",
      "버킷 CORS의 MaxAgeSeconds를 줄인다",
      "퍼블릭 액세스 차단을 켠다",
    ],
    answer: 0,
    explanation:
      "presigned PUT은 업로드 크기를 서명으로 묶지 못한다. POST 정책은 크기, 키 접두사, Content-Type 조건을 서명해 S3가 조건에 맞지 않는 업로드를 거절하게 한다. 만료나 CORS는 크기와 관계없다.",
    anchor: "put-url은-크기를-막지-못한다",
  },
  {
    id: "aws-s3-in-practice-4",
    post: "aws-s3-in-practice",
    question: "브라우저에서 멀티파트 업로드를 하는데 파트 PUT은 모두 200인데 Complete 단계에서 실패한다. 가장 의심되는 설정은?",
    choices: [
      "버킷 버전 관리가 꺼져 있다",
      "버킷 CORS의 ExposeHeaders에 ETag가 없어 자바스크립트가 파트의 ETag를 읽지 못했다",
      "퍼블릭 액세스 차단이 켜져 있다",
      "CloudFront OAC가 PUT을 막았다",
    ],
    answer: 1,
    explanation:
      "Complete 요청에는 파트 번호와 각 파트의 ETag 목록이 필요하다. CORS 응답에서 ETag를 노출하지 않으면 브라우저는 그 헤더를 스크립트에 보여 주지 않아 목록을 만들 수 없다.",
    anchor: "cors는-버킷에-적는다",
  },
  {
    id: "aws-s3-in-practice-5",
    post: "aws-s3-in-practice",
    question: "CloudFront OAC용 버킷 정책에서 AWS:SourceArn 조건을 빼면 생기는 문제는?",
    choices: [
      "CloudFront가 캐시를 쓰지 못한다",
      "버킷이 퍼블릭으로 판정되어 저장이 거절된다",
      "다른 계정의 CloudFront 배포도 내 버킷을 오리진으로 읽을 수 있게 된다",
      "HTTPS 요청이 거부된다",
    ],
    answer: 2,
    explanation:
      "Principal이 cloudfront.amazonaws.com 서비스 전체라서, 조건이 없으면 어떤 배포든 내 버킷에 서명된 요청을 보낼 수 있다. 내 배포 ARN으로 조건을 좁혀야 그 배포만 읽는다.",
    anchor: "읽기는-cloudfront를-거쳐서만",
  },
  {
    id: "aws-s3-in-practice-6",
    post: "aws-s3-in-practice",
    question: "프로필 사진을 같은 키에 덮어썼는데 일부 사용자에게 옛 사진이 계속 보인다. 가장 알맞은 설명과 대응은?",
    choices: [
      "S3는 강한 일관성이지만 CloudFront와 브라우저 캐시가 옛 객체를 들고 있으니, 바뀌는 파일은 키에 버전이나 해시를 넣는다",
      "S3가 최종 일관성이라 몇 분 기다리면 된다",
      "버전 관리를 꺼야 한다",
      "멀티파트로 다시 올려야 한다",
    ],
    answer: 0,
    explanation:
      "2020년 12월부터 S3는 덮어쓴 직후의 GET에도 새 내용을 준다. 옛 내용은 앞단 캐시에서 온다. 무효화는 브라우저 캐시를 못 지우니 새 키를 쓰는 편이 확실하다.",
    anchor: "쓰자마자-읽어도-되나",
  },
  {
    id: "aws-s3-in-practice-7",
    post: "aws-s3-in-practice",
    question: "S3 업로드 이벤트로 Lambda가 썸네일을 만들어 같은 버킷의 같은 접두사에 저장한다. 무엇이 문제인가?",
    choices: [
      "썸네일이 원본보다 커진다",
      "저장이 다시 업로드 이벤트를 일으켜 끝없이 돌며 객체와 호출 요금이 폭증한다",
      "Lambda는 S3에 쓸 수 없다",
      "이벤트는 하루에 한 번만 오므로 썸네일이 늦게 생긴다",
    ],
    answer: 1,
    explanation:
      "결과물이 같은 이벤트 조건에 걸리면 고리가 생긴다. 원본과 결과물을 다른 버킷이나 겹치지 않는 접두사에 두고, 이벤트 필터에 원본 접두사만 건다.",
    anchor: "요청-요금이-터지는-경우",
  },
];
