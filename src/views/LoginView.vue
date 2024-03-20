<script setup lang="ts">
import axios from "axios"
import { onBeforeMount, ref, defineModel } from "vue";
import errorMsg from "@/components/ErrorMessage.vue";
import loading from "@/components/LoadingWindow.vue";

let userName = ref("");
let passWord = ref("");
const loadStatus = ref(false)
const errMsg = ref("")
const errShow = ref(false)
const nickName = ref();
const res = ref();

function error(err: string) {
	errShow.value = true
	errMsg.value = err
	setTimeout(() => {
		errShow.value = false
	}, 2000)
}

async function login() {
	console.log(userName.value);
	console.log(passWord.value);
	if (userName.value === "") error("Please enter username")
	else if (passWord.value === "") error("Please enter password")
	else {
		loadStatus.value = true;
		let result = await post()
		//let result = await posts("login", {user: userName,pwd: passWord})
		loadStatus.value = false;
		nickName.value = result
	}
}

async function post() {
	let fetch = () => {
		return new Promise(resolve => {
			axios.post('http://123.56.43.39:8080/login', {
				userName: userName.value,
				passWord: passWord.value
			}).then(res => {
				console.log(res.data.realName);
				resolve(res.data.realName)
			}).catch(err => {
				error(err);
				loadStatus.value = false;
				console.log("获取数据失败" + err);
			})
		})
	}
	return await fetch()
}
</script>

<style>

</style>

<template>
	<div id="canvas">
		<div>{{ nickName }}</div>
		<div id="login">
			<div>
				<md-outlined-text-field label="用户名" v-model="userName"></md-outlined-text-field>
				<md-outlined-text-field label="密码" type="password" v-model="passWord"/>
				<button @click="login">Login</button>
			</div>
		</div>
		<Teleport to="body">
			<loading v-show="loadStatus" />
			<errorMsg v-show="errShow" :msg=errMsg />
		</Teleport>
	</div>
</template>

<style scoped>
#canvas {
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	right: 100px;
}

#login {
	background-color: transparent;
	display: flex;
	width: 400px;
	height: 330px;
	border: 1px solid rgba(255, 255, 255, 0.459);
	box-sizing: content-box;
	backdrop-filter: blur(5px);
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
}

#login div {
	height: 50%;
	border: 1px solid aqua;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
}

md-outlined-text-field {
	width: 90%;
	transition: all 1s;
}
</style>