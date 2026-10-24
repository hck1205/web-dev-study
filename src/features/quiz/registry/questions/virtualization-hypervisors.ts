import type { QuizQuestion } from "../types";

export const VIRTUALIZATION_HYPERVISORS: QuizQuestion[] = [
  {
    id: "virtualization-hypervisors-1",
    post: "virtualization-hypervisors",
    question: "VT-x 위의 게스트에서 덧셈 반복은 거의 원래 속도로 도는데 cpuid 반복은 수천 배 느렸다. 가장 알맞은 설명은?",
    choices: [
      "하이퍼바이저가 게스트의 모든 명령을 하나씩 해석해서 실행하기 때문이다",
      "cpuid는 VM exit를 일으켜 하이퍼바이저까지 갔다 돌아오고, 덧셈은 진짜 CPU에서 바로 실행되기 때문이다",
      "cpuid는 디스크를 읽어 CPU 정보를 가져오기 때문이다",
      "게스트 커널의 스케줄러가 cpuid를 실행하는 스레드를 낮은 우선순위로 두기 때문이다",
    ],
    answer: 1,
    explanation:
      "하드웨어 가상화에서는 평범한 명령은 그대로 실행되고, 미리 정한 명령과 사건만 VM exit로 하이퍼바이저에 넘어간다. 모든 명령을 해석한다면 덧셈도 느렸을 것이다.",
    anchor: "게스트가-특권-명령을-쓰면-cpu가-멈춰-세운다",
  },
  {
    id: "virtualization-hypervisors-2",
    post: "virtualization-hypervisors",
    question: "옛 네트워크 카드를 흉내 내는 대신 virtio-net을 쓰면 패킷이 많은 서버에서 빨라지는 이유는?",
    choices: [
      "패킷을 압축해서 보내기 때문이다",
      "게스트 커널을 거치지 않고 앱이 직접 NIC에 쓰기 때문이다",
      "공유 메모리 링에 요청을 모아 두고 알림 한 번으로 넘겨서, 레지스터 접근마다 나던 VM exit가 줄기 때문이다",
      "TCP 대신 UDP로 바꿔 보내기 때문이다",
    ],
    answer: 2,
    explanation:
      "에뮬레이션 장치는 드라이버가 레지스터를 건드릴 때마다 exit가 난다. virtio는 게스트와 하이퍼바이저가 링 버퍼를 함께 쓰며 여러 요청을 한 번의 알림으로 처리한다.",
    anchor: "디스크와-네트워크는-흉내-내지-않고-약속한다",
  },
  {
    id: "virtualization-hypervisors-3",
    post: "virtualization-hypervisors",
    question: "오래된 Xen 시절 AMI를 새 세대 Nitro 인스턴스 타입으로 바꿨더니 부팅 후 데이터 디스크 마운트가 실패했다. 먼저 의심할 것은?",
    choices: [
      "보안 그룹이 EBS 포트를 막았다",
      "Nitro에서는 EBS가 NVMe 장치(nvme1n1 등)로 보이는데 fstab이 /dev/xvdf 같은 옛 이름을 쓰거나 NVMe 드라이버가 없다",
      "Nitro 인스턴스는 EBS를 지원하지 않는다",
      "인스턴스 스토어가 EBS를 덮어썼다",
    ],
    answer: 1,
    explanation:
      "Nitro는 EBS를 NVMe 컨트롤러로, 네트워크를 ENA로 게스트에 보여 준다. AMI에 드라이버가 있어야 하고, 장치 이름이 바뀌므로 fstab은 UUID나 라벨로 적는다.",
    anchor: "nitro가-하이퍼바이저를-카드로-뺀-이유",
  },
  {
    id: "virtualization-hypervisors-4",
    post: "virtualization-hypervisors",
    question: "t3 인스턴스에서 오후마다 지연이 늘고 top의 st가 높게 나온다. 가장 먼저 볼 것은?",
    choices: [
      "CloudWatch의 CPUCreditBalance가 0에 붙어 있는지",
      "EBS 볼륨의 스냅샷 개수",
      "보안 그룹의 인바운드 규칙 수",
      "게스트의 swappiness 값",
    ],
    answer: 0,
    explanation:
      "버스트형 인스턴스는 크레딧이 떨어지면 기준 성능으로 묶이고, 그 시간이 steal로 보인다. 이웃 탓이 아니라 내 크레딧 문제일 수 있으니 크레딧 잔량부터 확인한다.",
    anchor: "옆방이-시끄러울-때-steal-time",
  },
  {
    id: "virtualization-hypervisors-5",
    post: "virtualization-hypervisors",
    question: "pre-copy 라이브 마이그레이션이 끝나지 않고 회차가 계속 늘어나는 상황은?",
    choices: [
      "VM의 디스크가 네트워크 스토리지에 있을 때",
      "게스트가 메모리를 더럽히는 속도가 마이그레이션 링크 속도보다 빠를 때",
      "VM의 vCPU 수가 짝수일 때",
      "게스트가 유휴 상태여서 dirty 페이지가 거의 없을 때",
    ],
    answer: 1,
    explanation:
      "pre-copy는 회차마다 그동안 바뀐 페이지를 다시 보낸다. dirty 속도가 전송 속도보다 빠르면 보낼 양이 줄지 않아, vCPU를 느리게 하거나 post-copy로 바꿔야 한다.",
    anchor: "살아-있는-vm을-옮기는-법",
  },
  {
    id: "virtualization-hypervisors-6",
    post: "virtualization-hypervisors",
    question: "여러 고객의 코드를 한 호스트에서 돌리는 서비스가 일반 컨테이너 대신 Firecracker microVM을 쓰는 가장 큰 이유는?",
    choices: [
      "컨테이너는 네트워크를 쓸 수 없어서",
      "microVM이 컨테이너보다 메모리를 적게 써서",
      "컨테이너는 호스트 커널을 함께 써서 커널 버그 하나가 모든 테넌트로 번지지만, VM은 좁은 하이퍼바이저 인터페이스만 노출해서",
      "컨테이너는 cgroup으로 CPU를 제한할 수 없어서",
    ],
    answer: 2,
    explanation:
      "컨테이너의 공격 표면은 호스트 커널의 시스템 콜 전체다. microVM은 테넌트마다 커널을 따로 두고 몇 가지 가상 장치만 열어 두므로 탈출이 훨씬 어렵다.",
    anchor: "vm과-컨테이너-격리의-두께가-다르다",
  },
  {
    id: "virtualization-hypervisors-7",
    post: "virtualization-hypervisors",
    question: "같은 노드의 이웃 VM만 없애고 싶다. 하이퍼바이저는 있어도 상관없다면 가장 알맞은 선택은?",
    choices: [
      "베어메탈(.metal) 인스턴스",
      "T 계열 무제한 모드",
      "스팟 인스턴스",
      "전용 호스트(Dedicated Host)",
    ],
    answer: 3,
    explanation:
      "전용 호스트와 전용 인스턴스는 물리 서버를 내 계정만 쓰게 해서 이웃을 없애지만 하이퍼바이저는 남아 있다. 베어메탈은 하이퍼바이저를 직접 돌리거나 하드웨어 기능이 필요할 때 고른다.",
    anchor: "베어메탈-인스턴스가-필요한-경우",
  },
];
