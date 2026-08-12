export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'GenAI' | 'Machine Learning' | 'NLP' | 'Full Stack';
  description: string;
  longDescription: string;
  tags: string[];
  github: string;
  demoUrl?: string;
  featured: boolean;
  architecture: string[];
  metrics?: { label: string; value: string }[];
}

export interface SkillItem {
  name: string;
  level: number;
  icon: string;
  description: string;
}

export interface SkillCategory {
  category: string;
  skills: SkillItem[];
}

export interface TimelineItem {
  year: string;
  role: string;
  organization: string;
  description: string;
  highlights: string[];
}

export const portfolio = {
  name: "Vishal Kumar",
  title: "AI Engineer & Data Science Specialist",
  roles: [
    "AI Engineer",
    "LLM & RAG Specialist",
    "Machine Learning Developer",
    "Data Scientist",
  ],
  tagline:
    "Building production-grade AI systems, LLM pipelines, RAG applications, and intelligent automation powered by Machine Learning.",
  about: {
    short: "I design and build AI-powered applications using Python, LLMs, RAG, FastAPI, React, and Machine Learning.",
    bio: [
      "I am a Data Science & AI undergraduate dedicated to architecting intelligent software systems that bridge cutting-edge AI research with production-grade engineering.",
      "My core expertise centers around Large Language Models (LLMs), Retrieval-Augmented Generation (RAG), Vector Search, Deep Learning, and end-to-end full-stack AI integration.",
      "Whether it's optimizing vector embeddings, fine-tuning neural networks, or crafting high-performance RESTful APIs with FastAPI and React, I focus on delivering scalable, measurable impact."
    ],
    education: "B.Sc. (Hons.) Data Science & AI",
    location: "India",
    availability: "Available for AI Engineering Roles & Collaborations",
    stats: [
      { label: "AI Models & Pipelines", value: "15+" },
      { label: "RAG & LLM Systems", value: "8+" },
      { label: "Github Commits", value: "500+" },
      { label: "Core Tech Stack", value: "12+" }
    ]
  },
  skillsCategories: [
    {
      category: "Generative AI & LLMs",
      skills: [
        { name: "Retrieval-Augmented Gen (RAG)", level: 95, icon: "Bot", description: "Advanced chunking, hybrid search, reranking, FAISS & ChromaDB." },
        { name: "LangChain & LlamaIndex", level: 90, icon: "Brain", description: "Multi-agent workflows, tool routing, memory, and chain orchestration." },
        { name: "LLM APIs & Prompt Eng", level: 95, icon: "Cpu", description: "Gemini, OpenAI GPT-4, Claude APIs, structured JSON output." },
        { name: "Fine-Tuning & Quantization", level: 80, icon: "Zap", description: "LoRA, QLoRA, Hugging Face Transformers, PEFT techniques." }
      ]
    },
    {
      category: "Machine Learning & DL",
      skills: [
        { name: "PyTorch & TensorFlow", level: 88, icon: "Flame", description: "Custom neural network architecture, CNNs, Transformers." },
        { name: "Scikit-Learn & ML Algorithms", level: 92, icon: "BarChart3", description: "Regression, Random Forest, XGBoost, Clustering, Feature Engineering." },
        { name: "Computer Vision & NLP", level: 85, icon: "Eye", description: "OpenCV, spaCy, NLTK, Sentiment Analysis, Text Embeddings." }
      ]
    },
    {
      category: "Backend & Data Infra",
      skills: [
        { name: "Python & FastAPI", level: 95, icon: "Server", description: "Async REST APIs, WebSockets, OpenAPI documentation, Pydantic." },
        { name: "Vector Databases", level: 90, icon: "Database", description: "FAISS, Chroma, Pinecone, Pgvector, semantic similarity." },
        { name: "SQL & PostgreSQL", level: 85, icon: "Table", description: "Database design, indexing, complex query optimization." }
      ]
    },
    {
      category: "Frontend & Full Stack",
      skills: [
        { name: "React & TypeScript", level: 88, icon: "Code2", description: "Modern React 19, custom hooks, state management, Vite." },
        { name: "Tailwind CSS & Sci-Fi UI", level: 92, icon: "Layout", description: "Glassmorphism, responsive grid, dynamic animations, dark mode." }
      ]
    }
  ] as SkillCategory[],
  projects: [
    {
      id: "enterprise-rag",
      title: "Enterprise Document RAG Pipeline",
      subtitle: "Multi-modal RAG with Hybrid Vector Search & Reranking",
      category: "GenAI",
      description: "Production-grade Retrieval-Augmented Generation system capable of parsing PDF, DOCX, and CSV files with hybrid semantic search and Cohere reranking.",
      longDescription: "Built an end-to-end intelligent document retrieval engine that processes heterogeneous business documents into optimized vector embeddings stored in FAISS and ChromaDB. Utilizes hybrid BM25 + dense vector search followed by cross-encoder reranking to achieve 94%+ retrieval precision before feeding context to Gemini 1.5 Pro.",
      tags: ["Python", "FastAPI", "FAISS", "LangChain", "Gemini API", "React"],
      github: "https://github.com/vishalok007/portfolio",
      demoUrl: "https://github.com/vishalok007/portfolio",
      featured: true,
      architecture: [
        "Document Parsing & Recursive Character Text Splitting",
        "Hybrid Search (Dense HuggingFace Embeddings + Sparse BM25)",
        "Cross-Encoder Re-ranking layer for top-k selection",
        "FastAPI async backend streaming responses via Server-Sent Events"
      ],
      metrics: [
        { label: "Retrieval Accuracy", value: "94.2%" },
        { label: "Avg Latency", value: "< 450ms" },
        { label: "Docs Processed", value: "10,000+" }
      ]
    },
    {
      id: "autonomous-code-agent",
      title: "AI Code Analysis & Debugger Agent",
      subtitle: "Multi-agent System for Automated Code Review & Refactoring",
      category: "GenAI",
      description: "Autonomous LLM agent system that scans GitHub repositories, detects anti-patterns, runs static analysis, and automatically generates pull request recommendations.",
      longDescription: "Engineered a multi-agent workflow leveraging LangGraph and AST parsing to autonomously analyze code structure, detect security vulnerabilities, generate unit test suites, and write step-by-step refactoring proposals.",
      tags: ["Python", "LangChain", "LangGraph", "AST Parsing", "LLMs", "TypeScript"],
      github: "https://github.com/vishalok007/portfolio",
      demoUrl: "https://github.com/vishalok007/portfolio",
      featured: true,
      architecture: [
        "Repository AST Parsing & Dependency Graph Generation",
        "Multi-Agent Supervisor Routing (Linter Agent, Tester Agent, Reviewer Agent)",
        "Self-Correction loop validating generated code syntax"
      ],
      metrics: [
        { label: "Bug Detection Rate", value: "88%" },
        { label: "Review Speedup", value: "5x faster" }
      ]
    },
    {
      id: "customer-churn-predictor",
      title: "Predictive Analytics & Customer Churn Engine",
      subtitle: "Machine Learning Model Pipeline with Real-Time Inference",
      category: "Machine Learning",
      description: "End-to-end ML pipeline utilizing XGBoost, Random Forest, and SHAP interpretability to predict enterprise customer churn with high precision.",
      longDescription: "Developed a predictive machine learning system using historical telemetry and transactional data. Designed feature engineering pipelines, handled class imbalance using SMOTE, and integrated SHAP values for explainable AI metrics provided via an interactive dashboard.",
      tags: ["Python", "Scikit-Learn", "XGBoost", "SHAP", "Pandas", "Streamlit"],
      github: "https://github.com/vishalok007/portfolio",
      demoUrl: "https://github.com/vishalok007/portfolio",
      featured: true,
      architecture: [
        "Data Preprocessing & Automated Feature Selection",
        "XGBoost Classifier tuned via Bayesian Optimization",
        "SHAP (SHapley Additive exPlanations) for model transparency"
      ],
      metrics: [
        { label: "ROC-AUC Score", value: "0.93" },
        { label: "Precision", value: "91.5%" }
      ]
    },
    {
      id: "realtime-sentiment-nlp",
      title: "Real-Time NLP Sentiment Analyzer",
      subtitle: "Fine-Tuned DistilBERT for Social & Product Analytics",
      category: "NLP",
      description: "High-throughput sentiment analysis system fine-tuned on custom domain datasets with real-time WebSocket stream processing.",
      longDescription: "Fine-tuned DistilBERT on multi-lingual customer review streams. Deployed as a high-concurrency FastAPI microservice containerized with Docker and connected to a live React visualization frontend.",
      tags: ["PyTorch", "Hugging Face", "BERT", "FastAPI", "React", "Docker"],
      github: "https://github.com/vishalok007/portfolio",
      demoUrl: "https://github.com/vishalok007/portfolio",
      featured: false,
      architecture: [
        "DistilBERT fine-tuning using Hugging Face Trainer API",
        "Quantized model inference with ONNX Runtime",
        "WebSocket streaming connection for real-time sentiment scoring"
      ],
      metrics: [
        { label: "F1-Score", value: "0.91" },
        { label: "Inference Latency", value: "18ms" }
      ]
    }
  ] as Project[],
  timeline: [
    {
      year: "2023 - Present",
      role: "B.Sc. (Hons.) Data Science & AI",
      organization: "Academic Program",
      description: "Specializing in Machine Learning, Statistical Inference, Deep Learning, Natural Language Processing, and Software Engineering principles.",
      highlights: [
        "Built core expertise in Python, PyTorch, SQL, Algorithms, and Mathematics for ML",
        "Developed end-to-end LLM & RAG applications for real-world projects",
        "Lead peer research groups on Generative AI and Transformer architectures"
      ]
    },
    {
      year: "2024",
      role: "AI & ML Project Lead",
      organization: "Autonomous Projects & Research",
      description: "Architected multiple production-ready AI applications, including document search pipelines, AI agents, and predictive ML models.",
      highlights: [
        "Engineered RAG pipelines with vector databases (FAISS, Chroma)",
        "Integrated modern LLM APIs (Gemini, OpenAI) with React & FastAPI",
        "Published technical repositories and interactive demos"
      ]
    }
  ] as TimelineItem[],
  socials: {
    github: "https://github.com/vishalok007",
    linkedin: "https://linkedin.com/in/vishalkumar-ai",
    twitter: "https://x.com/vishalkumar_ai",
    email: "vishal878937raj@gmail.com",
    resumeUrl: "#"
  }
};