import React, { useRef, useState, useEffect } from 'react'
import routes from '../../data/routes'
import NavItem from './NavItem'
import MobileNavItem from './MobileNavItem'

import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// import Link from 'next/link'

export default function Navbar() {
  const mobileMenu = useRef(null)
  const [navOpen, setNavOpen] = useState(false) // for mobile

  const handleClick = (e) => {
    if (e.target.classList.contains('toggle')) return
    if (!mobileMenu.current.contains(e.target)) {
      setNavOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClick)
    return () => {
      document.removeEventListener('mousedown', handleClick)
    }
  }, [])

  return (
    <nav className="z-40 w-screen bg-white shadow fixed">
      <div className="container">

        <div className="flex justify-between h-16">
          {/* Homepage link */}
          <a className="flex-shrink-0 flex items-center ml-6" href="/">
            <p className="nav-name"><b>PRESTON FU</b></p>
          </a>

          {/* Mobile nav button */}
          <div className="absolute top-0 right-0 mt-4 mr-6 items-center lg:hidden">
            <button
              className="toggle inline-flex items-center justify-center p-2 rounded-md \
                text-gray-400 hover:text-gray-500 hover:bg-gray-100"
              aria-expanded="false"
              onClick={() => setNavOpen(!navOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <FontAwesomeIcon
                icon={faBars}
                className={`${navOpen ? 'hidden' : 'block'} toggle h-6 w-6`}
              />
              <FontAwesomeIcon
                icon={faTimes}
                className={`${navOpen ? 'block' : 'hidden'} toggle h-6 w-6`}
              />
            </button>
          </div>

          <div className="hidden lg:absolute lg:top-0 lg:right-0 lg:mr-10 lg:mt-5 lg:flex lg:space-x-6">
            {routes.map((r) => (
              <NavItem
                key={r.name}
                name={r.name}
                href={r.href}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${navOpen ? 'block' : 'hidden'} lg:hidden`}>
        <div ref={mobileMenu} className="pt-2 pb-3 space-y-1 shadow-lg">
          {routes.map((r) => (
            <MobileNavItem
              key={r.name}
              name={r.name}
              href={r.href}
            />
          ))}
        </div>
      </div>
    </nav>
  )
}