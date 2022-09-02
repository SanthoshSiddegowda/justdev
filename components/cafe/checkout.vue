<template>
	<div>
		<div
			class="modal right fade"
			id="ticket-details"
			tabindex="-1"
			role="dialog"
			aria-labelledby="myModalLabel"
		>
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-header mt-5">
						<button
							type="button"
							class="close"
							data-dismiss="modal"
							aria-label="Close"
						>
							<img src="icons/cancel.png" />
						</button>
						<h4 class="modal-title" v-if="companyCustomDetails.order_detail_text">{{ companyCustomDetails.order_detail_text }}</h4>
					</div>
					<div class="modal-body">
						<div class="cart-information">
							<div class="ticket-type"></div>
						</div>
						<div class="contactForm">
							<form>
								<div class="form-group">
									<div
										v-for="(list, index) in lists.items"
										:key="list.item"
									>
										<div
											class="ticketBox"
											v-if="list.quantity > 0"
										>
											<div class="row">
												<div class="col-xs-6">
													<div class="ticket-name">
														{{ list.name }}
														<span>{{
															list.level
														}}</span>
													</div>
												</div>
												<div class="col-xs-6">
													<div
														class="ticket-price-count-box"
													>
														<div
															class="ticket-control"
														>
															<div
																class="input-group"
															>
																<span
																	class="input-group-btn"
																>
																	<button
																		type="button"
																		class="btn btn-default btn-number"
																		@click="
																			addRemoveQuantity(
																				index,
																				'remove'
																			)
																		"
																		:class="[
																			list.quantity ==
																			0
																				? 'disabled'
																				: '',
																		]"
																	>
																		<span
																			class="glyphicon glyphicon-minus"
																		></span>
																	</button>
																</span>
																<input
																	type="text"
																	class="form-control input-number"
																	v-model="
																		list.quantity
																	"
																/>
																<span
																	class="input-group-btn"
																>
																	<button
																		type="button"
																		class="btn btn-default btn-number mt-1"
																		@click="
																			addRemoveQuantity(
																				index,
																				'add'
																			)
																		"
																	>
																		<span
																			class="glyphicon glyphicon-plus"
																		></span>
																	</button>
																</span>
															</div>
														</div>
														<p class="price">
															<span v-html="companyCustomDetails.currency_symbol"></span>
															{{
																list.base_price
															}}
														</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="form-group">
									<h3 class="total-amount" v-if="companyCustomDetails.total_text">
										{{companyCustomDetails.total_text}}:
										<span class="total-amount">
											{{ totalAmount }} <span v-html="companyCustomDetails.currency_symbol"></span>
										</span>
									</h3>
								</div>
								<!-- <div class="form-group">
									<input
										type="text"
										class="form-control"
										placeholder="Enter your name"
									/>
								</div> -->
								<div class="form-group">
									<input
										type="number"
										class="form-control"
										placeholder="Enter your Mobile No."
									/>
								</div>
								<a
									v-if = "companyCustomDetails.order_text && companyCustomDetails.secondary_color"
									type="submit"
									:class="{ disabled: totalAmount < 1 }"
									class="btn botao-wpp"
									:style="{ background : companyCustomDetails.secondary_color }"
									@click="addOrder()"
								>
									{{companyCustomDetails.order_text}}
								</a>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { defineComponent, ref, useStore, watch } from "@nuxtjs/composition-api";
import { orderApi } from "@/api/order";

export default defineComponent({
	props: ["lists","companyCustomDetails"],
	setup() {
		const store = useStore();
		const { postOrder } = orderApi();

		var orders = ref(0);
		watch(
			() => store.state.products,
			(newValue) => {
				orders.value = newValue;
			}
		);

		function addRemoveQuantity(index, type) {
			this.$parent.addRemoveQuantity(index, type);
		}

		let totalAmount = ref(0);
		watch(
			() => store.state.total,
			(newValue) => {
				totalAmount.value = newValue;
			}
		);

		const addOrder = async () => {
			const response = await postOrder(store.state.products);
		};

		return {
			orders,
			addRemoveQuantity,
			totalAmount,
			addOrder,
		};
	},
});
</script>

<style>
.botao-wpp {
	text-decoration: none;
	color: #eee;
	display: inline-block;
	background-color: #25d366;
	font-weight: bold;
	padding: 1rem 2rem;
	border-radius: 3px;
}

.botao-wpp:hover {
	background-color: darken(#25d366, 5%);
}

.botao-wpp:focus {
	background-color: darken(#25d366, 15%);
}

.takeaway {
	font-size: 16px;
}
</style>
