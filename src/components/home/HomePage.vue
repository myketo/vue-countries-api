<template>
	<div id="home-page">
		<nav>
			<search-input></search-input>
			<filter-select></filter-select>
		</nav>
		<div class="countries">
			<country-item 
				v-for="country in countries" 
				:key="country.name.common"
				:country="country"></country-item>
		</div>
	</div>
</template>

<script>
import SearchInput from './SearchInput.vue'
import FilterSelect from './FilterSelect.vue'
import CountryItem from './CountryItem.vue'

export default {
	name: 'HomePage',

	components: {
		SearchInput,
		FilterSelect,
		CountryItem,
	},

	data() {
		return {
			countries: [],
		}
	},

	mounted() {
		fetch(this.$restCountriesUrl + '/all')
			.then(res => res.json())
			.then(data => this.countries = data)
			.catch(err => console.log(err.message))
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

	#home-page .countries {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-gap: 80px;
		grid-auto-rows: minmax(50px, auto);
		margin-top: 45px;
	}
</style>