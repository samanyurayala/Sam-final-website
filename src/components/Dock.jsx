import { dockApps } from '@constants';
import React from 'react'
import { useRef } from 'react';
import { Tooltip } from 'react-tooltip';
import useWindowStore from '@store/window';

const Dock = () => {
    const { openWindow, focusWindow, windows } = useWindowStore();

    const toggle = (app) => {
        if (!app.openable) return;
        const window = windows[app.id];
        if (!window) return;
        if (window.open) {
            focusWindow(app.id);
        } else {
            openWindow(app.id);
        }
    };

    return (
    <section id="dock">
        <div className="dock-container">
            {dockApps.map(({ id, name, icon, openable }) => (
                <div key={id} className="relative flex justify-center">
                    <button type="button" className="dock-icon" aria-label={name} data-tooltip-id="dock-tooltip" data-tooltip-content={name} data-toolship-delay-show={0} disabled={!openable} onClick={() => toggle({ id, openable })}>
                        <img src={`/icons/${icon}`} alt={name} loading="lazy" className={openable ? '' : 'opacity-60'} />
                    </button>
                </div>
            ))}
            <Tooltip id="dock-tooltip" place="top" className="tooltip" />
        </div>
    </section>
  )
}

export default Dock