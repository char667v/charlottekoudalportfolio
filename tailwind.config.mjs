import { CssSyntaxError } from 'postcss';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			primary: '#6E744C',
			secondary: '#FBDEB7',
			accent: '#FFDA03',
			grey: { 700: '#4A5568'},
		  },
		  extend: {
			fontFamily: {
			  poppins: ['Poppins', 'sans-serif'],
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