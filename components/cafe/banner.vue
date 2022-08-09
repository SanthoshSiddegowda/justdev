<template>
  	<div>
		<div class="col-sm-5 left-wrapper">
			<div class="event-banner-wrapper" :style="{ backgroundImage:`url(${banner.image_url})` }">
			</div>
		</div>
	</div>
</template>
<script>
import { computed, defineComponent, ref, useStore } from '@nuxtjs/composition-api'
import { companyApi } from '@/api/company'

export default defineComponent({
	setup() 
	{
		const { fetchCompany } = companyApi()
		const store = useStore()

   	 	const banner = ref([])

		const loadCompany = async () => {
			const response = await fetchCompany()
			store.commit("addCompanyDetails", response.data)
			banner.value = response.data
			console.log( store.state.companyDetails )
		}
		loadCompany()

		return {
			banner,
			loadCompany
		}
	}
})
</script>

<style>

</style>