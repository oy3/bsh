<script>
export default {
  name: "HeroSection",
  data() {
    return {
      heroData: {
        title: "Compassionate care, exceptional results.",
        subtitle:
          "Our team of experienced professionals are committed to providing quality care and personalized attention to our clients.",
        buttonText: "See how we work",
        stats: [
          {
            number: "20+",
            label: "years of experience",
          },
          {
            number: "95%",
            label: "client satisfaction rating",
          },
          {
            number: "5,000+",
            label: "clients served annually",
          },
          {
            number: "10+",
            label: "professionals on staff",
          },
        ],
        badge: {
          avatars: ["👨‍💼", "👩‍💼", "👨‍💻"],
          text: "150K +",
          subtitle: "Client Success",
        },
      },
    };
  },
};
</script>

<template>
  <section
    class="hero-section position-relative overflow-hidden min-vh-100 d-flex align-items-center"
  >
    <!-- Background Image with Overlay -->
    <div class="position-absolute top-0 end-0 w-100 h-100 hero-bg-container">
      <div
        class="position-absolute top-0 start-0 w-100 h-100 hero-gradient"
        style="z-index: 2"
      ></div>
      <img
        src="/src/assets/bg-bsh.jpg"
        alt="BSH Team"
        class="w-100 h-100 object-fit-cover"
        style="object-position: center"
      />
    </div>

    <!-- Content Container -->
    <div class="container-fluid h-100 position-relative" style="z-index: 3">
      <div class="row h-100 align-items-center">
        <!-- Left Content -->
        <div class="col-lg-6 col-xl-5">
          <div class="ps-lg-5 pt-5 pt-lg-0">
            <!-- Main Heading -->
            <h1 class="text-white display-5 fw-bold mt-5 lh-1 mb-4">
              {{ heroData.title }}
            </h1>

            <!-- Subtitle -->
            <p class="text-white-50 mb-5 fs-5 lh-base" style="max-width: 500px">
              {{ heroData.subtitle }}
            </p>

            <div class="d-flex align-items-center text-white">
              <button
                class="btn btn-outline-light rounded-circle me-2 d-flex align-items-center justify-content-center p-0"
                style="height: 30px; width: 30px"
              >
                <i
                  class="bi bi-play-fill"
                  style="font-size: 14px; margin-left: 2px"
                ></i>
              </button>
              <span class="small fw-medium">{{ heroData.buttonText }}</span>
            </div>
          </div>
        </div>

        <!-- Right Side - Image Area -->
        <div
          class="col-lg-6 col-xl-7 position-relative d-flex justify-content-end"
        >
          <!-- Success Badge -->
          <div
            class="card shadow-sm position-absolute badge-position bg-white bg-opacity-10 border border-light-subtle rounded-pill p-2"
          >
            <div class="d-flex align-items-center">
              <div class="d-flex me-2">
                <span
                  v-for="(avatar, index) in heroData.badge.avatars"
                  :key="index"
                  class="rounded-circle bg-light d-flex align-items-center justify-content-center border border-3 border-white avatar-overlap"
                  style="width: 40px; height: 40px; font-size: 1.2rem"
                  :style="{
                    zIndex: heroData.badge.avatars.length - index,
                    marginLeft: index > 0 ? '-10px' : '0',
                  }"
                >
                  {{ avatar }}
                </span>
              </div>
              <div class="lh-1">
                <div class="fw-bold text-dark h6 mb-0">
                  {{ heroData.badge.text }}
                </div>
                <div class="text-muted" style="font-size: x-small">
                  {{ heroData.badge.subtitle }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Stats Section positioned at bottom right -->
      <div
        class="position-absolute end-0 stats-container border rounded-top-4 rounded-end-0 border-dark-subtle border-end-0 border-bottom-0"
      >
        <div
          class="card bg-white bg-opacity-10 backdrop-blur rounded-top-4 rounded-end-0 rounded-bottom-0 border-0 p-4 p-lg-5"
        >
          <div class="row g-3 g-lg-4 text-center">
            <div
              v-for="(stat, index) in heroData.stats"
              :key="index"
              class="col-6 col-lg-3"
            >
              <div class="text-white">
                <div class="display-6 fw-bold mb-2">{{ stat.number }}</div>
                <div class="small opacity-75 lh-base">{{ stat.label }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  background-color: var(--bsh-primary);
}

.hero-bg-container {
  width: 90%;
}

.hero-gradient {
  background-image: linear-gradient(
    to left,
    rgba(255, 0, 0, 0),
    var(--bsh-primary)
  );
}

.hero-btn:hover {
  transform: translateX(10px);
  transition: transform 0.3s ease;
}

.badge-position {
  top: 20%;
  right: 5%;
  min-width: 200px;
}

.stats-container {
  width: 100%;
  max-width: 70%;
}

.backdrop-blur {
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}

/* Responsive Design */
@media (max-width: 991px) {
  .hero-bg-container {
    width: 100%;
    opacity: 0.3;
  }

  .badge-position {
    position: static !important;
    margin-top: 2rem;
    margin-bottom: 2rem;
    min-width: auto;
  }

  .stats-container {
    position: static !important;
    margin-top: 2rem;
    max-width: 100%;
    border: 1px solid #adb5bd !important;
    border-radius: 30px 30px 0px 0px !important;
  }

  .stats-container .card {
    border-radius: 30px 30px 0px 0px !important;
  }
}

@media (max-width: 768px) {
  .stats-container {
  }
  .stats-container .card {
    padding: 1.5rem !important;
  }
}
</style>
