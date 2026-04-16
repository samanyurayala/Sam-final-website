import { WINDOW_CONFIG, INIT_Z } from "@constants";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

const useWindowStore = create(immer((set) => ({
        windows: WINDOW_CONFIG, 
        nextZIndex: INIT_Z + 1,
        openWindow: (windowKey, data = null) => set((state) => {
            const win = state.windows[windowKey];
            if (!win) return;
            win.open = true;
            win.zIndex = state.nextZIndex;
            win.data = data ?? win.data;
            state.nextZIndex++;
        }),
        closeWindow: (windowKey) => set((state) => {
            const win = state.windows[windowKey];
            if (!win) return;
            win.open = false;
            win.zIndex = INIT_Z;
            win.data = null;
        }),
        focusWindow: (windowKey) => set((state) => {
            const win = state.windows[windowKey];
            if (!win) return;
            win.zIndex = state.nextZIndex++;
        }),
    })), 
);

export default useWindowStore;