const navBarLinks = [
                { id: 1, name: "Projects" },
                { id: 2, name: "About" },
             ];
const rightNow = new Intl.DateTimeFormat('en-US', { weekday: 'short', hour: 'numeric', minute: '2-digit', hour12: true }).format(new Date());
const dockApps = [
    { id: "finder", name: "Portfolio", icon: "finder.png", openable: true },
    { id: "mail", name: "About", icon: "mail.png", openable: true },
    { id: "explorer", name: "Projects", icon: "explorer.png", openable: true },
    { id: "preferences", name: "Settings", icon: "systempreferences.png", openable: true },
    { id: "welcome", name: "Welcome", icon: "welcome.png", openable: true },
    { id: "trash", name: "Trash", icon: "trash.png", openable: false },
]
const INIT_Z = 1000;
const WINDOW_CONFIG = {
    finder: { open: false, zIndex: INIT_Z, data: null}, 
    welcome: { open: false, zIndex: INIT_Z, data: null},
    mail: { open: false, zIndex: INIT_Z, data: null},
    explorer: { open: false, zIndex: INIT_Z, data: null},
    preferences: { open: false, zIndex: INIT_Z, data: null},
}
export { navBarLinks, rightNow, dockApps, INIT_Z, WINDOW_CONFIG };