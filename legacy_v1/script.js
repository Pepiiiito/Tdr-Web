document.addEventListener('DOMContentLoaded', () => {
    // Typing Effect for Hero
    const heroTitle = document.querySelector('.glitch-text');
    if (heroTitle) {
        const text = heroTitle.innerHTML;
        heroTitle.innerHTML = '';
        let i = 0;

        // Simple typing effect logic (handling <br> tags)
        // For a glitch effect, we can just let CSS handle the look, 
        // but here we reveal it character by character or line by line.
        // Let's just restore it instantly with a class for CSS animation trigger
        heroTitle.innerHTML = text;
        heroTitle.style.opacity = '0';
        setTimeout(() => {
            heroTitle.style.transition = 'opacity 1s ease';
            heroTitle.style.opacity = '1';
        }, 100);
    }

    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: Add a small delay for staggered items
                if (entry.target.classList.contains('bento-item')) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Animate Bento Items
    const bentoItems = document.querySelectorAll('.bento-item');
    bentoItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.1}s`;
        observer.observe(item);
    });

    const otherAnimatedElements = document.querySelectorAll('.fade-in, .hero-meta');
    otherAnimatedElements.forEach(el => observer.observe(el));

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Adjust for fixed header
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });

                // Update active nav state
                document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });
});
