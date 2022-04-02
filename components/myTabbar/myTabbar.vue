<template>
	<view class="tabbar">
		<view class="tabbar-item" @click="toIndex">
			<image src='../../static/tabbar1.png' mode="widthFix"></image>
			<text>推荐</text>
		</view>
		<view class="tabbar-item"  @click="toCate">
			<image src="../../static/tabbar2.png" mode="widthFix"></image>
			<text>优选好物</text>
		</view>
		<view class="tabbar-item"  @click="toCate">
			<image src="../../static/tabbar3.png" mode="widthFix"></image>
			<text>原厂配件</text>
		</view>
		<view class="tabbar-item"  @click="toCate">
			<image src="../../static/tabbar4.png" mode="widthFix"></image>
			<text>精选卡券</text>
		</view>
	</view>
</template>

<script>
	export default {
		name:"tabbar",
		data() {
			return {
				
			};
		},
		methods:{
			toIndex(){
				uni.navigateTo({
					url:'../../pages/index/index'
				})
			},
			toCate(){
				uni.navigateTo({
					url:'../../pages/category/category'
				})
			}
		}
	}
</script>

<style lang="scss">
	.tabbar{
			width: 100%;
			height: 200rpx;
			display: flex;
			justify-content: space-around;
			background-color: #FFFFFF;
			.tabbar-item{
				width: 25%;
				display: flex;
				flex-direction: column;
				align-items: center;
				image{
					width: 90rpx;
				}
				text{
					margin-top: 10rpx;
					font-size: 24rpx;
				}
			}
		}
</style>
