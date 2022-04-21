<template>
	<view class="my-address">
		<view class="address-item" v-for="(item,index) in address" :key='index'>
			<view class="address-item-top">
				<view class="item-top-left">
					<view class="tel-name">
						<text class="name">{{item.name}}</text><text class='tel'>{{item.telephone}}</text><text
							class="default" v-if='item.status'>默认</text>
					</view>
					<view class="item-address">
						<text>{{item.address}}</text>
					</view>
				</view>
				<view class="item-top-right">
					<slot name="icon"></slot>
				</view>
			</view>
			<view class="address-item-bottom" v-if="isShow">

				<label class="radio" @click="change(item)">
					<radio value="" :checked='item.status' color=red /><text>设为默认地址</text>
				</label>
				<view class="compose">
					<uni-icons type="compose icon" size="20"></uni-icons>
					<text>编辑</text>
				</view>
				<view class="del-address icon" @click="delAddress(item)">
					<uni-icons type='trash-filled' size="20"></uni-icons>
					<text>删除</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {mapMutations} from 'vuex'
	export default {
		props:{
			address:{
				type:Array,
				default:[]
			},
			isShow:{
				type:Boolean,
				default:true
			}
		},
		name: "my-address",
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
				this.changeDef(item)
			}
		}
	}
</script>

<style lang="scss">
	.my-address {

		.address-item {
			background-color: #ffffff;
			// height: 250rpx;
			width: 100%;
			.address-item-top {
				display: flex;
				justify-content: space-between;
				height: 140rpx;
				width: 100%;
				border-bottom: 1px solid #cccccc;
				padding-left: 40rpx;
				.item-top-left{
					flex: 1;
					.tel-name {
						margin-top: 20rpx;
					
						.name {
							font-size: 32rpx;
						}
					
						.tel {
							margin-left: 20rpx;
							font-size: 28rpx;
						}
					
						.default {
							padding: 0 10rpx;
							margin-left: 20rpx;
							font-size: 24rpx;
							color: #ffffff;
							background-color: #e02f45;
						}
					}
					.item-address {
						margin-top: 20rpx;
						color: #737373;
						font-size: 28rpx;
					}
				}
				.item-top-right{
					width: 20%;
					line-height: 140rpx;
				}
				
			}

			.address-item-bottom {
				display: flex;
				justify-content: space-between;
				height: 90rpx;
				line-height: 90rpx;
				padding-left: 40rpx;
			}

			.radio {
				flex: 1;
			}

			.icon {
				width: 20%;
			}

			.del-address {
				margin-left: 50rpx;
			}
		}
	}
</style>
