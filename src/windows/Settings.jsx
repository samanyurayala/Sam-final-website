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
        <div className="content">
            <div className="flex items-center gap-6">
                <div className="flex flex-col justify-center items-center">
                    <img src="/icons/systempreferences.png" alt="settings" className="h-12"/>
                    <p className="font-l">All</p>
                </div>
                <div className="border-l fill-black h-18"></div>
                <div className="flex flex-col justify-center items-center">
                    <img src="/icons/screensaver.png" alt="wallpaper" className="h-10" />
                    <p className="font-l translate-y-1">Wallpaper</p>
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
            <select name="wallpapers" id="wallpapers" className="font-l" value={wallpaper} onChange={changeWallpaper}>
                <option value="wallpaper">Classic</option>
                <option value="spacewallpaper">Space</option>
                <option value="fishwallpaper">Clownfish</option>
                <option value="abstractwallpaper">Abstract</option>
            </select>
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
    </>
  )
}

const SettingsWindow = WindowWrapper(Settings, 'preferences');

export default SettingsWindow;