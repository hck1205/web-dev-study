import { COOKIE_SESSION_LOGIN } from "./cookie-session-login";
import { OAUTH } from "./oauth";
import { PYTHAGOREAN_THEOREM } from "./pythagorean-theorem";
import { TOKEN_LOGIN } from "./token-login";
import { VECTOR_DB } from "./vector-db";
import { WHAT_HAPPENS_GOOGLE_COM } from "./what-happens-google-com";

/** 글 하나에 파일 하나. 새 글을 쓰면 여기에 한 줄 추가한다. */
export const QUESTION_SETS = [
  COOKIE_SESSION_LOGIN,
  TOKEN_LOGIN,
  OAUTH,
  VECTOR_DB,
  WHAT_HAPPENS_GOOGLE_COM,
  PYTHAGOREAN_THEOREM,
];
