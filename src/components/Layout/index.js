import React from 'react'
import './index.scss'
import { Sidebar } from '../Sidebar'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <div className='App'>
        <Sidebar />
        <div className='page'>
            <span className='tags top-tags'>
                &lt;html&gt;
                <br />
                <span className='top-tag-html'>&lt;body&gt;</span>
            </span>
            
            <Outlet />
            <span className='tags bottom-tags'>
                <span className='bottom-tag-html'>&lt;/body&gt;</span>
                <br />
                &lt;/html&gt;
            </span>

        </div>
    </div>
  )
}
