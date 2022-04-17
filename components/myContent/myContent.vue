<template>
	<view class="content">
		<view class="recommend">
			<view class="recommend-title">
				<slot name="title"></slot>
			</view>
			<view class="recommend-content">
				<view class="goods-item" v-for="(item,index) in goods" :key='index' @click="goods_detail(item.id)">
					<view class="goods-img">
						<image :src='item.goods_logo_image' mode="widthFix"></image>
					</view>
					<text class="goods-name">{{item.goods_name}}</text>
					<view class="goods-price">
						<image src="../../static/gold.png" mode="widthFix"></image>
						<text>{{item.goods_integral}}</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "myContent",
		props: {
			goods: {
				type: Array,
				default: []
			}
		},
		data() {
			return {

			};
		},
		methods:{
			goods_detail(id){
				
				uni.navigateTo({
					url:'../../pages/detail/detail?goods_id=' + id
				})
			}
		}
	}
</script>

<style lang="scss">
	.content {
		margin-top: 20rpx;

		.recommend {
			.recommend-title {
				height: 100rpx;
				width: 100%;
				line-height: 100rpx;
				padding-left: 20rpx;
				font-size: 32rpx;
				background-color: #FFFFFF;
			}

			.recommend-content {
				display: flex;
				flex-wrap: wrap;
				width: 100%;
				justify-content: space-between;

				.goods-item {
					width: 50%;
					display: flex;
					flex-direction: column;
					background-color: #FFFFFF;
					margin-top: 2px;
					border-left: 2px solid #f6f6f7;
					box-sizing: border-box;

					.goods-img {
						image {
							display: block;
							width: 50%;
							margin: 40rpx auto
						}
					}

					.goods-name {
						margin-left: 20rpx
					}

					.goods-price {
						margin: 60rpx 0 0 20rpx;

						image {
							width: 26rpx;
							vertical-align: middle;
						}

						text {
							margin-left: 10rpx;
							color: #d95367;
							font-size: 30rpx;
						}
					}
				}
			}
		}
	}
</style>
