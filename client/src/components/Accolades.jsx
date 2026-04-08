import React from 'react';
import { motion } from 'framer-motion';
import { Award, Trophy, Code } from 'lucide-react';

const certificates = [
    "NPTEL DSA (Elite)",
    "NPTEL DBMS",
    "TATA Data Visualisation",
    "Google Data Analyst"
];

const hackathons = [
    {
        title: "Poster Presentation 2026",
        desc: "Implemented SMOTETomek + XGBoost for accurate flood prediction modeling."
    },
    {
        title: "SIH 2024 & 2025",
        desc: "Participated in team-based national level problem solving hackathons."
    },
    {
        title: "Odoo x GCET 2026",
        desc: "Developed a comprehensive HR Management solution using JavaScript."
    }
];

const Accolades = () => {
    return (
        <section id="accolades" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Achievements & Competitions</h2>
                    <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* Left Column: Certs & Awards */}
                    <div className="space-y-12">

                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5 }}
                        >
                            <h3 className="text-2xl font-bold text-dark mb-6 flex items-center">
                                <Award className="text-primary mr-3" size={28} /> Certificates
                            </h3>
                            <div className="bg-surface rounded-2xl p-6 md:p-8 border border-line">
                                <ul className="space-y-4 text-grayed">
                                    {certificates.map((cert, idx) => (
                                        <li key={idx} className="flex items-center">
                                            <div className="w-2 h-2 rounded-full bg-secondary mr-3"></div>
                                            <span className="text-lg font-medium text-dark">{cert}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <h3 className="text-2xl font-bold text-dark mb-6 flex items-center">
                                <Trophy className="text-yellow-500 mr-3" size={28} /> Awards
                            </h3>
                            <div className="bg-gradient-to-r from-yellow-500/10 to-transparent rounded-2xl p-6 md:p-8 border border-yellow-500/20">
                                <div className="flex items-start">
                                    <div className="bg-white p-3 rounded-xl shadow-sm mr-4 text-yellow-600 hidden sm:block">
                                        <Trophy size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-dark mb-1">Runner-Up UI/UX</h4>
                                        <p className="text-grayed text-sm mb-2">CognizanceX 2026 @ CHARUSAT</p>
                                        <p className="text-grayed">
                                            Secured runner-up position in a competitive UI/UX design challenge showcasing intuitive interface creation.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                    </div>

                    {/* Right Column: Hackathons */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <h3 className="text-2xl font-bold text-dark mb-6 flex items-center">
                            <Code className="text-secondary mr-3" size={28} /> Hackathons
                        </h3>
                        <div className="space-y-6">
                            {hackathons.map((hackathon, idx) => (
                                <div key={idx} className="bg-white rounded-2xl p-6 border border-line shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] hover:border-primary/30 transition-colors">
                                    <h4 className="text-xl font-bold text-dark mb-3">{hackathon.title}</h4>
                                    <p className="text-grayed leading-relaxed">{hackathon.desc}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                </div>

            </div>
        </section>
    );
};

export default Accolades;
