import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
    {
        id: 1,
        quote: "He reconstruït el xassís i vaig sorprendre'm de la resistència del PETG. La documentació és clara i els fitxers funcionen bé.",
        author: 'Marc, aficionat a RC'
    },
    {
        id: 2,
        quote: "El projecte m'ha ajudat a entendre l'optimització topològica i a millorar la meva impressora.",
        author: 'Laia, makerspace'
    }
];

const Testimonials = () => (
    <section className="py-20 bg-base-800/10">
        <div className="container mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-5xl mx-auto text-center">
                <h3 className="text-sm font-mono text-accent-primary uppercase tracking-widest mb-3">Veus de la Comunitat</h3>
                <h2 className="text-3xl font-bold mb-6">Què diuen els qui ho han provat</h2>

                <div className="grid md:grid-cols-2 gap-6">
                    {testimonials.map(t => (
                        <div key={t.id} className="p-6 bg-base-800 border border-base-700 rounded-md">
                            <p className="text-base-200 mb-4">“{t.quote}”</p>
                            <p className="text-sm text-base-600 font-bold">— {t.author}</p>
                        </div>
                    ))}
                </div>

                <p className="mt-6 text-sm text-base-600">Tens una història amb el teu xassís? Comparteix-la a <a href="/contacte" className="text-accent-primary underline">contacte</a>.</p>
            </motion.div>
        </div>
    </section>
);

export default Testimonials;
