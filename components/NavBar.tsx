"use client";
import { Fira_Sans } from "next/font/google";

const firaSans= Fira_Sans({
    subsets:['latin'],
    weight: ['500'],
    variable: '--font-firaSans',
});

export default function Navbar() {
  const sections = ["home","projects","skills","about" ];
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 w-1/4 z-50 flex justify-center gap-1 mt-5 shadow-[0_0px_35px_rgba(227,255,82,0.25)] border-solid rounded-xl bg-slate-500/75 ">
      {sections.map((section) => (
        <button
          key={section}
          onClick={() => scrollToSection(section)}
          className= {`text-[22px] p-5 text-white hover:text-blue-500 ${firaSans.variable} font-serif`}
        >
          {section.charAt(0).toUpperCase() + section.slice(1)}
        </button>
      ))}
    </nav>
  );
}
