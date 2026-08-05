<script>
import defaultHeroImage from '../assets/bg-bsh.jpeg'

export default {
  props: {
    eyebrow: String,
    title: String,
    description: String,
    backgroundImage: {
      type: String,
      default: ''
    }
  },
  computed: {
    resolvedBackgroundImage() {
      return this.backgroundImage || defaultHeroImage
    },
    heroStyle() {
      return { '--page-hero-image': `url("${this.resolvedBackgroundImage}")` }
    }
  }
}
</script>
<template>
  <section class="page-hero" :style="heroStyle">
    <div class="site-container">
      <nav aria-label="Breadcrumb">
        <router-link to="/">Home</router-link><i class="bi bi-chevron-right"></i
        ><span>{{ eyebrow }}</span>
      </nav>
      <div class="page-hero__copy">
        <span class="page-hero__pill">{{ eyebrow }}</span>
        <h1>{{ title }}</h1>
        <p>{{ description }}</p>
        <slot />
      </div>
    </div>
  </section>
</template>
