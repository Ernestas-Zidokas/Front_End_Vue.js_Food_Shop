import axios from '@/packages/vue-axios'
import { FETCH_PRODUCTS, FETCH_PRODUCT } from './action-types'
import { REQUEST, ERROR, DONE } from './status-types'
import { SET_PRODUCTS, UPDATE_STATUS } from './mutation-types'

export default {
	async [FETCH_PRODUCTS] ({ commit, state }) {
		if (!state.products.length) {
			commit(UPDATE_STATUS, REQUEST)
			try {
				const { data } = await axios.get('/products')
				commit(SET_PRODUCTS, data)
				commit(UPDATE_STATUS, DONE)
			} catch (error) {
				commit(UPDATE_STATUS, ERROR)
			}
		}
	},

	async [FETCH_PRODUCT] ({ state }, id) {
		let product = state.products.find(product => product.id === id)
		if (product) {
			return product
		}
		const { data } = await axios.get(`/posts/${id}`)
		return data
	}
}
