import { useEffect, useRef } from 'react';
import { Star, Calendar } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
    {
        name: "Laksmi Sahu",
        role: "Founder, KuberFashion",
        image: "LS",
        content: "Honestly, the new checkout flow is a game changer. We're seeing way fewer abandonments—like 40% less. And the inventory sync? Saved me so many headaches. It just works.",
        project: "E-com Rebuild",
        rating: 5,
        date: "Oct 12, 2024",
        color: "from-pink-500 to-rose-500",
        zIndex: 30
    },
    {
        name: "Amit Kumar",
        role: "CMO, LinkMgmt",
        image: "AK",
        content: "They just get it. Most devs don't understand marketing, but Femur does. The landing pages converted way better right out of the gate. Super smooth process having them on board.",
        project: "Conversion Opt",
        rating: 5,
        date: "Nov 05, 2024",
        color: "from-blue-500 to-cyan-500",
        zIndex: 20
    },
    {
        name: "Vikram Singh",
        role: "Ops Head, Servox",
        image: "VS",
        content: "I was drowning in vendor spreadsheets. The automation system they built is beautiful. Everything is automatic now. Plus, our Instagram is actually growing for once!",
        project: "Automation",
        rating: 5,
        date: "Sep 28, 2024",
        color: "from-emerald-500 to-teal-500",
        zIndex: 10
    }
];

const Testimonials = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(containerRef.current,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 75%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-32 relative z-10 px-6 overflow-hidden min-h-[800px] flex flex-col justify-center">
            {/* Scoped Styles for Testimonial Stack - Using unique class names */}
            <style>
                {`
                /* Desktop Expansion */
                @media (min-width: 1024px) {
                    .testimonial-stack-container:hover .testimonial-stack-card-0 {
                        transform: translateX(-110%) translateY(0) rotate(-4deg) scale(0.9) !important;
                        opacity: 1 !important;
                    }
                    .testimonial-stack-container:hover .testimonial-stack-card-1 {
                        transform: translateX(0) translateY(-20px) scale(1) !important;
                        opacity: 1 !important;
                        z-index: 50 !important;
                    }
                    .testimonial-stack-container:hover .testimonial-stack-card-2 {
                        transform: translateX(110%) translateY(0) rotate(4deg) scale(0.9) !important;
                        opacity: 1 !important;
                    }
                }
                
                /* Mobile/Tablet Vertical Expansion */
                @media (max-width: 1023px) {
                    .testimonial-stack-container:hover .testimonial-stack-card-0 { 
                        transform: translateY(-105%) scale(0.9) !important;
                        opacity: 1 !important;
                    }
                    .testimonial-stack-container:hover .testimonial-stack-card-1 {
                        transform: translateY(0) scale(1) !important;
                        z-index: 50 !important;
                        opacity: 1 !important;
                    }
                    .testimonial-stack-container:hover .testimonial-stack-card-2 {
                        transform: translateY(105%) scale(0.9) !important;
                        opacity: 1 !important;
                    }
                }
                `}
            </style>

            {/* Header */}
            <div className="mb-24 text-center max-w-3xl mx-auto relative z-10">
                <span className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white/5 border border-white/5 text-sm font-medium text-indigo-400 backdrop-blur-sm">
                    Real Feedback
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 tracking-tight">
                    What People Are Saying
                </h2>
                <p className="text-slate-400">
                    Straight from the founders we work with.
                </p>
            </div>

            {/* Stack Container - Using unique class instead of 'group' */}
            <div ref={containerRef} className="testimonial-stack-container relative w-full max-w-[1000px] mx-auto h-[400px] flex justify-center">

                {testimonials.map((testimonial, index) => (
                    <div
                        key={index}
                        className={`
                            testimonial-stack-card-${index}
                            absolute top-0
                            w-[calc(100%-2rem)] sm:w-full max-w-[400px] h-auto p-6 sm:p-8 
                            rounded-[2rem] bg-[#0A0A0A] border border-white/10 shadow-2xl shadow-indigo-500/10
                            transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]
                            origin-bottom
                            flex flex-col
                        `}
                        style={{
                            zIndex: testimonial.zIndex,
                            transform: index === 0
                                ? 'translateY(0) scale(1)'
                                : index === 1
                                    ? 'translateY(15px) scale(0.95)'
                                    : 'translateY(30px) scale(0.90)',
                            opacity: index === 0 ? 1 : 1 - (index * 0.2)
                        }}
                    >
                        {/* Top Row */}
                        <div className="flex justify-between items-start mb-6">
                            <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center text-white font-bold shadow-lg`}>
                                {testimonial.image}
                            </div>
                            <div className="flex gap-1" aria-label={`${testimonial.rating} stars`}>
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                                ))}
                            </div>
                        </div>

                        {/* Content */}
                        <p className="text-slate-300 leading-relaxed mb-6 font-medium text-lg">
                            "{testimonial.content}"
                        </p>

                        {/* Divider */}
                        <div className="w-full h-px bg-white/5 mb-6" />

                        {/* Footer Info */}
                        <div className="flex justify-between items-end mt-auto">
                            <div>
                                <h4 className="text-white font-bold">{testimonial.name}</h4>
                                <p className="text-sm text-slate-500 mb-1">{testimonial.role}</p>
                                <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-white/5 border border-white/5 text-indigo-300">
                                    {testimonial.project}
                                </span>
                            </div>

                            <div className="flex items-center gap-1.5 text-xs text-slate-500 opacity-60">
                                <Calendar className="w-3 h-3" />
                                <time>{testimonial.date}</time>
                            </div>
                        </div>

                        {/* Hover Gradient Overlay */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.color} opacity-0 transition-opacity duration-500 rounded-[2rem] pointer-events-none`} />
                    </div>
                ))}
            </div>

            <div className="text-center mt-20 md:mt-12 text-slate-500 text-sm animate-pulse">
                Hover to see all stories
            </div>
        </section>
    );
};

export default Testimonials;
