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
      <p style="font-size: 8rem;text-shadow: 5px 7px 12px rgb(182, 182, 182)"> Hello </p>
      <p style="position: absolute;bottom: 0;left: 0;">{{ msg }}</p>
    </div>
    <div id="img">
      <img src="../assets/landscape_230807.jpg">
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

#img {
  position: absolute;
  display: flex;
  justify-content: center;
  overflow: hidden;
  z-index: -999;
}

@media (min-width: 768px) {
  #img, img {
    width: 100%;
  }
}

@media (max-width: 767px) {
  #img,img {
    height: 100%;
  }
}</style>
