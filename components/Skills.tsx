import Image from 'next/image'
const skills = [
    { src: "/React.png", alt: "React", name: "React" },
    { src: "/JavaScript.png", alt: "JavaScript", name: "JavaScript" },
    { src: "/Node.js.png", alt: "Node.js", name: "Node.js" },
    { src: "/TypeScript.png", alt: "TypeScript", name: "TypeScript" },
    { src: "/Java.png", alt: "Java", name: "Java" },
    { src: "/Tailwind CSS.png", alt: "Tailwind CSS", name: "Tailwind CSS" },
    { src: "/nextWhite.png", alt: "next", name: "Next" },
    { src: "/HTML5.png", alt: "html", name: "HTML" },
    { src: "/css.png", alt: "css", name: "CSS" },
    { src: "/sql.png", alt: "sql", name: "SQL" },
    { src: "/kotlin.png", alt: "kotlin", name: "Kotlin" },
    { src: "/C++.png", alt: "C++", name: "C++" },
    
]
export default function Skills() {
    return (
        <section id="skills" className="flex flex-col items-center justify-center h-screen w-full font-san">
            <div className="w-1/3 h-[500px] border border-white/20 rounded-xl bg-white/10 backdrop-blur-lg flex flex-col items-center
            transition-transform duration-300 ease-in-out transform-gpu will-change-transform hover:scale-105 p-5">

                <span className="text-[30px] font-bold mb-8">Skillset</span>

                <div className="grid grid-cols-4 gap-20">
                    {skills.map((skill) => (
                        <div key={skill.name} className="flex flex-col items-center">
                            <div>
                                <Image src={skill.src} alt={skill.alt} width={60} height={60} className="object-contain" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
