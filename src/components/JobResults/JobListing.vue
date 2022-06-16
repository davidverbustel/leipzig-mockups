<template>
	<li class="mb-1">
		<router-link
			:to="jobPageLink"
			class="block mx-auto rounded-none bg-white hover:gray"
		>
			<!-- https://tailwindui.com/components/application-ui/lists/stacked-lists -->
			<div class="bg-white overflow-hidden rounded-none">
				<ul role="list" class="relative z-0 divide-y divide-gray-600">
					<li>
						<div
							class="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-100"
						>
							<a href="#" class="block hover:bg-gray-50">
								<div class="px-4 py-4 sm:px-4">
									<div class="flex items-center justify-between">
										<p class="text-sm font-medium text-indigo-600 truncate">
											{{ job.title }}
										</p>
										<div class="ml-2 flex-shrink-0 flex">
											<p
												class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
											>
												{{ job.jobType }}
											</p>
										</div>
									</div>
									<div class="mt-2 sm:flex sm:justify-between">
										<div class="sm:flex">
											<p class="flex items-center text-sm text-gray-500">
												<UsersIcon
													class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
													aria-hidden="true"
												/>
												{{ job.organization }}
											</p>
											<p
												class="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6"
											>
												<LocationMarkerIcon
													class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
													aria-hidden="true"
												/>
												Brussels
											</p>
										</div>
										<div
											class="mt-2 flex items-center text-sm text-gray-500 sm:mt-0"
										>
											<CalendarIcon
												class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
												aria-hidden="true"
											/>
											<p>Closing on 7.06.22</p>
										</div>
									</div>
									<div class="mt-2 sm:flex sm:justify-between">
										<div class="sm:flex">
											<p class="flex items-center text-sm text-gray-500">
												Aenean eu leo quam. Pellentesque ornare sem lacinia quam
												venenatis vestibulum. Lorem ipsum dolor sit amet,
												consectetur adipiscing elit. Nullam quis risus eget urna
												mollis ornare vel eu leo.
											</p>
										</div>
									</div>
								</div>
							</a>
						</div>
					</li>
				</ul>
			</div>
		</router-link>
	</li>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";
import {
	CalendarIcon,
	LocationMarkerIcon,
	UsersIcon,
} from "@heroicons/vue/solid";

import { Job } from "@/api/types";

export default defineComponent({
	name: "JobListing",
	components: {
		CalendarIcon,
		LocationMarkerIcon,
		UsersIcon,
	},
	props: {
		job: {
			type: Object as PropType<Job>,
			required: true,
		},
	},
	setup(props) {
		const jobPageLink = computed(() => `/app/jobs/results/${props.job.id}`);
		const applications = [
			{
				applicant: {
					name: "Ricardo Cooper",
					email: "ricardo.cooper@example.com",
					imageUrl:
						"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
				},
				date: "2020-01-07",
				dateFull: "January 7, 2020",
				stage: "Completed phone screening",
				href: "#",
			},
			{
				applicant: {
					name: "Kristen Ramos",
					email: "kristen.ramos@example.com",
					imageUrl:
						"https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
				},
				date: "2020-01-07",
				dateFull: "January 7, 2020",
				stage: "Completed phone screening",
				href: "#",
			},
			{
				applicant: {
					name: "Ted Fox",
					email: "ted.fox@example.com",
					imageUrl:
						"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
				},
				date: "2020-01-07",
				dateFull: "January 7, 2020",
				stage: "Completed phone screening",
				href: "#",
			},
		];
		const positions = [
			{
				id: 1,
				title: "Back End Developer",
				type: "Full-time",
				location: "Remote",
				department: "Engineering",
				closeDate: "2020-01-07",
				closeDateFull: "January 7, 2020",
			},
			// {
			// 	id: 2,
			// 	title: "Front End Developer",
			// 	type: "Full-time",
			// 	location: "Remote",
			// 	department: "Engineering",
			// 	closeDate: "2020-01-07",
			// 	closeDateFull: "January 7, 2020",
			// },
			// {
			// 	id: 3,
			// 	title: "User Interface Designer",
			// 	type: "Full-time",
			// 	location: "Remote",
			// 	department: "Design",
			// 	closeDate: "2020-01-14",
			// 	closeDateFull: "January 14, 2020",
			// },
		];
		return { jobPageLink, applications, positions };
	},
});
</script>
