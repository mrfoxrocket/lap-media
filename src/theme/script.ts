export type Theme = "light" | "dark";

declare global {
    interface Window {
        astroThemeToggle?: {
            setTheme?: (theme: "dark" | "light") => void;
            getTheme?: () => "dark" | "light";
        };
    }
}

function getTheme(): "light" | "dark" {
    if (typeof window === "undefined") {
        return "light";
    }
    return window.astroThemeToggle?.getTheme?.() || "light";
}

function setTheme(theme: "light" | "dark") {
    if (typeof window === "undefined") {
        return;
    }
    window.astroThemeToggle?.setTheme?.(theme);
}

function toggleTheme() {
    const theme = getTheme();
    setTheme(theme === "light" ? "dark" : "light");
}

async function startCircleAnimation(callback: () => void, x: number, y: number) {
    const doc = document as unknown as {
        startViewTransition?: (updateCallback?: () => unknown) => {
            ready?: Promise<void>;
        };
    };

    function removeTemporaryStyles() {
        const style = document.getElementById("temp-theme-transition-styles");
        if (style) {
            document.head.removeChild(style);
        }
    }

    function injectTemporaryStyles() {
        removeTemporaryStyles();
        const style = document.createElement("style");
        style.id = "temp-theme-transition-styles";
        style.textContent = `
            ::view-transition-old(root),
            ::view-transition-new(root) {
                animation: none;
                mix-blend-mode: normal;
            }
        `;
        document.head.appendChild(style);
    }
    injectTemporaryStyles();

    if (typeof doc.startViewTransition !== "function") {
        callback();
        removeTemporaryStyles();
        return;
    }

    await doc.startViewTransition(() => {
        callback();
    })?.ready;

    const gradientOffset = 0.7;
    const maskSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 8"><defs><radialGradient id="toggle-theme-gradient"><stop offset="${gradientOffset}"/><stop offset="1" stop-opacity="0"/></radialGradient></defs><circle cx="4" cy="4" r="4" fill="url(#toggle-theme-gradient)"/></svg>`;
    const maskUrl = `data:image/svg+xml;base64,${window.btoa(maskSvg)}`;

    const w = window.innerWidth;
    const h = window.innerHeight;

    const maxRadius = Math.ceil(Math.hypot(Math.max(x, w - x), Math.max(y, h - y)) / gradientOffset);

    document.documentElement.animate(
        {
            maskImage: [`url('${maskUrl}')`, `url('${maskUrl}')`],
            maskRepeat: ["no-repeat", "no-repeat"],
            maskPosition: [`${x}px ${y}px`, `${x - maxRadius}px ${y - maxRadius}px`],
            maskSize: ["0", `${2 * maxRadius}px`],
        },
        {
            duration: 500,
            easing: "ease-in",
            pseudoElement: "::view-transition-new(root)",
        }
    );
}

export default function handleToggleClick(event: MouseEvent) {
    void startCircleAnimation(toggleTheme, event.clientX, event.clientY);
}
