<template>
	<div class="flex-1 flex items-stretch overflow-hidden">
		<TransitionRoot as="template" :show="sidebarOpen">
			<Dialog
				as="div"
				class="relative z-40 lg:hidden"
				@close="sidebarOpen = false"
			>
				<TransitionChild
					as="template"
					enter="transition-opacity ease-linear duration-300"
					enter-from="opacity-0"
					enter-to="opacity-100"
					leave="transition-opacity ease-linear duration-300"
					leave-from="opacity-100"
					leave-to="opacity-0"
				>
					<div class="fixed inset-0 bg-gray-600 bg-opacity-75" />
				</TransitionChild>

				<div class="fixed inset-0 flex z-40">
					<TransitionChild
						as="template"
						enter="transition ease-in-out duration-300 transform"
						enter-from="-translate-x-full"
						enter-to="translate-x-0"
						leave="transition ease-in-out duration-300 transform"
						leave-from="translate-x-0"
						leave-to="-translate-x-full"
					>
						<DialogPanel
							class="relative flex-1 flex flex-col max-w-xs w-full bg-white focus:outline-none"
						>
							<TransitionChild
								as="template"
								enter="ease-in-out duration-300"
								enter-from="opacity-0"
								enter-to="opacity-100"
								leave="ease-in-out duration-300"
								leave-from="opacity-100"
								leave-to="opacity-0"
							>
								<div class="absolute top-0 right-0 -mr-12 pt-2">
									<button
										type="button"
										class="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
										@click="sidebarOpen = false"
									>
										<span class="sr-only">Close sidebar</span>
										<XIcon class="h-6 w-6 text-white" aria-hidden="true" />
									</button>
								</div>
							</TransitionChild>
							<div class="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
								<div class="flex-shrink-0 flex items-center px-4">
									<img
										class="h-8 w-auto"
										src="https://tailwindui.com/img/logos/workflow-logo-pink-500-mark-gray-900-text.svg"
										alt="Workflow"
									/>
								</div>
								<nav aria-label="Sidebar" class="mt-5">
									<div class="px-2 space-y-1">
										<job-filters-sidebar></job-filters-sidebar>
									</div>
								</nav>
							</div>
						</DialogPanel>
					</TransitionChild>
					<div class="flex-shrink-0 w-14" aria-hidden="true">
						<!-- Force sidebar to shrink to fit close icon -->
					</div>
				</div>
			</Dialog>
		</TransitionRoot>

		<!-- Static sidebar for desktop -->
		<div class="hidden lg:flex lg:flex-shrink-0">
			<div class="flex flex-col w-96">
				<!-- Sidebar component, swap this element with another sidebar if you like -->
				<div
					class="flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-gray-100"
				>
					<div class="flex-1 flex flex-col pb-4 overflow-y-auto">
						<nav class="flex-1" aria-label="Sidebar">
							<div class="px-2 space-y-1">
								<job-filters-sidebar></job-filters-sidebar>
							</div>
						</nav>
					</div>
				</div>
			</div>
		</div>
		<div class="flex flex-col min-w-0 flex-1 overflow-hidden">
			<div class="lg:hidden">
				<div
					class="flex items-center justify-between bg-gray-50 border-b border-gray-200 px-4 py-1.5"
				>
					<div>
						<img
							class="h-8 w-auto"
							src="https://tailwindui.com/img/logos/workflow-mark-pink-500.svg"
							alt="Workflow"
						/>
					</div>
					<div>
						<button
							type="button"
							class="-mr-3 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-600"
							@click="sidebarOpen = true"
						>
							<span class="sr-only">Open sidebar</span>
							<MenuIcon class="h-6 w-6" aria-hidden="true" />
						</button>
					</div>
				</div>
			</div>
			<div class="flex-1 relative z-0 flex overflow-hidden">
				<main
					class="flex-1 relative z-0 overflow-y-auto focus:outline-none xl:order-last"
				>
					<!-- Breadcrumb -->
					<nav
						class="flex items-start px-4 py-3 sm:px-6 lg:px-8 xl:hidden"
						aria-label="Breadcrumb"
					>
						<a
							href="#"
							class="inline-flex items-center space-x-3 text-sm font-medium text-gray-900"
						>
							<ChevronLeftIcon
								class="-ml-2 h-5 w-5 text-gray-400"
								aria-hidden="true"
							/>
							<span>Directory</span>
						</a>
					</nav>

					<article>
						<!-- Profile header -->
						<div>
							<div>
								<img
									class="h-32 w-full object-cover lg:h-48"
									:src="profile.coverImageUrl"
									alt=""
								/>
							</div>
							<div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
								<div class="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
									<div class="flex">
										<img
											class="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32"
											:src="profile.imageUrl"
											alt=""
										/>
									</div>
									<div
										class="mt-6 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1"
									>
										<div class="sm:hidden 2xl:block mt-6 min-w-0 flex-1">
											<h1 class="text-2xl font-bold text-gray-900 truncate">
												{{ profile.name }}
											</h1>
										</div>
										<div
											class="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4"
										>
											<button
												type="button"
												class="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
											>
												<MailIcon
													class="-ml-1 mr-2 h-5 w-5 text-gray-400"
													aria-hidden="true"
												/>
												<span>Message</span>
											</button>
											<button
												type="button"
												class="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
											>
												<PhoneIcon
													class="-ml-1 mr-2 h-5 w-5 text-gray-400"
													aria-hidden="true"
												/>
												<span>Call</span>
											</button>
										</div>
									</div>
								</div>
								<div class="hidden sm:block 2xl:hidden mt-6 min-w-0 flex-1">
									<h1 class="text-2xl font-bold text-gray-900 truncate">
										{{ profile.name }}
									</h1>
								</div>
							</div>
						</div>

						<!-- Tabs -->
						<div class="mt-6 sm:mt-2 2xl:mt-5">
							<div class="border-b border-gray-200">
								<div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
									<nav class="-mb-px flex space-x-8" aria-label="Tabs">
										<a
											v-for="tab in tabs"
											:key="tab.name"
											:href="tab.href"
											:class="[
												tab.current
													? 'border-pink-500 text-gray-900'
													: 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
												'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm',
											]"
											:aria-current="tab.current ? 'page' : undefined"
										>
											{{ tab.name }}
										</a>
									</nav>
								</div>
							</div>
						</div>

						<!-- Description list -->
						<div class="mt-6 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
							<dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
								<div
									v-for="field in Object.keys(profile.fields)"
									:key="field"
									class="sm:col-span-1"
								>
									<dt class="text-sm font-medium text-gray-500">
										{{ field }}
									</dt>
									<dd class="mt-1 text-sm text-gray-900">
										{{ profile.fields[field] }}
									</dd>
								</div>
								<div class="sm:col-span-2">
									<dt class="text-sm font-medium text-gray-500">About</dt>
									<dd
										class="mt-1 max-w-prose text-sm text-gray-900 space-y-5"
										v-html="profile.about"
									/>
								</div>
							</dl>
						</div>

						<!-- Team member list -->
						<div class="mt-8 max-w-5xl mx-auto px-4 pb-12 sm:px-6 lg:px-8">
							<h2 class="text-sm font-medium text-gray-500">Team members</h2>
							<div class="mt-1 grid grid-cols-1 gap-4 sm:grid-cols-2">
								<div
									v-for="person in team"
									:key="person.handle"
									class="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-pink-500"
								>
									<div class="flex-shrink-0">
										<img
											class="h-10 w-10 rounded-full"
											:src="person.imageUrl"
											alt=""
										/>
									</div>
									<div class="flex-1 min-w-0">
										<a href="#" class="focus:outline-none">
											<span class="absolute inset-0" aria-hidden="true" />
											<p class="text-sm font-medium text-gray-900">
												{{ person.name }}
											</p>
											<p class="text-sm text-gray-500 truncate">
												{{ person.role }}
											</p>
										</a>
									</div>
								</div>
							</div>
						</div>
					</article>
				</main>
				<aside
					class="hidden xl:order-first xl:flex xl:flex-col flex-shrink-0 w-2/5 border-r border-gray-200"
				>
					<!-- Directory list -->
					<nav class="flex-1 min-h-0 overflow-y-auto" aria-label="Directory">
						<div class="relative">
							<job-listings></job-listings>
						</div>
					</nav>
				</aside>
			</div>
		</div>
	</div>
</template>

<script setup>
import JobFiltersSidebar from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebar.vue";
import JobListings from "@/components/JobResults/JobListings.vue";
import { ref } from "vue";
import {
	Dialog,
	DialogPanel,
	TransitionChild,
	TransitionRoot,
} from "@headlessui/vue";
import { MenuIcon, XIcon } from "@heroicons/vue/outline";
import { ChevronLeftIcon, MailIcon, PhoneIcon } from "@heroicons/vue/solid";

const tabs = [
	{ name: "Profile", href: "#", current: true },
	{ name: "Calendar", href: "#", current: false },
	{ name: "Recognition", href: "#", current: false },
];
const profile = {
	name: "Ricardo Cooper",
	imageUrl:
		"https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
	coverImageUrl:
		"https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
	about: `
    <p>Tincidunt quam neque in cursus viverra orci, dapibus nec tristique. Nullam ut sit dolor consectetur urna, dui cras nec sed. Cursus risus congue arcu aenean posuere aliquam.</p>
    <p>Et vivamus lorem pulvinar nascetur non. Pulvinar a sed platea rhoncus ac mauris amet. Urna, sem pretium sit pretium urna, senectus vitae. Scelerisque fermentum, cursus felis dui suspendisse velit pharetra. Augue et duis cursus maecenas eget quam lectus. Accumsan vitae nascetur pharetra rhoncus praesent dictum risus suspendisse.</p>
  `,
	fields: {
		Phone: "(555) 123-4567",
		Email: "ricardocooper@example.com",
		Title: "Senior Front-End Developer",
		Team: "Product Development",
		Location: "San Francisco",
		Sits: "Oasis, 4th floor",
		Salary: "$145,000",
		Birthday: "June 8, 1990",
	},
};

const team = [
	{
		name: "Leslie Alexander",
		handle: "lesliealexander",
		role: "Co-Founder / CEO",
		imageUrl:
			"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
	},
	{
		name: "Michael Foster",
		handle: "michaelfoster",
		role: "Co-Founder / CTO",
		imageUrl:
			"https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
	},
	{
		name: "Dries Vincent",
		handle: "driesvincent",
		role: "Manager, Business Relations",
		imageUrl:
			"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
	},
	{
		name: "Lindsay Walton",
		handle: "lindsaywalton",
		role: "Front-end Developer",
		imageUrl:
			"https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
	},
];

const sidebarOpen = ref(false);
</script>
