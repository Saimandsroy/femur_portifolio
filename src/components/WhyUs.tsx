import React, { useEffect, useRef } from 'react';
import { Layers, TrendingUp, Target, Infinity, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const WhyUs = () => {
    const sectionRef = useRef(null);
    const cardsRef = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".bento-card",
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const features = [
        {
            icon: <Layers className="w-8 h-8 text-indigo-400" />,
            title: "Full-Stack Expertise",
            tagline: "From code to campaigns",
            description: "Our team masters the entire digital spectrum—frontend to backend, infrastructure to marketing automation. One agency, complete solutions, zero gaps in execution.",
            colSpan: "md:col-span-1 lg:col-span-1",
            bgGradient: "from-indigo-500/10 to-purple-500/10"
        },
        {
            icon: <TrendingUp className="w-8 h-8 text-emerald-400" />,
            title: "Scalable Solutions",
            tagline: "Built for growth",
            description: "We engineer architectures that grow with your ambitions. Whether you're scaling from 100 to 100,000 users or expanding into new markets, our systems adapt seamlessly.",
            colSpan: "md:col-span-1 lg:col-span-1",
            bgGradient: "from-emerald-500/10 to-teal-500/10"
        },
        {
            icon: <Target className="w-8 h-8 text-rose-400" />,
            title: "Result-Driven",
            tagline: "Focused on ROI",
            description: "Every decision is measured. Every feature justified. We obsess over metrics that matter—conversion rates, user engagement, and bottom-line impact. Your success is our scorecard.",
            colSpan: "md:col-span-2 lg:col-span-1", // Spans 2 cols on medium, 1 on large
            bgGradient: "from-rose-500/10 to-orange-500/10"
        },
        {
            icon: <Infinity className="w-8 h-8 text-cyan-400" />,
            title: "End-to-End Service",
            tagline: "Development + Marketing under one roof",
            description: "No more vendor juggling. From initial code to launch campaigns and social growth, we handle the entire journey. Seamless integration, unified vision, faster results.",
            colSpan: "md:col-span-2 lg:col-span-3", // Full width on large
            bgGradient: "from-cyan-500/10 to-blue-500/10"
        }
    ];

    return (
        <section ref={sectionRef} className="py-32 relative z-10 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-20 text-center max-w-3xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                    Why Partner With Us
                </h2>
                <p className="text-lg md:text-xl text-slate-400 font-light leading-relaxed">
                    We don't just build products—we architect digital ecosystems that transform businesses.
                </p>
            </div>

            {/* Premium Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className={`bento-card group relative p-8 rounded-[2rem] bg-[#080808] border border-white/5 hover:border-white/10 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/10 ${feature.colSpan}`}
                    >
                        {/* Hover Gradient Effect */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />

                        <div className="relative z-10 flex flex-col h-full">
                            <div className="mb-6 p-4 rounded-2xl bg-white/5 w-fit border border-white/5 group-hover:scale-110 transition-transform duration-500">
                                {feature.icon}
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-2">{feature.title}</h3>
                            <p className="text-sm font-medium text-indigo-400 mb-4 uppercase tracking-wider">{feature.tagline}</p>
                            <p className="text-slate-400 leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                                {feature.description}
                            </p>

                            {/* Decorative Corner Icon */}
                            <div className="absolute top-8 right-8 text-white/5 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                                <ArrowRight className="w-6 h-6" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WhyUs;
