/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './App.{js,jsx,ts,tsx}',
        './src/**/*.{js,jsx,ts,tsx}'
    ],
    presets: [require('nativewind/preset')],
    theme: {
        extend: {
            colors: {
                preto: "#222222",
                branco: "#FFF9FA",
                cinza: "#bcbcbc",
                rosa: "#FD1843",
                preto2: "#363333"
            },
        },
    },
    plugins: []
};
