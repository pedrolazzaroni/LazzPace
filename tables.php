<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tabelas de Referência - LazzPace</title>
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
                <li><a href="calculator.php"><i class="fas fa-calculator"></i> Calculadora</a></li>
                <li><a href="tables.php" class="active"><i class="fas fa-table"></i> Tabelas</a></li>
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
            <h1>Tabelas de Referência</h1>
            <p>Consulte o tempo estimado para diferentes distâncias baseado no pace</p>
        </div>
    </header>

    <main class="container">
        <section class="tables-section">
            <div class="card tables-card">
                <h2><i class="fas fa-table"></i> Tabela de Referência de Pace</h2>
                <p class="card-description">Esta tabela mostra os tempos estimados para diferentes distâncias com base no seu ritmo de corrida (pace). Utilize como referência para planejar seus treinos e provas.</p>
                
                <div class="table-filters">
                    <div class="filter-group">
                        <label for="pace-min">Pace Mínimo:</label>
                        <select id="pace-min" class="animated-input">
                            <option value="3">3:00 min/km</option>
                            <option value="4" selected>4:00 min/km</option>
                            <option value="5">5:00 min/km</option>
                            <option value="6">6:00 min/km</option>
                            <option value="7">7:00 min/km</option>
                        </select>
                    </div>
                    <div class="filter-group">
                        <label for="pace-max">Pace Máximo:</label>
                        <select id="pace-max" class="animated-input">
                            <option value="5">5:00 min/km</option>
                            <option value="6" selected>6:00 min/km</option>
                            <option value="7">7:00 min/km</option>
                            <option value="8">8:00 min/km</option>
                            <option value="9">9:00 min/km</option>
                        </select>
                    </div>
                    <button id="filter-table-btn" type="button">Filtrar</button>
                </div>
                
                <div class="table-container">
                    <table class="pace-table">
                        <thead>
                            <tr>
                                <th>Pace (min/km)</th>
                                <th>1km</th>
                                <th>5km</th>
                                <th>10km</th>
                                <th>Meia Maratona</th>
                                <th>Maratona</th>
                            </tr>
                        </thead>
                        <tbody id="pace-table-body">
                            <!-- Preenchido via JavaScript -->
                        </tbody>
                    </table>
                </div>
            </div>
            
            <div class="card">
                <h2><i class="fas fa-trophy"></i> Performances de Referência</h2>
                <p class="card-description">Tempos de referência para diferentes níveis de corredor. Use como parâmetro para estabelecer suas metas.</p>
                
                <div class="table-container">
                    <table class="reference-table">
                        <thead>
                            <tr>
                                <th>Nível</th>
                                <th>5km</th>
                                <th>10km</th>
                                <th>Meia Maratona</th>
                                <th>Maratona</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Iniciante</td>
                                <td>30:00</td>
                                <td>1:00:00</td>
                                <td>2:15:00</td>
                                <td>4:30:00</td>
                            </tr>
                            <tr>
                                <td>Intermediário</td>
                                <td>25:00</td>
                                <td>50:00</td>
                                <td>1:50:00</td>
                                <td>3:50:00</td>
                            </tr>
                            <tr>
                                <td>Avançado</td>
                                <td>20:00</td>
                                <td>40:00</td>
                                <td>1:30:00</td>
                                <td>3:15:00</td>
                            </tr>
                            <tr>
                                <td>Elite</td>
                                <td>15:00</td>
                                <td>31:00</td>
                                <td>1:10:00</td>
                                <td>2:30:00</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
        
        <section class="conversion-section">
            <div class="card">
                <h2><i class="fas fa-exchange-alt"></i> Conversão de Unidades</h2>
                <div class="conversion-cards">
                    <div class="conversion-card">
                        <h3>min/km para min/mi</h3>
                        <p>Para converter pace de minutos por quilômetro para minutos por milha:</p>
                        <div class="conversion-formula">
                            <p>min/mi = min/km × 1,609</p>
                        </div>
                        <div class="conversion-example">
                            <p>Exemplo: 5:00 min/km = 8:03 min/mi</p>
                        </div>
                    </div>
                    
                    <div class="conversion-card">
                        <h3>min/mi para min/km</h3>
                        <p>Para converter pace de minutos por milha para minutos por quilômetro:</p>
                        <div class="conversion-formula">
                            <p>min/km = min/mi ÷ 1,609</p>
                        </div>
                        <div class="conversion-example">
                            <p>Exemplo: 8:00 min/mi = 4:58 min/km</p>
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

    <div class="scroll-to-top">
        <i class="fas fa-arrow-up"></i>
    </div>

    <script src="script.js"></script>
</body>
</html>
