import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download } from 'lucide-react';

const PdfModal = ({ isOpen, onClose }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center p-0 md:p-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="bg-white w-full h-full md:max-w-7xl md:h-[90vh] md:rounded-2xl shadow-2xl overflow-hidden flex flex-col relative z-10"
                    >
                        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-white">
                            <h3 className="font-semibold text-base-900">TdR.pdf</h3>
                            <div className="flex items-center gap-4">
                                <a
                                    href="/docs/TdR.pdf"
                                    download
                                    className="flex items-center gap-2 text-sm font-medium text-base-600 hover:text-black transition-colors"
                                >
                                    <Download size={18} />
                                    <span className="hidden sm:inline">Descarregar</span>
                                </a>
                                <button
                                    onClick={onClose}
                                    className="p-2 hover:bg-base-100 rounded-full transition-colors"
                                >
                                    <X size={20} />
                                </button>
                            </div>
                        </div>

                        <div className="flex-1 bg-base-100 relative">
                            <iframe
                                src="/docs/TdR.pdf"
                                className="w-full h-full border-none"
                                title="PDF Viewer"
                            />
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default PdfModal;
