<template>
	<view class='address'>
		<myPageTop>
			<text slot='text'>地址管理 </text>
		</myPageTop>
		<my-address :address="address">
		</my-address>
		<myCartBottom :rightShow="false" :middleShow="false">
			<view class="button" slot='button' @click="add">
				<text>添加新地址</text>
			</view>
		</myCartBottom>
	</view>
</template>

<script>
	import myPageTop from '../../components/myPageTop/myPageTop.vue'
	import myCartBottom from '../../components/myCartBottom/myCartBottom.vue'
	import myAddress from '../../components/my-address/my-address.vue'

	import {
		mapState,
		mapMutations,
		
	} from 'vuex'
	export default {
		computed: {
			...mapState('m_user', ['address'])
		},
		components: {
			myPageTop,
			myCartBottom,
			myAddress
		},
		data() {
			return {
				
			};
		},
		methods: {
			...mapMutations('m_user', ['addAddress', "delAddress",'changeDef']),
			add() {
				uni.navigateTo({
					url: '../addAddress/addAddress'
				})
			},
			change(item){
				this.isDef = !this.isDef
				this.changeDef(item)
			}
		}
	}
</script>

<style lang="scss">
	.address {
		height: 100vh;
		background-color: #f6f6f7;

		.button {
			width: 100vw;
			text-align: center;
			color: #ffffff;
			background-color: #c6001f;
		}
	}
</style>
