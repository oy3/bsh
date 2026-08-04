<script>
export default {
  props: { eyebrow: String, title: String, description: String },
};
</script>
<template>
  <section class="page-hero">
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
