import { ArrowUpRight } from 'lucide-react';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Using fromTo for explicit control - ensures cards settle at opacity: 1
            gsap.fromTo(".project-card",
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        }, sectionRef);

        // Force refresh after a short delay to ensure proper calculations
        const timer = setTimeout(() => {
            ScrollTrigger.refresh();
        }, 150);

        return () => {
            ctx.revert();
            clearTimeout(timer);
        };
    }, []);

    const showcases = [
        {
            title: "Development Projects",
            description: "Explore our web and mobile applications",
            image: "/project-web.png",
            link: "https://web.femur.studio",
            accent: "from-cyan-500 to-blue-500"
        },
        {
            title: "Automation Solutions",
            description: "See our automation and integration work",
            image: "/project-automation.png",
            link: "https://automation.femur.studio",
            accent: "from-emerald-500 to-teal-500"
        },
        {
            title: "Marketing & Social",
            description: "Check our digital marketing campaigns and reels",
            image: "/project-marketing.png",
            link: "https://advertisement.femur.studio",
            accent: "from-purple-500 to-pink-500"
        }
    ];

    return (
        <section id="projects" ref={sectionRef} className="py-32 px-6 relative z-10">
            <div className="max-w-7xl mx-auto">
                <div className="mb-20 text-center">
                    <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-6">Explore Our Work</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                        Deep dive into our specialized portfolios across development, automation, and marketing.
                    </p>
                </div>

                {/* Scrollable Container for Mobile (Row), Grid for Tablet/Desktop */}
                {/* Scrollable Container for Mobile (Row), Flex Centered for Tablet/Desktop */}
                <div className="flex md:flex-wrap md:justify-center gap-6 md:gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-8 md:pb-0 px-2 md:px-0 -mx-6 md:mx-0 scrollbar-hide">
                    {showcases.map((project, index) => (
                        <a
                            key={index}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-card flex-shrink-0 w-[85vw] md:w-[350px] lg:w-[380px] h-[450px] snap-center rounded-[2rem] relative overflow-hidden border border-white/10 bg-[#050505] cursor-pointer hover:border-white/20 transition-all duration-500 first:ml-6 md:first:ml-0 last:mr-6 md:last:mr-0 group"
                        >
                            {/* Background Image with Zoom Effect */}
                            <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover" // Removed opacity-80 for better visibility
                                />
                                {/* Gradient Overlay - Smoother and less occluding */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90" />
                            </div>

                            {/* Content Content */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-end items-start z-10 pointer-events-none">
                                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <h3 className="text-3xl font-bold text-white mb-2 drop-shadow-lg">{project.title}</h3>
                                    <p className="text-slate-200 text-sm font-medium mb-6 opacity-90 group-hover:opacity-100 transition-opacity drop-shadow-md">
                                        {project.description}
                                    </p>

                                    {/* Animated Button */}
                                    <div className="inline-flex items-center gap-2 text-white font-medium group-hover:gap-3 transition-all duration-300">
                                        View Projects
                                        <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${project.accent} flex items-center justify-center`}>
                                            <ArrowUpRight className="w-4 h-4 text-white" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
