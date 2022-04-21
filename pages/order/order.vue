<template>
	<view class="order">
		<myPageTop>
			<text slot='text'>填写订单</text>
		</myPageTop> 
		<view class="my-address" v-if="address" @click="chooseAddress">
				<my-address :address="defAddress" :isShow="false" >
					<uni-icons slot='icon' type="right" size="30" ></uni-icons>
				</my-address>
		</view>
		<view class="address" @click="chooseAddress" v-else>
			<text>请选择地址</text>
		</view>
		<view class="order-info">
			<text>商品信息</text>
		</view>
		<view class="order-list">
			<block v-for="(item,index) in cart" :key="index">
				<myGoods :item="item" :show="false"></myGoods>
			</block>
		</view>
		<view class="remark">
			<text>订单备注</text>
			<textarea type="text" value="" placeholder="选填,如需备注,请输入" />
		</view>
		<view class="order-total">
			<text>商品合计</text>
			<view>
				<image src="../../static/gold.png" mode="widthFix"></image>
				{{getTotalPrice}}
			</view>
		</view>
		<view class="order-total order-preferential">
			<text>优惠</text>
			<view>
				<image src="../../static/gold.png" mode="widthFix"></image>
				0
			</view>
		</view>
		<my-cart-bottom :rightShow="false">
			<view class="button" slot='button'>
				<text>立即兑换</text>
			</view>
		</my-cart-bottom>
	</view>
</template>

<script>
	import myCartBottom from '../../components/myCartBottom/myCartBottom.vue'
	import myPageTop from '../../components/myPageTop/myPageTop.vue'
	import myGoods from '../../components/myGoods/myGoods.vue'
	import myAddress from '../../components/my-address/my-address.vue'
	
	import {mapState,mapGetters} from 'vuex'
	export default {
		components:{
			myPageTop,
			myGoods,
			myCartBottom,
			myAddress
		},
		computed:{
			...mapState('m_cart',['cart']),
			...mapGetters('m_cart',['getTotalPrice']),
			...mapState('m_user',['address'])
		},
		data() {
			return {
				defAddress:[]
			};
		},
		methods:{
			chooseAddress(){
				uni.navigateTo({
					url:'../address/address'
				})
			}
		},
		onLoad(){
			this.defAddress.push(this.address[0])
		}
		
	}
</script>

<style lang="scss">
.order{
	background-color: #f6f6f7;
	.address{
		width: 100%;
		height: 200rpx;
		color: #d33b53;
		line-height: 200rpx;
		text-align: center;
		border-bottom:1px dashed red;
	}
	.order-info{
		width: 100%;
		height: 100rpx;
		line-height: 100rpx;
		padding-left: 40rpx;
		font-size: 28rpx;
		background-color: #ffffff;
		border-bottom:1px solid #cccccc;
	}
	.order-list{
		background-color: #ffffff;
	}
	.remark{
		display: flex;
		justify-content: space-between;
		height: 140rpx;
		background-color: #ffffff;
		padding-left: 40rpx;
		font-size: 28rpx;
		textarea{
			width: 70%;
			height: 140rpx;
			font-size: 24rpx;
		}
	}
	.order-total{
		display: flex;
		height: 100rpx;
		justify-content: space-between;
		align-items: center;
		margin-top: 20rpx;
		padding:0 40rpx;
		font-size: 28rpx;
		border-bottom: 1px solid #cccccc;
		background-color: #ffffff;
		image{
			width: 30rpx;
			vertical-align: middle;
		}
	}
	.order-preferential{
		margin: 0;
	}
	
	.button {
		width: 310rpx;
		text-align: center;
		color: #ffffff;
		background-color: #c6001f;
	}
}
</style>
