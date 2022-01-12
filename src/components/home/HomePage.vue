<template>
	<div id="home-page">
		<nav>
			<search-input v-model="searchValue"></search-input>
			<filter-select :regions="regions" @selectedRegion="setRegionFilter"></filter-select>
		</nav>
		<transition-group name="countries" tag="div" class="countries">
			<country-item 
				v-for="country in filteredCountries" 
				:key="country.name.common"
				:country="country"></country-item>
		</transition-group>

		<transition name="no-countries">
			<p v-show="!filteredCountries.length">No countries found.</p>
		</transition>
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
			searchValue: '',
			regionFilter: '',
		}
	},

	computed: {
		filteredCountries() {
			var filtered = this.countries.filter((country) => {
				return country.name.common.toLowerCase().match(this.searchValue.toLowerCase())
			})

			if (this.regionFilter != '') {
				filtered = filtered.filter((country) => {
					return country.region.toLowerCase().match(this.regionFilter.toLowerCase())
				})
			}

			return filtered
		},

		regions() {
			return [...new Set(this.countries.map(country => country.region))]
		}
	},

	methods: {
		setRegionFilter(region) {
			this.regionFilter = region
		}
	},

	mounted() {
		fetch(this.$restCountriesUrl + '/all')
			.then(res => res.json())
			.then(data => this.countries = data)
			.catch(err => console.log(err.message))
	},
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

	.countries-enter-active,
	.countries-leave-active {
	transition: all .45s ease;
	}

	.countries-enter-from,
	.countries-leave-to {
		opacity: 0;
		transform: translateY(35px);
	}

	.no-countries-enter-active {
		transition: opacity .45s ease;
		transition-delay: 0.45s;
	}

	.no-countries-enter-from,
	.no-countries-leave-to {
		opacity: 0;
	}
</style>