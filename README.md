# LazzPace

LazzPace é uma aplicação web SPA (Single Page Application) para cálculo de pace, tempo e distância em corridas, além de fornecer dicas, tabelas e informações úteis para corredores de todos os níveis.

## Funcionalidades

- **Calculadora de Pace**: Calcule seu pace, tempo ou distância facilmente.
- **Cálculo Rápido**: Mini calculadora na home para consultas rápidas.
- **Dicas Profissionais**: Seção com dicas práticas para melhorar seu desempenho.
- **Tabela de Zonas de Treinamento**: Entenda as zonas de intensidade e seus benefícios.
- **Tabela Dinâmica de Ritmos**: Veja tempos equivalentes para diferentes distâncias e paces.
- **Design Responsivo**: Visual moderno, adaptado para desktop e mobile.
- **Tema Claro/Escuro**: Alternância automática ou manual entre temas.
- **SPA com Animações**: Transições suaves entre páginas sem recarregar.

## Estrutura do Projeto

- `index.php` — Página principal, carrega o SPA e os partials.
- `partials/` — Contém os arquivos HTML parciais de cada página (home, calculator, about, tips, etc).
- `styles.css` — Estilos principais do site, incluindo responsividade e temas.
- `app.js` — Lógica SPA, navegação, animações e inicialização de páginas.
- `script.js` — Scripts auxiliares para animações, tabelas e funcionalidades extras.
- `.htaccess` — Otimizações de cache, compressão e CORS (para servidores Apache).
- `assets/` — Imagens, ícones e outros recursos estáticos.

## Como rodar localmente

1. Clone ou copie o projeto para sua pasta do servidor local (ex: `htdocs` do XAMPP).
2. Certifique-se de que o Apache está rodando.
3. Acesse `http://localhost/LazzPace` no navegador.

## Observações
- O projeto é 100% front-end, não requer banco de dados.
- O arquivo `.htaccess` é opcional, mas recomendado para melhor performance e funcionamento de requisições AJAX.
- Para editar dicas, tabelas ou textos, altere os arquivos em `partials/`.

## Autor
Pedro Lazzaroni — [LinkedIn](https://linkedin.com/in/pedrolazzaroni) | [GitHub](https://github.com/pedrolazzaroni)

---
Sinta-se à vontade para sugerir melhorias ou reportar bugs!
