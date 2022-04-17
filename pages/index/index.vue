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
	</view>
</template>

<script>
	import myTabbar from '../../components/myTabbar/myTabbar.vue'
	import myContent from '../../components/myContent/myContent.vue'
	import myStoreTop from '../../components/myStoreTop/myStoreTop.vue'
	export default {
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
	
	}
</style>
