import type { QuizQuestion } from "../types";

export const GO_LANGUAGE_ESSENTIALS: QuizQuestion[] = [
  {
    id: "go-language-essentials-1",
    post: "go-language-essentials",
    question: "Slack 타입에 Notify 메서드만 있고 Notifier라는 이름은 어디에도 언급하지 않았다. var n Notifier = Slack{}이 컴파일되는 이유는?",
    choices: [
      "Go 컴파일러가 같은 패키지의 인터페이스를 자동으로 implements 처리해서",
      "인터페이스는 런타임에만 확인하므로 컴파일 시점에는 검사하지 않아서",
      "Slack이 빈 인터페이스 any를 상속해서",
      "Go의 인터페이스는 메서드 목록만 맞으면 선언 없이 만족하기 때문에",
    ],
    answer: 3,
    explanation:
      "Go 인터페이스는 메서드 집합으로 판단해서, 타입이 메서드를 다 갖고 있으면 선언 없이 만족한다. 그래서 쓰는 쪽에서 작게 정의할 수 있다. 검사는 컴파일 시점에 이루어지고, 상속이라는 개념은 없다.",
    anchor: "인터페이스는-선언-없이-만족한다",
  },
  {
    id: "go-language-essentials-2",
    post: "go-language-essentials",
    question: "fmt.Errorf(\"load config: %v\", err)로 감싼 에러에 errors.Is(err, fs.ErrNotExist)를 부르면 false가 나온다. 이유는?",
    choices: [
      "%v는 원래 에러를 문자열로만 이어 붙여 Unwrap 사슬이 끊기기 때문에",
      "errors.Is는 감싼 에러를 한 번도 벗기지 않기 때문에",
      "fs.ErrNotExist는 errors.As로만 비교할 수 있어서",
      "fmt.Errorf로 만든 에러는 항상 새 센티널 값으로 바뀌어서",
    ],
    answer: 0,
    explanation:
      "사슬은 %w로 감쌀 때만 Unwrap으로 이어진다. %v는 메시지만 복사하므로 원인 에러에 닿을 수 없다. errors.Is는 %w로 이어진 사슬을 한 겹씩 벗기며 비교한다.",
    anchor: "에러는-반환값이다",
  },
  {
    id: "go-language-essentials-3",
    post: "go-language-essentials",
    question: "var verr *ValidationError를 그대로 return verr 했다(값은 nil). 반환 타입이 error일 때 호출한 쪽의 err == nil은?",
    choices: [
      "true, 포인터가 nil이니 인터페이스도 nil이다",
      "컴파일 오류가 난다",
      "false, 인터페이스의 타입 칸에 *ValidationError가 들어가 있어서",
      "실행할 때마다 다르다",
    ],
    answer: 2,
    explanation:
      "인터페이스 값은 타입과 값 두 칸을 갖고, 둘 다 비어야 nil이다. nil 포인터를 담으면 타입 칸이 채워져 nil이 아니게 된다. 에러가 없을 때는 return nil을 직접 쓴다.",
    anchor: "nil인데-nil이-아닌-에러",
  },
  {
    id: "go-language-essentials-4",
    post: "go-language-essentials",
    question: "full := []int{1, 2, 3}; c := full[:2]; c = append(c, 99) 를 실행한 뒤 full은?",
    choices: [
      "[1 2 3], append는 항상 새 배열을 만든다",
      "[1 2 99], c가 같은 배열을 보고 용량이 남아 셋째 칸에 썼다",
      "[1 2 3 99], full 끝에 덧붙는다",
      "패닉이 난다, 잘라 낸 슬라이스에는 append할 수 없다",
    ],
    answer: 1,
    explanation:
      "c는 full과 같은 배열을 보고 용량이 3이라, append는 새 배열을 만들지 않고 셋째 칸에 쓴다. 그래서 full[2]도 99가 된다. 용량을 넘을 때만 새 배열로 옮겨 공유가 끊긴다.",
    anchor: "슬라이스는-배열을-함께-쓴다",
  },
  {
    id: "go-language-essentials-5",
    post: "go-language-essentials",
    question: "go.mod와 go.sum의 역할 분담으로 옳은 것은?",
    choices: [
      "go.mod가 쓸 버전을 정하고, go.sum은 그 버전 내용의 해시로 바뀌지 않았음을 확인한다",
      "go.sum이 쓸 버전을 정하고, go.mod는 설치 경로만 적는다",
      "go.sum은 캐시 파일이라 커밋하지 않는다",
      "둘 다 같은 내용이라 하나만 커밋하면 된다",
    ],
    answer: 0,
    explanation:
      "버전 선택은 go.mod와 최소 버전 선택 규칙이 정한다. go.sum은 내려받은 모듈 내용의 해시를 적어 바꿔치기를 막고, 처음 받는 모듈은 공개 체크섬 DB와도 대조한다. 둘 다 커밋한다.",
    anchor: "go-mod와-gosum",
  },
  {
    id: "go-language-essentials-6",
    post: "go-language-essentials",
    question: "glibc가 있는 서버에서 기본 설정으로 빌드한 Go 바이너리를 scratch 이미지에 넣었더니 exec ... no such file or directory로 죽었다. 가장 그럴듯한 원인과 해결은?",
    choices: [
      "실행 권한이 없다. chmod +x를 한다",
      "GOARCH가 틀렸다. GOARCH=amd64로 다시 빌드한다",
      "go.sum이 없다. go mod tidy를 돌린다",
      "cgo가 켜져 동적 링크됐다. CGO_ENABLED=0으로 정적 빌드한다",
    ],
    answer: 3,
    explanation:
      "net 같은 패키지를 쓰면 cgo가 켜진 기본 빌드는 libc와 동적 링커를 찾는다. scratch에는 그 링커가 없어서 파일이 있는데도 not found가 난다. CGO_ENABLED=0이면 순수 Go 구현으로 정적 바이너리가 된다.",
    anchor: "정적-링크와-크로스-컴파일",
  },
];
