<template>
	<view class="addAddress">
		<myPageTop>
			<text slot='text'>新增地址</text>
		</myPageTop>
		<view class="form username">
			<text>姓名</text>
			<input type="text" v-model="username" placeholder="输入收货人姓名" />
		</view>
		<view class="form telephone">
			<text>手机号码</text>
			<input type="text" v-model="telephone" placeholder="输入手机号码" />
		</view>
		<view class="form area">
			<text>所在地区</text>
			<view class="chooseArea">
				<picker-address @change='change' class="picker">
					{{values}}
					<uni-icons type="right" size="15"></uni-icons>
				</picker-address>

			</view>

		</view>
		<view class="form address-detail">
			<text>详细地址</text>
			<input type="text" v-model="detailAddress" placeholder="街道,楼牌号等详细地址" />
		</view>
		<view class="radioAdd" @click="radioChange">
			<radio value="" :checked='isShow' color="red"/><text>设置为默认地址</text>
		</view>
		<view class="button" @click="saveAddress">
			<text>保存</text>
		</view>
	</view>
</template>

<script>
	import myPageTop from '../../components/myPageTop/myPageTop.vue'
	import pickerAddress from '../../components/pickerAddress/pickerAddress.vue'
	
	import {mapMutations} from 'vuex'
	export default {
		computed:{
			
		},
		components: {
			myPageTop,
			pickerAddress
		},
		data() {
			return {
				isShow:false,
				status:0,
				values: '选择所在省份，城市，区县',
				username: '',
				telephone: '',
				detailAddress: ''
			}
		},
		methods: {
			...mapMutations('m_user',['addAddress']),
			change(data) {
				this.values = data.data.join('-')
			},
			radioChange(){
				this.isShow = !this.isShow
				if(this.isShow){
					this.status = true
				}
			},
			saveAddress() {
				let regExp = new RegExp("^1[3578]\\d{9}$")
				if (this.username === '') {
					uni.showToast({
						title: "姓名不能为空",
						icon: 'error'
					})
				} else if (this.values === '选择所在省份，城市，区县' || this.detailAddress === '') {
					uni.showToast({
						title: "地址不能为空",
						icon: 'error'
					})
				} else if (regExp.test(this.telephone)) {
					let addressInfo = {
						'status':this.status,
						'name': this.username,
						'telephone': this.telephone,
						'address': this.values + this.detailAddress
					}
					this.addAddress(addressInfo)
					uni.navigateTo({
						url:'../address/address'
					})
				} else {
					uni.showToast({
						title: '手机号有误',
						icon: 'error'
					})
				}
				
			}
		}
	}
</script>

<style lang="scss">
	.addAddress {
		background-color: #f6f6f7;

		.form {
			display: flex;
			justify-content: space-between;
			height: 100rpx;
			width: 100%;
			line-height: 100rpx;
			border-bottom: 1px solid #cccccc;
			padding: 0 30rpx;
			background-color: #ffffff;

			text {
				font-size: 28rpx;
				width: 220rpx;
			}

			.chooseArea {
				color: #808080;
				margin-right: 40rpx;

				.picker {
					font-size: 24rpx;
				}
			}

			input {
				flex: 1;
				height: 100rpx;
				font-size: 24rpx;
				text-align: right;
				padding-right: 50rpx;
			}
		}

		.username {
			margin-top: 30rpx;
		}

		.radioAdd {
			margin-top: 40rpx;
			text-align: center;
		}

		.button {
			height: 100rpx;
			width: 650rpx;
			margin: 40rpx auto;
			text-align: center;
			line-height: 100rpx;
			background-color: #c6001f;

			text {
				color: #ffffff;
				font-size: 32rpx;
			}
		}
	}
</style>
