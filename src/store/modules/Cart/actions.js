import { ADD_TO_CART, REMOVE_FROM_CART, INCREASE_QUANTITY, DECREASE_QUANTITY } from './action-types'
import { SET_CART_ITEM, REMOVE_CART_ITEM, SET_QUANTITY } from './mutation-types'

export default {
	[ADD_TO_CART] ({ commit, dispatch }, product) {
		commit(SET_CART_ITEM, product)
		dispatch(INCREASE_QUANTITY, product)
	},
	[REMOVE_FROM_CART] ({ commit, state }, product) {
		let items = state.items.filter(item => item.id !== product.id)
		commit(REMOVE_CART_ITEM, items)
	},
	[INCREASE_QUANTITY] ({ commit, state }, product) {
		let ID = product.id
		if (state.quantity[ID]) {
			let quantity = state.quantity[ID] + 1
			commit(SET_QUANTITY, { quantity, ID })
		} else {
			commit(SET_QUANTITY, { quantity: 1, ID })
		}
	},
	[DECREASE_QUANTITY] ({ commit, state, dispatch }, product) {
		let ID = product.id
		if (state.quantity[ID] > 0) {
			let quantity = state.quantity[ID] - 1
			commit(SET_QUANTITY, { quantity, ID })
		} else {
			dispatch(REMOVE_FROM_CART, product)
		}
	}
}
