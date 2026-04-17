import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `Spojenie poctivého remesla, skúseností a modernej výstavby.

V PreciseBau staviame na kvalite, spoľahlivosti a praktickom prístupe k práci. Venujeme sa rôznym stavebným činnostiam a záleží nám na presnosti v každom detaile – či už ide o citlivú obnovu historických objektov, alebo realizáciu moderných novostavieb. Našim cieľom je odviesť poctivú prácu a dodať výsledok, na ktorý sa dá spoľahnúť.`;

export const ABOUT_TEXT = `
Rekonštrukcie a renovácie historických budov:
PreciseBau pristupuje k starým objektom s hlbokým rešpektom k ich histórii. 
Špecializujeme sa na citlivú obnovu pamiatkovo chránených budov, kaštieľov 
či meštianskych domov, kde využívame tradičné materiály a postupy 
v kombinácii s modernou technológiou.

Reštaurátorské práce:
Súčasťou našej ponuky sú špecializované reštaurátorské činnosti, vrátane 
obnovy fasád, reštaurovania umelecko-remeselných prvkov, historických 
omietok a interiérových detailov.

Novostavby:
Okrem historických objektov staviame aj moderné rodinné domy, vily 
a administratívne budovy na kľúč.

Komplexné stavebné práce:
Naša firma pokrýva kompletný rozsah stavebných prác – od hrubej stavby 
až po finálne interiérové úpravy.
`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "DŽURŇÁK, spol. s r.o.",
    image: project4,
    description:
      "Rekonštrukčné práce, obnova starších nehnuteľností, rekonštrukcie bytov",
    technologies: ["Omietky", "Špalety", "Obkladačské práce", "Murárske práce"],
  },
  {
    title: "Goral Stavby Bau s.r.o.",
    image: project2,
    description:
      "Realizácia novostavieb, murárske práce, realizácie omietok, fasád a obkladačské práce.",
    technologies: ["Murárske práce", "Obkladačské práce","Tesárske práce","Práca s interierovým drevom"],
  },
  {
    title: "Denkmalpflege Mühlhausen, Huschenbeth GmbH & Co.Kg",
    image: project3,
    description:
      "Rekonštrukcia historických budov, kamenárske práce, renovácia fasád a omietok. Reštaurátorské práce.",
    technologies: ["Kamenárske práce", "Reštauratorské práce", "Renovácie fasád a omietok","Zhotovenie historických omietok"],
  },
];

export const CONTACT = {
  name:"Precise Bau - Ing. Peter Krempaský ml.",
  address: "Spišské Hanušovce 71, 059 04 ",
  phoneNo: "+421 904 949 273 ",
  email: "precisebau.krempasky@gmail.com ",
  id:"IČO: 50 978 861 ",
  taxId:"DIČ: 1083776353"
};
