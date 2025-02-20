import Image from 'next/image'

export default function Skills() {
    return (
        <section id="skills" className="flex flex-col items-center justify-center h-screen w-full font-san">
            <div className="w-1/3 h-[400px] border border-white/20 rounded-xl bg-white/10 backdrop-blur-lg flex flex-col items-center
            transition-transform duration-300 ease-in-out hover:scale-105 p-5">

                <span className="text-[30px] font-bold mb-8">My Skills</span>

                {/* Grid container for images and text */}
                <div className="grid grid-cols-3 gap-10 text-white text-center">
                    {[
                        { src: "/React.png", alt: "React", name: "React" },
                        { src: "/JavaScript.png", alt: "JavaScript", name: "JavaScript" },
                        { src: "/Node.js.png", alt: "Node.js", name: "Node.js" },
                        { src: "/TypeScript.png", alt: "TypeScript", name: "TypeScript" },
                        { src: "/Java.png", alt: "Java", name: "Java" },
                        { src: "/Tailwind CSS.png", alt: "Tailwind CSS", name: "Tailwind CSS" }
                    ].map((skill) => (
                        <div key={skill.name} className="flex flex-col items-center">
                            <div className="relative w-[60px] h-[60px]">
                                <Image src={skill.src} alt={skill.alt} layout="fill" objectFit="contain" />
                            </div>
                            <span className="mt-2 text-[15px]">{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
