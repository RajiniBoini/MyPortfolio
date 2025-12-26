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
