/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

module.exports = {
	content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./app/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#0070f3",
			},
			fontFamily: {
				serif: ["ui-serif", "Georgia"],
				mono: ["Comic Mono"],
			},
			keyframes: {
				appearOnScroll: {
					"0%": {
						opacity: 0,
						transform: "translateX(-10px)",
					},
					"20%": {
						display: "block",
						opacity: 0,
						transform: "translateX(-10px)",
					},
					"100%": {
						opacity: 1,
						transform: "translateY(0)",
					},
				},
			},
			animation: {
				appearOnScroll: "appearOnScroll 1.6s ease",
			},
		},
	},
	plugins: [
		plugin(({ matchUtilities, theme }) => {
			matchUtilities(
				{
					"animation-delay": (value) => {
						return {
							"animation-delay": value,
						};
					},
				},
				{
					values: theme("transitionDelay"),
				}
			);
		}),
	],
};
