/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                tech: {
                    black: '#0a0a0a',
                    dark: '#121212',
                    gray: '#1e1e1e',
                    light: '#e0e0e0',
                    accent: '#3b82f6', // Tech blue
                    success: '#10b981',
                    warning: '#f59e0b',
                    error: '#ef4444',
                },
                grid: {
                    line: '#2a2a2a',
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'], // For technical data
            },
        },
    },
    plugins: [],
}
