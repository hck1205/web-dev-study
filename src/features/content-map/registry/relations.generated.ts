// 자동 생성 파일이다. 직접 고치지 말고 `pnpm content:index`를 실행한다 (scripts/content-index.cjs).
import type { PostRelations } from "./types";

export const POST_RELATIONS: Record<string, PostRelations> = {
  "rw-airbnb-skipper": {
    "links": [
      "rw-stripe-idempotency",
      "rw-uber-ringpop-cadence",
      "idempotency-key",
      "sd-payment-reliability",
      "saga-pattern"
    ],
    "mentions": [
      "db-type-key-value",
      "message-delivery-semantics",
      "sd-payment-flow",
      "event-driven-architecture",
      "db-consistency-cap",
      "cloud-deployment-models-multicloud",
      "stream-processing",
      "sd-video-upload-transcoding",
      "postgres-architecture",
      "microservices",
      "acid-transactions",
      "db-modeling-normalization",
      "http-methods",
      "webhooks"
    ]
  },
  "rw-cloudflare-pingora": {
    "links": [
      "rw-cloudflare-outage-regex",
      "nginx-reverse-proxy",
      "connection-pool",
      "idempotency-key",
      "count-min-sketch"
    ],
    "mentions": [
      "http-message",
      "tcp-connection-lifecycle",
      "https-tls",
      "browser-fetch",
      "proxy-reverse-proxy",
      "process-vs-thread",
      "spring-boot-on-kubernetes",
      "ds-hash-map",
      "http-versions",
      "input-validation-secure-coding",
      "http-status-codes",
      "what-happens-google-com",
      "grpc",
      "mutex-semaphore-monitor",
      "first-page-from-power-on"
    ]
  },
  "rw-discord-elixir-gateway": {
    "links": [
      "rw-discord-message-storage",
      "actor-model",
      "sd-chat-presence",
      "consistent-hashing",
      "backpressure",
      "exponential-backoff-jitter",
      "circuit-breaker",
      "mutex-semaphore-monitor",
      "tail-latency",
      "garbage-collection",
      "distributed-tracing",
      "sd-chat-connections"
    ],
    "mentions": [
      "realtime-communication",
      "resilience-patterns",
      "sd-leaderboard-sorted-set",
      "floating-point-numbers",
      "js-pure-functions",
      "grpc",
      "pub-sub"
    ]
  },
  "rw-netflix-evcache": {
    "links": [
      "rw-netflix-cloud-microservices",
      "rw-netflix-chaos-engineering",
      "rw-netflix-open-connect",
      "caching-strategies",
      "sd-cache-and-cdn-tier",
      "consistent-hashing",
      "sd-db-replication-intro",
      "timeouts",
      "eventual-consistency",
      "rw-amazon-dynamo",
      "consistency-models",
      "multi-region",
      "redis-replication-sentinel"
    ],
    "mentions": [
      "db-type-embedded",
      "db-type-key-value",
      "autoscaling",
      "db-sharding",
      "tail-latency",
      "clock-skew",
      "kafka-basics",
      "vpc-basics",
      "redis-basics",
      "dns"
    ]
  },
  "rw-spotify-event-delivery": {
    "links": [
      "rw-linkedin-kafka",
      "sd-ad-click-stream-windows",
      "kafka-vs-rabbitmq-replay",
      "message-delivery-semantics",
      "exponential-backoff-jitter",
      "autoscaling"
    ],
    "mentions": [
      "rw-reading-engineering-blogs",
      "service-discovery",
      "rest-api-design",
      "microservices",
      "config-management-tools",
      "pub-sub",
      "disaster-recovery",
      "api-versioning",
      "kafka-basics",
      "data-privacy-compliance",
      "data-lake-hdfs",
      "high-availability",
      "schema-versioning",
      "etl-vs-elt",
      "sli-slo",
      "dns"
    ]
  },
  "rw-uber-ringpop-cadence": {
    "links": [
      "rw-uber-h3-geospatial",
      "rw-uber-schemaless-docstore",
      "rw-uber-doma",
      "saga-pattern",
      "event-sourcing",
      "sd-wallet-event-sourcing",
      "rw-airbnb-skipper",
      "transactional-outbox",
      "feature-flags",
      "idempotency-key"
    ],
    "mentions": [
      "elasticsearch-inverted-index",
      "opensearch-cluster-operations",
      "rw-reading-engineering-blogs",
      "db-type-wide-column",
      "microservices",
      "event-driven-architecture",
      "api-versioning",
      "kafka-basics",
      "go-concurrency-basics"
    ]
  },
  "rw-whatsapp-erlang": {
    "links": [
      "rw-discord-elixir-gateway",
      "sd-chat-connections",
      "actor-model",
      "os-kernel-system-calls",
      "db-sharding",
      "cache-write-policies",
      "rw-netflix-cloud-microservices"
    ],
    "mentions": [
      "sd-latency-numbers",
      "sd-start-single-server",
      "rw-reading-engineering-blogs",
      "code-review-practices",
      "sd-stock-exchange-low-latency",
      "db-partitioning",
      "pub-sub",
      "dns"
    ]
  },
  "rw-37signals-cloud-exit": {
    "links": [
      "cloud-cost-optimization",
      "cloud-service-models-shared-responsibility",
      "rw-stack-overflow-few-servers",
      "disaster-recovery",
      "docker-container-basics",
      "health-checks",
      "k8s-controllers-reconcile",
      "rolling-deployment",
      "zero-downtime-migrations"
    ],
    "mentions": [
      "elasticsearch-inverted-index",
      "container-orchestration-choices",
      "opensearch-cluster-operations",
      "k8s-deploy-pipeline-eks",
      "rds-aurora-managed-db",
      "sd-object-storage-architecture",
      "transactional-outbox",
      "osi-in-practice",
      "redis-basics",
      "config-management-tools",
      "eks-cluster-basics",
      "vpc-basics",
      "dns"
    ]
  },
  "rw-airbnb-soa-migration": {
    "links": [
      "microservices",
      "api-gateway-use-cases",
      "rw-uber-doma",
      "rw-segment-goodbye-microservices",
      "monolith-architecture",
      "rw-amazon-distributed-computing-manifesto",
      "cdc-change-data-capture",
      "canary-release",
      "feature-flags",
      "grpc",
      "graphql-basics",
      "n-plus-one-queries",
      "graphql-authorization"
    ],
    "mentions": [
      "json-crud-http",
      "graphql-schema-type-system",
      "rw-reading-engineering-blogs",
      "db-type-columnar-olap",
      "gateway",
      "mysql-replication-online-ddl",
      "distributed-tracing",
      "kafka-basics",
      "git-merge-conflict",
      "osi-in-practice",
      "data-privacy-compliance"
    ]
  },
  "rw-amazon-distributed-computing-manifesto": {
    "links": [
      "microservices",
      "ddd-bounded-context",
      "soap-and-soa",
      "long-polling",
      "webhooks",
      "event-driven-architecture",
      "saga-pattern",
      "db-replication-sharding",
      "pub-sub",
      "event-sourcing",
      "eventual-consistency",
      "transactional-outbox",
      "rw-segment-goodbye-microservices"
    ],
    "mentions": [
      "data-warehouse-architecture",
      "s3-storage-classes-lifecycle",
      "claude-code-plugins-and-channels"
    ]
  },
  "rw-dropbox-magic-pocket": {
    "links": [
      "sd-object-storage-durability",
      "block-file-object-storage",
      "rw-facebook-haystack",
      "rw-notion-postgres-sharding",
      "sd-object-storage-architecture",
      "sd-file-sync-block-upload",
      "rw-pinterest-mysql-sharding",
      "distributed-lock",
      "rw-37signals-cloud-exit",
      "s3-storage-classes-lifecycle"
    ],
    "mentions": [
      "service-discovery",
      "db-type-key-value",
      "js-memory-leak",
      "dynamic-programming",
      "ds-hash-map",
      "sd-split-web-and-db",
      "page-cache-disk-io",
      "tail-latency",
      "db-index-pitfalls"
    ]
  },
  "rw-facebook-haystack": {
    "links": [
      "sd-object-storage-architecture",
      "page-cache-disk-io",
      "rw-dropbox-magic-pocket",
      "sd-cache-and-cdn-tier",
      "sd-mq-storage-partitions",
      "s3-storage-classes-lifecycle"
    ],
    "mentions": [
      "rw-reading-engineering-blogs",
      "data-warehouse-architecture",
      "os-kernel-system-calls",
      "ds-hash-map",
      "linux-disks-filesystems",
      "postgres-architecture",
      "data-lake-hdfs"
    ]
  },
  "rw-linkedin-kafka": {
    "links": [
      "sd-mq-storage-partitions",
      "kafka-vs-rabbitmq-replay",
      "rw-spotify-event-delivery",
      "backpressure",
      "page-cache-disk-io",
      "sd-mq-consumer-groups",
      "message-delivery-semantics",
      "idempotency-key",
      "sd-mq-replication"
    ],
    "mentions": [
      "caching-strategies",
      "git-tips-advanced",
      "rw-reading-engineering-blogs",
      "data-warehouse-architecture",
      "schema-versioning",
      "rabbitmq-basics",
      "db-type-key-value",
      "js-memory-leak",
      "stream-processing",
      "centralized-logging-pipeline",
      "distributed-transactions-2pc",
      "os-kernel-system-calls",
      "js-pure-functions",
      "kafka-basics",
      "postgres-architecture",
      "resilience-patterns",
      "data-lake-hdfs",
      "db-partitioning"
    ]
  },
  "rw-notion-postgres-sharding": {
    "links": [
      "db-sharding",
      "postgres-operations",
      "rw-pinterest-mysql-sharding",
      "rw-instagram-sharding-ids",
      "rw-slack-vitess",
      "postgres-mvcc-vacuum",
      "zero-downtime-migrations",
      "connection-pool",
      "cdc-change-data-capture"
    ],
    "mentions": [
      "data-warehouse-architecture",
      "virtualization-hypervisors",
      "db-migration-tools",
      "terraform-basics",
      "db-architecture-by-scale",
      "db-type-key-value",
      "sd-latency-numbers",
      "rw-airbnb-soa-migration",
      "sd-mq-storage-partitions",
      "sd-sharding-intro",
      "transactional-outbox",
      "scaling-horizontal-vertical",
      "kafka-basics",
      "db-replication-sharding",
      "db-partitioning",
      "mongodb-document-model",
      "microservices",
      "etl-vs-elt"
    ]
  },
  "rw-openai-postgres-scaling": {
    "links": [
      "db-replication-sharding",
      "connection-pool",
      "rw-notion-postgres-sharding",
      "rw-instagram-sharding-ids",
      "postgres-mvcc-vacuum",
      "db-sharding",
      "zero-downtime-migrations",
      "nodejs-orm-query-builder",
      "n-plus-one-queries",
      "failover",
      "rate-limiting-algorithms",
      "exponential-backoff-jitter",
      "circuit-breaker",
      "postgres-slow-db-triage"
    ],
    "mentions": [
      "sql-batch-timeout-pool",
      "db-architecture-by-scale",
      "resilience-patterns",
      "db-index-pitfalls",
      "redis-basics",
      "db-transaction-isolation",
      "mongodb-document-model",
      "sql-basics"
    ]
  },
  "rw-pinterest-mysql-sharding": {
    "links": [
      "db-sharding",
      "sd-unique-id-generator",
      "rw-instagram-sharding-ids",
      "rw-slack-vitess",
      "rw-discord-message-storage",
      "db-replication-sharding",
      "n-plus-one-queries",
      "db-keys-denormalization",
      "failover",
      "service-discovery"
    ],
    "mentions": [
      "elasticsearch-inverted-index",
      "rw-reading-engineering-blogs",
      "db-type-wide-column",
      "mongodb-document-model",
      "sd-sharding-intro",
      "redis-basics",
      "high-availability",
      "db-modeling-normalization"
    ]
  },
  "rw-segment-goodbye-microservices": {
    "links": [
      "microservices",
      "modular-monolith",
      "rw-stack-overflow-few-servers",
      "rw-amazon-distributed-computing-manifesto",
      "message-queue-basics",
      "dead-letter-queue",
      "resilience-patterns",
      "dependency-hell",
      "sd-unique-id-generator",
      "exponential-backoff-jitter",
      "test-pyramid-unit-tests",
      "rw-shopify-modular-monolith"
    ],
    "mentions": [
      "rds-aurora-managed-db",
      "k8s-deploy-pipeline-eks",
      "rabbitmq-basics",
      "api-test-automation",
      "sd-split-web-and-db",
      "js-memory-leak",
      "kafka-basics",
      "redis-basics"
    ]
  },
  "rw-stack-overflow-few-servers": {
    "links": [
      "monolith-architecture",
      "modular-monolith",
      "caching-strategies",
      "rw-reading-engineering-blogs",
      "multi-tenancy-isolation",
      "load-balancer-basics",
      "scaling-horizontal-vertical",
      "db-replication-sharding",
      "pub-sub",
      "cache-invalidation",
      "elasticsearch-inverted-index",
      "microservices",
      "rw-shopify-modular-monolith",
      "zero-downtime-migrations",
      "rolling-deployment",
      "redis-persistence-ha"
    ],
    "mentions": [
      "github-actions-docker-ecr",
      "terraform-basics",
      "db-sharding",
      "js-memory-leak",
      "load-testing-k6",
      "page-cache-disk-io",
      "sd-start-single-server",
      "db-type-relational",
      "http-caching-cdn",
      "disaster-recovery",
      "redis-basics",
      "sd-load-balancer-stateless",
      "sql-query-rewrite",
      "dns"
    ]
  },
  "rw-uber-doma": {
    "links": [
      "microservices",
      "ddd-bounded-context",
      "rw-segment-goodbye-microservices",
      "monolith-architecture",
      "clean-architecture",
      "layered-architecture",
      "api-gateway-use-cases",
      "plugin-microkernel-architecture",
      "pattern-strategy",
      "modular-monolith",
      "distributed-tracing"
    ],
    "mentions": [
      "rw-reading-engineering-blogs",
      "owasp-top-10-map",
      "gateway",
      "frontend-first-steps",
      "code-review-practices",
      "vpc-basics",
      "etl-vs-elt"
    ]
  },
  "rw-cloudflare-outage-regex": {
    "links": [
      "rw-reading-engineering-blogs",
      "rw-cloudflare-pingora",
      "postmortems",
      "cdn-edge-anycast",
      "regex-and-globbing",
      "feature-flags",
      "canary-release"
    ],
    "mentions": [
      "https-tls",
      "db-type-key-value",
      "os-kernel-system-calls",
      "sd-start-single-server",
      "page-cache-disk-io",
      "what-happens-google-com",
      "recursion-backtracking",
      "dns"
    ]
  },
  "rw-discord-message-storage": {
    "links": [
      "sd-chat-message-storage",
      "db-sharding",
      "rw-discord-elixir-gateway",
      "db-type-wide-column",
      "rw-twitter-snowflake-timeline",
      "sd-unique-id-generator",
      "caching-strategies",
      "consistent-hashing"
    ],
    "mentions": [
      "redis-basics",
      "eventual-consistency",
      "mongodb-document-model",
      "js-numbers-bigint",
      "sd-start-single-server",
      "db-index-design",
      "db-type-embedded",
      "db-consistency-cap",
      "rw-slack-vitess",
      "sd-mq-storage-partitions",
      "transactional-outbox",
      "db-type-key-value",
      "grpc",
      "microservices"
    ]
  },
  "rw-figma-multiplayer": {
    "links": [
      "rw-reading-engineering-blogs",
      "crdt",
      "realtime-communication",
      "clock-skew",
      "client-data-cache",
      "rw-twitter-snowflake-timeline",
      "multi-tenancy-isolation",
      "postgres-architecture",
      "distributed-lock",
      "postgres-mvcc-vacuum",
      "db-sharding",
      "rw-slack-vitess",
      "rw-pinterest-mysql-sharding",
      "rw-notion-postgres-sharding"
    ],
    "mentions": [
      "sd-sharding-intro",
      "db-type-newsql",
      "db-type-key-value",
      "leader-election",
      "js-numbers-bigint",
      "db-consistency-cap",
      "db-replication-sharding",
      "scaling-horizontal-vertical",
      "mongodb-document-model",
      "sdlc-models-agile-scrum"
    ]
  },
  "rw-instagram-sharding-ids": {
    "links": [
      "sd-unique-id-generator",
      "db-sharding",
      "sd-sharding-intro",
      "postgres-architecture",
      "rw-twitter-snowflake-timeline",
      "clock-skew",
      "rw-pinterest-mysql-sharding",
      "postgres-mvcc-vacuum",
      "sd-news-feed-publishing",
      "cache-invalidation",
      "rw-notion-postgres-sharding"
    ],
    "mentions": [
      "db-type-wide-column",
      "db-architecture-by-scale",
      "redis-basics",
      "postgres-functions-triggers",
      "db-replication-sharding",
      "mongodb-document-model",
      "js-numbers-bigint",
      "sd-start-single-server",
      "db-type-newsql",
      "http-caching-cdn",
      "rw-reading-engineering-blogs",
      "pub-sub"
    ]
  },
  "rw-kakao-actionbase": {
    "links": [
      "rw-reading-engineering-blogs",
      "rw-kakao-datacenter-fire",
      "rw-kakaotalk-cache-farm",
      "cache-invalidation",
      "sd-news-feed-publishing",
      "sql-views-materialized",
      "cdc-change-data-capture",
      "eventual-consistency",
      "idempotency-key",
      "db-type-wide-column",
      "cqrs",
      "zero-downtime-migrations",
      "transactional-outbox",
      "canary-release",
      "kafka-basics",
      "sd-chat-message-storage"
    ],
    "mentions": [
      "elasticsearch-inverted-index",
      "kubernetes-ingress",
      "db-types-overview",
      "db-type-relational",
      "db-type-graph",
      "scaling-horizontal-vertical",
      "db-index-pitfalls",
      "redis-basics",
      "mongodb-document-model",
      "acid-transactions"
    ]
  },
  "rw-kakao-datacenter-fire": {
    "links": [
      "rw-reading-engineering-blogs",
      "rw-kakaotalk-cache-farm",
      "rw-kakao-actionbase",
      "disaster-recovery",
      "high-availability",
      "sd-multi-datacenter",
      "leader-election",
      "raft-consensus",
      "exponential-backoff-jitter",
      "circuit-breaker",
      "bgp-basics",
      "cdn-edge-anycast",
      "chaos-engineering"
    ],
    "mentions": [
      "elasticsearch-inverted-index",
      "k8s-deploy-pipeline-eks",
      "docker-container-basics",
      "cloud-deployment-models-multicloud",
      "resilience-patterns",
      "kafka-basics",
      "vpc-basics",
      "db-type-relational",
      "redis-basics",
      "cloud-service-models-shared-responsibility",
      "db-type-key-value",
      "sso-saml-oidc",
      "on-call"
    ]
  },
  "rw-kakaotalk-cache-farm": {
    "links": [
      "rw-reading-engineering-blogs",
      "rw-kakao-datacenter-fire",
      "rw-kakao-actionbase",
      "rw-naver-arcus",
      "consistent-hashing",
      "caching-strategies",
      "redis-memory-eviction",
      "k8s-statefulset",
      "k8s-service-types",
      "redis-replication-sentinel",
      "service-discovery",
      "k8s-controllers-reconcile"
    ],
    "mentions": [
      "redis-basics",
      "network-partitions",
      "helm-basics",
      "kubernetes-ingress",
      "db-sharding",
      "dns"
    ]
  },
  "rw-naver-arcus": {
    "links": [
      "rw-reading-engineering-blogs",
      "consistent-hashing",
      "caching-strategies",
      "service-discovery",
      "leader-election",
      "cache-invalidation",
      "sd-chat-message-storage",
      "sd-leaderboard-sorted-set",
      "sd-news-feed-publishing",
      "redis-high-throughput",
      "java-jvm-memory-gc",
      "tcp-reliability-congestion"
    ],
    "mentions": [
      "redis-cluster",
      "db-type-wide-column",
      "redis-basics",
      "sd-mq-consumer-groups",
      "ds-linked-list",
      "db-sharding",
      "event-loop",
      "bit-manipulation",
      "build-caching",
      "dns"
    ]
  },
  "rw-netflix-chaos-engineering": {
    "links": [
      "rw-netflix-cloud-microservices",
      "rw-netflix-open-connect",
      "chaos-engineering",
      "resilience-patterns",
      "canary-release"
    ],
    "mentions": [
      "service-discovery",
      "db-type-wide-column",
      "k8s-deploy-pipeline-eks",
      "db-type-key-value",
      "iptables-basics",
      "rw-netflix-evcache",
      "traffic-shaping-qos",
      "bash-scripting",
      "sd-start-single-server",
      "autoscaling",
      "service-mesh",
      "latency-bandwidth-throughput",
      "production-incidents",
      "network-config-cicd",
      "security-groups-nacl",
      "osi-in-practice",
      "reverse-proxy-lb-api-gateway",
      "grpc",
      "vpc-basics",
      "dns"
    ]
  },
  "rw-netflix-cloud-microservices": {
    "links": [
      "rw-netflix-chaos-engineering",
      "rw-netflix-open-connect",
      "rw-netflix-evcache",
      "microservices",
      "service-discovery",
      "circuit-breaker",
      "db-consistency-cap",
      "api-gateway-use-cases",
      "distributed-tracing",
      "resilience-patterns",
      "n-plus-one-queries",
      "tcp-reliability-congestion",
      "rate-limiting-algorithms",
      "backpressure",
      "spring-cloud-vs-kubernetes"
    ],
    "mentions": [
      "tail-latency",
      "k8s-service-types",
      "gateway",
      "db-type-wide-column",
      "realtime-communication",
      "db-type-key-value",
      "graphql-basics",
      "kubernetes-ingress",
      "load-testing-k6",
      "autoscaling",
      "deadlocks",
      "latency-bandwidth-throughput",
      "db-type-relational",
      "event-loop",
      "sd-cache-and-cdn-tier",
      "scaling-horizontal-vertical",
      "security-groups-nacl",
      "redis-basics",
      "http-status-codes",
      "mutex-semaphore-monitor",
      "grpc",
      "db-modeling-normalization",
      "dns"
    ]
  },
  "rw-netflix-open-connect": {
    "links": [
      "rw-netflix-cloud-microservices",
      "rw-netflix-chaos-engineering",
      "http-caching-cdn",
      "cdn-edge-anycast",
      "sd-video-streaming-cost",
      "bgp-basics",
      "service-discovery"
    ],
    "mentions": [
      "sd-start-single-server",
      "what-happens-google-com",
      "gateway-link-redundancy-fhrp-lacp",
      "ddos-protection",
      "ipv6-basics",
      "layer-ip-routing-icmp",
      "data-center-infrastructure",
      "sd-music-streaming",
      "udp-and-quic",
      "layer-mtu-fragmentation",
      "dns"
    ]
  },
  "rw-reading-engineering-blogs": {
    "links": [
      "postmortems",
      "resilience-patterns",
      "rw-netflix-chaos-engineering",
      "rw-twitter-snowflake-timeline",
      "rw-discord-message-storage",
      "rw-kakao-actionbase",
      "rw-segment-goodbye-microservices",
      "rw-amazon-distributed-computing-manifesto",
      "rw-37signals-cloud-exit",
      "rw-stack-overflow-few-servers",
      "rw-shopify-modular-monolith",
      "rw-cloudflare-outage-regex",
      "rw-kakao-datacenter-fire",
      "microservices",
      "rw-instagram-sharding-ids",
      "rw-slack-vitess",
      "rw-pinterest-mysql-sharding",
      "rw-notion-postgres-sharding",
      "rw-uber-schemaless-docstore",
      "rw-amazon-dynamo",
      "rw-google-spanner-truetime",
      "rw-meta-memcache-tao",
      "rw-netflix-cloud-microservices",
      "rw-uber-doma",
      "rw-airbnb-soa-migration",
      "rw-stripe-idempotency",
      "rw-airbnb-skipper",
      "rw-uber-ringpop-cadence",
      "rw-whatsapp-erlang",
      "rw-discord-elixir-gateway",
      "rw-figma-multiplayer",
      "rw-cloudflare-pingora",
      "rw-netflix-open-connect",
      "rw-linkedin-kafka",
      "rw-spotify-event-delivery",
      "rw-netflix-evcache",
      "rw-kakaotalk-cache-farm",
      "rw-naver-arcus",
      "sd-interview-framework"
    ],
    "mentions": [
      "db-sharding",
      "cdc-change-data-capture",
      "k8s-deploy-pipeline-eks",
      "kubernetes-ingress",
      "service-mesh",
      "kafka-basics",
      "db-type-graph",
      "acid-transactions",
      "dns"
    ]
  },
  "rw-slack-vitess": {
    "links": [
      "sd-sharding-intro",
      "db-sharding",
      "multi-tenancy-isolation",
      "rw-uber-schemaless-docstore",
      "rw-pinterest-mysql-sharding",
      "consistent-hashing",
      "mysql-replication-online-ddl",
      "circuit-breaker",
      "exponential-backoff-jitter",
      "rate-limiting-in-practice"
    ],
    "mentions": [
      "db-type-newsql",
      "rw-reading-engineering-blogs",
      "data-warehouse-architecture",
      "service-discovery",
      "db-type-wide-column",
      "global-rollout-localization",
      "db-type-key-value",
      "resilience-patterns",
      "sd-start-single-server",
      "db-replication-sharding",
      "rw-airbnb-soa-migration",
      "scaling-horizontal-vertical",
      "db-keys-denormalization",
      "mongodb-document-model",
      "microservices",
      "etl-vs-elt",
      "db-modeling-normalization",
      "zero-downtime-migrations"
    ]
  },
  "rw-toss-architecture": {
    "links": [
      "rw-reading-engineering-blogs",
      "rw-kakao-datacenter-fire",
      "kafka-basics",
      "leader-election",
      "sd-multi-datacenter",
      "dead-letter-queue",
      "idempotency-key"
    ],
    "mentions": [
      "kafka-to-lake-pipeline",
      "elasticsearch-inverted-index",
      "db-type-columnar-olap",
      "gateway",
      "service-mesh",
      "vpc-basics",
      "db-replication-sharding",
      "redis-basics",
      "cdc-change-data-capture",
      "http-methods",
      "dns"
    ]
  },
  "rw-twitter-snowflake-timeline": {
    "links": [
      "sd-unique-id-generator",
      "sd-news-feed-publishing",
      "leader-election",
      "clock-skew",
      "elasticsearch-inverted-index",
      "sd-sharding-intro",
      "rw-pinterest-mysql-sharding",
      "rw-discord-message-storage"
    ],
    "mentions": [
      "dbt-transformations",
      "db-sharding",
      "db-type-wide-column",
      "graphql-basics",
      "js-numbers-bigint",
      "rw-reading-engineering-blogs",
      "kafka-basics",
      "redis-basics",
      "high-availability",
      "mongodb-document-model",
      "pub-sub"
    ]
  },
  "rw-uber-h3-geospatial": {
    "links": [
      "geohash",
      "sd-proximity-service",
      "quadtree",
      "sd-unique-id-generator",
      "rw-uber-doma",
      "rw-uber-ringpop-cadence"
    ],
    "mentions": [
      "rw-reading-engineering-blogs",
      "db-type-key-value",
      "js-numbers-bigint",
      "bit-manipulation",
      "redis-basics",
      "self-hosting-llm-inference"
    ]
  },
  "rw-uber-schemaless-docstore": {
    "links": [
      "sd-kv-store-partition-replication",
      "postgres-architecture",
      "mysql-innodb-basics",
      "idempotency-key",
      "sd-sharding-intro",
      "circuit-breaker",
      "sd-kv-store-failure-handling",
      "rw-amazon-dynamo",
      "cdc-change-data-capture",
      "message-delivery-semantics",
      "leader-election",
      "mysql-replication-online-ddl",
      "transactional-outbox",
      "postgres-mvcc-vacuum",
      "raft-consensus",
      "rw-google-spanner-truetime",
      "rw-slack-vitess"
    ],
    "mentions": [
      "rw-reading-engineering-blogs",
      "db-type-columnar-olap",
      "db-type-wide-column",
      "db-index",
      "eventual-consistency",
      "dead-letter-queue",
      "db-replication-sharding",
      "mongodb-document-model",
      "resilience-patterns",
      "page-cache-disk-io",
      "sd-start-single-server",
      "thread-safety",
      "distributed-transactions-2pc",
      "db-sharding",
      "db-index-design",
      "db-type-newsql",
      "db-type-relational",
      "sd-mq-storage-partitions",
      "kafka-basics",
      "sql-batch-timeout-pool",
      "db-index-pitfalls",
      "redis-basics",
      "db-keys-denormalization",
      "db-transaction-isolation",
      "microservices",
      "sql-basics",
      "db-modeling-normalization",
      "http-methods"
    ]
  },
  "rw-amazon-dynamo": {
    "links": [
      "rw-reading-engineering-blogs",
      "sd-kv-store-partition-replication",
      "sd-kv-store-failure-handling",
      "sd-kv-store-versioning",
      "tail-latency",
      "eventual-consistency",
      "consistent-hashing",
      "merkle-tree",
      "clock-skew",
      "raft-consensus",
      "db-consistency-cap",
      "optimistic-locking",
      "rw-stripe-idempotency"
    ],
    "mentions": [
      "db-type-wide-column",
      "db-type-key-value",
      "network-partitions",
      "authn-vs-authz",
      "db-sharding",
      "db-type-relational",
      "mongodb-replica-set-sharding",
      "vpc-basics",
      "db-transaction-isolation",
      "acid-transactions"
    ]
  },
  "rw-google-spanner-truetime": {
    "links": [
      "rw-reading-engineering-blogs",
      "clock-skew",
      "consistency-models",
      "db-type-newsql",
      "db-sharding",
      "distributed-transactions-2pc",
      "db-consistency-cap"
    ],
    "mentions": [
      "network-partitions",
      "db-type-key-value",
      "db-type-wide-column",
      "sd-start-single-server",
      "db-type-relational",
      "leader-election",
      "mongodb-document-model",
      "sd-sharding-intro"
    ]
  },
  "rw-meta-memcache-tao": {
    "links": [
      "rw-reading-engineering-blogs",
      "caching-strategies",
      "cache-invalidation",
      "rw-facebook-haystack",
      "consistent-hashing",
      "cdc-change-data-capture",
      "sd-db-replication-intro"
    ],
    "mentions": [
      "exponential-backoff-jitter",
      "db-type-columnar-olap",
      "sliding-window-pattern",
      "ds-hash-map",
      "sd-start-single-server",
      "db-sharding",
      "db-consistency-cap",
      "sd-sharding-intro",
      "tcp-reliability-congestion",
      "db-replication-sharding",
      "redis-basics",
      "resilience-patterns",
      "acid-transactions",
      "udp-and-quic"
    ]
  },
  "rw-shopify-modular-monolith": {
    "links": [
      "rw-reading-engineering-blogs",
      "modular-monolith",
      "microservices",
      "rw-airbnb-soa-migration",
      "backpressure",
      "rate-limiting-algorithms",
      "db-sharding",
      "resilience-patterns",
      "mysql-replication-online-ddl",
      "cdc-change-data-capture",
      "solid-principles",
      "ddd-bounded-context",
      "rw-meta-memcache-tao"
    ],
    "mentions": [
      "redis-basics",
      "k8s-deploy-pipeline-eks",
      "sd-split-web-and-db",
      "disaster-recovery",
      "api-versioning",
      "bloom-filter",
      "coupling-cohesion-principles",
      "release-cutover-hypercare"
    ]
  },
  "rw-stripe-idempotency": {
    "links": [
      "rw-reading-engineering-blogs",
      "idempotency-key",
      "sd-payment-reliability",
      "exponential-backoff-jitter",
      "rw-airbnb-skipper",
      "http-methods"
    ],
    "mentions": [
      "zero-downtime-migrations",
      "message-delivery-semantics",
      "sd-start-single-server",
      "resilience-patterns",
      "js-pure-functions",
      "http-status-codes",
      "acid-transactions",
      "dns",
      "webhooks"
    ]
  },
  "leetcode-index-pairs-of-a-string": {
    "links": [
      "leetcode-implement-trie",
      "string-search-algorithms",
      "leetcode-extra-characters-in-a-string",
      "leetcode-replace-words",
      "leetcode-non-overlapping-intervals",
      "leetcode-merge-intervals",
      "leetcode-word-search-ii"
    ],
    "mentions": [
      "message-delivery-semantics"
    ]
  },
  "leetcode-palindrome-pairs": {
    "links": [
      "leetcode-implement-trie",
      "leetcode-longest-palindromic-substring",
      "leetcode-valid-palindrome",
      "leetcode-palindrome-partitioning"
    ],
    "mentions": [
      "js-strings-unicode"
    ]
  },
  "leetcode-search-suggestions-system": {
    "links": [
      "leetcode-implement-trie",
      "sd-autocomplete-trie",
      "binary-search",
      "two-pointers-pattern",
      "leetcode-sum-of-prefix-scores-of-strings",
      "leetcode-longest-common-prefix",
      "leetcode-binary-search"
    ],
    "mentions": []
  },
  "leetcode-alien-dictionary": {
    "links": [
      "leetcode-course-schedule",
      "leetcode-course-schedule-ii",
      "ds-graph-bfs-dfs",
      "leetcode-permutations"
    ],
    "mentions": [
      "recursion-backtracking"
    ]
  },
  "leetcode-bitwise-and-of-numbers-range": {
    "links": [
      "bit-manipulation",
      "leetcode-number-of-1-bits",
      "leetcode-single-number",
      "leetcode-power-of-two",
      "leetcode-counting-bits",
      "layer-ip-addressing",
      "leetcode-longest-common-prefix",
      "leetcode-single-number-ii",
      "leetcode-missing-number",
      "leetcode-reverse-bits"
    ],
    "mentions": [
      "sd-latency-numbers",
      "security-groups-nacl",
      "dynamic-programming"
    ]
  },
  "leetcode-candy": {
    "links": [
      "greedy-algorithms",
      "ds-graph-bfs-dfs",
      "leetcode-hand-of-straights",
      "leetcode-merge-triplets-to-form-target-triplet",
      "leetcode-valid-parenthesis-string",
      "leetcode-ipo",
      "leetcode-trapping-rain-water",
      "leetcode-product-of-array-except-self"
    ],
    "mentions": []
  },
  "leetcode-coin-change-ii": {
    "links": [
      "leetcode-coin-change",
      "dynamic-programming",
      "leetcode-climbing-stairs",
      "leetcode-word-break",
      "leetcode-partition-equal-subset-sum",
      "leetcode-target-sum",
      "leetcode-combination-sum"
    ],
    "mentions": [
      "js-memoization",
      "recursion-backtracking"
    ]
  },
  "leetcode-construct-tree-from-preorder-inorder": {
    "links": [
      "ds-binary-tree-bst",
      "leetcode-serialize-and-deserialize-binary-tree",
      "leetcode-validate-binary-search-tree",
      "leetcode-invert-binary-tree",
      "leetcode-diameter-of-binary-tree"
    ],
    "mentions": [
      "divide-and-conquer"
    ]
  },
  "leetcode-count-primes": {
    "links": [
      "bit-manipulation",
      "leetcode-powx-n",
      "ds-union-find",
      "leetcode-happy-number"
    ],
    "mentions": [
      "message-delivery-semantics",
      "ds-hash-map",
      "floating-point-numbers",
      "sd-email-protocols"
    ]
  },
  "leetcode-detect-squares": {
    "links": [
      "ds-hash-map",
      "leetcode-rotate-image",
      "leetcode-spiral-matrix",
      "leetcode-two-sum"
    ],
    "mentions": []
  },
  "leetcode-distinct-subsequences": {
    "links": [
      "leetcode-longest-common-subsequence",
      "leetcode-subsets",
      "leetcode-coin-change-ii",
      "leetcode-interleaving-string",
      "leetcode-edit-distance",
      "leetcode-regular-expression-matching"
    ],
    "mentions": [
      "js-memoization",
      "ds-array-matrix",
      "recursion-backtracking",
      "dynamic-programming"
    ]
  },
  "leetcode-excel-sheet-column-number": {
    "links": [
      "leetcode-plus-one",
      "leetcode-multiply-strings",
      "leetcode-reverse-integer",
      "leetcode-powx-n"
    ],
    "mentions": [
      "floating-point-numbers"
    ]
  },
  "leetcode-extra-characters-in-a-string": {
    "links": [
      "leetcode-word-break",
      "dynamic-programming",
      "ds-trie",
      "leetcode-implement-trie",
      "leetcode-replace-words",
      "string-search-algorithms",
      "leetcode-index-pairs-of-a-string",
      "leetcode-palindrome-partitioning"
    ],
    "mentions": [
      "big-o-notation",
      "recursion-backtracking"
    ]
  },
  "leetcode-find-city-smallest-neighbors": {
    "links": [
      "shortest-path-algorithms",
      "leetcode-network-delay-time",
      "ds-graph-bfs-dfs",
      "leetcode-path-with-maximum-probability"
    ],
    "mentions": [
      "sd-maps-tiles-routing",
      "ds-heap"
    ]
  },
  "leetcode-interleaving-string": {
    "links": [
      "leetcode-longest-common-subsequence",
      "leetcode-edit-distance",
      "ds-graph-bfs-dfs",
      "leetcode-distinct-subsequences",
      "leetcode-regular-expression-matching",
      "leetcode-unique-paths"
    ],
    "mentions": [
      "js-memoization",
      "ds-array-matrix",
      "dynamic-programming"
    ]
  },
  "leetcode-ipo": {
    "links": [
      "ds-heap",
      "greedy-algorithms",
      "leetcode-gas-station",
      "leetcode-hand-of-straights",
      "leetcode-merge-triplets-to-form-target-triplet",
      "leetcode-valid-parenthesis-string",
      "leetcode-candy",
      "leetcode-task-scheduler",
      "leetcode-meeting-rooms-ii"
    ],
    "mentions": []
  },
  "leetcode-merge-triplets-to-form-target-triplet": {
    "links": [
      "greedy-algorithms",
      "bit-manipulation",
      "dynamic-programming",
      "leetcode-hand-of-straights",
      "leetcode-valid-parenthesis-string",
      "leetcode-candy",
      "leetcode-ipo",
      "leetcode-jump-game"
    ],
    "mentions": [
      "http-methods"
    ]
  },
  "leetcode-missing-number": {
    "links": [
      "leetcode-single-number",
      "ds-hash-map",
      "binary-search",
      "leetcode-linked-list-cycle",
      "leetcode-single-number-ii",
      "leetcode-number-of-1-bits",
      "leetcode-counting-bits",
      "bit-manipulation"
    ],
    "mentions": [
      "sql-aggregation-pitfalls"
    ]
  },
  "leetcode-my-calendar-i": {
    "links": [
      "leetcode-meeting-rooms",
      "interval-problems-pattern",
      "binary-search",
      "leetcode-car-pooling",
      "leetcode-meeting-rooms-ii",
      "leetcode-insert-interval",
      "leetcode-interval-list-intersections",
      "leetcode-employee-free-time"
    ],
    "mentions": [
      "ds-binary-tree-bst",
      "segment-tree-fenwick",
      "sd-hotel-double-booking",
      "postgres-data-types"
    ]
  },
  "leetcode-path-with-maximum-probability": {
    "links": [
      "leetcode-network-delay-time",
      "shortest-path-algorithms",
      "ds-heap",
      "leetcode-swim-in-rising-water",
      "leetcode-cheapest-flights-within-k-stops",
      "leetcode-find-city-smallest-neighbors"
    ],
    "mentions": [
      "sd-latency-numbers",
      "ds-graph-bfs-dfs",
      "sd-maps-tiles-routing"
    ]
  },
  "leetcode-plus-one": {
    "links": [
      "leetcode-multiply-strings",
      "leetcode-add-two-numbers",
      "bit-manipulation",
      "recursion-backtracking",
      "leetcode-sum-of-two-integers"
    ],
    "mentions": [
      "js-numbers-bigint",
      "ds-linked-list",
      "redis-basics",
      "big-o-notation"
    ]
  },
  "leetcode-power-of-two": {
    "links": [
      "bit-manipulation",
      "leetcode-number-of-1-bits",
      "leetcode-counting-bits",
      "leetcode-bitwise-and-of-numbers-range",
      "leetcode-powx-n",
      "leetcode-single-number",
      "leetcode-missing-number",
      "leetcode-reverse-integer"
    ],
    "mentions": [
      "sd-latency-numbers",
      "ds-hash-map",
      "floating-point-numbers",
      "segment-tree-fenwick",
      "logic-gates-alu",
      "dynamic-programming"
    ]
  },
  "leetcode-reverse-integer": {
    "links": [
      "bit-manipulation",
      "leetcode-plus-one",
      "leetcode-add-two-numbers",
      "leetcode-reverse-bits",
      "leetcode-sum-of-two-integers",
      "leetcode-missing-number",
      "leetcode-power-of-two"
    ],
    "mentions": [
      "js-numbers-bigint",
      "ds-linked-list",
      "logic-gates-alu"
    ]
  },
  "leetcode-shortest-path-in-binary-matrix": {
    "links": [
      "ds-graph-bfs-dfs",
      "shortest-path-algorithms",
      "leetcode-word-ladder",
      "leetcode-swim-in-rising-water",
      "leetcode-rotting-oranges"
    ],
    "mentions": [
      "big-o-notation",
      "sd-maps-tiles-routing"
    ]
  },
  "leetcode-single-number-ii": {
    "links": [
      "leetcode-single-number",
      "ds-hash-map",
      "leetcode-missing-number",
      "leetcode-majority-element",
      "leetcode-number-of-1-bits",
      "leetcode-counting-bits",
      "bit-manipulation"
    ],
    "mentions": [
      "message-delivery-semantics",
      "logic-gates-alu"
    ]
  },
  "leetcode-stock-with-cooldown": {
    "links": [
      "leetcode-best-time-to-buy-and-sell-stock",
      "dynamic-programming",
      "leetcode-house-robber"
    ],
    "mentions": [
      "js-memoization"
    ]
  },
  "leetcode-sum-of-prefix-scores-of-strings": {
    "links": [
      "leetcode-implement-trie",
      "string-search-algorithms",
      "monotonic-stack-pattern",
      "leetcode-longest-common-prefix",
      "leetcode-search-suggestions-system",
      "leetcode-largest-rectangle-in-histogram"
    ],
    "mentions": [
      "ds-stack-queue-deque",
      "sd-autocomplete-trie",
      "core-web-vitals"
    ]
  },
  "leetcode-target-sum": {
    "links": [
      "leetcode-partition-equal-subset-sum",
      "dynamic-programming",
      "leetcode-two-sum",
      "leetcode-coin-change-ii",
      "leetcode-subsets"
    ],
    "mentions": [
      "sd-latency-numbers",
      "js-memoization",
      "recursion-backtracking"
    ]
  },
  "leetcode-valid-parenthesis-string": {
    "links": [
      "leetcode-valid-parentheses",
      "recursion-backtracking",
      "dynamic-programming",
      "js-memoization",
      "ds-stack-queue-deque",
      "leetcode-generate-parentheses",
      "leetcode-hand-of-straights",
      "leetcode-merge-triplets-to-form-target-triplet",
      "leetcode-candy",
      "leetcode-ipo"
    ],
    "mentions": [
      "postgres-query-planner"
    ]
  },
  "leetcode-sudoku-solver": {
    "links": [
      "leetcode-n-queens",
      "leetcode-valid-sudoku",
      "recursion-backtracking",
      "bit-manipulation",
      "leetcode-subsets",
      "leetcode-word-search"
    ],
    "mentions": [
      "message-delivery-semantics",
      "ds-linked-list",
      "sql-aggregation-pitfalls",
      "logic-gates-alu"
    ]
  },
  "leetcode-add-two-numbers": {
    "links": [
      "ds-linked-list",
      "leetcode-reverse-linked-list",
      "leetcode-multiply-strings"
    ],
    "mentions": [
      "js-numbers-bigint",
      "floating-point-numbers"
    ]
  },
  "leetcode-binary-tree-right-side-view": {
    "links": [
      "leetcode-binary-tree-level-order-traversal",
      "ds-graph-bfs-dfs",
      "leetcode-maximum-depth-of-binary-tree",
      "leetcode-serialize-and-deserialize-binary-tree"
    ],
    "mentions": []
  },
  "leetcode-car-pooling": {
    "links": [
      "leetcode-meeting-rooms-ii",
      "interval-problems-pattern",
      "ds-heap",
      "leetcode-meeting-rooms",
      "leetcode-my-calendar-i",
      "leetcode-merge-intervals",
      "leetcode-employee-free-time",
      "leetcode-interval-list-intersections"
    ],
    "mentions": [
      "segment-tree-fenwick",
      "ds-array-matrix"
    ]
  },
  "leetcode-copy-list-with-random-pointer": {
    "links": [
      "leetcode-clone-graph"
    ],
    "mentions": [
      "json-crud-http",
      "ds-linked-list",
      "pattern-prototype"
    ]
  },
  "leetcode-course-schedule-ii": {
    "links": [
      "leetcode-course-schedule",
      "dynamic-programming",
      "recursion-backtracking",
      "leetcode-alien-dictionary",
      "leetcode-redundant-connection",
      "leetcode-reconstruct-itinerary"
    ],
    "mentions": [
      "ds-union-find",
      "ds-graph-bfs-dfs",
      "sd-video-upload-transcoding"
    ]
  },
  "leetcode-design-twitter": {
    "links": [
      "ds-heap",
      "leetcode-merge-k-sorted-lists",
      "sd-news-feed-publishing",
      "binary-search",
      "sd-news-feed-retrieval",
      "leetcode-kth-largest-element-in-a-stream",
      "leetcode-lru-cache"
    ],
    "mentions": [
      "db-sharding"
    ]
  },
  "leetcode-diameter-of-binary-tree": {
    "links": [
      "leetcode-maximum-depth-of-binary-tree",
      "leetcode-binary-tree-maximum-path-sum",
      "ds-graph-bfs-dfs",
      "leetcode-validate-binary-search-tree",
      "leetcode-invert-binary-tree"
    ],
    "mentions": [
      "js-memoization",
      "js-closures"
    ]
  },
  "leetcode-employee-free-time": {
    "links": [
      "leetcode-merge-intervals",
      "leetcode-merge-k-sorted-lists",
      "interval-problems-pattern",
      "ds-heap",
      "leetcode-meeting-rooms",
      "leetcode-interval-list-intersections",
      "leetcode-my-calendar-i",
      "leetcode-meeting-rooms-ii",
      "leetcode-car-pooling",
      "leetcode-insert-interval"
    ],
    "mentions": [
      "sorting-algorithms",
      "two-pointers-pattern",
      "divide-and-conquer"
    ]
  },
  "leetcode-find-first-last-position-sorted-array": {
    "links": [
      "binary-search",
      "leetcode-binary-search",
      "leetcode-koko-eating-bananas",
      "leetcode-capacity-to-ship-packages-within-d-days",
      "db-index",
      "leetcode-time-based-key-value-store",
      "leetcode-search-a-2d-matrix",
      "leetcode-find-minimum-in-rotated-sorted-array"
    ],
    "mentions": [
      "sql-filtering-operators",
      "big-o-notation"
    ]
  },
  "leetcode-find-peak-element": {
    "links": [
      "leetcode-binary-search",
      "binary-search",
      "leetcode-find-minimum-in-rotated-sorted-array",
      "leetcode-search-in-rotated-sorted-array",
      "leetcode-find-first-last-position-sorted-array",
      "leetcode-koko-eating-bananas"
    ],
    "mentions": [
      "divide-and-conquer"
    ]
  },
  "leetcode-hand-of-straights": {
    "links": [
      "leetcode-jump-game",
      "leetcode-gas-station",
      "greedy-algorithms",
      "ds-hash-map",
      "ds-heap",
      "sorting-algorithms",
      "leetcode-merge-triplets-to-form-target-triplet",
      "leetcode-valid-parenthesis-string",
      "leetcode-candy",
      "leetcode-ipo",
      "leetcode-partition-labels"
    ],
    "mentions": []
  },
  "leetcode-interval-list-intersections": {
    "links": [
      "interval-problems-pattern",
      "two-pointers-pattern",
      "leetcode-meeting-rooms",
      "leetcode-employee-free-time",
      "binary-search",
      "leetcode-merge-intervals",
      "leetcode-meeting-rooms-ii",
      "leetcode-insert-interval",
      "leetcode-my-calendar-i",
      "leetcode-merge-two-sorted-lists"
    ],
    "mentions": [
      "sorting-algorithms",
      "ds-array-matrix"
    ]
  },
  "leetcode-letter-combinations-of-a-phone-number": {
    "links": [
      "leetcode-subsets-ii",
      "leetcode-combination-sum",
      "recursion-backtracking",
      "leetcode-subsets",
      "leetcode-n-queens",
      "ds-trie",
      "leetcode-generate-parentheses",
      "leetcode-permutations"
    ],
    "mentions": []
  },
  "leetcode-longest-palindromic-substring": {
    "links": [
      "leetcode-valid-palindrome",
      "two-pointers-pattern",
      "dynamic-programming",
      "leetcode-palindrome-partitioning",
      "leetcode-longest-common-subsequence",
      "string-search-algorithms",
      "leetcode-palindrome-pairs"
    ],
    "mentions": [
      "sql-aggregation-pitfalls",
      "big-o-notation",
      "binary-search"
    ]
  },
  "leetcode-lru-cache": {
    "links": [
      "ds-linked-list",
      "caching-concepts-map",
      "redis-memory-eviction",
      "leetcode-reverse-linked-list",
      "virtual-memory-paging"
    ],
    "mentions": [
      "js-memoization",
      "redis-basics",
      "dns"
    ]
  },
  "leetcode-maximum-product-subarray": {
    "links": [
      "leetcode-best-time-to-buy-and-sell-stock",
      "dynamic-programming",
      "leetcode-subarray-product-less-than-k",
      "sliding-window-pattern",
      "leetcode-product-of-array-except-self",
      "leetcode-house-robber"
    ],
    "mentions": [
      "floating-point-numbers"
    ]
  },
  "leetcode-multiply-strings": {
    "links": [
      "recursion-backtracking",
      "big-o-notation",
      "leetcode-plus-one",
      "leetcode-add-two-numbers",
      "leetcode-powx-n",
      "leetcode-sum-of-two-integers"
    ],
    "mentions": [
      "js-numbers-bigint",
      "ds-linked-list",
      "sql-aggregation-pitfalls",
      "divide-and-conquer",
      "bit-manipulation"
    ]
  },
  "leetcode-number-of-connected-components": {
    "links": [
      "leetcode-number-of-islands",
      "ds-graph-bfs-dfs",
      "ds-union-find",
      "leetcode-redundant-connection",
      "leetcode-max-area-of-island",
      "ds-hash-map",
      "leetcode-clone-graph"
    ],
    "mentions": [
      "big-o-notation"
    ]
  },
  "leetcode-palindrome-partitioning": {
    "links": [
      "leetcode-subsets",
      "leetcode-combination-sum",
      "recursion-backtracking",
      "dynamic-programming",
      "bit-manipulation",
      "leetcode-longest-palindromic-substring",
      "leetcode-word-break",
      "leetcode-valid-palindrome"
    ],
    "mentions": [
      "js-memoization",
      "big-o-notation"
    ]
  },
  "leetcode-partition-equal-subset-sum": {
    "links": [
      "leetcode-coin-change",
      "dynamic-programming",
      "leetcode-coin-change-ii",
      "recursion-backtracking",
      "leetcode-target-sum",
      "binary-search"
    ],
    "mentions": [
      "sql-aggregation-pitfalls",
      "complexity-classes-p-np",
      "bit-manipulation"
    ]
  },
  "leetcode-redundant-connection": {
    "links": [
      "ds-union-find",
      "leetcode-course-schedule",
      "leetcode-number-of-connected-components",
      "minimum-spanning-tree",
      "leetcode-min-cost-to-connect-all-points",
      "leetcode-number-of-islands"
    ],
    "mentions": []
  },
  "leetcode-reorganize-string": {
    "links": [
      "ds-heap",
      "greedy-algorithms",
      "recursion-backtracking",
      "leetcode-task-scheduler",
      "leetcode-last-stone-weight"
    ],
    "mentions": [
      "sql-aggregation-pitfalls"
    ]
  },
  "leetcode-reverse-nodes-in-k-group": {
    "links": [
      "leetcode-reverse-linked-list",
      "leetcode-reorder-list"
    ],
    "mentions": [
      "ds-linked-list"
    ]
  },
  "leetcode-rotting-oranges": {
    "links": [
      "leetcode-number-of-islands",
      "leetcode-max-area-of-island",
      "ds-graph-bfs-dfs",
      "shortest-path-algorithms",
      "leetcode-pacific-atlantic-water-flow",
      "leetcode-word-ladder",
      "leetcode-shortest-path-in-binary-matrix"
    ],
    "mentions": [
      "sd-maps-tiles-routing"
    ]
  },
  "leetcode-sliding-window-median": {
    "links": [
      "leetcode-find-median-from-data-stream",
      "sliding-window-pattern",
      "binary-search",
      "segment-tree-fenwick",
      "leetcode-sliding-window-maximum",
      "leetcode-kth-largest-element-in-a-stream"
    ],
    "mentions": [
      "ds-binary-tree-bst",
      "elk-stack-basics"
    ]
  },
  "leetcode-validate-binary-search-tree": {
    "links": [
      "ds-binary-tree-bst",
      "leetcode-lowest-common-ancestor-of-bst",
      "leetcode-construct-tree-from-preorder-inorder",
      "leetcode-diameter-of-binary-tree"
    ],
    "mentions": []
  },
  "ai-crawlers-bot-control": {
    "links": [
      "ai-search-grounding-geo",
      "sd-web-crawler-politeness-dedup",
      "rate-limiting-in-practice",
      "waf",
      "mcp-protocol",
      "crawl-budget-faceted-navigation"
    ],
    "mentions": [
      "bit-manipulation",
      "ipv6-basics",
      "layer-ip-addressing",
      "cookie-session-login",
      "dns"
    ]
  },
  "crawl-budget-faceted-navigation": {
    "links": [
      "seo-for-spa",
      "sd-web-crawler-politeness-dedup",
      "nextjs-route-handlers-proxy",
      "scroll-triggered-intersection-observer",
      "search-engine-ranking-pagerank"
    ],
    "mentions": [
      "seo-log-file-analysis-search-console",
      "sd-latency-numbers",
      "loading-patterns",
      "client-data-cache",
      "cookie-session-login",
      "dns"
    ]
  },
  "search-spam-policies-cloaking": {
    "links": [
      "seo-for-spa",
      "structured-data-json-ld",
      "ab-testing",
      "seo-log-file-analysis-search-console",
      "seo-redirects-site-migration",
      "search-engine-ranking-pagerank",
      "search-traffic-measurement"
    ],
    "mentions": [
      "nextjs-static-dynamic-rendering",
      "code-review-practices",
      "count-min-sketch",
      "db-modeling-normalization",
      "rendering-strategies"
    ]
  },
  "search-traffic-measurement": {
    "links": [
      "seo-log-file-analysis-search-console",
      "product-analytics-funnels",
      "web-security-headers",
      "ai-search-grounding-geo",
      "search-spam-policies-cloaking",
      "ab-testing"
    ],
    "mentions": [
      "seo-for-spa",
      "regex-and-globbing",
      "what-happens-google-com"
    ]
  },
  "leetcode-capacity-to-ship-packages-within-d-days": {
    "links": [
      "leetcode-koko-eating-bananas",
      "binary-search",
      "greedy-algorithms",
      "dynamic-programming",
      "leetcode-binary-search",
      "recursion-backtracking",
      "leetcode-median-of-two-sorted-arrays"
    ],
    "mentions": [
      "ds-array-matrix",
      "complexity-classes-p-np"
    ]
  },
  "leetcode-combination-sum-ii": {
    "links": [
      "leetcode-combination-sum",
      "leetcode-subsets-ii",
      "recursion-backtracking",
      "dynamic-programming",
      "leetcode-target-sum",
      "leetcode-partition-equal-subset-sum",
      "leetcode-permutations",
      "leetcode-coin-change-ii"
    ],
    "mentions": [
      "floating-point-numbers"
    ]
  },
  "leetcode-decode-ways": {
    "links": [
      "leetcode-climbing-stairs",
      "dynamic-programming",
      "leetcode-word-break",
      "recursion-backtracking",
      "leetcode-letter-combinations-of-a-phone-number",
      "leetcode-palindrome-partitioning"
    ],
    "mentions": []
  },
  "leetcode-house-robber-ii": {
    "links": [
      "leetcode-house-robber",
      "dynamic-programming",
      "leetcode-gas-station"
    ],
    "mentions": [
      "bit-manipulation"
    ]
  },
  "leetcode-invert-binary-tree": {
    "links": [
      "ds-binary-tree-bst",
      "leetcode-maximum-depth-of-binary-tree",
      "leetcode-binary-tree-maximum-path-sum",
      "leetcode-binary-tree-level-order-traversal",
      "leetcode-validate-binary-search-tree",
      "leetcode-diameter-of-binary-tree",
      "leetcode-binary-tree-right-side-view",
      "leetcode-construct-tree-from-preorder-inorder"
    ],
    "mentions": [
      "ds-array-matrix",
      "js-destructuring",
      "pattern-prototype"
    ]
  },
  "leetcode-kth-largest-element-in-a-stream": {
    "links": [
      "leetcode-kth-largest-element-in-an-array",
      "ds-heap",
      "binary-search",
      "leetcode-sliding-window-median",
      "leetcode-find-median-from-data-stream",
      "leetcode-k-closest-points-to-origin",
      "leetcode-top-k-frequent-elements",
      "leetcode-last-stone-weight"
    ],
    "mentions": [
      "ds-binary-tree-bst",
      "divide-and-conquer"
    ]
  },
  "leetcode-last-stone-weight": {
    "links": [
      "ds-heap",
      "binary-search",
      "dynamic-programming",
      "leetcode-partition-equal-subset-sum",
      "leetcode-task-scheduler",
      "leetcode-reorganize-string",
      "leetcode-kth-largest-element-in-a-stream"
    ],
    "mentions": []
  },
  "leetcode-max-area-of-island": {
    "links": [
      "leetcode-number-of-islands",
      "ds-graph-bfs-dfs",
      "leetcode-rotting-oranges",
      "ds-union-find",
      "ds-heap",
      "leetcode-pacific-atlantic-water-flow",
      "leetcode-number-of-connected-components"
    ],
    "mentions": [
      "message-delivery-semantics"
    ]
  },
  "leetcode-meeting-rooms-ii": {
    "links": [
      "leetcode-meeting-rooms",
      "interval-problems-pattern",
      "ds-heap",
      "leetcode-car-pooling",
      "leetcode-non-overlapping-intervals",
      "leetcode-my-calendar-i",
      "leetcode-employee-free-time",
      "leetcode-merge-intervals",
      "leetcode-interval-list-intersections",
      "leetcode-minimum-interval-to-include-each-query",
      "leetcode-task-scheduler"
    ],
    "mentions": [
      "ds-array-matrix",
      "sorting-algorithms"
    ]
  },
  "leetcode-next-greater-element-i": {
    "links": [
      "leetcode-daily-temperatures",
      "monotonic-stack-pattern",
      "ds-hash-map",
      "binary-search",
      "leetcode-largest-rectangle-in-histogram",
      "leetcode-car-fleet",
      "leetcode-remove-k-digits",
      "leetcode-two-sum"
    ],
    "mentions": [
      "ds-stack-queue-deque"
    ]
  },
  "leetcode-remove-nth-node-from-end-of-list": {
    "links": [
      "ds-linked-list",
      "leetcode-linked-list-cycle",
      "leetcode-reorder-list",
      "leetcode-lru-cache"
    ],
    "mentions": [
      "ds-array-matrix"
    ]
  },
  "leetcode-subsets-ii": {
    "links": [
      "leetcode-subsets",
      "recursion-backtracking",
      "leetcode-combination-sum",
      "leetcode-combination-sum-ii",
      "leetcode-permutations"
    ],
    "mentions": [
      "big-o-notation"
    ]
  },
  "leetcode-time-based-key-value-store": {
    "links": [
      "leetcode-binary-search",
      "binary-search",
      "ds-hash-map",
      "ds-binary-tree-bst",
      "postgres-mvcc-vacuum",
      "leetcode-find-first-last-position-sorted-array",
      "leetcode-lru-cache"
    ],
    "mentions": [
      "db-type-key-value",
      "ds-linked-list",
      "sql-filtering-operators",
      "db-transaction-isolation"
    ]
  },
  "ai-search-grounding-geo": {
    "links": [
      "seo-for-spa",
      "search-engine-ranking-pagerank",
      "ai-crawlers-bot-control",
      "rag-classic-pipeline",
      "rag-retrieval-quality",
      "structured-data-json-ld"
    ],
    "mentions": [
      "sd-web-crawler-politeness-dedup",
      "seo-redirects-site-migration",
      "llm-app-security-guardrails",
      "ai-coding-agents",
      "nextjs-static-dynamic-rendering",
      "pub-sub",
      "rendering-strategies",
      "vector-db"
    ]
  },
  "habit-features-progress-reminders": {
    "links": [
      "behavior-design-models",
      "pwa-install-offline",
      "product-analytics-funnels",
      "ab-testing"
    ],
    "mentions": [
      "alerting",
      "redis-basics"
    ]
  },
  "search-engine-ranking-pagerank": {
    "links": [
      "seo-for-spa",
      "elasticsearch-inverted-index",
      "rag-retrieval-quality",
      "crawl-budget-faceted-navigation"
    ],
    "mentions": [
      "core-web-vitals",
      "xss",
      "search-traffic-measurement",
      "site-architecture-internal-linking",
      "graph-rag",
      "loading-patterns",
      "search-spam-policies-cloaking",
      "ai-search-grounding-geo",
      "structured-data-json-ld",
      "image-optimization",
      "db-modeling-normalization",
      "vector-db"
    ]
  },
  "seo-log-file-analysis-search-console": {
    "links": [
      "seo-for-spa",
      "linux-grep-awk-sed",
      "dns",
      "ai-crawlers-bot-control",
      "crawl-budget-faceted-navigation",
      "seo-redirects-site-migration",
      "site-architecture-internal-linking",
      "search-traffic-measurement"
    ],
    "mentions": [
      "sd-web-crawler-politeness-dedup",
      "bit-manipulation",
      "http-status-codes",
      "ipv6-basics",
      "layer-ip-addressing"
    ]
  },
  "site-architecture-internal-linking": {
    "links": [
      "seo-log-file-analysis-search-console",
      "seo-for-spa",
      "seo-redirects-site-migration",
      "react-client-routing",
      "search-engine-ranking-pagerank",
      "structured-data-json-ld",
      "crawl-budget-faceted-navigation"
    ],
    "mentions": [
      "rendering-csr-spa",
      "character-encoding-unicode",
      "ds-graph-bfs-dfs",
      "k8s-deploy-pipeline-eks",
      "loading-patterns",
      "js-strings-unicode",
      "db-modeling-normalization"
    ]
  },
  "structured-data-json-ld": {
    "links": [
      "seo-for-spa",
      "xss",
      "ai-search-grounding-geo"
    ],
    "mentions": [
      "graph-rag",
      "search-spam-policies-cloaking"
    ]
  },
  "leetcode-4sum": {
    "links": [
      "leetcode-3sum",
      "two-pointers-pattern",
      "binary-search",
      "leetcode-two-sum",
      "leetcode-two-sum-ii",
      "leetcode-boats-to-save-people"
    ],
    "mentions": [
      "big-o-notation"
    ]
  },
  "leetcode-asteroid-collision": {
    "links": [
      "leetcode-car-fleet",
      "ds-stack-queue-deque",
      "leetcode-daily-temperatures",
      "leetcode-evaluate-reverse-polish-notation",
      "ds-heap",
      "leetcode-valid-parentheses",
      "leetcode-last-stone-weight",
      "leetcode-remove-k-digits"
    ],
    "mentions": [
      "big-o-notation"
    ]
  },
  "leetcode-boats-to-save-people": {
    "links": [
      "two-pointers-pattern",
      "leetcode-two-sum-ii",
      "greedy-algorithms",
      "leetcode-container-with-most-water",
      "bit-manipulation",
      "leetcode-3sum",
      "leetcode-4sum",
      "leetcode-jump-game",
      "leetcode-gas-station"
    ],
    "mentions": [
      "complexity-classes-p-np",
      "floating-point-numbers",
      "sorting-algorithms",
      "ds-array-matrix"
    ]
  },
  "leetcode-encode-and-decode-strings": {
    "links": [
      "leetcode-serialize-and-deserialize-binary-tree",
      "character-encoding-unicode",
      "tcp-connection-lifecycle",
      "http-streaming-sse",
      "grpc",
      "base64"
    ],
    "mentions": [
      "redis-basics"
    ]
  },
  "leetcode-majority-element": {
    "links": [
      "leetcode-top-k-frequent-elements",
      "bit-manipulation",
      "leetcode-two-sum",
      "segment-tree-fenwick",
      "binary-search",
      "leetcode-contains-duplicate"
    ],
    "mentions": [
      "lossy-counting",
      "string-search-algorithms",
      "sql-aggregation-pitfalls",
      "divide-and-conquer",
      "logic-gates-alu"
    ]
  },
  "leetcode-max-consecutive-ones-iii": {
    "links": [
      "sliding-window-pattern",
      "binary-search",
      "leetcode-minimum-size-subarray-sum",
      "leetcode-fruit-into-baskets",
      "leetcode-longest-repeating-character-replacement"
    ],
    "mentions": [
      "ds-array-matrix"
    ]
  },
  "leetcode-remove-k-digits": {
    "links": [
      "monotonic-stack-pattern",
      "greedy-algorithms",
      "leetcode-sliding-window-maximum",
      "leetcode-daily-temperatures",
      "leetcode-asteroid-collision",
      "leetcode-next-greater-element-i"
    ],
    "mentions": [
      "ds-stack-queue-deque"
    ]
  },
  "leetcode-search-a-2d-matrix": {
    "links": [
      "leetcode-binary-search",
      "binary-search",
      "leetcode-koko-eating-bananas",
      "leetcode-find-first-last-position-sorted-array",
      "leetcode-search-in-rotated-sorted-array"
    ],
    "mentions": [
      "sql-filtering-operators",
      "big-o-notation",
      "bit-manipulation"
    ]
  },
  "leetcode-subarray-product-less-than-k": {
    "links": [
      "sliding-window-pattern",
      "binary-search",
      "leetcode-minimum-size-subarray-sum",
      "leetcode-maximum-product-subarray",
      "dynamic-programming"
    ],
    "mentions": [
      "floating-point-numbers",
      "message-delivery-semantics",
      "sql-filtering-operators",
      "sorting-algorithms"
    ]
  },
  "behavior-design-models": {
    "links": [
      "habit-features-progress-reminders",
      "product-analytics-funnels",
      "ab-testing"
    ],
    "mentions": [
      "frontend-testing-strategy",
      "loading-patterns",
      "code-review-practices",
      "data-privacy-compliance"
    ]
  },
  "bi-semantic-layer": {
    "links": [
      "data-warehouse-architecture",
      "dbt-transformations",
      "data-catalog-lineage",
      "reverse-etl",
      "data-mesh-fabric"
    ],
    "mentions": [
      "hyperloglog",
      "db-sharding",
      "db-type-columnar-olap",
      "etl-vs-elt"
    ]
  },
  "core-component-api-design": {
    "links": [
      "design-system-building",
      "react-component-patterns",
      "html-form-validation",
      "aria-keyboard-focus",
      "react-forms-actions",
      "architecture-docs-c4-adr"
    ],
    "mentions": [
      "custom-form-controls",
      "frontend-testing-strategy",
      "architecture-patterns-overview",
      "css-position-stacking-context",
      "html-semantics"
    ]
  },
  "custom-form-controls": {
    "links": [
      "html-form-validation",
      "aria-keyboard-focus",
      "design-system-building"
    ],
    "mentions": [
      "web-components-shadow-dom",
      "frontend-testing-strategy",
      "css-sticky-scroll-snap",
      "client-data-cache",
      "html-semantics",
      "web-accessibility",
      "postgres-query-planner"
    ]
  },
  "data-catalog-lineage": {
    "links": [
      "dbt-transformations",
      "data-privacy-compliance",
      "reverse-etl",
      "data-quality-checks",
      "data-warehouse-architecture",
      "ml-experiment-tracking",
      "what-is-mlops"
    ],
    "mentions": [
      "elasticsearch-inverted-index",
      "opensearch-cluster-operations",
      "schema-versioning",
      "docker-container-basics",
      "data-orchestrators-comparison",
      "ds-graph-bfs-dfs",
      "bi-semantic-layer",
      "airflow-orchestration",
      "data-lake-hdfs",
      "db-type-relational",
      "stream-processing",
      "sd-mq-storage-partitions",
      "kafka-basics",
      "shells-posix-compat",
      "cloud-service-models-shared-responsibility",
      "etl-vs-elt"
    ]
  },
  "data-engineering-lifecycle": {
    "links": [
      "data-quality-checks",
      "data-privacy-compliance",
      "etl-vs-elt",
      "cdc-change-data-capture",
      "kafka-to-lake-pipeline",
      "db-type-columnar-olap",
      "data-lake-hdfs",
      "data-warehouse-architecture",
      "olap-star-schema",
      "spark-basics",
      "airflow-orchestration",
      "cron-jobs"
    ],
    "mentions": [
      "db-sharding",
      "ab-testing",
      "bash-scripting",
      "sd-object-storage-architecture",
      "db-replication-sharding",
      "kafka-basics",
      "cloud-service-models-shared-responsibility",
      "sd-db-replication-intro",
      "dbt-transformations",
      "zero-downtime-migrations"
    ]
  },
  "data-orchestrators-comparison": {
    "links": [
      "airflow-orchestration",
      "etl-vs-elt",
      "dbt-transformations",
      "cron-jobs",
      "data-quality-checks",
      "data-catalog-lineage",
      "lambda-kappa-architecture"
    ],
    "mentions": [
      "serverless-architecture",
      "bash-scripting",
      "db-type-columnar-olap",
      "python-essentials-for-backend",
      "code-review-practices",
      "sd-mq-storage-partitions",
      "js-pure-functions",
      "zero-downtime-migrations"
    ]
  },
  "data-quality-checks": {
    "links": [
      "etl-vs-elt",
      "data-warehouse-architecture",
      "schema-versioning",
      "airflow-orchestration"
    ],
    "mentions": [
      "data-lake-hdfs",
      "sql-basics",
      "sd-payment-reliability",
      "alerting",
      "postgres-getting-started",
      "dbt-transformations",
      "zero-downtime-migrations"
    ]
  },
  "design-system-adoption-governance": {
    "links": [
      "design-system-building",
      "core-component-api-design",
      "spacing-sizing-type-scale",
      "product-analytics-funnels"
    ],
    "mentions": [
      "dependency-hell",
      "smoke-sanity-regression-testing",
      "code-review-practices"
    ]
  },
  "edge-ai-on-device": {
    "links": [
      "self-hosting-llm-inference",
      "model-serving",
      "deep-learning-basics",
      "fine-tuning-vs-rag-vs-prompting",
      "canary-release",
      "feature-flags",
      "ml-model-monitoring-drift",
      "ml-experiment-tracking",
      "ml-pipelines-ci-cd"
    ],
    "mentions": [
      "llm-basics-for-developers",
      "animation-performance"
    ]
  },
  "icon-system-svg": {
    "links": [
      "bundler-basics",
      "ui-overlays-tooltip-dropdown-toast",
      "spacing-sizing-type-scale"
    ],
    "mentions": [
      "rendering-strategies",
      "css-custom-properties",
      "html-semantics",
      "web-font-optimization",
      "code-splitting",
      "web-accessibility",
      "count-min-sketch"
    ]
  },
  "ml-pipelines-ci-cd": {
    "links": [
      "ml-experiment-tracking",
      "ml-model-monitoring-drift",
      "ci-cd-basics",
      "what-is-mlops",
      "test-pyramid-unit-tests",
      "github-actions-workflows",
      "airflow-orchestration",
      "canary-release",
      "blue-green-deployment",
      "model-serving",
      "edge-ai-on-device"
    ],
    "mentions": [
      "data-quality-checks",
      "github-actions-docker-ecr",
      "data-orchestrators-comparison",
      "smoke-sanity-regression-testing",
      "sd-object-storage-architecture",
      "ml-model-evaluation",
      "llm-evals",
      "code-review-practices",
      "etl-vs-elt",
      "zero-downtime-migrations"
    ]
  },
  "reverse-etl": {
    "links": [
      "dbt-transformations",
      "etl-vs-elt",
      "data-quality-checks",
      "retries",
      "message-delivery-semantics",
      "data-privacy-compliance",
      "airflow-orchestration"
    ],
    "mentions": [
      "rate-limiting-in-practice",
      "db-type-columnar-olap",
      "resilience-patterns",
      "cloud-service-models-shared-responsibility",
      "db-modeling-normalization",
      "zero-downtime-migrations"
    ]
  },
  "seo-redirects-site-migration": {
    "links": [
      "seo-for-spa",
      "http-status-codes",
      "crawl-budget-faceted-navigation",
      "nginx-basics",
      "https-tls",
      "ai-crawlers-bot-control",
      "search-engine-ranking-pagerank"
    ],
    "mentions": [
      "ab-testing",
      "rendering-strategies",
      "seo-log-file-analysis-search-console",
      "frontend-hosting-platforms",
      "what-happens-google-com",
      "count-min-sketch"
    ]
  },
  "spacing-sizing-type-scale": {
    "links": [
      "design-system-building",
      "css-typography",
      "responsive-design",
      "design-system-adoption-governance"
    ],
    "mentions": [
      "css-flexbox-grid",
      "css-styling-approaches",
      "css-custom-properties",
      "smoke-sanity-regression-testing",
      "web-accessibility"
    ]
  },
  "ui-overlays-tooltip-dropdown-toast": {
    "links": [
      "css-position-stacking-context",
      "aria-keyboard-focus",
      "frontend-system-design-interview",
      "core-component-api-design"
    ],
    "mentions": [
      "html-semantics",
      "web-accessibility",
      "js-closures"
    ]
  },
  "ux-laws-cognitive-load": {
    "links": [
      "product-analytics-funnels",
      "ux-research-usability-testing",
      "html-form-validation",
      "custom-form-controls",
      "spacing-sizing-type-scale",
      "loading-patterns",
      "idempotency-key"
    ],
    "mentions": [
      "data-privacy-compliance",
      "behavior-design-models",
      "web-accessibility"
    ]
  },
  "ux-research-usability-testing": {
    "links": [
      "ux-laws-cognitive-load",
      "product-analytics-funnels"
    ],
    "mentions": [
      "ab-testing"
    ]
  },
  "leetcode-car-fleet": {
    "links": [
      "monotonic-stack-pattern",
      "sorting-algorithms",
      "leetcode-daily-temperatures",
      "leetcode-next-greater-element-i",
      "leetcode-asteroid-collision",
      "leetcode-merge-intervals"
    ],
    "mentions": [
      "sql-aggregation-pitfalls",
      "floating-point-numbers",
      "ds-stack-queue-deque"
    ]
  },
  "leetcode-evaluate-reverse-polish-notation": {
    "links": [
      "leetcode-valid-parentheses",
      "ds-stack-queue-deque",
      "recursion-backtracking",
      "leetcode-serialize-and-deserialize-binary-tree",
      "leetcode-min-stack",
      "monotonic-stack-pattern"
    ],
    "mentions": [
      "message-delivery-semantics",
      "nodejs-web-frameworks",
      "sql-aggregation-pitfalls",
      "sd-maps-tiles-routing"
    ]
  },
  "leetcode-fruit-into-baskets": {
    "links": [
      "sliding-window-pattern",
      "binary-search",
      "leetcode-longest-repeating-character-replacement",
      "leetcode-longest-substring-without-repeating",
      "leetcode-max-consecutive-ones-iii",
      "leetcode-permutation-in-string"
    ],
    "mentions": [
      "message-delivery-semantics",
      "ds-array-matrix"
    ]
  },
  "leetcode-longest-consecutive-sequence": {
    "links": [
      "ds-hash-map",
      "ds-union-find",
      "leetcode-contains-duplicate",
      "sliding-window-pattern",
      "leetcode-merge-intervals",
      "leetcode-longest-increasing-subsequence",
      "leetcode-two-sum",
      "leetcode-top-k-frequent-elements"
    ],
    "mentions": [
      "ds-binary-tree-bst",
      "dynamic-programming",
      "binary-search",
      "big-o-notation"
    ]
  },
  "leetcode-minimum-size-subarray-sum": {
    "links": [
      "sliding-window-pattern",
      "ds-array-matrix",
      "binary-search",
      "monotonic-stack-pattern",
      "leetcode-sliding-window-maximum",
      "leetcode-subarray-product-less-than-k",
      "leetcode-max-consecutive-ones-iii"
    ],
    "mentions": []
  },
  "leetcode-move-zeroes": {
    "links": [
      "two-pointers-pattern",
      "leetcode-sort-colors",
      "leetcode-remove-duplicates-from-sorted-array"
    ],
    "mentions": [
      "sorting-algorithms",
      "ds-array-matrix",
      "js-array-mutation"
    ]
  },
  "leetcode-permutation-in-string": {
    "links": [
      "sliding-window-pattern",
      "recursion-backtracking",
      "leetcode-minimum-window-substring",
      "leetcode-longest-substring-without-repeating",
      "leetcode-valid-anagram",
      "leetcode-group-anagrams"
    ],
    "mentions": [
      "string-search-algorithms"
    ]
  },
  "leetcode-product-of-array-except-self": {
    "links": [
      "leetcode-trapping-rain-water",
      "leetcode-candy",
      "leetcode-study-guide",
      "ds-array-matrix",
      "segment-tree-fenwick",
      "leetcode-maximum-product-subarray",
      "leetcode-two-sum",
      "leetcode-contains-duplicate",
      "leetcode-top-k-frequent-elements"
    ],
    "mentions": [
      "floating-point-numbers"
    ]
  },
  "leetcode-remove-duplicates-from-sorted-array": {
    "links": [
      "two-pointers-pattern",
      "leetcode-move-zeroes",
      "binary-search",
      "sorting-algorithms",
      "ds-linked-list",
      "leetcode-3sum",
      "leetcode-contains-duplicate",
      "leetcode-boats-to-save-people"
    ],
    "mentions": [
      "ds-array-matrix"
    ]
  },
  "leetcode-sort-colors": {
    "links": [
      "two-pointers-pattern",
      "sorting-algorithms",
      "leetcode-move-zeroes",
      "ds-linked-list",
      "leetcode-kth-largest-element-in-an-array"
    ],
    "mentions": [
      "big-o-notation",
      "sd-maps-tiles-routing",
      "js-destructuring",
      "js-array-mutation"
    ]
  },
  "leetcode-valid-sudoku": {
    "links": [
      "leetcode-contains-duplicate",
      "ds-hash-map",
      "bit-manipulation",
      "leetcode-sudoku-solver",
      "leetcode-two-sum",
      "leetcode-n-queens",
      "leetcode-set-matrix-zeroes"
    ],
    "mentions": [
      "recursion-backtracking"
    ]
  },
  "data-mesh-fabric": {
    "links": [
      "data-warehouse-architecture",
      "data-engineering-lifecycle",
      "cdc-change-data-capture",
      "data-catalog-lineage",
      "data-quality-checks",
      "ddd-bounded-context",
      "microservices-decomposition"
    ],
    "mentions": [
      "elasticsearch-inverted-index",
      "db-sharding",
      "microservices",
      "graph-rag",
      "db-type-columnar-olap",
      "schema-versioning",
      "sli-slo"
    ]
  },
  "data-warehouse-architecture": {
    "links": [
      "etl-vs-elt",
      "olap-star-schema",
      "db-type-columnar-olap",
      "data-lake-hdfs",
      "event-driven-architecture",
      "data-quality-checks"
    ],
    "mentions": [
      "db-sharding",
      "bi-semantic-layer",
      "sd-object-storage-architecture",
      "db-replication-sharding",
      "sd-mq-storage-partitions",
      "kafka-basics",
      "cloud-service-models-shared-responsibility",
      "acid-transactions",
      "db-keys-denormalization",
      "dbt-transformations",
      "db-modeling-normalization"
    ]
  },
  "dbt-transformations": {
    "links": [
      "etl-vs-elt",
      "data-warehouse-architecture",
      "data-catalog-lineage",
      "olap-star-schema",
      "cdc-change-data-capture",
      "data-quality-checks",
      "airflow-orchestration"
    ],
    "mentions": [
      "reverse-etl",
      "kafka-to-lake-pipeline",
      "db-type-columnar-olap",
      "ds-graph-bfs-dfs"
    ]
  },
  "etl-vs-elt": {
    "links": [
      "spark-basics",
      "data-lake-hdfs",
      "airflow-orchestration",
      "kafka-to-lake-pipeline",
      "db-type-columnar-olap",
      "data-privacy-compliance",
      "cdc-change-data-capture",
      "clock-skew",
      "data-quality-checks",
      "schema-versioning",
      "data-warehouse-architecture"
    ],
    "mentions": [
      "db-sharding",
      "data-catalog-lineage",
      "mysql-replication-online-ddl",
      "sd-object-storage-architecture",
      "db-replication-sharding",
      "floating-point-numbers",
      "kafka-basics",
      "cloud-service-models-shared-responsibility",
      "sd-db-replication-intro",
      "dbt-transformations",
      "http-methods",
      "zero-downtime-migrations",
      "webhooks"
    ]
  },
  "lambda-kappa-architecture": {
    "links": [
      "batch-processing",
      "stream-processing",
      "sd-ad-click-stream-windows",
      "data-quality-checks",
      "kafka-to-lake-pipeline",
      "data-lake-hdfs",
      "cdc-change-data-capture",
      "etl-vs-elt",
      "data-engineering-lifecycle",
      "data-warehouse-architecture"
    ],
    "mentions": [
      "db-type-wide-column",
      "centralized-logging-pipeline",
      "sd-ad-click-exactly-once",
      "sd-object-storage-architecture",
      "kafka-basics",
      "db-type-columnar-olap",
      "bi-semantic-layer",
      "code-review-practices",
      "postgres-architecture",
      "shells-posix-compat",
      "zero-downtime-migrations"
    ]
  },
  "ml-experiment-tracking": {
    "links": [
      "ml-model-evaluation",
      "git-large-files-secrets",
      "ml-pipelines-ci-cd",
      "canary-release",
      "ml-model-monitoring-drift"
    ],
    "mentions": [
      "ab-testing",
      "floating-point-numbers",
      "long-polling",
      "git-staging-area",
      "cloud-service-models-shared-responsibility"
    ]
  },
  "ml-model-monitoring-drift": {
    "links": [
      "ml-model-evaluation",
      "ml-fundamentals",
      "observability-basics",
      "model-serving",
      "explainable-ai-shap-lime",
      "prometheus-basics",
      "metrics-types",
      "alerting",
      "canary-release",
      "ml-pipelines-ci-cd",
      "ml-experiment-tracking",
      "llm-observability"
    ],
    "mentions": [
      "data-quality-checks",
      "data-warehouse-architecture",
      "llm-evals",
      "linux-performance-triage",
      "vector-db"
    ]
  },
  "model-serving": {
    "links": [
      "what-is-mlops",
      "self-hosting-llm-inference",
      "fastapi-basics",
      "deep-learning-basics",
      "canary-release",
      "ab-testing",
      "explainable-ai-shap-lime"
    ],
    "mentions": [
      "dbt-transformations",
      "observability-basics",
      "edge-ai-on-device",
      "data-warehouse-architecture",
      "ml-experiment-tracking",
      "db-type-key-value",
      "docker-container-basics",
      "airflow-orchestration",
      "ml-fundamentals",
      "cold-starts",
      "autoscaling",
      "event-loop",
      "llm-evals",
      "cloud-deployment-models-multicloud",
      "input-validation-secure-coding",
      "code-review-practices",
      "distributed-tracing",
      "kafka-basics",
      "redis-basics",
      "grpc",
      "db-modeling-normalization",
      "dns",
      "fine-tuning-vs-rag-vs-prompting"
    ]
  },
  "product-analytics-funnels": {
    "links": [
      "ab-testing",
      "browser-fetch",
      "data-privacy-compliance"
    ],
    "mentions": [
      "k8s-batch-kueue"
    ]
  },
  "what-is-mlops": {
    "links": [
      "deep-learning-basics",
      "model-serving",
      "explainable-ai-shap-lime",
      "data-lake-hdfs",
      "airflow-orchestration",
      "canary-release",
      "k8s-gpu-dra",
      "llm-evals"
    ],
    "mentions": [
      "data-quality-checks",
      "ml-pipelines-ci-cd",
      "ml-experiment-tracking",
      "docker-container-basics",
      "bash-scripting",
      "sd-object-storage-architecture",
      "ci-cd-basics",
      "cloud-service-models-shared-responsibility"
    ]
  },
  "leetcode-cheapest-flights-within-k-stops": {
    "links": [
      "leetcode-network-delay-time",
      "shortest-path-algorithms",
      "leetcode-find-city-smallest-neighbors",
      "leetcode-path-with-maximum-probability"
    ],
    "mentions": [
      "ds-graph-bfs-dfs",
      "js-memoization",
      "sd-maps-tiles-routing",
      "ds-heap",
      "dynamic-programming"
    ]
  },
  "leetcode-counting-bits": {
    "links": [
      "leetcode-number-of-1-bits",
      "dynamic-programming",
      "bit-manipulation",
      "leetcode-climbing-stairs",
      "leetcode-power-of-two",
      "leetcode-single-number",
      "leetcode-reverse-bits",
      "leetcode-sum-of-two-integers"
    ],
    "mentions": [
      "sd-latency-numbers",
      "js-numbers-bigint",
      "floating-point-numbers"
    ]
  },
  "leetcode-happy-number": {
    "links": [
      "leetcode-linked-list-cycle",
      "ds-hash-map",
      "bit-manipulation",
      "dynamic-programming",
      "leetcode-powx-n"
    ],
    "mentions": [
      "seo-redirects-site-migration",
      "ds-linked-list",
      "js-memoization",
      "sql-aggregation-pitfalls",
      "ds-array-matrix"
    ]
  },
  "leetcode-min-cost-to-connect-all-points": {
    "links": [
      "minimum-spanning-tree",
      "ds-union-find",
      "leetcode-network-delay-time",
      "leetcode-redundant-connection",
      "leetcode-number-of-connected-components"
    ],
    "mentions": [
      "pythagorean-theorem",
      "ds-graph-bfs-dfs",
      "segment-tree-fenwick",
      "sd-maps-tiles-routing"
    ]
  },
  "leetcode-minimum-interval-to-include-each-query": {
    "links": [
      "interval-problems-pattern",
      "ds-heap",
      "ds-union-find",
      "segment-tree-fenwick",
      "leetcode-merge-intervals",
      "leetcode-insert-interval",
      "leetcode-non-overlapping-intervals",
      "leetcode-meeting-rooms",
      "leetcode-merge-k-sorted-lists",
      "leetcode-task-scheduler"
    ],
    "mentions": [
      "binary-search"
    ]
  },
  "leetcode-number-of-1-bits": {
    "links": [
      "bit-manipulation",
      "logic-gates-alu",
      "leetcode-counting-bits",
      "leetcode-power-of-two",
      "leetcode-single-number",
      "leetcode-reverse-bits",
      "leetcode-sum-of-two-integers"
    ],
    "mentions": [
      "sd-latency-numbers",
      "js-numbers-bigint",
      "cpu-pipelining-branch-prediction",
      "redis-basics",
      "dynamic-programming"
    ]
  },
  "leetcode-powx-n": {
    "links": [
      "divide-and-conquer",
      "bit-manipulation",
      "floating-point-numbers",
      "js-numbers-bigint",
      "leetcode-climbing-stairs",
      "binary-search",
      "leetcode-happy-number"
    ],
    "mentions": [
      "sql-aggregation-pitfalls",
      "dynamic-programming"
    ]
  },
  "leetcode-regular-expression-matching": {
    "links": [
      "leetcode-longest-common-subsequence",
      "leetcode-edit-distance",
      "recursion-backtracking",
      "leetcode-distinct-subsequences",
      "leetcode-interleaving-string",
      "leetcode-word-break"
    ],
    "mentions": [
      "message-delivery-semantics",
      "js-memoization",
      "two-pointers-pattern",
      "regex-and-globbing",
      "dynamic-programming"
    ]
  },
  "leetcode-reverse-bits": {
    "links": [
      "bit-manipulation",
      "leetcode-number-of-1-bits",
      "two-pointers-pattern",
      "leetcode-reverse-integer",
      "leetcode-single-number",
      "leetcode-counting-bits",
      "leetcode-sum-of-two-integers"
    ],
    "mentions": [
      "js-numbers-bigint",
      "divide-and-conquer",
      "cpu-pipelining-branch-prediction"
    ]
  },
  "leetcode-set-matrix-zeroes": {
    "links": [
      "leetcode-rotate-image",
      "leetcode-spiral-matrix"
    ],
    "mentions": [
      "js-shallow-deep-copy"
    ]
  },
  "leetcode-sum-of-two-integers": {
    "links": [
      "logic-gates-alu",
      "bit-manipulation",
      "leetcode-reverse-integer",
      "leetcode-single-number",
      "leetcode-number-of-1-bits",
      "leetcode-counting-bits",
      "leetcode-reverse-bits"
    ],
    "mentions": [
      "js-numbers-bigint",
      "ds-linked-list",
      "floating-point-numbers"
    ]
  },
  "leetcode-swim-in-rising-water": {
    "links": [
      "shortest-path-algorithms",
      "ds-union-find",
      "binary-search",
      "leetcode-network-delay-time",
      "minimum-spanning-tree",
      "leetcode-path-with-maximum-probability"
    ],
    "mentions": [
      "sd-maps-tiles-routing"
    ]
  },
  "claude-code-agent-teams": {
    "links": [
      "multi-agent-systems",
      "claude-code-parallel-and-scheduled",
      "claude-code-extensions",
      "claude-code-models-and-cost",
      "network-troubleshooting-by-layer",
      "claude-code-hooks-deep-dive"
    ],
    "mentions": [
      "claude-code-project-structure",
      "system-prompt-design",
      "git-tips-advanced",
      "api-test-automation",
      "claude-code-context-window",
      "cookie-session-login",
      "mcp-protocol"
    ]
  },
  "explainable-ai-shap-lime": {
    "links": [
      "deep-learning-basics",
      "model-serving",
      "ab-testing",
      "llm-evals",
      "what-is-mlops"
    ],
    "mentions": [
      "ml-fundamentals",
      "css-box-model-layout",
      "data-privacy-compliance",
      "sdlc-models-agile-scrum"
    ]
  },
  "ml-model-evaluation": {
    "links": [
      "ml-fundamentals",
      "llm-evals",
      "ab-testing"
    ],
    "mentions": []
  },
  "leetcode-burst-balloons": {
    "links": [
      "leetcode-unique-paths",
      "leetcode-longest-common-subsequence",
      "dynamic-programming",
      "greedy-algorithms",
      "leetcode-permutations",
      "leetcode-edit-distance",
      "leetcode-regular-expression-matching"
    ],
    "mentions": [
      "bit-manipulation",
      "js-memoization"
    ]
  },
  "leetcode-longest-increasing-subsequence": {
    "links": [
      "dynamic-programming",
      "leetcode-climbing-stairs",
      "leetcode-house-robber",
      "leetcode-coin-change",
      "leetcode-word-break",
      "binary-search",
      "leetcode-binary-search",
      "bit-manipulation",
      "leetcode-longest-common-subsequence"
    ],
    "mentions": [
      "segment-tree-fenwick"
    ]
  },
  "leetcode-meeting-rooms": {
    "links": [
      "interval-problems-pattern",
      "leetcode-merge-intervals",
      "leetcode-meeting-rooms-ii",
      "leetcode-my-calendar-i",
      "leetcode-employee-free-time",
      "leetcode-non-overlapping-intervals",
      "leetcode-insert-interval",
      "leetcode-car-pooling"
    ],
    "mentions": [
      "ds-binary-tree-bst",
      "sorting-algorithms",
      "sd-hotel-double-booking"
    ]
  },
  "leetcode-reconstruct-itinerary": {
    "links": [
      "recursion-backtracking",
      "ds-graph-bfs-dfs",
      "leetcode-network-delay-time",
      "leetcode-min-cost-to-connect-all-points"
    ],
    "mentions": [
      "message-delivery-semantics"
    ]
  },
  "leetcode-rotate-image": {
    "links": [
      "ds-array-matrix",
      "leetcode-spiral-matrix",
      "leetcode-set-matrix-zeroes"
    ],
    "mentions": [
      "sql-aggregation-pitfalls"
    ]
  },
  "leetcode-single-number": {
    "links": [
      "bit-manipulation",
      "ds-hash-map",
      "binary-search",
      "leetcode-single-number-ii",
      "leetcode-missing-number",
      "leetcode-linked-list-cycle",
      "leetcode-contains-duplicate",
      "leetcode-number-of-1-bits",
      "leetcode-counting-bits",
      "leetcode-reverse-bits",
      "leetcode-sum-of-two-integers"
    ],
    "mentions": [
      "js-numbers-bigint",
      "logic-gates-alu"
    ]
  },
  "leetcode-spiral-matrix": {
    "links": [
      "leetcode-rotate-image",
      "leetcode-set-matrix-zeroes"
    ],
    "mentions": []
  },
  "leetcode-word-break": {
    "links": [
      "leetcode-climbing-stairs",
      "leetcode-house-robber",
      "leetcode-coin-change",
      "dynamic-programming",
      "ds-trie",
      "leetcode-implement-trie",
      "ds-graph-bfs-dfs",
      "leetcode-word-search-ii",
      "leetcode-extra-characters-in-a-string",
      "leetcode-decode-ways",
      "leetcode-palindrome-partitioning"
    ],
    "mentions": [
      "sql-filtering-operators",
      "recursion-backtracking"
    ]
  },
  "claude-code-hooks-deep-dive": {
    "links": [
      "claude-code-extensions",
      "claude-code-project-structure",
      "claude-code-models-and-cost"
    ],
    "mentions": [
      "rate-limiting-in-practice",
      "agent-tool-design",
      "system-prompt-design",
      "mcp-protocol"
    ]
  },
  "claude-code-plugins-and-channels": {
    "links": [
      "claude-code-extensions",
      "claude-code-hooks-deep-dive",
      "claude-code-models-and-cost"
    ],
    "mentions": [
      "claude-code-project-structure",
      "system-prompt-design",
      "tsconfig-strict",
      "js-numbers-bigint",
      "debounce-throttle",
      "js-runtimes-node-deno-bun",
      "mcp-protocol",
      "webhooks"
    ]
  },
  "deep-learning-basics": {
    "links": [
      "llm-basics-for-developers",
      "transformer-attention-kv-cache",
      "k8s-gpu-dra",
      "fine-tuning-vs-rag-vs-prompting",
      "model-serving",
      "floating-point-numbers",
      "what-is-mlops",
      "explainable-ai-shap-lime"
    ],
    "mentions": [
      "n-plus-one-queries",
      "ml-experiment-tracking",
      "ml-fundamentals",
      "postgres-architecture",
      "self-hosting-llm-inference",
      "cpu-pipelining-branch-prediction",
      "db-modeling-normalization"
    ]
  },
  "llm-app-security-guardrails": {
    "links": [
      "llm-basics-for-developers",
      "ai-coding-agents",
      "owasp-top-10-map",
      "context-engineering",
      "llm-observability",
      "xss",
      "web-security-headers",
      "agent-tool-design",
      "system-prompt-design",
      "mcp-protocol",
      "ml-model-evaluation",
      "data-privacy-compliance",
      "rate-limiting-algorithms",
      "llm-evals"
    ],
    "mentions": [
      "sql-injection",
      "input-validation-secure-coding",
      "smoke-sanity-regression-testing",
      "threat-modeling-stride",
      "security-principles-cia-defense-in-depth",
      "vector-db",
      "fine-tuning-vs-rag-vs-prompting",
      "rag-classic-pipeline"
    ]
  },
  "llm-observability": {
    "links": [
      "distributed-tracing",
      "observability-basics",
      "llm-app-security-guardrails",
      "system-prompt-design",
      "llm-api-integration",
      "rag-retrieval-quality",
      "agent-tool-design",
      "llm-evals"
    ],
    "mentions": [
      "llm-basics-for-developers",
      "agent-frameworks-comparison",
      "agentic-rag",
      "embedding-models-applications",
      "data-privacy-compliance",
      "vector-db",
      "rag-classic-pipeline"
    ]
  },
  "ml-fundamentals": {
    "links": [
      "ml-model-evaluation",
      "embedding-models-applications",
      "llm-evals",
      "ab-testing"
    ],
    "mentions": [
      "vector-db"
    ]
  },
  "leetcode-binary-tree-maximum-path-sum": {
    "links": [
      "leetcode-maximum-depth-of-binary-tree",
      "leetcode-diameter-of-binary-tree",
      "dynamic-programming",
      "ds-hash-map",
      "leetcode-binary-tree-level-order-traversal",
      "leetcode-serialize-and-deserialize-binary-tree",
      "leetcode-study-guide"
    ],
    "mentions": [
      "js-memoization",
      "complexity-classes-p-np"
    ]
  },
  "leetcode-climbing-stairs": {
    "links": [
      "dynamic-programming",
      "recursion-backtracking",
      "big-o-notation",
      "leetcode-study-guide",
      "leetcode-coin-change",
      "leetcode-house-robber",
      "leetcode-coin-change-ii",
      "sliding-window-pattern",
      "leetcode-decode-ways"
    ],
    "mentions": [
      "js-classes",
      "js-memoization",
      "divide-and-conquer",
      "floating-point-numbers",
      "js-destructuring",
      "js-closures"
    ]
  },
  "leetcode-coin-change": {
    "links": [
      "leetcode-climbing-stairs",
      "leetcode-house-robber",
      "dynamic-programming",
      "greedy-algorithms",
      "leetcode-coin-change-ii",
      "ds-graph-bfs-dfs",
      "leetcode-word-break"
    ],
    "mentions": []
  },
  "leetcode-course-schedule": {
    "links": [
      "ds-graph-bfs-dfs",
      "leetcode-course-schedule-ii",
      "dynamic-programming",
      "ds-union-find",
      "leetcode-redundant-connection",
      "leetcode-alien-dictionary",
      "leetcode-clone-graph"
    ],
    "mentions": [
      "spring-ioc-di"
    ]
  },
  "leetcode-edit-distance": {
    "links": [
      "dynamic-programming",
      "leetcode-longest-common-subsequence",
      "leetcode-distinct-subsequences",
      "leetcode-interleaving-string",
      "leetcode-regular-expression-matching"
    ],
    "mentions": [
      "js-memoization"
    ]
  },
  "leetcode-gas-station": {
    "links": [
      "greedy-algorithms",
      "leetcode-best-time-to-buy-and-sell-stock",
      "two-pointers-pattern",
      "ds-heap"
    ],
    "mentions": [
      "ds-array-matrix"
    ]
  },
  "leetcode-house-robber": {
    "links": [
      "leetcode-climbing-stairs",
      "dynamic-programming",
      "greedy-algorithms",
      "bit-manipulation",
      "leetcode-longest-increasing-subsequence",
      "leetcode-stock-with-cooldown",
      "leetcode-house-robber-ii",
      "ds-binary-tree-bst",
      "binary-search"
    ],
    "mentions": []
  },
  "leetcode-insert-interval": {
    "links": [
      "interval-problems-pattern",
      "leetcode-merge-intervals",
      "binary-search",
      "leetcode-employee-free-time",
      "leetcode-my-calendar-i",
      "leetcode-non-overlapping-intervals",
      "leetcode-interval-list-intersections"
    ],
    "mentions": [
      "ds-binary-tree-bst"
    ]
  },
  "leetcode-jump-game-ii": {
    "links": [
      "leetcode-jump-game",
      "ds-graph-bfs-dfs",
      "leetcode-sliding-window-maximum",
      "shortest-path-algorithms",
      "interval-problems-pattern"
    ],
    "mentions": [
      "sliding-window-pattern",
      "js-memoization",
      "sd-maps-tiles-routing",
      "dynamic-programming"
    ]
  },
  "leetcode-jump-game": {
    "links": [
      "greedy-algorithms",
      "dynamic-programming",
      "recursion-backtracking",
      "ds-graph-bfs-dfs",
      "interval-problems-pattern",
      "leetcode-jump-game-ii",
      "sliding-window-pattern"
    ],
    "mentions": [
      "js-memoization"
    ]
  },
  "leetcode-longest-common-subsequence": {
    "links": [
      "leetcode-edit-distance",
      "leetcode-distinct-subsequences",
      "leetcode-interleaving-string",
      "dynamic-programming",
      "leetcode-unique-paths",
      "leetcode-longest-increasing-subsequence",
      "binary-search",
      "greedy-algorithms",
      "leetcode-longest-palindromic-substring"
    ],
    "mentions": [
      "js-memoization",
      "two-pointers-pattern",
      "divide-and-conquer",
      "bit-manipulation",
      "ds-array-matrix"
    ]
  },
  "leetcode-merge-intervals": {
    "links": [
      "leetcode-insert-interval",
      "leetcode-meeting-rooms",
      "interval-problems-pattern",
      "ds-graph-bfs-dfs",
      "ds-union-find",
      "leetcode-non-overlapping-intervals",
      "leetcode-meeting-rooms-ii",
      "leetcode-car-pooling",
      "leetcode-merge-two-sorted-lists",
      "leetcode-interval-list-intersections",
      "leetcode-employee-free-time",
      "leetcode-partition-labels"
    ],
    "mentions": [
      "ds-binary-tree-bst",
      "sorting-algorithms",
      "ds-array-matrix",
      "js-shallow-deep-copy"
    ]
  },
  "leetcode-network-delay-time": {
    "links": [
      "shortest-path-algorithms",
      "ds-heap",
      "leetcode-cheapest-flights-within-k-stops",
      "ds-graph-bfs-dfs",
      "leetcode-path-with-maximum-probability",
      "leetcode-swim-in-rising-water",
      "leetcode-find-city-smallest-neighbors"
    ],
    "mentions": [
      "sd-maps-tiles-routing"
    ]
  },
  "leetcode-non-overlapping-intervals": {
    "links": [
      "interval-problems-pattern",
      "greedy-algorithms",
      "leetcode-merge-intervals",
      "leetcode-meeting-rooms",
      "bit-manipulation",
      "leetcode-longest-increasing-subsequence",
      "dynamic-programming",
      "binary-search",
      "leetcode-my-calendar-i",
      "leetcode-meeting-rooms-ii",
      "leetcode-insert-interval",
      "leetcode-minimum-interval-to-include-each-query"
    ],
    "mentions": [
      "ds-binary-tree-bst",
      "js-memoization"
    ]
  },
  "leetcode-pacific-atlantic-water-flow": {
    "links": [
      "ds-graph-bfs-dfs",
      "leetcode-number-of-islands",
      "dynamic-programming",
      "leetcode-trapping-rain-water",
      "leetcode-rotting-oranges",
      "leetcode-swim-in-rising-water"
    ],
    "mentions": [
      "big-o-notation"
    ]
  },
  "leetcode-partition-labels": {
    "links": [
      "leetcode-jump-game",
      "interval-problems-pattern",
      "leetcode-merge-intervals",
      "bit-manipulation",
      "monotonic-stack-pattern",
      "ds-hash-map"
    ],
    "mentions": [
      "ds-stack-queue-deque"
    ]
  },
  "leetcode-unique-paths": {
    "links": [
      "dynamic-programming",
      "recursion-backtracking",
      "leetcode-word-search",
      "leetcode-longest-common-subsequence"
    ],
    "mentions": [
      "message-delivery-semantics",
      "js-memoization",
      "sql-aggregation-pitfalls"
    ]
  },
  "leetcode-word-ladder": {
    "links": [
      "ds-graph-bfs-dfs",
      "recursion-backtracking",
      "leetcode-number-of-islands",
      "shortest-path-algorithms",
      "leetcode-network-delay-time",
      "leetcode-edit-distance",
      "leetcode-rotting-oranges",
      "leetcode-course-schedule",
      "leetcode-shortest-path-in-binary-matrix"
    ],
    "mentions": [
      "sd-maps-tiles-routing"
    ]
  },
  "claude-code-cli-and-sessions": {
    "links": [
      "claude-code-fundamentals-map",
      "claude-code-project-structure",
      "claude-code-context-window",
      "claude-code-extensions",
      "claude-code-headless-ci"
    ],
    "mentions": [
      "system-prompt-design",
      "linux-files-permissions",
      "cookie-session-login",
      "mcp-protocol"
    ]
  },
  "claude-code-headless-ci": {
    "links": [
      "claude-code-cli-and-sessions",
      "claude-code-project-structure",
      "claude-code-extensions",
      "github-actions-workflows",
      "llm-api-integration",
      "claude-code-models-and-cost",
      "software-supply-chain-ci-hardening",
      "agent-frameworks-comparison"
    ],
    "mentions": [
      "github-actions-docker-ecr",
      "llm-app-security-guardrails",
      "bash-scripting",
      "http-status-codes",
      "cookie-session-login",
      "mcp-protocol"
    ]
  },
  "claude-code-models-and-cost": {
    "links": [
      "claude-code-context-window",
      "claude-code-extensions",
      "llm-model-selection",
      "claude-code-plugins-and-channels",
      "transformer-attention-kv-cache",
      "claude-code-agent-teams"
    ],
    "mentions": [
      "observability-basics",
      "claude-code-project-structure",
      "system-prompt-design",
      "js-numbers-bigint",
      "sli-slo",
      "input-validation-secure-coding",
      "mcp-protocol",
      "dns"
    ]
  },
  "fine-tuning-vs-rag-vs-prompting": {
    "links": [
      "system-prompt-design",
      "context-engineering",
      "rag-classic-pipeline"
    ],
    "mentions": [
      "llm-api-integration",
      "embedding-models-applications",
      "llm-evals",
      "postgres-architecture",
      "self-hosting-llm-inference",
      "ml-fundamentals",
      "vector-db",
      "llm-basics-for-developers"
    ]
  },
  "leetcode-clone-graph": {
    "links": [
      "ds-graph-bfs-dfs",
      "js-shallow-deep-copy",
      "leetcode-number-of-islands",
      "leetcode-copy-list-with-random-pointer",
      "leetcode-course-schedule"
    ],
    "mentions": [
      "ds-linked-list",
      "pattern-prototype"
    ]
  },
  "leetcode-find-median-from-data-stream": {
    "links": [
      "ds-heap",
      "binary-search",
      "leetcode-sliding-window-median",
      "leetcode-median-of-two-sorted-arrays",
      "leetcode-kth-largest-element-in-an-array"
    ],
    "mentions": [
      "ds-binary-tree-bst",
      "sorting-algorithms",
      "sql-aggregation-pitfalls",
      "big-o-notation",
      "divide-and-conquer"
    ]
  },
  "leetcode-longest-common-prefix": {
    "links": [
      "leetcode-implement-trie",
      "binary-search",
      "leetcode-replace-words",
      "leetcode-sum-of-prefix-scores-of-strings",
      "leetcode-search-suggestions-system"
    ],
    "mentions": [
      "string-search-algorithms",
      "divide-and-conquer",
      "db-modeling-normalization",
      "core-web-vitals"
    ]
  },
  "leetcode-merge-k-sorted-lists": {
    "links": [
      "leetcode-merge-two-sorted-lists",
      "ds-heap",
      "divide-and-conquer",
      "leetcode-kth-largest-element-in-an-array"
    ],
    "mentions": [
      "db-type-wide-column",
      "message-delivery-semantics",
      "db-type-embedded",
      "ds-linked-list",
      "centralized-logging-pipeline",
      "sorting-algorithms"
    ]
  },
  "leetcode-n-queens": {
    "links": [
      "leetcode-permutations",
      "leetcode-sudoku-solver",
      "recursion-backtracking",
      "bit-manipulation",
      "leetcode-word-search",
      "leetcode-generate-parentheses",
      "leetcode-combination-sum",
      "leetcode-subsets"
    ],
    "mentions": [
      "big-o-notation",
      "logic-gates-alu"
    ]
  },
  "leetcode-number-of-islands": {
    "links": [
      "ds-graph-bfs-dfs",
      "leetcode-rotting-oranges",
      "ds-union-find",
      "leetcode-max-area-of-island",
      "leetcode-pacific-atlantic-water-flow",
      "leetcode-number-of-connected-components",
      "leetcode-word-search"
    ],
    "mentions": [
      "message-delivery-semantics"
    ]
  },
  "leetcode-replace-words": {
    "links": [
      "leetcode-implement-trie",
      "leetcode-longest-common-prefix",
      "leetcode-index-pairs-of-a-string",
      "ds-trie",
      "leetcode-extra-characters-in-a-string",
      "leetcode-word-break"
    ],
    "mentions": [
      "layer-ip-routing-icmp",
      "string-search-algorithms"
    ]
  },
  "leetcode-serialize-and-deserialize-binary-tree": {
    "links": [
      "ds-binary-tree-bst",
      "leetcode-binary-tree-level-order-traversal",
      "leetcode-construct-tree-from-preorder-inorder",
      "leetcode-maximum-depth-of-binary-tree",
      "leetcode-validate-binary-search-tree",
      "bit-manipulation",
      "leetcode-binary-tree-maximum-path-sum",
      "leetcode-study-guide"
    ],
    "mentions": [
      "grpc",
      "js-execution-context",
      "redis-basics"
    ]
  },
  "leetcode-task-scheduler": {
    "links": [
      "greedy-algorithms",
      "ds-heap",
      "leetcode-reorganize-string",
      "cpu-scheduling-interrupts"
    ],
    "mentions": []
  },
  "leetcode-word-search": {
    "links": [
      "leetcode-number-of-islands",
      "recursion-backtracking",
      "ds-graph-bfs-dfs",
      "leetcode-word-search-ii",
      "ds-trie",
      "leetcode-max-area-of-island",
      "leetcode-pacific-atlantic-water-flow",
      "leetcode-n-queens",
      "leetcode-sudoku-solver"
    ],
    "mentions": [
      "js-memoization",
      "big-o-notation"
    ]
  },
  "agent-frameworks-comparison": {
    "links": [
      "ai-coding-agents",
      "llm-api-integration",
      "multi-agent-systems",
      "rag-classic-pipeline",
      "rag-retrieval-quality",
      "claude-code-headless-ci",
      "mcp-protocol"
    ],
    "mentions": [
      "observability-basics",
      "llm-observability",
      "system-prompt-design",
      "spring-ai-agents",
      "llm-app-security-guardrails",
      "transformer-attention-kv-cache",
      "agentic-rag",
      "db-type-embedded",
      "agent-tool-design",
      "postgres-architecture",
      "pattern-abstract-factory",
      "vector-db"
    ]
  },
  "agent-memory": {
    "links": [
      "llm-api-integration",
      "spring-ai-agents",
      "rag-classic-pipeline",
      "vector-db",
      "claude-code-context-window",
      "llm-evals",
      "agent-tool-design",
      "agent-reasoning-patterns"
    ],
    "mentions": [
      "system-prompt-design",
      "data-privacy-compliance",
      "llm-app-security-guardrails",
      "redis-basics",
      "dns"
    ]
  },
  "agent-reasoning-patterns": {
    "links": [
      "llm-api-integration",
      "prompt-reasoning-techniques",
      "agentic-rag",
      "agent-tool-design",
      "llm-evals",
      "agent-memory",
      "llm-model-selection"
    ],
    "mentions": [
      "multi-agent-systems",
      "system-prompt-design",
      "spring-ai-agents",
      "input-validation-secure-coding",
      "sd-video-upload-transcoding",
      "rag-classic-pipeline"
    ]
  },
  "agent-tool-design": {
    "links": [
      "llm-api-integration",
      "mcp-protocol",
      "agent-reasoning-patterns",
      "idempotency-key",
      "llm-evals",
      "agent-memory",
      "llm-model-selection"
    ],
    "mentions": [
      "system-prompt-design",
      "spring-ai-agents",
      "llm-app-security-guardrails",
      "agentic-rag",
      "smoke-sanity-regression-testing",
      "resilience-patterns",
      "js-strict-mode",
      "ssrf",
      "http-methods"
    ]
  },
  "context-engineering": {
    "links": [
      "system-prompt-design",
      "llm-basics-for-developers",
      "claude-code-context-window",
      "rag-classic-pipeline"
    ],
    "mentions": [
      "llm-api-integration",
      "agent-memory",
      "llm-evals"
    ]
  },
  "embedding-models-applications": {
    "links": [
      "vector-db",
      "rag-classic-pipeline",
      "rag-retrieval-quality"
    ],
    "mentions": [
      "pythagorean-theorem",
      "cold-starts",
      "db-index-design",
      "llm-evals",
      "elasticsearch-inverted-index",
      "self-hosting-llm-inference",
      "db-modeling-normalization"
    ]
  },
  "interval-problems-pattern": {
    "links": [
      "greedy-algorithms",
      "leetcode-study-guide",
      "leetcode-merge-intervals",
      "leetcode-insert-interval",
      "leetcode-non-overlapping-intervals",
      "leetcode-meeting-rooms",
      "ds-heap",
      "two-pointers-pattern",
      "leetcode-minimum-interval-to-include-each-query",
      "segment-tree-fenwick"
    ],
    "mentions": [
      "ds-array-matrix"
    ]
  },
  "leetcode-study-guide": {
    "links": [
      "algorithms-overview",
      "big-o-notation",
      "two-pointers-pattern",
      "sliding-window-pattern",
      "monotonic-stack-pattern",
      "leetcode-two-sum",
      "ds-hash-map",
      "binary-search",
      "ds-linked-list",
      "ds-binary-tree-bst",
      "ds-trie",
      "ds-heap",
      "recursion-backtracking",
      "dynamic-programming",
      "ds-graph-bfs-dfs",
      "shortest-path-algorithms",
      "minimum-spanning-tree",
      "greedy-algorithms",
      "interval-problems-pattern",
      "bit-manipulation"
    ],
    "mentions": [
      "js-numbers-bigint",
      "sql-aggregation-pitfalls",
      "sd-maps-tiles-routing",
      "js-array-mutation"
    ]
  },
  "llm-model-selection": {
    "links": [
      "llm-basics-for-developers",
      "self-hosting-llm-inference",
      "llm-evals",
      "prompt-reasoning-techniques",
      "agent-tool-design",
      "agent-reasoning-patterns"
    ],
    "mentions": [
      "system-prompt-design",
      "llm-api-integration",
      "code-review-practices",
      "fine-tuning-vs-rag-vs-prompting",
      "vector-db"
    ]
  },
  "monotonic-stack-pattern": {
    "links": [
      "ds-stack-queue-deque",
      "leetcode-study-guide",
      "big-o-notation",
      "leetcode-largest-rectangle-in-histogram",
      "leetcode-sliding-window-maximum",
      "sliding-window-pattern",
      "leetcode-valid-parentheses",
      "leetcode-min-stack",
      "leetcode-generate-parentheses",
      "leetcode-daily-temperatures",
      "leetcode-trapping-rain-water",
      "two-pointers-pattern"
    ],
    "mentions": [
      "recursion-backtracking"
    ]
  },
  "multi-agent-systems": {
    "links": [
      "ai-coding-agents",
      "agentic-rag",
      "agent-reasoning-patterns",
      "agent-frameworks-comparison",
      "claude-code-extensions",
      "claude-code-context-window",
      "llm-api-integration",
      "claude-code-parallel-and-scheduled",
      "distributed-tracing",
      "llm-evals",
      "agent-tool-design"
    ],
    "mentions": [
      "observability-basics",
      "llm-observability",
      "system-prompt-design",
      "git-tips-advanced",
      "transformer-attention-kv-cache",
      "code-review-practices"
    ]
  },
  "sliding-window-pattern": {
    "links": [
      "leetcode-study-guide",
      "leetcode-minimum-window-substring",
      "big-o-notation",
      "leetcode-longest-substring-without-repeating",
      "monotonic-stack-pattern",
      "leetcode-sliding-window-maximum",
      "dynamic-programming",
      "rate-limiting-algorithms",
      "percentile-latency",
      "leetcode-longest-repeating-character-replacement",
      "leetcode-best-time-to-buy-and-sell-stock",
      "two-pointers-pattern",
      "ds-array-matrix"
    ],
    "mentions": [
      "tcp-reliability-congestion"
    ]
  },
  "system-prompt-design": {
    "links": [
      "llm-basics-for-developers",
      "context-engineering",
      "llm-api-integration",
      "rag-classic-pipeline",
      "fine-tuning-vs-rag-vs-prompting"
    ],
    "mentions": [
      "llm-app-security-guardrails",
      "llm-evals",
      "code-review-practices"
    ]
  },
  "two-pointers-pattern": {
    "links": [
      "leetcode-study-guide",
      "ds-array-matrix",
      "sliding-window-pattern",
      "leetcode-valid-palindrome",
      "leetcode-two-sum-ii",
      "leetcode-3sum",
      "leetcode-container-with-most-water",
      "ds-linked-list",
      "leetcode-linked-list-cycle",
      "leetcode-reorder-list",
      "sorting-algorithms",
      "interval-problems-pattern",
      "leetcode-two-sum",
      "leetcode-trapping-rain-water",
      "monotonic-stack-pattern",
      "leetcode-median-of-two-sorted-arrays"
    ],
    "mentions": [
      "binary-search",
      "ds-stack-queue-deque"
    ]
  },
  "leetcode-binary-tree-level-order-traversal": {
    "links": [
      "ds-binary-tree-bst",
      "ds-graph-bfs-dfs",
      "leetcode-maximum-depth-of-binary-tree",
      "leetcode-binary-tree-right-side-view",
      "leetcode-rotting-oranges",
      "leetcode-word-ladder",
      "leetcode-serialize-and-deserialize-binary-tree",
      "leetcode-lowest-common-ancestor-of-bst",
      "leetcode-study-guide"
    ],
    "mentions": [
      "ds-linked-list"
    ]
  },
  "leetcode-combination-sum": {
    "links": [
      "leetcode-subsets",
      "recursion-backtracking",
      "leetcode-coin-change-ii",
      "leetcode-combination-sum-ii",
      "leetcode-subsets-ii",
      "leetcode-coin-change",
      "greedy-algorithms",
      "leetcode-permutations",
      "leetcode-letter-combinations-of-a-phone-number",
      "leetcode-partition-equal-subset-sum",
      "leetcode-target-sum"
    ],
    "mentions": [
      "dynamic-programming"
    ]
  },
  "leetcode-design-add-and-search-words": {
    "links": [
      "leetcode-implement-trie",
      "ds-trie",
      "leetcode-word-search-ii",
      "leetcode-search-suggestions-system"
    ],
    "mentions": [
      "ds-graph-bfs-dfs",
      "js-memoization"
    ]
  },
  "leetcode-implement-trie": {
    "links": [
      "leetcode-design-add-and-search-words",
      "leetcode-word-search-ii",
      "leetcode-replace-words",
      "ds-trie",
      "binary-search",
      "leetcode-sum-of-prefix-scores-of-strings",
      "leetcode-search-suggestions-system",
      "sd-autocomplete-trie",
      "leetcode-longest-common-prefix"
    ],
    "mentions": [
      "process-vs-thread",
      "layer-ip-routing-icmp",
      "ds-hash-map"
    ]
  },
  "leetcode-k-closest-points-to-origin": {
    "links": [
      "leetcode-kth-largest-element-in-an-array",
      "ds-heap",
      "leetcode-koko-eating-bananas",
      "binary-search",
      "leetcode-kth-largest-element-in-a-stream",
      "quadtree",
      "geohash",
      "sd-proximity-service",
      "vector-db"
    ],
    "mentions": [
      "pythagorean-theorem",
      "floating-point-numbers",
      "js-shallow-deep-copy",
      "divide-and-conquer"
    ]
  },
  "leetcode-kth-largest-element-in-an-array": {
    "links": [
      "ds-heap",
      "randomized-algorithms",
      "leetcode-top-k-frequent-elements",
      "leetcode-kth-largest-element-in-a-stream",
      "leetcode-find-median-from-data-stream",
      "leetcode-median-of-two-sorted-arrays",
      "leetcode-k-closest-points-to-origin"
    ],
    "mentions": [
      "sql-interview-problems",
      "sorting-algorithms",
      "divide-and-conquer"
    ]
  },
  "leetcode-linked-list-cycle": {
    "links": [
      "ds-linked-list",
      "ds-hash-map",
      "leetcode-reverse-linked-list",
      "leetcode-happy-number",
      "leetcode-reorder-list"
    ],
    "mentions": [
      "ds-array-matrix"
    ]
  },
  "leetcode-lowest-common-ancestor-of-bst": {
    "links": [
      "ds-binary-tree-bst",
      "leetcode-maximum-depth-of-binary-tree",
      "balanced-search-trees",
      "ds-union-find",
      "leetcode-validate-binary-search-tree",
      "leetcode-binary-tree-level-order-traversal",
      "leetcode-serialize-and-deserialize-binary-tree",
      "leetcode-study-guide"
    ],
    "mentions": [
      "ds-linked-list",
      "ds-array-matrix"
    ]
  },
  "leetcode-maximum-depth-of-binary-tree": {
    "links": [
      "ds-binary-tree-bst",
      "recursion-backtracking",
      "leetcode-binary-tree-maximum-path-sum",
      "leetcode-binary-tree-level-order-traversal",
      "leetcode-diameter-of-binary-tree",
      "sql-cte-recursive",
      "leetcode-lowest-common-ancestor-of-bst",
      "leetcode-invert-binary-tree",
      "leetcode-study-guide"
    ],
    "mentions": [
      "ds-graph-bfs-dfs",
      "dom-basics",
      "sqld-top-n-hierarchical-pivot"
    ]
  },
  "leetcode-merge-two-sorted-lists": {
    "links": [
      "leetcode-merge-k-sorted-lists",
      "leetcode-reorder-list",
      "ds-linked-list",
      "sorting-algorithms",
      "divide-and-conquer",
      "leetcode-reverse-linked-list"
    ],
    "mentions": [
      "js-array-mutation"
    ]
  },
  "leetcode-permutations": {
    "links": [
      "leetcode-subsets",
      "leetcode-combination-sum",
      "recursion-backtracking",
      "leetcode-n-queens",
      "leetcode-permutation-in-string",
      "leetcode-course-schedule"
    ],
    "mentions": [
      "sliding-window-pattern",
      "ds-graph-bfs-dfs",
      "js-destructuring"
    ]
  },
  "leetcode-reorder-list": {
    "links": [
      "leetcode-linked-list-cycle",
      "leetcode-reverse-linked-list",
      "leetcode-merge-two-sorted-lists",
      "two-pointers-pattern",
      "leetcode-reverse-nodes-in-k-group"
    ],
    "mentions": [
      "ds-linked-list",
      "ds-array-matrix"
    ]
  },
  "leetcode-reverse-linked-list": {
    "links": [
      "leetcode-reorder-list",
      "leetcode-reverse-nodes-in-k-group",
      "ds-linked-list",
      "recursion-backtracking",
      "leetcode-linked-list-cycle",
      "leetcode-merge-two-sorted-lists",
      "leetcode-add-two-numbers"
    ],
    "mentions": [
      "js-execution-context"
    ]
  },
  "leetcode-subsets": {
    "links": [
      "leetcode-combination-sum",
      "leetcode-permutations",
      "leetcode-n-queens",
      "recursion-backtracking",
      "leetcode-subsets-ii",
      "dynamic-programming",
      "bit-manipulation",
      "leetcode-partition-equal-subset-sum",
      "leetcode-generate-parentheses",
      "leetcode-combination-sum-ii",
      "leetcode-letter-combinations-of-a-phone-number"
    ],
    "mentions": [
      "big-o-notation",
      "test-design-techniques"
    ]
  },
  "leetcode-word-search-ii": {
    "links": [
      "leetcode-word-search",
      "leetcode-implement-trie",
      "recursion-backtracking",
      "leetcode-design-add-and-search-words",
      "leetcode-number-of-islands",
      "leetcode-palindrome-pairs"
    ],
    "mentions": [
      "ds-trie",
      "ds-graph-bfs-dfs"
    ]
  },
  "aws-core-services-map": {
    "links": [
      "iam-basics",
      "cloud-service-models-shared-responsibility",
      "multi-region",
      "vpc-basics",
      "vpc-subnets-route-tables",
      "security-groups-nacl",
      "ec2-instance-types-launch-templates",
      "aws-ec2-ubuntu-server-setup",
      "rds-aurora-managed-db",
      "aws-s3-in-practice",
      "high-availability",
      "route53-routing-policies",
      "cloudwatch-metrics-logs-alarms",
      "cloud-cost-optimization",
      "terraform-basics"
    ],
    "mentions": [
      "serverless-limits",
      "vpc-peering-transit-privatelink",
      "db-type-key-value",
      "container-orchestration-choices",
      "sd-object-storage-architecture",
      "sd-start-single-server",
      "db-replication-sharding",
      "security-principles-cia-defense-in-depth",
      "disaster-recovery",
      "osi-in-practice",
      "what-happens-google-com",
      "sso-saml-oidc",
      "github-actions-docker-ecr",
      "eks-cluster-basics"
    ]
  },
  "frontend-first-steps": {
    "links": [
      "html-semantics",
      "css-cascade-specificity",
      "css-box-model-layout",
      "css-flexbox-grid",
      "dom-basics",
      "event-delegation",
      "browser-rendering-pipeline",
      "browser-devtools-debugging",
      "bundler-basics",
      "js-es-modules",
      "frontend-frameworks-compared",
      "react-jsx-components",
      "responsive-design",
      "javascript-roadmap"
    ],
    "mentions": []
  },
  "git-first-hour": {
    "links": [
      "git-internals-basics",
      "git-staging-area",
      "git-ignore-config",
      "git-large-files-secrets",
      "git-remote-collaboration",
      "git-merge-conflict",
      "git-rebase",
      "git-troubleshooting",
      "git-branch-merge",
      "github-pull-request-flow",
      "git-undo"
    ],
    "mentions": [
      "token-login",
      "code-review-practices",
      "what-happens-google-com"
    ]
  },
  "github-pull-request-flow": {
    "links": [
      "git-first-hour",
      "git-remote-collaboration",
      "github-repo-governance",
      "code-review-practices",
      "git-branching-strategy",
      "git-stacked-prs"
    ],
    "mentions": [
      "github-actions-docker-ecr",
      "git-tips-advanced"
    ]
  },
  "go-language-essentials": {
    "links": [
      "python-essentials-for-backend",
      "go-concurrency-basics",
      "backend-language-comparison"
    ],
    "mentions": [
      "dockerfile-image-layers",
      "terraform-basics",
      "db-type-embedded",
      "what-happens-google-com",
      "db-type-key-value",
      "dns",
      "vector-db"
    ]
  },
  "llm-evals": {
    "links": [
      "rag-retrieval-quality",
      "llm-basics-for-developers",
      "ai-coding-agents",
      "llm-api-integration",
      "prompt-reasoning-techniques"
    ],
    "mentions": [
      "system-prompt-design",
      "agentic-rag",
      "ab-testing",
      "smoke-sanity-regression-testing",
      "agent-tool-design",
      "rag-classic-pipeline",
      "vector-db"
    ]
  },
  "multimodal-llm-apps": {
    "links": [
      "llm-basics-for-developers",
      "llm-api-integration",
      "llm-evals",
      "rag-retrieval-quality",
      "rag-classic-pipeline",
      "self-hosting-llm-inference"
    ],
    "mentions": [
      "agent-frameworks-comparison",
      "system-prompt-design",
      "llm-app-security-guardrails",
      "sd-start-single-server",
      "vector-db"
    ]
  },
  "os-kernel-system-calls": {
    "links": [
      "process-vs-thread",
      "virtual-memory-paging",
      "cpu-scheduling-interrupts",
      "page-cache-disk-io",
      "linux-namespaces-cgroups",
      "nodejs-server-runtime",
      "seccomp-apparmor",
      "linux-performance-triage"
    ],
    "mentions": [
      "docker-container-basics",
      "cpu-pipelining-branch-prediction",
      "k8s-security-context",
      "redis-basics"
    ]
  },
  "prompt-reasoning-techniques": {
    "links": [
      "llm-basics-for-developers",
      "llm-evals",
      "rag-retrieval-quality"
    ],
    "mentions": [
      "js-truthy-falsy-typeof",
      "llm-api-integration",
      "postgres-query-planner",
      "rag-classic-pipeline",
      "db-modeling-normalization"
    ]
  },
  "python-essentials-for-backend": {
    "links": [
      "fastapi-basics",
      "backend-language-comparison",
      "dependency-hell",
      "go-language-essentials",
      "bash-scripting"
    ],
    "mentions": [
      "dockerfile-image-layers",
      "docker-container-basics",
      "js-memory-leak",
      "runtime-validation-zod",
      "event-loop"
    ]
  },
  "self-hosting-llm-inference": {
    "links": [
      "llm-basics-for-developers",
      "llm-api-integration",
      "llm-evals",
      "k8s-gpu-dra",
      "multimodal-llm-apps"
    ],
    "mentions": [
      "system-prompt-design",
      "api-scaling-ladder",
      "load-testing-k6",
      "transformer-attention-kv-cache",
      "osi-in-practice",
      "fine-tuning-vs-rag-vs-prompting",
      "rag-classic-pipeline",
      "vector-db"
    ]
  },
  "transformer-attention-kv-cache": {
    "links": [
      "llm-basics-for-developers",
      "llm-api-integration"
    ],
    "mentions": [
      "rag-classic-pipeline",
      "self-hosting-llm-inference",
      "system-prompt-design",
      "sliding-window-pattern",
      "fine-tuning-vs-rag-vs-prompting",
      "db-modeling-normalization",
      "dns",
      "vector-db"
    ]
  },
  "leetcode-3sum": {
    "links": [
      "leetcode-two-sum-ii",
      "two-pointers-pattern",
      "ds-hash-map",
      "leetcode-container-with-most-water"
    ],
    "mentions": [
      "sorting-algorithms"
    ]
  },
  "leetcode-best-time-to-buy-and-sell-stock": {
    "links": [
      "ds-array-matrix",
      "greedy-algorithms",
      "dynamic-programming",
      "sliding-window-pattern",
      "leetcode-longest-substring-without-repeating",
      "two-pointers-pattern",
      "leetcode-sliding-window-maximum"
    ],
    "mentions": [
      "string-search-algorithms",
      "divide-and-conquer",
      "sorting-algorithms",
      "monotonic-stack-pattern"
    ]
  },
  "leetcode-binary-search": {
    "links": [
      "binary-search",
      "recursion-backtracking",
      "sorting-algorithms",
      "big-o-notation",
      "leetcode-search-in-rotated-sorted-array",
      "leetcode-find-minimum-in-rotated-sorted-array",
      "leetcode-koko-eating-bananas",
      "leetcode-median-of-two-sorted-arrays",
      "leetcode-study-guide"
    ],
    "mentions": [
      "sql-aggregation-pitfalls",
      "sql-filtering-operators",
      "bit-manipulation"
    ]
  },
  "leetcode-container-with-most-water": {
    "links": [
      "two-pointers-pattern",
      "leetcode-trapping-rain-water",
      "leetcode-two-sum-ii",
      "leetcode-largest-rectangle-in-histogram",
      "binary-search",
      "monotonic-stack-pattern",
      "sliding-window-pattern"
    ],
    "mentions": [
      "ds-union-find",
      "ds-array-matrix"
    ]
  },
  "leetcode-contains-duplicate": {
    "links": [
      "leetcode-two-sum",
      "ds-hash-map",
      "sliding-window-pattern",
      "leetcode-valid-anagram",
      "leetcode-top-k-frequent-elements",
      "leetcode-group-anagrams",
      "leetcode-linked-list-cycle"
    ],
    "mentions": [
      "ds-binary-tree-bst",
      "sorting-algorithms",
      "js-memory-leak",
      "ds-linked-list",
      "sql-aggregation-pitfalls",
      "js-array-mutation",
      "bloom-filter"
    ]
  },
  "leetcode-daily-temperatures": {
    "links": [
      "monotonic-stack-pattern",
      "ds-stack-queue-deque",
      "big-o-notation",
      "ds-hash-map",
      "leetcode-largest-rectangle-in-histogram",
      "leetcode-trapping-rain-water"
    ],
    "mentions": [
      "segment-tree-fenwick",
      "sd-latency-numbers",
      "message-delivery-semantics",
      "binary-search"
    ]
  },
  "leetcode-find-minimum-in-rotated-sorted-array": {
    "links": [
      "leetcode-binary-search",
      "leetcode-search-in-rotated-sorted-array",
      "binary-search",
      "leetcode-koko-eating-bananas",
      "leetcode-median-of-two-sorted-arrays",
      "leetcode-study-guide"
    ],
    "mentions": [
      "divide-and-conquer"
    ]
  },
  "leetcode-generate-parentheses": {
    "links": [
      "leetcode-valid-parentheses",
      "recursion-backtracking",
      "dynamic-programming",
      "leetcode-subsets",
      "leetcode-permutations",
      "leetcode-combination-sum",
      "leetcode-n-queens",
      "monotonic-stack-pattern"
    ],
    "mentions": [
      "ds-graph-bfs-dfs",
      "ds-binary-tree-bst",
      "big-o-notation"
    ]
  },
  "leetcode-group-anagrams": {
    "links": [
      "leetcode-valid-anagram",
      "ds-hash-map",
      "leetcode-top-k-frequent-elements",
      "leetcode-contains-duplicate"
    ],
    "mentions": [
      "sorting-algorithms",
      "big-o-notation",
      "db-modeling-normalization"
    ]
  },
  "leetcode-koko-eating-bananas": {
    "links": [
      "leetcode-binary-search",
      "binary-search",
      "leetcode-find-minimum-in-rotated-sorted-array",
      "leetcode-search-in-rotated-sorted-array",
      "leetcode-median-of-two-sorted-arrays",
      "leetcode-study-guide"
    ],
    "mentions": []
  },
  "leetcode-largest-rectangle-in-histogram": {
    "links": [
      "leetcode-daily-temperatures",
      "monotonic-stack-pattern",
      "leetcode-trapping-rain-water",
      "leetcode-container-with-most-water"
    ],
    "mentions": [
      "segment-tree-fenwick",
      "js-execution-context",
      "two-pointers-pattern",
      "divide-and-conquer",
      "ds-stack-queue-deque",
      "big-o-notation",
      "sorting-algorithms"
    ]
  },
  "leetcode-longest-repeating-character-replacement": {
    "links": [
      "leetcode-longest-substring-without-repeating",
      "binary-search",
      "leetcode-minimum-window-substring"
    ],
    "mentions": [
      "sliding-window-pattern"
    ]
  },
  "leetcode-longest-substring-without-repeating": {
    "links": [
      "leetcode-best-time-to-buy-and-sell-stock",
      "binary-search",
      "sliding-window-pattern",
      "ds-hash-map",
      "leetcode-longest-repeating-character-replacement",
      "leetcode-minimum-window-substring"
    ],
    "mentions": [
      "js-strings-unicode",
      "sql-filtering-operators",
      "big-o-notation",
      "cookie-session-login"
    ]
  },
  "leetcode-median-of-two-sorted-arrays": {
    "links": [
      "leetcode-binary-search",
      "leetcode-koko-eating-bananas",
      "sorting-algorithms",
      "two-pointers-pattern",
      "leetcode-merge-two-sorted-lists",
      "ds-heap",
      "leetcode-merge-k-sorted-lists",
      "leetcode-find-median-from-data-stream",
      "leetcode-find-minimum-in-rotated-sorted-array",
      "leetcode-search-in-rotated-sorted-array",
      "leetcode-study-guide"
    ],
    "mentions": [
      "binary-search",
      "ds-linked-list",
      "sql-aggregation-pitfalls",
      "big-o-notation"
    ]
  },
  "leetcode-min-stack": {
    "links": [
      "ds-stack-queue-deque",
      "leetcode-valid-parentheses",
      "binary-search",
      "ds-heap",
      "leetcode-sliding-window-maximum",
      "monotonic-stack-pattern",
      "leetcode-daily-temperatures"
    ],
    "mentions": [
      "ds-linked-list",
      "big-o-notation"
    ]
  },
  "leetcode-minimum-window-substring": {
    "links": [
      "leetcode-longest-substring-without-repeating",
      "leetcode-longest-repeating-character-replacement",
      "binary-search",
      "leetcode-sliding-window-maximum"
    ],
    "mentions": [
      "sliding-window-pattern",
      "sql-filtering-operators",
      "ds-array-matrix",
      "monotonic-stack-pattern"
    ]
  },
  "leetcode-search-in-rotated-sorted-array": {
    "links": [
      "leetcode-find-minimum-in-rotated-sorted-array",
      "binary-search",
      "leetcode-binary-search",
      "leetcode-koko-eating-bananas",
      "leetcode-median-of-two-sorted-arrays",
      "leetcode-study-guide"
    ],
    "mentions": [
      "big-o-notation"
    ]
  },
  "leetcode-sliding-window-maximum": {
    "links": [
      "leetcode-minimum-window-substring",
      "ds-heap",
      "ds-stack-queue-deque",
      "leetcode-best-time-to-buy-and-sell-stock",
      "leetcode-longest-substring-without-repeating",
      "monotonic-stack-pattern",
      "sliding-window-pattern"
    ],
    "mentions": [
      "sql-interview-problems",
      "ds-binary-tree-bst",
      "segment-tree-fenwick",
      "ds-array-matrix",
      "dynamic-programming"
    ]
  },
  "leetcode-top-k-frequent-elements": {
    "links": [
      "ds-heap",
      "sorting-algorithms",
      "leetcode-contains-duplicate",
      "leetcode-valid-anagram",
      "leetcode-kth-largest-element-in-an-array",
      "leetcode-group-anagrams"
    ],
    "mentions": [
      "count-min-sketch",
      "ds-linked-list",
      "big-o-notation",
      "divide-and-conquer"
    ]
  },
  "leetcode-trapping-rain-water": {
    "links": [
      "leetcode-container-with-most-water",
      "two-pointers-pattern",
      "dynamic-programming",
      "monotonic-stack-pattern",
      "ds-heap",
      "shortest-path-algorithms",
      "leetcode-largest-rectangle-in-histogram",
      "leetcode-daily-temperatures"
    ],
    "mentions": [
      "ds-stack-queue-deque",
      "ds-array-matrix",
      "sd-maps-tiles-routing"
    ]
  },
  "leetcode-two-sum-ii": {
    "links": [
      "leetcode-two-sum",
      "two-pointers-pattern",
      "ds-hash-map",
      "binary-search",
      "leetcode-3sum"
    ],
    "mentions": [
      "ds-binary-tree-bst",
      "ds-array-matrix"
    ]
  },
  "leetcode-two-sum": {
    "links": [
      "ds-hash-map",
      "big-o-notation",
      "leetcode-study-guide",
      "two-pointers-pattern",
      "sorting-algorithms",
      "leetcode-two-sum-ii",
      "binary-search",
      "leetcode-3sum",
      "leetcode-contains-duplicate",
      "leetcode-group-anagrams"
    ],
    "mentions": []
  },
  "leetcode-valid-anagram": {
    "links": [
      "leetcode-group-anagrams",
      "leetcode-two-sum",
      "js-strings-unicode",
      "sliding-window-pattern"
    ],
    "mentions": [
      "message-delivery-semantics",
      "floating-point-numbers",
      "db-modeling-normalization"
    ]
  },
  "leetcode-valid-palindrome": {
    "links": [
      "two-pointers-pattern",
      "recursion-backtracking",
      "big-o-notation",
      "dynamic-programming",
      "leetcode-reverse-linked-list",
      "leetcode-two-sum-ii",
      "leetcode-3sum"
    ],
    "mentions": [
      "js-strings-unicode",
      "ds-linked-list",
      "string-search-algorithms",
      "ds-array-matrix"
    ]
  },
  "leetcode-valid-parentheses": {
    "links": [
      "ds-stack-queue-deque",
      "recursion-backtracking",
      "leetcode-daily-temperatures",
      "leetcode-largest-rectangle-in-histogram",
      "dynamic-programming",
      "leetcode-generate-parentheses",
      "monotonic-stack-pattern",
      "leetcode-min-stack"
    ],
    "mentions": [
      "pattern-interpreter",
      "js-execution-context",
      "ds-array-matrix",
      "big-o-notation"
    ]
  },
  "linux-archive-transfer": {
    "links": [
      "rsync-algorithm",
      "linux-files-permissions",
      "bash-scripting",
      "shell-redirection-pipes",
      "ssh-in-practice",
      "linux-package-management",
      "vim-for-servers"
    ],
    "mentions": [
      "youtube-url-to-video",
      "linux-disks-filesystems",
      "ports-and-sockets",
      "what-happens-google-com"
    ]
  },
  "linux-package-management": {
    "links": [
      "digital-signatures-certificates",
      "aws-ec2-ubuntu-server-setup",
      "dockerfile-image-layers",
      "linux-archive-transfer",
      "vim-for-servers"
    ],
    "mentions": [
      "docker-container-basics",
      "python-essentials-for-backend",
      "what-happens-google-com"
    ]
  },
  "shells-posix-compat": {
    "links": [
      "shell-environment-startup",
      "bash-scripting",
      "linux-grep-awk-sed",
      "linux-package-management",
      "linux-archive-transfer"
    ],
    "mentions": [
      "dockerfile-image-layers",
      "linux-boot-process",
      "bash-expansions-variables",
      "shell-redirection-pipes"
    ]
  },
  "vim-for-servers": {
    "links": [
      "linux-systemd-systemctl",
      "linux-grep-awk-sed",
      "linux-users-groups-sudo",
      "shell-environment-startup",
      "cron-jobs",
      "linux-archive-transfer",
      "linux-package-management"
    ],
    "mentions": [
      "docker-compose",
      "nginx-basics",
      "fp-composition-pipe",
      "aws-ec2-ubuntu-server-setup"
    ]
  },
  "config-management-tools": {
    "links": [
      "iac-basics",
      "ansible-network-automation",
      "terraform-basics",
      "terraform-team-workflow-hcp-terragrunt"
    ],
    "mentions": [
      "k8s-configmap",
      "high-availability",
      "docker-container-basics",
      "security-groups-nacl",
      "what-happens-google-com",
      "vpc-basics",
      "http-methods"
    ]
  },
  "data-center-infrastructure": {
    "links": [
      "network-design-three-tier-spine-leaf",
      "multi-region",
      "gateway-link-redundancy-fhrp-lacp",
      "cloud-cost-optimization",
      "security-compliance-for-developers",
      "bgp-basics",
      "sd-object-storage-durability",
      "high-availability",
      "sd-multi-datacenter",
      "vpc-basics"
    ],
    "mentions": [
      "k8s-pod-scheduling",
      "cloud-deployment-models-multicloud",
      "ec2-instance-types-launch-templates",
      "rest-api-design",
      "virtualization-hypervisors",
      "sd-start-single-server",
      "osi-in-practice",
      "client-data-cache",
      "what-happens-google-com",
      "data-lake-hdfs",
      "sql-query-rewrite"
    ]
  },
  "data-privacy-compliance": {
    "links": [
      "structured-logging",
      "encryption-at-rest",
      "postgres-roles-security",
      "event-sourcing",
      "global-rollout-localization",
      "ml-experiment-tracking",
      "data-quality-checks",
      "security-logging-detection-siem",
      "k8s-audit-logging"
    ],
    "mentions": [
      "cloud-service-models-shared-responsibility",
      "sd-db-replication-intro",
      "dns"
    ]
  },
  "docker-local-dev-workflow": {
    "links": [
      "docker-compose",
      "dockerfile-image-layers",
      "docker-network-volume",
      "nodejs-debugging-profiling",
      "integration-tests-real-db",
      "docker-runtime-security"
    ],
    "mentions": [
      "docker-container-basics",
      "fp-composition-pipe",
      "docker-commands-workflow",
      "osi-in-practice",
      "frontend-monorepo",
      "frontend-build-tooling",
      "db-modeling-normalization"
    ]
  },
  "frontend-hosting-platforms": {
    "links": [
      "rendering-strategies",
      "aws-s3-in-practice",
      "cdn-edge-anycast",
      "nextjs-self-hosting-deployment",
      "cloud-service-models-shared-responsibility",
      "rendering-csr-spa",
      "http-caching-cdn",
      "code-splitting",
      "cold-starts",
      "serverless-limits",
      "route53-routing-policies",
      "https-tls",
      "cloud-cost-optimization"
    ],
    "mentions": [
      "dockerfile-image-layers",
      "s3-storage-classes-lifecycle",
      "islands-resumability",
      "react-server-components",
      "http-status-codes",
      "dns",
      "what-happens-google-com",
      "oauth"
    ]
  },
  "linux-fhs-file-commands": {
    "links": [
      "linux-files-permissions",
      "linux-disks-filesystems",
      "hosts-file",
      "linux-processes-signals",
      "linux-network-tuning",
      "linux-systemd-systemctl",
      "linux-grep-awk-sed",
      "bash-expansions-variables",
      "path-traversal-file-upload",
      "shell-redirection-pipes"
    ],
    "mentions": [
      "aws-ec2-ubuntu-server-setup",
      "page-cache-disk-io",
      "os-kernel-system-calls",
      "client-data-cache"
    ]
  },
  "phishing-social-engineering": {
    "links": [
      "sd-email-protocols",
      "mfa-totp",
      "digital-signatures-certificates",
      "passkeys-webauthn",
      "encryption-at-rest",
      "web-security-headers",
      "software-supply-chain-ci-hardening",
      "security-incident-response",
      "data-privacy-compliance"
    ],
    "mentions": [
      "owasp-top-10-map",
      "sd-url-shortener-api-redirect",
      "python-essentials-for-backend",
      "network-attacks-l2-l3",
      "dynamic-programming",
      "what-happens-google-com",
      "cookie-session-login",
      "cloud-service-models-shared-responsibility",
      "dns"
    ]
  },
  "security-compliance-for-developers": {
    "links": [
      "security-logging-detection-siem",
      "security-incident-response",
      "cis-benchmark-kube-bench",
      "iam-basics",
      "secrets-management",
      "k8s-audit-logging",
      "structured-logging",
      "backup-strategy",
      "vulnerability-management-cve-cvss",
      "terraform-testing-policy-scanning",
      "threat-modeling-stride",
      "multi-region",
      "cloud-service-models-shared-responsibility",
      "software-supply-chain-ci-hardening",
      "security-principles-cia-defense-in-depth"
    ],
    "mentions": [
      "github-actions-docker-ecr",
      "terraform-basics",
      "data-privacy-compliance",
      "code-review-practices",
      "security-groups-nacl",
      "sso-saml-oidc",
      "on-call"
    ]
  },
  "terraform-team-workflow-hcp-terragrunt": {
    "links": [
      "terraform-basics",
      "network-config-cicd",
      "github-actions-docker-ecr",
      "terraform-modules-tfvars",
      "terraform-testing-policy-scanning",
      "config-management-tools"
    ],
    "mentions": [
      "ansible-network-automation",
      "jenkins-argocd-push-pull",
      "sso-saml-oidc",
      "vpc-basics",
      "webhooks"
    ]
  },
  "claim-check-sequential-convoy": {
    "links": [
      "message-queue-basics",
      "kafka-basics",
      "dead-letter-queue",
      "s3-storage-classes-lifecycle",
      "encryption-at-rest",
      "message-delivery-semantics",
      "idempotency-key",
      "transactional-outbox"
    ],
    "mentions": [
      "serverless-architecture",
      "aws-s3-in-practice",
      "sd-object-storage-architecture",
      "db-replication-sharding",
      "caching-strategies"
    ]
  },
  "cloudwatch-metrics-logs-alarms": {
    "links": [
      "logging-tools-overview",
      "observability-basics",
      "prometheus-basics",
      "aws-ec2-ubuntu-server-setup",
      "db-type-time-series",
      "structured-logging",
      "alerting",
      "dead-letter-queue",
      "grafana-dashboards"
    ],
    "mentions": [
      "serverless-architecture",
      "virtual-memory-paging",
      "terraform-basics",
      "virtualization-hypervisors",
      "security-groups-nacl"
    ]
  },
  "css-typography": {
    "links": [
      "web-font-optimization",
      "css-cascade-specificity",
      "responsive-design",
      "css-flexbox-grid",
      "web-accessibility",
      "html-text-semantics"
    ],
    "mentions": [
      "html-semantics"
    ]
  },
  "html-media-embed": {
    "links": [
      "image-optimization",
      "core-web-vitals",
      "cors",
      "aria-keyboard-focus",
      "browser-security-model",
      "web-security-headers",
      "lazy-loading-strategies",
      "sd-video-streaming-cost",
      "youtube-url-to-video",
      "html-text-semantics"
    ],
    "mentions": [
      "frontend-testing-strategy",
      "http-status-codes",
      "shells-posix-compat",
      "web-accessibility",
      "sd-music-streaming"
    ]
  },
  "html-text-semantics": {
    "links": [
      "html-semantics",
      "css-typography",
      "xss",
      "web-accessibility",
      "html-media-embed"
    ],
    "mentions": [
      "frontend-testing-strategy",
      "seo-for-spa",
      "code-review-practices"
    ]
  },
  "iot-mobile-wireless-links": {
    "links": [
      "wifi-standards-security",
      "wifi-design-channels-roaming",
      "pub-sub",
      "latency-bandwidth-throughput",
      "https-tls"
    ],
    "mentions": [
      "js-strings-unicode"
    ]
  },
  "k8s-multi-cluster": {
    "links": [
      "k8s-architecture",
      "eks-cluster-basics",
      "argocd-basics",
      "k8s-cluster-upgrade",
      "k8s-controllers-reconcile",
      "k8s-coredns",
      "service-mesh",
      "route53-routing-policies",
      "cdn-edge-anycast",
      "multi-region",
      "disaster-recovery",
      "prometheus-basics"
    ],
    "mentions": [
      "vpc-peering-transit-privatelink",
      "canary-release",
      "k8s-service-types",
      "kubernetes-ingress",
      "gateway",
      "lighthouse-explained",
      "terraform-basics",
      "docker-container-basics",
      "k8s-admission-control",
      "cilium-ebpf",
      "k8s-labels-selectors",
      "osi-in-practice",
      "what-happens-google-com",
      "cloud-service-models-shared-responsibility",
      "layer-ip-addressing",
      "db-type-key-value",
      "https-tls",
      "k8s-hpa",
      "vpc-basics",
      "dns",
      "webhooks"
    ]
  },
  "linters-formatters": {
    "links": [
      "frontend-build-tooling",
      "code-review-practices",
      "tsconfig-strict"
    ],
    "mentions": [
      "github-repo-governance",
      "js-equality-coercion",
      "bundler-basics",
      "react-custom-hooks-rules"
    ]
  },
  "mongodb-security": {
    "links": [
      "mongodb-document-model",
      "mongodb-replica-set-sharding",
      "postgres-roles-security",
      "encryption-in-transit",
      "encryption-at-rest"
    ],
    "mentions": [
      "secrets-management",
      "kubernetes-ingress",
      "authn-vs-authz",
      "security-principles-cia-defense-in-depth",
      "security-groups-nacl",
      "symmetric-encryption-aes"
    ]
  },
  "pattern-null-object": {
    "links": [
      "design-patterns-overview",
      "pattern-strategy",
      "pattern-singleton",
      "js-optional-chaining-nullish",
      "fp-functors-monads-js",
      "js-error-handling",
      "clean-code-practices",
      "pattern-state",
      "test-pyramid-unit-tests"
    ],
    "mentions": [
      "js-object-methods",
      "js-array-transform",
      "js-pure-functions",
      "oop-four-pillars"
    ]
  },
  "redis-modules-stack": {
    "links": [
      "redis-basics",
      "mongodb-security",
      "redis-persistence-ha",
      "elasticsearch-inverted-index",
      "vector-db",
      "bloom-filter",
      "count-min-sketch",
      "valkey-vs-redis",
      "redis-memory-eviction",
      "redis-cluster"
    ],
    "mentions": [
      "db-type-time-series",
      "opensearch-cluster-operations",
      "db-locking-deadlock",
      "event-loop",
      "db-transaction-isolation",
      "rag-classic-pipeline"
    ]
  },
  "ts-decorators": {
    "links": [
      "pattern-decorator",
      "ts-classes-access-modifiers",
      "nodejs-web-frameworks",
      "linters-formatters",
      "frontend-build-tooling"
    ],
    "mentions": [
      "tsconfig-strict",
      "pattern-proxy",
      "spring-ioc-di",
      "js-object-methods",
      "fp-composition-pipe",
      "js-first-class-callbacks",
      "bundler-basics",
      "design-patterns-overview"
    ]
  },
  "wan-mpls-sd-wan-vrf": {
    "links": [
      "vpn-ipsec-wireguard",
      "bgp-basics",
      "traffic-shaping-qos",
      "vlan-basics",
      "layer-mtu-fragmentation",
      "vpc-peering-transit-privatelink",
      "zero-trust-architecture"
    ],
    "mentions": [
      "cloud-deployment-models-multicloud",
      "layer-ip-routing-icmp",
      "layer-ip-addressing",
      "what-happens-google-com",
      "cloud-service-models-shared-responsibility",
      "routing-protocols-ospf-rip-eigrp",
      "sdn-vxlan-overlay",
      "first-page-from-power-on",
      "vpc-basics",
      "dns"
    ]
  },
  "wifi-design-channels-roaming": {
    "links": [
      "wifi-standards-security",
      "iot-mobile-wireless-links"
    ],
    "mentions": [
      "enterprise-auth-ldap-kerberos"
    ]
  },
  "wifi-standards-security": {
    "links": [
      "wifi-design-channels-roaming",
      "iot-mobile-wireless-links",
      "first-page-from-power-on",
      "layer-link-ethernet-arp",
      "vlan-basics",
      "network-attacks-l2-l3",
      "nat-traversal",
      "https-tls",
      "vpn-ipsec-wireguard"
    ],
    "mentions": [
      "enterprise-auth-ldap-kerberos",
      "what-happens-google-com",
      "dhcp",
      "dns"
    ]
  },
  "actor-model": {
    "links": [
      "deadlocks",
      "go-concurrency-basics",
      "race-conditions",
      "backpressure"
    ],
    "mentions": [
      "abort-controller",
      "tcp-reliability-congestion",
      "mutex-semaphore-monitor",
      "http-methods"
    ]
  },
  "backend-language-comparison": {
    "links": [
      "go-concurrency-basics",
      "java-jvm-memory-gc",
      "nodejs-server-runtime",
      "cold-starts",
      "spring-data-repositories",
      "nodejs-cli-process",
      "nodejs-debugging-profiling"
    ],
    "mentions": [
      "js-async-await",
      "dockerfile-image-layers",
      "k8s-pod-resources",
      "fastapi-basics",
      "react-state-snapshot-batching",
      "autoscaling",
      "garbage-collection",
      "deadlocks",
      "latency-bandwidth-throughput",
      "event-loop",
      "js-memory-leak",
      "model-serving",
      "code-review-practices",
      "spring-boot-auto-configuration",
      "spring-ioc-di",
      "connection-pool",
      "gateway"
    ]
  },
  "cross-platform-apps": {
    "links": [
      "pwa-install-offline",
      "frontend-monorepo",
      "xss",
      "web-security-headers"
    ],
    "mentions": [
      "css-flexbox-grid",
      "event-loop",
      "what-happens-google-com"
    ]
  },
  "css-color-background": {
    "links": [
      "css-custom-properties",
      "web-accessibility",
      "css-sticky-scroll-snap",
      "animation-performance",
      "browser-rendering-pipeline",
      "css-position-stacking-context"
    ],
    "mentions": [
      "frontend-testing-strategy",
      "what-happens-google-com",
      "smoke-sanity-regression-testing",
      "design-system-building",
      "scroll-patterns-overview",
      "parallax-scrollytelling"
    ]
  },
  "elasticsearch-bulk-indexing": {
    "links": [
      "elasticsearch-inverted-index",
      "optimistic-locking",
      "backpressure",
      "elasticsearch-mapping",
      "elk-stack-basics",
      "elasticsearch-snapshot-dr"
    ],
    "mentions": [
      "sd-mq-storage-partitions",
      "http-streaming-sse",
      "resilience-patterns",
      "page-cache-disk-io",
      "cdc-change-data-capture",
      "http-methods"
    ]
  },
  "elasticsearch-snapshot-dr": {
    "links": [
      "backup-strategy",
      "elasticsearch-inverted-index",
      "elasticsearch-bulk-indexing",
      "elasticsearch-mapping",
      "elk-stack-basics",
      "opensearch-cluster-operations",
      "disaster-recovery"
    ],
    "mentions": [
      "s3-storage-classes-lifecycle",
      "sd-mq-storage-partitions",
      "sd-object-storage-architecture",
      "sd-split-web-and-db",
      "db-replication-sharding",
      "on-call"
    ]
  },
  "frontend-i18n-intl": {
    "links": [
      "global-rollout-localization",
      "js-loops-control-flow",
      "nextjs-route-handlers-proxy",
      "seo-for-spa",
      "nextjs-static-dynamic-rendering",
      "hydration",
      "css-flexbox-grid"
    ],
    "mentions": [
      "js-truthy-falsy-typeof",
      "nextjs-app-router-routing",
      "code-splitting",
      "rendering-strategies",
      "ts-narrowing",
      "react-server-components",
      "db-modeling-normalization"
    ]
  },
  "git-hooks": {
    "links": [
      "git-tips-advanced",
      "git-staging-area",
      "git-large-files-secrets",
      "github-repo-governance"
    ],
    "mentions": [
      "git-branching-strategy",
      "webhooks"
    ]
  },
  "github-apps-api": {
    "links": [
      "github-repo-governance",
      "webhooks",
      "oauth",
      "secrets-management",
      "rate-limiting-in-practice",
      "graphql-basics",
      "graphql-pagination-connections",
      "api-pagination-sorting",
      "npm-package-publishing"
    ],
    "mentions": [
      "github-actions-docker-ecr",
      "rest-api-design",
      "token-login",
      "resilience-patterns",
      "http-caching-cdn"
    ]
  },
  "js-binary-data-typed-arrays": {
    "links": [
      "bit-manipulation",
      "character-encoding-unicode",
      "web-workers",
      "js-shallow-deep-copy",
      "web-security-headers",
      "js-loops-control-flow"
    ],
    "mentions": [
      "realtime-communication",
      "cpu-pipelining-branch-prediction",
      "js-numbers-bigint",
      "cors"
    ]
  },
  "js-loops-control-flow": {
    "links": [
      "js-async-await",
      "js-iterators-generators",
      "js-array-transform",
      "js-var-let-const",
      "js-object-methods",
      "js-prototype-chain",
      "js-binary-data-typed-arrays",
      "js-strings-unicode",
      "js-equality-coercion",
      "js-map-set-weak",
      "ts-narrowing",
      "frontend-i18n-intl",
      "clean-code-practices",
      "js-short-circuit",
      "performance-metrics-measurement"
    ],
    "mentions": [
      "linters-formatters",
      "js-function-forms",
      "event-loop",
      "two-pointers-pattern",
      "tcp-reliability-congestion",
      "bundler-basics",
      "js-closures",
      "js-hoisting-tdz"
    ]
  },
  "memory-safety-buffer-overflow": {
    "links": [
      "logic-gates-alu",
      "cpu-instruction-cycle",
      "virtual-memory-paging"
    ],
    "mentions": [
      "js-execution-context",
      "js-memory-leak",
      "postgres-slow-db-triage",
      "js-var-let-const"
    ]
  },
  "nodejs-cli-process": {
    "links": [
      "nodejs-error-handling",
      "nodejs-fs-streams"
    ],
    "mentions": [
      "js-async-await",
      "os-kernel-system-calls",
      "centralized-logging-pipeline",
      "event-loop"
    ]
  },
  "npm-package-publishing": {
    "links": [
      "semantic-versioning",
      "dependency-hell",
      "js-es-modules",
      "git-large-files-secrets",
      "pattern-singleton",
      "frontend-monorepo"
    ],
    "mentions": [
      "tsconfig-strict",
      "github-actions-docker-ecr",
      "git-ignore-config",
      "build-caching",
      "container-supply-chain-security",
      "linters-formatters",
      "bash-scripting",
      "code-splitting",
      "software-supply-chain-ci-hardening",
      "ds-graph-bfs-dfs",
      "js-pure-functions",
      "api-versioning"
    ]
  },
  "reactive-programming": {
    "links": [
      "debounce-throttle",
      "js-memory-leak",
      "pattern-observer",
      "client-data-cache",
      "backpressure",
      "spring-mvc-request-lifecycle",
      "java-jvm-memory-gc"
    ],
    "mentions": [
      "deadlocks",
      "event-loop",
      "code-review-practices",
      "abort-controller",
      "kafka-basics"
    ]
  },
  "sdlc-models-agile-scrum": {
    "links": [
      "tdd-bdd-atdd",
      "ci-cd-basics",
      "git-branching-strategy",
      "test-design-techniques",
      "architecture-docs-c4-adr"
    ],
    "mentions": [
      "security-testing-sast-dast",
      "k8s-deploy-pipeline-eks",
      "smoke-sanity-regression-testing",
      "latency-bandwidth-throughput",
      "code-review-practices"
    ]
  },
  "spring-data-repositories": {
    "links": [
      "jpa-persistence-context",
      "jpa-entity-relationships",
      "spring-boot-auto-configuration",
      "ddd-tactical-patterns",
      "mongodb-document-model",
      "mongodb-indexes-explain",
      "spring-boot-testing"
    ],
    "mentions": [
      "spring-boot-4-migration",
      "sql-query-rewrite",
      "optimistic-locking",
      "loading-patterns",
      "ddd-bounded-context",
      "pattern-proxy"
    ]
  },
  "uml-diagrams": {
    "links": [
      "architecture-docs-c4-adr",
      "coupling-cohesion-principles",
      "oop-four-pillars",
      "ddd-tactical-patterns",
      "distributed-tracing",
      "pattern-state"
    ],
    "mentions": [
      "jpa-entity-relationships",
      "ddd-bounded-context",
      "resilience-patterns"
    ]
  },
  "ai-coding-agents": {
    "links": [
      "claude-code-fundamentals-map",
      "llm-basics-for-developers",
      "llm-api-integration",
      "claude-code-context-window",
      "claude-code-project-structure",
      "claude-code-extensions",
      "code-review-practices",
      "git-large-files-secrets",
      "mcp-protocol",
      "claude-code-parallel-and-scheduled"
    ],
    "mentions": [
      "js-async-await",
      "system-prompt-design",
      "llm-app-security-guardrails",
      "tdd-bdd-atdd",
      "thread-safety",
      "agent-tool-design"
    ]
  },
  "aws-s3-in-practice": {
    "links": [
      "s3-storage-classes-lifecycle",
      "block-file-object-storage",
      "sd-object-storage-architecture",
      "iam-basics",
      "cors",
      "http-caching-cdn",
      "sd-object-storage-versioning-multipart"
    ],
    "mentions": [
      "serverless-limits",
      "rendering-csr-spa",
      "optimistic-locking",
      "db-consistency-cap",
      "api-key-hmac-auth",
      "what-happens-google-com"
    ]
  },
  "block-file-object-storage": {
    "links": [
      "virtualization-hypervisors",
      "aws-s3-in-practice",
      "s3-storage-classes-lifecycle",
      "sd-object-storage-architecture",
      "page-cache-disk-io",
      "backup-strategy",
      "k8s-pv-pvc",
      "rds-aurora-managed-db"
    ],
    "mentions": [
      "serverless-limits",
      "db-type-wide-column",
      "ec2-instance-types-launch-templates",
      "k8s-cri-cni-csi",
      "optimistic-locking",
      "db-replication-sharding",
      "sd-start-single-server",
      "latency-bandwidth-throughput",
      "db-type-embedded",
      "linux-disks-filesystems",
      "kafka-basics",
      "security-groups-nacl",
      "vpc-basics",
      "message-queue-basics"
    ]
  },
  "cloud-deployment-models-multicloud": {
    "links": [
      "multi-region",
      "vpn-ipsec-wireguard",
      "virtualization-hypervisors",
      "cloud-cost-optimization",
      "vpc-peering-transit-privatelink",
      "sso-saml-oidc",
      "disaster-recovery",
      "iac-basics",
      "high-availability"
    ],
    "mentions": [
      "route53-routing-policies",
      "github-actions-docker-ecr",
      "observability-basics",
      "terraform-basics",
      "failover",
      "k8s-deploy-pipeline-eks",
      "db-type-key-value",
      "docker-container-basics",
      "layer-ip-routing-icmp",
      "sd-object-storage-architecture",
      "kafka-basics",
      "security-groups-nacl",
      "osi-in-practice",
      "layer-ip-addressing",
      "bgp-basics",
      "eks-cluster-basics",
      "vpc-basics",
      "layer-mtu-fragmentation",
      "dns"
    ]
  },
  "complexity-classes-p-np": {
    "links": [
      "big-o-notation",
      "bit-manipulation",
      "dynamic-programming",
      "shortest-path-algorithms",
      "ds-graph-bfs-dfs",
      "max-flow-bipartite-matching",
      "minimum-spanning-tree"
    ],
    "mentions": [
      "sd-interview-framework",
      "js-array-transform",
      "message-delivery-semantics",
      "binary-search",
      "sd-maps-tiles-routing",
      "sd-video-upload-transcoding",
      "recursion-backtracking"
    ]
  },
  "container-orchestration-choices": {
    "links": [
      "docker-compose",
      "k8s-learning-roadmap",
      "k8s-controllers-reconcile",
      "k8s-pod-resources",
      "k8s-pod-scheduling",
      "rolling-deployment",
      "serverless-architecture",
      "k8s-security-context",
      "k8s-crd",
      "k8s-operators",
      "kubeadm-cluster-setup"
    ],
    "mentions": [
      "k8s-pod-probes",
      "docker-container-basics",
      "kubernetes-ingress",
      "ecs-fargate-task-service",
      "k8s-pod-basics",
      "k8s-configmap",
      "k8s-deployment",
      "k8s-daemonset",
      "k8s-architecture",
      "helm-basics",
      "sd-start-single-server",
      "cold-starts",
      "autoscaling",
      "rollback-strategy",
      "osi-in-practice",
      "redis-basics",
      "what-happens-google-com",
      "local-k8s-kind-minikube",
      "db-type-key-value",
      "eks-cluster-basics",
      "layer-mtu-fragmentation",
      "dns",
      "webhooks"
    ]
  },
  "divide-and-conquer": {
    "links": [
      "sorting-algorithms",
      "recursion-backtracking",
      "dynamic-programming",
      "randomized-algorithms",
      "quadtree",
      "ds-heap",
      "percentile-latency"
    ],
    "mentions": [
      "binary-search",
      "http-status-codes"
    ]
  },
  "enterprise-auth-ldap-kerberos": {
    "links": [
      "sso-saml-oidc",
      "https-tls",
      "cookie-session-login",
      "token-login",
      "clock-skew",
      "zero-trust-architecture"
    ],
    "mentions": [
      "packet-capture-tcpdump",
      "sql-injection",
      "webhooks",
      "what-happens-google-com",
      "vlan-basics",
      "udp-and-quic"
    ]
  },
  "js-runtimes-node-deno-bun": {
    "links": [
      "nodejs-server-runtime",
      "nodejs-web-frameworks",
      "bundler-basics",
      "dependency-hell"
    ],
    "mentions": [
      "js-memory-leak",
      "software-supply-chain-ci-hardening",
      "cold-starts",
      "floating-point-numbers"
    ]
  },
  "kubeadm-cluster-setup": {
    "links": [
      "k8s-architecture",
      "k8s-certificates-pki",
      "k8s-cluster-upgrade",
      "k8s-cni-pod-network",
      "k8s-rbac",
      "raft-consensus",
      "k8s-etcd-backup",
      "k8s-node-maintenance",
      "eks-cluster-basics",
      "local-k8s-kind-minikube"
    ],
    "mentions": [
      "k8s-pod-disruption-budget",
      "gateway-link-redundancy-fhrp-lacp",
      "iptables-nat",
      "k8s-daemonset",
      "k8s-configmap",
      "osi-in-practice",
      "cors",
      "iptables-basics",
      "container-orchestration-choices",
      "health-checks",
      "k8s-coredns",
      "kubernetes-ingress",
      "cilium-ebpf",
      "k8s-pod-scheduling",
      "db-type-key-value",
      "aws-ec2-ubuntu-server-setup",
      "dns"
    ]
  },
  "max-flow-bipartite-matching": {
    "links": [
      "ds-graph-bfs-dfs",
      "complexity-classes-p-np"
    ],
    "mentions": []
  },
  "multi-tenancy-isolation": {
    "links": [
      "postgres-roles-security",
      "multi-region",
      "rate-limiting-in-practice",
      "performance-antipatterns",
      "connection-pool",
      "rate-limiting-algorithms",
      "queue-based-load-leveling",
      "cloud-cost-optimization",
      "zero-downtime-migrations"
    ],
    "mentions": [
      "rendering-ssr",
      "data-warehouse-architecture",
      "db-architecture-by-scale",
      "gateway",
      "sd-object-storage-architecture",
      "iam-basics",
      "db-replication-sharding",
      "sql-batch-timeout-pool",
      "db-transaction-isolation",
      "redis-basics",
      "cloud-service-models-shared-responsibility",
      "mutex-semaphore-monitor",
      "sd-load-balancer-stateless",
      "token-login"
    ]
  },
  "netconf-restconf-yang": {
    "links": [
      "ansible-network-automation",
      "network-config-cicd",
      "network-monitoring",
      "terraform-network-iac"
    ],
    "mentions": [
      "grpc",
      "http-methods",
      "terraform-basics",
      "db-type-time-series",
      "vlan-basics",
      "bgp-basics",
      "acid-transactions",
      "layer-mtu-fragmentation"
    ]
  },
  "performance-antipatterns": {
    "links": [
      "n-plus-one-queries",
      "connection-pool",
      "retries",
      "tail-latency",
      "postgres-functions-triggers",
      "event-loop",
      "queue-based-load-leveling",
      "timeouts",
      "linux-network-tuning",
      "nodejs-http-clients",
      "db-architecture-by-scale",
      "caching-strategies",
      "cache-invalidation",
      "k8s-pod-resources",
      "multi-tenancy-isolation",
      "exponential-backoff-jitter",
      "load-testing-k6",
      "nodejs-debugging-profiling",
      "linux-performance-triage"
    ],
    "mentions": [
      "serverless-limits",
      "https-tls",
      "api-scaling-ladder",
      "graphql-basics",
      "microservices",
      "resilience-patterns",
      "java-jvm-memory-gc",
      "sd-object-storage-architecture",
      "sd-start-single-server",
      "autoscaling",
      "db-type-relational",
      "db-replication-sharding",
      "pattern-proxy",
      "vpc-basics",
      "sql-batch-timeout-pool",
      "ports-and-sockets",
      "postgres-architecture",
      "redis-basics",
      "cloud-service-models-shared-responsibility",
      "sd-db-replication-intro",
      "sd-load-balancer-stateless",
      "postgres-getting-started",
      "sql-query-rewrite"
    ]
  },
  "plugin-microkernel-architecture": {
    "links": [
      "layered-architecture",
      "hexagonal-architecture",
      "dependency-hell",
      "event-loop",
      "architecture-patterns-overview"
    ],
    "mentions": [
      "linters-formatters",
      "ds-graph-bfs-dfs",
      "db-transaction-isolation"
    ]
  },
  "queue-based-load-leveling": {
    "links": [
      "message-queue-basics",
      "backpressure",
      "dead-letter-queue",
      "performance-antipatterns",
      "retries",
      "transactional-outbox",
      "long-polling",
      "webhooks",
      "server-sent-events",
      "bullmq-job-queue",
      "autoscaling",
      "k8s-hpa",
      "ds-heap",
      "multi-tenancy-isolation",
      "kafka-basics",
      "message-delivery-semantics",
      "idempotency-key"
    ],
    "mentions": [
      "realtime-communication",
      "rabbitmq-basics",
      "pub-sub",
      "latency-bandwidth-throughput",
      "sql-batch-timeout-pool",
      "redis-basics",
      "resilience-patterns",
      "caching-strategies",
      "http-methods",
      "dns"
    ]
  },
  "randomized-algorithms": {
    "links": [
      "sorting-algorithms",
      "divide-and-conquer",
      "ds-hash-map"
    ],
    "mentions": [
      "hyperloglog",
      "js-numbers-bigint",
      "sd-latency-numbers",
      "ab-testing",
      "stream-processing",
      "bloom-filter",
      "cookie-session-login"
    ]
  },
  "s3-storage-classes-lifecycle": {
    "links": [
      "aws-s3-in-practice",
      "block-file-object-storage",
      "cloud-cost-optimization",
      "sd-object-storage-versioning-multipart",
      "backup-strategy",
      "multi-region",
      "disaster-recovery"
    ],
    "mentions": [
      "serverless-limits",
      "queue-based-load-leveling",
      "centralized-logging-pipeline",
      "data-privacy-compliance",
      "aws-core-services-map"
    ]
  },
  "soap-and-soa": {
    "links": [
      "rest-api-design",
      "grpc",
      "api-test-automation",
      "sso-saml-oidc",
      "enterprise-system-integration",
      "event-driven-architecture",
      "microservices",
      "api-gateway-use-cases"
    ],
    "mentions": [
      "ddd-bounded-context",
      "gateway",
      "character-encoding-unicode",
      "reverse-proxy-lb-api-gateway",
      "service-mesh",
      "floating-point-numbers",
      "http-status-codes",
      "sd-email-protocols"
    ]
  },
  "terraform-dependency-graph-lifecycle": {
    "links": [
      "terraform-basics",
      "terraform-modules-tfvars",
      "terraform-network-iac",
      "terraform-testing-policy-scanning",
      "terraform-state-refactoring-import",
      "terraform-hcl-expressions-data-sources",
      "iac-basics",
      "ansible-network-automation"
    ],
    "mentions": [
      "service-discovery",
      "k8s-deploy-pipeline-eks",
      "ec2-instance-types-launch-templates",
      "iam-basics",
      "autoscaling",
      "security-groups-nacl",
      "osi-in-practice",
      "vpc-basics",
      "db-modeling-normalization",
      "dns"
    ]
  },
  "terraform-hcl-expressions-data-sources": {
    "links": [
      "terraform-modules-tfvars",
      "terraform-dependency-graph-lifecycle",
      "terraform-network-iac",
      "terraform-state-refactoring-import"
    ],
    "mentions": [
      "terraform-basics",
      "ec2-instance-types-launch-templates",
      "autoscaling",
      "security-principles-cia-defense-in-depth",
      "security-groups-nacl",
      "layer-ip-addressing",
      "vpc-basics"
    ]
  },
  "terraform-state-refactoring-import": {
    "links": [
      "terraform-basics",
      "terraform-modules-tfvars",
      "terraform-dependency-graph-lifecycle",
      "terraform-hcl-expressions-data-sources"
    ],
    "mentions": [
      "terraform-team-workflow-hcp-terragrunt",
      "s3-storage-classes-lifecycle",
      "db-type-key-value",
      "iam-basics",
      "network-config-cicd",
      "vpc-basics",
      "dns"
    ]
  },
  "terraform-testing-policy-scanning": {
    "links": [
      "terraform-network-iac",
      "network-config-cicd",
      "terraform-hcl-expressions-data-sources",
      "terraform-dependency-graph-lifecycle",
      "terraform-modules-tfvars",
      "cloud-cost-optimization"
    ],
    "mentions": [
      "terraform-basics",
      "terraform-team-workflow-hcp-terragrunt",
      "github-repo-governance",
      "dockerfile-image-layers",
      "test-pyramid-unit-tests",
      "docker-container-basics",
      "nodejs-orm-query-builder",
      "smoke-sanity-regression-testing",
      "sd-split-web-and-db",
      "iam-basics",
      "input-validation-secure-coding",
      "api-versioning",
      "security-groups-nacl",
      "layer-ip-addressing",
      "vpc-basics"
    ]
  },
  "virtualization-hypervisors": {
    "links": [
      "linux-namespaces-cgroups",
      "block-file-object-storage",
      "virtual-memory-paging",
      "high-availability",
      "docker-container-basics",
      "cold-starts"
    ],
    "mentions": [
      "ec2-instance-types-launch-templates",
      "multi-tenancy-isolation",
      "k8s-security-context",
      "os-kernel-system-calls",
      "security-groups-nacl",
      "eks-cluster-basics",
      "vpc-basics",
      "layer-link-ethernet-arp"
    ]
  },
  "web-server-vs-was": {
    "links": [
      "nginx-basics",
      "nginx-reverse-proxy",
      "proxy-reverse-proxy",
      "process-vs-thread",
      "nginx-https-performance",
      "java-jvm-memory-gc",
      "load-balancer-basics"
    ],
    "mentions": [
      "streaming-ssr-suspense",
      "osi-in-practice",
      "os-kernel-system-calls",
      "kubernetes-ingress",
      "reverse-proxy-lb-api-gateway",
      "sd-start-single-server",
      "deadlocks",
      "event-loop",
      "sql-batch-timeout-pool",
      "what-happens-google-com",
      "go-concurrency-basics",
      "dns"
    ]
  },
  "docker-runtime-security": {
    "links": [
      "linux-namespaces-cgroups",
      "k8s-security-context",
      "k8s-pod-security-admission",
      "seccomp-apparmor",
      "dockerfile-image-layers"
    ],
    "mentions": [
      "docker-container-basics",
      "proxy-reverse-proxy",
      "linux-files-permissions",
      "os-kernel-system-calls",
      "threat-modeling-stride",
      "security-principles-cia-defense-in-depth"
    ]
  },
  "ec2-instance-types-launch-templates": {
    "links": [
      "cloud-cost-optimization",
      "aws-ec2-ubuntu-server-setup",
      "ecs-fargate-task-service",
      "ansible-network-automation"
    ],
    "mentions": [
      "config-management-tools",
      "sd-start-single-server",
      "autoscaling",
      "security-groups-nacl",
      "vim-for-servers",
      "ipv6-basics"
    ]
  },
  "ecs-fargate-task-service": {
    "links": [
      "eks-cluster-basics",
      "docker-container-basics",
      "iam-basics",
      "ec2-instance-types-launch-templates",
      "blue-green-deployment",
      "autoscaling"
    ],
    "mentions": [
      "vpc-subnets-route-tables",
      "db-type-key-value",
      "cloud-deployment-models-multicloud",
      "container-orchestration-choices",
      "resilience-patterns",
      "rollback-strategy",
      "security-groups-nacl",
      "osi-in-practice",
      "github-actions-docker-ecr",
      "vpc-basics"
    ]
  },
  "input-validation-secure-coding": {
    "links": [
      "xss",
      "sql-injection",
      "security-testing-sast-dast",
      "path-traversal-file-upload",
      "regex-and-globbing",
      "authn-vs-authz"
    ],
    "mentions": [
      "character-encoding-unicode",
      "js-prototype-chain",
      "runtime-validation-zod",
      "threat-modeling-stride",
      "api-security-owasp-api-top10",
      "floating-point-numbers",
      "recursion-backtracking",
      "db-modeling-normalization"
    ]
  },
  "path-traversal-file-upload": {
    "links": [
      "input-validation-secure-coding",
      "xss",
      "web-security-headers",
      "sd-video-upload-transcoding"
    ],
    "mentions": [
      "serverless-limits",
      "os-kernel-system-calls",
      "race-conditions",
      "db-modeling-normalization"
    ]
  },
  "security-testing-sast-dast": {
    "links": [
      "sql-injection",
      "software-supply-chain-ci-hardening",
      "xss",
      "secrets-management",
      "git-large-files-secrets",
      "authn-vs-authz",
      "threat-modeling-stride",
      "code-review-practices"
    ],
    "mentions": [
      "vulnerability-management-cve-cvss",
      "web-security-headers",
      "k8s-pod-scheduling"
    ]
  },
  "software-supply-chain-ci-hardening": {
    "links": [
      "container-supply-chain-security",
      "dependency-hell",
      "github-actions-docker-ecr",
      "github-repo-governance"
    ],
    "mentions": [
      "npm-package-publishing",
      "docker-container-basics",
      "frontend-monorepo",
      "security-principles-cia-defense-in-depth",
      "dynamic-programming",
      "security-testing-sast-dast"
    ]
  },
  "threat-modeling-stride": {
    "links": [
      "rate-limiting-in-practice",
      "xss"
    ],
    "mentions": [
      "serverless-limits",
      "block-file-object-storage",
      "security-principles-cia-defense-in-depth",
      "what-happens-google-com"
    ]
  },
  "api-security-owasp-api-top10": {
    "links": [
      "owasp-top-10-map",
      "authn-vs-authz",
      "ssrf",
      "rate-limiting-in-practice",
      "cors",
      "web-security-headers",
      "api-versioning",
      "encryption-in-transit",
      "graphql-schema-type-system"
    ],
    "mentions": [
      "k8s-deploy-pipeline-eks",
      "api-styles-overview",
      "graphql-basics",
      "input-validation-secure-coding",
      "sd-payment-flow",
      "threat-modeling-stride",
      "code-review-practices",
      "js-pure-functions",
      "db-types-overview",
      "runtime-validation-zod",
      "webhooks"
    ]
  },
  "bash-expansions-variables": {
    "links": [
      "bash-scripting",
      "shell-redirection-pipes",
      "bash-control-flow-functions",
      "linux-grep-awk-sed"
    ],
    "mentions": [
      "nginx-basics",
      "shells-posix-compat",
      "js-array-transform"
    ]
  },
  "cloud-service-models-shared-responsibility": {
    "links": [
      "cloud-cost-optimization",
      "aws-ec2-ubuntu-server-setup",
      "ssrf",
      "security-incident-response",
      "serverless-limits",
      "cold-starts",
      "serverless-architecture",
      "iam-basics"
    ],
    "mentions": [
      "container-orchestration-choices",
      "cloud-deployment-models-multicloud",
      "security-compliance-for-developers",
      "rds-aurora-managed-db",
      "db-type-key-value",
      "docker-container-basics",
      "linux-boot-process",
      "aws-core-services-map",
      "virtualization-hypervisors",
      "backup-strategy",
      "autoscaling",
      "security-principles-cia-defense-in-depth",
      "mfa-totp",
      "security-groups-nacl",
      "vpc-basics",
      "sso-saml-oidc",
      "eks-cluster-basics",
      "on-call"
    ]
  },
  "firewall-types-ngfw": {
    "links": [
      "iptables-basics",
      "security-groups-nacl",
      "waf",
      "ids-ips",
      "ddos-protection",
      "proxy-reverse-proxy"
    ],
    "mentions": [
      "sd-start-single-server",
      "encryption-in-transit",
      "what-happens-google-com",
      "cloud-service-models-shared-responsibility",
      "udp-and-quic"
    ]
  },
  "github-actions-workflows": {
    "links": [
      "github-actions-docker-ecr",
      "ci-cd-basics",
      "github-repo-governance",
      "yaml-for-k8s",
      "build-caching",
      "security-incident-response"
    ],
    "mentions": [
      "webhooks"
    ]
  },
  "linux-boot-process": {
    "links": [
      "linux-systemd-systemctl",
      "linux-processes-signals",
      "linux-disks-filesystems"
    ],
    "mentions": [
      "virtualization-hypervisors",
      "client-data-cache",
      "encryption-at-rest"
    ]
  },
  "linux-disks-filesystems": {
    "links": [
      "page-cache-disk-io",
      "linux-files-permissions",
      "linux-boot-process",
      "aws-ec2-ubuntu-server-setup"
    ],
    "mentions": [
      "process-vs-thread",
      "os-kernel-system-calls",
      "ec2-instance-types-launch-templates",
      "dockerfile-image-layers"
    ]
  },
  "linux-users-groups-sudo": {
    "links": [
      "linux-files-permissions",
      "aws-ec2-ubuntu-server-setup",
      "hash-hmac-password-hashing",
      "linux-systemd-systemctl"
    ],
    "mentions": [
      "ssh-in-practice",
      "docker-container-basics",
      "iptables-nat",
      "shell-environment-startup",
      "postgres-architecture"
    ]
  },
  "network-attacks-l2-l3": {
    "links": [
      "layer-link-ethernet-arp",
      "dhcp",
      "dns",
      "zero-trust-architecture",
      "https-tls",
      "token-login",
      "network-flow-logs",
      "security-logging-detection-siem",
      "vlan-basics",
      "security-groups-nacl"
    ],
    "mentions": [
      "virtualization-hypervisors",
      "what-happens-google-com",
      "vpc-basics"
    ]
  },
  "nextjs-app-router-routing": {
    "links": [
      "nextjs-static-dynamic-rendering",
      "react-server-components",
      "nextjs-route-handlers-proxy",
      "streaming-ssr-suspense",
      "react-suspense-error-boundary",
      "react-reconciliation-keys",
      "nextjs-caching-layers",
      "nextjs-parallel-intercepting-routes"
    ],
    "mentions": [
      "frontend-testing-strategy",
      "rendering-csr-spa",
      "rendering-strategies",
      "n-plus-one-queries",
      "shells-posix-compat"
    ]
  },
  "nextjs-caching-layers": {
    "links": [
      "nextjs-static-dynamic-rendering",
      "rendering-ssg-isr",
      "nextjs-server-actions-security",
      "nextjs-route-handlers-proxy"
    ],
    "mentions": [
      "react-server-components",
      "nextjs-app-router-routing",
      "rendering-strategies",
      "sd-start-single-server",
      "js-memoization",
      "redis-basics",
      "js-closures",
      "js-primitive-vs-reference",
      "count-min-sketch",
      "webhooks"
    ]
  },
  "nextjs-parallel-intercepting-routes": {
    "links": [
      "nextjs-app-router-routing",
      "aria-keyboard-focus",
      "nextjs-caching-layers",
      "nextjs-static-dynamic-rendering",
      "streaming-ssr-suspense",
      "nextjs-route-handlers-proxy"
    ],
    "mentions": [
      "react-server-components",
      "frontend-testing-strategy",
      "rendering-strategies",
      "react-suspense-error-boundary",
      "http-status-codes"
    ]
  },
  "nextjs-route-handlers-proxy": {
    "links": [
      "http-status-codes",
      "express-middleware",
      "authn-vs-authz",
      "nextjs-server-actions-security",
      "nextjs-caching-layers",
      "server-sent-events",
      "web-security-headers"
    ],
    "mentions": [
      "nextjs-static-dynamic-rendering",
      "nextjs-self-hosting-deployment",
      "design-system-adoption-governance",
      "proxy-reverse-proxy",
      "ab-testing",
      "rendering-strategies",
      "js-memoization",
      "input-validation-secure-coding",
      "react-server-components",
      "cookie-session-login",
      "count-min-sketch",
      "token-login",
      "webhooks"
    ]
  },
  "nextjs-server-actions-security": {
    "links": [
      "react-server-components",
      "react-forms-actions",
      "csrf",
      "nextjs-route-handlers-proxy",
      "authn-vs-authz",
      "rate-limiting-in-practice",
      "nextjs-caching-layers"
    ],
    "mentions": [
      "proxy-reverse-proxy",
      "rendering-strategies",
      "input-validation-secure-coding",
      "js-memoization",
      "code-review-practices",
      "rolling-deployment",
      "k8s-pod-scheduling",
      "cookie-session-login",
      "js-closures"
    ]
  },
  "security-incident-response": {
    "links": [
      "production-incidents",
      "postmortems",
      "secrets-management",
      "on-call",
      "github-actions-docker-ecr",
      "github-actions-workflows",
      "iam-basics",
      "security-groups-nacl",
      "cloud-service-models-shared-responsibility",
      "backup-strategy"
    ],
    "mentions": [
      "git-large-files-secrets",
      "data-privacy-compliance",
      "sd-start-single-server",
      "autoscaling",
      "osi-in-practice"
    ]
  },
  "security-logging-detection-siem": {
    "links": [
      "structured-logging",
      "centralized-logging-pipeline",
      "k8s-audit-logging",
      "secrets-management"
    ],
    "mentions": [
      "token-login",
      "network-flow-logs",
      "bloom-filter",
      "osi-in-practice",
      "cookie-session-login",
      "ssrf",
      "ansible-network-automation",
      "acid-transactions",
      "db-modeling-normalization"
    ]
  },
  "shell-redirection-pipes": {
    "links": [
      "bash-scripting",
      "bash-control-flow-functions",
      "linux-network-tuning",
      "linux-systemd-systemctl",
      "bash-expansions-variables"
    ],
    "mentions": [
      "os-kernel-system-calls",
      "shells-posix-compat",
      "centralized-logging-pipeline"
    ]
  },
  "vulnerability-management-cve-cvss": {
    "links": [
      "owasp-top-10-map",
      "canary-release",
      "waf",
      "security-logging-detection-siem",
      "container-supply-chain-security"
    ],
    "mentions": [
      "docker-container-basics",
      "sql-injection",
      "cloud-service-models-shared-responsibility"
    ]
  },
  "bash-control-flow-functions": {
    "links": [
      "bash-scripting",
      "shell-environment-startup",
      "regex-and-globbing",
      "linux-files-permissions",
      "linux-grep-awk-sed",
      "secrets-management"
    ],
    "mentions": [
      "shell-redirection-pipes",
      "bash-expansions-variables",
      "js-scope-lexical",
      "shells-posix-compat"
    ]
  },
  "bgp-basics": {
    "links": [
      "route53-routing-policies",
      "layer-ip-routing-icmp",
      "cdn-edge-anycast",
      "vpn-ipsec-wireguard",
      "k8s-service-types",
      "k8s-cni-pod-network"
    ],
    "mentions": [
      "cloud-deployment-models-multicloud",
      "browser-fetch",
      "network-design-three-tier-spine-leaf",
      "routing-protocols-ospf-rip-eigrp",
      "ddos-protection",
      "vlan-basics",
      "ipv6-basics",
      "vpc-basics",
      "dns"
    ]
  },
  "gateway-link-redundancy-fhrp-lacp": {
    "links": [
      "routing-protocols-ospf-rip-eigrp",
      "load-balancer-basics",
      "high-availability",
      "leader-election",
      "network-design-three-tier-spine-leaf",
      "router-vs-switch"
    ],
    "mentions": [
      "layer-link-ethernet-arp",
      "vpc-subnets-route-tables",
      "browser-fetch",
      "docker-network-drivers",
      "packet-capture-tcpdump",
      "layer-ip-routing-icmp",
      "sd-start-single-server",
      "cdn-edge-anycast",
      "dhcp",
      "vlan-basics",
      "ipv6-basics"
    ]
  },
  "mongodb-aggregation-pipeline": {
    "links": [
      "mongodb-document-model",
      "mongodb-indexes-explain",
      "mongodb-replica-set-sharding"
    ],
    "mentions": [
      "db-index-design",
      "db-type-relational"
    ]
  },
  "mongodb-indexes-explain": {
    "links": [
      "mongodb-document-model",
      "elasticsearch-inverted-index",
      "geohash",
      "mongodb-aggregation-pipeline",
      "mongodb-replica-set-sharding"
    ],
    "mentions": [
      "opensearch-cluster-operations",
      "sd-proximity-service",
      "postgres-query-planner",
      "db-index-design",
      "db-type-relational",
      "db-replication-sharding",
      "quadtree",
      "dns"
    ]
  },
  "mongodb-replica-set-sharding": {
    "links": [
      "mongodb-document-model",
      "db-replication-sharding",
      "idempotency-key",
      "disaster-recovery",
      "mongodb-indexes-explain",
      "mongodb-aggregation-pipeline"
    ],
    "mentions": [
      "sd-sharding-intro",
      "scaling-horizontal-vertical",
      "vpc-basics",
      "resilience-patterns",
      "http-methods"
    ]
  },
  "network-design-three-tier-spine-leaf": {
    "links": [
      "router-vs-switch",
      "routing-protocols-ospf-rip-eigrp",
      "gateway-link-redundancy-fhrp-lacp",
      "sdn-vxlan-overlay",
      "high-availability",
      "vpc-peering-transit-privatelink",
      "vpc-basics",
      "vpc-subnets-route-tables"
    ],
    "mentions": [
      "layer-ip-routing-icmp",
      "bgp-basics",
      "leader-election",
      "microservices",
      "sd-object-storage-durability",
      "cdn-edge-anycast",
      "load-balancer-basics",
      "vlan-basics",
      "layer-ip-addressing",
      "udp-and-quic",
      "dns"
    ]
  },
  "nextjs-self-hosting-deployment": {
    "links": [
      "code-splitting",
      "dockerfile-image-layers",
      "nextjs-static-dynamic-rendering",
      "rendering-csr-spa",
      "rendering-ssg-isr",
      "frontend-error-tracking",
      "otel-collector-pipeline",
      "distributed-tracing",
      "js-memory-leak",
      "garbage-collection",
      "streaming-ssr-suspense",
      "k8s-pod-lifecycle"
    ],
    "mentions": [
      "nextjs-route-handlers-proxy",
      "observability-basics",
      "docker-commands-workflow",
      "k8s-pod-resources",
      "nextjs-parallel-intercepting-routes",
      "rendering-strategies",
      "frontend-hosting-platforms",
      "proxy-reverse-proxy",
      "cpu-cache-hierarchy",
      "cache-invalidation",
      "autoscaling",
      "service-mesh",
      "rolling-deployment",
      "react-server-components",
      "osi-in-practice",
      "redis-basics",
      "frontend-monorepo",
      "js-runtimes-node-deno-bun",
      "frontend-build-tooling",
      "js-closures"
    ]
  },
  "postgres-slow-db-triage": {
    "links": [
      "sql-query-tuning",
      "db-locking-deadlock",
      "linux-performance-triage",
      "postgres-mvcc-vacuum",
      "nodejs-debugging-profiling",
      "cilium-ebpf"
    ],
    "mentions": [
      "pessimistic-locking",
      "sd-latency-numbers",
      "os-kernel-system-calls",
      "page-cache-disk-io",
      "linux-systemd-systemctl",
      "db-replication-sharding",
      "postgres-getting-started"
    ]
  },
  "react-client-routing": {
    "links": [
      "rendering-csr-spa",
      "react-suspense-error-boundary",
      "react-forms-actions",
      "client-data-cache",
      "code-splitting",
      "spa-auth-token-storage",
      "nextjs-self-hosting-deployment",
      "nextjs-static-dynamic-rendering",
      "react-server-components"
    ],
    "mentions": [
      "http-caching-cdn",
      "data-fetching-optimization",
      "nextjs-app-router-routing",
      "react-useeffect",
      "rendering-strategies",
      "frontend-hosting-platforms",
      "db-modeling-normalization"
    ]
  },
  "route53-routing-policies": {
    "links": [
      "dns",
      "failover",
      "multi-region",
      "vpc-basics",
      "health-checks",
      "cdn-edge-anycast",
      "bgp-basics",
      "canary-release",
      "vpn-ipsec-wireguard"
    ],
    "mentions": [
      "rate-limiting-in-practice",
      "service-mesh",
      "http-versions",
      "security-groups-nacl",
      "osi-in-practice",
      "what-happens-google-com",
      "layer-ip-addressing",
      "udp-and-quic"
    ]
  },
  "routing-protocols-ospf-rip-eigrp": {
    "links": [
      "layer-ip-routing-icmp",
      "router-vs-switch",
      "shortest-path-algorithms",
      "network-design-three-tier-spine-leaf",
      "cdn-edge-anycast",
      "gateway-link-redundancy-fhrp-lacp"
    ],
    "mentions": [
      "iptables-basics",
      "bgp-basics",
      "layer-ip-addressing",
      "sd-maps-tiles-routing",
      "security-groups-nacl",
      "vlan-basics",
      "ipv6-basics",
      "sd-email-protocols",
      "sd-video-streaming-cost",
      "layer-mtu-fragmentation",
      "dns"
    ]
  },
  "security-principles-cia-defense-in-depth": {
    "links": [
      "owasp-top-10-map",
      "zero-trust-architecture",
      "authn-vs-authz",
      "encryption-in-transit",
      "encryption-at-rest",
      "hash-hmac-password-hashing",
      "ddos-protection",
      "backup-strategy",
      "high-availability",
      "k8s-security-context",
      "security-groups-nacl",
      "sql-injection",
      "k8s-audit-logging",
      "iam-basics",
      "postgres-roles-security",
      "k8s-rbac",
      "linux-namespaces-cgroups",
      "seccomp-apparmor",
      "k8s-network-policy",
      "secrets-management",
      "waf"
    ],
    "mentions": [
      "gateway",
      "k8s-deploy-pipeline-eks",
      "threat-modeling-stride",
      "sd-start-single-server",
      "ssrf",
      "os-kernel-system-calls",
      "input-validation-secure-coding",
      "sso-saml-oidc"
    ]
  },
  "shell-environment-startup": {
    "links": [
      "bash-control-flow-functions",
      "bash-scripting",
      "secrets-management",
      "linux-files-permissions",
      "cron-jobs",
      "linux-systemd-systemctl"
    ],
    "mentions": [
      "k8s-configmap",
      "docker-container-basics",
      "linux-users-groups-sudo",
      "ds-hash-map",
      "python-essentials-for-backend",
      "shells-posix-compat"
    ]
  },
  "ts-classes-access-modifiers": {
    "links": [
      "js-classes",
      "ts-type-system-basics",
      "ts-enum-vs-union",
      "pattern-template-method",
      "tsconfig-strict",
      "pattern-strategy",
      "design-patterns-overview"
    ],
    "mentions": [
      "nodejs-web-frameworks",
      "spring-ioc-di",
      "react-suspense-error-boundary",
      "character-encoding-unicode",
      "oop-four-pillars"
    ]
  },
  "browser-devtools-debugging": {
    "links": [
      "js-memory-leak",
      "nodejs-debugging-profiling",
      "frontend-error-tracking",
      "abort-controller",
      "frontend-browser-cache",
      "curl-for-debugging",
      "js-closures",
      "js-microtask-macrotask",
      "core-web-vitals",
      "dom-basics",
      "performance-metrics-measurement",
      "react-rerender",
      "browser-storage",
      "pwa-install-offline"
    ],
    "mentions": [
      "logging-tools-overview",
      "https-tls",
      "csrf",
      "event-loop",
      "race-conditions",
      "dns"
    ]
  },
  "character-encoding-unicode": {
    "links": [
      "js-strings-unicode",
      "postgres-data-types",
      "mysql-innodb-basics",
      "http-message",
      "html-form-http",
      "base64"
    ],
    "mentions": [
      "path-traversal-file-upload",
      "bash-scripting",
      "upper-layers-session-presentation-app",
      "bit-manipulation",
      "db-modeling-normalization"
    ]
  },
  "cpu-scheduling-interrupts": {
    "links": [
      "process-vs-thread",
      "mutex-semaphore-monitor",
      "k8s-pod-resources",
      "linux-namespaces-cgroups",
      "tail-latency",
      "linux-performance-triage"
    ],
    "mentions": [
      "virtual-memory-paging",
      "ds-binary-tree-bst",
      "k8s-architecture",
      "virtualization-hypervisors",
      "os-kernel-system-calls"
    ]
  },
  "floating-point-numbers": {
    "links": [
      "js-numbers-bigint",
      "postgres-data-types",
      "process-vs-thread"
    ],
    "mentions": [
      "js-binary-data-typed-arrays",
      "sd-latency-numbers",
      "input-validation-secure-coding",
      "postgres-query-planner"
    ]
  },
  "html-form-validation": {
    "links": [
      "html-form-http",
      "react-forms-actions",
      "js-numbers-bigint"
    ],
    "mentions": [
      "sd-payment-flow",
      "frontend-state-architecture"
    ]
  },
  "js-error-handling": {
    "links": [
      "nodejs-error-handling",
      "frontend-error-tracking",
      "js-numbers-bigint",
      "react-suspense-error-boundary",
      "js-async-await",
      "fp-functors-monads-js"
    ],
    "mentions": [
      "js-promise-combinators",
      "linters-formatters",
      "event-loop",
      "input-validation-secure-coding",
      "http-status-codes",
      "js-hoisting-tdz"
    ]
  },
  "js-numbers-bigint": {
    "links": [
      "floating-point-numbers",
      "js-equality-coercion",
      "js-error-handling"
    ],
    "mentions": [
      "json-crud-http",
      "js-binary-data-typed-arrays",
      "sd-latency-numbers",
      "bit-manipulation",
      "js-truthy-falsy-typeof"
    ]
  },
  "js-strings-unicode": {
    "links": [
      "js-template-literals",
      "js-equality-coercion",
      "character-encoding-unicode",
      "js-iterators-generators",
      "js-primitive-vs-reference",
      "js-array-mutation"
    ],
    "mentions": [
      "js-spread-rest"
    ]
  },
  "mutex-semaphore-monitor": {
    "links": [
      "race-conditions",
      "thread-safety",
      "deadlocks",
      "process-vs-thread",
      "connection-pool",
      "backpressure",
      "cpu-scheduling-interrupts",
      "distributed-lock"
    ],
    "mentions": [
      "sd-queue-logging-automation",
      "os-kernel-system-calls",
      "cpu-cache-hierarchy",
      "sd-maps-tiles-routing",
      "sql-batch-timeout-pool",
      "redis-basics",
      "go-concurrency-basics"
    ]
  },
  "process-vs-thread": {
    "links": [
      "mutex-semaphore-monitor",
      "cpu-scheduling-interrupts",
      "race-conditions",
      "thread-safety",
      "nodejs-server-runtime",
      "virtual-memory-paging",
      "cpu-cache-hierarchy",
      "deadlocks",
      "linux-processes-signals",
      "scaling-horizontal-vertical",
      "nginx-basics",
      "java-jvm-memory-gc",
      "go-concurrency-basics",
      "linux-namespaces-cgroups",
      "k8s-pod-resources"
    ],
    "mentions": [
      "browser-security-model",
      "os-kernel-system-calls",
      "cpu-pipelining-branch-prediction",
      "event-loop",
      "sql-batch-timeout-pool",
      "redis-basics",
      "backend-language-comparison"
    ]
  },
  "pwa-install-offline": {
    "links": [
      "frontend-browser-cache",
      "browser-storage",
      "browser-devtools-debugging"
    ],
    "mentions": [
      "nextjs-app-router-routing",
      "lighthouse-explained",
      "what-happens-google-com",
      "dns"
    ]
  },
  "runtime-validation-zod": {
    "links": [
      "ts-type-system-basics",
      "ts-narrowing",
      "react-forms-actions",
      "browser-storage",
      "express-middleware",
      "frontend-error-tracking",
      "web-security-headers",
      "openapi-spec-first",
      "ts-declaration-files-modules",
      "ts-enum-vs-union"
    ],
    "mentions": [
      "html-form-http",
      "client-data-cache",
      "input-validation-secure-coding",
      "threat-modeling-stride",
      "react-suspense-error-boundary",
      "frontend-performance-map",
      "api-versioning",
      "webhooks"
    ]
  },
  "ts-declaration-files-modules": {
    "links": [
      "tsconfig-strict",
      "js-es-modules",
      "ts-type-system-basics",
      "ts-enum-vs-union",
      "runtime-validation-zod"
    ],
    "mentions": [
      "js-iife-module-pattern",
      "frontend-monorepo"
    ]
  },
  "ts-enum-vs-union": {
    "links": [
      "ts-type-system-basics",
      "tsconfig-strict",
      "ts-narrowing",
      "runtime-validation-zod",
      "ts-generics",
      "js-immutability-react",
      "ts-utility-mapped-types"
    ],
    "mentions": [
      "js-truthy-falsy-typeof",
      "js-spread-rest",
      "linters-formatters",
      "ts-declaration-files-modules",
      "bit-manipulation",
      "frontend-build-tooling"
    ]
  },
  "dynamodb-modeling-capacity": {
    "links": [
      "db-type-key-value",
      "optimistic-locking",
      "elasticsearch-query-dsl"
    ],
    "mentions": [
      "sd-sharding-intro",
      "iam-basics",
      "db-locking-deadlock",
      "db-consistency-cap",
      "db-type-relational",
      "resilience-patterns",
      "sd-mq-storage-partitions",
      "postgres-operations",
      "db-modeling-normalization",
      "dns",
      "zero-downtime-migrations"
    ]
  },
  "elasticsearch-aggregations": {
    "links": [
      "elasticsearch-mapping",
      "hyperloglog",
      "elasticsearch-inverted-index"
    ],
    "mentions": [
      "resilience-patterns",
      "postgres-architecture"
    ]
  },
  "elasticsearch-mapping": {
    "links": [
      "elasticsearch-inverted-index",
      "elasticsearch-aggregations",
      "opensearch-cluster-operations"
    ],
    "mentions": [
      "elasticsearch-bulk-indexing",
      "resilience-patterns",
      "page-cache-disk-io",
      "transactional-outbox"
    ]
  },
  "elasticsearch-query-dsl": {
    "links": [
      "elasticsearch-inverted-index"
    ],
    "mentions": [
      "elasticsearch-mapping",
      "opensearch-cluster-operations",
      "sql-filtering-operators"
    ]
  },
  "jpa-entity-relationships": {
    "links": [
      "jpa-persistence-context",
      "n-plus-one-queries",
      "db-modeling-normalization"
    ],
    "mentions": [
      "spring-boot-4-migration",
      "js-execution-context",
      "pattern-proxy",
      "sql-query-rewrite"
    ]
  },
  "jpa-persistence-context": {
    "links": [
      "n-plus-one-queries",
      "jpa-entity-relationships",
      "spring-transactional-propagation",
      "optimistic-locking",
      "sql-batch-timeout-pool"
    ],
    "mentions": [
      "spring-boot-4-migration",
      "caching-strategies",
      "pattern-proxy",
      "redis-basics",
      "sql-query-rewrite"
    ]
  },
  "mongodb-crud-operators": {
    "links": [
      "mongodb-document-model",
      "elasticsearch-inverted-index",
      "api-pagination-sorting",
      "optimistic-locking",
      "idempotency-key"
    ],
    "mentions": [
      "sql-query-rewrite",
      "mongodb-indexes-explain",
      "input-validation-secure-coding",
      "db-index-design",
      "mongodb-replica-set-sharding",
      "dns"
    ]
  },
  "oop-four-pillars": {
    "links": [
      "solid-principles",
      "race-conditions",
      "js-classes",
      "js-closures",
      "pattern-strategy",
      "pattern-template-method",
      "pattern-decorator",
      "design-patterns-overview",
      "ts-narrowing",
      "spring-ioc-di"
    ],
    "mentions": [
      "coupling-cohesion-principles",
      "js-prototype-chain",
      "ts-classes-access-modifiers",
      "sd-payment-reliability",
      "pattern-visitor"
    ]
  },
  "postgres-query-planner": {
    "links": [
      "sql-query-tuning",
      "db-index-pitfalls",
      "postgres-operations",
      "connection-pool",
      "postgres-mvcc-vacuum"
    ],
    "mentions": [
      "db-architecture-by-scale",
      "dynamic-programming",
      "ds-hash-map",
      "db-index-design",
      "sql-batch-timeout-pool",
      "postgres-getting-started"
    ]
  },
  "rds-aurora-managed-db": {
    "links": [
      "postgres-operations",
      "failover",
      "db-replication-sharding",
      "connection-pool",
      "serverless-limits",
      "backup-strategy",
      "cloud-cost-optimization",
      "dynamodb-modeling-capacity"
    ],
    "mentions": [
      "service-discovery",
      "process-vs-thread",
      "route53-routing-policies",
      "virtualization-hypervisors",
      "postgres-slow-db-triage",
      "page-cache-disk-io",
      "mysql-replication-online-ddl",
      "http-caching-cdn",
      "api-versioning",
      "security-groups-nacl",
      "vpc-basics",
      "sql-batch-timeout-pool",
      "postgres-architecture",
      "dns"
    ]
  },
  "solid-principles": {
    "links": [
      "oop-four-pillars",
      "pattern-strategy",
      "spring-ioc-di",
      "clean-architecture",
      "hexagonal-architecture",
      "test-pyramid-unit-tests"
    ],
    "mentions": [
      "code-review-practices",
      "sd-payment-reliability",
      "sd-email-protocols",
      "coupling-cohesion-principles"
    ]
  },
  "spring-mvc-request-lifecycle": {
    "links": [
      "spring-ioc-di",
      "spring-boot-auto-configuration",
      "java-jvm-memory-gc",
      "connection-pool",
      "spring-security-architecture",
      "http-status-codes",
      "rest-api-design",
      "spring-transactional-propagation"
    ],
    "mentions": [
      "spring-boot-4-migration",
      "nodejs-web-frameworks",
      "deadlocks",
      "upper-layers-session-presentation-app",
      "sql-batch-timeout-pool",
      "cors",
      "token-login"
    ]
  },
  "spring-security-architecture": {
    "links": [
      "spring-mvc-request-lifecycle",
      "authn-vs-authz",
      "cookie-session-login",
      "token-login",
      "web-security-headers",
      "spring-transactional-propagation",
      "csrf",
      "spring-security-jwt-oauth2",
      "spring-ioc-di"
    ],
    "mentions": [
      "spring-boot-4-migration",
      "base64",
      "mfa-totp"
    ]
  },
  "spring-transactional-propagation": {
    "links": [
      "spring-ioc-di",
      "acid-transactions",
      "db-transaction-isolation",
      "jpa-persistence-context",
      "connection-pool",
      "transactional-outbox"
    ],
    "mentions": [
      "spring-boot-4-migration",
      "mysql-innodb-basics",
      "db-replication-sharding",
      "spring-boot-auto-configuration",
      "sql-batch-timeout-pool"
    ]
  },
  "balanced-search-trees": {
    "links": [
      "ds-binary-tree-bst",
      "ds-hash-map",
      "binary-search",
      "db-index",
      "sd-leaderboard-sorted-set",
      "segment-tree-fenwick"
    ],
    "mentions": [
      "db-type-embedded",
      "ds-linked-list",
      "mysql-innodb-basics",
      "db-sharding",
      "redis-basics"
    ]
  },
  "clean-code-practices": {
    "links": [
      "coupling-cohesion-principles",
      "refactoring-code-smells",
      "cqrs"
    ],
    "mentions": [
      "linters-formatters",
      "solid-principles",
      "clean-architecture",
      "js-optional-chaining-nullish",
      "js-function-forms",
      "js-pure-functions",
      "redis-basics"
    ]
  },
  "coupling-cohesion-principles": {
    "links": [
      "design-patterns-overview",
      "clean-code-practices",
      "refactoring-code-smells",
      "microservices-decomposition",
      "pattern-strategy",
      "hexagonal-architecture",
      "pattern-template-method"
    ],
    "mentions": [
      "modular-monolith",
      "webhooks"
    ]
  },
  "css-custom-properties": {
    "links": [
      "css-styling-approaches",
      "design-system-building",
      "css-cascade-specificity",
      "animation-performance",
      "css-performance",
      "web-components-shadow-dom"
    ],
    "mentions": [
      "micro-frontend-integration-patterns",
      "css-color-background"
    ]
  },
  "frontend-frameworks-compared": {
    "links": [
      "react-rerender",
      "react-fiber-render-commit",
      "react-memoization-hooks",
      "react-state-management-libraries",
      "code-splitting",
      "islands-resumability",
      "nextjs-static-dynamic-rendering",
      "rendering-strategies",
      "web-components-shadow-dom",
      "micro-frontends"
    ],
    "mentions": [
      "react-client-routing",
      "cross-platform-apps",
      "spring-ioc-di",
      "js-memoization",
      "ds-graph-bfs-dfs",
      "js-destructuring"
    ]
  },
  "graphql-execution-validation": {
    "links": [
      "graphql-schema-type-system",
      "graphql-basics",
      "graphql-operations-syntax",
      "abort-controller",
      "graphql-subscriptions-defer"
    ],
    "mentions": [
      "observability-basics",
      "n-plus-one-queries",
      "event-loop",
      "distributed-tracing",
      "sql-query-rewrite"
    ]
  },
  "graphql-operations-syntax": {
    "links": [
      "graphql-schema-type-system",
      "graphql-basics",
      "graphql-subscriptions-defer",
      "graphql-execution-validation"
    ],
    "mentions": [
      "graphql-client-caching",
      "js-template-literals",
      "client-data-cache"
    ]
  },
  "graphql-pagination-connections": {
    "links": [
      "api-pagination-sorting",
      "graphql-schema-type-system",
      "graphql-execution-validation",
      "graphql-basics",
      "client-data-cache"
    ],
    "mentions": [
      "graphql-client-caching",
      "n-plus-one-queries",
      "postgres-reporting-sql",
      "loading-patterns",
      "api-versioning",
      "sql-query-rewrite",
      "db-modeling-normalization"
    ]
  },
  "graphql-schema-type-system": {
    "links": [
      "graphql-basics",
      "graphql-operations-syntax",
      "graphql-pagination-connections",
      "api-versioning",
      "graphql-execution-validation"
    ],
    "mentions": [
      "graphql-client-caching",
      "postgres-data-types",
      "js-numbers-bigint",
      "sql-query-rewrite",
      "db-modeling-normalization"
    ]
  },
  "graphql-subscriptions-defer": {
    "links": [
      "websocket-deep-dive",
      "http-streaming-sse",
      "realtime-communication",
      "graphql-execution-validation",
      "message-queue-basics",
      "streaming-ssr-suspense"
    ],
    "mentions": [
      "pattern-prototype",
      "graphql-client-caching",
      "n-plus-one-queries",
      "pattern-iterator",
      "rendering-strategies",
      "graphql-basics",
      "k8s-configmap",
      "sd-start-single-server",
      "http-versions",
      "kafka-basics",
      "redis-basics",
      "db-modeling-normalization"
    ]
  },
  "load-testing-k6": {
    "links": [
      "percentile-latency",
      "connection-pool",
      "tail-latency",
      "retries",
      "ci-cd-basics",
      "autoscaling",
      "sd-capacity-estimation",
      "sli-slo"
    ],
    "mentions": [
      "https-tls",
      "os-kernel-system-calls",
      "api-scaling-ladder",
      "smoke-sanity-regression-testing",
      "latency-bandwidth-throughput",
      "event-loop",
      "js-memory-leak",
      "code-review-practices",
      "sql-batch-timeout-pool",
      "http-status-codes"
    ]
  },
  "minimum-spanning-tree": {
    "links": [
      "ds-union-find",
      "greedy-algorithms",
      "ds-heap",
      "shortest-path-algorithms"
    ],
    "mentions": [
      "router-vs-switch",
      "sd-maps-tiles-routing"
    ]
  },
  "refactoring-code-smells": {
    "links": [
      "coupling-cohesion-principles",
      "clean-code-practices",
      "pattern-strategy"
    ],
    "mentions": [
      "git-undo",
      "ddd-tactical-patterns",
      "oop-four-pillars"
    ]
  },
  "segment-tree-fenwick": {
    "links": [
      "ds-array-matrix",
      "balanced-search-trees",
      "ds-heap",
      "ds-binary-tree-bst",
      "sd-leaderboard-sorted-set"
    ],
    "mentions": [
      "sd-latency-numbers",
      "sql-filtering-operators",
      "db-type-time-series",
      "redis-basics"
    ]
  },
  "shortest-path-algorithms": {
    "links": [
      "ds-graph-bfs-dfs",
      "sd-maps-tiles-routing",
      "greedy-algorithms",
      "ds-heap",
      "router-vs-switch",
      "ds-stack-queue-deque",
      "dynamic-programming",
      "minimum-spanning-tree"
    ],
    "mentions": [
      "routing-protocols-ospf-rip-eigrp"
    ]
  },
  "spring-boot-testing": {
    "links": [
      "test-pyramid-unit-tests",
      "integration-tests-real-db",
      "spring-boot-4-migration",
      "spring-ioc-di"
    ],
    "mentions": [
      "web-server-vs-was",
      "reactive-programming",
      "db-index-design",
      "spring-boot-auto-configuration",
      "http-status-codes"
    ]
  },
  "spring-security-jwt-oauth2": {
    "links": [
      "token-login",
      "oauth",
      "jwt-key-rotation",
      "csrf",
      "authn-vs-authz",
      "spring-boot-auto-configuration",
      "rate-limiting-in-practice",
      "cookie-session-login",
      "sso-saml-oidc"
    ],
    "mentions": [
      "spring-security-architecture",
      "spring-boot-4-migration",
      "web-server-vs-was",
      "base64",
      "mfa-totp"
    ]
  },
  "web-components-shadow-dom": {
    "links": [
      "css-styling-approaches",
      "micro-frontend-integration-patterns",
      "css-cascade-specificity",
      "css-custom-properties",
      "event-propagation",
      "react-forms-actions",
      "hydration",
      "aria-keyboard-focus",
      "react-component-patterns",
      "design-system-building"
    ],
    "mentions": [
      "micro-frontends",
      "icon-system-svg",
      "event-delegation",
      "dom-basics",
      "rendering-strategies",
      "ts-declaration-files-modules",
      "css-performance"
    ]
  },
  "api-key-hmac-auth": {
    "links": [
      "oauth",
      "password-attacks-credential-stuffing",
      "hash-hmac-password-hashing",
      "secrets-management",
      "rate-limiting-in-practice",
      "jwt-key-rotation",
      "clock-skew",
      "idempotency-key",
      "webhooks",
      "encryption-in-transit"
    ],
    "mentions": [
      "gateway",
      "base64",
      "digital-signatures-certificates",
      "token-login",
      "redis-basics",
      "what-happens-google-com",
      "soap-and-soa",
      "sd-url-shortener-key-generation",
      "https-tls",
      "db-modeling-normalization"
    ]
  },
  "api-test-automation": {
    "links": [
      "test-pyramid-unit-tests",
      "api-versioning",
      "smoke-sanity-regression-testing",
      "integration-tests-real-db",
      "sit-uat-testing",
      "test-design-techniques"
    ],
    "mentions": [
      "spring-security-jwt-oauth2",
      "openapi-spec-first",
      "ci-cd-basics",
      "tdd-bdd-atdd",
      "js-array-transform",
      "input-validation-secure-coding",
      "load-testing-k6",
      "http-status-codes",
      "oauth",
      "soap-and-soa",
      "cors",
      "http-methods"
    ]
  },
  "architecture-docs-c4-adr": {
    "links": [
      "hexagonal-architecture",
      "layered-architecture",
      "distributed-tracing",
      "ddd-tactical-patterns",
      "enterprise-application-patterns",
      "ddd-bounded-context",
      "clean-architecture"
    ],
    "mentions": [
      "modular-monolith",
      "github-repo-governance",
      "uml-diagrams",
      "sd-queue-logging-automation",
      "rabbitmq-basics",
      "pub-sub",
      "kafka-basics",
      "security-groups-nacl",
      "db-types-overview",
      "redis-basics",
      "what-happens-google-com"
    ]
  },
  "bit-manipulation": {
    "links": [
      "logic-gates-alu",
      "linux-files-permissions",
      "recursion-backtracking",
      "dynamic-programming",
      "sd-unique-id-generator",
      "bloom-filter",
      "feature-flags"
    ],
    "mentions": [
      "db-index",
      "sd-latency-numbers",
      "js-numbers-bigint",
      "floating-point-numbers",
      "segment-tree-fenwick",
      "js-destructuring"
    ]
  },
  "code-review-practices": {
    "links": [
      "github-repo-governance",
      "git-stacked-prs",
      "idempotency-key",
      "race-conditions",
      "test-pyramid-unit-tests"
    ],
    "mentions": [
      "architecture-docs-c4-adr",
      "sql-query-rewrite"
    ]
  },
  "ddd-tactical-patterns": {
    "links": [
      "ddd-bounded-context",
      "enterprise-application-patterns",
      "db-keys-denormalization",
      "mvc-pattern",
      "cqrs",
      "transactional-outbox",
      "architecture-docs-c4-adr"
    ],
    "mentions": [
      "db-sharding",
      "floating-point-numbers",
      "js-strict-mode"
    ]
  },
  "enterprise-application-patterns": {
    "links": [
      "ddd-tactical-patterns",
      "mvc-pattern",
      "hexagonal-architecture",
      "n-plus-one-queries",
      "clean-architecture",
      "architecture-docs-c4-adr"
    ],
    "mentions": [
      "nodejs-orm-query-builder",
      "jpa-persistence-context",
      "js-spread-rest",
      "api-security-owasp-api-top10",
      "ddd-bounded-context",
      "pattern-proxy"
    ]
  },
  "github-repo-governance": {
    "links": [
      "git-branching-strategy",
      "code-review-practices",
      "git-stacked-prs",
      "git-large-files-secrets",
      "dependency-hell"
    ],
    "mentions": [
      "github-actions-docker-ecr",
      "github-apps-api",
      "github-pull-request-flow",
      "k8s-deploy-pipeline-eks",
      "rest-api-design",
      "token-login",
      "build-caching",
      "sdlc-models-agile-scrum"
    ]
  },
  "graphql-authorization": {
    "links": [
      "graphql-basics",
      "authn-vs-authz",
      "hexagonal-architecture",
      "graphql-client-caching"
    ],
    "mentions": [
      "api-security-owasp-api-top10",
      "graphql-subscriptions-defer",
      "n-plus-one-queries",
      "realtime-communication",
      "rest-api-design",
      "base64",
      "js-pure-functions",
      "iam-basics",
      "redis-basics",
      "cookie-session-login",
      "sql-query-rewrite"
    ]
  },
  "graphql-client-caching": {
    "links": [
      "graphql-basics",
      "client-data-cache",
      "api-pagination-sorting",
      "graphql-authorization"
    ],
    "mentions": [
      "nextjs-app-router-routing",
      "graphql-schema-type-system",
      "rendering-strategies",
      "loading-patterns",
      "db-type-relational",
      "db-modeling-normalization"
    ]
  },
  "llm-api-integration": {
    "links": [
      "llm-basics-for-developers",
      "mcp-protocol",
      "spring-ai-agents",
      "rag-classic-pipeline",
      "http-streaming-sse",
      "server-sent-events",
      "resilience-patterns",
      "rate-limiting-in-practice",
      "agent-tool-design",
      "llm-model-selection"
    ],
    "mentions": [
      "realtime-communication",
      "json-crud-http",
      "system-prompt-design",
      "rest-api-design",
      "self-hosting-llm-inference",
      "input-validation-secure-coding",
      "llm-evals",
      "cookie-session-login",
      "db-modeling-normalization"
    ]
  },
  "llm-basics-for-developers": {
    "links": [
      "llm-api-integration",
      "mcp-protocol",
      "rag-classic-pipeline",
      "claude-code-context-window"
    ],
    "mentions": [
      "system-prompt-design",
      "llm-app-security-guardrails",
      "ai-coding-agents",
      "llm-evals",
      "prompt-reasoning-techniques",
      "floating-point-numbers",
      "self-hosting-llm-inference"
    ]
  },
  "mcp-protocol": {
    "links": [
      "llm-basics-for-developers",
      "llm-api-integration",
      "claude-code-project-structure",
      "spring-ai-agents",
      "server-sent-events",
      "oauth"
    ],
    "mentions": [
      "realtime-communication",
      "system-prompt-design",
      "api-styles-overview",
      "ssrf",
      "ai-coding-agents",
      "spring-security-jwt-oauth2",
      "token-login",
      "agent-tool-design",
      "threat-modeling-stride",
      "security-principles-cia-defense-in-depth",
      "what-happens-google-com",
      "cookie-session-login",
      "dns"
    ]
  },
  "nodejs-debugging-profiling": {
    "links": [
      "event-loop",
      "nodejs-server-runtime",
      "garbage-collection",
      "js-memory-leak",
      "percentile-latency",
      "nodejs-http-clients",
      "linux-processes-signals",
      "distributed-tracing",
      "nodejs-error-handling"
    ],
    "mentions": [
      "observability-basics",
      "realtime-communication",
      "bash-scripting",
      "ssh-in-practice",
      "regex-and-globbing",
      "js-es-modules",
      "sql-batch-timeout-pool",
      "http-caching-cdn"
    ]
  },
  "nodejs-error-handling": {
    "links": [
      "js-promises",
      "express-middleware",
      "nodejs-http-clients",
      "structured-logging",
      "nodejs-fs-streams",
      "linux-processes-signals",
      "resilience-patterns",
      "nodejs-debugging-profiling"
    ],
    "mentions": [
      "k8s-pod-lifecycle",
      "js-callback-hell",
      "browser-devtools-debugging",
      "virtual-memory-paging",
      "json-crud-http",
      "k8s-architecture",
      "centralized-logging-pipeline",
      "event-loop",
      "os-kernel-system-calls",
      "nodejs-cli-process",
      "osi-in-practice",
      "connection-pool",
      "http-methods"
    ]
  },
  "nodejs-fs-streams": {
    "links": [
      "backpressure",
      "nodejs-error-handling",
      "garbage-collection",
      "nodejs-server-runtime",
      "nodejs-http-clients"
    ],
    "mentions": [
      "os-kernel-system-calls",
      "regex-and-globbing",
      "http-streaming-sse",
      "event-loop",
      "js-es-modules",
      "http-status-codes",
      "debounce-throttle"
    ]
  },
  "nodejs-http-clients": {
    "links": [
      "browser-fetch",
      "timeouts",
      "tcp-connection-lifecycle",
      "nodejs-fs-streams",
      "nodejs-error-handling",
      "abort-controller",
      "resilience-patterns",
      "nodejs-debugging-profiling"
    ],
    "mentions": [
      "what-happens-google-com",
      "https-tls",
      "js-memory-leak",
      "sd-payment-flow",
      "osi-in-practice",
      "http-status-codes",
      "js-runtimes-node-deno-bun",
      "http-methods",
      "dns"
    ]
  },
  "nodejs-orm-query-builder": {
    "links": [
      "n-plus-one-queries",
      "db-migration-tools",
      "connection-pool",
      "hexagonal-architecture",
      "zero-downtime-migrations"
    ],
    "mentions": [
      "postgres-slow-db-triage",
      "k8s-deploy-pipeline-eks",
      "js-template-literals",
      "mongodb-document-model",
      "js-numbers-bigint",
      "ts-declaration-files-modules",
      "pattern-proxy",
      "sql-batch-timeout-pool",
      "sql-query-rewrite"
    ]
  },
  "nodejs-web-frameworks": {
    "links": [
      "express-middleware",
      "nodejs-server-runtime",
      "fastapi-basics",
      "api-key-hmac-auth",
      "spring-ioc-di",
      "serverless-limits",
      "cold-starts",
      "xss",
      "rendering-ssr",
      "hexagonal-architecture"
    ],
    "mentions": [
      "ts-decorators",
      "linux-processes-signals",
      "event-loop",
      "code-review-practices",
      "js-runtimes-node-deno-bun",
      "runtime-validation-zod",
      "frontend-build-tooling"
    ]
  },
  "openapi-spec-first": {
    "links": [
      "rest-api-design",
      "api-versioning",
      "frontend-testing-strategy",
      "integration-tests-real-db"
    ],
    "mentions": [
      "client-data-cache",
      "fastapi-basics",
      "api-test-automation",
      "http-status-codes",
      "npm-package-publishing"
    ]
  },
  "password-attacks-credential-stuffing": {
    "links": [
      "hash-hmac-password-hashing",
      "mfa-totp",
      "passkeys-webauthn",
      "rate-limiting-in-practice",
      "rate-limiting-algorithms",
      "api-key-hmac-auth",
      "ddos-protection"
    ],
    "mentions": [
      "hyperloglog",
      "sliding-window-pattern",
      "redis-basics",
      "http-status-codes",
      "sso-saml-oidc"
    ]
  },
  "regex-and-globbing": {
    "links": [
      "linux-grep-awk-sed",
      "bash-scripting",
      "git-ignore-config",
      "recursion-backtracking",
      "big-o-notation",
      "structured-logging"
    ],
    "mentions": [
      "centralized-logging-pipeline",
      "sd-latency-numbers",
      "bash-expansions-variables",
      "event-loop"
    ]
  },
  "smoke-sanity-regression-testing": {
    "links": [
      "test-design-techniques",
      "test-pyramid-unit-tests",
      "sit-uat-testing",
      "ci-cd-basics",
      "api-test-automation",
      "tdd-bdd-atdd"
    ],
    "mentions": [
      "frontend-testing-strategy",
      "build-caching",
      "code-splitting",
      "dependency-hell",
      "k8s-deploy-pipeline-eks",
      "osi-in-practice",
      "frontend-monorepo"
    ]
  },
  "string-search-algorithms": {
    "links": [
      "big-o-notation",
      "bit-manipulation",
      "ds-hash-map",
      "rsync-algorithm",
      "regex-and-globbing",
      "binary-search",
      "elasticsearch-inverted-index",
      "ds-trie"
    ],
    "mentions": [
      "db-index",
      "ids-ips",
      "character-encoding-unicode",
      "js-numbers-bigint",
      "event-loop",
      "recursion-backtracking",
      "js-strings-unicode",
      "db-modeling-normalization",
      "core-web-vitals"
    ]
  },
  "tdd-bdd-atdd": {
    "links": [
      "test-pyramid-unit-tests",
      "test-design-techniques",
      "smoke-sanity-regression-testing",
      "api-test-automation"
    ],
    "mentions": [
      "message-delivery-semantics"
    ]
  },
  "test-design-techniques": {
    "links": [
      "test-pyramid-unit-tests",
      "smoke-sanity-regression-testing",
      "tdd-bdd-atdd"
    ],
    "mentions": [
      "sit-uat-testing",
      "api-test-automation",
      "floating-point-numbers"
    ]
  },
  "twelve-factor-app": {
    "links": [
      "dependency-hell",
      "k8s-configmap",
      "secrets-management",
      "feature-flags",
      "dockerfile-image-layers",
      "helm-basics",
      "sd-load-balancer-stateless",
      "k8s-hpa",
      "k8s-pod-lifecycle",
      "rolling-deployment",
      "docker-compose",
      "integration-tests-real-db",
      "structured-logging",
      "observability-basics",
      "db-migration-tools",
      "k8s-job-cronjob"
    ],
    "mentions": [
      "k8s-statefulset",
      "centralized-logging-pipeline",
      "iptables-nat",
      "helm-dependencies-oci-gitops",
      "message-queue-basics",
      "docker-container-basics",
      "spring-ioc-di",
      "sd-payment-flow",
      "sd-object-storage-architecture",
      "db-type-embedded",
      "kafka-basics",
      "redis-basics",
      "cloud-service-models-shared-responsibility",
      "frontend-monorepo"
    ]
  },
  "aria-keyboard-focus": {
    "links": [
      "html-semantics",
      "web-accessibility",
      "frontend-system-design-interview",
      "css-sticky-scroll-snap",
      "rendering-csr-spa"
    ],
    "mentions": [
      "react-client-routing",
      "frontend-testing-strategy",
      "smoke-sanity-regression-testing"
    ]
  },
  "browser-security-model": {
    "links": [
      "cors",
      "csrf",
      "xss",
      "spa-auth-token-storage",
      "web-security-headers",
      "web-workers",
      "owasp-top-10-map",
      "browser-storage"
    ],
    "mentions": [
      "frontend-browser-cache",
      "frontend-testing-strategy",
      "cpu-pipelining-branch-prediction",
      "html-form-http",
      "cookie-session-login"
    ]
  },
  "css-box-model-layout": {
    "links": [
      "css-flexbox-grid",
      "css-sticky-scroll-snap",
      "css-cascade-specificity",
      "css-position-stacking-context"
    ],
    "mentions": []
  },
  "css-cascade-specificity": {
    "links": [
      "css-performance",
      "css-box-model-layout",
      "css-position-stacking-context"
    ],
    "mentions": [
      "micro-frontend-integration-patterns",
      "css-custom-properties"
    ]
  },
  "css-flexbox-grid": {
    "links": [
      "css-box-model-layout",
      "css-sticky-scroll-snap"
    ],
    "mentions": [
      "responsive-design",
      "loading-patterns"
    ]
  },
  "css-position-stacking-context": {
    "links": [
      "css-box-model-layout",
      "css-sticky-scroll-snap",
      "css-cascade-specificity",
      "css-flexbox-grid"
    ],
    "mentions": [
      "ui-overlays-tooltip-dropdown-toast",
      "event-propagation",
      "design-system-building"
    ]
  },
  "css-styling-approaches": {
    "links": [
      "css-performance",
      "design-system-building",
      "css-custom-properties",
      "bundler-basics",
      "css-cascade-specificity"
    ],
    "mentions": [
      "nextjs-app-router-routing",
      "responsive-design",
      "rendering-strategies",
      "smoke-sanity-regression-testing"
    ]
  },
  "design-system-building": {
    "links": [
      "css-styling-approaches",
      "design-system-adoption-governance",
      "css-color-background",
      "semantic-versioning",
      "frontend-monorepo"
    ],
    "mentions": [
      "css-performance",
      "frontend-testing-strategy",
      "aria-keyboard-focus",
      "web-accessibility",
      "react-component-patterns",
      "rendering-strategies",
      "css-custom-properties",
      "smoke-sanity-regression-testing"
    ]
  },
  "frontend-build-tooling": {
    "links": [
      "bundler-basics",
      "code-splitting",
      "tsconfig-strict",
      "js-map-set-weak",
      "js-iterators-generators",
      "frontend-error-tracking"
    ],
    "mentions": [
      "dependency-hell",
      "pattern-iterator",
      "docker-container-basics",
      "js-optional-chaining-nullish",
      "linters-formatters",
      "react-useeffect",
      "js-function-forms",
      "js-es-modules",
      "frontend-monorepo",
      "js-primitive-vs-reference"
    ]
  },
  "frontend-testing-strategy": {
    "links": [
      "test-pyramid-unit-tests",
      "client-data-cache",
      "ci-cd-basics"
    ],
    "mentions": [
      "frontend-browser-cache",
      "design-system-building",
      "react-state-management-libraries",
      "linters-formatters",
      "smoke-sanity-regression-testing",
      "html-semantics",
      "web-accessibility",
      "sd-payment-flow",
      "event-loop",
      "js-pure-functions",
      "react-custom-hooks-rules"
    ]
  },
  "html-semantics": {
    "links": [
      "web-accessibility",
      "aria-keyboard-focus",
      "dom-basics",
      "html-form-http",
      "hydration",
      "seo-for-spa"
    ],
    "mentions": [
      "frontend-testing-strategy",
      "icon-system-svg",
      "linters-formatters",
      "nodejs-web-frameworks",
      "rendering-strategies",
      "code-review-practices"
    ]
  },
  "js-iterators-generators": {
    "links": [
      "pattern-iterator",
      "js-destructuring",
      "js-spread-rest",
      "js-map-set-weak",
      "js-execution-context",
      "frontend-build-tooling",
      "js-promise-combinators",
      "http-streaming-sse",
      "frontend-state-architecture"
    ],
    "mentions": [
      "client-data-cache",
      "js-async-await",
      "js-promises",
      "spark-basics",
      "bundler-basics"
    ]
  },
  "js-map-set-weak": {
    "links": [
      "js-memory-leak",
      "js-memoization",
      "js-prototype-chain",
      "js-equality-coercion",
      "js-immutability-react",
      "js-object-methods",
      "pattern-iterator",
      "ds-hash-map",
      "bundler-basics",
      "js-shallow-deep-copy"
    ],
    "mentions": [
      "web-workers",
      "spring-ioc-di",
      "pattern-prototype",
      "js-primitive-vs-reference"
    ]
  },
  "react-component-patterns": {
    "links": [
      "typescript-in-react",
      "react-rerender",
      "pattern-decorator",
      "frontend-system-design-interview",
      "design-patterns-overview"
    ],
    "mentions": [
      "react-suspense-error-boundary",
      "react-context",
      "aria-keyboard-focus",
      "react-custom-hooks-rules",
      "js-pure-functions"
    ]
  },
  "react-concurrent-transitions": {
    "links": [
      "react-rerender",
      "react-fiber-render-commit",
      "debounce-throttle",
      "react-suspense-error-boundary"
    ],
    "mentions": [
      "react-state-management-libraries",
      "event-loop",
      "bit-manipulation",
      "core-web-vitals"
    ]
  },
  "react-context": {
    "links": [
      "react-rerender",
      "fp-in-react",
      "react-memoization-hooks",
      "react-custom-hooks-rules",
      "react-server-components"
    ],
    "mentions": [
      "react-state-management-libraries",
      "rendering-strategies",
      "css-custom-properties",
      "frontend-state-architecture",
      "frontend-monorepo"
    ]
  },
  "react-custom-hooks-rules": {
    "links": [
      "react-context",
      "react-memoization-hooks",
      "client-data-cache",
      "hydration",
      "test-pyramid-unit-tests"
    ],
    "mentions": [
      "react-state-management-libraries",
      "fp-in-react",
      "react-concurrent-transitions",
      "react-useeffect",
      "ds-linked-list",
      "rendering-strategies",
      "race-conditions",
      "http-status-codes",
      "js-primitive-vs-reference"
    ]
  },
  "react-fiber-render-commit": {
    "links": [
      "react-rerender",
      "react-reconciliation-keys",
      "event-loop",
      "react-concurrent-transitions"
    ],
    "mentions": [
      "react-useref-layout-effect",
      "web-workers",
      "react-useeffect",
      "ds-graph-bfs-dfs",
      "react-state-management-libraries",
      "cpu-instruction-cycle",
      "ds-linked-list",
      "core-web-vitals"
    ]
  },
  "react-forms-actions": {
    "links": [
      "html-form-http",
      "frontend-state-architecture",
      "frontend-system-design-interview",
      "idempotency-key",
      "react-server-components",
      "loading-patterns",
      "client-data-cache"
    ],
    "mentions": [
      "react-suspense-error-boundary",
      "nextjs-app-router-routing",
      "input-validation-secure-coding",
      "rendering-strategies",
      "js-destructuring",
      "resilience-patterns",
      "http-methods"
    ]
  },
  "react-jsx-components": {
    "links": [
      "react-rerender",
      "xss",
      "react-state-snapshot-batching",
      "typescript-in-react",
      "js-short-circuit",
      "react-useeffect",
      "js-pure-functions"
    ],
    "mentions": [
      "react-memoization-hooks",
      "js-object-methods",
      "react-concurrent-transitions",
      "pattern-decorator",
      "js-strict-mode",
      "js-es-modules",
      "js-destructuring",
      "js-truthy-falsy-typeof",
      "frontend-build-tooling",
      "js-closures"
    ]
  },
  "react-memoization-hooks": {
    "links": [
      "react-rerender",
      "js-memoization",
      "js-closures"
    ],
    "mentions": [
      "js-object-methods",
      "js-memory-leak",
      "react-state-snapshot-batching",
      "react-useeffect",
      "http-caching-cdn",
      "js-immutability-react",
      "react-custom-hooks-rules",
      "js-primitive-vs-reference"
    ]
  },
  "react-reconciliation-keys": {
    "links": [
      "react-rerender",
      "react-fiber-render-commit"
    ],
    "mentions": [
      "dynamic-programming",
      "pattern-decorator",
      "react-useeffect",
      "ds-linked-list",
      "sdlc-models-agile-scrum"
    ]
  },
  "react-state-management-libraries": {
    "links": [
      "client-data-cache",
      "frontend-state-architecture",
      "pattern-observer",
      "js-immutability-react",
      "fp-in-react"
    ],
    "mentions": [
      "json-crud-http",
      "browser-storage",
      "react-concurrent-transitions",
      "js-memoization",
      "rendering-strategies",
      "code-review-practices",
      "react-memoization-hooks",
      "js-pure-functions",
      "ddd-tactical-patterns",
      "react-rerender",
      "js-primitive-vs-reference"
    ]
  },
  "react-state-snapshot-batching": {
    "links": [
      "react-jsx-components",
      "js-closures",
      "js-immutability-react",
      "react-rerender",
      "fp-in-react",
      "react-without-effects",
      "frontend-state-architecture",
      "react-useeffect"
    ],
    "mentions": [
      "js-pure-functions"
    ]
  },
  "react-suspense-error-boundary": {
    "links": [
      "streaming-ssr-suspense",
      "hydration",
      "client-data-cache",
      "code-splitting",
      "react-concurrent-transitions"
    ],
    "mentions": [
      "rendering-strategies",
      "react-state-snapshot-batching",
      "react-useref-layout-effect",
      "sdlc-models-agile-scrum"
    ]
  },
  "react-useeffect": {
    "links": [
      "react-state-snapshot-batching",
      "react-jsx-components",
      "react-without-effects",
      "js-closures",
      "react-rerender",
      "abort-controller",
      "js-memory-leak",
      "client-data-cache"
    ],
    "mentions": [
      "js-function-forms",
      "race-conditions",
      "js-primitive-vs-reference"
    ]
  },
  "react-useref-layout-effect": {
    "links": [
      "js-closures",
      "react-memoization-hooks",
      "typescript-in-react",
      "browser-rendering-pipeline",
      "hydration"
    ],
    "mentions": [
      "dom-basics",
      "react-useeffect",
      "design-system-adoption-governance",
      "react-concurrent-transitions",
      "react-state-snapshot-batching",
      "js-function-forms",
      "rendering-strategies",
      "js-pure-functions",
      "react-custom-hooks-rules",
      "core-web-vitals"
    ]
  },
  "react-without-effects": {
    "links": [
      "react-useeffect",
      "fp-in-react",
      "react-rerender",
      "react-state-snapshot-batching",
      "client-data-cache"
    ],
    "mentions": [
      "react-memoization-hooks",
      "k8s-pod-resources",
      "react-concurrent-transitions",
      "react-state-management-libraries",
      "rendering-strategies",
      "race-conditions"
    ]
  },
  "responsive-design": {
    "links": [
      "image-optimization"
    ],
    "mentions": [
      "nextjs-app-router-routing",
      "css-sticky-scroll-snap",
      "js-numbers-bigint",
      "css-custom-properties",
      "web-accessibility"
    ]
  },
  "seo-for-spa": {
    "links": [
      "rendering-csr-spa",
      "html-semantics",
      "aria-keyboard-focus",
      "sd-web-crawler-politeness-dedup",
      "image-optimization",
      "rendering-strategies",
      "rendering-ssg-isr",
      "rendering-ssr",
      "xss"
    ],
    "mentions": [
      "html-form-http",
      "nextjs-app-router-routing",
      "k8s-deploy-pipeline-eks",
      "structured-data-json-ld",
      "frontend-hosting-platforms",
      "nextjs-static-dynamic-rendering",
      "crawl-budget-faceted-navigation",
      "search-spam-policies-cloaking",
      "http-status-codes",
      "what-happens-google-com"
    ]
  },
  "spa-auth-token-storage": {
    "links": [
      "token-login",
      "cookie-session-login",
      "oauth",
      "browser-storage",
      "csrf",
      "xss",
      "frontend-as-distributed-system",
      "gateway",
      "browser-security-model",
      "web-security-headers"
    ],
    "mentions": [
      "client-data-cache",
      "json-crud-http",
      "what-happens-google-com",
      "cors",
      "js-closures"
    ]
  },
  "ts-conditional-infer": {
    "links": [
      "ts-utility-mapped-types",
      "ts-generics",
      "tsconfig-strict",
      "js-map-set-weak",
      "ts-narrowing"
    ],
    "mentions": [
      "js-object-methods",
      "js-spread-rest",
      "js-promises",
      "js-template-literals",
      "js-primitive-vs-reference"
    ]
  },
  "web-accessibility": {
    "links": [
      "html-semantics",
      "aria-keyboard-focus",
      "animation-performance",
      "lighthouse-explained"
    ],
    "mentions": [
      "frontend-testing-strategy",
      "design-system-building",
      "count-min-sketch"
    ]
  },
  "web-workers": {
    "links": [
      "core-web-vitals",
      "event-loop",
      "frontend-browser-cache",
      "js-shallow-deep-copy",
      "web-security-headers",
      "thread-safety"
    ],
    "mentions": [
      "json-crud-http",
      "react-useeffect",
      "browser-storage",
      "realtime-communication",
      "browser-rendering-pipeline",
      "spring-ioc-di",
      "sd-maps-tiles-routing"
    ]
  },
  "kafka-to-lake-pipeline": {
    "links": [
      "data-lake-hdfs",
      "spark-basics",
      "airflow-orchestration",
      "kafka-basics",
      "message-delivery-semantics",
      "sd-ad-click-stream-windows",
      "sd-ad-click-exactly-once",
      "schema-versioning"
    ],
    "mentions": [
      "stream-processing",
      "sd-object-storage-architecture",
      "pub-sub",
      "postgres-architecture",
      "sql-query-rewrite",
      "zero-downtime-migrations"
    ]
  },
  "airflow-orchestration": {
    "links": [
      "cron-jobs",
      "batch-processing",
      "spark-basics",
      "data-lake-hdfs",
      "idempotency-key",
      "kafka-to-lake-pipeline"
    ],
    "mentions": [
      "data-warehouse-architecture",
      "sd-object-storage-architecture",
      "db-type-embedded",
      "js-pure-functions",
      "kafka-basics",
      "osi-in-practice",
      "http-methods",
      "zero-downtime-migrations"
    ]
  },
  "spark-basics": {
    "links": [
      "data-lake-hdfs",
      "airflow-orchestration",
      "kafka-to-lake-pipeline"
    ],
    "mentions": [
      "db-partitioning",
      "rest-api-design",
      "sd-start-single-server",
      "kafka-basics",
      "db-type-relational"
    ]
  },
  "data-lake-hdfs": {
    "links": [
      "spark-basics",
      "airflow-orchestration",
      "kafka-to-lake-pipeline",
      "db-type-columnar-olap",
      "sd-object-storage-durability",
      "sd-object-storage-architecture"
    ],
    "mentions": [
      "data-warehouse-architecture",
      "db-partitioning",
      "sd-start-single-server",
      "mongodb-replica-set-sharding",
      "stream-processing",
      "kafka-basics",
      "postgres-architecture",
      "linux-archive-transfer",
      "etl-vs-elt",
      "cdc-change-data-capture"
    ]
  },
  "spring-cloud-vs-kubernetes": {
    "links": [
      "microservices",
      "service-discovery",
      "k8s-service-types",
      "k8s-coredns",
      "spring-boot-4-migration",
      "spring-boot-auto-configuration",
      "k8s-configmap",
      "argocd-basics",
      "k8s-secret",
      "secrets-management",
      "gateway",
      "k8s-gateway-api",
      "resilience-patterns",
      "circuit-breaker",
      "service-mesh",
      "timeouts",
      "spring-boot-on-kubernetes",
      "spring-boot-observability",
      "spring-ai-agents"
    ],
    "mentions": [
      "iptables-nat",
      "rw-netflix-cloud-microservices",
      "k8s-architecture",
      "kubernetes-ingress",
      "autoscaling",
      "osi-in-practice",
      "cilium-ebpf",
      "grpc",
      "k8s-hpa",
      "dns"
    ]
  },
  "spring-ai-agents": {
    "links": [
      "agentic-rag",
      "spring-boot-auto-configuration",
      "spring-boot-4-migration",
      "rag-classic-pipeline",
      "timeouts",
      "circuit-breaker",
      "spring-boot-observability",
      "spring-cloud-vs-kubernetes"
    ],
    "mentions": [
      "mcp-protocol",
      "system-prompt-design",
      "api-styles-overview",
      "resilience-patterns",
      "agent-tool-design",
      "redis-basics",
      "vector-db"
    ]
  },
  "cpu-pipelining-branch-prediction": {
    "links": [
      "cpu-instruction-cycle",
      "cpu-cache-hierarchy"
    ],
    "mentions": [
      "web-security-headers",
      "virtualization-hypervisors",
      "browser-security-model",
      "ds-linked-list",
      "floating-point-numbers"
    ]
  },
  "cpu-cache-hierarchy": {
    "links": [
      "cpu-instruction-cycle",
      "virtual-memory-paging",
      "sd-latency-numbers",
      "ds-array-matrix",
      "ds-linked-list",
      "thread-safety",
      "scaling-horizontal-vertical",
      "cpu-pipelining-branch-prediction"
    ],
    "mentions": [
      "ds-hash-map",
      "db-type-relational"
    ]
  },
  "cpu-instruction-cycle": {
    "links": [
      "logic-gates-alu",
      "cpu-cache-hierarchy",
      "cpu-pipelining-branch-prediction",
      "packet-capture-tcpdump",
      "js-binary-data-typed-arrays",
      "virtual-memory-paging"
    ],
    "mentions": [
      "cpu-scheduling-interrupts",
      "memory-safety-buffer-overflow",
      "sd-latency-numbers",
      "virtualization-hypervisors",
      "ds-hash-map",
      "bit-manipulation"
    ]
  },
  "logic-gates-alu": {
    "links": [
      "cpu-instruction-cycle"
    ],
    "mentions": [
      "floating-point-numbers",
      "bit-manipulation"
    ]
  },
  "aws-ec2-ubuntu-server-setup": {
    "links": [
      "ssh-in-practice",
      "linux-systemd-systemctl",
      "security-groups-nacl",
      "nginx-https-performance",
      "linux-files-permissions",
      "iptables-basics",
      "nginx-reverse-proxy",
      "ssrf"
    ],
    "mentions": [
      "virtual-memory-paging",
      "terraform-basics",
      "linux-users-groups-sudo",
      "ansible-network-automation",
      "proxy-reverse-proxy",
      "virtualization-hypervisors",
      "page-cache-disk-io",
      "sd-start-single-server",
      "js-memory-leak",
      "linux-disks-filesystems",
      "dockerfile-image-layers",
      "layer-ip-addressing",
      "rds-aurora-managed-db",
      "vpc-basics",
      "dns"
    ]
  },
  "jenkins-on-kubernetes": {
    "links": [
      "jenkins-pipeline-basics",
      "jenkins-argocd-push-pull",
      "k8s-pod-scheduling",
      "k8s-pod-resources",
      "k8s-pod-security-admission",
      "build-caching",
      "k8s-network-policy"
    ],
    "mentions": [
      "k8s-secret",
      "k8s-pod-troubleshooting",
      "k8s-pod-lifecycle",
      "docker-runtime-security",
      "k8s-pv-pvc",
      "k8s-statefulset",
      "dockerfile-image-layers",
      "k8s-daemonset",
      "realtime-communication",
      "block-file-object-storage",
      "k8s-security-context",
      "helm-basics",
      "kubernetes-ingress",
      "vpc-basics",
      "github-actions-docker-ecr",
      "eks-cluster-basics"
    ]
  },
  "jenkins-argocd-push-pull": {
    "links": [
      "k8s-deploy-pipeline-eks",
      "argocd-basics",
      "gitops-argocd-vs-flux",
      "jenkins-on-kubernetes",
      "helm-release-lifecycle",
      "ci-cd-basics",
      "kustomize-basics",
      "rollback-strategy"
    ],
    "mentions": [
      "k8s-pod-troubleshooting",
      "jenkins-pipeline-basics",
      "git-branch-merge",
      "github-repo-governance",
      "cache-write-policies",
      "git-undo",
      "helm-dependencies-oci-gitops",
      "security-principles-cia-defense-in-depth",
      "github-actions-docker-ecr",
      "vpc-basics",
      "webhooks"
    ]
  },
  "falco-runtime-security": {
    "links": [
      "cis-benchmark-kube-bench",
      "seccomp-apparmor",
      "container-supply-chain-security",
      "k8s-audit-logging",
      "cilium-ebpf"
    ],
    "mentions": [
      "k8s-pod-lifecycle",
      "k8s-network-policy",
      "hosts-file",
      "k8s-daemonset",
      "docker-container-basics",
      "docker-runtime-security",
      "k8s-security-context",
      "helm-basics",
      "k8s-node-maintenance",
      "os-kernel-system-calls",
      "shells-posix-compat",
      "k8s-certifications",
      "webhooks"
    ]
  },
  "container-supply-chain-security": {
    "links": [
      "dockerfile-image-layers",
      "ci-cd-basics",
      "dependency-hell",
      "digital-signatures-certificates",
      "cis-benchmark-kube-bench",
      "seccomp-apparmor",
      "falco-runtime-security",
      "k8s-admission-control"
    ],
    "mentions": [
      "github-actions-docker-ecr",
      "k8s-pod-basics",
      "owasp-top-10-map",
      "docker-container-basics",
      "k8s-coredns",
      "k8s-pod-troubleshooting",
      "https-tls",
      "what-happens-google-com",
      "local-k8s-kind-minikube",
      "k8s-certifications",
      "webhooks"
    ]
  },
  "seccomp-apparmor": {
    "links": [
      "k8s-security-context",
      "cis-benchmark-kube-bench",
      "container-supply-chain-security",
      "falco-runtime-security"
    ],
    "mentions": [
      "blue-green-deployment",
      "k8s-daemonset",
      "docker-container-basics",
      "k8s-architecture",
      "os-kernel-system-calls",
      "linux-processes-signals",
      "linux-files-permissions",
      "osi-in-practice",
      "k8s-certifications"
    ]
  },
  "cis-benchmark-kube-bench": {
    "links": [
      "k8s-certifications",
      "seccomp-apparmor",
      "container-supply-chain-security",
      "falco-runtime-security",
      "k8s-serviceaccount-tokens",
      "k8s-audit-logging",
      "k8s-certificates-pki"
    ],
    "mentions": [
      "k8s-architecture",
      "k8s-pod-security-admission",
      "k8s-security-context",
      "helm-basics",
      "authn-vs-authz",
      "os-kernel-system-calls",
      "linux-files-permissions",
      "osi-in-practice",
      "local-k8s-kind-minikube",
      "db-type-key-value",
      "eks-cluster-basics"
    ]
  },
  "elk-stack-basics": {
    "links": [
      "centralized-logging-pipeline",
      "elasticsearch-inverted-index",
      "opensearch-cluster-operations",
      "structured-logging"
    ],
    "mentions": [
      "elasticsearch-snapshot-dr",
      "observability-basics",
      "elasticsearch-query-dsl",
      "sd-object-storage-architecture",
      "db-type-relational",
      "bi-semantic-layer",
      "elasticsearch-mapping",
      "kafka-basics",
      "http-status-codes"
    ]
  },
  "grafana-tempo-tracing": {
    "links": [
      "distributed-tracing",
      "otel-collector-pipeline",
      "observability-basics",
      "grafana-dashboards",
      "metrics-types",
      "structured-logging"
    ],
    "mentions": [
      "elasticsearch-inverted-index",
      "db-type-wide-column",
      "data-lake-hdfs",
      "sd-latency-numbers",
      "helm-basics",
      "sd-object-storage-architecture",
      "kafka-basics",
      "sli-slo"
    ]
  },
  "otel-collector-pipeline": {
    "links": [
      "observability-basics",
      "distributed-tracing",
      "grafana-tempo-tracing",
      "structured-logging",
      "k8s-daemonset",
      "consistent-hashing",
      "alerting"
    ],
    "mentions": [
      "k8s-statefulset",
      "garbage-collection",
      "data-privacy-compliance",
      "web-accessibility",
      "kafka-basics",
      "osi-in-practice",
      "grpc"
    ]
  },
  "redis-high-throughput": {
    "links": [
      "redis-basics",
      "valkey-vs-redis",
      "redis-cluster",
      "connection-pool",
      "redis-memory-eviction",
      "caching-strategies",
      "cache-invalidation",
      "tail-latency",
      "hyperloglog"
    ],
    "mentions": [
      "observability-basics",
      "linux-processes-signals",
      "os-kernel-system-calls",
      "ds-hash-map",
      "event-loop",
      "rw-uber-schemaless-docstore",
      "vpc-basics"
    ]
  },
  "valkey-vs-redis": {
    "links": [
      "redis-basics",
      "redis-replication-sentinel",
      "redis-high-throughput",
      "redis-persistence-ha",
      "caching-strategies"
    ],
    "mentions": [
      "redis-modules-stack",
      "nginx-basics",
      "db-migration-tools",
      "ds-hash-map",
      "transactional-outbox",
      "osi-in-practice",
      "db-replication-sharding",
      "dns"
    ]
  },
  "spring-boot-observability": {
    "links": [
      "observability-basics",
      "metrics-types",
      "distributed-tracing",
      "prometheus-basics",
      "spring-boot-on-kubernetes",
      "db-type-time-series",
      "otel-collector-pipeline",
      "spring-boot-4-migration",
      "structured-logging",
      "grafana-dashboards",
      "grafana-tempo-tracing",
      "java-jvm-memory-gc"
    ],
    "mentions": [
      "spring-mvc-request-lifecycle",
      "elasticsearch-inverted-index",
      "grpc",
      "centralized-logging-pipeline",
      "sql-batch-timeout-pool",
      "http-status-codes",
      "sli-slo"
    ]
  },
  "spring-boot-on-kubernetes": {
    "links": [
      "k8s-pod-probes",
      "k8s-pod-lifecycle",
      "java-jvm-memory-gc",
      "spring-ioc-di",
      "spring-boot-auto-configuration",
      "spring-boot-4-migration",
      "spring-cloud-vs-kubernetes",
      "dockerfile-image-layers",
      "k8s-hpa",
      "spring-boot-observability",
      "k8s-deploy-pipeline-eks"
    ],
    "mentions": [
      "k8s-service-types",
      "curl-for-debugging",
      "iptables-nat",
      "docker-commands-workflow",
      "k8s-architecture",
      "health-checks",
      "resilience-patterns",
      "kubernetes-ingress",
      "rolling-deployment"
    ]
  },
  "spring-boot-4-migration": {
    "links": [
      "spring-boot-auto-configuration",
      "spring-ioc-di",
      "api-versioning",
      "spring-boot-on-kubernetes",
      "retries"
    ],
    "mentions": [
      "spring-boot-testing",
      "rest-api-design",
      "js-classes",
      "db-migration-tools"
    ]
  },
  "spring-boot-auto-configuration": {
    "links": [
      "spring-ioc-di",
      "spring-boot-4-migration",
      "secrets-management"
    ],
    "mentions": [
      "rolling-deployment",
      "sql-batch-timeout-pool",
      "character-encoding-unicode"
    ]
  },
  "spring-ioc-di": {
    "links": [
      "spring-boot-auto-configuration",
      "spring-boot-4-migration",
      "hexagonal-architecture",
      "test-pyramid-unit-tests",
      "pattern-strategy",
      "pattern-proxy",
      "acid-transactions",
      "pattern-singleton",
      "spring-boot-on-kubernetes"
    ],
    "mentions": [
      "sql-batch-timeout-pool"
    ]
  },
  "digital-signatures-certificates": {
    "links": [
      "https-tls",
      "k8s-certificates-pki",
      "public-key-key-exchange",
      "hash-hmac-password-hashing",
      "encryption-in-transit"
    ],
    "mentions": [
      "what-happens-google-com"
    ]
  },
  "hash-hmac-password-hashing": {
    "links": [
      "passkeys-webauthn",
      "mfa-totp",
      "git-internals-basics",
      "merkle-tree",
      "webhooks",
      "secrets-management"
    ],
    "mentions": []
  },
  "public-key-key-exchange": {
    "links": [
      "symmetric-encryption-aes",
      "https-tls",
      "encryption-in-transit",
      "digital-signatures-certificates",
      "encryption-at-rest"
    ],
    "mentions": [
      "js-numbers-bigint"
    ]
  },
  "symmetric-encryption-aes": {
    "links": [
      "https-tls",
      "encryption-in-transit",
      "encryption-at-rest",
      "public-key-key-exchange",
      "hash-hmac-password-hashing"
    ],
    "mentions": []
  },
  "fe-sd-news-feed": {
    "links": [
      "sd-news-feed-publishing",
      "sd-news-feed-retrieval",
      "frontend-system-design-interview",
      "frontend-state-architecture",
      "frontend-as-distributed-system",
      "rendering-strategies",
      "api-pagination-sorting",
      "rendering-performance-optimization",
      "scroll-triggered-intersection-observer",
      "image-optimization",
      "core-web-vitals",
      "realtime-communication",
      "client-data-cache",
      "loading-patterns",
      "performance-metrics-measurement",
      "frontend-error-tracking",
      "error-budgets"
    ],
    "mentions": [
      "frontend-testing-strategy",
      "graphql-basics",
      "sd-split-web-and-db",
      "sli-slo",
      "db-modeling-normalization",
      "gateway",
      "js-currying-partial"
    ]
  },
  "frontend-as-distributed-system": {
    "links": [
      "frontend-system-design-interview",
      "frontend-state-architecture",
      "fe-sd-news-feed",
      "retries",
      "idempotency-key",
      "frontend-browser-cache",
      "client-data-cache",
      "optimistic-locking",
      "browser-storage",
      "clock-skew",
      "code-splitting",
      "api-versioning",
      "distributed-tracing"
    ],
    "mentions": [
      "frontend-testing-strategy",
      "spa-auth-token-storage",
      "realtime-communication",
      "resilience-patterns",
      "cors",
      "http-methods",
      "dns"
    ]
  },
  "frontend-state-architecture": {
    "links": [
      "frontend-system-design-interview",
      "frontend-as-distributed-system",
      "client-data-cache",
      "rendering-csr-spa",
      "html-form-http",
      "js-immutability-react",
      "fp-in-react",
      "react-rerender",
      "browser-storage"
    ],
    "mentions": [
      "react-state-management-libraries",
      "react-forms-actions",
      "react-client-routing",
      "frontend-testing-strategy",
      "react-memoization-hooks",
      "loading-patterns",
      "ddd-tactical-patterns",
      "db-modeling-normalization"
    ]
  },
  "frontend-system-design-interview": {
    "links": [
      "sd-autocomplete-trie",
      "frontend-state-architecture",
      "frontend-as-distributed-system",
      "fe-sd-news-feed",
      "api-pagination-sorting",
      "race-conditions",
      "debounce-throttle",
      "browser-fetch",
      "client-data-cache",
      "react-rerender",
      "core-web-vitals",
      "code-splitting",
      "performance-metrics-measurement",
      "frontend-error-tracking",
      "rendering-strategies",
      "loading-patterns"
    ],
    "mentions": [
      "frontend-i18n-intl",
      "html-form-http",
      "http-caching-cdn",
      "frontend-testing-strategy",
      "html-semantics",
      "sd-split-web-and-db",
      "lossy-counting",
      "sd-cache-and-cdn-tier",
      "postgres-query-planner",
      "gateway"
    ]
  },
  "linux-network-tuning": {
    "links": [
      "tcp-connection-lifecycle",
      "ports-and-sockets",
      "linux-namespaces-cgroups",
      "rate-limiting-in-practice",
      "connection-pool",
      "linux-systemd-systemctl",
      "iptables-basics",
      "k8s-kube-proxy-modes",
      "network-monitoring"
    ],
    "mentions": [
      "iptables-nat",
      "vpc-subnets-route-tables",
      "os-kernel-system-calls",
      "k8s-architecture",
      "sd-start-single-server",
      "shell-environment-startup",
      "sql-batch-timeout-pool",
      "linux-users-groups-sudo",
      "udp-and-quic",
      "dns"
    ]
  },
  "bash-scripting": {
    "links": [
      "cron-jobs",
      "backup-strategy",
      "linux-processes-signals",
      "linux-systemd-systemctl",
      "iac-basics"
    ],
    "mentions": [
      "bash-expansions-variables",
      "ansible-network-automation",
      "postgres-operations",
      "shell-redirection-pipes",
      "shells-posix-compat"
    ]
  },
  "ssh-in-practice": {
    "links": [
      "git-remote-collaboration",
      "linux-systemd-systemctl",
      "iptables-basics",
      "linux-files-permissions",
      "tcp-connection-lifecycle",
      "linux-processes-signals",
      "ports-and-sockets"
    ],
    "mentions": [
      "browser-fetch",
      "vpc-subnets-route-tables",
      "ansible-network-automation",
      "public-key-key-exchange",
      "autoscaling",
      "iptables-nat",
      "cookie-session-login",
      "linux-archive-transfer",
      "dns"
    ]
  },
  "linux-performance-triage": {
    "links": [
      "monitoring-basics",
      "virtual-memory-paging",
      "page-cache-disk-io",
      "linux-processes-signals",
      "event-loop",
      "tcp-reliability-congestion",
      "packet-capture-tcpdump",
      "osi-in-practice"
    ],
    "mentions": [
      "json-crud-http",
      "linux-namespaces-cgroups",
      "virtualization-hypervisors",
      "os-kernel-system-calls",
      "pattern-prototype",
      "redis-basics",
      "block-file-object-storage"
    ]
  },
  "page-cache-disk-io": {
    "links": [
      "virtual-memory-paging",
      "postgres-architecture",
      "linux-processes-signals",
      "linux-performance-triage"
    ],
    "mentions": [
      "mysql-innodb-basics",
      "rw-uber-schemaless-docstore",
      "os-kernel-system-calls",
      "linux-disks-filesystems",
      "sd-kv-store-write-read-path",
      "message-queue-basics",
      "block-file-object-storage",
      "acid-transactions"
    ]
  },
  "virtual-memory-paging": {
    "links": [
      "sd-latency-numbers",
      "page-cache-disk-io",
      "redis-persistence-ha",
      "k8s-pod-resources",
      "linux-namespaces-cgroups",
      "linux-performance-triage",
      "garbage-collection",
      "java-jvm-memory-gc"
    ],
    "mentions": [
      "process-vs-thread",
      "virtualization-hypervisors",
      "js-numbers-bigint",
      "ds-hash-map",
      "linux-disks-filesystems",
      "bit-manipulation",
      "redis-basics"
    ]
  },
  "owasp-top-10-map": {
    "links": [
      "authn-vs-authz",
      "csrf",
      "cors",
      "ssrf",
      "web-security-headers",
      "nginx-https-performance",
      "iam-basics",
      "security-groups-nacl",
      "k8s-security-context",
      "k8s-rbac",
      "postgres-roles-security",
      "dependency-hell",
      "semantic-versioning",
      "github-actions-docker-ecr",
      "git-large-files-secrets",
      "https-tls",
      "encryption-in-transit",
      "encryption-at-rest",
      "secrets-management",
      "jwt-key-rotation",
      "sql-injection",
      "xss",
      "rate-limiting-in-practice",
      "idempotency-key",
      "ddos-protection",
      "cookie-session-login",
      "token-login",
      "oauth",
      "mfa-totp",
      "passkeys-webauthn",
      "sso-saml-oidc",
      "zero-trust-architecture",
      "dockerfile-image-layers",
      "structured-logging",
      "centralized-logging-pipeline",
      "debugging-with-logs",
      "k8s-audit-logging",
      "frontend-error-tracking",
      "timeouts",
      "circuit-breaker",
      "express-middleware",
      "ids-ips",
      "waf"
    ],
    "mentions": [
      "password-attacks-credential-stuffing",
      "threat-modeling-stride",
      "hash-hmac-password-hashing",
      "input-validation-secure-coding",
      "code-review-practices"
    ]
  },
  "web-security-headers": {
    "links": [
      "nginx-https-performance",
      "xss",
      "cors",
      "thread-safety",
      "owasp-top-10-map"
    ],
    "mentions": [
      "nextjs-app-router-routing",
      "frontend-testing-strategy",
      "cpu-pipelining-branch-prediction",
      "rendering-strategies",
      "input-validation-secure-coding",
      "what-happens-google-com"
    ]
  },
  "sso-saml-oidc": {
    "links": [
      "oauth",
      "jwt-key-rotation",
      "passkeys-webauthn",
      "csrf"
    ],
    "mentions": [
      "cookie-session-login",
      "html-form-http",
      "token-login",
      "shells-posix-compat",
      "cloud-service-models-shared-responsibility",
      "sli-slo",
      "db-modeling-normalization"
    ]
  },
  "mfa-totp": {
    "links": [
      "passkeys-webauthn",
      "encryption-at-rest",
      "clock-skew",
      "rate-limiting-in-practice",
      "sso-saml-oidc"
    ],
    "mentions": [
      "cookie-session-login",
      "password-attacks-credential-stuffing",
      "oauth",
      "bit-manipulation",
      "db-modeling-normalization"
    ]
  },
  "passkeys-webauthn": {
    "links": [
      "cookie-session-login",
      "token-login",
      "mfa-totp",
      "sso-saml-oidc",
      "xss"
    ],
    "mentions": [
      "frontend-testing-strategy",
      "base64",
      "digital-signatures-certificates",
      "bit-manipulation"
    ]
  },
  "stream-processing": {
    "links": [
      "sd-ad-click-stream-windows",
      "sd-ad-click-exactly-once",
      "kafka-basics",
      "cdc-change-data-capture",
      "backpressure",
      "olap-star-schema"
    ],
    "mentions": [
      "kafka-to-lake-pipeline",
      "k8s-statefulset",
      "sliding-window-pattern",
      "js-array-transform",
      "message-delivery-semantics",
      "db-type-embedded",
      "db-type-key-value",
      "sd-object-storage-architecture",
      "pub-sub",
      "tcp-reliability-congestion",
      "postgres-architecture",
      "dns"
    ]
  },
  "olap-star-schema": {
    "links": [
      "db-type-columnar-olap",
      "cdc-change-data-capture",
      "hyperloglog",
      "sql-views-materialized",
      "stream-processing"
    ],
    "mentions": [
      "postgres-reporting-sql",
      "sql-query-tuning",
      "sql-subqueries-exists-lateral",
      "db-type-relational",
      "db-keys-denormalization",
      "dbt-transformations",
      "db-modeling-normalization"
    ]
  },
  "cdc-change-data-capture": {
    "links": [
      "event-driven-architecture",
      "transactional-outbox",
      "db-type-columnar-olap",
      "zero-downtime-migrations",
      "kafka-basics",
      "message-delivery-semantics",
      "stream-processing",
      "olap-star-schema"
    ],
    "mentions": [
      "kafka-to-lake-pipeline",
      "elasticsearch-inverted-index",
      "mysql-replication-online-ddl",
      "page-cache-disk-io",
      "postgres-architecture",
      "db-replication-sharding",
      "db-type-wide-column",
      "sql-basics"
    ]
  },
  "typescript-roadmap": {
    "links": [
      "javascript-roadmap",
      "ts-type-system-basics",
      "ts-generics",
      "ts-narrowing",
      "ts-utility-mapped-types",
      "tsconfig-strict",
      "typescript-in-react",
      "js-var-let-const",
      "js-es-modules",
      "js-hoisting-tdz",
      "js-currying-partial",
      "fp-composition-pipe",
      "design-patterns-overview"
    ],
    "mentions": [
      "browser-storage",
      "json-crud-http",
      "js-template-literals",
      "linters-formatters",
      "input-validation-secure-coding",
      "react-custom-hooks-rules",
      "js-destructuring",
      "frontend-monorepo",
      "js-closures"
    ]
  },
  "typescript-in-react": {
    "links": [
      "ts-generics",
      "ts-narrowing",
      "ts-utility-mapped-types",
      "react-rerender",
      "ts-type-system-basics",
      "event-propagation",
      "typescript-roadmap"
    ],
    "mentions": [
      "react-useeffect",
      "rendering-strategies",
      "react-useref-layout-effect",
      "js-function-forms",
      "react-custom-hooks-rules",
      "js-destructuring",
      "js-hoisting-tdz",
      "oop-four-pillars"
    ]
  },
  "tsconfig-strict": {
    "links": [
      "ts-type-system-basics",
      "ts-narrowing",
      "js-this-binding",
      "js-es-modules",
      "frontend-monorepo",
      "typescript-in-react"
    ],
    "mentions": [
      "npm-package-publishing",
      "css-styling-approaches",
      "react-jsx-components",
      "js-classes",
      "js-function-forms",
      "ts-declaration-files-modules",
      "js-strict-mode",
      "js-pure-functions",
      "js-destructuring",
      "runtime-validation-zod",
      "frontend-build-tooling"
    ]
  },
  "ts-utility-mapped-types": {
    "links": [
      "ts-type-system-basics",
      "ts-generics",
      "ts-narrowing",
      "tsconfig-strict",
      "typescript-in-react"
    ],
    "mentions": [
      "ts-conditional-infer",
      "js-template-literals",
      "db-types-overview"
    ]
  },
  "recursion-backtracking": {
    "links": [
      "js-execution-context",
      "js-memoization",
      "js-primitive-vs-reference",
      "dynamic-programming",
      "big-o-notation",
      "ds-binary-tree-bst",
      "ds-graph-bfs-dfs"
    ],
    "mentions": [
      "regex-and-globbing",
      "js-strict-mode"
    ]
  },
  "binary-search": {
    "links": [
      "big-o-notation",
      "sorting-algorithms",
      "ds-hash-map",
      "ds-binary-tree-bst",
      "db-index",
      "git-tips-advanced",
      "recursion-backtracking"
    ],
    "mentions": [
      "api-scaling-ladder",
      "load-testing-k6",
      "sql-filtering-operators",
      "floating-point-numbers",
      "bit-manipulation"
    ]
  },
  "sorting-algorithms": {
    "links": [
      "big-o-notation",
      "js-array-mutation",
      "ds-heap",
      "js-execution-context",
      "api-pagination-sorting",
      "db-index",
      "event-loop",
      "binary-search"
    ],
    "mentions": [
      "randomized-algorithms",
      "ds-linked-list",
      "db-index-design"
    ]
  },
  "ts-narrowing": {
    "links": [
      "ts-type-system-basics",
      "ts-generics",
      "js-truthy-falsy-typeof",
      "js-prototype-chain",
      "tsconfig-strict",
      "typescript-in-react",
      "fp-in-react",
      "ts-utility-mapped-types",
      "typescript-roadmap"
    ],
    "mentions": [
      "json-crud-http",
      "js-numbers-bigint",
      "input-validation-secure-coding",
      "js-function-forms",
      "code-review-practices",
      "js-pure-functions",
      "js-destructuring"
    ]
  },
  "ts-generics": {
    "links": [
      "ts-type-system-basics",
      "ts-utility-mapped-types",
      "typescript-in-react",
      "ts-conditional-infer",
      "ts-narrowing"
    ],
    "mentions": [
      "browser-storage",
      "js-function-forms",
      "ts-declaration-files-modules",
      "js-destructuring"
    ]
  },
  "ts-type-system-basics": {
    "links": [
      "ts-generics",
      "ts-narrowing",
      "ts-utility-mapped-types",
      "tsconfig-strict",
      "typescript-in-react",
      "typescript-roadmap"
    ],
    "mentions": [
      "js-prototype-chain",
      "input-validation-secure-coding",
      "runtime-validation-zod",
      "ts-declaration-files-modules",
      "js-destructuring",
      "frontend-build-tooling"
    ]
  },
  "algorithms-overview": {
    "links": [
      "data-structures-overview",
      "big-o-notation",
      "recursion-backtracking",
      "dynamic-programming",
      "greedy-algorithms",
      "binary-search",
      "ds-hash-map",
      "ds-array-matrix",
      "ds-graph-bfs-dfs",
      "ds-union-find",
      "ds-heap",
      "sorting-algorithms",
      "ds-stack-queue-deque",
      "ds-binary-tree-bst",
      "ds-trie"
    ],
    "mentions": [
      "sliding-window-pattern",
      "shortest-path-algorithms",
      "js-numbers-bigint",
      "bit-manipulation",
      "sd-maps-tiles-routing",
      "bloom-filter"
    ]
  },
  "greedy-algorithms": {
    "links": [
      "dynamic-programming",
      "sorting-algorithms",
      "big-o-notation",
      "ds-heap",
      "ds-graph-bfs-dfs",
      "ds-union-find",
      "load-balancing-algorithms",
      "algorithms-overview"
    ],
    "mentions": [
      "minimum-spanning-tree",
      "complexity-classes-p-np",
      "shortest-path-algorithms",
      "ds-array-matrix",
      "sd-maps-tiles-routing",
      "recursion-backtracking",
      "postgres-query-planner"
    ]
  },
  "dynamic-programming": {
    "links": [
      "greedy-algorithms",
      "big-o-notation",
      "js-memoization",
      "recursion-backtracking",
      "ds-graph-bfs-dfs",
      "binary-search",
      "js-primitive-vs-reference",
      "sorting-algorithms",
      "algorithms-overview"
    ],
    "mentions": [
      "elasticsearch-inverted-index",
      "js-numbers-bigint",
      "complexity-classes-p-np",
      "divide-and-conquer",
      "shortest-path-algorithms"
    ]
  },
  "performance-metrics-measurement": {
    "links": [
      "core-web-vitals",
      "lighthouse-explained",
      "rendering-strategies",
      "resource-hints-loading",
      "css-performance",
      "web-font-optimization",
      "event-loop",
      "lazy-loading-strategies",
      "code-splitting",
      "rendering-performance-optimization",
      "browser-rendering-pipeline",
      "image-optimization",
      "data-fetching-optimization",
      "bundler-basics",
      "frontend-performance-map"
    ],
    "mentions": [
      "frontend-browser-cache",
      "frontend-testing-strategy",
      "browser-fetch",
      "nextjs-app-router-routing",
      "dns"
    ]
  },
  "lighthouse-explained": {
    "links": [
      "core-web-vitals",
      "performance-metrics-measurement",
      "code-splitting",
      "bundler-basics"
    ],
    "mentions": [
      "frontend-browser-cache",
      "frontend-testing-strategy",
      "ab-testing",
      "http-versions",
      "waf"
    ]
  },
  "image-optimization": {
    "links": [
      "core-web-vitals",
      "resource-hints-loading",
      "lazy-loading-strategies",
      "structured-data-json-ld"
    ],
    "mentions": [
      "seo-for-spa",
      "loading-patterns",
      "pattern-proxy"
    ]
  },
  "resource-hints-loading": {
    "links": [
      "code-splitting",
      "frontend-browser-cache",
      "core-web-vitals",
      "browser-rendering-pipeline",
      "image-optimization",
      "http-versions",
      "what-happens-google-com",
      "http-status-codes",
      "bundler-basics"
    ],
    "mentions": [
      "frontend-testing-strategy",
      "https-tls",
      "js-pure-functions",
      "cors",
      "dns"
    ]
  },
  "bundler-basics": {
    "links": [
      "code-splitting",
      "js-es-modules",
      "js-iife-module-pattern",
      "js-optional-chaining-nullish",
      "frontend-error-tracking",
      "module-federation-deep-dive",
      "build-caching",
      "monorepo-build-cache",
      "resource-hints-loading"
    ],
    "mentions": [
      "npm-package-publishing",
      "react-jsx-components",
      "js-hoisting-tdz",
      "frontend-build-tooling"
    ]
  },
  "frontend-performance-map": {
    "links": [
      "lazy-loading-strategies",
      "core-web-vitals",
      "performance-metrics-measurement",
      "lighthouse-explained",
      "frontend-browser-cache",
      "http-caching-cdn",
      "client-data-cache",
      "bundler-basics",
      "code-splitting",
      "image-optimization",
      "web-font-optimization",
      "css-performance",
      "data-fetching-optimization",
      "resource-hints-loading",
      "rendering-strategies",
      "streaming-ssr-suspense",
      "http-versions",
      "browser-rendering-pipeline",
      "rendering-performance-optimization",
      "animation-performance",
      "react-rerender",
      "event-loop",
      "hydration",
      "islands-resumability",
      "debounce-throttle",
      "js-memory-leak"
    ],
    "mentions": [
      "frontend-testing-strategy",
      "pattern-proxy"
    ]
  },
  "data-fetching-optimization": {
    "links": [
      "rendering-csr-spa",
      "client-data-cache",
      "abort-controller",
      "lazy-loading-strategies",
      "frontend-performance-map",
      "n-plus-one-queries",
      "http-versions",
      "gateway",
      "graphql-basics",
      "nginx-https-performance",
      "debounce-throttle",
      "api-pagination-sorting",
      "loading-patterns"
    ],
    "mentions": [
      "browser-fetch",
      "streaming-ssr-suspense",
      "frontend-testing-strategy",
      "sql-query-rewrite"
    ]
  },
  "lazy-loading-strategies": {
    "links": [
      "code-splitting",
      "data-fetching-optimization",
      "frontend-performance-map",
      "scroll-triggered-intersection-observer",
      "image-optimization",
      "html-media-embed",
      "hydration",
      "rendering-performance-optimization",
      "islands-resumability",
      "core-web-vitals",
      "resource-hints-loading"
    ],
    "mentions": [
      "nextjs-app-router-routing",
      "frontend-testing-strategy",
      "browser-rendering-pipeline",
      "rendering-strategies",
      "pattern-proxy"
    ]
  },
  "micro-frontend-integration-patterns": {
    "links": [
      "micro-frontends",
      "module-federation-deep-dive",
      "streaming-ssr-suspense",
      "timeouts",
      "js-memory-leak",
      "canary-release",
      "rollback-strategy",
      "frontend-error-tracking",
      "distributed-tracing"
    ],
    "mentions": [
      "web-components-shadow-dom",
      "react-suspense-error-boundary",
      "http-caching-cdn",
      "react-useeffect",
      "frontend-testing-strategy",
      "rendering-strategies",
      "css-custom-properties",
      "design-system-building",
      "microservices",
      "cors"
    ]
  },
  "module-federation-deep-dive": {
    "links": [
      "micro-frontends",
      "micro-frontend-integration-patterns",
      "resource-hints-loading"
    ],
    "mentions": [
      "react-suspense-error-boundary",
      "frontend-monorepo",
      "frontend-testing-strategy",
      "lazy-loading-strategies",
      "code-splitting",
      "js-es-modules",
      "react-rerender",
      "cors",
      "css-performance",
      "dns"
    ]
  },
  "monorepo-build-cache": {
    "links": [
      "frontend-monorepo",
      "build-caching",
      "dockerfile-image-layers",
      "git-branching-strategy",
      "micro-frontends"
    ],
    "mentions": [
      "github-actions-docker-ecr",
      "git-branch-merge",
      "tsconfig-strict",
      "dependency-hell",
      "git-remote-collaboration",
      "npm-package-publishing"
    ]
  },
  "frontend-monorepo": {
    "links": [
      "monorepo-build-cache",
      "micro-frontends",
      "dependency-hell",
      "js-es-modules",
      "semantic-versioning",
      "git-branching-strategy"
    ],
    "mentions": [
      "github-repo-governance",
      "build-caching",
      "tsconfig-strict",
      "http-caching-cdn",
      "ts-declaration-files-modules",
      "api-versioning",
      "js-hoisting-tdz",
      "microservices"
    ]
  },
  "web-font-optimization": {
    "links": [
      "css-performance",
      "core-web-vitals"
    ],
    "mentions": [
      "cors",
      "frontend-testing-strategy",
      "resource-hints-loading",
      "icon-system-svg",
      "http-versions",
      "css-typography",
      "dns"
    ]
  },
  "css-performance": {
    "links": [
      "browser-rendering-pipeline",
      "rendering-performance-optimization",
      "web-font-optimization",
      "react-rerender"
    ],
    "mentions": [
      "css-styling-approaches",
      "nextjs-app-router-routing",
      "css-cascade-specificity",
      "frontend-testing-strategy",
      "lighthouse-explained",
      "rendering-strategies",
      "css-custom-properties",
      "animation-performance",
      "http-versions",
      "bloom-filter",
      "count-min-sketch",
      "dns"
    ]
  },
  "fp-in-react": {
    "links": [
      "js-pure-functions",
      "js-immutability-react",
      "js-closures",
      "react-rerender",
      "functional-programming-basics",
      "js-memoization"
    ],
    "mentions": [
      "react-memoization-hooks",
      "json-crud-http",
      "react-state-management-libraries",
      "react-custom-hooks-rules",
      "fp-composition-pipe",
      "js-primitive-vs-reference"
    ]
  },
  "fp-functors-monads-js": {
    "links": [
      "functional-programming-basics",
      "fp-composition-pipe",
      "js-array-transform",
      "js-promises",
      "client-data-cache",
      "fp-in-react"
    ],
    "mentions": [
      "input-validation-secure-coding",
      "nodejs-orm-query-builder"
    ]
  },
  "fp-composition-pipe": {
    "links": [
      "functional-programming-basics",
      "js-currying-partial",
      "js-async-await",
      "js-promise-combinators",
      "fp-functors-monads-js",
      "code-splitting",
      "fp-in-react"
    ],
    "mentions": [
      "pattern-decorator",
      "js-function-forms"
    ]
  },
  "functional-programming-basics": {
    "links": [
      "js-first-class-callbacks",
      "js-pure-functions",
      "js-immutability-react",
      "fp-composition-pipe",
      "fp-functors-monads-js",
      "fp-in-react",
      "react-server-components",
      "js-object-methods",
      "js-primitive-vs-reference",
      "js-array-mutation",
      "js-execution-context",
      "js-array-transform",
      "js-spread-rest"
    ],
    "mentions": [
      "rendering-strategies",
      "js-function-forms",
      "js-runtimes-node-deno-bun",
      "js-closures"
    ]
  },
  "logging-tools-overview": {
    "links": [
      "frontend-error-tracking",
      "debugging-with-logs",
      "centralized-logging-pipeline",
      "curl-for-debugging",
      "network-troubleshooting-by-layer",
      "nginx-reverse-proxy",
      "linux-systemd-systemctl",
      "kubectl-essentials",
      "k8s-pod-troubleshooting",
      "grafana-dashboards",
      "structured-logging"
    ],
    "mentions": [
      "observability-basics",
      "frontend-testing-strategy",
      "opensearch-cluster-operations",
      "cookie-session-login",
      "k8s-pod-resources",
      "sd-start-single-server",
      "linux-disks-filesystems",
      "osi-in-practice",
      "http-status-codes",
      "cloud-service-models-shared-responsibility",
      "dns"
    ]
  },
  "debugging-with-logs": {
    "links": [
      "structured-logging",
      "centralized-logging-pipeline",
      "distributed-tracing",
      "frontend-error-tracking",
      "logging-tools-overview",
      "timeouts",
      "clock-skew",
      "feature-flags",
      "idempotency-key"
    ],
    "mentions": [
      "rendering-ssr",
      "opensearch-cluster-operations",
      "elasticsearch-aggregations",
      "sd-payment-flow",
      "http-methods",
      "dns"
    ]
  },
  "frontend-error-tracking": {
    "links": [
      "debugging-with-logs",
      "logging-tools-overview",
      "js-promises",
      "code-splitting",
      "cors",
      "js-classes",
      "hydration",
      "rollback-strategy",
      "structured-logging",
      "distributed-tracing"
    ],
    "mentions": [
      "observability-basics",
      "frontend-testing-strategy",
      "browser-fetch",
      "cpu-instruction-cycle",
      "rendering-strategies",
      "react-suspense-error-boundary",
      "http-status-codes",
      "cloud-service-models-shared-responsibility",
      "bundler-basics"
    ]
  },
  "rendering-performance-optimization": {
    "links": [
      "browser-rendering-pipeline",
      "animation-performance",
      "core-web-vitals",
      "css-performance",
      "react-rerender",
      "scroll-triggered-intersection-observer",
      "dom-basics",
      "event-loop"
    ],
    "mentions": [
      "css-color-background",
      "frontend-testing-strategy",
      "css-custom-properties",
      "smoke-sanity-regression-testing",
      "html-semantics",
      "loading-patterns"
    ]
  },
  "browser-rendering-pipeline": {
    "links": [
      "what-happens-google-com",
      "rendering-performance-optimization",
      "streaming-ssr-suspense",
      "core-web-vitals",
      "resource-hints-loading",
      "css-performance",
      "dom-basics",
      "animation-performance",
      "event-loop",
      "js-timers-accuracy",
      "rendering-csr-spa"
    ],
    "mentions": [
      "frontend-testing-strategy",
      "rendering-strategies",
      "packet-encapsulation",
      "js-es-modules",
      "pattern-proxy"
    ]
  },
  "api-gateway-use-cases": {
    "links": [
      "gateway",
      "reverse-proxy-lb-api-gateway",
      "rate-limiting-algorithms",
      "rate-limiting-in-practice",
      "token-login",
      "jwt-key-rotation",
      "load-balancing-algorithms",
      "https-tls",
      "http-caching-cdn",
      "api-versioning",
      "circuit-breaker",
      "structured-logging",
      "distributed-tracing",
      "authn-vs-authz",
      "idempotency-key",
      "tail-latency",
      "high-availability"
    ],
    "mentions": [
      "spring-cloud-vs-kubernetes",
      "rest-api-design",
      "proxy-reverse-proxy",
      "http-methods",
      "resilience-patterns",
      "service-mesh",
      "input-validation-secure-coding",
      "build-caching",
      "vpc-basics",
      "osi-in-practice",
      "redis-basics",
      "http-status-codes",
      "what-happens-google-com",
      "oauth"
    ]
  },
  "git-features-map": {
    "links": [
      "git-internals-basics",
      "git-staging-area",
      "git-branch-merge",
      "git-merge-conflict",
      "git-branching-strategy",
      "git-remote-collaboration",
      "git-stash-reflog",
      "semantic-versioning",
      "git-rebase",
      "git-tips-advanced",
      "git-stacked-prs",
      "git-undo",
      "git-troubleshooting"
    ],
    "mentions": []
  },
  "git-stacked-prs": {
    "links": [
      "git-rebase",
      "git-branching-strategy",
      "git-remote-collaboration",
      "git-features-map",
      "git-branch-merge",
      "git-stash-reflog",
      "git-tips-advanced"
    ],
    "mentions": [
      "github-pull-request-flow",
      "github-actions-docker-ecr"
    ]
  },
  "api-scaling-ladder": {
    "links": [
      "sd-start-single-server",
      "sd-sharding-intro",
      "db-architecture-by-scale",
      "bullmq-job-queue",
      "sd-capacity-estimation",
      "latency-bandwidth-throughput",
      "nodejs-server-runtime",
      "percentile-latency",
      "connection-pool",
      "caching-strategies",
      "sd-cache-and-cdn-tier",
      "sd-load-balancer-stateless",
      "load-balancer-basics",
      "nginx-reverse-proxy",
      "scaling-horizontal-vertical",
      "db-index",
      "db-index-design",
      "sd-db-replication-intro",
      "db-replication-sharding",
      "kafka-basics",
      "message-queue-basics",
      "backpressure",
      "db-sharding",
      "reverse-proxy-lb-api-gateway",
      "gateway",
      "rate-limiting-in-practice",
      "sd-multi-datacenter",
      "monitoring-basics",
      "autoscaling",
      "system-design-study-path"
    ],
    "mentions": [
      "pessimistic-locking",
      "nodejs-web-frameworks",
      "http-caching-cdn",
      "load-testing-k6",
      "sd-object-storage-architecture",
      "event-loop",
      "osi-in-practice",
      "sql-batch-timeout-pool",
      "redis-basics",
      "db-partitioning",
      "mongodb-document-model"
    ]
  },
  "bullmq-job-queue": {
    "links": [
      "message-queue-basics",
      "dead-letter-queue",
      "api-scaling-ladder",
      "event-loop",
      "nodejs-server-runtime",
      "exponential-backoff-jitter",
      "idempotency-key",
      "rate-limiting-algorithms",
      "cron-jobs",
      "distributed-lock",
      "k8s-pod-lifecycle",
      "redis-memory-eviction",
      "redis-persistence-ha",
      "redis-cluster",
      "connection-pool",
      "k8s-hpa",
      "kafka-basics",
      "rabbitmq-basics"
    ],
    "mentions": [
      "pub-sub",
      "js-pure-functions",
      "redis-basics",
      "dns",
      "webhooks"
    ]
  },
  "data-structures-overview": {
    "links": [
      "big-o-notation",
      "ds-trie",
      "ds-hash-map",
      "ds-binary-tree-bst",
      "ds-heap",
      "ds-stack-queue-deque",
      "ds-array-matrix",
      "ds-linked-list",
      "ds-graph-bfs-dfs",
      "ds-union-find",
      "sd-maps-tiles-routing",
      "bloom-filter"
    ],
    "mentions": [
      "sliding-window-pattern",
      "js-memoization",
      "sd-autocomplete-trie"
    ]
  },
  "ds-union-find": {
    "links": [
      "ds-graph-bfs-dfs",
      "data-structures-overview",
      "ds-heap",
      "ds-hash-map"
    ],
    "mentions": [
      "minimum-spanning-tree",
      "ds-linked-list",
      "big-o-notation"
    ]
  },
  "ds-graph-bfs-dfs": {
    "links": [
      "ds-trie",
      "ds-union-find",
      "data-structures-overview",
      "ds-stack-queue-deque",
      "ds-heap",
      "sd-maps-tiles-routing",
      "db-type-graph"
    ],
    "mentions": [
      "shortest-path-algorithms",
      "linters-formatters",
      "dom-basics",
      "binary-search",
      "recursion-backtracking",
      "js-closures"
    ]
  },
  "ds-trie": {
    "links": [
      "sd-autocomplete-trie",
      "data-structures-overview",
      "layer-ip-routing-icmp",
      "ds-binary-tree-bst",
      "ds-graph-bfs-dfs"
    ],
    "mentions": [
      "nodejs-web-frameworks",
      "js-memory-leak",
      "string-search-algorithms",
      "ds-hash-map",
      "big-o-notation"
    ]
  },
  "ds-heap": {
    "links": [
      "ds-binary-tree-bst",
      "ds-hash-map",
      "js-array-mutation",
      "percentile-latency",
      "event-loop",
      "js-timers-accuracy",
      "sd-maps-tiles-routing",
      "ds-graph-bfs-dfs"
    ],
    "mentions": [
      "sorting-algorithms",
      "db-type-wide-column",
      "db-index-design"
    ]
  },
  "ds-binary-tree-bst": {
    "links": [
      "ds-hash-map",
      "ds-heap",
      "data-structures-overview",
      "ds-graph-bfs-dfs",
      "dom-basics",
      "ds-stack-queue-deque",
      "db-index",
      "sd-leaderboard-sorted-set"
    ],
    "mentions": [
      "balanced-search-trees",
      "cpu-instruction-cycle",
      "page-cache-disk-io",
      "ds-linked-list",
      "redis-basics"
    ]
  },
  "ds-hash-map": {
    "links": [
      "ds-array-matrix",
      "ds-stack-queue-deque",
      "ds-binary-tree-bst",
      "ds-heap",
      "data-structures-overview",
      "js-object-methods",
      "js-memoization",
      "ds-trie",
      "bloom-filter",
      "consistent-hashing"
    ],
    "mentions": [
      "js-equality-coercion",
      "db-index",
      "sd-latency-numbers",
      "db-sharding",
      "event-loop",
      "two-pointers-pattern",
      "big-o-notation"
    ]
  },
  "ds-stack-queue-deque": {
    "links": [
      "js-array-mutation",
      "ds-array-matrix",
      "ds-linked-list",
      "js-execution-context",
      "pattern-command",
      "big-o-notation",
      "message-queue-basics",
      "event-loop",
      "ds-graph-bfs-dfs",
      "sd-stock-exchange-low-latency",
      "react-rerender",
      "backpressure",
      "ds-heap",
      "data-structures-overview"
    ],
    "mentions": [
      "sliding-window-pattern",
      "sd-latency-numbers",
      "centralized-logging-pipeline",
      "js-memory-leak"
    ]
  },
  "ds-linked-list": {
    "links": [
      "ds-array-matrix",
      "ds-stack-queue-deque",
      "thread-safety",
      "ds-heap",
      "garbage-collection",
      "caching-strategies",
      "redis-memory-eviction",
      "react-rerender",
      "js-memory-leak"
    ],
    "mentions": [
      "js-memoization",
      "big-o-notation",
      "cpu-cache-hierarchy",
      "sorting-algorithms",
      "js-array-mutation",
      "redis-basics"
    ]
  },
  "ds-array-matrix": {
    "links": [
      "ds-linked-list",
      "ds-stack-queue-deque",
      "js-array-mutation",
      "big-o-notation",
      "ds-hash-map",
      "js-primitive-vs-reference",
      "ds-heap",
      "ds-binary-tree-bst",
      "data-structures-overview"
    ],
    "mentions": [
      "cpu-cache-hierarchy",
      "js-prototype-chain",
      "sliding-window-pattern",
      "two-pointers-pattern",
      "segment-tree-fenwick",
      "js-memoization"
    ]
  },
  "api-styles-overview": {
    "links": [
      "event-driven-architecture",
      "message-queue-basics",
      "rest-api-design",
      "api-pagination-sorting",
      "grpc",
      "graphql-basics",
      "webhooks",
      "websocket-deep-dive",
      "http-streaming-sse",
      "realtime-communication",
      "api-versioning",
      "rate-limiting-in-practice",
      "microservices",
      "idempotency-key",
      "sd-chat-connections"
    ],
    "mentions": [
      "server-sent-events",
      "osi-in-practice",
      "rabbitmq-basics",
      "http-versions",
      "kafka-basics",
      "http-status-codes",
      "ssrf",
      "mcp-protocol",
      "sql-query-rewrite",
      "gateway"
    ]
  },
  "http-streaming-sse": {
    "links": [
      "realtime-communication",
      "server-sent-events",
      "http-versions",
      "streaming-ssr-suspense",
      "backpressure",
      "loading-patterns",
      "nginx-reverse-proxy",
      "timeouts",
      "websocket-deep-dive",
      "long-polling"
    ],
    "mentions": [
      "nodejs-fs-streams",
      "browser-fetch",
      "elasticsearch-inverted-index",
      "json-crud-http",
      "rendering-strategies",
      "self-hosting-llm-inference",
      "nodejs-http-clients",
      "input-validation-secure-coding",
      "http-status-codes",
      "what-happens-google-com",
      "grpc"
    ]
  },
  "graphql-basics": {
    "links": [
      "api-styles-overview",
      "rest-api-design",
      "graphql-schema-type-system",
      "graphql-operations-syntax",
      "n-plus-one-queries",
      "websocket-deep-dive",
      "http-streaming-sse",
      "graphql-subscriptions-defer",
      "graphql-execution-validation",
      "client-data-cache",
      "graphql-client-caching",
      "api-versioning",
      "grpc",
      "graphql-pagination-connections",
      "graphql-authorization"
    ],
    "mentions": [
      "edge-caching",
      "observability-basics",
      "pattern-iterator",
      "realtime-communication",
      "proxy-reverse-proxy",
      "distributed-tracing",
      "pattern-proxy",
      "sql-batch-timeout-pool",
      "http-status-codes",
      "cookie-session-login",
      "sql-query-rewrite",
      "db-modeling-normalization",
      "gateway"
    ]
  },
  "docker-commands-workflow": {
    "links": [
      "docker-container-basics",
      "dockerfile-image-layers",
      "docker-network-volume",
      "structured-logging",
      "centralized-logging-pipeline",
      "k8s-pod-troubleshooting",
      "linux-processes-signals",
      "express-middleware",
      "github-actions-docker-ecr",
      "network-troubleshooting-by-layer",
      "docker-compose"
    ],
    "mentions": [
      "k8s-pod-resources",
      "linux-namespaces-cgroups",
      "bash-scripting"
    ]
  },
  "claude-code-fundamentals-map": {
    "links": [
      "claude-code-project-structure",
      "claude-code-extensions",
      "claude-code-context-window",
      "claude-code-parallel-and-scheduled"
    ],
    "mentions": [
      "claude-code-hooks-deep-dive",
      "system-prompt-design",
      "linters-formatters",
      "git-tips-advanced",
      "postgres-architecture",
      "mcp-protocol"
    ]
  },
  "claude-code-parallel-and-scheduled": {
    "links": [
      "git-tips-advanced",
      "claude-code-context-window",
      "git-merge-conflict",
      "claude-code-fundamentals-map"
    ],
    "mentions": [
      "github-actions-docker-ecr",
      "docker-compose",
      "git-branch-merge",
      "github-repo-governance",
      "postgres-architecture"
    ]
  },
  "claude-code-context-window": {
    "links": [
      "claude-code-project-structure",
      "claude-code-extensions",
      "claude-code-parallel-and-scheduled"
    ],
    "mentions": [
      "claude-code-hooks-deep-dive",
      "system-prompt-design",
      "claude-code-plugins-and-channels",
      "linux-disks-filesystems",
      "postgres-architecture",
      "mcp-protocol"
    ]
  },
  "claude-code-extensions": {
    "links": [
      "claude-code-project-structure",
      "claude-code-context-window",
      "rag-classic-pipeline"
    ],
    "mentions": [
      "git-remote-collaboration",
      "system-prompt-design",
      "claude-code-plugins-and-channels",
      "agent-tool-design",
      "code-review-practices",
      "osi-in-practice",
      "mcp-protocol"
    ]
  },
  "claude-code-project-structure": {
    "links": [
      "claude-code-extensions",
      "claude-code-context-window",
      "git-large-files-secrets",
      "claude-code-fundamentals-map"
    ],
    "mentions": [
      "mcp-protocol",
      "git-ignore-config",
      "git-tips-advanced",
      "ai-coding-agents",
      "fp-composition-pipe",
      "linux-fhs-file-commands",
      "shell-redirection-pipes"
    ]
  },
  "kafka-vs-rabbitmq-replay": {
    "links": [
      "kafka-basics",
      "rabbitmq-basics",
      "sd-mq-storage-partitions",
      "sd-mq-consumer-groups",
      "message-delivery-semantics",
      "event-sourcing",
      "dead-letter-queue",
      "transactional-outbox"
    ],
    "mentions": [
      "sd-object-storage-architecture",
      "pub-sub",
      "dns",
      "zero-downtime-migrations"
    ]
  },
  "db-performance-map": {
    "links": [
      "db-index",
      "db-index-design",
      "connection-pool",
      "caching-strategies",
      "db-replication-sharding",
      "db-partitioning",
      "bloom-filter",
      "db-sharding",
      "db-architecture-by-scale",
      "db-index-pitfalls",
      "caching-concepts-map",
      "sd-db-replication-intro",
      "sd-sharding-intro",
      "sql-query-tuning",
      "postgres-architecture"
    ],
    "mentions": [
      "postgres-connections-pg-hba",
      "mysql-innodb-basics",
      "sd-payment-flow",
      "sd-start-single-server",
      "sd-mq-storage-partitions",
      "sql-batch-timeout-pool",
      "redis-basics",
      "mongodb-document-model",
      "dns",
      "webhooks"
    ]
  },
  "sd-music-streaming": {
    "links": [
      "sd-video-upload-transcoding",
      "sd-video-streaming-cost",
      "system-design-study-path",
      "sd-capacity-estimation",
      "sd-object-storage-architecture",
      "sd-object-storage-durability",
      "sd-cache-and-cdn-tier",
      "sd-db-replication-intro",
      "sd-sharding-intro",
      "elasticsearch-inverted-index",
      "sd-autocomplete-trie",
      "sd-autocomplete-data-pipeline",
      "kafka-basics",
      "sd-ad-click-exactly-once",
      "vector-db",
      "sd-object-storage-versioning-multipart",
      "youtube-url-to-video"
    ],
    "mentions": [
      "caching-strategies",
      "db-index",
      "mongodb-document-model",
      "db-type-key-value",
      "monorepo-build-cache",
      "sd-start-single-server",
      "db-type-relational",
      "redis-basics"
    ]
  },
  "acid-vs-base": {
    "links": [
      "acid-transactions",
      "db-transaction-isolation",
      "db-consistency-cap",
      "eventual-consistency",
      "redis-basics",
      "optimistic-locking",
      "redis-persistence-ha",
      "distributed-transactions-2pc",
      "mongodb-document-model",
      "db-type-newsql",
      "saga-pattern",
      "transactional-outbox",
      "idempotency-key"
    ],
    "mentions": [
      "redis-cluster",
      "mongodb-replica-set-sharding",
      "db-type-wide-column",
      "db-type-key-value",
      "airflow-orchestration",
      "sd-start-single-server",
      "db-type-relational",
      "rw-google-spanner-truetime",
      "http-methods"
    ]
  },
  "centralized-logging-pipeline": {
    "links": [
      "structured-logging",
      "opensearch-cluster-operations",
      "distributed-tracing",
      "observability-basics",
      "elasticsearch-inverted-index",
      "alerting"
    ],
    "mentions": [
      "aws-ec2-ubuntu-server-setup",
      "k8s-daemonset",
      "k8s-pod-resources",
      "docker-container-basics",
      "sd-payment-flow",
      "sd-object-storage-architecture",
      "sd-metrics-storage-alerting",
      "kafka-basics",
      "osi-in-practice",
      "postgres-architecture"
    ]
  },
  "opensearch-cluster-operations": {
    "links": [
      "elasticsearch-inverted-index",
      "centralized-logging-pipeline"
    ],
    "mentions": [
      "k8s-pod-disruption-budget",
      "elasticsearch-aggregations",
      "elasticsearch-bulk-indexing",
      "k8s-statefulset",
      "rest-api-design",
      "sd-mq-storage-partitions",
      "resilience-patterns",
      "sd-object-storage-architecture",
      "db-types-overview",
      "http-status-codes",
      "what-happens-google-com",
      "token-login"
    ]
  },
  "jenkins-pipeline-basics": {
    "links": [
      "ci-cd-basics",
      "github-actions-docker-ecr",
      "build-caching",
      "webhooks"
    ],
    "mentions": [
      "github-apps-api",
      "github-actions-workflows",
      "github-repo-governance",
      "realtime-communication",
      "docker-container-basics",
      "jenkins-on-kubernetes",
      "proxy-reverse-proxy",
      "eks-cluster-basics"
    ]
  },
  "backend-engineer-roadmap": {
    "links": [
      "javascript-roadmap",
      "sql-study-path",
      "system-design-study-path",
      "networking-essentials-map",
      "what-happens-google-com",
      "http-message",
      "http-methods",
      "http-status-codes",
      "git-staging-area",
      "git-branch-merge",
      "git-remote-collaboration",
      "git-undo",
      "event-loop",
      "nodejs-server-runtime",
      "express-middleware",
      "fastapi-basics",
      "json-crud-http",
      "rest-api-design",
      "go-concurrency-basics",
      "java-jvm-memory-gc",
      "postgres-getting-started",
      "db-index",
      "db-index-pitfalls",
      "db-transaction-isolation",
      "connection-pool",
      "redis-basics",
      "caching-strategies",
      "caching-concepts-map",
      "cookie-session-login",
      "token-login",
      "authn-vs-authz",
      "oauth",
      "test-pyramid-unit-tests",
      "integration-tests-real-db",
      "docker-container-basics",
      "dockerfile-image-layers",
      "docker-compose",
      "message-queue-basics",
      "message-delivery-semantics",
      "kafka-basics",
      "ci-cd-basics",
      "github-actions-docker-ecr",
      "monitoring-basics",
      "structured-logging",
      "percentile-latency",
      "system-design-concepts-map",
      "scaling-horizontal-vertical",
      "db-replication-sharding",
      "eventual-consistency",
      "resilience-patterns",
      "consistency-models",
      "raft-consensus",
      "architecture-patterns-overview",
      "k8s-learning-roadmap",
      "devops-networking-roadmap"
    ],
    "mentions": [
      "microservices",
      "sd-cache-and-cdn-tier",
      "sd-split-web-and-db",
      "sd-start-single-server",
      "pub-sub",
      "db-index-design",
      "sql-batch-timeout-pool",
      "cqrs",
      "postgres-architecture",
      "dns"
    ]
  },
  "mysql-replication-online-ddl": {
    "links": [
      "mysql-innodb-basics",
      "db-replication-sharding",
      "zero-downtime-migrations"
    ],
    "mentions": [
      "db-migration-tools",
      "sql-batch-timeout-pool",
      "cdc-change-data-capture",
      "sql-basics"
    ]
  },
  "mysql-innodb-basics": {
    "links": [
      "postgres-architecture",
      "db-transaction-isolation",
      "db-index",
      "mysql-replication-online-ddl",
      "postgres-mvcc-vacuum",
      "db-locking-deadlock",
      "deadlocks",
      "pessimistic-locking"
    ],
    "mentions": [
      "postgres-slow-db-triage",
      "sql-basics",
      "page-cache-disk-io",
      "distributed-transactions-2pc",
      "sd-kv-store-write-read-path",
      "postgres-operations"
    ]
  },
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
      "load-testing-k6",
      "os-kernel-system-calls",
      "abort-controller",
      "tail-latency",
      "sql-batch-timeout-pool",
      "mutex-semaphore-monitor",
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
      "etl-vs-elt",
      "http-status-codes",
      "shells-posix-compat",
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
      "js-numbers-bigint",
      "site-architecture-internal-linking",
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
      "data-privacy-compliance",
      "character-encoding-unicode",
      "k8s-deploy-pipeline-eks",
      "threat-modeling-stride",
      "rendering-strategies",
      "js-strings-unicode",
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
      "character-encoding-unicode",
      "http-status-codes",
      "linux-archive-transfer"
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
      "frontend-testing-strategy",
      "dom-basics",
      "web-accessibility",
      "browser-rendering-pipeline"
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
      "react-useeffect",
      "frontend-testing-strategy",
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
      "frontend-testing-strategy",
      "html-semantics",
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
      "animation-performance",
      "css-position-stacking-context"
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
    "mentions": [
      "web-accessibility"
    ]
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
      "python-essentials-for-backend",
      "load-testing-k6",
      "spring-ioc-di",
      "autoscaling",
      "event-loop",
      "sql-batch-timeout-pool",
      "http-status-codes",
      "backend-language-comparison",
      "runtime-validation-zod"
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
      "web-security-headers",
      "js-pure-functions",
      "osi-in-practice",
      "http-status-codes",
      "runtime-validation-zod"
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
      "process-vs-thread",
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
      "code-review-practices",
      "race-conditions",
      "osi-in-practice",
      "sql-batch-timeout-pool",
      "redis-basics",
      "mutex-semaphore-monitor",
      "recursion-backtracking",
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
      "embedding-models-applications",
      "llm-evals",
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
      "embedding-models-applications",
      "llm-evals",
      "agent-reasoning-patterns",
      "agent-tool-design",
      "security-principles-cia-defense-in-depth",
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
      "ds-graph-bfs-dfs",
      "embedding-models-applications",
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
      "postgres-slow-db-triage",
      "github-actions-docker-ecr",
      "postgres-connections-pg-hba",
      "sql-insert-update-delete",
      "nodejs-orm-query-builder",
      "event-loop",
      "osi-in-practice",
      "db-index-design",
      "ports-and-sockets",
      "http-status-codes",
      "api-test-automation",
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
      "frontend-testing-strategy",
      "bash-control-flow-functions",
      "event-loop",
      "microservices",
      "db-type-embedded",
      "code-review-practices",
      "react-custom-hooks-rules"
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
      "shells-posix-compat",
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
      "embedding-models-applications",
      "smoke-sanity-regression-testing",
      "db-index-design",
      "llm-evals",
      "web-accessibility",
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
      "embedding-models-applications",
      "llm-evals",
      "kafka-basics",
      "fine-tuning-vs-rag-vs-prompting",
      "llm-basics-for-developers"
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
      "page-cache-disk-io",
      "ds-linked-list",
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
      "page-cache-disk-io",
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
      "web-accessibility",
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
      "nat-traversal",
      "crdt",
      "cold-starts"
    ],
    "mentions": [
      "high-availability",
      "k8s-deploy-pipeline-eks",
      "js-memory-leak",
      "schema-versioning",
      "architecture-docs-c4-adr",
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
      "sd-music-streaming",
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
      "data-structures-overview",
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
      "data-privacy-compliance",
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
      "load-testing-k6",
      "sd-start-single-server",
      "dynamodb-modeling-capacity",
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
      "ds-hash-map",
      "ds-linked-list",
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
      "os-kernel-system-calls",
      "cpu-cache-hierarchy",
      "page-cache-disk-io",
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
    "mentions": [
      "ds-linked-list",
      "floating-point-numbers"
    ]
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
      "rw-google-spanner-truetime",
      "page-cache-disk-io",
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
      "floating-point-numbers",
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
      "serverless-architecture",
      "https-tls",
      "what-happens-google-com",
      "actor-model",
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
      "cdc-change-data-capture",
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
      "stream-processing",
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
      "data-warehouse-architecture",
      "db-type-wide-column",
      "sliding-window-pattern",
      "data-lake-hdfs",
      "stream-processing",
      "olap-star-schema",
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
      "shells-posix-compat",
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
      "bash-scripting",
      "stream-processing",
      "sd-start-single-server",
      "autoscaling",
      "db-type-relational",
      "sd-mq-storage-partitions",
      "cloud-service-models-shared-responsibility",
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
      "aws-s3-in-practice",
      "s3-storage-classes-lifecycle",
      "js-memory-leak",
      "db-type-embedded",
      "page-cache-disk-io",
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
      "aws-s3-in-practice",
      "page-cache-disk-io",
      "tail-latency",
      "vpc-basics",
      "data-lake-hdfs",
      "cpu-pipelining-branch-prediction"
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
      "s3-storage-classes-lifecycle",
      "js-memory-leak",
      "sd-start-single-server",
      "db-type-embedded",
      "db-type-relational",
      "db-replication-sharding",
      "linux-disks-filesystems"
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
      "mongodb-replica-set-sharding",
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
      "page-cache-disk-io",
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
      "ds-graph-bfs-dfs",
      "sd-object-storage-architecture",
      "ds-heap"
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
      "api-scaling-ladder",
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
      "data-privacy-compliance",
      "dns"
    ]
  },
  "javascript-roadmap": {
    "links": [
      "k8s-learning-roadmap",
      "networking-essentials-map",
      "typescript-roadmap",
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
      "ts-decorators",
      "bundler-basics",
      "frontend-build-tooling",
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
      "pattern-iterator",
      "react-state-snapshot-batching",
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
      "nodejs-http-clients",
      "frontend-testing-strategy",
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
      "frontend-testing-strategy",
      "json-crud-http",
      "http-versions",
      "event-loop",
      "binary-search",
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
      "rw-netflix-open-connect",
      "packet-encapsulation",
      "shells-posix-compat",
      "sd-music-streaming"
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
      "aws-s3-in-practice",
      "s3-storage-classes-lifecycle",
      "sd-autocomplete-trie",
      "monorepo-build-cache",
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
      "rw-slack-vitess",
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
      "mongodb-replica-set-sharding",
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
      "os-kernel-system-calls",
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
      "elasticsearch-inverted-index",
      "ds-trie"
    ],
    "mentions": [
      "character-encoding-unicode",
      "sd-start-single-server",
      "lossy-counting",
      "global-rollout-localization",
      "osi-in-practice",
      "vim-for-servers",
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
      "ds-hash-map",
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
      "oauth",
      "pwa-install-offline"
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
      "search-engine-ranking-pagerank",
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
      "ds-graph-bfs-dfs",
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
      "frontend-testing-strategy",
      "js-numbers-bigint",
      "db-type-key-value",
      "seo-redirects-site-migration",
      "mysql-innodb-basics",
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
      "rw-reading-engineering-blogs",
      "db-sharding",
      "db-type-key-value",
      "js-numbers-bigint",
      "floating-point-numbers",
      "bit-manipulation",
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
      "rw-discord-message-storage",
      "db-type-embedded",
      "page-cache-disk-io",
      "sd-leaderboard-sorted-set",
      "db-type-relational",
      "binary-search",
      "sorting-algorithms",
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
      "rw-amazon-dynamo",
      "db-type-wide-column",
      "rw-slack-vitess",
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
      "rw-amazon-dynamo",
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
      "rw-amazon-dynamo",
      "ds-hash-map",
      "sd-start-single-server",
      "rw-slack-vitess",
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
      "sliding-window-pattern",
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
      "stream-processing",
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
      "load-testing-k6",
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
      "virtual-memory-paging",
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
      "js-numbers-bigint",
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
      "queue-based-load-leveling",
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
      "rds-aurora-managed-db",
      "leader-election",
      "mysql-replication-online-ddl",
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
      "virtual-memory-paging",
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
      "virtual-memory-paging",
      "sd-interview-framework",
      "high-availability",
      "load-testing-k6",
      "sd-object-storage-architecture",
      "db-replication-sharding",
      "postgres-query-planner"
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
      "shells-posix-compat",
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
      "ds-graph-bfs-dfs",
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
      "frontend-testing-strategy",
      "sd-autocomplete-trie",
      "test-pyramid-unit-tests",
      "input-validation-secure-coding",
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
      "frontend-testing-strategy",
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
      "frontend-testing-strategy",
      "micro-frontend-integration-patterns",
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
    "mentions": [
      "frontend-testing-strategy"
    ]
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
      "web-security-headers",
      "cpu-pipelining-branch-prediction",
      "react-useeffect",
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
      "react-useeffect",
      "cpu-instruction-cycle",
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
      "seccomp-apparmor",
      "zero-trust-architecture",
      "high-availability",
      "fault-tolerance",
      "k8s-admission-control",
      "postgres-roles-security",
      "jwt-key-rotation"
    ],
    "mentions": [
      "api-security-owasp-api-top10",
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
      "acid-vs-base",
      "rw-slack-vitess",
      "db-type-columnar-olap",
      "db-replication-sharding",
      "dynamodb-modeling-capacity",
      "sd-mq-storage-partitions",
      "scaling-horizontal-vertical",
      "redis-basics",
      "cdc-change-data-capture",
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
      "fault-tolerance",
      "optimistic-locking",
      "acid-vs-base"
    ],
    "mentions": [
      "pessimistic-locking",
      "postgres-advanced-sql",
      "db-type-wide-column",
      "db-architecture-by-scale",
      "mysql-innodb-basics",
      "mongodb-document-model",
      "page-cache-disk-io",
      "sd-start-single-server",
      "redis-basics",
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
      "tsconfig-strict",
      "linters-formatters",
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
      "react-suspense-error-boundary",
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
      "js-loops-control-flow",
      "rendering-strategies",
      "input-validation-secure-coding",
      "js-es-modules",
      "runtime-validation-zod",
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
      "react-useeffect",
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
      "js-loops-control-flow",
      "event-delegation",
      "js-classes",
      "react-suspense-error-boundary",
      "spring-ioc-di",
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
      "wifi-standards-security",
      "wan-mpls-sd-wan-vrf",
      "block-file-object-storage",
      "sdn-vxlan-overlay",
      "network-troubleshooting-by-layer",
      "packet-capture-tcpdump"
    ],
    "mentions": [
      "vpc-subnets-route-tables",
      "layer-mtu-fragmentation",
      "bgp-basics",
      "vpc-basics"
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
      "symmetric-encryption-aes",
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
      "gateway-link-redundancy-fhrp-lacp",
      "network-design-three-tier-spine-leaf",
      "dhcp",
      "ipv6-basics",
      "bgp-basics",
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
      "coupling-cohesion-principles",
      "cdc-change-data-capture",
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
      "ddd-tactical-patterns",
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
      "tsconfig-strict",
      "ddd-tactical-patterns",
      "linters-formatters",
      "react-custom-hooks-rules",
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
      "spring-ioc-di",
      "db-type-embedded",
      "js-currying-partial",
      "pattern-proxy",
      "http-status-codes",
      "ddd-tactical-patterns",
      "grpc",
      "frontend-testing-strategy"
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
      "nextjs-app-router-routing",
      "frontend-testing-strategy",
      "rendering-strategies",
      "http-versions",
      "js-strict-mode",
      "js-destructuring",
      "cors",
      "sdlc-models-agile-scrum"
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
      "cross-platform-apps",
      "react-useeffect",
      "linters-formatters",
      "js-pure-functions",
      "ddd-tactical-patterns",
      "react-custom-hooks-rules"
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
    "mentions": [
      "bundler-basics",
      "react-memoization-hooks",
      "react-state-snapshot-batching",
      "runtime-validation-zod"
    ]
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
      "graphql-basics",
      "nodejs-orm-query-builder",
      "rendering-strategies",
      "floating-point-numbers"
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
      "react-memoization-hooks",
      "json-crud-http",
      "rendering-strategies",
      "react-useeffect",
      "dynamic-programming",
      "spring-ioc-di",
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
      "react-concurrent-transitions",
      "react-state-snapshot-batching",
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
      "ts-conditional-infer",
      "fp-composition-pipe",
      "js-function-forms",
      "js-spread-rest",
      "ts-utility-mapped-types",
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
      "linters-formatters",
      "rendering-strategies",
      "js-function-forms",
      "ddd-tactical-patterns"
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
      "react-memoization-hooks",
      "process-vs-thread",
      "react-state-management-libraries",
      "js-memory-leak",
      "react-useeffect",
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
      "js-binary-data-typed-arrays",
      "browser-storage",
      "js-map-set-weak",
      "react-useeffect",
      "db-types-overview",
      "spring-ioc-di"
    ]
  },
  "js-object-methods": {
    "links": [
      "js-primitive-vs-reference",
      "js-spread-rest",
      "js-prototype-chain",
      "js-array-transform",
      "pattern-singleton",
      "js-iterators-generators",
      "js-strict-mode",
      "js-classes",
      "js-immutability-react",
      "js-shallow-deep-copy"
    ],
    "mentions": [
      "json-crud-http",
      "js-binary-data-typed-arrays",
      "js-loops-control-flow",
      "js-map-set-weak",
      "pattern-proxy",
      "spring-ioc-di",
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
      "css-color-background",
      "frontend-testing-strategy",
      "smoke-sanity-regression-testing",
      "web-accessibility",
      "parallax-scrollytelling"
    ]
  },
  "view-transitions-shared-element": {
    "links": [
      "animation-patterns",
      "spring-animation",
      "animation-performance"
    ],
    "mentions": [
      "nextjs-app-router-routing",
      "frontend-testing-strategy"
    ]
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
    "mentions": [
      "web-accessibility"
    ]
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
      "dynamodb-modeling-capacity",
      "dead-letter-queue",
      "nextjs-route-handlers-proxy",
      "queue-based-load-leveling",
      "realtime-communication",
      "message-queue-basics",
      "db-type-key-value",
      "docker-container-basics",
      "container-orchestration-choices",
      "route53-routing-policies",
      "message-delivery-semantics",
      "bash-scripting",
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
      "kafka-to-lake-pipeline",
      "pessimistic-locking",
      "postgres-reporting-sql",
      "microservices",
      "browser-storage",
      "cdc-change-data-capture",
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
      "postgres-architecture",
      "data-privacy-compliance",
      "cdc-change-data-capture"
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
      "mongodb-replica-set-sharding",
      "db-type-wide-column",
      "db-type-key-value",
      "acid-vs-base",
      "rw-google-spanner-truetime",
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
      "actor-model",
      "timeouts",
      "route53-routing-policies",
      "k8s-architecture",
      "event-loop",
      "input-validation-secure-coding",
      "security-principles-cia-defense-in-depth",
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
      "gateway-link-redundancy-fhrp-lacp",
      "k8s-deploy-pipeline-eks",
      "js-numbers-bigint",
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
    "mentions": [
      "react-useeffect",
      "react-state-snapshot-batching"
    ]
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
      "js-spread-rest",
      "react-state-snapshot-batching",
      "react-useeffect"
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
      "frontend-build-tooling",
      "linters-formatters",
      "js-classes",
      "js-es-modules",
      "js-truthy-falsy-typeof",
      "ddd-tactical-patterns"
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
      "js-execution-context",
      "ddd-tactical-patterns"
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
      "linters-formatters",
      "pattern-iterator",
      "js-loops-control-flow",
      "input-validation-secure-coding",
      "react-useeffect",
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
      "ds-linked-list",
      "js-strict-mode",
      "bundler-basics"
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
      "browser-devtools-debugging",
      "linters-formatters",
      "js-function-forms",
      "js-truthy-falsy-typeof",
      "js-destructuring",
      "sdlc-models-agile-scrum"
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
      "api-styles-overview",
      "rendering-strategies",
      "js-function-forms",
      "http-status-codes",
      "ddd-tactical-patterns"
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
      "nodejs-error-handling",
      "json-crud-http",
      "react-state-snapshot-batching",
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
      "graphql-basics",
      "nodejs-web-frameworks",
      "sd-start-single-server",
      "http-caching-cdn",
      "react-custom-hooks-rules",
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
      "ds-graph-bfs-dfs",
      "rabbitmq-basics",
      "microservices",
      "linters-formatters",
      "ts-classes-access-modifiers",
      "pattern-proxy",
      "kafka-basics",
      "frontend-monorepo",
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
      "queue-based-load-leveling",
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
      "linters-formatters",
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
      "linters-formatters",
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
      "frontend-testing-strategy",
      "linters-formatters",
      "react-useeffect",
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
      "cross-platform-apps",
      "input-validation-secure-coding",
      "js-numbers-bigint",
      "ts-narrowing",
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
      "floating-point-numbers",
      "sql-injection",
      "js-template-literals",
      "linters-formatters",
      "js-numbers-bigint",
      "runtime-validation-zod",
      "react-useeffect",
      "input-validation-secure-coding"
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
    "mentions": [
      "react-useeffect",
      "react-memoization-hooks",
      "ddd-tactical-patterns"
    ]
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
      "sliding-window-pattern",
      "layer-link-ethernet-arp",
      "sql-injection",
      "packet-capture-tcpdump",
      "https-tls",
      "bgp-basics",
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
      "docker-commands-workflow",
      "iptables-basics",
      "cron-jobs",
      "centralized-logging-pipeline",
      "os-kernel-system-calls",
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
      "cis-benchmark-kube-bench",
      "seccomp-apparmor",
      "container-supply-chain-security",
      "falco-runtime-security",
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
      "container-orchestration-choices",
      "kubeadm-cluster-setup",
      "k8s-statefulset",
      "gateway",
      "iptables-basics",
      "cron-jobs",
      "microservices",
      "multi-tenancy-isolation",
      "input-validation-secure-coding",
      "cilium-ebpf",
      "ci-cd-basics",
      "autoscaling",
      "dynamic-programming",
      "client-data-cache",
      "db-type-key-value",
      "vim-for-servers",
      "linux-performance-triage",
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
      "http-status-codes",
      "shells-posix-compat"
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
      "jenkins-argocd-push-pull",
      "helm-chart-templates",
      "kubernetes-ingress",
      "git-undo",
      "k8s-configmap",
      "docker-container-basics",
      "helm-basics",
      "linux-archive-transfer",
      "multi-tenancy-isolation",
      "rollback-strategy",
      "local-k8s-kind-minikube",
      "eks-cluster-basics",
      "sso-saml-oidc",
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
      "s3-storage-classes-lifecycle",
      "smoke-sanity-regression-testing",
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
      "nodejs-web-frameworks",
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
      "os-kernel-system-calls",
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
      "jenkins-on-kubernetes",
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
      "kubeadm-cluster-setup",
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
      "centralized-logging-pipeline",
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
      "input-validation-secure-coding",
      "container-supply-chain-security",
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
      "linux-archive-transfer",
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
      "ec2-instance-types-launch-templates",
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
      "virtualization-hypervisors",
      "centralized-logging-pipeline",
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
      "centralized-logging-pipeline",
      "iptables-nat",
      "iptables-basics",
      "cilium-ebpf",
      "falco-runtime-security",
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
      "page-cache-disk-io",
      "velero-backup",
      "local-k8s-kind-minikube",
      "grpc",
      "rds-aurora-managed-db"
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
      "ds-hash-map",
      "layer-ip-addressing",
      "layer-ip-routing-icmp",
      "postgres-query-planner",
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
      "virtual-memory-paging",
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
      "queue-based-load-leveling",
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
      "centralized-logging-pipeline",
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
      "seccomp-apparmor",
      "docker-container-basics",
      "docker-runtime-security",
      "k8s-architecture",
      "os-kernel-system-calls",
      "js-numbers-bigint",
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
      "linux-files-permissions",
      "sso-saml-oidc"
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
      "input-validation-secure-coding",
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
      "bgp-basics",
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
      "code-review-practices",
      "security-groups-nacl",
      "osi-in-practice",
      "client-data-cache",
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
      "bash-scripting",
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
      "docker-runtime-security",
      "virtual-memory-paging",
      "k8s-pod-basics",
      "docker-commands-workflow",
      "k8s-cri-cni-csi",
      "iptables-basics",
      "k8s-security-context",
      "k8s-architecture",
      "packet-capture-tcpdump",
      "page-cache-disk-io",
      "sql-aggregation-pitfalls",
      "os-kernel-system-calls",
      "linux-disks-filesystems",
      "osi-in-practice",
      "mutex-semaphore-monitor",
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
      "config-management-tools",
      "terraform-state-refactoring-import",
      "bash-scripting",
      "disaster-recovery",
      "rollback-strategy",
      "security-groups-nacl",
      "osi-in-practice",
      "cloud-service-models-shared-responsibility",
      "github-actions-docker-ecr",
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
      "frontend-first-steps",
      "cross-platform-apps",
      "graphql-basics",
      "linters-formatters",
      "software-supply-chain-ci-hardening",
      "linux-disks-filesystems",
      "dockerfile-image-layers",
      "frontend-monorepo",
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
      "frontend-first-steps",
      "helm-basics",
      "frontend-monorepo"
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
      "input-validation-secure-coding",
      "cilium-ebpf",
      "page-cache-disk-io",
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
      "queue-based-load-leveling",
      "network-flow-logs"
    ],
    "mentions": [
      "s3-storage-classes-lifecycle",
      "aws-core-services-map",
      "serverless-architecture",
      "opensearch-cluster-operations",
      "k8s-node-autoscaling-karpenter",
      "terraform-basics",
      "db-type-key-value",
      "docker-container-basics",
      "rest-api-design",
      "container-orchestration-choices",
      "centralized-logging-pipeline",
      "sd-start-single-server",
      "k8s-node-maintenance",
      "iam-basics",
      "kafka-basics",
      "postgres-architecture",
      "redis-basics",
      "high-availability",
      "message-queue-basics",
      "rds-aurora-managed-db",
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
      "aws-s3-in-practice",
      "db-type-key-value",
      "rest-api-design",
      "rds-aurora-managed-db",
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
      "logging-tools-overview",
      "serverless-architecture",
      "https-tls",
      "k8s-deploy-pipeline-eks",
      "docker-container-basics",
      "latency-bandwidth-throughput",
      "sso-saml-oidc",
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
      "nodejs-http-clients",
      "browser-fetch",
      "docker-container-basics",
      "iptables-basics",
      "code-review-practices",
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
      "data-privacy-compliance",
      "route53-routing-policies",
      "db-type-key-value",
      "sd-multi-datacenter",
      "db-replication-sharding",
      "distributed-tracing",
      "osi-in-practice",
      "redis-basics",
      "cloud-service-models-shared-responsibility",
      "bgp-basics",
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
      "rds-aurora-managed-db",
      "rest-api-design",
      "distributed-lock",
      "security-groups-nacl",
      "vpc-basics",
      "osi-in-practice",
      "sql-batch-timeout-pool",
      "postgres-architecture",
      "dns",
      "data-center-infrastructure",
      "db-type-key-value",
      "layer-link-ethernet-arp"
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
      "aws-core-services-map",
      "linux-fhs-file-commands",
      "bash-scripting",
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
      "page-cache-disk-io",
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
      "aws-core-services-map",
      "security-principles-cia-defense-in-depth",
      "http-status-codes",
      "cloud-service-models-shared-responsibility",
      "linux-archive-transfer",
      "sso-saml-oidc"
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
      "twelve-factor-app",
      "k8s-architecture",
      "bash-scripting",
      "postgres-slow-db-triage",
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
      "cdc-change-data-capture",
      "dns"
    ]
  },
  "edge-caching": {
    "links": [
      "http-caching-cdn",
      "cdn-edge-anycast",
      "cache-invalidation",
      "iot-mobile-wireless-links",
      "cloud-deployment-models-multicloud"
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
      "dns",
      "load-testing-k6"
    ]
  },
  "ssrf": {
    "links": [
      "webhooks",
      "k8s-network-policy",
      "security-groups-nacl"
    ],
    "mentions": [
      "owasp-top-10-map",
      "csrf",
      "race-conditions",
      "security-principles-cia-defense-in-depth",
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
      "owasp-top-10-map",
      "upper-layers-session-presentation-app",
      "input-validation-secure-coding",
      "security-principles-cia-defense-in-depth"
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
      "owasp-top-10-map",
      "nodejs-web-frameworks",
      "sql-injection",
      "input-validation-secure-coding",
      "code-review-practices",
      "bundler-basics"
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
      "owasp-top-10-map",
      "browser-security-model",
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
      "input-validation-secure-coding",
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
      "data-privacy-compliance",
      "network-attacks-l2-l3",
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
      "data-warehouse-architecture",
      "data-privacy-compliance",
      "virtualization-hypervisors",
      "mysql-innodb-basics",
      "linux-files-permissions",
      "optimistic-locking",
      "etl-vs-elt",
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
      "smoke-sanity-regression-testing",
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
      "linters-formatters",
      "js-strict-mode",
      "frontend-monorepo",
      "postgres-query-planner"
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
      "git-branching-strategy",
      "github-actions-workflows",
      "jenkins-pipeline-basics",
      "jenkins-argocd-push-pull"
    ],
    "mentions": [
      "docker-container-basics",
      "ab-testing",
      "security-groups-nacl",
      "osi-in-practice",
      "cloud-service-models-shared-responsibility",
      "frontend-monorepo",
      "dns",
      "on-call"
    ]
  },
  "structured-logging": {
    "links": [
      "observability-basics",
      "distributed-tracing",
      "monitoring-basics",
      "debugging-with-logs",
      "metrics-types"
    ],
    "mentions": [
      "elasticsearch-inverted-index",
      "centralized-logging-pipeline",
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
      "sli-slo",
      "linux-performance-triage"
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
      "load-testing-k6",
      "sd-object-storage-architecture",
      "sd-start-single-server",
      "cpu-cache-hierarchy",
      "sql-batch-timeout-pool",
      "redis-basics",
      "mutex-semaphore-monitor",
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
      "serverless-architecture",
      "container-orchestration-choices",
      "k8s-architecture",
      "k8s-pod-lifecycle",
      "load-testing-k6",
      "event-loop",
      "vpc-basics",
      "osi-in-practice",
      "sql-batch-timeout-pool",
      "queue-based-load-leveling",
      "message-queue-basics",
      "on-call"
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
      "reactive-programming",
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
      "backend-language-comparison",
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
      "ts-type-system-basics",
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
      "mysql-replication-online-ddl",
      "mysql-innodb-basics",
      "db-replication-sharding",
      "cdc-change-data-capture",
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
      "nodejs-orm-query-builder",
      "code-review-practices",
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
      "graphql-basics",
      "nodejs-orm-query-builder",
      "code-review-practices",
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
      "python-essentials-for-backend",
      "web-security-headers",
      "web-workers",
      "load-testing-k6",
      "ds-linked-list",
      "consistency-models",
      "backend-language-comparison",
      "mutex-semaphore-monitor",
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
      "postgres-slow-db-triage",
      "k8s-pod-probes",
      "java-jvm-memory-gc",
      "event-loop",
      "osi-in-practice",
      "sql-batch-timeout-pool",
      "mutex-semaphore-monitor",
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
      "os-kernel-system-calls",
      "load-testing-k6",
      "react-state-snapshot-batching",
      "sd-start-single-server",
      "db-locking-deadlock",
      "code-review-practices",
      "sql-batch-timeout-pool",
      "redis-basics",
      "resilience-patterns",
      "mutex-semaphore-monitor",
      "go-concurrency-basics",
      "http-methods"
    ]
  },
  "server-sent-events": {
    "links": [
      "realtime-communication",
      "websocket-deep-dive",
      "long-polling",
      "http-streaming-sse",
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
      "backend-language-comparison",
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
      "os-kernel-system-calls",
      "sd-queue-logging-automation",
      "reverse-proxy-lb-api-gateway",
      "sd-start-single-server",
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
      "terraform-state-refactoring-import",
      "github-actions-workflows",
      "bash-scripting",
      "terraform-team-workflow-hcp-terragrunt",
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
      "data-center-infrastructure",
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
      "graphql-basics",
      "sd-queue-logging-automation",
      "kafka-basics",
      "http-status-codes",
      "api-test-automation",
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
      "graphql-basics",
      "kubernetes-ingress",
      "logic-gates-alu",
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
      "hash-hmac-password-hashing",
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
      "linux-processes-signals",
      "postgres-advanced-sql",
      "os-kernel-system-calls",
      "message-delivery-semantics",
      "sd-start-single-server",
      "autoscaling",
      "shell-redirection-pipes",
      "shell-environment-startup",
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
      "browser-rendering-pipeline",
      "db-modeling-normalization"
    ]
  },
  "quadtree": {
    "links": [
      "geohash",
      "ray-casting",
      "vector-db"
    ],
    "mentions": [
      "js-execution-context",
      "db-type-key-value",
      "ds-heap",
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
      "redis-basics",
      "self-hosting-llm-inference"
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
      "nodejs-http-clients",
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
      "route53-routing-policies",
      "vpc-basics",
      "osi-in-practice",
      "tcp-connection-lifecycle",
      "k8s-service-types",
      "db-type-key-value",
      "data-lake-hdfs",
      "eks-cluster-basics",
      "ports-and-sockets",
      "local-custom-domain",
      "virtualization-hypervisors",
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
      "linux-network-tuning",
      "local-custom-domain",
      "event-loop",
      "web-accessibility",
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
      "page-cache-disk-io",
      "kafka-basics"
    ]
  },
  "rsync-algorithm": {
    "links": [
      "merkle-tree",
      "traffic-shaping-qos",
      "sd-file-sync-block-upload"
    ],
    "mentions": [
      "linux-archive-transfer"
    ]
  },
  "merkle-tree": {
    "links": [
      "eventual-consistency",
      "git-internals-basics",
      "rsync-algorithm",
      "bloom-filter"
    ],
    "mentions": [
      "digital-signatures-certificates",
      "rw-amazon-dynamo",
      "db-type-wide-column",
      "db-type-key-value",
      "sd-kv-store-versioning",
      "build-caching",
      "load-testing-k6"
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
      "redis-basics",
      "http-methods"
    ]
  },
  "operational-transform": {
    "links": [
      "crdt",
      "realtime-communication",
      "eventual-consistency"
    ],
    "mentions": [
      "mongodb-replica-set-sharding"
    ]
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
      "spring-security-architecture",
      "network-monitoring",
      "virtualization-hypervisors",
      "ipv6-basics",
      "sd-latency-numbers",
      "sd-kv-store-versioning",
      "security-groups-nacl",
      "redis-basics",
      "mfa-totp",
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
      "gateway-link-redundancy-fhrp-lacp",
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
      "mongodb-replica-set-sharding",
      "sd-kv-store-versioning",
      "sql-batch-timeout-pool",
      "mysql-replication-online-ddl",
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
      "react-state-management-libraries",
      "fp-in-react",
      "js-promises",
      "react-useeffect",
      "ddd-tactical-patterns",
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
      "react-state-snapshot-batching",
      "nodejs-web-frameworks",
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
      "js-iterators-generators",
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
      "linters-formatters",
      "ts-narrowing",
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
    "mentions": [
      "linters-formatters",
      "ts-narrowing",
      "oop-four-pillars"
    ]
  },
  "pattern-template-method": {
    "links": [
      "pattern-strategy",
      "pattern-factory-method"
    ],
    "mentions": [
      "json-crud-http",
      "code-review-practices",
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
      "sorting-algorithms",
      "ab-testing",
      "runtime-validation-zod",
      "nodejs-web-frameworks",
      "spring-ioc-di",
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
      "uml-diagrams",
      "ts-narrowing",
      "js-pure-functions",
      "claude-code-plugins-and-channels"
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
      "bash-scripting",
      "k8s-pod-basics",
      "git-undo",
      "s3-storage-classes-lifecycle",
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
      "bash-scripting",
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
      "bash-scripting",
      "terraform-basics",
      "container-supply-chain-security",
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
      "ds-hash-map",
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
      "bit-manipulation",
      "lossy-counting",
      "count-min-sketch"
    ],
    "mentions": [
      "ds-hash-map",
      "redis-basics",
      "cookie-session-login",
      "shells-posix-compat"
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
      "rw-discord-message-storage",
      "db-type-embedded",
      "ds-hash-map",
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
      "ddd-tactical-patterns",
      "bullmq-job-queue",
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
      "spring-security-architecture",
      "react-suspense-error-boundary",
      "express-middleware",
      "fp-composition-pipe",
      "ds-linked-list",
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
      "jpa-persistence-context",
      "json-crud-http",
      "resilience-patterns",
      "http-versions",
      "spring-ioc-di",
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
      "centralized-logging-pipeline",
      "k8s-daemonset",
      "network-flow-logs",
      "terraform-basics",
      "k8s-configmap",
      "base64",
      "k8s-cri-cni-csi",
      "ipv6-basics",
      "container-orchestration-choices",
      "k8s-architecture",
      "helm-basics",
      "ec2-instance-types-launch-templates",
      "k8s-node-maintenance",
      "iam-basics",
      "ssrf",
      "autoscaling",
      "security-groups-nacl",
      "what-happens-google-com",
      "layer-ip-addressing",
      "db-type-key-value",
      "sso-saml-oidc",
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
      "ec2-instance-types-launch-templates",
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
      "secrets-management",
      "distributed-lock",
      "k8s-deploy-pipeline-eks"
    ],
    "mentions": [
      "terraform-state-refactoring-import",
      "json-crud-http",
      "terraform-team-workflow-hcp-terragrunt",
      "dependency-hell",
      "db-type-key-value",
      "bash-scripting",
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
      "aws-ec2-ubuntu-server-setup",
      "os-kernel-system-calls",
      "centralized-logging-pipeline",
      "sd-start-single-server",
      "bash-expansions-variables",
      "linux-disks-filesystems",
      "osi-in-practice",
      "http-status-codes",
      "shells-posix-compat"
    ]
  },
  "linux-systemd-systemctl": {
    "links": [
      "linux-files-permissions",
      "linux-processes-signals",
      "linux-grep-awk-sed"
    ],
    "mentions": [
      "virtual-memory-paging",
      "dockerfile-image-layers",
      "k8s-deploy-pipeline-eks",
      "k8s-architecture",
      "bash-scripting",
      "event-loop",
      "client-data-cache",
      "data-center-infrastructure"
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
      "aws-ec2-ubuntu-server-setup",
      "docker-commands-workflow",
      "k8s-pod-resources",
      "docker-container-basics",
      "os-kernel-system-calls",
      "nodejs-debugging-profiling",
      "js-numbers-bigint",
      "spring-boot-on-kubernetes",
      "bash-scripting",
      "postgres-slow-db-triage",
      "shell-environment-startup",
      "osi-in-practice",
      "client-data-cache"
    ]
  },
  "linux-files-permissions": {
    "links": [
      "k8s-security-context",
      "docker-network-volume",
      "dockerfile-image-layers",
      "linux-processes-signals"
    ],
    "mentions": [
      "k8s-pod-multicontainer",
      "docker-runtime-security",
      "linux-users-groups-sudo",
      "k8s-architecture",
      "bash-scripting",
      "os-kernel-system-calls",
      "linux-disks-filesystems",
      "shell-environment-startup",
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
      "passkeys-webauthn",
      "high-availability",
      "cloud-deployment-models-multicloud",
      "rds-aurora-managed-db",
      "authn-vs-authz",
      "security-principles-cia-defense-in-depth",
      "code-review-practices",
      "cloud-service-models-shared-responsibility",
      "sso-saml-oidc",
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
      "owasp-top-10-map",
      "vpc-subnets-route-tables",
      "load-testing-k6",
      "reverse-proxy-lb-api-gateway",
      "os-kernel-system-calls",
      "falco-runtime-security",
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
      "rw-netflix-cloud-microservices",
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
      "spring-cloud-vs-kubernetes",
      "iptables-basics",
      "rw-netflix-cloud-microservices",
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
      "postgres-slow-db-triage",
      "stream-processing",
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
      "kafka-basics",
      "kafka-vs-rabbitmq-replay"
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
      "kafka-to-lake-pipeline",
      "cdc-change-data-capture",
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
      "page-cache-disk-io",
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
      "cdc-change-data-capture",
      "db-locking-deadlock",
      "distributed-tracing",
      "kafka-basics",
      "db-transaction-isolation",
      "db-replication-sharding",
      "acid-transactions",
      "dead-letter-queue",
      "http-methods"
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
      "page-cache-disk-io",
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
      "queue-based-load-leveling",
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
      "route53-routing-policies",
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
      "bgp-basics",
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
      "centralized-logging-pipeline",
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
      "bgp-basics",
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
      "container-orchestration-choices",
      "dockerfile-image-layers",
      "iptables-basics",
      "fp-composition-pipe",
      "eks-cluster-basics",
      "virtualization-hypervisors",
      "vlan-basics",
      "layer-link-ethernet-arp",
      "vpn-ipsec-wireguard",
      "security-groups-nacl",
      "dhcp",
      "layer-ip-routing-icmp",
      "aws-ec2-ubuntu-server-setup",
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
      "js-map-set-weak",
      "js-object-methods",
      "js-strict-mode",
      "js-es-modules",
      "ddd-tactical-patterns"
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
      "aws-s3-in-practice",
      "clean-architecture",
      "git-staging-area",
      "linters-formatters",
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
      "ts-decorators",
      "browser-fetch",
      "nodejs-web-frameworks",
      "code-review-practices",
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
      "js-execution-context",
      "typescript-in-react",
      "ds-graph-bfs-dfs",
      "ts-narrowing",
      "code-review-practices",
      "oop-four-pillars"
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
      "transactional-outbox",
      "postgres-functions-triggers",
      "redis-persistence-ha",
      "redis-memory-eviction",
      "bullmq-job-queue"
    ],
    "mentions": [
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
      "postgres-slow-db-triage",
      "centralized-logging-pipeline",
      "k8s-node-maintenance",
      "vpc-basics",
      "local-k8s-kind-minikube",
      "rds-aurora-managed-db",
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
      "symmetric-encryption-aes",
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
      "spring-cloud-vs-kubernetes",
      "feature-flags",
      "secrets-management",
      "k8s-pv-pvc"
    ],
    "mentions": [
      "k8s-pod-basics",
      "helm-dependencies-oci-gitops",
      "k8s-architecture",
      "helm-basics",
      "db-type-key-value",
      "autoscaling",
      "latency-bandwidth-throughput",
      "sql-batch-timeout-pool",
      "sd-email-protocols",
      "local-k8s-kind-minikube"
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
      "cross-platform-apps",
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
      "spring-mvc-request-lifecycle",
      "solid-principles",
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
      "js-numbers-bigint",
      "db-types-overview",
      "spring-ioc-di",
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
      "nodejs-orm-query-builder",
      "resilience-patterns",
      "runtime-validation-zod",
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
      "nodejs-http-clients",
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
      "failover",
      "postgres-connections-pg-hba"
    ],
    "mentions": [
      "pessimistic-locking",
      "postgres-roles-security",
      "postgres-mvcc-vacuum",
      "serverless-limits",
      "db-migration-tools",
      "db-architecture-by-scale",
      "encryption-in-transit",
      "https-tls",
      "postgres-slow-db-triage",
      "rds-aurora-managed-db",
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
      "spring-cloud-vs-kubernetes",
      "spring-boot-observability",
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
      "cdn-edge-anycast",
      "reverse-proxy-lb-api-gateway"
    ],
    "mentions": [
      "k8s-pod-lifecycle",
      "gateway-link-redundancy-fhrp-lacp",
      "iptables-nat",
      "owasp-top-10-map",
      "vpc-subnets-route-tables",
      "docker-container-basics",
      "realtime-communication",
      "browser-fetch",
      "layer-ip-routing-icmp",
      "sd-start-single-server",
      "layer-link-ethernet-arp",
      "http-versions",
      "rolling-deployment",
      "security-groups-nacl",
      "vpc-basics",
      "redis-basics",
      "client-data-cache",
      "network-design-three-tier-spine-leaf",
      "grpc",
      "bgp-basics",
      "udp-and-quic"
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
      "nodejs-orm-query-builder",
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
      "react-jsx-components",
      "js-object-methods",
      "solid-principles",
      "oop-four-pillars",
      "code-review-practices",
      "sd-email-protocols",
      "plugin-microkernel-architecture"
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
      "nodejs-orm-query-builder",
      "nodejs-web-frameworks",
      "react-state-snapshot-batching",
      "spring-ioc-di",
      "thread-safety",
      "code-review-practices",
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
      "uml-diagrams",
      "solid-principles",
      "spring-ioc-di",
      "refactoring-code-smells",
      "code-review-practices",
      "sql-batch-timeout-pool",
      "plugin-microkernel-architecture",
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
      "rw-amazon-dynamo",
      "osi-in-practice",
      "db-type-wide-column",
      "sd-start-single-server",
      "mongodb-replica-set-sharding",
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
      "postgres-slow-db-triage",
      "zero-downtime-migrations",
      "db-architecture-by-scale",
      "mysql-innodb-basics",
      "sd-ad-click-stream-windows",
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
      "mysql-innodb-basics",
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
      "virtualization-hypervisors",
      "eks-cluster-basics",
      "packet-capture-tcpdump",
      "layer-link-ethernet-arp",
      "network-design-three-tier-spine-leaf",
      "cilium-ebpf",
      "security-groups-nacl",
      "routing-protocols-ospf-rip-eigrp",
      "ipv6-basics",
      "layer-ip-routing-icmp",
      "bgp-basics",
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
      "zero-trust-architecture",
      "bgp-basics"
    ],
    "mentions": [
      "vpc-peering-transit-privatelink",
      "wan-mpls-sd-wan-vrf",
      "browser-fetch",
      "data-mesh-fabric",
      "public-key-key-exchange",
      "webhooks",
      "what-happens-google-com",
      "network-design-three-tier-spine-leaf",
      "routing-protocols-ospf-rip-eigrp",
      "ipv6-basics",
      "sso-saml-oidc",
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
      "data-center-infrastructure",
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
      "airflow-orchestration",
      "stream-processing",
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
      "hash-hmac-password-hashing",
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
      "graphql-basics",
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
      "redis-modules-stack",
      "sliding-window-pattern",
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
      "ddos-protection",
      "bgp-basics"
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
      "cloud-deployment-models-multicloud",
      "db-sharding",
      "ports-and-sockets",
      "cloud-service-models-shared-responsibility",
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
      "k8s-cni-pod-network",
      "firewall-types-ngfw",
      "zero-trust-architecture"
    ],
    "mentions": [
      "browser-fetch",
      "db-type-key-value",
      "iptables-basics",
      "sd-start-single-server",
      "redis-basics",
      "ipv6-basics",
      "layer-ip-addressing",
      "realtime-communication",
      "bgp-basics",
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
      "route53-routing-policies",
      "layer-ip-routing-icmp",
      "terraform-basics",
      "iptables-basics",
      "ipv6-basics",
      "virtualization-hypervisors",
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
      "core-component-api-design",
      "animation-patterns"
    ],
    "mentions": [
      "lighthouse-explained",
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
      "fp-composition-pipe",
      "ts-declaration-files-modules",
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
      "k8s-architecture",
      "nodejs-web-frameworks"
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
      "centralized-logging-pipeline",
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
      "centralized-logging-pipeline",
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
      "virtual-memory-paging",
      "go-concurrency-basics",
      "k8s-pod-basics",
      "docker-commands-workflow",
      "linux-namespaces-cgroups",
      "k8s-architecture",
      "page-cache-disk-io",
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
      "bash-scripting",
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
      "centralized-logging-pipeline",
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
    "mentions": [
      "nextjs-app-router-routing"
    ]
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
      "nextjs-app-router-routing",
      "frontend-testing-strategy",
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
      "nextjs-app-router-routing",
      "pattern-proxy",
      "sdlc-models-agile-scrum"
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
      "nextjs-app-router-routing",
      "proxy-reverse-proxy",
      "http-versions",
      "react-suspense-error-boundary",
      "http-status-codes",
      "claude-code-plugins-and-channels",
      "sdlc-models-agile-scrum"
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
      "nextjs-app-router-routing",
      "frontend-testing-strategy",
      "react-useeffect",
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
      "nextjs-app-router-routing",
      "nextjs-self-hosting-deployment",
      "page-cache-disk-io",
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
      "react-state-management-libraries",
      "seo-for-spa",
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
      "data-fetching-optimization",
      "react-client-routing",
      "frontend-testing-strategy",
      "lighthouse-explained",
      "hydration",
      "react-useeffect",
      "nginx-basics",
      "seo-for-spa",
      "frontend-hosting-platforms",
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
      "postgres-slow-db-triage",
      "db-architecture-by-scale",
      "encryption-in-transit",
      "postgres-operations",
      "bash-scripting",
      "security-groups-nacl",
      "sql-batch-timeout-pool",
      "ipv6-basics",
      "layer-ip-addressing",
      "aws-ec2-ubuntu-server-setup"
    ]
  },
  "redis-cluster": {
    "links": [
      "redis-replication-sentinel",
      "redis-basics"
    ],
    "mentions": [
      "process-vs-thread",
      "valkey-vs-redis",
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
      "process-vs-thread",
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
      "linters-formatters",
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
      "bash-scripting",
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
      "bash-scripting",
      "db-modeling-normalization"
    ]
  },
  "git-staging-area": {
    "links": [
      "git-internals-basics",
      "git-remote-collaboration",
      "git-ignore-config",
      "git-hooks"
    ],
    "mentions": [
      "git-branch-merge",
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
      "seccomp-apparmor",
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
      "proxy-reverse-proxy",
      "latency-bandwidth-throughput",
      "dhcp"
    ],
    "mentions": [
      "what-happens-google-com",
      "docker-container-basics",
      "curl-for-debugging",
      "sd-start-single-server",
      "divide-and-conquer",
      "security-groups-nacl",
      "http-status-codes",
      "first-page-from-power-on",
      "udp-and-quic",
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
      "owasp-top-10-map",
      "docker-container-basics",
      "realtime-communication",
      "route53-routing-policies",
      "reverse-proxy-lb-api-gateway",
      "sd-start-single-server",
      "service-mesh",
      "http-versions",
      "os-kernel-system-calls",
      "security-groups-nacl",
      "what-happens-google-com",
      "encryption-in-transit",
      "grpc",
      "layer-ip-routing-icmp",
      "aws-ec2-ubuntu-server-setup",
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
      "mysql-innodb-basics",
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
      "mysql-innodb-basics",
      "event-driven-architecture",
      "distributed-transactions-2pc",
      "sql-batch-timeout-pool",
      "postgres-getting-started",
      "mutex-semaphore-monitor"
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
      "postgres-slow-db-triage",
      "pessimistic-locking",
      "postgres-mvcc-vacuum",
      "db-architecture-by-scale",
      "page-cache-disk-io",
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
      "sqld-subquery-set-operators",
      "rest-api-design",
      "graphql-basics",
      "mysql-innodb-basics",
      "loading-patterns",
      "db-index-design",
      "code-review-practices",
      "nodejs-orm-query-builder",
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
      "rw-slack-vitess",
      "sd-start-single-server",
      "distributed-transactions-2pc",
      "transactional-outbox",
      "cqrs",
      "scaling-horizontal-vertical",
      "redis-basics",
      "high-availability",
      "cdc-change-data-capture"
    ]
  },
  "db-partitioning": {
    "links": [
      "db-replication-sharding",
      "db-sharding"
    ],
    "mentions": [
      "mysql-innodb-basics",
      "sd-start-single-server",
      "sd-mq-storage-partitions",
      "postgres-query-planner"
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
      "mysql-replication-online-ddl",
      "mysql-innodb-basics",
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
      "code-review-practices",
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
      "linux-network-tuning",
      "vpc-subnets-route-tables",
      "browser-fetch",
      "os-kernel-system-calls",
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
      "centralized-logging-pipeline",
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
      "linux-network-tuning",
      "network-troubleshooting-by-layer",
      "upper-layers-session-presentation-app"
    ],
    "mentions": [
      "elasticsearch-inverted-index",
      "vpc-subnets-route-tables",
      "os-kernel-system-calls",
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
      "aws-ec2-ubuntu-server-setup",
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
      "aws-s3-in-practice",
      "character-encoding-unicode",
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
      "network-attacks-l2-l3",
      "vpc-peering-transit-privatelink",
      "gateway-link-redundancy-fhrp-lacp",
      "docker-container-basics",
      "virtualization-hypervisors",
      "router-vs-switch",
      "what-happens-google-com",
      "dhcp",
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
      "sd-latency-numbers",
      "k8s-cni-pod-network",
      "ssrf",
      "python-essentials-for-backend",
      "bit-manipulation",
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
      "data-lake-hdfs",
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
      "cdc-change-data-capture",
      "data-lake-hdfs",
      "kafka-to-lake-pipeline",
      "mysql-innodb-basics",
      "kafka-basics",
      "db-replication-sharding",
      "cpu-pipelining-branch-prediction",
      "acid-transactions",
      "db-index-design",
      "etl-vs-elt"
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
      "stream-processing",
      "sql-insert-update-delete",
      "mysql-innodb-basics",
      "sd-start-single-server",
      "sqld-window-functions",
      "page-cache-disk-io",
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
      "rw-amazon-dynamo",
      "db-type-key-value",
      "acid-vs-base",
      "network-partitions",
      "mongodb-document-model",
      "mongodb-replica-set-sharding",
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
      "rw-discord-message-storage",
      "sd-mq-storage-partitions",
      "scaling-horizontal-vertical",
      "cdc-change-data-capture"
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
      "mysql-innodb-basics",
      "db-type-key-value",
      "rds-aurora-managed-db",
      "ds-hash-map",
      "sqld-top-n-hierarchical-pivot",
      "page-cache-disk-io",
      "scaling-horizontal-vertical",
      "postgres-architecture",
      "postgres-jsonb-search",
      "db-partitioning",
      "postgres-getting-started",
      "cdc-change-data-capture",
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
      "dynamodb-modeling-capacity",
      "raft-consensus",
      "ds-hash-map",
      "page-cache-disk-io",
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
      "rw-discord-message-storage",
      "acid-vs-base",
      "sd-start-single-server",
      "db-sharding",
      "db-type-relational",
      "sd-mq-storage-partitions",
      "bloom-filter",
      "db-index-pitfalls",
      "data-lake-hdfs",
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
      "ds-graph-bfs-dfs",
      "graph-rag",
      "sd-start-single-server",
      "db-type-relational",
      "cdc-change-data-capture"
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
      "process-vs-thread",
      "postgres-connections-pg-hba",
      "db-architecture-by-scale",
      "virtual-memory-paging",
      "sd-mq-storage-partitions",
      "page-cache-disk-io",
      "mysql-innodb-basics",
      "db-index-design",
      "bit-manipulation",
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
      "postgres-slow-db-triage",
      "mysql-innodb-basics",
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
      "rds-aurora-managed-db",
      "virtual-memory-paging",
      "db-migration-tools",
      "db-architecture-by-scale",
      "block-file-object-storage",
      "postgres-slow-db-triage",
      "load-testing-k6",
      "page-cache-disk-io",
      "ds-hash-map",
      "linux-disks-filesystems",
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
      "postgres-data-types",
      "oop-four-pillars"
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
      "opensearch-cluster-operations",
      "webhooks",
      "db-index-design",
      "sd-db-replication-intro",
      "cdc-change-data-capture"
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
      "mysql-innodb-basics",
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
      "floating-point-numbers",
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
      "git-first-hour",
      "js-binary-data-typed-arrays",
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
      "git-rebase",
      "git-remote-collaboration"
    ],
    "mentions": []
  },
  "git-rebase": {
    "links": [
      "git-branch-merge",
      "git-branching-strategy",
      "git-merge-conflict",
      "git-stacked-prs",
      "git-remote-collaboration",
      "git-stash-reflog",
      "git-undo"
    ],
    "mentions": [
      "git-tips-advanced",
      "github-repo-governance",
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
      "github-repo-governance",
      "git-stash-reflog",
      "token-login",
      "what-happens-google-com",
      "frontend-monorepo"
    ]
  },
  "git-branching-strategy": {
    "links": [
      "git-branch-merge",
      "git-remote-collaboration",
      "git-tips-advanced",
      "git-hooks",
      "semantic-versioning"
    ],
    "mentions": [
      "github-pull-request-flow",
      "github-repo-governance",
      "k8s-deploy-pipeline-eks",
      "ab-testing",
      "api-versioning",
      "frontend-monorepo"
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
      "git-stash-reflog",
      "shells-posix-compat"
    ]
  },
  "git-tips-advanced": {
    "links": [
      "git-hooks",
      "git-branching-strategy",
      "git-troubleshooting",
      "claude-code-parallel-and-scheduled",
      "git-merge-conflict"
    ],
    "mentions": [
      "git-branch-merge",
      "github-repo-governance",
      "git-staging-area",
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
      "sqld-correlated-subquery",
      "web-accessibility"
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
      "ds-graph-bfs-dfs",
      "sqld-group-by-having",
      "regex-and-globbing",
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
      "floating-point-numbers",
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
      "data-quality-checks",
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
      "uml-diagrams",
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
      "ds-hash-map",
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
      "mysql-innodb-basics",
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
      "mysql-innodb-basics",
      "sql-basics",
      "mysql-replication-online-ddl",
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
      "mysql-replication-online-ddl",
      "failover"
    ],
    "mentions": [
      "db-consistency-cap",
      "prometheus-basics",
      "db-architecture-by-scale",
      "rds-aurora-managed-db",
      "mysql-innodb-basics",
      "sd-start-single-server",
      "page-cache-disk-io",
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
      "opensearch-cluster-operations",
      "db-type-columnar-olap",
      "postgres-mvcc-vacuum",
      "data-warehouse-architecture",
      "db-migration-tools",
      "db-sharding",
      "db-type-wide-column",
      "rw-discord-message-storage",
      "cdc-change-data-capture",
      "transactional-outbox",
      "rabbitmq-basics",
      "db-type-key-value",
      "message-delivery-semantics",
      "kafka-to-lake-pipeline",
      "page-cache-disk-io",
      "sd-start-single-server",
      "distributed-transactions-2pc",
      "db-type-relational",
      "db-type-graph",
      "http-caching-cdn",
      "sd-mq-storage-partitions",
      "distributed-tracing",
      "kafka-basics",
      "sql-batch-timeout-pool",
      "postgres-operations",
      "postgres-jsonb-search",
      "path-traversal-file-upload",
      "db-partitioning",
      "sql-query-rewrite",
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
      "mysql-replication-online-ddl",
      "mysql-innodb-basics",
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
    "mentions": [
      "postgres-slow-db-triage",
      "ds-hash-map",
      "postgres-getting-started"
    ]
  },
  "nginx-basics": {
    "links": [
      "nginx-reverse-proxy",
      "nginx-https-performance"
    ],
    "mentions": [
      "blue-green-deployment",
      "aws-ec2-ubuntu-server-setup",
      "linux-systemd-systemctl",
      "realtime-communication",
      "os-kernel-system-calls",
      "proxy-reverse-proxy",
      "linux-processes-signals",
      "event-loop",
      "web-security-headers",
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
      "page-cache-disk-io",
      "public-key-key-exchange",
      "web-security-headers",
      "security-groups-nacl",
      "what-happens-google-com",
      "symmetric-encryption-aes",
      "image-optimization",
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
      "process-vs-thread",
      "virtual-memory-paging",
      "ds-hash-map",
      "ds-linked-list",
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
      "process-vs-thread",
      "virtual-memory-paging",
      "page-cache-disk-io",
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
      "bash-scripting",
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
      "redis-high-throughput",
      "message-queue-basics",
      "redis-memory-eviction",
      "network-troubleshooting-by-layer",
      "event-loop",
      "redis-persistence-ha",
      "caching-strategies",
      "valkey-vs-redis"
    ],
    "mentions": [
      "redis-cluster",
      "distributed-lock",
      "ds-hash-map",
      "ds-linked-list",
      "sd-leaderboard-sorted-set",
      "sd-start-single-server",
      "pub-sub",
      "db-type-relational",
      "os-kernel-system-calls",
      "kafka-basics",
      "db-transaction-isolation",
      "mysql-innodb-basics",
      "acid-transactions",
      "vpc-basics",
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
      "count-min-sketch",
      "osi-in-practice"
    ],
    "mentions": [
      "exponential-backoff-jitter",
      "redis-cluster",
      "cache-write-policies",
      "bloom-filter",
      "db-type-columnar-olap",
      "cdc-change-data-capture",
      "ds-linked-list",
      "mysql-replication-online-ddl",
      "sd-start-single-server",
      "js-memoization",
      "cold-starts",
      "lossy-counting",
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
      "nextjs-app-router-routing",
      "web-workers",
      "resource-hints-loading",
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
      "react-state-snapshot-batching",
      "react-useeffect",
      "rendering-performance-optimization",
      "js-memoization",
      "loading-patterns",
      "react-state-management-libraries"
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
      "input-validation-secure-coding",
      "character-encoding-unicode",
      "loading-patterns",
      "upper-layers-session-presentation-app",
      "floating-point-numbers",
      "spring-ioc-di",
      "api-versioning",
      "client-data-cache",
      "resilience-patterns",
      "http-caching-cdn",
      "runtime-validation-zod"
    ]
  },
  "big-o-notation": {
    "links": [
      "binary-search",
      "sql-query-rewrite"
    ],
    "mentions": [
      "nodejs-debugging-profiling",
      "ds-binary-tree-bst",
      "sorting-algorithms",
      "js-execution-context",
      "ds-hash-map",
      "js-memoization",
      "sql-filtering-operators",
      "event-loop",
      "regex-and-globbing",
      "ds-array-matrix"
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
      "container-orchestration-choices",
      "docker-runtime-security",
      "nginx-basics",
      "iptables-basics",
      "k8s-cni-pod-network",
      "docker-network-drivers",
      "k8s-pod-troubleshooting",
      "postgres-operations",
      "proxy-reverse-proxy",
      "layer-link-ethernet-arp",
      "docker-commands-workflow",
      "k8s-coredns",
      "sdn-vxlan-overlay",
      "redis-basics",
      "ipv6-basics",
      "aws-ec2-ubuntu-server-setup",
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
      "container-orchestration-choices",
      "iptables-basics",
      "fp-composition-pipe",
      "proxy-reverse-proxy",
      "docker-commands-workflow",
      "redis-basics",
      "iptables-nat",
      "redis-persistence-ha",
      "dns"
    ]
  },
  "docker-container-basics": {
    "links": [
      "dockerfile-image-layers",
      "iptables-nat",
      "docker-commands-workflow"
    ],
    "mentions": [
      "process-vs-thread",
      "docker-runtime-security",
      "nodejs-cli-process",
      "virtual-memory-paging",
      "linux-namespaces-cgroups",
      "k8s-pod-resources",
      "iptables-basics",
      "rest-api-design",
      "fp-composition-pipe",
      "k8s-security-context",
      "virtualization-hypervisors",
      "bash-scripting",
      "os-kernel-system-calls",
      "mutex-semaphore-monitor",
      "grpc",
      "linux-processes-signals",
      "aws-ec2-ubuntu-server-setup",
      "udp-and-quic"
    ]
  },
  "dockerfile-image-layers": {
    "links": [
      "docker-container-basics",
      "docker-network-volume"
    ],
    "mentions": [
      "frontend-first-steps",
      "k8s-pod-probes",
      "github-actions-docker-ecr",
      "docker-compose",
      "k8s-architecture",
      "k8s-pod-troubleshooting",
      "bash-scripting",
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
      "aws-ec2-ubuntu-server-setup",
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
      "ds-hash-map",
      "reverse-proxy-lb-api-gateway",
      "cilium-ebpf",
      "http-versions",
      "sql-batch-timeout-pool",
      "what-happens-google-com",
      "dhcp",
      "grpc",
      "ipv6-basics",
      "aws-ec2-ubuntu-server-setup",
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
      "claude-code-plugins-and-channels",
      "linux-archive-transfer",
      "image-optimization",
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
      "rw-stripe-idempotency",
      "graphql-basics",
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
      "digital-signatures-certificates",
      "kubernetes-ingress",
      "nginx-basics",
      "zero-trust-architecture",
      "nginx-https-performance",
      "reverse-proxy-lb-api-gateway",
      "webhooks",
      "service-mesh",
      "http-versions",
      "web-server-vs-was",
      "public-key-key-exchange",
      "encryption-in-transit",
      "symmetric-encryption-aes",
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
      "kafka-to-lake-pipeline",
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
      "nodejs-http-clients",
      "html-form-http",
      "client-data-cache",
      "json-crud-http",
      "react-useeffect",
      "js-binary-data-typed-arrays",
      "frontend-browser-cache",
      "frontend-hosting-platforms",
      "rendering-csr-spa",
      "race-conditions",
      "claude-code-plugins-and-channels",
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
      "openapi-spec-first",
      "n-plus-one-queries",
      "api-versioning",
      "base64",
      "optimistic-locking",
      "graphql-basics",
      "loading-patterns",
      "db-locking-deadlock",
      "db-index-design",
      "http-message",
      "http-versions",
      "floating-point-numbers",
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
      "graphql-basics",
      "proxy-reverse-proxy",
      "token-login",
      "sd-start-single-server",
      "db-locking-deadlock",
      "http-versions",
      "osi-in-practice",
      "claude-code-plugins-and-channels",
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
      "resource-hints-loading",
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
      "web-workers",
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
      "vulnerability-management-cve-cvss",
      "dom-basics",
      "js-memoization",
      "js-function-forms",
      "garbage-collection",
      "event-loop",
      "spring-ioc-di",
      "js-strict-mode",
      "frontend-build-tooling",
      "js-closures",
      "layer-mtu-fragmentation",
      "dns"
    ]
  },
  "micro-frontends": {
    "links": [
      "module-federation-deep-dive",
      "micro-frontend-integration-patterns"
    ],
    "mentions": [
      "web-components-shadow-dom",
      "react-suspense-error-boundary",
      "css-styling-approaches",
      "github-repo-governance",
      "build-caching",
      "rendering-csr-spa",
      "k8s-deploy-pipeline-eks",
      "microservices",
      "css-custom-properties",
      "design-system-building",
      "data-fetching-optimization",
      "js-es-modules",
      "frontend-monorepo",
      "cors"
    ]
  },
  "ab-testing": {
    "links": [
      "http-caching-cdn",
      "search-spam-policies-cloaking",
      "seo-redirects-site-migration"
    ],
    "mentions": [
      "seo-for-spa",
      "rendering-strategies",
      "input-validation-secure-coding",
      "bloom-filter",
      "db-modeling-normalization",
      "core-web-vitals"
    ]
  },
  "core-web-vitals": {
    "links": [
      "what-happens-google-com",
      "code-splitting",
      "web-font-optimization",
      "event-loop"
    ],
    "mentions": [
      "performance-metrics-measurement",
      "seo-for-spa",
      "resource-hints-loading",
      "frontend-testing-strategy",
      "web-workers",
      "lighthouse-explained",
      "browser-rendering-pipeline",
      "ab-testing",
      "image-optimization",
      "loading-patterns",
      "pattern-proxy",
      "cors",
      "dns"
    ]
  },
  "code-splitting": {
    "links": [
      "bundler-basics",
      "core-web-vitals"
    ],
    "mentions": [
      "js-es-modules",
      "react-client-routing",
      "nextjs-app-router-routing",
      "debounce-throttle",
      "frontend-hosting-platforms",
      "http-versions",
      "rendering-strategies",
      "sdlc-models-agile-scrum"
    ]
  },
  "mvc-pattern": {
    "links": [
      "db-locking-deadlock"
    ],
    "mentions": [
      "spring-mvc-request-lifecycle",
      "client-data-cache",
      "enterprise-application-patterns",
      "nodejs-web-frameworks",
      "pattern-observer",
      "code-review-practices",
      "js-pure-functions",
      "pattern-proxy",
      "http-status-codes",
      "gateway"
    ]
  },
  "http-caching-cdn": {
    "links": [
      "what-happens-google-com",
      "cdn-edge-anycast",
      "aws-s3-in-practice"
    ],
    "mentions": [
      "http-message",
      "s3-storage-classes-lifecycle",
      "k8s-deploy-pipeline-eks",
      "frontend-browser-cache",
      "sd-object-storage-architecture",
      "http-versions",
      "linux-disks-filesystems",
      "pattern-proxy",
      "redis-basics",
      "cookie-session-login",
      "cors",
      "dns"
    ]
  },
  "elasticsearch-inverted-index": {
    "links": [
      "vector-db",
      "opensearch-cluster-operations"
    ],
    "mentions": [
      "elasticsearch-bulk-indexing",
      "elasticsearch-mapping",
      "db-index",
      "cdc-change-data-capture",
      "rag-retrieval-quality",
      "mongodb-document-model",
      "loading-patterns",
      "dynamic-programming",
      "global-rollout-localization",
      "transactional-outbox",
      "kafka-basics",
      "elk-stack-basics",
      "db-modeling-normalization"
    ]
  },
  "mongodb-document-model": {
    "links": [],
    "mentions": [
      "sd-sharding-intro",
      "mongodb-replica-set-sharding",
      "acid-vs-base",
      "mongodb-indexes-explain",
      "js-numbers-bigint",
      "sd-start-single-server",
      "distributed-transactions-2pc",
      "db-index-design",
      "db-type-relational",
      "floating-point-numbers",
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
      "react-context",
      "react-useref-layout-effect",
      "core-web-vitals",
      "react-memoization-hooks",
      "react-suspense-error-boundary",
      "react-jsx-components",
      "react-useeffect",
      "react-concurrent-transitions",
      "react-state-management-libraries",
      "react-state-snapshot-batching",
      "js-memoization",
      "js-function-forms",
      "js-pure-functions",
      "frontend-state-architecture",
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
      "nextjs-app-router-routing",
      "lighthouse-explained",
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
      "queue-based-load-leveling",
      "ddd-bounded-context",
      "db-type-columnar-olap",
      "cdc-change-data-capture",
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
      "spring-cloud-vs-kubernetes",
      "rw-netflix-cloud-microservices",
      "reactive-programming",
      "service-mesh",
      "latency-bandwidth-throughput",
      "backpressure",
      "osi-in-practice",
      "sql-batch-timeout-pool",
      "mutex-semaphore-monitor",
      "grpc",
      "http-methods"
    ]
  },
  "dns": {
    "links": [
      "what-happens-google-com",
      "cdn-edge-anycast",
      "hosts-file"
    ],
    "mentions": [
      "route53-routing-policies",
      "http-versions",
      "digital-signatures-certificates",
      "sd-email-protocols",
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
      "web-server-vs-was",
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
      "spring-cloud-vs-kubernetes",
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
      "fp-composition-pipe",
      "http-versions",
      "web-server-vs-was",
      "what-happens-google-com",
      "cookie-session-login",
      "oauth",
      "frontend-build-tooling",
      "first-page-from-power-on",
      "dns"
    ]
  },
  "pythagorean-theorem": {
    "links": [],
    "mentions": [
      "floating-point-numbers",
      "vector-db"
    ]
  },
  "what-happens-google-com": {
    "links": [
      "browser-rendering-pipeline",
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
      "pattern-strategy",
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
      "logging-tools-overview",
      "api-key-hmac-auth",
      "token-login",
      "spring-security-jwt-oauth2",
      "cookie-session-login"
    ]
  },
  "vector-db": {
    "links": [
      "embedding-models-applications"
    ],
    "mentions": [
      "rag-retrieval-quality",
      "mongodb-document-model",
      "pythagorean-theorem",
      "db-index-design",
      "elasticsearch-inverted-index",
      "self-hosting-llm-inference",
      "rag-classic-pipeline",
      "db-modeling-normalization"
    ]
  }
};
