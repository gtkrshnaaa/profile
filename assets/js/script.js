const sections = document.querySelectorAll('section'); // Ganti dengan selector yang sesuai

window.addEventListener('scroll', () => {
    const windowHeight = window.innerHeight;
    const scrollTop = window.scrollY;

    let currentSection = '';

    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2) {
            currentSection = section.getAttribute('id');
        }
    });

    // Menangani khusus bagian "hero" di posisi paling atas
    if (scrollTop === 0) {
        currentSection = 'home';
    }

    const navLinks = document.querySelectorAll('.mobile-navbar-menu a');
    navLinks.forEach(link => {
        if (link.getAttribute('data-section') === currentSection) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});
