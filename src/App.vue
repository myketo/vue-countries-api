<template>
	<div class="app-container" :class="theme" v-if="this.countries.length">
		<app-header @toggleTheme="toggleTheme" :theme="theme"></app-header>
		
		<router-view :countries="countries"/>
	</div>

	<p v-else>Loading...</p>
</template>

<script>
import AppHeader from './components/AppHeader.vue'

export default {
	name: 'App',
	
	components: {
		AppHeader,
	},

	data() {
		return {
			countries: [],
			theme: 'light',
		}
	},

	mounted() {
		fetch(this.$restCountriesUrl + '/all')
			.then(res => res.json())
			.then(data => this.countries = data)
			.catch(err => console.log(err.message))
	},

	methods: {
		toggleTheme() {
			this.theme = this.theme === 'light' ? 'dark' : 'light'
		}
	},
}
</script>

<style>
:root {
	font-family: 'Nunito Sans', sans-serif;

	--normal-font: 14px;
	--bigger-font: 16px;

	--lm-text: hsl(200, 15%, 8%);
	--white: hsl(0, 0%, 100%);
	--dark-grey: hsl(0, 0%, 52%);

	--dark-blue: hsl(209, 23%, 22%);
	--very-dark-blue: hsl(207, 26%, 17%);

	--box-shadow: 0px 0px 15px 2px rgb(66 68 90 / 10%);
}

*, * > * {
	box-sizing: border-box;
}

.app-container {
	color: var(--lm-text);
	background: hsl(0, 0%, 98%);
	min-height: 100vh;
	font-size: var(--normal-font);
	font-weight: 300;
}

b {
	font-weight: 600;
}

.app-container.dark {
	background: var(--very-dark-blue);
	color: var(--white);
}
</style>