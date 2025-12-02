import React from 'react';
import { motion } from 'framer-motion';

const SectionContainer = ({ 
    children, 
    bg = 'transparent',
    border = false,
    fullWidth = false,
    py = 'py-24',
    animated = false
}) => {
    const bgClasses = {
        transparent: '',
        dark: 'bg-base-800',
        gray: 'bg-base-700/10',
        black: 'bg-base-900',
    };

    const borderClass = border ? 'border-b border-base-700' : '';
    const width = fullWidth ? '' : 'container mx-auto';
    const padding = fullWidth ? '' : 'px-6';

    const containerClass = `${bgClasses[bg]} ${borderClass} ${py} ${width && padding ? width + ' ' + padding : ''}`.trim();

    const content = (
        <div className={containerClass}>
            {children}
        </div>
    );

    if (animated) {
        return (
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                {content}
            </motion.div>
        );
    }

    return content;
};

export default SectionContainer;
