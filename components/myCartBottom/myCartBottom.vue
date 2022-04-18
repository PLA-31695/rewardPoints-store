<template>
	<view class="my-bottom">
		<view class="cart_bottom_left" v-if="rightShow">
			<radio @click="changeStatus()" :checked="getRadioStatus" /><text>全选</text>

		</view>
		<view class="cart_bottom_middle" v-if="middleShow">
			<text>总计：</text>
			<image src="../../static/gold.png" mode="widthFix"></image>
			<text>{{getTotalPrice}}</text>
		</view>
		<view class="cart_bottom_right">
			<slot name="button"></slot>
			<!-- <view class="button" @click="navOrder()">去结算</view> -->
			
		</view>
	</view>
</template>

<script>
	import {mapMutations,mapGetters} from 'vuex'
	export default {
		computed:{
			...mapGetters('m_cart',['getRadioStatus','getTotalPrice'])
		},
		props: {
			rightShow:{
				type:Boolean,
				default:true
			},
			middleShow:{
				type:Boolean,
				default:true
			},
		},
		name: "myCartBottom",
		data() {
			return {

			};
		},
		methods:{
			...mapMutations('m_cart', ['radioChange', 'countsChange','delCart']),
			changeStatus() {
				// this.getRadioStatus = !this.getRadioStatus
				this.radioChange()
			},
		}
	}
</script>

<style lang="scss">
	.my-bottom {
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
