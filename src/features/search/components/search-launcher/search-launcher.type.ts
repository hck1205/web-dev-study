import type { SearchResult } from "../../engine";

export interface SuggestedTag {
  slug: string;
  label: string;
  href: string;
}

export interface SearchState {
  query: string;
  results: SearchResult[];
  activeIndex: number;
}
