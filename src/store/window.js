import { WINDOW_CONFIG, INIT_Z } from "@constants";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

const useWindowStore = create(immer((set) => ({
        windows: WINDOW_CONFIG, 
        nextZIndex: INIT_Z + 1,
        focusedWindowKey: null, 
        openWindow: (windowKey, data = null) => set((state) => {
            const win = state.windows[windowKey];
            if (!win) return;
            win.open = true;
            win.zIndex = state.nextZIndex;
            win.data = data ?? win.data;
            state.nextZIndex++;
            state.focusedWindowKey = windowKey;
        }),
        closeWindow: (windowKey) => set((state) => {
            const win = state.windows[windowKey];
            if (!win) return;
            win.open = false;
            win.zIndex = INIT_Z;
            win.data = null;
            if (state.focusedWindowKey === windowKey) state.focusedWindowKey = null;
        }),
        focusWindow: (windowKey) => set((state) => {
            const win = state.windows[windowKey];
            if (!win) return;
            win.zIndex = state.nextZIndex++;
            state.focusedWindowKey = windowKey;
        }),
        openVideoWindow: (file) => set((state) => {
            const windowKey = "quicktimeplayer";
            const win = state.windows[windowKey];
            if (!win) return;
            win.open = true;
            win.zIndex = state.nextZIndex;
            win.data = {...win.data, file};
            state.nextZIndex++;
            state.focusedWindowKey = windowKey;
        })
    })), 
);

export default useWindowStore;