import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play } from 'lucide-react';

const videos = [
    {
        id: 1,
        title: 'Muntatge del Xassís V1',
        category: 'Muntatge',
        desc: 'Procés d\'assemblatge del primer prototip funcional amb peces impreses en PLA.',
        thumbnail: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 2,
        title: 'Integració Electrònica V2',
        category: 'Muntatge',
        desc: 'Instal·lació del motor brushless i el variador (ESC) en el xassís definitiu.',
        thumbnail: 'https://images.unsplash.com/photo-1581093458791-9f302e683837?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 3,
        title: 'Test de Resistència',
        category: 'Proves',
        desc: 'Prova d\'impacte controlat per verificar la integritat estructural dels para-xocs.',
        thumbnail: 'https://images.unsplash.com/photo-1531297461136-82lw9f2858d7?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 4,
        title: 'Prova de Velocitat Màxima',
        category: 'Proves',
        desc: 'Mesurament de velocitat punta en recta utilitzant GPS. Resultat: 45 km/h.',
        thumbnail: 'https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?auto=format&fit=crop&q=80&w=800'
    },
];

const VideoGallery = () => {
    const [filter, setFilter] = useState('Tots');
    const categories = ['Tots', 'Muntatge', 'Proves'];

    const filteredVideos = filter === 'Tots'
        ? videos
        : videos.filter(v => v.category === filter);

    return (
        <section id="gallery" className="py-24 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <h2 className="text-3xl font-bold text-base-900 mb-4">Galeria del Procés</h2>
                        <p className="text-base-600 max-w-md">
                            Documentació visual pas a pas, des del muntatge inicial fins a les proves de camp.
                        </p>
                    </div>

                    <div className="flex gap-2 bg-white p-1 rounded-lg border border-gray-200 shadow-sm">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${filter === cat
                                        ? 'bg-black text-white shadow-sm'
                                        : 'text-base-600 hover:text-base-900 hover:bg-gray-50'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <AnimatePresence>
                        {filteredVideos.map((video) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                key={video.id}
                                className="group bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-all"
                            >
                                <div className="relative aspect-video bg-gray-200 overflow-hidden cursor-pointer">
                                    <img
                                        src={video.thumbnail}
                                        alt={video.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                                        <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform shadow-lg">
                                            <Play className="ml-1 text-black" size={24} fill="currentColor" />
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-xs font-bold text-blue-600 uppercase tracking-wider bg-blue-50 px-2 py-1 rounded-md">
                                            {video.category}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold text-base-900 mb-2">{video.title}</h3>
                                    <p className="text-base-600 text-sm leading-relaxed">
                                        {video.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default VideoGallery;
