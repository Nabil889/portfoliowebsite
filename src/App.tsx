import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Education from './components/Education'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: 'var(--color-section-light)' }}>
      <Navbar />
      
      <main className="grow">
        <Hero />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App