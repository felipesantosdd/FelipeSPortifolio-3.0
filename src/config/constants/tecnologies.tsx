import { Tecnology } from "@/types/tecnologies";
import { AArrowDown } from "lucide-react";
import { AiOutlineDotNet } from "react-icons/ai";
import { FaCss3Alt, FaHtml5, FaJava, FaNode, FaPython, FaReact } from "react-icons/fa";
import { BiLogoPostgresql, BiLogoMongodb } from "react-icons/bi";
import { SiNextdotjs, SiNestjs, SiCsharp, SiTsnode } from "react-icons/si";
import { FaGolang } from "react-icons/fa6";
import { IoLogoDocker, IoLogoVue, IoLogoElectron, IoLogoJavascript } from "react-icons/io5";

export const tecnologies: Tecnology[] = [
  {
    name: "React",
    icon: FaReact,
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
  },
  {
    name: "Node.js",
    icon: FaNode,
  },
  {
    name: "Java",
    icon: FaJava,
  },
  {
    name: "HTML5",
    icon: FaHtml5,
  },
  {
    name: "CSS3",
    icon: FaCss3Alt
  },
  {
    name: "JavaScript",
    icon: IoLogoJavascript
  },
  {
    name: "Python",
    icon: FaPython
  },
  {
    name: "Docker",
    icon: IoLogoDocker,
  },
  {
    name: "Nest",
    icon: SiNestjs
  },
  {
    name: "Vue.js",
    icon: IoLogoVue
  },
  {
    name: "MongoDB",
    icon: BiLogoMongodb
  },
  {
    name: "Postgres",
    icon: BiLogoPostgresql
  },
  {
    name: "Electron",
    icon: IoLogoElectron
  },
  {
    name: "C#",
    icon: SiCsharp
  },
  {
    name: "Go",
    icon: FaGolang
  },
  {
    name: "TypeScript",
    icon: SiTsnode
  },
];
