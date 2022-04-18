<template>
	<view class="cart">
		<view class="cart_top">
			<uni-icons type="left" size="20" color="white"></uni-icons>
			<text>购物车</text>
		</view>
		<view class="cart-show">
			<text>共{{cart.length}}件商品</text>
		</view>
		<uni-swipe-action>
			<block v-for="(item,index) in cart" :key="index">
				<uni-swipe-action-item :right-options='options' @click="delCart(item)">
					<my-goods :item='item'></my-goods>
				</uni-swipe-action-item>
			</block>
		</uni-swipe-action>

		<!-- <view class="cart_bottom">
			<view class="cart_bottom_left">
				<radio @click="changeStatus()" :checked="getRadioStatus" /><text>全选</text>

			</view>
			<view class="cart_bottom_middle">
				<text>总计：</text>
				<image src="../../static/gold.png" mode="widthFix"></image>
				<text>{{getTotalPrice}}</text>
			</view>
			<view class="cart_bottom_right">
				<view class="button" @click="navOrder()">去结算</view>
			</view>
		</view> -->
		<my-cart-bottom>
			<view class="button" @click="navOrder()" slot='button'>去结算</view>
		</my-cart-bottom>
	</view>
</template>

<script>
	import myGoods from '../../components/myGoods/myGoods.vue'
	import myCartBottom from '../../components/myCartBottom/myCartBottom.vue'
	import {
		mapState,
		mapGetters,
		mapMutations
	} from 'vuex'
	export default {
		components:{
			myGoods,
			myCartBottom,
		},
		computed: {
			...mapState('m_cart', ['cart']),
			...mapGetters('m_cart', ['getCounts', 'getRadioStatus', 'getTotalPrice'])
		},
		data() {
			return {

				options: [{
					text: '删除',
					style: {
						backgroundColor: '#c00000'
					}
				}]
			};
		},
		methods: {
			...mapMutations('m_cart', ['radioChange', 'countsChange','delCart']),
			navOrder(){
				uni.navigateTo({
					url:'../order/order'
				})
			},
			changeStatus() {
				// this.getRadioStatus = !this.getRadioStatus
				this.radioChange()
			},
			
		}
	}
</script>

<style lang="scss">
	.cart_top {
		height: 80rpx;
		color: #FFFFFF;
		background-color: #252525;
		line-height: 80rpx;
		font-weight: bold;
		text-align: center;
		padding: 0 20rpx;

		uni-icons {
			float: left;
		}
	}

	.cart-show {
		height: 80rpx;
		background-color: #f6f6f7;
		line-height: 80rpx;
		color: #848484;
		font-size: 28rpx;
	}

	

	.button {
		width: 310rpx;
		text-align: center;
		color: #ffffff;
		background-color: #c6001f;
	}
	
</style>
