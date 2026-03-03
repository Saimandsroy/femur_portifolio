import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function NotFoundPage() {
    return (
        <div className="min-h-screen bg-[#030305] flex items-center justify-center px-6">
            <div className="text-center max-w-md">
                {/* 404 number */}
                <h1 className="text-8xl sm:text-9xl font-bold text-gradient mb-4 leading-none">404</h1>

                <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4">
                    Page not found
                </h2>

                <p className="text-slate-400 mb-10 leading-relaxed">
                    The page you're looking for doesn't exist or has been moved. Let's get you back on track.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full
                       bg-gradient-to-r from-indigo-600 to-purple-600
                       text-white font-semibold text-sm
                       hover:shadow-[0_0_25px_rgba(99,102,241,0.35)]
                       hover:scale-105 transition-all duration-300"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Home
                    </Link>

                    <Link
                        to="/case-studies"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full
                       border border-white/10 text-slate-300
                       hover:bg-white/5 hover:border-white/20
                       font-medium text-sm transition-all duration-300"
                    >
                        View Case Studies
                    </Link>
                </div>
            </div>
        </div>
    );
}
