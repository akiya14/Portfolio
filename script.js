const toggleButton = document.getElementById("theme-toggle");
const wallpaperButton = document.getElementById("wallpaper-toggle");
const body = document.body;

const wallpapers = [
    {
        file: "pastel-gradient.jpg",
        name: "Pastel",
        light: {
            accent: "#198754",
            accent2: "#0f6b43",
            accent3: "#a6d96f",
            ink: "#14221b",
            muted: "#53665b",
            line: "rgba(20, 79, 48, 0.16)",
            surface: "rgba(255, 255, 255, 0.62)",
            surfaceStrong: "#ffffff",
            shadow: "0 24px 70px rgba(13, 72, 43, 0.14)",
            overlay: "linear-gradient(135deg, rgba(246, 251, 247, 0.42), rgba(232, 248, 238, 0.28))"
        },
        dark: {
            accent: "#55c878",
            accent2: "#8ee6a8",
            accent3: "#cde86b",
            ink: "#f4fff7",
            muted: "#c7d8ce",
            line: "rgba(196, 236, 211, 0.22)",
            surface: "rgba(16, 32, 24, 0.62)",
            surfaceStrong: "rgba(23, 43, 33, 0.84)",
            shadow: "0 24px 70px rgba(0, 0, 0, 0.32)",
            overlay: "linear-gradient(135deg, rgba(12, 24, 18, 0.42), rgba(21, 55, 39, 0.32))"
        }
    },
    {
        file: "study-desk.jpg",
        name: "Study",
        light: {
            accent: "#8a6a21",
            accent2: "#6d5418",
            accent3: "#d8ba63",
            ink: "#282214",
            muted: "#685e4a",
            line: "rgba(138, 106, 33, 0.22)",
            surface: "rgba(255, 252, 244, 0.64)",
            surfaceStrong: "rgba(255, 252, 244, 0.94)",
            shadow: "0 24px 70px rgba(99, 72, 22, 0.16)",
            overlay: "linear-gradient(135deg, rgba(255, 252, 244, 0.38), rgba(245, 234, 205, 0.24))"
        },
        dark: {
            accent: "#d8ba63",
            accent2: "#f0d88a",
            accent3: "#f4cc6a",
            ink: "#fff8e6",
            muted: "#dfd1b4",
            line: "rgba(240, 216, 138, 0.24)",
            surface: "rgba(44, 34, 18, 0.64)",
            surfaceStrong: "rgba(54, 41, 22, 0.86)",
            shadow: "0 24px 70px rgba(0, 0, 0, 0.34)",
            overlay: "linear-gradient(135deg, rgba(34, 25, 13, 0.44), rgba(79, 57, 25, 0.3))"
        }
    },
    {
        file: "mint-waves.jpg",
        name: "Blue Waves",
        light: {
            accent: "#1686b5",
            accent2: "#0d638e",
            accent3: "#62c8e8",
            ink: "#102a36",
            muted: "#4c6470",
            line: "rgba(22, 134, 181, 0.22)",
            surface: "rgba(246, 252, 255, 0.62)",
            surfaceStrong: "rgba(250, 254, 255, 0.94)",
            shadow: "0 24px 70px rgba(18, 89, 124, 0.16)",
            overlay: "linear-gradient(135deg, rgba(246, 252, 255, 0.34), rgba(213, 238, 248, 0.2))"
        },
        dark: {
            accent: "#4cc3ef",
            accent2: "#9fe6ff",
            accent3: "#77d9ff",
            ink: "#eefbff",
            muted: "#c2dce6",
            line: "rgba(159, 230, 255, 0.24)",
            surface: "rgba(10, 42, 56, 0.62)",
            surfaceStrong: "rgba(11, 50, 69, 0.86)",
            shadow: "0 24px 70px rgba(0, 0, 0, 0.34)",
            overlay: "linear-gradient(135deg, rgba(8, 31, 43, 0.42), rgba(15, 76, 104, 0.28))"
        }
    },
    {
        file: "lavender-dream.jpg",
        name: "Lavender",
        light: {
            accent: "#7c63c7",
            accent2: "#5e49a0",
            accent3: "#c6b6ff",
            ink: "#221d34",
            muted: "#625b74",
            line: "rgba(124, 99, 199, 0.22)",
            surface: "rgba(251, 249, 255, 0.62)",
            surfaceStrong: "rgba(254, 252, 255, 0.94)",
            shadow: "0 24px 70px rgba(74, 55, 135, 0.16)",
            overlay: "linear-gradient(135deg, rgba(251, 249, 255, 0.36), rgba(229, 222, 255, 0.22))"
        },
        dark: {
            accent: "#b6a4ff",
            accent2: "#d8ceff",
            accent3: "#e0b8ff",
            ink: "#fbf8ff",
            muted: "#d6cfe7",
            line: "rgba(216, 206, 255, 0.24)",
            surface: "rgba(31, 24, 54, 0.64)",
            surfaceStrong: "rgba(42, 31, 74, 0.86)",
            shadow: "0 24px 70px rgba(0, 0, 0, 0.34)",
            overlay: "linear-gradient(135deg, rgba(24, 18, 44, 0.42), rgba(69, 47, 115, 0.28))"
        }
    },
    {
        file: "grid-paper.jpg",
        name: "Grid",
        light: {
            accent: "#35766b",
            accent2: "#245d54",
            accent3: "#8fd3c5",
            ink: "#172724",
            muted: "#576663",
            line: "rgba(53, 118, 107, 0.22)",
            surface: "rgba(255, 255, 252, 0.66)",
            surfaceStrong: "rgba(255, 255, 252, 0.96)",
            shadow: "0 24px 70px rgba(38, 93, 83, 0.14)",
            overlay: "linear-gradient(135deg, rgba(255, 255, 252, 0.3), rgba(235, 247, 244, 0.18))"
        },
        dark: {
            accent: "#78d2c2",
            accent2: "#a8eee2",
            accent3: "#b8f2d8",
            ink: "#f3fffc",
            muted: "#c8dbd7",
            line: "rgba(168, 238, 226, 0.24)",
            surface: "rgba(18, 38, 35, 0.62)",
            surfaceStrong: "rgba(24, 49, 45, 0.86)",
            shadow: "0 24px 70px rgba(0, 0, 0, 0.34)",
            overlay: "linear-gradient(135deg, rgba(15, 31, 29, 0.42), rgba(34, 78, 70, 0.28))"
        }
    },
    {
        file: "sunset-city.jpg",
        name: "Sunset",
        light: {
            accent: "#d46a2c",
            accent2: "#a64d1d",
            accent3: "#f0bd63",
            ink: "#2f2015",
            muted: "#725f50",
            line: "rgba(212, 106, 44, 0.22)",
            surface: "rgba(255, 249, 242, 0.62)",
            surfaceStrong: "rgba(255, 251, 246, 0.94)",
            shadow: "0 24px 70px rgba(125, 64, 26, 0.16)",
            overlay: "linear-gradient(135deg, rgba(255, 249, 242, 0.34), rgba(255, 226, 190, 0.2))"
        },
        dark: {
            accent: "#ff9b5f",
            accent2: "#ffc18e",
            accent3: "#ffd36e",
            ink: "#fff8f0",
            muted: "#e6cdb7",
            line: "rgba(255, 193, 142, 0.24)",
            surface: "rgba(48, 28, 18, 0.62)",
            surfaceStrong: "rgba(64, 34, 21, 0.86)",
            shadow: "0 24px 70px rgba(0, 0, 0, 0.34)",
            overlay: "linear-gradient(135deg, rgba(38, 21, 14, 0.42), rgba(108, 52, 25, 0.28))"
        }
    }
];

const storedTheme = localStorage.getItem("theme");
const storedWallpaper = Number(localStorage.getItem("wallpaperIndex") || 0);
let currentWallpaper = Number.isInteger(storedWallpaper) ? storedWallpaper : 0;

function setWallpaper(index) {
    currentWallpaper = index % wallpapers.length;
    const wallpaper = wallpapers[currentWallpaper];
    const mode = body.classList.contains("dark") ? "dark" : "light";
    const palette = wallpaper[mode];

    body.style.setProperty("--accent", palette.accent);
    body.style.setProperty("--accent-2", palette.accent2);
    body.style.setProperty("--accent-3", palette.accent3);
    body.style.setProperty("--ink", palette.ink);
    body.style.setProperty("--muted", palette.muted);
    body.style.setProperty("--line", palette.line);
    body.style.setProperty("--surface", palette.surface);
    body.style.setProperty("--surface-strong", palette.surfaceStrong);
    body.style.setProperty("--shadow", palette.shadow);
    body.style.backgroundImage = `${palette.overlay}, url("${wallpaper.file}")`;

    body.style.backgroundSize = "cover";
    body.style.backgroundAttachment = "fixed";
    body.style.backgroundPosition = "center";
    localStorage.setItem("wallpaperIndex", String(currentWallpaper));
    wallpaperButton.textContent = wallpaper.name;
}

function setTheme(theme) {
    body.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
    toggleButton.textContent = theme === "dark" ? "Light" : "Dark";
    setWallpaper(currentWallpaper);
}

function pressFeedback(button) {
    button.animate(
        [
            { transform: "scale(1)" },
            { transform: "scale(0.96)" },
            { transform: "scale(1)" }
        ],
        { duration: 170, easing: "ease-out" }
    );
}

function setupScrollReveal() {
    const revealTargets = document.querySelectorAll(
        ".section, .project-card, .certification-card, .timeline li, .achievement-grid article, .pill-list li"
    );

    revealTargets.forEach((element, index) => {
        element.classList.add("reveal");
        element.style.setProperty("--reveal-delay", `${Math.min(index % 6, 5) * 55}ms`);
    });

    if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        revealTargets.forEach((element) => element.classList.add("is-visible"));
        return;
    }

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            rootMargin: "0px 0px -10% 0px",
            threshold: 0.14
        }
    );

    revealTargets.forEach((element) => observer.observe(element));
}

document.querySelectorAll(".brand").forEach((element) => element.remove());

setTheme(storedTheme === "dark" ? "dark" : "light");
setWallpaper(currentWallpaper);
setupScrollReveal();

toggleButton.addEventListener("click", () => {
    const nextTheme = body.classList.contains("dark") ? "light" : "dark";
    setTheme(nextTheme);
    pressFeedback(toggleButton);
});

wallpaperButton.addEventListener("click", () => {
    setWallpaper(currentWallpaper + 1);
    pressFeedback(wallpaperButton);
});
