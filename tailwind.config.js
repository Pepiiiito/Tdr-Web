/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // New engineering design system
                base: {
                    900: '#0F0F11',  // Deep background
                    800: '#1A1B1E',  // Primary background
                    700: '#25262B',  // Surface/card background
                    600: '#2F3036',  // Elevated surface
                    200: '#D9DDE3',  // Light text
                    100: '#F3F4F6',  // Light background
                },
                accent: {
                    primary: '#4AA8FF',      // Tech blue primary
                    'primary-hover': '#2196F3',  // Tech blue hover
                    secondary: '#7AC4A8',   // Soft green for success
                },
                status: {
                    error: '#FF5252',    // Error red
                    warning: '#FFC047',  // Warning amber
                    success: '#7AC4A8',  // Success green
                },
                // Legacy colors for backward compatibility during migration
                tech: {
                    black: '#0F0F11',
                    dark: '#1A1B1E',
                    gray: '#25262B',
                    light: '#D9DDE3',
                    accent: '#4AA8FF',
                    success: '#7AC4A8',
                    warning: '#FFC047',
                    error: '#FF5252',
                },
                grid: {
                    line: '#25262B',
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
            },
        },
    },
    plugins: [],
}
