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
        mainContent.classList.remove('fade-in-animation');
        mainContent.classList.add('fade-out-animation');
        setTimeout(async () => {
            mainContent.innerHTML = '<div class="loading-container"><div class="loading-spinner"></div><p class="loading-text">Carregando...</p></div>';
            mainContent.classList.remove('fade-out-animation');
            try {
                let partialPath = `partials/${page}.html`;
                const response = await fetch(partialPath);
                if (!response.ok) throw new Error('Conteúdo não encontrado.');
                const html = await response.text();
                mainContent.innerHTML = html;
                mainContent.classList.add('fade-in-animation');
                setTimeout(() => mainContent.classList.remove('fade-in-animation'), 600);
                initSectionScripts(page);
            } catch (e) {
                mainContent.innerHTML = `<div class="error-message"><h2>Não foi possível carregar o conteúdo</h2><p>${e.message}</p></div>`;
            }
            updateActiveLinks(page);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 400); // tempo igual ao fade-out
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

    // SPA Page Fade Animation
    function loadPageWithFade(url, containerSelector = '#main-content') {
        const container = document.querySelector(containerSelector);
        if (!container) return;
        container.classList.remove('fade-in-animation');
        container.classList.add('fade-out-animation');
        setTimeout(() => {
            fetch(url)
                .then(res => res.text())
                .then(html => {
                    container.innerHTML = html;
                    container.classList.remove('fade-out-animation');
                    container.classList.add('fade-in-animation');
                });
        }, 400); // tempo igual ao fade-out
    }

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
        if (page === 'calculator') {
            // Corrigir script da calculadora
            const calcType = document.getElementById('calc-type');
            const timeInputs = document.getElementById('time-inputs');
            const distanceInput = document.getElementById('distance-input');
            const paceInputs = document.getElementById('pace-inputs');
            const calculateBtn = document.getElementById('calculate-btn');
            const resultCard = document.getElementById('result-card');
            if (calcType && timeInputs && distanceInput && paceInputs) {
                calcType.onchange = function() {
                    const selectedValue = calcType.value;
                    if (selectedValue === 'pace') {
                        timeInputs.style.display = 'flex';
                        distanceInput.style.display = 'block';
                        paceInputs.style.display = 'none';
                    } else if (selectedValue === 'time') {
                        timeInputs.style.display = 'none';
                        distanceInput.style.display = 'block';
                        paceInputs.style.display = 'block';
                    } else if (selectedValue === 'distance') {
                        timeInputs.style.display = 'flex';
                        distanceInput.style.display = 'none';
                        paceInputs.style.display = 'block';
                    }
                };
                calcType.onchange();
            }
            if (calculateBtn) {
                calculateBtn.onclick = function() {
                    const selectedValue = calcType.value;
                    let result, resultLabel;
                    if (selectedValue === 'pace') {
                        const hours = parseInt(document.getElementById('hours').value) || 0;
                        const minutes = parseInt(document.getElementById('minutes').value) || 0;
                        const seconds = parseInt(document.getElementById('seconds').value) || 0;
                        const distance = parseFloat(document.getElementById('distance').value) || 0;
                        if (distance <= 0) {
                            alert('Por favor, informe uma distância válida.');
                            return;
                        }
                        if (hours === 0 && minutes === 0 && seconds === 0) {
                            alert('Por favor, informe um tempo válido.');
                            return;
                        }
                        const totalSeconds = (hours * 3600) + (minutes * 60) + seconds;
                        const paceSeconds = totalSeconds / distance;
                        const paceMinutes = Math.floor(paceSeconds / 60);
                        const paceRemainingSeconds = Math.round(paceSeconds % 60);
                        result = `${paceMinutes}:${paceRemainingSeconds.toString().padStart(2, '0')}`;
                        resultLabel = 'Pace (min/km)';
                        calculateEquivalents(paceSeconds);
                    } else if (selectedValue === 'time') {
                        const paceMinutes = parseInt(document.getElementById('pace-minutes').value) || 0;
                        const paceSeconds = parseInt(document.getElementById('pace-seconds').value) || 0;
                        const distance = parseFloat(document.getElementById('distance').value) || 0;
                        if (distance <= 0) {
                            alert('Por favor, informe uma distância válida.');
                            return;
                        }
                        if (paceMinutes === 0 && paceSeconds === 0) {
                            alert('Por favor, informe um pace válido.');
                            return;
                        }
                        const paceInSeconds = (paceMinutes * 60) + paceSeconds;
                        const totalSeconds = paceInSeconds * distance;
                        const hours = Math.floor(totalSeconds / 3600);
                        const remainingMinutes = Math.floor((totalSeconds % 3600) / 60);
                        const remainingSeconds = Math.round(totalSeconds % 60);
                        result = `${hours.toString().padStart(2, '0')}:${remainingMinutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
                        resultLabel = 'Tempo Total';
                        calculateEquivalents(paceInSeconds);
                    } else if (selectedValue === 'distance') {
                        const hours = parseInt(document.getElementById('hours').value) || 0;
                        const minutes = parseInt(document.getElementById('minutes').value) || 0;
                        const seconds = parseInt(document.getElementById('seconds').value) || 0;
                        const paceMinutes = parseInt(document.getElementById('pace-minutes').value) || 0;
                        const paceSeconds = parseInt(document.getElementById('pace-seconds').value) || 0;
                        if (paceMinutes === 0 && paceSeconds === 0) {
                            alert('Por favor, informe um pace válido.');
                            return;
                        }
                        if (hours === 0 && minutes === 0 && seconds === 0) {
                            alert('Por favor, informe um tempo válido.');
                            return;
                        }
                        const totalSeconds = (hours * 3600) + (minutes * 60) + seconds;
                        const paceInSeconds = (paceMinutes * 60) + paceSeconds;
                        const distance = totalSeconds / paceInSeconds;
                        result = distance.toFixed(2);
                        resultLabel = 'Distância (km)';
                        calculateEquivalents(paceInSeconds);
                    }
                    document.getElementById('result-value').textContent = result;
                    document.getElementById('result-label').textContent = resultLabel;
                    resultCard.style.display = 'block';
                    resultCard.classList.add('fade-in');
                    setTimeout(() => {
                        resultCard.classList.remove('fade-in');
                    }, 1000);
                    resultCard.scrollIntoView({ behavior: 'smooth' });
                };
            }
            // Função para equivalentes
            function calculateEquivalents(paceInSeconds) {
                const fiveK = formatTime(5 * paceInSeconds);
                const tenK = formatTime(10 * paceInSeconds);
                const halfMarathon = formatTime(21.0975 * paceInSeconds);
                const marathon = formatTime(42.195 * paceInSeconds);
                document.getElementById('equiv-5k').textContent = fiveK;
                document.getElementById('equiv-10k').textContent = tenK;
                document.getElementById('equiv-half').textContent = halfMarathon;
                document.getElementById('equiv-full').textContent = marathon;
            }
            function formatTime(totalSeconds) {
                const hours = Math.floor(totalSeconds / 3600);
                const minutes = Math.floor((totalSeconds % 3600) / 60);
                const seconds = Math.round(totalSeconds % 60);
                if (hours > 0) {
                    return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
                } else {
                    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
                }
            }
        } else if (page === 'tables' && typeof initTables === 'function') {
            initTables();
        } else if (page === 'home') {
            // Corrigir cálculo rápido do pace na home
            const quickDistance = document.getElementById('quick-distance');
            const quickMinutes = document.getElementById('quick-minutes');
            const quickSeconds = document.getElementById('quick-seconds');
            const quickCalculateBtn = document.getElementById('quick-calculate-btn');
            const quickResult = document.getElementById('quick-result');
            const quickPaceResult = document.getElementById('quick-pace-result');
            if (quickCalculateBtn) {
                quickCalculateBtn.onclick = function() {
                    const distance = parseFloat(quickDistance.value) || 0;
                    const minutes = parseInt(quickMinutes.value) || 0;
                    const seconds = parseInt(quickSeconds.value) || 0;
                    if (distance <= 0) {
                        alert('Por favor, informe uma distância válida.');
                        return;
                    }
                    if (minutes === 0 && seconds === 0) {
                        alert('Por favor, informe um tempo válido.');
                        return;
                    }
                    const totalSeconds = (minutes * 60) + seconds;
                    const paceSeconds = totalSeconds / distance;
                    const paceMinutes = Math.floor(paceSeconds / 60);
                    const paceRemainingSeconds = Math.round(paceSeconds % 60);
                    const formattedPace = `${paceMinutes}:${paceRemainingSeconds.toString().padStart(2, '0')}`;
                    quickPaceResult.textContent = formattedPace;
                    quickResult.style.display = 'block';
                    quickResult.classList.add('fade-in');
                    setTimeout(() => {
                        quickResult.classList.remove('fade-in');
                    }, 1000);
                };
            }
        }
        // Adicione outros inits se necessário

        // Adicionar margin-bottom nas partials para não colar no footer
        const main = document.querySelector('#main-content > main, #main-content > .container, #main-content > section');
        if (main) {
            main.style.marginBottom = '40px';
        }
        const allSections = document.querySelectorAll('#main-content > section, #main-content > .container, #main-content > main');
        allSections.forEach(sec => sec.style.marginBottom = '40px');
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
