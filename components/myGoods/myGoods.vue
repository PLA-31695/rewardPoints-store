<template>
	<view class="my-goods">
				<view class="cart_item">
					<view class="cart_item_left">
						<radio :checked="item.goods_status" color="red" @click="radioChange(item)" v-if="show"/>
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
								<uni-number-box :min='1' :value="item.count" @change='countHandle($event,item)' v-if="show">
								</uni-number-box>
								<text v-else>x{{item.count}}</text>
							</view>
						</view>
					</view>
				</view>
	</view>
</template>

<script>
	import {mapMutations} from 'vuex'
	export default {
		name:"myGoods",
		props:{
			item:{
				type:Object,
				default:{}
			},
			show:{
				type:Boolean,
				default:true
			}
		},
		data() {
			return {
				
			};
		},
		methods:{
			...mapMutations('m_cart',['radioChange','countsChange']),
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
	.my-goods{
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
	}
</style>
