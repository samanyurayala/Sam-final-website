import React from 'react'
import WindowWrapper from '@hoc/WindowWrapper';
import WindowControls from '@components/WindowControls';
import { locations } from '@constants';
import useWindowStore from '@store/window';
import { useState } from 'react';

const Portfolio = () => {
    const [activeLoc, setActiveLoc] = useState(1);
    const { openWindow, focusWindow, windows } = useWindowStore();
    const toggle = (app) => {
        if (!app.openable && app.link === "") return;
        const thisWindow = windows[app.id];
        if (!app.openable) {
            console.log(app.link);
            window.location.assign(app.link);
        }
        if (!thisWindow) return;
        if (thisWindow.open) {
            focusWindow(app.id);
        } else {
            openWindow(app.id);
        }
    };

    return (
    <>
        <div id="window-header">
            <WindowControls target="finder" />
            <h2>Portfolio</h2>
        </div>
        <div className="content">
            <div className="flex items-center gap-6 font-l pt-2">
                <button className="back -translate-y-1 translate-x-3" onClick={() => setActiveLoc((activeLoc + 3) % 4)}>&#9664;••</button>
                <div className="border-l fill-black h-16 -mt-2"></div>
                <div className="flex flex-col justify-center items-center" onClick={() => setActiveLoc(0)}>
                    <img src="/icons/computer.png" alt="computer" className="h-8"/>
                    <p className="font-l">Computer</p>
                </div>
                <div className="flex flex-col justify-center items-center" onClick={() => setActiveLoc(1)}>
                    <img src="/icons/home.png" alt="home" className="h-8" />
                    <p className="font-l">Home</p>
                </div>
                <div className="flex flex-col justify-center items-center" onClick={() => setActiveLoc(2)}>
                    <img src="/icons/favorites.png" alt="favorites" className="h-6" />
                    <p className="font-l translate-y-1">Favorites</p>
                </div>
                <div className="flex flex-col justify-center items-center" onClick={() => setActiveLoc(3)}>
                    <img src="/icons/apps.png" alt="applications" className="h-8" />
                    <p className="font-l">Applications</p>
                </div>
            </div>
            <hr />
            <div className="bg-white pt-4 h-100">
                <div className="grid grid-cols-3 gap-5">
                    {locations[activeLoc].apps.map(({ id, name, icon, openable, link }) => (
                        <div key={id} className="flex flex-col justify-center items-center">
                            <button type="button" className="dock-icon" aria-label={name} data-tooltip-id="dock-tooltip" data-tooltip-content={name} data-toolship-delay-show={0} onClick={() => toggle({ id, openable, link })}>
                                <img src={`/icons/${icon}`} alt={name} loading="lazy" className={'h-10 hover:cursor-pointer'} />
                            </button>
                            <p className="font-l">{name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </>
  )
}

const PortfolioWindow = WindowWrapper(Portfolio, 'finder');

export default PortfolioWindow;