// 자동 생성 파일이다. 직접 고치지 말고 `pnpm content:index`를 실행한다 (scripts/content-index.cjs).
import type { PostRelations } from "./types";

export const POST_RELATIONS: Record<string, PostRelations> = {
  "redis-cluster": {
    "links": [
      "redis-replication-sentinel",
      "redis-basics"
    ],
    "mentions": []
  },
  "redis-replication-sentinel": {
    "links": [
      "redis-persistence-ha",
      "redis-basics",
      "redis-cluster",
      "redis-memory-eviction"
    ],
    "mentions": []
  },
  "sqld-set-operators": {
    "links": [
      "sqld-subquery-set-operators",
      "sqld-correlated-subquery",
      "sqld-single-row-functions"
    ],
    "mentions": []
  },
  "sqld-correlated-subquery": {
    "links": [
      "sqld-subquery-set-operators",
      "sqld-single-row-functions",
      "db-index",
      "sqld-window-functions"
    ],
    "mentions": [
      "sqld-group-by-having"
    ]
  },
  "sqld-null-functions": {
    "links": [
      "sqld-single-row-functions",
      "sqld-type-conversion",
      "sqld-subquery-set-operators",
      "sqld-group-by-having",
      "sql-select-where-null"
    ],
    "mentions": [
      "postgres-getting-started"
    ]
  },
  "sqld-type-conversion": {
    "links": [
      "sqld-single-row-functions",
      "db-index"
    ],
    "mentions": []
  },
  "git-merge-conflict": {
    "links": [
      "git-branch-merge",
      "git-rebase"
    ],
    "mentions": [
      "git-staging-area"
    ]
  },
  "git-stash-reflog": {
    "links": [
      "git-undo",
      "git-troubleshooting"
    ],
    "mentions": [
      "git-tips-advanced",
      "git-staging-area"
    ]
  },
  "git-repo-errors": {
    "links": [
      "git-internals-basics",
      "git-troubleshooting",
      "git-tips-advanced",
      "git-ignore-config"
    ],
    "mentions": [
      "git-branch-merge",
      "git-remote-collaboration"
    ]
  },
  "git-large-files-secrets": {
    "links": [
      "git-internals-basics",
      "git-troubleshooting",
      "git-undo",
      "git-ignore-config"
    ],
    "mentions": [
      "git-staging-area",
      "db-modeling-normalization"
    ]
  },
  "git-ignore-config": {
    "links": [
      "git-staging-area",
      "git-undo",
      "git-troubleshooting",
      "git-branch-merge"
    ],
    "mentions": [
      "db-modeling-normalization"
    ]
  },
  "git-staging-area": {
    "links": [
      "git-internals-basics",
      "git-remote-collaboration",
      "git-ignore-config",
      "git-tips-advanced"
    ],
    "mentions": [
      "git-stash-reflog",
      "git-merge-conflict"
    ]
  },
  "packet-capture-tcpdump": {
    "links": [
      "network-troubleshooting-by-layer",
      "layer-link-ethernet-arp",
      "tcp-connection-lifecycle",
      "network-layers-overview",
      "iptables-nat",
      "https-tls",
      "osi-in-practice"
    ],
    "mentions": [
      "nginx-reverse-proxy",
      "docker-container-basics",
      "ports-and-sockets",
      "what-happens-google-com",
      "udp-and-quic",
      "dns"
    ]
  },
  "network-troubleshooting-by-layer": {
    "links": [
      "osi-in-practice",
      "docker-network-volume",
      "layer-link-ethernet-arp",
      "layer-ip-addressing",
      "layer-ip-routing-icmp",
      "layer-mtu-fragmentation",
      "hosts-file",
      "ports-and-sockets",
      "packet-capture-tcpdump",
      "iptables-basics",
      "https-tls",
      "proxy-reverse-proxy"
    ],
    "mentions": [
      "what-happens-google-com",
      "docker-container-basics",
      "http-status-codes",
      "dns"
    ]
  },
  "osi-in-practice": {
    "links": [
      "network-layers-overview",
      "http-status-codes",
      "nginx-reverse-proxy",
      "iptables-basics",
      "dns",
      "layer-link-ethernet-arp",
      "proxy-reverse-proxy",
      "tcp-connection-lifecycle",
      "ports-and-sockets",
      "resilience-patterns",
      "https-tls",
      "upper-layers-session-presentation-app",
      "iptables-nat",
      "kubernetes-ingress",
      "gateway",
      "network-troubleshooting-by-layer",
      "packet-capture-tcpdump"
    ],
    "mentions": [
      "docker-container-basics",
      "realtime-communication",
      "http-versions",
      "what-happens-google-com",
      "layer-ip-routing-icmp",
      "udp-and-quic"
    ]
  },
  "db-keys-denormalization": {
    "links": [
      "db-modeling-normalization",
      "db-transaction-isolation"
    ],
    "mentions": [
      "postgres-architecture",
      "postgres-advanced-sql",
      "db-index",
      "db-sharding",
      "db-index-design",
      "db-types-overview",
      "db-partitioning"
    ]
  },
  "db-locking-deadlock": {
    "links": [
      "db-transaction-isolation",
      "microservices"
    ],
    "mentions": [
      "sql-basics",
      "postgres-getting-started"
    ]
  },
  "sql-batch-timeout-pool": {
    "links": [
      "sql-query-tuning",
      "sql-query-rewrite",
      "db-index",
      "sql-insert-update-delete"
    ],
    "mentions": [
      "postgres-mvcc-vacuum",
      "db-architecture-by-scale",
      "postgres-getting-started"
    ]
  },
  "sql-query-rewrite": {
    "links": [
      "sql-query-tuning",
      "db-index",
      "sql-batch-timeout-pool"
    ],
    "mentions": [
      "rest-api-design",
      "db-index-design",
      "postgres-architecture",
      "db-transaction-isolation"
    ]
  },
  "db-sharding": {
    "links": [
      "db-replication-sharding",
      "db-partitioning",
      "microservices",
      "mongodb-document-model",
      "db-architecture-by-scale",
      "db-index"
    ],
    "mentions": [
      "redis-cluster",
      "db-type-newsql",
      "db-type-wide-column",
      "db-type-key-value",
      "redis-basics"
    ]
  },
  "db-partitioning": {
    "links": [
      "db-replication-sharding",
      "db-sharding"
    ],
    "mentions": []
  },
  "db-index-pitfalls": {
    "links": [
      "db-index",
      "db-index-design",
      "sql-query-tuning"
    ],
    "mentions": [
      "postgres-mvcc-vacuum",
      "db-replication-sharding",
      "sql-basics"
    ]
  },
  "db-index-design": {
    "links": [
      "db-index",
      "db-index-pitfalls"
    ],
    "mentions": []
  },
  "sql-insert-update-delete": {
    "links": [
      "sql-basics",
      "sql-select-where-null",
      "db-transaction-isolation"
    ],
    "mentions": [
      "postgres-advanced-sql",
      "postgres-operations",
      "postgres-getting-started"
    ]
  },
  "sql-select-where-null": {
    "links": [
      "sql-basics",
      "sql-query-tuning",
      "sql-insert-update-delete"
    ],
    "mentions": [
      "db-index",
      "sqld-group-by-having",
      "postgres-getting-started"
    ]
  },
  "tcp-connection-lifecycle": {
    "links": [
      "network-layers-overview",
      "ports-and-sockets",
      "layer-mtu-fragmentation",
      "tcp-reliability-congestion",
      "packet-capture-tcpdump"
    ],
    "mentions": [
      "what-happens-google-com",
      "browser-fetch",
      "iptables-basics",
      "sql-batch-timeout-pool"
    ]
  },
  "tcp-reliability-congestion": {
    "links": [
      "tcp-connection-lifecycle",
      "http-versions",
      "network-troubleshooting-by-layer",
      "layer-mtu-fragmentation",
      "udp-and-quic"
    ],
    "mentions": [
      "iptables-basics",
      "packet-capture-tcpdump",
      "redis-basics",
      "layer-ip-routing-icmp"
    ]
  },
  "udp-and-quic": {
    "links": [
      "tcp-reliability-congestion",
      "http-versions",
      "tcp-connection-lifecycle",
      "dns",
      "layer-mtu-fragmentation",
      "iptables-nat",
      "ports-and-sockets"
    ],
    "mentions": [
      "iptables-basics",
      "packet-capture-tcpdump",
      "https-tls",
      "layer-ip-routing-icmp"
    ]
  },
  "ports-and-sockets": {
    "links": [
      "tcp-connection-lifecycle",
      "docker-network-volume",
      "iptables-nat",
      "udp-and-quic",
      "network-troubleshooting-by-layer",
      "upper-layers-session-presentation-app"
    ],
    "mentions": [
      "elasticsearch-inverted-index",
      "iptables-basics",
      "postgres-getting-started",
      "sql-batch-timeout-pool",
      "redis-basics",
      "what-happens-google-com",
      "layer-ip-routing-icmp",
      "dns"
    ]
  },
  "upper-layers-session-presentation-app": {
    "links": [
      "network-layers-overview",
      "https-tls",
      "cookie-session-login",
      "json-crud-http",
      "base64",
      "osi-in-practice",
      "http-message",
      "dns",
      "network-troubleshooting-by-layer"
    ],
    "mentions": [
      "packet-capture-tcpdump",
      "http-versions",
      "what-happens-google-com",
      "http-caching-cdn",
      "udp-and-quic"
    ]
  },
  "network-layers-overview": {
    "links": [
      "layer-ip-routing-icmp",
      "layer-link-ethernet-arp",
      "layer-ip-addressing",
      "ports-and-sockets",
      "upper-layers-session-presentation-app",
      "iptables-nat",
      "osi-in-practice",
      "http-status-codes",
      "nginx-reverse-proxy",
      "network-troubleshooting-by-layer",
      "packet-capture-tcpdump",
      "layer-mtu-fragmentation",
      "tcp-connection-lifecycle",
      "tcp-reliability-congestion",
      "udp-and-quic",
      "what-happens-google-com"
    ],
    "mentions": [
      "proxy-reverse-proxy",
      "docker-container-basics",
      "gateway",
      "iptables-basics",
      "http-versions",
      "dns"
    ]
  },
  "layer-link-ethernet-arp": {
    "links": [
      "network-layers-overview",
      "layer-mtu-fragmentation",
      "docker-network-volume",
      "layer-ip-routing-icmp",
      "layer-ip-addressing",
      "iptables-basics"
    ],
    "mentions": [
      "docker-container-basics",
      "what-happens-google-com"
    ]
  },
  "layer-ip-addressing": {
    "links": [
      "network-layers-overview",
      "layer-link-ethernet-arp",
      "layer-ip-routing-icmp",
      "iptables-nat",
      "ports-and-sockets",
      "proxy-reverse-proxy"
    ],
    "mentions": [
      "docker-container-basics",
      "dns"
    ]
  },
  "layer-ip-routing-icmp": {
    "links": [
      "layer-ip-addressing",
      "network-layers-overview",
      "layer-mtu-fragmentation",
      "iptables-basics",
      "dns"
    ],
    "mentions": [
      "docker-container-basics",
      "layer-link-ethernet-arp",
      "iptables-nat",
      "udp-and-quic"
    ]
  },
  "layer-mtu-fragmentation": {
    "links": [
      "layer-ip-routing-icmp",
      "network-layers-overview",
      "iptables-basics",
      "packet-capture-tcpdump",
      "network-troubleshooting-by-layer",
      "tcp-connection-lifecycle"
    ],
    "mentions": [
      "https-tls",
      "layer-link-ethernet-arp",
      "http-versions",
      "http-status-codes",
      "udp-and-quic",
      "dns"
    ]
  },
  "db-type-time-series": {
    "links": [
      "db-types-overview",
      "db-index",
      "db-type-columnar-olap",
      "db-type-relational"
    ],
    "mentions": [
      "db-partitioning",
      "sqld-group-by-having",
      "db-replication-sharding",
      "http-status-codes",
      "db-index-design"
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
      "postgres-advanced-sql",
      "db-sharding",
      "db-replication-sharding",
      "db-index-design"
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
      "sql-basics",
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
      "sql-insert-update-delete",
      "sqld-window-functions",
      "db-index-pitfalls",
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
      "redis-replication-sentinel"
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
    "mentions": [
      "db-index"
    ]
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
      "db-partitioning",
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
      "db-sharding",
      "db-type-relational",
      "db-index-pitfalls",
      "db-partitioning",
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
      "db-index",
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
    "mentions": [
      "db-index-design"
    ]
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
      "db-index",
      "db-architecture-by-scale",
      "db-type-relational",
      "postgres-getting-started",
      "sql-query-rewrite",
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
      "sql-query-rewrite"
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
      "sql-select-where-null",
      "db-index",
      "json-crud-http",
      "postgres-getting-started",
      "sql-basics",
      "db-locking-deadlock",
      "db-index-design",
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
    "mentions": [
      "db-index-design"
    ]
  },
  "postgres-getting-started": {
    "links": [
      "sql-basics",
      "postgres-data-types",
      "postgres-roles-security"
    ],
    "mentions": [
      "postgres-operations",
      "db-type-relational",
      "sql-batch-timeout-pool",
      "layer-ip-addressing"
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
      "sql-select-where-null",
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
      "sql-insert-update-delete",
      "db-index-design",
      "sql-batch-timeout-pool",
      "layer-ip-addressing",
      "dns"
    ]
  },
  "git-internals-basics": {
    "links": [
      "git-staging-area",
      "git-ignore-config",
      "git-branch-merge",
      "git-troubleshooting",
      "git-stash-reflog"
    ],
    "mentions": [
      "git-tips-advanced",
      "git-branching-strategy",
      "git-large-files-secrets"
    ]
  },
  "git-branch-merge": {
    "links": [
      "git-merge-conflict",
      "git-internals-basics",
      "git-staging-area",
      "git-stash-reflog",
      "git-branching-strategy",
      "git-remote-collaboration"
    ],
    "mentions": []
  },
  "git-rebase": {
    "links": [
      "git-branch-merge",
      "git-branching-strategy",
      "git-merge-conflict",
      "git-remote-collaboration",
      "git-stash-reflog",
      "git-undo"
    ],
    "mentions": [
      "git-tips-advanced",
      "git-staging-area"
    ]
  },
  "git-undo": {
    "links": [
      "git-stash-reflog",
      "git-staging-area",
      "git-troubleshooting"
    ],
    "mentions": [
      "git-large-files-secrets",
      "git-branch-merge"
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
      "git-stash-reflog",
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
      "git-large-files-secrets",
      "git-repo-errors",
      "git-undo",
      "git-rebase",
      "git-remote-collaboration",
      "git-tips-advanced"
    ],
    "mentions": [
      "git-branch-merge",
      "git-ignore-config",
      "git-staging-area",
      "git-stash-reflog"
    ]
  },
  "git-tips-advanced": {
    "links": [
      "git-branching-strategy",
      "git-troubleshooting",
      "git-merge-conflict"
    ],
    "mentions": [
      "git-branch-merge",
      "dockerfile-image-layers"
    ]
  },
  "sqld-subquery-set-operators": {
    "links": [
      "sqld-correlated-subquery",
      "sqld-set-operators",
      "sqld-single-row-functions",
      "sqld-joins"
    ],
    "mentions": [
      "sqld-group-by-having",
      "sql-select-where-null"
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
      "sqld-group-by-having",
      "sqld-correlated-subquery"
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
      "sqld-null-functions"
    ]
  },
  "sqld-top-n-hierarchical-pivot": {
    "links": [
      "sqld-subquery-set-operators",
      "sqld-window-functions"
    ],
    "mentions": [
      "db-index",
      "sqld-group-by-having"
    ]
  },
  "sql-basics": {
    "links": [
      "sql-select-where-null",
      "sql-insert-update-delete",
      "db-index",
      "db-index-pitfalls",
      "sqld-data-modeling"
    ],
    "mentions": [
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
      "db-keys-denormalization",
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
      "db-keys-denormalization",
      "http-status-codes",
      "sql-basics"
    ]
  },
  "sqld-single-row-functions": {
    "links": [
      "sqld-null-functions",
      "sqld-type-conversion",
      "sqld-group-by-having"
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
    "mentions": [
      "sqld-null-functions"
    ]
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
      "db-keys-denormalization",
      "db-index",
      "db-transaction-isolation"
    ],
    "mentions": [
      "json-crud-http",
      "db-index-design",
      "sqld-entity-attribute-relationship"
    ]
  },
  "db-transaction-isolation": {
    "links": [
      "db-locking-deadlock"
    ],
    "mentions": [
      "postgres-mvcc-vacuum",
      "sql-basics",
      "postgres-getting-started"
    ]
  },
  "db-replication-sharding": {
    "links": [
      "db-partitioning",
      "db-sharding",
      "db-index",
      "sql-query-tuning",
      "caching-strategies"
    ],
    "mentions": [
      "db-consistency-cap",
      "db-architecture-by-scale",
      "sql-batch-timeout-pool",
      "db-type-key-value",
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
      "db-sharding",
      "db-type-wide-column",
      "db-type-key-value",
      "db-type-relational",
      "db-type-graph",
      "http-caching-cdn",
      "sql-batch-timeout-pool",
      "postgres-operations",
      "postgres-jsonb-search",
      "db-partitioning",
      "sql-basics"
    ]
  },
  "db-index": {
    "links": [
      "db-index-pitfalls",
      "sql-query-tuning",
      "db-index-design"
    ],
    "mentions": [
      "postgres-mvcc-vacuum",
      "db-sharding",
      "db-transaction-isolation",
      "sql-basics"
    ]
  },
  "sql-query-tuning": {
    "links": [
      "sql-query-rewrite",
      "sql-batch-timeout-pool",
      "db-index"
    ],
    "mentions": []
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
      "tcp-connection-lifecycle",
      "browser-fetch",
      "osi-in-practice",
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
      "http-versions",
      "iptables-basics",
      "network-troubleshooting-by-layer"
    ],
    "mentions": [
      "cookie-session-login",
      "what-happens-google-com",
      "udp-and-quic",
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
      "layer-mtu-fragmentation",
      "dns"
    ]
  },
  "redis-persistence-ha": {
    "links": [
      "redis-replication-sentinel",
      "redis-cluster",
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
      "osi-in-practice",
      "iptables-basics",
      "http-versions",
      "ports-and-sockets",
      "layer-ip-addressing",
      "http-status-codes",
      "what-happens-google-com",
      "udp-and-quic",
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
      "redis-cluster",
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
      "redis-cluster",
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
      "upper-layers-session-presentation-app",
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
      "layer-link-ethernet-arp",
      "redis-basics",
      "udp-and-quic",
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
      "rest-api-design",
      "udp-and-quic"
    ]
  },
  "dockerfile-image-layers": {
    "links": [
      "docker-container-basics",
      "docker-network-volume"
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
      "upper-layers-session-presentation-app",
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
      "cookie-session-login",
      "nginx-reverse-proxy"
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
      "tcp-connection-lifecycle",
      "layer-mtu-fragmentation",
      "what-happens-google-com",
      "layer-ip-routing-icmp",
      "udp-and-quic",
      "layer-link-ethernet-arp",
      "dns"
    ]
  },
  "iptables-nat": {
    "links": [
      "iptables-basics",
      "kubernetes-ingress"
    ],
    "mentions": [
      "osi-in-practice",
      "packet-capture-tcpdump",
      "proxy-reverse-proxy",
      "http-versions",
      "sql-batch-timeout-pool",
      "what-happens-google-com",
      "udp-and-quic",
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
      "http-versions",
      "packet-capture-tcpdump",
      "network-troubleshooting-by-layer"
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
      "http-status-codes",
      "nginx-reverse-proxy"
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
      "udp-and-quic",
      "http-methods"
    ]
  },
  "realtime-communication": {
    "links": [
      "http-versions",
      "cors",
      "resilience-patterns",
      "nginx-reverse-proxy"
    ],
    "mentions": [
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
      "http-caching-cdn",
      "network-troubleshooting-by-layer"
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
      "microservices",
      "nginx-reverse-proxy",
      "network-troubleshooting-by-layer"
    ],
    "mentions": [
      "base64",
      "db-locking-deadlock",
      "db-index-design",
      "http-message",
      "http-versions",
      "redis-basics",
      "sql-query-rewrite"
    ]
  },
  "http-status-codes": {
    "links": [
      "http-message",
      "http-methods",
      "http-caching-cdn",
      "gateway",
      "nginx-reverse-proxy",
      "network-troubleshooting-by-layer",
      "resilience-patterns"
    ],
    "mentions": [
      "html-form-http",
      "client-data-cache",
      "https-tls",
      "rest-api-design",
      "proxy-reverse-proxy",
      "token-login",
      "db-locking-deadlock",
      "http-versions",
      "osi-in-practice",
      "what-happens-google-com",
      "dns"
    ]
  },
  "http-versions": {
    "links": [
      "what-happens-google-com",
      "http-message",
      "http-status-codes",
      "tcp-connection-lifecycle",
      "nginx-reverse-proxy",
      "code-splitting"
    ],
    "mentions": [
      "https-tls",
      "browser-fetch",
      "http-methods",
      "tcp-reliability-congestion",
      "ports-and-sockets",
      "udp-and-quic",
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
      "layer-mtu-fragmentation",
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
    "links": [
      "db-locking-deadlock"
    ],
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
      "db-index",
      "mongodb-document-model",
      "db-modeling-normalization"
    ]
  },
  "mongodb-document-model": {
    "links": [],
    "mentions": [
      "db-index-design",
      "db-type-relational",
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
      "db-index-design",
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
      "osi-in-practice",
      "sql-batch-timeout-pool",
      "http-methods"
    ]
  },
  "dns": {
    "links": [
      "what-happens-google-com",
      "hosts-file"
    ],
    "mentions": [
      "http-versions",
      "sql-batch-timeout-pool",
      "udp-and-quic"
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
      "osi-in-practice",
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
      "kubernetes-ingress",
      "resilience-patterns"
    ],
    "mentions": [
      "osi-in-practice",
      "docker-container-basics",
      "proxy-reverse-proxy",
      "token-login",
      "redis-basics",
      "what-happens-google-com",
      "https-tls",
      "udp-and-quic",
      "http-methods",
      "dns"
    ]
  },
  "cors": {
    "links": [
      "local-custom-domain",
      "cookie-session-login",
      "http-caching-cdn"
    ],
    "mentions": [
      "json-crud-http",
      "http-status-codes"
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
    "links": [
      "network-troubleshooting-by-layer",
      "osi-in-practice"
    ],
    "mentions": [
      "http-caching-cdn",
      "nginx-basics",
      "dns",
      "https-tls",
      "hosts-file",
      "http-versions",
      "http-status-codes",
      "udp-and-quic"
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
