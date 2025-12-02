import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Play, CheckCircle, Wrench, Shield } from 'lucide-react';
import SectionHeader from '../components/layout/SectionHeader';

const Step = ({ number, title, children, warning, image }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-20 md:mb-28"
    >
        <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
                <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-tech-accent/20 border border-tech-accent/50 rounded-sm flex items-center justify-center flex-shrink-0 font-bold text-lg text-accent-primary">
                        {number}
                    </div>
                    <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-white">{title}</h3>
                    </div>
                </div>
                <div className="text-base-200 leading-relaxed mb-6 text-lg font-light space-y-4">
                    {children}
                </div>
                {warning && (
                    <div className="bg-tech-warning/10 border border-tech-warning/30 p-5 flex gap-3 items-start rounded-sm">
                        <AlertTriangle className="text-tech-warning flex-shrink-0 mt-0.5" size={20} />
                        <p className="text-sm text-tech-warning">{warning}</p>
                    </div>
                )}
            </div>
            {image && (
                <div className="hidden md:block">
                    <VideoPlaceholder title={title} />
                </div>
            )}
        </div>
    </motion.div>
);

const VideoPlaceholder = ({ title }) => (
    <div className="aspect-video bg-base-800 rounded-sm flex items-center justify-center group cursor-pointer border border-base-700 hover:border-accent-primary/50 transition-all relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
        <div className="w-16 h-16 bg-tech-accent/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-tech-accent/50 group-hover:scale-110 transition-transform z-10">
            <Play className="ml-1 text-accent-primary" fill="currentColor" size={24} />
        </div>
        <span className="sr-only">Reproduir {title}</span>
    </div>
);

const Muntatge = () => {
    return (
        <div className="min-h-screen bg-base-900 text-white pt-32 pb-24">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="max-w-5xl"
                >
                    <SectionHeader
                        label="Guia Pas a Pas"
                        title="Com Muntar el Xassís"
                        subtitle="Instruccions detallades per construir el RCTDR V2 des de zero"
                    />

                    <div className="mt-24 space-y-20 md:space-y-32">
                        {/* Section 1 */}
                        <div className="border-t border-base-700 pt-20">
                            <h2 className="text-3xl font-bold mb-12 flex items-center gap-3 text-white">
                                <div className="w-10 h-10 bg-tech-accent/20 rounded-sm flex items-center justify-center">
                                    <span className="font-mono text-accent-primary font-bold">01</span>
                                </div>
                                Preparació del Xassís (PETG + TPU)
                            </h2>

                            <VideoPlaceholder title="Preparació Xassís" />

                            <Step 
                                number="1" 
                                title="Inserció de Rosques (Heat Set Inserts)"
                                warning="⚠️ Temperatura recomanada: 200°C. No aplicar pressió excessiva per evitar deformacions."
                            >
                                <p>
                                    El primer pas crític és la instal·lació dels <strong className="text-white">inserts de llautó M3</strong>. Utilitzeu un soldador amb punta plana o una pistola d'inserts dedicada.
                                </p>
                                <p>
                                    <strong className="text-white">Verificació:</strong> L'insert ha de quedar <strong>perfectament enrasat</strong> amb la superfície de la peça. Si queda submergit, la rosca no agafarà correctament.
                                </p>
                            </Step>

                            <Step 
                                number="2" 
                                title="Neteja i Inspecció Visual"
                            >
                                <p>
                                    Inspeccioneu totes les superfícies de contacte. Retireu filaments solts, "pes" de suports o rebaves amb un ganivet o paper de vidre de gra fi (600+).
                                </p>
                                <p>
                                    <strong className="text-white">Punt crític:</strong> Les superfícies que es toquen entre seccions han de ser planes. Tracteu amb paper de vidre si detecteu curvatura.
                                </p>
                            </Step>

                            <Step 
                                number="3" 
                                title="Ensamblatge del Xassís Principal"
                                warning="⚠️ Col·loqueu cargols en patró X (creu) per distribució uniforme. No segeleu tot d'una."
                            >
                                <p>
                                    Uniu la <strong className="text-white">part inferior del xassís amb el "top deck"</strong> utilitzant cargols M3x10mm de cap esfera.
                                </p>
                                <p>
                                    <strong className="text-white">Sequència:</strong> Colzeu suaument els 4 cargols en ordre X: superior-esquerre → inferior-dreta → superior-dreta → inferior-esquerre. Aixó evita torsió.
                                </p>
                            </Step>
                        </div>

                        {/* Section 2 */}
                        <div className="border-t border-base-700 pt-20">
                            <h2 className="text-3xl font-bold mb-12 flex items-center gap-3 text-white">
                                <div className="w-10 h-10 bg-tech-accent/20 rounded-sm flex items-center justify-center">
                                    <span className="font-mono text-accent-primary font-bold">02</span>
                                </div>
                                Tren de Rodatge (TPU Suspensió)
                            </h2>

                            <VideoPlaceholder title="Muntatge Suspensió" />

                            <Step 
                                number="4" 
                                title="Instal·lació de Trapezis Superiors"
                                warning="⚠️ Verificar llibertat de moviment. Si va dur, llimar les arestes amb grana 400."
                            >
                                <p>
                                    Inseriu els eixos de suspensió d'<strong className="text-white">acer inoxidable de 3mm</strong>. Els trapezis han de caure pel seu propi pes sense fricció excessiva.
                                </p>
                                <p>
                                    <strong className="text-white">Test de qualitat:</strong> Aixequeu el xassís per una rueda. El trapezi ha de baixar completament per gravetat. Si queda bloquejat, hi ha fricció.
                                </p>
                            </Step>

                            <Step 
                                number="5" 
                                title="Instal·lació de Trapezis Inferiors"
                            >
                                <p>
                                    Repetiu el procés amb els trapezis inferiors. <strong className="text-white">Crítico:</strong> Els eixos han de ser exactament de 3mm. Uns més gruixuts cauran bloqueig.
                                </p>
                            </Step>

                            <Step 
                                number="6" 
                                title="Muntatge de Rodaments i Eixos de Rodes"
                                warning="⚠️ Els rodaments són precisos. Tracteu amb cura. No forceu l'entrada."
                            >
                                <p>
                                    Inseriu els rodaments de boles 5x11x4 mm als allotjaments de les punteres. Utilitzeu una gota de greix de silicona per facilitar l'entrada.
                                </p>
                            </Step>
                        </div>

                        {/* Section 3 */}
                        <div className="border-t border-base-700 pt-20">
                            <h2 className="text-3xl font-bold mb-12 flex items-center gap-3 text-white">
                                <div className="w-10 h-10 bg-tech-accent/20 rounded-sm flex items-center justify-center">
                                    <span className="font-mono text-accent-primary font-bold">03</span>
                                </div>
                                Electrònica i Final (Integració PETG)
                            </h2>

                            <Step 
                                number="7" 
                                title="Muntatge del Motor i Transmissió"
                            >
                                <p>
                                    Instal·leu el motor 540 al rebaix designat. Connecteu el pinyó de 13T. Comproveu que la transmissió gira <strong className="text-white">suaument sense "dead spots"</strong>.
                                </p>
                            </Step>

                            <Step 
                                number="8" 
                                title="Verificació Final"
                            >
                                <p>
                                    Abans de connectar l'electrònica:
                                </p>
                                <ul className="list-none space-y-3 mt-4">
                                    <li className="flex gap-3 items-start">
                                        <CheckCircle size={20} className="text-tech-success flex-shrink-0 mt-0.5" />
                                        <span>Suspensió es mou lliurement en tota la carrera</span>
                                    </li>
                                    <li className="flex gap-3 items-start">
                                        <CheckCircle size={20} className="text-tech-success flex-shrink-0 mt-0.5" />
                                        <span>Transmissió gira sense fricció excessiva</span>
                                    </li>
                                    <li className="flex gap-3 items-start">
                                        <CheckCircle size={20} className="text-tech-success flex-shrink-0 mt-0.5" />
                                        <span>Xassís és estable quan es recolza sobre les rodes</span>
                                    </li>
                                    <li className="flex gap-3 items-start">
                                        <CheckCircle size={20} className="text-tech-success flex-shrink-0 mt-0.5" />
                                        <span>Cap peça suelta o vibrant</span>
                                    </li>
                                </ul>
                            </Step>
                        </div>

                        {/* Final Validation */}
                        <div className="mt-20 p-12 bg-tech-accent/10 border border-tech-accent/30 rounded-sm">
                            <div className="flex gap-6 items-start">
                                <Shield className="text-accent-primary flex-shrink-0" size={32} />
                                <div>
                                    <h3 className="text-2xl font-bold mb-4 text-white">Certificació de Muntatge</h3>
                                    <p className="text-base-100 leading-relaxed mb-4">
                                        Si tots els passos s'han completat correctament, el xassís està <strong>llist per a la seva primera sortida a pista</strong>. Recomanan fer una prova en zona controlada (circuit tancat) abans de competir.
                                    </p>
                                    <p className="text-sm text-base-200">
                                        Temps estimat: 3-4 hores per a un muntador experimentat. 6-8 hores per a primers muntatges.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Muntatge;
