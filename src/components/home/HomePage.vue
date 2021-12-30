<template>
	<div id="home-page">
		<nav>
			<search-input></search-input>

			<filter-select></filter-select>
		</nav>
	</div>
</template>

<script>
import SearchInput from './SearchInput.vue'
import FilterSelect from './FilterSelect.vue'

export default {
	name: 'HomePage',

	components: {
		SearchInput,
		FilterSelect,
	}
}
</script>

<style>
	#home-page {
		padding: 45px 65px;
	}

	#home-page nav {
		display: flex;
		justify-content: space-between;
	}
</style>