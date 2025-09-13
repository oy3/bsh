<script lang="js">
import HeroSection from '../components/HeroSection.vue'
import Testimonials from '../components/TestimonialsSection.vue'
import BlogSection from '../components/BlogSection.vue'
import TeamSection from '../components/TeamSection.vue'

export default {
    name: 'Home',
    components: {
        HeroSection,
        Testimonials,
        BlogSection,
        TeamSection
    },
    data() {
        return {
            services: [
                {
                    id: 1,
                    title: 'Dentist',
                    description: 'Cutting-edge solutions for modern challenges',
                    icon: 'heart-pulse-fill'
                },
                {
                    id: 2,
                    title: 'Pediatrics',
                    description: 'Delivering excellence in every project',
                    icon: 'heart-pulse-fill'
                },
                {
                    id: 3,
                    title: 'Cardiology',
                    description: '24/7 customer support and maintenance',
                    icon: 'heart-pulse-fill'
                },
                {
                    id: 4,
                    title: 'Dermatology',
                    description: 'Cutting-edge solutions for modern challenges',
                    icon: 'heart-pulse-fill'
                },
                {
                    id: 5,
                    title: 'Gynecology',
                    description: 'Delivering excellence in every project',
                    icon: 'heart-pulse-fill'
                },
                {
                    id: 6,
                    title: 'Orthopedics',
                    description: '24/7 customer support and maintenance',
                    icon: 'heart-pulse-fill'
                },
            ]
        }
    }
}
</script>

<template>
  <div class="home">
    <!-- Hero Section -->
    <HeroSection />

    <!-- Services -->
    <section class="bg-white py-5 px-md-5 px-3">
      <h6 class="text-uppercase border-bsh-accent border-start border-3 ps-2">
        Health Solutions
      </h6>
      <h2 class="fw-bold mb-5">Healthcare services for your well-being</h2>

      <div class="row g-4">
        <div class="col-md-4" v-for="service in services" :key="service.id">
          <div class="card p-3 h-100 rounded-4 border-light-subtle">
            <div class="card-header bg-white border-bottom-0">
              <i
                class="d-flex align-items-center justify-content-center border rounded-3 fs-3 text-bsh-accent"
                :class="`bi bi-${service.icon}`"
                style="width: 56px; height: 56px"
              ></i>
            </div>
            <div class="card-body">
              <h6 class="fw-bold">{{ service.title }}</h6>
              <p class="fw-light text-secondary">{{ service.description }}</p>
            </div>
            <div class="card-footer bg-white border-top-0">
              <button
                class="btn btn-outline-bsh-primary rounded-circle d-flex align-items-center justify-content-center p-0"
                style="height: 40px; width: 40px"
              >
                <i class="bi bi-arrow-up-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ABOUT -->
    <section class="bg-light py-5 px-md-5 px-3">
      <div class="row g-4">
        <div class="col-md-6 position-relative">
          <img
            src="../assets/home-bsh.jpg"
            class="w-100 h-100 rounded-4 object-fit-cover"
            alt=""
          />

          <!-- Top left card -->
          <div class="position-absolute top-0 start-0 m-3">
            <div
              class="card border-light-subtle rounded-4 bg-white shadow-sm p-2"
              style="width: 270px"
            >
              <div class="d-flex align-items-center">
                <i class="bi bi-headset text-primary fs-3 me-2"></i>
                <div>
                  <h6 class="mb-0 fw-bold" style="font-size: smaller">24/7</h6>
                  <span class="text-muted" style="font-size: x-small"
                    >We are available when you want
                  </span>
                </div>
              </div>
            </div>
          </div>

          <!-- Bottom left card -->
          <div class="position-absolute bottom-0 end-0 m-3">
            <div
              class="card border-light-subtle bg-white shadow-sm rounded-4 p-2"
              style="width: 300px"
            >
              <div class="d-flex align-items-start">
                <i class="bi bi-patch-check text-success fs-3 me-2"></i>
                <div>
                  <h6 class="mb-0 fw-bold" style="font-size: smaller">
                    15 Years of experience
                  </h6>
                  <small class="text-muted" style="font-size: x-small">
                    We have been serving the community with excellence and
                    compassion for over 15 years
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <h6
            class="text-uppercase border-bsh-accent border-start border-3 ps-3 mb-3"
          >
            About us
          </h6>
          <h4 class="mb-4 fw-bold">
            We provide finnest patient's Care & Amenities
          </h4>

          <p class="text-black-50 mb-3">
            BSH is a leading healthcare provider in the UK. We are committed to
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
            More About Us
            <i
              class="bi bi-arrow-up-short fs-4 d-inline-block mb-0"
              style="transform: rotate(45deg)"
            ></i>
          </button>
        </div>
      </div>
    </section>

    <!-- Team Section Component -->
    <TeamSection />

    <!-- Help Line -->
    <section class="py-5 px-md-5 px-3">
      <div class="row g-4">
        <div class="col-md-6 d-flex align-items-center">
          <div>
            <h6 class="text-uppercase border-bsh-accent border-start border-3 ps-2">
              Emergency Help Line
            </h6>
            <h2 class="fw-bold mb-4">24/7 Help Line for assitance</h2>
            <p class="text-body-tertiary">
              BSH is committed to providing 24/7 emergency help to our patients.
              Our 24/7 help line is available to assist you with any questions
              or concerns you may have.
            </p>
            <div class="row g-4">
              <div class="col-md-6">
                <div class="card rounded-4 border-light-subtle px-4 py-2">
                  <div class="d-flex align-items-center">
                    <i class="bi bi-telephone me-3 fs-4 text-bsh-accent"></i>
                    <div class="d-grid small">
                      <span class="fw-bold">Phone Number</span>
                      <span class="text-body-tertiary">+234 123 4567</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="card rounded-4 border-light-subtle px-4 py-2">
                  <div class="d-flex align-items-center">
                    <i class="bi bi-envelope-at me-3 fs-4 text-bsh-accent"></i>
                    <div class="d-grid small">
                      <span class="fw-bold">Email Address</span>
                      <span class="text-body-tertiary text-break">
                        info@basespecialisthospital.com
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 d-flex justify-content-center">
          <div class="position-relative" style="height: 400px; width: 400px">
            <img
              src="../assets/home-bsh2.jpg"
              alt=""
              class="rounded-5 object-fit-cover"
              height="400"
              width="400"
            />

            <div class="position-absolute top-0 end-0 m-3">
              <div
                class="card border-light-subtle rounded-4 bg-white shadow-sm p-2"
                style="width: 240px"
              >
                <div class="d-flex align-items-center">
                  <i class="bi bi-calendar2-check fs-4 me-2 text-primary"></i>
                  <div>
                    <h6 class="mb-0 fw-bold" style="font-size: smaller">
                      Appointment
                    </h6>
                    <small class="text-muted" style="font-size: x-small">
                      Book Appointment anytime any where
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Component -->
    <Testimonials />

    <!-- Blog Section Component -->
    <BlogSection />

  </div>
</template>

<style scoped>
.home {
  min-height: 100vh;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #2c3e50;
}

.rotate-icon {
  display: inline-block;
  transform: rotate(45deg);
}
</style>
