<template>
	<div>
		<div class="col-sm-5 left-wrapper">
			<div
				class="event-banner-wrapper"
				:style="{ backgroundImage: `url(${banner})` }"
			></div>
		</div>
	</div>
</template>
<script>
import { defineComponent, ref, useStore, watch } from "@nuxtjs/composition-api";
import { companyApi } from "@/api/company";

export default defineComponent({
	setup() {
		const { fetchCompany } = companyApi();
		const store = useStore();
		const banner = ref([]);

		watch(
			() => store.state.companyDetails,
			(details) => {
				banner.value = details.image_url;
			}
		);

		return {
			banner,
		};
	},
});
</script>

<style></style>
