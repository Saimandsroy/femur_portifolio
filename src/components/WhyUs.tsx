import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const features = [
    {
        image: "/icon-speed.png",
        title: "Lightning Fast",
        tagline: "Speed",
        description: "Optimized for extreme performance.",
        bgGradient: "from-amber-500/20 to-orange-500/20"
    },
    {
        image: "/icon-security.png",
        title: "Bank-Grade Security",
        tagline: "Secure",
        description: "Fortified data protection systems.",
        bgGradient: "from-emerald-500/20 to-teal-500/20"
    },
    {
        image: "/icon-tech.png",
        title: "Future Ready Tech",
        tagline: "Innovation",
        description: "Built on next-gen architecture.",
        bgGradient: "from-indigo-500/20 to-purple-500/20"
    },
    {
        image: "/icon-global.png",
        title: "Global Scale",
        tagline: "Reach",
        description: "Infrastructure that spans borders.",
        bgGradient: "from-cyan-500/20 to-blue-500/20"
    },
    {
        image: "/icon-users.png",
        title: "User Centric",
        tagline: "Experience",
        description: "Designed for human connection.",
        bgGradient: "from-rose-500/20 to-pink-500/20"
    }
];

const WhyUs = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Entrance Animation
            gsap.fromTo(".why-us-card",
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%",
                        toggleActions: "play none none reverse"
                    }
                }
            );

            // Infinite Marquee Animation
            const marquee = gsap.to(trackRef.current, {
                xPercent: -50,
                ease: "none",
                duration: 40, // Slightly faster to show flow
                repeat: -1
            });

            const track = trackRef.current;
            if (track) {
                track.addEventListener("mouseenter", () => marquee.pause());
                track.addEventListener("mouseleave", () => marquee.play());
            }
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    // Duplicate for seamless loop
    const marqueeFeatures = [...features, ...features];

    return (
        <section ref={sectionRef} className="py-32 relative z-10 overflow-hidden bg-[#080808]">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />

            {/* Header */}
            <div className="mb-20 text-center max-w-3xl mx-auto px-6 relative z-10">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 tracking-tight">
                    Why Partner With Us
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-slate-400 font-light leading-relaxed">
                    We architect digital excellence.
                </p>
            </div>

            {/* Marquee Ribbon */}
            <div className="w-full overflow-hidden">
                <div
                    ref={trackRef}
                    className="flex gap-8 w-max pl-6"
                >
                    {marqueeFeatures.map((feature, index) => (
                        <div
                            key={`${feature.title}-${index}`}
                            className="why-us-card relative group flex-shrink-0 w-[260px] sm:w-[280px] md:w-[320px] h-[360px] sm:h-[380px] md:h-[420px] p-6 sm:p-8 rounded-[2rem] sm:rounded-[2.5rem] bg-[#0A0A0A] border border-white/5 hover:border-white/10 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/10 cursor-pointer"
                        >
                            {/* Hover Gradient Effect */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />

                            {/* Glass overlay on hover */}
                            <div className="absolute inset-0 bg-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
                                {/* Icon Container with Glow */}
                                <div className="mb-8 p-4 rounded-3xl bg-white/5 border border-white/5 shadow-2xl shadow-black/50 group-hover:scale-110 transition-transform duration-500 relative">
                                    {/* Inner Glow */}
                                    <div className={`absolute inset-0 blur-xl opacity-20 bg-gradient-to-br ${feature.bgGradient}`} />
                                    <img
                                        src={feature.image}
                                        alt={feature.title}
                                        className="w-24 h-24 object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                                    />
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-2">{feature.title}</h3>
                                <p className="text-sm font-medium text-slate-500 uppercase tracking-widest mb-4 group-hover:text-white/60 transition-colors">{feature.tagline}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyUs;
