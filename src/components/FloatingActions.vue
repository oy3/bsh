<script>
export default {
	name: 'FloatingActions',
	data() {
		return {
			showScrollTop: false
		}
	},
	mounted() {
		this.onScroll()
		window.addEventListener('scroll', this.onScroll, { passive: true })
	},
	beforeUnmount() {
		window.removeEventListener('scroll', this.onScroll)
	},
	methods: {
		onScroll() {
			this.showScrollTop = window.scrollY > 220
		},
		scrollToTop() {
			window.scrollTo({ top: 0, behavior: 'smooth' })
		}
	}
}
</script>

<template>
	<div>
		<div class="floating-actions">
			<button
				v-show="showScrollTop"
				type="button"
				class="scroll-top-action ms-auto mb-3"
				aria-label="Scroll to top"
				@click="scrollToTop"
			>
				<i class="bi bi-chevron-up"></i>
			</button>

			<a href="tel:+2347033449959" class="emergency-action">
				<i class="bi bi-telephone"></i>
				<span>Emergency</span>
			</a>

			<a href="https://wa.me/2347033449959" class="whatsapp-action" target="_blank" rel="noopener">
				<i class="bi bi-whatsapp"></i>
				<span>WhatsApp</span>
			</a>
		</div>

		<nav class="mobile-actions" aria-label="Quick actions">
			<a href="tel:+2347033449959"><i class="bi bi-telephone"></i>Emergency</a>
			<a href="https://wa.me/2347033449959" target="_blank" rel="noopener"><i class="bi bi-whatsapp"></i>WhatsApp</a>
			<router-link to="/book-appointment"><i class="bi bi-calendar-plus"></i>Book</router-link>
		</nav>
	</div>
</template>
