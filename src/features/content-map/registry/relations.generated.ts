// 자동 생성 파일이다. 직접 고치지 말고 `pnpm content:index`를 실행한다 (scripts/content-index.cjs).
import type { PostRelations } from "./types";

export const POST_RELATIONS: Record<string, PostRelations> = {
  "networking-essentials-map": {
    "links": [
      "what-happens-google-com",
      "devops-networking-roadmap",
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
      "vpn-ipsec-wireguard",
      "network-layers-overview",
      "packet-encapsulation",
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
      "loading-patterns",
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
      "js-es-modules",
      "http-methods"
    ]
  },
  "js-currying-partial": {
    "links": [
      "js-first-class-callbacks",
      "js-closures",
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
      "pattern-singleton"
    ],
    "mentions": [
      "browser-fetch",
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
      "db-types-overview"
    ]
  },
  "js-object-methods": {
    "links": [
      "js-primitive-vs-reference",
      "js-spread-rest",
      "js-array-transform",
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
    "mentions": []
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
      "js-optional-chaining-nullish",
      "js-spread-rest",
      "js-destructuring"
    ],
    "mentions": [
      "js-es-modules",
      "js-truthy-falsy-typeof"
    ]
  },
  "sql-aggregation-pitfalls": {
    "links": [
      "sql-logical-order",
      "sql-filtering-operators",
      "sqld-group-by-having"
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
      "js-object-methods",
      "js-currying-partial",
      "js-function-forms",
      "js-immutability-react",
      "js-array-mutation"
    ],
    "mentions": []
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
    "mentions": []
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
      "timeouts"
    ],
    "mentions": [
      "browser-fetch",
      "streaming-ssr-suspense",
      "rendering-strategies",
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
      "saga-pattern"
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
      "loading-patterns",
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
      "js-closures",
      "js-memory-leak",
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
      "js-hoisting-tdz"
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
      "service-mesh",
      "iptables-nat",
      "security-groups-nacl",
      "osi-in-practice",
      "resilience-patterns",
      "what-happens-google-com",
      "local-k8s-kind-minikube",
      "grpc",
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
      "k8s-architecture",
      "resilience-patterns",
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
      "linux-processes-signals",
      "kafka-basics",
      "redis-basics",
      "what-happens-google-com",
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
      "git-internals-basics"
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
      "sql-batch-timeout-pool",
      "redis-basics",
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
      "loading-patterns",
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
      "consistency-models"
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
      "event-loop",
      "osi-in-practice",
      "sql-batch-timeout-pool"
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
      "db-locking-deadlock",
      "sql-batch-timeout-pool",
      "redis-basics",
      "resilience-patterns",
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
      "cors",
      "csrf"
    ],
    "mentions": [
      "browser-fetch",
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
      "traffic-shaping-qos"
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
      "consistency-models",
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
      "loading-patterns",
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
      "layer-ip-addressing",
      "what-happens-google-com",
      "layer-ip-routing-icmp",
      "https-tls",
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
      "iptables-nat",
      "browser-fetch",
      "iptables-basics",
      "hosts-file",
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
      "postgres-getting-started"
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
    "mentions": []
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
      "js-pure-functions",
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
      "js-object-methods"
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
      "loading-patterns",
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
      "health-checks",
      "nat-traversal",
      "osi-in-practice",
      "redis-basics",
      "ipv6-basics"
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
      "pattern-proxy",
      "loading-patterns"
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
      "security-groups-nacl",
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
      "k8s-network-policy",
      "timeouts",
      "docker-container-basics",
      "realtime-communication",
      "service-mesh",
      "http-versions",
      "security-groups-nacl",
      "what-happens-google-com",
      "encryption-in-transit",
      "grpc",
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
      "redis-cluster",
      "db-type-newsql",
      "db-type-wide-column",
      "db-type-key-value",
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
      "grpc",
      "packet-encapsulation",
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
      "vpc-subnets-route-tables",
      "docker-container-basics",
      "gateway",
      "iptables-basics",
      "vpc-peering-transit-privatelink",
      "router-vs-switch",
      "http-versions",
      "security-groups-nacl",
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
      "distributed-transactions-2pc",
      "scaling-horizontal-vertical",
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
      "leader-election",
      "redis-basics",
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
      "raft-consensus",
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
      "db-sharding",
      "db-type-relational",
      "bloom-filter",
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
      "postgres-connections-pg-hba",
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
      "db-index-design"
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
      "postgres-reporting-sql",
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
      "security-groups-nacl",
      "ports-and-sockets",
      "layer-ip-addressing",
      "http-status-codes",
      "what-happens-google-com",
      "dhcp",
      "ipv6-basics",
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
      "pub-sub",
      "db-type-relational",
      "kafka-basics",
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
      "redis-memory-eviction",
      "osi-in-practice"
    ],
    "mentions": [
      "exponential-backoff-jitter",
      "redis-cluster",
      "bloom-filter",
      "db-type-columnar-olap",
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
      "realtime-communication",
      "js-pure-functions",
      "pattern-proxy",
      "loading-patterns",
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
      "webhooks",
      "service-mesh",
      "http-versions",
      "encryption-in-transit",
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
      "core-web-vitals"
    ],
    "mentions": [
      "js-es-modules",
      "osi-in-practice"
    ]
  },
  "js-memory-leak": {
    "links": [],
    "mentions": [
      "client-data-cache",
      "redis-memory-eviction",
      "js-memoization",
      "js-function-forms",
      "garbage-collection",
      "event-loop",
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
      "loading-patterns",
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
      "loading-patterns",
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
      "loading-patterns",
      "transactional-outbox",
      "kafka-basics",
      "db-modeling-normalization"
    ]
  },
  "mongodb-document-model": {
    "links": [],
    "mentions": [
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
      "ipv6-basics"
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
      "service-mesh",
      "http-status-codes",
      "what-happens-google-com",
      "cors",
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
      "health-checks",
      "osi-in-practice",
      "docker-container-basics",
      "proxy-reverse-proxy",
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
      "base64",
      "csrf",
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
      "pythagorean-theorem",
      "db-index-design",
      "db-modeling-normalization"
    ]
  }
};
