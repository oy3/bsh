<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import MainLayout from './layouts/MainLayout.vue'

const route = useRoute()

// Make navbar transparent only on home page
const transparentNav = computed(() => route.path === '/')

let revealObserver
const revealSelector = [
  '.section-heading', '.service-card', '.doctor-card', '.testimonial-card',
  '.gallery-item', '.faq-list article', '.faq-page article', '.contact-options > a',
  '.care-point', '.service-panel', '.journey-grid > li', '.feature-card', '.specialist-card', '.doctor-tile',
  '.about-values article', '.about-strengths article', '.blog-card', '.tip-card',
  '.testimonial-page article', '.appointment-page form', '.appointment-page aside > *',
  '.detail-main > *', '.detail-aside > *', '.hours-panel'
].join(',')

const prepareReveals = async () => {
  await nextTick()
  const elements = [...document.querySelectorAll(revealSelector)]
  elements.forEach((element, index) => {
    if (element.dataset.revealReady) return
    element.dataset.revealReady = 'true'
    element.style.setProperty('--reveal-delay', `${(index % 5) * 65}ms`)
    revealObserver?.observe(element)
  })
}

onMounted(() => {
  document.documentElement.classList.add('reveal-ready')
  revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return
      entry.target.classList.add('is-revealed')
      revealObserver.unobserve(entry.target)
    })
  }, { threshold: 0.12, rootMargin: '0px 0px -40px' })
  prepareReveals()
})

watch(() => route.fullPath, prepareReveals)
onBeforeUnmount(() => revealObserver?.disconnect())
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
