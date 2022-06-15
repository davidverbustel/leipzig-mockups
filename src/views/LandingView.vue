<template>
	<header-container>
		<template #title>
			<h1 class="w-full text-4xl font-normal">LandingPage</h1>
		</template>

		<template #subtitle>
			<h2 class="w-full my-4 text-base font-light">LandingPage</h2>
		</template>
	</header-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import HeaderContainer from "@/components/Shared/HeaderContainer.vue";

export default defineComponent({
	name: "LandingView",
	components: {
		HeaderContainer,
	},
});
</script>
