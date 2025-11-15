const hamburgerBtn = document.getElementById("hamburger-btn");
const mobileMenu = document.getElementById("mobile-menu");
const spans = hamburgerBtn.querySelectorAll("span");
const html = document.documentElement;
const themeButtons = document.querySelectorAll(".theme-toggle");

// === HAMBURGER MENU ===
hamburgerBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("opacity-0");
    mobileMenu.classList.toggle("opacity-100");
    mobileMenu.classList.toggle("translate-x-full");
    mobileMenu.classList.toggle("translate-x-0");

    spans[0].classList.toggle("rotate-45");
    spans[0].classList.toggle("translate-y-[12px]");
    spans[1].classList.toggle("opacity-0");
    spans[2].classList.toggle("-rotate-45");
    spans[2].classList.toggle("-translate-y-[6px]");

    hamburgerBtn.classList.toggle("translate-x-9");
    hamburgerBtn.classList.toggle("-translate-y-8");
});

// === CLOSE MENU WHEN CLICKING OUTSIDE ===
document.addEventListener("click", (e) => {
    const isClickInsideMenu = mobileMenu.contains(e.target);
    const isClickOnHamburger = hamburgerBtn.contains(e.target);

    // Only close if menu is open and click is outside
    if (!isClickInsideMenu && !isClickOnHamburger && !mobileMenu.classList.contains("translate-x-full")) {
        mobileMenu.classList.add("opacity-0", "translate-x-full");
        mobileMenu.classList.remove("opacity-100", "translate-x-0");

        // Reset hamburger icon
        spans[0].classList.remove("rotate-45", "translate-y-[12px]");
        spans[1].classList.remove("opacity-0");
        spans[2].classList.remove("-rotate-45", "-translate-y-[6px]");
        hamburgerBtn.classList.remove("translate-x-9", "-translate-y-8");
    }
});


// === DARK MODE TOGGLE ===
// Load saved theme preference
if (localStorage.theme === "dark") {
    html.classList.add("dark");
    updateThemeIcons("dark");
} else {
    html.classList.remove("dark");
    updateThemeIcons("light");
}

// Add click handler for 🌙/☀️ buttons
themeButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        html.classList.toggle("dark");
        const mode = html.classList.contains("dark") ? "dark" : "light";
        localStorage.theme = mode;
        updateThemeIcons(mode);
    });
});

// Change icons dynamically
function updateThemeIcons(mode) {
    const icon = mode === "dark" ? "☀️" : "🌙";
    themeButtons.forEach((btn) => (btn.textContent = icon));
}

// === AOS ANIMATIONS INIT ===
if (typeof AOS !== "undefined") {
    AOS.init({
        duration: 800,
        once: true,
        offset: 150,
    });
}


