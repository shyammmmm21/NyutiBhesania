import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Star, TrendingUp } from 'lucide-react';

const Publications = () => {
    return (
        <section id="publications" className="py-20 bg-surface">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Publications & Research</h2>
                    <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mx-auto max-w-4xl"
                >
                    <div className="bg-white rounded-2xl shadow-md border-l-4 border-l-primary overflow-hidden hover:shadow-lg transition-shadow duration-300">
                        <div className="p-8 md:p-10">
                            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                                <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold bg-primary/10 text-primary">
                                    <BookOpen size={16} className="mr-2" />
                                    ICTIS 2026, Thailand
                                </span>
                                <span className="text-grayed text-sm font-medium border border-line px-3 py-1 rounded-full">
                                    Conference Paper
                                </span>
                            </div>

                            <h3 className="text-2xl md:text-3xl font-bold text-dark leading-tight mb-4">
                                "Predictive Modelling of Mental Health in Engineering and Medical Students Using ML"
                            </h3>

                            <p className="text-grayed text-lg mb-8 leading-relaxed">
                                A comprehensive study utilizing multiple machine learning frameworks to construct predictive models for diagnosing and understanding mental health patterns among college students. Data-driven approach directly addressing stress and anxiety prevalence.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-offwhite rounded-xl">
                                <div>
                                    <h4 className="text-dark font-semibold flex items-center mb-3">
                                        <Star size={18} className="text-secondary mr-2" />
                                        Highlight Stats
                                    </h4>
                                    <ul className="space-y-2 text-grayed text-sm">
                                        <li className="flex items-center">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                                            <span className="font-semibold text-dark mr-2">96.8%</span> Accuracy
                                        </li>
                                        <li className="flex items-center">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                                            <span className="font-semibold text-dark mr-2">0.99</span> ROC-AUC Score
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="text-dark font-semibold flex items-center mb-3">
                                        <TrendingUp size={18} className="text-secondary mr-2" />
                                        Models Utilized
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {["Logistics Regression", "SVM", "Random Forest", "XGBoost"].map((model, i) => (
                                            <span key={i} className="text-xs bg-white border border-line text-dark px-3 py-1 rounded-md shadow-sm">
                                                {model}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Publications;
