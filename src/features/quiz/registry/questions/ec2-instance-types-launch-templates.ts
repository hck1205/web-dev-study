import type { QuizQuestion } from "../types";

export const EC2_INSTANCE_TYPES_LAUNCH_TEMPLATES: QuizQuestion[] = [
  {
    id: "ec2-instance-types-launch-templates-1",
    post: "ec2-instance-types-launch-templates",
    question: "인스턴스 이름 c7gd.2xlarge에서 'g'와 'd'가 뜻하는 것은?",
    choices: [
      "g는 Graviton(ARM) 프로세서, d는 로컬 인스턴스 스토어(NVMe SSD)가 딸려 온다는 뜻",
      "g는 GPU 전용, d는 디스크 없는 디스크리스 부팅이라는 뜻",
      "g는 세대 번호, d는 기본(default) 크기라는 뜻",
      "g는 글로벌 리전, d는 전용(dedicated) 호스트라는 뜻",
    ],
    answer: 0,
    explanation:
      "이름은 패밀리(c=컴퓨트)+세대(7)+프로세서·부가속성+크기 순이다. g는 AWS Graviton(ARM) CPU, d는 로컬 인스턴스 스토어가 딸려 온다는 뜻이다. x86 의존성이 없으면 Graviton이 같은 성능에 더 싸다.",
    anchor: "인스턴스-이름에-성격이-적혀-있다",
  },
  {
    id: "ec2-instance-types-launch-templates-2",
    post: "ec2-instance-types-launch-templates",
    question: "t3.micro(시간당 12 크레딧, vCPU 2개)의 vCPU당 기준선 성능은 몇 %인가?",
    choices: [
      "10% (12 ÷ (2 × 60))",
      "50% (12 ÷ 24)",
      "100% (언제나 전력)",
      "20% (12 ÷ 60)",
    ],
    answer: 0,
    explanation:
      "1 크레딧은 vCPU 하나를 1분간 100% 쓰는 양이므로, vCPU당 기준선(%) = 시간당 크레딧 ÷ (vCPU 수 × 60)이다. 12 ÷ 120 = 0.1, 즉 10%다. 기준선보다 많이 쓰면 쌓인 크레딧을 꺼내 쓰고, 떨어지면 표준 모드에서 기준선으로 묶인다.",
    anchor: "버스트-크레딧이-쌓이고-떨어지는-셈",
  },
  {
    id: "ec2-instance-types-launch-templates-3",
    post: "ec2-instance-types-launch-templates",
    question: "T 계열 인스턴스가 오후 내내 바빠 CPU가 100%에 붙어 있다가 느려졌다. 가장 정확한 설명은?",
    choices: [
      "버스트 크레딧이 소진되어 표준 모드에서 기준선 성능으로 묶였다",
      "메모리가 부족해 스왑이 발생했다",
      "EBS 볼륨의 IOPS 한도에 걸렸다",
      "탄력적 IP 요금이 미납되어 대역폭이 제한됐다",
    ],
    answer: 0,
    explanation:
      "꾸준히 바쁜 워크로드가 버스트 크레딧을 다 쓰면 표준 모드에서는 기준선(예: 2 vCPU × 10% = 20% 상당)으로 묶인다. CloudWatch의 CPUCreditBalance가 반복해서 0에 닿으면 이 신호다. 고정 성능 계열로 옮기거나 짧게만 튀면 unlimited 모드로 넘긴다.",
    anchor: "버스트-크레딧이-쌓이고-떨어지는-셈",
  },
  {
    id: "ec2-instance-types-launch-templates-4",
    post: "ec2-instance-types-launch-templates",
    question: "user data 스크립트를 넣어 인스턴스를 띄웠다. 이 스크립트를 재부팅·재시작 때도 다시 돌리지 않는 기본 동작의 이유는?",
    choices: [
      "cloud-init이 인스턴스마다 실행 기록을 남기고, 인스턴스 ID가 그대로면 이미 실행했다고 판단해 건너뛰기 때문",
      "user data는 메모리에만 저장되어 재부팅 시 지워지기 때문",
      "AMI를 다시 굽지 않으면 user data가 무효가 되기 때문",
      "systemd가 두 번째 부팅부터 user data 유닛을 비활성화하기 때문",
    ],
    answer: 0,
    explanation:
      "user data는 기본적으로 첫 부팅에만 한 번 돈다. cloud-init이 /var/lib/cloud/instances/에 실행 기록을 남기고 같은 인스턴스 ID면 건너뛴다. 매 부팅 돌리려면 cloud_final_modules에 always를 주거나 scripts-per-boot를 쓰지만, 보통은 짧고 멱등하게 두고 무거운 설정은 AMI나 구성 관리로 옮긴다.",
    anchor: "user-data는-첫-부팅에-한-번만-돈다",
  },
  {
    id: "ec2-instance-types-launch-templates-5",
    post: "ec2-instance-types-launch-templates",
    question: "오토스케일링 그룹이 시작 템플릿의 $Default를 가리키게 운영하는 까닭은?",
    choices: [
      "새 버전을 만들어 검증한 뒤 기본 버전을 올리는 식으로 롤아웃을 통제할 수 있어서",
      "$Default가 $Latest보다 부팅 속도가 빨라서",
      "$Default만 user data를 담을 수 있어서",
      "$Latest는 버전을 하나만 저장할 수 있어서",
    ],
    answer: 0,
    explanation:
      "시작 템플릿은 불변 버전을 쌓는다. $Latest를 가리키면 새 버전을 만드는 즉시 적용되지만, $Default를 가리키면 검증 전까지 기본을 바꾸지 않아 롤아웃을 통제할 수 있다. 새 버전을 만들어 확인한 뒤 modify-launch-template으로 기본 버전을 올린다.",
    anchor: "시작-템플릿은-띄우는-방법을-버전으로-고정한다",
  },
  {
    id: "ec2-instance-types-launch-templates-6",
    post: "ec2-instance-types-launch-templates",
    question: "인스턴스 스토어에 데이터를 두면 안 되는 이유로 맞는 것은?",
    choices: [
      "중지(stop)·종료·하드웨어 교체 시 사라진다. 재부팅으로는 유지되지만 영속 데이터에는 부적합하다",
      "읽기 전용이라 애초에 쓸 수 없다",
      "EBS보다 느려서 캐시로도 쓸 수 없다",
      "네트워크로 붙어 있어 지연이 크다",
    ],
    answer: 0,
    explanation:
      "인스턴스 스토어는 호스트에 물리적으로 붙은 로컬 디스크라 빠르지만 임시다. 중지·종료·하드웨어 교체 시 사라지고 다른 인스턴스에 재부착할 수도 없다(단순 재부팅으로는 유지). 영속 데이터는 EBS에, 캐시·임시 데이터만 인스턴스 스토어에 둔다.",
    anchor: "디스크는-수명이-다르다-ebs와-인스턴스-스토어",
  },
  {
    id: "ec2-instance-types-launch-templates-7",
    post: "ec2-instance-types-launch-templates",
    question: "2024년 2월 이후 AWS의 공인 IPv4 주소 요금 정책으로 맞는 것은?",
    choices: [
      "인스턴스에 붙어 쓰이는 공인 IPv4까지 포함해 모든 공인 IPv4 주소에 시간당 요금이 붙는다",
      "탄력적 IP를 할당만 하고 안 쓸 때만 요금이 붙고, 붙어 있으면 공짜다",
      "모든 공인 IPv4가 완전히 무료가 됐다",
      "IPv6 주소에만 요금이 붙고 IPv4는 무료다",
    ],
    answer: 0,
    explanation:
      "예전에는 미사용 탄력적 IP만 유료였지만, 2024년 2월부터는 쓰고 있든 아니든 모든 공인 IPv4 주소에 시간당 요금(us-east-1 기준 약 $0.005/시간)이 붙는다. 자동 할당 공인 IPv4도 포함이다. IPv6에는 이 요금이 없어, 직접 노출이 필요 없는 인스턴스는 사설 서브넷에 두는 구성이 유리하다.",
    anchor: "탄력적-ip와-공인-ipv4-요금",
  },
];
