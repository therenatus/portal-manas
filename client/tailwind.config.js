/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');

module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		fontSize: {
			xs: '0.6rem',
			sm: '0.8rem',
			tiny: '1.rem',
			base: '1.1rem',
			lg: '1.2rem',
			xl: '1.3rem',
			'2xl': '1.6rem',
			'3xl': '2rem',
			'4xl': '2.4rem',
			'5xl': '3.1rem',
			'6xl': '4rem',
			'7xl': '5.2rem'
		},
		extend: {
			colors: {
				primary: '#5F3DF7'
			},
			transitionTimingFunction: {
				DEFAULT: 'ease-in-out',
			},
			transitionDuration: {
				DEFAULT: '350ms'
			}
		},
	},
	plugins: [
		plugin(({
			addUtilities,
			addComponents
		}) => {
			addComponents({
					'.shadow-icon': {
						display: 'flex',
						padding: '0.4rem',
						alignItems: 'center',
						justifyContent: 'center',
						fontSize: '2rem',
						transition: 'box-shadow .4s ease-in-out',
						boxShadow: '0 4px 10px rgba(45, 8, 125, 0.2)',
						color: '#353538',
						borderRadius: '50%',
						backgroundColor: '#fff',
						'&:hover': {
							boxShadow: '0 5px 16px rgba(45, 8, 125, 0.3)'
						}
					}
				}),
				addUtilities({
					'.flex-center-between': {
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between'
					}
				})
		})
	],
}