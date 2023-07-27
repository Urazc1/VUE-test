<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router'

const widthX = ref(1920)
const widthXp = ref(1920)
const widthXc = ref(1920)
const deg = ref(1080)
const degp = ref(1080)
const degc = ref(1080)
const wWidth = document.documentElement.clientWidth
const wHeight = document.documentElement.clientHeight
function onMousemove(e: { clientX: number; clientY: number; }) {
  widthX.value = (e.clientX / 1920 + 0.4) * wWidth;
  widthXp.value = ((wWidth - e.clientX) / wWidth + 0.4) * wWidth;
  widthXc.value = ((wWidth - e.clientX) / wWidth + 1) * wWidth;
  deg.value = e.clientY / wHeight * 360;
  degp.value = e.clientY / wHeight * 200;
  degc.value = e.clientY / wHeight * 45;
}

onMounted(() => {
  var menuBtn = document.getElementById("menuBtn");
  var navBar = document.getElementById("navBar");
  var header = document.getElementById("header")
  if (menuBtn && header) {    //menuBtn与header有对象，下同
    menuBtn.onmouseover = () => {
      if (navBar)             //navBar有对象，下同
        if (wWidth >= 800) {
          navBar.style.left = "0px"
          navBar.style.boxShadow = "1px 1px 10px grey"
        } else {
          navBar.style.height = "100px"
          navBar.style.top = "0px"
          navBar.style.boxShadow = "1px 1px 10px grey"
        }

    }
    header.onmouseleave = () => {
      if (navBar)
        if (document.documentElement.clientWidth >= 800) {
          navBar.style.left = "-150px"
          navBar.style.boxShadow = ""
        } else {
          navBar.style.height = "0px"
          navBar.style.top = "-20px"
          navBar.style.boxShadow = ""
        }
    }
  }
})

</script>

<template>
  <header id="header">
    <div id="menuBtn" style="position: absolute;top: 20px;left: 20px;z-index: 9;font-weight: 800;font-size: 1.5rem;">⌂
    </div>
    <div class="wrapper" id="navBar">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>
  <div id="bgContainer">
    <div id="bg" :style="{
      background: 'linear-gradient(' + degp + 'deg, #833ab4, rgba(255, 0, 0, 0) ' + widthXp + 'px),' +
        'linear-gradient(' + deg + 'deg, #fd1d1d, rgba(255, 0, 0, 0) ' + widthX + 'px),' + 'linear-gradient(' + degc + 'deg, #fcb045, rgba(255, 0, 0, 0) ' + widthXc + 'px)'
    }"></div>
  </div>
  <div id="router" @mousemove="onMousemove">
    <RouterView v-slot="{ Component }">
      <Transition name="fade" mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>
  </div>
  <footer>

  </footer>
</template>


<style scoped>
#bgContainer {
  position: absolute;
  overflow: hidden;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

#bg {
  transition: 0.7s;
  top: 0;
  left: 0;
  width: 2000px;
  height: 1000px;
  position: absolute;
  /* background: linear-gradient(217deg, #833ab4, rgba(255, 0, 0, 0) 70.71%),
    linear-gradient(127deg, #fd1d1d, rgba(0, 255, 0, 0) 70.71%),
    linear-gradient(336deg, #fcb045, rgba(0, 0, 255, 0) 70.71%);
  ; */
}

@media (min-width: 768px) {

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
    overflow: hidden;
  }

  #navBar {
    position: fixed;
    top: 0;
    left: -150px;
    transition: 0.7s;
    background: rgb(217, 255, 244);
    height: 100%;
    display: flex;
    align-items: center;
  }

  header {
    line-height: 1.5;
    top: 0;
    left: 50px;
    z-index: 1;
    height: 100%;
    width: 100px;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);

  }

  nav {
    width: 100%;
    font-size: 12px;
    text-align: center;
    margin-top: 2rem;
    margin-left: -1rem;
    padding: 1rem 0;
  }


  .wrapper {
    position: fixed;
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}

@media (max-width: 767px) {
  #navBar {
    position: fixed;
    top: -20px;
    left: 0;
    transition: 0.7s;
    width: 100%;
    background: rgb(217, 255, 244);
    height: 0px;
    display: flex;
    align-items: center;
  }

  header {
    width: 100%;
    position: fixed;
    line-height: 1.5;
    top: 0;
    z-index: 1;
  }

  nav {
    width: 100%;
    font-size: 12px;
    text-align: center;
  }

  #router {
    display: block;
    width: 100%;
    overflow: hidden;
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
