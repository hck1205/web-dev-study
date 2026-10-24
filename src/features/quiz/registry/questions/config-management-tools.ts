import type { QuizQuestion } from "../types";

export const CONFIG_MANAGEMENT_TOOLS: QuizQuestion[] = [
  {
    id: "config-management-tools-1",
    post: "config-management-tools",
    question:
      "웹 서버들이 사내망 밖에서 들어오는 연결을 전혀 받지 않도록 막혀 있고, 서버에서 중앙으로 나가는 HTTPS만 허용된다. 이 조건에 가장 자연스럽게 맞는 구성 방식은?",
    choices: [
      "제어 노드에서 SSH로 접속하는 Ansible push",
      "서버마다 sshd 포트를 바꿔 여는 방식",
      "서버의 에이전트가 중앙으로 연결해 받아 가는 Puppet 같은 pull 방식",
      "각 서버에 직접 로그인해 수정",
    ],
    answer: 2,
    explanation:
      "Puppet·Chef·Salt는 서버의 에이전트가 먼저 중앙으로 연결하므로 서버에 들어오는 포트를 열 필요가 없다. Ansible은 제어 노드가 서버로 SSH 접속해야 하니 들어오는 연결이 막혀 있으면 쓸 수 없다.",
    anchor: "넷을-가르는-질문-넷",
  },
  {
    id: "config-management-tools-2",
    post: "config-management-tools",
    question:
      "ansible-playbook이 50대 중 37번째에서 SSH 시간 초과로 멈췄다. lineinfile로 짠 플레이북이라면 어떻게 이어 가는 것이 맞나?",
    choices: [
      "같은 플레이북을 그대로 다시 돌린다. 이미 맞는 서버는 changed=0으로 지나간다",
      "37번째부터의 호스트 목록을 따로 만들어 돌린다",
      "이미 바뀐 서버를 먼저 원래대로 되돌린 뒤 다시 돌린다",
      "forks를 1로 바꿔 순서대로 다시 돌린다",
    ],
    answer: 0,
    explanation:
      "lineinfile은 지금 모습을 확인하고 다를 때만 쓰는 멱등한 모듈이라 다시 돌리면 된 서버는 ok로 지나가고 남은 서버만 바뀐다. 목록을 손으로 자르는 일은 셸 반복문의 문제를 그대로 되풀이한다.",
    anchor: "ansible-ssh로-들어가-맞추고-떠난다",
  },
  {
    id: "config-management-tools-3",
    post: "config-management-tools",
    question:
      "Puppet을 쓰는 팀에서 누군가 매니페스트에 잘못된 nginx 설정을 머지했다. push 방식과 비교해 이 사고가 더 빨리 넓게 퍼지는 이유는?",
    choices: [
      "Puppet은 머지하자마자 모든 서버에 SSH로 밀어 넣어서",
      "에이전트가 정해진 주기(기본 30분)마다 받아 가므로 아무도 실행하지 않아도 주기 안에 전 서버가 새 값을 적용해서",
      "Puppet은 미리 보기 모드가 없어서",
      "카탈로그를 서버마다 다시 컴파일하지 않아서",
    ],
    answer: 1,
    explanation:
      "pull 방식은 계속 수렴시키는 장점이 있지만, 잘못된 코드도 runinterval(기본 1800초) 안에 모든 에이전트가 받아 간다. 그래서 environment로 일부 서버만 먼저 받게 하는 카나리를 둔다. Puppet에도 --noop 미리 보기가 있다.",
    anchor: "puppet-에이전트가-30분마다-카탈로그를-받아-간다",
  },
  {
    id: "config-management-tools-4",
    post: "config-management-tools",
    question:
      "Chef 레시피 중간에 `if File.exist?('/etc/app/ready')` 같은 Ruby 조건을 썼는데, 그 파일을 앞에서 만드는 리소스가 있어도 첫 실행에서만 조건이 거짓으로 처리된다. 왜 그런가?",
    choices: [
      "Chef는 리소스를 무작위 순서로 실행해서",
      "Ruby 조건은 캐시되어서",
      "파일 권한이 없어서",
      "레시피의 Ruby 코드는 컴파일 단계에서 먼저 실행되고, 리소스 적용(수렴)은 그 뒤에 일어나서",
    ],
    answer: 3,
    explanation:
      "chef-client는 Ruby 코드를 먼저 전부 실행해 리소스 목록을 만들고, 그다음에 리소스를 적용한다. 그래서 평범한 Ruby 조건은 앞 리소스가 파일을 만들기 전에 평가된다. 리소스의 not_if·only_if 가드는 적용 시점에 평가되니 이런 조건은 가드로 옮긴다.",
    anchor: "chef-레시피는-ruby-코드다",
  },
  {
    id: "config-management-tools-5",
    post: "config-management-tools",
    question:
      "Salt에서 `salt-call state.apply nginx test=True`의 결과에 `Result: None`이 나왔다. 무슨 뜻인가?",
    choices: [
      "상태 파일을 찾지 못했다",
      "적용하면 바뀔 것이 있다는 뜻이다",
      "이미 맞는 상태라 바꿀 것이 없다",
      "minion이 master에 연결하지 못했다",
    ],
    answer: 1,
    explanation:
      "test=True 미리 보기에서 None은 '바뀔 변경이 있다'를 뜻하고 Comment에 Changes would have been made가 붙는다. 이미 맞으면 True와 No changes needed to be made가 나온다.",
    anchor: "salt-이벤트-버스-위에-명령과-상태를-함께-얹는다",
  },
  {
    id: "config-management-tools-6",
    post: "config-management-tools",
    question:
      "같은 Ansible 플레이북인데 한 작업만 실행할 때마다 changed=1이 뜨고 설정 파일 끝에 같은 줄이 쌓인다. 가장 그럴듯한 원인은?",
    choices: [
      "forks가 너무 커서",
      "check 모드를 켜지 않아서",
      "그 작업이 shell 모듈로 echo >> 를 실행해 지금 모습을 확인하지 않아서",
      "gather_facts를 꺼서",
    ],
    answer: 2,
    explanation:
      "멱등성은 도구가 아니라 모듈이 지킨다. shell·exec·cmd.run은 확인 없이 명령을 실행하므로 매번 바뀌고 줄이 쌓인다. lineinfile이나 template 같은 모듈로 바꾸거나 creates·unless 같은 가드를 붙인다.",
    anchor: "멱등성은-도구가-아니라-모듈이-지킨다",
  },
  {
    id: "config-management-tools-7",
    post: "config-management-tools",
    question:
      "서버를 고쳐 쓰지 않고 새 이미지로 갈아 끼우는 불변 인프라 환경에서 구성 관리 도구가 여전히 쓰이는 대표적인 자리는?",
    choices: [
      "운영 중인 컨테이너 안의 파일을 30분마다 고치는 일",
      "Packer로 골든 이미지를 구울 때 임시 VM 안의 OS 설정을 맞추는 일",
      "Terraform state를 대신 저장하는 일",
      "쿠버네티스 Deployment를 롤아웃하는 일",
    ],
    answer: 1,
    explanation:
      "불변 인프라에서는 돌고 있는 서버를 계속 맞추는 일은 줄었지만, 그 이미지를 만드는 레시피로 Ansible 같은 도구가 쓰인다. 베어메탈이나 쿠버네티스 노드처럼 갈아 끼우기 어려운 곳도 남은 자리다.",
    anchor: "컨테이너와-불변-인프라-이후에-남은-자리",
  },
];
