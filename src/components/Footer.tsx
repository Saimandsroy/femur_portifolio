import React from 'react';
import { Github, Twitter, Linkedin, Instagram, Mail, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="relative z-10 pt-20 sm:pt-32 pb-8 px-6 bg-black border-t border-white/10">
            <div className="max-w-[1400px] mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
                    {/* COLUMN 1 - BRAND */}
                    <div className="col-span-2 md:col-span-2 lg:col-span-1 space-y-8">
                        <div className="space-y-4">
                            {/* Minimalist Logo Box */}
                            <div className="w-12 h-12 bg-white flex items-center justify-center">
                                <span className="text-2xl font-bold text-black font-sans tracking-tighter">F</span>
                            </div>
                            <span className="block text-2xl font-bold text-white tracking-tighter">Femur Studio</span>
                        </div>
                        <p className="text-zinc-500 text-sm leading-relaxed max-w-xs font-light">
                            Engineering digital dominance. We build the systems that power the future.
                        </p>
                        <div className="flex gap-4">
                            <SocialIcon href="https://linkedin.com" icon={<Linkedin className="w-4 h-4" />} />
                            <SocialIcon href="https://instagram.com" icon={<Instagram className="w-4 h-4" />} />
                            <SocialIcon href="https://twitter.com" icon={<Twitter className="w-4 h-4" />} />
                            <SocialIcon href="https://github.com" icon={<Github className="w-4 h-4" />} />
                        </div>
                    </div>

                    {/* COLUMN 2 - PORTFOLIO */}
                    <div>
                        <h4 className="text-white font-semibold tracking-wide uppercase text-xs mb-8 opacity-60">Portfolios</h4>
                        <ul className="space-y-4">
                            <FooterLink href="https://web.femur.studio">Development</FooterLink>
                            <FooterLink href="https://automation.femur.studio">Automation</FooterLink>
                            <FooterLink href="https://advertisement.femur.studio">Marketing</FooterLink>
                            <FooterLink href="#">Case Studies</FooterLink>
                        </ul>
                    </div>

                    {/* COLUMN 3 - SERVICES */}
                    <div>
                        <h4 className="text-white font-semibold tracking-wide uppercase text-xs mb-8 opacity-60">Services</h4>
                        <ul className="space-y-4">
                            <FooterLink href="#">Web Development</FooterLink>
                            <FooterLink href="#">Mobile Apps</FooterLink>
                            <FooterLink href="#">System Architecture</FooterLink>
                            <FooterLink href="#">UI/UX Design</FooterLink>
                        </ul>
                    </div>

                    {/* COLUMN 4 - CONTACT */}
                    <div>
                        <h4 className="text-white font-semibold tracking-wide uppercase text-xs mb-8 opacity-60">Contact</h4>
                        <div className="space-y-6">
                            <div className="space-y-1 group cursor-pointer">
                                <span className="text-xs text-zinc-500 uppercase tracking-wider block group-hover:text-white transition-colors">Email</span>
                                <div className="flex items-center gap-2 text-zinc-300 group-hover:text-white transition-colors duration-300">
                                    <Mail className="w-4 h-4" />
                                    <a href="mailto:contact@femur.studio" className="font-light">contact@femur.studio</a>
                                </div>
                            </div>

                            <div className="space-y-1 group cursor-pointer">
                                <span className="text-xs text-zinc-500 uppercase tracking-wider block group-hover:text-white transition-colors">Studio</span>
                                <div className="flex items-center gap-2 text-zinc-300 group-hover:text-white transition-colors duration-300">
                                    <MapPin className="w-4 h-4" />
                                    <span className="font-light">Bilaspur, CG, India</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* BOTTOM BAR */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-zinc-600 text-xs text-center md:text-left font-mono uppercase tracking-wider">
                        © 2025 Femur Studio
                    </p>

                    <div className="flex gap-8 text-xs font-mono uppercase tracking-wider text-zinc-600">
                        <a href="#" className="hover:text-white transition-colors">Privacy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms</a>
                        <a href="#" className="hover:text-white transition-colors">Sitemap</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

const SocialIcon = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-black hover:bg-white hover:border-white transition-all duration-300"
    >
        {icon}
    </a>
);

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <li>
        <a
            href={href}
            className="text-zinc-400 hover:text-white transition-colors text-sm font-light flex items-center gap-2 group tracking-wide"
        >
            <span className="w-0 group-hover:w-2 h-[1px] bg-white transition-all duration-300" />
            <span className="group-hover:translate-x-1 transition-transform duration-300">{children}</span>
        </a>
    </li>
);

export default Footer;
