import { NextResponse } from "next/server";

const months: { [key: string]: number } = {
  janeiro: 0,
  fevereiro: 1,
  março: 2,
  abril: 3,
  maio: 4,
  junho: 5,
  julho: 6,
  agosto: 7,
  setembro: 8,
  outubro: 9,
  novembro: 10,
  dezembro: 11,
};

function getDuration(period: string) {
  const [start, end] = period.split(" - ");
  const [startMonth, startYear] = start.split(" de ");
  const [endMonth, endYear] = end.split(" de ");

  const dataInicio = new Date(parseInt(startYear), months[startMonth.trim()]);
  const dataFim = new Date(parseInt(endYear), months[endMonth.trim()]);

  const monthDiff =
    (dataFim.getFullYear() - dataInicio.getFullYear()) * 12 +
    (dataFim.getMonth() - dataInicio.getMonth()) +
    1;

  if (monthDiff >= 12) {
    const yearDiff = Math.floor(monthDiff / 12);
    const remainingMonths = monthDiff % 12;
    return `${yearDiff} ${yearDiff > 1 ? "anos" : "ano"}${
      remainingMonths > 0 ? ` e ${remainingMonths} meses` : ""
    }`;
  }

  return `${monthDiff} ${monthDiff > 1 ? "meses" : "mês"}`;
}

export async function GET() {
  const experiences = [
     {
      enterprise: "Horizon Inovação e Tecnologia",
      position: "Desenvolvedor de Software FullStack Junior",
      period: "maio de 2025 - atualmente",
      location: "Salvador, Bahia, Brasil",
      description:
        "Liderança no desenvolvimento de aplicativos escaláveis e de alta performance com Laravel, Vue.js e React. Implantação em ambientes Oracle e Locaweb, garantindo estabilidade e segurança. Utilização estratégica de metodologias ágeis e inteligência artificial (Lovable e Cursor) para acelerar entregas e maximizar resultados. Gestão eficiente de projetos e coordenação de equipe com três desenvolvedores, assegurando qualidade e inovação contínua.",
    },
    {
      enterprise: "SOFTPAR BRASIL LTDA",
      position: "Desenvolvedor de Software FullStack Junior",
      period: "janeiro de 2025 - maio de 2025",
      location: "Salvador, Bahia, Brasil",
      description:
        "Responsável pelo desenvolvimento de aplicativos escaláveis e dinâmicos, utilizando Laravel e Quasar (Vue.js). Trabalho com metodologias ágeis (Scrum). Realizo a implantação de sistemas em AWS EC2 e S3, além de gerenciar o controle de versões com Git e Gogs.",
    },
    {
      enterprise: "Diamantes Consultoria",
      position: "Desenvolvedor de software líder",
      period: "maio de 2024 - janeiro de 2025",
      location: "Salvador, Bahia, Brasil",
      description:
        "Liderei projetos de desenvolvimento de software corporativo, implementando Git Flow e semantic versioning para garantir a organização e rastreabilidade do código além da implementação de arquiteturas escaláveis. Projetos incluíram a criação de soluções escaláveis usando TypeScript, Next.js, Node.js, e automação de processos, além de otimização de queries PostgreSQL para melhorar a performance do sistema.",
    },
    {
      enterprise: "Diamantes Consultoria",
      position: "Desenvolvedor de Software FullStack Junior",
      period: "fevereiro de 2024 - janeiro de 2025",
      location: "Salvador, Bahia, Brasil",
      description:
        "Desenvolvimento de soluções escaláveis usando Typescript, Next.js e Node.js. Automação de processos, desenvolvimento de landing pages de qualidade em tempo recorde.",
    },
    {
      enterprise: "INFINITY SCHOOL - Visual Art Creative Center",
      position: "Information Technology Teacher",
      period: "fevereiro de 2024 - abril de 2024",
      location: "Salvador, Bahia, Brasil",
      description:
        "Planejei e ministrei aulas de programação e desenvolvimento web, com foco em HTML, CSS, JavaScript, e Python. Promovi o aprendizado prático, capacitando os alunos com conceitos essenciais da indústria.",
    },
    {
      enterprise: "GoodVibe",
      position: "Mobile Developer",
      period: "abril de 2023 - agosto de 2023",
      location: "Salvador, Bahia, Brasil",
      description:
        "No projeto GoodVibe, desenvolvi um aplicativo mobile usando React Native para oferecer suporte psicológico acessível. Trabalhei no backend com Node.js, Express.js, e Sequelize.js, e utilizei Redux Saga para gerenciamento de estado eficiente, garantindo alta qualidade de código com Jest para testes.",
    },
  ];

  const formattedExperiences = experiences.map((experience, index) => ({
    id: index + 1,
    ...experience,
    duration: getDuration(experience.period),
  }));

  return NextResponse.json(formattedExperiences);
}
