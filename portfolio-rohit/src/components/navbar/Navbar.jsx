import React ,{useState} from 'react'
import { Link } from 'react-scroll'
import './navbar.css'
import { FaBars } from 'react-icons/fa'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () =>{
        setIsOpen(!isOpen)
    }

    const handleSetActive = () =>{

    }

  return (
    <nav>
      <ul className={isOpen ? "nav-links active": "nav-links"}>
        <li>
          <Link 
            activeClass="active" 
            to="hero" 
            spy={true} 
            smooth={true} 
            offset={-100} 
            duration={500} 
            onSetActive={handleSetActive}
          >
            Home
          </Link>
        </li>
        <li>
          <Link 
            activeClass="active" 
            to="skills" 
            spy={true} 
            smooth={true} 
            offset={-80} 
            duration={500} 
            onSetActive={handleSetActive}
          >
            Skills
          </Link>
        </li>
        <li>
          <Link 
            activeClass="active" 
            to="experience" 
            spy={true} 
            smooth={true} 
            offset={-80} 
            duration={500} 
            onSetActive={handleSetActive}
          >
            Experience
          </Link>
        </li>

      </ul>
      <div className="icon" onClick={toggleMenu}>
            <FaBars/>
        </div>
    </nav>
  )
}

export default Navbar
