import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Film } from 'lucide-react';

const videos = [
    {
        id: 1,
        title: 'Muntatge del Xassís V1',
        category: 'Muntatge',
        desc: `Procés d'assemblatge del primer prototip funcional amb peces impreses en PLA.`,
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
        desc: `Prova d'impacte controlat per verificar la integritat estructural dels para-xocs.`,
        thumbnail: 'https://images.unsplash.com/photo-1531297461136-82lw9f2858d7?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 4,
        title: 'Prova de Velocitat Màxima',
        category: 'Proves',
        desc: 'Mesurament de velocitat punta en recta utilitzant GPS. Resultat: 45 km/h.',
        thumbnail: 'https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?auto=format&fit=crop&q=80&w=800'
    },
    // User-provided video (YouTube)
    {
        id: 5,
        title: 'Test del Xassís en Pista',
        category: 'Proves',
        desc: 'Vídeo del vehicle en acció. Velocitat real, maneig i comportament en competició.',
        thumbnail: 'https://img.youtube.com/vi/rWLSy-YXUao/maxresdefault.jpg',
        youtube: 'https://www.youtube.com/embed/rWLSy-YXUao'
    }
];

const VideoGallery = () => {
    const [filter, setFilter] = useState('Tots');
    const [selected, setSelected] = useState(null);
    const categories = ['Tots', 'Muntatge', 'Proves'];

    const filteredVideos = filter === 'Tots'
        ? videos
        : videos.filter(v => v.category === filter);

    return (
        <section id="gallery" className="py-32 border-t border-base-700">
            <div className="container mx-auto px-6">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 bg-base-800 rounded-md flex items-center justify-center">
                            <Film className="text-accent-primary" size={20} />
                        </div>
                        <h3 className="text-sm font-mono text-accent-primary uppercase tracking-widest">Procés documentat</h3>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Galeria de Vídeos</h2>
                    <p className="text-base-200 text-lg max-w-2xl">
                        Documentació visual del muntatge, integració electrònica i proves de pista. Clica qualsevol miniatura per reproduir.
                    </p>
                </motion.div>

                <div className="flex justify-center mb-12">
                    <div className="flex gap-2 bg-base-800/50 p-1 rounded-lg border border-base-700">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-5 py-2 rounded-md text-sm font-medium transition-all ${filter === cat
                                        ? 'bg-accent-primary text-black font-bold shadow-lg'
                                        : 'text-base-300 hover:text-white hover:bg-base-700/50'
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
                                className="group bg-base-800 border border-base-700 rounded-md overflow-hidden hover:border-accent-primary/50 transition-all duration-300"
                            >
                                <div className="relative aspect-video bg-base-900 overflow-hidden cursor-pointer" onClick={() => setSelected(video)}>
                                    <img
                                        src={video.thumbnail}
                                        alt={video.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors flex items-center justify-center">
                                        <div className="w-16 h-16 bg-accent-primary/20 border border-accent-primary rounded-full flex items-center justify-center backdrop-blur-sm group-hover:bg-accent-primary/40 group-hover:scale-110 transition-all shadow-lg">
                                            <Play className="ml-1 text-accent-primary" size={28} fill="currentColor" />
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center justify-between mb-3">
                                        <span className={`text-xs font-bold uppercase tracking-wider px-2 py-1 rounded-sm ${video.category === 'Muntatge' ? 'bg-accent-primary/20 text-accent-primary' : 'bg-accent-secondary/20 text-accent-secondary'}`}>
                                            {video.category}
                                        </span>
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-2 leading-snug">{video.title}</h3>
                                    <p className="text-base-300 text-sm leading-relaxed">
                                        {video.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>

            {/* Video Modal */}
            {selected && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
                    onClick={() => setSelected(null)}
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="w-full max-w-5xl bg-base-900 border border-base-700 rounded-md overflow-hidden shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="relative aspect-video bg-black">
                            <iframe 
                                src={selected.youtube} 
                                title={selected.title} 
                                className="w-full h-full" 
                                allowFullScreen
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            />
                        </div>
                        <div className="p-4 flex items-center justify-between bg-base-800 border-t border-base-700">
                            <div>
                                <h3 className="font-bold text-white text-sm">{selected.title}</h3>
                                <p className="text-base-400 text-xs mt-1">{selected.desc}</p>
                            </div>
                            <button 
                                className="px-4 py-2 bg-accent-primary text-black rounded-sm font-bold text-sm hover:bg-accent-primary/90 transition-colors" 
                                onClick={() => setSelected(null)}
                            >
                                Tancar
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </section>
    );
};

export default VideoGallery;
