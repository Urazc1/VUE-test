<script setup lang="ts">
import axios from "axios"
import { onBeforeMount, ref } from "vue";

let userName = "";
let passWord = "";
const nickName = ref();
onBeforeMount(async () => {

})

async function login() {
	let result = await post()
}

async function post() {
	let fetch = () => {
		return new Promise(resolve => {
			axios.post('https://localhost:7998/login', {
				user: userName,
				pwd: passWord
			}).then(res => {
				console.log(res.data);
				resolve(res.data)
			}).catch(err => {
				console.log("获取数据失败" + err);
			})
		})
	}
	return await fetch()
}
</script>

<template>
	<div id="canvas">
		<h1>{{ nickName }}</h1>
		<div id="window">
			<div>
				<input v-model="userName" />
				<input type="password" v-model="passWord" />
				<button @click="login">Login</button>
			</div>
		</div>
	</div>
</template>

<style scoped>
input {
	position: relative;
	width: 80%;
	height: 30px;
	background: transparent;
	border: none;
	border-bottom: 2px solid green;

}

input:focus {
	outline: none;
}

input::after {
	content: '544354';
	position: absolute;
	top: 0;
	left: 0;
	border-top: 2px solid red;
	width: 100%;
	height: 30px;
	background: pink;
	z-index: 5;
}

#canvas {
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
}

#window {
	background-color: transparent;
	display: flex;
	width: 300px;
	height: 230px;
	border: 11px solid rgba(255, 255, 255, 0.459);
	box-sizing: content-box;
	backdrop-filter: blur(5px);
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
}

#window div {
	border-radius: 10px;
}</style>