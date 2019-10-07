import { SET_CART_ITEM, REMOVE_CART_ITEM, SET_QUANTITY } from './mutation-types'

export default {
	[SET_CART_ITEM] (state, product) {
		state.items.push(product)
		sessionStorage.setItem('cart', JSON.stringify(state.items))
	},
	[REMOVE_CART_ITEM] (state, items) {
		state.items = items
		sessionStorage.setItem('cart', JSON.stringify(state.items))
	},
	[SET_QUANTITY] (state, { quantity, ID }) {
		state.quantity = { ...state.quantity, [ID]: quantity }
		sessionStorage.setItem('quantity', JSON.stringify(state.quantity))
	}
}
