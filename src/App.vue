<template>
	<div>
		<component :is="currentLayout" v-if="isRouterLoaded">
			<router-view />
			<!-- <router-view :key="$route.path" /> -->
		</component>
	</div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useRoute } from "vue-router";

import landingLayout from "@/layouts/LandingLayout.vue";
import defaultLayout from "@/layouts/DefaultLayout.vue";
import appLayout from "@/layouts/AppLayout.vue";
import emptyLayout from "@/layouts/EmptyLayout.vue";

export default defineComponent({
	name: "App",
	components: {
		landingLayout,
		defaultLayout,
		appLayout,
		emptyLayout,
	},
	setup() {
		const route = useRoute();
		const isRouterLoaded = computed(() => (route.name !== null ? true : false));
		const currentLayout = computed(() => {
			const layout = (route.meta.layout || "default") as string;
			return layout + "Layout";
		});
		return { isRouterLoaded, currentLayout };
	},
});
</script>
