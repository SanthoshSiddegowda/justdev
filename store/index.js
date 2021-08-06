export const strict = false;

export const state = () => ({
	products: [],
	total: 0
  })
  
export const mutations = {
	
	addToCart(state, product) {
		var exists = state.products.some(function(field) {
			return field.product.uuid === product.uuid
		});
		if(!exists) {
			state.products.push({product})
		} 
		state.total += product.base_price
	},

	reduceTotal(state, Price) {
		state.total -= Price
	}
	
}