import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Box, Layers, Cpu, Activity, GitBranch, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Hero from '../components/features/Hero';
import SectionContainer from '../components/layout/SectionContainer';

const Home = () => {
    const [isPdfOpen, setIsPdfOpen] = useState(false);

    const openPdf = () => {
        window.open('/docs/TdR.pdf', '_blank');
    };

    return (
        <div className="flex flex-col min-h-screen bg-base-900 text-white selection:bg-accent-primary selection:text-white">

            <Hero onOpenPdf={openPdf} />

            {/* Seccions destacades */}
            <section className="py-40 border-b border-base-700">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-24"
                        >
                            <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">Els tres pilars del projecte</h2>
                            <div className="h-1 w-16 bg-tech-accent mb-12"></div>
                        </motion.div>

                        <div className="grid md:grid-cols-3 gap-12">
                            {/* Pillar 1 */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0 }}
                                className="group"
                            >
                                <div className="mb-6">
                                    <div className="w-14 h-14 bg-tech-accent/10 border border-tech-accent/30 rounded-sm flex items-center justify-center mb-4 group-hover:border-accent-primary/60 transition-colors">
                                        <Cpu className="text-accent-primary" size={28} />
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold mb-4">Optimització Topològica</h3>
                                <p className="text-base-200 leading-relaxed">
                                    Ús de tècniques d'enginyeria avançada per minimitzar pes sense perdre rigidesa. Estructura PETG, suspensió TPU, suports PLA.
                                </p>
                            </motion.div>

                            {/* Pillar 2 */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="group"
                            >
                                <div className="mb-6">
                                    <div className="w-14 h-14 bg-tech-accent/10 border border-tech-accent/30 rounded-sm flex items-center justify-center mb-4 group-hover:border-accent-primary/60 transition-colors">
                                        <GitBranch className="text-accent-primary" size={28} />
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold mb-4">Desenvolupament Iteratiu</h3>
                                <p className="text-base-200 leading-relaxed">
                                    V1 en PLA (prototip) → V2 en PETG+TPU (producció). Evolució documentada amb millores en rigidesa, pes i resistència.
                                </p>
                            </motion.div>

                            {/* Pillar 3 */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="group"
                            >
                                <div className="mb-6">
                                    <div className="w-14 h-14 bg-tech-accent/10 border border-tech-accent/30 rounded-sm flex items-center justify-center mb-4 group-hover:border-accent-primary/60 transition-colors">
                                        <Box className="text-accent-primary" size={28} />
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold mb-4">Comunitat Oberta</h3>
                                <p className="text-base-200 leading-relaxed">
                                    Tots els arxius STL, BOM i paràmetres d'impressió són accessibles. Llicència open source per facilitar la innovació col·lectiva.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action final */}
            <section className="py-48">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight leading-tight">
                                Explorat el projecte <br />
                                <span className="text-accent-primary">en detall</span>
                            </h2>
                            <p className="text-xl text-base-200 mb-12 max-w-2xl leading-relaxed">
                                Descobreix l'evolució del disseny, visualitza els models en 3D, consulta la documentació tècnica i contacta'ns per col·laborar.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-6">
                                <Link
                                    to="/projecte"
                                    className="group px-8 py-4 bg-white text-black font-bold uppercase tracking-wider hover:bg-base-800 transition-all flex items-center gap-3 w-fit"
                                >
                                    Veure el Projecte
                                    <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                                </Link>
                                <Link
                                    to="/models"
                                    className="group px-8 py-4 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white/10 transition-all flex items-center gap-3 w-fit"
                                >
                                    Explorar Models 3D
                                    <ChevronRight size={18} className="group-hover:translate-x-2 transition-transform" />
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
