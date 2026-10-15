import type { HelloResponse } from "./hello.type";

export function createHelloResponse(now: Date = new Date()): HelloResponse {
  return {
    message: "hello from route handler",
    time: now.toISOString(),
  };
}
