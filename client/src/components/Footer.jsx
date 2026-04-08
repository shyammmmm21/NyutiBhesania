import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-dark text-white py-10 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">

                <div className="mb-6 flex gap-6 md:hidden">
                    <a href="https://github.com/bhesaniaNyuti" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                        Github
                    </a>
                    <a href="https://www.linkedin.com/in/nyuti-bhesania-64281330a/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#0077b5] transition-colors">
                        LinkedIn
                    </a>
                </div>

                <p className="text-gray-400 text-sm flex items-center mb-2 text-center">
                    Designed & Built with <Heart size={14} className="mx-1.5 text-primary animate-pulse" /> by
                    <span className="text-white ml-1 font-medium">Nyuti Bhesania</span>
                </p>
                <p className="text-gray-500 text-xs">
                    © {new Date().getFullYear()} All Rights Reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
