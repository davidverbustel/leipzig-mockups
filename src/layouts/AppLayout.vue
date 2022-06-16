<template>
	<div class="h-screen flex">
		<div class="flex-1 flex flex-col overflow-hidden">
			<app-nav></app-nav>

			<slot></slot>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import AppNav from "@/components/Navigation/AppNav.vue";

export default defineComponent({
	name: "AppLayout",
	components: {
		AppNav,
	},
});
</script>
