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
	if (result.code == '1')
		nickName.value = result.nickname
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
#canvas {
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
}

#window {
	background-color: transparent;
	display: block;
	width: 300px;
	height: 230px;
	border: 10000px solid rgba(255, 255, 255, 0.459);
	box-sizing: content-box;
	backdrop-filter: blur(5px);
}
#window div {
	border-radius: 10px;
}
</style>