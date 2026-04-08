import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Mail, Phone, Loader2 } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import axios from 'axios';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('idle'); // idle, loading, success, error

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.message) return;

        setStatus('loading');
        try {
            await axios.post('http://localhost:5000/api/contact', formData);
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setStatus('idle'), 5000);
        } catch (error) {
            console.error(error);
            setStatus('error');
            setTimeout(() => setStatus('idle'), 5000);
        }
    };

    return (
        <section id="contact" className="py-20 bg-surface">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Get In Touch</h2>
                    <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
                    <p className="mt-4 text-grayed max-w-2xl mx-auto">
                        Whether you have a question, a project idea, or just want to say hi, feel free to drop a message!
                    </p>
                </motion.div>

                <div className="flex flex-col lg:flex-row gap-12 bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-line overflow-hidden">

                    {/* Left Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="lg:w-2/5 p-8 bg-gradient-to-br from-primary to-indigo-800 rounded-2xl text-white relative overflow-hidden"
                    >
                        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

                        <h3 className="text-3xl font-bold mb-8 relative z-10">Contact Information</h3>

                        <div className="space-y-8 relative z-10">
                            <div className="flex items-start">
                                <MapPin className="text-secondary mr-4 mt-1" size={24} />
                                <div>
                                    <h4 className="text-indigo-100 font-medium mb-1">Location</h4>
                                    <p className="text-lg">Junagadh, Gujarat</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <Mail className="text-secondary mr-4 mt-1" size={24} />
                                <div>
                                    <h4 className="text-indigo-100 font-medium mb-1">Email</h4>
                                    <a href="mailto:bhesanianyuti05@gmail.com" className="text-lg hover:text-secondary transition-colors">
                                        bhesanianyuti05@gmail.com
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <Phone className="text-secondary mr-4 mt-1" size={24} />
                                <div>
                                    <h4 className="text-indigo-100 font-medium mb-1">Phone</h4>
                                    <a href="tel:+919662512897" className="text-lg hover:text-secondary transition-colors">
                                        +91 9662512897
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="mt-16 flex gap-6 relative z-10">
                            <a href="https://github.com/bhesaniaNyuti" target="_blank" rel="noopener noreferrer" className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition-colors">
                                <FaGithub size={24} />
                            </a>
                            <a href="https://www.linkedin.com/in/nyuti-bhesania-64281330a/" target="_blank" rel="noopener noreferrer" className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition-colors">
                                <FaLinkedin size={24} />
                            </a>
                        </div>
                    </motion.div>

                    {/* Right Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="lg:w-3/5 my-auto"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-dark block">Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="John Doe"
                                    className="w-full px-4 py-3 bg-surface border border-line rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all font-medium text-dark"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-dark block">Your Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="john@example.com"
                                    className="w-full px-4 py-3 bg-surface border border-line rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all font-medium text-dark"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-dark block">Your Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                    placeholder="Hello Nyuti, I would like to discuss..."
                                    className="w-full px-4 py-3 bg-surface border border-line rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all font-medium text-dark resize-none"
                                ></textarea>
                            </div>

                            <div className="pt-2">
                                <button
                                    type="submit"
                                    disabled={status === 'loading'}
                                    className="bg-primary hover:bg-indigo-600 active:scale-95 transition-all text-white px-8 py-3.5 rounded-xl font-medium w-full md:w-auto flex items-center justify-center min-w-[180px] disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {status === 'loading' ? (
                                        <span className="flex items-center"><Loader2 size={20} className="mr-2 animate-spin" /> Sending...</span>
                                    ) : status === 'success' ? (
                                        <span className="text-green-300 flex items-center">Message Sent ✓</span>
                                    ) : status === 'error' ? (
                                        <span className="text-red-300 flex items-center">Failed to Send X</span>
                                    ) : (
                                        <span className="flex items-center">Send Message <Send size={18} className="ml-2" /></span>
                                    )}
                                </button>
                            </div>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
