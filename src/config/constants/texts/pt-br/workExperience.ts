import { WorkExperienceTexts } from "@/types/texts";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { tags } from "../../tags";

const getFormattedDate = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

const formattedDate: string = getFormattedDate();

export const workExperience: WorkExperienceTexts = {
  title: "Experiência Profissional",
  experiences: [
    {
      name: "Desenvolvedor Web Full Stack",
      companyName: "CoreLab",
      description:
        "Criei novas funcionalidades no front-end com React e no back-end com Node.js, assegurando interfaces intuitivas e APIs robustas, realizei a manutenção de sistemas, corrigindo bugs e otimizando o desempenho das aplicações, utilizando PostgreSQL para gerenciar e otimizar bancos de dados, participei de code reviews e sessões de pair programming, promovendo boas práticas de programação e aprendizado contínuo, e contribui para a implementação de tecnologias emergentes como Next.js e usei Docker para facilitar o deployment e a escalabilidade das aplicações.",
      from: "2024-02-05",
      to: formattedDate,
      tags: [tags["React.js"], tags["Node"], tags["Typescript"], tags["PostgreSQL"]],
      icon: "React.js",
    },
    {
      name: "Desenvolvedor Web Full Stack",
      companyName: "BlumeTalk",
      description:
        "Desenvolvi integrações para expandir as funcionalidades da plataforma BlumeTalk, criei scripts de automação para deploys e testes, aumentando a eficiência e reduzindo erros, implementei práticas de segurança como criptografia de dados e autenticação multifator para proteger as informações dos usuários e produzi documentação técnica detalhada para APIs e funcionalidades, facilitando a manutenção e compreensão pelas equipes.",
      from: "2022-02-05",
      to: "2024-02-29",
      tags: [tags["React.js"], tags["Node"], tags["PostgreSQL"]],
      icon: "React.js",
    },
    {
      name: "Monitor de Desenvolvimento Web",
      companyName: "Kenzie Academy Brasil",
      description:
        "Como monitor na Kenzie Academy, ajudei os alunos a entender conceitos complexos de programação, oferecendo suporte personalizado e trabalhando junto aos instrutores. Organizei sessões de estudo em grupo, revisões de código e workshops práticos, visando capacitar os alunos com habilidades necessárias para suas carreiras na tecnologia.",
      from: "2022-02-05",
      to: "2023-03-01",
      tags: [tags["React.js"], tags["Typescript"], tags["Python"], tags["Django"], tags["Node"], tags["PostgreSQL"], tags["PrismaORM"]],
      icon: "React.js",
    },
    {
      name: "Desenvolvedor Web Front-End",
      companyName: "Prime Interway",
      description:
        "Integrei serviços de automação comercial e mobilidade corporativa à plataforma Prime Interway, melhorando a eficiência dos processos, desenvolvi scripts de automação para processos internos e de clientes, aumentando a agilidade e reduzindo erros operacionais, implementei medidas de segurança como criptografia de dados e autenticação multifator, garantindo a proteção das informações, e criei documentação técnica detalhada, facilitando a manutenção e o entendimento dos sistemas por outras equipes.",
      from: "2020-07-05",
      to: "2021-12-01",
      tags: [tags["React.js"], tags["Typescript"]],
      icon: "React.js",
    },

  ],
};
