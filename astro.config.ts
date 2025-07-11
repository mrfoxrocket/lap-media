// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";

import react from "@astrojs/react";

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
    vite: {
        plugins: [tailwindcss()],
    },
    image: {
        domains: ["astro.build, unsplash.com"],
        remotePatterns: [{ protocol: "https" }],
    },

    integrations: [
        icon({
            iconDir: "src/assets",
            include: {
                tabler: ["*"],
                lucide: ["*"],
            },
        }),
        react(),
        partytown(),
    ],
});
