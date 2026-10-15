import { httpClient } from "@/common/api/http-client";
import type { HelloResponse } from "./types";
import { HELLO_ENDPOINT } from "./utils";

export type { HelloResponse } from "./types";

export async function getHello(): Promise<HelloResponse> {
  const { data } = await httpClient.get<HelloResponse>(HELLO_ENDPOINT);
  return data;
}
