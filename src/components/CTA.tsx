export default function CTA() {
    return (
        <section id="contact" className="py-32 px-6">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white mb-8">
                    Ready to scale your <br /> digital presence?
                </h2>
                <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
                    Let's discuss how we can help your team ship better products faster.
                </p>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                    <a href="mailto:hello@femurstudio.com" className="w-full sm:w-auto px-8 py-4 bg-white text-black text-sm font-semibold rounded-full hover:bg-slate-200 transition-colors">
                        Book a Free Consultation
                    </a>
                </div>
            </div>
        </section>
    );
}
