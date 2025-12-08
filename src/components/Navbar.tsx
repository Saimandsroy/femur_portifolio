import { useRef } from 'react';
import { Menu } from 'lucide-react';

export default function Navbar() {
    const navRef = useRef<HTMLElement>(null);

    return (
        <nav ref={navRef} className="absolute top-0 w-full z-50 glass-nav transition-all duration-300">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <div className="flex items-center gap-3 group cursor-pointer">
                    <img
                        src="/femur-logo.jpg"
                        alt="Femur Studio"
                        className="w-10 h-10 rounded-lg object-contain border border-white/10"
                    />
                    <span className="font-semibold text-xl tracking-tight text-white group-hover:text-slate-300 transition-colors font-['Inter']">Femur Studio</span>
                </div>

                <div className="hidden md:flex items-center gap-1">
                    {['Projects', 'Services', 'Contact'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="relative px-4 py-2 text-sm font-medium text-slate-400 hover:text-white transition-all duration-300 rounded-full hover:bg-white/5 hover:shadow-[0_0_10px_rgba(255,255,255,0.1)]"
                        >
                            {item}
                        </a>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    <a href="#contact" className="relative p-[1px] rounded-full overflow-hidden group hidden md:inline-block hover:scale-105 transition-transform duration-300">
                        {/* Rotating Beam */}
                        <div className="absolute inset-[-100%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_70%,#22d3ee_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        {/* Static Border Base */}
                        <div className="absolute inset-[1px] rounded-full border border-white/10 bg-black/40 backdrop-blur-md" />

                        {/* Content */}
                        <div className="relative z-10 px-6 py-2 bg-transparent rounded-full text-sm font-medium text-white tracking-wide">
                            Get in touch
                        </div>
                    </a>
                    <button className="md:hidden text-white">
                        <Menu className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </nav>
    );
}
