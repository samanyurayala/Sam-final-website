import React from 'react'
import WindowWrapper from '@hoc/WindowWrapper';
import WindowControls from '@components/WindowControls';

const Settings = () => {
  return (
    <>
        <div id="window-header">
            <WindowControls target="preferences" />
            <h2>Settings</h2>
        </div>
        <div className="content">
            <div className="flex items-center gap-6">
                abcdefg
                <div className="border-l fill-black h-14"></div>
                <div className="flex flex-col justify-center items-center">
                    <img src="/icons/home.png" alt="home" className="h-8" />
                    <p className="font-l">Home</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <img src="/icons/favorites.png" alt="favorites" className="h-6" />
                    <p className="font-l translate-y-1">Favorites</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <img src="/icons/apps.png" alt="applications" className="h-8" />
                    <p className="font-l">Applications</p>
                </div>
            </div>
            <hr />
            <div className="bg-white">
                <img src="/icons/finder.png" alt="finder" className="h-20"/>                
                <img src="/icons/mail.png" alt="finder" className="h-20"/>
                <img src="/icons/explorer.png" alt="finder" className="h-20"/>
                <img src="/icons/systempreferences.png" alt="finder" className="h-20"/>
                <img src="/icons/welcome.png" alt="finder" className="h-20"/>
                <img src="/icons/trash.png" alt="finder" className="h-20"/>

            </div>
        </div>
    </>
  )
}

const SettingsWindow = WindowWrapper(Settings, 'preferences');

export default SettingsWindow;