document.addEventListener('DOMContentLoaded', function() {
    // Preloader functionality - Acelerado
    const preloader = document.querySelector('.preloader');
    const progress = document.querySelector('.progress');
    
    if (preloader) {
        let width = 0;
        const interval = setInterval(() => {
            width += 10; // Aumentado de 5 para 10 para acelerar
            progress.style.width = width + '%';
            
            if (width >= 100) {
                clearInterval(interval);
                // Remover atraso
                preloader.classList.add('fade-out');
                document.body.classList.add('page-visible');
            }
        }, 20); // Reduzido de 50ms para 20ms
    }

    // SPA Navigation - Simplificada para seções na mesma página
    const navLinks = document.querySelectorAll('.nav-link');
    const contentSections = document.querySelectorAll('.content-section');
    
    // Variável global para controlar se uma navegação está em andamento
    let isNavigating = false;
    
    // Nova função para mostrar/ocultar seções de conteúdo - Versão corrigida
    function showSection(sectionId) {
        console.log(`Navegando para: ${sectionId}`);
        
        // Se já houver uma navegação em andamento, ignorar
        if (isNavigating) return;
        isNavigating = true;
        
        document.body.classList.add('page-transitioning');
        
        // Ocultar todas as seções
        contentSections.forEach(section => {
            section.classList.remove('active');
        });
        
        // Mostrar a seção selecionada
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.classList.add('active');
            // Aplicar efeito de entrada
            targetSection.classList.add('section-enter');
            
            setTimeout(() => {
                targetSection.classList.remove('section-enter');
                // Liberar para novas navegações
                isNavigating = false;
                document.body.classList.remove('page-transitioning');
            }, 500);
        } else {
            console.error(`Seção #${sectionId} não encontrada`);
            isNavigating = false;
            document.body.classList.remove('page-transitioning');
        }
        
        // Atualizar links ativos
        updateActiveLinks(sectionId);
        
        // Rolar para o topo suavemente
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        // Inicializar scripts específicos da página/seção
        initSectionScripts(sectionId);
    }
    
    // Atualizar links ativos no menu
    function updateActiveLinks(sectionId) {
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-page') === sectionId) {
                link.classList.add('active');
            }
        });
    }
    
    // Inicializar os scripts específicos de cada seção - Versão melhorada
    function initSectionScripts(sectionId) {
        console.log(`Inicializando scripts para: ${sectionId}`);
        
        // Desativar elementos de animação anteriores para evitar conflitos
        const oldAnimatedElements = document.querySelectorAll('.animate-running');
        oldAnimatedElements.forEach(el => {
            el.classList.remove('animate-running');
        });
        
        // Inicializar funcionalidades específicas de cada seção
        switch(sectionId) {
            case 'calculator':
                initCalculator();
                break;
            case 'tables':
                initTables();
                break;
            case 'home':
                initHomePage();
                break;
            case 'about':
            case 'tips':
                // Inicialização específica para outras páginas se necessário
                break;
        }
        
        // Reinicializar animações para a seção atual
        initAnimations();
        
        // Adicionar eventos aos links dentro da seção
        addNavEvents();
        
        // Adicionar efeito de ripple nos botões
        addRippleEffect();
        
        // Marcar elementos de animação na seção atual
        const newAnimatedElements = document.querySelectorAll('.animate-on-scroll');
        newAnimatedElements.forEach(el => {
            el.classList.add('animate-running');
        });
    }
    
    // Handler para clique nos links de navegação - com proteção contra múltiplos cliques
    function handleNavClick(e) {
        e.preventDefault();
        
        // Se já houver uma navegação em andamento, ignorar o clique
        if (isNavigating) return;
        
        // Obter o ID da seção alvo do atributo data-page
        const targetPage = this.getAttribute('data-page');
        
        // Efeito de ripple
        const ripple = document.createElement('span');
        ripple.classList.add('nav-link-ripple');
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
        
        // Atualizar a URL com o hash sem recarregar a página
        window.history.pushState({ page: targetPage }, '', `#${targetPage}`);
        
        // Mostrar a seção correspondente
        showSection(targetPage);
    }
    
    // Adicionar evento de clique aos links de navegação
    navLinks.forEach(link => {
        link.addEventListener('click', handleNavClick);
    });
    
    // Adicionar evento de clique aos links dentro do conteúdo
    function addNavEvents() {
        const contentNavLinks = document.querySelectorAll('.content-section a.nav-link');
        contentNavLinks.forEach(link => {
            if (!link.hasNavEvent) {
                link.hasNavEvent = true;
                link.addEventListener('click', handleNavClick);
            }
        });
    }
    
    // Inicialização da página
    function init() {
        console.log('Inicializando aplicação...');
        
        // Determinar a seção inicial com base no hash da URL
        const hash = window.location.hash;
        let initialPage = 'home'; // Default para home
        
        if (hash && hash !== '#') {
            initialPage = hash.replace('#', '');
        }
        
        console.log(`Seção inicial: ${initialPage}`);
        
        // Mostrar a seção inicial
        showSection(initialPage);
    }
    
    // Suporte ao botão voltar/avançar do navegador
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
        
        showSection(page);
    });
    
    // Inicializar a página
    init();
    
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
    
    // Inicializar animações de scroll
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
    
    // Inicialização da homepage
    function initHomePage() {
        // Quick calculator functionality
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
                    const distance = parseFloat(document.getElementById('distance').value) || 0;
                    const paceMinutes = parseInt(document.getElementById('pace-minutes').value) || 0;
                    const paceSeconds = parseInt(document.getElementById('pace-seconds').value) || 0;
                    
                    if (distance <= 0) {
                        showAlert('Por favor, informe uma distância válida.');
                        return;
                    }
                    
                    if (paceMinutes === 0 && paceSeconds === 0) {
                        showAlert('Por favor, informe um pace válido.');
                        return;
                    }
                    
                    const totalPaceSeconds = (paceMinutes * 60) + paceSeconds;
                    const totalTimeSeconds = totalPaceSeconds * distance;
                    const hours = Math.floor(totalTimeSeconds / 3600);
                    const minutes = Math.floor((totalTimeSeconds % 3600) / 60);
                    const seconds = Math.round(totalTimeSeconds % 60);
                    
                    result = hours > 0 ? `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}` : `${minutes}:${seconds.toString().padStart(2, '0')}`;
                    resultLabel = 'Tempo Total';
                    
                } else if (selectedValue === 'distance') {
                    const hours = parseInt(document.getElementById('hours').value) || 0;
                    const minutes = parseInt(document.getElementById('minutes').value) || 0;
                    const seconds = parseInt(document.getElementById('seconds').value) || 0;
                    const paceMinutes = parseInt(document.getElementById('pace-minutes').value) || 0;
                    const paceSeconds = parseInt(document.getElementById('pace-seconds').value) || 0;
                    
                    if (hours === 0 && minutes === 0 && seconds === 0) {
                        showAlert('Por favor, informe um tempo válido.');
                        return;
                    }
                    
                    if (paceMinutes === 0 && paceSeconds === 0) {
                        showAlert('Por favor, informe um pace válido.');
                        return;
                    }
                    
                    const totalTimeSeconds = (hours * 3600) + (minutes * 60) + seconds;
                    const totalPaceSeconds = (paceMinutes * 60) + paceSeconds;
                    const distance = totalTimeSeconds / totalPaceSeconds;
                    
                    result = distance.toFixed(2);
                    resultLabel = 'Distância Total (km)';
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
    }
    
    // Inicialização das tabelas
    function initTables() {
        console.log("Inicializando tabelas...");
        
        const paceTableBody = document.getElementById('pace-table-body');
        
        if (paceTableBody && paceTableBody.innerHTML.trim() === '') {
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
    initAnimations();
});
