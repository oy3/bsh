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
          typeof value.specialty === "string" &&
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
};
</script>

<template>
  <div
    class="card rounded-5 rounded-bottom-0 border-0 h-100 bg-light border-bottom border-bsh-primary border-5"
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
      <h6 class="card-title fw-bold">{{ doctor.name }}</h6>
      <p class="card-text text-body-tertiary small">
        {{ doctor.specialty }}
      </p>
    </div>
  </div>
</template>

<style scoped>
/* Add any doctor card specific styles here if needed */
</style>
