<template>
	<ul class="nav nav-tabs">
		<li
			v-for="(tab, index) in nav.tabs"
			:key="tab"
			role="tab"
			:class="{ active: nav.activeTab == index }"
		>
			<a @click="updateTab(index)">
				{{ tab.name }}
			</a>
		</li>
	</ul>
</template>

<script>
import { defineComponent, watch, useStore, ref } from "@nuxtjs/composition-api";

export default defineComponent({
	setup() {
		const store = useStore();
		let nav = ref({
			tabs: ["Product"],
			activeTab: 0,
		});

		watch(
			() => store.state.companyDetails,
			(details) => {
				nav.value.tabs = details.categories;
			}
		);

		function updateTab(tabNumber) {
			nav.value.activeTab = tabNumber;
			this.$emit("tabs", tabNumber);
		}

		return {
			nav,
			updateTab,
		};
	},
});
</script>

<style scoped>
[role="tab"] {
	cursor: pointer;
}
</style>
>
