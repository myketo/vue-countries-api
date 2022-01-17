import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Details from '../views/Details.vue'
import PageNotFound from '../views/PageNotFound.vue'

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
		alias: '/home',
	},
	{
		path: '/details/:cca2',
		name: 'Details',
		component: Details,
		props: true,
	},
	// redirect
	{
		path: '/details',
		redirect: '/',
	},
	// page not found
	{
		path: '/:catchAll(.*)',
		name: 'PageNotFound',
		component: PageNotFound,
	},
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router