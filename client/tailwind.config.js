/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#6366F1",    // indigo
                secondary: "#22D3EE",  // cyan
                dark: "#0F172A",       // near-black
                grayed: "#64748B",     // slate gray
                surface: "#F1F5F9",    // card background
                offwhite: "#F8FAFC",   // background mostly
                line: "#E2E8F0"        // border/divider
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
