import React, { useLayoutEffect } from 'react'
import useWindowStore from '@store/window';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Draggable } from 'gsap/Draggable';

const WindowWrapper = (Component, windowKey) => {
    const Wrapped = (props) => {
        const { focusWindow, windows } = useWindowStore();
        const { open, zIndex } = windows[windowKey];
        const ref = useRef(null);
        useGSAP(() => {
            const elem = ref.current;
            if (!elem || !open) return;
            elem.style.display = "block";
            gsap.fromTo(elem, { scale: 0.99, opacity: 0.5, y: 40 }, { scale: 1, opacity: 1, y: 40, duration: 0.3, ease: "power3.out" });
        }, [open]);
        useGSAP(() => {
            const elem = ref.current;
            if (!elem) return;
            const [instance] = Draggable.create(elem, { handle: elem.querySelector(".window-header"), onPress: () => focusWindow(windowKey) }); 
            return () => instance.kill();
        }, []);
        useLayoutEffect(() => {
            const elem = ref.current;
            if (!elem) return;
            elem.style.display = open ? "block" : "none";
        }, [open]);
        return <section id={windowKey} ref={ref} style={{ zIndex }} className="absolute"><Component { ...props } /></section>
    };
    Wrapped.displayName = `WindowWrapper(${Component.displayName || Component.name || 'Component'})`;
    return Wrapped;
}

export default WindowWrapper