import React from 'react'
import './index.scss'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { AnimatedTexts } from '../AnimatedText'
// import {  } from 'react'

export const Home = () => {

  const [textClass, setTextClass] = useState('text-animate')
  const nameArr = ('Rezon Jay Tabigue').split('')
  const posArr = ('web developer.').split('')

  useEffect(() => {
    const timeout = setTimeout(() => {
      setTextClass('text-animate-hover')
    }, 3000)

    return () => clearTimeout(timeout)
  }, [])
  return (
    <div className='container home-page'>
        <div className='text-zone'>
            <h1>
              <div className='intro-text'>
                Hi, 
                <br />
                I'm <span className='zon-name'>
                      <AnimatedTexts textClass={textClass} strArr={nameArr} index={10}/>
                    </span> 
                <br />
                <span className=''>
                  <AnimatedTexts textClass={textClass} strArr={posArr} index={20}/>
                </span> 
                </div>
            </h1>
            <Link to="/contact" className='flat-button intro-text'>CONTACT ME</Link>
        </div>
    </div>
  )
}
