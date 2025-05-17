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
     <!-- Icons -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css">
    <link rel="shortcut icon" href="assets/favicon.png" type="image/x-icon">
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
            <a href="#" style="text-decoration: none;">
                <div class="logo">
                    <h1><span class="highlight">Lazz</span>Pace</h1>
                </div>
            </a>
            <div class="menu-toggle" id="menu-toggle">
                <span class="bar bar1"></span>
                <span class="bar bar2"></span>
                <span class="bar bar3"></span>
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
    <footer>
        <div class="container">
            <div class="footer-content">
                <div class="footer-logo">
                    <img src="assets/favicon.png" alt="Logo">
                    <span>Pedro Lazzaroni</span>
                </div>
                
                <div class="footer-social">
                    <a href="https://linkedin.com/in/pedrolazzaroni" class="social-link" target="_blank">
                        <i class="bi bi-linkedin"></i>
                    </a>
                    <a href="https://github.com/pedrolazzaroni" class="social-link" target="_blank">
                        <i class="bi bi-github"></i>
                    </a>
                    <a href="https://www.instagram.com/pedro_lazzaroni" class="social-link" target="_blank">
                        <i class="bi bi-instagram"></i>
                    </a>
                    <a href="mailto:contato@pedrolazzaroni.com.br" class="social-link">
                        <i class="bi bi-envelope"></i>
                    </a>
                </div>
            </div>
            
            <div class="footer-bottom">
                <p>&copy; 2025 Pedro Lazzaroni. Todos os direitos reservados.</p>
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
