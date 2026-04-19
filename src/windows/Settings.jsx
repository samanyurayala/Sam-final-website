import React, { useEffect } from 'react'
import WindowWrapper from '@hoc/WindowWrapper';
import WindowControls from '@components/WindowControls';
import { useState } from 'react';
import { useTimeStore } from '@store/time';

const Settings = () => {
    const timeZones = Intl.supportedValuesOf("timeZone");

    const { is12h, timeZone, setIs12h, setTimeZone } = useTimeStore();

    const [wallpaper, setWallpaperState] = useState(localStorage.getItem('wallpaper') || 'wallpaper');

    const changeWallpaper = (e) => {
        const value = e.target.value;
        setWallpaperState(value);
        document.documentElement.style.setProperty('--wallpaper', `url("/icons/${value}.avif")`);
        localStorage.setItem('wallpaper', value);
    }

    return (
    <>
        <div className="window-header">
            <WindowControls target="preferences" />
            <h2>Settings</h2>
        </div>
        <div className="content h-50 flex gap-10 pl-10">
            <div className="flex flex-col items-center gap-0.5 mt-5">
                <img src="/icons/screensaver.png" alt="wallpaper" className="h-10" />
                <p className="font-l translate-y-1">Wallpaper</p>
                <select name="wallpapers" id="wallpapers" className="font-l" value={wallpaper} onChange={changeWallpaper}>
                    <option value="wallpaper">Classic</option>
                    <option value="spacewallpaper">Space</option>
                    <option value="fishwallpaper">Clownfish</option>
                    <option value="abstractwallpaper">Abstract</option>
                </select>
            </div>
            <div className="flex flex-col items-center gap-0.5 mt-5">
                <img src="/icons/clock.png" alt="clock" className="h-10.25" />
                <p className="font-l translate-y-1">Time</p>
                <select name="time_formats" id="time_formats" className="font-l" value={is12h} onChange={(e) => setIs12h(e.target.value)}>
                    <option value="12h">12-hour</option>
                    <option value="24h">24-hour</option>
                </select>
                <select name="timezones" id="timezones" className="font-l" value={timeZone} onChange={(e) => setTimeZone(e.target.value)}>
                    {timeZones.map((tz) => (
                        <option value={tz} key={tz}>{tz}</option>
                    ))}
                </select>
            </div>
            <div className="flex flex-col items-center gap-0.5 mt-5">
                <img src="/icons/animations.png" alt="animations" className="h-10" />
                <p className="font-l translate-y-1">Animations</p>
            </div>
        </div>
    </>
  )
}

const SettingsWindow = WindowWrapper(Settings, 'preferences');

export default SettingsWindow;