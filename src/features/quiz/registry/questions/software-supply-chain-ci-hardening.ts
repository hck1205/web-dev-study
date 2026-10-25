import type { QuizQuestion } from "../types";

export const SOFTWARE_SUPPLY_CHAIN_CI_HARDENING: QuizQuestion[] = [
  {
    id: "software-supply-chain-ci-hardening-1",
    post: "software-supply-chain-ci-hardening",
    question: "코드를 한 줄도 import하지 않았는데 npm install만으로 토큰이 샐 수 있는 이유는?",
    choices: [
      "import는 보안 검사를 하지만 install은 안 해서",
      "npm이 모든 환경 변수를 로그에 남겨서",
      "패키지의 postinstall 스크립트가 설치 직후 자동으로 실행되어, 그 안에서 환경 변수를 긁을 수 있기 때문",
      "lockfile이 토큰을 저장하기 때문"
    ],
    answer: 2,
    explanation:
      "npm은 설치 직후 postinstall 스크립트를 자동 실행한다. 설치가 곧 실행이라, import 없이도 그 환경의 TOKEN·SECRET·KEY를 긁어 밖으로 보낼 수 있다. 실험에서 설치만으로 환경 변수가 파일에 긁혀 나왔다.",
    anchor: "코드를-안-불러도-설치만으로-당한다",
  },
  {
    id: "software-supply-chain-ci-hardening-2",
    post: "software-supply-chain-ci-hardening",
    question: "의존성 혼동(dependency confusion) 공격의 작동 방식은?",
    choices: [
      "유지보수자 계정을 탈취한다",
      "lockfile을 조작한다",
      "유명 패키지와 이름이 한 글자 다른 가짜를 올린다",
      "사내 전용 패키지와 같은 이름을 공개 레지스트리에 더 높은 버전으로 올려, 설치 도구가 공개 쪽을 가져오게 한다"
    ],
    answer: 3,
    explanation:
      "사내 이름을 공개 레지스트리에 더 높은 버전으로 선점하면 설치 도구가 공개 쪽을 당긴다. 막으려면 사내 패키지에 스코프를 주고 그 스코프는 사내 레지스트리에서만 받게 .npmrc에 박는다.",
    anchor: "가짜를-심는-네-가지-길",
  },
  {
    id: "software-supply-chain-ci-hardening-3",
    post: "software-supply-chain-ci-hardening",
    question: "lockfile의 integrity 해시가 막는 공격과, CI에서 npm ci를 쓰는 이유는?",
    choices: [
      "버전 번호는 같지만 내용만 바꾼 바꿔치기 / ci가 lockfile을 정확히 따르고 해시를 강제하기 때문",
      "계정 탈취 / ci가 캐시를 지워서",
      "DoS / ci가 병렬이라서",
      "타이포스쿼팅 / ci가 더 빨라서"
    ],
    answer: 0,
    explanation:
      "integrity는 tarball의 해시라, 버전이 같아도 내용이 바뀌면 EINTEGRITY로 설치가 멈춘다. npm ci는 lockfile을 정확히 따르고 해시를 강제하므로 CI에 맞다. npm install은 lockfile을 갱신해 보호가 약해진다.",
    anchor: "잠그고-확인하고-범위를-정한다",
  },
  {
    id: "software-supply-chain-ci-hardening-4",
    post: "software-supply-chain-ci-hardening",
    question: "GitHub Actions를 actions/checkout@v4 대신 40자리 커밋 SHA로 고정하는 이유는?",
    choices: [
      "버전 번호를 숨기려고",
      "SHA가 더 짧아서",
      "태그는 움직일 수 있어, 액션이 침해되면 공격자가 태그를 악성 커밋으로 옮겨 우리 CI가 그걸 실행하기 때문",
      "SHA가 캐시되어서"
    ],
    answer: 2,
    explanation:
      "태그(v4)는 가변 포인터다. 침해 시 공격자가 태그를 악성 커밋으로 옮기면 우리 CI가 실행한다. 커밋 SHA로 고정하면 태그가 어디로 움직여도 그 커밋만 쓴다.",
    anchor: "빌드-파이프라인을-잠근다",
  },
  {
    id: "software-supply-chain-ci-hardening-5",
    post: "software-supply-chain-ci-hardening",
    question: "pull_request_target 트리거가 특히 위험한 이유는?",
    choices: [
      "너무 느려서",
      "lockfile을 무시해서",
      "포크 PR을 권한 없는 토큰으로 돌려서",
      "포크 PR인데도 대상 저장소의 시크릿과 쓰기 토큰을 쥐고 돌아, 거기서 PR 코드를 실행하면 공격자 코드가 시크릿을 들고 돌기 때문"
    ],
    answer: 3,
    explanation:
      "일반 pull_request는 포크 코드를 권한 없는 토큰으로 돌려 안전하지만, pull_request_target은 시크릿과 쓰기 권한을 가진 채 돈다. 여기서 신뢰할 수 없는 코드를 실행하면 안 되고, 라벨 같은 안전한 작업에만 쓴다.",
    anchor: "빌드-파이프라인을-잠근다",
  },
  {
    id: "software-supply-chain-ci-hardening-6",
    post: "software-supply-chain-ci-hardening",
    question: "의존성 자동 업데이트(Dependabot 등)를 안전하게 쓰는 현실적인 방식은?",
    choices: [
      "자동으로 PR은 올리되 병합은 CI 검사와 사람 승인을 거치고, 숙성 기간으로 방금 나온 버전은 자동으로 안 당긴다",
      "자동 업데이트를 완전히 끈다",
      "메이저 업그레이드만 자동 병합한다",
      "자동 병합까지 모두 켜 둔다"
    ],
    answer: 0,
    explanation:
      "자동 업데이트는 낡은 의존성 침해를 줄이지만, 검토 없는 자동 병합은 방금 나온 악성 버전을 운영까지 밀 수 있다. PR까지만 자동으로, 병합은 검사를 거치고 숙성 기간을 두는 것이 균형점이다.",
    anchor: "자동-업데이트는-더-위험할까",
  },
  {
    id: "software-supply-chain-ci-hardening-7",
    post: "software-supply-chain-ci-hardening",
    question: "SBOM이 막는 것과 못 막는 것을 바르게 짝지은 것은?",
    choices: [
      "DoS를 막는다 / 성능은 못 본다",
      "악성 코드 실행을 막는다 / 버전 조회는 못 한다",
      "새 취약점의 영향 범위를 즉시 답한다 / 목록일 뿐이라 정상으로 적힌 악성 코드는 못 막고 차단도 안 한다",
      "바꿔치기를 막는다 / 서명을 못 한다"
    ],
    answer: 2,
    explanation:
      "SBOM은 성분표라 가시성(영향 범위 조회·규제 제출)을 준다. 하지만 목록일 뿐 차단하지 않고, 악성 코드가 정상 패키지로 적혀 있으면 모른다. 차단은 lockfile·스크립트 차단·서명이 맡는다.",
    anchor: "sbom이-막는-것과-못-막는-것",
  },
];
