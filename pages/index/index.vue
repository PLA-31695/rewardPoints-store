<template>
	<view class="store">
		<!-- 顶部标题栏 -->
		<my-store-top></my-store-top>

		<!-- 导航区 -->

		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" style="height: 400rpx;">
			<swiper-item>
				<view class="swiper-item">
					<image src="../../static/swiper.jpg" mode="widthFix"></image>
				</view>
			</swiper-item>
		</swiper>

		<!-- tabbar -->
		<my-tabbar></my-tabbar>

		<!-- 内容区 -->
		<my-content :goods='goods_new'>
			<text slot="title">新品上新</text>
		</my-content>
		<my-content>
			<text slot="title">优品好物</text>
		</my-content>
		<my-content>
			<text slot="title">原厂配件</text>
		</my-content>
		<my-content>
			<text slot="title">精选卡券</text>
		</my-content>
		<view class="cart-card" @click="goCart">
			<uni-icons type="cart" size="35" color="white"></uni-icons>
		</view>
	</view>
</template>

<script>
	import myTabbar from '../../components/myTabbar/myTabbar.vue'
	import myContent from '../../components/myContent/myContent.vue'
	import myStoreTop from '../../components/myStoreTop/myStoreTop.vue'
	
	import {mapState,mapMutations} from 'vuex'
	
	import {nav} from '../../utils/router.js'
	
	export default {
		computed:{
			...mapState('m_user',['openid'])
		},
		
		components: {
			myTabbar,
			myContent,
			myStoreTop
		},
		data() {
			return {
				goods_new:[]
			}
		},
		onLoad() {
			uni.request({
				url:'http://127.0.0.1:8000/goods/news',
				success:(res) =>{
					console.log(res.data)
						this.goods_new = res.data
					}
			})
		},
		methods: {
			...mapMutations('m_user',['updataOpenId','updataIntegral']),
			async goCart(){
				let res = await nav('/pages/cart/cart',this.openid)
				console.log(res)
				if(res){
					this.updataOpenId(res[1].data.openid)
					this.updataIntegral(res[1].data.integral)
				}
				
			}
		}
	}
</script>

<style lang="scss">
	.store {
		background-color: #f6f6f7;
		
		// 导航
		swiper {
			margin-top: 20rpx;

			.swiper-item {
				image {
					width: 100%;
				}
			}
		}
		// tabbar
	.cart-card{
		position: fixed;
		bottom: 60rpx;
		right: 30rpx;
		height: 100rpx;
		width: 100rpx;
		border-radius: 50%;
		background-color: #c6001f;
		line-height: 100rpx;
		text-align: center;
	}
	}
</style>
