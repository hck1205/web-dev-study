import type { QuizQuestion } from "../types";

export const NETCONF_RESTCONF_YANG: QuizQuestion[] = [
  {
    id: "netconf-restconf-yang-1",
    post: "netconf-restconf-yang",
    question: "show ip interface brief를 공백으로 잘라 파싱하던 스크립트가 꺼진 포트에서만 상태를 잘못 읽었다. 이유는?",
    choices: [
      "꺼진 포트는 출력에 나오지 않아서",
      "SSH 세션이 꺼진 포트에서 끊겨서",
      "IP 주소가 unassigned라 열 이름이 바뀌어서",
      "상태가 administratively down처럼 두 단어라 칸이 하나 밀려서",
    ],
    answer: 3,
    explanation:
      "사람이 읽는 화면에는 열 모양의 약속이 없다. 여러 단어로 된 값이 끼면 공백 분리는 칸을 밀리게 한다. 줄 끝에서부터 맞추는 정규식이나 템플릿으로 고칠 수 있지만 다음 펌웨어에서 또 깨질 수 있다.",
    anchor: "netmiko-사람-흉내를-내는-ssh",
  },
  {
    id: "netconf-restconf-yang-2",
    post: "netconf-restconf-yang",
    question: "YANG 모델에서 config false가 붙은 leaf에 설정 값을 넣어 보내면?",
    choices: [
      "상태 노드라 설정 데이터로 받을 수 없어 거절된다",
      "다음 재부팅 때 반영된다",
      "running이 아니라 candidate에만 들어간다",
      "기본값으로 바뀌어 저장된다",
    ],
    answer: 0,
    explanation:
      "config false는 장비가 알려 주는 상태라 읽기만 할 수 있다. yanglint로 검사하면 Unexpected data state node로 걸린다. 트리 출력에서는 ro로 표시된다.",
    anchor: "yang-데이터의-모양을-먼저-약속한다",
  },
  {
    id: "netconf-restconf-yang-3",
    post: "netconf-restconf-yang",
    question: "NETCONF에서 candidate에 edit-config를 여러 번 보낸 뒤 장비 동작은 언제 바뀌나?",
    choices: [
      "edit-config를 보낼 때마다 바로 바뀐다",
      "lock을 풀 때 바뀐다",
      "commit할 때 한 번에 running에 반영된다",
      "validate가 성공하면 자동으로 바뀐다",
    ],
    answer: 2,
    explanation:
      "candidate는 작업 공간이라 commit 전에는 장비 동작에 반영되지 않는다. 그래서 여러 변경이 전부 반영되거나 아무것도 반영되지 않는 트랜잭션이 된다. 실패하면 discard-changes로 버린다.",
    anchor: "netconf-트랜잭션이-있는-설정-api",
  },
  {
    id: "netconf-restconf-yang-4",
    post: "netconf-restconf-yang",
    question: "원격 장비의 관리 ACL을 바꿀 때 confirmed commit을 쓰는 이유는?",
    choices: [
      "commit 속도를 높이려고",
      "새 설정으로 접속이 끊겨도 정해진 시간 안에 확인하지 않으면 장비가 스스로 되돌리게 하려고",
      "다른 사용자의 lock을 풀려고",
      "startup 데이터스토어에도 함께 저장하려고",
    ],
    answer: 1,
    explanation:
      "확인 commit은 시간 안에 두 번째 commit이 오지 않으면 이전 설정으로 돌아간다. 관리 접속을 끊는 실수를 해도 사람이 현장에 가지 않고 복구된다.",
    anchor: "netconf-트랜잭션이-있는-설정-api",
  },
  {
    id: "netconf-restconf-yang-5",
    post: "netconf-restconf-yang",
    question: "RESTCONF로 인터페이스의 description만 바꾸려고 description만 담아 PUT을 보냈다. 무슨 일이 생길 수 있나?",
    choices: [
      "description만 바뀌고 나머지는 그대로다",
      "PUT은 RESTCONF에서 지원하지 않아 405가 난다",
      "보내지 않은 mtu나 vlan 설정이 기본값으로 돌아가거나 사라진다",
      "candidate에만 쓰이고 반영되지 않는다",
    ],
    answer: 2,
    explanation:
      "PUT은 그 자원을 보낸 내용으로 통째로 바꾸고 PATCH는 보낸 부분만 병합한다. 일부만 바꿀 때는 PATCH를 쓴다. NETCONF의 replace와 merge도 같은 관계다.",
    anchor: "restconf-같은-모델을-http로",
  },
  {
    id: "netconf-restconf-yang-6",
    post: "netconf-restconf-yang",
    question: "60초 SNMP 폴링에 보이지 않던 3초짜리 링크 끊김을 잡으려면 gNMI에서 어떤 구독이 맞나?",
    choices: [
      "STREAM 모드의 ON_CHANGE 구독",
      "ONCE 구독",
      "Get RPC를 60초마다 호출",
      "Set RPC로 상태를 기록",
    ],
    answer: 0,
    explanation:
      "ON_CHANGE는 값이 바뀔 때마다 장비가 밀어 주어 짧은 변화도 놓치지 않는다. 인터페이스 상태처럼 드물게 바뀌지만 바로 알아야 하는 값에 맞다. 주기적으로 묻는 방식은 폴링과 같은 한계가 있다.",
    anchor: "gnmi-묻지-않아도-알려-주는-텔레메트리",
  },
  {
    id: "netconf-restconf-yang-7",
    post: "netconf-restconf-yang",
    question: "NAPALM의 commit_config가 모든 벤더에서 같은 안전성을 주지 않는 이유는?",
    choices: [
      "NAPALM은 설정 변경을 지원하지 않아서",
      "함수 이름은 같아도 후보 설정이 없는 장비에서는 드라이버가 파일 교체 등으로 흉내 내기 때문에",
      "commit_config는 NETCONF가 있어야만 동작해서",
      "getter 결과 모양이 벤더마다 달라서",
    ],
    answer: 1,
    explanation:
      "NAPALM은 같은 함수 뒤에 벤더별 드라이버가 있다. 장비가 후보 설정을 지원하면 그대로 쓰고, 아니면 흉내 내므로 원자성과 롤백 보장이 다를 수 있다. getter 결과 모양은 오히려 NAPALM이 맞춰 준다.",
    anchor: "napalm-벤더-차이를-감추는-한-겹",
  },
];
