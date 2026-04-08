import React from 'react';
import { motion } from 'framer-motion';

const skillsData = [
    {
        category: "Languages",
        skills: ["Python", "SQL", "JavaScript", "HTML/CSS"]
    },
    {
        category: "Machine & Deep Learning",
        skills: ["Machine Learning", "Deep Learning", "CNN", "RNN", "NLP", "Scikit-Learn", "TensorFlow"]
    },
    {
        category: "Databases",
        skills: ["MySQL", "MongoDB", "Firebase Firestore"]
    },
    {
        category: "Tools & Technologies",
        skills: ["Power BI", "Streamlit", "Git", "GitHub", "VS Code", "Canva", "Postman"]
    }
];

const Skills = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } }
    };

    return (
        <section id="skills" className="py-20 bg-surface">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Core Skills</h2>
                    <div className="w-20 h-1 bg-secondary mx-auto rounded-full"></div>
                    <p className="mt-4 text-grayed max-w-2xl mx-auto">
                        A comprehensive toolkit carefully curated for full-stack data science, machine learning, and fast-paced web development.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {skillsData.map((category, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="bg-white p-6 rounded-2xl shadow-sm border border-line hover:shadow-md transition-shadow"
                        >
                            <h3 className="text-xl font-semibold text-dark mb-4 pb-2 border-b border-line">{category.category}</h3>
                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="flex flex-wrap gap-3"
                            >
                                {category.skills.map((skill, sIdx) => (
                                    <motion.span
                                        variants={itemVariants}
                                        key={sIdx}
                                        className="px-4 py-2 bg-offwhite text-primary border border-primary/20 rounded-full text-sm font-medium hover:bg-primary hover:text-white transition-colors cursor-default select-none"
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Skills;
