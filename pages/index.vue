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
									:companyCustomDetails="companyCustomDetails"
									@click="addRemoveQuantity()"
								/>
								<CafeReservation v-if="activeTab === 2" />
								<CafeTerms v-if="activeTab === 1" />
							</div>
							<CafeProceed
								:companyCustomDetails="companyCustomDetails"
								v-if="activeTab === 0"
							/>
						</div>
					</div>
				</div>
				<CafeCheckout
					:lists="lists"
					:companyCustomDetails="companyCustomDetails"
				/>
			</div>
		</div>
	</div>
</template>

<script>
import {
	defineComponent,
	ref,
	watch,
	useStore,
	useMeta,
} from "@nuxtjs/composition-api";
import { companyApi } from "@/api/company";
import { productApi } from "@/api/product";

export default defineComponent({
	head: {},
	setup() {
		const { fetchCompany } = companyApi();
		const { fetchProducts } = productApi();
		const store = useStore();
		let activeTab = ref(0);
		let lists = ref({
			items: [],
		});
		let companyCustomDetails = ref("");

		const { title } = useMeta();

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
			store.commit("addCompanyDetails", response);
		};
		loadCompany();

		watch(
			() => store.state.companyDetails,
			(details) => {
				companyCustomDetails.value = JSON.parse(details.custom_data);
				title.value = details.name;
				const loadProducts = async () => {
					const response = await fetchProducts(details.uuid);
					lists.value.items = response;
				};
				loadProducts();
			}
		);

		function addQuantity(index) {
			lists.value.items[index].quantity += 1;
			lists.value.items[index].total_price =
				lists.value.items[index].price;
			store.commit("addToCart", lists.value.items[index]);
		}

		function removeQuantity(index) {
			lists.value.items[index].quantity -= 1;
			lists.value.items[index].total_price -= Number(
				lists.value.items[index].price
			);
			store.commit("reduceTotal", lists.value.items[index].price);
		}

		return {
			activeTab,
			lists,
			companyCustomDetails,
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
