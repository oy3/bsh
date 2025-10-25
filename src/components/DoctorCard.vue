<script>
export default {
  name: "DoctorCard",
  props: {
    doctor: {
      type: Object,
      required: true,
      validator(value) {
        return (
          value &&
          typeof value.name === "string" &&
          Array.isArray(value.specialties) &&
          typeof value.image === "string"
        );
      },
    },
    imageHeight: {
      type: [String, Number],
      default: 200,
    },
    imagePosition: {
      type: String,
      default: "80% 10%",
    },
  },
  methods: {
    formatSpecialties(specialties) {
      if (!specialties || specialties.length === 0) return "";
      if (specialties.length === 1) return specialties[0];
      if (specialties.length === 2)
        return `${specialties[0]} & ${specialties[1]}`;
      return (
        specialties.slice(0, -1).join(", ") +
        " & " +
        specialties[specialties.length - 1]
      );
    },
  },
};
</script>

<template>
  <router-link
    :to="{ name: 'DoctorDetail', params: { id: doctor.id } }"
    class="text-decoration-none"
  >
    <div
      class="card rounded-5 rounded-bottom-0 border-0 h-100 bg-light border-bottom border-bsh-primary border-5 hover-card"
    >
      <img
        :src="
          doctor.image
            ? doctor.image
            : 'https://placehold.co/400x400?text=IMAGE'
        "
        :alt="doctor.name"
        class="card-img-top object-fit-cover rounded-top-5"
        :style="{ objectPosition: imagePosition }"
        :height="imageHeight"
      />
      <div class="card-body">
        <h6 class="card-title fw-bold text-dark">{{ doctor.name }}</h6>
        <!-- <p class="card-text text-body-tertiary small mb-2">
          {{ doctor.role }}
        </p> -->
        <p class="card-text text-muted small">
          {{ formatSpecialties(doctor.specialties) }}
        </p>
      </div>
    </div>
  </router-link>
</template>

<style scoped>
.hover-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.hover-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15) !important;
}
</style>

<style scoped>
/* Add any doctor card specific styles here if needed */
</style>
