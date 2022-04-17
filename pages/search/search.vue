<template>
	<view class="search">
		<view class="search-top">
			<uni-search-bar @confirm="search" @input="input" placeholder="请输入搜索内容"></uni-search-bar>
		</view>

		<myContent :goods='search' v-if='search.length !== 0'>
			<view slot='title'>
				<my-sort></my-sort>
			</view>
		</myContent>
	</view>

</template>

<script>
	import MyContent from '../../components/myContent/myContent.vue'
	import mySort from '../../components/mySort/mySort.vue'
	export default {
		components: {
			MyContent,
			mySort
		},
		data() {
			return {
				search: [],
				timer:null,
				keyword:[]
			};
		},
		methods: {
			input(e) {
				clearTimeout(this.timer)
				let flag = true
				if (flag) {
					flag = false
					console.log(flag)
					 this.timer = setTimeout(() => {
						console.log(e)
						flag = true
						uni.request({
							url:'http://127.0.0.1:8000/goods/search',
							data:{
								 goods_name:e
							},
							success:(res)=>{
								console.log(res)
								this.search = res.data
							}
						})
					}, 2000)
				}
			}
		}
	}
</script>

<style lang="scss">
	.search {
		background-color: #f6f6f7;

		.search-top {
			background-color: #FFFFFF;
		}
	}
</style>
