const translations = {
    pt: {
        "nav_how": "Como Funciona",
        "nav_tools": "Ferramentas",
        "nav_faq": "FAQ",
        "nav_privacy": "Privacidade",
        "hero_title": "Otimizador de Imagens Online: <br class=\"hidden md:block\"/><span class=\"text-brand-primary\">Rápido, Grátis e Seguro</span>",
        "hero_sub": "Reduza o tamanho, converta formatos, remova EXIF ou corte fotos instantaneamente. Tudo 100% processado no seu navegador.",
        
        // Tabs
        "tab_compressor": "Compressor",
        "tab_converter": "Converter",
        "tab_exif": "EXIF",
        "tab_utils": "Utilitários",

        // E-E-A-T Pages Navigation
        "nav_about": "Sobre Nós",
        "nav_contact": "Contactos",

        // Compressor Panel
        "comp_drop": "Arraste e largue a sua imagem aqui",
        "comp_click": "ou clique para escolher um ficheiro",
        "comp_support": "Suporta JPG, PNG, WebP (Máx: 20MB)",
        "comp_btn_select": "Selecionar Imagem",
        "comp_processing": "A processar imagem...",
        "comp_proc_msg": "A iniciar o motor de compressão...",
        "comp_did_you_know": "Sabia que?",
        "comp_tip": "Imagens otimizadas podem acelerar o seu site em mais de 40%.",
        "comp_ready": "Imagem Pronta!",
        "comp_new": "Carregar nova imagem",
        "comp_preview": "Pré-visualização",
        "comp_badge": "Otimizada",
        "comp_original": "Original",
        "comp_optimized": "Otimizada",
        "comp_format": "Formato de Saída",
        "comp_quality": "Qualidade",
        "comp_size_small": "Menor tamanho",
        "comp_size_best": "Melhor qualidade",
        "comp_download": "Descarregar Imagem",

        // Converter Panel
        "conv_drop": "Arraste a imagem para converter",
        "conv_support": "HEIC, JPG, PNG, WebP, GIF, BMP, TIFF, AVIF, ICO",
        "conv_btn_select": "Selecionar Ficheiro",
        "conv_processing": "A converter imagem...",
        "conv_proc_msg": "Isto pode demorar alguns segundos em ficheiros grandes.",
        "conv_ready": "Pronto a Converter!",
        "conv_new": "Novo ficheiro",
        "conv_preview": "Pré-visualização",
        "conv_format": "Formato de Saída",
        "conv_quality": "Qualidade",
        "conv_download": "Converter e Descarregar",

        // EXIF Panel
        "exif_drop": "Inspecionar ou Limpar Dados EXIF",
        "exif_support": "JPG, PNG, WEBP, HEIC, MP4, MOV, PDF",
        "exif_btn_select": "Selecionar Ficheiro",
        "exif_ready": "Análise Concluída",
        "exif_new": "Novo Ficheiro",
        "exif_prop": "Propriedade",
        "exif_val": "Valor",
        "exif_clean": "Limpar Dados Originais",
        "exif_clean_note": "As imagens serão re-exportadas para remover o EXIF. Vídeos e PDFs podem suportar limpeza via canvas quando possível ou apenas inspeção visual.",

        // Utilities Panel (New)
        "util_tab_resizer": "Redimensionar / Recortar",
        "util_tab_color": "Extrator de Cores",
        
        "resizer_title": "Redimensionar e Recortar Imagem",
        "resizer_drop": "Arraste a imagem para editar",
        "resizer_btn_select": "Selecionar Imagem",
        "resizer_width": "Largura (px)",
        "resizer_height": "Altura (px)",
        "resizer_lock": "Bloquear Proporção",
        "resizer_presets": "Formatos Pré-Definidos:",
        "resizer_free": "Livre",
        "resizer_square": "1:1 (Quadrado)",
        "resizer_16_9": "16:9 (Ecrã)",
        "resizer_4_5": "4:5 (Retrato)",
        "resizer_download": "Cortar e Descarregar",

        "color_title": "Extrator de Palete de Cores",
        "color_drop": "Arraste a foto para extrair cores",
        "color_btn_select": "Selecionar Foto",
        "color_analyzing": "A extrair cores dominantes...",
        "color_results": "Palete Extraída:",
        "color_click_copy": "Clique para copiar o código HEX",

        // SEO Articles
        // Compressor
        "seo_comp_h2_1": "Porquê otimizar as suas imagens com o ImageOptimizerPro?",
        "seo_comp_p1": "A velocidade de um website é um dos fatores mais importantes para o sucesso online, quer tenhas um blog pessoal ou uma loja e-commerce. Imagens pesadas são o principal motivo para a lentidão de uma página. Com o ImageOptimizerPro, ajudamos-te a encontrar o equilíbrio perfeito entre qualidade visual e desempenho técnico.",
        "seo_comp_h2_2": "O impacto da otimização no SEO e na experiência do utilizador",
        "seo_comp_p2": "Quando comprimes uma imagem sem perder qualidade perceptível, estás a garantir que o teu site carrega mais rápido em dispositivos móveis. O Google utiliza a velocidade de carregamento (Core Web Vitals) como um critério de ranking. Ou seja, um site mais leve tem mais hipóteses de aparecer nos primeiros resultados de pesquisa.",
        "seo_comp_h2_3": "Vantagens de usar o ImageOptimizerPro:",
        "seo_comp_li_1": "<strong class=\"text-gray-800\">Velocidade Incrível:</strong> Reduz o tamanho dos ficheiros em até 80%, mantendo a nitidez.",
        "seo_comp_li_2": "<strong class=\"text-gray-800\">Melhor SEO:</strong> Sites rápidos são favorecidos pelos algoritmos de busca.",
        "seo_comp_li_3": "<strong class=\"text-gray-800\">Poupança de Dados:</strong> Ideal para utilizadores que navegam através de redes móveis (4G/5G).",
        "seo_comp_li_4": "<strong class=\"text-gray-800\">Privacidade Total:</strong> Todo o processamento é feito de forma segura e os seus ficheiros não são armazenados no nosso servidor.",
        "seo_comp_h2_4": "Diferença entre formatos: JPEG vs PNG vs WebP",
        "seo_comp_p3": "Nem todas as imagens são iguais. Para fotografias com muitas cores, o formato JPEG é ideal pela sua capacidade de compressão. Se precisas de transparência, o PNG é a escolha certa. No entanto, se queres o melhor dos dois mundos para a web, o formato WebP é a recomendação atual do Google, oferecendo uma redução de peso superior a qualquer outro formato tradicional.",
        "seo_comp_h2_5": "Como otimizar as suas fotos corretamente?",
        "seo_comp_li_5": "<strong class=\"text-gray-800\">Redimensionar primeiro:</strong> Não carregues uma foto de 4000px se ela só vai aparecer com 800px no ecrã.",
        "seo_comp_li_6": "<strong class=\"text-gray-800\">Escolher o formato certo:</strong> Usa JPEG para fotos e PNG para logótipos ou gráficos.",
        "seo_comp_li_7": "<strong class=\"text-gray-800\">Comprimir com o ImageOptimizerPro:</strong> Passa as tuas imagens pela nossa ferramenta antes de as publicares no teu site ou redes sociais.",
        
        // Converter
        "seo_conv_h2_1": "Conversor de Imagens Online Gratuito",
        "seo_conv_p1": "A compatibilidade de formatos é essencial para a web moderna. O nosso conversor permite transformar imagens HEIC, GIF, TIFF ou BMP nos formatos mais eficientes da atualidade, como WebP e AVIF, garantindo a máxima compatibilidade e rapidez.",
        "seo_conv_h2_2": "Vantagens da nossa ferramenta de conversão:",
        "seo_conv_li_1": "<strong class=\"text-gray-800\">Versatilidade:</strong> Suporta conversões de e para os formatos mais populares (HEIC, JPG, PNG, WebP, GIF, BMP, TIFF, AVIF, ICO).",
        "seo_conv_li_2": "<strong class=\"text-gray-800\">100% no Navegador:</strong> Não há uploads para servidores. A conversão é feita localmente no seu dispositivo, garantindo total privacidade e segurança.",
        "seo_conv_li_3": "<strong class=\"text-gray-800\">Otimizado para a Web:</strong> Converta para WebP ou AVIF e melhore a velocidade de carregamento do seu site ou blog.",
        "seo_conv_h2_3": "Como converter as suas imagens?",
        "seo_conv_p2": "Basta arrastar e soltar os ficheiros, escolher o formato de saída desejado (JPG, PNG, WebP ou AVIF) e clicar em converter. Rápido, seguro e sem complicações.",

        // EXIF
        "seo_exif_h2_1": "Leitor e Removedor de Dados EXIF",
        "seo_exif_p1": "Proteja a sua privacidade com a nossa ferramenta EXIF. Cada foto ou vídeo que capta com o smartphone guarda metadados ocultos, como a localização GPS exata, a data, a hora e o modelo do dispositivo. Partilhar estas imagens online pode expor a sua privacidade.",
        "seo_exif_h2_2": "O que pode fazer com o nosso visualizador EXIF?",
        "seo_exif_li_1": "<strong class=\"text-gray-800\">Inspecionar e Pesquisar:</strong> Descubra instantaneamente que informações estão escondidas nos seus ficheiros multimédia (suporta JPEG, PNG, WEBP, HEIC, MP4, MOV e PDF).",
        "seo_exif_li_2": "<strong class=\"text-gray-800\">Limpeza de Metadados:</strong> Remova todos os dados sensíveis e informações de rastreio com um único clique antes de partilhar imagens nas redes sociais ou com clientes.",
        "seo_exif_li_3": "<strong class=\"text-gray-800\">Segurança Máxima:</strong> Tal como as nossas outras ferramentas, os seus ficheiros nunca saem do seu dispositivo. Todo o processamento de limpeza é feito no seu próprio navegador.",

        // Utilities - Resizer
        "seo_resizer_h2_1": "Redimensionador e Recortador de Imagens Online Gratuito",
        "seo_resizer_p1": "Ajuste as suas fotos para as dimensões exatas exigidas por lojas online (e-commerce) ou redes sociais. Otimizado para SEO, sem perda de qualidade e 100% seguro no navegador.",
        
        // Utilities - Color Extractor
        "seo_color_h2_1": "Extrair Palete de Cores de Imagens em Segundos",
        "seo_color_p1": "Ferramenta essencial para designers e criadores de conteúdo. Descubra as cores dominantes de qualquer fotografia e obtenha os códigos HEX e RGB imediatos para usar nos seus projetos artísticos ou interfaces web.",

        // FAQs
        "faq_title": "Perguntas Frequentes (FAQ) & Privacidade",
        "faq_q1": "É grátis e as minhas fotos estão seguras?",
        "faq_a1": "Sim, 100% grátis e seguro. A compressão ocorre inteiramente no seu navegador. Sendo uma <em>Progressive Web App (PWA)</em>, funciona com o poder do seu próprio dispositivo e NUNCA enviamos ficheiros para os nossos servidores.",

        // Footer & Cookies
        "foot_tools": "Ferramentas",
        "foot_blog": "Blog",
        "foot_cookies": "Gerir Detalhes de Cookies",
        
        "cookie_title": "Valorizamos a sua privacidade",
        "cookie_desc": "Utilizamos cookies e tecnologias semelhantes para personalizar conteúdo e anúncios, fornecer funcionalidades de redes sociais e analisar o nosso tráfego. Partilhamos também informações sobre a sua utilização do site com os nossos parceiros de publicidade (Google AdSense) e de análise, que as podem combinar com outras informações que lhes forneceu ou que recolheram a partir da sua utilização dos serviços deles.",
        "cookie_accept_all": "Aceitar Tudo",
        "cookie_reject": "Rejeitar",
        "cookie_customize": "Personalizar",
        
        "cookie_modal_title": "Preferências de Privacidade",
        "cookie_necessary_title": "Cookies Estritamente Necessários",
        "cookie_always_active": "Sempre Ativos",
        "cookie_necessary_desc": "Essenciais para o funcionamento básico do site (como guardar esta própria preferência de cookies) e segurança. Não podem ser desativados.",
        
        "cookie_stats_title": "Cookies de Estatísticas",
        "cookie_stats_desc": "Permitem-nos entender como interage com o site, de forma anónima, reportando informações como páginas visitadas e erros, para podermos melhorar o nosso serviço.",
        
        "cookie_marketing_title": "Cookies de Marketing / Publicidade",
        "cookie_marketing_desc": "Utilizados por terceiros (como o Google AdSense) para apresentar anúncios relevantes baseados nos seus comportamentos de navegação e interesses.",
        "cookie_save": "Guardar Preferências",

        // E-E-A-T Institutional Pages
        "about_title": "Compromisso e Transparência",
        "about_mission_title": "Privacidade por Design e a Nossa Origem",
        "about_mission_p1": "O ImageOptimizerPro não é apenas mais um utilitário de imagem. Este projeto nasceu das mãos de um profissional com vasta experiência no setor de Food & Beverage (F&B) em Albufeira, Algarve. No dinamismo do dia-a-dia empresarial, percebemos que a rapidez e a segurança não são opções — são requisitos fundamentais.",
        "about_mission_p2": "Farto de ferramentas que exigem uploads lentos para servidores distantes e recolhem dados desnecessários, criámos esta plataforma com base nos princípios da 'Web Limpa'. Aqui, a privacidade é absoluta: 100% do processamento ocorre no seu browser. Os seus ficheiros nunca saem do seu dispositivo. É a nossa palavra, suportada pela tecnologia.",
        "contact_title": "Contactos",
        "contact_desc": "Tem alguma dúvida, sugestão de nova funcionalidade ou precisa de suporte técnico? A nossa equipa está pronta para ajudar. Entre em contacto direto connosco através do e-mail oficial. Tentaremos responder com a maior brevidade possível.",
        "contact_email": "logiclabsstudios@gmail.com",
        "foot_about": "Sobre Nós",
        "foot_contact": "Contactos",

        // Blog
        "nav_blog": "Blog",
        "blog_index_title": "Blog & Recursos",
        "blog_index_desc": "Dicas essenciais sobre SEO, velocidade de carregamento e privacidade digital para profissionais.",
        "blog_card1_title": "Como a Compressão de Imagens Melhora o SEO e a Velocidade do seu Site",
        "blog_card1_desc": "O tempo de carregamento de uma página web é um fator crítico para o sucesso online. O Google utiliza os Core Web Vitals para classificar sites, e as imagens pesadas são o principal inimigo do desempenho...",
        "blog_read_more": "Ler artigo completo",
        "blog_card2_title": "JPEG, PNG, WebP ou AVIF: Qual o Melhor Formato de Imagem?",
        "blog_card2_desc": "Escolher a extensão correta para as suas fotografias pode ser confuso. A conversão de formato de imagem é o primeiro passo para um site profissional. O formato JPEG é clássico e excelente para fotografias...",
        "blog_card3_title": "O Guia Prático para Redimensionar Imagens para Redes Sociais e Impressão",
        "blog_card3_desc": "Cada plataforma digital tem as suas próprias regras. Fazer o upload de uma imagem com o tamanho errado resulta num recorte automático desastroso ou numa compressão que destrói a nitidez...",
        "blog_card4_title": "Privacidade Online: Porque Deve Remover os Dados EXIF das suas Fotos",
        "blog_card4_desc": "Sempre que tira uma fotografia com o telemóvel, a câmara guarda metadados invisíveis a olho nu. Estes dados, conhecidos como metadados EXIF, incluem a marca do dispositivo, a hora exata da captura...",
        
        "blog_back": "Voltar ao Blog",
        
        "blog_a1_title": "Como a Compressão de Imagens Melhora o SEO e a Velocidade do seu Site",
        "blog_a1_body": "<h2>O Peso do Digital</h2><p>Vivemos numa era onde a paciência é um recurso escasso. No mundo online, milissegundos determinam o sucesso ou o fracasso de um projeto. Se o seu site demora a carregar, o utilizador parte e não volta. A <strong>otimização de imagens para a web</strong> não é um extra; é o alicerce de uma presença profissional.</p><h2>Velocidade e Autoridade (Core Web Vitals)</h2><p>O Google não perdoa sites lentos. Através dos Core Web Vitals, o motor de busca mede exatamente quanto tempo o seu conteúdo leva a tornar-se útil. Imagens não otimizadas são o principal culpado pelo 'bloqueio' de renderização. Ao reduzir o peso dos seus ficheiros em até 80%, está a enviar um sinal claro de competência aos algoritmos de ranking.</p><h3>Vantagens de uma Web Mais Leve</h3><p>1. <strong>Menor Taxa de Rejeição:</strong> Conteúdo instantâneo mantém a atenção.<br/>2. <strong>Eficiência Móvel:</strong> Respeite os dados móveis dos seus utilizadores.<br/>3. <strong>Vantagem Competitiva:</strong> Um site rápido posiciona-o acima da concorrência desleixada.</p><h2>A Nossa Abordagem</h2><p>Aqui, defendemos a 'Web Limpa'. Comprimir fotos não deve significar sacrificar a nitidez ou a sua privacidade. Usamos tecnologia que processa tudo no seu próprio browser, garantindo que a performance e a segurança caminham de mãos dadas.</p>",

        "blog_a2_title": "JPEG, PNG, WebP ou AVIF: Qual o Melhor Formato de Imagem?",
        "blog_a2_body": "<h2>A Escolha da Ferramenta Certa</h2><p>Um profissional conhece as suas ferramentas. Na web, o formato de imagem que escolhe define a percepção da sua marca. Não se trata apenas de estética; é uma decisão de engenharia e performance.</p><h2>O Legado e a Evolução</h2><p>O <strong>JPEG</strong> é o veterano fiável para fotografias complexas. O <strong>PNG</strong> é a escolha obrigatória quando a transparência é inegociável. No entanto, o passado não pode travar o progresso. Formatos como <strong>WebP</strong> e <strong>AVIF</strong> representam a nova fronteira da eficiência digital, oferecendo o dobro da compressão com a mesma qualidade visual.</p><h3>Resumo de Formatos</h3><p>• <strong>WebP/AVIF:</strong> O padrão ouro para banners e fotos em 2026.<br/>• <strong>PNG:</strong> Essencial para logótipos e gráficos com fundo transparente.<br/>• <strong>JPEG:</strong> Para compatibilidade máxima em sistemas legados.</p><h2>Simplificar sem Facilitar</h2><p>A transição entre estes formatos deve ser imediata. O nosso conversor local permite-lhe adotar o futuro sem perder tempo com software complexo. Escolha o formato certo, otimize a carga e respeite o tempo do seu visitante.</p>",

        "blog_a3_title": "O Guia Prático para Redimensionar Imagens para Redes Sociais e Impressão",
        "blog_a3_body": "<h2>A Geometria do Sucesso</h2><p>No design, a proporção é tudo. Tentar encaixar uma imagem de formato livre numa grelha rígida de redes sociais sem planeamento resulta em desleixo. Saber <strong>redimensionar fotos online</strong> com precisão matemática é o que separa um amador de um profissional.</p><h2>Rácios e Resoluções</h2><p>Cada plataforma tem o seu rádio de aspeto (Aspect Ratio). O 1:1 do Instagram exige uma composição diferente do 16:9 de um banner web ou do 4:5 de um retrato promocional. Ignorar estas medidas causa o 'Layout Shift', um erro técnico que o Google penaliza severamente.</p><h3>Regras de Ouro</h3><p>1. <strong>Pense no Dispositivo:</strong> Mobile primeiro, sempre.<br/>2. <strong>Evite Esticar:</strong> Nunca aumente uma imagem pequena; o resultado é ruído visual.<br/>3. <strong>Corte com Intenção:</strong> Use o nosso recortador para destacar o que realmente importa na foto.</p><h2>A Ferramenta ao Serviço da Ordem</h2><p>O ImageOptimizerPro oferece um redimensionador que respeita a integridade da imagem. Recorte, redimensione e prepare os seus ativos para qualquer destino, garantindo que a sua mensagem visual chega intacta e nítida.</p>",

        "blog_a4_title": "Privacidade Online: Porque Deve Remover os Dados EXIF das suas Fotos",
        "blog_a4_body": "<h2>A Pegada Invisível</h2><p>Cada imagem que capturamos hoje carrega um segredo. Os <strong>Dados EXIF</strong> são metadados que contam a história por trás do clique: a marca da câmara, a hora exata e, mais grave, as coordenadas GPS do local. No mundo digital, a sua privacidade é um valor que deve ser defendido ativamente.</p><h2>O Risco de Exposição</h2><p>Ao partilhar uma foto sem tratamento nas redes sociais ou com desconhecidos, está a fornecer um mapa para a sua localização. Criminosos e sistemas de rastreio automático alimentam-se desta negligência. Remover metadados não é uma paranoia; é higiene básica de segurança digital.</p><h3>O Que Limpamos:</h3><p>• Coordenadas GPS e localização.<br/>• Modelo do dispositivo e definições da lente.<br/>• Marcas temporais e software de edição.</p><h2>Soberania Digital</h2><p>A nossa ferramenta de remoção de EXIF foi desenhada com um princípio inabalável: os seus dados nunca devem sair do seu controlo. Todo o processo de limpeza ocorre localmente no seu navegador. Proteja-se, limpe os seus ficheiros e partilhe apenas o que pretende mostrar.</p>",

        // Article 5: AVIF
        "blog_card5_title": "Guia Completo: O que é o formato AVIF e porque é o futuro da Web?",
        "blog_card5_desc": "Descubra o AVIF, o formato de imagem que está a revolucionar a performance web com compressão superior ao WebP e JPEG.",
        "blog_a5_title": "Guia Completo: O que é o formato AVIF e porque é o futuro da Web?",
        "blog_a5_body": "<h2>O que é o AVIF?</h2><p>O AVIF (AV1 Image File Format) é um formato de ficheiro de imagem moderno que utiliza a tecnologia de compressão do codec de vídeo AV1. Desenvolvido pela Alliance for Open Media, o AVIF foi criado para oferecer uma eficiência de compressão significativamente superior aos formatos tradicionais como JPEG, PNG e até mesmo o WebP.</p><h2>Porque é que o AVIF é considerado o futuro?</h2><p>A web moderna exige velocidade. Com o aumento do tráfego em dispositivos móveis e a importância dos Core Web Vitals no SEO, o tamanho das imagens tornou-se um dos maiores obstáculos à performance. O AVIF resolve este problema ao permitir reduções de tamanho que podem chegar aos 50% em comparação com o JPEG, mantendo uma qualidade visual impressionante.</p><h3>Vantagens Técnicas do AVIF</h3><p>1. <strong>Compressão Superior:</strong> Oferece ficheiros menores sem sacrificar o detalhe.<br/>2. <strong>Suporte para HDR e Wide Color Gamut:</strong> Ideal para fotografias de alta qualidade.<br/>3. <strong>Transparência e Animação:</strong> Tal como o PNG e o GIF, o AVIF suporta canais alfa e sequências de imagens.<br/>4. <strong>Resistência a Artefactos:</strong> Em baixas taxas de bits, o AVIF mantém a suavidade das cores onde o JPEG costuma apresentar \"blocos\" de compressão.</p><h2>Compatibilidade e Adoção</h2><p>Atualmente, a maioria dos navegadores modernos (Chrome, Firefox, Safari e Edge) já suporta o formato AVIF. No entanto, é sempre recomendada uma estratégia de \"fallback\" usando o elemento &lt;picture&gt; em HTML para servir WebP ou JPEG a navegadores mais antigos.</p>",

        // Article 6: EXIF Privacy
        "blog_card6_title": "Como os dados EXIF podem comprometer a sua localização e privacidade online",
        "blog_card6_desc": "Entenda os riscos dos metadados escondidos nas suas fotos e como proteger a sua privacidade ao partilhar imagens na rede.",
        "blog_a6_title": "Como os dados EXIF podem comprometer a sua localização e privacidade online",
        "blog_a6_body": "<h2>O que são Dados EXIF?</h2><p>Cada vez que tira uma fotografia com o seu smartphone ou câmara digital, é criado um conjunto de metadados invisíveis conhecido como EXIF. Estes dados guardam informações sobre a captura, que podem ser extremamente úteis para fotógrafos, mas perigosos para a privacidade do utilizador comum.</p><h2>O Risco da Geolocalização</h2><p>O dado mais sensível presente num ficheiro EXIF são as coordenadas GPS. Se a sua câmara tiver a localização ativa, a foto guarda o local exato (rua, número e cidade) onde foi tirada. Ao publicar essa foto numa rede social ou fórum que não limpe automaticamente esses dados, qualquer pessoa pode descobrir onde vive ou onde se encontra no momento.</p><h2>Outras Informações Reveladoras</h2><p>Além do GPS, os dados EXIF revelam a marca e modelo do seu telemóvel, a data e hora exata da captura, definições técnicas como ISO e o nome do software de edição utilizado.</p><h2>Como Proteger a sua Privacidade</h2><p>Para garantir que não está a partilhar mais do que pretende, deve utilizar ferramentas de limpeza de metadados. O ImageOptimizerPro permite-lhe inspecionar e remover estes dados de forma segura, garantindo que a sua privacidade permanece intacta antes de qualquer partilha pública.</p>",

        // Article 7: Lossy vs Lossless
        "blog_card7_title": "Diferenças reais entre Compressão com Perda (Lossy) vs Sem Perda (Lossless)",
        "blog_card7_desc": "Saiba quando utilizar cada tipo de compressão para otimizar as suas imagens sem comprometer o impacto visual do seu site.",
        "blog_a7_title": "Diferenças reais entre Compressão com Perda (Lossy) vs Sem Perda (Lossless)",
        "blog_a7_body": "<h2>A Ciência da Compressão</h2><p>Comprimir uma imagem significa reduzir a quantidade de dados necessária para a representar. No entanto, existem dois caminhos fundamentais: a compressão com perda (Lossy) e a compressão sem perda (Lossless).</p><h2>Compressão com Perda (Lossy)</h2><p>Este método remove permanentemente bits de informação redundante ou quase impercetível ao olho humano. O objetivo é reduzir drasticamente o tamanho do ficheiro.</p><p>Vantagem: Ficheiros minúsculos, ideais para a web. Exemplo: Formato JPEG.</p><h2>Compressão sem Perda (Lossless)</h2><p>Neste caso, os dados são reorganizados de forma mais eficiente sem nunca serem eliminados. Ao descompactar o ficheiro, a imagem é um clone exato da original.</p><p>Vantagem: Qualidade perfeita e preservação total de detalhes. Exemplo: Formato PNG e TIFF.</p><h2>Qual escolher?</h2><p>Para a maioria dos sites, a <strong>compressão Lossy</strong> é a vencedora, pois a velocidade de carregamento é prioritária. Reserve a <strong>compressão Lossless</strong> para ficheiros que requerem edição futura ou logos com transparência.</p>",

        // Article 8: Shopify/Woo
        "blog_card8_title": "Otimização de Imagens para Shopify e WooCommerce: Guia para aumentar vendas",
        "blog_card8_desc": "Aprenda a otimizar as fotos dos seus produtos para acelerar a sua loja online e converter mais visitantes em clientes.",
        "blog_a8_title": "Otimização de Imagens para Shopify e WooCommerce: Guia para aumentar vendas",
        "blog_a8_body": "<h2>A Relação entre Velocidade e Vendas</h2><p>No e-commerce, cada segundo conta. Estudos demonstram que um atraso de apenas um segundo no carregamento pode reduzir as conversões em 7%. Numa loja Shopify ou WooCommerce, as imagens são os ficheiros mais pesados.</p><h2>O Que é a Otimização para E-commerce?</h2><p>A otimização envolve: Redimensionamento correto (não use 3000px se o tema exibe 800px), compressão inteligente e nomes de ficheiro SEO (ex: sapato-nike-azul.jpg).</p><h2>Formatos Recomendados</h2><p>Embora o JPEG seja o padrão, o <strong>WebP</strong> está a tornar-se a escolha obrigatória para lojas modernas, oferecendo alta qualidade com tamanho reduzido.</p><h2>Ferramentas Gratuitas</h2><p>Pode otimizar as suas coleções gratuitamente utilizando o ImageOptimizerPro. Comprima as suas fotos antes do upload para garantir que a experiência de navegação do seu cliente seja fluida e imediata.</p>",

        // Article 9: HEIC
        "blog_card9_title": "Porque deve converter as suas fotos de iPhone (HEIC) antes de as partilhar no PC",
        "blog_card9_desc": "O formato HEIC é excelente para poupar espaço no iPhone, mas pode ser um pesadelo de compatibilidade no Windows e na Web.",
        "blog_a9_title": "Porque deve converter as suas fotos de iPhone (HEIC) antes de as partilhar no PC",
        "blog_a9_body": "<h2>O que é o Formato HEIC?</h2><p>Desde o iOS 11, a Apple utiliza o formato HEIC como padrão. Ele permite guardar imagens com metade do tamanho mantendo a mesma qualidade, mas o seu maior problema é a compatibilidade.</p><h2>O Problema da Partilha</h2><p>Muitos sites e PCs antigos não suportam o formato .heic de forma nativa. O Windows muitas vezes requer extensões pagas para visualizar estas imagens.</p><h2>Porque Converter para JPEG ou WebP?</h2><p>Converter garante: Compatibilidade universal em qualquer navegador, facilidade de edição e prontidão para a Web (o HEIC não é suportado nativamente pelos browsers).</p><h2>Como Converter de Forma Simples</h2><p>Utilize o conversor local do ImageOptimizerPro para transformar as suas fotos HEIC em formatos universais como JPEG ou WebP, mantendo a qualidade original e a sua total privacidade.</p>",

        // Article 10: WebP vs JPEG
        "blog_card10_title": "WebP vs JPEG: Qual escolher para o seu Blog em 2026?",
        "blog_card10_desc": "Confrontamos o formato clássico com o padrão moderno. Descubra qual garante o melhor ranking e performance.",
        "blog_a10_title": "WebP vs JPEG: Qual escolher para o seu Blog em 2026?",
        "blog_a10_body": "<h2>A Batalha dos Formatos</h2><p>Em 2026, a escolha entre WebP e JPEG é uma decisão estratégica de SEO. O JPEG continua a ser o formato mais compatível, mas o WebP oferece reduções de peso de 25% a 35%.</p><h2>Vantagens do WebP</h2><p>O WebP suporta transparência (como o PNG) e acelera o carregamento drasticamente. Além disso, o Google recomenda explicitamente o uso de formatos de nova geração.</p><h2>O Veredito para 2026</h2><p>Para qualquer blog que pretenda crescer, o <strong>WebP é o vencedor indiscutível</strong>. A compatibilidade é agora superior a 97% dos utilizadores globais. Use o ImageOptimizerPro para converter a sua biblioteca e estar pronto para o futuro.</p>",

        // Article 11: Aspect Ratio
        "blog_card11_title": "A importância do rácio de aspeto (Aspect Ratio) no Design Responsivo",
        "blog_card11_desc": "Entenda como as proporções das suas imagens afetam a experiência do utilizador e evite layouts quebrados.",
        "blog_a11_title": "A importância do rácio de aspeto (Aspect Ratio) no Design Responsivo",
        "blog_a11_body": "<h2>O que é o Rácio de Aspeto?</h2><p>É a relação proporcional entre a largura e a altura (ex: 16:9 ou 4:3). Manter a consistência é fundamental para evitar que o site pareça desorganizado em diferentes ecrãs.</p><h2>Layout Shift e SEO</h2><p>Sem rácios fixos, ocorre o \"Cumulative Layout Shift\" (CLS), onde o conteúdo salta enquanto as imagens carregam. Isto prejudica o ranking no Google.</p><h2>Rácios Comuns</h2><p>16:9 para banners, 4:3 para produtos, 1:1 para perfis sociais e 9:16 para Stories/TikTok.</p><h2>Como Otimizar</h2><p>Utilize o redimensionador do ImageOptimizerPro para recortar as suas imagens para rácios específicos antes de as otimizar, garantindo um design alinhado em qualquer dispositivo.</p>",

        // Article 12: PNG vs SVG
        "blog_card12_title": "PNG vs SVG: Quando usar cada formato para logótipos e ícones",
        "blog_card12_desc": "Descubra a diferença entre imagens de píxeis e vetores para manter a nitidez da sua marca em qualquer resolução.",
        "blog_a12_title": "PNG vs SVG: Quando usar cada formato para logótipos e ícones",
        "blog_a12_body": "<h2>Píxeis vs Vetores</h2><p>O PNG é um formato raster (composto por píxeis), enquanto o SVG é vetorial (composto por equações matemáticas).</p><h2>O Poder do SVG</h2><p>O SVG pode ser ampliado infinitamente sem perder nitidez, sendo ideal para ícones e logótipos simples. Além disso, o seu tamanho de ficheiro é minúsculo.</p><h2>Quando Usar PNG?</h2><p>Use PNG para designs complexos com texturas ou sombras que o SVG não consiga representar bem. Suporta transparência total e é universalmente aceite.</p><h2>Dica Técnica</h2><p>Sempre que possível, use SVG para ícones de interface. Para logótipos complexos em PNG, passe-os pelo ImageOptimizerPro para garantir o melhor equilíbrio entre peso e nitidez.</p>",

        // Article 13: Lazy Loading
        "blog_card13_title": "Lazy Loading: Como carregar imagens de forma inteligente para melhorar o LCP",
        "blog_card13_desc": "Aprenda a técnica de carregamento diferido que acelera o seu site e melhora a pontuação nos Core Web Vitals.",
        "blog_a13_title": "Lazy Loading: Como carregar imagens de forma inteligente para melhorar o LCP",
        "blog_a13_body": "<h2>O que é o Lazy Loading?</h2><p>É uma técnica que atrasa o carregamento de imagens no fundo da página até que o utilizador role até elas. Isso liberta largura de banda para o conteúdo inicial.</p><h2>O Impacto no LCP</h2><p>O Largest Contentful Paint (LCP) mede quando o conteúdo principal fica visível. O Lazy Loading evita que o navegador perca tempo a carregar 50 imagens invisíveis, acelerando a percepção de velocidade.</p><h2>Como Implementar</h2><p>Use o atributo loading=\"lazy\" em browsers modernos. Evite usá-lo na \"Hero Image\" do topo, que deve carregar imediatamente com prioridade alta.</p>",

        // Article 14: Alt Text & Metadata
        "blog_card14_title": "O impacto do Alt Text e Metadados de Imagem no Ranking do Google",
        "blog_card14_desc": "As imagens não são apenas visuais; elas são dados. Aprenda a usar o texto alternativo para dominar o Google Imagens.",
        "blog_a14_title": "O impacto do Alt Text e Metadados de Imagem no Ranking do Google",
        "blog_a14_body": "<h2>O que é o Alt Text?</h2><p>É o atributo HTML que descreve a imagem para acessibilidade e SEO. Ajuda os robôs do Google a \"lerem\" o conteúdo visual.</p><h2>Boas Práticas</h2><p>Seja descritivo e natural. Evite encher de palavras-chave. Ex: Use \"Par de sapatos Nike azuis em fundo branco\" em vez de apenas \"sapatos baratos\".</p><h2>Metadados Úteis</h2><p>Renomeie os ficheiros antes do upload. Um nome como \"guia-seo-2026.jpg\" é muito mais valioso que \"IMG_001.jpg\".</p><h2>Conclusão</h2><p>A otimização completa envolve performance, contexto (Alt Text) e privacidade (limpeza de dados sensíveis). Use o ImageOptimizerPro para dominar estes três pilares.</p>",

        // Article 15: Core Web Vitals
        "blog_card15_title": "Core Web Vitals e PageSpeed: Como dominar a métrica LCP otimizando imagens",
        "blog_card15_desc": "O 'Largest Contentful Paint' (LCP) é a métrica número um que os donos de sites tentam resolver no Google PageSpeed. Aprenda a melhorar o seu ranking...",
        "blog_a15_title": "Core Web Vitals e PageSpeed: Como dominar a métrica LCP otimizando imagens",
        "blog_a15_body": "<h2>O Desafio LCP em 2026</h2><p>O Google utiliza os Core Web Vitals para determinar se uma página web oferece uma boa experiência. A métrica mais difícil de aperfeiçoar é frequentemente o LCP (Largest Contentful Paint), que mede o tempo que o conteúdo principal da página demora a carregar.</p><h2>A Causa do Problema</h2><p>Na maioria esmagadora das vezes, o atraso no LCP é provocado por imagens de capa (Hero Images) não otimizadas. Carregar uma imagem de 3MB num smartphone através de uma rede 4G destrói instantaneamente a sua pontuação e prejudica a sua posição no motor de pesquisa.</p><h2>A Solução Definitiva</h2><p>A solução é dupla: primeiro, usar formatos modernos que comprimam ficheiros de forma drástica (como o WebP ou AVIF). Segundo, redimensionar as imagens para o tamanho exato que os utilizadores irão visualizar. Usando tanto o <strong>Conversor</strong> como o <strong>Compressor</strong> do ImageOptimizerPro em conjunto, conseguirá reduzir facilmente os tamanhos dos ficheiros em 80% sem necessidade de re-escrever o código do seu site.</p>",

        // Article 16: Aspect Ratios Redes Sociais
        "blog_card16_title": "Guia de Tamanhos de Imagem para Redes Sociais em 2026",
        "blog_card16_desc": "Descubra as dimensões e formatos ideais para publicar no Instagram, LinkedIn e TikTok, e não deixe as plataformas destruírem a nitidez da sua marca...",
        "blog_a16_title": "Guia de Tamanhos de Imagem para Redes Sociais em 2026",
        "blog_a16_body": "<h2>Porque deve redimensionar antes de fazer upload?</h2><p>Sempre que envia uma foto com a proporção errada para as redes sociais (Instagram ou LinkedIn), a própria plataforma irá forçar um recorte automático ou aplicar um algoritmo agressivo de compressão. Isso resulta frequentemente em imagens desfocadas ou cortadas de forma amadora.</p><h2>Dimensões Cruciais para 2026</h2><p>As dimensões-chave padrão são:</p><p>• <strong>Instagram Feed:</strong> Quadrado (1:1) com 1080 x 1080 px, ou Retrato (4:5) com 1080 x 1350 px.<br/>• <strong>Stories e TikTok:</strong> Rácio vertical (9:16) em resolução 1080 x 1920 px.<br/>• <strong>LinkedIn (Posts visuais):</strong> Formato retangular (16:9) em 1200 x 627 px.</p><h2>Tome o Controlo</h2><p>Não deve confiar os recortes das suas imagens corporativas a ferramentas automáticas que cortam cabeças e detalhes importantes. Utilize o <strong>Redimensionador / Recortador</strong> do ImageOptimizerPro com precisão cirúrgica antes da publicação e assegure que o seu layout social transpira profissionalismo.</p>",

        // Article 17: Color Extractor
        "blog_card17_title": "Design Profissional: Como extrair paletas de cores de fotos com perfeição",
        "blog_card17_desc": "Um guia para designers e web developers descobrirem e integrarem harmoniosamente as cores dominantes das suas fotografias na interface do site.",
        "blog_a17_title": "Design Profissional para Leigos: Como extrair paletas de cores",
        "blog_a17_body": "<h2>A Harmonia Invisível</h2><p>Um dos maiores segredos de um site esteticamente apelativo é a harmonia de cores entre as fotografias exibidas e a própria cor do site (fundos, botões, e tipografia). Extrair uma cor de uma fotografia-chave e aplicá-la ao código do seu layout eleva imediatamente o sentimento de coesão do conteúdo.</p><h2>Sair do Advinho</h2><p>No passado, isto implicava abrir softwares complexos e procurar as cores manualmente, resultando num fluxo de trabalho lento. O erro habitua é usar tonalidades ligeiramente desencontradas (um vermelho puro de botão sobre uma foto com um vermelho mais gasto).</p><h2>Da Foto ao Hexadecimal Instantâneo</h2><p>Com a nova ferramenta de <strong>Extrator de Cores</strong> do ImageOptimizerPro, pode introduzir qualquer imagem na interface e, no próprio momento (via navegador), descobrir a paleta completa e primária da mesma. Terá automaticamente disponíveis os códigos HEX e RGB para aplicar no CSS, Tailwind e ferramentas de design sem interrupção de produtividade.</p>"
    },
    en: {
        "nav_how": "How it Works",
        "nav_tools": "Tools",
        "nav_faq": "FAQ",
        "nav_privacy": "Privacy",
        "hero_title": "Online Image Optimizer: <br class=\"hidden md:block\"/><span class=\"text-brand-primary\">Fast, Free & Secure</span>",
        "hero_sub": "Reduce size, convert formats, remove EXIF, or crop photos instantly. Everything is 100% processed in your browser.",
        
        // Tabs
        "tab_compressor": "Compressor",
        "tab_converter": "Converter",
        "tab_exif": "EXIF",
        "tab_utils": "Utilities",

        // E-E-A-T Pages Navigation
        "nav_about": "About Us",
        "nav_contact": "Contact Us",

        // Compressor Panel
        "comp_drop": "Drag & drop your image here",
        "comp_click": "or click to choose a file",
        "comp_support": "Supports JPG, PNG, WebP (Max: 20MB)",
        "comp_btn_select": "Select Image",
        "comp_processing": "Processing image...",
        "comp_proc_msg": "Starting compression engine...",
        "comp_did_you_know": "Did you know?",
        "comp_tip": "Optimized images can speed up your site by more than 40%.",
        "comp_ready": "Image Ready!",
        "comp_new": "Upload new image",
        "comp_preview": "Preview",
        "comp_badge": "Optimized",
        "comp_original": "Original",
        "comp_optimized": "Optimized",
        "comp_format": "Output Format",
        "comp_quality": "Quality",
        "comp_size_small": "Smaller file",
        "comp_size_best": "Best quality",
        "comp_download": "Download Image",

        // Converter Panel
        "conv_drop": "Drag image to convert",
        "conv_support": "HEIC, JPG, PNG, WebP, GIF, BMP, TIFF, AVIF, ICO",
        "conv_btn_select": "Select File",
        "conv_processing": "Converting image...",
        "conv_proc_msg": "This might take a few seconds for large files.",
        "conv_ready": "Ready to Convert!",
        "conv_new": "New file",
        "conv_preview": "Preview",
        "conv_format": "Output Format",
        "conv_quality": "Quality",
        "conv_download": "Convert & Download",

        // EXIF Panel
        "exif_drop": "Inspect or Clean EXIF Data",
        "exif_support": "JPG, PNG, WEBP, HEIC, MP4, MOV, PDF",
        "exif_btn_select": "Select File",
        "exif_ready": "Analysis Completed",
        "exif_new": "New File",
        "exif_prop": "Property",
        "exif_val": "Value",
        "exif_clean": "Clear Original Data",
        "exif_clean_note": "Images will be re-exported to remove EXIF. Videos and PDFs might only support visual inspection.",

        // Utilities Panel (New)
        "util_tab_resizer": "Resize & Crop",
        "util_tab_color": "Color Extractor",
        
        "resizer_title": "Resize and Crop Image",
        "resizer_drop": "Drag image to edit",
        "resizer_btn_select": "Select Image",
        "resizer_width": "Width (px)",
        "resizer_height": "Height (px)",
        "resizer_lock": "Lock Aspect Ratio",
        "resizer_presets": "Presets:",
        "resizer_free": "Free",
        "resizer_square": "1:1 (Square)",
        "resizer_16_9": "16:9 (Screen)",
        "resizer_4_5": "4:5 (Portrait)",
        "resizer_download": "Crop & Download",

        "color_title": "Color Palette Extractor",
        "color_drop": "Drag photo to extract colors",
        "color_btn_select": "Select Photo",
        "color_analyzing": "Extracting dominant colors...",
        "color_results": "Extracted Palette:",
        "color_click_copy": "Click to copy HEX code",

        // SEO Articles
        // Compressor
        "seo_comp_h2_1": "Why optimize your images with ImageOptimizerPro?",
        "seo_comp_p1": "Website speed is one of the most important factors for online success, whether you have a personal blog or an e-commerce store. Heavy images are the main reason for slow page loads. With ImageOptimizerPro, we help you find the perfect balance between visual quality and technical performance.",
        "seo_comp_h2_2": "The impact of optimization on SEO and user experience",
        "seo_comp_p2": "When you compress an image without perceptible quality loss, you guarantee your site loads faster on mobile devices. Google uses loading speed (Core Web Vitals) as a ranking factor. Ultimately, a lighter site has better chances of ranking high in search results.",
        "seo_comp_h2_3": "Benefits of using ImageOptimizerPro:",
        "seo_comp_li_1": "<strong class=\"text-gray-800\">Incredible Speed:</strong> Reduces file size up to 80% while retaining sharpness.",
        "seo_comp_li_2": "<strong class=\"text-gray-800\">Better SEO:</strong> Fast websites are favored by search engine algorithms.",
        "seo_comp_li_3": "<strong class=\"text-gray-800\">Save Data:</strong> Ideal for users browsing on mobile networks (4G/5G).",
        "seo_comp_li_4": "<strong class=\"text-gray-800\">Total Privacy:</strong> All processing is done securely and your files are never stored on our servers.",
        "seo_comp_h2_4": "Format differences: JPEG vs PNG vs WebP",
        "seo_comp_p3": "Not all images are created equal. For high-color photos, JPEG is ideal due to its compression capabilities. If you need transparency, PNG is the right choice. However, if you want the best of both worlds for the web, WebP is Google's current recommendation, offering superior weight reduction to any traditional format.",
        "seo_comp_h2_5": "How to optimize your photos correctly?",
        "seo_comp_li_5": "<strong class=\"text-gray-800\">Resize first:</strong> Don't upload a 4000px picture if it will only be displayed at 800px on the screen.",
        "seo_comp_li_6": "<strong class=\"text-gray-800\">Pick the right format:</strong> Use JPEG for photos and PNG for logos or graphics.",
        "seo_comp_li_7": "<strong class=\"text-gray-800\">Compress with ImageOptimizerPro:</strong> Run your images through our tool before publishing them to your website or social accounts.",
        
        // Converter
        "seo_conv_h2_1": "Free Online Image Converter",
        "seo_conv_p1": "Format compatibility is essential for the modern web. Our converter lets you transform HEIC, GIF, TIFF, or BMP images into today's most efficient formats, like WebP and AVIF, ensuring maximum compatibility and speed.",
        "seo_conv_h2_2": "Benefits of our conversion tool:",
        "seo_conv_li_1": "<strong class=\"text-gray-800\">Versatility:</strong> Supports conversions to and from the most popular formats (HEIC, JPG, PNG, WebP, GIF, BMP, TIFF, AVIF, ICO).",
        "seo_conv_li_2": "<strong class=\"text-gray-800\">100% in Browser:</strong> No server uploads. The conversion happens locally on your device, ensuring total privacy and security.",
        "seo_conv_li_3": "<strong class=\"text-gray-800\">Optimized for the Web:</strong> Convert to WebP or AVIF and improve the loading speed of your site or blog.",
        "seo_conv_h2_3": "How to convert your images?",
        "seo_conv_p2": "Simply drag and drop your files, choose your desired output format (JPG, PNG, WebP, or AVIF) and click convert. Fast, secure, and hassle-free.",

        // EXIF
        "seo_exif_h2_1": "EXIF Data Reader and Remover",
        "seo_exif_p1": "Protect your privacy with our EXIF tool. Every photo or video you capture with your smartphone stores hidden metadata, such as exact GPS location, date, time, and device model. Sharing these images online can expose your privacy.",
        "seo_exif_h2_2": "What can you do with our EXIF viewer?",
        "seo_exif_li_1": "<strong class=\"text-gray-800\">Inspect and Search:</strong> Instantly discover what information is hidden inside your media files (supports JPEG, PNG, WEBP, HEIC, MP4, MOV, and PDF).",
        "seo_exif_li_2": "<strong class=\"text-gray-800\">Metadata Cleaning:</strong> Strip all sensitive data and tracking information with a single click before sharing images on social media or with clients.",
        "seo_exif_li_3": "<strong class=\"text-gray-800\">Maximum Security:</strong> Just like our other tools, your files never leave your device. All cleaning processes are executed within your own browser.",

        // Utilities - Resizer
        "seo_resizer_h2_1": "Free Online Image Resizer and Cropper",
        "seo_resizer_p1": "Adjust your photos to the exact dimensions required by online stores (e-commerce) or social networks. SEO-optimized, loss-less quality, and 100% secure in your browser.",
        
        // Utilities - Color Extractor
        "seo_color_h2_1": "Extract Color Palette from Images in Seconds",
        "seo_color_p1": "An essential tool for designers and content creators. Discover the dominant colors of any photograph and get the HEX and RGB codes instantly to use in your art projects or web interfaces.",

        // FAQs
        "faq_title": "Frequently Asked Questions (FAQ) & Privacy",
        "faq_q1": "Is it free and are my photos safe?",
        "faq_a1": "Yes, 100% free and secure. Compression happens entirely in your browser. Being a <em>Progressive Web App (PWA)</em>, it runs on the power of your own device, and we NEVER send files to our servers.",

        // Footer & Cookies
        "foot_tools": "Tools",
        "foot_blog": "Blog",
        "foot_cookies": "Manage Cookie Details",
        
        "cookie_title": "We value your privacy",
        "cookie_desc": "We use cookies and similar technologies to personalize content and ads, provide social media features and analyze our traffic. We also share information about your use of our site with our social media, advertising (Google AdSense) and analytics partners who may combine it with other information that you've provided to them or that they've collected from your use of their services.",
        "cookie_accept_all": "Accept All",
        "cookie_reject": "Reject",
        "cookie_customize": "Customize",
        
        "cookie_modal_title": "Privacy Preferences",
        "cookie_necessary_title": "Strictly Necessary Cookies",
        "cookie_always_active": "Always Active",
        "cookie_necessary_desc": "Essential for the basic functioning of the website (such as saving this very cookie preference) and security. They cannot be turned off.",
        
        "cookie_stats_title": "Analytics Cookies",
        "cookie_stats_desc": "Allows us to understand how you interact with the site, anonymously, reporting information such as visited pages and errors, so we can improve our service.",
        
        "cookie_marketing_title": "Marketing / Advertising Cookies",
        "cookie_marketing_desc": "Used by third parties (like Google AdSense) to display relevant ads based on your browsing habits and interests.",
        "cookie_save": "Save Preferences",

        // E-E-A-T Institutional Pages
        "about_title": "Commitment and Transparency",
        "about_mission_title": "Privacy by Design and Our Roots",
        "about_mission_p1": "ImageOptimizerPro isn't just another image utility. This project was born from the hands of a professional with extensive experience in the Food & Beverage (F&B) sector in Albufeira, Portugal. In the fast-paced world of business, we understand that speed and security aren't options — they are fundamental requirements.",
        "about_mission_p2": "Fed up with tools that require slow uploads to distant servers and collect unnecessary data, we built this platform based on 'Clean Web' principles. Here, privacy is absolute: 100% of the processing happens in your browser. Your files never leave your device. This is our commitment, backed by technology.",
        "contact_title": "Contact Us",
        "contact_desc": "Do you have any questions, feature suggestions, or need technical support? Our team is ready to help. Reach out to us directly via our official email. We will try to respond as soon as possible.",
        "contact_email": "logiclabsstudios@gmail.com",
        "foot_about": "About Us",
        "foot_contact": "Contact",

        // Blog
        "nav_blog": "Blog",
        "blog_index_title": "Blog & Resources",
        "blog_index_desc": "Essential tips on SEO, load speeds, and digital privacy for professionals.",
        "blog_card1_title": "How Image Compression Improves Your Website's SEO and Speed",
        "blog_card1_desc": "Page loading times are a critical factor for online success. Google uses Core Web Vitals to rank websites, and heavy images are the main enemy of performance...",
        "blog_read_more": "Read full article",
        "blog_card2_title": "JPEG, PNG, WebP or AVIF: Which is the Best Image Format?",
        "blog_card2_desc": "Choosing the right extension for your photos can be confusing. Converting image formats is the first step to a professional website. JPEG is classic and excellent for photos...",
        "blog_card3_title": "The Practical Guide to Resizing Images for Social Media and Print",
        "blog_card3_desc": "Every digital platform has its own rules. Uploading an image with the wrong size results in disastrous automatic cropping or a compression that ruins sharpness...",
        "blog_card4_title": "Online Privacy: Why You Should Remove EXIF Data From Your Photos",
        "blog_card4_desc": "Whenever you take a photo with your phone, the camera saves metadata invisible to the naked eye. This data, known as EXIF metadata, includes device model, capture time...",
        
        "blog_back": "Back to Blog",
        
        "blog_a1_title": "How Image Compression Improves SEO and Site Speed",
        "blog_a1_body": "<h2>The Digital Weight</h2><p>We live in an era where patience is a scarce resource. In the online world, milliseconds determine a project's success or failure. If your site takes too long to load, the user leaves and never returns. <strong>Image optimization for the web</strong> is not an extra; it is the foundation of a professional presence.</p><h2>Speed and Authority (Core Web Vitals)</h2><p>Google does not forgive slow sites. Through Core Web Vitals, the search engine measures exactly how long your content takes to become useful. Unoptimized images are the main culprit for rendering 'blockage.' By reducing your file weight by up to 80%, you are sending a clear signal of competence to the ranking algorithms.</p><h3>Advantages of a Lighter Web</h3><p>1. <strong>Lower Bounce Rate:</strong> Instant content holds attention.<br/>2. <strong>Mobile Efficiency:</strong> Respect your users' mobile data.<br/>3. <strong>Competitive Edge:</strong> A fast site positions you above careless competition.</p><h2>Our Approach</h2><p>Here, we advocate for the 'Clean Web.' Compressing photos should not mean sacrificing sharpness or your privacy. We use technology that processes everything in your own browser, ensuring performance and security go hand in hand.</p>",

        "blog_a2_title": "JPEG, PNG, WebP or AVIF: Which is the Best Image Format?",
        "blog_a2_body": "<h2>Choosing the Right Tool</h2><p>A professional knows his tools. On the web, the image format you choose defines your brand's perception. It's not just about aesthetics; it's an engineering and performance decision.</p><h2>Legacy and Evolution</h2><p><strong>JPEG</strong> is the reliable veteran for complex photographs. <strong>PNG</strong> is the mandatory choice when transparency is non-negotiable. However, the past cannot stop progress. Formats like <strong>WebP</strong> and <strong>AVIF</strong> represent the new frontier of digital efficiency, offering twice the compression with the same visual quality.</p><h3>Format Summary</h3><p>• <strong>WebP/AVIF:</strong> The gold standard for banners and photos in 2026.<br/>• <strong>PNG:</strong> Essential for logos and graphics with transparent backgrounds.<br/>• <strong>JPEG:</strong> For maximum compatibility with legacy systems.</p><h2>Simplicity Without Corners Cut</h2><p>Transitioning between these formats should be immediate. Our local converter allows you to embrace the future without wasting time on complex software. Choose the right format, optimize the load, and respect your visitor's time.</p>",

        "blog_a3_title": "The Practical Guide to Resizing Images for Social Media and Print",
        "blog_a3_body": "<h2>The Geometry of Success</h2><p>In design, proportion is everything. Attempting to fit a free-form image into a rigid social media grid without planning results in sloppiness. Knowing how to <strong>resize photos online</strong> with mathematical precision is what separates an amateur from a professional.</p><h2>Ratios and Resolutions</h2><p>Every platform has its own aspect ratio. Instagram's 1:1 requires a different composition than a web banner's 16:9 or a promotional portrait's 4:5. Ignoring these measurements causes 'Layout Shift,' a technical error that Google severely penalizes.</p><h3>Rules of Gold</h3><p>1. <strong>Think Device:</strong> Mobile first, always.<br/>2. <strong>Avoid Stretching:</strong> Never upscale a small image; it results in visual noise.<br/>3. <strong>Crop with Intent:</strong> Use our cropper to highlight what truly matters in the photo.</p><h2>Tooling at the Service of Order</h2><p>ImageOptimizerPro offers a resizer that respects image integrity. Crop, resize, and prepare your assets for any destination, ensuring your visual message arrives intact and sharp.</p>",

        "blog_a4_title": "Online Privacy: Why You Should Remove EXIF Data From Your Photos",
        "blog_a4_body": "<h2>The Invisible Footprint</h2><p>Every image we capture today carries a secret. <strong>EXIF Data</strong> are metadata that tell the story behind the click: camera brand, exact time, and more seriously, the GPS coordinates of the location. In the digital world, your privacy is a value that must be actively defended.</p><h2>The Risk of Exposure</h2><p>By sharing an untreated photo on social media or with strangers, you are providing a map to your location. Criminals and automated tracking systems feed on this negligence. Removing metadata is not paranoia; it is basic digital security hygiene.</p><h3>What We Clean:</h3><p>• GPS coordinates and location.<br/>• Device model and lens settings.<br/>• Timestamps and editing software.</p><h2>Digital Sovereignty</h2><p>Our EXIF removal tool was designed with an unwavering principle: your data should never leave your control. The entire cleaning process occurs locally in your browser. Protect yourself, clean your files, and share only what you intend to show.</p>",

        // Article 5: AVIF
        "blog_card5_title": "Complete Guide: What is AVIF and Why is it the Future of the Web?",
        "blog_card5_desc": "Discover AVIF, the image format revolutionizing web performance with compression superior to WebP and JPEG.",
        "blog_a5_title": "Complete Guide: What is AVIF and Why is it the Future of the Web?",
        "blog_a5_body": "<h2>What is AVIF?</h2><p>AVIF (AV1 Image File Format) is a modern image file format that utilizes the compression technology of the AV1 video codec. Developed by the Alliance for Open Media, AVIF was created to offer significantly higher compression efficiency than traditional formats like JPEG, PNG, and even WebP.</p><h2>Why is AVIF considered the future?</h2><p>The modern web demands speed. With the rise of mobile traffic and the importance of <strong class=\"text-gray-800\">Core Web Vitals in SEO</strong>, image size has become one of the biggest bottlenecks for performance. AVIF solves this problem by allowing size reductions of up to 50% compared to JPEG while maintaining impressive visual quality.</p><h3>Technical Advantages of AVIF</h3><p>1. <strong>Superior Compression:</strong> Offers smaller files without sacrificing detail.<br/>2. <strong>HDR and Wide Color Gamut Support:</strong> Ideal for high-quality photography.<br/>3. <strong>Transparency and Animation:</strong> Like PNG and GIF, AVIF supports alpha channels and image sequences.<br/>4. <strong>Artifact Resistance:</strong> At low bitrates, AVIF maintains color smoothness where JPEG typically shows compression blocks.</p><h2>Compatibility and Adoption</h2><p>Currently, most modern browsers (Chrome, Firefox, Safari, and Edge) already support the AVIF format. However, an <strong class=\"text-gray-800\">image optimization strategy</strong> using the HTML &lt;picture&gt; element is always recommended to serve WebP or JPEG to older browsers.</p>",

        // Article 6: EXIF Privacy
        "blog_card6_title": "How EXIF Data Can Compromise Your Location and Online Privacy",
        "blog_card6_desc": "Understand the risks of hidden metadata in your photos and how to protect your privacy when sharing images online.",
        "blog_a6_title": "How EXIF Data Can Compromise Your Location and Online Privacy",
        "blog_a6_body": "<h2>What are EXIF Data?</h2><p>Every time you take a photo with your smartphone or digital camera, a set of invisible metadata known as <strong class=\"text-gray-800\">EXIF (Exchangeable Image File Format)</strong> is created. This data stores information about the capture, which can be extremely useful for photographers but dangerous for the average user's privacy.</p><h2>The Risk of Geolocation</h2><p>The most sensitive data in an EXIF file are the GPS coordinates. If your camera has location enabled, the photo stores the exact spot (street, number and city) where it was taken. When publishing that photo on a social network or forum that doesn't automatically clean this data, anyone can find out where you live or where you are at the moment.</p><h2>Other Revealing Information</h2><p>In addition to GPS, EXIF data reveals the make and model of your phone, the exact date and time of the capture, technical settings like ISO, and the name of the editing software used.</p><h2>How to Protect Your Privacy</h2><p>To ensure you aren't sharing more than intended, you should use <strong class=\"text-gray-800\">metadata cleaning tools</strong>. ImageOptimizerPro allows you to inspect and remove this data safely, ensuring your privacy remains intact before any public sharing.</p>",

        // Article 7: Lossy vs Lossless
        "blog_card7_title": "Real Differences Between Lossy vs. Lossless Compression",
        "blog_card7_desc": "Learn when to use each type of compression to optimize your images without compromising your website's visual impact.",
        "blog_a7_title": "Real Differences Between Lossy vs. Lossless Compression",
        "blog_a7_body": "<h2>The Science of Compression</h2><p>Compressing an image means reducing the amount of data needed to represent it. However, there are two fundamental paths to achieve this goal: <strong class=\"text-gray-800\">lossy compression</strong> and <strong class=\"text-gray-800\">lossless compression</strong>.</p><h2>Lossy Compression</h2><p>This method permanently removes bits of redundant information or details almost imperceptible to the human eye. The goal is to drastically reduce file size.</p><p><strong class=\"text-gray-800\">Advantage:</strong> Tiny files, ideal for the web. Example: JPEG format.</p><h2>Lossless Compression</h2><p>In this case, data is rearranged more efficiently without ever being deleted. When decompressing the file, the image is an exact clone of the original.</p><p><strong class=\"text-gray-800\">Advantage:</strong> Perfect quality and total preservation of detail. Example: PNG and TIFF formats.</p><h2>Which to Choose?</h2><p>For most websites, <strong>Lossy compression</strong> is the winner, as <strong class=\"text-gray-800\">page speed</strong> is a priority and quality loss is often invisible. Reserve <strong>Lossless compression</strong> for files that require future editing or logos with transparency.</p>",

        // Article 8: Shopify/Woo
        "blog_card8_title": "Image Optimization for Shopify and WooCommerce: Guide to Increasing Sales",
        "blog_card8_desc": "Learn how to optimize your product photos to speed up your online store and convert more visitors into customers.",
        "blog_a8_title": "Image Optimization for Shopify and WooCommerce: Guide to Increasing Sales",
        "blog_a8_body": "<h2>The Relationship Between Speed and Sales</h2><p>In e-commerce, every second counts. Studies show that just a one-second delay in page load can reduce conversions by 7%. In a <strong class=\"text-gray-800\">Shopify or WooCommerce store</strong>, product images are generally the heaviest files. Optimizing them is the shortest path to a faster, more profitable store.</p><h2>What is E-commerce Optimization?</h2><p>Complete optimization involves: <strong class=\"text-gray-800\">Correct Resizing</strong> (don't use 3000px if the theme only displays 800px), smart compression and <strong class=\"text-gray-800\">SEO-friendly filenames</strong> (e.g. blue-nike-shoe.jpg).</p><h2>Recommended Formats</h2><p>While JPEG is the standard, <strong>WebP</strong> is becoming the must-have choice for modern stores. It offers the same quality as JPEG but at a significantly smaller size, which is crucial for customers shopping via mobile.</p><h2>Free Tools and Automation</h2><p>You can optimize your collections for free using ImageOptimizerPro. Compress your photos before uploading to ensure your customer's browsing experience is fluid and immediate.</p>",

        // Article 9: HEIC
        "blog_card9_title": "Why You Should Convert Your iPhone Photos (HEIC) Before Sharing on PC",
        "blog_card9_desc": "The HEIC format is great for saving space on your iPhone, but it can be a compatibility nightmare on Windows and the Web.",
        "blog_a9_title": "Why You Should Convert Your iPhone Photos (HEIC) Before Sharing on PC",
        "blog_a9_body": "<h2>What is the HEIC Format?</h2><p>Since iOS 11, Apple has used the <strong class=\"text-gray-800\">HEIC (High Efficiency Image Format)</strong> as the standard for photos. It allows images to be saved at half the size while maintaining the same quality, but its greatest strength is also its greatest problem: compatibility.</p><h2>The Sharing Problem</h2><p>Many sites and older Windows PCs do not support the .heic format natively. Windows often requires specific (and sometimes paid) extensions to view these images natively.</p><h2>Why Convert to JPEG or WebP?</h2><p>Converting ensure: <strong class=\"text-gray-800\">Universal compatibility</strong> on any device or browser, ease of editing, and web readiness (HEIC is not natively supported by browsers for display).</p><h2>How to Convert Easily</h2><p>Use the local converter of ImageOptimizerPro to transform your <strong class=\"text-gray-800\">iPhone HEIC photos</strong> into universal formats like JPEG or WebP, maintaining original quality and your total privacy.</p>",

        // Article 10: WebP vs JPEG
        "blog_card10_title": "WebP vs. JPEG: Which to Choose for Your Blog in 2026?",
        "blog_card10_desc": "We pit the classic format against the modern standard. Discover which guarantees the best ranking and performance.",
        "blog_a10_title": "WebP vs. JPEG: Which to Choose for Your Blog in 2026?",
        "blog_a10_body": "<h2>The Battle of Formats</h2><p>In 2026, the choice between <strong class=\"text-gray-800\">WebP vs JPEG</strong> is no longer just a matter of preference but a strategic SEO decision. While JPEG remains the most compatible format on the planet, WebP offers file size reductions of 25% to 35%.</p><h2>Advantages of WebP</h2><p>WebP supports transparency (like PNG) and speeds up page loading drastically. Moreover, <strong class=\"text-gray-800\">Google explicitly recommends</strong> using next-gen formats like WebP for better Core Web Vitals scores.</p><h2>The Verdict for 2026</h2><p>For any blog that wants to grow, <strong>WebP is the indisputable winner</strong>. Compatibility is now almost total (over 97% of global users). Use ImageOptimizerPro to convert your library and be future-ready.</p>",

        // Article 11: Aspect Ratio
        "blog_card11_title": "The Importance of Aspect Ratio in Responsive Design",
        "blog_card11_desc": "Understand how your image proportions affect user experience and avoid broken layouts on mobile devices.",
        "blog_a11_title": "The Importance of Aspect Ratio in Responsive Design",
        "blog_a11_body": "<h2>What is Aspect Ratio?</h2><p>It is the proportional relationship between width and height (ex: 16:9 or 4:3). Maintaining consistency is vital to prevent your site from looking cluttered on different screens.</p><h2>Layout Shift and SEO</h2><p>Without fixed ratios, <strong class=\"text-gray-800\">Cumulative Layout Shift (CLS)</strong> occurs—where content \"jumps\" as images load. This is a negative metric for Google search rankings.</p><h2>Common Ratios</h2><p>16:9 for hero banners, 4:3 for product photos, 1:1 for social profiles, and 9:16 for Stories/TikTok.</p><h2>How to Optimize Proportions</h2><p>Use the <strong class=\"text-gray-800\">ImageOptimizerPro resizer</strong> to crop your images to specific ratios before optimizing them, ensuring a clean and professional design on any device.</p>",

        // Article 12: PNG vs SVG
        "blog_card12_title": "PNG vs. SVG: When to Use Each Format for Logos and Icons",
        "blog_card12_desc": "Discover the difference between pixel images and vectors to maintain your brand's sharpness at any resolution.",
        "blog_a12_title": "PNG vs. SVG: When to Use Each Format for Logos and Icons",
        "blog_a12_body": "<h2>Pixels vs. Vectors</h2><p>The main difference lies in how the image is built. PNG is a <strong class=\"text-gray-800\">raster format</strong> (composed of pixels), while SVG is a <strong class=\"text-gray-800\">vector format</strong> (composed of mathematical equations).</p><h2>The Power of SVG</h2><p>SVG can be scaled infinitely without losing sharpness, making it ideal for icons and simple logos. Moreover, its file size is often tiny compared to bitmaps.</p><h2>When to Use PNG?</h2><p>Use PNG for complex designs with textures, gradients, or shadows that SVG cannot represent well. It supports full transparency and is universally accepted.</p><h2>Technical Tip</h2><p>Whenever possible, use <strong class=\"text-gray-800\">SVG for interface icons</strong>. For complex logos in PNG, run them through ImageOptimizerPro to ensure the best balance between weight and sharpness.</p>",

        // Article 13: Lazy Loading
        "blog_card13_title": "Lazy Loading: How to Smartly Load Images to Improve LCP",
        "blog_card13_desc": "Learn the deferred loading technique that speeds up your site and improves your Google Core Web Vitals score.",
        "blog_a13_title": "Lazy Loading: How to Smartly Load Images to Improve LCP",
        "blog_a13_body": "<h2>What is Lazy Loading?</h2><p>It is an optimization technique that delays the loading of images at the bottom of the page until the user scrolls to them. This frees up bandwidth for initial content.</p><h2>The Impact on LCP</h2><p><strong class=\"text-gray-800\">Largest Contentful Paint (LCP)</strong> measures when the main content becomes visible. Lazy Loading prevents the browser from wasting time loading 50 invisible images, speeding up perceived speed.</p><h2>How to Implement Correctly</h2><p>Use the <strong class=\"text-gray-800\">loading=\"lazy\"</strong> attribute in modern browsers. Avoid using it on your \"Hero Image\" at the top, which should load immediately with high priority.</p>",

        // Article 14: Alt Text & Metadata
        "blog_card14_title": "The Impact of Alt Text and Image Metadata on Google Ranking",
        "blog_card14_desc": "Images aren't just visual; they are data. Learn how to use alt text to dominate Google Images.",
        "blog_a14_title": "The Impact of Alt Text and Image Metadata on Google Ranking",
        "blog_a14_body": "<h2>What is Alt Text?</h2><p>It is an HTML attribute that describes an image for accessibility and SEO. It helps Google's robots \"read\" the visual content of your site.</p><h2>Best Practices</h2><p>Be descriptive and natural. <strong class=\"text-gray-800\">Avoid keyword stuffing</strong>. Example: Use \"Pair of blue Nike running shoes on a white background\" instead of just \"cheap shoes\".</p><h2>Useful Metadata</h2><p>Always rename your files before uploading. A filename like <strong class=\"text-gray-800\">seo-optimization-guide-2026.jpg</strong> is far more valuable to Google than a generic \"IMG_001.jpg\".</p><h2>Conclusion</h2><p>Complete image optimization involves performance, context (Alt Text), and privacy (cleaning sensitive data). Use ImageOptimizerPro to master these three pillars.</p>",

        // Article 15: Core Web Vitals
        "blog_card15_title": "Core Web Vitals and PageSpeed: Mastering LCP with Image Optimization",
        "blog_card15_desc": "Largest Contentful Paint (LCP) is the number one metric site owners try to solve in Google PageSpeed. Learn how to improve your rankings...",
        "blog_a15_title": "Core Web Vitals and PageSpeed: Mastering LCP with Image Optimization",
        "blog_a15_body": "<h2>The LCP Challenge in 2026</h2><p>Google uses Core Web Vitals to determine if a web page provides a good experience. The hardest metric to perfect is often LCP (Largest Contentful Paint), which measures how long the main content of the page takes to load.</p><h2>The Core Reason</h2><p>Overwhelmingly, LCP delays are caused by unoptimized hero images. Loading a 3MB image on a smartphone via a 4G network instantly destroys your score and hurts your search engine position.</p><h2>The Definitive Solution</h2><p>The solution is twofold: first, use modern formats that compress files drastically (like WebP or AVIF). Second, resize images to the exact dimensions users will view. By using both the <strong>Converter</strong> and <strong>Compressor</strong> of ImageOptimizerPro together, you can easily reduce file sizes by 80% without needing to rewrite your site's code.</p>",

        // Article 16: Aspect Ratios Redes Sociais
        "blog_card16_title": "Image Sizes Guide for Social Media in 2026",
        "blog_card16_desc": "Discover the ideal dimensions and formats for posting on Instagram, LinkedIn, and TikTok, and stop platforms from ruining your brand's sharpness...",
        "blog_a16_title": "Image Sizes Guide for Social Media in 2026",
        "blog_a16_body": "<h2>Why should you resize before uploading?</h2><p>Whenever you upload a photo with the wrong aspect ratio to social networks (like Instagram or LinkedIn), the platform itself will force an automatic crop or apply an aggressive compression algorithm. This frequently results in blurred or amateurishly cropped images.</p><h2>Crucial Dimensions for 2026</h2><p>The standard key dimensions are:</p><p>• <strong>Instagram Feed:</strong> Square (1:1) at 1080 x 1080 px, or Portrait (4:5) at 1080 x 1350 px.<br/>• <strong>Stories and TikTok:</strong> Vertical ratio (9:16) at 1080 x 1920 px.<br/>• <strong>LinkedIn (Visual posts):</strong> Rectangular format (16:9) at 1200 x 627 px.</p><h2>Take Control</h2><p>You shouldn't trust your corporate image crops to automated tools that cut off heads and important details. Use the <strong>Resizer / Cropper</strong> from ImageOptimizerPro with surgical precision before publishing and ensure your social layout exudes professionalism.</p>",

        // Article 17: Color Extractor
        "blog_card17_title": "Professional Design: Perfectly Extracting Color Palettes from Photos",
        "blog_card17_desc": "A guide for designers and web developers to discover and harmoniously integrate the dominant colors from their photographs into their website interfaces.",
        "blog_a17_title": "Professional Design for Beginners: How to Extract Color Palettes",
        "blog_a17_body": "<h2>The Invisible Harmony</h2><p>One of the biggest secrets to an aesthetically pleasing website is the color harmony between the displayed photographs and the website's own colors (backgrounds, buttons, and typography). Extracting a color from a key photograph and applying it to your layout code immediately elevates the feeling of content cohesion.</p><h2>Stop Guessing</h2><p>In the past, this meant opening complex software and searching for colors manually, resulting in a slow workflow. A common mistake is using slightly mismatched shades (a pure red button over a photo with a more faded red).</p><h2>From Photo to Instant Hexadecimal</h2><p>With ImageOptimizerPro's new <strong>Color Extractor</strong> tool, you can drop any image into the interface and instantly view the complete primary palette. You will automatically get the HEX and RGB codes to apply to your CSS, Tailwind, or design tools without any productivity interruption.</p>"
    }
};

let currentLang = 'pt'; // Default fallback

function initI18n() {
    // Detect Language
    const storedLang = localStorage.getItem('siteLang');
    const browserLang = navigator.language || navigator.userLanguage;
    
    if (storedLang && (storedLang === 'pt' || storedLang === 'en')) {
        currentLang = storedLang;
    } else {
        if (browserLang.toLowerCase().startsWith('pt')) {
            currentLang = 'pt';
        } else {
            currentLang = 'en';
        }
    }
    
    // Inject Dynamic hreflang into head for SEO
    injectHreflangTags();
    
    // Set active class in Language Selector (if available)
    updateLangSelectorUI();

    // Apply translations
    applyTranslations();
}

function setLanguage(lang) {
    if (lang === 'pt' || lang === 'en') {
        currentLang = lang;
        localStorage.setItem('siteLang', lang);
        
        document.documentElement.lang = (lang === 'pt') ? 'pt-PT' : 'en-US';
        
        updateLangSelectorUI();
        applyTranslations();
    }
}

function applyTranslations() {
    const dict = translations[currentLang];
    if (!dict) return;

    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key]) {
            // Check if it should be innerHTML (for tags like <br/>) or textContent
            if(dict[key].includes('<')) {
                el.innerHTML = dict[key];
            } else {
                el.textContent = dict[key];
            }
        }
    });
}

function updateLangSelectorUI() {
    const btnPt = document.getElementById('lang-btn-pt');
    const btnEn = document.getElementById('lang-btn-en');
    const mobBtnPt = document.getElementById('mobile-lang-pt');
    const mobBtnEn = document.getElementById('mobile-lang-en');

    if (currentLang === 'pt') {
        if (btnPt && btnEn) {
            btnPt.classList.add('font-bold', 'text-brand-primary');
            btnPt.classList.remove('text-gray-500');
            btnEn.classList.add('text-gray-500');
            btnEn.classList.remove('font-bold', 'text-brand-primary');
        }
        if (mobBtnPt && mobBtnEn) {
            mobBtnPt.classList.add('font-bold', 'text-brand-primary');
            mobBtnPt.classList.remove('text-gray-500');
            mobBtnEn.classList.add('text-gray-500');
            mobBtnEn.classList.remove('font-bold', 'text-brand-primary');
        }
    } else {
        if (btnPt && btnEn) {
            btnEn.classList.add('font-bold', 'text-brand-primary');
            btnEn.classList.remove('text-gray-500');
            btnPt.classList.add('text-gray-500');
            btnPt.classList.remove('font-bold', 'text-brand-primary');
        }
        if (mobBtnPt && mobBtnEn) {
            mobBtnEn.classList.add('font-bold', 'text-brand-primary');
            mobBtnEn.classList.remove('text-gray-500');
            mobBtnPt.classList.add('text-gray-500');
            mobBtnPt.classList.remove('font-bold', 'text-brand-primary');
        }
    }
}

function injectHreflangTags() {
    // Try to remove old ones if exist
    document.querySelectorAll('link[rel="alternate"][hreflang]').forEach(el => el.remove());
    
    const baseUrl = "https://imageoptimizerpro.pt/";
    const path = window.location.pathname.split('/').pop() || "index.html";
    const fullBaseUrl = baseUrl + (path === "index.html" ? "" : path);
    
    const ptLink = document.createElement('link');
    ptLink.rel = 'alternate';
    ptLink.hreflang = 'pt';
    ptLink.href = fullBaseUrl;
    document.head.appendChild(ptLink);

    const enLink = document.createElement('link');
    enLink.rel = 'alternate';
    enLink.hreflang = 'en';
    enLink.href = fullBaseUrl + "?lang=en";
    document.head.appendChild(enLink);

    const xDefault = document.createElement('link');
    xDefault.rel = 'alternate';
    xDefault.hreflang = 'x-default';
    xDefault.href = fullBaseUrl;
    document.head.appendChild(xDefault);
}

function updateBlogSchema(articleId) {
    const schemaEl = document.getElementById('blog-schema');
    if (!schemaEl) return;

    const currentLang = localStorage.getItem('preferredLanguage') || 'pt';
    const artNum = articleId.replace('artigo-', '');
    
    const title = translations[currentLang][`blog_card${artNum}_title`] || translations[currentLang][`blog_a${artNum}_title`];
    const description = translations[currentLang][`blog_card${artNum}_desc`] || "Artigo sobre otimização de imagem e performance web.";
    
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": title,
      "description": description,
      "image": "https://imageoptimizerpro.pt/images/blog-placeholder.jpg",
      "author": {
        "@type": "Organization",
        "name": "ImageOptimizerPro"
      },
      "publisher": {
        "@type": "Organization",
        "name": "ImageOptimizerPro",
        "logo": {
          "@type": "ImageObject",
          "url": "https://imageoptimizerpro.pt/icon-192.png"
        }
      },
      "datePublished": "2026-04-08",
      "dateModified": "2026-04-08",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `https://imageoptimizerpro.pt/blog.html#${articleId}`
      }
    };

    schemaEl.textContent = JSON.stringify(schemaData, null, 2);
}

// Automatically load on HTML parsing
document.addEventListener('DOMContentLoaded', initI18n);
