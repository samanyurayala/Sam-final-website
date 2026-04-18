const navBarLinks = [
                { id: 1, name: "Projects" },
                { id: 2, name: "About" },
             ];
const rightNow = new Intl.DateTimeFormat('en-US', { weekday: 'short', hour: 'numeric', minute: '2-digit', hour12: true }).format(new Date());
const dockApps = [
    { id: "finder", name: "Portfolio", icon: "finder.png", openable: true, link: "" },
    { id: "mail", name: "About", icon: "mail.png", openable: true, link: "" },
    { id: "explorer", name: "Projects", icon: "explorer.png", openable: true, link: "" },
    { id: "preferences", name: "Settings", icon: "systempreferences.png", openable: true, link: "" },
    { id: "welcome", name: "Welcome", icon: "welcome.png", openable: true, link: "" },
    { id: "trash", name: "Trash", icon: "trash.png", openable: false, link: "" },
];
const favoritesApps = [
    { id: "computer", name: "This Computer", icon: "folder.png", openable: false, link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" }
];
const computerApps = [
    { id: "cd", name: "Mac OS X Install CD", icon: "cd.png", openable: false, link: "https://www.youtube.com/@GetWreckt1" }
];
const homeApps = [
    { id: "resume", name: "Resume.txt", icon: "text.png", openable: true, link: "" },
    { id: "awards", name: "Awards.pdf", icon: "pdf.png", openable: false, link: "" }
];
const INIT_Z = 1000;
const WINDOW_CONFIG = {
    finder: { open: false, zIndex: INIT_Z, data: null}, 
    welcome: { open: true, zIndex: INIT_Z, data: null},
    mail: { open: false, zIndex: INIT_Z, data: null},
    explorer: { open: false, zIndex: INIT_Z, data: null},
    preferences: { open: false, zIndex: INIT_Z, data: null},
};
const EXPLORER_PROJECTS = [
    { num: 1, id: "convenientminecraft", name: "Convenient Minecraft", description: "A Minecraft java mod that adds convenient features.", url: "https://modrinth.com/mod/convenient-minecraft" }, 
    { num: 2, id: "freshcheck", name: "FreshCheck", description: "A compact solution for monitoring food freshness.", url: "https://github.com/samanyurayala/FreshCheck" }, 
    { num: 3, id: "asciiimagegenerator", name: "Ascii Image Generator", description: "Made with C++ and ported to the web using WebAssembly.", url: "https://samanyurayala.github.io/ASCII-Image-Generator/" }, 
    { num: 4, id: "banefulduality", name: "Baneful Duality", description: "Deliver the cure to the zombie virus.", url: "https://sidsenthil-exe.itch.io/baneful-duality" }, 
    { num: 5, id: "forestsurvivorpro", name: "Forest Survivor Pro", description: "Complete all the tasks without getting hunted down.", url: "https://samcompany.itch.io/forestsurvivorpro" }, 
    { num: 6, id: "signupwizard", name: "Easy Signup", description: "An easy, intuitive signup wizard.", url: "https://samanyurayala.github.io/Signup-Wizard/" }
];

const locations = [
    { id: 1, apps: computerApps },
    { id: 2, apps: homeApps },
    { id: 3, apps: favoritesApps },
    { id: 4, apps: dockApps }
];
export { navBarLinks, rightNow, dockApps, INIT_Z, WINDOW_CONFIG, EXPLORER_PROJECTS, locations };