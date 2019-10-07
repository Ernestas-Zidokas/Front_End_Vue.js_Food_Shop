<template>
  <div class="product-view">
    <h2 v-if="isRequesting">
      Loading....
    </h2>
    <ProductBox
      v-for="product in products"
      :key="product.id"
      :product="product"
      :count="quantity[product.id]"
      @favorite="setFavorites(product.id)"
      @addToCart="addToCart"
      @removeFromCart="removeFromCart"
      @increaseCount="increaseCount"
      @decreaseCount="decreaseCount"
    />
  </div>
</template>

<script>
import ProductBox from '../../components/ProductBox'
import { createNamespacedHelpers } from 'vuex'
import { FETCH_PRODUCTS } from '../../store/modules/Products/action-types'
import { ADD_TO_CART, REMOVE_FROM_CART, INCREASE_QUANTITY, DECREASE_QUANTITY } from '../../store/modules/Cart/action-types'
import { FAVORITE_PRODUCT } from '../../store/modules/Products/mutation-types'
import { REQUEST } from '../../store/modules/Products/status-types'
const Products = createNamespacedHelpers(
	'Products'
)
const Cart = createNamespacedHelpers(
	'Cart'
)
export default {
	name: 'Products',
	components: {
		ProductBox
	},
	computed: {
		...Products.mapGetters({
			products: 'products',
			status: 'status'
		}),
		...Cart.mapGetters({
			quantity: 'quantity'
		}),
		isRequesting () {
			return this.status === REQUEST
		}
	},
	created () {
		this.fetchProducts()
	},
	methods: {
		...Products.mapActions({
			fetchProducts: FETCH_PRODUCTS
		}),
		...Products.mapMutations({
			setFavorites: FAVORITE_PRODUCT
		}),
		...Cart.mapActions({
			addToCart: ADD_TO_CART,
			removeFromCart: REMOVE_FROM_CART,
			increaseCount: INCREASE_QUANTITY,
			decreaseCount: DECREASE_QUANTITY
		})
	}
}
</script>

<style lang='scss'>
	.product-view {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}
</style>
