<script>
import DoctorCard from './DoctorCard.vue'
import doctorsData from '../data/doctors.json'

export default {
  name: 'TeamSection',
  components: {
    DoctorCard
  },
  data() {
    return {
      doctors: doctorsData.doctors.slice(0, 4) // Show only first 4 doctors
    }
  }
}
</script>

<template>
  <section class="py-5 px-md-5 px-3">
    <h6 class="text-uppercase border-bsh-accent border-start border-3 ps-2">
      Out Doctor Team
    </h6>

    <div class="d-flex justify-content-between align-items-end mb-5">
      <h2 class="fw-bold mb-0">Meet out expert doctors</h2>
      <router-link to="/doctors" class="link-success link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover">
      <span class="text-muted d-flex align-items-center">
        <small> View Full Team </small>
        <i
          class="bi bi-arrow-up-short fs-4 d-inline-block mb-0 text-bsh-accent"
          style="transform: rotate(45deg)"
        ></i>
      </span>
    </router-link>
    </div>

    <div class="row row-cols-1 row-cols-md-4 g-4">
      <div class="col" v-for="doctor in doctors" :key="doctor.id">
        <DoctorCard :doctor="doctor" />
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>
