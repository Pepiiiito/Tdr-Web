import React from 'react';
import { motion } from 'framer-motion';
import { Target, Lightbulb, Zap, TrendingUp, Grid3x3, AlertCircle, Gauge } from 'lucide-react';
import SectionHeader from '../components/layout/SectionHeader';
import TechnicalSpecs from '../components/features/TechnicalSpecs';

const Section = ({ title, icon: Icon, children, delay = 0 }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.6 }}
        className="mb-20 md:mb-32"
    >
        <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="md:w-1/3 flex-shrink-0">
                <div className="w-14 h-14 bg-tech-accent/10 border border-tech-accent/30 rounded-sm flex items-center justify-center mb-6">
                    <Icon className="text-accent-primary" size={28} />
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-white mb-4">
                    {title}
                </h2>
            </div>
            <div className="md:w-2/3 text-base-200 leading-relaxed space-y-4 font-light text-lg">
                {children}
            </div>
        </div>
    </motion.div>
);

const Projecte = () => {
    return (
        <div className="min-h-screen bg-base-900 text-white pt-32 pb-24">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="max-w-5xl"
                >
                    <SectionHeader
                        label="Filosofia de Disseny"
                        title="Objectius del Projecte"
                        subtitle="Com s'ha abordat el desenvolupament d'un xassís de competició optimitzat per a fabricació additiva domèstica"
                    />

                    <div className="mt-24 space-y-32 md:space-y-48">
                        <Section title="Intenció Principal" icon={Target}>
                            <p>
                                <strong className="text-white">RCTDR</strong> no pretén competir amb els xassís de carboni comercials en cost o producció en massa. En canvi, busca demostrar que la <strong className="text-white">impressió 3D amb PETG, TPU i PLA</strong> pot produir estructures de competició sense sacrificar massa la rigidesa dinàmica ni la precisió geomètrica.
                            </p>
                            <p>
                                L'objectiu és que <strong className="text-white">qualsevol persona amb una impressora domèstica</strong> pugui fabricar un xassís funcional, seguint les instruccions documentades, amb materials accessibles: <strong>PETG per l'estructura, TPU per la suspensió, PLA per suports</strong>.
                            </p>
                        </Section>

                        <Section title="Criteris Tècnics de Disseny" icon={Grid3x3} delay={0.1}>
                            <p>
                                El desenvolupament s'ha basat en <strong className="text-white">tres pilars d'enginyeria</strong>:
                            </p>
                            <div className="grid gap-6 mt-8">
                                <div className="bg-base-700/20 p-6 border-l-2 border-tech-accent">
                                    <h3 className="text-white font-bold mb-2">Orientació estratègica de capes</h3>
                                    <p className="text-sm">
                                        Cada peça estructural ha estat dissenyada perquè les línies d'estrès principals siguin <strong>perpendiculars a l'eix Z</strong> (direcció de impressió). Això maximitza la resistència a impactes i vibracions.
                                    </p>
                                </div>
                                <div className="bg-base-700/20 p-6 border-l-2 border-tech-accent">
                                    <h3 className="text-white font-bold mb-2">Modularitat universal</h3>
                                    <p className="text-sm">
                                        El xassís accepta motors 540, servos estàndard i bateries LiPo 2S. Això permet que els usuaris desenvolupin variants sense modificar els plànols base.
                                    </p>
                                </div>
                                <div className="bg-base-700/20 p-6 border-l-2 border-tech-accent">
                                    <h3 className="text-white font-bold mb-2">Geometria de suspensió ajustable</h3>
                                    <p className="text-sm">
                                        Sistema de doble trapezi (double-wishbone) amb àngles de <strong>camber, toe i caster</strong> modificables per adaptar-se a diferents circuits i condicions.
                                    </p>
                                </div>
                            </div>
                        </Section>

                        <Section title="Procés de Desenvolupament" icon={Lightbulb} delay={0.2}>
                            <p>
                                El cicle ha seguut un model iteratiu àgil amb <strong className="text-white">proves en pista entre versions</strong>:
                            </p>
                            <div className="mt-8 space-y-6">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-status-error/20 border border-status-error/50 rounded-sm flex items-center justify-center flex-shrink-0">
                                        <span className="text-status-error font-bold text-lg">V1</span>
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold mb-1">Versió Alpha (Prova de Concepte)</h4>
                                        <p className="text-sm">
                                            Primera versió funcional amb monocasc obert. Va confirmar que la FDM podia suportar les càrregues dinàmiques, però revelà flexió longitudinal excessiva en acceleracions.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-blue-500/20 border border-accent-primary/50 rounded-sm flex items-center justify-center flex-shrink-0">
                                        <span className="text-accent-primary font-bold text-lg">V2</span>
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold mb-1">Versió Beta (Producció Actual)</h4>
                                        <p className="text-sm">
                                            Incorpora un "top deck" que tanca la caixa de torsió. Millora de rigidesa del 200%, reforç de punts d'ancoratge i distribució de pes optimitzada. En fase de validació final.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Section>

                        <Section title="Roadmap Futur" icon={TrendingUp} delay={0.3}>
                            <p>
                                El projecte continuarà evolucionant. Les següents fases són:
                            </p>
                            <ul className="list-none mt-8 space-y-4">
                                <li className="flex gap-3 items-start">
                                    <span className="text-accent-primary font-bold mt-1">●</span>
                                    <span><strong className="text-white">V3 (Pending):</strong> Diferencial autoblocant imprès. Pinyó i corona optimitzats per menys fricció.</span>
                                </li>
                                <li className="flex gap-3 items-start">
                                    <span className="text-accent-primary font-bold mt-1">●</span>
                                    <span><strong className="text-white">Aerodinàmica:</strong> Simulacions CFD i carrosseria optimitzada per reducció de turbulència.</span>
                                </li>
                                <li className="flex gap-3 items-start">
                                    <span className="text-accent-primary font-bold mt-1">●</span>
                                    <span><strong className="text-white">Telemetria:</strong> Integració de sensors per a captació de dades en pista.</span>
                                </li>
                            </ul>
                        </Section>

                        <Section title="Limitacions i Consideracions" icon={AlertCircle} delay={0.4}>
                            <p>
                                Cal reconèixer que la FDM <strong className="text-white">no és la solució òptima</strong> per a totes les situacions:
                            </p>
                            <ul className="list-none mt-8 space-y-3">
                                <li className="flex gap-3 items-start">
                                    <span className="text-tech-warning font-bold mt-1">⚠</span>
                                    <span>El material és menys precís que el carboni. Requereix toleràncies més generes i verificació manual.</span>
                                </li>
                                <li className="flex gap-3 items-start">
                                    <span className="text-tech-warning font-bold mt-1">⚠</span>
                                    <span>La vida útil és menor en pista: les peces es desgasten per fricció i microdelaminacions.</span>
                                </li>
                                <li className="flex gap-3 items-start">
                                    <span className="text-tech-warning font-bold mt-1">⚠</span>
                                    <span>La temperatura és limitada. Exposició prolongada a més de 60°C pot afectar la integritat estructural.</span>
                                </li>
                            </ul>
                        </Section>
                    </div>

                    {/* Technical Specs Section */}
                    <div className="mt-48 pt-32 border-t border-base-700">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-16"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-tech-accent/10 border border-tech-accent/30 rounded-sm flex items-center justify-center">
                                    <Gauge className="text-accent-primary" size={28} />
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Especificacions Tècniques V2.1</h2>
                            </div>
                            <p className="text-base-200 text-lg max-w-2xl">Dades actualitzades del prototip en producció</p>
                        </motion.div>
                        <TechnicalSpecs />
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Projecte;
