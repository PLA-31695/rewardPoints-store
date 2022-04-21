<template>
	<view class="page-top">
		<uni-icons type="left" size="20" color="white" @click="navBack"></uni-icons>
		<slot name="text"></slot>
	</view>
</template>

<script>
	export default {
		name: "myPageTop",
		data() {
			return {

			};
		},
		methods:{
			navBack(){
				uni.navigateBack()
			}
		}
	}
</script>

<style lang="scss">
.page-top {
			height: 80rpx;
			color: #FFFFFF;
			background-color: #252525;
			line-height: 80rpx;
			font-weight: bold;
			text-align: center;
			padding: 0 20rpx;

			uni-icons {
				float: left;
			}
		}
</style>
