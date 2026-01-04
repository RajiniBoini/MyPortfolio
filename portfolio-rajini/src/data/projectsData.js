import { asset } from '../utils/asset';

export const projectData = {
  vinimi: {
    title: "VINIMI — Real-time PPE Detection & Worker Safety Monitoring",
    image: asset('img/vinimi1.jpg'),
    description: "Production-ready AI system for real-time helmet and PPE compliance detection using computer vision and deep learning. Deployed for safety monitoring with measurable safety impact.",
    details: {
      overview: "VINIMI is a comprehensive occupational safety solution combining multiple production AI technologies to monitor worker compliance in real-time, reducing safety incidents and ensuring regulatory compliance.",
      features: [
        "Real-time helmet & PPE detection using YOLOv8 (90%+ accuracy)",
        "Facial recognition with DeepFace for worker identification",
        "Qwen Vision Language Model for intelligent Q&A on safety protocols",
        "Automated safety alerts and incident notifications",
        "Comprehensive audit logs and compliance analytics",
        "Integration with existing safety management systems",
        "Production-grade deployment with API endpoints"
      ],
      technologies: "YOLOv8, DeepFace, Qwen VLM, Python, Computer Vision, PyTorch, FastAPI, AWS",
      impact: "Reduced safety incidents, improved compliance reporting, real-time monitoring capabilities"
    },
    slug: "vinimi",
    link: "https://github.com/vinimifall2025-ops/VINIMI"
  },
  trash: {
    title: "Trash Segmentation — Production ML Pipeline for Waste Classification",
    image: asset('img/Trash_detection.png'),
    description: "Production-ready deep learning pipeline for multi-class waste segmentation with real-time inference, enabling automated waste classification and environmental monitoring at scale.",
    details: {
      overview: "A comprehensive waste detection and segmentation system using semantic segmentation to identify and classify different types of waste materials with production-grade performance metrics.",
      features: [
        "Multi-class waste segmentation model (mIoU >75%)",
        "Dataset preparation with augmentation and preprocessing",
        "Training pipeline with performance monitoring and validation",
        "Inference optimization for real-time predictions",
        "Detailed evaluation metrics (precision, recall, F1-score)",
        "Research-grade documentation and reproducible code",
        "Ready for deployment with containerization"
      ],
      technologies: "TensorFlow, PyTorch, OpenCV, Semantic Segmentation, Deep Learning, Python",
      impact: "Enables automated waste classification, supports environmental monitoring, production-ready inference"
    },
    link: null
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
    link: "https://github.com/RajiniBoini/JetBlue_Airlines_SA"
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
    link: null
  }
};
