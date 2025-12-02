import React from 'react';
import { motion } from 'framer-motion';
import Logo from '../ui/Logo';

const Preloader = ({ onComplete }) => {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0.8, delay: 2, ease: "easeInOut" }}
            onAnimationComplete={onComplete}
            className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
        >
            <div className="relative flex flex-col items-center">
                <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-8"
                >
                    <Logo className="w-24 h-24 text-white" />
                </motion.div>

                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: 200 }}
                    transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
                    className="h-1 bg-white/20 rounded-full overflow-hidden"
                >
                    <motion.div
                        initial={{ x: '-100%' }}
                        animate={{ x: '0%' }}
                        transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
                        className="h-full bg-white"
                    />
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="mt-8 text-white font-mono text-sm tracking-[0.2em] uppercase"
                >
                    Enginyeria RC
                </motion.h1>
            </div>
        </motion.div>
    );
};

export default Preloader;
