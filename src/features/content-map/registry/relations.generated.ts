// 자동 생성 파일이다. 직접 고치지 말고 `pnpm content:index`를 실행한다 (scripts/content-index.cjs).
import type { PostRelations } from "./types";

export const POST_RELATIONS: Record<string, PostRelations> = {
  "java-jvm-memory-gc": {
    "links": [
      "garbage-collection",
      "deadlocks",
      "go-concurrency-basics",
      "k8s-pod-resources",
      "resilience-patterns"
    ],
    "mentions": [
      "osi-in-practice",
      "sql-batch-timeout-pool",
      "connection-pool"
    ]
  },
  "go-concurrency-basics": {
    "links": [
      "race-conditions",
      "thread-safety",
      "deadlocks",
      "garbage-collection",
      "java-jvm-memory-gc",
      "timeouts",
      "event-loop",
      "nodejs-server-runtime"
    ],
    "mentions": [
      "k8s-pod-resources",
      "abort-controller",
      "tail-latency",
      "sql-batch-timeout-pool",
      "js-closures"
    ]
  },
  "release-cutover-hypercare": {
    "links": [
      "enterprise-system-integration",
      "global-rollout-localization",
      "sit-uat-testing",
      "rollback-strategy",
      "microservices-decomposition",
      "zero-downtime-migrations",
      "on-call",
      "blue-green-deployment",
      "feature-flags",
      "canary-release",
      "sli-slo",
      "alerting",
      "distributed-tracing",
      "structured-logging",
      "production-incidents",
      "postmortems"
    ],
    "mentions": [
      "http-status-codes",
      "dns"
    ]
  },
  "sit-uat-testing": {
    "links": [
      "enterprise-system-integration",
      "global-rollout-localization",
      "release-cutover-hypercare",
      "test-pyramid-unit-tests",
      "integration-tests-real-db",
      "api-versioning"
    ],
    "mentions": [
      "k8s-deploy-pipeline-eks",
      "http-status-codes",
      "webhooks"
    ]
  },
  "global-rollout-localization": {
    "links": [
      "enterprise-system-integration",
      "sit-uat-testing",
      "release-cutover-hypercare",
      "feature-flags",
      "cron-jobs",
      "hydration",
      "pattern-strategy"
    ],
    "mentions": [
      "k8s-deploy-pipeline-eks",
      "rendering-strategies",
      "db-modeling-normalization"
    ]
  },
  "enterprise-system-integration": {
    "links": [
      "global-rollout-localization",
      "sit-uat-testing",
      "release-cutover-hypercare",
      "webhooks",
      "batch-processing",
      "pattern-adapter",
      "hexagonal-architecture",
      "ddd-bounded-context",
      "idempotency-key",
      "timeouts",
      "message-delivery-semantics",
      "exponential-backoff-jitter",
      "circuit-breaker",
      "dead-letter-queue",
      "transactional-outbox",
      "sd-payment-reliability",
      "api-versioning"
    ],
    "mentions": [
      "http-status-codes"
    ]
  },
  "parallax-scrollytelling": {
    "links": [
      "scroll-driven-animations",
      "scroll-triggered-intersection-observer",
      "css-sticky-scroll-snap",
      "scroll-patterns-overview",
      "animation-performance"
    ],
    "mentions": [
      "dom-basics"
    ]
  },
  "scroll-triggered-intersection-observer": {
    "links": [
      "scroll-patterns-overview",
      "scroll-driven-animations",
      "parallax-scrollytelling",
      "dom-basics",
      "core-web-vitals",
      "debounce-throttle",
      "loading-patterns"
    ],
    "mentions": [
      "css-sticky-scroll-snap",
      "animation-performance",
      "pattern-proxy",
      "event-loop"
    ]
  },
  "scroll-driven-animations": {
    "links": [
      "scroll-patterns-overview",
      "css-sticky-scroll-snap",
      "scroll-triggered-intersection-observer",
      "parallax-scrollytelling",
      "animation-performance",
      "debounce-throttle"
    ],
    "mentions": [
      "pattern-proxy"
    ]
  },
  "css-sticky-scroll-snap": {
    "links": [
      "scroll-patterns-overview",
      "parallax-scrollytelling"
    ],
    "mentions": [
      "scroll-triggered-intersection-observer",
      "animation-performance"
    ]
  },
  "scroll-patterns-overview": {
    "links": [
      "css-sticky-scroll-snap",
      "scroll-triggered-intersection-observer",
      "scroll-driven-animations",
      "parallax-scrollytelling",
      "animation-patterns",
      "loading-patterns",
      "dom-basics",
      "event-propagation",
      "animation-performance",
      "debounce-throttle",
      "core-web-vitals"
    ],
    "mentions": []
  },
  "fastapi-basics": {
    "links": [
      "express-middleware",
      "nodejs-server-runtime",
      "hexagonal-architecture",
      "timeouts",
      "connection-pool",
      "k8s-pod-lifecycle"
    ],
    "mentions": [
      "autoscaling",
      "event-loop",
      "sql-batch-timeout-pool",
      "http-status-codes"
    ]
  },
  "express-middleware": {
    "links": [
      "pattern-chain-of-responsibility",
      "nodejs-server-runtime",
      "fastapi-basics",
      "cors",
      "rest-api-design",
      "k8s-pod-lifecycle",
      "linux-processes-signals"
    ],
    "mentions": [
      "js-promises",
      "iptables-nat",
      "k8s-architecture",
      "event-loop",
      "js-pure-functions",
      "osi-in-practice",
      "http-status-codes"
    ]
  },
  "nodejs-server-runtime": {
    "links": [
      "event-loop",
      "js-microtask-macrotask",
      "express-middleware",
      "fastapi-basics",
      "monolith-architecture",
      "thread-safety",
      "sd-load-balancer-stateless",
      "websocket-deep-dive",
      "k8s-pod-resources",
      "connection-pool"
    ],
    "mentions": [
      "load-balancer-basics",
      "realtime-communication",
      "js-memory-leak",
      "sd-start-single-server",
      "autoscaling",
      "race-conditions",
      "osi-in-practice",
      "sql-batch-timeout-pool",
      "redis-basics",
      "dns"
    ]
  },
  "rag-patterns-overview": {
    "links": [
      "rag-classic-pipeline",
      "rag-retrieval-quality",
      "graph-rag",
      "agentic-rag",
      "vector-db"
    ],
    "mentions": [
      "kafka-basics",
      "on-call"
    ]
  },
  "agentic-rag": {
    "links": [
      "graph-rag",
      "rag-classic-pipeline",
      "rag-retrieval-quality",
      "rag-patterns-overview",
      "distributed-tracing"
    ],
    "mentions": [
      "observability-basics",
      "kafka-basics",
      "vector-db",
      "on-call"
    ]
  },
  "graph-rag": {
    "links": [
      "rag-classic-pipeline",
      "rag-retrieval-quality",
      "agentic-rag",
      "rag-patterns-overview",
      "db-type-graph",
      "sql-cte-recursive"
    ],
    "mentions": [
      "sqld-top-n-hierarchical-pivot",
      "db-modeling-normalization",
      "vector-db",
      "on-call"
    ]
  },
  "integration-tests-real-db": {
    "links": [
      "test-pyramid-unit-tests",
      "acid-transactions",
      "db-transaction-isolation",
      "pattern-builder",
      "express-middleware",
      "hexagonal-architecture",
      "api-versioning"
    ],
    "mentions": [
      "github-actions-docker-ecr",
      "postgres-connections-pg-hba",
      "sql-insert-update-delete",
      "event-loop",
      "osi-in-practice",
      "db-index-design",
      "ports-and-sockets",
      "http-status-codes",
      "ipv6-basics",
      "postgres-getting-started"
    ]
  },
  "test-pyramid-unit-tests": {
    "links": [
      "integration-tests-real-db",
      "hexagonal-architecture",
      "js-pure-functions",
      "js-microtask-macrotask",
      "ci-cd-basics",
      "client-data-cache"
    ],
    "mentions": [
      "event-loop",
      "microservices",
      "db-type-embedded"
    ]
  },
  "first-page-from-power-on": {
    "links": [
      "what-happens-google-com",
      "networking-essentials-map",
      "packet-capture-tcpdump",
      "dhcp",
      "layer-link-ethernet-arp",
      "dns",
      "tcp-connection-lifecycle",
      "iptables-nat",
      "https-tls",
      "http-message",
      "latency-bandwidth-throughput",
      "http-status-codes",
      "network-troubleshooting-by-layer"
    ],
    "mentions": [
      "nginx-basics",
      "iptables-basics",
      "ipv6-basics",
      "layer-ip-addressing",
      "layer-ip-routing-icmp",
      "local-custom-domain",
      "webhooks",
      "security-groups-nacl",
      "udp-and-quic"
    ]
  },
  "youtube-url-to-video": {
    "links": [
      "what-happens-google-com",
      "first-page-from-power-on",
      "cdn-edge-anycast",
      "reverse-proxy-lb-api-gateway",
      "http-versions",
      "udp-and-quic",
      "https-tls",
      "rendering-csr-spa",
      "hydration",
      "sd-video-streaming-cost",
      "cors",
      "network-troubleshooting-by-layer",
      "packet-capture-tcpdump"
    ],
    "mentions": [
      "sd-video-upload-transcoding",
      "sd-multi-datacenter",
      "sd-start-single-server",
      "http-status-codes",
      "dns",
      "authn-vs-authz",
      "ipv6-basics"
    ]
  },
  "rag-retrieval-quality": {
    "links": [
      "rag-classic-pipeline",
      "vector-db",
      "elasticsearch-inverted-index",
      "graph-rag",
      "agentic-rag"
    ],
    "mentions": [
      "db-index-design",
      "kafka-basics",
      "db-modeling-normalization",
      "on-call"
    ]
  },
  "rag-classic-pipeline": {
    "links": [
      "vector-db",
      "rag-retrieval-quality",
      "graph-rag",
      "agentic-rag"
    ],
    "mentions": [
      "kafka-basics"
    ]
  },
  "caching-concepts-map": {
    "links": [
      "sd-cache-and-cdn-tier",
      "caching-strategies",
      "http-caching-cdn",
      "redis-memory-eviction",
      "cache-write-policies",
      "cache-invalidation",
      "edge-caching",
      "cdn-edge-anycast",
      "resilience-patterns"
    ],
    "mentions": [
      "exponential-backoff-jitter",
      "redis-cluster",
      "js-memoization",
      "redis-basics",
      "db-modeling-normalization",
      "dns"
    ]
  },
  "cache-write-policies": {
    "links": [
      "caching-strategies",
      "cache-invalidation",
      "caching-concepts-map",
      "postgres-mvcc-vacuum",
      "k8s-pod-lifecycle",
      "redis-persistence-ha",
      "transactional-outbox",
      "optimistic-locking",
      "db-consistency-cap"
    ],
    "mentions": [
      "message-delivery-semantics",
      "consistency-models",
      "redis-basics",
      "db-partitioning",
      "db-transaction-isolation",
      "dns"
    ]
  },
  "reverse-proxy-lb-api-gateway": {
    "links": [
      "proxy-reverse-proxy",
      "gateway",
      "nginx-reverse-proxy",
      "load-balancer-basics",
      "load-balancing-algorithms",
      "rate-limiting-in-practice",
      "https-tls",
      "distributed-tracing",
      "kubernetes-ingress",
      "k8s-gateway-api",
      "retries",
      "tail-latency",
      "rate-limiting-algorithms"
    ],
    "mentions": [
      "osi-in-practice",
      "rest-api-design",
      "service-mesh",
      "http-versions",
      "security-groups-nacl",
      "vpc-basics",
      "redis-basics",
      "http-status-codes",
      "what-happens-google-com",
      "high-availability",
      "grpc",
      "first-page-from-power-on",
      "udp-and-quic",
      "token-login"
    ]
  },
  "sql-study-path": {
    "links": [
      "sql-basics",
      "sql-select-where-null",
      "sql-filtering-operators",
      "sqld-null-functions",
      "sql-aggregation-pitfalls",
      "sqld-group-by-having",
      "sqld-rollup-cube-grouping-sets",
      "sql-joins-in-practice",
      "sqld-joins",
      "sqld-set-operators",
      "sql-subqueries-exists-lateral",
      "sqld-subquery-set-operators",
      "sqld-correlated-subquery",
      "sql-cte-recursive",
      "sql-window-functions-pg",
      "sqld-window-functions",
      "sqld-top-n-hierarchical-pivot",
      "sql-logical-order",
      "sql-interview-problems",
      "sql-case-when",
      "sql-views-materialized",
      "sql-insert-update-delete",
      "sql-query-tuning",
      "sql-query-rewrite",
      "sql-batch-timeout-pool",
      "sql-injection"
    ],
    "mentions": [
      "postgres-getting-started"
    ]
  },
  "architecture-patterns-overview": {
    "links": [
      "monolith-architecture",
      "modular-monolith",
      "microservices",
      "microservices-decomposition",
      "serverless-architecture",
      "serverless-limits",
      "layered-architecture",
      "hexagonal-architecture",
      "clean-architecture",
      "ddd-bounded-context",
      "event-driven-architecture",
      "cqrs",
      "event-sourcing",
      "transactional-outbox",
      "saga-pattern",
      "cold-starts"
    ],
    "mentions": [
      "k8s-deploy-pipeline-eks",
      "js-memory-leak",
      "schema-versioning",
      "db-modeling-normalization",
      "on-call",
      "webhooks"
    ]
  },
  "system-design-study-path": {
    "links": [
      "system-design-concepts-map",
      "sd-start-single-server",
      "sd-split-web-and-db",
      "sd-load-balancer-stateless",
      "sd-db-replication-intro",
      "sd-cache-and-cdn-tier",
      "sd-multi-datacenter",
      "sd-queue-logging-automation",
      "sd-sharding-intro",
      "sd-latency-numbers",
      "sd-capacity-estimation",
      "sd-interview-framework",
      "sd-rate-limiter-design",
      "rate-limiting-algorithms",
      "rate-limiting-in-practice",
      "sd-url-shortener-api-redirect",
      "sd-url-shortener-key-generation",
      "consistent-hashing",
      "db-replication-sharding",
      "optimistic-locking",
      "merkle-tree",
      "bloom-filter",
      "clock-skew",
      "kafka-basics",
      "message-delivery-semantics",
      "websocket-deep-dive",
      "pub-sub",
      "long-polling",
      "geohash",
      "quadtree",
      "idempotency-key",
      "retries",
      "distributed-transactions-2pc",
      "saga-pattern",
      "event-sourcing",
      "cqrs",
      "sd-kv-store-partition-replication",
      "sd-kv-store-versioning",
      "sd-kv-store-failure-handling",
      "sd-kv-store-write-read-path",
      "sd-unique-id-generator",
      "sd-web-crawler-architecture",
      "sd-web-crawler-politeness-dedup",
      "sd-notification-system",
      "sd-notification-reliability",
      "sd-news-feed-publishing",
      "sd-news-feed-retrieval",
      "sd-chat-connections",
      "sd-chat-message-storage",
      "sd-chat-presence",
      "sd-autocomplete-trie",
      "sd-autocomplete-data-pipeline",
      "sd-video-upload-transcoding",
      "sd-video-streaming-cost",
      "sd-file-sync-block-upload",
      "sd-file-sync-conflicts",
      "sd-proximity-service",
      "sd-nearby-friends",
      "sd-maps-tiles-routing",
      "sd-maps-location-eta",
      "sd-mq-storage-partitions",
      "sd-mq-consumer-groups",
      "sd-mq-replication",
      "sd-metrics-collection",
      "sd-metrics-storage-alerting",
      "sd-ad-click-stream-windows",
      "sd-ad-click-exactly-once",
      "metrics-types",
      "prometheus-basics",
      "sd-hotel-double-booking",
      "sd-hotel-inventory-scaling",
      "sd-email-protocols",
      "sd-email-storage-search",
      "sd-object-storage-architecture",
      "sd-object-storage-durability",
      "sd-object-storage-versioning-multipart",
      "sd-leaderboard-sorted-set",
      "sd-leaderboard-scaling",
      "sd-payment-flow",
      "sd-payment-reliability",
      "sd-wallet-transfer",
      "sd-wallet-event-sourcing",
      "sd-stock-exchange-order-book",
      "sd-stock-exchange-low-latency"
    ],
    "mentions": [
      "db-sharding",
      "realtime-communication",
      "high-availability",
      "db-type-key-value",
      "db-type-wide-column",
      "event-driven-architecture",
      "db-locking-deadlock",
      "redis-basics",
      "db-partitioning",
      "mongodb-document-model",
      "http-methods",
      "rendering-strategies",
      "dns",
      "webhooks"
    ]
  },
  "sd-payment-reliability": {
    "links": [
      "sd-payment-flow",
      "sd-wallet-transfer",
      "idempotency-key",
      "exponential-backoff-jitter",
      "dead-letter-queue",
      "message-delivery-semantics",
      "webhooks",
      "sd-db-replication-intro",
      "distributed-transactions-2pc",
      "saga-pattern"
    ],
    "mentions": [
      "db-replication-sharding",
      "resilience-patterns",
      "http-methods"
    ]
  },
  "sd-payment-flow": {
    "links": [
      "sd-leaderboard-scaling",
      "sd-payment-reliability",
      "sd-wallet-transfer",
      "webhooks",
      "acid-transactions",
      "distributed-transactions-2pc",
      "saga-pattern",
      "transactional-outbox"
    ],
    "mentions": [
      "resilience-patterns",
      "http-methods"
    ]
  },
  "sd-leaderboard-scaling": {
    "links": [
      "sd-leaderboard-sorted-set",
      "sd-payment-flow",
      "redis-cluster",
      "sd-sharding-intro",
      "sd-news-feed-retrieval"
    ],
    "mentions": [
      "db-type-wide-column",
      "db-type-key-value",
      "js-array-transform",
      "sd-start-single-server",
      "sd-mq-storage-partitions",
      "redis-basics"
    ]
  },
  "sd-leaderboard-sorted-set": {
    "links": [
      "sd-object-storage-versioning-multipart",
      "sd-leaderboard-scaling",
      "sd-payment-flow",
      "redis-basics",
      "sd-news-feed-retrieval",
      "idempotency-key",
      "transactional-outbox",
      "redis-persistence-ha"
    ],
    "mentions": [
      "sd-start-single-server",
      "sql-query-rewrite"
    ]
  },
  "sd-stock-exchange-low-latency": {
    "links": [
      "sd-stock-exchange-order-book",
      "system-design-study-path",
      "sd-wallet-event-sourcing",
      "sd-latency-numbers",
      "sd-mq-storage-partitions",
      "tail-latency",
      "message-delivery-semantics",
      "garbage-collection",
      "leader-election",
      "raft-consensus",
      "udp-and-quic",
      "sd-rate-limiter-design"
    ],
    "mentions": [
      "js-memory-leak",
      "sd-start-single-server",
      "event-loop",
      "kafka-basics"
    ]
  },
  "sd-stock-exchange-order-book": {
    "links": [
      "sd-wallet-event-sourcing",
      "sd-stock-exchange-low-latency",
      "system-design-study-path",
      "percentile-latency"
    ],
    "mentions": []
  },
  "sd-wallet-event-sourcing": {
    "links": [
      "sd-wallet-transfer",
      "sd-stock-exchange-order-book",
      "event-sourcing",
      "raft-consensus",
      "cqrs",
      "sd-stock-exchange-low-latency"
    ],
    "mentions": [
      "k8s-deploy-pipeline-eks",
      "db-type-embedded",
      "db-type-key-value",
      "event-driven-architecture",
      "db-type-wide-column",
      "sd-kv-store-write-read-path"
    ]
  },
  "sd-wallet-transfer": {
    "links": [
      "sd-payment-reliability",
      "sd-payment-flow",
      "sd-wallet-event-sourcing",
      "sd-stock-exchange-order-book",
      "acid-transactions",
      "idempotency-key",
      "sd-sharding-intro",
      "distributed-transactions-2pc",
      "saga-pattern"
    ],
    "mentions": [
      "event-driven-architecture",
      "redis-basics",
      "http-methods"
    ]
  },
  "sd-email-storage-search": {
    "links": [
      "sd-email-protocols",
      "sd-object-storage-architecture",
      "sd-capacity-estimation",
      "sd-unique-id-generator",
      "db-type-wide-column",
      "db-index-design",
      "db-keys-denormalization",
      "encryption-at-rest",
      "elasticsearch-inverted-index",
      "sd-kv-store-write-read-path",
      "sd-multi-datacenter",
      "db-consistency-cap"
    ],
    "mentions": [
      "sd-start-single-server",
      "db-type-relational",
      "sd-mq-storage-partitions",
      "db-partitioning",
      "db-modeling-normalization"
    ]
  },
  "sd-email-protocols": {
    "links": [
      "sd-hotel-inventory-scaling",
      "sd-email-storage-search",
      "sd-object-storage-architecture",
      "dns",
      "base64",
      "realtime-communication",
      "sd-notification-reliability"
    ],
    "mentions": [
      "db-modeling-normalization"
    ]
  },
  "sd-hotel-inventory-scaling": {
    "links": [
      "sd-hotel-double-booking",
      "sd-email-protocols",
      "db-index",
      "microservices",
      "saga-pattern",
      "distributed-transactions-2pc",
      "transactional-outbox",
      "sd-load-balancer-stateless",
      "sd-sharding-intro",
      "caching-strategies",
      "cache-invalidation"
    ],
    "mentions": [
      "db-type-columnar-olap",
      "sd-start-single-server",
      "redis-basics",
      "resilience-patterns",
      "mongodb-document-model",
      "acid-transactions",
      "http-methods",
      "dns"
    ]
  },
  "sd-hotel-double-booking": {
    "links": [
      "sd-ad-click-exactly-once",
      "sd-hotel-inventory-scaling",
      "sd-email-protocols",
      "idempotency-key",
      "race-conditions",
      "db-transaction-isolation",
      "pessimistic-locking",
      "db-locking-deadlock",
      "optimistic-locking",
      "exponential-backoff-jitter",
      "sd-db-replication-intro"
    ],
    "mentions": [
      "db-migration-tools",
      "gateway",
      "sd-ad-click-stream-windows",
      "postgres-functions-triggers",
      "sql-basics",
      "postgres-getting-started",
      "http-methods"
    ]
  },
  "sd-ad-click-exactly-once": {
    "links": [
      "sd-ad-click-stream-windows",
      "sd-hotel-double-booking",
      "message-delivery-semantics",
      "idempotency-key",
      "kafka-basics",
      "bloom-filter",
      "batch-processing",
      "hyperloglog",
      "sd-payment-reliability"
    ],
    "mentions": [
      "db-type-embedded",
      "postgres-architecture",
      "http-methods"
    ]
  },
  "sd-ad-click-stream-windows": {
    "links": [
      "sd-metrics-storage-alerting",
      "sd-ad-click-exactly-once",
      "sd-hotel-double-booking",
      "sd-capacity-estimation",
      "db-type-columnar-olap",
      "sd-metrics-collection",
      "kafka-basics",
      "clock-skew",
      "count-min-sketch",
      "message-delivery-semantics"
    ],
    "mentions": [
      "db-type-wide-column",
      "sd-object-storage-architecture",
      "sd-mq-storage-partitions",
      "batch-processing"
    ]
  },
  "sd-metrics-storage-alerting": {
    "links": [
      "sd-metrics-collection",
      "sd-ad-click-stream-windows",
      "db-type-time-series",
      "alerting",
      "metrics-types",
      "prometheus-basics",
      "message-delivery-semantics",
      "grafana-dashboards"
    ],
    "mentions": [
      "cron-jobs",
      "db-type-wide-column",
      "db-type-key-value",
      "sd-object-storage-architecture",
      "db-type-relational",
      "kafka-basics",
      "webhooks"
    ]
  },
  "sd-metrics-collection": {
    "links": [
      "sd-mq-replication",
      "sd-metrics-storage-alerting",
      "sd-ad-click-stream-windows",
      "metrics-types",
      "monitoring-basics",
      "prometheus-basics",
      "structured-logging",
      "distributed-tracing",
      "db-type-time-series",
      "sd-capacity-estimation",
      "service-discovery",
      "consistent-hashing",
      "load-balancer-basics",
      "k8s-daemonset",
      "udp-and-quic",
      "kafka-basics",
      "sd-sharding-intro"
    ],
    "mentions": [
      "sd-queue-logging-automation",
      "db-type-key-value",
      "sd-start-single-server",
      "autoscaling",
      "db-type-relational",
      "sd-mq-storage-partitions",
      "webhooks"
    ]
  },
  "sd-object-storage-versioning-multipart": {
    "links": [
      "sd-object-storage-architecture",
      "sd-object-storage-durability",
      "sd-leaderboard-sorted-set",
      "sd-unique-id-generator",
      "backup-strategy",
      "sd-video-upload-transcoding",
      "sd-kv-store-write-read-path"
    ],
    "mentions": [
      "db-sharding",
      "db-type-wide-column",
      "js-memory-leak",
      "db-type-embedded",
      "http-caching-cdn"
    ]
  },
  "sd-object-storage-durability": {
    "links": [
      "sd-object-storage-architecture",
      "sd-object-storage-versioning-multipart",
      "sd-leaderboard-sorted-set",
      "sd-kv-store-partition-replication",
      "sd-file-sync-block-upload",
      "encryption-at-rest",
      "backup-strategy",
      "merkle-tree"
    ],
    "mentions": [
      "tail-latency",
      "vpc-basics"
    ]
  },
  "sd-object-storage-architecture": {
    "links": [
      "sd-email-storage-search",
      "sd-object-storage-durability",
      "sd-object-storage-versioning-multipart",
      "sd-leaderboard-sorted-set",
      "sd-load-balancer-stateless",
      "raft-consensus",
      "consistent-hashing",
      "sd-kv-store-partition-replication",
      "sd-db-replication-intro",
      "sd-sharding-intro",
      "sd-video-upload-transcoding",
      "sd-file-sync-block-upload"
    ],
    "mentions": [
      "js-memory-leak",
      "sd-start-single-server",
      "db-type-embedded",
      "db-type-relational",
      "db-replication-sharding"
    ]
  },
  "sd-mq-replication": {
    "links": [
      "sd-mq-storage-partitions",
      "sd-mq-consumer-groups",
      "sd-metrics-collection",
      "kafka-basics",
      "sd-kv-store-partition-replication",
      "raft-consensus",
      "leader-election",
      "message-delivery-semantics",
      "db-replication-sharding"
    ],
    "mentions": [
      "pub-sub",
      "rolling-deployment",
      "vpc-basics",
      "rendering-strategies"
    ]
  },
  "sd-mq-consumer-groups": {
    "links": [
      "sd-mq-storage-partitions",
      "sd-mq-replication",
      "sd-metrics-collection",
      "kafka-basics",
      "backpressure",
      "long-polling",
      "rabbitmq-basics",
      "raft-consensus",
      "leader-election",
      "message-delivery-semantics",
      "pub-sub",
      "message-queue-basics"
    ],
    "mentions": [
      "sd-start-single-server",
      "deadlocks",
      "rolling-deployment",
      "distributed-lock",
      "redis-basics",
      "db-type-key-value",
      "realtime-communication"
    ]
  },
  "sd-mq-storage-partitions": {
    "links": [
      "sd-maps-location-eta",
      "sd-mq-consumer-groups",
      "sd-mq-replication",
      "sd-queue-logging-automation",
      "kafka-basics",
      "message-queue-basics",
      "pub-sub",
      "consistent-hashing",
      "sd-capacity-estimation",
      "rabbitmq-basics"
    ],
    "mentions": [
      "db-type-key-value",
      "sd-start-single-server"
    ]
  },
  "sd-maps-location-eta": {
    "links": [
      "sd-maps-tiles-routing",
      "sd-mq-storage-partitions",
      "sd-proximity-service",
      "sd-nearby-friends",
      "sd-capacity-estimation",
      "sd-kv-store-write-read-path",
      "db-type-wide-column",
      "eventual-consistency",
      "kafka-basics",
      "percentile-latency",
      "sd-chat-connections",
      "websocket-deep-dive"
    ],
    "mentions": [
      "realtime-communication",
      "pub-sub",
      "db-type-relational",
      "redis-basics",
      "geohash",
      "dns"
    ]
  },
  "sd-maps-tiles-routing": {
    "links": [
      "sd-nearby-friends",
      "sd-maps-location-eta",
      "sd-proximity-service",
      "http-caching-cdn",
      "db-type-graph"
    ],
    "mentions": [
      "grpc",
      "sd-object-storage-architecture"
    ]
  },
  "sd-nearby-friends": {
    "links": [
      "sd-proximity-service",
      "sd-maps-tiles-routing",
      "sd-maps-location-eta",
      "sd-chat-connections",
      "sd-chat-presence",
      "realtime-communication",
      "websocket-deep-dive",
      "db-type-wide-column",
      "sd-queue-logging-automation",
      "pub-sub",
      "redis-cluster",
      "service-discovery",
      "consistent-hashing",
      "sd-news-feed-publishing",
      "geohash"
    ],
    "mentions": [
      "sd-mq-storage-partitions",
      "kafka-basics",
      "redis-basics",
      "db-type-key-value"
    ]
  },
  "sd-proximity-service": {
    "links": [
      "sd-file-sync-conflicts",
      "sd-nearby-friends",
      "sd-maps-tiles-routing",
      "sd-maps-location-eta",
      "geohash",
      "quadtree",
      "sd-capacity-estimation",
      "sd-load-balancer-stateless",
      "sd-db-replication-intro",
      "sd-sharding-intro",
      "caching-strategies",
      "cache-invalidation",
      "sd-multi-datacenter"
    ],
    "mentions": [
      "db-index",
      "sd-start-single-server",
      "db-types-overview",
      "redis-basics",
      "dns"
    ]
  },
  "javascript-roadmap": {
    "links": [
      "k8s-learning-roadmap",
      "networking-essentials-map",
      "js-var-let-const",
      "js-scope-lexical",
      "js-hoisting-tdz",
      "js-primitive-vs-reference",
      "js-equality-coercion",
      "js-truthy-falsy-typeof",
      "js-function-forms",
      "js-first-class-callbacks",
      "js-closures",
      "js-iife-module-pattern",
      "js-currying-partial",
      "js-pure-functions",
      "js-memoization",
      "js-array-transform",
      "js-array-mutation",
      "js-object-methods",
      "js-destructuring",
      "js-spread-rest",
      "js-shallow-deep-copy",
      "js-immutability-react",
      "js-template-literals",
      "js-optional-chaining-nullish",
      "js-short-circuit",
      "js-es-modules",
      "js-this-binding",
      "js-call-apply-bind",
      "js-prototype-chain",
      "js-classes",
      "js-strict-mode",
      "js-callback-hell",
      "js-promises",
      "js-async-await",
      "js-promise-combinators",
      "js-execution-context",
      "event-loop",
      "js-microtask-macrotask",
      "js-timers-accuracy",
      "garbage-collection",
      "js-memory-leak",
      "dom-basics",
      "event-propagation",
      "event-delegation",
      "debounce-throttle",
      "browser-fetch",
      "abort-controller",
      "browser-storage",
      "cors",
      "react-rerender",
      "client-data-cache"
    ],
    "mentions": [
      "core-web-vitals"
    ]
  },
  "abort-controller": {
    "links": [
      "browser-fetch",
      "js-memory-leak",
      "js-async-await",
      "client-data-cache",
      "event-propagation"
    ],
    "mentions": [
      "js-pure-functions",
      "http-status-codes",
      "js-closures"
    ]
  },
  "browser-storage": {
    "links": [
      "frontend-browser-cache",
      "cookie-session-login",
      "token-login",
      "debounce-throttle",
      "csrf",
      "xss",
      "js-shallow-deep-copy",
      "react-rerender"
    ],
    "mentions": [
      "json-crud-http",
      "http-versions",
      "event-loop",
      "what-happens-google-com"
    ]
  },
  "sd-file-sync-conflicts": {
    "links": [
      "sd-file-sync-block-upload",
      "sd-proximity-service",
      "clock-skew",
      "optimistic-locking",
      "sd-kv-store-versioning",
      "git-merge-conflict",
      "crdt",
      "realtime-communication",
      "long-polling",
      "cloud-cost-optimization"
    ],
    "mentions": [
      "git-branch-merge",
      "db-locking-deadlock"
    ]
  },
  "sd-file-sync-block-upload": {
    "links": [
      "sd-video-streaming-cost",
      "sd-file-sync-conflicts",
      "sd-proximity-service",
      "sd-video-upload-transcoding",
      "sd-load-balancer-stateless",
      "sd-sharding-intro",
      "rsync-algorithm",
      "sd-db-replication-intro"
    ],
    "mentions": [
      "sd-start-single-server",
      "db-type-relational"
    ]
  },
  "sd-video-streaming-cost": {
    "links": [
      "sd-video-upload-transcoding",
      "sd-file-sync-block-upload",
      "http-caching-cdn",
      "cdn-edge-anycast",
      "edge-caching",
      "cloud-cost-optimization"
    ],
    "mentions": [
      "packet-encapsulation"
    ]
  },
  "sd-video-upload-transcoding": {
    "links": [
      "sd-autocomplete-data-pipeline",
      "sd-video-streaming-cost",
      "sd-file-sync-block-upload",
      "sd-capacity-estimation",
      "serverless-limits",
      "sd-rate-limiter-design",
      "idempotency-key",
      "cdn-edge-anycast",
      "message-queue-basics"
    ],
    "mentions": [
      "sd-autocomplete-trie",
      "sd-start-single-server",
      "http-methods"
    ]
  },
  "sd-chat-presence": {
    "links": [
      "sd-chat-connections",
      "sd-chat-message-storage",
      "sd-autocomplete-trie",
      "websocket-deep-dive",
      "pub-sub",
      "sd-nearby-friends"
    ],
    "mentions": [
      "realtime-communication",
      "browser-fetch",
      "db-type-key-value",
      "redis-basics",
      "dns"
    ]
  },
  "sd-chat-message-storage": {
    "links": [
      "sd-chat-connections",
      "sd-chat-presence",
      "sd-autocomplete-trie",
      "db-type-wide-column",
      "sd-kv-store-partition-replication",
      "sd-unique-id-generator",
      "sd-news-feed-publishing",
      "idempotency-key",
      "message-delivery-semantics",
      "sd-kv-store-failure-handling"
    ],
    "mentions": [
      "db-sharding",
      "realtime-communication",
      "db-type-key-value",
      "sd-start-single-server",
      "db-type-relational",
      "sd-mq-storage-partitions",
      "scaling-horizontal-vertical",
      "redis-basics",
      "pub-sub"
    ]
  },
  "sd-chat-connections": {
    "links": [
      "sd-news-feed-retrieval",
      "sd-chat-message-storage",
      "sd-chat-presence",
      "sd-autocomplete-trie",
      "realtime-communication",
      "long-polling",
      "websocket-deep-dive",
      "sd-load-balancer-stateless",
      "sd-notification-system",
      "service-discovery",
      "pub-sub",
      "sd-capacity-estimation"
    ],
    "mentions": [
      "osi-in-practice",
      "sd-start-single-server",
      "redis-basics",
      "db-type-key-value"
    ]
  },
  "sd-autocomplete-data-pipeline": {
    "links": [
      "sd-autocomplete-trie",
      "sd-video-upload-transcoding",
      "sd-queue-logging-automation",
      "kafka-basics",
      "batch-processing",
      "lossy-counting",
      "count-min-sketch",
      "consistent-hashing",
      "sd-sharding-intro"
    ],
    "mentions": [
      "hyperloglog",
      "db-type-key-value",
      "sd-object-storage-architecture",
      "sqld-group-by-having",
      "redis-basics",
      "db-modeling-normalization"
    ]
  },
  "sd-autocomplete-trie": {
    "links": [
      "sd-chat-presence",
      "sd-autocomplete-data-pipeline",
      "sd-video-upload-transcoding",
      "http-caching-cdn",
      "debounce-throttle",
      "browser-fetch",
      "elasticsearch-inverted-index"
    ],
    "mentions": [
      "sd-start-single-server",
      "lossy-counting",
      "global-rollout-localization",
      "osi-in-practice",
      "db-modeling-normalization"
    ]
  },
  "sd-news-feed-retrieval": {
    "links": [
      "sd-news-feed-publishing",
      "sd-chat-connections",
      "caching-strategies",
      "sd-latency-numbers",
      "api-pagination-sorting",
      "realtime-communication",
      "long-polling"
    ],
    "mentions": [
      "db-sharding",
      "redis-basics",
      "pub-sub",
      "sql-query-rewrite"
    ]
  },
  "sd-news-feed-publishing": {
    "links": [
      "sd-notification-reliability",
      "sd-news-feed-retrieval",
      "sd-chat-connections",
      "redis-basics",
      "sd-sharding-intro",
      "sd-queue-logging-automation",
      "db-type-graph",
      "pub-sub",
      "message-delivery-semantics",
      "idempotency-key",
      "sd-unique-id-generator",
      "caching-strategies"
    ],
    "mentions": [
      "db-sharding",
      "sd-start-single-server",
      "db-type-relational",
      "http-methods"
    ]
  },
  "sd-notification-reliability": {
    "links": [
      "sd-notification-system",
      "sd-news-feed-publishing",
      "transactional-outbox",
      "message-queue-basics",
      "message-delivery-semantics",
      "exponential-backoff-jitter",
      "dead-letter-queue",
      "circuit-breaker",
      "retries",
      "xss",
      "sd-rate-limiter-design",
      "rate-limiting-in-practice",
      "alerting",
      "metrics-types"
    ],
    "mentions": [
      "microservices",
      "resilience-patterns",
      "redis-basics",
      "http-methods",
      "webhooks"
    ]
  },
  "sd-notification-system": {
    "links": [
      "sd-web-crawler-politeness-dedup",
      "sd-notification-reliability",
      "sd-news-feed-publishing",
      "sd-email-protocols",
      "sd-capacity-estimation",
      "message-queue-basics",
      "sd-queue-logging-automation"
    ],
    "mentions": [
      "https-tls",
      "sd-start-single-server",
      "http-versions",
      "token-login",
      "oauth"
    ]
  },
  "sd-web-crawler-politeness-dedup": {
    "links": [
      "sd-web-crawler-architecture",
      "sd-notification-system",
      "rate-limiting-in-practice",
      "exponential-backoff-jitter",
      "bloom-filter"
    ],
    "mentions": [
      "db-type-key-value",
      "client-data-cache",
      "http-caching-cdn",
      "dns"
    ]
  },
  "sd-web-crawler-architecture": {
    "links": [
      "sd-url-shortener-key-generation",
      "sd-web-crawler-politeness-dedup",
      "sd-notification-system",
      "timeouts",
      "dns",
      "rendering-csr-spa",
      "sd-capacity-estimation",
      "consistent-hashing",
      "message-queue-basics"
    ],
    "mentions": [
      "nodejs-server-runtime",
      "sd-url-shortener-api-redirect",
      "sd-object-storage-architecture",
      "sd-start-single-server",
      "db-sharding",
      "bloom-filter",
      "redis-basics",
      "client-data-cache"
    ]
  },
  "sd-url-shortener-key-generation": {
    "links": [
      "sd-url-shortener-api-redirect",
      "sd-unique-id-generator",
      "sd-web-crawler-architecture",
      "bloom-filter",
      "base64",
      "caching-strategies",
      "cache-invalidation",
      "sd-cache-and-cdn-tier",
      "sd-queue-logging-automation"
    ],
    "mentions": [
      "db-sharding",
      "http-caching-cdn",
      "js-memoization",
      "redis-basics"
    ]
  },
  "sd-url-shortener-api-redirect": {
    "links": [
      "sd-unique-id-generator",
      "sd-url-shortener-key-generation",
      "sd-web-crawler-architecture",
      "http-status-codes",
      "http-caching-cdn",
      "sd-sharding-intro",
      "sd-capacity-estimation",
      "sd-kv-store-partition-replication",
      "sd-load-balancer-stateless",
      "sd-db-replication-intro",
      "rate-limiting-algorithms"
    ],
    "mentions": [
      "db-type-key-value",
      "sd-start-single-server",
      "db-type-relational",
      "db-replication-sharding",
      "redis-basics"
    ]
  },
  "sd-unique-id-generator": {
    "links": [
      "sd-kv-store-write-read-path",
      "sd-url-shortener-api-redirect",
      "sd-sharding-intro",
      "db-keys-denormalization",
      "postgres-data-types",
      "clock-skew",
      "json-crud-http",
      "sd-url-shortener-key-generation"
    ],
    "mentions": [
      "k8s-statefulset",
      "db-index",
      "db-sharding",
      "db-type-key-value",
      "high-availability"
    ]
  },
  "sd-kv-store-write-read-path": {
    "links": [
      "sd-kv-store-failure-handling",
      "sd-unique-id-generator",
      "sd-kv-store-partition-replication",
      "sd-kv-store-versioning",
      "db-type-wide-column",
      "db-index",
      "bloom-filter",
      "db-type-key-value"
    ],
    "mentions": [
      "db-type-embedded",
      "sd-leaderboard-sorted-set",
      "db-type-relational",
      "merkle-tree",
      "clock-skew",
      "db-index-pitfalls"
    ]
  },
  "sd-kv-store-failure-handling": {
    "links": [
      "sd-kv-store-versioning",
      "sd-kv-store-write-read-path",
      "sd-kv-store-partition-replication",
      "network-partitions",
      "eventual-consistency",
      "merkle-tree",
      "sd-multi-datacenter",
      "leader-election"
    ],
    "mentions": [
      "db-type-wide-column",
      "bloom-filter"
    ]
  },
  "sd-kv-store-versioning": {
    "links": [
      "sd-kv-store-partition-replication",
      "sd-kv-store-failure-handling",
      "sd-kv-store-write-read-path",
      "clock-skew",
      "optimistic-locking",
      "crdt",
      "eventual-consistency"
    ],
    "mentions": [
      "db-type-wide-column",
      "db-type-key-value",
      "db-locking-deadlock",
      "db-type-relational"
    ]
  },
  "sd-kv-store-partition-replication": {
    "links": [
      "sd-rate-limiter-design",
      "sd-kv-store-versioning",
      "sd-kv-store-failure-handling",
      "sd-kv-store-write-read-path",
      "db-type-key-value",
      "sd-interview-framework",
      "sd-object-storage-architecture",
      "db-consistency-cap",
      "raft-consensus",
      "consistent-hashing",
      "sd-multi-datacenter",
      "eventual-consistency",
      "db-type-wide-column",
      "sd-capacity-estimation",
      "consistency-models",
      "sd-sharding-intro",
      "db-sharding"
    ],
    "mentions": [
      "sd-start-single-server",
      "tail-latency",
      "vpc-basics",
      "redis-basics",
      "db-partitioning",
      "caching-strategies"
    ]
  },
  "sd-rate-limiter-design": {
    "links": [
      "sd-interview-framework",
      "sd-capacity-estimation",
      "sd-kv-store-partition-replication",
      "rate-limiting-algorithms",
      "rate-limiting-in-practice",
      "gateway",
      "race-conditions",
      "sd-multi-datacenter",
      "redis-cluster",
      "ddos-protection",
      "waf"
    ],
    "mentions": [
      "proxy-reverse-proxy",
      "autoscaling",
      "redis-basics"
    ]
  },
  "sd-interview-framework": {
    "links": [
      "sd-capacity-estimation",
      "sd-rate-limiter-design",
      "sd-start-single-server",
      "sd-latency-numbers"
    ],
    "mentions": [
      "db-type-wide-column",
      "gateway",
      "race-conditions",
      "kafka-basics",
      "redis-basics"
    ]
  },
  "sd-capacity-estimation": {
    "links": [
      "sd-latency-numbers",
      "sd-interview-framework",
      "sd-rate-limiter-design",
      "sd-start-single-server",
      "sd-sharding-intro",
      "autoscaling",
      "sd-db-replication-intro",
      "sd-cache-and-cdn-tier"
    ],
    "mentions": [
      "multi-region",
      "redis-basics"
    ]
  },
  "sd-latency-numbers": {
    "links": [
      "sd-sharding-intro",
      "sd-capacity-estimation",
      "sd-interview-framework",
      "sd-rate-limiter-design",
      "sd-cache-and-cdn-tier",
      "sd-multi-datacenter",
      "n-plus-one-queries",
      "high-availability",
      "sli-slo",
      "percentile-latency",
      "latency-bandwidth-throughput"
    ],
    "mentions": [
      "sd-start-single-server",
      "distributed-tracing",
      "tcp-reliability-congestion",
      "redis-basics",
      "sql-query-rewrite"
    ]
  },
  "sd-sharding-intro": {
    "links": [
      "sd-queue-logging-automation",
      "sd-latency-numbers",
      "sd-start-single-server",
      "sd-split-web-and-db",
      "sd-load-balancer-stateless",
      "sd-db-replication-intro",
      "sd-cache-and-cdn-tier",
      "sd-multi-datacenter",
      "db-sharding",
      "cqrs",
      "db-keys-denormalization",
      "distributed-transactions-2pc",
      "saga-pattern",
      "consistent-hashing",
      "redis-cluster",
      "caching-strategies",
      "sd-unique-id-generator",
      "db-partitioning",
      "db-types-overview"
    ],
    "mentions": [
      "db-type-key-value",
      "postgres-data-types",
      "sd-news-feed-publishing",
      "db-type-newsql",
      "scaling-horizontal-vertical",
      "redis-basics",
      "microservices",
      "db-modeling-normalization"
    ]
  },
  "sd-queue-logging-automation": {
    "links": [
      "sd-multi-datacenter",
      "sd-sharding-intro",
      "sd-start-single-server",
      "sd-split-web-and-db",
      "sd-load-balancer-stateless",
      "sd-db-replication-intro",
      "sd-cache-and-cdn-tier",
      "message-queue-basics",
      "dead-letter-queue",
      "message-delivery-semantics",
      "kafka-basics",
      "rabbitmq-basics",
      "structured-logging",
      "metrics-types",
      "prometheus-basics",
      "alerting",
      "observability-basics",
      "iac-basics",
      "terraform-basics",
      "autoscaling",
      "ci-cd-basics"
    ],
    "mentions": [
      "elasticsearch-inverted-index",
      "redis-basics"
    ]
  },
  "sd-multi-datacenter": {
    "links": [
      "sd-cache-and-cdn-tier",
      "sd-queue-logging-automation",
      "sd-start-single-server",
      "sd-split-web-and-db",
      "sd-load-balancer-stateless",
      "sd-db-replication-intro",
      "sd-sharding-intro",
      "cdn-edge-anycast",
      "failover",
      "disaster-recovery",
      "idempotency-key",
      "multi-region",
      "eventual-consistency",
      "iac-basics",
      "chaos-engineering"
    ],
    "mentions": [
      "k8s-deploy-pipeline-eks",
      "autoscaling",
      "vpc-basics",
      "osi-in-practice",
      "dns"
    ]
  },
  "sd-cache-and-cdn-tier": {
    "links": [
      "sd-db-replication-intro",
      "sd-multi-datacenter",
      "sd-start-single-server",
      "sd-split-web-and-db",
      "sd-load-balancer-stateless",
      "sd-queue-logging-automation",
      "sd-sharding-intro",
      "caching-strategies",
      "cache-invalidation",
      "redis-memory-eviction",
      "consistent-hashing",
      "redis-replication-sentinel",
      "redis-cluster",
      "edge-caching",
      "cdn-edge-anycast",
      "http-caching-cdn"
    ],
    "mentions": [
      "redis-basics",
      "high-availability",
      "db-type-key-value",
      "dns"
    ]
  },
  "sd-db-replication-intro": {
    "links": [
      "sd-load-balancer-stateless",
      "sd-cache-and-cdn-tier",
      "sd-start-single-server",
      "sd-split-web-and-db",
      "sd-multi-datacenter",
      "sd-queue-logging-automation",
      "sd-sharding-intro",
      "db-replication-sharding",
      "sd-capacity-estimation",
      "eventual-consistency",
      "db-consistency-cap",
      "failover",
      "redis-replication-sentinel",
      "backup-strategy"
    ],
    "mentions": [
      "db-architecture-by-scale",
      "leader-election",
      "postgres-operations",
      "redis-basics",
      "postgres-architecture"
    ]
  },
  "sd-load-balancer-stateless": {
    "links": [
      "sd-split-web-and-db",
      "sd-db-replication-intro",
      "sd-start-single-server",
      "sd-cache-and-cdn-tier",
      "sd-multi-datacenter",
      "sd-queue-logging-automation",
      "sd-sharding-intro",
      "load-balancer-basics",
      "load-balancing-algorithms",
      "token-login",
      "cookie-session-login",
      "cron-jobs",
      "idempotency-key",
      "rolling-deployment",
      "autoscaling",
      "redis-replication-sentinel"
    ],
    "mentions": [
      "sd-interview-framework",
      "realtime-communication",
      "high-availability",
      "message-delivery-semantics",
      "db-type-key-value",
      "sd-object-storage-architecture",
      "osi-in-practice",
      "sql-batch-timeout-pool",
      "redis-basics",
      "sql-query-rewrite",
      "dns"
    ]
  },
  "sd-split-web-and-db": {
    "links": [
      "sd-start-single-server",
      "sd-load-balancer-stateless",
      "sd-db-replication-intro",
      "sd-cache-and-cdn-tier",
      "sd-multi-datacenter",
      "sd-queue-logging-automation",
      "sd-sharding-intro",
      "vpc-subnets-route-tables",
      "security-groups-nacl",
      "postgres-connections-pg-hba",
      "sd-latency-numbers",
      "n-plus-one-queries",
      "connection-pool",
      "db-types-overview",
      "db-type-relational",
      "db-type-key-value",
      "mongodb-document-model",
      "scaling-horizontal-vertical",
      "timeouts"
    ],
    "mentions": [
      "db-type-wide-column",
      "db-architecture-by-scale",
      "high-availability",
      "encryption-in-transit",
      "db-type-graph",
      "pattern-proxy",
      "vpc-basics",
      "sql-batch-timeout-pool",
      "redis-basics",
      "sql-query-rewrite",
      "dns"
    ]
  },
  "sd-start-single-server": {
    "links": [
      "sd-split-web-and-db",
      "sd-load-balancer-stateless",
      "sd-db-replication-intro",
      "sd-cache-and-cdn-tier",
      "sd-multi-datacenter",
      "sd-queue-logging-automation",
      "sd-sharding-intro",
      "dns",
      "api-versioning",
      "sd-capacity-estimation",
      "event-loop",
      "backup-strategy"
    ],
    "mentions": [
      "sd-interview-framework",
      "high-availability",
      "sd-object-storage-architecture",
      "db-replication-sharding"
    ]
  },
  "sql-interview-problems": {
    "links": [
      "sql-logical-order",
      "sql-aggregation-pitfalls",
      "sql-subqueries-exists-lateral",
      "sql-window-functions-pg",
      "sqld-window-functions",
      "sql-cte-recursive",
      "idempotency-key",
      "postgres-advanced-sql",
      "sql-batch-timeout-pool",
      "sql-filtering-operators",
      "sql-views-materialized"
    ],
    "mentions": [
      "postgres-data-types",
      "sqld-correlated-subquery",
      "sqld-group-by-having",
      "resilience-patterns",
      "http-methods",
      "webhooks"
    ]
  },
  "sql-views-materialized": {
    "links": [
      "postgres-reporting-sql",
      "sql-logical-order",
      "postgres-functions-triggers",
      "postgres-roles-security",
      "sql-window-functions-pg",
      "caching-strategies",
      "sql-cte-recursive"
    ],
    "mentions": [
      "sqld-correlated-subquery",
      "json-crud-http",
      "zero-downtime-migrations",
      "postgres-mvcc-vacuum",
      "sqld-group-by-having",
      "sqld-window-functions",
      "sql-basics"
    ]
  },
  "sql-window-functions-pg": {
    "links": [
      "sqld-window-functions",
      "sql-logical-order",
      "sql-joins-in-practice",
      "postgres-reporting-sql",
      "sql-case-when",
      "sql-subqueries-exists-lateral",
      "sql-cte-recursive",
      "sql-interview-problems"
    ],
    "mentions": [
      "sqld-group-by-having"
    ]
  },
  "sql-cte-recursive": {
    "links": [
      "sqld-top-n-hierarchical-pivot",
      "postgres-advanced-sql",
      "sql-logical-order",
      "sql-case-when",
      "sql-joins-in-practice",
      "sql-window-functions-pg",
      "sql-views-materialized"
    ],
    "mentions": [
      "sqld-set-operators",
      "js-closures"
    ]
  },
  "debounce-throttle": {
    "links": [
      "js-closures",
      "js-timers-accuracy",
      "event-propagation",
      "code-splitting",
      "loading-patterns",
      "react-rerender",
      "abort-controller",
      "rate-limiting-algorithms"
    ],
    "mentions": [
      "client-data-cache",
      "sd-autocomplete-trie",
      "test-pyramid-unit-tests",
      "pattern-proxy"
    ]
  },
  "event-delegation": {
    "links": [
      "event-propagation",
      "dom-basics",
      "js-memory-leak",
      "react-rerender",
      "debounce-throttle"
    ],
    "mentions": [
      "js-optional-chaining-nullish",
      "js-closures"
    ]
  },
  "event-propagation": {
    "links": [
      "dom-basics",
      "event-delegation",
      "debounce-throttle",
      "js-memory-leak",
      "core-web-vitals"
    ],
    "mentions": [
      "browser-fetch",
      "js-function-forms"
    ]
  },
  "dom-basics": {
    "links": [
      "event-propagation",
      "event-delegation",
      "js-prototype-chain",
      "xss",
      "event-loop",
      "animation-performance",
      "core-web-vitals",
      "js-memory-leak",
      "react-rerender"
    ],
    "mentions": []
  },
  "system-design-concepts-map": {
    "links": [
      "networking-essentials-map",
      "db-architecture-by-scale",
      "latency-bandwidth-throughput",
      "percentile-latency",
      "tail-latency",
      "sd-capacity-estimation",
      "scaling-horizontal-vertical",
      "autoscaling",
      "high-availability",
      "failover",
      "fault-tolerance",
      "resilience-patterns",
      "dns",
      "cdn-edge-anycast",
      "http-caching-cdn",
      "edge-caching",
      "load-balancer-basics",
      "load-balancing-algorithms",
      "caching-strategies",
      "cache-invalidation",
      "sql-vs-nosql",
      "db-types-overview",
      "db-index",
      "db-index-design",
      "db-replication-sharding",
      "db-sharding",
      "consistent-hashing",
      "db-consistency-cap",
      "network-partitions",
      "consistency-models",
      "eventual-consistency",
      "acid-transactions",
      "db-transaction-isolation",
      "message-queue-basics",
      "dead-letter-queue",
      "pub-sub",
      "kafka-basics",
      "api-versioning",
      "api-pagination-sorting",
      "idempotency-key",
      "rest-api-design",
      "grpc",
      "microservices",
      "microservices-decomposition",
      "saga-pattern",
      "gateway",
      "rate-limiting-algorithms",
      "rate-limiting-in-practice",
      "cookie-session-login",
      "token-login",
      "oauth",
      "authn-vs-authz",
      "iam-basics",
      "k8s-rbac",
      "transactional-outbox",
      "event-driven-architecture",
      "network-troubleshooting-by-layer"
    ],
    "mentions": [
      "sd-interview-framework",
      "sd-url-shortener-api-redirect",
      "leader-election",
      "db-type-key-value",
      "proxy-reverse-proxy",
      "osi-in-practice",
      "redis-basics",
      "http-status-codes",
      "mongodb-document-model",
      "vpc-basics",
      "postgres-architecture",
      "http-methods"
    ]
  },
  "js-timers-accuracy": {
    "links": [
      "event-loop",
      "js-execution-context",
      "js-microtask-macrotask",
      "animation-performance",
      "js-closures"
    ],
    "mentions": [
      "realtime-communication",
      "js-function-forms",
      "clock-skew"
    ]
  },
  "js-microtask-macrotask": {
    "links": [
      "event-loop",
      "js-execution-context",
      "js-timers-accuracy",
      "js-promises",
      "js-async-await",
      "react-rerender"
    ],
    "mentions": [
      "test-pyramid-unit-tests"
    ]
  },
  "js-execution-context": {
    "links": [
      "event-loop",
      "js-microtask-macrotask",
      "js-timers-accuracy",
      "js-scope-lexical",
      "js-hoisting-tdz",
      "js-closures"
    ],
    "mentions": [
      "js-function-forms",
      "js-strict-mode"
    ]
  },
  "authn-vs-authz": {
    "links": [
      "cookie-session-login",
      "token-login",
      "oauth",
      "http-status-codes",
      "iam-basics",
      "k8s-rbac",
      "zero-trust-architecture",
      "high-availability",
      "fault-tolerance",
      "k8s-admission-control",
      "postgres-roles-security",
      "jwt-key-rotation"
    ],
    "mentions": [
      "rate-limiting-in-practice",
      "gateway",
      "clock-skew",
      "service-mesh",
      "linux-files-permissions",
      "security-groups-nacl",
      "ssrf",
      "https-tls",
      "dns"
    ]
  },
  "sql-vs-nosql": {
    "links": [
      "db-types-overview",
      "db-type-relational",
      "mongodb-document-model",
      "db-type-key-value",
      "db-type-wide-column",
      "db-type-graph",
      "db-keys-denormalization",
      "zero-downtime-migrations",
      "db-sharding",
      "db-type-newsql",
      "high-availability",
      "db-architecture-by-scale",
      "acid-transactions",
      "db-consistency-cap",
      "eventual-consistency",
      "consistency-models",
      "postgres-jsonb-search"
    ],
    "mentions": [
      "sd-sharding-intro",
      "db-type-columnar-olap",
      "db-replication-sharding",
      "sd-mq-storage-partitions",
      "scaling-horizontal-vertical",
      "redis-basics",
      "db-modeling-normalization"
    ]
  },
  "acid-transactions": {
    "links": [
      "db-transaction-isolation",
      "postgres-architecture",
      "postgres-mvcc-vacuum",
      "sql-batch-timeout-pool",
      "transactional-outbox",
      "distributed-transactions-2pc",
      "saga-pattern",
      "postgres-data-types",
      "consistency-models",
      "db-consistency-cap",
      "db-replication-sharding",
      "high-availability",
      "idempotency-key",
      "fault-tolerance"
    ],
    "mentions": [
      "pessimistic-locking",
      "postgres-advanced-sql",
      "db-architecture-by-scale",
      "sd-start-single-server",
      "resilience-patterns",
      "postgres-getting-started",
      "http-methods"
    ]
  },
  "sql-case-when": {
    "links": [
      "sql-logical-order",
      "sql-aggregation-pitfalls",
      "sqld-null-functions",
      "sqld-top-n-hierarchical-pivot",
      "sql-joins-in-practice",
      "sql-subqueries-exists-lateral"
    ],
    "mentions": [
      "sqld-group-by-having",
      "sql-filtering-operators",
      "db-replication-sharding"
    ]
  },
  "sql-subqueries-exists-lateral": {
    "links": [
      "sqld-subquery-set-operators",
      "sqld-correlated-subquery",
      "sql-filtering-operators",
      "sql-joins-in-practice",
      "sql-logical-order",
      "sql-query-rewrite",
      "postgres-reporting-sql",
      "sql-case-when"
    ],
    "mentions": [
      "sql-select-where-null",
      "db-type-relational"
    ]
  },
  "sql-joins-in-practice": {
    "links": [
      "sqld-joins",
      "sql-logical-order",
      "sql-filtering-operators",
      "sql-aggregation-pitfalls",
      "sql-subqueries-exists-lateral"
    ],
    "mentions": [
      "sql-query-tuning"
    ]
  },
  "js-strict-mode": {
    "links": [
      "js-scope-lexical",
      "js-iife-module-pattern",
      "js-object-methods",
      "js-this-binding",
      "js-function-forms",
      "abort-controller",
      "js-prototype-chain"
    ],
    "mentions": [
      "js-classes",
      "js-es-modules",
      "js-destructuring",
      "js-primitive-vs-reference"
    ]
  },
  "js-classes": {
    "links": [
      "js-prototype-chain",
      "js-this-binding",
      "design-patterns-overview",
      "js-hoisting-tdz",
      "js-function-forms"
    ],
    "mentions": [
      "pattern-factory-method",
      "js-strict-mode"
    ]
  },
  "js-prototype-chain": {
    "links": [
      "js-this-binding",
      "js-classes",
      "pattern-prototype",
      "js-strict-mode",
      "js-call-apply-bind",
      "json-crud-http",
      "js-truthy-falsy-typeof",
      "js-spread-rest"
    ],
    "mentions": [
      "rendering-strategies",
      "js-es-modules",
      "js-primitive-vs-reference"
    ]
  },
  "js-call-apply-bind": {
    "links": [
      "js-this-binding",
      "js-prototype-chain",
      "js-currying-partial",
      "abort-controller",
      "js-memory-leak",
      "react-rerender",
      "js-memoization"
    ],
    "mentions": [
      "js-classes",
      "js-function-forms",
      "js-strict-mode",
      "js-spread-rest",
      "js-primitive-vs-reference"
    ]
  },
  "js-this-binding": {
    "links": [
      "js-call-apply-bind",
      "js-function-forms",
      "js-prototype-chain",
      "js-strict-mode",
      "react-rerender",
      "js-closures"
    ],
    "mentions": [
      "js-object-methods",
      "js-execution-context",
      "event-delegation",
      "js-classes",
      "js-es-modules",
      "js-destructuring",
      "js-primitive-vs-reference"
    ]
  },
  "networking-essentials-map": {
    "links": [
      "what-happens-google-com",
      "devops-networking-roadmap",
      "first-page-from-power-on",
      "packet-encapsulation",
      "ipv6-basics",
      "layer-ip-addressing",
      "dhcp",
      "dns",
      "hosts-file",
      "layer-link-ethernet-arp",
      "vlan-basics",
      "router-vs-switch",
      "layer-ip-routing-icmp",
      "iptables-nat",
      "nat-traversal",
      "proxy-reverse-proxy",
      "cdn-edge-anycast",
      "http-caching-cdn",
      "load-balancer-basics",
      "load-balancing-algorithms",
      "nginx-reverse-proxy",
      "reverse-proxy-lb-api-gateway",
      "iptables-basics",
      "security-groups-nacl",
      "ports-and-sockets",
      "tcp-connection-lifecycle",
      "tcp-reliability-congestion",
      "udp-and-quic",
      "https-tls",
      "http-message",
      "http-methods",
      "http-status-codes",
      "http-versions",
      "websocket-deep-dive",
      "realtime-communication",
      "vpn-ipsec-wireguard",
      "latency-bandwidth-throughput",
      "network-layers-overview",
      "osi-in-practice",
      "network-troubleshooting-by-layer",
      "packet-capture-tcpdump"
    ],
    "mentions": [
      "vpc-subnets-route-tables",
      "layer-mtu-fragmentation"
    ]
  },
  "packet-encapsulation": {
    "links": [
      "network-layers-overview",
      "packet-capture-tcpdump",
      "https-tls",
      "layer-mtu-fragmentation",
      "sdn-vxlan-overlay",
      "vpn-ipsec-wireguard",
      "ipv6-basics",
      "udp-and-quic",
      "networking-essentials-map"
    ],
    "mentions": [
      "what-happens-google-com",
      "first-page-from-power-on",
      "layer-link-ethernet-arp",
      "vlan-basics",
      "http-versions",
      "tcp-reliability-congestion",
      "layer-ip-routing-icmp",
      "vpc-basics",
      "dns"
    ]
  },
  "nat-traversal": {
    "links": [
      "iptables-nat",
      "udp-and-quic",
      "vpc-subnets-route-tables",
      "router-vs-switch"
    ],
    "mentions": [
      "iptables-basics",
      "security-groups-nacl",
      "sql-batch-timeout-pool"
    ]
  },
  "router-vs-switch": {
    "links": [
      "layer-link-ethernet-arp",
      "layer-ip-routing-icmp",
      "vlan-basics",
      "sdn-vxlan-overlay",
      "iptables-nat",
      "docker-network-drivers",
      "vpc-subnets-route-tables",
      "nat-traversal"
    ],
    "mentions": [
      "message-delivery-semantics",
      "packet-capture-tcpdump",
      "sd-start-single-server",
      "dhcp",
      "ipv6-basics",
      "vpc-basics",
      "udp-and-quic",
      "dns"
    ]
  },
  "dhcp": {
    "links": [
      "layer-ip-addressing",
      "layer-link-ethernet-arp",
      "packet-capture-tcpdump",
      "vpn-ipsec-wireguard",
      "k8s-cni-pod-network"
    ],
    "mentions": [
      "rendering-csr-spa",
      "layer-ip-routing-icmp",
      "local-custom-domain",
      "sd-start-single-server",
      "router-vs-switch",
      "connection-pool",
      "vlan-basics",
      "vpc-basics",
      "udp-and-quic",
      "dns"
    ]
  },
  "microservices-decomposition": {
    "links": [
      "microservices",
      "ddd-bounded-context",
      "modular-monolith",
      "feature-flags",
      "hexagonal-architecture",
      "event-driven-architecture",
      "transactional-outbox",
      "distributed-tracing",
      "monolith-architecture"
    ],
    "mentions": [
      "db-type-columnar-olap",
      "sql-query-rewrite"
    ]
  },
  "ddd-bounded-context": {
    "links": [
      "microservices",
      "microservices-decomposition",
      "modular-monolith",
      "dead-letter-queue",
      "pattern-adapter",
      "db-transaction-isolation",
      "pessimistic-locking",
      "transactional-outbox",
      "event-driven-architecture"
    ],
    "mentions": [
      "monolith-architecture",
      "db-locking-deadlock",
      "http-status-codes"
    ]
  },
  "clean-architecture": {
    "links": [
      "hexagonal-architecture",
      "layered-architecture",
      "modular-monolith",
      "ddd-bounded-context",
      "js-pure-functions",
      "cqrs"
    ],
    "mentions": [
      "http-status-codes"
    ]
  },
  "hexagonal-architecture": {
    "links": [
      "layered-architecture",
      "clean-architecture",
      "pattern-adapter",
      "js-shallow-deep-copy",
      "resilience-patterns",
      "client-data-cache"
    ],
    "mentions": [
      "db-type-embedded",
      "js-currying-partial",
      "pattern-proxy",
      "http-status-codes",
      "grpc"
    ]
  },
  "js-es-modules": {
    "links": [
      "js-iife-module-pattern",
      "code-splitting",
      "pattern-singleton",
      "js-hoisting-tdz",
      "js-async-await",
      "rendering-ssr"
    ],
    "mentions": [
      "rendering-strategies",
      "http-versions",
      "js-strict-mode",
      "js-destructuring",
      "cors"
    ]
  },
  "js-short-circuit": {
    "links": [
      "js-truthy-falsy-typeof",
      "js-optional-chaining-nullish",
      "js-array-transform",
      "js-template-literals"
    ],
    "mentions": [
      "js-pure-functions"
    ]
  },
  "js-optional-chaining-nullish": {
    "links": [
      "js-truthy-falsy-typeof",
      "js-short-circuit",
      "js-destructuring",
      "react-rerender",
      "client-data-cache"
    ],
    "mentions": []
  },
  "js-template-literals": {
    "links": [
      "js-short-circuit",
      "js-optional-chaining-nullish",
      "js-equality-coercion",
      "xss"
    ],
    "mentions": [
      "hydration",
      "rendering-strategies"
    ]
  },
  "js-memoization": {
    "links": [
      "js-pure-functions",
      "js-closures",
      "react-rerender",
      "big-o-notation",
      "js-memory-leak",
      "caching-strategies",
      "client-data-cache",
      "js-immutability-react",
      "garbage-collection"
    ],
    "mentions": [
      "json-crud-http",
      "rendering-strategies",
      "redis-basics",
      "js-primitive-vs-reference",
      "dns"
    ]
  },
  "js-pure-functions": {
    "links": [
      "js-array-mutation",
      "js-shallow-deep-copy",
      "js-immutability-react",
      "js-spread-rest",
      "hexagonal-architecture",
      "js-memoization",
      "message-queue-basics",
      "saga-pattern"
    ],
    "mentions": [
      "json-crud-http",
      "js-strict-mode",
      "test-pyramid-unit-tests",
      "js-es-modules",
      "http-methods"
    ]
  },
  "js-currying-partial": {
    "links": [
      "js-first-class-callbacks",
      "js-closures",
      "js-call-apply-bind",
      "react-rerender"
    ],
    "mentions": [
      "js-function-forms",
      "js-spread-rest",
      "js-destructuring"
    ]
  },
  "js-iife-module-pattern": {
    "links": [
      "js-closures",
      "js-var-let-const",
      "js-primitive-vs-reference",
      "js-es-modules",
      "abort-controller",
      "pattern-singleton"
    ],
    "mentions": [
      "browser-fetch",
      "js-strict-mode",
      "rendering-strategies",
      "js-function-forms"
    ]
  },
  "js-immutability-react": {
    "links": [
      "js-array-mutation",
      "js-shallow-deep-copy",
      "react-rerender",
      "js-pure-functions",
      "client-data-cache",
      "js-object-methods"
    ],
    "mentions": [
      "js-memory-leak",
      "js-memoization",
      "js-function-forms",
      "db-modeling-normalization"
    ]
  },
  "js-shallow-deep-copy": {
    "links": [
      "js-primitive-vs-reference",
      "pattern-prototype",
      "js-immutability-react",
      "js-object-methods",
      "react-rerender"
    ],
    "mentions": [
      "browser-storage",
      "db-types-overview"
    ]
  },
  "js-object-methods": {
    "links": [
      "js-primitive-vs-reference",
      "js-spread-rest",
      "js-prototype-chain",
      "js-array-transform",
      "js-strict-mode",
      "js-classes",
      "js-immutability-react",
      "js-shallow-deep-copy"
    ],
    "mentions": [
      "json-crud-http",
      "pattern-proxy",
      "js-es-modules"
    ]
  },
  "animation-performance": {
    "links": [
      "animation-patterns",
      "spring-animation",
      "view-transitions-shared-element",
      "what-happens-google-com",
      "event-loop",
      "core-web-vitals"
    ],
    "mentions": [
      "js-timers-accuracy",
      "parallax-scrollytelling"
    ]
  },
  "view-transitions-shared-element": {
    "links": [
      "animation-patterns",
      "spring-animation",
      "animation-performance"
    ],
    "mentions": []
  },
  "spring-animation": {
    "links": [
      "animation-patterns",
      "view-transitions-shared-element",
      "animation-performance"
    ],
    "mentions": []
  },
  "animation-patterns": {
    "links": [
      "loading-patterns",
      "spring-animation",
      "view-transitions-shared-element",
      "animation-performance"
    ],
    "mentions": []
  },
  "serverless-architecture": {
    "links": [
      "serverless-limits",
      "cold-starts",
      "pub-sub",
      "transactional-outbox",
      "saga-pattern",
      "cloud-cost-optimization",
      "idempotency-key",
      "nextjs-static-dynamic-rendering"
    ],
    "mentions": [
      "dead-letter-queue",
      "realtime-communication",
      "message-queue-basics",
      "db-type-key-value",
      "message-delivery-semantics",
      "kafka-basics",
      "resilience-patterns",
      "http-methods"
    ]
  },
  "transactional-outbox": {
    "links": [
      "db-architecture-by-scale",
      "saga-pattern",
      "event-driven-architecture",
      "message-delivery-semantics",
      "postgres-functions-triggers",
      "dead-letter-queue",
      "idempotency-key",
      "distributed-transactions-2pc",
      "client-data-cache"
    ],
    "mentions": [
      "pessimistic-locking",
      "postgres-reporting-sql",
      "microservices",
      "browser-storage",
      "sd-payment-flow",
      "db-index-design",
      "resilience-patterns",
      "kafka-basics",
      "db-replication-sharding",
      "http-methods",
      "webhooks"
    ]
  },
  "event-sourcing": {
    "links": [
      "event-driven-architecture",
      "cqrs",
      "js-pure-functions",
      "transactional-outbox",
      "schema-versioning"
    ],
    "mentions": [
      "postgres-architecture"
    ]
  },
  "cqrs": {
    "links": [
      "event-sourcing",
      "transactional-outbox",
      "event-driven-architecture",
      "db-replication-sharding",
      "postgres-advanced-sql",
      "optimistic-locking",
      "eventual-consistency",
      "client-data-cache",
      "message-delivery-semantics"
    ],
    "mentions": [
      "elasticsearch-inverted-index",
      "postgres-reporting-sql",
      "db-locking-deadlock",
      "sql-insert-update-delete",
      "postgres-architecture",
      "redis-basics",
      "resilience-patterns",
      "db-modeling-normalization",
      "http-methods"
    ]
  },
  "consistency-models": {
    "links": [
      "db-consistency-cap",
      "eventual-consistency",
      "leader-election",
      "distributed-lock",
      "thread-safety",
      "clock-skew",
      "multi-region",
      "crdt",
      "db-transaction-isolation"
    ],
    "mentions": [
      "mongodb-document-model",
      "db-type-wide-column",
      "db-type-key-value",
      "db-replication-sharding",
      "redis-basics"
    ]
  },
  "fault-tolerance": {
    "links": [
      "high-availability",
      "resilience-patterns",
      "circuit-breaker",
      "chaos-engineering",
      "raft-consensus",
      "network-partitions",
      "merkle-tree",
      "k8s-pod-lifecycle",
      "multi-region",
      "retries",
      "exponential-backoff-jitter",
      "feature-flags",
      "backpressure",
      "js-memory-leak"
    ],
    "mentions": [
      "timeouts",
      "k8s-architecture",
      "event-loop",
      "osi-in-practice",
      "db-type-key-value",
      "http-methods"
    ]
  },
  "high-availability": {
    "links": [
      "sli-slo",
      "failover",
      "multi-region",
      "disaster-recovery",
      "fault-tolerance",
      "rolling-deployment",
      "retries",
      "health-checks",
      "load-balancer-basics",
      "dns",
      "cdn-edge-anycast",
      "autoscaling",
      "postmortems",
      "chaos-engineering",
      "k8s-pod-scheduling",
      "k8s-pod-disruption-budget"
    ],
    "mentions": [
      "timeouts",
      "k8s-deploy-pipeline-eks",
      "reverse-proxy-lb-api-gateway",
      "vpc-basics",
      "osi-in-practice",
      "redis-basics"
    ]
  },
  "js-closures": {
    "links": [
      "js-function-forms",
      "js-first-class-callbacks",
      "js-scope-lexical",
      "garbage-collection",
      "js-var-let-const",
      "js-memory-leak",
      "js-iife-module-pattern",
      "js-currying-partial",
      "js-memoization",
      "debounce-throttle",
      "js-classes",
      "react-rerender"
    ],
    "mentions": []
  },
  "js-first-class-callbacks": {
    "links": [
      "js-function-forms",
      "js-closures",
      "js-callback-hell",
      "js-primitive-vs-reference",
      "js-array-transform",
      "js-async-await",
      "pattern-decorator",
      "js-memoization",
      "js-currying-partial",
      "js-this-binding",
      "js-call-apply-bind",
      "js-memory-leak",
      "react-rerender",
      "retries"
    ],
    "mentions": [
      "js-spread-rest"
    ]
  },
  "js-function-forms": {
    "links": [
      "js-first-class-callbacks",
      "js-closures",
      "js-hoisting-tdz",
      "js-this-binding",
      "js-call-apply-bind",
      "js-optional-chaining-nullish",
      "js-spread-rest",
      "js-strict-mode",
      "js-destructuring"
    ],
    "mentions": [
      "js-classes",
      "js-es-modules",
      "js-truthy-falsy-typeof"
    ]
  },
  "sql-aggregation-pitfalls": {
    "links": [
      "sql-logical-order",
      "sql-filtering-operators",
      "sqld-group-by-having",
      "sql-joins-in-practice",
      "sql-case-when"
    ],
    "mentions": [
      "db-modeling-normalization"
    ]
  },
  "sql-filtering-operators": {
    "links": [
      "sql-logical-order",
      "sql-aggregation-pitfalls",
      "sql-select-where-null",
      "sql-subqueries-exists-lateral",
      "db-index-pitfalls",
      "sql-injection",
      "postgres-jsonb-search"
    ],
    "mentions": [
      "db-index",
      "db-index-design"
    ]
  },
  "sql-logical-order": {
    "links": [
      "sql-select-where-null",
      "sqld-group-by-having",
      "sql-filtering-operators",
      "sql-aggregation-pitfalls",
      "sql-window-functions-pg",
      "postgres-reporting-sql",
      "sql-query-rewrite"
    ],
    "mentions": [
      "db-sharding",
      "db-type-columnar-olap",
      "js-short-circuit",
      "postgres-getting-started"
    ]
  },
  "js-spread-rest": {
    "links": [
      "js-destructuring",
      "js-shallow-deep-copy",
      "js-prototype-chain",
      "js-object-methods",
      "js-currying-partial",
      "js-function-forms",
      "js-immutability-react",
      "js-array-mutation"
    ],
    "mentions": [
      "js-execution-context"
    ]
  },
  "js-destructuring": {
    "links": [
      "js-spread-rest",
      "js-optional-chaining-nullish",
      "react-rerender",
      "js-memoization",
      "js-object-methods"
    ],
    "mentions": [
      "client-data-cache",
      "pattern-iterator",
      "js-pure-functions",
      "js-primitive-vs-reference"
    ]
  },
  "js-array-mutation": {
    "links": [
      "js-array-transform",
      "js-primitive-vs-reference",
      "js-shallow-deep-copy",
      "js-immutability-react",
      "js-spread-rest",
      "js-pure-functions",
      "js-object-methods"
    ],
    "mentions": [
      "js-strict-mode"
    ]
  },
  "js-array-transform": {
    "links": [
      "js-array-mutation",
      "js-equality-coercion",
      "js-promise-combinators",
      "react-rerender",
      "js-memoization",
      "js-short-circuit",
      "js-immutability-react",
      "js-spread-rest"
    ],
    "mentions": [
      "pattern-iterator",
      "js-function-forms",
      "js-truthy-falsy-typeof",
      "js-pure-functions"
    ]
  },
  "js-promise-combinators": {
    "links": [
      "js-callback-hell",
      "js-promises",
      "js-async-await",
      "idempotency-key",
      "client-data-cache",
      "abort-controller",
      "timeouts"
    ],
    "mentions": [
      "browser-fetch",
      "streaming-ssr-suspense",
      "rendering-strategies",
      "sd-payment-flow",
      "event-loop",
      "js-destructuring"
    ]
  },
  "js-async-await": {
    "links": [
      "js-promises",
      "js-callback-hell",
      "js-promise-combinators",
      "event-loop",
      "js-es-modules",
      "abort-controller",
      "client-data-cache"
    ],
    "mentions": [
      "browser-fetch",
      "js-function-forms",
      "js-truthy-falsy-typeof",
      "js-destructuring"
    ]
  },
  "js-promises": {
    "links": [
      "js-callback-hell",
      "js-async-await",
      "js-promise-combinators",
      "event-loop",
      "browser-fetch",
      "abort-controller",
      "client-data-cache"
    ],
    "mentions": [
      "rendering-strategies",
      "js-function-forms",
      "http-status-codes"
    ]
  },
  "js-callback-hell": {
    "links": [
      "js-promises",
      "js-async-await",
      "js-promise-combinators",
      "js-first-class-callbacks",
      "event-loop",
      "saga-pattern",
      "js-this-binding",
      "abort-controller"
    ],
    "mentions": [
      "json-crud-http",
      "message-delivery-semantics",
      "js-function-forms"
    ]
  },
  "layered-architecture": {
    "links": [
      "modular-monolith",
      "monolith-architecture",
      "mvc-pattern",
      "n-plus-one-queries",
      "hexagonal-architecture",
      "clean-architecture",
      "client-data-cache"
    ],
    "mentions": [
      "sql-basics",
      "sd-start-single-server",
      "http-caching-cdn",
      "sql-batch-timeout-pool",
      "http-status-codes",
      "what-happens-google-com"
    ]
  },
  "modular-monolith": {
    "links": [
      "monolith-architecture",
      "microservices-decomposition",
      "layered-architecture",
      "ddd-bounded-context",
      "postgres-roles-security",
      "transactional-outbox",
      "cqrs"
    ],
    "mentions": [
      "rabbitmq-basics",
      "microservices",
      "pattern-proxy",
      "kafka-basics",
      "grpc"
    ]
  },
  "monolith-architecture": {
    "links": [
      "microservices",
      "modular-monolith",
      "layered-architecture",
      "saga-pattern",
      "event-loop",
      "connection-pool",
      "js-memory-leak",
      "scaling-horizontal-vertical",
      "db-architecture-by-scale",
      "feature-flags",
      "microservices-decomposition",
      "micro-frontends"
    ],
    "mentions": [
      "build-caching",
      "db-replication-sharding",
      "osi-in-practice",
      "sql-batch-timeout-pool",
      "redis-basics"
    ]
  },
  "js-hoisting-tdz": {
    "links": [
      "js-var-let-const",
      "js-scope-lexical",
      "js-execution-context",
      "js-strict-mode",
      "js-es-modules"
    ],
    "mentions": [
      "js-function-forms",
      "code-splitting"
    ]
  },
  "js-scope-lexical": {
    "links": [
      "js-var-let-const",
      "js-hoisting-tdz",
      "js-this-binding",
      "js-closures",
      "js-memory-leak",
      "js-strict-mode",
      "react-rerender"
    ],
    "mentions": [
      "js-object-methods",
      "js-function-forms",
      "js-es-modules"
    ]
  },
  "js-var-let-const": {
    "links": [
      "js-scope-lexical",
      "js-hoisting-tdz",
      "js-closures",
      "js-iife-module-pattern",
      "js-es-modules",
      "js-object-methods",
      "js-primitive-vs-reference",
      "js-immutability-react",
      "react-rerender"
    ],
    "mentions": [
      "js-function-forms"
    ]
  },
  "js-truthy-falsy-typeof": {
    "links": [
      "js-primitive-vs-reference",
      "js-equality-coercion",
      "js-optional-chaining-nullish",
      "js-short-circuit",
      "js-hoisting-tdz",
      "js-prototype-chain"
    ],
    "mentions": [
      "json-crud-http",
      "js-destructuring"
    ]
  },
  "js-equality-coercion": {
    "links": [
      "js-primitive-vs-reference",
      "js-truthy-falsy-typeof",
      "react-rerender",
      "js-optional-chaining-nullish"
    ],
    "mentions": [
      "sql-injection",
      "js-template-literals"
    ]
  },
  "js-primitive-vs-reference": {
    "links": [
      "js-equality-coercion",
      "js-truthy-falsy-typeof",
      "js-pure-functions",
      "js-shallow-deep-copy",
      "js-var-let-const",
      "js-object-methods",
      "react-rerender",
      "js-immutability-react",
      "js-array-mutation"
    ],
    "mentions": []
  },
  "ddos-protection": {
    "links": [
      "tcp-connection-lifecycle",
      "udp-and-quic",
      "waf",
      "network-flow-logs",
      "cdn-edge-anycast",
      "layer-mtu-fragmentation",
      "iptables-basics",
      "rate-limiting-in-practice",
      "rate-limiting-algorithms",
      "nginx-https-performance",
      "edge-caching",
      "autoscaling",
      "cloud-cost-optimization",
      "security-groups-nacl",
      "on-call",
      "production-incidents",
      "network-monitoring"
    ],
    "mentions": [
      "layer-link-ethernet-arp",
      "sql-injection",
      "packet-capture-tcpdump",
      "https-tls",
      "cilium-ebpf",
      "vpc-basics",
      "dns",
      "webhooks"
    ]
  },
  "k8s-learning-roadmap": {
    "links": [
      "k8s-certifications",
      "k8s-pod-troubleshooting",
      "linux-files-permissions",
      "linux-processes-signals",
      "linux-systemd-systemctl",
      "linux-grep-awk-sed",
      "linux-namespaces-cgroups",
      "docker-container-basics",
      "dockerfile-image-layers",
      "docker-network-volume",
      "docker-network-drivers",
      "docker-compose",
      "devops-networking-roadmap",
      "layer-ip-addressing",
      "ports-and-sockets",
      "dns",
      "iptables-nat",
      "yaml-for-k8s",
      "curl-for-debugging",
      "local-k8s-kind-minikube",
      "k8s-architecture",
      "k8s-api-objects",
      "k8s-labels-selectors",
      "k8s-controllers-reconcile",
      "kubectl-essentials",
      "kubectl-apply-ssa",
      "kubeconfig-contexts",
      "k8s-namespace",
      "k8s-feature-maturity",
      "kustomize-basics",
      "k8s-pod-basics",
      "k8s-pod-lifecycle",
      "k8s-pod-multicontainer",
      "k8s-pod-probes",
      "k8s-pod-resources",
      "k8s-pod-scheduling",
      "k8s-deployment",
      "rolling-deployment",
      "blue-green-deployment",
      "canary-release",
      "k8s-statefulset",
      "k8s-daemonset",
      "k8s-job-cronjob",
      "k8s-service-types",
      "k8s-kube-proxy-modes",
      "k8s-cni-pod-network",
      "cilium-ebpf",
      "k8s-coredns",
      "k8s-network-policy",
      "kubernetes-ingress",
      "gateway",
      "k8s-gateway-api",
      "service-mesh",
      "k8s-configmap",
      "k8s-secret",
      "secrets-management",
      "external-secrets",
      "k8s-pv-pvc",
      "k8s-storageclass-snapshots",
      "k8s-hpa",
      "k8s-vpa",
      "k8s-in-place-resize",
      "k8s-node-autoscaling-karpenter",
      "autoscaling",
      "k8s-pod-disruption-budget",
      "k8s-certificates-pki",
      "k8s-serviceaccount-tokens",
      "k8s-rbac",
      "k8s-admission-control",
      "k8s-audit-logging",
      "k8s-security-context",
      "k8s-pod-security-admission",
      "k8s-node-maintenance",
      "k8s-cluster-upgrade",
      "k8s-etcd-backup",
      "velero-backup",
      "k8s-cri-cni-csi",
      "k8s-gpu-dra",
      "k8s-batch-kueue",
      "k8s-crd",
      "k8s-operators",
      "k8s-api-aggregation-schedulers",
      "helm-basics",
      "helm-chart-templates",
      "helm-values-secrets",
      "helm-release-lifecycle",
      "helm-dependencies-oci-gitops",
      "argocd-basics",
      "gitops-argocd-vs-flux",
      "k8s-project-structure",
      "k8s-deploy-pipeline-eks",
      "eks-cluster-basics",
      "monitoring-basics",
      "metrics-types",
      "structured-logging",
      "distributed-tracing",
      "prometheus-basics",
      "grafana-dashboards"
    ],
    "mentions": [
      "iptables-basics",
      "cron-jobs",
      "sd-object-storage-architecture",
      "sdn-vxlan-overlay",
      "grpc",
      "db-type-key-value",
      "https-tls",
      "on-call",
      "webhooks"
    ]
  },
  "k8s-certifications": {
    "links": [
      "k8s-learning-roadmap",
      "k8s-pod-troubleshooting",
      "kubectl-essentials",
      "k8s-architecture",
      "k8s-node-maintenance",
      "k8s-coredns",
      "k8s-rbac",
      "k8s-cluster-upgrade",
      "k8s-etcd-backup",
      "k8s-certificates-pki",
      "helm-basics",
      "kustomize-basics",
      "k8s-crd",
      "k8s-operators",
      "k8s-service-types",
      "k8s-network-policy",
      "k8s-gateway-api",
      "kubernetes-ingress",
      "k8s-cni-pod-network",
      "k8s-deployment",
      "k8s-configmap",
      "k8s-secret",
      "k8s-hpa",
      "k8s-pod-scheduling",
      "k8s-pod-resources",
      "k8s-pv-pvc",
      "k8s-storageclass-snapshots",
      "dockerfile-image-layers",
      "k8s-job-cronjob",
      "k8s-daemonset",
      "k8s-pod-multicontainer",
      "blue-green-deployment",
      "canary-release",
      "k8s-feature-maturity",
      "k8s-pod-probes",
      "k8s-admission-control",
      "k8s-serviceaccount-tokens",
      "k8s-security-context",
      "linux-files-permissions",
      "k8s-pod-security-admission",
      "service-mesh",
      "k8s-audit-logging",
      "helm-dependencies-oci-gitops",
      "k8s-deploy-pipeline-eks",
      "distributed-tracing",
      "k8s-kube-proxy-modes",
      "packet-capture-tcpdump",
      "kubeconfig-contexts",
      "yaml-for-k8s",
      "local-k8s-kind-minikube",
      "linux-systemd-systemctl",
      "k8s-api-objects",
      "k8s-labels-selectors"
    ],
    "mentions": [
      "observability-basics",
      "k8s-statefulset",
      "gateway",
      "iptables-basics",
      "cron-jobs",
      "microservices",
      "cilium-ebpf",
      "ci-cd-basics",
      "autoscaling",
      "db-type-key-value",
      "dns",
      "webhooks"
    ]
  },
  "grafana-dashboards": {
    "links": [
      "prometheus-basics",
      "monitoring-basics",
      "metrics-types",
      "alerting",
      "optimistic-locking",
      "argocd-basics",
      "observability-basics",
      "structured-logging",
      "distributed-tracing"
    ],
    "mentions": [
      "terraform-basics",
      "k8s-configmap",
      "docker-container-basics",
      "db-locking-deadlock",
      "http-status-codes"
    ]
  },
  "prometheus-basics": {
    "links": [
      "monitoring-basics",
      "metrics-types",
      "alerting",
      "db-type-time-series",
      "grafana-dashboards"
    ],
    "mentions": [
      "k8s-network-policy",
      "service-discovery",
      "k8s-pod-resources",
      "docker-container-basics",
      "k8s-architecture",
      "helm-basics",
      "kubernetes-ingress",
      "sd-object-storage-architecture",
      "scaling-horizontal-vertical",
      "local-k8s-kind-minikube",
      "zero-downtime-migrations"
    ]
  },
  "gitops-argocd-vs-flux": {
    "links": [
      "argocd-basics",
      "k8s-deploy-pipeline-eks",
      "helm-dependencies-oci-gitops",
      "k8s-rbac",
      "k8s-serviceaccount-tokens",
      "kubectl-apply-ssa",
      "helm-release-lifecycle",
      "external-secrets",
      "secrets-management",
      "helm-values-secrets",
      "canary-release",
      "kustomize-basics"
    ],
    "mentions": [
      "helm-chart-templates",
      "kubernetes-ingress",
      "git-undo",
      "k8s-configmap",
      "docker-container-basics",
      "rollback-strategy",
      "local-k8s-kind-minikube",
      "eks-cluster-basics",
      "k8s-hpa",
      "webhooks"
    ]
  },
  "argocd-basics": {
    "links": [
      "k8s-deploy-pipeline-eks",
      "helm-dependencies-oci-gitops",
      "gitops-argocd-vs-flux",
      "k8s-rbac",
      "k8s-pod-probes",
      "prometheus-basics",
      "rollback-strategy",
      "kubectl-apply-ssa",
      "k8s-hpa",
      "k8s-pod-troubleshooting"
    ],
    "mentions": [
      "k8s-crd",
      "k8s-pv-pvc",
      "k8s-deployment",
      "kubernetes-ingress",
      "k8s-statefulset",
      "k8s-pod-basics",
      "git-undo",
      "k8s-daemonset",
      "k8s-api-objects",
      "k8s-configmap",
      "docker-container-basics",
      "cron-jobs",
      "helm-basics",
      "k8s-labels-selectors",
      "resilience-patterns",
      "local-k8s-kind-minikube",
      "webhooks"
    ]
  },
  "external-secrets": {
    "links": [
      "k8s-secret",
      "secrets-management",
      "helm-values-secrets",
      "k8s-configmap"
    ],
    "mentions": [
      "kubernetes-ingress",
      "k8s-cri-cni-csi",
      "k8s-architecture",
      "helm-basics",
      "iam-basics",
      "base64",
      "sd-object-storage-architecture",
      "local-k8s-kind-minikube",
      "eks-cluster-basics",
      "db-type-key-value"
    ]
  },
  "cilium-ebpf": {
    "links": [
      "k8s-kube-proxy-modes",
      "k8s-network-policy",
      "service-mesh",
      "k8s-cni-pod-network"
    ],
    "mentions": [
      "k8s-service-types",
      "iptables-nat",
      "k8s-daemonset",
      "linux-namespaces-cgroups",
      "iptables-basics",
      "k8s-coredns",
      "packet-capture-tcpdump",
      "db-type-key-value",
      "sdn-vxlan-overlay",
      "osi-in-practice",
      "ddos-protection",
      "layer-ip-routing-icmp",
      "https-tls",
      "udp-and-quic",
      "layer-mtu-fragmentation",
      "dns"
    ]
  },
  "k8s-batch-kueue": {
    "links": [
      "k8s-job-cronjob",
      "k8s-api-aggregation-schedulers",
      "k8s-gpu-dra"
    ],
    "mentions": [
      "k8s-service-types",
      "k8s-pod-resources",
      "k8s-feature-maturity",
      "k8s-node-maintenance",
      "postgres-architecture",
      "local-k8s-kind-minikube",
      "dns",
      "webhooks"
    ]
  },
  "k8s-gpu-dra": {
    "links": [
      "k8s-pod-scheduling",
      "k8s-pod-resources",
      "k8s-batch-kueue"
    ],
    "mentions": [
      "k8s-architecture",
      "k8s-storageclass-snapshots",
      "k8s-feature-maturity",
      "k8s-daemonset",
      "k8s-node-autoscaling-karpenter",
      "k8s-configmap",
      "api-versioning",
      "local-k8s-kind-minikube",
      "grpc",
      "eks-cluster-basics"
    ]
  },
  "k8s-api-aggregation-schedulers": {
    "links": [
      "k8s-crd",
      "k8s-operators",
      "k8s-pod-scheduling",
      "k8s-batch-kueue",
      "k8s-hpa",
      "k8s-namespace",
      "k8s-feature-maturity"
    ],
    "mentions": [
      "k8s-architecture",
      "k8s-certificates-pki",
      "kubectl-apply-ssa",
      "k8s-configmap",
      "docker-container-basics",
      "cron-jobs",
      "leader-election",
      "local-k8s-kind-minikube",
      "db-type-key-value",
      "eks-cluster-basics"
    ]
  },
  "k8s-cri-cni-csi": {
    "links": [
      "k8s-cni-pod-network",
      "k8s-pv-pvc",
      "k8s-pod-resources",
      "eks-cluster-basics",
      "k8s-gpu-dra",
      "k8s-crd",
      "k8s-api-aggregation-schedulers"
    ],
    "mentions": [
      "k8s-secret",
      "k8s-storageclass-snapshots",
      "k8s-architecture",
      "docker-container-basics",
      "k8s-statefulset",
      "k8s-pod-basics",
      "docker-network-volume",
      "iptables-nat",
      "k8s-daemonset",
      "k8s-api-objects",
      "k8s-pod-multicontainer",
      "dockerfile-image-layers",
      "iptables-basics",
      "cilium-ebpf",
      "sdn-vxlan-overlay",
      "osi-in-practice",
      "local-k8s-kind-minikube",
      "grpc"
    ]
  },
  "k8s-operators": {
    "links": [
      "k8s-controllers-reconcile",
      "k8s-crd",
      "k8s-api-objects",
      "kubectl-apply-ssa",
      "k8s-namespace",
      "k8s-rbac",
      "k8s-api-aggregation-schedulers"
    ],
    "mentions": [
      "k8s-architecture",
      "kubernetes-ingress",
      "k8s-pod-basics",
      "helm-dependencies-oci-gitops",
      "k8s-deploy-pipeline-eks",
      "ansible-network-automation",
      "cron-jobs",
      "helm-basics",
      "postgres-operations",
      "k8s-labels-selectors",
      "kafka-basics",
      "leader-election",
      "local-k8s-kind-minikube",
      "db-type-key-value",
      "dns",
      "on-call",
      "webhooks"
    ]
  },
  "k8s-crd": {
    "links": [
      "k8s-api-objects",
      "k8s-controllers-reconcile",
      "k8s-operators",
      "k8s-api-aggregation-schedulers",
      "helm-release-lifecycle",
      "kubectl-apply-ssa",
      "k8s-admission-control",
      "k8s-feature-maturity"
    ],
    "mentions": [
      "k8s-architecture",
      "kubernetes-ingress",
      "k8s-configmap",
      "k8s-deploy-pipeline-eks",
      "cron-jobs",
      "js-strict-mode",
      "what-happens-google-com",
      "local-k8s-kind-minikube",
      "db-type-key-value",
      "k8s-hpa",
      "webhooks"
    ]
  },
  "k8s-certificates-pki": {
    "links": [
      "local-k8s-kind-minikube",
      "https-tls",
      "encryption-in-transit",
      "k8s-architecture",
      "k8s-rbac",
      "k8s-secret",
      "k8s-serviceaccount-tokens",
      "k8s-cluster-upgrade",
      "k8s-etcd-backup",
      "kubeconfig-contexts"
    ],
    "mentions": [
      "k8s-hpa",
      "kubectl-essentials",
      "kubernetes-ingress",
      "service-mesh",
      "what-happens-google-com",
      "layer-ip-addressing",
      "db-type-key-value",
      "eks-cluster-basics",
      "dns"
    ]
  },
  "k8s-audit-logging": {
    "links": [
      "local-k8s-kind-minikube",
      "k8s-rbac",
      "k8s-admission-control",
      "structured-logging",
      "k8s-secret",
      "encryption-at-rest",
      "k8s-pod-security-admission"
    ],
    "mentions": [
      "proxy-reverse-proxy",
      "kubernetes-ingress",
      "k8s-pod-basics",
      "iptables-nat",
      "k8s-configmap",
      "docker-container-basics",
      "k8s-architecture",
      "osi-in-practice",
      "http-status-codes",
      "db-type-key-value",
      "eks-cluster-basics",
      "webhooks"
    ]
  },
  "k8s-admission-control": {
    "links": [
      "local-k8s-kind-minikube",
      "k8s-rbac",
      "k8s-pod-security-admission",
      "k8s-audit-logging",
      "kubectl-apply-ssa",
      "webhooks",
      "k8s-certificates-pki"
    ],
    "mentions": [
      "k8s-pod-disruption-budget",
      "k8s-network-policy",
      "k8s-pod-resources",
      "kubernetes-ingress",
      "k8s-cluster-upgrade",
      "k8s-pod-basics",
      "terraform-basics",
      "k8s-configmap",
      "docker-container-basics",
      "gateway",
      "k8s-deploy-pipeline-eks",
      "k8s-architecture",
      "authn-vs-authz",
      "what-happens-google-com",
      "high-availability",
      "db-type-key-value"
    ]
  },
  "velero-backup": {
    "links": [
      "k8s-etcd-backup",
      "backup-strategy",
      "disaster-recovery",
      "k8s-storageclass-snapshots",
      "k8s-pod-security-admission"
    ],
    "mentions": [
      "k8s-rbac",
      "k8s-pod-scheduling",
      "k8s-pod-resources",
      "k8s-daemonset",
      "k8s-configmap",
      "k8s-pod-multicontainer",
      "docker-container-basics",
      "k8s-cri-cni-csi",
      "k8s-service-types",
      "k8s-architecture",
      "kubernetes-ingress",
      "postgres-architecture",
      "postgres-operations",
      "local-k8s-kind-minikube",
      "eks-cluster-basics",
      "db-type-key-value",
      "github-actions-docker-ecr",
      "dns"
    ]
  },
  "k8s-etcd-backup": {
    "links": [
      "raft-consensus",
      "velero-backup",
      "k8s-cluster-upgrade",
      "k8s-architecture",
      "backup-strategy",
      "k8s-secret",
      "encryption-at-rest",
      "disaster-recovery"
    ],
    "mentions": [
      "k8s-pv-pvc",
      "k8s-api-objects",
      "k8s-configmap",
      "k8s-controllers-reconcile",
      "docker-container-basics",
      "db-type-key-value",
      "autoscaling",
      "leader-election",
      "postgres-operations",
      "local-k8s-kind-minikube",
      "layer-ip-addressing",
      "eks-cluster-basics"
    ]
  },
  "k8s-cluster-upgrade": {
    "links": [
      "k8s-node-maintenance",
      "k8s-feature-maturity",
      "k8s-etcd-backup",
      "k8s-architecture",
      "linux-namespaces-cgroups",
      "k8s-pod-disruption-budget",
      "eks-cluster-basics",
      "velero-backup"
    ],
    "mentions": [
      "k8s-pod-security-admission",
      "k8s-deployment",
      "kubernetes-ingress",
      "iptables-nat",
      "k8s-configmap",
      "k8s-cri-cni-csi",
      "k8s-admission-control",
      "cron-jobs",
      "k8s-coredns",
      "helm-basics",
      "rollback-strategy",
      "k8s-pod-scheduling",
      "local-k8s-kind-minikube",
      "db-type-key-value",
      "k8s-hpa",
      "webhooks"
    ]
  },
  "k8s-node-maintenance": {
    "links": [
      "k8s-pod-disruption-budget",
      "k8s-cluster-upgrade",
      "k8s-pod-scheduling"
    ],
    "mentions": [
      "k8s-pod-lifecycle",
      "k8s-architecture",
      "k8s-daemonset",
      "k8s-statefulset",
      "k8s-pod-basics",
      "docker-container-basics",
      "local-k8s-kind-minikube"
    ]
  },
  "k8s-job-cronjob": {
    "links": [
      "cron-jobs",
      "batch-processing",
      "k8s-batch-kueue",
      "k8s-pod-lifecycle",
      "k8s-pod-disruption-budget",
      "helm-release-lifecycle",
      "idempotency-key",
      "k8s-pod-multicontainer",
      "k8s-pod-troubleshooting",
      "kubectl-essentials",
      "k8s-statefulset",
      "k8s-daemonset"
    ],
    "mentions": [
      "k8s-service-types",
      "db-architecture-by-scale",
      "k8s-pod-resources",
      "k8s-architecture",
      "message-delivery-semantics",
      "k8s-node-maintenance",
      "resilience-patterns",
      "local-k8s-kind-minikube",
      "db-type-key-value",
      "http-methods",
      "dns",
      "webhooks"
    ]
  },
  "k8s-daemonset": {
    "links": [
      "k8s-pod-scheduling",
      "k8s-pod-resources",
      "k8s-statefulset",
      "k8s-job-cronjob",
      "k8s-gpu-dra",
      "prometheus-basics",
      "k8s-node-autoscaling-karpenter",
      "k8s-node-maintenance",
      "k8s-pod-troubleshooting",
      "kubectl-essentials",
      "k8s-cni-pod-network",
      "k8s-architecture"
    ],
    "mentions": [
      "k8s-deployment",
      "iptables-nat",
      "iptables-basics",
      "cilium-ebpf",
      "local-k8s-kind-minikube",
      "eks-cluster-basics"
    ]
  },
  "k8s-statefulset": {
    "links": [
      "k8s-deployment",
      "k8s-pv-pvc",
      "k8s-storageclass-snapshots",
      "k8s-service-types",
      "k8s-coredns",
      "k8s-node-maintenance",
      "k8s-pod-disruption-budget",
      "k8s-operators",
      "k8s-pod-troubleshooting",
      "k8s-daemonset",
      "k8s-job-cronjob"
    ],
    "mentions": [
      "k8s-pod-lifecycle",
      "k8s-pod-scheduling",
      "k8s-pod-basics",
      "iptables-nat",
      "db-type-wide-column",
      "docker-container-basics",
      "k8s-deploy-pipeline-eks",
      "k8s-architecture",
      "rollback-strategy",
      "kafka-basics",
      "postgres-operations",
      "local-k8s-kind-minikube",
      "db-type-key-value",
      "k8s-hpa",
      "dns"
    ]
  },
  "k8s-storageclass-snapshots": {
    "links": [
      "k8s-pv-pvc",
      "backup-strategy"
    ],
    "mentions": [
      "k8s-cri-cni-csi",
      "gateway",
      "k8s-statefulset",
      "k8s-pod-scheduling",
      "k8s-daemonset",
      "k8s-api-objects",
      "k8s-configmap",
      "docker-container-basics",
      "k8s-architecture",
      "cron-jobs",
      "velero-backup",
      "local-k8s-kind-minikube",
      "grpc"
    ]
  },
  "k8s-gateway-api": {
    "links": [
      "kubernetes-ingress",
      "gateway",
      "k8s-service-types"
    ],
    "mentions": [
      "k8s-admission-control",
      "https-tls",
      "helm-basics",
      "service-mesh",
      "api-versioning",
      "http-status-codes",
      "what-happens-google-com",
      "local-k8s-kind-minikube",
      "grpc",
      "cors",
      "first-page-from-power-on",
      "dns"
    ]
  },
  "k8s-kube-proxy-modes": {
    "links": [
      "iptables-nat",
      "k8s-service-types",
      "k8s-cni-pod-network",
      "cilium-ebpf"
    ],
    "mentions": [
      "k8s-network-policy",
      "k8s-daemonset",
      "vpc-subnets-route-tables",
      "osi-in-practice",
      "tcp-connection-lifecycle",
      "iptables-basics",
      "cors",
      "k8s-architecture",
      "layer-ip-addressing",
      "layer-ip-routing-icmp",
      "udp-and-quic",
      "dns"
    ]
  },
  "k8s-in-place-resize": {
    "links": [
      "k8s-vpa",
      "k8s-pod-resources",
      "k8s-node-autoscaling-karpenter",
      "k8s-hpa"
    ],
    "mentions": [
      "garbage-collection",
      "k8s-pod-basics",
      "linux-namespaces-cgroups",
      "k8s-pod-multicontainer",
      "k8s-architecture",
      "k8s-pod-troubleshooting",
      "local-k8s-kind-minikube"
    ]
  },
  "k8s-node-autoscaling-karpenter": {
    "links": [
      "autoscaling",
      "k8s-hpa",
      "eks-cluster-basics",
      "k8s-pod-disruption-budget",
      "k8s-pod-resources",
      "cloud-cost-optimization",
      "k8s-pod-scheduling",
      "k8s-vpa",
      "k8s-in-place-resize"
    ],
    "mentions": [
      "serverless-architecture",
      "k8s-pod-basics",
      "k8s-daemonset",
      "k8s-api-objects",
      "k8s-configmap",
      "k8s-architecture",
      "k8s-coredns",
      "security-groups-nacl",
      "local-k8s-kind-minikube",
      "vpc-basics"
    ]
  },
  "k8s-vpa": {
    "links": [
      "k8s-pod-resources",
      "k8s-in-place-resize",
      "k8s-pod-disruption-budget",
      "k8s-hpa",
      "k8s-node-autoscaling-karpenter",
      "cloud-cost-optimization"
    ],
    "mentions": [
      "k8s-admission-control",
      "k8s-pod-basics",
      "k8s-architecture",
      "helm-basics",
      "js-memory-leak",
      "leader-election",
      "postgres-architecture",
      "local-k8s-kind-minikube"
    ]
  },
  "k8s-pod-disruption-budget": {
    "links": [
      "k8s-vpa",
      "k8s-in-place-resize",
      "k8s-node-autoscaling-karpenter",
      "k8s-pod-resources",
      "k8s-deployment",
      "k8s-pod-probes",
      "eks-cluster-basics",
      "k8s-hpa",
      "k8s-pod-scheduling",
      "k8s-node-maintenance"
    ],
    "mentions": [
      "k8s-architecture",
      "k8s-pod-lifecycle",
      "k8s-cluster-upgrade",
      "k8s-statefulset",
      "k8s-pod-basics",
      "k8s-daemonset",
      "docker-container-basics",
      "helm-basics",
      "kafka-basics",
      "local-k8s-kind-minikube",
      "db-type-key-value"
    ]
  },
  "k8s-pod-security-admission": {
    "links": [
      "k8s-namespace",
      "k8s-security-context",
      "k8s-rbac",
      "k8s-serviceaccount-tokens",
      "k8s-admission-control",
      "k8s-audit-logging"
    ],
    "mentions": [
      "k8s-statefulset",
      "k8s-cluster-upgrade",
      "k8s-pod-basics",
      "iptables-nat",
      "terraform-basics",
      "docker-container-basics",
      "k8s-cri-cni-csi",
      "local-k8s-kind-minikube",
      "db-type-key-value",
      "eks-cluster-basics",
      "webhooks"
    ]
  },
  "k8s-security-context": {
    "links": [
      "linux-namespaces-cgroups",
      "linux-files-permissions",
      "k8s-rbac",
      "k8s-serviceaccount-tokens",
      "k8s-pod-security-admission"
    ],
    "mentions": [
      "docker-container-basics",
      "k8s-architecture",
      "local-k8s-kind-minikube"
    ]
  },
  "k8s-serviceaccount-tokens": {
    "links": [
      "k8s-rbac",
      "jwt-key-rotation",
      "k8s-security-context",
      "k8s-pod-security-admission",
      "eks-cluster-basics",
      "github-actions-docker-ecr"
    ],
    "mentions": [
      "json-crud-http",
      "base64",
      "k8s-controllers-reconcile",
      "k8s-architecture",
      "local-k8s-kind-minikube",
      "db-type-key-value",
      "token-login",
      "webhooks"
    ]
  },
  "k8s-rbac": {
    "links": [
      "k8s-namespace",
      "k8s-secret",
      "k8s-serviceaccount-tokens",
      "k8s-security-context",
      "k8s-pod-security-admission",
      "k8s-certificates-pki",
      "k8s-audit-logging",
      "iam-basics",
      "k8s-admission-control",
      "eks-cluster-basics"
    ],
    "mentions": [
      "k8s-architecture",
      "docker-container-basics",
      "local-k8s-kind-minikube",
      "db-type-key-value",
      "webhooks"
    ]
  },
  "kustomize-basics": {
    "links": [
      "k8s-project-structure",
      "helm-dependencies-oci-gitops",
      "kubectl-essentials",
      "kubectl-apply-ssa",
      "kubeconfig-contexts",
      "k8s-labels-selectors",
      "k8s-configmap",
      "k8s-secret",
      "helm-values-secrets",
      "helm-basics",
      "helm-chart-templates"
    ],
    "mentions": [
      "k8s-deployment",
      "k8s-pod-basics",
      "local-k8s-kind-minikube",
      "github-actions-docker-ecr",
      "k8s-hpa"
    ]
  },
  "kubeconfig-contexts": {
    "links": [
      "kubectl-essentials",
      "kubectl-apply-ssa",
      "kustomize-basics",
      "k8s-namespace",
      "eks-cluster-basics",
      "k8s-rbac",
      "k8s-serviceaccount-tokens"
    ],
    "mentions": [
      "local-k8s-kind-minikube",
      "k8s-architecture",
      "token-login",
      "linux-files-permissions"
    ]
  },
  "kubectl-apply-ssa": {
    "links": [
      "k8s-api-objects",
      "k8s-controllers-reconcile",
      "kubectl-essentials",
      "kubeconfig-contexts",
      "kustomize-basics",
      "k8s-secret",
      "helm-release-lifecycle",
      "k8s-project-structure"
    ],
    "mentions": [
      "k8s-configmap",
      "k8s-admission-control",
      "local-k8s-kind-minikube",
      "db-type-key-value",
      "k8s-hpa",
      "webhooks"
    ]
  },
  "kubectl-essentials": {
    "links": [
      "k8s-pod-troubleshooting",
      "kubectl-apply-ssa",
      "kubeconfig-contexts",
      "kustomize-basics",
      "k8s-api-objects",
      "k8s-labels-selectors",
      "k8s-pod-lifecycle",
      "k8s-deployment",
      "k8s-controllers-reconcile",
      "k8s-pod-scheduling",
      "k8s-service-types"
    ],
    "mentions": [
      "k8s-pod-basics",
      "dockerfile-image-layers",
      "iptables-nat",
      "k8s-configmap",
      "docker-container-basics",
      "realtime-communication",
      "k8s-architecture",
      "kubernetes-ingress",
      "security-groups-nacl",
      "local-k8s-kind-minikube",
      "db-type-key-value",
      "dns"
    ]
  },
  "k8s-feature-maturity": {
    "links": [
      "k8s-api-objects",
      "k8s-cluster-upgrade",
      "k8s-pod-security-admission",
      "k8s-labels-selectors"
    ],
    "mentions": [
      "k8s-admission-control",
      "k8s-pod-disruption-budget",
      "k8s-in-place-resize",
      "k8s-architecture",
      "k8s-deployment",
      "k8s-network-policy",
      "k8s-service-types",
      "k8s-statefulset",
      "k8s-api-aggregation-schedulers",
      "k8s-pod-basics",
      "k8s-daemonset",
      "k8s-deploy-pipeline-eks",
      "cron-jobs",
      "helm-basics",
      "kubernetes-ingress",
      "local-k8s-kind-minikube",
      "db-type-key-value",
      "eks-cluster-basics",
      "k8s-hpa",
      "webhooks"
    ]
  },
  "k8s-controllers-reconcile": {
    "links": [
      "k8s-api-objects",
      "k8s-labels-selectors",
      "k8s-crd",
      "k8s-operators",
      "exponential-backoff-jitter",
      "kubectl-apply-ssa",
      "leader-election"
    ],
    "mentions": [
      "k8s-architecture",
      "k8s-pod-basics",
      "k8s-configmap",
      "resilience-patterns",
      "local-k8s-kind-minikube",
      "db-type-key-value",
      "k8s-hpa",
      "http-methods",
      "webhooks"
    ]
  },
  "k8s-labels-selectors": {
    "links": [
      "k8s-api-objects",
      "k8s-controllers-reconcile",
      "k8s-service-types",
      "k8s-deployment",
      "k8s-pod-scheduling",
      "k8s-pod-troubleshooting"
    ],
    "mentions": [
      "k8s-pod-disruption-budget",
      "k8s-network-policy",
      "k8s-statefulset",
      "k8s-pod-basics",
      "iptables-nat",
      "k8s-daemonset",
      "docker-container-basics",
      "helm-basics",
      "local-k8s-kind-minikube",
      "dns"
    ]
  },
  "k8s-api-objects": {
    "links": [
      "k8s-controllers-reconcile",
      "k8s-labels-selectors",
      "k8s-feature-maturity",
      "kubectl-apply-ssa",
      "k8s-namespace",
      "optimistic-locking",
      "k8s-crd"
    ],
    "mentions": [
      "k8s-network-policy",
      "k8s-pod-basics",
      "k8s-configmap",
      "docker-container-basics",
      "cron-jobs",
      "kubernetes-ingress",
      "db-locking-deadlock",
      "what-happens-google-com",
      "local-k8s-kind-minikube",
      "db-type-key-value",
      "k8s-hpa",
      "dns"
    ]
  },
  "devops-networking-roadmap": {
    "links": [
      "osi-in-practice",
      "what-happens-google-com",
      "network-layers-overview",
      "layer-ip-addressing",
      "layer-link-ethernet-arp",
      "layer-ip-routing-icmp",
      "ports-and-sockets",
      "tcp-connection-lifecycle",
      "dns",
      "hosts-file",
      "udp-and-quic",
      "ipv6-basics",
      "network-troubleshooting-by-layer",
      "vlan-basics",
      "proxy-reverse-proxy",
      "load-balancer-basics",
      "load-balancing-algorithms",
      "vpn-ipsec-wireguard",
      "nginx-reverse-proxy",
      "vpc-basics",
      "vpc-subnets-route-tables",
      "security-groups-nacl",
      "vpc-peering-transit-privatelink",
      "cdn-edge-anycast",
      "http-caching-cdn",
      "edge-caching",
      "iam-basics",
      "iac-basics",
      "terraform-basics",
      "terraform-modules-tfvars",
      "terraform-network-iac",
      "ansible-network-automation",
      "network-config-cicd",
      "service-discovery",
      "health-checks",
      "k8s-service-types",
      "k8s-coredns",
      "linux-namespaces-cgroups",
      "iptables-nat",
      "docker-network-volume",
      "docker-network-drivers",
      "k8s-cni-pod-network",
      "kubernetes-ingress",
      "gateway",
      "service-mesh",
      "retries",
      "eks-cluster-basics",
      "monitoring-basics",
      "network-monitoring",
      "network-flow-logs",
      "packet-capture-tcpdump",
      "structured-logging",
      "distributed-tracing",
      "metrics-types",
      "percentile-latency",
      "iptables-basics",
      "k8s-network-policy",
      "ids-ips",
      "waf",
      "https-tls",
      "encryption-in-transit",
      "zero-trust-architecture",
      "ssrf",
      "latency-bandwidth-throughput",
      "tcp-reliability-congestion",
      "layer-mtu-fragmentation",
      "traffic-shaping-qos",
      "tail-latency",
      "timeouts",
      "sdn-vxlan-overlay"
    ],
    "mentions": [
      "reverse-proxy-lb-api-gateway",
      "curl-for-debugging",
      "k8s-architecture",
      "http-status-codes",
      "resilience-patterns",
      "dhcp",
      "cilium-ebpf",
      "on-call"
    ]
  },
  "local-k8s-kind-minikube": {
    "links": [
      "k8s-architecture",
      "kubeconfig-contexts",
      "k8s-network-policy",
      "k8s-cni-pod-network",
      "linux-namespaces-cgroups",
      "k8s-feature-maturity",
      "kubectl-essentials"
    ],
    "mentions": [
      "k8s-hpa",
      "k8s-service-types",
      "k8s-storageclass-snapshots",
      "k8s-pod-basics",
      "iptables-nat",
      "helm-dependencies-oci-gitops",
      "k8s-cri-cni-csi",
      "helm-basics",
      "cilium-ebpf",
      "db-type-embedded",
      "iac-basics",
      "k8s-pod-scheduling",
      "db-type-key-value",
      "react-rerender"
    ]
  },
  "curl-for-debugging": {
    "links": [
      "network-troubleshooting-by-layer",
      "http-message",
      "https-tls",
      "http-versions",
      "http-status-codes",
      "retries",
      "idempotency-key",
      "packet-capture-tcpdump",
      "timeouts",
      "k8s-pod-troubleshooting",
      "linux-namespaces-cgroups",
      "k8s-coredns"
    ],
    "mentions": [
      "dockerfile-image-layers",
      "k8s-service-types",
      "docker-container-basics",
      "kubernetes-ingress",
      "sd-start-single-server",
      "service-mesh",
      "iptables-nat",
      "security-groups-nacl",
      "osi-in-practice",
      "resilience-patterns",
      "what-happens-google-com",
      "local-k8s-kind-minikube",
      "grpc",
      "first-page-from-power-on",
      "http-methods",
      "dns"
    ]
  },
  "yaml-for-k8s": {
    "links": [
      "helm-chart-templates",
      "k8s-secret",
      "helm-basics",
      "kubectl-apply-ssa"
    ],
    "mentions": [
      "k8s-architecture",
      "github-actions-docker-ecr",
      "k8s-project-structure",
      "k8s-configmap",
      "helm-dependencies-oci-gitops",
      "grpc",
      "js-truthy-falsy-typeof",
      "linux-files-permissions",
      "local-k8s-kind-minikube",
      "db-type-key-value"
    ]
  },
  "linux-namespaces-cgroups": {
    "links": [
      "docker-container-basics",
      "k8s-pod-resources",
      "linux-processes-signals",
      "dockerfile-image-layers",
      "docker-network-drivers",
      "k8s-cni-pod-network",
      "linux-files-permissions",
      "k8s-pod-troubleshooting",
      "linux-systemd-systemctl",
      "garbage-collection"
    ],
    "mentions": [
      "k8s-pod-basics",
      "k8s-cri-cni-csi",
      "iptables-basics",
      "k8s-security-context",
      "k8s-architecture",
      "packet-capture-tcpdump",
      "sql-aggregation-pitfalls",
      "osi-in-practice",
      "layer-ip-routing-icmp"
    ]
  },
  "iac-basics": {
    "links": [
      "terraform-basics",
      "terraform-modules-tfvars",
      "terraform-network-iac",
      "ansible-network-automation",
      "network-config-cicd",
      "dockerfile-image-layers",
      "helm-dependencies-oci-gitops",
      "secrets-management"
    ],
    "mentions": [
      "k8s-api-objects",
      "disaster-recovery",
      "rollback-strategy",
      "security-groups-nacl",
      "osi-in-practice",
      "vpc-basics",
      "http-methods",
      "dns"
    ]
  },
  "dependency-hell": {
    "links": [
      "semantic-versioning",
      "build-caching",
      "pattern-singleton",
      "secrets-management"
    ],
    "mentions": [
      "dockerfile-image-layers",
      "js-hoisting-tdz"
    ]
  },
  "semantic-versioning": {
    "links": [
      "dependency-hell",
      "git-branching-strategy",
      "api-versioning",
      "helm-dependencies-oci-gitops"
    ],
    "mentions": [
      "helm-basics"
    ]
  },
  "k8s-architecture": {
    "links": [
      "k8s-api-objects",
      "k8s-controllers-reconcile",
      "kubectl-apply-ssa",
      "k8s-pod-scheduling",
      "k8s-pod-lifecycle",
      "optimistic-locking",
      "k8s-secret",
      "raft-consensus",
      "k8s-etcd-backup",
      "leader-election",
      "eks-cluster-basics",
      "k8s-service-types",
      "k8s-cni-pod-network",
      "iptables-nat"
    ],
    "mentions": [
      "k8s-pod-basics",
      "local-k8s-kind-minikube",
      "grpc",
      "iptables-basics",
      "health-checks",
      "db-type-key-value",
      "kubernetes-ingress",
      "cilium-ebpf",
      "osi-in-practice",
      "high-availability"
    ]
  },
  "cloud-cost-optimization": {
    "links": [
      "serverless-limits",
      "autoscaling",
      "vpc-subnets-route-tables",
      "vpc-peering-transit-privatelink",
      "k8s-pod-resources",
      "network-flow-logs"
    ],
    "mentions": [
      "serverless-architecture",
      "k8s-node-autoscaling-karpenter",
      "terraform-basics",
      "db-type-key-value",
      "docker-container-basics",
      "rest-api-design",
      "sd-start-single-server",
      "k8s-node-maintenance",
      "kafka-basics",
      "postgres-architecture",
      "redis-basics",
      "high-availability",
      "github-actions-docker-ecr",
      "vpc-basics"
    ]
  },
  "serverless-limits": {
    "links": [
      "cold-starts",
      "cloud-cost-optimization",
      "timeouts",
      "idempotency-key",
      "connection-pool"
    ],
    "mentions": [
      "serverless-architecture",
      "db-architecture-by-scale",
      "db-type-key-value",
      "rest-api-design",
      "iam-basics",
      "db-type-relational",
      "resilience-patterns",
      "dead-letter-queue",
      "webhooks"
    ]
  },
  "cold-starts": {
    "links": [
      "serverless-limits",
      "autoscaling",
      "percentile-latency",
      "cloud-cost-optimization"
    ],
    "mentions": [
      "serverless-architecture",
      "https-tls",
      "k8s-deploy-pipeline-eks",
      "docker-container-basics",
      "latency-bandwidth-throughput",
      "vpc-basics",
      "webhooks"
    ]
  },
  "postmortems": {
    "links": [
      "production-incidents",
      "on-call",
      "chaos-engineering",
      "structured-logging",
      "error-budgets"
    ],
    "mentions": [
      "health-checks",
      "osi-in-practice",
      "sli-slo"
    ]
  },
  "on-call": {
    "links": [
      "alerting",
      "sli-slo",
      "error-budgets",
      "production-incidents",
      "postmortems",
      "chaos-engineering"
    ],
    "mentions": [
      "osi-in-practice",
      "webhooks"
    ]
  },
  "production-incidents": {
    "links": [
      "chaos-engineering",
      "on-call",
      "postmortems",
      "alerting",
      "sli-slo",
      "timeouts",
      "error-budgets",
      "health-checks"
    ],
    "mentions": [
      "backpressure",
      "osi-in-practice",
      "sql-batch-timeout-pool",
      "http-status-codes",
      "connection-pool"
    ]
  },
  "chaos-engineering": {
    "links": [
      "production-incidents",
      "postmortems",
      "on-call",
      "resilience-patterns",
      "circuit-breaker",
      "sli-slo",
      "retries",
      "timeouts"
    ],
    "mentions": [
      "browser-fetch",
      "docker-container-basics",
      "iptables-basics",
      "tail-latency",
      "network-config-cicd",
      "vpc-basics",
      "eks-cluster-basics"
    ]
  },
  "multi-region": {
    "links": [
      "disaster-recovery",
      "failover",
      "backup-strategy",
      "eventual-consistency",
      "crdt",
      "cdn-edge-anycast",
      "latency-bandwidth-throughput",
      "clock-skew",
      "db-sharding",
      "consistent-hashing"
    ],
    "mentions": [
      "db-type-wide-column",
      "db-type-key-value",
      "sd-multi-datacenter",
      "db-replication-sharding",
      "distributed-tracing",
      "osi-in-practice",
      "redis-basics",
      "postgres-architecture",
      "dns"
    ]
  },
  "failover": {
    "links": [
      "disaster-recovery",
      "multi-region",
      "db-replication-sharding",
      "network-partitions",
      "leader-election",
      "load-balancer-basics",
      "connection-pool",
      "exponential-backoff-jitter",
      "backup-strategy"
    ],
    "mentions": [
      "db-architecture-by-scale",
      "browser-fetch",
      "rest-api-design",
      "distributed-lock",
      "security-groups-nacl",
      "osi-in-practice",
      "sql-batch-timeout-pool",
      "postgres-architecture",
      "db-type-key-value",
      "vpc-basics",
      "layer-link-ethernet-arp",
      "dns"
    ]
  },
  "backup-strategy": {
    "links": [
      "disaster-recovery",
      "failover",
      "postgres-operations",
      "k8s-etcd-backup",
      "velero-backup",
      "encryption-at-rest",
      "multi-region"
    ],
    "mentions": [
      "sd-object-storage-architecture",
      "postgres-architecture",
      "on-call"
    ]
  },
  "disaster-recovery": {
    "links": [
      "backup-strategy",
      "failover",
      "multi-region",
      "postgres-operations",
      "chaos-engineering"
    ],
    "mentions": [
      "k8s-deploy-pipeline-eks",
      "docker-container-basics",
      "db-replication-sharding",
      "sd-object-storage-architecture",
      "sd-start-single-server",
      "osi-in-practice",
      "postgres-architecture",
      "dns",
      "on-call"
    ]
  },
  "jwt-key-rotation": {
    "links": [
      "token-login",
      "oauth",
      "secrets-management",
      "clock-skew"
    ],
    "mentions": [
      "http-caching-cdn",
      "base64"
    ]
  },
  "iam-basics": {
    "links": [
      "eks-cluster-basics",
      "github-actions-docker-ecr",
      "secrets-management",
      "ssrf",
      "k8s-rbac"
    ],
    "mentions": [
      "serverless-architecture",
      "http-status-codes"
    ]
  },
  "secrets-management": {
    "links": [
      "git-large-files-secrets",
      "k8s-secret",
      "helm-values-secrets",
      "external-secrets",
      "dockerfile-image-layers",
      "github-actions-docker-ecr",
      "iam-basics",
      "eks-cluster-basics"
    ],
    "mentions": [
      "k8s-architecture",
      "git-staging-area",
      "sql-batch-timeout-pool",
      "high-availability",
      "db-type-key-value",
      "dns",
      "token-login"
    ]
  },
  "health-checks": {
    "links": [
      "load-balancer-basics",
      "k8s-pod-probes",
      "alerting",
      "circuit-breaker",
      "sli-slo"
    ],
    "mentions": [
      "rate-limiting-in-practice",
      "reverse-proxy-lb-api-gateway",
      "k8s-architecture",
      "resilience-patterns",
      "sd-start-single-server",
      "event-loop",
      "vpc-basics",
      "osi-in-practice",
      "redis-basics",
      "http-status-codes"
    ]
  },
  "error-budgets": {
    "links": [
      "sli-slo",
      "alerting",
      "postmortems"
    ],
    "mentions": [
      "k8s-deploy-pipeline-eks",
      "zero-downtime-migrations"
    ]
  },
  "sli-slo": {
    "links": [
      "alerting",
      "error-budgets",
      "monitoring-basics",
      "metrics-types",
      "failover"
    ],
    "mentions": [
      "osi-in-practice",
      "http-status-codes",
      "dns"
    ]
  },
  "alerting": {
    "links": [
      "monitoring-basics",
      "sli-slo",
      "error-budgets",
      "health-checks",
      "on-call",
      "network-monitoring"
    ],
    "mentions": [
      "cron-jobs",
      "service-discovery",
      "webhooks"
    ]
  },
  "cache-invalidation": {
    "links": [
      "caching-strategies",
      "edge-caching",
      "http-caching-cdn",
      "pub-sub"
    ],
    "mentions": [
      "cdn-edge-anycast",
      "db-replication-sharding",
      "kafka-basics",
      "redis-basics",
      "dns"
    ]
  },
  "edge-caching": {
    "links": [
      "http-caching-cdn",
      "cdn-edge-anycast",
      "cache-invalidation"
    ],
    "mentions": [
      "nginx-https-performance",
      "cookie-session-login",
      "proxy-reverse-proxy",
      "sd-cache-and-cdn-tier",
      "http-status-codes",
      "db-modeling-normalization"
    ]
  },
  "tail-latency": {
    "links": [
      "percentile-latency",
      "retries",
      "timeouts",
      "garbage-collection",
      "latency-bandwidth-throughput",
      "exponential-backoff-jitter",
      "rate-limiting-algorithms",
      "backpressure",
      "circuit-breaker",
      "distributed-tracing"
    ],
    "mentions": [
      "sd-start-single-server",
      "resilience-patterns",
      "grpc",
      "db-partitioning",
      "pub-sub",
      "http-methods"
    ]
  },
  "percentile-latency": {
    "links": [
      "latency-bandwidth-throughput",
      "tail-latency",
      "metrics-types",
      "sli-slo"
    ],
    "mentions": [
      "tcp-connection-lifecycle",
      "sd-latency-numbers",
      "sd-start-single-server",
      "event-loop",
      "sql-batch-timeout-pool",
      "http-status-codes",
      "dns"
    ]
  },
  "ssrf": {
    "links": [
      "webhooks",
      "k8s-network-policy",
      "security-groups-nacl"
    ],
    "mentions": [
      "csrf",
      "race-conditions",
      "layer-ip-addressing",
      "ipv6-basics",
      "cookie-session-login",
      "vpc-basics",
      "dns"
    ]
  },
  "sql-injection": {
    "links": [
      "xss",
      "sql-basics",
      "postgres-roles-security"
    ],
    "mentions": [
      "upper-layers-session-presentation-app"
    ]
  },
  "xss": {
    "links": [
      "html-form-http",
      "cookie-session-login",
      "csrf"
    ],
    "mentions": [
      "json-crud-http",
      "sql-injection"
    ]
  },
  "csrf": {
    "links": [
      "cookie-session-login",
      "cors",
      "xss",
      "http-methods",
      "token-login"
    ],
    "mentions": [
      "what-happens-google-com"
    ]
  },
  "waf": {
    "links": [
      "ids-ips",
      "rate-limiting-in-practice",
      "ddos-protection",
      "sql-injection",
      "xss",
      "csrf",
      "ssrf",
      "iptables-basics",
      "security-groups-nacl",
      "proxy-reverse-proxy"
    ],
    "mentions": [
      "html-form-http",
      "what-happens-google-com",
      "https-tls",
      "vpc-basics",
      "db-modeling-normalization",
      "dns"
    ]
  },
  "encryption-in-transit": {
    "links": [
      "https-tls",
      "encryption-at-rest",
      "zero-trust-architecture",
      "service-mesh",
      "kubernetes-ingress"
    ],
    "mentions": [
      "nginx-basics",
      "nginx-reverse-proxy",
      "k8s-configmap",
      "k8s-architecture",
      "packet-capture-tcpdump",
      "reverse-proxy-lb-api-gateway",
      "authn-vs-authz",
      "linux-processes-signals",
      "kafka-basics",
      "redis-basics",
      "what-happens-google-com",
      "first-page-from-power-on",
      "vpc-basics",
      "layer-link-ethernet-arp",
      "dns"
    ]
  },
  "encryption-at-rest": {
    "links": [
      "encryption-in-transit",
      "sql-injection",
      "iam-basics",
      "secrets-management",
      "backup-strategy"
    ],
    "mentions": [
      "postgres-mvcc-vacuum",
      "linux-files-permissions",
      "optimistic-locking",
      "vpc-basics",
      "db-modeling-normalization"
    ]
  },
  "rolling-deployment": {
    "links": [
      "k8s-deployment",
      "blue-green-deployment",
      "canary-release",
      "load-balancer-basics",
      "idempotency-key",
      "api-versioning",
      "zero-downtime-migrations",
      "k8s-pod-probes",
      "ansible-network-automation"
    ],
    "mentions": [
      "retries",
      "docker-container-basics",
      "reverse-proxy-lb-api-gateway",
      "sd-start-single-server",
      "autoscaling",
      "osi-in-practice",
      "sql-batch-timeout-pool",
      "sql-query-rewrite"
    ]
  },
  "canary-release": {
    "links": [
      "blue-green-deployment",
      "rolling-deployment",
      "feature-flags",
      "ab-testing",
      "load-balancing-algorithms",
      "kubernetes-ingress",
      "gateway",
      "service-mesh",
      "k8s-deployment",
      "zero-downtime-migrations",
      "rollback-strategy"
    ],
    "mentions": [
      "k8s-pod-basics",
      "docker-container-basics",
      "js-memory-leak",
      "sql-batch-timeout-pool",
      "http-status-codes"
    ]
  },
  "blue-green-deployment": {
    "links": [
      "canary-release",
      "rolling-deployment",
      "ci-cd-basics",
      "k8s-deployment",
      "zero-downtime-migrations",
      "rollback-strategy",
      "feature-flags"
    ],
    "mentions": [
      "iptables-nat",
      "docker-container-basics",
      "realtime-communication",
      "reverse-proxy-lb-api-gateway",
      "proxy-reverse-proxy",
      "autoscaling",
      "linux-processes-signals",
      "sql-batch-timeout-pool",
      "redis-basics",
      "cookie-session-login",
      "grpc",
      "dns"
    ]
  },
  "rollback-strategy": {
    "links": [
      "k8s-deployment",
      "k8s-deploy-pipeline-eks",
      "helm-release-lifecycle",
      "ci-cd-basics",
      "build-caching",
      "feature-flags",
      "zero-downtime-migrations",
      "db-migration-tools",
      "dead-letter-queue",
      "sli-slo",
      "error-budgets",
      "canary-release",
      "blue-green-deployment",
      "production-incidents",
      "postmortems"
    ],
    "mentions": [
      "k8s-statefulset",
      "git-undo",
      "k8s-daemonset",
      "k8s-configmap",
      "sd-payment-flow",
      "postgres-operations",
      "redis-basics",
      "cookie-session-login",
      "local-k8s-kind-minikube"
    ]
  },
  "feature-flags": {
    "links": [
      "ab-testing",
      "ci-cd-basics",
      "rollback-strategy",
      "canary-release"
    ],
    "mentions": [
      "observability-basics",
      "autoscaling",
      "distributed-tracing",
      "redis-basics"
    ]
  },
  "build-caching": {
    "links": [
      "dockerfile-image-layers",
      "github-actions-docker-ecr",
      "ci-cd-basics",
      "feature-flags",
      "rollback-strategy"
    ],
    "mentions": [
      "dependency-hell",
      "git-internals-basics",
      "js-strict-mode"
    ]
  },
  "ci-cd-basics": {
    "links": [
      "github-actions-docker-ecr",
      "k8s-deploy-pipeline-eks",
      "network-config-cicd",
      "build-caching",
      "feature-flags",
      "rollback-strategy",
      "k8s-configmap",
      "k8s-secret",
      "canary-release",
      "blue-green-deployment",
      "git-branching-strategy"
    ],
    "mentions": [
      "ab-testing",
      "security-groups-nacl",
      "osi-in-practice",
      "dns"
    ]
  },
  "structured-logging": {
    "links": [
      "observability-basics",
      "distributed-tracing",
      "monitoring-basics",
      "metrics-types"
    ],
    "mentions": [
      "elasticsearch-inverted-index",
      "k8s-daemonset",
      "docker-container-basics",
      "event-loop",
      "linux-grep-awk-sed"
    ]
  },
  "metrics-types": {
    "links": [
      "monitoring-basics",
      "observability-basics",
      "percentile-latency",
      "db-type-time-series",
      "network-monitoring",
      "sli-slo",
      "tail-latency",
      "structured-logging"
    ],
    "mentions": [
      "latency-bandwidth-throughput"
    ]
  },
  "monitoring-basics": {
    "links": [
      "observability-basics",
      "metrics-types",
      "structured-logging",
      "network-monitoring",
      "alerting",
      "sli-slo"
    ],
    "mentions": [
      "prometheus-basics",
      "service-discovery",
      "microservices",
      "event-loop",
      "sql-batch-timeout-pool",
      "vpc-basics",
      "dns"
    ]
  },
  "observability-basics": {
    "links": [
      "monitoring-basics",
      "metrics-types",
      "structured-logging",
      "distributed-tracing",
      "db-type-time-series"
    ],
    "mentions": [
      "event-sourcing",
      "http-status-codes",
      "grpc"
    ]
  },
  "scaling-horizontal-vertical": {
    "links": [
      "autoscaling",
      "db-replication-sharding",
      "db-sharding",
      "garbage-collection",
      "cookie-session-login",
      "caching-strategies",
      "distributed-lock",
      "leader-election",
      "load-balancer-basics",
      "consistent-hashing"
    ],
    "mentions": [
      "linux-processes-signals",
      "network-partitions",
      "sd-object-storage-architecture",
      "sd-start-single-server",
      "sql-batch-timeout-pool",
      "redis-basics",
      "go-concurrency-basics",
      "dns"
    ]
  },
  "autoscaling": {
    "links": [
      "scaling-horizontal-vertical",
      "k8s-hpa",
      "k8s-node-autoscaling-karpenter",
      "garbage-collection",
      "k8s-vpa",
      "cold-starts",
      "db-replication-sharding",
      "db-sharding",
      "rate-limiting-in-practice",
      "backpressure"
    ],
    "mentions": [
      "k8s-architecture",
      "k8s-pod-lifecycle",
      "event-loop",
      "vpc-basics",
      "osi-in-practice",
      "sql-batch-timeout-pool",
      "message-queue-basics"
    ]
  },
  "backpressure": {
    "links": [
      "autoscaling",
      "tcp-reliability-congestion",
      "rate-limiting-in-practice",
      "retries",
      "message-queue-basics",
      "connection-pool"
    ],
    "mentions": [
      "tail-latency",
      "rabbitmq-basics",
      "latency-bandwidth-throughput",
      "http-versions",
      "kafka-basics",
      "sql-batch-timeout-pool",
      "grpc"
    ]
  },
  "garbage-collection": {
    "links": [
      "js-memory-leak",
      "k8s-pod-resources",
      "tail-latency"
    ],
    "mentions": [
      "helm-basics",
      "java-jvm-memory-gc",
      "event-loop",
      "sql-batch-timeout-pool",
      "layer-mtu-fragmentation"
    ]
  },
  "schema-versioning": {
    "links": [
      "api-versioning",
      "grpc",
      "kafka-basics",
      "event-driven-architecture",
      "db-migration-tools",
      "zero-downtime-migrations",
      "message-delivery-semantics"
    ],
    "mentions": [
      "db-architecture-by-scale",
      "sd-queue-logging-automation",
      "rest-api-design",
      "event-sourcing",
      "js-pure-functions",
      "dead-letter-queue"
    ]
  },
  "zero-downtime-migrations": {
    "links": [
      "db-migration-tools",
      "db-architecture-by-scale",
      "db-index-pitfalls",
      "pessimistic-locking",
      "postgres-mvcc-vacuum",
      "batch-processing"
    ],
    "mentions": [
      "k8s-deploy-pipeline-eks",
      "db-replication-sharding",
      "sql-basics"
    ]
  },
  "db-migration-tools": {
    "links": [
      "zero-downtime-migrations",
      "schema-versioning",
      "db-architecture-by-scale",
      "db-index-pitfalls"
    ],
    "mentions": [
      "pessimistic-locking",
      "k8s-pod-probes",
      "k8s-deploy-pipeline-eks",
      "rolling-deployment",
      "sql-basics"
    ]
  },
  "n-plus-one-queries": {
    "links": [
      "sql-query-rewrite",
      "sql-query-tuning",
      "connection-pool",
      "pattern-proxy",
      "latency-bandwidth-throughput",
      "caching-strategies",
      "distributed-tracing"
    ],
    "mentions": [
      "event-loop",
      "db-architecture-by-scale",
      "vpc-basics",
      "sql-batch-timeout-pool",
      "redis-basics"
    ]
  },
  "thread-safety": {
    "links": [
      "race-conditions",
      "deadlocks",
      "event-loop",
      "connection-pool"
    ],
    "mentions": [
      "consistency-models",
      "go-concurrency-basics",
      "acid-transactions"
    ]
  },
  "deadlocks": {
    "links": [
      "db-locking-deadlock",
      "race-conditions",
      "thread-safety",
      "exponential-backoff-jitter",
      "connection-pool",
      "timeouts",
      "pessimistic-locking"
    ],
    "mentions": [
      "k8s-pod-probes",
      "java-jvm-memory-gc",
      "event-loop",
      "osi-in-practice",
      "sql-batch-timeout-pool",
      "go-concurrency-basics"
    ]
  },
  "race-conditions": {
    "links": [
      "deadlocks",
      "thread-safety",
      "pessimistic-locking",
      "distributed-lock",
      "cron-jobs",
      "event-loop",
      "browser-fetch",
      "idempotency-key",
      "optimistic-locking",
      "db-transaction-isolation"
    ],
    "mentions": [
      "postgres-advanced-sql",
      "sd-start-single-server",
      "db-locking-deadlock",
      "sql-batch-timeout-pool",
      "redis-basics",
      "resilience-patterns",
      "go-concurrency-basics",
      "http-methods"
    ]
  },
  "server-sent-events": {
    "links": [
      "realtime-communication",
      "websocket-deep-dive",
      "long-polling",
      "http-versions",
      "loading-patterns"
    ],
    "mentions": [
      "streaming-ssr-suspense",
      "http-message",
      "http-caching-cdn",
      "nginx-reverse-proxy",
      "base64",
      "http-status-codes"
    ]
  },
  "long-polling": {
    "links": [
      "realtime-communication",
      "websocket-deep-dive",
      "server-sent-events",
      "timeouts",
      "message-delivery-semantics",
      "exponential-backoff-jitter"
    ],
    "mentions": [
      "http-caching-cdn",
      "reverse-proxy-lb-api-gateway",
      "http-versions",
      "event-loop",
      "osi-in-practice",
      "sql-batch-timeout-pool",
      "redis-basics"
    ]
  },
  "websocket-deep-dive": {
    "links": [
      "realtime-communication",
      "long-polling",
      "server-sent-events",
      "packet-capture-tcpdump",
      "timeouts",
      "tcp-connection-lifecycle",
      "backpressure",
      "exponential-backoff-jitter",
      "pub-sub",
      "load-balancer-basics",
      "sd-chat-connections",
      "cors",
      "csrf"
    ],
    "mentions": [
      "browser-fetch",
      "sd-queue-logging-automation",
      "reverse-proxy-lb-api-gateway",
      "base64",
      "redis-basics",
      "cookie-session-login"
    ]
  },
  "network-config-cicd": {
    "links": [
      "terraform-network-iac",
      "ansible-network-automation",
      "github-actions-docker-ecr",
      "k8s-deploy-pipeline-eks",
      "terraform-basics"
    ],
    "mentions": [
      "yaml-for-k8s",
      "vpc-subnets-route-tables",
      "iptables-basics",
      "security-groups-nacl",
      "vpc-basics"
    ]
  },
  "ansible-network-automation": {
    "links": [
      "terraform-network-iac",
      "iptables-basics",
      "iptables-nat",
      "network-config-cicd"
    ],
    "mentions": [
      "terraform-basics",
      "security-groups-nacl",
      "vlan-basics",
      "vpc-basics",
      "http-methods"
    ]
  },
  "terraform-network-iac": {
    "links": [
      "terraform-basics",
      "terraform-modules-tfvars",
      "vpc-basics",
      "vpc-subnets-route-tables",
      "security-groups-nacl",
      "vpc-peering-transit-privatelink",
      "layer-ip-addressing",
      "network-flow-logs",
      "network-config-cicd",
      "ansible-network-automation"
    ],
    "mentions": []
  },
  "api-versioning": {
    "links": [
      "rest-api-design",
      "grpc",
      "zero-downtime-migrations",
      "http-caching-cdn",
      "schema-versioning"
    ],
    "mentions": [
      "sd-queue-logging-automation",
      "kafka-basics",
      "http-status-codes",
      "webhooks"
    ]
  },
  "grpc": {
    "links": [
      "rest-api-design",
      "http-versions",
      "api-versioning",
      "timeouts",
      "retries",
      "service-mesh",
      "load-balancing-algorithms"
    ],
    "mentions": [
      "k8s-service-types",
      "iptables-nat",
      "osi-in-practice",
      "iptables-basics",
      "kubernetes-ingress",
      "http-status-codes",
      "k8s-hpa",
      "dns",
      "gateway"
    ]
  },
  "webhooks": {
    "links": [
      "retries",
      "idempotency-key",
      "realtime-communication",
      "clock-skew",
      "timeouts",
      "message-queue-basics",
      "dead-letter-queue",
      "ssrf",
      "exponential-backoff-jitter"
    ],
    "mentions": [
      "postgres-advanced-sql",
      "resilience-patterns",
      "layer-ip-addressing",
      "what-happens-google-com",
      "ipv6-basics",
      "vpc-basics",
      "http-methods",
      "dns"
    ]
  },
  "cron-jobs": {
    "links": [
      "batch-processing",
      "distributed-lock",
      "leader-election",
      "linux-systemd-systemctl",
      "idempotency-key"
    ],
    "mentions": [
      "k8s-architecture",
      "pessimistic-locking",
      "postgres-advanced-sql",
      "message-delivery-semantics",
      "sd-start-single-server",
      "autoscaling",
      "linux-files-permissions",
      "postgres-architecture",
      "local-k8s-kind-minikube",
      "redis-basics",
      "webhooks"
    ]
  },
  "ray-casting": {
    "links": [
      "geohash",
      "quadtree"
    ],
    "mentions": [
      "pythagorean-theorem",
      "sql-filtering-operators",
      "db-modeling-normalization"
    ]
  },
  "quadtree": {
    "links": [
      "geohash",
      "ray-casting"
    ],
    "mentions": [
      "js-execution-context",
      "db-type-key-value",
      "sql-filtering-operators"
    ]
  },
  "geohash": {
    "links": [
      "quadtree",
      "ray-casting"
    ],
    "mentions": [
      "redis-cluster",
      "db-index",
      "db-type-wide-column",
      "db-type-key-value",
      "mongodb-document-model",
      "sd-mq-storage-partitions",
      "sd-proximity-service",
      "db-index-design",
      "redis-basics"
    ]
  },
  "distributed-tracing": {
    "links": [
      "observability-basics",
      "structured-logging",
      "db-index",
      "event-driven-architecture",
      "service-mesh",
      "alerting",
      "network-flow-logs",
      "network-monitoring",
      "timeouts"
    ],
    "mentions": [
      "gateway",
      "rabbitmq-basics",
      "tcp-connection-lifecycle",
      "event-loop",
      "kafka-basics",
      "http-status-codes"
    ]
  },
  "network-flow-logs": {
    "links": [
      "security-groups-nacl",
      "network-monitoring",
      "iptables-basics",
      "vpc-subnets-route-tables",
      "k8s-cni-pod-network",
      "ids-ips",
      "zero-trust-architecture",
      "packet-capture-tcpdump",
      "distributed-tracing"
    ],
    "mentions": [
      "vpc-basics",
      "osi-in-practice",
      "tcp-connection-lifecycle",
      "k8s-service-types",
      "db-type-key-value",
      "eks-cluster-basics",
      "ports-and-sockets",
      "local-custom-domain",
      "dhcp",
      "layer-ip-routing-icmp",
      "packet-encapsulation",
      "udp-and-quic",
      "dns"
    ]
  },
  "network-monitoring": {
    "links": [
      "observability-basics",
      "metrics-types",
      "network-troubleshooting-by-layer",
      "traffic-shaping-qos",
      "tcp-reliability-congestion",
      "tcp-connection-lifecycle",
      "connection-pool",
      "iptables-basics",
      "k8s-coredns",
      "alerting",
      "sli-slo",
      "packet-capture-tcpdump",
      "network-flow-logs",
      "db-type-time-series"
    ],
    "mentions": [
      "what-happens-google-com",
      "local-custom-domain",
      "event-loop",
      "ports-and-sockets",
      "http-status-codes",
      "layer-ip-routing-icmp",
      "disaster-recovery",
      "udp-and-quic",
      "dns"
    ]
  },
  "raft-consensus": {
    "links": [
      "leader-election",
      "db-type-newsql",
      "db-consistency-cap"
    ],
    "mentions": [
      "k8s-architecture",
      "db-type-key-value",
      "kafka-basics"
    ]
  },
  "rsync-algorithm": {
    "links": [
      "merkle-tree",
      "traffic-shaping-qos",
      "sd-file-sync-block-upload"
    ],
    "mentions": []
  },
  "merkle-tree": {
    "links": [
      "eventual-consistency",
      "git-internals-basics",
      "rsync-algorithm",
      "bloom-filter"
    ],
    "mentions": [
      "db-type-wide-column",
      "db-type-key-value",
      "sd-kv-store-versioning",
      "build-caching"
    ]
  },
  "crdt": {
    "links": [
      "operational-transform",
      "eventual-consistency",
      "clock-skew",
      "db-type-wide-column",
      "network-partitions"
    ],
    "mentions": [
      "message-delivery-semantics",
      "js-memory-leak",
      "db-consistency-cap",
      "http-methods"
    ]
  },
  "operational-transform": {
    "links": [
      "crdt",
      "realtime-communication",
      "eventual-consistency"
    ],
    "mentions": []
  },
  "clock-skew": {
    "links": [
      "db-consistency-cap",
      "distributed-lock",
      "eventual-consistency",
      "network-partitions",
      "event-driven-architecture",
      "crdt",
      "db-type-newsql"
    ],
    "mentions": [
      "network-monitoring",
      "ipv6-basics",
      "sd-latency-numbers",
      "sd-kv-store-versioning",
      "security-groups-nacl",
      "redis-basics",
      "udp-and-quic",
      "dns",
      "token-login"
    ]
  },
  "network-partitions": {
    "links": [
      "db-consistency-cap",
      "eventual-consistency",
      "leader-election",
      "distributed-lock",
      "iptables-basics",
      "timeouts",
      "raft-consensus",
      "db-replication-sharding"
    ],
    "mentions": [
      "sql-batch-timeout-pool",
      "elasticsearch-inverted-index",
      "k8s-statefulset",
      "db-type-wide-column",
      "browser-fetch",
      "failover",
      "mongodb-document-model",
      "security-groups-nacl",
      "postgres-architecture",
      "redis-basics",
      "db-type-key-value",
      "postgres-getting-started",
      "dns"
    ]
  },
  "eventual-consistency": {
    "links": [
      "db-consistency-cap",
      "db-replication-sharding",
      "network-partitions",
      "clock-skew",
      "merkle-tree",
      "crdt",
      "caching-strategies"
    ],
    "mentions": [
      "cookie-session-login",
      "db-type-wide-column",
      "csrf",
      "db-type-key-value",
      "mongodb-document-model",
      "sd-kv-store-failure-handling",
      "consistency-models",
      "sd-kv-store-versioning",
      "sql-batch-timeout-pool",
      "postgres-architecture",
      "dns"
    ]
  },
  "pattern-observer": {
    "links": [
      "react-rerender",
      "pub-sub",
      "js-memory-leak",
      "event-loop",
      "pattern-mediator",
      "pattern-iterator"
    ],
    "mentions": [
      "js-promises",
      "rendering-strategies",
      "design-patterns-overview"
    ]
  },
  "pattern-memento": {
    "links": [
      "pattern-command",
      "pattern-prototype",
      "git-internals-basics"
    ],
    "mentions": [
      "browser-storage",
      "js-immutability-react",
      "js-shallow-deep-copy"
    ]
  },
  "pattern-mediator": {
    "links": [
      "event-driven-architecture",
      "saga-pattern",
      "pattern-observer",
      "pattern-facade",
      "pattern-state"
    ],
    "mentions": [
      "js-pure-functions",
      "cqrs",
      "design-patterns-overview"
    ]
  },
  "pattern-iterator": {
    "links": [
      "pattern-factory-method"
    ],
    "mentions": [
      "sd-cache-and-cdn-tier",
      "kafka-basics"
    ]
  },
  "pattern-interpreter": {
    "links": [
      "design-patterns-overview",
      "pattern-composite",
      "pattern-visitor"
    ],
    "mentions": [
      "k8s-admission-control",
      "mongodb-document-model",
      "js-short-circuit",
      "js-closures"
    ]
  },
  "pattern-visitor": {
    "links": [
      "pattern-composite",
      "pattern-iterator",
      "pattern-interpreter"
    ],
    "mentions": []
  },
  "pattern-template-method": {
    "links": [
      "pattern-strategy",
      "pattern-factory-method"
    ],
    "mentions": [
      "json-crud-http",
      "design-patterns-overview"
    ]
  },
  "pattern-strategy": {
    "links": [
      "design-patterns-overview",
      "pattern-chain-of-responsibility",
      "k8s-deployment",
      "load-balancing-algorithms",
      "pattern-state",
      "pattern-template-method",
      "pattern-bridge",
      "pattern-command"
    ],
    "mentions": [
      "client-data-cache",
      "express-middleware",
      "ab-testing",
      "redis-basics",
      "js-closures",
      "token-login"
    ]
  },
  "pattern-state": {
    "links": [
      "design-patterns-overview",
      "pattern-strategy",
      "tcp-connection-lifecycle",
      "circuit-breaker",
      "optimistic-locking",
      "db-locking-deadlock"
    ],
    "mentions": [
      "client-data-cache",
      "js-pure-functions"
    ]
  },
  "k8s-deploy-pipeline-eks": {
    "links": [
      "k8s-project-structure",
      "github-actions-docker-ecr",
      "eks-cluster-basics",
      "k8s-deployment",
      "k8s-secret",
      "k8s-pod-troubleshooting",
      "terraform-basics",
      "terraform-modules-tfvars",
      "helm-dependencies-oci-gitops",
      "helm-release-lifecycle",
      "k8s-pv-pvc",
      "k8s-pod-probes",
      "k8s-hpa",
      "k8s-service-types",
      "kubernetes-ingress",
      "k8s-configmap"
    ],
    "mentions": [
      "k8s-pod-lifecycle",
      "k8s-storageclass-snapshots",
      "k8s-pod-basics",
      "git-undo",
      "argocd-basics",
      "k8s-architecture",
      "helm-basics",
      "k8s-cri-cni-csi",
      "security-groups-nacl",
      "local-k8s-kind-minikube",
      "vpc-basics",
      "webhooks"
    ]
  },
  "k8s-project-structure": {
    "links": [
      "k8s-deploy-pipeline-eks",
      "dockerfile-image-layers",
      "k8s-namespace",
      "k8s-deployment",
      "k8s-configmap",
      "k8s-hpa",
      "k8s-pv-pvc",
      "git-large-files-secrets",
      "k8s-secret",
      "helm-values-secrets",
      "terraform-modules-tfvars",
      "eks-cluster-basics",
      "terraform-basics",
      "git-ignore-config",
      "helm-basics",
      "helm-dependencies-oci-gitops"
    ],
    "mentions": [
      "external-secrets",
      "github-actions-docker-ecr",
      "k8s-storageclass-snapshots",
      "vpc-subnets-route-tables",
      "docker-container-basics",
      "k8s-cri-cni-csi",
      "dependency-hell",
      "db-type-key-value",
      "layer-ip-routing-icmp",
      "kubernetes-ingress",
      "build-caching",
      "security-groups-nacl",
      "what-happens-google-com",
      "local-k8s-kind-minikube",
      "layer-ip-addressing",
      "vpc-basics"
    ]
  },
  "github-actions-docker-ecr": {
    "links": [
      "dockerfile-image-layers",
      "k8s-deploy-pipeline-eks",
      "git-branching-strategy",
      "k8s-project-structure"
    ],
    "mentions": [
      "k8s-pod-troubleshooting",
      "eks-cluster-basics",
      "terraform-basics",
      "token-login"
    ]
  },
  "count-min-sketch": {
    "links": [
      "lossy-counting",
      "rate-limiting-algorithms",
      "redis-memory-eviction",
      "bloom-filter",
      "hyperloglog"
    ],
    "mentions": [
      "redis-basics"
    ]
  },
  "lossy-counting": {
    "links": [
      "count-min-sketch",
      "hyperloglog"
    ],
    "mentions": [
      "sd-mq-storage-partitions",
      "bloom-filter",
      "postgres-architecture",
      "redis-basics",
      "db-modeling-normalization",
      "dns"
    ]
  },
  "hyperloglog": {
    "links": [
      "bloom-filter",
      "lossy-counting",
      "count-min-sketch"
    ],
    "mentions": [
      "redis-basics",
      "cookie-session-login"
    ]
  },
  "bloom-filter": {
    "links": [
      "caching-strategies",
      "db-type-wide-column",
      "hyperloglog",
      "count-min-sketch",
      "lossy-counting"
    ],
    "mentions": [
      "db-type-embedded",
      "js-memoization",
      "cdn-edge-anycast",
      "redis-basics",
      "sd-kv-store-write-read-path",
      "dns"
    ]
  },
  "pattern-command": {
    "links": [
      "pattern-composite",
      "pattern-memento",
      "saga-pattern",
      "idempotency-key",
      "dead-letter-queue",
      "message-queue-basics",
      "pattern-chain-of-responsibility",
      "pattern-observer",
      "design-patterns-overview",
      "pattern-strategy"
    ],
    "mentions": [
      "operational-transform",
      "redis-basics",
      "microservices",
      "cqrs",
      "crdt",
      "js-closures"
    ]
  },
  "pattern-chain-of-responsibility": {
    "links": [
      "design-patterns-overview",
      "pattern-decorator",
      "pattern-command",
      "pattern-observer",
      "pattern-composite"
    ],
    "mentions": [
      "express-middleware",
      "sd-payment-flow",
      "event-delegation",
      "http-status-codes"
    ]
  },
  "pattern-proxy": {
    "links": [
      "proxy-reverse-proxy",
      "pattern-decorator",
      "code-splitting",
      "caching-strategies",
      "timeouts",
      "retries",
      "circuit-breaker",
      "sql-query-rewrite",
      "pattern-adapter",
      "pattern-facade"
    ],
    "mentions": [
      "json-crud-http",
      "resilience-patterns",
      "http-versions",
      "js-immutability-react",
      "js-destructuring",
      "grpc",
      "design-patterns-overview",
      "dns"
    ]
  },
  "eks-cluster-basics": {
    "links": [
      "terraform-modules-tfvars",
      "k8s-secret",
      "k8s-hpa",
      "k8s-cni-pod-network",
      "vpc-subnets-route-tables",
      "k8s-serviceaccount-tokens",
      "k8s-coredns",
      "k8s-pv-pvc",
      "k8s-deploy-pipeline-eks"
    ],
    "mentions": [
      "k8s-pod-disruption-budget",
      "k8s-node-autoscaling-karpenter",
      "kubectl-essentials",
      "kubernetes-ingress",
      "k8s-daemonset",
      "network-flow-logs",
      "terraform-basics",
      "k8s-configmap",
      "base64",
      "k8s-cri-cni-csi",
      "ipv6-basics",
      "k8s-architecture",
      "helm-basics",
      "k8s-node-maintenance",
      "iam-basics",
      "ssrf",
      "autoscaling",
      "security-groups-nacl",
      "what-happens-google-com",
      "layer-ip-addressing",
      "db-type-key-value",
      "vpc-basics",
      "dns",
      "webhooks"
    ]
  },
  "terraform-modules-tfvars": {
    "links": [
      "terraform-basics",
      "terraform-network-iac",
      "eks-cluster-basics",
      "layer-ip-addressing",
      "k8s-project-structure"
    ],
    "mentions": [
      "docker-container-basics",
      "security-groups-nacl",
      "ipv6-basics",
      "vpc-basics"
    ]
  },
  "terraform-basics": {
    "links": [
      "terraform-modules-tfvars",
      "terraform-network-iac",
      "iac-basics",
      "ansible-network-automation",
      "git-large-files-secrets",
      "distributed-lock",
      "k8s-deploy-pipeline-eks"
    ],
    "mentions": [
      "json-crud-http",
      "dependency-hell",
      "db-type-key-value",
      "security-groups-nacl",
      "eks-cluster-basics",
      "vpc-basics"
    ]
  },
  "linux-grep-awk-sed": {
    "links": [
      "ports-and-sockets",
      "linux-systemd-systemctl",
      "iptables-basics",
      "rate-limiting-in-practice"
    ],
    "mentions": [
      "proxy-reverse-proxy",
      "sd-start-single-server",
      "osi-in-practice",
      "http-status-codes"
    ]
  },
  "linux-systemd-systemctl": {
    "links": [
      "linux-files-permissions",
      "linux-processes-signals",
      "linux-grep-awk-sed"
    ],
    "mentions": [
      "dockerfile-image-layers",
      "k8s-deploy-pipeline-eks",
      "k8s-architecture",
      "client-data-cache"
    ]
  },
  "linux-processes-signals": {
    "links": [
      "linux-files-permissions",
      "k8s-pod-lifecycle",
      "linux-systemd-systemctl"
    ],
    "mentions": [
      "blue-green-deployment",
      "k8s-pod-basics",
      "k8s-pod-resources",
      "docker-container-basics",
      "osi-in-practice",
      "client-data-cache"
    ]
  },
  "linux-files-permissions": {
    "links": [
      "docker-network-volume",
      "dockerfile-image-layers",
      "k8s-security-context",
      "linux-processes-signals"
    ],
    "mentions": [
      "k8s-pod-multicontainer",
      "k8s-architecture",
      "linux-systemd-systemctl"
    ]
  },
  "zero-trust-architecture": {
    "links": [
      "vpn-ipsec-wireguard",
      "service-mesh",
      "oauth",
      "proxy-reverse-proxy",
      "security-groups-nacl",
      "k8s-network-policy",
      "network-flow-logs",
      "ids-ips"
    ],
    "mentions": [
      "high-availability",
      "authn-vs-authz",
      "https-tls",
      "vpc-basics",
      "token-login"
    ]
  },
  "ids-ips": {
    "links": [
      "iptables-basics",
      "security-groups-nacl",
      "packet-capture-tcpdump",
      "network-flow-logs",
      "service-mesh",
      "zero-trust-architecture"
    ],
    "mentions": [
      "proxy-reverse-proxy",
      "waf",
      "vpc-subnets-route-tables",
      "reverse-proxy-lb-api-gateway",
      "layer-ip-addressing",
      "what-happens-google-com",
      "layer-ip-routing-icmp",
      "https-tls",
      "first-page-from-power-on",
      "vpc-basics",
      "db-modeling-normalization",
      "dns"
    ]
  },
  "service-discovery": {
    "links": [
      "k8s-service-types",
      "k8s-coredns",
      "dns",
      "service-mesh",
      "distributed-lock",
      "k8s-pod-lifecycle",
      "load-balancer-basics"
    ],
    "mentions": [
      "nodejs-server-runtime",
      "iptables-nat",
      "browser-fetch",
      "iptables-basics",
      "hosts-file",
      "reverse-proxy-lb-api-gateway",
      "k8s-architecture",
      "autoscaling",
      "osi-in-practice",
      "sql-batch-timeout-pool",
      "grpc",
      "db-type-key-value",
      "redis-basics",
      "udp-and-quic"
    ]
  },
  "service-mesh": {
    "links": [
      "k8s-pod-multicontainer",
      "https-tls",
      "gateway",
      "iptables-nat",
      "zero-trust-architecture",
      "resilience-patterns",
      "idempotency-key",
      "circuit-breaker",
      "service-discovery"
    ],
    "mentions": [
      "k8s-service-types",
      "iptables-basics",
      "packet-encapsulation",
      "k8s-architecture",
      "packet-capture-tcpdump",
      "kubernetes-ingress",
      "cilium-ebpf",
      "retries",
      "tail-latency",
      "osi-in-practice",
      "http-status-codes",
      "grpc",
      "http-methods"
    ]
  },
  "message-delivery-semantics": {
    "links": [
      "message-queue-basics",
      "kafka-basics",
      "event-driven-architecture",
      "idempotency-key",
      "batch-processing"
    ],
    "mentions": [
      "transactional-outbox",
      "js-pure-functions",
      "db-transaction-isolation",
      "resilience-patterns",
      "dead-letter-queue",
      "http-methods"
    ]
  },
  "rabbitmq-basics": {
    "links": [
      "message-queue-basics",
      "pub-sub",
      "dead-letter-queue",
      "message-delivery-semantics",
      "event-driven-architecture",
      "kafka-basics"
    ],
    "mentions": [
      "raft-consensus",
      "http-caching-cdn",
      "dns"
    ]
  },
  "kafka-basics": {
    "links": [
      "pub-sub",
      "message-queue-basics",
      "event-driven-architecture",
      "message-delivery-semantics",
      "consistent-hashing",
      "rabbitmq-basics"
    ],
    "mentions": [
      "sd-mq-replication",
      "sd-mq-consumer-groups",
      "sd-mq-storage-partitions",
      "db-type-wide-column"
    ]
  },
  "event-driven-architecture": {
    "links": [
      "microservices",
      "db-architecture-by-scale",
      "message-queue-basics",
      "pub-sub",
      "saga-pattern",
      "optimistic-locking",
      "event-sourcing",
      "cqrs",
      "db-replication-sharding",
      "message-delivery-semantics",
      "schema-versioning",
      "kafka-basics",
      "rabbitmq-basics",
      "dead-letter-queue",
      "distributed-tracing"
    ],
    "mentions": [
      "api-versioning",
      "postgres-architecture"
    ]
  },
  "leader-election": {
    "links": [
      "distributed-lock",
      "raft-consensus",
      "distributed-transactions-2pc"
    ],
    "mentions": [
      "k8s-architecture",
      "k8s-api-objects",
      "browser-fetch",
      "failover",
      "network-partitions",
      "dhcp",
      "rolling-deployment",
      "kafka-basics",
      "high-availability",
      "local-k8s-kind-minikube",
      "db-type-key-value",
      "dns"
    ]
  },
  "saga-pattern": {
    "links": [
      "microservices",
      "distributed-transactions-2pc",
      "event-driven-architecture",
      "optimistic-locking",
      "message-delivery-semantics",
      "idempotency-key"
    ],
    "mentions": [
      "serverless-architecture",
      "postgres-advanced-sql",
      "db-architecture-by-scale",
      "db-type-columnar-olap",
      "db-locking-deadlock",
      "distributed-tracing",
      "kafka-basics",
      "db-transaction-isolation",
      "db-replication-sharding",
      "acid-transactions",
      "dead-letter-queue"
    ]
  },
  "distributed-transactions-2pc": {
    "links": [
      "microservices",
      "saga-pattern",
      "db-type-newsql",
      "raft-consensus",
      "idempotency-key",
      "leader-election"
    ],
    "mentions": [
      "zero-downtime-migrations",
      "network-partitions",
      "kafka-basics",
      "db-types-overview",
      "postgres-getting-started",
      "acid-transactions"
    ]
  },
  "k8s-hpa": {
    "links": [
      "k8s-deployment",
      "k8s-namespace",
      "k8s-pod-resources",
      "k8s-pod-multicontainer",
      "k8s-node-autoscaling-karpenter",
      "eks-cluster-basics",
      "k8s-vpa"
    ],
    "mentions": [
      "k8s-architecture",
      "k8s-statefulset",
      "k8s-api-aggregation-schedulers",
      "k8s-pod-basics",
      "cron-jobs",
      "helm-basics",
      "cold-starts",
      "kafka-basics",
      "local-k8s-kind-minikube"
    ]
  },
  "k8s-deployment": {
    "links": [
      "k8s-pod-basics",
      "k8s-configmap",
      "helm-chart-templates",
      "k8s-pod-resources",
      "k8s-pod-probes",
      "k8s-pod-lifecycle",
      "k8s-pod-scheduling",
      "k8s-pod-troubleshooting",
      "helm-release-lifecycle",
      "k8s-hpa",
      "gateway"
    ],
    "mentions": [
      "k8s-deploy-pipeline-eks",
      "k8s-pod-disruption-budget",
      "canary-release",
      "k8s-service-types",
      "k8s-pv-pvc",
      "kubernetes-ingress",
      "service-mesh",
      "local-k8s-kind-minikube"
    ]
  },
  "k8s-namespace": {
    "links": [
      "k8s-pod-basics",
      "k8s-secret",
      "k8s-project-structure",
      "k8s-coredns",
      "k8s-network-policy",
      "k8s-pod-resources",
      "k8s-rbac",
      "k8s-pod-security-admission",
      "eks-cluster-basics",
      "k8s-deployment"
    ],
    "mentions": [
      "k8s-pv-pvc",
      "k8s-pod-scheduling",
      "k8s-storageclass-snapshots",
      "terraform-modules-tfvars",
      "kubernetes-ingress",
      "k8s-statefulset",
      "k8s-api-aggregation-schedulers",
      "k8s-cluster-upgrade",
      "iptables-nat",
      "k8s-api-objects",
      "terraform-basics",
      "k8s-service-types",
      "k8s-configmap",
      "helm-dependencies-oci-gitops",
      "docker-container-basics",
      "leader-election",
      "k8s-cni-pod-network",
      "k8s-architecture",
      "helm-basics",
      "cilium-ebpf",
      "local-k8s-kind-minikube",
      "db-type-key-value",
      "dns",
      "webhooks"
    ]
  },
  "k8s-coredns": {
    "links": [
      "dns",
      "k8s-service-types",
      "k8s-network-policy",
      "k8s-cni-pod-network"
    ],
    "mentions": [
      "k8s-architecture",
      "k8s-kube-proxy-modes",
      "k8s-statefulset",
      "iptables-nat",
      "k8s-daemonset",
      "iptables-basics",
      "ipv6-basics",
      "packet-capture-tcpdump",
      "race-conditions",
      "local-k8s-kind-minikube",
      "udp-and-quic"
    ]
  },
  "k8s-network-policy": {
    "links": [
      "k8s-cni-pod-network",
      "k8s-service-types",
      "osi-in-practice",
      "dns",
      "k8s-coredns",
      "docker-network-drivers",
      "gateway"
    ],
    "mentions": [
      "docker-container-basics",
      "iptables-basics",
      "ipv6-basics",
      "k8s-architecture",
      "kubernetes-ingress",
      "cilium-ebpf",
      "service-mesh",
      "local-k8s-kind-minikube",
      "iptables-nat",
      "udp-and-quic"
    ]
  },
  "k8s-cni-pod-network": {
    "links": [
      "k8s-pod-basics",
      "docker-network-drivers",
      "sdn-vxlan-overlay",
      "layer-ip-addressing",
      "layer-mtu-fragmentation",
      "k8s-network-policy",
      "k8s-service-types"
    ],
    "mentions": [
      "layer-ip-routing-icmp",
      "iptables-nat",
      "k8s-daemonset",
      "iptables-basics",
      "k8s-architecture",
      "eks-cluster-basics",
      "packet-capture-tcpdump",
      "layer-link-ethernet-arp",
      "cilium-ebpf",
      "network-flow-logs",
      "security-groups-nacl",
      "local-k8s-kind-minikube",
      "vpc-basics",
      "udp-and-quic"
    ]
  },
  "k8s-service-types": {
    "links": [
      "iptables-nat",
      "k8s-pod-lifecycle",
      "kubernetes-ingress",
      "k8s-network-policy",
      "k8s-cni-pod-network",
      "k8s-coredns"
    ],
    "mentions": [
      "k8s-architecture",
      "k8s-statefulset",
      "k8s-daemonset",
      "db-type-wide-column",
      "iptables-basics",
      "k8s-kube-proxy-modes",
      "local-k8s-kind-minikube",
      "http-versions",
      "kafka-basics",
      "security-groups-nacl",
      "vpc-basics",
      "osi-in-practice",
      "redis-basics",
      "dns",
      "what-happens-google-com",
      "cilium-ebpf",
      "grpc",
      "layer-ip-routing-icmp",
      "first-page-from-power-on",
      "udp-and-quic",
      "layer-link-ethernet-arp"
    ]
  },
  "docker-network-drivers": {
    "links": [
      "docker-network-volume",
      "iptables-nat",
      "sdn-vxlan-overlay",
      "docker-container-basics",
      "k8s-pod-basics",
      "layer-mtu-fragmentation",
      "k8s-cni-pod-network"
    ],
    "mentions": [
      "dockerfile-image-layers",
      "iptables-basics",
      "eks-cluster-basics",
      "vlan-basics",
      "layer-link-ethernet-arp",
      "vpn-ipsec-wireguard",
      "security-groups-nacl",
      "dhcp",
      "layer-ip-routing-icmp",
      "vpc-basics",
      "udp-and-quic",
      "dns"
    ]
  },
  "pattern-flyweight": {
    "links": [
      "design-patterns-overview",
      "js-memory-leak",
      "git-internals-basics",
      "caching-strategies",
      "pattern-singleton",
      "pattern-prototype"
    ],
    "mentions": [
      "js-object-methods",
      "js-strict-mode",
      "js-es-modules"
    ]
  },
  "pattern-facade": {
    "links": [
      "design-patterns-overview",
      "microservices",
      "idempotency-key",
      "git-internals-basics",
      "gateway",
      "pattern-adapter",
      "pattern-mediator"
    ],
    "mentions": [
      "https-tls",
      "clean-architecture",
      "git-staging-area",
      "dns"
    ]
  },
  "pattern-decorator": {
    "links": [
      "design-patterns-overview",
      "timeouts",
      "idempotency-key",
      "retries",
      "react-rerender",
      "pattern-adapter",
      "pattern-proxy",
      "pattern-chain-of-responsibility",
      "pattern-composite"
    ],
    "mentions": [
      "browser-fetch",
      "js-first-class-callbacks",
      "resilience-patterns",
      "http-methods"
    ]
  },
  "pattern-composite": {
    "links": [
      "design-patterns-overview",
      "pattern-visitor",
      "pattern-decorator",
      "pattern-chain-of-responsibility",
      "pattern-iterator"
    ],
    "mentions": [
      "js-execution-context"
    ]
  },
  "dead-letter-queue": {
    "links": [
      "message-queue-basics",
      "pub-sub",
      "retries",
      "exponential-backoff-jitter",
      "rabbitmq-basics",
      "kafka-basics",
      "structured-logging",
      "alerting",
      "idempotency-key",
      "message-delivery-semantics"
    ],
    "mentions": [
      "resilience-patterns",
      "redis-basics",
      "sd-email-protocols",
      "http-methods"
    ]
  },
  "pub-sub": {
    "links": [
      "message-queue-basics",
      "dead-letter-queue",
      "event-driven-architecture",
      "redis-basics",
      "redis-cluster",
      "backpressure",
      "kafka-basics"
    ],
    "mentions": [
      "http-caching-cdn",
      "dns"
    ]
  },
  "message-queue-basics": {
    "links": [
      "pub-sub",
      "dead-letter-queue",
      "message-delivery-semantics",
      "kafka-basics",
      "rabbitmq-basics",
      "redis-basics",
      "db-locking-deadlock",
      "db-architecture-by-scale",
      "idempotency-key",
      "exponential-backoff-jitter",
      "backpressure",
      "microservices",
      "postgres-mvcc-vacuum",
      "redis-persistence-ha",
      "redis-memory-eviction"
    ],
    "mentions": [
      "transactional-outbox",
      "autoscaling",
      "db-index-design",
      "resilience-patterns",
      "sd-mq-storage-partitions",
      "js-pure-functions",
      "sd-email-protocols",
      "realtime-communication",
      "http-methods"
    ]
  },
  "k8s-pv-pvc": {
    "links": [
      "k8s-configmap",
      "docker-network-volume",
      "k8s-pod-resources",
      "k8s-pod-scheduling",
      "k8s-deployment",
      "k8s-secret"
    ],
    "mentions": [
      "k8s-pod-security-admission",
      "k8s-labels-selectors",
      "k8s-storageclass-snapshots",
      "k8s-statefulset",
      "k8s-daemonset",
      "k8s-cri-cni-csi",
      "k8s-architecture",
      "cloud-cost-optimization",
      "k8s-node-maintenance",
      "vpc-basics",
      "local-k8s-kind-minikube",
      "eks-cluster-basics"
    ]
  },
  "k8s-secret": {
    "links": [
      "k8s-configmap",
      "base64",
      "db-type-key-value",
      "k8s-namespace",
      "k8s-pod-troubleshooting",
      "helm-values-secrets",
      "helm-basics",
      "k8s-pv-pvc"
    ],
    "mentions": [
      "kubectl-apply-ssa",
      "external-secrets",
      "k8s-cri-cni-csi",
      "grpc",
      "k8s-architecture",
      "cron-jobs",
      "kubernetes-ingress",
      "encryption-at-rest",
      "linux-files-permissions",
      "local-k8s-kind-minikube",
      "github-actions-docker-ecr",
      "eks-cluster-basics"
    ]
  },
  "k8s-configmap": {
    "links": [
      "k8s-namespace",
      "k8s-secret",
      "k8s-pod-multicontainer",
      "helm-chart-templates",
      "k8s-pv-pvc"
    ],
    "mentions": [
      "k8s-pod-basics",
      "helm-dependencies-oci-gitops",
      "k8s-architecture",
      "helm-basics",
      "latency-bandwidth-throughput",
      "sd-email-protocols",
      "local-k8s-kind-minikube",
      "db-type-key-value"
    ]
  },
  "pattern-bridge": {
    "links": [
      "design-patterns-overview",
      "react-rerender",
      "pattern-strategy",
      "pattern-adapter",
      "pattern-abstract-factory"
    ],
    "mentions": [
      "k8s-cri-cni-csi",
      "observability-basics",
      "k8s-architecture",
      "sql-batch-timeout-pool",
      "grpc"
    ]
  },
  "pattern-adapter": {
    "links": [
      "design-patterns-overview",
      "browser-fetch",
      "mvc-pattern",
      "k8s-pod-multicontainer",
      "pattern-bridge",
      "pattern-decorator",
      "pattern-proxy",
      "pattern-facade"
    ],
    "mentions": [
      "hexagonal-architecture",
      "js-function-forms",
      "http-status-codes",
      "structured-logging"
    ]
  },
  "pattern-prototype": {
    "links": [
      "design-patterns-overview",
      "pattern-abstract-factory",
      "browser-fetch",
      "json-crud-http",
      "pattern-builder",
      "pattern-factory-method",
      "pattern-flyweight",
      "pattern-memento"
    ],
    "mentions": [
      "k8s-pod-basics",
      "js-prototype-chain",
      "db-types-overview",
      "js-immutability-react",
      "js-shallow-deep-copy"
    ]
  },
  "pattern-builder": {
    "links": [
      "design-patterns-overview",
      "idempotency-key",
      "pattern-abstract-factory",
      "pattern-factory-method",
      "pattern-prototype",
      "pattern-composite"
    ],
    "mentions": [
      "js-object-methods",
      "resilience-patterns",
      "http-methods"
    ]
  },
  "exponential-backoff-jitter": {
    "links": [
      "resilience-patterns",
      "retries",
      "timeouts",
      "rate-limiting-in-practice",
      "caching-strategies"
    ],
    "mentions": [
      "k8s-pod-lifecycle",
      "client-data-cache",
      "k8s-architecture",
      "sd-split-web-and-db",
      "redis-basics",
      "dns"
    ]
  },
  "retries": {
    "links": [
      "resilience-patterns",
      "timeouts",
      "exponential-backoff-jitter",
      "http-methods",
      "idempotency-key"
    ],
    "mentions": [
      "service-mesh",
      "abort-controller",
      "tail-latency",
      "backpressure",
      "grpc"
    ]
  },
  "timeouts": {
    "links": [
      "resilience-patterns",
      "retries",
      "exponential-backoff-jitter",
      "nginx-reverse-proxy",
      "chaos-engineering",
      "sql-batch-timeout-pool"
    ],
    "mentions": [
      "browser-fetch",
      "reverse-proxy-lb-api-gateway",
      "packet-capture-tcpdump",
      "deadlocks",
      "what-happens-google-com",
      "grpc",
      "postgres-getting-started",
      "dns"
    ]
  },
  "connection-pool": {
    "links": [
      "sql-batch-timeout-pool",
      "postgres-operations",
      "circuit-breaker",
      "distributed-lock",
      "postgres-connections-pg-hba"
    ],
    "mentions": [
      "pessimistic-locking",
      "postgres-roles-security",
      "postgres-mvcc-vacuum",
      "db-migration-tools",
      "db-architecture-by-scale",
      "encryption-in-transit",
      "https-tls",
      "autoscaling",
      "latency-bandwidth-throughput",
      "db-replication-sharding",
      "rolling-deployment",
      "backpressure",
      "postgres-getting-started",
      "vpc-basics"
    ]
  },
  "circuit-breaker": {
    "links": [
      "resilience-patterns",
      "load-balancer-basics",
      "service-mesh",
      "idempotency-key",
      "connection-pool",
      "rate-limiting-in-practice"
    ],
    "mentions": [
      "retries",
      "osi-in-practice",
      "sql-batch-timeout-pool",
      "redis-basics",
      "dns"
    ]
  },
  "traffic-shaping-qos": {
    "links": [
      "latency-bandwidth-throughput",
      "rate-limiting-algorithms"
    ],
    "mentions": [
      "docker-container-basics",
      "iptables-basics",
      "sd-start-single-server",
      "tcp-reliability-congestion",
      "message-queue-basics",
      "layer-ip-routing-icmp"
    ]
  },
  "latency-bandwidth-throughput": {
    "links": [
      "tcp-reliability-congestion",
      "traffic-shaping-qos",
      "cdn-edge-anycast",
      "http-versions",
      "connection-pool",
      "load-balancing-algorithms"
    ],
    "mentions": [
      "first-page-from-power-on",
      "docker-container-basics",
      "https-tls",
      "packet-encapsulation",
      "kafka-basics",
      "sql-batch-timeout-pool",
      "what-happens-google-com",
      "sli-slo",
      "dns"
    ]
  },
  "load-balancing-algorithms": {
    "links": [
      "load-balancer-basics",
      "nginx-reverse-proxy",
      "consistent-hashing",
      "osi-in-practice"
    ],
    "mentions": [
      "iptables-nat",
      "realtime-communication",
      "iptables-basics",
      "service-mesh",
      "http-versions",
      "nat-traversal",
      "cookie-session-login",
      "grpc",
      "caching-strategies"
    ]
  },
  "load-balancer-basics": {
    "links": [
      "load-balancing-algorithms",
      "nginx-reverse-proxy",
      "osi-in-practice",
      "dns",
      "proxy-reverse-proxy",
      "ports-and-sockets",
      "tcp-connection-lifecycle",
      "health-checks",
      "k8s-pod-probes",
      "cdn-edge-anycast"
    ],
    "mentions": [
      "k8s-pod-lifecycle",
      "iptables-nat",
      "vpc-subnets-route-tables",
      "docker-container-basics",
      "realtime-communication",
      "browser-fetch",
      "reverse-proxy-lb-api-gateway",
      "sd-start-single-server",
      "layer-link-ethernet-arp",
      "http-versions",
      "rolling-deployment",
      "security-groups-nacl",
      "redis-basics",
      "client-data-cache",
      "grpc"
    ]
  },
  "pattern-abstract-factory": {
    "links": [
      "pattern-factory-method",
      "pattern-singleton",
      "pattern-builder"
    ],
    "mentions": [
      "k8s-pod-probes",
      "test-pyramid-unit-tests",
      "sql-batch-timeout-pool",
      "design-patterns-overview"
    ]
  },
  "pattern-factory-method": {
    "links": [
      "design-patterns-overview",
      "pattern-template-method",
      "pattern-iterator",
      "pattern-abstract-factory",
      "pattern-builder",
      "pattern-prototype"
    ],
    "mentions": [
      "js-object-methods",
      "sd-email-protocols"
    ]
  },
  "pattern-singleton": {
    "links": [
      "design-patterns-overview",
      "micro-frontends",
      "rate-limiting-in-practice",
      "redis-basics",
      "rendering-ssr",
      "pattern-factory-method"
    ],
    "mentions": [
      "k8s-architecture",
      "hexagonal-architecture",
      "cron-jobs",
      "thread-safety",
      "js-es-modules",
      "leader-election",
      "sql-batch-timeout-pool"
    ]
  },
  "design-patterns-overview": {
    "links": [
      "pattern-singleton",
      "pattern-factory-method",
      "pattern-abstract-factory",
      "pattern-builder",
      "pattern-prototype",
      "pattern-adapter",
      "pattern-bridge",
      "pattern-composite",
      "pattern-decorator",
      "pattern-facade",
      "pattern-flyweight",
      "pattern-proxy",
      "pattern-chain-of-responsibility",
      "pattern-command",
      "pattern-interpreter",
      "pattern-iterator",
      "pattern-mediator",
      "pattern-memento",
      "pattern-observer",
      "pattern-state",
      "pattern-strategy",
      "pattern-template-method",
      "pattern-visitor",
      "mvc-pattern",
      "resilience-patterns"
    ],
    "mentions": [
      "sql-batch-timeout-pool",
      "js-closures"
    ]
  },
  "distributed-lock": {
    "links": [
      "redis-basics",
      "idempotency-key",
      "optimistic-locking",
      "pessimistic-locking",
      "leader-election"
    ],
    "mentions": [
      "redis-cluster",
      "browser-fetch",
      "k8s-pod-resources",
      "iptables-basics",
      "db-locking-deadlock",
      "tail-latency",
      "resilience-patterns",
      "db-type-key-value",
      "http-methods",
      "dns"
    ]
  },
  "consistent-hashing": {
    "links": [
      "db-sharding",
      "load-balancing-algorithms",
      "redis-cluster"
    ],
    "mentions": [
      "rolling-deployment",
      "osi-in-practice",
      "db-type-wide-column",
      "sd-start-single-server",
      "vpc-basics",
      "redis-basics",
      "caching-strategies"
    ]
  },
  "pessimistic-locking": {
    "links": [
      "db-locking-deadlock",
      "optimistic-locking",
      "connection-pool",
      "distributed-lock"
    ],
    "mentions": [
      "zero-downtime-migrations",
      "db-architecture-by-scale",
      "sql-batch-timeout-pool",
      "db-transaction-isolation",
      "postgres-getting-started"
    ]
  },
  "optimistic-locking": {
    "links": [
      "db-locking-deadlock",
      "db-transaction-isolation",
      "resilience-patterns",
      "pessimistic-locking",
      "http-caching-cdn",
      "http-status-codes"
    ],
    "mentions": [
      "k8s-configmap",
      "postgres-advanced-sql",
      "db-type-key-value",
      "sql-basics",
      "mongodb-document-model",
      "redis-basics",
      "local-k8s-kind-minikube",
      "postgres-getting-started"
    ]
  },
  "sdn-vxlan-overlay": {
    "links": [
      "vlan-basics",
      "layer-mtu-fragmentation",
      "vpn-ipsec-wireguard",
      "vpc-basics",
      "k8s-cni-pod-network"
    ],
    "mentions": [
      "eks-cluster-basics",
      "packet-capture-tcpdump",
      "layer-link-ethernet-arp",
      "cilium-ebpf",
      "security-groups-nacl",
      "ipv6-basics",
      "layer-ip-routing-icmp",
      "router-vs-switch",
      "udp-and-quic"
    ]
  },
  "vpn-ipsec-wireguard": {
    "links": [
      "layer-mtu-fragmentation",
      "sdn-vxlan-overlay",
      "udp-and-quic",
      "layer-ip-routing-icmp",
      "zero-trust-architecture"
    ],
    "mentions": [
      "browser-fetch",
      "webhooks",
      "what-happens-google-com",
      "ipv6-basics",
      "pattern-abstract-factory",
      "dns"
    ]
  },
  "vlan-basics": {
    "links": [
      "layer-link-ethernet-arp",
      "sdn-vxlan-overlay",
      "vpc-basics",
      "layer-mtu-fragmentation"
    ],
    "mentions": [
      "packet-capture-tcpdump",
      "router-vs-switch",
      "dhcp",
      "layer-ip-routing-icmp",
      "udp-and-quic",
      "dns"
    ]
  },
  "ipv6-basics": {
    "links": [
      "layer-ip-addressing",
      "layer-link-ethernet-arp",
      "iptables-nat",
      "iptables-basics",
      "layer-mtu-fragmentation",
      "vlan-basics"
    ],
    "mentions": [
      "packet-capture-tcpdump",
      "nat-traversal",
      "security-groups-nacl",
      "dhcp",
      "udp-and-quic",
      "dns"
    ]
  },
  "batch-processing": {
    "links": [
      "sql-batch-timeout-pool",
      "event-driven-architecture",
      "api-pagination-sorting",
      "idempotency-key",
      "db-locking-deadlock"
    ],
    "mentions": [
      "cron-jobs",
      "postgres-advanced-sql",
      "db-architecture-by-scale",
      "postgres-mvcc-vacuum",
      "postgres-architecture",
      "redis-basics",
      "resilience-patterns",
      "http-methods"
    ]
  },
  "api-pagination-sorting": {
    "links": [
      "rest-api-design",
      "sql-query-rewrite"
    ],
    "mentions": [
      "elasticsearch-inverted-index",
      "base64",
      "db-index-design"
    ]
  },
  "idempotency-key": {
    "links": [
      "resilience-patterns",
      "http-methods",
      "rest-api-design",
      "distributed-lock",
      "sql-batch-timeout-pool",
      "message-delivery-semantics"
    ],
    "mentions": [
      "postgres-advanced-sql",
      "service-mesh",
      "redis-basics",
      "http-status-codes",
      "db-modeling-normalization"
    ]
  },
  "rate-limiting-in-practice": {
    "links": [
      "rate-limiting-algorithms",
      "nginx-https-performance",
      "gateway",
      "resilience-patterns",
      "idempotency-key"
    ],
    "mentions": [
      "proxy-reverse-proxy",
      "http-status-codes",
      "sd-start-single-server",
      "nat-traversal",
      "osi-in-practice",
      "redis-basics",
      "ipv6-basics",
      "acid-transactions"
    ]
  },
  "rate-limiting-algorithms": {
    "links": [
      "rate-limiting-in-practice",
      "resilience-patterns",
      "nginx-https-performance",
      "traffic-shaping-qos"
    ],
    "mentions": [
      "tail-latency",
      "redis-cluster",
      "backpressure",
      "redis-basics"
    ]
  },
  "cdn-edge-anycast": {
    "links": [
      "http-caching-cdn",
      "load-balancing-algorithms",
      "dns",
      "security-groups-nacl",
      "proxy-reverse-proxy"
    ],
    "mentions": [
      "osi-in-practice",
      "realtime-communication",
      "http-versions",
      "ddos-protection"
    ]
  },
  "security-groups-nacl": {
    "links": [
      "vpc-basics",
      "iptables-basics",
      "network-flow-logs",
      "terraform-network-iac",
      "vpc-peering-transit-privatelink"
    ],
    "mentions": [
      "vpc-subnets-route-tables",
      "ports-and-sockets",
      "dhcp",
      "layer-ip-routing-icmp",
      "postgres-getting-started",
      "udp-and-quic",
      "dns"
    ]
  },
  "vpc-peering-transit-privatelink": {
    "links": [
      "vpc-basics",
      "vpc-subnets-route-tables",
      "service-mesh",
      "security-groups-nacl",
      "network-flow-logs"
    ],
    "mentions": [
      "db-sharding",
      "ports-and-sockets",
      "layer-ip-addressing",
      "iptables-nat",
      "github-actions-docker-ecr",
      "dns"
    ]
  },
  "vpc-subnets-route-tables": {
    "links": [
      "vpc-basics",
      "layer-ip-routing-icmp",
      "security-groups-nacl",
      "iptables-nat",
      "connection-pool",
      "vpc-peering-transit-privatelink",
      "k8s-cni-pod-network"
    ],
    "mentions": [
      "browser-fetch",
      "db-type-key-value",
      "iptables-basics",
      "redis-basics",
      "ipv6-basics",
      "layer-ip-addressing",
      "realtime-communication",
      "github-actions-docker-ecr",
      "eks-cluster-basics"
    ]
  },
  "vpc-basics": {
    "links": [
      "vpc-subnets-route-tables",
      "vpc-peering-transit-privatelink",
      "security-groups-nacl",
      "sdn-vxlan-overlay",
      "layer-ip-addressing",
      "iptables-nat",
      "terraform-network-iac",
      "network-flow-logs"
    ],
    "mentions": [
      "layer-ip-routing-icmp",
      "terraform-basics",
      "iptables-basics",
      "ipv6-basics",
      "ssrf",
      "layer-link-ethernet-arp",
      "what-happens-google-com",
      "dhcp",
      "high-availability",
      "eks-cluster-basics",
      "dns"
    ]
  },
  "loading-patterns": {
    "links": [
      "core-web-vitals",
      "streaming-ssr-suspense",
      "rendering-strategies",
      "client-data-cache",
      "realtime-communication",
      "rest-api-design",
      "code-splitting",
      "animation-patterns"
    ],
    "mentions": [
      "pattern-proxy"
    ]
  },
  "helm-dependencies-oci-gitops": {
    "links": [
      "helm-basics",
      "helm-chart-templates",
      "helm-values-secrets",
      "helm-release-lifecycle",
      "k8s-pod-basics"
    ],
    "mentions": [
      "k8s-statefulset",
      "git-undo",
      "k8s-configmap",
      "argocd-basics",
      "semantic-versioning",
      "docker-container-basics",
      "api-versioning",
      "redis-basics",
      "what-happens-google-com",
      "local-k8s-kind-minikube",
      "github-actions-docker-ecr"
    ]
  },
  "helm-release-lifecycle": {
    "links": [
      "helm-basics",
      "k8s-pod-probes",
      "k8s-pod-lifecycle",
      "helm-dependencies-oci-gitops",
      "kubernetes-ingress"
    ],
    "mentions": [
      "k8s-crd",
      "k8s-statefulset",
      "k8s-pod-basics",
      "service-mesh",
      "rollback-strategy",
      "local-k8s-kind-minikube",
      "k8s-hpa"
    ]
  },
  "helm-values-secrets": {
    "links": [
      "helm-chart-templates",
      "helm-basics",
      "k8s-secret",
      "helm-dependencies-oci-gitops"
    ],
    "mentions": [
      "external-secrets",
      "local-k8s-kind-minikube",
      "eks-cluster-basics",
      "db-type-key-value"
    ]
  },
  "helm-chart-templates": {
    "links": [
      "helm-basics",
      "helm-release-lifecycle",
      "k8s-pod-resources",
      "helm-values-secrets",
      "k8s-configmap"
    ],
    "mentions": [
      "k8s-project-structure",
      "k8s-pod-basics",
      "k8s-architecture"
    ]
  },
  "helm-basics": {
    "links": [
      "helm-dependencies-oci-gitops",
      "helm-chart-templates",
      "helm-release-lifecycle",
      "k8s-pod-lifecycle",
      "helm-values-secrets"
    ],
    "mentions": [
      "k8s-statefulset",
      "k8s-pod-basics",
      "k8s-configmap",
      "docker-container-basics",
      "kubernetes-ingress",
      "redis-basics",
      "local-k8s-kind-minikube"
    ]
  },
  "k8s-pod-troubleshooting": {
    "links": [
      "k8s-pod-scheduling",
      "dockerfile-image-layers",
      "helm-basics",
      "k8s-pod-lifecycle",
      "k8s-pod-probes",
      "k8s-pod-resources",
      "kubernetes-ingress",
      "network-troubleshooting-by-layer"
    ],
    "mentions": [
      "rate-limiting-in-practice",
      "k8s-secret",
      "k8s-service-types",
      "k8s-pv-pvc",
      "k8s-storageclass-snapshots",
      "k8s-statefulset",
      "k8s-api-objects",
      "k8s-configmap",
      "docker-container-basics",
      "kubectl-essentials",
      "k8s-cni-pod-network",
      "k8s-architecture",
      "k8s-cri-cni-csi",
      "local-k8s-kind-minikube",
      "dns"
    ]
  },
  "k8s-pod-multicontainer": {
    "links": [
      "k8s-pod-basics",
      "k8s-pod-resources",
      "k8s-pod-lifecycle",
      "k8s-pod-probes",
      "k8s-pod-troubleshooting"
    ],
    "mentions": [
      "k8s-daemonset",
      "k8s-configmap",
      "k8s-architecture",
      "service-mesh",
      "osi-in-practice",
      "local-k8s-kind-minikube"
    ]
  },
  "k8s-pod-scheduling": {
    "links": [
      "k8s-pod-resources",
      "k8s-pod-troubleshooting"
    ],
    "mentions": [
      "k8s-pod-disruption-budget",
      "k8s-pod-basics",
      "k8s-daemonset",
      "k8s-deployment",
      "local-k8s-kind-minikube",
      "dns"
    ]
  },
  "k8s-pod-resources": {
    "links": [
      "k8s-pod-scheduling",
      "k8s-pod-lifecycle"
    ],
    "mentions": [
      "java-jvm-memory-gc",
      "go-concurrency-basics",
      "k8s-pod-basics",
      "linux-namespaces-cgroups",
      "k8s-architecture",
      "local-k8s-kind-minikube"
    ]
  },
  "k8s-pod-probes": {
    "links": [
      "resilience-patterns",
      "k8s-pod-resources",
      "k8s-pod-lifecycle"
    ],
    "mentions": [
      "k8s-deploy-pipeline-eks",
      "k8s-deployment",
      "k8s-service-types",
      "k8s-pod-basics",
      "k8s-architecture",
      "kubernetes-ingress",
      "event-loop",
      "what-happens-google-com",
      "local-k8s-kind-minikube"
    ]
  },
  "k8s-pod-lifecycle": {
    "links": [
      "k8s-pod-probes",
      "k8s-pod-multicontainer",
      "k8s-pod-resources",
      "tcp-connection-lifecycle",
      "dockerfile-image-layers"
    ],
    "mentions": [
      "k8s-pod-troubleshooting",
      "k8s-service-types",
      "k8s-statefulset",
      "curl-for-debugging",
      "k8s-pod-basics",
      "iptables-nat",
      "k8s-daemonset",
      "k8s-api-objects",
      "db-migration-tools",
      "docker-container-basics",
      "k8s-deploy-pipeline-eks",
      "k8s-architecture",
      "linux-processes-signals",
      "kubernetes-ingress",
      "batch-processing",
      "local-k8s-kind-minikube"
    ]
  },
  "k8s-pod-basics": {
    "links": [
      "k8s-pod-resources",
      "k8s-pod-troubleshooting",
      "k8s-pod-lifecycle",
      "iptables-nat",
      "helm-basics",
      "k8s-pod-multicontainer",
      "docker-container-basics"
    ],
    "mentions": [
      "k8s-statefulset",
      "k8s-pod-scheduling",
      "k8s-daemonset",
      "k8s-cni-pod-network",
      "k8s-architecture",
      "kubernetes-ingress",
      "k8s-labels-selectors",
      "local-k8s-kind-minikube",
      "db-type-key-value"
    ]
  },
  "nextjs-static-dynamic-rendering": {
    "links": [
      "rendering-ssg-isr",
      "rendering-strategies",
      "http-caching-cdn",
      "streaming-ssr-suspense",
      "react-server-components"
    ],
    "mentions": []
  },
  "islands-resumability": {
    "links": [
      "oauth",
      "hydration",
      "react-server-components",
      "rendering-csr-spa",
      "code-splitting"
    ],
    "mentions": [
      "scroll-triggered-intersection-observer",
      "js-es-modules",
      "streaming-ssr-suspense",
      "rendering-strategies",
      "js-closures"
    ]
  },
  "react-server-components": {
    "links": [
      "rendering-strategies",
      "hydration",
      "rendering-ssr",
      "oauth",
      "streaming-ssr-suspense",
      "nextjs-static-dynamic-rendering"
    ],
    "mentions": [
      "pattern-proxy"
    ]
  },
  "streaming-ssr-suspense": {
    "links": [
      "rendering-strategies",
      "rendering-ssr",
      "hydration",
      "nginx-reverse-proxy",
      "react-server-components",
      "core-web-vitals"
    ],
    "mentions": [
      "proxy-reverse-proxy",
      "http-versions",
      "http-status-codes"
    ]
  },
  "hydration": {
    "links": [
      "rendering-strategies",
      "rendering-ssr",
      "core-web-vitals",
      "streaming-ssr-suspense",
      "islands-resumability",
      "react-server-components"
    ],
    "mentions": [
      "count-min-sketch"
    ]
  },
  "rendering-ssg-isr": {
    "links": [
      "rendering-strategies",
      "rendering-ssr",
      "nextjs-static-dynamic-rendering",
      "http-caching-cdn",
      "hydration"
    ],
    "mentions": [
      "autoscaling",
      "react-server-components",
      "redis-basics",
      "count-min-sketch"
    ]
  },
  "rendering-ssr": {
    "links": [
      "rendering-strategies",
      "rendering-csr-spa",
      "hydration",
      "streaming-ssr-suspense",
      "event-loop",
      "js-memory-leak",
      "http-caching-cdn",
      "nginx-reverse-proxy",
      "rendering-ssg-isr"
    ],
    "mentions": [
      "client-data-cache",
      "docker-container-basics",
      "proxy-reverse-proxy",
      "osi-in-practice",
      "http-status-codes",
      "db-modeling-normalization",
      "core-web-vitals"
    ]
  },
  "rendering-csr-spa": {
    "links": [
      "rendering-strategies",
      "code-splitting",
      "rendering-ssr",
      "client-data-cache",
      "rendering-ssg-isr",
      "frontend-browser-cache",
      "core-web-vitals"
    ],
    "mentions": [
      "hydration",
      "nginx-basics",
      "nextjs-static-dynamic-rendering",
      "http-status-codes"
    ]
  },
  "postgres-reporting-sql": {
    "links": [
      "postgres-advanced-sql",
      "postgres-functions-triggers",
      "caching-strategies",
      "sqld-window-functions",
      "db-index"
    ],
    "mentions": [
      "sqld-group-by-having",
      "postgres-getting-started",
      "sql-query-rewrite"
    ]
  },
  "postgres-connections-pg-hba": {
    "links": [
      "postgres-getting-started",
      "postgres-roles-security"
    ],
    "mentions": [
      "db-architecture-by-scale",
      "encryption-in-transit",
      "postgres-operations",
      "security-groups-nacl",
      "sql-batch-timeout-pool",
      "ipv6-basics",
      "layer-ip-addressing"
    ]
  },
  "redis-cluster": {
    "links": [
      "redis-replication-sentinel",
      "redis-basics"
    ],
    "mentions": [
      "vpc-basics"
    ]
  },
  "redis-replication-sentinel": {
    "links": [
      "redis-persistence-ha",
      "redis-basics",
      "redis-cluster",
      "redis-memory-eviction"
    ],
    "mentions": [
      "leader-election"
    ]
  },
  "sqld-set-operators": {
    "links": [
      "sqld-subquery-set-operators",
      "sqld-correlated-subquery",
      "sqld-single-row-functions"
    ],
    "mentions": [
      "js-pure-functions"
    ]
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
      "secrets-management",
      "build-caching",
      "linux-files-permissions",
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
      "k8s-service-types",
      "docker-container-basics",
      "k8s-pod-troubleshooting",
      "ports-and-sockets",
      "what-happens-google-com",
      "first-page-from-power-on",
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
      "curl-for-debugging",
      "sd-start-single-server",
      "security-groups-nacl",
      "http-status-codes",
      "first-page-from-power-on",
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
      "k8s-network-policy",
      "timeouts",
      "docker-container-basics",
      "realtime-communication",
      "reverse-proxy-lb-api-gateway",
      "sd-start-single-server",
      "service-mesh",
      "http-versions",
      "security-groups-nacl",
      "what-happens-google-com",
      "encryption-in-transit",
      "grpc",
      "layer-ip-routing-icmp",
      "first-page-from-power-on",
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
      "postgres-reporting-sql",
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
      "deadlocks",
      "microservices"
    ],
    "mentions": [
      "sql-basics",
      "saga-pattern",
      "event-driven-architecture",
      "distributed-transactions-2pc",
      "sql-batch-timeout-pool",
      "postgres-getting-started"
    ]
  },
  "sql-batch-timeout-pool": {
    "links": [
      "sql-query-tuning",
      "sql-query-rewrite",
      "db-index",
      "sql-insert-update-delete",
      "connection-pool"
    ],
    "mentions": [
      "pessimistic-locking",
      "postgres-mvcc-vacuum",
      "db-architecture-by-scale",
      "postgres-getting-started"
    ]
  },
  "sql-query-rewrite": {
    "links": [
      "sql-query-tuning",
      "db-index",
      "api-pagination-sorting",
      "n-plus-one-queries",
      "sql-batch-timeout-pool"
    ],
    "mentions": [
      "rest-api-design",
      "loading-patterns",
      "db-index-design",
      "sql-subqueries-exists-lateral",
      "sql-joins-in-practice",
      "pattern-proxy",
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
      "sd-sharding-intro",
      "redis-cluster",
      "db-type-newsql",
      "db-type-wide-column",
      "db-type-key-value",
      "sd-start-single-server",
      "distributed-transactions-2pc",
      "transactional-outbox",
      "cqrs",
      "scaling-horizontal-vertical",
      "redis-basics",
      "high-availability"
    ]
  },
  "db-partitioning": {
    "links": [
      "db-replication-sharding",
      "db-sharding"
    ],
    "mentions": [
      "sd-start-single-server",
      "sd-mq-storage-partitions"
    ]
  },
  "db-index-pitfalls": {
    "links": [
      "db-index",
      "db-index-design",
      "sql-query-tuning"
    ],
    "mentions": [
      "postgres-mvcc-vacuum",
      "db-migration-tools",
      "db-replication-sharding",
      "sql-basics"
    ]
  },
  "db-index-design": {
    "links": [
      "db-index",
      "db-index-pitfalls"
    ],
    "mentions": [
      "quadtree"
    ]
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
      "timeouts",
      "vpc-subnets-route-tables",
      "browser-fetch",
      "iptables-basics",
      "reverse-proxy-lb-api-gateway",
      "ddos-protection",
      "security-groups-nacl",
      "sql-batch-timeout-pool"
    ]
  },
  "tcp-reliability-congestion": {
    "links": [
      "tcp-connection-lifecycle",
      "http-versions",
      "traffic-shaping-qos",
      "network-troubleshooting-by-layer",
      "layer-mtu-fragmentation",
      "udp-and-quic"
    ],
    "mentions": [
      "iptables-basics",
      "packet-capture-tcpdump",
      "tail-latency",
      "redis-basics",
      "grpc",
      "layer-ip-routing-icmp",
      "disaster-recovery"
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
      "vpn-ipsec-wireguard",
      "iptables-basics",
      "packet-capture-tcpdump",
      "https-tls",
      "ddos-protection",
      "sdn-vxlan-overlay",
      "security-groups-nacl",
      "dhcp",
      "network-monitoring",
      "ipv6-basics",
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
      "vpc-subnets-route-tables",
      "iptables-basics",
      "postgres-getting-started",
      "linux-systemd-systemctl",
      "linux-files-permissions",
      "security-groups-nacl",
      "sql-batch-timeout-pool",
      "redis-basics",
      "what-happens-google-com",
      "ipv6-basics",
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
      "youtube-url-to-video",
      "grpc",
      "first-page-from-power-on",
      "packet-encapsulation",
      "packet-capture-tcpdump",
      "http-versions",
      "what-happens-google-com",
      "sd-email-protocols",
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
      "vpc-subnets-route-tables",
      "docker-container-basics",
      "gateway",
      "iptables-basics",
      "reverse-proxy-lb-api-gateway",
      "vpc-peering-transit-privatelink",
      "router-vs-switch",
      "http-versions",
      "security-groups-nacl",
      "sd-email-protocols",
      "vlan-basics",
      "ipv6-basics",
      "vpc-basics",
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
      "vlan-basics",
      "iptables-basics",
      "ipv6-basics"
    ],
    "mentions": [
      "vpc-peering-transit-privatelink",
      "docker-container-basics",
      "router-vs-switch",
      "what-happens-google-com",
      "load-balancer-basics",
      "vpc-basics"
    ]
  },
  "layer-ip-addressing": {
    "links": [
      "network-layers-overview",
      "layer-link-ethernet-arp",
      "layer-ip-routing-icmp",
      "iptables-nat",
      "ports-and-sockets",
      "ipv6-basics",
      "proxy-reverse-proxy"
    ],
    "mentions": [
      "vpc-peering-transit-privatelink",
      "k8s-network-policy",
      "docker-container-basics",
      "vpc-subnets-route-tables",
      "k8s-cni-pod-network",
      "ssrf",
      "nat-traversal",
      "security-groups-nacl",
      "vpc-basics",
      "dhcp",
      "eks-cluster-basics",
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
      "vpc-subnets-route-tables",
      "docker-container-basics",
      "layer-link-ethernet-arp",
      "iptables-nat",
      "security-groups-nacl",
      "dhcp",
      "ipv6-basics",
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
      "curl-for-debugging",
      "vpn-ipsec-wireguard",
      "vpc-basics",
      "https-tls",
      "k8s-cni-pod-network",
      "layer-link-ethernet-arp",
      "http-versions",
      "sdn-vxlan-overlay",
      "security-groups-nacl",
      "http-status-codes",
      "ipv6-basics",
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
      "alerting",
      "metrics-types",
      "db-partitioning",
      "sqld-group-by-having",
      "sd-start-single-server",
      "prometheus-basics",
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
      "postgres-reporting-sql",
      "db-sharding",
      "kafka-basics",
      "db-replication-sharding",
      "acid-transactions",
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
      "raft-consensus",
      "sd-start-single-server",
      "distributed-transactions-2pc",
      "scaling-horizontal-vertical",
      "acid-transactions",
      "postgres-getting-started",
      "packet-encapsulation"
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
      "sd-start-single-server",
      "sqld-window-functions",
      "api-versioning",
      "kafka-basics",
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
      "consistency-models",
      "eventual-consistency",
      "db-type-wide-column",
      "redis-replication-sentinel"
    ],
    "mentions": [
      "db-type-key-value",
      "network-partitions",
      "mongodb-document-model",
      "sd-kv-store-versioning",
      "leader-election",
      "redis-basics",
      "acid-transactions",
      "crdt"
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
      "db-index",
      "sd-mq-storage-partitions",
      "scaling-horizontal-vertical"
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
      "scaling-horizontal-vertical",
      "postgres-architecture",
      "postgres-jsonb-search",
      "db-partitioning",
      "postgres-getting-started",
      "acid-transactions"
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
      "raft-consensus",
      "sd-mq-storage-partitions",
      "leader-election",
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
      "sd-start-single-server",
      "db-sharding",
      "db-type-relational",
      "sd-mq-storage-partitions",
      "bloom-filter",
      "db-index-pitfalls",
      "sd-kv-store-write-read-path",
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
      "graph-rag",
      "sd-start-single-server",
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
      "postgres-connections-pg-hba",
      "db-architecture-by-scale",
      "sd-mq-storage-partitions",
      "db-type-relational",
      "acid-transactions"
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
      "db-index-design",
      "distributed-transactions-2pc"
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
      "pessimistic-locking",
      "db-migration-tools",
      "db-architecture-by-scale",
      "linux-files-permissions",
      "db-type-relational",
      "postgres-getting-started",
      "disaster-recovery",
      "sql-query-rewrite",
      "sql-basics"
    ]
  },
  "postgres-advanced-sql": {
    "links": [
      "postgres-reporting-sql",
      "sql-basics",
      "postgres-roles-security",
      "db-transaction-isolation",
      "sqld-top-n-hierarchical-pivot",
      "postgres-functions-triggers"
    ],
    "mentions": [
      "postgres-data-types",
      "postgres-getting-started"
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
      "db-migration-tools",
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
      "webhooks",
      "db-index-design",
      "sd-db-replication-intro"
    ]
  },
  "postgres-getting-started": {
    "links": [
      "postgres-connections-pg-hba",
      "sql-basics",
      "postgres-data-types",
      "postgres-roles-security"
    ],
    "mentions": [
      "db-migration-tools",
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
      "race-conditions",
      "sql-select-where-null",
      "postgres-architecture"
    ]
  },
  "postgres-roles-security": {
    "links": [
      "postgres-getting-started",
      "postgres-functions-triggers",
      "postgres-connections-pg-hba"
    ],
    "mentions": [
      "postgres-data-types",
      "db-architecture-by-scale",
      "sql-injection",
      "sql-insert-update-delete",
      "sd-start-single-server",
      "db-index-design",
      "sql-batch-timeout-pool",
      "ipv6-basics",
      "layer-ip-addressing",
      "dns"
    ]
  },
  "git-internals-basics": {
    "links": [
      "git-staging-area",
      "git-ignore-config",
      "git-branch-merge",
      "merkle-tree",
      "git-troubleshooting",
      "git-stash-reflog"
    ],
    "mentions": [
      "github-actions-docker-ecr",
      "git-tips-advanced",
      "git-branching-strategy",
      "git-large-files-secrets",
      "sd-object-storage-architecture",
      "build-caching"
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
      "git-branch-merge",
      "secrets-management"
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
      "github-actions-docker-ecr",
      "git-stash-reflog",
      "token-login",
      "what-happens-google-com"
    ]
  },
  "git-branching-strategy": {
    "links": [
      "git-branch-merge",
      "git-remote-collaboration",
      "git-tips-advanced",
      "semantic-versioning"
    ],
    "mentions": [
      "k8s-deploy-pipeline-eks",
      "ab-testing",
      "api-versioning"
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
      "dependency-hell",
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
      "sql-subqueries-exists-lateral",
      "sql-joins-in-practice",
      "sql-select-where-null"
    ]
  },
  "sqld-window-functions": {
    "links": [
      "sqld-subquery-set-operators",
      "sqld-single-row-functions",
      "sql-window-functions-pg",
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
      "postgres-reporting-sql",
      "sql-case-when",
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
      "sqld-group-by-having",
      "sql-cte-recursive",
      "sql-case-when",
      "js-closures"
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
      "bloom-filter",
      "acid-transactions",
      "postgres-getting-started"
    ]
  },
  "db-replication-sharding": {
    "links": [
      "db-partitioning",
      "db-sharding",
      "db-index",
      "sql-query-tuning",
      "caching-strategies",
      "failover"
    ],
    "mentions": [
      "db-consistency-cap",
      "prometheus-basics",
      "db-architecture-by-scale",
      "sd-start-single-server",
      "sd-mq-storage-partitions",
      "scaling-horizontal-vertical",
      "sql-batch-timeout-pool",
      "db-type-key-value",
      "disaster-recovery",
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
      "event-driven-architecture",
      "mongodb-document-model",
      "vector-db",
      "zero-downtime-migrations"
    ],
    "mentions": [
      "pessimistic-locking",
      "db-type-time-series",
      "postgres-advanced-sql",
      "db-type-columnar-olap",
      "postgres-mvcc-vacuum",
      "db-migration-tools",
      "db-sharding",
      "db-type-wide-column",
      "transactional-outbox",
      "rabbitmq-basics",
      "db-type-key-value",
      "message-delivery-semantics",
      "db-type-relational",
      "db-type-graph",
      "http-caching-cdn",
      "sd-mq-storage-partitions",
      "distributed-tracing",
      "kafka-basics",
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
      "blue-green-deployment",
      "linux-systemd-systemctl",
      "realtime-communication",
      "proxy-reverse-proxy",
      "linux-processes-signals",
      "event-loop",
      "linux-files-permissions",
      "http-status-codes",
      "what-happens-google-com",
      "ipv6-basics",
      "db-modeling-normalization"
    ]
  },
  "nginx-reverse-proxy": {
    "links": [
      "proxy-reverse-proxy",
      "nginx-basics",
      "load-balancing-algorithms",
      "http-status-codes",
      "realtime-communication",
      "nginx-https-performance",
      "gateway"
    ],
    "mentions": [
      "retries",
      "rolling-deployment",
      "tcp-connection-lifecycle",
      "browser-fetch",
      "load-balancer-basics",
      "reverse-proxy-lb-api-gateway",
      "consistent-hashing",
      "race-conditions",
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
      "edge-caching",
      "cookie-session-login",
      "security-groups-nacl",
      "what-happens-google-com",
      "first-page-from-power-on",
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
      "sd-leaderboard-sorted-set",
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
      "sd-start-single-server",
      "dns"
    ]
  },
  "proxy-reverse-proxy": {
    "links": [
      "https-tls",
      "nginx-reverse-proxy",
      "http-caching-cdn",
      "local-custom-domain",
      "gateway",
      "reverse-proxy-lb-api-gateway"
    ],
    "mentions": [
      "docker-container-basics",
      "osi-in-practice",
      "iptables-basics",
      "http-versions",
      "security-groups-nacl",
      "ports-and-sockets",
      "layer-ip-addressing",
      "http-status-codes",
      "what-happens-google-com",
      "dhcp",
      "ipv6-basics",
      "first-page-from-power-on",
      "udp-and-quic",
      "dns"
    ]
  },
  "redis-basics": {
    "links": [
      "message-queue-basics",
      "redis-memory-eviction",
      "network-troubleshooting-by-layer",
      "event-loop",
      "redis-persistence-ha",
      "caching-strategies"
    ],
    "mentions": [
      "redis-cluster",
      "distributed-lock",
      "sd-leaderboard-sorted-set",
      "sd-start-single-server",
      "pub-sub",
      "db-type-relational",
      "kafka-basics",
      "db-transaction-isolation",
      "acid-transactions",
      "dns"
    ]
  },
  "caching-strategies": {
    "links": [
      "redis-basics",
      "resilience-patterns",
      "http-caching-cdn",
      "redis-persistence-ha",
      "redis-memory-eviction",
      "osi-in-practice"
    ],
    "mentions": [
      "exponential-backoff-jitter",
      "redis-cluster",
      "cache-write-policies",
      "bloom-filter",
      "db-type-columnar-olap",
      "sd-start-single-server",
      "js-memoization",
      "cold-starts",
      "tail-latency",
      "db-replication-sharding",
      "high-availability",
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
      "browser-storage",
      "realtime-communication",
      "js-pure-functions",
      "pattern-proxy",
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
      "http-caching-cdn",
      "browser-storage",
      "js-memoization",
      "loading-patterns"
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
      "js-prototype-chain",
      "optimistic-locking",
      "loading-patterns",
      "upper-layers-session-presentation-app",
      "api-versioning",
      "client-data-cache",
      "resilience-patterns",
      "http-caching-cdn"
    ]
  },
  "big-o-notation": {
    "links": [
      "sql-query-rewrite"
    ],
    "mentions": [
      "js-execution-context",
      "js-memoization",
      "sql-filtering-operators",
      "event-loop"
    ]
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
      "k8s-cni-pod-network",
      "docker-network-drivers",
      "k8s-pod-troubleshooting",
      "postgres-operations",
      "proxy-reverse-proxy",
      "layer-link-ethernet-arp",
      "k8s-coredns",
      "sdn-vxlan-overlay",
      "redis-basics",
      "ipv6-basics",
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
      "k8s-pod-probes",
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
      "linux-namespaces-cgroups",
      "k8s-pod-resources",
      "iptables-basics",
      "rest-api-design",
      "k8s-security-context",
      "grpc",
      "linux-processes-signals",
      "udp-and-quic"
    ]
  },
  "dockerfile-image-layers": {
    "links": [
      "docker-container-basics",
      "docker-network-volume"
    ],
    "mentions": [
      "k8s-pod-probes",
      "github-actions-docker-ecr",
      "docker-compose",
      "k8s-architecture",
      "k8s-pod-troubleshooting",
      "dns"
    ]
  },
  "base64": {
    "links": [
      "token-login",
      "https-tls"
    ],
    "mentions": [
      "packet-encapsulation",
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
      "serverless-limits",
      "csrf",
      "rest-api-design",
      "base64",
      "http-versions",
      "rendering-strategies",
      "react-server-components",
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
      "security-groups-nacl",
      "layer-mtu-fragmentation",
      "what-happens-google-com",
      "ipv6-basics",
      "layer-ip-routing-icmp",
      "udp-and-quic",
      "layer-link-ethernet-arp",
      "dns"
    ]
  },
  "iptables-nat": {
    "links": [
      "iptables-basics",
      "kubernetes-ingress",
      "nat-traversal"
    ],
    "mentions": [
      "k8s-kube-proxy-modes",
      "k8s-service-types",
      "vpc-subnets-route-tables",
      "osi-in-practice",
      "packet-capture-tcpdump",
      "proxy-reverse-proxy",
      "reverse-proxy-lb-api-gateway",
      "cilium-ebpf",
      "http-versions",
      "sql-batch-timeout-pool",
      "what-happens-google-com",
      "dhcp",
      "grpc",
      "ipv6-basics",
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
      "reverse-proxy-lb-api-gateway",
      "kubernetes-ingress",
      "base64",
      "first-page-from-power-on",
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
      "csrf",
      "js-pure-functions",
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
      "zero-trust-architecture",
      "nginx-https-performance",
      "reverse-proxy-lb-api-gateway",
      "webhooks",
      "service-mesh",
      "http-versions",
      "encryption-in-transit",
      "first-page-from-power-on",
      "udp-and-quic",
      "http-methods"
    ]
  },
  "realtime-communication": {
    "links": [
      "http-versions",
      "cors",
      "resilience-patterns",
      "nginx-reverse-proxy",
      "operational-transform",
      "crdt",
      "websocket-deep-dive",
      "long-polling",
      "server-sent-events"
    ],
    "mentions": [
      "json-crud-http",
      "reverse-proxy-lb-api-gateway",
      "proxy-reverse-proxy",
      "base64",
      "kafka-basics",
      "redis-basics",
      "http-status-codes",
      "backpressure"
    ]
  },
  "browser-fetch": {
    "links": [
      "http-status-codes",
      "cors",
      "cookie-session-login",
      "abort-controller",
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
      "rendering-csr-spa",
      "race-conditions",
      "debounce-throttle",
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
      "rate-limiting-algorithms",
      "rate-limiting-in-practice",
      "microservices",
      "nginx-reverse-proxy",
      "network-troubleshooting-by-layer"
    ],
    "mentions": [
      "grpc",
      "n-plus-one-queries",
      "api-versioning",
      "base64",
      "optimistic-locking",
      "loading-patterns",
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
      "sd-start-single-server",
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
      "webhooks",
      "tcp-reliability-congestion",
      "ports-and-sockets",
      "udp-and-quic",
      "dns"
    ]
  },
  "event-loop": {
    "links": [
      "core-web-vitals",
      "js-execution-context",
      "js-microtask-macrotask",
      "js-timers-accuracy"
    ],
    "mentions": [
      "dom-basics",
      "js-es-modules",
      "osi-in-practice"
    ]
  },
  "js-memory-leak": {
    "links": [],
    "mentions": [
      "client-data-cache",
      "redis-memory-eviction",
      "dom-basics",
      "js-memoization",
      "js-function-forms",
      "garbage-collection",
      "event-loop",
      "js-strict-mode",
      "js-closures",
      "layer-mtu-fragmentation",
      "dns"
    ]
  },
  "micro-frontends": {
    "links": [],
    "mentions": [
      "build-caching",
      "rendering-csr-spa",
      "k8s-deploy-pipeline-eks",
      "microservices",
      "js-es-modules",
      "cors"
    ]
  },
  "ab-testing": {
    "links": [
      "http-caching-cdn"
    ],
    "mentions": [
      "rendering-strategies",
      "bloom-filter",
      "db-modeling-normalization",
      "core-web-vitals"
    ]
  },
  "core-web-vitals": {
    "links": [
      "what-happens-google-com",
      "code-splitting",
      "event-loop"
    ],
    "mentions": [
      "ab-testing",
      "loading-patterns",
      "pattern-proxy",
      "cors",
      "dns"
    ]
  },
  "code-splitting": {
    "links": [
      "core-web-vitals"
    ],
    "mentions": [
      "js-es-modules",
      "debounce-throttle",
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
      "pattern-observer",
      "js-pure-functions",
      "pattern-proxy",
      "http-status-codes",
      "gateway"
    ]
  },
  "http-caching-cdn": {
    "links": [
      "what-happens-google-com",
      "cdn-edge-anycast"
    ],
    "mentions": [
      "http-message",
      "frontend-browser-cache",
      "http-versions",
      "pattern-proxy",
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
      "rag-retrieval-quality",
      "mongodb-document-model",
      "loading-patterns",
      "global-rollout-localization",
      "transactional-outbox",
      "kafka-basics",
      "db-modeling-normalization"
    ]
  },
  "mongodb-document-model": {
    "links": [],
    "mentions": [
      "sd-sharding-intro",
      "sd-start-single-server",
      "distributed-transactions-2pc",
      "db-index-design",
      "db-type-relational",
      "db-replication-sharding",
      "db-modeling-normalization"
    ]
  },
  "react-rerender": {
    "links": [
      "client-data-cache",
      "rendering-strategies"
    ],
    "mentions": [
      "core-web-vitals",
      "js-memoization",
      "js-function-forms",
      "js-pure-functions",
      "debounce-throttle",
      "js-primitive-vs-reference"
    ]
  },
  "rendering-strategies": {
    "links": [
      "rendering-csr-spa",
      "rendering-ssr",
      "islands-resumability",
      "hydration",
      "rendering-ssg-isr",
      "streaming-ssr-suspense",
      "react-server-components",
      "nextjs-static-dynamic-rendering",
      "proxy-reverse-proxy",
      "react-rerender"
    ],
    "mentions": [
      "http-caching-cdn",
      "lossy-counting",
      "http-status-codes",
      "core-web-vitals"
    ]
  },
  "microservices": {
    "links": [
      "resilience-patterns",
      "distributed-tracing",
      "distributed-transactions-2pc",
      "saga-pattern",
      "gateway",
      "microservices-decomposition"
    ],
    "mentions": [
      "db-architecture-by-scale",
      "grpc",
      "modular-monolith",
      "serverless-architecture",
      "observability-basics",
      "ddd-bounded-context",
      "db-type-columnar-olap",
      "rabbitmq-basics",
      "client-data-cache",
      "monolith-architecture",
      "event-driven-architecture",
      "pub-sub",
      "db-index-design",
      "http-versions",
      "js-memory-leak",
      "transactional-outbox",
      "kafka-basics",
      "cqrs",
      "acid-transactions",
      "http-methods",
      "on-call"
    ]
  },
  "resilience-patterns": {
    "links": [
      "timeouts",
      "retries",
      "exponential-backoff-jitter",
      "idempotency-key",
      "circuit-breaker",
      "gateway"
    ],
    "mentions": [
      "client-data-cache",
      "tail-latency",
      "service-mesh",
      "latency-bandwidth-throughput",
      "backpressure",
      "osi-in-practice",
      "sql-batch-timeout-pool",
      "grpc",
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
      "sd-email-protocols",
      "cdn-edge-anycast",
      "sql-batch-timeout-pool",
      "udp-and-quic",
      "ipv6-basics"
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
      "linux-files-permissions",
      "what-happens-google-com",
      "ipv6-basics",
      "first-page-from-power-on"
    ]
  },
  "kubernetes-ingress": {
    "links": [
      "gateway",
      "network-troubleshooting-by-layer",
      "packet-capture-tcpdump"
    ],
    "mentions": [
      "k8s-service-types",
      "k8s-pod-probes",
      "proxy-reverse-proxy",
      "iptables-nat",
      "osi-in-practice",
      "docker-container-basics",
      "https-tls",
      "k8s-admission-control",
      "k8s-pod-lifecycle",
      "reverse-proxy-lb-api-gateway",
      "service-mesh",
      "http-status-codes",
      "what-happens-google-com",
      "cors",
      "first-page-from-power-on",
      "dns",
      "webhooks"
    ]
  },
  "gateway": {
    "links": [
      "kubernetes-ingress",
      "k8s-gateway-api",
      "resilience-patterns"
    ],
    "mentions": [
      "rate-limiting-in-practice",
      "canary-release",
      "k8s-network-policy",
      "osi-in-practice",
      "docker-container-basics",
      "proxy-reverse-proxy",
      "reverse-proxy-lb-api-gateway",
      "cilium-ebpf",
      "token-login",
      "redis-basics",
      "what-happens-google-com",
      "grpc",
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
      "csrf",
      "authn-vs-authz",
      "js-pure-functions",
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
      "ssrf",
      "csrf",
      "http-versions",
      "what-happens-google-com",
      "cookie-session-login",
      "oauth",
      "first-page-from-power-on",
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
      "webhooks",
      "http-versions",
      "cdn-edge-anycast",
      "http-status-codes",
      "ipv6-basics",
      "first-page-from-power-on",
      "udp-and-quic"
    ]
  },
  "cookie-session-login": {
    "links": [
      "proxy-reverse-proxy",
      "cors",
      "token-login"
    ],
    "mentions": [
      "html-form-http",
      "load-balancer-basics",
      "csrf",
      "kubernetes-ingress",
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
      "browser-storage",
      "base64",
      "csrf",
      "sd-start-single-server",
      "jwt-key-rotation"
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
      "rag-retrieval-quality",
      "pythagorean-theorem",
      "db-index-design",
      "rag-classic-pipeline",
      "db-modeling-normalization"
    ]
  }
};
