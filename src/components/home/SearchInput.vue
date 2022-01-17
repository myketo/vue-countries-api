<template>
	<label for="search-input" class="search-input-container">
		<img src="../../assets/search-solid.svg" class="search-icon">

		<input 
			type="text" 
			id="search-input"
			placeholder="Search for a country..."
			:value="modelValue"
			@input="$emit('update:modelValue', $event.target.value)"
		>
	</label>
</template>

<script>
export default {
	name: 'SearchInput',

	props: {
		modelValue: String,
	},

	emits: [
		'update:modelValue',
	],
}
</script>

<style scoped>
	.search-input-container {
		background: var(--white);
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
		background: var(--white);
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

	.app-container.dark .search-input-container {
		background: var(--dark-blue);
	}

	.app-container.dark .search-input-container #search-input {
		background: var(--dark-blue);
		color: var(--white);
	}

	.app-container.dark .search-input-container #search-input::placeholder {
		color: var(--white);
	}

	.app-container.dark .search-input-container .search-icon {
		filter: brightness(2);
	}

	@media (max-width: 767px) {
		.search-input-container {
			width: 100%;
		}

		.search-input-container #search-input {
			font-size: 13px;
		}
	}
</style>