# Image Optimizer Pro 🍃

Um compressor e conversor de imagens online, ultra-rápido, 100% gratuito e seguro. Reduza o tamanho de ficheiros JPG e PNG, ou converta-os para WebP, tudo diretamente no seu navegador. Nenhuma imagem é enviada para os nossos servidores, garantindo total privacidade!

## 🚀 Principais Funcionalidades

- **100% Client-Side:** Todo o processamento (compressão/conversão) acontece no navegador usando a biblioteca `browser-image-compression`.
- **Privacidade Máxima:** Sem uploads para servidores. Os seus ficheiros nunca saem da sua máquina.
- **Conversão para WebP:** O formato recomendado pela Google para um melhor Web Performance e SEO (ficheiros tipicamente 25-34% menores).
- **Controlo Total:** Slider de qualidade e seletor para formato de saída (JPG ou WebP).
- **Comparação Antes / Depois:** Pré-visualização com comparação direta dos tamanhos e respetiva percentagem de redução.
- **Design Minimalista:** Interface moderna, limpa e responsiva desenhada com Tailwind CSS.
- **Monetização Otimizada:** Preparado para Google AdSense com espaços específicos reservados no layout e estratégias de retenção de visualização.
- **Progressive Web App (PWA):** Instale a ferramenta como uma aplicação no seu telemóvel Android/iOS ou PC (inclui `manifest.json` e `sw.js`).
- **Nenhum Registo Necessário:** Acesso imediato à ferramenta!

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído para ser incrivelmente leve e fácil de hospedar, sem necessidade de servidores back-end ou processos de *build*:

- **HTML5 & Vanilla JavaScript:** Sem frameworks pesados para carregar rapidamente.
- **[Tailwind CSS](https://tailwindcss.com/) (CDN):** Para estilização e layout moderno e totalmente responsivo.
- **[Browser Image Compression](https://github.com/Donaldcwl/browser-image-compression):** Biblioteca poderosa que usa a API Web Worker e Canvas para otimizar imagens localmente.
- **FontAwesome (CDN):** Para os ícones vetoriais em todo o site.

## 📥 Como Utilizar e Testar Localmente

A melhor parte deste projeto é poder ser executado a partir de qualquer pasta no seu computador sem necessitar sequer de um servidor (embora seja o recomendado).

1. Clone o repositório:
   ```bash
   git clone https://github.com/Logic-Labs-Studios/ImageOptimizerPro.git
   ```
2. Abra a pasta do projeto:
   ```bash
   cd ImageOptimizerPro
   ```
3. Abra o ficheiro `index.html` no seu navegador preferido e está pronto a usar!
   *(Para testar as funcionalidades de PWA, é recomendado iniciar o projeto usando um servidor web local como o `Live Server` do VSCode ou `npx http-server`)*.

## 💰 Configuração do Google AdSense

O código fonte já inclui blocos dedicados para monetização. Para ativar os anúncios, edite o ficheiro `index.html`:
1. Procure pelas secções comentadas com `[AdSense ...]`.
2. Substitua o texto "Inserir Código Aqui" pelo código do bloco de anúncio correspondente criado na sua conta do Google AdSense.

## 🌐 Deploy Grátis e Fácil (GitHub Pages / Vercel / Netlify)

Por se tratar puramente de "HTML estático" (*Static Site*), o alojamento deste projeto é simples e pode ser efetuado gratuitamente através do GitHub.

### Usando o GitHub Pages:
1. No seu repositório GitHub aceda ao separador **Settings** > **Pages** na barra esquerda.
2. Em **Build and deployment**, sob *Source*, garanta que "Deploy from a branch" está selecionado.
3. Escolha a *Branch* `main` e a pasta `/(root)`.
4. Clique em **Save**. Num par de minutos a ferramenta estará online gratuitamente num URL do tipo `https://A_Sua_Organizacao.github.io/ImageOptimizerPro/`.

## 🤝 Contribuições

Este projeto está no início e as contribuições são extremamente bem-vindas! Sinta-se confortável para realizar _forks_, submeter _pull requests_ ou abrir _issues_ com as suas sugestões de melhorias.

---
Desenvolvido por **Logic Labs Studios**.
