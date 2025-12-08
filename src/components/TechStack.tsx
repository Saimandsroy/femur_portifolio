import { Code2, FileJson, Terminal, Server, DatabaseBackup, Cloud } from 'lucide-react';

export default function TechStack() {
    return (
        <section id="stack" className="py-24 px-6 border-y border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-sm font-semibold uppercase tracking-widest text-indigo-400 mb-2">Technology Stack</h2>
                    <p className="text-slate-400">Tools we use to build the future.</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 text-center opacity-70">
                    <div className="flex flex-col items-center gap-3 hover:opacity-100 transition-opacity">
                        <Code2 className="w-8 h-8 text-slate-300" />
                        <span className="text-sm font-medium text-slate-300">React / Next.js</span>
                    </div>
                    <div className="flex flex-col items-center gap-3 hover:opacity-100 transition-opacity">
                        <FileJson className="w-8 h-8 text-slate-300" />
                        <span className="text-sm font-medium text-slate-300">TypeScript</span>
                    </div>
                    <div className="flex flex-col items-center gap-3 hover:opacity-100 transition-opacity">
                        <Terminal className="w-8 h-8 text-slate-300" />
                        <span className="text-sm font-medium text-slate-300">Python</span>
                    </div>
                    <div className="flex flex-col items-center gap-3 hover:opacity-100 transition-opacity">
                        <Server className="w-8 h-8 text-slate-300" />
                        <span className="text-sm font-medium text-slate-300">Node.js</span>
                    </div>
                    <div className="flex flex-col items-center gap-3 hover:opacity-100 transition-opacity">
                        <DatabaseBackup className="w-8 h-8 text-slate-300" />
                        <span className="text-sm font-medium text-slate-300">PostgreSQL</span>
                    </div>
                    <div className="flex flex-col items-center gap-3 hover:opacity-100 transition-opacity">
                        <Cloud className="w-8 h-8 text-slate-300" />
                        <span className="text-sm font-medium text-slate-300">AWS / Vercel</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
