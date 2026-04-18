import { create } from 'zustand';

const savedIs12h = localStorage.getItem('is12h');
const savedTimeZone = localStorage.getItem('timeZone');

export const useTimeStore = create((set) => ({
    is12h: savedIs12h || "12h", 
    timeZone: savedTimeZone || Intl.DateTimeFormat().resolvedOptions().timeZone, 
    setIs12h: (val) => {
        localStorage.setItem('is12h', val);
        set({ is12h: val });
    }, 
    setTimeZone: (val) => {
        localStorage.setItem('timeZone', val);
        set({ timeZone: val });
    }
}));
