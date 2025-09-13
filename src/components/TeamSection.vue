<script>
export default {
  name: 'TeamSection',
  data() {
    return {
      doctors: [
        {
          id: 1,
          name: 'Dr. Fiona Wood',
          specialty: 'Cardiology',
          image: 'https://media.istockphoto.com/id/2050883733/photo/happy-successful-doctor-woman-medical-worker-in-white-lab-coat-standing-with-crossed-arms-on.jpg?s=612x612&w=0&k=20&c=XOMsFZDPrgn_jG9_702BTXyz114CxJwS2C45KYnLOqQ=',
        },
        {
          id: 2,
          name: 'Dr. Sarah Johnson',
          specialty: 'Pediatrics',
          image: 'https://www.shutterstock.com/image-photo/female-healthcare-professional-portrait-600nw-2218001039.jpg'
        },
        {
          id: 3,
          name: 'Dr. Michael Brown',
          specialty: 'Neurology',
          image: 'https://images.unsplash.com/photo-1605602517387-ec78b947335e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGJsYWNrJTIwZG9jdG9yfGVufDB8fDB8fHww'
        },
        {
          id: 4,
          name: 'Dr. Angela Davis',
          specialty: 'Dermatology',
          image: 'https://media.istockphoto.com/id/1603361100/photo/portrait-of-black-woman-in-pharmacy-with-tablet-smile-and-online-inventory-list-for-medicine.jpg?s=612x612&w=0&k=20&c=XmWkRM4DHvtVUPNG_7uzaKFhWumBN2egZMgAK7ENomk='
        }
      ]
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
      <span class="text-muted d-flex align-items-center">
        <small> View Full Team </small>
        <i
          class="bi bi-arrow-up-short fs-4 d-inline-block mb-0 text-bsh-accent"
          style="transform: rotate(45deg)"
        ></i>
      </span>
    </div>

    <div class="row row-cols-1 row-cols-md-4 g-4">
      <div class="col" v-for="doctor in doctors" :key="doctor.id">
        <div
          class="card rounded-5 rounded-bottom-0 border-0 h-100 bg-light border-bottom border-bsh-primary border-5"
        >
          <img
            :src="doctor.image"
            :alt="doctor.name"
            class="card-img-top object-fit-cover rounded-top-5"
            style="object-position: 80% 10%"
            height="200"
          />
          <div class="card-body">
            <h6 class="card-title fw-bold">{{ doctor.name }}</h6>
            <p class="card-text text-body-tertiary small">
              {{ doctor.specialty }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Add any team-specific styles here if needed */
</style>
