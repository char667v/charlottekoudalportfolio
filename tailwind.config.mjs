import { CssSyntaxError } from 'postcss';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			primary:'#000000', /* sort */
			secondary: '#6E744C',/* grøn */
			tertiary: '#FBDEB7', /* gul agtig */
			accent: '#FFDA03',/* neon gul */
			grey: { 700: '#4A5568' },
			white: '#fafafa',
		},
		extend: {
			fontFamily: {
				/* poppins: ['Poppins', 'sans-serif'], */
				serif: ['Lora', 'serif'],
			},
			spacing: {
				'58': '230px',
				'100': '25rem',
				'128': '39rem',
				'130': '44rem',
			},
			keyframes: {
				float: {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' },
				},
			},
			animation: {
				float: 'float 3s ease-in-out infinite',
			},
		},
	},
	variants: {},
	plugins: [],
};
