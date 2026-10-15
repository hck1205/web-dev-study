import type { Metadata } from "next";
import { StackDemo } from "@/features/labs/stack-demo";

export const metadata: Metadata = { title: "Stack check" };

export default function StackPage() {
  return (
    <>
      <h1>Stack check</h1>
      <p>Emotion, Jotai, Axios, TanStack Query가 함께 동작하는지 확인하는 페이지입니다.</p>
      <StackDemo />
    </>
  );
}
