<script setup lang="ts">

</script>

<template>
	<footer class=" max-w-[74rem] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-10 lg:py-12 lg:px-4 text-center sm:text-start p-10 font-serif font-[500] mt-12">
		<img src="@/assets/img/logos/new_logo_blue.png" alt="Logo footer" class="justify-self-center sm:justify-self-start sm:self-center w-10/12 lg:w-full">
		<div class="grid">
			<span>Rua Jorge Pedro Bedoglim, 1305 - Novos Estados</span>
			<span>Campo Grande (MS) - 79034-240</span>
		</div>
		<div class="grid">
			<span>contato@ventureth.com.br</span>
			<span>+55 (67) 98137-8780</span>
		</div>
		<div class="flex gap-3 items-start justify-center sm:justify-start">
			<span>Siga @ventureth</span>
			<client-only>
				<nuxt-link to="https://www.linkedin.com/company/venture-th" target="_blank">
					<font-awesome-icon icon="fab fa-linkedin" size="xl" color="#0242D1" />
				</nuxt-link>
				<nuxt-link to="https://www.instagram.com/_ventureth/" target="_blank">
					<font-awesome-icon icon="fab fa-instagram" size="xl" color="#0242D1" />
				</nuxt-link>
			</client-only>
		</div>
	</footer>
</template>
