<script setup lang="ts">
import { onBeforeMount, ref } from 'vue';
import axios from "axios"

const hint = ref("Loading...")
const hintShow = ref(true)
const rest = ref()

onBeforeMount(async () => {
  rest.value = await get()
})

async function get() {
  let fetch = () => {
    return new Promise(resolve => {
      axios.get('http://106.54.223.94:7998/user').then(res => {
        console.log(res.data);
        resolve(res.data);
        hintShow.value = false
      }).catch(err => {
        console.log("获取数据失败" + err);
        hint.value = err
      })
    })
  }
  return await fetch()
}
</script>

<template>
  <div class="about" style="position: absolute;height: 100%;">
    <div style="position: relative;top: 200px;">
      <h1>This is an about page</h1>
    </div>
    <div style="position: relative;top: 300px;">
      <h3 v-show="hintShow">{{ hint }}</h3>
      <TransitionGroup name="list" tag="ul">
        <div class="listDiv" v-for="(list, index) in rest" :key="index">
          {{ list.id }} | {{ list.name }}
        </div>
      </TransitionGroup>
    </div>
  </div>
</template>

<style scoped>
about {
  overflow: scroll;
}

.listDiv {
  height: 2rem;
  position: relative;
  display: flex;
  width: 100%;
  border-bottom: 1px solid grey;
  border-radius: 5px;
  transition: 0.5s;
  overflow: hidden;
}

.listDiv:hover {
  border-bottom: 1px solid rgb(110, 255, 207);
}

.listDiv::after {
  content: '\A';
  position: absolute;
  left: 0;
  margin: auto;
  background: linear-gradient(90deg, rgb(195, 255, 235), transparent);
  color: white;
  justify-content: center;
  align-items: center;
  width: 0%;
  height: 2rem;
  transition: 0.3s;
  z-index: -5;
  opacity: 0;
}

.listDiv:hover::after {
  width: 100%;
  z-index: -5;
  opacity: 1;
}

.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

.list-leave-active {
  position: absolute;
}
</style>