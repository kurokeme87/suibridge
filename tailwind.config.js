
module.exports = {
	darkMode: ["class"],
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
		"./public/index.html",
	],
	theme: {
		extend: {
			fontFamily: {
				everett: ['Everett', 'sans-serif'],
				inter: ['Inter', 'sans-serif'],
				mono: ['Everett Mono', 'monospace']
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			colors: {}
		}
	},
	plugins: [],
}