
/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                regency: {
                    burgundy: "#702C3B",
                    rose: "#963F50",
                    gold: "#C7A66A",
                    cream: "#FBF6EF",
                    ink: "#38282B",
                },
            },
            fontFamily: {
                heading: ["Playfair Display", "serif"],
                body: ["Inter", "sans-serif"],
            },
        },
    },
    plugins: [],
};
