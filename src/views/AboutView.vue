<script setup lang="ts">
import { onBeforeMount, ref } from 'vue';
import axios from "axios"
defineProps({
  msgFrom: String
})
onBeforeMount (() => {
  get()
})

const rest = ref()
const lists = ref(
  [
    { msg: '564545645' },
    { msg: 'Bar' }
  ]
)
let length = lists.value.length + 1;
function itemAdd() {
  const i = Math.round(Math.random() * lists.value.length)
  lists.value.splice(i, 0, { msg: length.toLocaleString() })
  length++;
}
function itemDelete(list: { msg: string; }) {
  const i = lists.value.indexOf(list)
  if (i > -1) {
    lists.value.splice(i, 1)
  }
}

function get() {
  axios.get('http://127.0.0.1/user').then(res => {
    console.log(res.data);
    rest.value = res.data
  }).catch(err => {
    console.log("获取数据失败" + err);
  })
}
</script>

<template>
  <div class="about" style="position: absolute;height: 100%;">
    <div style="position: relative;top: 200px;">
      <h1>This is an about page</h1>
    </div>
    <div style="position: relative;top: 300px;">
      <TransitionGroup name="list" tag="ul">
        <div class="listDiv" v-for="(list,index) in rest" :key="index">
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

  transition: 0.5s;
}

.listDiv:hover {
  border-bottom: 1px solid rgb(110, 255, 207);
}

.listDiv::after {
  content: '|';
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