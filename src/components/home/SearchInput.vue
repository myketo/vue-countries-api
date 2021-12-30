<template>
	<label for="search-input" class="search-input-container">
		<img src="../../assets/search-solid.svg" class="search-icon">

		<input 
			type="text" 
			id="search-input"
			placeholder="Search for a country..."
		>
	</label>
</template>

<script>
export default {
	name: 'SearchInput',
}
</script>

<style scoped>
	.search-input-container {
		background-color: var(--white);
		padding: 10px 35px;
		display: flex;
		align-items: center;
		width: 33.333%;
		border-radius: 6px;
		box-shadow: var(--box-shadow);
	}

	.search-input-container .search-icon {
		height: var(--bigger-font);
	}

	.search-input-container #search-input {
		border: none;
		background-color: var(--white);
		padding: 10px 20px;
		font-size: var(--normal-font);
		width: 100%;
	}

	.search-input-container #search-input::placeholder {
		color: var(--dark-grey);
	}

	.search-input-container #search-input:focus {
		outline-width: 0;
	}
</style>