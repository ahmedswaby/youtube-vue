import Vue from "vue";
import VueRouter from "vue-router";
import SearchPage from '../views/SearchPage.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		redirect: '/search',
	},
	{
		path: '/search/:text?',
		name: 'Home',
		component: SearchPage,
	},
	{
		path: '/channel/:id',
		name: 'Channel',
		component: () =>
			import(/* webpackChunkName: "Channel" */ '../views/Channel.vue'),
	},
	{
		path: '/video/:id',
		name: 'Video',
		component: () =>
			import(/* webpackChunkName: "Video" */ '../views/Video.vue'),
	},
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
