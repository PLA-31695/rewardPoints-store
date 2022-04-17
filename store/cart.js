export default {
	namespaced: true,

	state: {
		cart: JSON.parse(uni.getStorageSync('cart') || '[]')
	},
	mutations: {
		addCart(state, cart) {
			let goods = state.cart.find((item) => item.goods_id === cart.goods_id)

			if (goods) {
				goods.count++
			} else {
				cart.count = 1
				// let arr = []
				state.cart.push(cart)
			}
			this.commit('m_cart/updateCart')
		},
		radioChange(state, cart) {
			if (cart) {
				let goods = state.cart.find(item => item.goods_id === cart.goods_id)
				goods.goods_status = !goods.goods_status
			} else {
				state.cart.forEach(item => {
					item.goods_status = !item.goods_status
				})
			}

			this.commit('m_cart/updateCart')
		},
		countsChange(state, data) {
			let goods = state.cart.find(item => item.goods_id === data.cart.goods_id)
			goods.count = data.val
			this.commit('m_cart/updateCart')
		},
		delCart(state,cart){
			state.cart = state.cart.filter(item => item.goods_id != cart.goods_id)
			this.commit('m_cart/updateCart')
		},
		updateCart(state) {
			uni.setStorageSync('cart', JSON.stringify(state.cart))
		}
	},
	getters: {
		getRadioStatus(state) {
			let radioTrue = state.cart.every(item => {
				return item.goods_status === true
			})
			if (radioTrue) {
				return true;
			} else {
				return false
			}
		},
		getCounts(state) {
			return state.cart.reduce((total, item) => total += item.count, 0)
		},
		getTotalPrice(state) {
			return state.cart.reduce((total,item) => {
				if(item.goods_status){
					return total + item.count * item.goods_integral
				}else{
					return total
				}
			},0)
		}
	}
}
