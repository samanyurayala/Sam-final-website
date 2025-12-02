let light_mode = localStorage.getItem("light_mode");
const switch_theme = document.getElementById("theme_switch");

function enableLightMode() {
    document.body.classList.add("light_mode");
    localStorage.setItem("light_mode", "active");
}

function disableLightMode() {
    document.body.classList.remove("light_mode");
    localStorage.setItem("light_mode", null);
}

if (light_mode === "active")
    enableLightMode();

switch_theme.addEventListener("click", () => {
    light_mode = localStorage.getItem("light_mode")
    light_mode !== "active" ? enableLightMode() : disableLightMode();
});