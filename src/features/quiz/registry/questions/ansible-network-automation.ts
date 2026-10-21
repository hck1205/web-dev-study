import type { QuizQuestion } from "../types";

export const ANSIBLE_NETWORK_AUTOMATION: QuizQuestion[] = [
  {
    id: "ansible-network-automation-1",
    post: "ansible-network-automation",
    question:
      "매일 도는 방화벽 플레이북의 PLAY RECAP에 늘 changed=1이 찍힌다. 가장 먼저 의심할 것은?",
    choices: [
      "인벤토리에 호스트가 너무 많다",
      "command나 shell로 상태를 확인하지 않고 명령을 실행하는 작업이 있다",
      "forks 값이 기본값 5다",
      "group_vars와 host_vars에 같은 변수가 있다",
    ],
    answer: 1,
    explanation:
      "전용 모듈은 현재 상태를 읽고 다를 때만 바꾸므로 두 번째 실행부터 changed=0이 된다. command로 iptables -A를 실행하면 매번 changed가 뜨고 같은 규칙이 쌓인다. changed_when이나 creates, 사전 확인 작업을 붙이거나 모듈로 바꾼다.",
    anchor: "두-번째-실행은-아무것도-바꾸지-않아야-한다",
  },
  {
    id: "ansible-network-automation-2",
    post: "ansible-network-automation",
    question: "--check --diff가 깨끗했는데 실제 실행에서 nftables 리로드가 실패했다. 왜 check에서 못 잡았나?",
    choices: [
      "check 모드는 template 모듈을 건너뛰기 때문이다",
      "diff는 원격 파일을 읽지 못하기 때문이다",
      "check 모드는 결과를 미리 알 수 없는 command 작업과 핸들러를 실행하지 않기 때문이다",
      "check 모드는 첫 번째 호스트에서만 돌기 때문이다",
    ],
    answer: 2,
    explanation:
      "실습의 check 출력에서도 핸들러는 skipping이었다. 파일 내용의 차이는 보이지만 리로드 명령 자체가 맞는지는 실행해 봐야 안다. 그래서 template의 validate나 nft -c, nginx -t 같은 검사를 따로 둔다.",
    anchor: "바꾸기-전에---check---diff",
  },
  {
    id: "ansible-network-automation-3",
    post: "ansible-network-automation",
    question:
      "nftables 설정 템플릿 작업에 validate: nft -c -f %s와 notify를 걸었다. 템플릿 결과가 지금 파일과 같으면 어떻게 되나?",
    choices: [
      "파일을 다시 쓰고 핸들러가 돈다",
      "ok로 끝나고 핸들러는 돌지 않는다",
      "validate만 다시 돌고 changed가 된다",
      "핸들러가 플레이 시작 시점에 한 번 돈다",
    ],
    answer: 1,
    explanation:
      "template은 내용이 같으면 파일을 바꾸지 않고 ok를 보고한다. 핸들러는 알림을 받은 경우에만, 그것도 플레이 끝에 한 번 돈다. 그래서 설정이 바뀌지 않았는데 서비스가 매번 다시 읽히는 일이 없다.",
    anchor: "설정-파일은-템플릿으로-다시-읽기는-핸들러로",
  },
  {
    id: "ansible-network-automation-4",
    post: "ansible-network-automation",
    question:
      "iptables 모듈로 관리하던 서버를 iptables-restore로 파일 전체를 갈아 끼우는 방식으로 바꿨다. 조심할 점은?",
    choices: [
      "Docker나 kube-proxy처럼 다른 도구가 넣은 규칙까지 지워질 수 있다",
      "코드에서 지운 규칙이 서버에 계속 남는다",
      "재부팅하면 규칙이 두 배로 늘어난다",
      "iptables-restore는 문법 검사를 할 수 없다",
    ],
    answer: 0,
    explanation:
      "파일 방식은 코드에 없는 규칙을 모두 지워 코드와 서버를 정확히 맞춘다. 다른 도구가 만든 체인까지 사라지므로 자기 체인만 관리하거나 그 서비스를 핸들러로 재시작한다. 코드에서 지운 규칙이 남는 것은 오히려 모듈 방식의 약점이다.",
    anchor: "규칙을-한-줄씩-맞출까-파일-전체를-맞출까",
  },
  {
    id: "ansible-network-automation-5",
    post: "ansible-network-automation",
    question:
      "serial: 1, max_fail_percentage: 0인 플레이에서 첫 호스트 web1의 확인 작업이 실패했다. web2와 web3는 어떻게 되나?",
    choices: [
      "web2, web3에도 같은 변경이 적용된 뒤 플레이가 끝난다",
      "web1만 다시 시도하고 계속 진행한다",
      "다음 배치를 시작하지 않아 web2, web3는 손대지 않는다",
      "모든 호스트의 변경이 자동으로 되돌려진다",
    ],
    answer: 2,
    explanation:
      "실패한 배치 뒤에서 멈추므로 실습 RECAP에는 web1만 나오고 NO MORE HOSTS LEFT가 찍혔다. 되돌리기는 자동이 아니라 block/rescue에 적어 둔 작업이 web1에서만 했다. 기본값이었다면 실패한 호스트만 빠지고 나머지는 계속 갔을 것이다.",
    anchor: "한-대씩-바꾸고-틀리면-멈춘다",
  },
  {
    id: "ansible-network-automation-6",
    post: "ansible-network-automation",
    question: "방화벽을 바꾼 뒤 그 서버 안에서 curl localhost:8080으로 확인하면 왜 위험한가?",
    choices: [
      "localhost는 DNS를 거쳐 느리기 때문이다",
      "lo로 들어오는 패킷은 열어 둔 규칙을 타서 바깥에서 막혀도 통과하기 때문이다",
      "curl은 Ansible 모듈이 아니라서 결과를 읽지 못하기 때문이다",
      "8080은 루트 권한이 필요한 포트이기 때문이다",
    ],
    answer: 1,
    explanation:
      "규칙 세트는 lo를 따로 허용하므로 서버 안에서의 요청은 포트 오타가 있어도 성공한다. 확인은 트래픽이 실제로 오는 LB 같은 바깥 위치에서 delegate_to로 한다. 실습에서도 확인이 web1 안에서 돌자 8008 오타가 그대로 통과했다.",
    anchor: "한-대씩-바꾸고-틀리면-멈춘다",
  },
  {
    id: "ansible-network-automation-7",
    post: "ansible-network-automation",
    question:
      "cisco.ios.ios_acls를 state: overridden으로 처음 도입하기 전에 해야 할 일은?",
    choices: [
      "gathered로 장비의 현재 ACL을 데이터로 떠서 코드에 옮긴다",
      "장비에 파이썬을 설치한다",
      "ansible_connection을 local로 바꾼다",
      "merged로 한 번 돌려 장비 설정을 비운다",
    ],
    answer: 0,
    explanation:
      "overridden은 그 자원 전체를 코드와 똑같이 만들어 코드에 없는 ACL을 지운다. 현재 설정을 먼저 코드로 옮기지 않으면 운영 중인 ACL이 사라진다. 장비 모듈은 제어 노드에서 돌고 network_cli로 접속하므로 장비에 파이썬이 필요 없다.",
    anchor: "네트워크-장비도-같은-방식으로",
  },
];
