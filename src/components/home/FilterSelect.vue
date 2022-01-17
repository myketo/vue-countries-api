<template>
	<div class="filter-container" v-click-away="() => {this.listVisible = false}">
		<div class="active-filter" @click="this.listVisible = !this.listVisible">
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
				@click="selectRegion(region)"
			>
				{{ region }}
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'FilterSelect',

	props: {
		regions: Array,
	},

	emits: [
		'selectedRegion',
	],

	data() {
		return {
			active: '',
			listVisible: false,
		}
	},

	methods: {
		selectRegion(region) {
			this.active = region
			this.listVisible = false

			this.$emit('selectedRegion', region)
		},
	}
}
</script>

<style>
	.filter-container {
		width: 16%;
		position: relative;
		cursor: pointer;
		user-select: none;
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
		z-index: 2;
	}

	.filter-container .region-list .region {
		background-color: var(--white);
		padding: 8px 22px;
		border-radius: 6px;
		transition: ease 0.25s;
	}

	.filter-container .region-list .region:hover {
		background-color: hsl(0, 0%, 90%);
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

	.app-container.dark .filter-container .active-filter {
		background-color: var(--dark-blue);
	}

	.app-container.dark .arrow {
		border: solid var(--white);
		border-width: 0 3px 3px 0;
		border-radius: 2px;
	}

	.app-container.dark .region-list {
		background-color: var(--dark-blue);
	}

	.app-container.dark .region-list .region {
		background-color: var(--dark-blue);
	}

	.app-container.dark .region-list .region:hover {
		background-color: hsl(209, 23%, 26%);
	}
</style>