import React from 'react';
import NavLink from './NavLink';

function MenuOverlay({ links }) {
  return (
    <ul className='flex flex-col py-4 items-center'>
        {
            links.map((link, index) => {
                return (
                    <NavLink key={index} href={link.path} title={link.title} />
                )     
            })
        }
    </ul>
  )
}

export default MenuOverlay;