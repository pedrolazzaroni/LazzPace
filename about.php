<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sobre Pace - LazzPace</title>
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
                <li><a href="tables.php"><i class="fas fa-table"></i> Tabelas</a></li>
                <li><a href="about.php" class="active"><i class="fas fa-info-circle"></i> Sobre Pace</a></li>
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
            <h1>Sobre Pace</h1>
            <p>Entenda o conceito de pace e sua importância para corredores</p>
        </div>
    </header>

    <main class="container">
        <section class="about-section">
            <div class="card">
                <h2><i class="fas fa-question-circle"></i> O que é Pace?</h2>
                <div class="card-content">
                    <p>Pace é o tempo que você leva para percorrer uma unidade de distância, geralmente medido em minutos por quilômetro (min/km) ou minutos por milha (min/mi).</p>
                    
                    <div class="info-block">
                        <div class="info-icon">
                            <i class="fas fa-info"></i>
                        </div>
                        <div class="info-content">
                            <p>O pace é uma métrica fundamental para corredores de todos os níveis, pois permite monitorar o esforço de forma mais precisa do que apenas a velocidade.</p>
                        </div>
                    </div>
                    
                    <div class="illustration">
                        <img src="https://via.placeholder.com/600x300/14191f/7fc9ff?text=Ilustração+de+Pace" alt="Ilustração conceitual de pace" class="responsive-img">
                    </div>
                </div>
            </div>
            
            <div class="card">
                <h2><i class="fas fa-chart-line"></i> Por que o Pace é Importante?</h2>
                <div class="card-content">
                    <p>O controle do pace é um dos fatores mais importantes para o sucesso em corridas de longa distância. Entender e aplicar estratégias baseadas no pace proporciona diversos benefícios:</p>
                    
                    <div class="benefits-grid">
                        <div class="benefit-card">
                            <div class="benefit-icon">
                                <i class="fas fa-tachometer-alt"></i>
                            </div>
                            <h3>Controle de Intensidade</h3>
                            <p>O pace ajuda a monitorar a intensidade do seu treino, permitindo que você mantenha o esforço adequado para cada tipo de corrida.</p>
                        </div>
                        
                        <div class="benefit-card">
                            <div class="benefit-icon">
                                <i class="fas fa-route"></i>
                            </div>
                            <h3>Planejamento de Provas</h3>
                            <p>Estabelecer metas de pace realistas para diferentes segmentos de uma corrida é essencial para alcançar seu melhor desempenho.</p>
                        </div>
                        
                        <div class="benefit-card">
                            <div class="benefit-icon">
                                <i class="fas fa-chart-bar"></i>
                            </div>
                            <h3>Acompanhamento de Evolução</h3>
                            <p>Monitorar seu pace ao longo do tempo é uma das melhores formas de acompanhar sua evolução como corredor.</p>
                        </div>
                        
                        <div class="benefit-card">
                            <div class="benefit-icon">
                                <i class="fas fa-medal"></i>
                            </div>
                            <h3>Estabelecimento de Metas</h3>
                            <p>Definir metas de pace específicas para treinos e provas torna seus objetivos mais concretos e mensuráveis.</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="card">
                <h2><i class="fas fa-calculator"></i> Como Calcular o Pace</h2>
                <div class="card-content">
                    <p>O cálculo do pace é bastante simples. A fórmula básica é:</p>
                    
                    <div class="formula-box">
                        <h3>Pace (min/km) = Tempo total (minutos) ÷ Distância (km)</h3>
                    </div>
                    
                    <h3>Exemplo prático:</h3>
                    <div class="example-box">
                        <p>Se você correu 5 km em 25 minutos:</p>
                        <div class="formula-box formula-box-secondary">
                            <p>25 minutos ÷ 5 km = 5 minutos/km</p>
                        </div>
                        <p>Seu pace é de 5:00 min/km.</p>
                    </div>
                    
                    <h3>Conversão entre unidades:</h3>
                    <p>Se você prefere trabalhar com milhas:</p>
                    <div class="formula-box formula-box-secondary">
                        <p>Pace (min/mi) = Pace (min/km) × 1,609</p>
                    </div>
                    <p>Assim, um pace de 5:00 min/km equivale a aproximadamente 8:03 min/mi.</p>
                </div>
            </div>
            
            <div class="card">
                <h2><i class="fas fa-heartbeat"></i> Pace e Zonas de Treinamento</h2>
                <div class="card-content">
                    <p>O pace pode ser categorizado em diferentes zonas de intensidade, cada uma com um propósito específico no treinamento:</p>
                    
                    <div class="table-container">
                        <table class="training-zones">
                            <thead>
                                <tr>
                                    <th>Zona</th>
                                    <th>Descrição</th>
                                    <th>% do Pace de Competição</th>
                                    <th>Benefício</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Recuperação</td>
                                    <td>Pace muito leve</td>
                                    <td>65-75%</td>
                                    <td>Recuperação ativa, melhora circulação</td>
                                </tr>
                                <tr>
                                    <td>Fácil</td>
                                    <td>Conversacional</td>
                                    <td>75-85%</td>
                                    <td>Base aeróbica, economia de corrida</td>
                                </tr>
                                <tr>
                                    <td>Moderado</td>
                                    <td>Ritmo constante</td>
                                    <td>85-90%</td>
                                    <td>Resistência aeróbica</td>
                                </tr>
                                <tr>
                                    <td>Limiar</td>
                                    <td>Desafiador, sustentável</td>
                                    <td>90-100%</td>
                                    <td>Aumenta limiar anaeróbico</td>
                                </tr>
                                <tr>
                                    <td>Intervalos</td>
                                    <td>Alta intensidade</td>
                                    <td>100-110%</td>
                                    <td>VO2max, potência</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    
                    <p class="note">Nota: Estas porcentagens são aproximadas e podem variar de acordo com a metodologia de treinamento e características individuais.</p>
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
