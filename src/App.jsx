import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import PdfModal from './components/features/PdfModal';
import Preloader from './components/layout/Preloader';

import Home from './pages/Home';
import Projecte from './pages/Projecte';
import Models from './pages/Models';
import Muntatge from './pages/Muntatge';
import Documentacio from './pages/Documentacio';
import Contacte from './pages/Contacte';

function AppContent() {
    const location = useLocation();
    const [isPdfOpen, setIsPdfOpen] = useState(false);
    const [loading, setLoading] = useState(true);

    // Scroll to top when route changes
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <>
            <AnimatePresence>
                {loading && <Preloader onComplete={() => setLoading(false)} />}
            </AnimatePresence>

            {!loading && (
                <div className="min-h-screen bg-base-900 flex flex-col font-sans text-white selection:bg-tech-accent selection:text-white">
                    <Navbar onOpenPdf={() => setIsPdfOpen(true)} />

                    <main className="flex-grow">
                        <AnimatePresence mode="wait">
                            <Routes location={location} key={location.pathname}>
                                <Route path="/" element={<Home />} />
                                <Route path="/projecte" element={<Projecte />} />
                                <Route path="/models" element={<Models />} />
                                <Route path="/muntatge" element={<Muntatge />} />
                                <Route path="/documentacio" element={<Documentacio />} />
                                <Route path="/contacte" element={<Contacte />} />
                            </Routes>
                        </AnimatePresence>
                    </main>
                    <Footer />
                </div>
            )}
        </>
    );
}

function App() {
    return (
        <Router>
            <AppContent />
        </Router>
    );
}

export default App;
