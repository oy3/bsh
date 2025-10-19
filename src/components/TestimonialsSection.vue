<script>
import testimonialsData from "../data/testimonials.json";

export default {
  name: "Testimonials",
  data() {
    return {
      testimonials: testimonialsData,
    };
  },
  methods: {
    scrollTestimonials(direction) {
      const container = this.$refs.testimonialsContainer;
      const scrollAmount = 400;
      if (direction === "left") {
        container.scrollLeft -= scrollAmount;
      } else {
        container.scrollLeft += scrollAmount;
      }
    },
    renderStars(rating) {
      const stars = [];
      for (let i = 1; i <= 5; i++) {
        stars.push(i <= rating ? "bi-star-fill" : "bi-star");
      }
      return stars;
    },
    truncatedText(review) {
      const text = review || "";
      return text.length > 200 ? text.substring(0, 200) + "..." : text;
    },
    getAvatarUrl(avatar) {
      // Handle null, undefined, empty string, or whitespace-only strings
      return avatar && avatar.trim() ? avatar : 'https://placehold.co/400';
    },
  },
  computed: {},
};
</script>

<template>
  <section class="bg-light py-5 px-md-5 px-3">
    <h6 class="text-uppercase border-bsh-accent border-start border-3 ps-2">
      Testimonial
    </h6>
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
            <span>{{ truncatedText(testimonial.text) }}</span>

            <i
              class="bi bi-quote fs-3 text-body-tertiary"
              style="transform: rotate(180deg); float: right"
            ></i>
          </p>
        </div>
        <div class="card-footer bg-white border-top-0">
          <div class="d-flex align-items-center">
            <img
              :src="getAvatarUrl(testimonial.avatar)"
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
