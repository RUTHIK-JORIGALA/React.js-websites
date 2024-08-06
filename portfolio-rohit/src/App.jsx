
import './App.css'
import Experience from './components/experience/Experience'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import Skills from './components/skills/Skills'

function App() {

  return (
    <div>
      <Navbar />
      <div className='main-container'>
        <Hero />
        <Skills />
        <Experience />
      </div>
    </div>
  )
}

export default App
