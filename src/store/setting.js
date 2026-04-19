import { create } from 'zustand';

const savedIs12h = localStorage.getItem('is12h');
const savedTimeZone = localStorage.getItem('timeZone');
const savedAnim = localStorage.getItem('anim');
const savedDirection = localStorage.getItem('direction');
const savedDuration = localStorage.getItem('duration');

export const useSettingsStore = create((set) => ({
    is12h: savedIs12h || "12h", 
    timeZone: savedTimeZone || Intl.DateTimeFormat().resolvedOptions().timeZone, 
    anim: savedAnim || "power3", 
    direction: savedDirection || "out", 
    duration: savedDuration || "0.3", 
    setIs12h: (val) => {
        localStorage.setItem('is12h', val);
        set({ is12h: val });
    }, 
    setTimeZone: (val) => {
        localStorage.setItem('timeZone', val);
        set({ timeZone: val });
    }, 
    setAnim: (val) => {
        localStorage.setItem('anim', val);
        set({ anim: val });
    }, 
    setDirection: (val) => {
        localStorage.setItem('direction', val);
        set({ direction: val });
    }, 
    setDuration: (val) => {
        localStorage.setItem('duration', val);
        set({ duration: val });
    } 
}));
