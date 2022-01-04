<template>
	<div class="filter-container">
		<div class="active-filter" @click="toggleList">
			<span>{{ active ? active : 'Filter by Region' }}</span>
			<div>
				<i class="arrow" :class="listVisible ? 'up' : 'down'"></i>
			</div>
		</div>

		<div class="region-list" v-show="listVisible">
			<div 
				v-for="(region, index) in regions" 
				:key="index"
				class="region"
			>
				{{ region }}
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'FilterSelect',

	data() {
		return {
			active: '',
			regions: [
				'Africa',
				'America',
				'Asia',
				'Europe',
				'Oceania'
			],
			listVisible: false,
		}
	},

	methods: {
		toggleList() {
			this.listVisible = !this.listVisible
		}
	}
}
</script>

<style>
	.filter-container {
		width: 16%;
		position: relative;
	}

	.filter-container .active-filter {
		background-color: var(--white);
		padding: 22px;
		font-weight: 600;
		border-radius: 6px;
		box-shadow: var(--box-shadow);
		display: flex;
		justify-content: space-between;
	}

	.filter-container .region-list {
		position: absolute;
		margin-top: 5px;
		border-radius: 6px;
		box-shadow: var(--box-shadow);
		width: 100%;
		font-weight: 600;
		padding: 12px 0;
		background-color: var(--white);
	}

	.filter-container .region-list .region {
		background-color: var(--white);
		padding: 8px 22px;
		border-radius: 6px;
	}

	.arrow {
		border: solid var(--lm-text);
		border-width: 0 3px 3px 0;
		border-radius: 2px;
		display: inline-block;
		padding: 3px;
	}

	.arrow.down {
		transform: rotate(45deg);
	}

	.arrow.up {
		transform: rotate(-135deg)
	}
</style>