import Vue from "vue";
import VueRouter from "vue-router";
import SearchPage from '../views/SearchPage.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		redirect: '/search'
	},
	{
		path: '/search',
		name: 'Home',
		component: SearchPage,
	},
	{
		path: '/channel',
		name: 'About',
		component: () =>
			import(/* webpackChunkName: "about" */ '../views/Channel.vue'),
	},
	{
		path: '/video/',
		name: 'About',
		component: () =>
			import(/* webpackChunkName: "about" */ '../views/Video.vue'),
	},
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
