import { atomWithReset } from "jotai/utils";
import type { SearchOpen } from "./types";

export const searchOpenAtom = atomWithReset<SearchOpen>(false);
