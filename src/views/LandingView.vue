<template>
	<Header></Header>
	<hero></hero>
	<selling-points></selling-points>
	<features></features>
	<launch-notify></launch-notify>
	<Footer></Footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Hero from "@/components/Landing/Hero.vue";
import SellingPoints from "@/components/Landing/SellingPoints.vue";
import LaunchNotify from "@/components/Landing/LaunchNotify.vue";
import Features from "@/components/Landing/Features.vue";
import Footer from "@/components/Landing/Footer.vue";
import Header from "@/components/Landing/Header.vue";

export default defineComponent({
	name: "LandingView",
	components: {
		Hero,
		SellingPoints,
		LaunchNotify,
		Features,
		Footer,
		Header,
	},
});
</script>
