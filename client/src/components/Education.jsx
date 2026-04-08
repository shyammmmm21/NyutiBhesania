import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const educationData = [
    {
        degree: "B.Tech Information Technology",
        institution: "CHARUSAT University",
        score: "CGPA 8.92",
        duration: "2023 – Present"
    },
    {
        degree: "Higher Secondary (GSEB)",
        institution: "Javiya Schooling",
        score: "72%",
        duration: "2021 – 2023"
    }
];

const Education = () => {
    return (
        <section id="education" className="py-20 bg-surface">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="mx-auto mb-16 pt-8 flex items-center"
                >
                    <div className="flex-grow h-px bg-line mr-4"></div>
                    <h2 className="text-3xl md:text-4xl font-bold text-dark">Education</h2>
                    <div className="w-12 h-px bg-line ml-4"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {educationData.map((edu, idx) => (
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: idx * 0.2 }}
                            key={idx}
                            className="bg-white rounded-2xl p-8 border border-line shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
                        >
                            <div className="absolute -right-4 -top-4 w-24 h-24 bg-primary/5 rounded-full z-0"></div>

                            <div className="relative z-10">
                                <div className="p-3 bg-secondary/10 text-secondary rounded-xl w-fit mb-6">
                                    <GraduationCap size={28} />
                                </div>

                                <h3 className="text-2xl font-bold text-dark mb-2">{edu.degree}</h3>
                                <h4 className="text-lg text-primary font-medium mb-6">{edu.institution}</h4>

                                <div className="flex flex-wrap gap-4 mt-auto border-t border-line pt-6">
                                    <div className="bg-surface px-4 py-2 rounded-lg border border-line">
                                        <span className="text-xs text-grayed block mb-1 uppercase tracking-wider font-semibold">Duration</span>
                                        <span className="font-medium text-dark">{edu.duration}</span>
                                    </div>
                                    <div className="bg-surface px-4 py-2 rounded-lg border border-line">
                                        <span className="text-xs text-grayed block mb-1 uppercase tracking-wider font-semibold">Score</span>
                                        <span className="font-bold text-primary">{edu.score}</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Education;
