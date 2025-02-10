const typed = new Typed(".multi-text", {
    strings : ["Data Scientist", "Programmer", "Data Analyst", "Data Engineer"],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});

// scrollrevel 

ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, heading', {origin: 'top'});
ScrollReveal().reveal('home-img, img', {origin: 'right'});
ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right' });
ScrollReveal().reveal('.home-content, heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .service-conatiner, .project-box, .contact form',  { origin: 'buttom' });
ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('home-img, img', {origin: 'right'});

// responsive 

let icon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

icon.onclick = () => {
    icon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}