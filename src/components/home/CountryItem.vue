<template>
	<div class="country-card">
		<img :src="country.flags.png" class="country-flag">
		<div class="country-details">
			<h2 class="country-name">{{ country.name.common }}</h2>
			<p><b>Population: </b>{{ country.population.toLocaleString('en-US') }}</p>
			<p><b>Region: </b>{{ country.region }}</p>
			<p><b>Capital: </b>
				<template v-for="(capital, index) in country.capital">
					{{ capital }}{{ addComma(country.capital, index) }}
				</template>

				<template v-if="!country.capital">None</template>
			</p>
		</div>
	</div>
</template>

<script>
export default {
	name: 'CountryItem',
	props: {
		country: Object,
	}, 
	methods: {
		addComma(capitals, index) {
			return capitals.length > 1 && (index + 1) != capitals.length ? ', ' : ''
		}
	}
}
</script>

<style>
	.country-card {
		box-shadow: var(--box-shadow);
		border-radius: 6px;
		cursor: pointer;
		transition: transform 0.25s;
	}

	.country-card:hover {
		transform: scale(1.075);
	}

	.country-card .country-flag {
		border-radius: 6px 6px 0 0;
		width: 100%;
		height: 165px;
	}

	.country-card .country-details {
		padding: 25px 22px 35px 22px;
	}

	.country-card .country-details .country-name {
		font-weight: 800;
		font-size: 16px;
		margin-bottom: 20px;
	}

	.country-card .country-details p {
		margin: 10px 0;
	}

	.country-card .country-details p b {
		font-weight: 600;
	}
</style>