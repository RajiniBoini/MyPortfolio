import { asset } from '../utils/asset';

export const projectData = {
  amex: {
    title: "American Express: Enterprise Treasury & Liquidity GenAI Platform",
    description: "GenAI-powered decision-support platform for treasury and finance teams analyzing liquidity positions using RAG, LangGraph agents, and enterprise-grade safety controls.",
    details: {
      overview: "Built a Retrieval-Augmented Generation (RAG) architecture and multi-step AI agent workflows for treasury teams to analyze cash flow forecasts, funding strategies, and regulatory liquidity disclosures with grounded, explainable insights.",
      features: [
        "RAG architecture ingesting treasury reports, cash flow statements, and regulatory disclosures",
        "Document ingestion pipelines for structured (CSV, Excel) and unstructured (PDF, policy docs) data",
        "Multi-step AI agent workflows using LangGraph for liquidity analysis",
        "Modular GenAI pipelines with LangChain and LangSmith for prompt versioning & auditability",
        "AWS-native data pipelines (S3, Lambda, ECS) for scalable inference",
        "Governance controls: source citation, confidence scoring, response validation",
        "30% developer velocity improvement using Cursor AI with MCP"
      ],
      technologies: "Python, LangChain, LangGraph, LangSmith, OpenAI APIs, FAISS, FastAPI, AWS (S3, Lambda, ECS), RAG Architectures",
      impact: "Production GenAI platform enabling financial teams to make grounded, compliance-ready decisions"
    },
    slug: "amex",
    role: "GenAI Engineer",
    company: "American Express",
    period: "Jan 2025 - Present",
    isProfessional: true
  },
  elevance: {
    title: "Elevance Health: Medical Device Utilization & Predictive Maintenance Platform",
    description: "ML-driven platform predicting hospital medical device utilization and maintenance needs, reducing downtime by 15% through gradient-boosting models and MLOps pipelines.",
    details: {
      overview: "Built a machine learning platform to forecast device utilization patterns and maintenance requirements across healthcare facilities, enabling optimized scheduling and improved asset utilization.",
      features: [
        "EDA on 12-18 months of high-volume medical device telemetry data",
        "Time-aware feature engineering (device runtime, idle cycles, failure intervals)",
        "Gradient-boosting ML model with 18-22% ROC-AUC improvement over baselines",
        "End-to-end ML pipelines with MLflow for reproducibility and versioning",
        "Docker containerization and deployment on Azure Kubernetes Service (AKS)",
        "Infrastructure provisioning using Terraform",
        "Model performance monitoring and automated retraining workflows",
        "15% reduction in unplanned device downtime"
      ],
      technologies: "Python, SQL, Pandas, NumPy, Scikit-learn, XGBoost, MLflow, Docker, Kubernetes (AKS), Terraform, Azure ML",
      impact: "Production ML system optimizing healthcare asset management with measurable downtime reduction"
    },
    slug: "elevance",
    role: "Machine Learning Engineer",
    company: "Elevance Health",
    period: "Jan 2023 - July 2024",
    isProfessional: true
  },
  macys: {
    title: "Macy's: Omnichannel Sales Performance & Demand Diagnostics Platform",
    description: "Cloud-native analytics platform diagnosing sales performance and demand variability across 50+ retail locations and e-commerce, improving sell-through by 10-12%.",
    details: {
      overview: "Built a data analytics platform to diagnose sales performance, demand variability, and operational inefficiencies across physical stores and digital channels, enabling data-driven merchandising and supply chain decisions.",
      features: [
        "Large-scale EDA on sales, returns, and promotions across 50+ locations",
        "Cloud-native data pipelines on GCP for data ingestion and unification",
        "Derived metrics: sell-through rate, stock-to-sales ratio, return rate, channel contribution",
        "Time-based and cohort analysis for promotion impact evaluation",
        "BigQuery query optimization reducing latency by 40% through partitioning & clustering",
        "Business-facing dashboards and reports using Tableau and Plotly",
        "10-12% improvement in sell-through efficiency"
      ],
      technologies: "Python, SQL, Pandas, NumPy, BigQuery, GCP Storage, PySpark, Tableau, Plotly, Data Modeling",
      impact: "Analytics platform delivering measurable improvements in retail performance and inventory efficiency"
    },
    slug: "macys",
    role: "Data Scientist",
    company: "Macy's",
    period: "Jan 2021 - Dec 2022",
    isProfessional: true
  },
  aig: {
    title: "AIG: Policy & Claims Operations Analytics Platform",
    description: "Foundational data pipelines and analytics solutions for insurance operations supporting policy administration and claims processing with real-time insights.",
    details: {
      overview: "Built data pipelines, analytical datasets, and reporting solutions enabling insurance operations teams to track performance, identify trends, and monitor risk indicators in real-time.",
      features: [
        "Data ingestion and consolidation from multiple source systems into AWS S3",
        "Data cleaning, validation, and transformation using Python (Pandas, NumPy)",
        "ETL pipelines preparing analytics-ready tables following enterprise standards",
        "Optimized SQL queries for operational metrics (claims volume, settlement time, lapse rates)",
        "Exploratory data analysis identifying trends and anomalies across regions",
        "Power BI dashboards for daily and monthly performance reporting",
        "Documentation and collaboration with business stakeholders"
      ],
      technologies: "Python, SQL, Pandas, NumPy, AWS S3, ETL Pipelines, Data Cleaning, Power BI, GitHub",
      impact: "Foundation analytics platform supporting insurance operations visibility and decision-making"
    },
    slug: "aig",
    role: "Associate Data Scientist",
    company: "American International Group (AIG)",
    period: "Jan 2020 - Dec 2020",
    isProfessional: true
  },
  vinimi: {
    title: "VINIMI — AI-Powered Workplace Safety Monitoring System",
    image: asset('img/vinimi1.jpg'),
    description: "Real-time safety compliance system using YOLOv8 helmet detection and DeepFace facial recognition for automated workplace safety monitoring in construction environments.",
    details: {
      overview: "VINIMI is a comprehensive occupational safety solution combining multiple production AI technologies to monitor worker compliance in real-time, reducing safety incidents and ensuring regulatory compliance.",
      features: [
        "Real-time helmet & PPE detection using YOLOv8 (90%+ accuracy)",
        "Facial recognition with DeepFace for worker identification",
        "Qwen Vision Language Model for intelligent Q&A on safety protocols",
        "FastAPI backend with 25+ endpoints for violation detection and worker management",
        "Video analysis pipeline with majority-voting algorithm and multi-sample face embeddings",
        "Automated SMS alerts for safety violations",
        "Comprehensive audit logs and compliance analytics",
        "Production-grade deployment with monitoring"
      ],
      technologies: "YOLOv8, DeepFace, Qwen VLM, Python, Computer Vision, PyTorch, FastAPI, AWS",
      impact: "Production safety monitoring system enabling real-time compliance enforcement"
    },
    slug: "vinimi",
    isAcademic: true,
    link: "https://github.com/vinimifall2025-ops/VINIMI"
  },
  trash: {
    title: "Campus Trash Segmentation: Automated Waste Classification System",
    image: asset('img/Trash_detection.png'),
    description: "DeepLabV3-ResNet50 semantic segmentation model achieving 58.86% mIoU improvement over baseline for pixel-level trash classification with 98.34% background IoU.",
    details: {
      overview: "Developed a comprehensive waste detection and segmentation system using semantic segmentation to identify and classify different types of waste materials with production-grade performance metrics.",
      features: [
        "DeepLabV3-ResNet50 architecture with Atrous Spatial Pyramid Pooling (ASPP)",
        "58.86% mIoU improvement over baseline (551% relative improvement)",
        "98.34% IoU for background classes and 78.24% IoU for non-recyclable waste",
        "Transfer learning from ImageNet with auxiliary loss regularization",
        "Systematic hyperparameter optimization and comprehensive data augmentation",
        "Class imbalance mitigation on 193-image campus dataset",
        "79.1% test loss reduction through advanced preprocessing"
      ],
      technologies: "TensorFlow, PyTorch, OpenCV, Semantic Segmentation, Deep Learning, Python",
      impact: "Research-grade waste classification system with state-of-the-art performance metrics"
    },
    slug: "trash",
    isAcademic: true
  },
  jetblue: {
    title: "JetBlue Sentiment Intelligence — Scalable ETL & ML Pipeline",
    image: asset('img/airlines.jpeg'),
    description: "End-to-end automated ETL pipeline with ML-powered sentiment analysis processing real-time social media data at scale, delivering actionable insights through interactive dashboards.",
    details: {
      overview: "A production-grade sentiment analysis platform designed for JetBlue Airlines to capture, process, and analyze customer feedback from social media in near real-time, enabling data-driven operational improvements.",
      features: [
        "Real-time tweet ingestion using X API with automated scheduling",
        "Automated data pipeline with GitHub Actions (CI/CD)",
        "ML-based sentiment classification using Logistic Regression (88% accuracy)",
        "Scalable AWS S3 data lake with partitioned storage",
        "AWS Glue for schema inference and automated ETL jobs",
        "Interactive Power BI dashboards with real-time metrics",
        "Amazon Athena for serverless querying and analysis"
      ],
      technologies: "Python, AWS S3, AWS Glue, GitHub Actions, Scikit-learn, Power BI, Twitter API, SQL",
      impact: "Real-time sentiment tracking, actionable customer insights, scalable ML pipeline"
    },
    link: "https://github.com/RajiniBoini/JetBlue_Airlines_SA",
    isAcademic: true
  },
  ar: {
    title: "AR in BIM Workflows",
    image: asset('img/ARglass.png'),
    description: "Immersive augmented reality solution for Architecture, Engineering & Construction workflows enabling plan-to-build validation.",
    details: {
      overview: "An innovative AR platform that bridges the gap between digital building models and physical construction sites.",
      features: [
        "Real-time building model visualization in AR",
        "Immersive walkthroughs for stakeholder review",
        "Plan-to-build deviation detection",
        "Spatial measurement and alignment tools",
        "Multi-user collaborative features",
        "Integration with BIM software"
      ],
      technologies: "ARKit, Spatial Computing, 3D Visualization, BIM Integration"
    },
    isAcademic: true
  }
};
