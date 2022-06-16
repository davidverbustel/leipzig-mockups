<template>
	<!-- Navbar -->
	<Disclosure
		as="header"
		class="bg-gray-800 sticky top-0 z-50"
		v-slot="{ open }"
	>
		<div
			class="w-full mx-auto px-2 sm:px-4 lg:divide-y lg:divide-gray-700 lg:px-4"
		>
			<!-- header logo -->
			<div class="relative h-16 flex justify-between">
				<div class="relative z-10 px-2 flex lg:px-0">
					<div class="flex-shrink-0 flex items-center">
						<img
							class="block h-8 w-auto"
							src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
							alt="Workflow"
						/>
					</div>
				</div>

				<div class="relative z-10 flex items-center lg:hidden">
					<!-- Mobile menu button -->
					<DisclosureButton
						class="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
					>
						<span class="sr-only">Open menu</span>
						<MenuIcon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
						<XIcon v-else class="block h-6 w-6" aria-hidden="true" />
					</DisclosureButton>
				</div>
				<div class="hidden lg:relative lg:z-10 lg:ml-4 lg:flex lg:items-center">
					<button
						type="button"
						class="bg-gray-800 flex-shrink-0 rounded-full p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
					>
						<span class="sr-only">View notifications</span>
						<BellIcon class="h-6 w-6" aria-hidden="true" />
					</button>

					<!-- Profile dropdown -->
					<Menu as="div" class="flex-shrink-0 relative ml-4">
						<div>
							<MenuButton
								class="bg-gray-800 rounded-full flex text-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
							>
								<span class="sr-only">Open user menu</span>
								<img class="h-8 w-8 rounded-full" :src="user.imageUrl" alt="" />
							</MenuButton>
						</div>
						<transition
							enter-active-class="transition ease-out duration-100"
							enter-from-class="transform opacity-0 scale-95"
							enter-to-class="transform opacity-100 scale-100"
							leave-active-class="transition ease-in duration-75"
							leave-from-class="transform opacity-100 scale-100"
							leave-to-class="transform opacity-0 scale-95"
						>
							<MenuItems
								class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1 focus:outline-none"
							>
								<MenuItem
									v-for="item in userNavigation"
									:key="item.name"
									v-slot="{ active }"
								>
									<a
										:href="item.href"
										:class="[
											active ? 'bg-gray-100' : '',
											'block py-2 px-4 text-sm text-gray-700',
										]"
										>{{ item.name }}</a
									>
								</MenuItem>
							</MenuItems>
						</transition>
					</Menu>
				</div>
			</div>
			<!-- sub nav -->
			<nav class="hidden lg:py-2 lg:flex lg:space-x-8" aria-label="Global">
				<a
					v-for="item in navigation"
					:key="item.name"
					:href="item.href"
					:class="[
						item.current
							? 'bg-gray-900 text-white'
							: 'text-gray-300 hover:bg-gray-700 hover:text-white',
						'rounded-md py-2 px-3 inline-flex items-center text-sm font-medium',
					]"
					:aria-current="item.current ? 'page' : undefined"
				>
					{{ item.name }}
				</a>
			</nav>
		</div>
		<!-- mobile   -->
		<DisclosurePanel as="nav" class="lg:hidden" aria-label="Global">
			<div class="pt-2 pb-3 px-2 space-y-1">
				<DisclosureButton
					v-for="item in navigation"
					:key="item.name"
					as="a"
					:href="item.href"
					:class="[
						item.current
							? 'bg-gray-900 text-white'
							: 'text-gray-300 hover:bg-gray-700 hover:text-white',
						'block rounded-md py-2 px-3 text-base font-medium',
					]"
					:aria-current="item.current ? 'page' : undefined"
					>{{ item.name }}</DisclosureButton
				>
			</div>
			<div class="border-t border-gray-700 pt-4 pb-3">
				<div class="px-4 flex items-center">
					<div class="flex-shrink-0">
						<img class="h-10 w-10 rounded-full" :src="user.imageUrl" alt="" />
					</div>
					<div class="ml-3">
						<div class="text-base font-medium text-white">{{ user.name }}</div>
						<div class="text-sm font-medium text-gray-400">
							{{ user.email }}
						</div>
					</div>
					<button
						type="button"
						class="ml-auto flex-shrink-0 bg-gray-800 rounded-full p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
					>
						<span class="sr-only">View notifications</span>
						<BellIcon class="h-6 w-6" aria-hidden="true" />
					</button>
				</div>
				<div class="mt-3 px-2 space-y-1">
					<DisclosureButton
						v-for="item in userNavigation"
						:key="item.name"
						as="a"
						:href="item.href"
						class="block rounded-md py-2 px-3 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
						>{{ item.name }}</DisclosureButton
					>
				</div>
			</div>
		</DisclosurePanel>
	</Disclosure>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import {
	Disclosure,
	DisclosureButton,
	DisclosurePanel,
	Menu,
	MenuButton,
	MenuItem,
	MenuItems,
} from "@headlessui/vue";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/vue/outline";
export default defineComponent({
	components: {
		Disclosure,
		DisclosureButton,
		DisclosurePanel,
		Menu,
		MenuButton,
		MenuItem,
		MenuItems,
		BellIcon,
		MenuIcon,
		XIcon,
	},
	setup() {
		const user = {
			name: "Tom Cook",
			email: "tom@example.com",
			imageUrl:
				"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		};
		const navigation = [
			{ name: "Dashboard", href: "#", current: true },
			{ name: "Team", href: "#", current: false },
			{ name: "Projects", href: "#", current: false },
			{ name: "Calendar", href: "#", current: false },
		];
		const userNavigation = [
			{ name: "Your Profile", href: "#" },
			{ name: "Settings", href: "#" },
			{ name: "Sign out", href: "#" },
		];
		return { user, navigation, userNavigation };
	},
});
</script>
