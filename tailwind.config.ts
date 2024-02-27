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
				sans: ['Rubik', 'sans-serif'],
			},
			colors: {
				blue: 'hsl(246, 80%, 60%)',
				work: 'hsl(15, 100%, 70%)',
				play: 'hsl(195, 74%, 62%)',
				study: 'hsl(348, 100%, 68%)',
				exercise: 'hsl(145, 58%, 55%)',
				social: 'hsl(264, 64%, 52%)',
				selfCare: 'hsl(43, 84%, 65%)',
				darkSlateGrey: 'hsl(234, 29%, 20%)',
				charcoalGrey: 'hsl(235, 18%, 26%)',
				grey: 'hsl(231, 7%, 60%)',
				veryDarkBlue: 'hsl(226, 43%, 10%)',
				darkBlue: 'hsl(235, 46%, 20%)',
				desaturatedBlue: 'hsl(235, 45%, 61%)',
				paleBlue: 'hsl(236, 100%, 87%)',
			},
		},
	},
	plugins: [],
};
export default config;
