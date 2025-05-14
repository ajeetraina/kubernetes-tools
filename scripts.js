// Sample data for Kubernetes tools with accurate GitHub star counts and expanded list
const tools = [
    // CLI Tools
    {
        id: 1,
        name: "Kubectl",
        description: "Command line tool for controlling Kubernetes clusters",
        category: "cli-tools",
        github_url: "https://github.com/kubernetes/kubectl",
        stars: 3000,
        votes: 128
    },
    {
        id: 2,
        name: "Helm",
        description: "The Kubernetes package manager",
        category: "cli-tools",
        github_url: "https://github.com/helm/helm",
        stars: 23500,
        votes: 345
    },
    {
        id: 3,
        name: "K9s",
        description: "Kubernetes CLI to manage your clusters in style",
        category: "cli-tools",
        github_url: "https://github.com/derailed/k9s",
        stars: 29700,
        votes: 421
    },
    {
        id: 4,
        name: "Kustomize",
        description: "Customization of Kubernetes YAML configurations",
        category: "cli-tools",
        github_url: "https://github.com/kubernetes-sigs/kustomize",
        stars: 9300,
        votes: 178
    },
    {
        id: 5,
        name: "Kubectx + Kubens",
        description: "Switch faster between clusters and namespaces in kubectl",
        category: "cli-tools",
        github_url: "https://github.com/ahmetb/kubectx",
        stars: 14800,
        votes: 235
    },
    {
        id: 6,
        name: "Stern",
        description: "Multi pod and container log tailing for Kubernetes",
        category: "cli-tools",
        github_url: "https://github.com/stern/stern",
        stars: 6500,
        votes: 145
    },
    
    // Monitoring & Alerting
    {
        id: 7,
        name: "Prometheus",
        description: "Monitoring system and time series database",
        category: "monitoring",
        github_url: "https://github.com/prometheus/prometheus",
        stars: 48700,
        votes: 567
    },
    {
        id: 8,
        name: "Grafana",
        description: "Observability and data visualization platform",
        category: "monitoring",
        github_url: "https://github.com/grafana/grafana",
        stars: 56800,
        votes: 678
    },
    {
        id: 9,
        name: "Kube-state-metrics",
        description: "Add-on agent to generate and expose cluster-level metrics",
        category: "monitoring",
        github_url: "https://github.com/kubernetes/kube-state-metrics",
        stars: 4600,
        votes: 123
    },
    {
        id: 10,
        name: "Node Problem Detector",
        description: "Monitors node health and reports issues as events",
        category: "monitoring",
        github_url: "https://github.com/kubernetes/node-problem-detector",
        stars: 3200,
        votes: 89
    },
    
    // Cluster Management
    {
        id: 11,
        name: "Kind",
        description: "Kubernetes IN Docker - local clusters for testing",
        category: "cluster-management",
        github_url: "https://github.com/kubernetes-sigs/kind",
        stars: 11600,
        votes: 321
    },
    {
        id: 12,
        name: "Minikube",
        description: "Run Kubernetes locally",
        category: "cluster-management",
        github_url: "https://github.com/kubernetes/minikube",
        stars: 26700,
        votes: 432
    },
    {
        id: 13,
        name: "K3s",
        description: "Lightweight Kubernetes distribution",
        category: "cluster-management",
        github_url: "https://github.com/k3s-io/k3s",
        stars: 24300,
        votes: 345
    },
    {
        id: 14,
        name: "KubeEdge",
        description: "Extending Kubernetes to edge computing",
        category: "cluster-management",
        github_url: "https://github.com/kubeedge/kubeedge",
        stars: 6800,
        votes: 156
    },
    {
        id: 15,
        name: "MicroK8s",
        description: "Small, fast, single-package Kubernetes for developers",
        category: "cluster-management",
        github_url: "https://github.com/canonical/microk8s",
        stars: 7900,
        votes: 187
    },
    {
        id: 16,
        name: "Kops",
        description: "Production Grade K8s Installation, Upgrades, and Management",
        category: "cluster-management",
        github_url: "https://github.com/kubernetes/kops",
        stars: 14900,
        votes: 276
    },
    
    // Logging & Tracing
    {
        id: 17,
        name: "Fluentd",
        description: "Data collector for unified logging layer",
        category: "logging",
        github_url: "https://github.com/fluent/fluentd",
        stars: 12000,
        votes: 234
    },
    {
        id: 18,
        name: "Jaeger",
        description: "End-to-end distributed tracing system",
        category: "logging",
        github_url: "https://github.com/jaegertracing/jaeger",
        stars: 18200,
        votes: 289
    },
    {
        id: 19,
        name: "Loki",
        description: "Horizontally-scalable, highly-available log aggregation system",
        category: "logging",
        github_url: "https://github.com/grafana/loki",
        stars: 19300,
        votes: 312
    },
    {
        id: 20,
        name: "ELK Stack for Kubernetes",
        description: "Elasticsearch, Logstash, and Kibana for Kubernetes logging",
        category: "logging",
        github_url: "https://github.com/elastic/elasticsearch",
        stars: 65200,
        votes: 478
    },
    
    // Troubleshooting
    {
        id: 21,
        name: "Kubespy",
        description: "Tools for observing Kubernetes resources in real time",
        category: "troubleshooting",
        github_url: "https://github.com/pulumi/kubespy",
        stars: 3500,
        votes: 87
    },
    {
        id: 22,
        name: "Kubeshark",
        description: "API Traffic Analyzer for Kubernetes",
        category: "troubleshooting",
        github_url: "https://github.com/kubeshark/kubeshark",
        stars: 9100,
        votes: 198
    },
    {
        id: 23,
        name: "Popeye",
        description: "Kubernetes cluster resource sanitizer",
        category: "troubleshooting",
        github_url: "https://github.com/derailed/popeye",
        stars: 4200,
        votes: 109
    },
    {
        id: 24,
        name: "Kubectl-debug",
        description: "Debug your pod by creating a new container with debugging tools",
        category: "troubleshooting",
        github_url: "https://github.com/aylei/kubectl-debug",
        stars: 2800,
        votes: 76
    },
    
    // Development
    {
        id: 25,
        name: "Skaffold",
        description: "Easy and repeatable Kubernetes development",
        category: "development",
        github_url: "https://github.com/GoogleContainerTools/skaffold",
        stars: 14500,
        votes: 276
    },
    {
        id: 26,
        name: "Kubebuilder",
        description: "SDK for building Kubernetes APIs using CRDs",
        category: "development",
        github_url: "https://github.com/kubernetes-sigs/kubebuilder",
        stars: 6800,
        votes: 143
    },
    {
        id: 27,
        name: "Tilt",
        description: "Local Kubernetes development with live updates",
        category: "development",
        github_url: "https://github.com/tilt-dev/tilt",
        stars: 6700,
        votes: 156
    },
    {
        id: 28,
        name: "Telepresence",
        description: "Local development against a remote Kubernetes cluster",
        category: "development",
        github_url: "https://github.com/telepresenceio/telepresence",
        stars: 5900,
        votes: 132
    },
    
    // CI/CD
    {
        id: 29,
        name: "ArgoCD",
        description: "Declarative continuous delivery for Kubernetes",
        category: "cicd",
        github_url: "https://github.com/argoproj/argo-cd",
        stars: 14300,
        votes: 321
    },
    {
        id: 30,
        name: "Tekton",
        description: "Cloud Native CI/CD",
        category: "cicd",
        github_url: "https://github.com/tektoncd/pipeline",
        stars: 8000,
        votes: 187
    },