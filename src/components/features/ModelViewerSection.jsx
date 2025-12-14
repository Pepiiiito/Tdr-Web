import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';
import { Loader2, MousePointer2, Move } from 'lucide-react';

// Placeholder Model Component
function Model() {
    return (
        <mesh rotation={[0, Math.PI / 4, 0]}>
            <boxGeometry args={[2, 0.5, 4]} />
            <meshStandardMaterial color="#e0e0e0" roughness={0.3} metalness={0.8} />
            <mesh position={[0, 0.5, 0]}>
                <boxGeometry args={[1.5, 0.5, 2]} />
                <meshStandardMaterial color="#333" roughness={0.5} />
            </mesh>
            {/* Wheels placeholders */}
            <mesh position={[1.2, -0.2, 1.5]} rotation={[0, 0, Math.PI / 2]}>
                <cylinderGeometry args={[0.6, 0.6, 0.5, 32]} />
                <meshStandardMaterial color="#111" />
            </mesh>
            <mesh position={[-1.2, -0.2, 1.5]} rotation={[0, 0, Math.PI / 2]}>
                <cylinderGeometry args={[0.6, 0.6, 0.5, 32]} />
                <meshStandardMaterial color="#111" />
            </mesh>
            <mesh position={[1.2, -0.2, -1.5]} rotation={[0, 0, Math.PI / 2]}>
                <cylinderGeometry args={[0.6, 0.6, 0.5, 32]} />
                <meshStandardMaterial color="#111" />
            </mesh>
            <mesh position={[-1.2, -0.2, -1.5]} rotation={[0, 0, Math.PI / 2]}>
                <cylinderGeometry args={[0.6, 0.6, 0.5, 32]} />
                <meshStandardMaterial color="#111" />
            </mesh>
        </mesh>
    );
}

const ModelViewerSection = () => {
    return (
        <section id="models" className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-12 items-center">
                    <div className="lg:w-1/3">
                        <span className="text-sm font-medium text-base-600 uppercase tracking-wider mb-2 block">
                            Disseny CAD
                        </span>
                        <h2 className="text-3xl font-bold text-base-900 mb-6">Xassís Modular V2</h2>
                        <p className="text-base-600 mb-8 leading-relaxed">
                            El disseny final incorpora un sistema de suspensió independent i un xassís reforçat tipus "sandvitx".
                            S'ha optimitzat la topologia per reduir el pes sense comprometre la rigidesa estructural necessària per a les proves d'impacte.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
                                <MousePointer2 className="text-base-200" />
                                <div className="text-sm">
                                    <strong className="block text-base-900">Clicar i Arrossegar</strong>
                                    <span className="text-base-600">Per rotar la vista 360º</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
                                <Move className="text-base-200" />
                                <div className="text-sm">
                                    <strong className="block text-base-900">Scroll</strong>
                                    <span className="text-base-600">Per fer zoom in/out</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-2/3 w-full h-[600px] bg-base-100 rounded-3xl overflow-hidden border border-gray-200 relative shadow-inner">
                        <div className="absolute top-6 left-6 z-10 bg-white/90 backdrop-blur px-4 py-2 rounded-full text-xs font-mono text-base-600 border border-gray-200 shadow-sm">
                            VISOR INTERACTIU • STL
                        </div>

                        <Suspense fallback={
                            <div className="absolute inset-0 flex items-center justify-center text-base-200 flex-col gap-4">
                                <Loader2 className="animate-spin" size={32} />
                                <span className="text-sm font-medium">Carregant model 3D...</span>
                            </div>
                        }>
                            <Canvas shadows dpr={[1, 2]} camera={{ fov: 45, position: [5, 5, 5] }}>
                                <Stage environment="city" intensity={0.5} adjustCamera={false}>
                                    <Model />
                                </Stage>
                                <OrbitControls autoRotate autoRotateSpeed={1} enableZoom={true} />
                            </Canvas>
                        </Suspense>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ModelViewerSection;
