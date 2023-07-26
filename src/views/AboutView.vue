<script setup lang="ts">
import { ref } from 'vue';
defineProps({
  msgFrom: String
})
const lists = ref(
  [
    { msg: '564545645' },
    { msg: 'Bar' }
  ]
)
let length = lists.value.length + 1;
function itemAdd() {
  const i = Math.round(Math.random() * lists.value.length)
  lists.value.splice(i, 0, { msg: length })
  length++;
}

function itemDelete(list: { msg: string; }) {
  const i = lists.value.indexOf(list)
  if (i > -1) {
    lists.value.splice(i, 1)
  }
}
</script>

<template>
  <div class="about" style="position: absolute;height: 100%;">
    <div style="position: relative;top: 200px;">
      <h1>This is an about page</h1>
      <button @click="itemAdd">click to add</button>
    </div>
    <div style="position: relative;top: 300px;">
      <TransitionGroup name="list" tag="ul">
        <div class="listDiv" v-for="(list, index) in lists" :key="list" @click="itemDelete(list)">
          {{ index + 1 }} . {{ list.msg }}
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
  transform: translateX(20px);
}

.list-leave-active {
  position: absolute;
}
</style>