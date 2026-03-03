import { Link } from "react-router-dom";
import CaseStudyCard from "../components/CaseStudyCard";
import { caseStudies } from "../data/caseStudies";
import { ArrowLeft } from "lucide-react";

export default function CaseStudiesPage() {
    return (
        <div className="min-h-screen bg-[#030305] text-slate-200">
            {/* Header */}
            <section className="relative pt-32 pb-16 px-6 overflow-hidden">
                {/* Background glow */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gradient-to-b from-indigo-500/8 via-purple-500/4 to-transparent rounded-full blur-3xl" />
                </div>

                <div className="relative max-w-7xl mx-auto">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8 text-sm"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Home
                    </Link>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mb-6">
                        Case Studies
                    </h1>
                    <p className="text-slate-400 max-w-2xl text-lg leading-relaxed">
                        Real results for real businesses. Explore how we've helped our clients
                        achieve exceptional growth through technology and creativity.
                    </p>
                </div>
            </section>

            {/* Grid */}
            <section className="px-6 pb-24">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {caseStudies.map((study) => (
                            <CaseStudyCard key={study.slug} study={study} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
