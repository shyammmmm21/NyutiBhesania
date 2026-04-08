import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const Experience = () => {
    return (
        <section id="experience" className="py-20 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Professional Experience</h2>
                    <div className="w-16 h-1 bg-secondary mx-auto rounded-full"></div>
                </motion.div>

                <div className="relative border-l-2 border-primary/20 ml-3 md:ml-6 pl-8 md:pl-10 py-4 space-y-12">

                    {/* Experience Item */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5 }}
                        className="relative"
                    >
                        {/* Timeline dot */}
                        <div className="absolute -left-[45px] md:-left-[53px] top-1 w-10 h-10 bg-white rounded-full border-4 border-primary/20 flex items-center justify-center">
                            <div className="w-3 h-3 rounded-full bg-primary"></div>
                        </div>

                        <div className="bg-surface rounded-2xl p-6 md:p-8 border border-line shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                                <div>
                                    <h3 className="text-2xl font-bold text-dark flex items-center">
                                        AI Intern
                                    </h3>
                                    <h4 className="text-xl text-primary font-medium mt-1">@ CodSoft</h4>
                                </div>
                                <div className="flex items-center text-grayed bg-white border border-line px-3 py-1.5 rounded-lg w-fit">
                                    <Briefcase size={16} className="mr-2" />
                                    Apr 2025 – May 2025
                                </div>
                            </div>

                            <div className="mb-6">
                                <span className="text-sm font-semibold text-dark uppercase tracking-wider">Tech Stack:</span>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {["Python", "scikit-learn", "Pandas", "NumPy"].map((skill, i) => (
                                        <span key={i} className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-2 text-grayed">
                                <p className="flex items-start">
                                    <span className="text-primary mr-2 mt-1">▹</span>
                                    Executed comprehensive data preprocessing pipelines ensuring high data quality for machine learning models.
                                </p>
                                <p className="flex items-start">
                                    <span className="text-primary mr-2 mt-1">▹</span>
                                    Delivered detailed data visualizations highlighting essential patterns to inform strategic analysis.
                                </p>
                                <p className="flex items-start">
                                    <span className="text-primary mr-2 mt-1">▹</span>
                                    Trained and optimized several machine learning models to solve classification and regression problems.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Experience;
