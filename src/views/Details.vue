<template>
	<div id="details-page">
		<a href="" @click.prevent="$router.go(-1)" class="go-back">
			Back
		</a>
		
		<div class="country-info">
			<div class="flag">
				<img :src="country.flags.svg">
			</div>

			<div class="details">
				<h1>{{ country.name.common }}</h1>

				<div class="details-table">
					<ul>
						<li>
							<b>Native Name: </b> 
							{{ Object.values(country.name.nativeName)[0].common }}
						</li>

						<li>
							<b>Population: </b>
							{{ country.population.toLocaleString('en-US') }}
						</li>

						<li>
							<b>Region: </b>
							{{ country.region }}
						</li>

						<li>
							<b>Sub Region: </b>
							{{ country.subregion }}
							<template v-if="!country.capital">None</template>
						</li>

						<li>
							<b>Capital: </b>
							<template v-for="(capital, index) in country.capital">
								{{ capital }}{{ addComma(country.capital, index) }}
							</template>
							<template v-if="!country.capital">None</template>
						</li>
					</ul>


					<ul>
						<li>
							<b>Top Level Domain: </b>
							{{ country.tld[0] }}
						</li>

						<li>
							<b>Currencies: </b>
							<template v-for="(currency, index) in country.currencies">
								{{ currency.name }}{{ addComma(country.currencies, index) }}
							</template>

							<template v-if="!country.capital">None</template>
						</li>

						<li>
							<b>Languages: </b>
							<template v-for="(language, index) in Object.values(country.languages)">
								{{ language }}{{ addComma(country.languages, index) }}
							</template>
						</li>
					</ul>
				</div>


				<div class="border-countries">
					<b>Border Countries: </b>
					
					<router-link 
						:to="{ name: 'Details', params: { cca2: border.cca2 } }"
						class="border-name" 
						v-for="border in borders" 
						:key="border.cca2"
					>
						{{ border.name }}
					</router-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Details',

	props: {
		countries: Array,

		cca2: {
			type: String,
			required: true,
			validator(value) {
				return value.length === 2
			}
		},
	},

	data() {
		return {
			country: {},
			borders: [],
		}
	},

	beforeMount() {
		this.setCountry()
	},

	mounted() {
		this.setBorderNames()
	},

	beforeUpdate() {
		this.setCountry()
		this.setBorderNames()
	},

	beforeUnmount() {
		this.borders = []
	},
	
	methods: {
		addComma(value, index) {
			if (typeof value === 'object') {
				value = Object.keys(value)
			}

			return value.length > 1 && (index + 1) != value.length ? ', ' : ''
		},

		setCountry() {
			this.country = this.countries.find((country) => {
				return country.cca2.toLowerCase() == this.cca2
			})
		},

		setBorderNames() {
			if (!this.country.borders) {
				return
			}

			this.borders = []

			this.country.borders.forEach(border => {
				var foundCountry = this.countries.find((country) => {
					return country.cca3 === border
				})

				if (!foundCountry) {
					return
				}

				this.borders.push({ 
					name: foundCountry.name.common, 
					cca2: foundCountry.cca2.toLowerCase() 
				})
			})
		},
	},
}
</script>

<style>
	#details-page {
		font-size: 16px;
		padding: 5%;
	}

	#details-page .go-back {
		display: flex;
		justify-content: center;
		align-items: center;
		box-shadow: 0px 0px 15px 2px rgb(66 68 90 / 25%);
		width: 12%;
		border-radius: 8px;
		padding: 13px 0px;
		color: var(--lm-text);
		text-decoration: none;
	}

	.app-container.dark #details-page .go-back {
		color: var(--white);
		background-color: var(--dark-blue);
	}

	.app-container.dark #details-page .go-back:before {
		filter: invert(1);
	}

	.app-container.dark #details-page .country-info .details .border-countries .border-name {
		color: var(--white);
		background-color: var(--dark-blue);
	}

	#details-page .go-back:before {
		content: url('../assets/arrow-left.svg');
		display: inline-block;
		height: 20px;
		width: 20px;
		margin-right: 12px;
	}

	#details-page .country-info {
		margin-top: 5%;
		display: flex;
		gap: 8%;
	}

	#details-page .country-info .flag img {
		width: 525px;
		height: 375px;
	}

	#details-page .country-info .details {
		padding: 40px 0;
	}

	#details-page .country-info .details h1 {
		font-weight: bold;
		font-size: 25px;
	}

	#details-page .country-info .details .details-table {
		display: flex;
		gap: 150px;
		margin-top: 20px;
	}

	#details-page .country-info .details .details-table ul {
		max-width: 275px;
	}

	#details-page .country-info .details .details-table ul li {
		margin: 15px 0;
	}

	#details-page .country-info .details .border-countries {
		margin-top: 65px;
	}

	#details-page .country-info .details .border-countries .border-name {
		box-shadow: var(--box-shadow);
		padding: 8px 30px;
		margin-right: 10px;
		margin-top: 10px;
		text-decoration: none;
		color: var(--lm-text);
		display: inline-block;
		border-radius: 4px;
	}

	#details-page .country-info .details .border-countries .border-name:first-of-type {
		margin-left: 15px;
	}
</style>