import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
    {
        title: "Web Development",
        description: "React • Next.js • Node.js",
        image: "/service-web.png",
        accent: "border-indigo-500/30"
    },
    {
        title: "Mobile Development",
        description: "iOS • Android • React Native",
        image: "/service-mobile.png",
        accent: "border-orange-500/30"
    },
    {
        title: "Automation Solutions",
        description: "Python • AI Agents • n8n",
        image: "/service-automation.png",
        accent: "border-cyan-500/30"
    },
    {
        title: "Digital Marketing",
        description: "SEO • Analytics • Growth",
        image: "/service-marketing.png",
        accent: "border-purple-500/30"
    },
    {
        title: "Social Media Growth",
        description: "Content • Strategy • Viral",
        image: "/service-social.png",
        accent: "border-pink-500/30"
    }
];

export default function Services() {
    const sectionRef = useRef<HTMLElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Entrance Animation
            gsap.fromTo(".service-card",
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 85%", // Trigger slightly earlier
                        toggleActions: "play none none reverse"
                    }
                }
            );

            // Robust Marquee Animation
            // We use xPercent: -50 because the track contains exactly 2 sets of items.
            // Moving by -50% shifts the track by exactly one full set width.
            const marquee = gsap.to(trackRef.current, {
                xPercent: -50,
                ease: "none",
                duration: 60, // Even slower for majestic large card scroll
                repeat: -1
            });

            // Pause on Hover
            const track = trackRef.current;
            if (track) {
                track.addEventListener("mouseenter", () => marquee.pause());
                track.addEventListener("mouseleave", () => marquee.play());
            }

        }, sectionRef);

        // Force refresh to ensure positions are correct after render
        const timer = setTimeout(() => {
            ScrollTrigger.refresh();
        }, 100);

        return () => {
            ctx.revert();
            clearTimeout(timer);
        };
    }, []);

    // Duplicate services exactly once for seamless loop (2 sets total)
    const marqueeServices = [...services, ...services];

    return (
        <section id="services" ref={sectionRef} className="py-24 min-h-[800px] bg-[#0a0a0a] relative overflow-hidden flex flex-col justify-center">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[400px] bg-indigo-500/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="max-w-[1400px] mx-auto px-6 mb-16 text-center relative z-10">
                <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Our Services</h2>
                <p className="text-slate-400 max-w-2xl mx-auto">
                    Comprehensive digital solutions tailored to elevate your business.
                </p>
            </div>

            {/* Infinite Marquee Container */}
            <div className="w-full overflow-hidden">
                <div
                    ref={trackRef}
                    className="flex gap-8 w-max pr-8" // Slightly tighter gap for the smaller size
                >
                    {marqueeServices.map((service, index) => (
                        <div
                            key={`${service.title}-${index}`}
                            className={`service-card flex-shrink-0 w-[360px] h-[420px] group relative bg-[#050505] rounded-[2rem] border border-white/[0.08] overflow-hidden cursor-pointer hover:border-white/20 transition-all duration-700`}
                        >
                            {/* Ambient Light - Soft radial glow from top center for studio vibe */}
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.03),transparent_70%)] pointer-events-none" />

                            {/* Image Container */}
                            <div className="absolute inset-0 flex items-center justify-center pb-16 group-hover:scale-105 transition-transform duration-700 ease-out">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-[200px] h-[200px] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)] z-0"
                                />
                            </div>

                            {/* Content - Bottom Left */}
                            <div className="absolute bottom-0 left-0 w-full p-8 z-20">
                                <h3 className="text-xl font-medium text-white mb-2 tracking-tight">{service.title}</h3>
                                <p className="text-sm text-slate-500 font-medium tracking-wide">
                                    {service.description}
                                </p>
                            </div>

                            {/* Hover Overlay */}
                            <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-white/[0.02]`} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
