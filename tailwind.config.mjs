/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				'primary-blue': {
					100: '#0072D6',
					200: '#0045B7',
					300: '#380080'
				},
				'primary-purple': {
					100: '#B47CF5',
					200: '#915BD1',
					300: '#6E3CAE'
				},
				// 'background': {
				// 	100: '#f0f0f0',
				// 	200: '#e0e0e0',
				// 	300: '#95989E',
				// 	400: '#3a3a3a;',
				// 	500: '#1f1f1f',
				// 	600: '#13151A',
				// }
				'background': {
					100: '#eeeef8',
					200: '#d1d9dc',
					300: '#95989E',
					400: '#3a3a3a;',
					500: '#1f1f1f',
					600: '#13151A',
				}
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
			  },

		},
	},
	plugins: [],
}
