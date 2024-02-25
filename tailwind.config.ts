import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				mleko: 'gold',
				'mleko-custom': {
					100: 'red',
					200: 'blue',
				},
			},
		},
	},
	plugins: [],
};
export default config;
