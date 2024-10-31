<script setup>
	const title = 'Dimm Kyselov - Software Developer and UI/UX Designer - Portfolio'
	const description = 'Hey, I\'m Dimm! Software Developer and UI/UX Designer. I focus on future-oriented methodologies such as human-centricity, and lean development.'

	useSeoMeta({
		title: title,
		ogTitle: title,
		twitterTitle: title,
		description: description,
		ogDescription: description,
		twitterDescription: description,
		ogLocale: 'en_US',
		twitterCard: 'summary',
		ogImage: '[og:image]',
  	twitterImage: '[twitter:image]'

	})
	useHead({
		htmlAttrs: {
			lang: 'en',
		},
		link: [
			{
				rel: 'icon',
				type: 'image/x-icon',
				href: '/favicon.ico',
			},
		],
	})
</script>

<template>
	<SectionHeader />
	<main>
		<NuxtPage />
	</main>
	<SectionFooter />
</template>

<style>
.page-enter-active,
.page-leave-active {
	transition: all 0.4s;
	transition-timing-function: cubic-bezier(
		0.25,
		0.46,
		0.45,
		0.94
	);
}
.page-enter-from {
	opacity: 0;
	transform: translateY(-100px);
}
.page-leave-to {
	opacity: 0;
	transform: translateY(100px);
}
main {
	min-height: calc(round(100vh, var(--tile-size)));
}
</style>
