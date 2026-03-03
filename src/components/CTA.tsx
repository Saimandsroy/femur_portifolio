import { useEffect, useRef, useState } from 'react';
import { Zap, Copy, Check } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CTA = () => {
    const sectionRef = useRef(null);
    const cardRef = useRef<HTMLDivElement>(null);
    const [copied, setCopied] = useState(false);

    // Magnetic Button State
    const btnRef = useRef<HTMLAnchorElement>(null);

    useEffect(() => {
        const card = cardRef.current;
        if (!card) return;

        // --------------------------------------------------------
        // 3D TILT EFFECT
        // --------------------------------------------------------
        const handleMouseMove = (e: MouseEvent) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // Calculate rotation (-15 to 15 degrees)
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / centerY) * -10; // Inverted for natural tilt
            const rotateY = ((x - centerX) / centerX) * 10;

            gsap.to(card, {
                rotateX: rotateX,
                rotateY: rotateY,
                duration: 0.5,
                ease: "power2.out",
                transformPerspective: 1000,
                transformStyle: "preserve-3d"
            });
        };

        const handleMouseLeave = () => {
            gsap.to(card, {
                rotateX: 0,
                rotateY: 0,
                duration: 0.8,
                ease: "elastic.out(1, 0.5)"
            });
        };

        card.addEventListener('mousemove', handleMouseMove);
        card.addEventListener('mouseleave', handleMouseLeave);

        // --------------------------------------------------------
        // ENTRANCE ANIMATION
        // --------------------------------------------------------
        const ctx = gsap.context(() => {
            gsap.fromTo(card,
                { y: 100, opacity: 0, rotateX: 20 },
                {
                    y: 0,
                    opacity: 1,
                    rotateX: 0,
                    duration: 1.5,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 70%"
                    }
                }
            );
        }, sectionRef);

        return () => {
            card.removeEventListener('mousemove', handleMouseMove);
            card.removeEventListener('mouseleave', handleMouseLeave);
            ctx.revert();
        };
    }, []);

    const handleCopy = () => {
        navigator.clipboard.writeText("contact@femur.studio");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section ref={sectionRef} id="contact" className="min-h-screen flex items-center justify-center p-6 relative z-10 perspective-[2000px]">

            {/* 1. THE GLASS MONOLITH CARD */}
            <div
                ref={cardRef}
                className="w-full max-w-5xl aspect-[4/5] md:aspect-[16/9] relative rounded-[3rem] group isolate"
                style={{ transformStyle: 'preserve-3d' }}
            >
                {/* 2. GLOWING BORDER */}
                <div className="absolute inset-[-4px] rounded-[3.2rem] bg-gradient-to-r from-amber-500/30 via-purple-500/30 to-amber-500/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                {/* 3. MAIN CARD BACKGROUND */}
                <div className="absolute inset-0 rounded-[3rem] bg-[#050508]/80 backdrop-blur-[40px] border border-white/10 overflow-hidden shadow-2xl shadow-indigo-500/20">

                    {/* Animated Gradient Orbs */}
                    <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '6s' }} />
                    <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-amber-600/10 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '8s', animationDelay: '1s' }} />

                    {/* Grid Texture */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />

                    {/* Content Container */}
                    <div className="relative z-10 h-full flex flex-col items-center justify-center text-center p-8 md:p-20">

                        {/* Floating Badge */}
                        <div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-12 transform translate-z-[50px] transition-transform duration-500"
                            style={{ transform: 'translateZ(50px)' }}
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                            </span>
                            <span className="text-xs font-semibold text-amber-200 tracking-widest uppercase">Accepting New Projects</span>
                        </div>

                        {/* HEADLINE */}
                        <h2
                            className="text-6xl sm:text-7xl md:text-9xl font-bold tracking-tighter text-white mb-8 leading-[0.9] transform translate-z-[80px]"
                            style={{ transform: 'translateZ(80px)' }}
                        >
                            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">READY</span>
                            <div className="flex items-center justify-center gap-4 sm:gap-8">
                                <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">TO</span>
                                <span className="block italic text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500 font-serif">Scale?</span>
                            </div>
                        </h2>

                        <p
                            className="text-lg sm:text-xl text-zinc-400 max-w-xl mx-auto mb-16 font-light leading-relaxed transform translate-z-[60px]"
                            style={{ transform: 'translateZ(60px)' }}
                        >
                            Join the elite circle of brands dominating their industry with <span className="text-white font-medium">Femur Studio</span>.
                        </p>

                        {/* BUTTONS */}
                        <div
                            className="flex flex-col sm:flex-row items-center gap-6 transform translate-z-[100px]"
                            style={{ transform: 'translateZ(100px)' }}
                        >
                            <a
                                ref={btnRef}
                                href="https://cal.com/femurstudio/30min"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative w-full sm:w-auto px-10 py-5 bg-white text-black text-lg font-bold rounded-full overflow-hidden flex items-center justify-center gap-3 hover:scale-105 transition-all duration-300 shadow-[0_0_40px_-5px_rgba(255,255,255,0.3)]"
                            >
                                <span className="relative z-10">Start Your Project</span>
                                <Zap className="w-5 h-5 relative z-10 group-hover:rotate-12 transition-transform duration-300 fill-black" />
                                <div className="absolute inset-0 bg-gradient-to-r from-amber-200 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </a>

                            <button
                                onClick={handleCopy}
                                className="group w-full sm:w-auto px-8 py-5 bg-white/5 text-white text-lg font-medium rounded-full border border-white/10 hover:bg-white/10 hover:border-white/30 transition-all duration-300 flex items-center justify-center gap-3 backdrop-blur-md"
                            >
                                {copied ? <Check className="w-5 h-5 text-green-400" /> : <Copy className="w-5 h-5" />}
                                <span>{copied ? 'Copied!' : 'Copy Email'}</span>
                            </button>
                        </div>

                    </div>
                </div>

                {/* 4. REFLECTION OVERLAY */}
                <div
                    className="absolute inset-0 rounded-[3rem] bg-[linear-gradient(120deg,transparent_30%,rgba(255,255,255,0.1)_45%,transparent_50%)] bg-[length:200%_200%] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                    style={{ backgroundPosition: '100% 100%' }}
                />
            </div>

        </section>
    );
};

export default CTA;
