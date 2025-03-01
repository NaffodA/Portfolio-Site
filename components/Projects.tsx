import Image from 'next/image';
import Link from 'next/link';

const projects = [
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
      url: "https://your-project-link.com",
      github: "https://github.com/your-repo.git",
      tech: ["/React.png", "/JavaScript.png"],
    },
  ];
  
  export default function Projects() {
    return (
      <section id="projects" className="flex flex-col items-center justify-center w-full font-sans">
        <div className="text-[45px] mt-32">My Projects</div>
        {projects.map((project, index) => (
          <div
            key={index}
            className="w-1/3 h-[400px] border border-white/20 rounded-xl bg-white/10 backdrop-blur-lg flex flex-row justify-between items-center
            mb-8 mt-10 transition-transform duration-300 ease-in-out transform-gpu will-change-transform hover:scale-105 p-6"
          >
            <div className="w-1/3 flex ml-5 justify-center">
              <Link href={project.url}>
                <Image
                  src={project.image}
                  alt={`${project.name} Logo`}
                  width={200}
                  height={200}
                  className="object-contain"
                  priority={index === 0}
                />
              </Link>
            </div>
  
            <div className="w-2/3 flex flex-col justify-center items-center">
              <span className="text-white text-[30px] font-bold">{project.name}</span>
  
              <p className="text-white/90 text-center w-[300px] text-[18px] mt-2 ">
                {project.description}
              </p>

              <div className="flex items-center gap-4 mt-4">
                {project.tech.map((tech, i) => (
                  <div key={i} className="relative">
                    <Image src={tech} alt="Tech logo" width={40} height={40} className="object-contain" loading="lazy" />
                  </div>
                ))}
              </div>

              <div className="flex gap-6 mt-4">
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-[18px] underline text-blue-500">
                  View Project
                </a>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-[18px] underline text-blue-500">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </section>
    );
  }
  
  
