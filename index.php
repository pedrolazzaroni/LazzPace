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
<body>
    <nav class="main-navbar">
        <div class="container navbar-container">
            <div class="logo">
                <h1><span class="highlight">Lazz</span>Pace</h1>
            </div>
            <div class="menu-toggle">
                <i class="fas fa-bars"></i>
            </div>
            <ul class="nav-links">
                <li><a href="index.php" class="active"><i class="fas fa-home"></i> Home</a></li>
                <li><a href="calculator.php"><i class="fas fa-calculator"></i> Calculadora</a></li>
                <li><a href="tables.php"><i class="fas fa-table"></i> Tabelas</a></li>
                <li><a href="about.php"><i class="fas fa-info-circle"></i> Sobre Pace</a></li>
                <li><a href="tips.php"><i class="fas fa-lightbulb"></i> Dicas</a></li>
                <li class="theme-switch-wrapper">
                    <label class="theme-switch" for="checkbox">
                        <input type="checkbox" id="checkbox" />
                        <span class="slider"></span>
                        <i class="fas fa-sun theme-icon sun-icon"></i>
                        <i class="fas fa-moon theme-icon moon-icon"></i>
                    </label>
                </li>
            </ul>
        </div>
    </nav>

    <header class="hero">
        <div class="container hero-content">
            <h1 class="fade-in"><span class="highlight">Lazz</span>Pace</h1>
            <p class="fade-in-delay">Calcule e entenda o seu ritmo de corrida</p>
            <a href="calculator.php" class="btn btn-primary btn-pulse">Começar agora</a>
        </div>
    </header>

    <main class="container">
        <section class="features">
            <h2 class="section-title">O que o LazzPace oferece</h2>
            
            <div class="cards-container">
                <div class="feature-card">
                    <div class="card-icon"><i class="fas fa-calculator"></i></div>
                    <h3>Calculadora Precisa</h3>
                    <p>Calcule seu pace, tempo ou distância com nossa ferramenta intuitiva.</p>
                    <a href="calculator.php" class="card-link">Usar calculadora <i class="fas fa-arrow-right"></i></a>
                </div>
                
                <div class="feature-card">
                    <div class="card-icon"><i class="fas fa-table"></i></div>
                    <h3>Tabelas de Referência</h3>
                    <p>Consulte tempos estimados para diversas distâncias baseados no seu pace.</p>
                    <a href="tables.php" class="card-link">Ver tabelas <i class="fas fa-arrow-right"></i></a>
                </div>
                
                <div class="feature-card">
                    <div class="card-icon"><i class="fas fa-running"></i></div>
                    <h3>Dicas Profissionais</h3>
                    <p>Aprenda a melhorar seu desempenho com dicas de especialistas.</p>
                    <a href="tips.php" class="card-link">Ver dicas <i class="fas fa-arrow-right"></i></a>
                </div>
            </div>
        </section>
        
        <section class="quick-calc">
            <div class="card">
                <h2>Cálculo Rápido</h2>
                <p>Precisa de um cálculo rápido? Use nossa mini calculadora:</p>
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
        
        <section class="testimonials">
            <h2 class="section-title">O que nossos usuários dizem</h2>
            
            <div class="testimonial-slider">
                <div class="testimonial">
                    <div class="testimonial-content">
                        <p>"O LazzPace me ajudou a planejar melhor meus treinos e provas. Ferramenta essencial para qualquer corredor!"</p>
                    </div>
                    <div class="testimonial-author">
                        <div class="avatar">
                            <i class="fas fa-user-circle"></i>
                        </div>
                        <div class="author-info">
                            <h4>Mariana Silva</h4>
                            <p>Corredora amadora</p>
                        </div>
                    </div>
                </div>
                
                <div class="testimonial">
                    <div class="testimonial-content">
                        <p>"Interface intuitiva e cálculos precisos. Uso diariamente para acompanhar minha evolução nas corridas."</p>
                    </div>
                    <div class="testimonial-author">
                        <div class="avatar">
                            <i class="fas fa-user-circle"></i>
                        </div>
                        <div class="author-info">
                            <h4>Carlos Santos</h4>
                            <p>Maratonista</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>

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
                        <li><a href="calculator.php">Calculadora</a></li>
                        <li><a href="tables.php">Tabelas</a></li>
                        <li><a href="about.php">Sobre Pace</a></li>
                        <li><a href="tips.php">Dicas</a></li>
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

    <script src="script.js"></script>
</body>
</html>
