import React, { useEffect, useState } from 'react'
import { navLinks } from '../constants'
import { link } from 'framer-motion/client'

const Navbar = () => {

    const [scrolled, setScrolled] = useState(false)

    useEffect(()=>{
        const handleScroll = () => {
            const isScrolled =window.scroll >10;
        }

        window.addEventListener('scroll', handleScroll);
        return() => window.removeEventListener('scroll', handleScroll);
    }, [])
  return (
    <header className={`navbar top-0 bg-black ${scrolled ? 'scrolled' : 'not-scrolled'}`}>
        <div className='inner'>
            <a className='logo' href='#hero'> Sujal Bhagat </a>

            <nav className='desktop'>
                <ul>
                    {navLinks.map(({link, name})=>(
                        <li key={name} className='group'>
                            <a href={link}>
                                <span>{name}</span>
                                <span className='underline' />
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>

            <a href='#contact' className='contact-btn group'>
                <div className='inner'>
                    <span>Contact Me</span>

                </div>
            </a>
        </div>
    </header>
  )
}

export default Navbar