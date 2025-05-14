// Sample data for Kubernetes tools with accurate GitHub star counts
const tools = [
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
        name: "Prometheus",
        description: "Monitoring system and time series database",
        category: "monitoring",
        github_url: "https://github.com/prometheus/prometheus",
        stars: 48700,
        votes: 567
    },
    {
        id: 6,
        name: "Grafana",
        description: "Observability and data visualization platform",
        category: "monitoring",
        github_url: "https://github.com/grafana/grafana",
        stars: 56800,
        votes: 678
    },
    {
        id: 7,
        name: "Istio",
        description: "Service mesh for Kubernetes",
        category: "service-mesh",
        github_url: "https://github.com/istio/istio",
        stars: 33900,
        votes: 432
    },
    {
        id: 8,
        name: "Linkerd",
        description: "Ultralight, security-first service mesh",
        category: "service-mesh",
        github_url: "https://github.com/linkerd/linkerd2",
        stars: 9900,
        votes: 234
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
        name: "Kind",
        description: "Kubernetes IN Docker - local clusters for testing",
        category: "cluster-management",
        github_url: "https://github.com/kubernetes-sigs/kind",
        stars: 11600,
        votes: 321
    },
    {
        id: 11,
        name: "Minikube",
        description: "Run Kubernetes locally",
        category: "cluster-management",
        github_url: "https://github.com/kubernetes/minikube",
        stars: 26700,
        votes: 432
    },
    {
        id: 12,
        name: "K3s",
        description: "Lightweight Kubernetes distribution",
        category: "cluster-management",
        github_url: "https://github.com/k3s-io/k3s",
        stars: 24300,
        votes: 345
    },
    {
        id: 13,
        name: "Fluentd",
        description: "Data collector for unified logging layer",
        category: "logging",
        github_url: "https://github.com/fluent/fluentd",
        stars: 12000,
        votes: 234
    },
    {
        id: 14,
        name: "Jaeger",
        description: "End-to-end distributed tracing system",
        category: "logging",
        github_url: "https://github.com/jaegertracing/jaeger",
        stars: 18200,
        votes: 289
    },
    {
        id: 15,
        name: "Kubespy",
        description: "Tools for observing Kubernetes resources in real time",
        category: "troubleshooting",
        github_url: "https://github.com/pulumi/kubespy",
        stars: 3500,
        votes: 87
    },
    {
        id: 16,
        name: "Skaffold",
        description: "Easy and repeatable Kubernetes development",
        category: "development",
        github_url: "https://github.com/GoogleContainerTools/skaffold",
        stars: 14500,
        votes: 276
    },
    {
        id: 17,
        name: "Kubebuilder",
        description: "SDK for building Kubernetes APIs using CRDs",
        category: "development",
        github_url: "https://github.com/kubernetes-sigs/kubebuilder",
        stars: 6800,
        votes: 143
    },
    {
        id: 18,
        name: "ArgoCD",
        description: "Declarative continuous delivery for Kubernetes",
        category: "cicd",
        github_url: "https://github.com/argoproj/argo-cd",
        stars: 14300,
        votes: 321
    },
    {
        id: 19,
        name: "Tekton",
        description: "Cloud Native CI/CD",
        category: "cicd",
        github_url: "https://github.com/tektoncd/pipeline",
        stars: 8000,
        votes: 187
    },
    {
        id: 20,
        name: "Kube-bench",
        description: "Checks whether Kubernetes is deployed securely",
        category: "security",
        github_url: "https://github.com/aquasecurity/kube-bench",
        stars: 5900,
        votes: 134
    },
    {
        id: 21,
        name: "Kubecost",
        description: "Kubernetes cost monitoring and optimization",
        category: "cost",
        github_url: "https://github.com/kubecost/cost-model",
        stars: 4500,
        votes: 98
    },
    {
        id: 22,
        name: "Rook",
        description: "Storage orchestration for Kubernetes",
        category: "storage",
        github_url: "https://github.com/rook/rook",
        stars: 11200,
        votes: 234
    },
    {
        id: 23,
        name: "Velero",
        description: "Backup and migrate Kubernetes applications",
        category: "backup",
        github_url: "https://github.com/vmware-tanzu/velero",
        stars: 8000,
        votes: 176
    },
    {
        id: 24,
        name: "OpenFaaS",
        description: "Serverless Functions Made Simple",
        category: "faas",
        github_url: "https://github.com/openfaas/faas",
        stars: 23100,
        votes: 321
    },
    {
        id: 25,
        name: "KubeFlow",
        description: "Machine Learning Toolkit for Kubernetes",
        category: "ai",
        github_url: "https://github.com/kubeflow/kubeflow",
        stars: 13000,
        votes: 289
    }
];

// Keep track of user votes (in a real app, this would be stored in a database)
let userVotes = {};

// DOM elements
const categoriesList = document.getElementById('categories-list');
const toolsList = document.getElementById('tools-list');
const toolsGrid = document.getElementById('tools-grid');
const toolsTable = document.getElementById('tools-table');
const currentCategoryTitle = document.getElementById('current-category');
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const categorySearch = document.getElementById('category-search');
const gridViewBtn = document.getElementById('grid-view-btn');
const listViewBtn = document.getElementById('list-view-btn');
const submitToolBtn = document.getElementById('submit-tool-btn');

// Initial view setting
let currentView = 'table';
let currentCategory = 'all';
let currentSearch = '';

// Initialize the page
function init() {
    renderTools();
    setupEventListeners();
}

// Render tools based on current category and search
function renderTools() {
    const filteredTools = filterTools();
    
    if (currentView === 'table') {
        renderTableView(filteredTools);
        toolsTable.style.display = 'table';
        toolsGrid.style.display = 'none';
    } else {
        renderGridView(filteredTools);
        toolsTable.style.display = 'none';
        toolsGrid.style.display = 'flex';
    }
}

// Filter tools based on category and search
function filterTools() {
    return tools.filter(tool => {
        const categoryMatch = currentCategory === 'all' || tool.category === currentCategory;
        const searchMatch = !currentSearch || 
            tool.name.toLowerCase().includes(currentSearch.toLowerCase()) || 
            tool.description.toLowerCase().includes(currentSearch.toLowerCase());
        return categoryMatch && searchMatch;
    });
}

// Render tools in table view
function renderTableView(filteredTools) {
    toolsList.innerHTML = '';
    
    filteredTools.forEach(tool => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <a href="#" class="tool-link" data-id="${tool.id}">${tool.name}</a>
            </td>
            <td>${tool.description}</td>
            <td><span class="badge bg-primary">${getCategoryName(tool.category)}</span></td>
            <td>
                <span class="stars-count">
                    <i class="fas fa-star"></i> ${formatNumber(tool.stars)}
                </span>
            </td>
            <td>
                <div class="d-flex align-items-center">
                    <span class="me-2">${tool.votes}</span>
                    <button class="vote-btn upvote" data-id="${tool.id}" title="Upvote">
                        <i class="fas fa-thumbs-up"></i>
                    </button>
                    <button class="vote-btn downvote ms-1" data-id="${tool.id}" title="Downvote">
                        <i class="fas fa-thumbs-down"></i>
                    </button>
                </div>
            </td>
        `;
        toolsList.appendChild(row);
    });
    
    // Add event listeners to tool links and vote buttons
    addToolEventListeners();
}

// Render tools in grid view
function renderGridView(filteredTools) {
    toolsGrid.innerHTML = '';
    
    filteredTools.forEach(tool => {
        const col = document.createElement('div');
        col.className = 'col-sm-6 col-md-4 col-lg-3';
        
        const card = document.createElement('div');
        card.className = 'card tool-card';
        card.innerHTML = `
            <div class="card-header">
                ${tool.name}
            </div>
            <div class="card-body">
                <p class="card-text">${tool.description}</p>
                <span class="badge bg-primary">${getCategoryName(tool.category)}</span>
            </div>
            <div class="card-footer">
                <span class="stars-count">
                    <i class="fas fa-star"></i> ${formatNumber(tool.stars)}
                </span>
                <div class="d-flex align-items-center">
                    <span class="me-2">${tool.votes}</span>
                    <button class="vote-btn upvote" data-id="${tool.id}" title="Upvote">
                        <i class="fas fa-thumbs-up"></i>
                    </button>
                    <button class="vote-btn downvote ms-1" data-id="${tool.id}" title="Downvote">
                        <i class="fas fa-thumbs-down"></i>
                    </button>
                </div>
            </div>
        `;
        
        card.setAttribute('data-id', tool.id);
        card.addEventListener('click', function(e) {
            if (!e.target.closest('.vote-btn')) {
                showToolDetails(tool.id);
            }
        });
        
        col.appendChild(card);
        toolsGrid.appendChild(col);
    });
    
    // Add event listeners to vote buttons
    const voteButtons = document.querySelectorAll('.vote-btn');
    voteButtons.forEach(btn => {
        btn.addEventListener('click', handleVote);
    });
}

// Add event listeners to tool links and vote buttons in table view
function addToolEventListeners() {
    const toolLinks = document.querySelectorAll('.tool-link');
    toolLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const toolId = this.getAttribute('data-id');
            showToolDetails(toolId);
        });
    });
    
    const voteButtons = document.querySelectorAll('.vote-btn');
    voteButtons.forEach(btn => {
        btn.addEventListener('click', handleVote);
    });
}

// Show tool details modal
function showToolDetails(toolId) {
    const tool = tools.find(t => t.id === parseInt(toolId));
    if (!tool) return;
    
    const modal = new bootstrap.Modal(document.getElementById('tool-details-modal'));
    const modalTitle = document.getElementById('toolDetailsModalLabel');
    const modalContent = document.getElementById('tool-details-content');
    const githubBtn = document.getElementById('visit-github-btn');
    
    modalTitle.textContent = tool.name;
    modalContent.innerHTML = `
        <div class="tool-details">
            <p class="lead">${tool.description}</p>
            <div class="mb-3">
                <strong>Category:</strong> <span class="badge bg-primary">${getCategoryName(tool.category)}</span>
            </div>
            <div class="mb-3">
                <strong>GitHub Stars:</strong> <span class="stars-count"><i class="fas fa-star"></i> ${formatNumber(tool.stars)}</span>
            </div>
            <div class="mb-3">
                <strong>Votes:</strong> ${tool.votes}
            </div>
        </div>
    `;
    
    githubBtn.href = tool.github_url;
    
    modal.show();
}

// Handle vote button clicks
function handleVote(e) {
    e.stopPropagation();
    const toolId = this.getAttribute('data-id');
    const voteType = this.classList.contains('upvote') ? 'up' : 'down';
    
    // Prevent multiple votes on the same tool
    if (userVotes[toolId]) {
        alert('You have already voted for this tool!');
        return;
    }
    
    const tool = tools.find(t => t.id === parseInt(toolId));
    if (tool) {
        if (voteType === 'up') {
            tool.votes++;
        } else {
            tool.votes = Math.max(0, tool.votes - 1);
        }
        
        // Record the vote
        userVotes[toolId] = voteType;
        
        // Update the UI
        renderTools();
    }
}

// Set up all event listeners
function setupEventListeners() {
    // Category selection
    categoriesList.addEventListener('click', function(e) {
        if (e.target.tagName === 'LI') {
            const allCategories = document.querySelectorAll('.categories li');
            allCategories.forEach(cat => cat.classList.remove('active'));
            
            e.target.classList.add('active');
            currentCategory = e.target.getAttribute('data-category');
            currentCategoryTitle.textContent = getCategoryName(currentCategory);
            
            renderTools();
        }
    });
    
    // Search functionality
    searchButton.addEventListener('click', function() {
        currentSearch = searchInput.value.trim();
        renderTools();
    });
    
    searchInput.addEventListener('keyup', function(e) {
        if (e.key === 'Enter') {
            currentSearch = searchInput.value.trim();
            renderTools();
        }
    });
    
    // Category filter
    categorySearch.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const categories = document.querySelectorAll('.categories li');
        
        categories.forEach(cat => {
            const categoryName = cat.textContent.toLowerCase();
            if (categoryName.includes(searchTerm)) {
                cat.style.display = 'block';
            } else {
                cat.style.display = 'none';
            }
        });
    });
    
    // View toggle
    gridViewBtn.addEventListener('click', function() {
        if (currentView !== 'grid') {
            currentView = 'grid';
            gridViewBtn.classList.add('active');
            listViewBtn.classList.remove('active');
            renderTools();
        }
    });
    
    listViewBtn.addEventListener('click', function() {
        if (currentView !== 'table') {
            currentView = 'table';
            listViewBtn.classList.add('active');
            gridViewBtn.classList.remove('active');
            renderTools();
        }
    });
    
    // Submit tool form
    submitToolBtn.addEventListener('click', function() {
        const form = document.getElementById('submit-tool-form');
        if (form.checkValidity()) {
            const newTool = {
                id: tools.length + 1,
                name: document.getElementById('tool-name').value,
                description: document.getElementById('tool-description').value,
                category: document.getElementById('tool-category').value,
                github_url: document.getElementById('github-url').value,
                stars: 0, // Would be fetched from GitHub API in a real app
                votes: 0
            };
            
            tools.push(newTool);
            
            // Close the modal and reset form
            const modal = bootstrap.Modal.getInstance(document.getElementById('submit-tool-modal'));
            modal.hide();
            form.reset();
            
            // Update the UI
            renderTools();
            
            // Show success message
            alert('Tool submitted successfully!');
        } else {
            form.reportValidity();
        }
    });
}

// Helper function to get a readable category name
function getCategoryName(category) {
    const categoryMap = {
        'all': 'All Tools',
        'cluster-management': 'Cluster Management',
        'cli-tools': 'CLI Tools',
        'monitoring': 'Monitoring & Alerting',
        'logging': 'Logging & Tracing',
        'troubleshooting': 'Troubleshooting',
        'development': 'Development Tools',
        'cicd': 'CI/CD Integration',
        'security': 'Security Tools',
        'service-mesh': 'Service Mesh',
        'storage': 'Storage Providers',
        'backup': 'Backup Tools',
        'cost': 'Cost Optimization',
        'faas': 'Function as a Service',
        'ai': 'AI/ML Tools'
    };
    
    return categoryMap[category] || category;
}

// Helper function to format numbers with commas
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Initialize the page when DOM is loaded
document.addEventListener('DOMContentLoaded', init);