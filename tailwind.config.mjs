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
                    100: "#F0F9FF",
                    200: "#E6F5FF",
                    300: "#CCEAFF",
                    400: "#B3E0FF",
                    500: "#99D5FF",
                    600: "#80CBFF",
                    700: "#67C1FF",
                    800: "#4DB6FF",
                    900: "#34ACFF",
                    950: "#1AA1FF",
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
            "100%": "100%",
            "150%": "150%",
            "200%": "200%",
        },
    },
    plugins: [],
}
