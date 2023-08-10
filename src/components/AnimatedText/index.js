import React from 'react'
import './index.scss'

export const AnimatedTexts = ({ textClass, strArr, index }) => {
  return (
    <span>
        {
            strArr.map((char, i) => (
                <span key={char + i} className={`${textClass} _${i + index}`}>
                    {char}
                </span>
            ))
        }
    </span>
  )
}
