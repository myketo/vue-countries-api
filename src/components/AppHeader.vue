<template>
	<header id="app-header">
		<router-link :to="{ name: 'Home' }">
			<h1>Where in the world?</h1>
		</router-link>

		<div class="toggle-theme" @click="$emit('toggleTheme')">
			<img src="../assets/moon-regular.svg">
			<span>{{ themeText }} Mode</span>
		</div>
	</header>
</template>

<script>
export default {
	name: 'AppHeader',

	props: {
		theme: String,
	}, 

	computed: {
		themeText() {
			return this.theme === 'light' ? 'Dark' : 'Light'
		}
	}
}
</script>

<style scoped>
	#app-header {
		display: flex;
		justify-content: space-between;
		padding: 25px 80px;
		box-shadow: var(--box-shadow);
		background: var(--white);
	}

	#app-header a {
		color: var(--lm-text);
		text-decoration: none;
	}

	#app-header a h1 {
		font-weight: 800;
		font-size: 20px;
	}

	#app-header .toggle-theme {
		font-weight: 600;
		display: flex;
		align-items: center;
		gap: 8px;
		cursor: pointer;
	}

	#app-header .toggle-theme img {
		height: var(--normal-font);
		transform: rotate(-15deg);
		margin-top: -1px;
	}

	.app-container.dark #app-header {
		background: var(--dark-blue);
	}

	.app-container.dark #app-header a {
		color: var(--white);
	}

	.app-container.dark #app-header .toggle-theme img {
		filter: invert(1);
	}

	@media (max-width: 767px) {
		#app-header {
			padding: 35px 17px;
		}

		#app-header a h1 {
			font-size: 15px;
		}
	}
</style>