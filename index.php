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
                <li><a href="#home" data-page="home" class="nav-link active"><i class="fas fa-home"></i> Home</a></li>
                <li><a href="#calculator" data-page="calculator" class="nav-link"><i class="fas fa-calculator"></i> Calculadora</a></li>
                <li><a href="#tables" data-page="tables" class="nav-link"><i class="fas fa-table"></i> Tabelas</a></li>
                <li><a href="#about" data-page="about" class="nav-link"><i class="fas fa-info-circle"></i> Sobre Pace</a></li>
                <li><a href="#tips" data-page="tips" class="nav-link"><i class="fas fa-lightbulb"></i> Dicas</a></li>
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
    <div id="main-content" class="page-content">
        
        <!-- HOME PAGE -->
        <div id="home" class="content-section active">
            <header class="page-header home-header">
                <div class="container">
                    <h1>Bem-vindo ao LazzPace</h1>
                    <p>Sua ferramenta completa para cálculo e controle do ritmo de corrida</p>
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
                            <a href="#calculator" data-page="calculator" class="card-link nav-link">Usar calculadora <i class="fas fa-arrow-right"></i></a>
                        </div>
                        
                        <div class="feature-card">
                            <div class="card-icon"><i class="fas fa-table"></i></div>
                            <h3>Tabelas de Referência</h3>
                            <p>Consulte tempos estimados para diversas distâncias baseados no seu pace.</p>
                            <a href="#tables" data-page="tables" class="card-link nav-link">Ver tabelas <i class="fas fa-arrow-right"></i></a>
                        </div>
                        
                        <div class="feature-card">
                            <div class="card-icon"><i class="fas fa-running"></i></div>
                            <h3>Dicas Profissionais</h3>
                            <p>Aprenda a melhorar seu desempenho com dicas de especialistas.</p>
                            <a href="#tips" data-page="tips" class="card-link nav-link">Ver dicas <i class="fas fa-arrow-right"></i></a>
                        </div>
                    </div>
                </section>
            </main>
        </div>

        <!-- CALCULATOR PAGE -->
        <div id="calculator" class="content-section">
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
        </div>

        <!-- TABLES PAGE -->
        <div id="tables" class="content-section">
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
        </div>

        <!-- ABOUT PAGE -->
        <div id="about" class="content-section">
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
        </div>

        <!-- TIPS PAGE -->
        <div id="tips" class="content-section">
            <header class="page-header">
                <div class="container">
                    <h1>Dicas para Melhorar seu Pace</h1>
                    <p>Estratégias e técnicas para aumentar seu desempenho na corrida</p>
                </div>
            </header>

            <main class="container">
                <section class="tips-section">
                    <div class="tips-intro card">
                        <h2><i class="fas fa-lightbulb"></i> Como Melhorar seu Ritmo</h2>
                        <p>Melhorar seu pace de corrida requer uma abordagem metódica e consistente. As dicas a seguir foram selecionadas com base em evidências científicas e experiência prática de treinadores e atletas.</p>
                        <p>Lembre-se que a progressão deve ser gradual para evitar lesões e permitir que seu corpo se adapte adequadamente.</p>
                    </div>
                    
                    <div class="tips-grid">
                        <div class="tip-card">
                            <div class="tip-header">
                                <div class="tip-icon"><i class="fas fa-running"></i></div>
                                <h3>Treinos Intervalados</h3>
                            </div>
                            <div class="tip-content">
                                <p>Alterne entre períodos de alta intensidade e recuperação para desenvolver tanto sua potência quanto resistência.</p>
                                
                                <div class="tip-example">
                                    <h4>Exemplo de treino:</h4>
                                    <ul>
                                        <li>Aquecimento: 10 minutos de corrida leve</li>
                                        <li>8-10 repetições de 400m em ritmo forte</li>
                                        <li>200m de recuperação entre cada repetição</li>
                                        <li>Volta à calma: 10 minutos de corrida leve</li>
                                    </ul>
                                </div>
                                
                                <div class="tip-benefits">
                                    <h4>Benefícios:</h4>
                                    <ul>
                                        <li>Aumenta o VO2max (consumo máximo de oxigênio)</li>
                                        <li>Melhora a tolerância ao lactato</li>
                                        <li>Desenvolve força muscular específica</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                        <div class="tip-card">
                            <div class="tip-header">
                                <div class="tip-icon"><i class="fas fa-heartbeat"></i></div>
                                <h3>Treinamento em Zonas</h3>
                            </div>
                            <div class="tip-content">
                                <p>Estruture seus treinos com base nas zonas de frequência cardíaca para otimizar cada sessão de acordo com seu objetivo específico.</p>
                                
                                <div class="tip-example">
                                    <h4>Distribuição recomendada:</h4>
                                    <ul>
                                        <li>80% dos treinos em intensidade baixa (Zonas 1-2)</li>
                                        <li>20% dos treinos em intensidade alta (Zonas 4-5)</li>
                                        <li>Evite a "zona cinzenta" (Zona 3) constantemente</li>
                                    </ul>
                                </div>
                                
                                <div class="tip-benefits">
                                    <h4>Benefícios:</h4>
                                    <ul>
                                        <li>Evita sobrecarga e burnout</li>
                                        <li>Maximiza adaptações específicas</li>
                                        <li>Permite recuperação adequada</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                        <!-- ...restante dos tip-cards... -->
                    </div>
                    
                    <section class="common-mistakes">
                        <div class="card">
                            <h2><i class="fas fa-exclamation-triangle"></i> Erros Comuns a Evitar</h2>
                            
                            <div class="mistakes-container">
                                <div class="mistake-item">
                                    <div class="mistake-icon">
                                        <i class="fas fa-bolt"></i>
                                    </div>
                                    <div class="mistake-content">
                                        <h3>Começar Rápido Demais</h3>
                                        <p>Iniciar uma corrida em ritmo muito mais rápido do que você consegue manter leva à fadiga prematura. Comece conservador e acelere gradualmente.</p>
                                    </div>
                                </div>
                                
                                <!-- ...restante dos mistake-items... -->
                            </div>
                        </div>
                    </section>
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
                        <li><a href="#calculator" data-page="calculator" class="nav-link">Calculadora de Pace</a></li>
                        <li><a href="#tables" data-page="tables" class="nav-link">Tabelas de Referência</a></li>
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
