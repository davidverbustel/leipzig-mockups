import { createRouter, createWebHashHistory } from "vue-router";

const HomeView = () => import("@/views/HomeView.vue");
const JobResultsView = () =>
	import(/* webpackChunkName: "jobs" */ "@/views/JobResultsView.vue");
const JobView = () =>
	import(/* webpackChunkName: "jobs" */ "@/views/JobView.vue");
const BlankView = () => import("@/views/BlankView.vue");

const routes = [
	{
		path: "/",
		name: "Home",
		component: HomeView,
	},
	{
		path: "/jobs/results",
		name: "JobResults",
		component: JobResultsView,
	},
	{
		path: "/jobs/results/:id",
		name: "JobListing",
		component: JobView,
	},
	{
		path: "/blank",
		name: "Blank",
		component: BlankView,
	},
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
	scrollBehavior() {
		return { top: 0, left: 0, behavior: "smooth" };
	},
});

export default router;
