<template>
  <div class="product-view">
    <h2 v-if="isRequesting">
      Loading....
    </h2>
    <ProductBox
      v-for="product in products"
      :key="product.id"
      :product="product"
      @favorite="setFavorites(product.id)"
    />
  </div>
</template>

<script>
import ProductBox from '../../components/ProductBox'
import { createNamespacedHelpers } from 'vuex'
import { FETCH_PRODUCTS } from '../../store/modules/Products/action-types'
import { FAVORITE_PRODUCT } from '../../store/modules/Products/mutation-types'
import { REQUEST } from '../../store/modules/Products/status-types'
const { mapActions, mapGetters, mapMutations } = createNamespacedHelpers(
	'Products'
)
export default {
	name: 'Products',
	components: {
		ProductBox
	},
	computed: {
		...mapGetters({
			products: 'products',
			status: 'status'
		}),
		isRequesting () {
			return this.status === REQUEST
		}
	},
	created () {
		this.fetchProducts()
	},
	methods: {
		...mapActions({
			fetchProducts: FETCH_PRODUCTS
		}),
		...mapMutations({
			setFavorites: FAVORITE_PRODUCT
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
