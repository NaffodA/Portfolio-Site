import Image from 'next/image';
import Link from 'next/link';

export default function Projects() {
    return (
        <section id="projects" className="flex flex-col items-center justify-center w-full font-sans ">
            <div className="w-1/3 h-[400px] border border-white/20 rounded-xl justify-between bg-white/10 backdrop-blur-lg flex mb-8 mt-40 
            transition-transform duration-300 ease-in-out hover:scale-105">
                <div className="relative mt-20 ml-10">
                    <Link href="https://www.saucyclub.co/">
                        <Image
                            src="/Robot.png"
                            alt="Robot picture"
                            width={200}
                            height={200}
                        />
                    </Link>
                </div>
                <span className="text-white mr-40 mt-10 text-[30px] font-bold">
                    Saucy
                </span>
                <span className="absolute w-[300px] right-16 top-28 text-[18px] text-center">
                    An interactive story-telling game where an AI creates the adventures and choices for you.
                    Hackathon project built with friends.
                </span>
                <span className="absolute right-56 bottom-24">
                    Created With:
                </span>
                <div className="absolute right-40 bottom-[85px] ">
                    <Image
                        src="/React.png"
                        alt="React logo"
                        width={40}
                        height={50}
                    />
                </div>
                <div className="absolute right-24 bottom-[85px] ">
                    <Image
                        src="/JavaScript.png"
                        alt="JS logo"
                        width={40}
                        height={50}
                    />
                </div>
                <span className="absolute left-20 bottom-10 text-[20px] underline text-blue-500">
                     <a href="https://www.saucyclub.co/" target="_blank" rel="noopener noreferrer">View Project </a>
                </span>
                <span className="absolute left-60 bottom-10 text-[20px] underline text-blue-500">
                     <a href="https://github.com/WangWNico/HackNYU2025.git" target="_blank" rel="noopener noreferrer">GitHub </a>
                     {/*rel paramter is security feature*/}
                </span>
            </div>

            <div className="w-1/3 h-[400px] border border-white/20 rounded-xl justify-between bg-white/10 backdrop-blur-lg flex mb-8 mt-10 
            transition-transform duration-300 ease-in-out hover:scale-105">
                <div className="relative mt-20 ml-8">
                    <Link href="">
                        <Image
                            src="/guessTheLogoCom.png"
                            alt="guessThe picture"
                            width={220}
                            height={200}
                            
                        />
                    </Link>
                </div>
                <span className="text-white mr-40 mt-10 text-[30px] font-bold">
                    Guess The
                </span>
                <span className="absolute w-[300px] right-16 top-28 text-[18px] text-center">
                    An interactive story-telling game where an AI creates the adventures and choices for you.
                    Hackathon project built with friends.
                </span>
                <span className="absolute right-56 bottom-24">
                    Created With:
                </span>
                <div className="absolute right-40 bottom-[85px] ">
                    <Image
                        src="/React.png"
                        alt="React logo"
                        width={40}
                        height={50}
                        className="object-contain"
                    />
                </div>
                <div className="absolute right-24 bottom-[85px] ">
                    <Image
                        src="/JavaScript.png"
                        alt="JS logo"
                        width={40}
                        height={50}
                        className="object-contain"
                    />
                </div>
                <span className="absolute left-20 bottom-10 text-[20px] underline text-blue-500">
                     <a href="https://www.saucyclub.co/" target="_blank" rel="noopener noreferrer">View Project </a>
                </span>
                <span className="absolute left-60 bottom-10 text-[20px] underline text-blue-500">
                     <a href="https://github.com/WangWNico/HackNYU2025.git" target="_blank" rel="noopener noreferrer">GitHub </a>
                     {/*rel paramter is security feature*/}
                </span>
            </div>
        </section>
    );
}
