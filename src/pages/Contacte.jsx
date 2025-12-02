import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Send, CheckCircle, AlertCircle } from 'lucide-react';
import SectionHeader from '../components/layout/SectionHeader';

const Contacte = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError(null);

        // Validació bàsica
        if (!formState.name || !formState.email || !formState.message) {
            setError('Completa tots els camps obligatoris');
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
            setError('Adreça de correu no vàlida');
            return;
        }

        // Enviar a FormSubmit (servei gratuït que envia emails)
        const form = e.target;
        const formData = new FormData(form);

        fetch('https://formsubmit.co/2f397b4c39b8da385fda4162c6187ceb', {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                setSubmitted(true);
                setFormState({ name: '', email: '', subject: '', message: '' });
                
                // Reset dopo 5 segundos
                setTimeout(() => {
                    setSubmitted(false);
                }, 5000);
            } else {
                setError('Error al enviar el missatge. Intenta de nou.');
            }
        })
        .catch(error => {
            setError('Error al enviar el missatge. Comprova la connexió.');
            console.error('Error:', error);
        });
    };

    return (
        <div className="min-h-screen bg-base-900 text-white pt-32 pb-24">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="max-w-5xl"
                >
                    <SectionHeader
                        label="Comunicació"
                        title="Contacta amb Nosaltres"
                        subtitle="Tens preguntes sobre el projecte o vols col·laborar? Envia'ns un missatge."
                        centered={true}
                    />

                    <div className="mt-24 grid md:grid-cols-2 gap-16">
                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 }}
                            className="space-y-8"
                        >
                            <div>
                                <h2 className="text-2xl font-bold mb-8 text-white">Informació de Contacte</h2>
                            </div>

                            <div className="space-y-6">
                                <div className="flex gap-6 items-start">
                                    <div className="w-12 h-12 bg-tech-accent/20 border border-tech-accent/30 rounded-sm flex items-center justify-center flex-shrink-0">
                                        <Mail className="text-accent-primary" size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white mb-2">Correu Electrònic</h3>
                                        <p className="text-base-200 text-sm mb-1">adria.tdr@example.com</p>
                                        <p className="text-base-600 text-xs">Resposta típica: 24-48 hores</p>
                                    </div>
                                </div>

                                <div className="flex gap-6 items-start">
                                    <div className="w-12 h-12 bg-tech-accent/20 border border-tech-accent/30 rounded-sm flex items-center justify-center flex-shrink-0">
                                        <MessageSquare className="text-accent-primary" size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white mb-2">Ubicació</h3>
                                        <p className="text-base-200 text-sm mb-1">Barcelona, Catalunya</p>
                                        <p className="text-base-600 text-xs">Institut de Tecnificació</p>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-8 border-t border-base-700">
                                <h3 className="font-bold text-white mb-4">Temes que Tractem</h3>
                                <ul className="space-y-2 text-sm text-base-200">
                                    <li className="flex gap-2 items-center">
                                        <span className="text-accent-primary">→</span> Preguntes tècniques sobre el disseny
                                    </li>
                                    <li className="flex gap-2 items-center">
                                        <span className="text-accent-primary">→</span> Suport de muntatge i construcció
                                    </li>
                                    <li className="flex gap-2 items-center">
                                        <span className="text-accent-primary">→</span> Col·laboracions i modificacions
                                    </li>
                                    <li className="flex gap-2 items-center">
                                        <span className="text-accent-primary">→</span> Feedback i millores proposades
                                    </li>
                                </ul>
                            </div>
                        </motion.div>

                        {/* Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Campo oculto para FormSubmit */}
                                <input type="hidden" name="_captcha" value="false" />
                                {/* Success Message */}
                                {submitted && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="p-4 bg-accent-secondary/10 border border-accent-secondary/30 rounded-sm flex gap-3 items-start"
                                    >
                                        <CheckCircle className="text-accent-secondary flex-shrink-0 mt-0.5" size={20} />
                                        <div>
                                            <h4 className="font-bold text-accent-secondary text-sm">Missatge enviat correctament!</h4>
                                            <p className="text-accent-secondary/80 text-xs mt-1">Ens posarem en contacte aviat.</p>
                                        </div>
                                    </motion.div>
                                )}

                                {/* Error Message */}
                                {error && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="p-4 bg-status-error/10 border border-status-error/30 rounded-sm flex gap-3 items-start"
                                    >
                                        <AlertCircle className="text-status-error flex-shrink-0 mt-0.5" size={20} />
                                        <div>
                                            <h4 className="font-bold text-status-error text-sm">Error al enviar</h4>
                                            <p className="text-status-error/70 text-xs mt-1">{error}</p>
                                        </div>
                                    </motion.div>
                                )}

                                {/* Name Field */}
                                <div>
                                    <label className="block text-xs font-mono text-base-600 uppercase tracking-wider mb-3">
                                        Nom Complet
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formState.name}
                                        onChange={handleChange}
                                        className="w-full bg-base-800 border border-base-700 p-4 text-white focus:border-tech-accent focus:outline-none transition-colors placeholder-base-600"
                                        placeholder="Nom..."
                                    />
                                </div>

                                {/* Email Field */}
                                <div>
                                    <label className="block text-xs font-mono text-base-600 uppercase tracking-wider mb-3">
                                        Correu Electrònic
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formState.email}
                                        onChange={handleChange}
                                        className="w-full bg-base-800 border border-base-700 p-4 text-white focus:border-tech-accent focus:outline-none transition-colors placeholder-base-600"
                                        placeholder="teu@email.com"
                                    />
                                </div>

                                {/* Subject Field */}
                                <div>
                                    <label className="block text-xs font-mono text-base-600 uppercase tracking-wider mb-3">
                                        Assumpte
                                    </label>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formState.subject}
                                        onChange={handleChange}
                                        className="w-full bg-base-800 border border-base-700 p-4 text-white focus:border-tech-accent focus:outline-none transition-colors placeholder-base-600"
                                        placeholder="Tema del missatge..."
                                    />
                                </div>

                                {/* Message Field */}
                                <div>
                                    <label className="block text-xs font-mono text-base-600 uppercase tracking-wider mb-3">
                                        Missatge *
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formState.message}
                                        onChange={handleChange}
                                        rows="6"
                                        className="w-full bg-base-800 border border-base-700 p-4 text-white focus:border-tech-accent focus:outline-none transition-colors resize-none placeholder-base-600"
                                        placeholder="Descriu la teva consulta o comentari..."
                                    ></textarea>
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="w-full bg-white text-black font-bold py-4 hover:bg-base-800 transition-all flex items-center justify-center gap-2 uppercase tracking-wider text-sm group"
                                >
                                    <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                                    Enviar Consulta
                                </button>

                                <p className="text-xs text-base-600 text-center">
                                    Els camps marcats amb * són obligatoris
                                </p>
                            </form>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Contacte;
