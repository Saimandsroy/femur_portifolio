import { Link } from "react-router-dom";
import { AlertCircle, Lightbulb, TrendingUp, Layers, ArrowUpRight, Crosshair, LayoutTemplate } from "lucide-react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import type { CaseStudy } from "../data/caseStudies";
import Portfolio from "./Portfolio";

interface CaseStudyLayoutProps {
    data: CaseStudy;
}

export default function CaseStudyLayout({ data }: CaseStudyLayoutProps) {
    const accentGradient = data.themeAccent || "from-indigo-500 to-purple-500";
    const accentBg = data.themeAccent ? `bg-gradient-to-r ${accentGradient} bg-clip-text text-transparent` : "text-white";
    const accentButton = data.themeAccent ? `bg-gradient-to-r ${accentGradient} text-black font-bold` : "bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold";

    const fadeUp: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    // Split title into brand name and tagline at the em-dash
    const titleParts = data.title.split(" — ");
    const brandName = titleParts[0] || data.title;
    const tagline = titleParts[1] || "";

    return (
        <div className="min-h-screen bg-[#030305] text-slate-200 selection:bg-white/20">
            {/* ── Hero ── */}
            <section className="relative pt-32 pb-28 px-6 overflow-hidden min-h-[80vh] flex flex-col justify-center">
                {/* Background Image & Overlays */}
                {data.heroImage && (
                    <div className="absolute inset-0 z-0">
                        <img
                            src={data.heroImage}
                            alt={`${data.title} hero`}
                            className="w-full h-full object-cover object-top"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#030305] via-[#030305]/70 to-[#030305]/40" />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#030305]/80 via-transparent to-transparent" />
                    </div>
                )}

                {/* Background glow orbs */}
                <div className="absolute inset-0 pointer-events-none z-0">
                    <div className={`absolute -top-40 right-0 w-[500px] h-[500px] bg-gradient-to-bl ${data.themeAccent || 'from-indigo-500/10 via-purple-500/5'} to-transparent rounded-full blur-[120px] opacity-20`} />
                </div>

                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: {},
                        visible: { transition: { staggerChildren: 0.12 } }
                    }}
                    className="relative z-10 max-w-7xl mx-auto w-full"
                >
                    {/* Industry pill */}
                    <motion.div variants={fadeUp}>
                        <span
                            className={`inline-block px-4 py-1.5 text-[11px] font-semibold rounded-full mb-6 uppercase tracking-[0.2em]
                           bg-white/5 border border-white/10 ${accentBg}`}
                        >
                            {data.industry}
                        </span>
                    </motion.div>

                    {/* Brand name — big and bold */}
                    <motion.h1
                        variants={fadeUp}
                        className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-outfit font-black text-white tracking-tighter leading-[0.95] uppercase"
                    >
                        {brandName}
                    </motion.h1>

                    {/* Tagline — smaller, elegant */}
                    {tagline && (
                        <motion.p
                            variants={fadeUp}
                            className={`mt-4 text-xl sm:text-2xl md:text-3xl font-outfit font-light tracking-tight ${accentBg}`}
                        >
                            {tagline}
                        </motion.p>
                    )}

                    {/* Accent divider line */}
                    <motion.div variants={fadeUp} className="mt-10">
                        <div className={`h-[2px] w-24 bg-gradient-to-r ${accentGradient} opacity-60`} />
                    </motion.div>
                </motion.div>
            </section>

            {/* ── Project Overview (Optional) ── */}
            {data.projectOverview && (
                <section className="py-20 sm:py-28 px-6 border-b border-white/5 relative z-10 bg-[#030305]">
                    <motion.div
                        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
                        className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20"
                    >
                        <div className="lg:col-span-4 relative">
                            <div className="sticky top-32">
                                <h2 className="font-outfit text-xs font-bold text-slate-500 uppercase tracking-[0.25em] flex items-center gap-3 mb-6">
                                    <span className={`w-8 h-[2px] bg-gradient-to-r ${accentGradient} opacity-50`}></span>
                                    Project Overview
                                </h2>
                                {/* Short description as a pull quote */}
                                <p className="text-lg text-slate-400 font-light leading-relaxed italic border-l-2 border-white/10 pl-5">
                                    {data.shortDescription}
                                </p>
                            </div>
                        </div>
                        <div className="lg:col-span-8">
                            <p className="text-xl sm:text-2xl text-slate-300 leading-[1.8] font-light">
                                {data.projectOverview}
                            </p>
                        </div>
                    </motion.div>
                </section>
            )}

            {/* ── Problem ── */}
            <section className="py-20 sm:py-28 px-6 relative z-10">
                <div className="max-w-7xl mx-auto">
                    <div className={`grid grid-cols-1 ${data.problemImage ? 'lg:grid-cols-2' : ''} gap-12 lg:gap-20 items-center`}>
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="order-2 lg:order-1">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                                    <AlertCircle className="w-5 h-5 text-slate-400" />
                                </div>
                                <h2 className="text-2xl sm:text-3xl font-outfit font-bold text-white tracking-tight">The Problem</h2>
                            </div>
                            <div className="premium-glass rounded-2xl p-8 sm:p-10">
                                <p className="text-slate-300 leading-relaxed text-lg font-light">
                                    {data.problem}
                                </p>
                            </div>
                        </motion.div>

                        {data.problemImage && (
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }}
                                viewport={{ once: true, margin: "-100px" }}
                                className="order-1 lg:order-2 relative"
                            >
                                <div className={`absolute -inset-4 bg-gradient-to-l ${accentGradient} opacity-15 blur-3xl rounded-full`} />
                                <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                                    <img src={data.problemImage} alt="The Problem" className="w-full h-auto object-cover" />
                                </div>
                            </motion.div>
                        )}
                    </div>
                </div>
            </section>

            {/* ── Strategy (Optional) ── */}
            {data.strategy && (
                <section className="py-20 sm:py-28 px-6">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="max-w-4xl mx-auto">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                                <Crosshair className="w-5 h-5 text-slate-400" />
                            </div>
                            <h2 className="text-2xl sm:text-3xl font-outfit font-bold text-white tracking-tight">Strategy & Approach</h2>
                        </div>
                        <div className="premium-glass rounded-2xl p-8 sm:p-10">
                            <p className="text-slate-300 leading-relaxed text-lg font-light">
                                {data.strategy}
                            </p>
                        </div>
                    </motion.div>
                </section>
            )}

            {/* ── Solution ── */}
            <section className="py-20 sm:py-28 px-6 relative z-10">
                <div className="max-w-7xl mx-auto">
                    <div className={`grid grid-cols-1 ${data.solutionImage ? 'lg:grid-cols-2' : ''} gap-12 lg:gap-20 items-center`}>
                        {data.solutionImage && (
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }}
                                viewport={{ once: true, margin: "-100px" }}
                                className="relative"
                            >
                                <div className={`absolute -inset-4 bg-gradient-to-r ${accentGradient} opacity-15 blur-3xl rounded-full`} />
                                <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                                    <img src={data.solutionImage} alt="Our Solution" className="w-full h-auto object-cover" />
                                </div>
                            </motion.div>
                        )}

                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className={data.solutionImage ? '' : 'max-w-4xl mx-auto'}>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                                    <Lightbulb className="w-5 h-5 text-slate-400" />
                                </div>
                                <h2 className="text-2xl sm:text-3xl font-outfit font-bold text-white tracking-tight">Our Solution</h2>
                            </div>
                            <div className="premium-glass rounded-2xl p-8 sm:p-10">
                                <p className="text-slate-300 leading-relaxed text-lg font-light">
                                    {data.solution}
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ── Design Breakdown (Optional) ── */}
            {data.designBreakdown && data.designBreakdown.length > 0 && (
                <section className="py-28 sm:py-36 px-6 bg-black/40">
                    <div className="max-w-6xl mx-auto">
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="flex flex-col items-center gap-3 mb-20 justify-center text-center">
                            <LayoutTemplate className="w-7 h-7 text-slate-500" />
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-outfit font-bold text-white tracking-tighter">Design Breakdown</h2>
                        </motion.div>
                        <div className="space-y-24 sm:space-y-36">
                            {data.designBreakdown.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, margin: "-100px" }}
                                    variants={fadeUp}
                                    className={`flex flex-col gap-10 lg:gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
                                >
                                    <div className="flex-1 space-y-4">
                                        <h3 className="text-2xl sm:text-3xl font-outfit font-bold text-white tracking-tight">{item.title}</h3>
                                        <p className="text-slate-400 text-lg font-light leading-relaxed">{item.description}</p>
                                    </div>
                                    <div className="flex-[1.5] w-full relative">
                                        <div className={`absolute -inset-3 bg-gradient-to-r ${accentGradient} opacity-15 blur-2xl rounded-2xl`} />
                                        <div className="relative rounded-2xl overflow-hidden premium-glass p-2 sm:p-3">
                                            <div className="rounded-xl overflow-hidden border border-white/10 bg-[#030305]">
                                                <img src={item.imagePath} alt={item.title} className="w-full h-auto object-cover transform hover:scale-[1.03] transition-transform duration-700" />
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* ── Results ── */}
            <section className="py-24 sm:py-32 px-6 relative z-10">
                <div className="max-w-6xl mx-auto">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
                        <div className="text-center mb-16">
                            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-6">
                                <TrendingUp className="w-6 h-6 text-slate-400" />
                            </div>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-outfit font-bold text-white tracking-tighter">Project Results</h2>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                            {data.results.map((result, i) => {
                                // Split result into metric and label (e.g., "65% Increase in Trial Bookings")
                                const parts = result.match(/^([\d.×%<>+\-]+[×%s]*)\s+(.+)$/);
                                const metric = parts ? parts[1] : result;
                                const label = parts ? parts[2] : "";

                                return (
                                    <motion.div
                                        key={i}
                                        variants={{
                                            hidden: { opacity: 0, y: 20 },
                                            visible: { opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }
                                        }}
                                        className="premium-glass rounded-2xl p-8 relative overflow-hidden group hover:-translate-y-1 transition-all duration-500"
                                    >
                                        {/* Accent top border */}
                                        <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${accentGradient} opacity-60`} />

                                        {/* Index number */}
                                        <span className="text-[10px] font-mono text-slate-600 uppercase tracking-widest mb-4 block">0{i + 1}</span>

                                        {/* Large metric */}
                                        <p className={`text-4xl sm:text-5xl font-outfit font-black tracking-tight ${accentBg} mb-3 leading-none`}>
                                            {metric}
                                        </p>

                                        {/* Label */}
                                        {label && (
                                            <p className="text-sm text-slate-400 font-medium uppercase tracking-wider leading-snug">
                                                {label}
                                            </p>
                                        )}
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ── Custom Component: Trainers Portfolio ── */}
            {data.slug === "trainers-portfolio" && (
                <Portfolio />
            )}

            {/* ── Tech Stack ── */}
            <section className="py-24 sm:py-32 px-6 relative z-10 bg-[#030305]">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-6">
                            <Layers className="w-6 h-6 text-slate-400" />
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-outfit font-bold text-white tracking-tighter">Technology Stack</h2>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {data.techStack.map((tech, i) => (
                            <motion.div
                                key={i}
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: { opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }
                                }}
                                className="premium-glass rounded-xl p-6 text-center group hover:border-white/15 transition-all duration-400 relative overflow-hidden"
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${accentGradient} opacity-0 group-hover:opacity-[0.06] transition-opacity duration-500`} />
                                <span className="relative z-10 text-base font-outfit font-semibold text-slate-300 group-hover:text-white transition-colors duration-300">
                                    {tech}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* ── CTA ── */}
            <section className="py-28 sm:py-36 px-6 relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-t ${data.themeAccent || 'from-indigo-500/10 via-purple-500/5'} to-transparent rounded-full blur-[120px] opacity-15`} />
                </div>

                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-3xl mx-auto text-center relative">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-outfit font-bold text-white mb-6 tracking-tighter">
                        Want results like this?
                    </h2>
                    <p className="text-slate-400 text-lg md:text-xl mb-10 max-w-xl mx-auto font-light leading-relaxed">
                        Let's build something extraordinary together.
                    </p>
                    <Link
                        to="/"
                        className={`inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-base uppercase tracking-[0.1em]
                       ${accentButton}
                       hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]`}
                    >
                        Start Your Project
                        <ArrowUpRight className="w-5 h-5" />
                    </Link>
                </motion.div>
            </section>
        </div>
    );
}
