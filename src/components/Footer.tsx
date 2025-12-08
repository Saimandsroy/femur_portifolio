import { Github, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="border-t border-white/5 py-12 px-6 bg-black/40 backdrop-blur-xl">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-indigo-500 rounded flex items-center justify-center">
                        <span className="text-[10px] font-bold text-white">F</span>
                    </div>
                    <span className="text-sm font-medium text-slate-300">Femur Studio</span>
                </div>
                <div className="text-sm text-slate-500">
                    © 2024 Femur Studio. All rights reserved.
                </div>
                <div className="flex gap-6">
                    <a href="#" className="text-slate-500 hover:text-white transition-colors"><Github className="w-4 h-4" /></a>
                    <a href="#" className="text-slate-500 hover:text-white transition-colors"><Twitter className="w-4 h-4" /></a>
                    <a href="#" className="text-slate-500 hover:text-white transition-colors"><Linkedin className="w-4 h-4" /></a>
                </div>
            </div>
        </footer>
    );
}
