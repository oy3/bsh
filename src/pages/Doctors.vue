<script lang="js">
import BlogSection from '../components/BlogSection.vue'
import TestimonialsSection from '../components/TestimonialsSection.vue'
import TeamSection from '../components/TeamSection.vue'

export default {
  name: 'About',
  components: {
    TestimonialsSection,
    BlogSection,
    TeamSection
  },
  data() {
    return {
    }
  }
}
</script>

<template>
  <div class="doctors">
    
    <!-- Hero Banner -->
    <section class="hero-banner position-relative overflow-hidden py-5">
      <div class="hero-overlay position-absolute w-100 h-100"></div>
      <div class="container-fluid px-md-5 px-3 position-relative">
        <div class="row min-vh-50 d-flex align-items-center justify-content-center text-center py-5">
          <div class="col-lg-8">
            <h6 class="text-white text-uppercase mb-3 fw-light tracking-wider">Doctors</h6>
            <h1 class="text-white display-4 fw-bold mb-0">
             Meet out expert doctors
            </h1>
          </div>
        </div>
      </div>
    </section>

    <section class="py-5 px-md-5 px-3">

    </section>

  </div>
</template>

<style scoped>
.doctors {
  min-height: 100vh;
}

.hero-banner {
  background: linear-gradient(135deg, var(--bsh-primary) 0%, var(--bsh-secondary) 100%);
  min-height: 50vh;
}

.hero-overlay {
  background: linear-gradient(135deg, rgba(44, 62, 80, 0.8) 0%, rgba(26, 37, 47, 0.9) 100%);
}

.min-vh-50 {
  min-height: 50vh;
}

.tracking-wider {
  letter-spacing: 0.1em;
}

@media (max-width: 768px) {
  .hero-banner {
    min-height: 40vh;
  }
  
  .min-vh-50 {
    min-height: 40vh;
  }
  
  .hero-banner h1 {
    font-size: 2.5rem !important;
  }
}
</style>
