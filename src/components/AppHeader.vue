<template>
	<header id="app-header">
		<h1>Where in the world?</h1>

		<div class="toggle-theme">
			<img src="../assets/moon-regular.svg">
			<span>Dark Mode</span>
		</div>
	</header>
</template>

<script>
export default {
	name: 'AppHeader',
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

	#app-header h1 {
		font-weight: 800;
		font-size: 20px;
	}

	#app-header .toggle-theme {
		font-weight: 600;
		display: flex;
		align-items: center;
		gap: 8px;
	}

	#app-header .toggle-theme img {
		height: var(--normal-font);
		transform: rotate(-15deg);
		margin-top: -1px;
	}
</style>