document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.querySelector(".sidebar");
    const overlay = document.querySelector(".sidebar-overlay");

    if (!sidebar || !overlay) {
        console.error("Sidebar or overlay element missing!");
        return;
    }

    function openSidebar() {
        sidebar.classList.add("active");
        overlay.classList.add("active");
        document.body.style.overflow = "hidden";
    }

    function closeSidebar() {
        sidebar.classList.remove("active");
        overlay.classList.remove("active");
        document.body.style.overflow = "";
    }

    function toggleSidebar() {
        sidebar.classList.contains("active") ? closeSidebar() : openSidebar();
    }

    document.addEventListener("click", function (e) {
        if (e.target.closest(".menu-togg")) {
            e.preventDefault();
            toggleSidebar();
        }
    });

    overlay.addEventListener("click", closeSidebar);

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeSidebar();
    });

    const toggleImg = document.getElementById('darkModeToggle');
    const lightIcon = "image/light-mode.svg";
    const darkIcon = "image/dark-mode.svg";

    if (toggleImg) {
        if (document.body.classList.contains('dark-mode')) {
            toggleImg.src = lightIcon;
        } else {
            toggleImg.src = darkIcon;
        }

        toggleImg.addEventListener('click', () => {
            if (document.body.classList.contains('dark-mode')) {
                document.body.classList.remove('dark-mode');
                document.body.classList.add('light-mode');
                toggleImg.src = darkIcon;
            } else {
                document.body.classList.remove('light-mode');
                document.body.classList.add('dark-mode');
                toggleImg.src = lightIcon;
            }
        });
    }


});

const track = document.querySelector('.news-carousel-track');
const items = document.querySelectorAll('.news-carousel-item');
const prevBtn = document.querySelector('.news-carousel-prev');
const nextBtn = document.querySelector('.news-carousel-next');

if (track && items.length > 0 && prevBtn && nextBtn) {
    let index = 0;
    let totalItems = items.length;
    let itemsPerView = window.innerWidth <= 600 ? 1 : window.innerWidth <= 992 ? 2 : 3;

    function updateCarousel() {
        const itemWidth = items[0].getBoundingClientRect().width;
        track.style.transform = `translateX(${-index * itemWidth}px)`;
    }

    function moveNext() {
        index = (index + itemsPerView) % totalItems;
        updateCarousel();
    }

    function movePrev() {
        index = (index - itemsPerView + totalItems) % totalItems;
        updateCarousel();
    }

    nextBtn.addEventListener('click', moveNext);
    prevBtn.addEventListener('click', movePrev);

    window.addEventListener('resize', () => {
        itemsPerView = window.innerWidth <= 600 ? 1 : window.innerWidth <= 992 ? 2 : 3;
        updateCarousel();
    });

    updateCarousel();
}



        // Custom cursor
        const cursor = document.querySelector('.cursor');
        let mouseX = 0, mouseY = 0;
        let cursorX = 0, cursorY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        // Smooth cursor animation
        function animateCursor() {
            cursorX += (mouseX - cursorX) * 0.1;
            cursorY += (mouseY - cursorY) * 0.1;
            cursor.style.left = cursorX + 'px';
            cursor.style.top = cursorY + 'px';
            requestAnimationFrame(animateCursor);
        }
        animateCursor();

        // Cursor hover effects
        document.querySelectorAll('a, button').forEach(el => {
            el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
            el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
        });

        // Generate particles
        function createParticles() {
            const particlesContainer = document.querySelector('.particles');
            for (let i = 0; i < 50; i++) {
                const particle = document.createElement('div');
                particle.classList.add('particle');
                particle.style.left = Math.random() * 100 + '%';
                particle.style.animationDelay = Math.random() * 15 + 's';
                particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
                particlesContainer.appendChild(particle);
            }
        }
        createParticles();

        // Countdown timer
        function updateCountdown() {
            // Set launch date (30 days from now)
            const launchDate = new Date().getTime() + (30 * 24 * 60 * 60 * 1000);
            const now = new Date().getTime();
            const distance = launchDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            document.getElementById('days').textContent = days.toString().padStart(2, '0');
            document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
            document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
            document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
        }

        setInterval(updateCountdown, 1000);
        updateCountdown();

        // Logo glitch effect
        function triggerGlitch() {
            const logo = document.getElementById('logo');
            logo.classList.add('glitch');
            setTimeout(() => logo.classList.remove('glitch'), 300);
        }

        setInterval(triggerGlitch, 5000);

        // Notify button functionality
        function notifyMe() {
            const btn = document.querySelector('.notify-btn');
            const originalText = btn.textContent;
            btn.textContent = 'COMING SOON!';
            btn.style.background = '#fff';
            btn.style.color = '#000';
            
            setTimeout(() => {
                btn.textContent = originalText;
                btn.style.background = 'transparent';
                btn.style.color = '#fff';
            }, 2000);
        }

        // Parallax scrolling effect
        document.addEventListener('mousemove', (e) => {
            const mouseX = e.clientX / window.innerWidth;
            const mouseY = e.clientY / window.innerHeight;
            
            document.querySelector('.grid-bg').style.transform = 
                `translate(${mouseX * 20}px, ${mouseY * 20}px)`;
        });

        // Performance optimization: Reduce animations on mobile
        if (window.innerWidth <= 768) {
            document.querySelector('.grid-bg').style.animation = 'none';
            document.querySelectorAll('.particle').forEach(p => {
                if (Math.random() > 0.3) p.remove();
            });
        }
