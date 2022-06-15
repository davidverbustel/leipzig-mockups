<template>
	<header-container>
		<template #title>
			<h1 class="w-full text-4xl font-normal">Blank page</h1>
		</template>

		<template #subtitle>
			<h2 class="w-full my-4 text-base font-light">this is a blank page</h2>
		</template>
	</header-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import HeaderContainer from "@/components/Shared/HeaderContainer.vue";

export default defineComponent({
	name: "TeamsView",
	components: {
		HeaderContainer,
	},
});
</script>
