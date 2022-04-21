export default {
	namespaced: true,

	state: {
		openid: '',
		address: JSON.parse(uni.getStorageSync('address') || '[]')
	},
	mutations: {
		updataOpenId(state, openid) {
			state.openid = openid
		},
		changeDef(state, addressInfo) {
			state.address.forEach(item => {
				item.status = false
			})
			addressInfo.status = true
			let index = state.address.indexOf(addressInfo)
			state.address.splice(index, 1)
			state.address.unshift(addressInfo)
			this.commit('m_user/updateAddress')
		},
		addAddress(state, addressInfo) {
			if (addressInfo.status) {
				state.address.forEach(item => {
					item.status = false
				})
				state.address.unshift(addressInfo)
			} else {
				state.address.push(addressInfo)
			}
			this.commit('m_user/updateAddress')
		},
		delAddress(state, item) {
			let index = state.address.indexOf(item)
			state.address.splice(index, 1)
			this.commit('m_user/updateAddress')
		},
		updateAddress(state) {
			uni.setStorageSync('address', JSON.stringify(state.address))
		}
	}
}
