import Vue from 'vue'
import axios from 'axios'
import Lockr from 'lockr'
axios.defaults.baseURL = 'http://a.squareness.cn';  //配置默认接口地址
axios.defaults.timeout = 2500;  		//响应时间
//axios.defaults.headers.common['authKey'] = AUTH_TOKEN; 
//axios.defaults.headers.auth = Lockr.get('auth');
//axios.defaults.headers.session = Lockr.get('session');

// 新创建 axios 实例配置
const instance = axios.create({
	baseURL: 'http://a.squareness.cn',
	timeout: 5000,
	headers: {
//   	'Content-Type': 'application/x-www-form-urlencoded',
    	'session': Lockr.get('session'),
      	'auth': Lockr.get('auth')
    }
})
//配置请求头
axios.defaults.headers.post['Content-type'] = 'application/x-www-form-urlencoded';  


// 添加请求拦截器
axios.interceptors.request.use(function (config) {
	 // 在发送请求之前做些什么

	return config;
},function (error) {
	// 对请求错误做些什么

	return Promise.reject(error);
})

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
	// 对响应数据做点什么
	return response;
},function (error) {
	// 对响应错误做点什么
	return Promise.reject(error);
})

export const nonSessionApi = {
	get(url,params){
		return new Promise((resolve,reject) => {
			axios.get(url,{params:params})
			.then((response) => {
				resolve(response.data)
			})
			.catch((error) => {
				reject(error)
			})
		})
	},
	post(url,params){
		return new Promise((resolve,reject) => {
			axios.post(url,params)
			.then((response) => {
				resolve(response.data)
			})
			.catch((error) => {
				reject(error)
			})
		})
	},
	delete(url,params){
		return new Promise((resolve,reject) => {
			axios.delete(url,{params:params})
			.then((response) => {
				resolve(response.data)
			})
			.catch((error) => {
				reject(error)
			})
		})
	},
	put(url,body,params){
		return new Promise((resolve,reject) => {
			axios.put(url,{params:params})
			.then((response) => {
				resolve(response.data)
			})
			.catch((error) => {
				reject(error)
			})
		})
	}
};

export const api = {
	get(url,params){
		return new Promise((resolve,reject) => {
			instance.get(url,{params:params})
			.then((response) => {
				resolve(response.data)
			})
			.catch((error) => {
				reject(error)
			})
		})
	},
	post(url,params){
		return new Promise((resolve,reject) => {
//			console.log(instance)
			instance.post(url,params)
			.then((response) => {
				resolve(response.data)
			})
			.catch((error) => {
				reject(error)
			})
		})
	},
	delete(url,params){
		return new Promise((resolve,reject) => {
			instance.delete(url,{params:params})
			.then((response) => {
				resolve(response.data)
			})
			.catch((error) => {
				reject(error)
			})
		})
	},
	put(url,body,params){
		return new Promise((resolve,reject) => {
			instance.put(url,{params:params})
			.then((response) => {
				resolve(response.data)
			})
			.catch((error) => {
				reject(error)
			})
		})
	}
}


