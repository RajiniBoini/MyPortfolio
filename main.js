const typedElement = document.querySelector(".multi-text");

if (typedElement && window.Typed) {
    new Typed(".multi-text", {
        strings: ["data products", "analytics", "cloud platforms", "AI-ready experiences"],
        typeSpeed: 70,
        backSpeed: 50,
        backDelay: 1200,
        loop: true,
    });
}

const header = document.querySelector(".header");
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");
const navLinks = document.querySelectorAll(".navbar a");
const sections = document.querySelectorAll("section");

if (menuIcon && navbar) {
    menuIcon.addEventListener("click", () => {
        menuIcon.classList.toggle("fa-xmark");
        navbar.classList.toggle("active");
    });
}

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        navbar.classList.remove("active");
        menuIcon.classList.remove("fa-xmark");
    });
});

window.addEventListener("scroll", () => {
    if (header) {
        header.classList.toggle("sticky", window.scrollY > 80);
    }

    const scrollY = window.scrollY;

    sections.forEach((section) => {
        const offsetTop = section.offsetTop - 140;
        const offsetBottom = offsetTop + section.offsetHeight;
        const id = section.getAttribute("id");

        if (scrollY >= offsetTop && scrollY < offsetBottom) {
            navLinks.forEach((link) => link.classList.remove("active"));
            const activeLink = document.querySelector(`.navbar a[href="#${id}"]`);
            if (activeLink) {
                activeLink.classList.add("active");
            }
        }
    });
});

if (window.ScrollReveal) {
    const sr = ScrollReveal({
        distance: "60px",
        duration: 1600,
        delay: 200,
        easing: "ease-out",
        reset: false,
    });

    sr.reveal(".reveal-up", { origin: "bottom" });
    sr.reveal(".reveal-left", { origin: "left" });
    sr.reveal(".reveal-right", { origin: "right" });
}
// Project Modal System
const projectModal = document.getElementById("projectModal");
const projectCards = document.querySelectorAll(".project-card");
const modalCloseButtons = document.querySelectorAll(".modal-close");

const projectData = {
    vinimi: {
        title: "VINIMI — Visual Intelligence for Occupational Safety",
        image: "img/vinimi1.jpg",
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
        link: "projects/vinimi.html"
    },
    trash: {
        title: "Trash Segmentation — Waste Detection & Segmentation",
        image: "img/Trash_detection.png",
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
        link: "projects/trash_segmentation.html"
    },
    jetblue: {
        title: "JetBlue Sentiment Intelligence — ETL Data Pipeline",
        image: "img/airlines.jpeg",
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
        image: "img/fooddelivery.png",
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
        image: "img/ARglass.png",
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

function openProjectModal(projectKey) {
    const data = projectData[projectKey];
    if (!data) return;

    document.getElementById("modalImage").src = data.image;
    document.getElementById("modalTitle").textContent = data.title;
    
    // Build description
    const descDiv = document.getElementById("modalDescription");
    descDiv.innerHTML = `<p>${data.description}</p>`;
    
    // Build details
    const detailsDiv = document.getElementById("modalDetails");
    detailsDiv.innerHTML = `
        <h4>${data.details.overview}</h4>
        <ul>
            ${data.details.features.map(f => `<li>${f}</li>`).join('')}
        </ul>
        <div style="margin-top: 1.6rem; padding-top: 1.6rem; border-top: 1px solid rgba(30, 168, 150, 0.2);">
            <strong style="color: var(--text); font-size: 1.4rem;">Tech Stack:</strong>
            <p style="margin-top: 0.8rem;">${data.details.technologies}</p>
        </div>
    `;
    
    // Handle link
    const linkButton = document.getElementById("modalLink");
    if (data.link) {
        linkButton.href = data.link;
        linkButton.style.display = "block";
        linkButton.textContent = data.link.includes("github") ? "View on GitHub" : "View Full Project";
    } else {
        linkButton.style.display = "none";
    }
    
    projectModal.classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeProjectModal() {
    projectModal.classList.remove("active");
    document.body.style.overflow = "auto";
}

// Event listeners for project cards
projectCards.forEach(card => {
    const btn = card.querySelector(".btn-learn-more");
    if (btn) {
        btn.addEventListener("click", (e) => {
            if (btn.tagName !== "A") {
                e.preventDefault();
                const projectKey = card.getAttribute("data-project");
                openProjectModal(projectKey);
            }
        });
    }
});

// Modal close buttons
modalCloseButtons.forEach(btn => {
    btn.addEventListener("click", closeProjectModal);
});

// Close modal when clicking outside
projectModal.addEventListener("click", (e) => {
    if (e.target === projectModal) {
        closeProjectModal();
    }
});

// Close modal on Escape key
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && projectModal.classList.contains("active")) {
        closeProjectModal();
    }
});