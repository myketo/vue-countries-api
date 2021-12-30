<template>
	<header>
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
	header {
		display: flex;
		justify-content: space-between;
		padding: 25px 65px;
		box-shadow: 0px -35px 66px 10px rgba(66, 68, 90, 0.64);
		background: var(--white);
	}

	header h1 {
		font-weight: 800;
		font-size: var(--bigger-font);
	}

	header .toggle-theme {
		font-weight: 600;
		display: flex;
		gap: 8px;
	}

	header .toggle-theme img {
		height: 14px;
		transform: rotate(-15deg);
		margin-top: -1px;
	}
</style>