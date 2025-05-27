"use client";
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

type ProjectProps = {
    project: {
      name: string;
      description: string;
      image: string;
      url: string;
      github: string;
      tech: string[];
    };
  };

  export default function ProjectCard({ project }: ProjectProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["0 1", "1.33 1"],
    });
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  
    return (
      <motion.div
        ref={ref}
        className="w-[700px] h-[400px] border border-white/20 rounded-xl bg-white/10 backdrop-blur-lg flex flex-row justify-between items-center
          mb-5 mt-5 p-6"
        style={{
          scale: scaleProgress,
          opacity: opacityProgress,
          willChange: 'transform, opacity',
        }}
      >
        <div className= "flex flex-row items-center justify-between w-full">
          <div className="w-[300px] ml-5 ">
            <Image
              src={project.image}
              alt={`${project.name} Logo`}
              width={300}
              height={300}
              className="object-contain"
              loading="lazy"
            />
          </div>

          <div className="w-[400px] flex flex-col justify-center items-center">
            <span className="text-white text-[35px] font-bold">{project.name}</span>

            <p className="text-white text-center w-[300px] text-[18px] mt-2">
              {project.description}
            </p>

            <div className="flex items-center gap-4 mt-4">
              {project.tech.map((tech, i) => (
                <div key={i} className="relative border text-sm text-black border-slate-300 rounded-full p-2 bg-slate-300">
                  <div> {tech} </div>
                </div>
              ))}
            </div>

            <div className="flex gap-6 mt-4">
              {project.url && (
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-[18px] underline text-blue-500">
                  View Website
                </a>
              )}
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-[18px] underline text-blue-500">
                  GitHub
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    );
  }