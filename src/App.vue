<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import MainLayout from './layouts/MainLayout.vue'

const route = useRoute()

// Make navbar transparent only on home page
const transparentNav = computed(() => route.path === '/')
</script>

<template>
  <MainLayout :transparentNav="transparentNav">
    <router-view />
  </MainLayout>
</template>

<style>
@import 'bootstrap/dist/css/bootstrap.min.css';

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
