<script lang="js">
import BlogSection from '../components/BlogSection.vue'
import TestimonialsSection from '../components/TestimonialsSection.vue'
import TeamSection from '../components/TeamSection.vue'
import FAQSection from '../components/FAQSection.vue'

export default {
  name: 'About',
  components: {
    TestimonialsSection,
    BlogSection,
    TeamSection,
    FAQSection
  }
}
</script>

<template>
  <div class="about">
    <!-- Hero Banner -->
    <section class="hero-banner position-relative overflow-hidden py-5">
      <div class="hero-overlay position-absolute w-100 h-100"></div>
      <div class="container-fluid px-md-5 px-3 position-relative">
        <div class="row min-vh-50 d-flex align-items-center justify-content-center text-center py-5">
          <div class="col-lg-8">
            <h6 class="text-white text-uppercase mb-3 fw-light tracking-wider">About</h6>
            <h1 class="text-white display-4 fw-bold mb-0">
              Dedicated to your Health and Wellness
            </h1>
          </div>
        </div>
      </div>
    </section>

    <section class="py-5 px-md-5 px-3">
      <div class="row g-4 mb-5">
        <div class="col-md-6 position-relative d-flex justify-content-center">
          <div style="width: 400px; height: 400px">
            <img
              src="../assets/home-bsh.jpg"
              class="w-100 h-100 rounded-4 object-fit-cover"
              alt=""
            />
          </div>

          <!-- Top left card -->
          <div class="position-absolute top-0 start-0 m-3">
            <div
              class="card border-light-subtle rounded-4 bg-white shadow-sm p-2"
              style="width: 220px"
            >
              <div class="d-flex align-items-center">
                <i class="bi bi-headset text-primary fs-3 me-2"></i>
                <div>
                  <h6 class="mb-0 fw-bold" style="font-size: smaller">24/7</h6>
                  <p class="text-muted mb-0" style="font-size: x-small"
                    >We are available when you want
                </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Bottom left card -->
          <div class="position-absolute bottom-0 end-0 m-3">
            <div
              class="card border-light-subtle bg-white shadow-sm rounded-4 p-2"
              style="width: 220px"
            >
              <div class="d-flex align-items-start">
                <i class="bi bi-patch-check text-success fs-3 me-2"></i>
                <div>
                  <h6 class="mb-0 fw-bold" style="font-size: smaller">
                    15 Years of experience
                  </h6>
                  <p class="text-muted mb-0" style="font-size: x-small">
                    We have been serving the community with excellence and
                    compassion for over 15 years
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <h6
            class="text-uppercase border-bsh-accent border-start border-3 ps-3 mb-3"
          >
            Who we are
          </h6>
          <h4 class="mb-4 fw-bold">
            We provide finnest patient's Care & Amenities
          </h4>

          <p class="text-black-50 mb-3">
            Base Specialist Hospital is a leading healthcare provider in the Nigeria. We are committed to
            providing the best healthcare services to our patients. We have a
            team of highly qualified professionals who are dedicated to
            providing the best care possible.
          </p>

          <div class="row mb-4">
            <div class="col-md-6">
              <ul class="list-unstyled">
                <li class="mb-2">
                  <i class="bi bi-check-square-fill text-bsh-accent me-2"></i>
                  <span>Seamless Care</span>
                </li>
                <li class="mb-2">
                  <i class="bi bi-check-square-fill text-bsh-accent me-2"></i>
                  <span>Patient-Centered Care</span>
                </li>
                <li class="mb-2">
                  <i class="bi bi-check-square-fill text-bsh-accent me-2"></i>
                  <span>Warm and Welcoming Environment</span>
                </li>
                <li class="mb-2">
                  <i class="bi bi-check-square-fill text-bsh-accent me-2"></i>
                  <span>Personalized Approach</span>
                </li>
              </ul>
            </div>
            <div class="col-md-6">
              <ul class="list-unstyled">
                <li class="mb-2">
                  <i class="bi bi-check-square-fill text-bsh-accent me-2"></i>
                  <span>Comprehensive Care</span>
                </li>
                <li class="mb-2">
                  <i class="bi bi-check-square-fill text-bsh-accent me-2"></i>
                  <span>Cutting-Edge Technology</span>
                </li>
                <li class="mb-2">
                  <i class="bi bi-check-square-fill text-bsh-accent me-2"></i>
                  <span>Expert Doctors</span>
                </li>
                <li class="mb-2">
                  <i class="bi bi-check-square-fill text-bsh-accent me-2"></i>
                  <span>Positive Reviews</span>
                </li>
              </ul>
            </div>
          </div>

          <button
            class="btn bg-bsh-primary btn-sm d-flex align-items-center rounded-3 px-3"
          >
            Book Appointment
            <i
              class="bi bi-arrow-up-short fs-4 d-inline-block mb-0"
              style="transform: rotate(45deg)"
            ></i>
          </button>
        </div>
      </div>

      <div class="row g-5">
        <div class="col-sm-4">
          <div class="card bg-info-subtle rounded-4 border-0">
            <div class="card-body">
              <div
                class="d-flex align-items-center justify-content-center border border-white border-2 rounded-3 mb-3"
                style="height: 50px; width: 50px"
              >
                <i class="bi bi-rocket-fill fs-4 text-info"></i>
              </div>
              <h5 class="card-title fw-bold">Our Mission</h5>
              <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="card bg-success-subtle rounded-4 border-0">
            <div class="card-body">
              <div
                class="d-flex align-items-center justify-content-center border border-white border-2 rounded-3 mb-3"
                style="height: 50px; width: 50px"
              >
                <i class="bi bi-eye-fill fs-4 text-success"></i>
              </div>
              <h5 class="card-title fw-bold">Our Vision</h5>
              <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="card bg-danger-subtle rounded-4 border-0">
            <div class="card-body">
              <div
                class="d-flex align-items-center justify-content-center border border-white border-2 rounded-3 mb-3"
                style="height: 50px; width: 50px"
              >
                <i class="bi bi-balloon-heart fs-4 text-danger"></i>
              </div>
              <h5 class="card-title fw-bold">Our Values</h5>
              <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <TeamSection />

    <!-- FAQ -->
    <FAQSection id="about-page" />

    <TestimonialsSection />
    <BlogSection />
  </div>
</template>

<style scoped>
.about {
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
