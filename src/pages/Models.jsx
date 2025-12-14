import React, { Suspense, useState, useEffect } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls, Stage, Center, Html } from '@react-three/drei';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';
import { motion } from 'framer-motion';
import { Loader2, AlertCircle, Check, X, RotateCcw, ZoomIn } from 'lucide-react';

function STLModel({ url, color }) {
    const geometry = useLoader(STLLoader, url);
    return (
        <mesh geometry={geometry} rotation={[-Math.PI / 2, 0, 0]} castShadow receiveShadow>
            <meshStandardMaterial color={color} roughness={0.5} metalness={0.8} />
        </mesh>
    );
}

const ModelViewer = ({ url, color, label }) => {
    return (
        <div className="h-[500px] bg-base-800 rounded-sm overflow-hidden relative border border-base-700 group">

            {/* Overlay Controls Hint */}
            <div className="absolute top-4 right-4 z-10 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="bg-black/50 p-2 rounded text-white/70" title="Rotar">
                    <RotateCcw size={16} />
                </div>
                <div className="bg-black/50 p-2 rounded text-white/70" title="Zoom">
                    <ZoomIn size={16} />
                </div>
            </div>

            <div className="absolute top-4 left-4 z-10">
                <span className="px-2 py-1 bg-tech-accent/20 text-accent-primary text-xs font-mono uppercase tracking-wider border border-tech-accent/30 rounded-sm">
                    {label}
                </span>
            </div>

            <Suspense
                fallback={
                    <div className="absolute inset-0 flex items-center justify-center text-base-200 flex-col gap-4 bg-base-800">
                        <Loader2 className="animate-spin text-accent-primary" size={32} />
                        <span className="text-sm font-mono animate-pulse">CARREGANT GEOMETRIA...</span>
                    </div>
                }
            >
                {/* Let <Stage> automatically frame the model so the initial view is not zoomed-in */}
                <Canvas shadows dpr={[1, 2]}>
                    <Stage environment="city" intensity={0.6} adjustCamera={true}>
                        <Center>
                            <STLModel url={url} color={color} />
                        </Center>
                    </Stage>
                    <OrbitControls
                        autoRotate
                        autoRotateSpeed={0.5}
                        makeDefault
                        enablePan={true}
                        enableZoom={true}
                        zoomSpeed={0.8}
                        minDistance={5}
                        maxDistance={120}
                    />
                </Canvas>
            </Suspense>
        </div>
    );
};

const Models = () => {
    return (
        <div className="min-h-screen bg-base-900 text-white pt-32 pb-24">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="max-w-6xl mx-auto"
                >
                    <div className="mb-20">
                        <span className="text-accent-primary font-mono text-xs uppercase tracking-widest mb-4 block">Visor 3D Interactiu</span>
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">Models CAD</h1>
                        <p className="text-xl text-base-200 max-w-3xl font-light leading-relaxed">
                            Explora les versions del xassís en 3D. Fes rotacions completes, zoom i navega la geometria actual. Compara la iteració V1 amb la V2 optimitzada.
                        </p>
                    </div>

                    {/* V1 Section */}
                    <div className="grid lg:grid-cols-2 gap-16 mb-32 items-center">
                        <div className="order-2 lg:order-1">
                            <div className="mb-8">
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                                    <span className="text-status-error font-mono text-xs uppercase tracking-widest font-bold">Versió 1 (Alpha)</span>
                                </div>
                                <h2 className="text-4xl font-bold mb-6 tracking-tight">Xassís V1</h2>
                                <p className="text-base-200 leading-relaxed mb-6 text-lg">
                                    Primera iteració funcional del projecte, fabricada completament en <strong className="text-white">PLA</strong>. Disseny monocasc obert que permet accés ràpid a la electrònica. Tot i que confirmà que FDM podia suportar les càrregues dinàmiques, les proves en pista revelaren flexió longitudinal excessiva.
                                </p>
                                <div className="bg-base-800/50 border border-tech-gray p-3 rounded-sm text-sm mb-6">
                                    <p className="font-bold text-accent-primary mb-1\">Material:</p>
                                    <p className="text-base-200\">PLA (100%) - Prototip conceptual, resistència tèrmica limitada</p>
                                </div>
                            </div>

                            <div className="bg-base-700/20 p-8 border border-base-700 rounded-sm">
                                <h3 className="font-mono text-xs text-base-600 uppercase tracking-widest mb-6 font-bold">Característiques</h3>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3 text-base-100">
                                        <Check size={18} className="text-status-error flex-shrink-0" />
                                        <span>Accés ràpid a components</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-base-100">
                                        <Check size={18} className="text-status-error flex-shrink-0" />
                                        <span>Impressió en una peça (300x300mm)</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-base-100">
                                        <X size={18} className="text-status-error flex-shrink-0" />
                                        <span>Rigidesa torsional insuficient</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-base-100">
                                        <X size={18} className="text-status-error flex-shrink-0" />
                                        <span>Punts d'ancoratge de suspensió febles</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2">
                            <ModelViewer url="/models/chassis.stl" color="#ef4444" label="V1 ALPHA" />
                            <div className="mt-6 p-4 bg-status-error/10 border border-status-error/20 rounded-sm">
                                <p className="text-sm text-status-error/70 font-mono">
                                    Clicar + arrossegar per rotar • Scroll per zoom
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* V2 Section */}
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <ModelViewer url="/models/chassis.stl" color="#3b82f6" label="V2 BETA" />
                            <div className="mt-6 p-4 bg-accent-primary/10 border border-accent-primary/20 rounded-sm">
                                <p className="text-sm text-accent-primary/80 font-mono">
                                    * Versió base V1 visualitzada com a referència (V2 en preparació)
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className="mb-8">
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
                                    <span className="text-accent-secondary font-mono text-xs uppercase tracking-widest font-bold">Versió 2 (Beta Actual)</span>
                                </div>
                                <h2 className="text-4xl font-bold mb-6 tracking-tight">Xassís V2</h2>
                                <p className="text-base-200 leading-relaxed mb-6 text-lg">
                                    Iteració actual optimitzada amb <strong className="text-white">PETG per l'estructura i TPU per la suspensió</strong>. Resol els problemes estructurals mitjançant un sistema de "top deck" que tanca la caixa de torsió. Millora de rigidesa del 200% amb increment mínim de pes.
                                </p>
                                <div className="bg-base-800/50 border border-tech-accent/30 p-3 rounded-sm text-sm mb-6">
                                    <p className="font-bold text-accent-primary mb-2\">Materials V2:</p>
                                    <p className="text-base-100 text-sm\"><strong>PETG:</strong> xassís, brazos, suports - resistència industrial</p>
                                    <p className="text-base-100 text-sm\"><strong>TPU:</strong> suspensió, tires de goma - flexibilitat controlada</p>
                                    <p className="text-base-100 text-sm\"><strong>PLA:</strong> suports temporals - remoció fàcil</p>
                                </div>
                            </div>

                            <div className="bg-base-700/20 p-8 border border-base-700 rounded-sm">
                                <h3 className="font-mono text-xs text-base-600 uppercase tracking-widest mb-6 font-bold">Millores Clau</h3>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3 text-base-100">
                                        <Check size={18} className="text-accent-secondary flex-shrink-0" />
                                        <span>+200% rigidesa torsional</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-base-100">
                                        <Check size={18} className="text-accent-secondary flex-shrink-0" />
                                        <span>Centre de gravetat reduït 15mm</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-base-100">
                                        <Check size={18} className="text-accent-secondary flex-shrink-0" />
                                        <span>Geometria de direcció corregida (Ackermann)</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-base-100">
                                        <AlertCircle size={18} className="text-yellow-500 flex-shrink-0" />
                                        <span>Muntatge més complex (inserts M3)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </motion.div>
            </div>
        </div>
    );
};

export default Models;
