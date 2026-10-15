import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export function GET() {
  return NextResponse.json({
    message: "hello from route handler",
    time: new Date().toISOString(),
  });
}
