import type { QuizQuestion } from "../types";

export const LINUX_ARCHIVE_TRANSFER: QuizQuestion[] = [
  {
    id: "linux-archive-transfer-1",
    post: "linux-archive-transfer",
    question: "`logs.tar.gz`에서 마지막에 들어간 파일 하나만 꺼내려는데 시간이 오래 걸린다. 왜인가?",
    choices: [
      "tar가 파일마다 따로 압축해서 목록을 먼저 다 풀어야 하기 때문이다",
      "묶은 덩어리 전체를 한 번에 압축해서, 그 파일까지 앞부분을 다 풀며 읽어야 하기 때문이다",
      "gzip은 파일 하나만 꺼내는 기능을 지원하지 않아 전체를 디스크에 푼 뒤 고르기 때문이다",
      "tar 헤더가 파일 끝에 모여 있어서 끝까지 읽어야 위치를 알기 때문이다",
    ],
    answer: 1,
    explanation:
      "tar는 헤더와 내용을 차례로 이어 붙이기만 하고, gzip이 그 전체를 한 흐름으로 누른다. 그래서 중간부터 바로 풀 수 없다. 파일마다 따로 눌러 끝의 목록으로 바로 찾아가는 것은 zip 쪽이다.",
    anchor: "zip은-다르게-묶는다",
  },
  {
    id: "linux-archive-transfer-2",
    post: "linux-archive-transfer",
    question: "같은 로그를 잰 실험에서 zstd -3을 기본값으로 쓸 만하다고 본 이유는?",
    choices: [
      "가장 작게 눌렀기 때문이다",
      "gzip -6과 크기가 비슷하면서 압축과 해제가 몇 배 빨랐기 때문이다",
      "단일 스레드에서만 동작해서 서버 부하가 적기 때문이다",
      "이미 압축된 파일도 크게 줄여 주기 때문이다",
    ],
    answer: 1,
    explanation:
      "zstd -3은 59.6MiB로 gzip -6의 57.2MiB와 비슷했고, 압축 1.4초 대 7.5초, 해제 0.3초 대 1.5초였다. 가장 작은 것은 bzip2였지만 해제가 열 배 느렸다. zstd는 -T0으로 여러 코어도 쓴다.",
    anchor: "같은-로그로-재-본-압축-도구들",
  },
  {
    id: "linux-archive-transfer-3",
    post: "linux-archive-transfer",
    question: "같은 데이터센터 안 10Gbps 회선으로 로그 300MB를 옮긴다. 실험 숫자로 보면 가장 빨리 끝나는 방법은?",
    choices: [
      "xz -6으로 가장 작게 누른다",
      "zstd -19로 누른다",
      "압축하지 않고 그대로 보낸다",
      "bzip2 -9로 누른다",
    ],
    answer: 2,
    explanation:
      "10Gbps에서 304.6MB를 보내는 데 0.2초 남짓이라, 어떤 압축이든 누르는 시간이 그보다 길다. 압축은 회선 시간과 맞바꾸는 것이라 회선이 넓을수록 손해가 된다. 회선이 좁아질수록 세게 누르는 쪽이 이긴다.",
    anchor: "압축할지-말지는-회선이-정한다",
  },
  {
    id: "linux-archive-transfer-4",
    post: "linux-archive-transfer",
    question: "디스크가 거의 찬 서버에서 `tar -cf - . | zstd -3 | ssh host 'zstd -d | tar -xf -'`를 쓰는 이유로 맞는 것은?",
    choices: [
      "중간 압축 파일을 만들지 않고 묶기, 누르기, 보내기, 풀기가 동시에 흐르기 때문이다",
      "ssh가 tar 파일을 자동으로 이어 보내기 해 주기 때문이다",
      "파이프를 쓰면 tar가 실패해도 종료 코드로 정확히 알려 주기 때문이다",
      "zstd가 ssh의 암호화를 대신해 주기 때문이다",
    ],
    answer: 0,
    explanation:
      "-f - 로 표준 출력에 쓰고 파이프로 넘기면 보내는 쪽 디스크에 아무 파일도 생기지 않는다. 각 단계가 동시에 흐르니 전체 시간은 가장 느린 단계에 가깝다. 다만 파이프의 종료 코드는 마지막 명령의 것이라 pipefail이 필요하다.",
    anchor: "디스크에-쓰지-않고-바로-보낸다",
  },
  {
    id: "linux-archive-transfer-5",
    post: "linux-archive-transfer",
    question: "Python 3.13에서 `tarfile.open(f).extractall()`로 업로드된 파일을 풀면 어떤 위험이 있나?",
    choices: [
      "GNU tar처럼 ..이 든 항목을 건너뛰므로 위험이 없다",
      "경고만 찍고 ../escape.txt 같은 항목을 대상 디렉터리 밖에 쓸 수 있다",
      "압축 형식을 알아보지 못해 항상 예외가 난다",
      "모든 파일이 root 소유로 풀린다",
    ],
    answer: 1,
    explanation:
      "실험에서 3.13은 DeprecationWarning만 내고 바깥에 파일을 썼다. filter=\"data\"를 주자 OutsideDestinationError로 막았다. GNU tar는 기본으로 막지만 내 코드의 라이브러리는 다를 수 있다.",
    anchor: "남이-준-tar를-풀-때",
  },
  {
    id: "linux-archive-transfer-6",
    post: "linux-archive-transfer",
    question: "`rsync -a src d1/`과 `rsync -a src/ d2/`의 결과 차이는?",
    choices: [
      "차이가 없다. rsync는 슬래시를 무시한다",
      "d1에는 src 디렉터리가 통째로 들어가고, d2에는 src 안의 내용만 들어간다",
      "d1은 하위 디렉터리를 빼고 복사하고, d2는 모두 복사한다",
      "d2 쪽만 원본에 없는 파일을 지운다",
    ],
    answer: 1,
    explanation:
      "원본 끝에 /가 있으면 그 안의 내용을, 없으면 디렉터리 자체를 보낸다. 실험에서 d1/src/a.log와 d2/a.log로 갈렸다. --delete와 함께 쓸 때 이 차이가 사고로 이어지니 --dry-run으로 먼저 본다.",
    anchor: "옮기는-도구-scp-sftp-rsync-wget",
  },
  {
    id: "linux-archive-transfer-7",
    post: "linux-archive-transfer",
    question: "FTPS와 SFTP에 대한 설명으로 맞는 것은?",
    choices: [
      "SFTP는 FTP에 SSH 암호화를 씌운 것이라 21번 포트를 쓴다",
      "FTPS는 SSH 키 인증을 그대로 쓴다",
      "FTPS는 데이터 연결이 따로라 방화벽에 passive 포트 범위를 열어야 하고, SFTP는 22번 연결 하나로 끝난다",
      "둘 다 평문 프로토콜이다",
    ],
    answer: 2,
    explanation:
      "FTPS는 FTP 구조에 TLS만 씌워서 명령과 데이터 연결이 나뉘고, 방화벽이 암호화된 명령을 못 읽으니 포트 범위를 미리 맞춰 연다. SFTP는 FTP와 무관한 SSH 서브시스템이다.",
    anchor: "ftp-ftps-sftp는-이름만-비슷하다",
  },
];
