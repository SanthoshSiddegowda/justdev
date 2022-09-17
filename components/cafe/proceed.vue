<template>
	<div>
		<div class="cart">
			<div class="row">
				<div class="col-xs-6">
					<p
						class="total-amount"
						v-if="companyCustomDetails.total_text"
					>
						{{ companyCustomDetails.total_text }}:
						<span class="total-amount">{{ totalAmount }}</span>
						<span
							v-html="companyCustomDetails.currency_symbol"
						></span>
					</p>
				</div>
				<div class="col-xs-6">
					<div
						class="text-right"
						v-if="
							companyCustomDetails.primary_color &&
							companyCustomDetails.proceed_text
						"
					>
						<a
							class="btn"
							data-toggle="modal"
							data-target="#ticket-details"
							:style="{
								background: companyCustomDetails.primary_color,
							}"
							>{{ companyCustomDetails.proceed_text }}</a
						>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { defineComponent, ref, useStore, watch } from "@nuxtjs/composition-api";

export default defineComponent({
	props: ["companyCustomDetails"],
	setup() {
		const store = useStore();
		var totalAmount = ref(0);
		watch(
			() => store.state.total,
			(newValue) => {
				totalAmount.value = newValue;
			}
		);
		return {
			totalAmount,
		};
	},
});
</script>

<style scoped>
.total-amount {
	margin-top: 10px;
}
</style>
