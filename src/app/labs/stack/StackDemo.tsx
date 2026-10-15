"use client";

import styled from "@emotion/styled";
import { useQuery } from "@tanstack/react-query";
import { atom, useAtom } from "jotai";
import { http } from "@/lib/http";

const countAtom = atom(0);

const Button = styled.button`
  padding: 0.4rem 0.9rem;
  border: 1px solid currentColor;
  border-radius: 6px;
  background: transparent;
  color: inherit;
  cursor: pointer;
`;

interface HelloResponse {
  message: string;
  time: string;
}

export function StackDemo() {
  const [count, setCount] = useAtom(countAtom);
  const { data, isPending, error, refetch } = useQuery({
    queryKey: ["hello"],
    queryFn: async () => (await http.get<HelloResponse>("/hello")).data,
  });

  return (
    <section>
      <h2>Jotai</h2>
      <Button onClick={() => setCount((c) => c + 1)}>count: {count}</Button>

      <h2>Axios + TanStack Query</h2>
      {isPending && <p>loading...</p>}
      {error && <p>error: {error.message}</p>}
      {data && (
        <pre>
          <code>{JSON.stringify(data, null, 2)}</code>
        </pre>
      )}
      <Button onClick={() => refetch()}>refetch</Button>
    </section>
  );
}
