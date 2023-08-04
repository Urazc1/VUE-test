<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router'



onMounted(() => {
  
})

</script>

<template>
  <header id="header">
    <div id="navBar">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/login">login</RouterLink>
      </nav>
    </div>
  </header>
  <div id="bgContainer">
    <div id="bg" style="background: white"></div>
  </div>
  <div id="router">
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
    align-items: center;
    justify-content: center;
    z-index: 0;
    filter: blur(0px);
  }
  #navBar {
    position: fixed;
    top: 0;
    left: 0px;
    transition: 0.7s;
    background: transparent;
    height: 65px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    overflow: hidden;
  }
  #navBar::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backdrop-filter: saturate(150%) blur(5px);
    backdrop-filter: saturate(190%) blur(5px);
    backface-visibility: hidden;
    z-index: -1;
    top: -1px;
    box-shadow: 1px 1px 5px grey;
  }
  nav {
    width: 100%;
    font-size: 12px;
    text-align: center;
    background: transparent;
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
}

@media (max-width: 767px) {
  #navBar {
    position: fixed;
    top: 0px;
    left: 0;
    transition: 0.7s;
    width: 100%;
    background: transparent;
    height: 50px;
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
