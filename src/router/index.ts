import { createRouter, createWebHashHistory } from "vue-router";

const LandingView = () => import("@/views/LandingView.vue");
const LoginView = () => import("@/views/LoginView.vue");
const JobSearchView = () => import("@/views/JobSearchView.vue");
const JobResultsView = () =>
	import(/* webpackChunkName: "jobs" */ "@/views/JobResultsView.vue");
const JobView = () =>
	import(/* webpackChunkName: "jobs" */ "@/views/JobView.vue");
const BlankView = () => import("@/views/BlankView.vue");

const routes = [
	{
		path: "/",
		name: "LandingView",
		component: LandingView,
		meta: {
			layout: "default",
		},
	},
	{
		path: "/login",
		name: "Login",
		component: LoginView,
		meta: {
			layout: "landing",
		},
	},
	{
		path: "/app/search",
		name: "JobSearch",
		component: JobSearchView,
		meta: {
			layout: "default",
		},
	},
	{
		path: "/app/jobs/results",
		name: "JobResults",
		component: JobResultsView,
		meta: {
			layout: "default",
		},
	},
	{
		path: "/app/jobs/results/:id",
		name: "JobListing",
		component: JobView,
		meta: {
			layout: "default",
		},
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
