import { AB_TESTING } from "./ab-testing";
import { BASE64 } from "./base64";
import { BIG_O_NOTATION } from "./big-o-notation";
import { BROWSER_FETCH } from "./browser-fetch";
import { CACHING_STRATEGIES } from "./caching-strategies";
import { CLIENT_DATA_CACHE } from "./client-data-cache";
import { CODE_SPLITTING } from "./code-splitting";
import { COOKIE_SESSION_LOGIN } from "./cookie-session-login";
import { CORE_WEB_VITALS } from "./core-web-vitals";
import { CORS } from "./cors";
import { DB_ARCHITECTURE_BY_SCALE } from "./db-architecture-by-scale";
import { DB_INDEX } from "./db-index";
import { DB_MODELING_NORMALIZATION } from "./db-modeling-normalization";
import { DB_REPLICATION_SHARDING } from "./db-replication-sharding";
import { DB_TRANSACTION_ISOLATION } from "./db-transaction-isolation";
import { DNS } from "./dns";
import { DOCKER_COMPOSE } from "./docker-compose";
import { DOCKER_CONTAINER_BASICS } from "./docker-container-basics";
import { DOCKER_NETWORK_VOLUME } from "./docker-network-volume";
import { DOCKERFILE_IMAGE_LAYERS } from "./dockerfile-image-layers";
import { ELASTICSEARCH_INVERTED_INDEX } from "./elasticsearch-inverted-index";
import { EVENT_LOOP } from "./event-loop";
import { FRONTEND_BROWSER_CACHE } from "./frontend-browser-cache";
import { GATEWAY } from "./gateway";
import { GIT_BRANCH_MERGE } from "./git-branch-merge";
import { GIT_BRANCHING_STRATEGY } from "./git-branching-strategy";
import { GIT_INTERNALS_BASICS } from "./git-internals-basics";
import { GIT_REBASE } from "./git-rebase";
import { GIT_REMOTE_COLLABORATION } from "./git-remote-collaboration";
import { GIT_TIPS_ADVANCED } from "./git-tips-advanced";
import { GIT_TROUBLESHOOTING } from "./git-troubleshooting";
import { GIT_UNDO } from "./git-undo";
import { HOSTS_FILE } from "./hosts-file";
import { HTML_FORM_HTTP } from "./html-form-http";
import { HTTP_CACHING_CDN } from "./http-caching-cdn";
import { HTTP_MESSAGE } from "./http-message";
import { HTTP_METHODS } from "./http-methods";
import { HTTP_STATUS_CODES } from "./http-status-codes";
import { HTTP_VERSIONS } from "./http-versions";
import { HTTPS_TLS } from "./https-tls";
import { IPTABLES_BASICS } from "./iptables-basics";
import { IPTABLES_NAT } from "./iptables-nat";
import { JS_MEMORY_LEAK } from "./js-memory-leak";
import { JSON_CRUD_HTTP } from "./json-crud-http";
import { KUBERNETES_INGRESS } from "./kubernetes-ingress";
import { LOCAL_CUSTOM_DOMAIN } from "./local-custom-domain";
import { MICRO_FRONTENDS } from "./micro-frontends";
import { MICROSERVICES } from "./microservices";
import { MONGODB_DOCUMENT_MODEL } from "./mongodb-document-model";
import { MVC_PATTERN } from "./mvc-pattern";
import { NGINX_BASICS } from "./nginx-basics";
import { NGINX_HTTPS_PERFORMANCE } from "./nginx-https-performance";
import { NGINX_REVERSE_PROXY } from "./nginx-reverse-proxy";
import { OAUTH } from "./oauth";
import { PROXY_REVERSE_PROXY } from "./proxy-reverse-proxy";
import { PYTHAGOREAN_THEOREM } from "./pythagorean-theorem";
import { REACT_RERENDER } from "./react-rerender";
import { REALTIME_COMMUNICATION } from "./realtime-communication";
import { REDIS_BASICS } from "./redis-basics";
import { REDIS_MEMORY_EVICTION } from "./redis-memory-eviction";
import { REDIS_PERSISTENCE_HA } from "./redis-persistence-ha";
import { RENDERING_STRATEGIES } from "./rendering-strategies";
import { RESILIENCE_PATTERNS } from "./resilience-patterns";
import { REST_API_DESIGN } from "./rest-api-design";
import { SQL_BASICS } from "./sql-basics";
import { SQL_QUERY_TUNING } from "./sql-query-tuning";
import { SQLD_DATA_MODELING } from "./sqld-data-modeling";
import { SQLD_ENTITY_ATTRIBUTE_RELATIONSHIP } from "./sqld-entity-attribute-relationship";
import { SQLD_GROUP_BY_HAVING } from "./sqld-group-by-having";
import { SQLD_JOINS } from "./sqld-joins";
import { SQLD_ROLLUP_CUBE_GROUPING_SETS } from "./sqld-rollup-cube-grouping-sets";
import { SQLD_SINGLE_ROW_FUNCTIONS } from "./sqld-single-row-functions";
import { SQLD_SUBQUERY_SET_OPERATORS } from "./sqld-subquery-set-operators";
import { SQLD_TOP_N_HIERARCHICAL_PIVOT } from "./sqld-top-n-hierarchical-pivot";
import { SQLD_WINDOW_FUNCTIONS } from "./sqld-window-functions";
import { TOKEN_LOGIN } from "./token-login";
import { VECTOR_DB } from "./vector-db";
import { WHAT_HAPPENS_GOOGLE_COM } from "./what-happens-google-com";

/** 글 하나에 파일 하나. 새 글을 쓰면 여기에 한 줄 추가한다. */
export const QUESTION_SETS = [
  AB_TESTING,
  BASE64,
  BIG_O_NOTATION,
  BROWSER_FETCH,
  CACHING_STRATEGIES,
  CLIENT_DATA_CACHE,
  CODE_SPLITTING,
  COOKIE_SESSION_LOGIN,
  CORE_WEB_VITALS,
  CORS,
  DB_ARCHITECTURE_BY_SCALE,
  DB_INDEX,
  DB_MODELING_NORMALIZATION,
  DB_REPLICATION_SHARDING,
  DB_TRANSACTION_ISOLATION,
  DNS,
  DOCKER_COMPOSE,
  DOCKER_CONTAINER_BASICS,
  DOCKER_NETWORK_VOLUME,
  DOCKERFILE_IMAGE_LAYERS,
  ELASTICSEARCH_INVERTED_INDEX,
  EVENT_LOOP,
  FRONTEND_BROWSER_CACHE,
  GATEWAY,
  GIT_BRANCH_MERGE,
  GIT_BRANCHING_STRATEGY,
  GIT_INTERNALS_BASICS,
  GIT_REBASE,
  GIT_REMOTE_COLLABORATION,
  GIT_TIPS_ADVANCED,
  GIT_TROUBLESHOOTING,
  GIT_UNDO,
  HOSTS_FILE,
  HTML_FORM_HTTP,
  HTTP_CACHING_CDN,
  HTTP_MESSAGE,
  HTTP_METHODS,
  HTTP_STATUS_CODES,
  HTTP_VERSIONS,
  HTTPS_TLS,
  IPTABLES_BASICS,
  IPTABLES_NAT,
  JS_MEMORY_LEAK,
  JSON_CRUD_HTTP,
  KUBERNETES_INGRESS,
  LOCAL_CUSTOM_DOMAIN,
  MICRO_FRONTENDS,
  MICROSERVICES,
  MONGODB_DOCUMENT_MODEL,
  MVC_PATTERN,
  NGINX_BASICS,
  NGINX_HTTPS_PERFORMANCE,
  NGINX_REVERSE_PROXY,
  OAUTH,
  PROXY_REVERSE_PROXY,
  PYTHAGOREAN_THEOREM,
  REACT_RERENDER,
  REALTIME_COMMUNICATION,
  REDIS_BASICS,
  REDIS_MEMORY_EVICTION,
  REDIS_PERSISTENCE_HA,
  RENDERING_STRATEGIES,
  RESILIENCE_PATTERNS,
  REST_API_DESIGN,
  SQL_BASICS,
  SQL_QUERY_TUNING,
  SQLD_DATA_MODELING,
  SQLD_ENTITY_ATTRIBUTE_RELATIONSHIP,
  SQLD_GROUP_BY_HAVING,
  SQLD_JOINS,
  SQLD_ROLLUP_CUBE_GROUPING_SETS,
  SQLD_SINGLE_ROW_FUNCTIONS,
  SQLD_SUBQUERY_SET_OPERATORS,
  SQLD_TOP_N_HIERARCHICAL_PIVOT,
  SQLD_WINDOW_FUNCTIONS,
  TOKEN_LOGIN,
  VECTOR_DB,
  WHAT_HAPPENS_GOOGLE_COM,
];
