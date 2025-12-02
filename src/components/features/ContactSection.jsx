import React, { useState } from 'react';
import { Send, Check, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactSection = () => {
    const [status, setStatus] = useState('idle'); // idle, submitting, success

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('submitting');
        setTimeout(() => {
            setStatus('success');
            setTimeout(() => setStatus('idle'), 3000);
        }, 1500);
    };

    return (
        <section id="contact" className="py-24 bg-white border-t border-gray-100">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-100">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-sm mb-6 text-base-900">
                            <Mail size={24} />
                        </div>
                        <h2 className="text-3xl font-bold text-base-900 mb-4">Contacte</h2>
                        <p className="text-base-600 max-w-lg mx-auto">
                            Tens preguntes sobre el disseny, els fitxers STL o la memòria del projecte?
                            Envia'm un missatge.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6 max-w-xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-base-700">Nom</label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:border-black focus:ring-0 transition-colors outline-none"
                                    placeholder="El teu nom"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-base-700">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:border-black focus:ring-0 transition-colors outline-none"
                                    placeholder="hola@exemple.com"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium text-base-700">Missatge</label>
                            <textarea
                                id="message"
                                required
                                rows={4}
                                className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:border-black focus:ring-0 transition-colors outline-none resize-none"
                                placeholder="Escriu el teu missatge aquí..."
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={status !== 'idle'}
                            className={`w-full py-4 rounded-xl font-medium transition-all flex items-center justify-center gap-2 ${status === 'success'
                                    ? 'bg-green-500 text-white'
                                    : 'bg-black text-white hover:bg-gray-800 hover:scale-[1.02] active:scale-[0.98]'
                                }`}
                        >
                            {status === 'idle' && (
                                <>
                                    Enviar Missatge
                                    <Send size={18} />
                                </>
                            )}
                            {status === 'submitting' && (
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ repeat: Infinity, duration: 1 }}
                                    className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                                />
                            )}
                            {status === 'success' && (
                                <>
                                    Enviat Correctament
                                    <Check size={18} />
                                </>
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
