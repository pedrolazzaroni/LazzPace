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
    <nav class="main-navbar">
        <div class="container navbar-container">
            <div class="logo">
                <h1><span class="highlight">Lazz</span>Pace</h1>
            </div>
            <div class="menu-toggle">
                <i class="fas fa-bars"></i>
            </div>
            <ul class="nav-links nav-underline">
                <li><a href="#home" data-page="home" class="nav-link active"><span>Home</span></a></li>
                <li><a href="#calculator" data-page="calculator" class="nav-link"><span>Calculadora</span></a></li>
                <li><a href="#about" data-page="about" class="nav-link"><span>Sobre Pace</span></a></li>
                <li><a href="#tips" data-page="tips" class="nav-link"><span>Dicas</span></a></li>
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

    <!-- Main Content SPA -->
    <div id="main-content" class="page-content" style="min-height: calc(100vh - 320px);">
        <!-- Os partials serão carregados dinamicamente aqui -->
    </div>

    <!-- Footer - Redesigned -->
    <footer style="margin-top:0;">
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
                        <li><a href="#calculator" data-page="calculator" class="nav-link">Calculadora de Pace</a></li>
                        <li><a href="#about" data-page="about" class="nav-link">Sobre o Pace</a></li>
                        <li><a href="#tips" data-page="tips" class="nav-link">Dicas de Treinamento</a></li>
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
