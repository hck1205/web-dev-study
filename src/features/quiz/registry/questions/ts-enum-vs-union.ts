import type { QuizQuestion } from "../types";

export const TS_ENUM_VS_UNION: QuizQuestion[] = [
  {
    id: "ts-enum-vs-union-1",
    post: "ts-enum-vs-union",
    question:
      "enum Status { Idle, Loading, Done }에서 const raw: number = 응답값; const s: Status = raw; 를 쓰면 TypeScript 5.x는 어떻게 하나?",
    choices: [
      "TS2322로 막는다. 숫자 enum은 0, 1, 2만 받는다",
      "통과시킨다. 타입이 number인 값은 무엇이 들었는지 몰라 숫자 enum 자리에 허용한다",
      "raw가 범위 밖이면 런타임에 예외를 던지는 코드를 만든다",
      "strict 모드에서만 막는다",
    ],
    answer: 1,
    explanation:
      "5.0부터 범위 밖 리터럴(7)은 막지만, 타입이 그냥 number인 값은 비트 플래그 조합처럼 목록에 없는 숫자를 받아야 해서 허용한다. 그래서 API에서 온 숫자가 확인 없이 enum이 되고, 런타임 검사 코드도 생기지 않는다.",
    anchor: "숫자-enum이-number를-받아-주는-이유",
  },
  {
    id: "ts-enum-vs-union-2",
    post: "ts-enum-vs-union",
    question: "멤버가 셋인 숫자 enum에 Object.keys를 부르면 키가 여섯 개 나오는 이유는?",
    choices: [
      "TypeScript가 디버깅용으로 키를 복사해 두기 때문이다",
      "enum 객체가 프로토타입에서 키를 상속하기 때문이다",
      "E[E[\"A\"] = 0] = \"A\" 형태로 이름→숫자와 숫자→이름 칸을 함께 만드는 역매핑 때문이다",
      "문자열 enum과 숫자 enum이 같은 객체를 공유하기 때문이다",
    ],
    answer: 2,
    explanation:
      "안쪽 대입이 돌려준 숫자를 키로 바깥 대입이 이름을 한 번 더 넣는다. 그래서 Object.values로 옵션 목록을 만들면 이름과 숫자가 섞인다. 문자열 enum에는 역매핑이 없다.",
    anchor: "enum은-타입이면서-값이다",
  },
  {
    id: "ts-enum-vs-union-3",
    post: "ts-enum-vs-union",
    question:
      "라이브러리 .d.ts에만 export declare const enum Dir가 있고 JS에는 아무것도 없다. 앱을 esbuild로 번들하면 왜 실패하나?",
    choices: [
      "esbuild는 파일을 하나씩 변환해서 다른 파일의 const enum 값을 알 수 없어 import를 남기는데, 라이브러리 JS에 Dir라는 값이 없다",
      "esbuild가 const enum 문법을 아예 파싱하지 못한다",
      "const enum은 CommonJS에서만 동작하기 때문이다",
      "esbuild가 타입 검사를 하다가 Dir 타입 오류를 낸다",
    ],
    answer: 0,
    explanation:
      "tsc는 프로그램 전체를 읽어 Dir.Up을 1로 박아 넣지만, 파일 단위 변환기는 그 값을 모른다. 남은 import가 존재하지 않는 export를 찾다가 실패하고, isolatedModules를 켜면 tsc가 TS2748로 미리 알려 준다.",
    anchor: "const-enum은-다른-파일에서-깨진다",
  },
  {
    id: "ts-enum-vs-union-4",
    post: "ts-enum-vs-union",
    question: "erasableSyntaxOnly를 켜면 TS1294로 막히지 않는 것은?",
    choices: [
      "enum Status { Idle }",
      "namespace Util { export const x = 1 }",
      "constructor(public name: string) {}",
      "const Status = { Idle: \"idle\" } as const",
    ],
    answer: 3,
    explanation:
      "as const는 타입 주석일 뿐이라 지우면 평범한 객체가 남는다. 나머지 셋은 런타임 코드를 새로 만들어 내는 TypeScript 전용 문법이라 타입만 지우는 Node 같은 도구가 처리할 수 없다.",
    anchor: "타입만-지우는-도구가-늘어난-흐름",
  },
  {
    id: "ts-enum-vs-union-5",
    post: "ts-enum-vs-union",
    question:
      "const SIZES = [\"sm\", \"md\", \"lg\"] as const; 에서 const s: string = 입력값; SIZES.includes(s) 가 에러가 나는 이유는?",
    choices: [
      "readonly 배열에는 includes 메서드가 없기 때문이다",
      "includes의 매개변수 타입이 원소 유니온 \"sm\" | \"md\" | \"lg\"라서 넓은 string을 받지 않기 때문이다",
      "as const 배열은 런타임에 동결되어 메서드를 부를 수 없기 때문이다",
      "string은 리터럴 타입보다 좁기 때문이다",
    ],
    answer: 1,
    explanation:
      "튜플의 includes는 이미 목록 안의 값만 받겠다고 선언돼 있어서 확인하려는 string을 넣을 수 없다. (SIZES as readonly string[]).includes(v)처럼 확인 함수 안에서만 넓혀 비교하고 v is Size 가드로 돌려준다.",
    anchor: "as-const-객체와-유니온으로-바꾸기",
  },
  {
    id: "ts-enum-vs-union-6",
    post: "ts-enum-vs-union",
    question:
      "type User = { readonly id: number }인 u를 const w: { id: number } = u; 로 옮긴 뒤 w.id = 3 을 하면?",
    choices: [
      "대입 줄에서 컴파일 에러가 난다",
      "w.id = 3 줄에서 TS2540이 난다",
      "컴파일이 통과하고 u.id도 3으로 바뀐다",
      "런타임에 TypeError가 난다",
    ],
    answer: 2,
    explanation:
      "속성의 readonly는 대입 호환성에 영향을 주지 않아서 고칠 수 있는 타입으로 옮기면 막을 수 없다. 같은 객체를 가리키니 원래 값도 바뀐다. 배열의 readonly는 반대로 number[] 자리에 넣는 것을 막는다.",
    anchor: "readonly는-얕고-한쪽으로만-막는다",
  },
  {
    id: "ts-enum-vs-union-7",
    post: "ts-enum-vs-union",
    question: "타입이 [start: number, end: number]인 r에 r.push(3)을 하면 어떻게 되나?",
    choices: [
      "컴파일이 통과하고 실제 배열은 세 칸이 되어 타입과 어긋난다",
      "이름표가 있는 튜플이라 push가 막힌다",
      "push는 되지만 런타임에 길이가 2로 잘린다",
      "TS2322로 막힌다",
    ],
    answer: 0,
    explanation:
      "readonly가 아닌 튜플은 배열 메서드를 그대로 가져서 push가 통과한다. 이름표는 편집기 표시용일 뿐 검사에 영향이 없다. 돌려주는 튜플은 readonly나 as const로 만들어 이 구멍을 막는다.",
    anchor: "튜플-자리마다-타입이-다른-배열",
  },
];
