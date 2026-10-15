/**
 * styled 컴포넌트의 스타일 전용 prop이 DOM 속성으로 새지 않게 한다.
 * 사용 예: styled("button", omitProps("active"))<{ active: boolean }>`...`
 */
export const omitProps = (...names: string[]) => ({
  shouldForwardProp: (prop: string) => !names.includes(prop),
});
