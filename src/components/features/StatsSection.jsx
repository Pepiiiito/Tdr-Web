import React from 'react';
import { motion } from 'framer-motion';
import { Scale, Battery, Banknote, Clock } from 'lucide-react';

const stats = [
    { label: 'Pes Total', value: '520g', icon: Scale, desc: 'Optimitzat per a velocitat' },
    { label: 'Autonomia', value: '20 min', icon: Battery, desc: 'Bateria LiPo 2S' },
    { label: 'Cost Material', value: '< 100€', icon: Banknote, desc: 'PLA i Electrònica' },
    { label: 'Temps Impressió', value: '27h', icon: Clock, desc: 'Total peces xassís' },
];

const StatsSection = () => {
    return (
        <section className="py-24 border-y border-gray-100 bg-gray-50/50">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 bg-gray-50 rounded-xl">
                                    <stat.icon size={24} className="text-base-900" />
                                </div>
                                <div className="text-sm font-medium text-base-600 uppercase tracking-wider">
                                    {stat.label}
                                </div>
                            </div>
                            <div className="text-4xl font-bold text-base-900 mb-2 tracking-tight">
                                {stat.value}
                            </div>
                            <p className="text-sm text-base-200">
                                {stat.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
