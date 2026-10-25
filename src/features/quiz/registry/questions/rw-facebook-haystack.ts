import type { QuizQuestion } from "../types";

export const RW_FACEBOOK_HAYSTACK: QuizQuestion[] = [
  {
    id: "rw-facebook-haystack-1",
    post: "rw-facebook-haystack",
    question: "2010년 Haystack 논문이 NFS 기반 사진 저장소의 처리량 병목으로 지목한 것은?",
    choices: [
      "NAS 장비의 네트워크 대역폭",
      "사진을 읽기 전에 디렉터리와 inode 같은 파일 시스템 메타데이터를 디스크에서 읽어야 하는 것",
      "JPEG 디코딩에 드는 CPU",
      "CDN과 저장소 사이의 TLS 핸드셰이크",
    ],
    answer: 1,
    explanation:
      "사진 하나가 파일 하나라 디렉터리 메타데이터, inode, 파일 내용을 차례로 읽느라 보통 세 번, 많게는 열 번 넘게 디스크를 읽었다. 수천억 장의 inode를 메모리에 담을 수 없어서 메타데이터 읽기가 처리량을 막았다. Haystack Store는 CPU 유휴가 92~96%일 만큼 CPU는 문제가 아니었다.",
    anchor: "사진-한-장에-디스크-읽기-세-번",
  },
  {
    id: "rw-facebook-haystack-2",
    post: "rw-facebook-haystack",
    question: "Facebook이 CDN을 더 키우는 대신 원본 저장소를 다시 설계한 이유로 논문이 든 것은?",
    choices: [
      "CDN 업체가 사진 저장을 허락하지 않아서",
      "CDN은 동영상만 캐시할 수 있어서",
      "오래되고 덜 인기 있는 사진 요청(긴 꼬리)이 많고 대개 CDN에서 빗나가, 꼬리까지 캐시하려면 캐시가 비현실적으로 커져서",
      "CDN이 쿠키를 검증하지 못해서",
    ],
    answer: 2,
    explanation:
      "뜨거운 사진은 CDN이 잘 받지만 소셜 네트워크는 긴 꼬리 요청을 많이 만들고 그 요청은 원본까지 온다. 꼬리를 다 캐시하는 건 비용이 맞지 않으니, 빗나간 요청을 원본에서 디스크 한 번으로 처리하게 만드는 쪽을 골랐다.",
    anchor: "cdn이-해결해-주지-못한-긴-꼬리",
  },
  {
    id: "rw-facebook-haystack-3",
    post: "rw-facebook-haystack",
    question: "Haystack Cache가 사진을 담는 조건으로 맞는 것은?",
    choices: [
      "요청이 사용자에게서 직접 왔고, 사진이 쓰기 가능한 Store 기계에 있을 때",
      "요청이 CDN에서 왔을 때만",
      "사진이 읽기 전용 Store 기계에 있을 때",
      "사진 크기가 64KB를 넘을 때",
    ],
    answer: 0,
    explanation:
      "CDN에서 빗나간 요청이 내부 캐시에서 맞을 가능성은 낮다는 경험이 첫 조건의 이유다. 둘째 조건은 최근 사진이 가장 많이 읽히고 파일 시스템이 읽기와 쓰기를 섞지 않을 때 잘 돌기 때문에, 쓰기 가능 기계를 읽기에서 보호하려는 것이다.",
    anchor: "store-directory-cache",
  },
  {
    id: "rw-facebook-haystack-4",
    post: "rw-facebook-haystack",
    question: "같은 키와 보조 키를 가진 니들이 한 볼륨에 둘 있을 때 Haystack은 어느 것을 최신으로 보나?",
    choices: [
      "체크섬이 더 큰 니들",
      "쿠키 값이 더 큰 니들",
      "색인 파일에 먼저 기록된 니들",
      "볼륨 파일에서 오프셋이 더 큰 니들",
    ],
    answer: 3,
    explanation:
      "니들은 덮어쓸 수 없어서 사진을 고치면 같은 키로 새 니들을 끝에 붙인다. 그래서 볼륨 안에서는 가장 큰 오프셋에 있는 니들이 최신이다. 옛 니들의 공간은 컴팩션 때 되찾는다.",
    anchor: "바늘을-이어-붙인-100gb짜리-파일",
  },
  {
    id: "rw-facebook-haystack-5",
    post: "rw-facebook-haystack",
    question: "Haystack이 새 사진을 쓸 때 볼륨 파일에는 동기로, 색인 파일에는 비동기로 기록하면서 생긴 부작용과 처리 방법은?",
    choices: [
      "사진이 두 번 저장되므로 매일 중복 제거 작업을 돌린다",
      "색인 레코드가 없는 고아 니들이 생길 수 있어, 재시작 때 마지막 색인 레코드 뒤의 니들만 읽어 레코드를 덧붙인다",
      "색인 파일이 볼륨 파일보다 앞서 나가므로 재시작 때 색인을 버린다",
      "쓰기 순서가 바뀌므로 모든 니들을 키 순서로 다시 정렬한다",
    ],
    answer: 1,
    explanation:
      "색인 기록을 비동기로 하면 쓰기는 빨리 끝나지만 크래시 때 색인 레코드가 없는 니들이 남는다. 색인 파일의 마지막 레코드가 고아가 아닌 마지막 니들을 가리키므로 그 뒤만 읽으면 된다. 삭제도 색인 파일에 반영하지 않으니, 지운 사진은 니들을 읽은 뒤 플래그로 알아챈다.",
    anchor: "바늘을-이어-붙인-100gb짜리-파일",
  },
  {
    id: "rw-facebook-haystack-6",
    post: "rw-facebook-haystack",
    question: "f4가 식은 BLOB의 유효 복제 계수를 3.6에서 2.8로, 다시 2.1로 낮춘 방법을 바르게 짝지은 것은?",
    choices: [
      "2.8: RS(10,4) 셀을 두 데이터센터에 둠 / 2.1: 두 볼륨의 블록 XOR을 제3 데이터센터에 둠",
      "2.8: 세 벌 복제를 두 벌로 줄임 / 2.1: RAID-6을 RAID-5로 바꿈",
      "2.8: 사진을 압축함 / 2.1: 작은 크기 사진을 지움",
      "2.8: SSD로 바꿈 / 2.1: 테이프로 옮김",
    ],
    answer: 0,
    explanation:
      "RS(10,4)는 블록 10개에 패리티 4개라 1.4이고, 이를 다른 데이터센터에 한 벌 더 두면 2.8이다. 지리적 XOR은 서로 다른 데이터센터에 있는 두 볼륨의 XOR을 세 번째 데이터센터에 두어 두 볼륨 기준 (1.4×2+1.4)/2 = 2.1이 된다. Haystack의 3.6은 세 벌 복제 × RAID-6 1.2다.",
    anchor: "식은-사진은-f4로",
  },
  {
    id: "rw-facebook-haystack-7",
    post: "rw-facebook-haystack",
    question: "2021년 Tectonic 논문이 밝힌, Haystack의 유효 복제 계수가 3.6에서 5.3까지 올라간 이유는?",
    choices: [
      "사진마다 크기 종류를 네 개에서 열 개로 늘려서",
      "f4로 옮기는 작업이 멈춰서",
      "디스크 밀도는 커져도 디스크당 IOPS가 그대로라, 뜨거운 블롭의 IOPS를 맞추려고 디스크를 더 들이다 용량이 남아서",
      "RAID-6 대신 미러링을 써서",
    ],
    answer: 2,
    explanation:
      "용량 1TB당 IOPS가 줄면서 Haystack은 IOPS에 묶였고, IOPS를 위해 디스크를 늘리자 남는 용량이 복제 계수를 끌어올렸다. 반대로 f4는 용량에 묶이고 IOPS가 남았다. 두 시스템이 자원을 나눠 쓰지 못해 결국 Tectonic으로 합쳐졌다.",
    anchor: "2021년-둘-다-tectonic으로",
  },
];
