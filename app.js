document.addEventListener('DOMContentLoaded', function() {
    // Preloader functionality
    const preloader = document.querySelector('.preloader');
    const progress = document.querySelector('.progress');
    
    if (preloader) {
        let width = 0;
        const interval = setInterval(() => {
            width += 5;
            progress.style.width = width + '%';
            
            if (width >= 100) {
                clearInterval(interval);
                setTimeout(() => {
                    preloader.classList.add('fade-out');
                    document.body.classList.add('page-visible');
                }, 300);
            }
        }, 50);
    }

    // Single Page Application (SPA) Navigation
    const mainContent = document.getElementById('main-content');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Templates para cada página
    const templates = {
        home: `
            <header class="hero">
                <div class="container hero-content">
                    <p class="fade-in hero-tagline">Calcule e entenda o seu ritmo de corrida</p>
                    <a href="#/calculator" data-page="calculator" class="btn btn-primary btn-pulse nav-link">Calculadora completa</a>
                </div>
            </header>

            <main class="container">
                <section class="quick-calc animate-on-scroll">
                    <div class="card">
                        <h2>Cálculo Rápido</h2>
                        <p>Faça um cálculo rápido de pace com nossa mini calculadora:</p>
                        <form id="quick-pace-calculator" class="animated-form">
                            <div class="form-group">
                                <label for="quick-distance">Distância (km)</label>
                                <input type="number" id="quick-distance" min="0" step="0.01" class="animated-input" placeholder="Ex: 5">
                            </div>
                            
                            <div class="form-row">
                                <div class="form-group">
                                    <label for="quick-minutes">Minutos</label>
                                    <input type="number" id="quick-minutes" min="0" class="animated-input" placeholder="Min">
                                </div>
                                <div class="form-group">
                                    <label for="quick-seconds">Segundos</label>
                                    <input type="number" id="quick-seconds" min="0" max="59" class="animated-input" placeholder="Seg">
                                </div>
                            </div>
                            
                            <button type="button" id="quick-calculate-btn" class="btn-pulse">Calcular Pace</button>
                            
                            <div id="quick-result" class="result-box" style="display: none;">
                                <span>Seu pace é:</span>
                                <div id="quick-pace-result">--:--</div>
                                <div class="min-km">min/km</div>
                            </div>
                        </form>
                    </div>
                </section>
                
                <section class="features animate-on-scroll">
                    <h2 class="section-title">O que o LazzPace oferece</h2>
                    
                    <div class="cards-container">
                        <div class="feature-card">
                            <div class="card-icon"><i class="fas fa-calculator"></i></div>
                            <h3>Calculadora Precisa</h3>
                            <p>Calcule seu pace, tempo ou distância com nossa ferramenta intuitiva.</p>
                            <a href="#/calculator" data-page="calculator" class="card-link nav-link">Usar calculadora <i class="fas fa-arrow-right"></i></a>
                        </div>
                        
                        <div class="feature-card">
                            <div class="card-icon"><i class="fas fa-table"></i></div>
                            <h3>Tabelas de Referência</h3>
                            <p>Consulte tempos estimados para diversas distâncias baseados no seu pace.</p>
                            <a href="#/tables" data-page="tables" class="card-link nav-link">Ver tabelas <i class="fas fa-arrow-right"></i></a>
                        </div>
                        
                        <div class="feature-card">
                            <div class="card-icon"><i class="fas fa-running"></i></div>
                            <h3>Dicas Profissionais</h3>
                            <p>Aprenda a melhorar seu desempenho com dicas de especialistas.</p>
                            <a href="#/tips" data-page="tips" class="card-link nav-link">Ver dicas <i class="fas fa-arrow-right"></i></a>
                        </div>
                    </div>
                </section>
            </main>
        `
    };
    
    // Carrega o conteúdo das páginas dinamicamente
    async function loadContent(page) {
        // Adiciona uma classe de transição de saída para animar
        mainContent.classList.add('page-exit');
        
        // Aguarda a animação de saída
        await new Promise(resolve => setTimeout(resolve, 300));
        
        // Se for a página inicial, usa o template já definido
        if (page === 'home' && templates.home) {
            mainContent.innerHTML = templates.home;
            mainContent.classList.remove('page-exit');
            mainContent.classList.add('page-enter');
            
            // Inicializa elementos da página inicial
            initHomePage();
        } else {
            // Para outras páginas, carrega o HTML do servidor
            try {
                // Mostra um indicador de carregamento
                mainContent.innerHTML = `
                    <div class="loading-container">
                        <div class="loading-spinner"></div>
                        <p>Carregando...</p>
                    </div>
                `;
                
                // Busca o conteúdo da página
                const response = await fetch(`partials/${page}.html`);
                if (!response.ok) {
                    throw new Error(`Falha ao carregar o conteúdo da página ${page}.`);
                }
                
                // Obtém o HTML e insere no container
                const content = await response.text();
                mainContent.innerHTML = content;
                
                // Reinicia a animação
                mainContent.classList.remove('page-exit');
                mainContent.classList.add('page-enter');
                
                // Inicializa os scripts específicos da página
                initPageScripts(page);
            } catch (error) {
                console.error('Erro ao carregar conteúdo:', error);
                mainContent.innerHTML = `
                    <div class="error-message">
                        <i class="fas fa-exclamation-triangle"></i>
                        <h2>Não foi possível carregar o conteúdo</h2>
                        <p>${error.message}</p>
                        <button class="retry-btn" data-page="${page}">Tentar novamente</button>
                    </div>
                `;
                
                // Adiciona evento ao botão de retry
                const retryBtn = mainContent.querySelector('.retry-btn');
                if (retryBtn) {
                    retryBtn.addEventListener('click', function() {
                        loadContent(this.getAttribute('data-page'));
                    });
                }
            }
        }
        
        // Atualiza os links ativos na navegação
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-page') === page) {
                link.classList.add('active');
            }
        });
        
        // Rola suavemente para o topo
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        // Reinicializa efeitos de animação
        setTimeout(() => {
            initAnimations();
        }, 100);
    }
    
    // Inicializa os scripts específicos de cada página
    function initPageScripts(page) {
        if (page === 'calculator') {
            initCalculator();
        } else if (page === 'tables') {
            initTables();
        }
        
        // Adiciona efeito de ripple nos botões da página
        addRippleEffect();
    }
    
    // Inicializa a página inicial
    function initHomePage() {
        // Quick calculator functionality on homepage
        const quickDistance = document.getElementById('quick-distance');
        const quickMinutes = document.getElementById('quick-minutes');
        const quickSeconds = document.getElementById('quick-seconds');
        const quickCalculateBtn = document.getElementById('quick-calculate-btn');
        const quickResult = document.getElementById('quick-result');
        const quickPaceResult = document.getElementById('quick-pace-result');
        
        if (quickCalculateBtn) {
            quickCalculateBtn.addEventListener('click', function() {
                const distance = parseFloat(quickDistance.value) || 0;
                const minutes = parseInt(quickMinutes.value) || 0;
                const seconds = parseInt(quickSeconds.value) || 0;
                
                if (distance <= 0) {
                    showAlert('Por favor, informe uma distância válida.');
                    return;
                }
                
                if (minutes === 0 && seconds === 0) {
                    showAlert('Por favor, informe um tempo válido.');
                    return;
                }
                
                const totalSeconds = (minutes * 60) + seconds;
                const paceSeconds = totalSeconds / distance;
                const paceMinutes = Math.floor(paceSeconds / 60);
                const paceRemainingSeconds = Math.round(paceSeconds % 60);
                
                const formattedPace = `${paceMinutes}:${paceRemainingSeconds.toString().padStart(2, '0')}`;
                
                quickPaceResult.textContent = formattedPace;
                
                // Anima a exibição do resultado
                if (quickResult.style.display === 'none' || quickResult.style.display === '') {
                    quickResult.style.display = 'block';
                    quickResult.classList.add('result-reveal');
                    
                    setTimeout(() => {
                        quickResult.classList.remove('result-reveal');
                    }, 1000);
                } else {
                    quickResult.classList.add('result-update');
                    
                    setTimeout(() => {
                        quickResult.classList.remove('result-update');
                    }, 500);
                }
            });
        }
        
        // Inicializa o efeito ripple
        addRippleEffect();
        
        // Re-inicializa os links da página inicial
        const homeNavLinks = mainContent.querySelectorAll('.nav-link');
        homeNavLinks.forEach(link => {
            link.addEventListener('click', handleNavClick);
        });
    }
    
    // Inicializa as animações com base na rolagem
    function initAnimations() {
        const animateElements = document.querySelectorAll('.animate-on-scroll');
        
        function checkScroll() {
            animateElements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const triggerPoint = window.innerHeight * 0.8;
                
                if (elementTop < triggerPoint) {
                    element.classList.add('show');
                }
            });
        }
        
        // Executa uma vez no início
        setTimeout(checkScroll, 100);
        
        // Adiciona evento de scroll
        window.addEventListener('scroll', checkScroll);
    }
    
    // Atualiza a URL e carrega o conteúdo
    function navigateTo(page) {
        window.location.hash = page === 'home' ? '/' : `/${page}`;
        loadContent(page);
    }
    
    // Handler para cliques nos links de navegação
    function handleNavClick(e) {
        e.preventDefault();
        const page = this.getAttribute('data-page');
        
        // Aplica efeito de ripple ao link
        const ripple = document.createElement('span');
        ripple.classList.add('nav-link-ripple');
        this.appendChild(ripple);
        
        // Remove o ripple após a animação
        setTimeout(() => {
            ripple.remove();
        }, 600);
        
        navigateTo(page);
    }
    
    // Adiciona evento de clique em todos os links de navegação
    navLinks.forEach(link => {
        link.addEventListener('click', handleNavClick);
    });
    
    // Manipula o carregamento inicial e a navegação pelo histórico
    function handleRoute() {
        let page = 'home';
        const hash = window.location.hash.replace('#', '');
        
        if (hash && hash !== '/') {
            page = hash.replace('/', '');
        }
        
        loadContent(page);
    }
    
    // Manipula navegação pelo histórico do navegador
    window.addEventListener('hashchange', handleRoute);
    
    // Carregamento inicial da rota
    handleRoute();
    
    // Theme switcher with improved animation
    const themeSwitch = document.getElementById('theme-switch');
    
    // Verifica preferência de tema salva ou preferência do sistema
    const currentTheme = localStorage.getItem('theme') || 
                        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    
    // Aplica tema salvo ao carregar a página
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-theme');
        themeSwitch.checked = true;
    }
    
    // Evento para troca de tema
    if (themeSwitch) {
        themeSwitch.addEventListener('change', function() {
            // Adiciona classe de transição para suavizar a mudança
            document.body.classList.add('theme-transition');
            
            if (this.checked) {
                document.body.classList.add('dark-theme');
                localStorage.setItem('theme', 'dark');
            } else {
                document.body.classList.remove('dark-theme');
                localStorage.setItem('theme', 'light');
            }
            
            // Remove classe de transição após a animação
            setTimeout(() => {
                document.body.classList.remove('theme-transition');
            }, 1000);
        });
    }
    
    // Scroll to top button
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
            // Adiciona efeito de ripple no botão
            const ripple = document.createElement('span');
            ripple.classList.add('btn-ripple');
            this.appendChild(ripple);
            
            // Remove o ripple após a animação
            setTimeout(() => {
                ripple.remove();
            }, 600);
            
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinksContainer = document.querySelector('.nav-links');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navLinksContainer.classList.toggle('show');
            this.classList.toggle('active');
        });
    }
    
    // Adiciona efeito de ripple em todos os botões
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
                    
                    setTimeout(() => {
                        ripple.remove();
                    }, 600);
                });
            }
        });
    }
    
    // Inicialização da calculadora
    function initCalculator() {
        console.log("Inicializando calculadora...");
        
        // Input animations
        const inputs = document.querySelectorAll('.animated-input');
        inputs.forEach(input => {
            input.addEventListener('focus', function() {
                this.parentElement.classList.add('focused');
            });
            
            input.addEventListener('blur', function() {
                if (this.value === '') {
                    this.parentElement.classList.remove('focused');
                }
            });
            
            // Verifica se input já tem valor
            if (input.value !== '') {
                input.parentElement.classList.add('focused');
            }
        });
        
        const calcType = document.getElementById('calc-type');
        const timeInputs = document.getElementById('time-inputs');
        const distanceInput = document.getElementById('distance-input');
        const paceInputs = document.getElementById('pace-inputs');
        const calculateBtn = document.getElementById('calculate-btn');
        const resultCard = document.getElementById('result-card');
        
        if (calcType) {
            calcType.addEventListener('change', updateInputVisibility);
            
            function updateInputVisibility() {
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
            }
            
            // Garante que os inputs corretos são exibidos no carregamento
            updateInputVisibility();
        }
        
        if (calculateBtn) {
            calculateBtn.addEventListener('click', function() {
                const selectedValue = calcType.value;
                let result, resultLabel;
                
                if (selectedValue === 'pace') {
                    const hours = parseInt(document.getElementById('hours').value) || 0;
                    const minutes = parseInt(document.getElementById('minutes').value) || 0;
                    const seconds = parseInt(document.getElementById('seconds').value) || 0;
                    const distance = parseFloat(document.getElementById('distance').value) || 0;
                    
                    if (distance <= 0) {
                        showAlert('Por favor, informe uma distância válida.');
                        return;
                    }
                    
                    if (hours === 0 && minutes === 0 && seconds === 0) {
                        showAlert('Por favor, informe um tempo válido.');
                        return;
                    }
                    
                    const totalSeconds = (hours * 3600) + (minutes * 60) + seconds;
                    const paceSeconds = totalSeconds / distance;
                    const paceMinutes = Math.floor(paceSeconds / 60);
                    const paceRemainingSeconds = Math.round(paceSeconds % 60);
                    
                    result = `${paceMinutes}:${paceRemainingSeconds.toString().padStart(2, '0')}`;
                    resultLabel = 'Pace (min/km)';
                    
                    // Calcula equivalentes para diferentes distâncias
                    calculateEquivalents(paceSeconds);
                    
                } else if (selectedValue === 'time') {
                    // ... existing code ...
                } else if (selectedValue === 'distance') {
                    // ... existing code ...
                }
                
                document.getElementById('result-value').textContent = result;
                document.getElementById('result-label').textContent = resultLabel;
                
                // Animação para mostrar o resultado
                resultCard.style.display = 'block';
                resultCard.classList.add('result-reveal');
                
                // Scroll suave até o resultado
                resultCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                
                setTimeout(() => {
                    resultCard.classList.remove('result-reveal');
                }, 1000);
            });
        }
        
        function showAlert(message) {
            // Criar alerta customizado
            const alertBox = document.createElement('div');
            alertBox.classList.add('custom-alert');
            alertBox.innerHTML = `
                <div class="alert-content">
                    <i class="fas fa-exclamation-circle"></i>
                    <p>${message}</p>
                    <button class="alert-close"><i class="fas fa-times"></i></button>
                </div>
            `;
            
            document.body.appendChild(alertBox);
            
            // Animação de entrada
            setTimeout(() => {
                alertBox.classList.add('show');
            }, 10);
            
            // Fechar ao clicar no botão
            const closeBtn = alertBox.querySelector('.alert-close');
            closeBtn.addEventListener('click', () => {
                alertBox.classList.remove('show');
                
                // Remover do DOM após animação
                setTimeout(() => {
                    document.body.removeChild(alertBox);
                }, 300);
            });
            
            // Auto fechar após 4 segundos
            setTimeout(() => {
                if (document.body.contains(alertBox)) {
                    alertBox.classList.remove('show');
                    
                    // Remover do DOM após animação
                    setTimeout(() => {
                        if (document.body.contains(alertBox)) {
                            document.body.removeChild(alertBox);
                        }
                    }, 300);
                }
            }, 4000);
        }
    }
    
    // Inicialização das tabelas
    function initTables() {
        console.log("Inicializando tabelas...");
        
        const paceTableBody = document.getElementById('pace-table-body');
        
        if (paceTableBody) {
            generatePaceTable();
        }
        
        function generatePaceTable() {
            const paces = [];
            
            // Gera paces de 3:00 a 8:00 min/km
            for (let min = 3; min <= 8; min++) {
                for (let sec = 0; sec < 60; sec += 30) {
                    paces.push({ minutes: min, seconds: sec });
                }
            }
            
            paces.forEach(pace => {
                const paceInSeconds = (pace.minutes * 60) + pace.seconds;
                const formattedPace = `${pace.minutes}:${pace.seconds.toString().padStart(2, '0')}`;
                
                const oneKm = formatTime(paceInSeconds);
                const fiveKm = formatTime(5 * paceInSeconds);
                const tenKm = formatTime(10 * paceInSeconds);
                const halfMarathon = formatTime(21.0975 * paceInSeconds);
                const marathon = formatTime(42.195 * paceInSeconds);
                
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${formattedPace}</td>
                    <td>${oneKm}</td>
                    <td>${fiveKm}</td>
                    <td>${tenKm}</td>
                    <td>${halfMarathon}</td>
                    <td>${marathon}</td>
                `;
                
                paceTableBody.appendChild(row);
            });
        }
    }
    
    // Funções auxiliares
    function calculateEquivalents(paceInSeconds) {
        // Calcula tempo para distâncias padrão usando o pace
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
    
    // Quick calculator functionality on homepage
    const quickDistance = document.getElementById('quick-distance');
    const quickMinutes = document.getElementById('quick-minutes');
    const quickSeconds = document.getElementById('quick-seconds');
    const quickCalculateBtn = document.getElementById('quick-calculate-btn');
    const quickResult = document.getElementById('quick-result');
    const quickPaceResult = document.getElementById('quick-pace-result');
    
    if (quickCalculateBtn) {
        quickCalculateBtn.addEventListener('click', function() {
            const distance = parseFloat(quickDistance.value) || 0;
            const minutes = parseInt(quickMinutes.value) || 0;
            const seconds = parseInt(quickSeconds.value) || 0;
            
            if (distance <= 0) {
                showAlert('Por favor, informe uma distância válida.');
                return;
            }
            
            if (minutes === 0 && seconds === 0) {
                showAlert('Por favor, informe um tempo válido.');
                return;
            }
            
            const totalSeconds = (minutes * 60) + seconds;
            const paceSeconds = totalSeconds / distance;
            const paceMinutes = Math.floor(paceSeconds / 60);
            const paceRemainingSeconds = Math.round(paceSeconds % 60);
            
            const formattedPace = `${paceMinutes}:${paceRemainingSeconds.toString().padStart(2, '0')}`;
            
            quickPaceResult.textContent = formattedPace;
            
            // Anima a exibição do resultado
            if (quickResult.style.display === 'none' || quickResult.style.display === '') {
                quickResult.style.display = 'block';
                quickResult.classList.add('result-reveal');
                
                setTimeout(() => {
                    quickResult.classList.remove('result-reveal');
                }, 1000);
            } else {
                quickResult.classList.add('result-update');
                
                setTimeout(() => {
                    quickResult.classList.remove('result-update');
                }, 500);
            }
        });
    }
    
    // Helper function to show alerts
    function showAlert(message) {
        // Criar alerta customizado
        const alertBox = document.createElement('div');
        alertBox.classList.add('custom-alert');
        alertBox.innerHTML = `
            <div class="alert-content">
                <i class="fas fa-exclamation-circle"></i>
                <p>${message}</p>
                <button class="alert-close"><i class="fas fa-times"></i></button>
            </div>
        `;
        
        document.body.appendChild(alertBox);
        
        // Animação de entrada
        setTimeout(() => {
            alertBox.classList.add('show');
        }, 10);
        
        // Fechar ao clicar no botão
        const closeBtn = alertBox.querySelector('.alert-close');
        closeBtn.addEventListener('click', () => {
            alertBox.classList.remove('show');
            
            // Remover do DOM após animação
            setTimeout(() => {
                document.body.removeChild(alertBox);
            }, 300);
        });
        
        // Auto fechar após 4 segundos
        setTimeout(() => {
            if (document.body.contains(alertBox)) {
                alertBox.classList.remove('show');
                
                // Remover do DOM após animação
                setTimeout(() => {
                    if (document.body.contains(alertBox)) {
                        document.body.removeChild(alertBox);
                    }
                }, 300);
            }
        }, 4000);
    }
    
    // Inicialização global
    addRippleEffect();
});
