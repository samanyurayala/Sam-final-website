const navBarLinks = [
                { id: 1, name: "Projects" },
                { id: 2, name: "About" },
             ];
const rightNow = new Intl.DateTimeFormat('en-US', { weekday: 'short', hour: 'numeric', minute: '2-digit', hour12: true }).format(new Date());
export { navBarLinks, rightNow };