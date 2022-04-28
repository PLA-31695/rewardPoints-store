<template>
	<view class="goods_detail">
		<my-page-top>
			<text slot='text'>{{goods_detail.goods_name}}</text>
		</my-page-top>
		<view class="detail_product">
			<view class="product_item">
				<text>商品</text>
			</view>
			<view class="product_item">
				<text>详情</text>
			</view>
		</view>
		

		<!-- 轮播图 -->
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item v-for="(item,index) in goods_detail.swiper" :key='index'>
				<view class="swiper-item">
					<image :src="item" mode="widthFix"></image>
				</view>
			</swiper-item>
		</swiper>

		<!-- 商品信息 -->
		<view class="detail-info">
			<view class="info-name">
				<text>{{goods_detail.goods_name}}</text>
			</view>
			<view class="info-price">
				<image src="../../static/gold.png" mode="widthFix"></image>
				<text>{{goods_detail.goods_integral}}</text>
			</view>
		</view>
		<view class="detail-choose">
			<text>选择规格</text>
			<uni-icons type="right" size="13"></uni-icons>
		</view>

		<rich-text :nodes="goods_detail.goods_introduce"></rich-text>

		<!-- 底部导航 -->
		<view class="detail-bottom">
			<uni-goods-nav :fill="true" :options="options" :buttonGroup="buttonGroup" @click="onClick"
				@buttonClick="buttonClick" />
		</view>
	</view>
</template>

<script>
	import {mapState,mapMutations,mapGetters} from 'vuex'
	import myPageTop from '../../components/myPageTop/myPageTop.vue'
	export default {
		components:{
			myPageTop
		},
		computed:{
			...mapState('m_user',['openid']),
			...mapState('m_cart',['cart']),
			...mapGetters('m_cart',['getCounts'])
		},
		data() {
			return {
				goods_detail: [],
				goods_id:'',
				count:2,
				options: [{
					icon: 'home',
					text: '首页'
				}, {
					icon: 'cart',
					text: '购物车',
					info:0
				}],
				buttonGroup: [{
						text: '加入购物车',
						backgroundColor: '#ff0000',
						color: '#fff'
					},
					{
						text: '立即兑换',
						backgroundColor: '#ffa200',
						color: '#fff'
					}
				]
			};
		},
		onLoad(option) {
			this.goods_id = option.goods_id
			if(this.openid){
				this.options[1].info = this.getCounts
			}
			uni.request({
				url: 'http://127.0.0.1:8000/goods/detail',
				data: {
					goods_id: option.goods_id
				},
				success: (res) => {
					// console.log(res.data)
					this.goods_detail = res.data
					console.log(this.goods_detail)
				}
			})
		},
		onShow() {
		},
		methods: {
			...mapMutations('m_user',['updataOpenId','updataIntegral']),
			...mapMutations('m_cart',['updateCart','addCart']),
			onClick(e) {
				if(e.content.text === '购物车'){
					uni.navigateTo({
						url:'../cart/cart'
					})
				}else{
					uni.navigateTo({
						url:'../index/index'
					})
				}
			},
			buttonClick(e) {
				console.log(e)
				if(this.openid){
					this.addCart(this.goods_detail)
					this.options[1].info = this.getCounts
				}else{
					uni.getUserProfile({
						desc: '登录授权',
						success: async (res) => {
							const result = await uni.login({
								provider: 'weixin',
							})
							console.log(result)
							uni.request({
								url: 'http://127.0.0.1:8000/user/login',
								method: 'POST',
								header: {
									'content-type': 'application/x-www-form-urlencoded'
								},
								data: {
									user_info: res.rawData,
									user_code: result[1].code
								},
								success: (res) => {
									console.log(res)
									if(res.data.openid){
										this.updataOpenId(res.data.openid)
										this.updataIntegral(res.data.integral)
									}
								}
							})
						}
					})
				}
				
			}
		}
	}
</script>

<style lang="scss">
	.goods_detail {
		position: relative;
		.detail_product {
			height: 80rpx;
			display: flex;
			justify-content: space-between;
			line-height: 80rpx;

			.product_item {
				width: 50%;
				text-align: center;
				font-size: 32rpx;

				text {
					display: inline-block;
					height: 77rpx;
					border-bottom: 2px solid #c6001f;
				}
			}
		}

		swiper {
			height: 750rpx;

			.swiper-item {
				image {
					width: 100%;
				}
			}
		}

		.detail-info {
			height: 200rpx;
			border-bottom: 2px solid #cccccc;

			.info-name {
				padding: 30rpx;
				font-size: 36rpx;
				font-weight: bold;
			}

			.info-price {
				margin-top: 20rpx;
				padding-left: 30rpx;

				image {
					width: 30rpx;
					vertical-align: middle;
				}

				text {
					color: #c6001f;
					font-size: 36rpx;
				}
			}
		}

		.detail-choose {
			display: flex;
			justify-content: space-between;
			height: 100rpx;
			line-height: 100rpx;
			padding: 0 30rpx;
			border-bottom: 1px solid #cccccc;
			font-size: 28rpx;
		}


		.detail-bottom {
			width: 100%;
			position: sticky;
			bottom: 0;
			left: 0;
			background-color: #FFFFFF;
		}
	}
</style>
