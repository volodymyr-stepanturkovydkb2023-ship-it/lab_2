import Header from './components/Header.jsx';
import About from './components/About.jsx';
import Education from './components/Education.jsx';
import Skills from './components/Skills.jsx';
import Experience from './components/Experience.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
    return (
        <div className="min-h-screen bg-gray-100 p-4">
            <div className="mx-auto max-w-5xl">
                <Header />

                <main className="mt-5 grid gap-5 md:grid-cols-2">
                    <About />
                    <Education />
                    <Skills />
                    <Experience />
                </main>

                <Footer />
            </div>
        </div>
    );
}