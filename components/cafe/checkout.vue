<template>
	<div>
		<div class="modal right fade" id="ticket-details" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-header mt-5">
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							<img src="icons/cancel.png">
						</button>
						<h4 class="modal-title">Order Details</h4>
					</div>
					<div class="modal-body">
						<div class="cart-information">
							<div class="ticket-type"></div>
						</div>
						<div class="contactForm">	
								<form>
									<div class="form-group">
										<input type="text" class="form-control" placeholder="Enter your name">
									</div>
									
									<div class="form-group">
											<input type="number" class="form-control" placeholder="Enter your Mobile No.">
									</div>
									<div class="form-group">
									<div v-for="(list, index) in lists.items" :key="list.item">
											<div class="ticketBox" v-if="list.quantity > 0">
												<div class="row">
													<div class="col-xs-6">
														<div class="ticket-name">
															{{ list.name }}
															<span>{{ list.level }}</span>
														</div>
													</div>
													<div class="col-xs-6">
														<div class="ticket-price-count-box">
															<div class="ticket-control">
																<div class="input-group">
																	<span class="input-group-btn">
																		<button
																			type="button"
																			class="btn btn-default btn-number"
																			@click="addRemoveQuantity(index, 'remove')"
																			:class="[list.quantity == 0 ? 'disabled' : '']"
																		>
																			<span class="glyphicon glyphicon-minus"></span>
																		</button>
																	</span>
																	<input
																		type="text"
																		class="form-control input-number"
																		v-model="list.quantity"
																	/>
																	<span class="input-group-btn">
																		<button
																			type="button"
																			class="btn btn-default btn-number mt-1"
																			@click="addRemoveQuantity(index, 'add')"
																		>
																			<span class="glyphicon glyphicon-plus"></span>
																		</button>
																	</span>
																</div>
															</div>
															<p class="price">&#8377;{{ list.base_price }}</p>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div class="form-group">
											<h3 class="total-amount"> 
												Total: <span class="total-amount"> {{totalAmount}} &#8377; </span>
											</h3>
									</div>	
									<a type="submit"  :class="{ disabled: totalAmount < 1 }" href="https://api.whatsapp.com/send?text=Hi%2C%20I%27d%20like%20to%20place%20an%20order%20%F0%9F%91%87%0A%0ADelivery%20Order%20No%3A%20605%0A%0A---------%0A%F0%9F%94%981%20X%20Margherita(standard)%20-%20Rs%20250%0A%0A%F0%9F%94%982%20X%20Farm%20House(standard)%20-%20Rs%20300%0A%0A---------%0A%F0%9F%A7%BE%20Total%3A%20Rs%20550%0A---------%0A%0A%20%20%20%0A%F0%9F%97%92%20Comment%0A%20%20%20%0A%0A%F0%9F%93%8D%20Delivery%20Details%0A%0AClient%3A%20%0AAddress%3A%2028%2C%2018th%20Cross%20Rd%2C%20Sector%207%2C%20HSR%20Layout%2C%0ADelivery%20time%3A%2012%3A00%20-%2012%3A30%0A%0A%0A%0ARk%20Pizza%20will%20confirm%20your%20order%20upon%20receiving%20the%20message.%0A%0A%0A%20%20%20%0A%F0%9F%92%B3%20Payment%20Options%0AWe%20accept%20Cash%20On%20Delivery%20and%20direct%20payments.&phone=389%2071%20605%20048" class="btn botao-wpp">
									<i class="fa fa-whatsapp"></i>
									send whatsapp order
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
import { defineComponent, ref, useStore, watch } from '@nuxtjs/composition-api'

export default defineComponent({
		props: ['lists'],
		setup() {	
			const store = useStore()
			
			var orders = ref(0);
			watch(() => store.state.products,(newValue) => {
				orders.value = newValue
			})

			function addRemoveQuantity(index, type) {
				this.$parent.addRemoveQuantity(index, type)
			}

			let totalAmount = ref(0);
			watch(() => store.state.total,(newValue) => {
				totalAmount.value = newValue
			})
			
			return {
				orders,
				addRemoveQuantity,
				totalAmount
			}
		}
		
})
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