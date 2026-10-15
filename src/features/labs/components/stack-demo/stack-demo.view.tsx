"use client";

import { Button, Card, PageHeader } from "@/common/design-system";
import { useStackDemo } from "./stack-demo";
import { CardTitle, Cards, Output, Row, Status } from "./stack-demo.styled";

export function StackDemo() {
  const { count, increase, resetCount, hello } = useStackDemo();

  return (
    <>
      <PageHeader title="Labs" lead="사이트에 쓰는 라이브러리(Jotai, Axios, TanStack Query)를 직접 만져보는 실험 페이지입니다." />
      <Cards>
        <Card>
          <CardTitle>Jotai</CardTitle>
          <Row>
            <Button onClick={increase}>count: {count}</Button>
            <Button variant="secondary" onClick={resetCount}>
              reset
            </Button>
          </Row>
        </Card>

        <Card>
          <CardTitle>Axios + TanStack Query</CardTitle>
          {hello.isPending && <Status>loading...</Status>}
          {hello.error && <Status>error: {hello.error.message}</Status>}
          {hello.data && (
            <Output>
              <code>{JSON.stringify(hello.data, null, 2)}</code>
            </Output>
          )}
          <Button variant="secondary" onClick={() => hello.refetch()}>
            refetch
          </Button>
        </Card>
      </Cards>
    </>
  );
}
