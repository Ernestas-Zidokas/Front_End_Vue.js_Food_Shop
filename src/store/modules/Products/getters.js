export default {
	status: state => state.status,
	products: state => {
		return state.products.map(product => {
			product = { ...product }
			product.favorite = state.favorite.includes(product.id)
			return product
		})
	}
}
