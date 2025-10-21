<script>
export default {
  name: 'DoctorDetailView',
  props: {
    doctor: {
      type: Object,
      required: true
    }
  },
  emits: ['back'],
  methods: {
    goBack() {
      this.$emit('back')
    },
    hasValidSocialLink(platform) {
      return this.doctor?.socialMedia?.[platform] && this.doctor.socialMedia[platform] !== ''
    }
  }
}
</script>

<template>
  <div class="doctor-detail-view">
    <!-- Back Button -->
    <div class="mb-4">
      <button @click="goBack" class="btn btn-sm btn-outline-bsh-primary">
        <i class="bi bi-arrow-left me-2"></i>Back
      </button>
    </div>

    <!-- Doctor Profile Section -->
    <div class="py-5 rounded-4" style="background-color: #e8f4fd;">
      <div class="container-fluid">
        <div class="row align-items-center">
          <!-- Doctor Image -->
          <div class="col-lg-5">
            <div class="card border-0 rounded-4 overflow-hidden shadow-lg">
              <img 
                :src="doctor.image" 
                :alt="doctor.name"
                class="card-img-top"
                style="height: 500px; object-fit: cover; object-position: center 20%;"
              >
              <div class="card-body text-center bg-bsh-primary text-white py-3">
                <h5 class="mb-0 fw-bold">{{ doctor.division }}</h5>
              </div>
            </div>
          </div>

          <!-- Doctor Info -->
          <div class="col-lg-7 ps-lg-5 mt-4 mt-lg-0">
            <div class="mb-4">
              <h1 class="display-5 fw-bold text-bsh-primary mb-2">{{ doctor.name }}, {{ doctor.titles }}</h1>
              <h4 class="text-muted mb-3">{{ doctor.role }}</h4>
              <p class="lead text-muted">{{ doctor.overview }}</p>
            </div>

            <!-- Social Media -->
            <div class="d-flex gap-3 mb-4">
              <a 
                v-if="hasValidSocialLink('facebook')"
                :href="doctor.socialMedia.facebook" 
                target="_blank"
                class="btn btn-primary rounded-circle d-flex align-items-center justify-content-center"
                style="width: 50px; height: 50px;"
              >
                <i class="bi bi-facebook"></i>
              </a>
              <a 
                v-if="hasValidSocialLink('linkedin')"
                :href="doctor.socialMedia.linkedin" 
                target="_blank"
                class="btn btn-primary rounded-circle d-flex align-items-center justify-content-center"
                style="width: 50px; height: 50px;"
              >
                <i class="bi bi-linkedin"></i>
              </a>
              <a 
                v-if="hasValidSocialLink('instagram')"
                :href="doctor.socialMedia.instagram" 
                target="_blank"
                class="btn btn-primary rounded-circle d-flex align-items-center justify-content-center"
                style="width: 50px; height: 50px;"
              >
                <i class="bi bi-instagram"></i>
              </a>
            </div>

            <!-- Contact Info -->
            <div class="row g-3 mb-4">
              <div class="col-md-6">
                <div class="d-flex align-items-center">
                  <i class="bi bi-telephone-fill text-bsh-accent me-3 fs-5"></i>
                  <div>
                    <div class="text-muted small">Phone</div>
                    <div class="fw-semibold">{{ doctor.phone }}</div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="d-flex align-items-center">
                  <i class="bi bi-envelope-fill text-bsh-accent me-3 fs-5"></i>
                  <div>
                    <div class="text-muted small">Email</div>
                    <div class="fw-semibold">{{ doctor.email }}</div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Appointment Schedules -->
            <div class="card border-0 shadow-sm rounded-3">
              <div class="card-body">
                <div class="d-flex align-items-center mb-3">
                  <i class="bi bi-calendar-check text-bsh-accent me-2 fs-4"></i>
                  <h5 class="mb-0 fw-bold">Appointment Schedules</h5>
                </div>
                <div class="row g-2">
                  <div class="col-4 text-center">
                    <div class="p-2 bg-light rounded">
                      <div class="fw-semibold">Mon-Wed</div>
                      <div class="small text-muted">9AM - 5PM</div>
                    </div>
                  </div>
                  <div class="col-4 text-center">
                    <div class="p-2 bg-light rounded">
                      <div class="fw-semibold">Thu-Fri</div>
                      <div class="small text-muted">10AM - 6PM</div>
                    </div>
                  </div>
                  <div class="col-4 text-center">
                    <div class="p-2 bg-light rounded">
                      <div class="fw-semibold">Saturday</div>
                      <div class="small text-muted">9AM - 1PM</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Degrees and Experience Section -->
    <div class="py-5">
      <div class="container-fluid">
        <div class="row">
          <!-- Degrees -->
          <div class="col-lg-6 mb-4 mb-lg-0">
            <div class="d-flex align-items-center mb-4">
              <i class="bi bi-mortarboard text-bsh-accent me-3 fs-3"></i>
              <h3 class="mb-0 fw-bold">Degrees</h3>
            </div>
            <div class="space-y-3">
              <div 
                v-for="(degree, index) in doctor.degrees" 
                :key="index"
                class="d-flex align-items-start mb-3"
              >
                <div class="bg-bsh-accent rounded-circle me-3 mt-1" style="width: 8px; height: 8px; min-width: 8px;"></div>
                <div>
                  <div class="fw-semibold text-bsh-accent">{{ degree.school }}</div>
                  <div class="text-muted">{{ degree.degree }}</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Experiences -->
          <div class="col-lg-6">
            <div class="d-flex align-items-center mb-4">
              <i class="bi bi-briefcase text-bsh-accent me-3 fs-3"></i>
              <h3 class="mb-0 fw-bold">Experiences</h3>
            </div>
            <div class="space-y-3">
              <div 
                v-for="(experience, index) in doctor.experiences" 
                :key="index"
                class="d-flex align-items-start mb-3"
              >
                <div class="bg-bsh-accent rounded-circle me-3 mt-1" style="width: 8px; height: 8px; min-width: 8px;"></div>
                <div class="text-muted">{{ experience }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.space-y-3 > * + * {
  margin-top: 1rem;
}

@media (max-width: 768px) {
  .display-5 {
    font-size: 2rem !important;
  }
}
</style>