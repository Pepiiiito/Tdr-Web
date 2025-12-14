import React from 'react';
import { motion } from 'framer-motion';

const SectionHeader = ({ 
    title, 
    subtitle = null, 
    label = null,
    centered = false,
    animated = true 
}) => {
    const variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    const containerClass = centered ? 'text-center' : '';
    const titleClass = `text-5xl md:text-6xl font-bold tracking-tight mb-6`;
    const subtitleClass = centered ? 'mx-auto' : '';

    const content = (
        <div className={containerClass}>
            {label && (
                <span className="text-accent-primary font-mono text-xs uppercase tracking-widest mb-3 block">
                    {label}
                </span>
            )}
            <h1 className={titleClass}>
                {title}
            </h1>
            {subtitle && (
                <p className={`text-xl text-base-200 max-w-3xl leading-relaxed font-light ${subtitleClass}`}>
                    {subtitle}
                </p>
            )}
        </div>
    );

    if (animated) {
        return (
            <motion.div
                initial={variants.hidden}
                animate={variants.visible}
                transition={{ duration: 0.6 }}
            >
                {content}
            </motion.div>
        );
    }

    return content;
};

export default SectionHeader;
