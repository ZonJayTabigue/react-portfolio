import React from 'react'
import { AnimatedTexts } from '../AnimatedText'
import { useState } from 'react'
import './index.scss'
import { useEffect } from 'react'

export const About = () => {

    const [textClass, setTextClass] = useState('text-animate')
    const aboutStr = ('About Me').split('')
    useEffect(() => {
        const timeout = setTimeout(() => {
        setTextClass('text-animate-hover')
        }, 3000)

        return () => clearTimeout(timeout)
    }, [])

  return (
    <div>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <span className='about-text'>
                        <AnimatedTexts textClass={textClass} strArr={aboutStr} index={10}/>
                    </span> 
                </h1>
                <div className='about-p'>
                    <p>
                        I am a Web Developer, Full Stack Developer.
                        I am good in critical thinking and analysis.
                        I am agile and hardworking.
                    </p>
                    <p>
                        I've been a college faculty in Jose Maria College and a Programming Team coach at the same time.
                        I was also the Team Captain of Programming Team of Jose Maria College for 4 years when I was in college.
                    </p>
                    <p>
                        I worked at Rasay Group of Companies as Software Engineer.
                        I developed ERP (Enterprise resource planning) system using Quasar Framework for the front-end and Laravel PHP for the back-end.
                    </p>
                    <p>
                        I also worked at IdeaHub IT Solutions Provider Inc as Full Stack Developer.
                        I worked on multiple projects such as IdeaPay and Virtual Classroom.
                    </p>
                    <p>
                        I also worked at MusQueteer B.V. as Full Stack Developer. I helped them develop a Invoicing System, also I was assigned to maintain their SALESFORCE projects.
                    </p>
                    <p>
                        I also worked at ProductFit as a part-time Full Stack Developer.
                    </p>
                    <p>
                        I recently worked at Code and Theory as a Backend Developer.
                        While working in Code and Theory, I managed to finish three projects, these are HarrisWilliams Website, NRG Website and Zeta-Global Website.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}
