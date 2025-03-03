import ProjectCard from "./ProjectCard";
export const projects = [
  {
    name: "Saucy",
    description: "An interactive storytelling game where AI generates adventures and choices.",
    image: "/Robot.png",
    url: "https://www.saucyclub.co/",
    github: "https://github.com/WangWNico/HackNYU2025.git",
    tech: ["/React.png", "/JavaScript.png"],
  },
  {
    name: "Guess The",
    description: "A guessing game with real-time data fetching and interactive feedback.",
    image: "/guessTheLogoCom.png",
    url: "",
    github: "https://github.com/NaffodA/Guess",
    tech: ["/React.png", "/JavaScript.png",],
  },
  {
    name: "AWS Translator",
    description: "A translator built using aws services that translates in real-time. (WIP)",
    image: "/placeholder.png",
    url: "",
    github: "",
    tech: ["/React.png", "/JavaScript.png", "/aws-white.png"],
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