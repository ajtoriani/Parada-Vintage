window.onload = () => {
    if (window.VLibras) {
        new window.VLibras.Widget('https://vlibras.gov.br/app');
    }
};

// Lightbox Logic
function openLightbox(imgSrc, title) {
    const lightbox = document.getElementById('lightbox');
    const lbImg = document.getElementById('lightbox-img');
    const lbTitle = document.getElementById('lightbox-title');
    const waBtn = document.getElementById('wa-share-btn');

    lbImg.src = imgSrc;
    lbTitle.innerText = title;
    
    // Configura o texto do Zap
    const text = encodeURIComponent(`Olá Antônio! Vi no site e gostei da peça: ${title}. Poderia me passar mais informações?`);
    waBtn.onclick = () => window.open(`https://wa.me/5512981031988?text=${text}`, '_blank');

    lightbox.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Menu Mobile
function toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    const body = document.body;
    menu.classList.toggle('active');
    
    if (menu.classList.contains('active')) {
        body.style.overflow = 'hidden';
    } else {
        body.style.overflow = 'auto';
    }

    const bars = document.querySelectorAll('.hamburger span');
    if (menu.classList.contains('active')) {
        bars[0].style.transform = 'rotate(45deg) translate(5px, 6px)';
        bars[1].style.opacity = '0';
        bars[2].style.transform = 'rotate(-45deg) translate(5px, -6px)';
    } else {
        bars[0].style.transform = 'none';
        bars[1].style.opacity = '1';
        bars[2].style.transform = 'none';
    }
}

// Slider Control
function scrollS(id, dir) {
    const slider = document.getElementById(id);
    const scrollAmount = slider.offsetWidth * 0.8;
    slider.scrollBy({
        left: dir * scrollAmount,
        behavior: 'smooth'
    });
}

// GSAP
gsap.registerPlugin(ScrollTrigger);

gsap.from(".hero-content > *", {
    duration: 1,
    y: 50,
    opacity: 0,
    stagger: 0.2,
    ease: "power3.out"
});

const revealElements = document.querySelectorAll('.sec');
revealElements.forEach((el) => {
    gsap.from(el, {
        scrollTrigger: {
            trigger: el,
            start: "top 85%",
        },
        duration: 1,
        y: 40,
        opacity: 0,
        ease: "power2.out"
    });
});

gsap.to(".hero-img", {
    scale: 1.1,
    duration: 20,
    repeat: -1,
    yoyo: true,
    ease: "linear"
});