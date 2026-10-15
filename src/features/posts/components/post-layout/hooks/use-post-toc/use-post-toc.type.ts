export interface TocItem {
  id: string;
  text: string;
  /** 2 = h2, 3 = h3 */
  level: 2 | 3;
}
