import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Download, ArrowRight } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden pt-20">
            {/* Background animated blobs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
            <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-secondary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center md:text-left flex flex-col md:flex-row items-center justify-between">

                <div className="md:w-3/5 space-y-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-xl md:text-2xl font-medium text-grayed mb-2">👋 Welcome to my portfolio</h2>
                        <h1 className="text-4xl md:text-6xl font-bold text-dark leading-tight">
                            Hi, I'm <span className="text-primary">Nyuti Bhesania</span>
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-2xl md:text-3xl font-semibold text-secondary min-h-[40px]"
                    >
                        <TypeAnimation
                            sequence={[
                                'ML Engineer',
                                2000,
                                'Data Analyst',
                                2000,
                                'Deep Learning Enthusiast',
                                2000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="text-grayed text-lg max-w-2xl mx-auto md:mx-0"
                    >
                        Passionate about building intelligent systems and deriving actionable insights from complex datasets. Constantly exploring the boundaries of AI, Data Science, and impactful technological solutions.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-4"
                    >
                        <button
                            onClick={() => {
                                const el = document.getElementById('projects');
                                if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
                            }}
                            className="bg-primary hover:bg-indigo-600 text-white px-6 py-3 rounded-full font-medium flex items-center transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/30"
                        >
                            View Projects <ArrowRight size={18} className="ml-2" />
                        </button>
                        <a
                            href="/resume.pdf"
                            download="resume.pdf"
                            className="border border-line hover:border-primary text-dark hover:text-primary bg-white px-6 py-3 rounded-full font-medium flex items-center transition-all hover:scale-105 hover:shadow-sm"
                        >
                            Download Resume <Download size={18} className="ml-2" />
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                        className="flex items-center justify-center md:justify-start gap-6 pt-8"
                    >
                        <a href="https://github.com/bhesaniaNyuti" target="_blank" rel="noopener noreferrer" className="text-grayed hover:text-dark transition-colors hover:scale-110 transform">
                            <FaGithub size={28} />
                        </a>
                        <a href="https://www.linkedin.com/in/nyuti-bhesania-64281330a/" target="_blank" rel="noopener noreferrer" className="text-grayed hover:text-[#0077b5] transition-colors hover:scale-110 transform">
                            <FaLinkedin size={28} />
                        </a>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="md:w-2/5 mt-16 md:mt-0 flex justify-center"
                >
                    <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-2 bg-gradient-to-tr from-primary to-secondary overflow-hidden shadow-2xl">
                        {/* Placeholder for actual image */}
                        <div className="w-full h-full rounded-full bg-surface flex items-center justify-center">
                            <span className="text-6xl font-bold text-grayed/30">NB</span>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Hero;
