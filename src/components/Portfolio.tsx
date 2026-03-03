import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Instagram, Twitter } from 'lucide-react';

const trainers = [
    {
        id: 1,
        name: "Alex Kumar",
        role: "Head Coach",
        specialization: "Strength & HIIT",
        // Using high-quality fitness placeholders from Unsplash since AI image quota is exhausted 
        image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop",
        social: { instagram: "#", twitter: "#" }
    },
    {
        id: 2,
        name: "Neha Patel",
        role: "Yoga Instructor",
        specialization: "Vinyasa & Meditation",
        image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2120&auto=format&fit=crop",
        social: { instagram: "#", twitter: "#" }
    },
    {
        id: 3,
        name: "Vikram Singh",
        role: "Gym Trainer",
        specialization: "Bodybuilding",
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop",
        social: { instagram: "#", twitter: "#" }
    },
    {
        id: 4,
        name: "Sanya Mehta",
        role: "Fitness Coach",
        specialization: "Weight Loss",
        image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2070&auto=format&fit=crop",
        social: { instagram: "#", twitter: "#" }
    },
    {
        id: 5,
        name: "Arjun Rao",
        role: "CrossFit Coach",
        specialization: "Functional Training",
        image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop",
        social: { instagram: "#", twitter: "#" }
    },
    {
        id: 6,
        name: "Priya Iyer",
        role: "Yoga Therapist",
        specialization: "Therapeutic Yoga",
        image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2099&auto=format&fit=crop",
        social: { instagram: "#", twitter: "#" }
    }
];

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    }
};

const staggerItem: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: "spring" as const, stiffness: 100, damping: 15 }
    }
};

export default function Portfolio() {
    return (
        <section className="portfolio py-24 sm:py-32 px-6 relative w-full overflow-hidden bg-[#030305]">
            {/* Background glowing orbs */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[150px] pointer-events-none translate-y-1/3 -translate-x-1/3" />

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
                    }}
                    className="text-center mb-16 sm:mb-24"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 text-sm font-semibold tracking-widest uppercase mb-4">
                        Elite Team
                    </span>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-outfit font-black text-white tracking-tighter uppercase mb-6">
                        Meet Our Trainers
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto font-light leading-relaxed">
                        Industry-leading experts dedicated to pushing your limits and transforming your potential into performance.
                    </p>
                </motion.div>

                <motion.div
                    className="portfolio-grid"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {trainers.map((trainer) => (
                        <motion.div key={trainer.id} variants={staggerItem} className="trainer-card group">
                            <div className="trainer-image">
                                <img src={trainer.image} alt={trainer.name} />
                                <div className="trainer-info">
                                    <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider bg-black/50 text-white border border-white/20 rounded-full mb-3 backdrop-blur-md">
                                        {trainer.specialization}
                                    </span>
                                    <h3 className="text-2xl font-outfit font-bold text-white mb-1 uppercase tracking-tight">
                                        {trainer.name}
                                    </h3>
                                    <p className="text-slate-300 font-medium text-sm tracking-wide">
                                        {trainer.role}
                                    </p>

                                    <div className="trainer-socials">
                                        <a href={trainer.social.instagram} className="p-2 rounded-full bg-white/10 hover:bg-indigo-500/80 transition-colors duration-300 text-white">
                                            <Instagram className="w-4 h-4" />
                                        </a>
                                        <a href={trainer.social.twitter} className="p-2 rounded-full bg-white/10 hover:bg-purple-500/80 transition-colors duration-300 text-white">
                                            <Twitter className="w-4 h-4" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
