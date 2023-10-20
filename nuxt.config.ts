import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
	app: {
		head: {
			title: 'Venture Tech',
			link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' }
			]
		}
	},
	nitro: {
		prerender: {
			routes: ['/']
		}
	},
	css: [
		'~/assets/css/tailwind.css',
		'~/assets/css/font-faces.css',
		'@fortawesome/fontawesome-svg-core/styles.css'
	],
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
	runtimeConfig: {
		mailtrapHost: '',
		mailtrapPort: '',
		mailtrapUser: '',
		mailtrapPass: ''
	},
})
