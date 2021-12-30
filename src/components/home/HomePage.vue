<template>
	<div id="home-page">
		<nav>
			<search-input></search-input>
		</nav>
	</div>
</template>

<script>
import SearchInput from './SearchInput.vue'

export default {
	name: 'HomePage',

	components: {
		SearchInput,
	}
}
</script>

<style>
	#home-page {
		padding: 45px 60px;
	}
	
	#home-page nav {
		display: flex;
		justify-content: space-between;
	}
</style>