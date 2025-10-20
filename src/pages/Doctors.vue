<script>
import DoctorCard from '../components/DoctorCard.vue'
import DoctorDetailView from '../components/DoctorDetail.vue'
import doctorsData from '../data/doctors.json'

export default {
  name: 'Doctors',
  components: {
    DoctorCard,
    DoctorDetailView
  },
  data() {
    return {
      doctors: doctorsData.doctors,
      filteredDoctors: doctorsData.doctors,
      searchQuery: '',
      selectedSpecialty: 'All',
      specialties: this.getSpecialties(doctorsData.doctors),
      selectedDoctor: null,
      showDoctorDetail: false
    }
  },
  methods: {
    formatSpecialties(specialties) {
      if (!specialties || specialties.length === 0) return '';
      if (specialties.length === 1) return specialties[0];
      if (specialties.length === 2) return `${specialties[0]} & ${specialties[1]}`;
      return specialties.slice(0, -1).join(', ') + ' & ' + specialties[specialties.length - 1];
    },
    getSpecialties(doctors) {
      // Get all specialties from all doctors
      const allSpecialties = doctors.flatMap(doctor => doctor.specialties);
      
      // Get unique specialties
      const uniqueSpecialties = [...new Set(allSpecialties)];
      
      // Sort specialties alphabetically
      const sortedSpecialties = uniqueSpecialties.sort();
      
      // Always include 'All' at the beginning and 'Others' at the end
      return ['All', ...sortedSpecialties, 'Others'];
    },
    filterDoctors() {
      let filtered = this.doctors;
      
      // Filter by specialty
      if (this.selectedSpecialty !== 'All') {
        if (this.selectedSpecialty === 'Others') {
          // For 'Others', show doctors whose specialties are not in the main specialties list
          const mainSpecialties = this.specialties.filter(s => s !== 'All' && s !== 'Others');
          filtered = filtered.filter(doctor => 
            !doctor.specialties.some(specialty => mainSpecialties.includes(specialty))
          );
        } else {
          // For specific specialties, show doctors that have that specialty
          filtered = filtered.filter(doctor => 
            doctor.specialties.includes(this.selectedSpecialty)
          );
        }
      }
      
      // Filter by search query
      if (this.searchQuery) {
        filtered = filtered.filter(doctor =>
          doctor.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          doctor.specialties.some(s => s.toLowerCase().includes(this.searchQuery.toLowerCase())) ||
          doctor.role.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      }
      
      this.filteredDoctors = filtered;
    },
    selectSpecialty(specialty) {
      this.selectedSpecialty = specialty;
      this.filterDoctors();
      // Reset doctor detail view when filter changes
      this.showDoctorDetail = false;
      this.selectedDoctor = null;
    },
    onSearchInput() {
      this.filterDoctors();
      // Reset doctor detail view when search changes
      this.showDoctorDetail = false;
      this.selectedDoctor = null;
    },
    selectDoctor(doctor) {
      this.selectedDoctor = doctor;
      this.showDoctorDetail = true;
    },
    backToDoctorsList() {
      this.showDoctorDetail = false;
      this.selectedDoctor = null;
    }
  },
  watch: {
    searchQuery() {
      this.filterDoctors();
    }
  }
}
</script>

<template>
  <div class="doctors">
    <!-- Hero Banner with Filters -->
    <section class="hero-banner position-relative overflow-hidden py-5 bg-bsh-primary">
      <div class="container-fluid px-md-5 px-3">
        <div class="row min-vh-50 d-flex align-items-center justify-content-center text-center py-5">
          <div class="col-lg-8">
            <h6 class="text-white text-uppercase mb-3 fw-light">
              Our Medical Team
            </h6>
            <h1 class="text-white display-4 fw-bold">
              Meet Our Expert Doctors
            </h1>
            <p class="text-white-50 lead mt-3">
              Dedicated healthcare professionals committed to your well-being
            </p>
          </div>
        </div>

        <!-- Filter Section -->
        <div class="row justify-content-between align-items-center">
          <div class="col-lg-8">
            <div class="d-flex flex-wrap gap-2 justify-content-center justify-content-lg-start">
              <button
                v-for="specialty in specialties"
                :key="specialty"
                type="button"
                class="btn btn-sm rounded-pill px-4 py-2"
                :class="selectedSpecialty === specialty 
                  ? 'btn-primary text-white' 
                  : 'btn-outline-light text-white border-white'"
                @click="selectSpecialty(specialty)"
              >
                {{ specialty }}
              </button>
            </div>
          </div>
          <div class="col-lg-4 mt-3 mt-lg-0">
            <div class="position-relative">
              <input
                v-model="searchQuery"
                type="text"
                class="form-control rounded-pill py-2 px-4 pe-5"
                placeholder="Search doctors..."
                @input="onSearchInput"
              >
              <i class="bi bi-search position-absolute end-0 top-50 translate-middle-y me-3 text-muted"></i>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Doctors Grid -->
    <section class="py-5 px-md-5 px-3">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            
            <!-- Doctor List View -->
            <div v-if="!showDoctorDetail">
              <div class="d-flex justify-content-between align-items-center mb-4">
                <h5 class="text-muted mb-0">
                  {{ filteredDoctors.length }} doctor{{ filteredDoctors.length !== 1 ? 's' : '' }} found
                </h5>
              </div>
              
              <!-- No Results -->
              <div v-if="filteredDoctors.length === 0" class="text-center py-5">
                <i class="bi bi-search text-muted display-1"></i>
                <h4 class="text-muted mt-3">No doctors found</h4>
                <p class="text-muted">Try adjusting your search criteria</p>
              </div>
              
              <!-- Doctors Grid -->
              <div v-else class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
                <div class="col" v-for="doctor in filteredDoctors" :key="doctor.id">
                  <div @click="selectDoctor(doctor)" class="cursor-pointer">
                    <DoctorCard :doctor="doctor" />
                  </div>
                </div>
              </div>
            </div>

            <!-- Doctor Detail View -->
            <DoctorDetailView 
              v-else 
              :doctor="selectedDoctor" 
              @back="backToDoctorsList" 
            />
            
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.doctors {
  min-height: 100vh;
}

.hero-banner {
  background: linear-gradient(
    135deg,
    var(--bsh-primary) 0%,
    var(--bsh-secondary) 100%
  );
  min-height: 50vh;
}

.hero-overlay {
  background: linear-gradient(
    135deg,
    rgba(44, 62, 80, 0.8) 0%,
    rgba(26, 37, 47, 0.9) 100%
  );
}

.min-vh-50 {
  min-height: 50vh;
}

.tracking-wider {
  letter-spacing: 0.1em;
}

.cursor-pointer {
  cursor: pointer;
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
  
  .display-5 {
    font-size: 2rem !important;
  }
}
</style>
