<template>
	<div>
		<div class="container-fluid">
			<div class="row">
				<CafeBanner />
				<div class="col-sm-7 right-wrapper">
					<div class="event-ticket-wrapper">
						<div class="event-tab">
							<CafeNav @tabs="toggleTabs" />
							<!-- Tab panes -->
							<div class="tab-content">
								<CafeLists
									v-if="activeTab == 0"
									:lists="lists"
									@click="addRemoveQuantity()"
								/>
								<CafeReservation v-if="activeTab === 1" />
								<CafeTerms v-if="activeTab === 2" />
							</div>
							<CafeProceed
								:lists="lists"
								v-if="activeTab === 0"
							/>
						</div>
					</div>
				</div>
				<CafeCheckout :lists="lists" />
			</div>
		</div>
	</div>
</template>

<script>
import {
	defineComponent,
	ref,
	reactive,
	useStore,
} from "@nuxtjs/composition-api";
import { companyApi } from "@/api/company";

export default defineComponent({
	setup() {
		const { fetchCompany } = companyApi();
		const store = useStore();
		let activeTab = ref(0);

		const toggleTabs = function (tabNumber) {
			activeTab.value = tabNumber;
		};

		function addRemoveQuantity(index, type) {
			if (type == "add") {
				addQuantity(index);
			} else if (type == "remove") {
				removeQuantity(index);
			}
		}

		const loadCompany = async () => {
			const response = await fetchCompany();
			store.commit("addCompanyDetails", response.data);
		};
		loadCompany();

		let lists = reactive({
			items: [
				{
					uuid: 1,
					name: "Margherita",
					level: "Standard",
					price: 250,
					base_price: 250,
					quantity: 0,
					description:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
				},
				{
					uuid: 2,
					name: "Double Cheese Margherita",
					level: "Standard",
					price: 300,
					base_price: 300,
					quantity: 0,
					description:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
				},
				{
					uuid: 3,
					name: "Farm House",
					level: "Standard",
					price: 200,
					base_price: 200,
					quantity: 0,
					description:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
				},
				{
					uuid: 4,
					name: "Peppy Paneer",
					level: "Standard",
					price: 230,
					quantity: 0,
					base_price: 230,
					description:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
				},
				{
					uuid: 5,
					name: "Mexican Green Wave",
					level: "Standard",
					price: 280,
					quantity: 0,
					base_price: 280,
					description:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
				},
			],
			cart: [],
		});

		function addQuantity(index) {
			lists.items[index].quantity += 1;
			if (lists.items[index].quantity != 1) {
				lists.items[index].price += lists.items[index].base_price;
			}
			store.commit("addToCart", lists.items[index]);
		}

		function removeQuantity(index) {
			lists.items[index].quantity -= 1;
			lists.items[index].price -= lists.items[index].base_price;
			store.commit("reduceTotal", lists.items[index].base_price);
		}

		return {
			activeTab,
			lists,
			toggleTabs,
			addQuantity,
			removeQuantity,
			addRemoveQuantity,
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
