import { createRouter, createWebHashHistory } from "vue-router";

const LandingView = () => import("@/views/LandingView.vue");
const LoginView = () => import("@/views/LoginView.vue");
const JobBrowseView = () =>
	import(/* webpackChunkName: "jobs" */ "@/views/JobBrowseView.vue");
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
			layout: "landing",
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
		path: "/app/jobs/",
		name: "JobBrowse",
		component: JobBrowseView,
		meta: {
			layout: "app",
		},
	},
	{
		path: "/app/jobs/results",
		name: "JobResults",
		component: JobResultsView,
		meta: {
			layout: "app",
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
		meta: {
			layout: "empty",
		},
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
