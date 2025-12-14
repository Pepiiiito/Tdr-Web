import React from 'react';
import { motion } from 'framer-motion';

const TechnicalSpecs = () => {
    const specs = [
        { label: 'Material Xassís', value: 'PETG (Estructura) + TPU (Suspensió)' },
        { label: 'Material Suports', value: 'PLA (Temporals)' },
        { label: 'Pes Total (RTR)', value: '1450g' },
        { label: 'Distància entre eixos', value: '257mm' },
        { label: 'Amplada de via', value: '190mm' },
        { label: 'Rigidesa Torsional', value: '12.5 Nm/deg' },
        { label: 'Distribució de Pes', value: '50/50' },
    ];

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 font-mono text-sm">
            {specs.map((spec, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="border border-tech-gray bg-base-800/50 p-4 rounded-sm hover:border-accent-primary/50 transition-colors"
                >
                    <div className="text-base-600 text-xs uppercase tracking-wider mb-1">{spec.label}</div>
                    <div className="text-base-200 font-bold">{spec.value}</div>
                </motion.div>
            ))}
        </div>
    );
};

export default TechnicalSpecs;
