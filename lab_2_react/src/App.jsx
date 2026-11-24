import Header from './components/Header.jsx';
import About from './components/About.jsx';
import Education from './components/Education.jsx';
import Skills from './components/Skills.jsx';
import Experience from './components/Experience.jsx';
import Footer from './components/Footer.jsx';
import './App.css';

export default function App() {
    return (
        <div className="portfolio">
            <Header />

            <main className="content">
                <About />
                <Education />
                <Skills />
                <Experience />
            </main>

            <Footer />
        </div>
    );
}