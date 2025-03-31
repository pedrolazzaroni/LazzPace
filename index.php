<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LazzPace - Calculadora de Pace</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="additional-styles.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css">
</head>
<body class="page-transition">
    <!-- Preloader -->
    <div class="preloader">
        <div class="loader">
            <i class="fas fa-running running-icon"></i>
            <div class="progress-bar">
                <div class="progress"></div>
            </div>
        </div>
    </div>

    <!-- Navbar -->
    <nav class="main-navbar">
        <div class="container navbar-container">
            <div class="logo">
                <h1><span class="highlight">Lazz</span>Pace</h1>
            </div>
            <div class="menu-toggle">
                <i class="fas fa-bars"></i>
            </div>
            <ul class="nav-links">
                <li><a href="#/" data-page="home" class="nav-link active"><i class="fas fa-home"></i> Home</a></li>
                <li><a href="#/calculator" data-page="calculator" class="nav-link"><i class="fas fa-calculator"></i> Calculadora</a></li>
                <li><a href="#/tables" data-page="tables" class="nav-link"><i class="fas fa-table"></i> Tabelas</a></li>
                <li><a href="#/about" data-page="about" class="nav-link"><i class="fas fa-info-circle"></i> Sobre Pace</a></li>
                <li><a href="#/tips" data-page="tips" class="nav-link"><i class="fas fa-lightbulb"></i> Dicas</a></li>
            </ul>
            <div class="theme-container">
                <div class="theme-switcher">
                    <input type="checkbox" id="theme-switch" class="theme-switch-input">
                    <label for="theme-switch" class="theme-switch-label">
                        <div class="sun-moon-container">
                            <div class="sun"><i class="fas fa-sun"></i></div>
                            <div class="moon"><i class="fas fa-moon"></i></div>
                        </div>
                    </label>
                </div>
            </div>
        </div>
    </nav>

    <!-- Main Content -->
    <div id="main-content" class="page-content active">
        <!-- Conteúdo inicial (Home) -->
        <div id="home-content" class="compact-home">
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
        </div>
    </div>

    <!-- Footer - Redesigned -->
    <footer>
        <div class="container">
            <div class="footer-content">
                <div class="footer-logo">
                    <h2><span class="highlight">Lazz</span>Pace</h2>
                    <p>Sua ferramenta completa para cálculo e análise de ritmo de corrida, desenvolvida para corredores de todos os níveis.</p>
                    <p class="footer-tagline">Corra mais inteligente, não apenas mais rápido.</p>
                </div>
                <div class="footer-links">
                    <h3>Links Rápidos</h3>
                    <ul>
                        <li><a href="#/calculator" data-page="calculator" class="nav-link">Calculadora de Pace</a></li>
                        <li><a href="#/tables" data-page="tables" class="nav-link">Tabelas de Referência</a></li>
                        <li><a href="#/about" data-page="about" class="nav-link">Sobre o Pace</a></li>
                        <li><a href="#/tips" data-page="tips" class="nav-link">Dicas de Treinamento</a></li>
                    </ul>
                </div>
                <div class="social-links">
                    <h3>Conecte-se</h3>
                    <div class="social-icons">
                        <a href="#" title="Facebook"><i class="fab fa-facebook-f"></i></a>
                        <a href="#" title="Instagram"><i class="fab fa-instagram"></i></a>
                        <a href="#" title="Twitter"><i class="fab fa-twitter"></i></a>
                        <a href="#" title="Strava"><i class="fab fa-strava"></i></a>
                        <a href="#" title="YouTube"><i class="fab fa-youtube"></i></a>
                        <a href="#" title="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                    <p class="newsletter-cta">Receba dicas e novidades sobre corrida:</p>
                    <form class="newsletter-form">
                        <input type="email" placeholder="Seu e-mail" required>
                        <button type="submit"><i class="fas fa-paper-plane"></i></button>
                    </form>
                </div>
            </div>
            <div class="copyright">
                <p>&copy; <?php echo date('Y'); ?> LazzPace - Todos os direitos reservados</p>
                <p class="footer-credits">Desenvolvido com <i class="fas fa-heart"></i> para corredores</p>
            </div>
        </div>
    </footer>

    <!-- Scroll to Top Button -->
    <div class="scroll-to-top">
        <i class="fas fa-arrow-up"></i>
    </div>

    <!-- Scripts -->
    <script src="app.js"></script>
</body>
</html>
