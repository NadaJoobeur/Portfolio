import { Container } from './styles'
import { BrowserRouter as Router } from 'react-router-dom'
import { NavHashLink, HashLink } from 'react-router-hash-link'
import { useState, useEffect } from 'react'

import { FiSun } from 'react-icons/fi'
import { FiMoon } from 'react-icons/fi'


export function Header() {
  const [isActive, setActive] = useState(false)
  const [isLightTheme, setIsLightTheme] = useState(false)

  // Vérifie le thème au chargement
  useEffect(() => {
    const html = document.getElementsByTagName('html')[0]
    setIsLightTheme(html.classList.contains('light'))
  }, [])

  function toggleTheme() {
    const html = document.getElementsByTagName('html')[0]
    html.classList.toggle('light')
    setIsLightTheme(!isLightTheme)
  }

  function closeMenu() {
    setActive(false)
  }

  return (
    <Container className="header-fixed">
      <Router>
        <HashLink smooth to="#home" className="logo">
          <span>{"<NADA"}</span>
          <span>{"_JOOBEUR/>"}</span>
        </HashLink>

        {/* Bouton de bascule de thème moderne */}


        <nav className={isActive ? 'active' : ''}>
          <NavHashLink smooth to="#home" onClick={closeMenu}>
            Home
          </NavHashLink>
          <NavHashLink smooth to="#about" onClick={closeMenu}>
            About 
          </NavHashLink>
          <NavHashLink smooth to="#project" onClick={closeMenu}>
            Project
          </NavHashLink>
          <NavHashLink smooth to="#contact" onClick={closeMenu}>
            Contact
          </NavHashLink>


                  <button 
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${isLightTheme ? 'dark' : 'light'} mode`}
        >
            <div className={`theme-toggle__inner ${isLightTheme ? 'light' : 'dark'}`}>
        {isLightTheme ? (
          // @ts-ignore
          <FiSun size={18} className="theme-icon" />
        ) : (
          // @ts-ignore
          <FiMoon size={18} className="theme-icon" />
        )}
    
      </div>

        </button>
        </nav>

        <div
          aria-expanded={isActive ? 'true' : 'false'}
          aria-haspopup="true"
          aria-label={isActive ? 'Fechar menu' : 'Abrir menu'}
          className={isActive ? 'menu active' : 'menu'}
          onClick={() => {
            setActive(!isActive)
          }}
        ></div>
      </Router>
    </Container>
  )
}