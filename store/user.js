export default {
	namespaced:true,
	
	state:{
		openid:''
	},
	mutations:{
		updataOpenId(state,openid){
			state.openid = openid
		}
	}
}