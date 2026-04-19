import React, { useEffect } from 'react'
import WindowWrapper from '@hoc/WindowWrapper';
import WindowControls from '@components/WindowControls';
import { useState } from 'react';
import { useSettingsStore } from '@store/setting';

const Settings = () => {
    const timeZones = Intl.supportedValuesOf("timeZone");

    const { is12h, timeZone, anim, direction, duration, setIs12h, setTimeZone, setAnim, setDirection, setDuration } = useSettingsStore();

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
                <select name="anim" id="anim" className="font-l" value={anim} onChange={(e) => setAnim(e.target.value)}>
                    <option value="power1">Power1</option>
                    <option value="power2">Power2</option>
                    <option value="power3">Power3</option>
                    <option value="power4">Power4</option>
                    <option value="sine">Sine</option>
                    <option value="expo">Expo</option>
                    <option value="circ">Circular</option>
                    <option value="back">Back</option>
                    <option value="bounce">Bounce</option>
                    <option value="none">Linear</option>
                </select>
                <select name="direction" id="direction" value={direction} onChange={(e) => setDirection(e.target.value)}>
                    <option value="in">In</option>
                    <option value="out">Out</option>
                    <option value="inOut">Both</option>
                </select>
                <input type="range" name="duration" id="duration" min="0.1" max="1.0" step="0.1" value={duration} onInput={(e) => document.getElementById("output").textContent = e.target.value} onChange={(e) => setDuration(e.target.value)}/>
                <p id="output" className="font-l">{duration}</p>
            </div>
        </div>
    </>
  )
}

const SettingsWindow = WindowWrapper(Settings, 'preferences');

export default SettingsWindow;