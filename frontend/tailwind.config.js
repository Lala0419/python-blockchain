/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{js,jsx}"],
	theme: {
		extend: {},
		screens: {
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
			"sm-h": { raw: "(min-height: 400px)" }, // Custom height breakpoint
			"md-h": { raw: "(min-height: 600px)" },
			"lg-h": { raw: "(min-height: 800px)" },
			"xl-h": { raw: "(min-height: 1280px)" },
		},
	},
	plugins: [],
};
