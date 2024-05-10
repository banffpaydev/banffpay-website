import defaultTheme from "tailwindcss/defaultTheme"

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Onest Variable", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                "brand-primary": {
                    50: "#FAFDFF",
                    100: "#E6F5FF",
                    200: "#CCEAFF",
                    300: "#B3E0FF",
                    400: "#99D5FF",
                    500: "#80CBFF",
                    600: "#67C1FF",
                    700: "#4DB6FF",
                    800: "#34ACFF",
                    900: "#0197FF",
                    950: "#0097FF",
                },
            },
        },
        screens: {
            xs: "475px",
            ...defaultTheme.screens,
        },
        backgroundSize: {
            auto: "auto",
            cover: "cover",
            contain: "contain",
            "50%": "50%",
            "75%": "75%",
            "100%": "100%",
            "150%": "150%",
            "200%": "200%",
        },
    },
    plugins: [],
}
