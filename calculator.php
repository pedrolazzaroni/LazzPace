<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculadora de Pace - LazzPace</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="additional-styles.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css">
</head>
<body class="page-transition">
    <nav class="main-navbar">
        <div class="container navbar-container">
            <div class="logo">
                <h1><span class="highlight">Lazz</span>Pace</h1>
            </div>
            <div class="menu-toggle">
                <i class="fas fa-bars"></i>
            </div>
            <ul class="nav-links">
                <li><a href="index.php"><i class="fas fa-home"></i> Home</a></li>
                <li><a href="calculator.php" class="active"><i class="fas fa-calculator"></i> Calculadora</a></li>
                <li><a href="tables.php"><i class="fas fa-table"></i> Tabelas</a></li>
                <li><a href="about.php"><i class="fas fa-info-circle"></i> Sobre Pace</a></li>
                <li><a href="tips.php"><i class="fas fa-lightbulb"></i> Dicas</a></li>
            </ul>
            <div class="theme-toggle">
                <input type="checkbox" id="theme-switch" class="theme-switch-input">
                <label for="theme-switch" class="theme-switch-label">
                    <i class="fas fa-sun"></i>
                    <i class="fas fa-moon"></i>
                    <span class="ball"></span>
                </label>
            </div>
        </div>
    </nav>

    <header class="page-header">
        <div class="container">
            <h1>Calculadora de Pace</h1>
            <p>Calcule seu pace, tempo ou distância com precisão</p>
        </div>
    </header>

    <main class="container">
        <section class="calculator-section">
            <div class="card calculator-card">
                <h2><i class="fas fa-calculator"></i> Calculadora de Pace</h2>
                <form id="pace-calculator" class="animated-form">
                    <div class="form-group">
                        <label for="calc-type">O que deseja calcular?</label>
                        <select id="calc-type" class="animated-input">
                            <option value="pace">Pace (min/km)</option>
                            <option value="time">Tempo total</option>
                            <option value="distance">Distância</option>
                        </select>
                    </div>

                    <div class="form-row" id="time-inputs">
                        <div class="form-group">
                            <label for="hours">Horas</label>
                            <input type="number" id="hours" min="0" value="0" class="animated-input">
                        </div>
                        <div class="form-group">
                            <label for="minutes">Minutos</label>
                            <input type="number" id="minutes" min="0" max="59" value="0" class="animated-input">
                        </div>
                        <div class="form-group">
                            <label for="seconds">Segundos</label>
                            <input type="number" id="seconds" min="0" max="59" value="0" class="animated-input">
                        </div>
                    </div>

                    <div class="form-group" id="distance-input">
                        <label for="distance">Distância (km)</label>
                        <input type="number" id="distance" min="0" step="0.01" value="0" class="animated-input">
                    </div>

                    <div class="form-group" id="pace-inputs" style="display: none;">
                        <label for="pace-minutes">Pace (min:seg por km)</label>
                        <div class="form-row">
                            <input type="number" id="pace-minutes" min="0" max="59" value="0" placeholder="min" class="animated-input">
                            <span>:</span>
                            <input type="number" id="pace-seconds" min="0" max="59" value="0" placeholder="seg" class="animated-input">
                        </div>
                    </div>

                    <button type="button" id="calculate-btn" class="btn-pulse">Calcular</button>
                </form>
            </div>

            <div class="card result-card" id="result-card" style="display: none;">
                <h2><i class="fas fa-chart-line"></i> Resultado</h2>
                <div class="result-container">
                    <div id="result-value" class="result-value">--:--</div>
                    <div id="result-label" class="result-label">Pace (min/km)</div>
                </div>
                <div class="result-extras">
                    <h3>Tempos equivalentes</h3>
                    <div class="extra-items">
                        <div class="extra-item">
                            <div class="extra-label">Equivalente 5K</div>
                            <div id="equiv-5k" class="extra-value">--:--</div>
                        </div>
                        <div class="extra-item">
                            <div class="extra-label">Equivalente 10K</div>
                            <div id="equiv-10k" class="extra-value">--:--</div>
                        </div>
                        <div class="extra-item">
                            <div class="extra-label">Meia Maratona</div>
                            <div id="equiv-half" class="extra-value">--:--</div>
                        </div>
                        <div class="extra-item">
                            <div class="extra-label">Maratona</div>
                            <div id="equiv-full" class="extra-value">--:--</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <section class="common-distances">
            <h2 class="section-title">Distâncias Comuns</h2>
            <div class="distance-cards">
                <div class="distance-card">
                    <div class="distance-icon"><i class="fas fa-running"></i></div>
                    <h3>5K</h3>
                    <p>Distância popular para iniciantes</p>
                </div>
                <div class="distance-card">
                    <div class="distance-icon"><i class="fas fa-running"></i></div>
                    <h3>10K</h3>
                    <p>Desafio intermediário</p>
                </div>
                <div class="distance-card">
                    <div class="distance-icon"><i class="fas fa-running"></i></div>
                    <h3>21K</h3>
                    <p>Meia maratona</p>
                </div>
                <div class="distance-card">
                    <div class="distance-icon"><i class="fas fa-running"></i></div>
                    <h3>42K</h3>
                    <p>Maratona completa</p>
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

    <div class="scroll-to-top">
        <i class="fas fa-arrow-up"></i>
    </div>

    <script src="script.js"></script>
</body>
</html>
