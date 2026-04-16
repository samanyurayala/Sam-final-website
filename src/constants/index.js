const navBarLinks = [
                { id: 1, name: "Projects" },
                { id: 2, name: "About" },
             ];
const rightNow = new Intl.DateTimeFormat('en-US', { weekday: 'short', hour: 'numeric', minute: '2-digit', hour12: true }).format(new Date());
const dockApps = [
    { id: "finder", name: "Portfolio", icon: "finder.png", openable: true },
    { id: "mail", name: "Contact", icon: "mail.png", openable: true },
    { id: "explorer", name: "Projects", icon: "explorer.png", openable: true },
    { id: "preferences", name: "Settings", icon: "systempreferences.png", openable: true },
    { id: "about", name: "About", icon: "about.png", openable: true },
    { id: "trash", name: "Trash", icon: "trash.png", openable: false },
]
export { navBarLinks, rightNow, dockApps };