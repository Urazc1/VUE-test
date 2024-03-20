<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
import SimWindow from "@/components/sim-window.vue";

let links
const blurAmount = ref(0)
const roundCorner = ref("0px")
const navWidth = ref("100%")
const navTop = ref("0")
const bgH = ref("100%")
const bgW = ref("100%")
const bgRight = ref("0")

onMounted(() => {

  if (window.location.pathname == '/') blurC();
  else blurF();
  links = document.getElementsByClassName("routerLink")
  links[0].addEventListener("click", () => { blurC();bgRight.value = "0"})
  links[1].addEventListener("click", () => { blurF();bgRight.value = "0"})
  links[2].addEventListener("click", () => { blurC();bgRight.value = "100%"})
  links[3].addEventListener("click", () => { blurC();bgRight.value = "100%"})
})

function blurF() {
  blurAmount.value = 1
  roundCorner.value = "20px"
  navWidth.value = "60%"
  navTop.value = "10px"
  bgH.value = "90%"
  // bgW.value = "600px"
}
function blurC() {
  blurAmount.value = 0
  roundCorner.value = "0px"
  navWidth.value = "100%"
  navTop.value = "0px"
  bgH.value = "100%"
  // bgW.value = "100%"
}
</script>

<template>
  <header id="navBar" :style="{ width: navWidth, borderRadius: roundCorner, top: navTop}">
    <nav>
      <RouterLink to="/" class="routerLink">Home</RouterLink>
      <RouterLink to="/about" class="routerLink">About</RouterLink>
      <RouterLink to="/login" class="routerLink">login</RouterLink>
      <RouterLink to="/wave" class="routerLink">WaveSurfer</RouterLink>
    </nav>
  </header>

  <div id="bgContainer" :style="{ width: bgW, height: bgH, paddingRight: bgRight}">
    <img id="bg" style="filter: blur(10px);" :style="{ opacity: blurAmount }" src="./assets/logo.png">
    <img id="bg" style="z-index: -1;" :style="{ opacity: 1 - blurAmount }" src="./assets/logo.png">
  </div>
  <div id="router">
    <RouterView v-slot="{ Component }">
      <Transition name="fade" mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>
  </div>
</template>

<style scoped>
@keyframes zoomIn {
  from {
    transform: scale(0.8);
    opacity: 0;
    filter: blur(20px);
  }

  to {
    transform: scale(1);
    opacity: 1;
    filter: blur(0px);

  }
}

#router {
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  z-index: 0;
  filter: blur(0px);
  padding-top: 0px;
  overflow: scroll;
}

#bgContainer {
  position: absolute;
  overflow: hidden;
  /* width: 100%;
  height: 100%; */
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  z-index: -99;
  transition: 
    width 0.7s,
    height 0.7s,
    padding-right 0.7s;

    animation-duration: 1.5s;
  animation-name: zoomIn;
  
}

#bg {
  transition: 0.7s;
  top: 0;

  width: auto;
  height: 100%;
  position: absolute;
}

#navBar {
  position: fixed;
  top: 0;
  left: 0px;
  right: 0px;
  margin: auto;
  transition: 0.7s;
  width: 60%;
  display: flex;
  align-items: center;
  z-index: 5;
  background: transparent;
}

@media (min-width: 768px) {
  #navBar {
    height: 65px;
    flex-wrap: wrap;
    overflow: hidden;
    box-shadow: 0px 2px 5px grey;
  }

  #navBar::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backdrop-filter: saturate(150%) blur(5px);
    backdrop-filter: saturate(150%) blur(5px);
    backface-visibility: hidden;
    z-index: -1;
    top: -1px;
  }

  nav {
    width: 100%;
    font-size: 12px;
    text-align: center;
    background: transparent;
  }

  #router {
    align-items: center;
    justify-content: center;
    z-index: 0;
    filter: blur(0px);
  }
}

@media (max-width: 767px) {
  #navBar {
    height: 50px;
  }

  nav {
    width: 100%;
    font-size: 12px;
    text-align: center;
  }

  #router {
    display: block;
    width: 100%;
    overflow-y: scroll;
  }
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

/* Transition */
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}

.fade-enter-from {
  transform: translateY(100px);
  /* filter: blur(5px); */
  opacity: 0;
}

.fade-leave-to {
  transform: translateY(-100px);
  /* filter: blur(5px); */
  opacity: 0;
}

</style>

