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

    // Improved SPA Navigation
    const appContainer = document.getElementById('app-container');
    const contentContainers = document.querySelectorAll('.page-content');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Carrega o conteúdo das páginas dinamicamente
    async function loadContent(page) {
        // Verifica se estamos na mesma página
        const currentActivePage = document.querySelector('.page-content.active');
        const currentPageId = currentActivePage ? currentActivePage.id.replace('-content', '') : null;
        
        // Se já estivermos na página solicitada, não faça nada
        if (currentPageId === page) {
            return;
        }
        
        // Adiciona classe para animar a saída da página atual
        if (currentActivePage) {
            currentActivePage.classList.add('page-exit');
            
            // Aguarda a animação de saída completar
            await new Promise(resolve => setTimeout(resolve, 300));
        }
        
        const targetContainer = document.getElementById(`${page}-content`);
        
        // Carrega o conteúdo se ainda não tiver sido carregado
        if (targetContainer && targetContainer.innerHTML.trim() === '') {
            try {
                // Adiciona classe de loading ao container
                targetContainer.classList.add('loading');
                
                const response = await fetch(`partials/${page}.html`);
                if (!response.ok) {
                    throw new Error(`Failed to load ${page} content.`);
                }
                const content = await response.text();
                targetContainer.innerHTML = content;
                
                // Remove classe de loading
                targetContainer.classList.remove('loading');
                
                // Dispara evento para inicializar funcionalidades específicas da página
                document.dispatchEvent(new CustomEvent('page-loaded', { 
                    detail: { page: page } 
                }));
            } catch (error) {
                console.error('Error loading content:', error);
                targetContainer.innerHTML = `
                    <div class="error-message">
                        <i class="fas fa-exclamation-triangle"></i>
                        <p>Não foi possível carregar o conteúdo. Tente novamente.</p>
                        <button class="retry-btn" data-page="${page}">Tentar novamente</button>
                    </div>
                `;
                
                // Adiciona evento ao botão de retry
                const retryBtn = targetContainer.querySelector('.retry-btn');
                if (retryBtn) {
                    retryBtn.addEventListener('click', function() {
                        loadContent(this.getAttribute('data-page'));
                    });
                }
            }
        }
        
        // Esconde todos os containers e mostra apenas o solicitado
        contentContainers.forEach(cont => {
            cont.classList.remove('active', 'page-exit', 'page-enter');
        });
        
        // Adiciona classe para animar a entrada da nova página
        targetContainer.classList.add('active', 'page-enter');
        
        // Atualiza os links ativos na navegação
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-page') === page) {
                link.classList.add('active');
            }
        });
        
        // Rola para o topo com animação
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
    // Atualiza a URL e carrega o conteúdo
    function navigateTo(page) {
        window.location.hash = page === 'home' ? '/' : `/${page}`;
        loadContent(page);
    }
    
    // Adiciona evento de clique em todos os links de navegação
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const page = this.getAttribute('data-page');
            
            // Adiciona efeito de ripple nos links
            const ripple = document.createElement('span');
            ripple.classList.add('nav-link-ripple');
            this.appendChild(ripple);
            
            // Remove o ripple após a animação
            setTimeout(() => {
                ripple.remove();
            }, 600);
            
            navigateTo(page);
        });
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
    
    // Animation on scroll
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
    
    // Verifica elementos no carregamento inicial
    setTimeout(checkScroll, 500);
    
    // Verifica elementos ao rolar
    window.addEventListener('scroll', checkScroll);
    
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
    
    // Inicializa funcionalidades específicas de cada página
    document.addEventListener('page-loaded', function(e) {
        const page = e.detail.page;
        
        // Inicializa calculadora
        if (page === 'calculator') {
            initCalculator();
        }
        
        // Inicializa tabelas
        if (page === 'tables') {
            initTables();
        }
        
        // Adiciona efeito de ripple em todos os botões da página carregada
        addRippleEffect();
    });
    
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
