import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Projects from './components/projects';
import Certificates from './components/Certifications';
import Contact from './components/Contact';
import Education from './components/Education';
import Footer from './components/Footer';

function App() {
  return (
<div className="bg-gradient-to-br from-blue-900 via-black to-purple-900">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Certificates />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
