<script>
export default {
  name: 'Testimonials',
  data() {
    return {
      testimonials: [
        {
          id: 1,
          name: 'John Doe',
          rating: 3,
          text: 'BSH has been a lifesaver for my family. The staff is friendly and the services are top-notch. I highly recommend BSH to anyone in need of healthcare.',
          avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D'
        },
        {
          id: 2,
          name: 'Mary Ann',
          rating: 5,
          text: 'I had a fantastic experience at BSH. The staff was friendly, and the services were top-notch. I highly recommend BSH to anyone in need of healthcare.',
          avatar: 'https://plus.unsplash.com/premium_photo-1689551670902-19b441a6afde?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29tYW58ZW58MHx8MHx8fDA%3D'
        },
        {
          id: 3,
          name: 'Robert Smith',
          rating: 4,
          text: 'Outstanding medical care and professional staff. BSH exceeded my expectations in every way possible.',
          avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
          id: 4,
          name: 'Lisa Johnson',
          rating: 5,
          text: 'The best healthcare experience I have ever had. Professional, caring, and efficient service.',
          avatar: 'https://img.freepik.com/free-photo/african-teenage-girl-portrait-happy-smiling-face_53876-146757.jpg?semt=ais_hybrid&w=740&q=80'
        }
      ]
    }
  },
  methods: {
    scrollTestimonials(direction) {
      const container = this.$refs.testimonialsContainer;
      const scrollAmount = 400;
      if (direction === 'left') {
        container.scrollLeft -= scrollAmount;
      } else {
        container.scrollLeft += scrollAmount;
      }
    },
    renderStars(rating) {
      const stars = [];
      for (let i = 1; i <= 5; i++) {
        stars.push(i <= rating ? 'bi-star-fill' : 'bi-star');
      }
      return stars;
    }
  }
}
</script>

<template>
  <section class="bg-light py-5 px-md-5 px-3">
    <h6 class="text-uppercase border-bsh-accent border-start border-3 ps-2">Testimonial</h6>
    <h2 class="fw-bold mb-5">Hear what our patients say</h2>

    <div
      ref="testimonialsContainer"
      class="d-flex gap-4 overflow-auto testimonials-scroll mb-4"
      style="scroll-behavior: smooth"
    >
      <div
        v-for="testimonial in testimonials"
        :key="testimonial.id"
        class="card border-light-subtle flex-shrink-0"
        style="min-width: 400px; max-width: 400px"
      >
        <div class="card-body pb-0">
          <p class="card-text">
            <i class="bi bi-quote fs-3 text-body-tertiary"></i>
            <span>{{ testimonial.text }}</span>
            <i
              class="bi bi-quote fs-3 text-body-tertiary"
              style="transform: rotate(180deg); float: right"
            ></i>
          </p>
        </div>
        <div class="card-footer bg-white border-top-0">
          <div class="d-flex align-items-center">
            <img
              :src="testimonial.avatar"
              :alt="testimonial.name"
              class="rounded-circle me-2 object-fit-cover"
              style="width: 40px; height: 40px"
            />
            <div>
              <h6 class="mb-0 fw-bold">{{ testimonial.name }}</h6>
              <div class="text-warning">
                <i
                  v-for="star in renderStars(testimonial.rating)"
                  :key="star"
                  class="bi"
                  :class="star"
                ></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="d-flex gap-2 justify-content-center">
      <button
        @click="scrollTestimonials('left')"
        class="btn btn-outline-bsh-accent rounded-circle d-flex align-items-center justify-content-center p-0"
        style="height: 40px; width: 40px"
      >
        <i class="bi bi-arrow-left-short fs-3"></i>
      </button>
      <button
        @click="scrollTestimonials('right')"
        class="btn btn-outline-bsh-accent rounded-circle d-flex align-items-center justify-content-center p-0"
        style="height: 40px; width: 40px"
      >
        <i class="bi bi-arrow-right-short fs-3"></i>
      </button>
    </div>
  </section>
</template>

<style scoped>
.testimonials-scroll {
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* Internet Explorer 10+ */
}

.testimonials-scroll::-webkit-scrollbar {
  display: none; /* WebKit */
}
</style>
