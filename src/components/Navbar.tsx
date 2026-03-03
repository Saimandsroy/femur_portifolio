import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useSectionNavigator } from '../context/NavigationContext';

interface NavbarProps {
    isHomePage?: boolean;
}

// Section index mapping: Hero=0, Services=1, Projects=2, WhyUs=3, Testimonials=4, CTA=5, Footer=6
const navLinkToSection: Record<string, number> = {
    'Projects': 2,
    'Services': 1,
    'Contact': 6,
};

export default function Navbar({ isHomePage }: NavbarProps) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const navigate = useNavigate();
    const onNavigate = useSectionNavigator();

    const navLinks = ['Projects', 'Services', 'Case Studies', 'Contact'];

    const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
    const closeMobileMenu = () => setMobileMenuOpen(false);

    const handleNavClick = (item: string, e: React.MouseEvent) => {
        e.preventDefault();

        if (item === 'Case Studies') {
            navigate('/case-studies');
            closeMobileMenu();
            return;
        }

        if (isHomePage && onNavigate) {
            const sectionIndex = navLinkToSection[item];
            if (sectionIndex !== undefined) {
                onNavigate(sectionIndex);
            }
        } else {
            // Navigate to home page first, then scroll
            navigate('/');
        }
        closeMobileMenu();
    };

    return (
        <>
            <nav className="fixed top-0 w-full z-50 glass-nav transition-all duration-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-2 sm:gap-3 group cursor-pointer">
                        <img
                            src="/femur-logo.jpg"
                            alt="Femur Studio"
                            className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg object-contain border border-white/10"
                        />
                        <span className="font-semibold text-lg sm:text-xl tracking-tight text-white group-hover:text-slate-300 transition-colors font-['Inter']">Femur Studio</span>
                    </Link>

                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((item) => (
                            <a
                                key={item}
                                href={item === 'Case Studies' ? '/case-studies' : `#${item.toLowerCase()}`}
                                onClick={(e) => handleNavClick(item, e)}
                                className="relative px-4 py-2 text-sm font-medium text-slate-400 hover:text-white transition-all duration-300 rounded-full hover:bg-white/5 hover:shadow-[0_0_10px_rgba(255,255,255,0.1)]"
                            >
                                {item}
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-3 sm:gap-4">
                        <a
                            href="#contact"
                            onClick={(e) => handleNavClick('Contact', e)}
                            className="relative p-[1px] rounded-full overflow-hidden group hidden md:inline-block hover:scale-105 transition-transform duration-300"
                        >
                            {/* Rotating Beam */}
                            <div className="absolute inset-[-100%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_70%,#22d3ee_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Static Border Base */}
                            <div className="absolute inset-[1px] rounded-full border border-white/10 bg-black/40 backdrop-blur-md" />

                            {/* Content */}
                            <div className="relative z-10 px-6 py-2 bg-transparent rounded-full text-sm font-medium text-white tracking-wide">
                                Get in touch
                            </div>
                        </a>
                        <button
                            className="md:hidden text-white p-2 hover:bg-white/5 rounded-lg transition-colors"
                            onClick={toggleMobileMenu}
                            aria-label="Toggle menu"
                        >
                            <Menu className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] transition-opacity duration-300 md:hidden ${mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onClick={closeMobileMenu}
            />

            {/* Mobile Menu Drawer */}
            <div
                className={`fixed top-0 right-0 h-full w-72 sm:w-80 bg-[#0A0A0A] border-l border-white/10 z-[70] transform transition-transform duration-300 ease-out md:hidden ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <div className="flex items-center justify-between p-4 border-b border-white/5">
                    <span className="text-white font-semibold text-lg">Menu</span>
                    <button
                        onClick={closeMobileMenu}
                        className="p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                        aria-label="Close menu"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <div className="p-4 space-y-2">
                    {navLinks.map((item) => (
                        <a
                            key={item}
                            href={item === 'Case Studies' ? '/case-studies' : `#${item.toLowerCase()}`}
                            onClick={(e) => handleNavClick(item, e)}
                            className="block px-4 py-3 text-lg font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-200"
                        >
                            {item}
                        </a>
                    ))}
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-white/5">
                    <a
                        href="#contact"
                        onClick={(e) => handleNavClick('Contact', e)}
                        className="block w-full py-4 text-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl hover:opacity-90 transition-opacity"
                    >
                        Get in Touch
                    </a>
                </div>
            </div>
        </>
    );
}
