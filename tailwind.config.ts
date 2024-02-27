import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Roboto', 'sans-serif'],
			},
			colors: {
				darkSlateGrey: 'hsl(234, 29%, 20%)',
				charcoalGrey: ' hsl(235, 18%, 26%)',
				grey: 'hsl(231, 7%, 60%)',
				tomato: 'hsl(4, 100%, 67%)',
			},
		},
	},
	plugins: [],
};
export default config;
