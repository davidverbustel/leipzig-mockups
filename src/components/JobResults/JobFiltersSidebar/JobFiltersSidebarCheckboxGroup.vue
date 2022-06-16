<template>
	<div class="mt-5">
		<fieldset class="space-y-5">
			<div
				v-for="value in uniqueValues"
				:key="value"
				class="relative flex items-start"
			>
				<div class="flex items-center h-5">
					<input
						:id="value"
						v-model="selectedValues"
						class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
						:value="value"
						type="checkbox"
						:data-test="value"
						@change="selectValue"
					/>
				</div>
				<div class="ml-3 text-sm">
					<label :for="value" data-test="value">{{ value }}</label>
				</div>
			</div>
		</fieldset>
	</div>
</template>

<script lang="ts">
import { ref, defineComponent, PropType } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

import { key } from "@/store";
import { CLEAR_USER_JOB_FILTER_SELECTIONS } from "@/store/constants";

export default defineComponent({
	name: "JobFiltersSidebarCheckboxGroup",
	props: {
		uniqueValues: {
			type: [Array, Set] as PropType<string[] | Set<string>>,
			required: true,
		},
		mutation: {
			type: String,
			required: true,
		},
	},
	setup(props) {
		const store = useStore(key);
		const router = useRouter();

		const selectedValues = ref<string[]>([]);

		store.subscribe((mutation) => {
			if (mutation.type === CLEAR_USER_JOB_FILTER_SELECTIONS) {
				selectedValues.value = [];
			}
		});

		const selectValue = () => {
			store.commit(props.mutation, selectedValues.value);
			router.push({ name: "JobResults" });
		};

		return { selectedValues, selectValue };
	},
});
</script>
