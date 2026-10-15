"use client";

import { useStackDemo } from "./stack-demo";
import { Button } from "./stack-demo.styled";

export function StackDemo() {
  const { count, increase, resetCount, hello } = useStackDemo();

  return (
    <section>
      <h2>Jotai</h2>
      <Button onClick={increase}>count: {count}</Button> <Button onClick={resetCount}>reset</Button>

      <h2>Axios + TanStack Query</h2>
      {hello.isPending && <p>loading...</p>}
      {hello.error && <p>error: {hello.error.message}</p>}
      {hello.data && (
        <pre>
          <code>{JSON.stringify(hello.data, null, 2)}</code>
        </pre>
      )}
      <Button onClick={() => hello.refetch()}>refetch</Button>
    </section>
  );
}
