'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
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
  {
    name: "AWS Translator",
    description: "A translator built using aws services that translates in real-time.",
    image: "/placeholder.png",
    url: "",
    github: "",
    tech: ["/React.png", "/JavaScript.png"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="flex flex-col items-center justify-center w-full font-sans">
      <div className="text-[45px] mt-40 mb-16">My Projects</div>
      {projects.map((project, index) => {
        const ref = useRef<HTMLDivElement>(null);
        const { scrollYProgress } = useScroll({
          target: ref,
          offset: ["0 1", "1.33 1"],
        });
        const scaleProgress = useTransform(scrollYProgress, [0,1], [0.8,1]);
        const opacityProgress = useTransform(scrollYProgress, [0,1], [0.7,1]);
        return (
          <motion.div
            key={index}
            ref={ref}
            className="w-1/3 h-[350px] border border-white/20 rounded-xl bg-white/10 backdrop-blur-lg flex flex-row justify-between items-center
              mb-5 mt-5 p-6"
            style={{
              scale: scaleProgress,
              opacity: opacityProgress,
            }}
          >
            <div className="w-1/3 flex ml-5 justify-center">
              <Link href={project.url}>
                <Image
                  src={project.image}
                  alt={`${project.name} Logo`}
                  width={200}
                  height={200}
                  className="object-contain"
                  priority
                />
              </Link>
            </div>

            <div className="w-2/3 flex flex-col justify-center items-center">
              <span className="text-white text-[30px] font-bold">{project.name}</span>

              <p className="text-white/90 text-center w-[300px] text-[18px] mt-2">
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
          </motion.div>
        );
      })}
    </section>
  );
}
