/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./components/**/*.{js,vue,ts}",
		"./layouts/**/*.vue",
		"./pages/**/*.vue",
		"./plugins/**/*.{js,ts}",
		"./nuxt.config.{js,ts}",
		"./app.vue",
	],
	theme: {
		fontFamily: {
			sans: ['Basic-Sans', 'sans-serif'],
			serif: ['Aesthet-Nova', 'serif']
		},
		extend: {
			colors: {
			'primary': '#0242D1',
			'primary-100': '#A2CFF4',
			'primary-200': '#4ba0eb',
			'primary-300': '#0833b4',
			'primary-400': '#0063d6',
			'primary-500': '#16205B',
			'secondary': '#f43807',
			'cotton-gray': '#E7EBF2',
			},
			screens: {
			'xs': '590px'
			},
			spacing: {
			'unset': 'unset'
			},
			backgroundImage: {
			'heads': "url('@/assets/img/ilustrations/heads.png')",
			'footer-texture': "url('/img/footer-texture.png')",
			},
			backgroundPosition: {
			'lp': '0px -170px'
			}
		}
	},
	plugins: [],
}
