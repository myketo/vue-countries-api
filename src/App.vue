<template>
	<div class="app-container">
		<app-header></app-header>
	</div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'

export default {
	name: 'App',
	components: {
		AppHeader,
	}
}
</script>

<style>
:root {
	font-family: 'Nunito Sans', sans-serif;

	--normal-font: 14px;
	--bigger-font: 16px;

	--lm-text: hsl(200, 15%, 8%);
	--white: hsl(0, 0%, 100%);
}

*, * > * {
	box-sizing: border-box;
}

.app-container {
	color: var(--lm-text);
	background: hsl(0, 0%, 98%);
	min-height: 100vh;
	width: 100vw;
	font-size: var(--normal-font);
	font-weight: 300;
}
</style>