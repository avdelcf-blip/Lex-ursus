document.addEventListener('DOMContentLoaded', () => {
    
    // Toggle Menú Móvil
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    mobileMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Cambiar estilo de navbar al hacer scroll
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.98)';
            navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.5)';
        } else {
            navbar.style.backgroundColor = 'rgba(13, 13, 13, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });

    // Cerrar menú móvil al hacer click en un enlace
    const links = document.querySelectorAll('.nav-links li a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });
    });

    // Manejo básico del formulario de contacto
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Evita recargar la página
        
        // Aquí podrías agregar validaciones o conectar con un servicio de email (ej. EmailJS)
        
        alert('Gracias por comunicarte con Lex Ursus. Tu mensaje ha sido enviado exitosamente y nos pondremos en contacto a la brevedad.');
        contactForm.reset();
    });
});