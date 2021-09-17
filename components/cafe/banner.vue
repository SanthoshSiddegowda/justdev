<template>
  <div>
		<div class="col-sm-5 left-wrapper">
				<div class="event-banner-wrapper" :style="{ backgroundImage:`url(${banner.image})` }">
				</div>
		</div>
  </div>
</template>

<script>
import { defineComponent, reactive } from '@nuxtjs/composition-api'

export default defineComponent({
	setup() 
	{
		let banner = reactive({
			'title':'R K Pizzeria',
			'image': "https://i.ibb.co/JmY87m0/shell.png"
		});

		return {
			banner,
		}
	}
})
</script>

<style>

</style>