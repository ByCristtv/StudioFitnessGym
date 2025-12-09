"use client";
import {Link as ScrollLink} from 'react-scroll'

const links = [
  {name: 'inicio', target: 'home', offset: -100},
  {name: 'Acerca', target: 'about', offset: -80},
  {name: 'Clases', target: 'class', offset: -80},
  {name: 'equipo', target: 'team', offset: 0},
  {name: 'testimonios', target: 'testimonial', offset: 0},
  {name: 'precios', target: 'prices', offset: -40},
  {name: 'blog', target: 'blog', offset: 0},
  {name: 'contacto', target: 'contact', offset: 0},
]

export const Nav = ({containerStyles}: {containerStyles: string}) => {
  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => {
        return (
          <ScrollLink
            key={index}
            to={link.target}
            smooth
            spy
            offset={link.offset}
            duration={500}
            activeClass='active'
            className='cursor-pointer text-neutral-50 hover:text-lime-400 transition-all'
          >
            {link.name}
          </ScrollLink>
        )
      })}
    </nav>
  )
  
}
