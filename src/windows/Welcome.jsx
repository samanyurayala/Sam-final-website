import React from 'react'
import WindowWrapper from '@hoc/WindowWrapper';
import WindowControls from '@components/WindowControls';

const Welcome = () => {
  return (
    <>
        <div id="window-header">
            <WindowControls target="welcome" />
            <h2>Welcome</h2>
        </div>
        <div className="content">
            <img src="/icons/welcomeicon.png" alt="welcome" className="h-30 w-32.5" />
            <p className="text-5xl font-g">
                TheRealSam
            </p>
            <p className="text-xs font-l">Version 1.0.14</p>
            <p className="text-base font-l">Welcome!</p>
            <br />
            <p className="text-xs font-l">© 2026 TheRealSam. All rights reserved.</p>
        </div>
    </>
  )
}

const WelcomeWindow = WindowWrapper(Welcome, 'welcome');

export default WelcomeWindow;