<template>
	<div>
		<div class="row">
			<div
				v-for="(list, index) in lists.items"
				:key="list.item"
				class="col-md-6"
			>
				<div class="ticketBox">
					<div class="inactiveStatus"></div>
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
												@click="
													addRemoveQuantity(
														index,
														'remove'
													)
												"
												:class="[
													list.quantity == 0
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
											v-model="list.quantity"
										/>
										<span class="input-group-btn">
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
									&#8377;{{ list.base_price }}
								</p>
							</div>
						</div>
					</div>
					<div class="ticket-description">
						<p>
							<strong>Description:</strong> <br />{{
								list.description
							}}
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { defineComponent, reactive } from "@nuxtjs/composition-api";

export default defineComponent({
	props: ["lists"],
	setup() {
		function addRemoveQuantity(index, type) {
			this.$parent.addRemoveQuantity(index, type);
		}

		return {
			addRemoveQuantity,
		};
	},
});
</script>

<style></style>
