<template>
	<view class="sort">
		<view class="sort-item">
			<text>综合</text>
			<uni-icons type="bottom" size="17"></uni-icons>
		</view>
		<view class="sort-item">
			<text>积分</text>
			<uni-icons type="bottom" size="17"></uni-icons>
		</view>
		<view class="sort-item">
			<text>兑换量</text>
			<uni-icons type="bottom" size="17"></uni-icons>
		</view>
		<view class="sort-item">
			<text>筛选</text>
			<uni-icons type="settings-filled" size="17"></uni-icons>
		</view>
	</view>
</template>

<script>
	export default {
		name:"mySort",
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
	.sort{
		display: flex;
		justify-content: space-between;
		.sort-item{
			width: 20%;
			text-align: center;
			color: #666666;
			text{
				font-size: 28rpx;
			}
		}
		.sort-item:nth-child(4){
			width: 40%;
			text-align: center;
			color: #666666;
			text{
				font-size: 28rpx;
			}
		}
	}
</style>
