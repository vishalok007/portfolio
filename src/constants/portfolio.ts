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
      "I am a Data Science & AI student dedicated to architecting intelligent software systems that bridge cutting-edge AI research with production-grade engineering.",
      "My core expertise centers around Machine Learning recommendation engines, automated data analysis platforms, Large Language Models (LLMs), Retrieval-Augmented Generation (RAG), and full-stack AI integration.",
      "Whether it's building intelligent recommendation engines, automating exploratory data analysis, or fine-tuning machine learning models, I focus on delivering practical, high-impact AI solutions."
    ],
    education: "B.Sc. (Hons.) Data Science & AI",
    location: "India",
    availability: "Available for AI Engineering Roles & Collaborations",
    stats: [
      { label: "Real AI Projects Deployed", value: "4+" },
      { label: "Live Streamlit Apps", value: "2+" },
      { label: "Github Repositories", value: "10+" },
      { label: "Core Tech Stack", value: "12+" }
    ]
  },
  skillsCategories: [
    {
      category: "Machine Learning & AI",
      skills: [
        { name: "Recommendation Systems", level: 95, icon: "Brain", description: "Collaborative filtering, content-based recommendation, hybrid career advisors." },
        { name: "Automated Data Analytics", level: 95, icon: "BarChart3", description: "Automated EDA, statistical modeling, feature selection & pipeline design." },
        { name: "Scikit-Learn & ML Algorithms", level: 92, icon: "Cpu", description: "Random Forest, XGBoost, Clustering, SVM, Regression, Model Evaluation." },
        { name: "PyTorch & Deep Learning", level: 88, icon: "Flame", description: "Neural network architectures, PyTorch, Transformers, CNNs." }
      ]
    },
    {
      category: "Generative AI & LLMs",
      skills: [
        { name: "Retrieval-Augmented Gen (RAG)", level: 92, icon: "Bot", description: "Vector databases, semantic search, hybrid retrieval, FAISS & ChromaDB." },
        { name: "LangChain & LlamaIndex", level: 90, icon: "Brain", description: "Agentic workflows, prompt routing, memory, tool integration." },
        { name: "LLM APIs & Prompt Eng", level: 95, icon: "Zap", description: "Gemini, GPT-4, Claude APIs, structured JSON prompt engineering." }
      ]
    },
    {
      category: "Python & Data Science",
      skills: [
        { name: "Python & Streamlit", level: 96, icon: "Server", description: "Interactive data apps, live model deployment, Streamlit Cloud." },
        { name: "Pandas & NumPy", level: 95, icon: "Table", description: "Data manipulation, ETL pipelines, array processing, analytics." },
        { name: "Vector Databases & SQL", level: 90, icon: "Database", description: "FAISS, Chroma, PostgreSQL, relational schema & vector indices." }
      ]
    },
    {
      category: "Frontend & Full Stack",
      skills: [
        { name: "React & TypeScript", level: 88, icon: "Code2", description: "Modern React 19, Vite, custom hooks, component architecture." },
        { name: "Tailwind CSS & Sci-Fi UI", level: 92, icon: "Layout", description: "Glassmorphism, dark aesthetic, responsive web design." }
      ]
    }
  ] as SkillCategory[],
  projects: [
    {
      id: "ai-career-advisor",
      title: "AI Career Advisor",
      subtitle: "Intelligent Machine Learning Recommendation System",
      category: "Machine Learning",
      description: "An intelligent machine learning recommendation system that analyzes candidate profiles, skill sets, and industry demand to recommend personalized career paths and learning roadmaps.",
      longDescription: "Developed an end-to-end intelligent career advisor powered by machine learning classification algorithms and semantic skill matching. The system evaluates user inputs against industry skill matrices, generates confidence scores for target roles, and provides actionable recommendations.",
      tags: ["Python", "Machine Learning", "Streamlit", "Scikit-Learn", "Pandas", "Recommendation Systems"],
      github: "https://github.com/vishalok007/Al-Career-Advisor---Intelligent-Machine-Learning-Recommendation-System",
      demoUrl: "https://dqpxbjdk4lkej2v9uayhcp.streamlit.app/",
      featured: true,
      architecture: [
        "User Profile & Skill Matrix Feature Extraction",
        "Machine Learning Recommendation Engine (Scikit-Learn Classifier & Similarity Matrix)",
        "Interactive Streamlit Cloud Deployment with Real-time Career Roadmaps"
      ],
      metrics: [
        { label: "Recommendation Match", value: "95%" },
        { label: "Live App", value: "Streamlit Cloud" },
        { label: "Status", value: "Production Deployed" }
      ]
    },
    {
      id: "ai-data-analyst",
      title: "AI Data Analyst Platform",
      subtitle: "Intelligent Data Analysis & Machine Learning Platform",
      category: "Full Stack",
      description: "An automated data analysis platform that ingests raw datasets, performs exploratory data analysis (EDA), generates interactive statistical visual charts, and trains ML models instantly.",
      longDescription: "Built a full-featured automated data analyst web platform. Users can upload CSV/Excel files to automatically get data cleaning insights, correlation heatmaps, anomaly detection, distribution plots, and automated baseline ML model predictions.",
      tags: ["Python", "Streamlit", "Pandas", "Seaborn", "Scikit-Learn", "Automated EDA"],
      github: "https://github.com/vishalok007/Al-Data-Analyst-An-Intelligent-Data-Analysis-and-Machine-Learning-Platform",
      demoUrl: "https://3cibvktrrltbwhrdg39ieh.streamlit.app/",
      featured: true,
      architecture: [
        "Automated Data Cleaning, Missing Value Imputation & Type Inference",
        "Statistical Plotting Engine (Plotly / Seaborn / Matplotlib Integration)",
        "Automated AutoML Pipeline for Regression & Classification Tasks"
      ],
      metrics: [
        { label: "Automated Insights", value: "Instant" },
        { label: "Live App", value: "Streamlit Cloud" },
        { label: "Status", value: "Production Deployed" }
      ]
    },
    {
      id: "enterprise-rag",
      title: "Enterprise Document RAG Pipeline",
      subtitle: "Multi-modal RAG with Hybrid Vector Search & Reranking",
      category: "GenAI",
      description: "Production-grade Retrieval-Augmented Generation system capable of parsing PDF, DOCX, and CSV files with hybrid semantic search and Cohere reranking.",
      longDescription: "Built an intelligent document retrieval engine that processes heterogeneous business documents into vector embeddings stored in FAISS and ChromaDB. Utilizes dense vector search followed by cross-encoder reranking to achieve high precision before feeding context to LLMs.",
      tags: ["Python", "FastAPI", "FAISS", "LangChain", "Gemini API", "React"],
      github: "https://github.com/vishalok007/portfolio",
      demoUrl: "https://portfolio-flax-tau-ccf42iih03.vercel.app",
      featured: true,
      architecture: [
        "Document Parsing & Recursive Character Text Splitting",
        "Hybrid Vector Search (Dense HuggingFace Embeddings + FAISS)",
        "FastAPI backend streaming responses to React frontend"
      ],
      metrics: [
        { label: "Retrieval Accuracy", value: "94.2%" },
        { label: "Avg Latency", value: "< 450ms" }
      ]
    },
    {
      id: "realtime-sentiment-nlp",
      title: "Real-Time NLP Sentiment Analyzer",
      subtitle: "Fine-Tuned DistilBERT for Social & Product Analytics",
      category: "NLP",
      description: "High-throughput sentiment analysis system fine-tuned on custom domain datasets with real-time stream evaluation.",
      longDescription: "Fine-tuned DistilBERT on customer review streams. Deployed as a high-concurrency FastAPI microservice with interactive visualization.",
      tags: ["PyTorch", "Hugging Face", "BERT", "FastAPI", "React", "Docker"],
      github: "https://github.com/vishalok007/portfolio",
      demoUrl: "https://portfolio-flax-tau-ccf42iih03.vercel.app",
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
        "Built and deployed live AI applications on Streamlit Cloud and Vercel",
        "Engineered intelligent recommendation engines and automated EDA platforms",
        "Developed end-to-end LLM & RAG applications for real-world projects"
      ]
    },
    {
      year: "2024",
      role: "AI & ML Project Developer",
      organization: "Autonomous Projects & Open Source",
      description: "Architected and published flagship AI projects including AI Career Advisor and AI Data Analyst platform.",
      highlights: [
        "Engineered recommendation systems using Python & Scikit-Learn",
        "Built automated exploratory data analysis engines with Streamlit",
        "Published repositories and live production apps"
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