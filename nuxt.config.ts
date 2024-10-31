// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-04-03',
	devtools: { enabled: true },
	modules: [
		'@nuxt/content',
		'@nuxtjs/seo',
		'@nuxt/eslint',
		'@nuxt/fonts',
		'@nuxt/icon',
		'@nuxtjs/tailwindcss',
	],

	app: {
		pageTransition: { name: 'page', mode: 'out-in' },
	},

	components: {
		dirs: [
			{
				path: './components',
				ignore: ['**/*.ts'],
			},
		],
	},

	fonts: {
		families: [
			{
				name: 'Onest',
				provider: 'google',
			},
		],
		experimental: {
			processCSSVariables: true,
		},
	},

	icon: {
		customCollections: [
			{
				prefix: 'base',
				dir: 'assets/base/',
			},
			{
				prefix: 'logo',
				dir: 'assets/logo/',
			},
		],
	},
})
