document.addEventListener('DOMContentLoaded', function() {
    // Preloader functionality - Acelerado
    const preloader = document.querySelector('.preloader');
    const progress = document.querySelector('.progress');
    
    if (preloader) {
        let width = 0;
        const interval = setInterval(() => {
            width += 10;
            progress.style.width = width + '%';
            if (width >= 100) {
                clearInterval(interval);
                preloader.classList.add('fade-out');
                document.body.classList.add('page-visible');
            }
        }, 20);
    }

    // SPA Navigation - Carregar partials dinamicamente
    const navLinks = document.querySelectorAll('.nav-link');
    const mainContent = document.getElementById('main-content');
    let currentPage = '';

    async function loadPage(page) {
        if (!mainContent) return;
        if (currentPage === page && mainContent.innerHTML.trim() !== '') return;
        currentPage = page;
        mainContent.classList.add('spa-exit');
        setTimeout(async () => {
            mainContent.innerHTML = '<div class="loading-container"><div class="loading-spinner"></div><p class="loading-text">Carregando...</p></div>';
            try {
                let partialPath = `partials/${page}.html`;
                const response = await fetch(partialPath);
                if (!response.ok) throw new Error('Conteúdo não encontrado.');
                const html = await response.text();
                mainContent.innerHTML = html;
                mainContent.classList.remove('spa-exit');
                mainContent.classList.add('spa-enter');
                setTimeout(() => mainContent.classList.remove('spa-enter'), 600);
                initSectionScripts(page);
            } catch (e) {
                mainContent.innerHTML = `<div class="error-message"><h2>Não foi possível carregar o conteúdo</h2><p>${e.message}</p></div>`;
                mainContent.classList.remove('spa-exit');
            }
            updateActiveLinks(page);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 250);
    }

    function updateActiveLinks(page) {
        navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('data-page') === page);
        });
    }

    function handleNavClick(e) {
        e.preventDefault();
        const page = this.getAttribute('data-page');
        if (page) {
            window.history.pushState({ page }, '', `#${page}`);
            loadPage(page);
        }
    }

    navLinks.forEach(link => {
        link.addEventListener('click', handleNavClick);
    });

    window.addEventListener('popstate', function(e) {
        let page = 'home';
        if (e.state && e.state.page) {
            page = e.state.page;
        } else {
            const hash = window.location.hash;
            if (hash && hash !== '#') {
                page = hash.replace('#', '');
            }
        }
        loadPage(page);
    });

    // Inicialização da página
    function init() {
        let page = 'home';
        const hash = window.location.hash;
        if (hash && hash !== '#') {
            page = hash.replace('#', '');
        }
        loadPage(page);
    }

    // Inicializar scripts específicos de cada partial
    function initSectionScripts(page) {
        // Exemplo: se precisar inicializar algo específico para cada página
        if (page === 'calculator' && typeof initCalculator === 'function') {
            initCalculator();
        } else if (page === 'tables' && typeof initTables === 'function') {
            initTables();
        } else if (page === 'home' && typeof initHomePage === 'function') {
            initHomePage();
        }
        // Adicione outros inits se necessário
    }

    // Theme switcher (mantém igual)
    const themeSwitch = document.getElementById('theme-switch');
    const currentTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-theme');
        if (themeSwitch) themeSwitch.checked = true;
    }
    if (themeSwitch) {
        themeSwitch.addEventListener('change', function() {
            document.body.classList.add('theme-transition');
            if (this.checked) {
                document.body.classList.add('dark-theme');
                localStorage.setItem('theme', 'dark');
            } else {
                document.body.classList.remove('dark-theme');
                localStorage.setItem('theme', 'light');
            }
            setTimeout(() => {
                document.body.classList.remove('theme-transition');
            }, 1000);
        });
    }

    // Scroll to top button (mantém igual)
    const scrollTopButton = document.querySelector('.scroll-to-top');
    if (scrollTopButton) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                scrollTopButton.classList.add('active');
            } else {
                scrollTopButton.classList.remove('active');
            }
        });
        scrollTopButton.addEventListener('click', function() {
            const ripple = document.createElement('span');
            ripple.classList.add('btn-ripple');
            this.appendChild(ripple);
            setTimeout(() => { ripple.remove(); }, 600);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Mobile menu toggle (mantém igual)
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinksContainer = document.querySelector('.nav-links');
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navLinksContainer.classList.toggle('show');
            this.classList.toggle('active');
        });
    }

    // Ripple effect nos botões (mantém igual)
    function addRippleEffect() {
        const buttons = document.querySelectorAll('button, .btn, .card-link');
        buttons.forEach(button => {
            if (!button.classList.contains('has-ripple')) {
                button.classList.add('has-ripple');
                button.addEventListener('click', function(e) {
                    const rect = this.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    const ripple = document.createElement('span');
                    ripple.classList.add('btn-ripple');
                    ripple.style.left = `${x}px`;
                    ripple.style.top = `${y}px`;
                    this.appendChild(ripple);
                    setTimeout(() => { ripple.remove(); }, 600);
                });
            }
        });
    }

    // Chamar ripple effect após cada carregamento de página
    mainContent && mainContent.addEventListener('DOMSubtreeModified', addRippleEffect);

    // Inicializar
    init();
});
