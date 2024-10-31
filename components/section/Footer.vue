<template>
	<footer>
		<div class="w-full py-tile">
			<div class="row h-double md:h-tile">
				<p>
					<span>
						© {{ new Date().getFullYear() }} Dimm Kyselov. All
						human rights reserved.
					</span>
				</p>
				<nuxt-link to="/privacy"> Privacy Policy </nuxt-link>
			</div>
			<div class="row">
				<div class="flex-row">
					<ElementSocial />
				</div>
			</div>
		</div>
	</footer>
</template>

<style scoped>
footer {
	@apply m-0 flex-row justify-between px-tile py-0;
	@apply lg:px-double;
	@apply border-t border-foreground;
}
.row {
	@apply min-h-tile w-full flex-row flex-wrap items-center justify-between;
}

p,
a {
	@apply uppercase;
}

.social {
	@apply w-tile !border-backgroundSecondary text-third hover:!border-foreground;
}

p {
	@apply text-[0.875rem] font-semibold text-foreground opacity-60;
}
</style>
