import { useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';

export default function Hero() {
    const heroRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".fade-in-up", {
                y: 20, // Subtle slide-up
                opacity: 0,
                duration: 1,
                stagger: 0.15,
                ease: "power3.out",
                delay: 0.2
            });
        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={heroRef} className="min-h-screen flex items-center justify-center pt-16 sm:pt-20 px-4 sm:px-6 relative z-10">
            <div className="max-w-6xl mx-auto text-center">

                <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tighter leading-[0.9] mb-6 sm:mb-8 fade-in-up text-white drop-shadow-2xl">
                    BUILD.<br />
                    AUTOMATE.<br />
                    <span className="bg-gradient-to-r from-rose-500 to-rose-300 bg-clip-text text-transparent">
                        SCALE.
                    </span>

                </h1>

                <p className="text-base sm:text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto mb-8 sm:mb-12 leading-relaxed fade-in-up font-light tracking-wide drop-shadow-lg px-2 sm:px-0">
                    We build scalable web applications, intelligent automation systems, and complete digital solutions—from development to marketing.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 fade-in-up">
                    {/* Primary Button: View Work */}
                    <a href="#projects" className="relative p-[1px] rounded-full overflow-hidden group w-full sm:w-auto hover:scale-105 transition-transform duration-300">
                        {/* Rotating Border Beam */}
                        <div className="absolute inset-[-100%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_70%,#f43f5e_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        {/* Static Border (Fallback/Base) */}
                        <div className="absolute inset-[1px] rounded-full border border-white/10 bg-black/40 backdrop-blur-md" />

                        {/* Button Content */}
                        <div className="relative z-10 flex items-center justify-center gap-2 px-8 py-4 bg-transparent rounded-full text-white font-medium tracking-wide">
                            View Work
                            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </div>
                    </a>

                    {/* Secondary Button: Book a Call */}
                    <a href="https://cal.com/femurstudio/30min" target="_blank" rel="noopener noreferrer" className="relative p-[1px] rounded-full overflow-hidden group w-full sm:w-auto hover:scale-105 transition-transform duration-300">
                        {/* Rotating Border Beam */}
                        <div className="absolute inset-[-100%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_70%,#22d3ee_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        {/* Static Border (Fallback/Base) */}
                        <div className="absolute inset-[1px] rounded-full border border-white/10 bg-black/40 backdrop-blur-md" />

                        {/* Button Content */}
                        <div className="relative z-10 flex items-center justify-center gap-2 px-8 py-4 bg-transparent rounded-full text-white font-medium tracking-wide">
                            Book a Call
                        </div>
                    </a>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 fade-in-up">
                    <div className="w-[30px] h-[50px] rounded-full border-2 border-slate-500/30 flex justify-center p-2">
                        <div className="w-1 h-2 bg-slate-500 rounded-full animate-bounce" />
                    </div>
                </div>
            </div>
        </section >
    );
}
