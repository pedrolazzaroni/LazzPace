document.addEventListener('DOMContentLoaded', function() {
    // Theme switcher functionality
    const themeSwitch = document.querySelector('.theme-switch input');
    
    // Check for saved theme preference or preferred color scheme
    const currentTheme = localStorage.getItem('theme') || 
                        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    
    // Apply saved theme on page load
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-theme');
        themeSwitch.checked = true;
    }
    
    // Listen for toggle changes
    if (themeSwitch) {
        themeSwitch.addEventListener('change', function() {
            if (this.checked) {
                document.body.classList.add('dark-theme');
                localStorage.setItem('theme', 'dark');
            } else {
                document.body.classList.remove('dark-theme');
                localStorage.setItem('theme', 'light');
            }
        });
    }
    
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('show');
        });
    }
    
    // Input animations
    const inputs = document.querySelectorAll('.animated-input');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', function() {
            if (this.value === '') {
                this.parentElement.classList.remove('focused');
            }
        });
        
        // Check if input already has a value
        if (input.value !== '') {
            input.parentElement.classList.add('focused');
        }
    });
    
    // Calculator functionality
    const calcType = document.getElementById('calc-type');
    const timeInputs = document.getElementById('time-inputs');
    const distanceInput = document.getElementById('distance-input');
    const paceInputs = document.getElementById('pace-inputs');
    const calculateBtn = document.getElementById('calculate-btn');
    const resultCard = document.getElementById('result-card');
    
    if (calcType) {
        calcType.addEventListener('change', updateInputVisibility);
        
        function updateInputVisibility() {
            const selectedValue = calcType.value;
            
            if (selectedValue === 'pace') {
                timeInputs.style.display = 'flex';
                distanceInput.style.display = 'block';
                paceInputs.style.display = 'none';
            } else if (selectedValue === 'time') {
                timeInputs.style.display = 'none';
                distanceInput.style.display = 'block';
                paceInputs.style.display = 'block';
            } else if (selectedValue === 'distance') {
                timeInputs.style.display = 'flex';
                distanceInput.style.display = 'none';
                paceInputs.style.display = 'block';
            }
        }
    }
    
    // Quick calculator functionality
    const quickDistance = document.getElementById('quick-distance');
    const quickMinutes = document.getElementById('quick-minutes');
    const quickSeconds = document.getElementById('quick-seconds');
    const quickCalculateBtn = document.getElementById('quick-calculate-btn');
    const quickResult = document.getElementById('quick-result');
    const quickPaceResult = document.getElementById('quick-pace-result');
    
    if (quickCalculateBtn) {
        quickCalculateBtn.addEventListener('click', function() {
            const distance = parseFloat(quickDistance.value) || 0;
            const minutes = parseInt(quickMinutes.value) || 0;
            const seconds = parseInt(quickSeconds.value) || 0;
            
            if (distance <= 0) {
                alert('Por favor, informe uma distância válida.');
                return;
            }
            
            if (minutes === 0 && seconds === 0) {
                alert('Por favor, informe um tempo válido.');
                return;
            }
            
            const totalSeconds = (minutes * 60) + seconds;
            const paceSeconds = totalSeconds / distance;
            const paceMinutes = Math.floor(paceSeconds / 60);
            const paceRemainingSeconds = Math.round(paceSeconds % 60);
            
            const formattedPace = `${paceMinutes}:${paceRemainingSeconds.toString().padStart(2, '0')}`;
            
            quickPaceResult.textContent = formattedPace;
            quickResult.style.display = 'block';
            
            // Animate the result
            quickResult.classList.add('fade-in');
            setTimeout(() => {
                quickResult.classList.remove('fade-in');
            }, 1000);
        });
    }
    
    // Main calculator functionality
    if (calculateBtn) {
        calculateBtn.addEventListener('click', function() {
            const selectedValue = calcType.value;
            let result, resultLabel;
            
            if (selectedValue === 'pace') {
                const hours = parseInt(document.getElementById('hours').value) || 0;
                const minutes = parseInt(document.getElementById('minutes').value) || 0;
                const seconds = parseInt(document.getElementById('seconds').value) || 0;
                const distance = parseFloat(document.getElementById('distance').value) || 0;
                
                if (distance <= 0) {
                    alert('Por favor, informe uma distância válida.');
                    return;
                }
                
                if (hours === 0 && minutes === 0 && seconds === 0) {
                    alert('Por favor, informe um tempo válido.');
                    return;
                }
                
                const totalSeconds = (hours * 3600) + (minutes * 60) + seconds;
                const paceSeconds = totalSeconds / distance;
                const paceMinutes = Math.floor(paceSeconds / 60);
                const paceRemainingSeconds = Math.round(paceSeconds % 60);
                
                result = `${paceMinutes}:${paceRemainingSeconds.toString().padStart(2, '0')}`;
                resultLabel = 'Pace (min/km)';
                
                // Calculate equivalents for different distances
                calculateEquivalents(paceSeconds);
                
            } else if (selectedValue === 'time') {
                const paceMinutes = parseInt(document.getElementById('pace-minutes').value) || 0;
                const paceSeconds = parseInt(document.getElementById('pace-seconds').value) || 0;
                const distance = parseFloat(document.getElementById('distance').value) || 0;
                
                if (distance <= 0) {
                    alert('Por favor, informe uma distância válida.');
                    return;
                }
                
                if (paceMinutes === 0 && paceSeconds === 0) {
                    alert('Por favor, informe um pace válido.');
                    return;
                }
                
                const paceInSeconds = (paceMinutes * 60) + paceSeconds;
                const totalSeconds = paceInSeconds * distance;
                
                const hours = Math.floor(totalSeconds / 3600);
                const remainingMinutes = Math.floor((totalSeconds % 3600) / 60);
                const remainingSeconds = Math.round(totalSeconds % 60);
                
                result = `${hours.toString().padStart(2, '0')}:${remainingMinutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
                resultLabel = 'Tempo Total';
                
                // Calculate equivalents for different distances
                calculateEquivalents(paceInSeconds);
                
            } else if (selectedValue === 'distance') {
                const hours = parseInt(document.getElementById('hours').value) || 0;
                const minutes = parseInt(document.getElementById('minutes').value) || 0;
                const seconds = parseInt(document.getElementById('seconds').value) || 0;
                const paceMinutes = parseInt(document.getElementById('pace-minutes').value) || 0;
                const paceSeconds = parseInt(document.getElementById('pace-seconds').value) || 0;
                
                if (paceMinutes === 0 && paceSeconds === 0) {
                    alert('Por favor, informe um pace válido.');
                    return;
                }
                
                if (hours === 0 && minutes === 0 && seconds === 0) {
                    alert('Por favor, informe um tempo válido.');
                    return;
                }
                
                const totalSeconds = (hours * 3600) + (minutes * 60) + seconds;
                const paceInSeconds = (paceMinutes * 60) + paceSeconds;
                const distance = totalSeconds / paceInSeconds;
                
                result = distance.toFixed(2);
                resultLabel = 'Distância (km)';
                
                // Calculate equivalents for different distances
                calculateEquivalents(paceInSeconds);
            }
            
            document.getElementById('result-value').textContent = result;
            document.getElementById('result-label').textContent = resultLabel;
            resultCard.style.display = 'block';
            
            // Scroll to result
            resultCard.scrollIntoView({ behavior: 'smooth' });
            
            // Add animation class
            resultCard.classList.add('fade-in');
            setTimeout(() => {
                resultCard.classList.remove('fade-in');
            }, 1000);
        });
    }
    
    function calculateEquivalents(paceInSeconds) {
        // Calculate time for standard distances using the pace
        const fiveK = formatTime(5 * paceInSeconds);
        const tenK = formatTime(10 * paceInSeconds);
        const halfMarathon = formatTime(21.0975 * paceInSeconds);
        const marathon = formatTime(42.195 * paceInSeconds);
        
        document.getElementById('equiv-5k').textContent = fiveK;
        document.getElementById('equiv-10k').textContent = tenK;
        document.getElementById('equiv-half').textContent = halfMarathon;
        document.getElementById('equiv-full').textContent = marathon;
    }
    
    function formatTime(totalSeconds) {
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = Math.round(totalSeconds % 60);
        
        if (hours > 0) {
            return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        } else {
            return `${minutes}:${seconds.toString().padStart(2, '0')}`;
        }
    }
    
    // Generate pace table (for tables page)
    const paceTableBody = document.getElementById('pace-table-body');
    
    if (paceTableBody) {
        generatePaceTable();
    }
    
    function generatePaceTable() {
        const paces = [];
        
        // Generate paces from 3:00 to 8:00 min/km
        for (let min = 3; min <= 8; min++) {
            for (let sec = 0; sec < 60; sec += 30) {
                paces.push({ minutes: min, seconds: sec });
            }
        }
        
        paces.forEach(pace => {
            const paceInSeconds = (pace.minutes * 60) + pace.seconds;
            const formattedPace = `${pace.minutes}:${pace.seconds.toString().padStart(2, '0')}`;
            
            const oneKm = formatTime(paceInSeconds);
            const fiveKm = formatTime(5 * paceInSeconds);
            const tenKm = formatTime(10 * paceInSeconds);
            const halfMarathon = formatTime(21.0975 * paceInSeconds);
            const marathon = formatTime(42.195 * paceInSeconds);
            
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${formattedPace}</td>
                <td>${oneKm}</td>
                <td>${fiveKm}</td>
                <td>${tenKm}</td>
                <td>${halfMarathon}</td>
                <td>${marathon}</td>
            `;
            
            paceTableBody.appendChild(row);
        });
    }
    
    // Tabs functionality
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.getAttribute('data-tab');
            
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to selected button and content
            button.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });
});
