import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import type { CaseStudy } from "../data/caseStudies";

interface CaseStudyCardProps {
    study: CaseStudy;
}

export default function CaseStudyCard({ study }: CaseStudyCardProps) {
    return (
        <Link
            to={`/case-studies/${study.slug}`}
            className="group glass-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between gap-6
                 hover:border-white/20 hover:scale-[1.02] transition-all duration-500 cursor-pointer"
        >
            {/* Top section */}
            <div>
                {/* Industry Tag */}
                <span
                    className="inline-block px-3 py-1 text-xs font-medium rounded-full mb-4
                     bg-gradient-to-r from-indigo-500/20 to-purple-500/20
                     text-indigo-300 border border-indigo-500/30"
                >
                    {study.industry}
                </span>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3 group-hover:text-gradient transition-all duration-300">
                    {study.title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">
                    {study.shortDescription}
                </p>
            </div>

            {/* CTA */}
            <div className="flex items-center gap-2 text-white/70 group-hover:text-white group-hover:gap-3 transition-all duration-300 text-sm font-medium">
                View Case Study
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center
                        group-hover:shadow-[0_0_15px_rgba(99,102,241,0.4)] transition-shadow duration-300">
                    <ArrowUpRight className="w-3.5 h-3.5 text-white" />
                </div>
            </div>
        </Link>
    );
}
