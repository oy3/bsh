<script>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'

export default {
  components: { Navbar, Footer },
  props: {
    transparentNav: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<template>
  <div class="layout">
    <Navbar :transparent="transparentNav" />
    <main class="main-content">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<style scoped>
.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
}
</style>