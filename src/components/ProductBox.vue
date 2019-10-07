<template>
  <div class="product-box">
    <div class="product-box__img">
      <img
        :src="product.image"
        alt=""
      >
    </div>
    <h4 class="product-box__title">
      {{ product.name }}
    </h4>
    <p class="product-box__body">
      {{ product.description }}
    </p>
    <span class="product-box__price">{{ product.price }} {{ product.currency }}</span>
    <BaseButton>ADD TO CART</BaseButton>
    <BaseButton
      @click="$emit('favorite', product)"
    >
      {{ favorite }}
    </BaseButton>
  </div>
</template>

<script>
import BaseButton from './BaseButton'
export default {
	name: 'ProductBox',
	components: {
		BaseButton
	},
	props: {
		product: {
			type: Object,
			required: true,
			default: () => ({
				image: null,
				name: null,
				description: null,
				price: null,
				currency: null
			})
		}
	},
	computed: {
		favorite () {
			return this.product.favorite ? '❤️' : '🖤'
		}
	}
}
</script>

<style lang='scss'>
	.product-box {
		border: 1px solid grey;
		margin: 20px;
		padding: 20px;
		flex: 0 0 25%;
	}
</style>
