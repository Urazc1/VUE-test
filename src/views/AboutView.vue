<script setup lang="ts">
import { onBeforeMount, onMounted, ref } from 'vue';
import axios from "axios"
import loading from '../components/LoadingWindow.vue'
import errorMsg from '../components/ErrorMessage.vue'

const res = ref()
const loadStatus = ref(false)
const errShow = ref(false)
const errMsg = ref("Unknown Error")

onBeforeMount(async () => {
  res.value = await get()
})
onMounted(() => {
  loadStatus.value = true
})

async function get() {
  let fetch = () => {
    return new Promise(resolve => {
      axios.get('https://106.54.223.94:7998/user').then(res => {
        console.log(res.data);
        resolve(res.data)
        loadStatus.value = false
      }).catch(err => {
        console.log("获取数据失败" + err);
        loadStatus.value = false
        errShow.value = true
        setTimeout(() => {
          errMsg.value = err
          errShow.value = false
        },2000)
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
      <TransitionGroup name="list">
        <div class="listDiv" v-for="(list, index) in res" :key="index">
          {{ list.id }} | {{ list.name }}
        </div>
      </TransitionGroup>
    </div>
    <Teleport to="body">
      <loading v-show="loadStatus" />
      <errorMsg v-show="errShow" :msg=errMsg />
    </Teleport>
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
  align-items: center;
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


  width: 0%;
  height: 2rem;
  transition: 0.3s;
  z-index: -5;
  opacity: 0;
}

.listDiv:hover::after {
  background-clip: content-box;
  width: 100%;
  z-index: -5;
  opacity: 1;
}

/*******************/
/*** Transitions ***/
/*******************/

/** list **/
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

/** hint **/
.hint-leave-active {
  transition: 1s ease;
}

.hint-leave-from {
  filter: blur(0px);
}

.hint-leave-to {
  filter: blur(5px);
  opacity: 0;
}
</style>