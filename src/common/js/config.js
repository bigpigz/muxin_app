import Vue from 'vue'
import router from '../../router'


export function goUrl(url){
	this.$router.push(url)
	this.$refs.scroll.disable()
}