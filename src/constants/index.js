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
    welcome: { open: true, zIndex: INIT_Z, data: null},
    mail: { open: false, zIndex: INIT_Z, data: null},
    explorer: { open: false, zIndex: INIT_Z, data: null},
    preferences: { open: false, zIndex: INIT_Z, data: null},
}
const EXPLORER_PROJECTS = [
    { num: 1, id: "convenientminecraft", name: "Convenient Minecraft", description: "A Minecraft java mod that adds convenient features.", url: "https://modrinth.com/mod/convenient-minecraft" }, 
    { num: 2, id: "freshcheck", name: "FreshCheck", description: "A compact solution for monitoring food freshness.", url: "https://github.com/samanyurayala/FreshCheck" }, 
    { num: 3, id: "asciiimagegenerator", name: "Ascii Image Generator", description: "Made with C++ and ported to the web using WebAssembly.", url: "https://samanyurayala.github.io/ASCII-Image-Generator/" }, 
    { num: 4, id: "banefulduality", name: "Baneful Duality", description: "Deliver the cure to the zombie virus.", url: "https://sidsenthil-exe.itch.io/baneful-duality" }, 
    { num: 5, id: "forestsurvivorpro", name: "Forest Survivor Pro", description: "Complete all the tasks without getting hunted down.", url: "https://samcompany.itch.io/forestsurvivorpro" }, 
    { num: 6, id: "signupwizard", name: "Easy Signup", description: "An easy, intuitive signup wizard.", url: "https://samanyurayala.github.io/Signup-Wizard/" }
]
export { navBarLinks, rightNow, dockApps, INIT_Z, WINDOW_CONFIG, EXPLORER_PROJECTS };