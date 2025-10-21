<script>
import servicesData from "../data/services.json";
import hospitalInfo from "../data/hospital-info.json";
import doctorsData from "../data/doctors.json";

export default {
  name: "ServiceDetail",
  data() {
    return {
      info: hospitalInfo,
      service: null,
      doctors: doctorsData.doctors,
    };
  },
  computed: {
    otherServices() {
      return servicesData.filter((s) => s.id !== this.service?.id).slice(0, 5); // Show only 5 other services
    },
    relatedDoctors() {
      if (!this.service) return [];
      return this.doctors.filter((doctor) =>
        doctor.specialties.some(
          (specialty) =>
            this.service.title
              .toLowerCase()
              .includes(specialty.toLowerCase()) ||
            specialty.toLowerCase().includes(this.service.title.toLowerCase())
        )
      );
    },
  },
  methods: {
    loadService() {
      const service = servicesData.find((s) => s.id === this.$route.params.id);
      if (service) {
        this.service = service;
      } else {
        this.$router.push("/services");
      }
    },
  },
  created() {
    this.loadService();
  },
  watch: {
    "$route.params.id"() {
      this.loadService();
    },
  },
};
</script>

<template>
  <div class="service-detail" v-if="service">
    <!-- Hero Banner -->
    <section
      class="hero-banner position-relative overflow-hidden py-5 bg-bsh-primary"
    >
      <div class="container-fluid px-md-5 px-3">
        <div class="row min-vh-40 d-flex align-items-center py-5">
          <div class="col-lg-8">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb mb-3">
                <li class="breadcrumb-item">
                  <router-link
                    to="/services"
                    class="text-white-50 text-decoration-none"
                    >Services</router-link
                  >
                </li>
                <li
                  class="breadcrumb-item text-white active"
                  aria-current="page"
                >
                  {{ service.title }}
                </li>
              </ol>
            </nav>
            <h1 class="text-white display-4 fw-bold mb-3">
              {{ service.title }}
            </h1>
            <p class="text-white-50 lead">{{ service.shortDescription }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <section class="py-5">
      <div class="container-fluid px-md-5 px-3">
        <div class="row g-5">
          <!-- Service Description -->
          <div class="col-lg-8">
            <div class="card border-0 mb-4">
              <div class="card-body">
                <h2 class="fw-bold mb-3">
                  About Our {{ service.title }} Services
                </h2>
                <p class="text-muted mb-0">{{ service.description }}</p>
              </div>
            </div>

            <!-- Service Features -->
            <div class="row g-4">
              <div
                v-for="(feature, index) in service.features"
                :key="index"
                class="col-md-6"
              >
                <div class="card border-0 h-100">
                  <div class="card-body p-2">
                    <h5 class="fw-bold mb-1 d-flex align-items-center">
                      <i class="bi bi-check-circle-fill text-success me-2"></i>
                      {{ feature.title }}
                    </h5>
                    <p class="text-muted mb-0">{{ feature.description }}</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Related Doctors -->
            <div v-if="relatedDoctors.length > 0" class="mt-5">
              <h3 class="fw-bold">Our Specialists</h3>
              <p class="text-muted mb-4">
                Our team of specialists is here to provide you with the best
                care possible.
              </p>
              <div class="row g-4">
                <div
                  v-for="doctor in relatedDoctors"
                  :key="doctor.id"
                  class="col-md-12"
                >
                  <div class="card border-0 shadow-sm">
                    <div class="card-body p-4">
                      <div class="d-flex align-items-center">
                        <div>
                          <img
                            :src="doctor.image"
                            :alt="doctor.name"
                            class="rounded-circle me-3"
                            style="width: 80px; height: 80px; object-fit: cover"
                          />
                        </div>
                        <div>
                          <h5 class="fw-bold mb-1">{{ doctor.name }}</h5>
                          <p class="text-muted mb-2">{{ doctor.role }}</p>
                          <div class="d-flex align-items-center">
                            <span
                              v-for="(specialty, index) in doctor.specialties"
                              :key="index"
                              class="badge bg-light text-dark me-2"
                            >
                              {{ specialty }}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Sidebar -->
          <div class="col-lg-4">
            <!-- Book Appointment -->
            <div class="card border-0 shadow-sm mb-4">
              <div class="card-body p-4">
                <h5 class="fw-bold mb-2">Book an Appointment</h5>
                <p class="text-muted mb-4">
                  Schedule a consultation with our specialists for
                  {{ service.title.toLowerCase() }} services.
                </p>
                <router-link to="/contact" class="btn btn-primary w-100 mb-3">
                  Request Appointment
                  <i class="bi bi-arrow-right ms-2"></i>
                </router-link>
                <p class="small text-muted mb-0">
                  <i class="bi bi-clock me-2"></i>
                  Response within 24 hours
                </p>
              </div>
            </div>

            <!-- Emergency Contact -->
            <div class="card border-0 shadow-sm mb-4 bg-danger text-white">
              <div class="card-body p-4">
                <h5 class="fw-bold mb-3">Emergency?</h5>
                <p class="mb-3">
                  For immediate assistance, call our 24/7 emergency line:
                </p>
                <a href="tel:+2341234567890" class="btn btn-light w-100">
                  <i class="bi bi-telephone-fill me-2"></i>
                  {{
                    info.contact.phones.find(
                      (phone) => phone.type === "emergency"
                    ).number
                  }}
                </a>
              </div>
            </div>

            <!-- Other Services -->
            <div class="card border-0 shadow-sm">
              <div class="card-body p-4">
                <h5 class="fw-bold mb-4">Other Services</h5>
                <div class="d-grid gap-2">
                  <router-link
                    v-for="otherService in otherServices"
                    :key="otherService.id"
                    :to="{
                      name: 'ServiceDetail',
                      params: { id: otherService.id },
                    }"
                    class="btn btn-outline-secondary text-start"
                  >
                    <i :class="['bi', otherService.icon, 'me-2']"></i>
                    {{ otherService.title }}
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-5 bg-bsh-primary">
      <div class="container-fluid px-md-5 px-3">
        <div class="row align-items-center">
          <div class="col-lg-8">
            <h2 class="fw-bold mb-4">
              Have Questions About {{ service.title }}?
            </h2>
            <p class="mb-lg-0">
              Contact us today to learn more about our services or to schedule a
              consultation.
            </p>
          </div>
          <div class="col-lg-4 text-lg-end">
            <router-link to="/contact" class="btn btn-bsh-secondary btn-lg px-4">
              Contact Us
              <i class="bi bi-arrow-right ms-2"></i>
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.hero-banner {
  background: linear-gradient(
    135deg,
    var(--bsh-primary) 0%,
    var(--bsh-secondary) 100%
  );
}

.min-vh-40 {
  min-height: 40vh;
}

.breadcrumb-item + .breadcrumb-item::before {
  color: rgba(255, 255, 255, 0.5);
}

@media (max-width: 768px) {
  .min-vh-40 {
    min-height: 30vh;
  }

  .hero-banner h1 {
    font-size: 2.5rem !important;
  }
}
</style>
