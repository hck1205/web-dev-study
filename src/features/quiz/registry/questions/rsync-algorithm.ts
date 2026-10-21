import type { QuizQuestion } from "../types";

export const RSYNC_ALGORITHM: QuizQuestion[] = [
  {
    id: "rsync-algorithm-1",
    post: "rsync-algorithm",
    question: "rsync에서 블록 지문(체크섬 목록)을 계산해 보내는 쪽은 누구이고, 왜 그쪽인가?",
    choices: [
      "보내는 쪽. 새 파일을 가진 쪽이 지문을 만들어야 받는 쪽이 비교할 수 있어서",
      "받는 쪽. 옛 파일의 블록 지문만 보내고, 모든 위치에서 창을 미는 비싼 일은 새 파일을 가진 쪽이 해야 해서",
      "양쪽 모두. 서로의 지문을 교환해 공통 블록을 찾아서",
      "중간 서버. 두 파일을 모두 받아 비교해서",
    ],
    answer: 1,
    explanation:
      "받는 쪽은 옛 파일을 고정 블록으로 잘라 블록 수만큼만 계산하고 지문을 보낸다. 새 파일의 모든 바이트 위치에서 창을 밀어 보는 일은 새 파일을 가진 보내는 쪽만 할 수 있다. HTTP용 zsync는 이 방향을 뒤집어 서버가 지문을 미리 만들어 둔다.",
    anchor: "받는-쪽이-먼저-블록-지문을-보낸다",
  },
  {
    id: "rsync-algorithm-2",
    post: "rsync-algorithm",
    question: "46MB 파일 맨 앞에 30바이트를 끼워 넣고 델타 전송했더니 Literal data가 30바이트였다. 이게 가능한 이유는?",
    choices: [
      "rsync가 파일 끝에서부터 비교하기 때문",
      "블록 경계를 고정해 두고 블록끼리 비교하기 때문",
      "보내는 쪽이 모든 바이트 위치에서 창을 밀며 옛 블록을 찾기 때문",
      "끼워 넣은 줄을 압축해서 보내기 때문",
    ],
    answer: 2,
    explanation:
      "고정 경계로 비교하면 뒤 바이트가 모두 밀려 모든 블록이 달라진다. rsync는 새 파일의 각 위치에서 블록 크기의 창을 놓고 굴리는 체크섬으로 찾으니, 밀린 위치에서도 같은 내용의 블록을 찾아낸다.",
    anchor: "46mb-파일-한-줄을-고쳐-보내-보기",
  },
  {
    id: "rsync-algorithm-3",
    post: "rsync-algorithm",
    question: "약한 체크섬 (a, b)에서 창을 한 칸 밀 때 새 값을 구하는 데 필요한 것은?",
    choices: [
      "창 안의 모든 바이트",
      "이전 (a, b), 빠지는 바이트, 들어오는 바이트, 블록 크기",
      "이전 창의 강한 해시",
      "옛 파일의 해당 블록",
    ],
    answer: 1,
    explanation:
      "a′ = a − out + in, b′ = b − B·out + a′라서 덧셈 몇 번이면 된다. 그래서 위치마다 상수 시간이 들고 전체 비용이 파일 크기에 비례한다. 강한 해시는 이렇게 굴릴 수 없어서 후보가 나왔을 때만 계산한다.",
    anchor: "한-칸씩-미는-체크섬",
  },
  {
    id: "rsync-algorithm-4",
    post: "rsync-algorithm",
    question: "같은 서버의 두 디렉터리 사이에서 rsync -av --stats를 돌렸더니 한 줄 고친 큰 파일인데도 Literal data가 파일 크기와 같다. 왜인가?",
    choices: [
      "로컬 경로끼리는 --whole-file이 기본이라 델타를 쓰지 않아서",
      "파일이 압축돼 있어서",
      "블록 크기가 너무 커서",
      "quick check가 파일을 건너뛰어서",
    ],
    answer: 0,
    explanation:
      "양쪽이 로컬이면 지문 계산과 창 밀기 비용이 그냥 복사보다 크다고 보고 --whole-file을 켠다. 델타 동작을 보려면 --no-whole-file을 준다. quick check로 건너뛰었다면 Literal data는 0이다.",
    anchor: "46mb-파일-한-줄을-고쳐-보내-보기",
  },
  {
    id: "rsync-algorithm-5",
    post: "rsync-algorithm",
    question: "블록 크기를 -B 1024로 아주 작게 잡으면 어떻게 되나?",
    choices: [
      "literal도 줄고 지문 목록도 줄어 항상 이득이다",
      "literal은 줄지만 블록 수가 늘어 지문 목록이 커진다",
      "literal이 커지고 지문 목록은 줄어든다",
      "블록 크기는 전송량에 영향이 없다",
    ],
    answer: 1,
    explanation:
      "수정 하나에 깨지는 블록이 작아져 literal은 1,028바이트로 줄었지만, 블록이 4만 5천 개를 넘어 지문 목록만 32만 바이트였다. 기본값인 제곱근 근처 크기가 두 비용이 비슷해지는 지점이다.",
    anchor: "블록-크기가-정하는-것",
  },
  {
    id: "rsync-algorithm-6",
    post: "rsync-algorithm",
    question: "매일 gzip으로 압축한 로그를 rsync로 보내는데 거의 매번 절반 가까이 literal로 간다. 가장 먼저 시도할 것은?",
    choices: [
      "-z로 전송 압축을 켠다",
      "블록 크기를 최대로 키운다",
      "gzip --rsyncable로 압축한다",
      "-c로 체크섬 비교를 켠다",
    ],
    answer: 2,
    explanation:
      "일반 압축은 한 곳이 바뀌면 그 뒤 압축 바이트가 모두 달라진다. --rsyncable은 일정 지점마다 압축 상태를 초기화해 변화가 짧게만 번지게 하고, 실측에서 literal이 4.5MB에서 37KB로 줄었다. -z는 이미 압축된 데이터에는 효과가 없다.",
    anchor: "델타-전송이-통하지-않는-파일",
  },
  {
    id: "rsync-algorithm-7",
    post: "rsync-algorithm",
    question: "설정 파일 내용을 바꿨는데 rsync가 아무것도 보내지 않았다. 크기와 수정 시각은 이전과 같다. 무엇을 써야 잡아낼 수 있나?",
    choices: ["--inplace", "--partial", "-c (--checksum)", "-W (--whole-file)"],
    answer: 2,
    explanation:
      "기본 quick check는 크기와 수정 시각이 같으면 열어 보지도 않는다. -c는 양쪽 내용의 해시를 비교해 다른 파일을 찾지만, 모든 파일을 끝까지 읽어 느리므로 주기적인 검증에만 쓰는 편이 좋다.",
    anchor: "아예-보내지-않고-건너뛰는-판단",
  },
];
