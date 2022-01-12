<template>
	<div id="page-not-found">
		<h1>404</h1>
		<h2>Page not found.</h2>

		<router-link :to="{ name: 'Home' }">Go to home page</router-link>
	</div>
</template>

<style>
	#page-not-found {
		height: 80vh;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}

	#page-not-found h1 {
		font-size: 25vh;
	}

	#page-not-found h2 {
		font-size: 10vh;
	}

	#page-not-found a {
		font-size: 2.5vh;
		margin-top: 30px;
		color: blue;
	}
</style>