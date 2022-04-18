<template>
	<view>
		<myPageTop>
			<text slot='text'>地址管理 </text>
		</myPageTop>
		<myCartBottom :rightShow="false"  :middleShow="false">
			<view class="button" slot='button' @click="add">
				<text>添加新地址</text>
			</view>
		</myCartBottom>
	</view>
</template>

<script>
	import myPageTop from '../../components/myPageTop/myPageTop.vue'
	import myCartBottom from '../../components/myCartBottom/myCartBottom.vue'
	export default {
		components:{
			myPageTop,
			myCartBottom,
		},
		data() {
			return {
				
			};
		},
		methods:{
			add(){
				uni.navigateTo({
					url:'../addAddress/addAddress'
				})
			}			
		}
	}
</script>

<style lang="scss">
	.button {
		width: 100vw;
		text-align: center;
		color: #ffffff;
		background-color: #c6001f;
	}
</style>
