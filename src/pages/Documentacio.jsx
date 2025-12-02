import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, Table, CheckCircle, Grid3x3, Code } from 'lucide-react';
import SectionHeader from '../components/layout/SectionHeader';

const SpecRow = ({ label, value }) => (
    <div className="flex justify-between py-4 border-b border-base-700 last:border-0">
        <span className="text-base-200 font-medium">{label}</span>
        <span className="text-white font-mono text-sm">{value}</span>
    </div>
);

const DocCard = ({ icon: Icon, title, description, link, linkText = "Obrir" }) => (
    <motion.a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="group block"
    >
        <div className="bg-base-800 border border-base-700 p-8 rounded-sm hover:border-accent-primary/50 transition-all h-full">
            <div className="w-12 h-12 bg-tech-accent/10 border border-tech-accent/30 rounded-sm flex items-center justify-center mb-6 group-hover:border-accent-primary/60 transition-colors">
                <Icon className="text-accent-primary" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white group-hover:text-accent-primary transition-colors">{title}</h3>
            <p className="text-base-200 text-sm leading-relaxed mb-6">{description}</p>
            <div className="flex items-center gap-2 text-accent-primary text-sm font-mono group-hover:gap-3 transition-all">
                <span>{linkText}</span>
                <Download size={14} className="group-hover:translate-y-1 transition-transform" />
            </div>
        </div>
    </motion.a>
);

const Documentacio = () => {
    return (
        <div className="min-h-screen bg-base-900 text-white pt-32 pb-24">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="max-w-6xl"
                >
                    <SectionHeader
                        label="Recursos Tècnics"
                        title="Documentació Completa"
                        subtitle="Memòria del projecte, especificacions, plànols CAD i guies tècniques"
                    />

                    {/* Main Documentation Section */}
                    <div className="mt-24 mb-32">
                        <div className="grid md:grid-cols-3 gap-12">
                            {/* Left Column - Specs */}
                            <div className="md:col-span-1">
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="bg-base-800 border border-base-700 p-8 rounded-sm sticky top-40"
                                >
                                    <h3 className="text-lg font-bold mb-8 flex items-center gap-3 text-white">
                                        <Table size={20} className="text-accent-primary" />
                                        Dades Tècniques
                                    </h3>
                                    <SpecRow label="Escala" value="1:10" />
                                    <SpecRow label="Batalla" value="257 mm" />
                                    <SpecRow label="Amplada" value="190 mm" />
                                    <SpecRow label="Pes Xassís" value="450 g" />
                                    <SpecRow label="Material Xassís" value="PETG + TPU" />
                                    <SpecRow label="Material Suports" value="PLA" />
                                    <SpecRow label="Tracció" value="RWD / 4WD" />
                                    <SpecRow label="Versió Actual" value="V2.1 Beta" />
                                </motion.div>
                            </div>

                            {/* Right Columns - Documents */}
                            <div className="md:col-span-2 space-y-12">
                                {/* Memòria */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                >
                                    <h2 className="text-3xl font-bold mb-6 text-white">Memòria del Projecte</h2>
                                    <p className="text-base-200 text-lg leading-relaxed mb-8">
                                        Document complet que detalla tot el procés de recerca, desenvolupament i validació del RCTDR. Inclou càlculs estructurals, simulacions d'elements finits (FEA), dades de proves en pista i conclusions.
                                    </p>

                                    <div className="bg-base-800 rounded-sm overflow-hidden border border-base-700 aspect-[4/3] relative group">
                                        <iframe
                                            src="/docs/TdR.pdf"
                                            className="w-full h-full opacity-70 group-hover:opacity-100 transition-opacity"
                                            title="Memòria Tècnica RCTDR"
                                        />
                                        <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent pointer-events-none transition-colors" />
                                        <a
                                            href="/docs/TdR.pdf"
                                            download
                                            className="absolute bottom-6 right-6 px-6 py-3 bg-tech-accent text-black font-bold text-sm shadow-lg opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 flex items-center gap-2 uppercase tracking-wider"
                                        >
                                            <Download size={16} />
                                            Descarregar PDF
                                        </a>
                                    </div>
                                </motion.div>

                                {/* Notes de Versió */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 }}
                                >
                                    <h2 className="text-3xl font-bold mb-6 text-white">Historial de Versions</h2>
                                    <div className="space-y-5">
                                        <div className="p-6 border-l-4 border-accent-secondary bg-accent-secondary/5 rounded-sm">
                                            <div className="flex items-center gap-2 mb-2">
                                                <span className="text-xs font-bold text-accent-secondary uppercase tracking-wider">v2.1.0 - Stable</span>
                                                <CheckCircle size={14} className="text-accent-secondary" />
                                            </div>
                                            <p className="text-sm text-base-100 mb-2">Reforç estructural en la torre d'amortidors posterior. Corregit toleràncies en allotjament de rodaments.</p>
                                            <p className="text-xs text-base-200\"><strong>Materials:</strong> PETG (estructura) + TPU (suspensió) + PLA (suports)</p>
                                        </div>
                                        <div className="p-6 border-l-4 border-accent-primary bg-accent-primary/5 rounded-sm">
                                            <span className="text-xs font-bold text-accent-primary uppercase tracking-wider">v2.0.0 - Major Release</span>
                                            <p className="mt-2 text-sm text-base-200 mb-2">Introducció del Top Deck. Redisseny complet de la geometria de direcció. Millora de rigidesa torsional 200%.</p>
                                            <p className="text-xs text-base-200\"><strong>Materials:</strong> PETG (primera versió produïda) + TPU (suspensió)</p>
                                        </div>
                                        <div className="p-6 border-l-4 border-gray-600 bg-gray-600/5 rounded-sm">
                                            <span className="text-xs font-bold text-base-200 uppercase tracking-wider">v1.0.0 - Initial Release</span>
                                            <p className="mt-2 text-sm text-base-200 mb-2">Primera versió de prova de concepte. Xassís monocasc obert. Validació de concept FDM en competició.</p>
                                            <p className="text-xs text-base-200\"><strong>Materials:</strong> PLA (100%) - prototip conceptual</p>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>

                    {/* Additional Resources */}
                    <div className="border-t border-base-700 pt-24">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl font-bold mb-12 text-white">Recursos Addicionals</h2>
                            <div className="grid md:grid-cols-2 gap-8">
                                <DocCard
                                    icon={Code}
                                    title="Arxius CAD (STL)"
                                    description="Plànols 3D de tots els components. Optimitzats per impressió FDM. Inclou totes les versions (V1 i V2)."
                                    link="#"
                                    linkText="Descarregar Repositori"
                                />
                                <DocCard
                                    icon={Grid3x3}
                                    title="Bill of Materials (BOM)"
                                    description="Llista completa de components, fornidors, números de part i cost estimat per unitat."
                                    link="#"
                                    linkText="Obrir Spreadsheet"
                                />
                                <DocCard
                                    icon={FileText}
                                    title="Guia de Paràmetres d'Impressió"
                                    description="Configuració òptima per a impressores FDM (temperature, velocitat, densitat de rellè) per a cada material."
                                    link="#"
                                    linkText="Descarregar PDF"
                                />
                                <DocCard
                                    icon={FileText}
                                    title="Manual de Muntatge"
                                    description="Instruccions pas a pas amb fotografies per a l'assemblatge complet del xassís."
                                    link="#"
                                    linkText="Obrir Guia"
                                />
                            </div>
                        </motion.div>
                    </div>

                    {/* License Notice */}
                    <div className="mt-24 p-8 bg-base-800 border border-base-700 rounded-sm">
                        <h3 className="font-mono text-xs text-accent-primary uppercase tracking-widest mb-4 font-bold">Llicència</h3>
                        <p className="text-base-200 text-sm leading-relaxed">
                            Tot el contingut d'aquest projecte es publica sota una <strong className="text-white">llicència Creative Commons Attribution 4.0 (CC-BY-4.0)</strong>. Pots copiar, modificar i redistribuir el projecte amb la condició que atribueixis el crèdit a l'autor original. Consulta els detalls de la llicència per a més informació.
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Documentacio;
