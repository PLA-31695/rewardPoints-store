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
					<view class="cart_item">
						<view class="cart_item_left">
							<radio :checked="item.goods_status" color="red" @click="radioChange(item)" />
							<image :src="item.goods_logo_img" mode="widthFix"></image>
						</view>
						<view class="cart_item_right">
							<view class="goods_name">
								<text>{{item.goods_name}}</text>
							</view>
							<view class="goods_integral">
								<view class="goods_integral_left">
									<image src="../../static/gold.png" mode="widthFix"></image>
									<text>{{item.goods_integral}}</text>
								</view>
								<view class="goods_integral_right">
									<uni-number-box :min='1' :value="item.count" @change='countHandle($event,item)'>
									</uni-number-box>
								</view>
							</view>
						</view>
					</view>

				</uni-swipe-action-item>
			</block>
		</uni-swipe-action>

		<view class="cart_bottom">
			<view class="cart_bottom_left">
				<radio @click="changeStatus()" :checked="getRadioStatus" /><text>全选</text>

			</view>
			<view class="cart_bottom_middle">
				<text>总计：</text>
				<image src="../../static/gold.png" mode="widthFix"></image>
				<text>{{getTotalPrice}}</text>
			</view>
			<view class="cart_bottom_right">
				<view class="button">去结算</view>
			</view>
		</view>

	</view>
</template>

<script>
	import {
		mapState,
		mapGetters,
		mapMutations
	} from 'vuex'
	export default {
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
			changeStatus() {
				// this.getRadioStatus = !this.getRadioStatus
				this.radioChange()
			},
			countHandle(val, cart) {
				let data = {
					val,
					cart
				}
				this.countsChange(data)
			}
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

	.cart_item {
		width: 100%;
		height: 240rpx;
		display: flex;
		justify-content: space-around;

		border-bottom: 1px solid #cccccc;

		.cart_item_left {
			width: 40%;
			display: flex;
			justify-content: space-around;
			align-items: center;

			image {
				width: 60%;
			}
		}

		.cart_item_right {
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			width: 70%;

			.goods_name {}

			.goods_integral {
				display: flex;
				justify-content: space-between;
				align-items: center;

				.goods_integral_left {
					image {
						width: 30rpx;
						vertical-align: middle;
					}

					text {
						color: #d95367;
					}
				}

				.goods_integral_right {
					margin-right: 50rpx;
				}
			}
		}
	}

	.cart_bottom {
		position: fixed;
		bottom: 0;
		left: 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 100rpx;
		width: 100%;
		line-height: 100rpx;
		box-shadow: -1px -1px 10px grey;

		.cart_bottom_left {
			margin-left: 40rpx;

			text {}
		}

		.cart_bottom_middle {
			flex: 1;
			margin-left: 20rpx;

			image {
				width: 30rpx;
				vertical-align: middle;
			}
		}

		.cart_bottom_right {
			.button {
				width: 310rpx;
				text-align: center;
				color: #ffffff;
				background-color: #c6001f;
			}
		}
	}
</style>
