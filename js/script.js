//Funcionalidad de la barra de navegación

document.addEventListener('DOMContentLoaded', function() {
    // Cerrar menú móvil al hacer clic en un enlace
    document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
        link.addEventListener('click', () => {
            const navbarCollapse = document.querySelector('#navbarNav');
            
            // Solo cerrar en vista móvil y si el menú está abierto
            if (window.innerWidth < 992 && navbarCollapse.classList.contains('show')) {
                // Crear nueva instancia de Bootstrap Collapse y cerrar
                const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                bsCollapse.hide();
            }
        });
    });
    
    // Cerrar menú al hacer clic fuera de él
    document.addEventListener('click', function(event) {
        const navbar = document.querySelector('.navbar');
        const navbarCollapse = document.querySelector('#navbarNav');
        const isClickInsideNav = navbar.contains(event.target);
        const isNavOpen = navbarCollapse.classList.contains('show');
        
        if (!isClickInsideNav && isNavOpen && window.innerWidth < 992) {
            const bsCollapse = new bootstrap.Collapse(navbarCollapse);
            bsCollapse.hide();
        }
    });
});


//Copiar al portapapeles el email
async function copyEmail() {
    const emailInput = document.querySelector('.email-input');
    const email = emailInput.value;
    
    try {
        await navigator.clipboard.writeText(email);
        showCopyFeedback();
    } catch (err) {
        console.error('Error al copiar:', err);
        showErrorFeedback();
    }
}

// Mostrar feedback visual cuando se copia exitosamente
function showCopyFeedback() {
    const copyBtn = document.querySelector('.copy-btn');
    const originalTitle = copyBtn.title;
    
    copyBtn.title = '¡Copiado!';
    copyBtn.style.background = 'var(--color-primario)';
    copyBtn.style.transform = 'translateY(-50%) scale(0.9)'; // Mantiene centrado + escala
    
    setTimeout(() => {
        copyBtn.title = originalTitle;
        copyBtn.style.background = 'transparent';
        copyBtn.style.transform = 'translateY(-50%) scale(1)'; // Vuelve al estado original centrado
    }, 1000);
}