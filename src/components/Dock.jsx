import { dockApps } from '@constants';
import React from 'react'
import { useRef } from 'react';
import { Tooltip } from 'react-tooltip';

const Dock = () => {
    const dockRef = useRef(null);

    const toggle = (app) => {};

    return (
    <section id="dock">
        <div ref={dockRef} className="dock-container">
            {dockApps.map(({ id, name, icon, openable }) => (
                <div key={id} className="relative flex justify-center">
                    <button type="button" className="dock-icon" aria-label={name} data-tooltip-id="dock-tooltip" data-tooltip-content={name} data-toolship-delay-show={150} disabled={!openable} onClick={() => toggleApp({ id, openable })}>
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