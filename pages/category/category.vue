<template>
	<view class="category">
		<my-store-top></my-store-top>
		<my-tabbar></my-tabbar>
		<myContent>
			<view class="sort" slot="title">
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
		</myContent>
	</view>
</template>

<script>
	import myTabbar from '../../components/myTabbar/myTabbar.vue'
	import myContent from '../../components/myContent/myContent.vue'
	import myStoreTop from '../../components/myStoreTop/myStoreTop.vue'
	export default {
		components:{
			myStoreTop,
			myTabbar,
			myContent
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
	.category{
		background-color: #f6f6f7;
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
	}
</style>
