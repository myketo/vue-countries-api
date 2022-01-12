<template>
	<div id="details-page">
		Details Page for {{ cca3 }}
	</div>
</template>

<script>
export default {
	name: 'Details',

	props: {
		cca3: {
			type: String,
			required: true,
			validator(value) {
				return value.length === 3
			}
		},
	}
}
</script>