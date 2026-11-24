import { useState, useEffect } from 'react';
import Header from './components/Header.jsx';
import About from './components/About.jsx';
import Education from './components/Education.jsx';
import Skills from './components/Skills.jsx';
import Experience from './components/Experience.jsx';
import Reviews from './components/Reviews.jsx';
import ContactForm from './components/ContactForm.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const hours = new Date().getHours();
        setTheme(hours >= 7 && hours < 21 ? 'light' : 'dark');
    }, []);

    const toggleTheme = () => {
        setTheme(previous => previous === 'light' ? 'dark' : 'light');
    };

    const darkMode = theme === 'dark';

    return (
        <div className={`min-h-screen bg-gray-100 p-4 ${darkMode ? 'dark-mode' : ''}`}>
            <div className="mx-auto max-w-5xl">
                <Header
                    darkMode={darkMode}
                    toggleTheme={toggleTheme}
                />

                <main className="mt-5 grid gap-5 md:grid-cols-2">
                    <About />
                    <Education />
                    <Skills />
                    <Experience />
                    <Reviews />
                </main>

                <Footer />
                <ContactForm />
            </div>
        </div>
    );
}