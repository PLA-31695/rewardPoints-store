<template>
	<view>
		<view class="store_fix">
			<text>Vcharm积分商城</text>
		</view>
		
		<!-- 搜索区 -->
		<view class="search">
			<view class="search-left">
				<image src='../../static/login.png' mode="widthFix"></image>
				<text>请登录查看可用积分</text>
			</view>
			<view class="search-right">
				<uni-icons type="search" size="25" @click="search"></uni-icons>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"myStoreTop",
		data() {
			return {
				
			};
		},
		methods:{
			search(){
				uni.navigateTo({
					url:'../../pages/search/search'
					
				})
			}
		}
	}
</script>

<style lang="scss">
.store_fix {
			position: fixed;
			top: 0;
			left: 0;
			height: 80rpx;
			width: 100%;
			text-align: center;
			line-height: 80rpx;
			color: white;
			background-color: #252525;
			z-index: 999;
		}

		// 搜索
		.search {
			margin-top: 80rpx;
			display: flex;
			// justify-content: space-between;
			width: 100%;
			line-height: 80rpx;
			padding: 0 40rpx;
			border-bottom: 1px solid #f6f6f7;

			.search-left {
				width: 80%;

				image {
					width: 50rpx;
					vertical-align: middle;
				}

				text {
					margin-left: 16rpx;
					font-size: 24rpx;
				}
			}

			.search-right {
				width: 10%;
				text-align: center;
			}
		}

</style>
