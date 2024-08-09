
import './App.css'
import Experience from './components/experience/Experience'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import Skills from './components/skills/Skills'
import Testimonials from './components/testimonials/Testimonials'

function App() {

  return (
    <div>
      <Navbar />
      <div className='main-container'>
        <Hero />
        <Skills />
        <Experience />
        <Testimonials />
      </div>
    </div>
  )
}

export default App
