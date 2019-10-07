import { SET_PRODUCTS, UPDATE_STATUS, FAVORITE_PRODUCT } from './mutation-types'
export default {
	[SET_PRODUCTS] (state, products) {
		state.products = products.map((product, index) => {
			product.id = index + 1
			product.image = `${product.image}?c=${index + 1}`
			return product
		})
	},
	[UPDATE_STATUS] (state, status) {
		state.status = status
	},
	[FAVORITE_PRODUCT] (state, id) {
		const exists = state.favorite.includes(id)
		if (exists) {
			state.favorite = state.favorite.filter(product => product !== id)
		} else {
			state.favorite = [...state.favorite, id]
		}
		localStorage.setItem('favorite', JSON.stringify(state.favorite))
	}
}
