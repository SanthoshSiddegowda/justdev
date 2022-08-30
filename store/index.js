export const strict = false;

export const state = () => ({
	total: 0,
	products: [],
	companyDetails: null,
});

export const mutations = {
	addToCart(state, product) {
		var exists = state.products.some(function (field) {
			return field.uuid === product.uuid;
		});
		if (!exists) {
			state.products.push(product);
		}
		state.total += Number(product.base_price);
	},

	reduceTotal(state, Price) {
		state.total -= Number(Price);
	},

	addCompanyDetails(state, details) {
		state.companyDetails = details;
	},
};

export const getter = {
	getCompanyDetails(state) {
		return state.companyDetails;
	},
};
