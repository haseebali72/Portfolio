import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faToggleOn } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { NavLink, Link } from 'react-router-dom'
const Header = () => {

  const navList = [
    { path: '/home', link: 'Home' },
    { path: '/about', link: 'About' },
    { path: '/projects', link: 'Projects' },
    { path: '/hireme', link: 'Hire Me' },
  ]


  return (
    <>
      <header>
        <nav className='flex justify-around items-center h-16 bg-slate-900 fixed top-0 left-0 right-0 z-50 '>

          {/* Left Section */}
          <div className='text-white text-2xl ml-28'>
            <Link to='/home'>Haseeb's Portfolio</Link>
          </div>

          {/* Right Section */}
          <div>
            <ul className='text-white flex justify-center ml-36 '>
              {navList.map(({ path, link }) =>
                <li className='mx-5 cursor-pointer hover:text-blue-400 transition 600s' key={path}>
                  <NavLink to={path}>
                    {link}
                  </NavLink>
                </li>)}
            </ul>
          </div>
          <button><FontAwesomeIcon icon={faToggleOn} /></button> 
        </nav>
      </header>
    </>
  )
}

export default Header