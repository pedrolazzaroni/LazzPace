/**
 * Script de depuração para o LazzPace
 * Ajuda a identificar problemas de carregamento e renderização
 */
(function() {
    // Verificar se os elementos principais existem
    console.log('Verificando elementos críticos:');
    console.log('- #main-content:', document.getElementById('main-content') ? 'OK' : 'NÃO ENCONTRADO');
    console.log('- #home-content:', document.getElementById('home-content') ? 'OK' : 'NÃO ENCONTRADO');
    
    // Verificar caminho dos partials
    const partialsPaths = ['calculator', 'tables', 'about', 'tips'];
    
    // Testar acesso aos partials
    console.log('Tentando carregar partials:');
    partialsPaths.forEach(path => {
        fetch(`partials/${path}.html`)
            .then(response => {
                console.log(`- partials/${path}.html: ${response.status === 200 ? 'OK' : 'FALHA (' + response.status + ')'}`);
            })
            .catch(error => {
                console.error(`- partials/${path}.html: ERRO DE REDE`, error);
            });
    });
    
    // Adicionar ao index.php no final, logo antes de </body>:
    // <script src="debug.js"></script>
})();
