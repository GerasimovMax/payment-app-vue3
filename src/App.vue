<script setup lang="ts"></script>

<template>
  <router-view v-slot="{ Component }">
    <!-- <transition name="route" mode="out-in"> -->
    <component :is="Component"></component>
    <!-- </transition> -->
  </router-view>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

/* .route-enter-from {
  opacity: 0;
  transform: translateX(100px);
}
.route-enter-active {
  transition: all 0.3s ease-in-out;
}
.route-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}
.route-leave-active {
  transition: all 0.3s ease-in-out;
} */
</style>
