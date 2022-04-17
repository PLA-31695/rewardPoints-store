<template>
	<view class="category">
		<my-store-top></my-store-top>
		<my-tabbar></my-tabbar>
		<myContent>
			<view slot="title">
				<mySort></mySort>
			</view>
		</myContent>
	</view>
</template>

<script>
	import myTabbar from '../../components/myTabbar/myTabbar.vue'
	import myContent from '../../components/myContent/myContent.vue'
	import myStoreTop from '../../components/myStoreTop/myStoreTop.vue'
	import mySort from '../../components/mySort/mySort.vue'
	export default {
		components:{
			myStoreTop,
			myTabbar,
			myContent,
			mySort
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
		
	}
</style>
