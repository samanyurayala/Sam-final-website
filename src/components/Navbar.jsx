import { navBarLinks, rightNow } from '@constants'
import React from 'react'


const Navbar = () => {
  return (
    <nav>
        <div>
            <img src="icons/apple.png" className="h-5 w-auto brightness-80" alt="Apple" />
            <p className="leading-none font-l-bold translate-y-0.5 [text-shadow:0_2px_1px_rgba(0,0,0,0.275)]">TheRealSam</p>
            <ul>
                {navBarLinks.map(({ id, name }) => (
                    <li key={id}>
                        <p className="font-l">{name}</p>
                    </li>
                ))}
            </ul>
        </div>
        <div>
            <time datetime={new Date().toISOString()}>{rightNow}</time>
        </div>
    </nav>
  )
}

export default Navbar