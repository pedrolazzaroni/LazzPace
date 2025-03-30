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

    <!-- MUDANÇA AQUI: Único container para todo o conteúdo -->
    <div id="main-content" class="page-content">
        <!-- Conteúdo inicial será carregado aqui -->
    </div>

    <footer>
        <div class="container">
            <div class="footer-content">
                <div class="footer-logo">
                    <h2><span class="highlight">Lazz</span>Pace</h2>
                    <p>Sua ferramenta de cálculo de pace</p>
                </div>
                <div class="footer-links">
                    <h3>Links Rápidos</h3>
                    <ul>
                        <li><a href="#/calculator" data-page="calculator" class="nav-link">Calculadora</a></li>
                        <li><a href="#/tables" data-page="tables" class="nav-link">Tabelas</a></li>
                        <li><a href="#/about" data-page="about" class="nav-link">Sobre Pace</a></li>
                        <li><a href="#/tips" data-page="tips" class="nav-link">Dicas</a></li>
                    </ul>
                </div>
                <div class="social-links">
                    <h3>Siga-nos</h3>
                    <div class="social-icons">
                        <a href="#"><i class="fab fa-facebook"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-strava"></i></a>
                    </div>
                </div>
            </div>
            <div class="copyright">
                <p>&copy; <?php echo date('Y') ?> LazzPace - Calculadora de Pace para Corredores</p>
            </div>
        </div>
    </footer>

    <div class="scroll-to-top">
        <i class="fas fa-arrow-up"></i>
    </div>

    <script src="app.js"></script>
</body>
</html>
