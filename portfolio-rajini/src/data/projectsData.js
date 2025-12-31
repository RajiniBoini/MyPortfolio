import { asset } from '../utils/asset';

export const projectData = {
  vinimi: {
    title: "VINIMI — Visual Intelligence for Occupational Safety",
    image: asset('img/vinimi1.jpg'),
    description: "AI-driven real-time helmet & worker compliance system that leverages cutting-edge computer vision and deep learning to enhance workplace safety.",
    details: {
      overview: "VINIMI is a comprehensive occupational safety solution combining multiple AI technologies to monitor worker compliance in real-time.",
      features: [
        "Real-time helmet detection using YOLOv8",
        "Facial recognition with DeepFace for worker identification",
        "Qwen Vision Language Model for intelligent Q&A",
        "Automated safety alerts and notifications",
        "Comprehensive audit logs and analytics",
        "Integration with existing safety management systems"
      ],
      technologies: "YOLOv8, DeepFace, Qwen VLM, Python, Computer Vision"
    },
    link: null
  },
  trash: {
    title: "Trash Segmentation — Waste Detection & Segmentation",
    image: asset('img/Trash_detection.png'),
    description: "Advanced deep-learning pipeline for multi-class waste segmentation, enabling automated waste classification and environmental monitoring.",
    details: {
      overview: "A comprehensive waste detection system using semantic segmentation to identify and classify different types of waste materials.",
      features: [
        "Multi-class waste segmentation model",
        "Dataset preparation and augmentation",
        "Training pipeline with performance monitoring",
        "Detailed evaluation metrics and reports",
        "Real-world deployment ready",
        "Research-grade documentation"
      ],
      technologies: "TensorFlow, PyTorch, OpenCV, Semantic Segmentation, Deep Learning"
    },
    link: null
  },
  jetblue: {
    title: "JetBlue Sentiment Intelligence — ETL Data Pipeline",
    image: asset('img/airlines.jpeg'),
    description: "End-to-end automated ETL pipeline that captures, processes, and analyzes customer sentiment from social media in near real-time.",
    details: {
      overview: "A scalable sentiment analysis platform designed for JetBlue Airlines to understand customer feedback and drive operational improvements.",
      features: [
        "Real-time tweet ingestion using X API",
        "Automated data pipeline with GitHub Actions",
        "ML-based sentiment classification (Logistic Regression)",
        "Scalable AWS S3 data storage",
        "AWS Glue for schema inference and ETL",
        "Interactive Power BI dashboards",
        "Amazon Athena for serverless querying"
      ],
      technologies: "Python, AWS S3, AWS Glue, GitHub Actions, Scikit-learn, Power BI, Twitter API"
    },
    link: "https://github.com/RajiniBoini/JetBlue_Airlines_SA"
  },
  food: {
    title: "Food Delivery UI Experience",
    image: asset('img/fooddelivery.png'),
    description: "User-centric interface design for a food delivery platform focusing on intuitive navigation and seamless ordering experience.",
    details: {
      overview: "A complete UI/UX redesign for a food delivery application with emphasis on user accessibility and conversion optimization.",
      features: [
        "Intuitive restaurant discovery and browsing",
        "Real-time order tracking with live updates",
        "Integrated payment system with multiple options",
        "User-friendly rating and review system",
        "Personalized recommendations engine",
        "Responsive design for all devices"
      ],
      technologies: "Figma, UI/UX Design, User Research, Prototyping"
    },
    link: null
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
