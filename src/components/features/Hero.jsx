import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, FileText, ChevronDown } from 'lucide-react';

const Hero = ({ onOpenPdf }) => {
    return (
        <section className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-20">
            {/* Background Grid Effect */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex items-center gap-4 mb-8"
                    >
                        <span className="h-px w-12 bg-tech-accent"></span>
                        <span className="text-accent-primary font-mono text-xs tracking-widest uppercase font-bold">
                            Projecte de Recerca
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-6xl md:text-7xl font-bold text-white tracking-tighter mb-8 leading-tight"
                    >
                        Disseny i validació d'un xassís RC imprès en 3D
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl text-base-200 mb-12 max-w-2xl leading-relaxed font-light"
                    >
                        Un projecte d'enginyeria que demostra com la fabricació additiva i l'optimització topològica poden produir vehicles de competició d'alt rendiment sense infraestructura industrial. Desenvolupat com a Treball de Recerca, documentat en detall i disponible com a Open Source.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                        <button
                            onClick={onOpenPdf}
                            className="group px-8 py-4 bg-white text-black font-bold text-sm uppercase tracking-wider hover:bg-base-800 transition-all flex items-center gap-3 w-fit"
                        >
                            <FileText size={18} />
                            Descarregar Memòria
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                        <Link
                            to="/projecte"
                            className="group px-8 py-4 border-2 border-white text-white font-bold text-sm uppercase tracking-wider hover:bg-white/10 transition-all flex items-center gap-3 w-fit"
                        >
                            Veure Projecte
                            <ChevronDown size={16} className="group-hover:translate-y-1 transition-transform" />
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="absolute bottom-12 left-6 md:left-auto md:right-12 text-right"
                    >
                        <div className="font-mono text-xs text-base-600 mb-3">STATUS</div>
                        <div className="flex items-center justify-end gap-2">
                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                            <span className="text-accent-primary font-mono text-sm font-bold">ONLINE</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
