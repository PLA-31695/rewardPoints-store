
const paths = [{
	path:'/pages/cart/cart',
	// needLogin:true
}]

const getUserProfile = async () => {
	const [null1,loginInfo] = await uni.getUserProfile({
		desc: '登录授权',
	})
	
	const [null2,result] = await uni.login({
		provider: 'weixin',
	})
	// console.log('result',result) 
	// console.log('loginInfo',loginInfo)
	const resData = await uni.request({
		url: 'http://127.0.0.1:8000/user/login',
		method: 'POST',
		header: {
			'content-type': 'application/x-www-form-urlencoded'
		},
		data: {
			user_info: loginInfo.rawData,
			user_code: result.code
		},
		// success:(res) => {
			
		// 	if(res.data.openid){
		// 		this.updataOpenId(res.data.openid)
		// 		this.updataIntegral(res.data.integral)
		// 		console.log(res.data)
		// 	}
		// }
	})
	console.log('resData',resData)
	return resData //相当于返回promise.resolve（resData.data）
}
const nav = async (to,openid) =>{
	let needLogin = paths.some(item =>{
		return item.path === to
	})
	
	if(needLogin&&!openid){
		console.log('需要验证登录')
		let res1 = await getUserProfile()
		// console.log('res1',res1)
		return res1
	}else{
		uni.navigateTo({
			url:"/pages/cart/cart"
		})
	}
		
	
}
export{
	nav
}