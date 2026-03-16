export const COOKIE_NAME = "app_session_id";
export const ONE_YEAR_MS = 1000 * 60 * 60 * 24 * 365;

// URLs dos áudios hospedados
export const AUDIO_URLS = {
  apresentacao: "https://d2xsxph8kpxj0f.cloudfront.net/310519663369703560/eeN9AU5Edh6eM8rzujWsyD/apresentacao_audio_1e6e3e3b.mp3",
  setor1: "https://d2xsxph8kpxj0f.cloudfront.net/310519663369703560/eeN9AU5Edh6eM8rzujWsyD/setor1_audio_612ca5ec.mp3",
  setor2: "https://d2xsxph8kpxj0f.cloudfront.net/310519663369703560/eeN9AU5Edh6eM8rzujWsyD/setor2_audio_b8677265.mp3",
  setor3: "https://d2xsxph8kpxj0f.cloudfront.net/310519663369703560/eeN9AU5Edh6eM8rzujWsyD/setor3_audio_4755c254.mp3",
  fichaTecnica: "https://d2xsxph8kpxj0f.cloudfront.net/310519663369703560/eeN9AU5Edh6eM8rzujWsyD/ficha_tecnica_audio_47b5dca9.mp3",
};

// Conteúdos dos setores (texto ampliado)
export const SECTOR_CONTENT = {
  apresentacao: {
    title: "Texto de Apresentação",
    subtitle: "Movimento República de Emaús",
    paragraphs: [
      "Por uma solidariedade que transforma.",
      "Memórias Anônimas: Revelando Clara-lindas Histórias.",
      "Nesta exposição, celebramos a importância das doações anônimas. Elas impactam diretamente o fortalecimento da comunidade e os projetos sociais do Movimento República de Emaús.",
      "Cada objeto doado, mesmo sem uma história específica conhecida, representa um gesto de cuidado com as pessoas. Este gesto é vital para crianças e jovens. Eles aprendem sobre solidariedade e respeito ao meio ambiente.",
      "A Grande Coleta é mais que um evento solidário. Ela une sustentabilidade e empatia. Ressignificamos objetos que seriam descartados, gerando menos lixo. Mostramos às futuras gerações que pequenos gestos fazem uma grande diferença.",
      "As doações beneficiam o meio ambiente e a vida de muitas pessoas. Crianças, mães e pais encontram oportunidades, apoio e esperança neste ciclo de solidariedade.",
      "Cada objeto exposto conecta o passado e o presente. Ao lembrar o passado, refletimos sobre o presente. Buscamos soluções para problemas atuais, como os desafios climáticos.",
      "Assim, cada peça se torna um símbolo. A solidariedade e a memória coletiva podem transformar pessoas e o mundo ao nosso redor.",
    ],
    audioUrl: AUDIO_URLS.apresentacao,
  },
  setor1: {
    title: "Setor 1",
    subtitle: "Memórias sobre a Mobília",
    paragraphs: [
      "Os móveis deste espaço não contam histórias explícitas. Mas eles nos convidam a imaginar as vidas que os tocaram.",
      "Quem foi o dono deste relógio de parede? Que conversas aconteceram ao redor desta mesa?",
      "Cada peça nos faz pensar nas famílias que viveram com esses objetos. Nos momentos que compartilharam e nos lares que ajudaram a construir.",
      "Estes móveis são testemunhas silenciosas de histórias de vida. Cada arranhão, cada marca de uso, conta uma narrativa de pessoas que viveram, trabalharam e compartilharam momentos nestes espaços.",
      "Ao observar estes objetos, somos convidados a refletir sobre nossas próprias histórias e conexões com o mundo material que nos cerca.",
    ],
    audioUrl: AUDIO_URLS.setor1,
  },
  setor2: {
    title: "Setor 2",
    subtitle: "Ferramentas do Ofício e Imagens em Desconstrução",
    paragraphs: [
      "Máquinas de costura, instrumentos de medição e aparelhos de topografia convivem neste espaço. Junto a eles, câmeras, projetores e tocadores de discos.",
      "Todos representam a habilidade manual e a precisão do trabalho.",
      "Aqui, observamos uma linha do tempo da tecnologia. Das câmeras analógicas e projetores de filmes, aos tocadores de vinil. Até os pendrives que hoje guardam vídeos e documentos digitais.",
      "Essa trajetória mostra a transformação de nossas ferramentas e mídias ao longo das décadas.",
      "Ao mesmo tempo, o avanço rápido da tecnologia revela o impacto do consumo. O ciclo constante de inovação faz com que objetos feitos para durar sejam rapidamente esquecidos.",
      "Indústrias incentivam a troca constante de produtos. Enquanto isso, o planeta sofre com o aumento do descarte.",
      "Cada nova tecnologia traz benefícios, mas também gera mais resíduos e desafios ambientais.",
      "E você? Já pensou sobre seus hábitos de consumo?",
    ],
    audioUrl: AUDIO_URLS.setor2,
  },
  setor3: {
    title: "Setor 3",
    subtitle: "Sons que Ecoam no Tempo",
    paragraphs: [
      "Violões, tambores, acordeon e xilofone transformam este espaço em um pequeno ateliê musical.",
      "Cada instrumento já fez parte de momentos especiais em outros lares, onde a música acompanhava o cotidiano das pessoas.",
      "Agora esses instrumentos estão aqui, prontos para serem redescobertos. Alguns deles são interativos.",
      "O xilofone e o tambor podem ser tocados pelos visitantes.",
      "Ao experimentar esses sons, percebemos como a música atravessa o tempo e continua presente em nossas vidas.",
      "A música é uma linguagem universal que conecta gerações, culturas e histórias. Estes instrumentos são portadores de memórias sonoras que ecoam através do tempo, trazendo à vida as vozes e os ritmos de quem os tocou antes.",
    ],
    audioUrl: AUDIO_URLS.setor3,
  },
  fichaTecnica: {
    title: "Ficha Técnica",
    subtitle: "Informações sobre a Exposição",
    paragraphs: [
      "Exposição: Memórias Anônimas: Revelando Clara-lindas Histórias.",
      "Realização: Movimento República de Emaús.",
      "Coordenação geral: Georgina Cordeiro.",
      "Associada efetiva, conselheira geral e coordenadora da Grande Coleta: Sandra Assunção.",
      "Coordenação de sustentabilidade: José Maria Amorim.",
      "Curadoria e execução: Tiago Souza e Mailde Santos.",
      "Montagem: Tiago Souza.",
      "Mediação: Tiago Souza.",
      "Agradecimentos especiais: Professor Tadeu Costa, associada efetiva Sandra Borges, professor Alex Santos da Rocha, Cosme Assunção, Gabrielle Leitão, Leuisa da Rocha, Cléia Santos, Marvin Silva, Leidy Reis, Lúcia Barreira, Gabriel Santos e Mailde Santos.",
    ],
    audioUrl: AUDIO_URLS.fichaTecnica,
  },
};

export const SECTORS = [
  { id: "apresentacao", label: "Apresentação", path: "/apresentacao" },
  { id: "setor1", label: "Setor 1 - Mobília", path: "/setor1" },
  { id: "setor2", label: "Setor 2 - Ferramentas", path: "/setor2" },
  { id: "setor3", label: "Setor 3 - Sons", path: "/setor3" },
  { id: "ficha-tecnica", label: "Ficha Técnica", path: "/ficha-tecnica" },
];
