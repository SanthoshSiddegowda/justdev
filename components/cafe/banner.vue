<template>
	<div>
		<div class="col-sm-5 left-wrapper">
			<div
				class="event-banner-wrapper"
				:style="{ backgroundImage: `url(${banner.image_url})` }"
			></div>
		</div>
	</div>
</template>
<script>
import { defineComponent, ref, useStore, watch } from "@nuxtjs/composition-api";

export default defineComponent({
	setup() {
		const store = useStore();
		const banner = ref([]);

		watch(
			() => store.state.companyDetails,
			(details) => {
				banner.value = details;
				console.log("test");
			}
		);

		return {
			banner,
		};
	},
});
</script>

<style></style>
