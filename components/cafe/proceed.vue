<template>
	<div>
		<div class="cart">
				<div class="row">
					<div class="col-xs-6">
						<p class="total-amount"> 
							Total: <span class="total-amount">{{ totalAmount }}</span> &#8377;
						</p>
					</div>
					<div class="col-xs-6">
						<div class="text-right">
							<a class="btn" data-toggle="modal" data-target="#ticket-details" :class="{ disabled: totalAmount < 1 }">PROCEED</a>
						</div>
					</div>
				</div>
		</div>
	</div>
</template>

<script>
import { defineComponent, ref, useStore, watch } from '@nuxtjs/composition-api'

export default defineComponent({

	setup() {
		const store = useStore()
		var totalAmount = ref(0);
		watch(() => store.state.total,(newValue) => {
			totalAmount.value = newValue
		 })
		return {
			totalAmount
		}
	}
	
})
</script>

<style scoped>
.total-amount{
	margin-top: 10px;
}
</style>