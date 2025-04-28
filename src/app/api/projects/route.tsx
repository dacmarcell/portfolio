import { NextRequest, NextResponse } from "next/server";

const projects = [
  {
    id: 8,
    title: "Simulador de crescimento poupulacional - Modelagem Computacional",
    description:
      "Um aplicativo interativo que permite visualizar modelos matemáticos de crescimento populacional ao longo do tempo. Esta ferramenta educativa simula como populações crescem sob diferentes condições através de dois modelos fundamentais: \n\nModelo Exponencial: Ilustra crescimento contínuo sem limitações de recursos\n\nModelo Logístico: Demonstra crescimento que desacelera ao se aproximar da capacidade de suporte do ambiente\n\nOs usuários podem ajustar parâmetros como população inicial, taxa de crescimento e capacidade de suporte, observando em tempo real como essas variáveis afetam o desenvolvimento populacional através de gráficos dinâmicos. Ideal para estudantes, educadores e profissionais interessados em ecologia, demografia, planejamento urbano e análise de dados.\n\nDesenvolvido com React, TypeScript e Recharts, o simulador oferece uma interface intuitiva para explorar conceitos matemáticos complexos de forma visual e acessível.Tentar novamenteO Claude pode cometer erros. Confira sempre as respostas.",
    url: "https://modelo-crescimento-populacional.vercel.app/",
    isFavorite: true,
    technologies: ["React", "Recharts", "HTML5", "CSS3"],
  },
  {
    id: 7,
    title: "Calculadora de pegada de carbono",
    description:
      "Uma API que calcula emissões de carbono baseada em consumo, dieta e meio de transporte do usuário",
    url: "https://github.com/dacmarcell/carbonFootprintCalculator",
    isFavorite: true,
    technologies: ["PHP", "Laravel", "PostgreSQL"],
  },
  {
    id: 5,
    title: "IdeaPlanAI",
    description:
      "Um analisador de projetos que utiliza IA para calcular os requisitos funcionais, não funcionais, estimativa de tempo, tecnologias recomendadas e desafios em potencial a partir do projeto proposto. O projeto foi desenvolvido com Node.js, Typescript, Docker e uma versão standalone do modelo nemotron da LLM llama3 para gerar as respostas.",
    url: "https://github.com/dacmarcell/IdeaPlanAI",
    isFavorite: false,
    technologies: ["Node.js", "Typescript", "Docker"],
  },
  {
    id: 6,
    title: "DevStackAPI",
    description:
      "Uma API para gerenciar dados de perfis de portfólios de desenvolvedores de software. Permite customizar individualmente por perfil. O projeto foi desenvolvido com C#, ASP.NET CORE 8, Entity Framework, SQL Server e Docker.",
    url: "https://github.com/dacmarcell/DevStackAPI",
    isFavorite: true,
    technologies: [
      "C#",
      "ASP.NET CORE 8",
      "Entity Framework",
      "SQL Server",
      "Docker",
    ],
  },

  {
    id: 1,
    title: "Barro Neles",
    description:
      "Site destinado a uma campanha política para vereador de uma cidade no interior da Bahia. O site foi desenvolvido com React e SCSS. O site é responsivo e interativo, com um design moderno e atraente. O site possui uma área de denúncias, uma área de propostas e uma página de contato direto com o candidato.",
    url: "https://www.barroneles.com/",
    isFavorite: true,
    technologies: ["React", "SCSS"],
  },
  {
    id: 2,
    title: "ChatterBox",
    description:
      "ChatterBox é um aplicativo de chat em tempo real desenvolvido com WebSockets utilizando FastAPI. Ele permite que os usuários se comuniquem de forma instantânea e eficiente, proporcionando uma experiência de chat simples e interativa. O aplicativo é responsivo e possui um design moderno e atraente.",
    url: "https://github.com/dacmarcell/chatterbox",
    isFavorite: false,
    technologies: ["FastAPI", "WebSockets"],
  },
  {
    id: 3,
    title: "CryptoGuardian",
    description:
      "API desenvolvida com o intuito de facilitar transações com moedas físicas para moedas digitais, especificamente Ethereum. Basta passar o valor mínimo e máximo que você tem disponível para fazer a transação e a API vai validar a transação como true (possível de ser feita) e false (impossível de ser feita). É uma API de validação. O projeto foi desenvolvido com Node.js.",
    url: "https://github.com/dacmarcell/cryptoguardian",
    isFavorite: false,
    technologies: ["Node.js"],
  },
  {
    id: 4,
    title: "GameRave",
    description:
      "GameRave é uma API construída para que os usuários podem criar jogos e fornecer críticas sobre eles. Além disso, apresenta um sistema de likes e dislikes. Perfeito para você desenvolver sua interface frontend com esta API completamente gratuita. O projeto foi desenvolvido com Node.js, TypeORM, PostgreSQL e Docker.",
    url: "https://github.com/dacmarcell/gamerave",
    isFavorite: false,
    technologies: ["Node.js", "TypeORM", "PostgreSQL", "Docker"],
  },
];

export async function GET(req: NextRequest) {
  const id = Number(req.nextUrl.searchParams.get("id"));

  if (id) {
    if (isNaN(id)) {
      return NextResponse.json({ error: "Id inválido" }, { status: 400 });
    }

    const project = projects.find((p) => p.id === id);
    if (!project) {
      return NextResponse.json(
        { error: "Projeto não encontrado" },
        { status: 404 }
      );
    }

    return NextResponse.json(project);
  }

  return NextResponse.json(projects);
}
