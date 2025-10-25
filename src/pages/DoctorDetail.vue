<script>
import doctorsData from "../data/doctors.json";
import hospitalInfo from "../data/hospital-info.json";

export default {
  name: "DoctorDetail",
  data() {
    return {
      info: hospitalInfo,
      doctor: null,
      doctors: doctorsData.doctors,
    };
  },
  computed: {
    otherDoctors() {
      return this.doctors.filter((d) => d.id !== this.doctor?.id).slice(0, 4); // Show only 4 other doctors
    },
    relatedDoctors() {
      if (!this.doctor) return [];
      return this.doctors.filter(doc => 
        doc.id !== this.doctor.id &&
        doc.specialties.some(specialty => 
          this.doctor.specialties.includes(specialty)
        )
      ).slice(0, 3);
    },
  },
  methods: {
    loadDoctor() {
      const doctorId = parseInt(this.$route.params.id);
      const doctor = this.doctors.find((d) => d.id === doctorId);
      if (doctor) {
        this.doctor = doctor;
      } else {
        this.$router.push("/doctors");
      }
    },
    formatSpecialties(specialties) {
      if (!specialties || specialties.length === 0) return '';
      if (specialties.length === 1) return specialties[0];
      if (specialties.length === 2) return `${specialties[0]} & ${specialties[1]}`;
      return specialties.slice(0, -1).join(', ') + ' & ' + specialties[specialties.length - 1];
    },
  },
  created() {
    this.loadDoctor();
  },
  watch: {
    "$route.params.id"() {
      this.loadDoctor();
    },
  },
};
</script>

<template>
  <div class="doctor-detail" v-if="doctor">
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
                    to="/doctors"
                    class="text-white-50 text-decoration-none"
                    >Doctors</router-link
                  >
                </li>
                <li
                  class="breadcrumb-item text-white active"
                  aria-current="page"
                >
                  {{ doctor.name }}
                </li>
              </ol>
            </nav>
            <h1 class="text-white display-4 fw-bold mb-3">
              {{ doctor.name }}
            </h1>
            <p class="text-white-50 lead">{{ doctor.role }}</p>
            <div class="mt-3">
              <span v-for="(specialty, index) in doctor.specialties" :key="index"
                class="badge bg-white bg-opacity-20 text-bsh-accent me-2 mb-2 px-3 py-2">
                {{ specialty }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <section class="py-5">
      <div class="container-fluid px-md-5 px-3">
        <div class="row g-5">
          <!-- Doctor Information -->
          <div class="col-lg-8">
            <div class="row g-4">
              <!-- About Doctor -->
              <div class="col-12">
                <div class="card border-0 shadow-sm">
                  <div class="card-body p-4">
                    <div class="row">
                      <div class="col-md-4 text-center mb-4 mb-md-0">
                        <img 
                          :src="  doctor.image
            ? doctor.image
            : 'https://placehold.co/400x400?text=IMAGE'" 
                          :alt="doctor.name"
                          class="rounded-circle mb-3"
                          style="width: 200px; height: 200px; object-fit: cover;"
                        />
                        <h4 class="fw-bold mb-1">{{ doctor.name }}</h4>
                        <p class="text-muted mb-2">{{ doctor.titles }}</p>
                        <p class="text-bsh-primary fw-semibold">{{ doctor.role }}</p>
                      </div>
                      <div class="col-md-8">
                        <h3 class="fw-bold mb-3">About Dr. {{ doctor.name.split(' ').pop() }}</h3>
                        <p class="text-muted mb-4">{{ doctor.overview }}</p>
                        
                        <div class="row">
                          <div class="col-md-6 mb-3">
                            <h6 class="fw-bold text-dark">Division:</h6>
                            <p class="text-muted">{{ doctor.division }}</p>
                          </div>
                          <div class="col-md-6 mb-3">
                            <h6 class="fw-bold text-dark">Specialties:</h6>
                            <p class="text-muted">{{ formatSpecialties(doctor.specialties) }}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Education -->
              <div class="col-md-6" v-if="doctor.degrees && doctor.degrees.length > 0">
                <div class="card bg-light border-0 h-100">
                  <div class="card-body p-4">
                    <h5 class="fw-bold mb-3 d-flex align-items-center">
                      <i class="bi bi-mortarboard-fill text-bsh-accent me-2"></i>
                      Education
                    </h5>
                    <div v-for="(degree, index) in doctor.degrees" :key="index" class="mb-3">
                      <h6 class="fw-semibold mb-1">{{ degree.degree }}</h6>
                      <p class="text-muted small mb-0">{{ degree.school }}</p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Experience -->
              <div class="col-md-6" v-if="doctor.experiences && doctor.experiences.length > 0">
                <div class="card bg-light border-0 h-100">
                  <div class="card-body p-4">
                    <h5 class="fw-bold mb-3 d-flex align-items-center">
                      <i class="bi bi-briefcase-fill text-bsh-accent me-2"></i>
                      Experience
                    </h5>
                    <ul class="list-unstyled">
                      <li v-for="(experience, index) in doctor.experiences" :key="index" class="mb-2">
                        <i class="bi bi-check-circle-fill text-success me-2"></i>
                        {{ experience }}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <!-- Related Doctors -->
            <div v-if="relatedDoctors.length > 0" class="mt-5">
              <h3 class="fw-bold mb-4">Related Specialists</h3>
              <div class="row g-4">
                <div v-for="relatedDoctor in relatedDoctors" :key="relatedDoctor.id" class="col-md-4">
                  <div class="card border-0 shadow-sm">
                    <div class="card-body p-3 text-center">
                      <img 
                        :src="relatedDoctor.image" 
                        :alt="relatedDoctor.name"
                        class="rounded-circle mb-3"
                        style="width: 80px; height: 80px; object-fit: cover;"
                      />
                      <h6 class="fw-bold mb-1">{{ relatedDoctor.name }}</h6>
                      <p class="text-muted small mb-2">{{ relatedDoctor.role }}</p>
                      <router-link 
                        :to="{ name: 'DoctorDetail', params: { id: relatedDoctor.id } }"
                        class="btn btn-outline-primary btn-sm"
                      >
                        View Profile
                      </router-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Sidebar -->
          <div class="col-lg-4">
            <!-- Contact Doctor -->
            <div class="card border-0 shadow-sm mb-4">
              <div class="card-body p-4">
                <h5 class="fw-bold mb-4">Book Appointment</h5>
                <p class="text-muted mb-4">
                  Schedule a consultation with {{ doctor.name }}.
                </p>
                <router-link to="/contact" class="btn btn-bsh-accent w-100 mb-3">
                  Request Appointment
                  <i class="bi bi-arrow-right ms-2"></i>
                </router-link>
                <div class="d-flex align-items-center text-muted">
                  <i class="bi bi-clock me-2"></i>
                  <small>Response within 24 hours</small>
                </div>
              </div>
            </div>

            <!-- Doctor Contact Info -->
            <div class="card border-0 shadow-sm mb-4">
              <div class="card-body p-4">
                <h5 class="fw-bold mb-3">Contact Information</h5>
                <div class="mb-3">
                  <div class="d-flex align-items-center mb-2">
                    <i class="bi bi-envelope text-primary me-3"></i>
                    <div>
                      <small class="text-muted d-block">Email</small>
                      <a :href="`mailto:${doctor.email}`" class="text-decoration-none">
                        {{ doctor.email ? doctor.email : 'N/A'}}
                      </a>
                    </div>
                  </div>
                </div>
                <div class="mb-3">
                  <div class="d-flex align-items-center mb-2">
                    <i class="bi bi-telephone text-success me-3"></i>
                    <div>
                      <small class="text-muted d-block">Phone</small>
                      <a :href="`tel:${doctor.phone}`" class="text-decoration-none">
                        {{ doctor.phone ?doctor.phone  : 'N/A'}}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Emergency Contact -->
            <div class="card border-0 bg-danger text-white">
              <div class="card-body p-4">
                <h5 class="fw-bold mb-3">Emergency?</h5>
                <p class="mb-3">
                  For immediate assistance, call our 24/7 emergency line:
                </p>
                <a 
                  :href="`tel:${info.contact.phones.find(phone => phone.type === 'emergency').number}`" 
                  class="btn btn-outline-light w-100"
                >
                  <i class="bi bi-telephone-fill me-2"></i>
                  {{ info.contact.phones.find(phone => phone.type === 'emergency').number }}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.doctor-detail {
  min-height: 100vh;
}

.hero-banner {
  background: linear-gradient(
    135deg,
    var(--bsh-primary) 0%,
    var(--bsh-secondary) 100%
  );
  min-height: 40vh;
}

.min-vh-40 {
  min-height: 40vh;
}

.breadcrumb-item + .breadcrumb-item::before {
  content: ">";
  color: rgba(255, 255, 255, 0.5);
}

@media (max-width: 768px) {
  .hero-banner {
    min-height: 30vh;
  }

  .min-vh-40 {
    min-height: 30vh;
  }

  .hero-banner h1 {
    font-size: 2.5rem !important;
  }
}
</style>