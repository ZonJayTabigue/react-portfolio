import React from 'react'
import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoCB from '../../assets/images/insect-only.png'
import LogoSub from '../../assets/images/text-only-white.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export const Sidebar = () => {
  return (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoCB} alt='logo' />
            <img src={LogoSub} alt='logo_sub' className='logo-sub' />
        </Link>
        <nav>
            <NavLink exact="true" activeClassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
            </NavLink>
            <NavLink exact="true" activeClassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
            </NavLink>
            <NavLink exact="true" activeClassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/rezon-jay-tabigue-0a6984198/'>
                    <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e'/>
                </a>
            </li>
            <li>
                <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/rezon-jay-tabigue-0a6984198/'>
                    <FontAwesomeIcon icon={faGithub} color='#4d4d4e'/>
                </a>
            </li>
            <li>
                <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/rezon-jay-tabigue-0a6984198/'>
                    <FontAwesomeIcon icon={faFacebook} color='#4d4d4e'/>
                </a>
            </li>
        </ul>
    </div>
  )
}
