const translations = {
  // General
  "app.name": "IndonesianFoodKG",
  "app.description":
    "A tool for creating knowledge graphs and optimizing RAG for Indonesian cuisine",

  // Navigation
  "nav.home": "Home",
  "nav.dashboard": "Dashboard",
  "nav.knowledge-graph": "Knowledge Graph",
  "nav.rag": "RAG Optimization",
  "nav.get-started": "Get Started",

  // Home Page
  "home.hero.title": "Indonesian Food",
  "home.hero.subtitle": "Knowledge Graph & RAG",
  "home.hero.description":
    "Create comprehensive knowledge graphs of Indonesian cuisine and leverage them to optimize retrieval-augmented generation (RAG) systems.",
  "home.create-kg": "Create Knowledge Graph",
  "home.optimize-rag": "Optimize RAG",

  "home.how-it-works": "How It Works",
  "home.how-it-works.step1.title": "Input Indonesian Food Data",
  "home.how-it-works.step1.description":
    "Upload or enter data about Indonesian cuisine, ingredients, and cooking methods.",
  "home.how-it-works.step2.title": "Generate Knowledge Graph",
  "home.how-it-works.step2.description":
    "Our system automatically extracts entities and relationships to build a comprehensive knowledge graph.",
  "home.how-it-works.step3.title": "Optimize RAG with KG",
  "home.how-it-works.step3.description":
    "Enhance retrieval-augmented generation using the knowledge graph for more accurate and informative responses.",

  "home.get-started.title": "Ready to Get Started?",
  "home.get-started.description":
    "Begin building your Indonesian food knowledge graph and optimize your retrieval-augmented generation today.",

  "home.research.title": "Research Background",
  "home.research.p1":
    "This master thesis project explores the intersection of knowledge graphs and retrieval-augmented generation (RAG) in the domain of Indonesian cuisine. By creating a comprehensive knowledge graph of Indonesian food, ingredients, and cooking techniques, we aim to enhance the accuracy and context-awareness of RAG systems.",
  "home.research.p2":
    "Knowledge graphs provide a structured representation of domain knowledge, capturing entities and their relationships. When integrated with RAG, they can guide the retrieval process and provide additional context for generating more accurate and culturally relevant responses.",
  "home.research.p3":
    "This tool demonstrates the practical application of these concepts, allowing users to create and visualize knowledge graphs from input data and to observe the improvements in RAG performance when leveraging knowledge graph information.",

  // Features Section
  "features.title": "Key Features",
  "features.description":
    "Our platform offers a comprehensive suite of tools for creating knowledge graphs and optimizing RAG systems specifically for Indonesian cuisine.",
  "features.kg-creation.title": "Knowledge Graph Creation",
  "features.kg-creation.description":
    "Automatically extract entities and relationships from Indonesian food data to create comprehensive knowledge graphs.",
  "features.enhanced-retrieval.title": "Enhanced Retrieval",
  "features.enhanced-retrieval.description":
    "Improve information retrieval with structured knowledge, making responses more accurate and contextual.",
  "features.rag-optimization.title": "RAG Optimization",
  "features.rag-optimization.description":
    "Optimize retrieval-augmented generation using knowledge graph information for better responses.",
  "features.data-analysis.title": "Data Analysis",
  "features.data-analysis.description":
    "Analyze patterns and connections in Indonesian cuisine data for deeper insights.",
  "features.customizable.title": "Customizable Framework",
  "features.customizable.description":
    "Adapt the knowledge graph structure to your specific research needs and data types.",
  "features.academic.title": "Academic Research",
  "features.academic.description":
    "Support your master thesis with quantifiable results and visualizations.",

  // Dashboard
  "dashboard.title": "Dashboard",
  "dashboard.description":
    "Manage your Indonesian food knowledge graphs and RAG optimizations",
  "dashboard.stats.kg-created": "Knowledge Graphs Created",
  "dashboard.stats.entities": "Entities Extracted",
  "dashboard.stats.relationships": "Relationships Identified",
  "dashboard.stats.queries": "RAG Queries Processed",

  "dashboard.activity.title": "Recent Activity",
  "dashboard.activity.log": "Activity Log",

  "dashboard.research.title": "Research Thesis Progress",
  "dashboard.research.description":
    "Your master thesis on Indonesian food knowledge graphs and RAG optimization is making great progress. Continue building your dataset and analyzing the results.",
  "dashboard.research.notes": "View Research Notes",

  // Knowledge Graph Page
  "kg.title": "Knowledge Graph Creation",
  "kg.description":
    "Create and visualize knowledge graphs from Indonesian food data",
  "kg.create-tab": "Create Graph",
  "kg.visualize-tab": "Visualize Graph",

  "kg.form.title": "Create Knowledge Graph",
  "kg.form.description":
    "Generate a knowledge graph from Indonesian food data by providing text or uploading a file.",
  "kg.form.text-tab": "Text Input",
  "kg.form.file-tab": "File Upload",
  "kg.form.text-label": "Indonesian Food Description",
  "kg.form.text-placeholder":
    "Enter information about Indonesian food, ingredients, recipes, cooking methods, etc.",
  "kg.form.file-label": "Upload File",
  "kg.form.file-description": "Click to upload or drag and drop",
  "kg.form.file-formats": "Supports TXT, CSV, JSON, XLSX, DOCX",
  "kg.form.remove-file": "Remove File",
  "kg.form.extraction-method": "Entity Extraction Method",
  "kg.form.method.automatic": "Automatic (NLP-based)",
  "kg.form.method.rule-based": "Rule-based",
  "kg.form.method.hybrid": "Hybrid Approach",
  "kg.form.graph-type": "Knowledge Graph Type",
  "kg.form.type.comprehensive": "Comprehensive",
  "kg.form.type.ingredient": "Ingredient-focused",
  "kg.form.type.recipe": "Recipe-focused",
  "kg.form.type.regional": "Regional Cuisine",
  "kg.form.advanced-options": "Advanced Options",
  "kg.form.advanced-placeholder":
    "Enter custom entity types, relationship definitions, or other configuration options (optional)",
  "kg.form.reset": "Reset",
  "kg.form.generate": "Generate Knowledge Graph",
  "kg.form.processing": "Processing...",

  // Visualization
  "viz.title": "Knowledge Graph Visualization",
  "viz.description":
    "Visual representation of Indonesian food knowledge graph with {nodeCount} nodes and {edgeCount} relationships.",
  "viz.filter": "Filter by:",
  "viz.all-types": "All Types",
  "viz.graph-view": "Graph View",
  "viz.table-view": "Table View",
  "viz.placeholder":
    "This is where the actual graph visualization would be rendered using a library like D3.js or Cytoscape.js",
  "viz.more-nodes": "...and {count} more nodes",
  "viz.selected": "Selected:",
  "viz.type": "Type:",
  "viz.connections": "Connections:",

  // RAG Page
  "rag.title": "RAG Optimization",
  "rag.description":
    "Optimize retrieval-augmented generation with knowledge graph integration",

  "rag.form.title": "RAG Optimization with Knowledge Graph",
  "rag.form.description":
    "Optimize retrieval-augmented generation using Indonesian food knowledge graph data.",
  "rag.form.query-tab": "Query Input",
  "rag.form.settings-tab": "Advanced Settings",
  "rag.form.query-label": "Enter Your Query",
  "rag.form.query-placeholder":
    "Ask a question about Indonesian food, recipes, ingredients, cooking methods, etc.",
  "rag.form.use-kg": "Use Knowledge Graph for Enhanced Retrieval",
  "rag.form.examples": "Example Queries:",
  "rag.form.example1": "What are the key ingredients in Rendang?",
  "rag.form.example2":
    "How does Balinese cuisine differ from Javanese cuisine?",
  "rag.form.example3": "What cooking techniques are used in preparing Soto?",
  "rag.form.example4": "What vegetarian Indonesian dishes use tempeh?",

  "rag.form.retrieval-method": "Retrieval Method",
  "rag.form.method.semantic": "Semantic Search",
  "rag.form.method.kg-based": "Knowledge Graph Based",
  "rag.form.method.hybrid": "Hybrid Approach",

  "rag.form.model-type": "Model Size",
  "rag.form.model.small": "Small (Fast)",
  "rag.form.model.medium": "Medium (Balanced)",
  "rag.form.model.large": "Large (High Quality)",

  "rag.form.temperature": "Temperature",
  "rag.form.temperature-desc":
    "Lower values produce more consistent outputs, higher values produce more creative outputs.",
  "rag.form.custom-params": "Custom Parameters (Advanced)",
  "rag.form.custom-placeholder":
    "Enter custom parameters in JSON format (optional)",

  "rag.form.reset": "Reset",
  "rag.form.generate": "Generate Response",
  "rag.form.processing": "Processing...",

  // Results
  "results.title": "RAG Results",
  "results.description":
    "Knowledge graph enhanced retrieval-augmented generation results",
  "results.response-tab": "Response",
  "results.sources-tab": "Sources",
  "results.evaluation-tab": "Evaluation",

  "results.query": "Query:",
  "results.helpful": "Helpful",
  "results.not-helpful": "Not Helpful",
  "results.copy": "Copy",
  "results.download": "Download",

  "results.sources-description":
    "Information sources used to generate the response, ranked by relevance.",
  "results.relevance": "Relevance: ",

  "results.evaluation-description":
    "Performance metrics for this query based on knowledge graph integration.",
  "results.metric.accuracy": "Accuracy",
  "results.metric.relevance": "Relevance",
  "results.metric.completeness": "Completeness",

  "results.kg-enhancement": "Knowledge Graph Enhancement",
  "results.kg-enhancement-desc":
    "Using the knowledge graph improved the response quality by providing structured relationships between Indonesian food entities, regional variations, and ingredients, resulting in a more comprehensive and accurate answer.",

  // Footer
  "footer.description":
    "A master thesis project focused on knowledge graph creation and RAG optimization for Indonesian cuisine.",
  "footer.quick-links": "Quick Links",
  "footer.resources": "Resources",
  "footer.documentation": "Documentation",
  "footer.research-paper": "Research Paper",
  "footer.api-reference": "API Reference",
  "footer.contact": "Contact",
  "footer.rights": "©IndonesianFoodKG. All rights reserved.",
  "footer.created-for":
    "Created for Master Thesis Research on Knowledge Graph Creation and RAG Optimization",

  // Language Switcher
  "language.en": "English",
  "language.id": "Indonesian",
};

export default translations;
