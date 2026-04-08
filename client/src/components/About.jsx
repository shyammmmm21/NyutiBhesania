import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, ExternalLink } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">About Me</h2>
                    <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
                </motion.div>

                <div className="flex flex-col md:flex-row gap-12 items-center">

                    {/* Info Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="md:w-1/3 bg-surface p-8 rounded-2xl border border-line shadow-sm hover:shadow-md transition-shadow"
                    >
                        <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary to-secondary p-1 mb-6 overflow-hidden">
                            <img src="/pfp.jpeg" alt="Nyuti Bhesania" className="w-full h-full rounded-full object-cover shadow-inner" />
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center text-dark">
                                <MapPin className="text-primary mr-3" size={20} />
                                <span>Junagadh, Gujarat</span>
                            </div>
                            <div className="flex items-center text-dark">
                                <Mail className="text-primary mr-3" size={20} />
                                <a href="mailto:bhesanianyuti05@gmail.com" className="hover:text-primary transition-colors">
                                    bhesanianyuti05@gmail.com
                                </a>
                            </div>
                            <div className="flex items-center text-dark">
                                <Phone className="text-primary mr-3" size={20} />
                                <a href="tel:+919662512897" className="hover:text-primary transition-colors">
                                    +91 9662512897
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Bio text */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="md:w-2/3 space-y-6 text-lg text-grayed leading-relaxed"
                    >
                        <p>
                            I am an aspiring Machine Learning and Data Analysis engineer, actively honing my skills in turning raw data into meaningful intelligence. My journey into tech is driven by an insatiable curiosity about how algorithms can mimic human learning to solve real-world problems.
                        </p>
                        <p>
                            With a solid foundation in Python, specialized ML libraries, and modern web development, I bridge the gap between complex data models and user-friendly interfaces. Whether it's training a 1D CNN for predictive healthcare or building NLP pipelines, I thrive on challenges that push to innovate.
                        </p>
                        <p className="font-medium text-dark">
                            I'm always open to new opportunities, collaborations, and discussions about the fascinating world of artificial intelligence and deep learning!
                        </p>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default About;
