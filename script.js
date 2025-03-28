document.addEventListener('DOMContentLoaded', function() {
    // Elementos da UI
    const calcType = document.getElementById('calc-type');
    const timeInputs = document.getElementById('time-inputs');
    const distanceInput = document.getElementById('distance-input');
    const paceInputs = document.getElementById('pace-inputs');
    const calculateBtn = document.getElementById('calculate-btn');
    const resultCard = document.getElementById('result-card');
    const resultValue = document.getElementById('result-value');
    const resultLabel = document.getElementById('result-label');
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    // Elementos para resultados extras
    const equiv5k = document.getElementById('equiv-5k');
    const equiv10k = document.getElementById('equiv-10k');
    const equivHalf = document.getElementById('equiv-half');
    const equivFull = document.getElementById('equiv-full');

    // Gerando tabela de referência
    const paceTableBody = document.getElementById('pace-table-body');
    
    // Navegação por abas
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            btn.classList.add('active');
            const tabId = btn.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });

    // Mudança de tipo de cálculo
    calcType.addEventListener('change', function() {
        const selectedValue = this.value;
        
        timeInputs.style.display = selectedValue !== 'time' ? 'flex' : 'none';
        distanceInput.style.display = selectedValue !== 'distance' ? 'block' : 'none';
        paceInputs.style.display = selectedValue !== 'pace' ? 'none' : 'block';
        
        // Ajustar label de resultado
        if (selectedValue === 'pace') {
            resultLabel.textContent = 'Pace (min/km)';
        } else if (selectedValue === 'time') {
            resultLabel.textContent = 'Tempo Total';
        } else {
            resultLabel.textContent = 'Distância (km)';
        }
    });

    // Botão de cálculo
    calculateBtn.addEventListener('click', function() {
        const calcTypeValue = calcType.value;
        const hours = parseInt(document.getElementById('hours').value) || 0;
        const minutes = parseInt(document.getElementById('minutes').value) || 0;
        const seconds = parseInt(document.getElementById('seconds').value) || 0;
        const distance = parseFloat(document.getElementById('distance').value) || 0;
        const paceMinutes = parseInt(document.getElementById('pace-minutes').value) || 0;
        const paceSeconds = parseInt(document.getElementById('pace-seconds').value) || 0;
        
        // Validações básicas
        if (calcTypeValue === 'pace' && distance <= 0) {
            alert('Por favor, insira uma distância válida.');
            return;
        }
        
        if (calcTypeValue === 'time' && (distance <= 0 || (paceMinutes === 0 && paceSeconds === 0))) {
            alert('Por favor, insira valores válidos para distância e pace.');
            return;
        }
        
        if (calcTypeValue === 'distance' && (hours === 0 && minutes === 0 && seconds === 0) || 
            (paceMinutes === 0 && paceSeconds === 0)) {
            alert('Por favor, insira valores válidos para tempo e pace.');
            return;
        }
        
        // Cálculos
        let result;
        let paceInSeconds;
        
        if (calcTypeValue === 'pace') {
            const totalTimeInSeconds = hours * 3600 + minutes * 60 + seconds;
            if (totalTimeInSeconds === 0) {
                alert('Por favor, insira um tempo válido.');
                return;
            }
            
            paceInSeconds = totalTimeInSeconds / distance;
            result = formatTime(paceInSeconds);
            resultValue.textContent = result;
            
            // Atualizar outros equivalentes
            updateEquivalents(paceInSeconds);
        } 
        else if (calcTypeValue === 'time') {
            paceInSeconds = paceMinutes * 60 + paceSeconds;
            const totalTimeInSeconds = distance * paceInSeconds;
            result = formatTime(totalTimeInSeconds, true);
            resultValue.textContent = result;
            
            // Atualizar outros equivalentes
            updateEquivalents(paceInSeconds);
        } 
        else { // distance
            const totalTimeInSeconds = hours * 3600 + minutes * 60 + seconds;
            paceInSeconds = paceMinutes * 60 + paceSeconds;
            
            if (paceInSeconds === 0) {
                alert('Por favor, insira um pace válido.');
                return;
            }
            
            result = (totalTimeInSeconds / paceInSeconds).toFixed(2);
            resultValue.textContent = result + ' km';
            
            // Atualizar outros equivalentes
            updateEquivalents(paceInSeconds);
        }
        
        // Mostrar resultado
        resultCard.style.display = 'block';
    });

    // Função para formatar tempo em min:seg ou h:min:seg
    function formatTime(seconds, includeHours = false) {
        seconds = Math.round(seconds);
        
        if (includeHours || seconds >= 3600) {
            const hours = Math.floor(seconds / 3600);
            const minutes = Math.floor((seconds % 3600) / 60);
            const secs = seconds % 60;
            return `${hours}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
        } else {
            const minutes = Math.floor(seconds / 60);
            const secs = seconds % 60;
            return `${minutes}:${secs.toString().padStart(2, '0')}`;
        }
    }

    // Atualizar equivalentes de pace
    function updateEquivalents(paceInSeconds) {
        equiv5k.textContent = formatTime(5 * paceInSeconds, true);
        equiv10k.textContent = formatTime(10 * paceInSeconds, true);
        equivHalf.textContent = formatTime(21.0975 * paceInSeconds, true);
        equivFull.textContent = formatTime(42.195 * paceInSeconds, true);
    }

    // Gerar tabela de referência
    function generatePaceTable() {
        let html = '';
        const paces = [
            { pace: '4:00', seconds: 240 },
            { pace: '4:30', seconds: 270 },
            { pace: '5:00', seconds: 300 },
            { pace: '5:30', seconds: 330 },
            { pace: '6:00', seconds: 360 },
            { pace: '6:30', seconds: 390 },
            { pace: '7:00', seconds: 420 },
            { pace: '7:30', seconds: 450 },
            { pace: '8:00', seconds: 480 }
        ];

        paces.forEach(p => {
            html += `<tr>
                <td>${p.pace}</td>
                <td>${formatTime(p.seconds)}</td>
                <td>${formatTime(5 * p.seconds, true)}</td>
                <td>${formatTime(10 * p.seconds, true)}</td>
                <td>${formatTime(21.0975 * p.seconds, true)}</td>
                <td>${formatTime(42.195 * p.seconds, true)}</td>
            </tr>`;
        });

        paceTableBody.innerHTML = html;
    }

    // Inicializar
    generatePaceTable();
});
