import Vue from 'vue'
import Vuex from 'vuex'
import userModule from './user.js'
import cartModule from './cart.js'

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		'm_user':userModule,
		'm_cart':cartModule
	}
})
