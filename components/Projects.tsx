import ProjectCard from "./ProjectCard";
export const projects = [
  {
    name: "Saucy",
    description: "Participated in a hackathon with friends. Created an interactive storytelling game where AI generates the adventures and choices.",
    image: "/Robot.png",
    url: "https://www.saucyclub.co/",
    github: "https://github.com/WangWNico/HackNYU2025.git",
    tech: ["React", "JavaScript", "Gemini"],
  },
  {
    name: "AWS Translator",
    description: "Team of two school project. Built a translator using AWS services that translates text from one language to another. Currently supports English, Spanish, and French.",
    image: "/translatorimg2.png",
    url: "https://lextranslator.vercel.app/",
    github: "https://github.com/NaffodA/translator",
    tech: ["React", "JavaScript", "AWS", "Tailwind"],
  },
  {
    name: "Guess The",
    description: "A simple, home-made guess the pokemon game. After each guess, the game will tell you if you got the attributes right or wrong.",
    image: "/guessTheLogoCom.png",
    url: "",
    github: "https://github.com/NaffodA/Guess",
    tech: ["React", "JavaScript", "Poke API"],
  },
];
export default function Projects() {
  return (
    <section id="projects" className="flex flex-col items-center justify-center w-full font-sans">
      <div className="text-[45px] mt-40 mb-16">My Projects</div>
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </section>
  );
}