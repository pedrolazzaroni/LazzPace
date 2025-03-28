<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LazzPace - Calculadora de Pace</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css">
</head>
<body>
    <header>
        <div class="container">
            <h1><span class="highlight">Lazz</span>Pace</h1>
            <p>Calcule e entenda o seu ritmo de corrida</p>
        </div>
    </header>

    <main class="container">
        <nav class="tabs">
            <button class="tab-btn active" data-tab="calculator">Calculadora</button>
            <button class="tab-btn" data-tab="tables">Tabelas</button>
            <button class="tab-btn" data-tab="about">Sobre Pace</button>
            <button class="tab-btn" data-tab="tips">Dicas</button>
        </nav>

        <div class="content">
            <!-- Calculadora Tab -->
            <div class="tab-content active" id="calculator">
                <div class="card">
                    <h2>Calculadora de Pace</h2>
                    <form id="pace-calculator">
                        <div class="form-group">
                            <label for="calc-type">O que deseja calcular?</label>
                            <select id="calc-type">
                                <option value="pace">Pace (min/km)</option>
                                <option value="time">Tempo total</option>
                                <option value="distance">Distância</option>
                            </select>
                        </div>

                        <div class="form-row" id="time-inputs">
                            <div class="form-group">
                                <label for="hours">Horas</label>
                                <input type="number" id="hours" min="0" value="0">
                            </div>
                            <div class="form-group">
                                <label for="minutes">Minutos</label>
                                <input type="number" id="minutes" min="0" max="59" value="0">
                            </div>
                            <div class="form-group">
                                <label for="seconds">Segundos</label>
                                <input type="number" id="seconds" min="0" max="59" value="0">
                            </div>
                        </div>

                        <div class="form-group" id="distance-input">
                            <label for="distance">Distância (km)</label>
                            <input type="number" id="distance" min="0" step="0.01" value="0">
                        </div>

                        <div class="form-group" id="pace-inputs" style="display: none;">
                            <label for="pace-minutes">Pace (min:seg por km)</label>
                            <div class="form-row">
                                <input type="number" id="pace-minutes" min="0" max="59" value="0" placeholder="min">
                                <span>:</span>
                                <input type="number" id="pace-seconds" min="0" max="59" value="0" placeholder="seg">
                            </div>
                        </div>

                        <button type="button" id="calculate-btn">Calcular</button>
                    </form>
                </div>

                <div class="card" id="result-card" style="display: none;">
                    <h2>Resultado</h2>
                    <div class="result-container">
                        <div id="result-value" class="result-value">--:--</div>
                        <div id="result-label" class="result-label">Pace (min/km)</div>
                    </div>
                    <div class="result-extras">
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

            <!-- Tabelas Tab -->
            <div class="tab-content" id="tables">
                <div class="card">
                    <h2>Tabela de Referência de Pace</h2>
                    <p>Consulte o tempo estimado para diferentes distâncias baseado no pace.</p>
                    
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
            </div>

            <!-- Sobre Pace Tab -->
            <div class="tab-content" id="about">
                <div class="card">
                    <h2>O que é Pace?</h2>
                    <p>Pace é o tempo que você leva para percorrer uma unidade de distância, geralmente medido em minutos por quilômetro (min/km) ou minutos por milha (min/mi).</p>
                    
                    <div class="info-section">
                        <h3>Por que o Pace é importante?</h3>
                        <p>O pace ajuda os corredores a:</p>
                        <ul>
                            <li>Monitorar a intensidade do treino</li>
                            <li>Planejar corridas de longa distância</li>
                            <li>Estabelecer metas realistas para provas</li>
                            <li>Acompanhar a evolução do condicionamento físico</li>
                        </ul>
                    </div>
                    
                    <div class="info-section">
                        <h3>Como calcular o Pace</h3>
                        <p>A fórmula básica é:</p>
                        <div class="formula">
                            <p>Pace (min/km) = Tempo total (minutos) ÷ Distância (km)</p>
                        </div>
                        <p>Por exemplo, se você correu 5 km em 25 minutos, seu pace é:</p>
                        <div class="formula">
                            <p>25 minutos ÷ 5 km = 5 minutos/km</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Dicas Tab -->
            <div class="tab-content" id="tips">
                <div class="card">
                    <h2>Dicas para Melhorar seu Pace</h2>
                    
                    <div class="tip-card">
                        <div class="tip-icon"><i class="fas fa-running"></i></div>
                        <div class="tip-content">
                            <h3>Treinos Intervalados</h3>
                            <p>Alterne entre períodos de alta intensidade e recuperação. Por exemplo, corra 400m em ritmo forte, seguido por 200m de caminhada ou corrida leve.</p>
                        </div>
                    </div>
                    
                    <div class="tip-card">
                        <div class="tip-icon"><i class="fas fa-dumbbell"></i></div>
                        <div class="tip-content">
                            <h3>Fortaleça o Core</h3>
                            <p>Um core forte melhora a estabilidade e eficiência da corrida, permitindo manter o pace por mais tempo sem fadiga.</p>
                        </div>
                    </div>
                    
                    <div class="tip-card">
                        <div class="tip-icon"><i class="fas fa-heartbeat"></i></div>
                        <div class="tip-content">
                            <h3>Treinamento em Zonas</h3>
                            <p>Conheça suas zonas de frequência cardíaca para otimizar os treinos. Nem todo treino deve ser feito no limite máximo.</p>
                        </div>
                    </div>
                    
                    <div class="tip-card">
                        <div class="tip-icon"><i class="fas fa-stopwatch"></i></div>
                        <div class="tip-content">
                            <h3>Controle de Ritmo</h3>
                            <p>Pratique manter um pace constante. É comum corredores iniciarem muito rápido e perderem desempenho no final.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>

    <footer>
        <div class="container">
            <p>&copy; <?php echo date('Y') ?> LazzPace - Calculadora de Pace para Corredores</p>
        </div>
    </footer>

    <script src="script.js"></script>
</body>
</html>
