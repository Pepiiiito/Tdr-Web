import React from 'react';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';

const AboutTeam = () => {
    return (
        <section className="py-24">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-5xl mx-auto text-center"
                >
                    <div className="inline-flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 bg-base-800 rounded-md flex items-center justify-center">
                            <Users className="text-accent-primary" size={20} />
                        </div>
                        <h3 className="text-sm font-mono text-accent-primary uppercase tracking-widest">Sobre nosaltres</h3>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Som un equip petit i apassionat</h2>
                    <p className="text-base-200 leading-relaxed max-w-3xl mx-auto mb-6">
                        El RCTDR va néixer com un Treball de Recerca: un projecte d'aprenentatge ambicios on investiguem com les peces impreses a casa poden competir en pista. Som un equip reduït que comparteix els èxits i els errors amb la comunitat perquè altres puguin aprendre i millorar.
                    </p>

                    <div className="flex flex-col md:flex-row items-center gap-6 justify-center mt-6">
                        <div className="w-36 h-36 bg-base-800 rounded-md overflow-hidden flex items-center justify-center text-base-200">Foto
                        </div>
                        <div className="max-w-md text-left">
                            <p className="text-base-200 mb-3">Adrià — Enginyer i responsable del disseny. M'encanta fer proves de pista i aprendre com millorar cada iteració.</p>
                            <p className="text-sm text-base-600">Vols conèixer més? Pots <a href="/contacte" className="text-accent-primary underline">escriure'ns</a> o enviar-nos un vídeo del teu muntatge.</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutTeam;
