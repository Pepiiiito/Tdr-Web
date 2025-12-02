import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../ui/Logo';

const Navbar = ({ onOpenPdf }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Inici', path: '/' },
        { name: 'Projecte', path: '/projecte' },
        { name: 'Models', path: '/models' },
        { name: 'Muntatge', path: '/muntatge' },
        { name: 'Documentació', path: '/documentacio' },
        { name: 'Contacte', path: '/contacte' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-base-900/95 backdrop-blur-lg border-b border-base-700 py-4' : 'bg-transparent py-8'
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link to="/" className="flex items-center gap-3 group">
                    <div className="bg-white text-base-900 p-1.5 rounded-sm group-hover:scale-105 transition-transform duration-300">
                        <Logo className="w-5 h-5" color="black" />
                    </div>
                    <span className="text-lg font-bold tracking-tight text-white group-hover:opacity-70 transition-opacity font-mono hidden sm:inline">
                        RCTDR<span className="text-accent-primary">.dev</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`text-sm font-medium transition-all hover:-translate-y-0.5 ${location.pathname === link.path ? 'text-white' : 'text-base-200 hover:text-accent-primary'
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <button
                        onClick={onOpenPdf}
                        className="flex items-center gap-2 px-5 py-2.5 bg-white text-base-900 text-sm font-bold rounded-sm hover:bg-base-100 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-white/10 uppercase tracking-wider"
                    >
                        <FileText size={16} />
                        <span>PDF</span>
                    </button>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: '100vh' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden fixed inset-0 top-[70px] bg-base-900 z-40 overflow-y-auto border-t border-base-700"
                    >
                        <div className="flex flex-col p-6 gap-6">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    key={link.name}
                                >
                                    <Link
                                        to={link.path}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className={`text-2xl font-bold ${location.pathname === link.path ? 'text-white' : 'text-base-200'
                                            }`}
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.button
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                onClick={() => {
                                    onOpenPdf();
                                    setIsMobileMenuOpen(false);
                                }}
                                className="flex items-center justify-center gap-2 w-full py-4 bg-white text-black rounded-sm mt-4 text-lg font-bold uppercase tracking-wider"
                            >
                                <FileText size={20} />
                                Veure Document
                            </motion.button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;
