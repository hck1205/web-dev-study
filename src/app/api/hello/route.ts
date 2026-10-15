import { NextResponse } from "next/server";
import { createHelloResponse } from "@/features/labs/hello";

export const dynamic = "force-dynamic";

export function GET() {
  return NextResponse.json(createHelloResponse());
}
