<script setup lang="ts">
import { onMounted, ref } from 'vue';

const msg = ref("Loading");
console.log(msg);
onMounted(() => {
  msg.value = "Mounted"
  console.log(msg);
})
</script>

<template>
  <div id="home" style="">
    <div>
      <p style="font-size: 8rem;"> Hello </p>
      <p style="position: absolute;bottom: 0;left: 0;">{{ msg }}</p>
    </div>
  </div>
</template>

<style scoped>
#home {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
