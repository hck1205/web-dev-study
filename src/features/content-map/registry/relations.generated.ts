// 자동 생성 파일이다. 직접 고치지 말고 `pnpm content:index`를 실행한다 (scripts/content-index.cjs).
import type { PostRelations } from "./types";

export const POST_RELATIONS: Record<string, PostRelations> = {
  "db-type-time-series": {
    "links": [
      "db-types-overview",
      "db-index",
      "db-type-columnar-olap",
      "db-type-relational"
    ],
    "mentions": [
      "sqld-group-by-having",
      "db-replication-sharding",
      "http-status-codes"
    ]
  },
  "db-type-columnar-olap": {
    "links": [
      "db-types-overview",
      "db-type-relational",
      "db-type-time-series",
      "db-type-embedded",
      "db-architecture-by-scale",
      "db-type-newsql"
    ],
    "mentions": [
      "postgres-advanced-sql"
    ]
  },
  "db-type-newsql": {
    "links": [
      "db-replication-sharding",
      "db-types-overview",
      "db-transaction-isolation",
      "db-consistency-cap",
      "db-type-columnar-olap",
      "db-type-key-value",
      "db-type-wide-column"
    ],
    "mentions": [
      "postgres-getting-started"
    ]
  },
  "db-type-embedded": {
    "links": [
      "db-types-overview",
      "db-type-wide-column",
      "db-type-newsql",
      "db-type-columnar-olap",
      "db-consistency-cap"
    ],
    "mentions": [
      "sql-basics",
      "sqld-window-functions",
      "postgres-architecture"
    ]
  },
  "db-consistency-cap": {
    "links": [
      "db-types-overview",
      "db-transaction-isolation",
      "db-type-newsql",
      "db-replication-sharding",
      "db-type-wide-column",
      "redis-persistence-ha"
    ],
    "mentions": [
      "db-type-key-value",
      "mongodb-document-model",
      "redis-basics"
    ]
  },
  "db-types-overview": {
    "links": [
      "db-architecture-by-scale",
      "db-consistency-cap",
      "db-type-relational",
      "db-type-key-value",
      "db-type-wide-column",
      "db-type-graph",
      "db-type-time-series",
      "db-type-columnar-olap",
      "db-type-newsql",
      "db-type-embedded",
      "mongodb-document-model",
      "elasticsearch-inverted-index",
      "vector-db",
      "redis-basics",
      "postgres-getting-started"
    ],
    "mentions": []
  },
  "db-type-relational": {
    "links": [
      "db-types-overview",
      "db-modeling-normalization",
      "sql-query-tuning",
      "db-index",
      "db-replication-sharding",
      "db-transaction-isolation",
      "sql-basics",
      "db-type-newsql",
      "db-type-columnar-olap",
      "db-type-graph",
      "db-type-wide-column",
      "mongodb-document-model",
      "caching-strategies",
      "db-architecture-by-scale"
    ],
    "mentions": [
      "db-type-time-series",
      "db-type-key-value",
      "sqld-top-n-hierarchical-pivot",
      "postgres-architecture",
      "postgres-jsonb-search",
      "postgres-getting-started"
    ]
  },
  "db-type-key-value": {
    "links": [
      "db-types-overview",
      "postgres-jsonb-search",
      "redis-basics",
      "redis-memory-eviction",
      "redis-persistence-ha",
      "db-type-embedded",
      "db-type-relational",
      "db-type-newsql",
      "db-consistency-cap",
      "caching-strategies",
      "db-type-wide-column"
    ],
    "mentions": [
      "dns"
    ]
  },
  "db-type-wide-column": {
    "links": [
      "db-type-key-value",
      "db-type-columnar-olap",
      "db-replication-sharding",
      "db-consistency-cap",
      "db-type-time-series",
      "db-type-graph"
    ],
    "mentions": [
      "db-type-relational",
      "dns"
    ]
  },
  "db-type-graph": {
    "links": [
      "db-type-wide-column",
      "sqld-top-n-hierarchical-pivot",
      "db-type-time-series"
    ],
    "mentions": [
      "db-type-relational"
    ]
  },
  "postgres-architecture": {
    "links": [
      "postgres-getting-started",
      "postgres-jsonb-search",
      "sql-query-tuning",
      "postgres-operations",
      "postgres-mvcc-vacuum",
      "db-index",
      "db-transaction-isolation",
      "db-replication-sharding"
    ],
    "mentions": [
      "db-architecture-by-scale",
      "db-type-relational"
    ]
  },
  "postgres-mvcc-vacuum": {
    "links": [
      "db-transaction-isolation",
      "postgres-architecture",
      "db-replication-sharding",
      "db-index",
      "sql-query-tuning",
      "postgres-operations"
    ],
    "mentions": []
  },
  "postgres-operations": {
    "links": [
      "postgres-architecture",
      "postgres-mvcc-vacuum",
      "sql-query-tuning",
      "db-transaction-isolation",
      "db-replication-sharding"
    ],
    "mentions": [
      "db-architecture-by-scale",
      "db-type-relational",
      "postgres-getting-started",
      "sql-basics"
    ]
  },
  "postgres-advanced-sql": {
    "links": [
      "sql-basics",
      "postgres-roles-security",
      "db-transaction-isolation",
      "sqld-top-n-hierarchical-pivot",
      "caching-strategies",
      "sqld-window-functions",
      "db-index",
      "postgres-functions-triggers"
    ],
    "mentions": [
      "postgres-data-types",
      "sqld-group-by-having",
      "postgres-getting-started",
      "sql-query-tuning"
    ]
  },
  "postgres-functions-triggers": {
    "links": [
      "postgres-advanced-sql",
      "db-transaction-isolation",
      "postgres-roles-security",
      "db-architecture-by-scale",
      "postgres-jsonb-search"
    ],
    "mentions": [
      "db-index",
      "json-crud-http",
      "postgres-getting-started",
      "postgres-data-types"
    ]
  },
  "postgres-jsonb-search": {
    "links": [
      "postgres-functions-triggers",
      "db-index",
      "elasticsearch-inverted-index",
      "postgres-architecture"
    ],
    "mentions": []
  },
  "postgres-getting-started": {
    "links": [
      "sql-basics",
      "postgres-data-types",
      "postgres-roles-security"
    ],
    "mentions": [
      "postgres-operations",
      "db-type-relational"
    ]
  },
  "postgres-data-types": {
    "links": [
      "postgres-getting-started",
      "db-index",
      "postgres-jsonb-search",
      "sql-basics"
    ],
    "mentions": [
      "postgres-architecture"
    ]
  },
  "postgres-roles-security": {
    "links": [
      "postgres-getting-started",
      "postgres-functions-triggers"
    ],
    "mentions": [
      "postgres-data-types",
      "db-architecture-by-scale",
      "sql-basics",
      "db-index",
      "dns"
    ]
  },
  "git-internals-basics": {
    "links": [
      "git-branch-merge",
      "git-remote-collaboration",
      "git-undo"
    ],
    "mentions": [
      "git-tips-advanced"
    ]
  },
  "git-branch-merge": {
    "links": [
      "git-internals-basics",
      "git-undo",
      "git-branching-strategy",
      "git-remote-collaboration",
      "git-rebase"
    ],
    "mentions": []
  },
  "git-rebase": {
    "links": [
      "git-branch-merge",
      "git-branching-strategy",
      "git-remote-collaboration",
      "git-undo"
    ],
    "mentions": [
      "git-tips-advanced",
      "git-internals-basics"
    ]
  },
  "git-undo": {
    "links": [
      "git-internals-basics",
      "git-troubleshooting"
    ],
    "mentions": [
      "git-branch-merge",
      "git-tips-advanced"
    ]
  },
  "git-remote-collaboration": {
    "links": [
      "git-internals-basics",
      "git-branch-merge",
      "git-rebase",
      "git-branching-strategy",
      "git-troubleshooting"
    ],
    "mentions": [
      "git-undo",
      "token-login",
      "what-happens-google-com"
    ]
  },
  "git-branching-strategy": {
    "links": [
      "git-branch-merge",
      "git-remote-collaboration",
      "git-tips-advanced"
    ],
    "mentions": [
      "ab-testing"
    ]
  },
  "git-troubleshooting": {
    "links": [
      "git-undo",
      "git-rebase",
      "git-remote-collaboration",
      "git-tips-advanced",
      "git-internals-basics"
    ],
    "mentions": [
      "git-branch-merge",
      "db-modeling-normalization"
    ]
  },
  "git-tips-advanced": {
    "links": [
      "git-branching-strategy",
      "git-troubleshooting",
      "git-branch-merge"
    ],
    "mentions": [
      "dockerfile-image-layers"
    ]
  },
  "sqld-subquery-set-operators": {
    "links": [
      "sqld-single-row-functions",
      "sqld-joins",
      "db-index",
      "sqld-window-functions"
    ],
    "mentions": [
      "sqld-group-by-having",
      "sql-basics"
    ]
  },
  "sqld-window-functions": {
    "links": [
      "sqld-subquery-set-operators",
      "sqld-single-row-functions",
      "sqld-top-n-hierarchical-pivot",
      "sqld-rollup-cube-grouping-sets"
    ],
    "mentions": [
      "sqld-group-by-having"
    ]
  },
  "sqld-rollup-cube-grouping-sets": {
    "links": [
      "sqld-subquery-set-operators",
      "sqld-group-by-having"
    ],
    "mentions": [
      "json-crud-http",
      "postgres-advanced-sql",
      "sqld-single-row-functions"
    ]
  },
  "sqld-top-n-hierarchical-pivot": {
    "links": [
      "sqld-subquery-set-operators",
      "sqld-window-functions"
    ],
    "mentions": [
      "sqld-group-by-having"
    ]
  },
  "sql-basics": {
    "links": [
      "db-index",
      "sql-query-tuning",
      "db-transaction-isolation",
      "sqld-data-modeling"
    ],
    "mentions": [
      "sqld-group-by-having",
      "postgres-operations",
      "postgres-getting-started"
    ]
  },
  "sqld-data-modeling": {
    "links": [
      "sqld-entity-attribute-relationship",
      "db-modeling-normalization",
      "db-index"
    ],
    "mentions": [
      "postgres-data-types",
      "db-type-relational",
      "sql-basics"
    ]
  },
  "sqld-entity-attribute-relationship": {
    "links": [
      "sqld-data-modeling",
      "db-modeling-normalization"
    ],
    "mentions": [
      "json-crud-http",
      "http-status-codes",
      "sql-basics"
    ]
  },
  "sqld-single-row-functions": {
    "links": [
      "sqld-group-by-having",
      "db-index"
    ],
    "mentions": [
      "postgres-getting-started"
    ]
  },
  "sqld-group-by-having": {
    "links": [
      "sqld-single-row-functions",
      "sqld-joins"
    ],
    "mentions": []
  },
  "sqld-joins": {
    "links": [
      "sqld-single-row-functions",
      "sqld-group-by-having",
      "sql-query-tuning"
    ],
    "mentions": [
      "sqld-top-n-hierarchical-pivot"
    ]
  },
  "db-modeling-normalization": {
    "links": [
      "db-index"
    ],
    "mentions": [
      "postgres-architecture",
      "json-crud-http",
      "postgres-advanced-sql",
      "db-types-overview",
      "sqld-entity-attribute-relationship",
      "db-transaction-isolation",
      "db-replication-sharding"
    ]
  },
  "db-transaction-isolation": {
    "links": [
      "microservices"
    ],
    "mentions": [
      "postgres-mvcc-vacuum",
      "postgres-getting-started",
      "sql-basics"
    ]
  },
  "db-replication-sharding": {
    "links": [
      "db-index",
      "sql-query-tuning",
      "caching-strategies",
      "microservices",
      "mongodb-document-model",
      "db-architecture-by-scale"
    ],
    "mentions": [
      "db-consistency-cap",
      "redis-persistence-ha",
      "db-type-newsql",
      "db-type-wide-column",
      "db-type-key-value",
      "redis-basics",
      "postgres-architecture",
      "dns"
    ]
  },
  "db-architecture-by-scale": {
    "links": [
      "db-replication-sharding",
      "db-modeling-normalization",
      "db-transaction-isolation",
      "db-index",
      "caching-strategies",
      "redis-basics",
      "elasticsearch-inverted-index",
      "microservices",
      "mongodb-document-model",
      "vector-db"
    ],
    "mentions": [
      "db-type-time-series",
      "postgres-advanced-sql",
      "db-type-columnar-olap",
      "postgres-mvcc-vacuum",
      "db-type-wide-column",
      "db-type-key-value",
      "db-type-relational",
      "db-type-graph",
      "http-caching-cdn",
      "postgres-operations",
      "postgres-jsonb-search",
      "sql-basics"
    ]
  },
  "db-index": {
    "links": [
      "sql-query-tuning"
    ],
    "mentions": [
      "postgres-mvcc-vacuum",
      "db-replication-sharding",
      "db-transaction-isolation",
      "sql-basics"
    ]
  },
  "sql-query-tuning": {
    "links": [
      "db-index"
    ],
    "mentions": [
      "postgres-mvcc-vacuum",
      "db-architecture-by-scale",
      "rest-api-design",
      "postgres-architecture",
      "postgres-getting-started",
      "db-transaction-isolation"
    ]
  },
  "nginx-basics": {
    "links": [
      "nginx-reverse-proxy",
      "nginx-https-performance"
    ],
    "mentions": [
      "realtime-communication",
      "proxy-reverse-proxy",
      "event-loop",
      "http-status-codes",
      "what-happens-google-com",
      "db-modeling-normalization"
    ]
  },
  "nginx-reverse-proxy": {
    "links": [
      "proxy-reverse-proxy",
      "nginx-basics",
      "http-status-codes",
      "realtime-communication",
      "nginx-https-performance",
      "gateway"
    ],
    "mentions": [
      "browser-fetch",
      "redis-basics",
      "resilience-patterns",
      "what-happens-google-com",
      "http-methods"
    ]
  },
  "nginx-https-performance": {
    "links": [
      "nginx-reverse-proxy",
      "https-tls",
      "http-caching-cdn",
      "nginx-basics",
      "http-versions"
    ],
    "mentions": [
      "cookie-session-login",
      "what-happens-google-com",
      "dns"
    ]
  },
  "redis-memory-eviction": {
    "links": [
      "redis-basics",
      "caching-strategies",
      "redis-persistence-ha"
    ],
    "mentions": [
      "dns"
    ]
  },
  "redis-persistence-ha": {
    "links": [
      "redis-basics",
      "redis-memory-eviction"
    ],
    "mentions": [
      "dns"
    ]
  },
  "proxy-reverse-proxy": {
    "links": [
      "https-tls",
      "nginx-reverse-proxy",
      "http-caching-cdn",
      "local-custom-domain",
      "gateway"
    ],
    "mentions": [
      "docker-container-basics",
      "iptables-basics",
      "http-versions",
      "http-status-codes",
      "what-happens-google-com",
      "dns"
    ]
  },
  "redis-basics": {
    "links": [
      "redis-memory-eviction",
      "redis-persistence-ha",
      "caching-strategies"
    ],
    "mentions": [
      "db-type-relational",
      "event-loop",
      "db-transaction-isolation",
      "dns"
    ]
  },
  "caching-strategies": {
    "links": [
      "redis-basics",
      "resilience-patterns",
      "http-caching-cdn",
      "redis-persistence-ha",
      "redis-memory-eviction"
    ],
    "mentions": [
      "db-type-columnar-olap",
      "db-replication-sharding",
      "dns"
    ]
  },
  "frontend-browser-cache": {
    "links": [
      "http-caching-cdn",
      "caching-strategies",
      "client-data-cache",
      "core-web-vitals",
      "code-splitting"
    ],
    "mentions": [
      "realtime-communication",
      "what-happens-google-com",
      "cors"
    ]
  },
  "client-data-cache": {
    "links": [
      "frontend-browser-cache",
      "browser-fetch",
      "react-rerender",
      "rest-api-design",
      "rendering-strategies",
      "js-memory-leak"
    ],
    "mentions": [
      "http-caching-cdn"
    ]
  },
  "json-crud-http": {
    "links": [
      "http-methods",
      "http-message",
      "browser-fetch",
      "rest-api-design",
      "http-status-codes",
      "html-form-http"
    ],
    "mentions": [
      "cors",
      "client-data-cache",
      "resilience-patterns",
      "http-caching-cdn"
    ]
  },
  "big-o-notation": {
    "links": [],
    "mentions": []
  },
  "docker-network-volume": {
    "links": [
      "docker-container-basics",
      "dockerfile-image-layers",
      "iptables-nat",
      "docker-compose"
    ],
    "mentions": [
      "nginx-basics",
      "iptables-basics",
      "postgres-operations",
      "proxy-reverse-proxy",
      "redis-basics",
      "dns"
    ]
  },
  "docker-compose": {
    "links": [
      "docker-network-volume",
      "docker-container-basics",
      "dockerfile-image-layers",
      "kubernetes-ingress"
    ],
    "mentions": [
      "iptables-basics",
      "proxy-reverse-proxy",
      "redis-basics",
      "iptables-nat",
      "redis-persistence-ha",
      "dns"
    ]
  },
  "docker-container-basics": {
    "links": [
      "dockerfile-image-layers",
      "iptables-nat"
    ],
    "mentions": [
      "iptables-basics",
      "rest-api-design"
    ]
  },
  "dockerfile-image-layers": {
    "links": [
      "docker-container-basics"
    ],
    "mentions": [
      "docker-compose",
      "dns"
    ]
  },
  "base64": {
    "links": [
      "token-login",
      "https-tls"
    ],
    "mentions": [
      "http-versions",
      "what-happens-google-com"
    ]
  },
  "html-form-http": {
    "links": [
      "http-methods",
      "http-message",
      "browser-fetch",
      "http-status-codes",
      "cors",
      "cookie-session-login"
    ],
    "mentions": [
      "rest-api-design",
      "base64",
      "http-versions",
      "rendering-strategies",
      "client-data-cache",
      "resilience-patterns",
      "what-happens-google-com"
    ]
  },
  "iptables-basics": {
    "links": [
      "iptables-nat"
    ],
    "mentions": [
      "what-happens-google-com",
      "dns"
    ]
  },
  "iptables-nat": {
    "links": [
      "iptables-basics",
      "kubernetes-ingress"
    ],
    "mentions": [
      "proxy-reverse-proxy",
      "http-versions",
      "what-happens-google-com",
      "dns"
    ]
  },
  "http-message": {
    "links": [
      "what-happens-google-com",
      "http-status-codes",
      "http-methods",
      "http-caching-cdn",
      "cookie-session-login",
      "token-login",
      "http-versions"
    ],
    "mentions": [
      "https-tls",
      "html-form-http",
      "kubernetes-ingress",
      "base64",
      "db-modeling-normalization"
    ]
  },
  "http-methods": {
    "links": [
      "http-message",
      "http-caching-cdn",
      "resilience-patterns",
      "cors",
      "cookie-session-login",
      "http-status-codes"
    ],
    "mentions": [
      "json-crud-http",
      "elasticsearch-inverted-index",
      "gateway",
      "client-data-cache",
      "what-happens-google-com"
    ]
  },
  "https-tls": {
    "links": [
      "dns",
      "local-custom-domain",
      "what-happens-google-com",
      "resilience-patterns",
      "gateway"
    ],
    "mentions": [
      "kubernetes-ingress",
      "nginx-basics",
      "nginx-https-performance",
      "http-versions",
      "http-methods"
    ]
  },
  "realtime-communication": {
    "links": [
      "http-versions",
      "cors",
      "resilience-patterns"
    ],
    "mentions": [
      "nginx-reverse-proxy",
      "json-crud-http",
      "proxy-reverse-proxy",
      "base64",
      "redis-basics",
      "http-status-codes"
    ]
  },
  "browser-fetch": {
    "links": [
      "http-status-codes",
      "cors",
      "cookie-session-login",
      "http-methods",
      "resilience-patterns",
      "rest-api-design",
      "http-caching-cdn"
    ],
    "mentions": [
      "html-form-http",
      "client-data-cache",
      "json-crud-http",
      "frontend-browser-cache",
      "dns"
    ]
  },
  "rest-api-design": {
    "links": [
      "http-methods",
      "http-status-codes",
      "http-caching-cdn",
      "resilience-patterns",
      "gateway",
      "microservices"
    ],
    "mentions": [
      "base64",
      "db-index",
      "http-message",
      "http-versions",
      "redis-basics",
      "sql-query-tuning"
    ]
  },
  "http-status-codes": {
    "links": [
      "http-message",
      "http-methods",
      "http-caching-cdn",
      "gateway",
      "resilience-patterns"
    ],
    "mentions": [
      "html-form-http",
      "client-data-cache",
      "https-tls",
      "rest-api-design",
      "proxy-reverse-proxy",
      "token-login",
      "http-versions",
      "what-happens-google-com",
      "dns"
    ]
  },
  "http-versions": {
    "links": [
      "what-happens-google-com",
      "http-message",
      "http-status-codes",
      "code-splitting"
    ],
    "mentions": [
      "https-tls",
      "http-methods",
      "dns"
    ]
  },
  "event-loop": {
    "links": [],
    "mentions": [
      "core-web-vitals"
    ]
  },
  "js-memory-leak": {
    "links": [],
    "mentions": [
      "client-data-cache",
      "redis-memory-eviction",
      "event-loop",
      "dns"
    ]
  },
  "micro-frontends": {
    "links": [],
    "mentions": [
      "microservices"
    ]
  },
  "ab-testing": {
    "links": [],
    "mentions": [
      "rendering-strategies",
      "db-modeling-normalization",
      "core-web-vitals"
    ]
  },
  "core-web-vitals": {
    "links": [
      "what-happens-google-com",
      "code-splitting"
    ],
    "mentions": [
      "ab-testing",
      "event-loop",
      "cors",
      "dns"
    ]
  },
  "code-splitting": {
    "links": [
      "core-web-vitals"
    ],
    "mentions": [
      "http-versions",
      "rendering-strategies"
    ]
  },
  "mvc-pattern": {
    "links": [],
    "mentions": [
      "client-data-cache",
      "http-status-codes",
      "gateway"
    ]
  },
  "http-caching-cdn": {
    "links": [
      "what-happens-google-com"
    ],
    "mentions": [
      "http-message",
      "frontend-browser-cache",
      "http-versions",
      "redis-basics",
      "cookie-session-login",
      "cors",
      "dns"
    ]
  },
  "elasticsearch-inverted-index": {
    "links": [
      "vector-db"
    ],
    "mentions": [
      "mongodb-document-model",
      "db-modeling-normalization"
    ]
  },
  "mongodb-document-model": {
    "links": [],
    "mentions": [
      "db-type-relational",
      "db-index",
      "db-replication-sharding",
      "db-modeling-normalization"
    ]
  },
  "react-rerender": {
    "links": [
      "rendering-strategies"
    ],
    "mentions": [
      "core-web-vitals",
      "client-data-cache"
    ]
  },
  "rendering-strategies": {
    "links": [
      "react-rerender"
    ],
    "mentions": [
      "http-caching-cdn",
      "http-status-codes",
      "core-web-vitals"
    ]
  },
  "microservices": {
    "links": [
      "resilience-patterns",
      "gateway"
    ],
    "mentions": [
      "db-architecture-by-scale",
      "db-type-columnar-olap",
      "client-data-cache",
      "http-versions",
      "js-memory-leak",
      "http-methods"
    ]
  },
  "resilience-patterns": {
    "links": [
      "gateway"
    ],
    "mentions": [
      "client-data-cache",
      "http-methods"
    ]
  },
  "dns": {
    "links": [
      "what-happens-google-com",
      "hosts-file"
    ],
    "mentions": [
      "http-versions"
    ]
  },
  "hosts-file": {
    "links": [
      "dns"
    ],
    "mentions": [
      "proxy-reverse-proxy",
      "local-custom-domain",
      "http-versions",
      "what-happens-google-com"
    ]
  },
  "kubernetes-ingress": {
    "links": [
      "gateway"
    ],
    "mentions": [
      "proxy-reverse-proxy",
      "iptables-nat",
      "docker-container-basics",
      "https-tls",
      "http-status-codes",
      "what-happens-google-com",
      "cors",
      "dns"
    ]
  },
  "gateway": {
    "links": [
      "kubernetes-ingress"
    ],
    "mentions": [
      "docker-container-basics",
      "proxy-reverse-proxy",
      "token-login",
      "redis-basics",
      "what-happens-google-com",
      "https-tls",
      "dns"
    ]
  },
  "cors": {
    "links": [
      "local-custom-domain",
      "cookie-session-login"
    ],
    "mentions": [
      "json-crud-http",
      "http-caching-cdn"
    ]
  },
  "local-custom-domain": {
    "links": [
      "cors",
      "hosts-file"
    ],
    "mentions": [
      "proxy-reverse-proxy",
      "nginx-basics",
      "http-versions",
      "what-happens-google-com",
      "cookie-session-login",
      "oauth",
      "dns"
    ]
  },
  "pythagorean-theorem": {
    "links": [],
    "mentions": [
      "vector-db"
    ]
  },
  "what-happens-google-com": {
    "links": [],
    "mentions": [
      "http-caching-cdn",
      "nginx-basics",
      "dns",
      "https-tls",
      "hosts-file",
      "http-versions"
    ]
  },
  "cookie-session-login": {
    "links": [
      "token-login"
    ],
    "mentions": [
      "html-form-http",
      "redis-basics",
      "what-happens-google-com"
    ]
  },
  "token-login": {
    "links": [
      "cookie-session-login",
      "oauth"
    ],
    "mentions": [
      "base64"
    ]
  },
  "oauth": {
    "links": [],
    "mentions": [
      "token-login",
      "cookie-session-login"
    ]
  },
  "vector-db": {
    "links": [],
    "mentions": [
      "pythagorean-theorem",
      "db-modeling-normalization"
    ]
  }
};
