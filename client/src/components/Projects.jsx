import React from 'react';
import { motion } from 'framer-motion';
import { Folder, Calendar } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const projectsData = [
    {
        title: "Real-Time Cuff-less Blood Pressure Monitoring System",
        date: "Jan 2026 – Present",
        description: "Non-invasive BP monitoring using 1D CNN on PPG & ECG signals. Involves extensive feature extraction logic for robust systolic and diastolic (SBP/DBP) predictions.",
        tags: ["CNN", "Signal Processing", "PPG", "ECG", "Python"],
        githubUrl: "https://github.com/bhesaniaNyuti"
    },
    {
        title: "Job Resume Ranker and Recommender System",
        date: "Jul 2025 – Nov 2025",
        description: "An NLP-based resume analyzer engineered to parse and evaluate resume contents. Includes robust skill gap detection to streamline ATS screening for job roles.",
        tags: ["NLP", "TF-IDF", "Cosine Similarity", "ATS"],
        githubUrl: "https://github.com/bhesaniaNyuti"
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="mx-auto mb-16 pt-8 flex items-center"
                >
                    <div className="w-12 h-px bg-line mr-4"></div>
                    <h2 className="text-3xl md:text-4xl font-bold text-dark">Featured Projects</h2>
                    <div className="flex-grow h-px bg-line ml-4"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                    {projectsData.map((project, idx) => (
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: idx * 0.2 }}
                            key={idx}
                            className="group bg-surface rounded-2xl p-8 border border-line hover:border-primary/50 relative overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div className="p-3 bg-primary/10 text-primary rounded-xl">
                                    <Folder size={32} />
                                </div>
                                <div className="flex space-x-3 text-grayed">
                                    {project.githubUrl && (
                                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                                            <FaGithub size={24} />
                                        </a>
                                    )}
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold text-dark group-hover:text-primary transition-colors mb-2">
                                {project.title}
                            </h3>

                            <div className="flex items-center text-sm text-grayed font-medium mb-4">
                                <Calendar size={14} className="mr-2" />
                                {project.date}
                            </div>

                            <p className="text-grayed leading-relaxed mb-8">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.tags.map((tag, tIdx) => (
                                    <span key={tIdx} className="text-xs font-mono text-secondary bg-secondary/10 px-3 py-1 rounded-full">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Projects;
