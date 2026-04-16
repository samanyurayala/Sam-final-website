import { rightNow } from '@constants'
import React from 'react'
import useWindowStore from '@store/window';


const Navbar = () => {
    const { openWindow, focusWindow, windows } = useWindowStore();
    const toggle = (app) => {
        if (!app.openable) return;
        const window = windows[app.id];
        if (!window) return;
        if (window.open) focusWindow(app.id);
        else openWindow(app.id);
    };
  
    return (
    <nav>
        <div>
            <img src="icons/apple.png" className="h-5 w-auto brightness-80" alt="Apple" />
            <p className="leading-none font-l-bold translate-y-0.5 [text-shadow:0_2px_1px_rgba(0,0,0,0.275)]">TheRealSam</p>
            <ul>
                <li className="font-l" onClick={() => toggle({ id: 'explorer', openable: true})}>Projects</li>
                <li className="font-l" onClick={() => toggle({ id: 'about', openable: true})}>About</li>
            </ul>
        </div>
        <div>
            <time dateTime={new Date().toISOString()}>{rightNow}</time>
        </div>
    </nav>
  )
}

export default Navbar