<script>
import testimonialData from "../data/testimonials.json";

export default {
  name: "Services",
  data() {
    return {
      testimonials: testimonialData,
      otherServices: [
        {
          id: "emergency-care",
          title: "Emergency Care",
          description: "24/7 emergency medical services",
          icon: "bi bi-hospital-fill text-danger",
          iconClass:
            "bg-danger bg-opacity-10 rounded-circle me-3 d-flex align-items-center justify-content-center",
          arrowClass: "text-danger",
        },
        {
          id: "pediatrics",
          title: "Pediatrics",
          description: "Specialized healthcare for children",
          icon: "bi bi-heart-fill text-primary",
          iconClass:
            "bg-primary bg-opacity-10 rounded-circle me-3 d-flex align-items-center justify-content-center",
          arrowClass: "text-primary",
        },
        {
          id: "cardiology",
          title: "Cardiology",
          description: "Comprehensive heart care services",
          icon: "bi bi-heart-pulse-fill text-success",
          iconClass:
            "bg-success bg-opacity-10 rounded-circle me-3 d-flex align-items-center justify-content-center",
          arrowClass: "text-success",
        },
        {
          id: "neurology",
          title: "Neurology",
          description: "Expert care for nervous system disorders",
          icon: "bi bi-brain text-info",
          iconClass:
            "bg-info bg-opacity-10 rounded-circle me-3 d-flex align-items-center justify-content-center",
          arrowClass: "text-info",
        },
        {
          id: "dermatology",
          title: "Dermatology",
          description: "Complete skin care services",
          icon: "bi bi-bandaid-fill text-warning",
          iconClass:
            "bg-warning bg-opacity-10 rounded-circle me-3 d-flex align-items-center justify-content-center",
          arrowClass: "text-warning",
        },
      ],
      benefits: [
        {
          id: 1,
          title: "Expert Doctors",
          description:
            "Our team consists of highly skilled and experienced medical professionals.",
          icon: "bi bi-person-check-fill",
          iconClass: "",
        },
        {
          id: 2,
          title: "Modern Technology",
          description:
            "We use the latest medical equipment and technology for accurate diagnosis and treatment.",
          icon: "bi bi-laptop-fill",
          iconClass: "",
        },
        {
          id: 3,
          title: "24/7 Support",
          description:
            "Our emergency services and support are available round the clock.",
          icon: "bi bi-headset",
          iconClass: "",
        },
      ],
    };
  },
};
</script>

<template>
  <div class="services">
    <!-- Hero Section -->
    <section
      class="hero-banner position-relative overflow-hidden py-5 bg-bsh-primary"
    >
      <div class="container-fluid px-md-5 px-3">
        <div
          class="row min-vh-50 d-flex align-items-center justify-content-center py-5"
        >
          <div class="col-lg-8 text-center">
            <h6 class="text-white text-uppercase mb-3 fw-light">
              Our Services
            </h6>
            <h1 class="text-white display-5 fw-bold">
              Comprehensive Care for All
            </h1>
            <p class="text-white-50 lead mt-3">
              We offer a wide range of specialized healthcare services to meet
              your needs, from routine check-ups to advanced surgical
              procedures.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Grid -->
    <section class="services-section py-5">
      <div class="container-fluid px-md-5 px-3">
        <h2 class="section-title text-center mb-5">What We Offer</h2>

        <div class="row g-4">
          <!-- Family Health -->
          <div class="col-md-6 col-lg-3">
            <router-link
              :to="{ name: 'ServiceDetail', params: { id: 'family-health' } }"
              class="card text-bg-light h-100 border-0 hover-card text-decoration-none"
            >
              <div class="card-body p-4">
                <div
                  class="icon-wrapper bg-primary bg-opacity-10 rounded-circle mb-4 d-flex align-items-center justify-content-center"
                >
                  <i class="bi bi-people-fill text-primary fs-2"></i>
                </div>
                <h5 class="fw-bold mb-3 text-dark">Family Health</h5>
                <p class="text-muted mb-0">
                  Comprehensive care for every member of your family.
                </p>
              </div>
            </router-link>
          </div>

          <!-- Surgeries -->
          <div class="col-md-6 col-lg-3">
            <router-link
              :to="{ name: 'ServiceDetail', params: { id: 'surgeries' } }"
              class="card text-bg-light h-100 border-0 hover-card text-decoration-none"
            >
              <div class="card-body p-4">
                <div
                  class="icon-wrapper bg-success bg-opacity-10 rounded-circle mb-4 d-flex align-items-center justify-content-center"
                >
                  <i class="bi bi-scissors text-success fs-2"></i>
                </div>
                <h5 class="fw-bold mb-3 text-dark">Surgeries</h5>
                <p class="text-muted mb-0">
                  Advanced surgical procedures with state-of-the-art technology.
                </p>
              </div>
            </router-link>
          </div>

          <!-- Gynaecology -->
          <div class="col-md-6 col-lg-3">
            <router-link
              :to="{ name: 'ServiceDetail', params: { id: 'gynaecology' } }"
              class="card text-bg-light h-100 border-0 hover-card text-decoration-none"
            >
              <div class="card-body p-4">
                <div
                  class="icon-wrapper bg-danger bg-opacity-10 rounded-circle mb-4 d-flex align-items-center justify-content-center"
                >
                  <i class="bi bi-gender-female text-danger fs-2"></i>
                </div>
                <h5 class="fw-bold mb-3 text-dark">Gynaecology</h5>
                <p class="text-muted mb-0">
                  Specialized care for women's reproductive health.
                </p>
              </div>
            </router-link>
          </div>

          <!-- Haematology -->
          <div class="col-md-6 col-lg-3">
            <router-link
              :to="{ name: 'ServiceDetail', params: { id: 'haematology' } }"
              class="card text-bg-light h-100 border-0 hover-card text-decoration-none"
            >
              <div class="card-body p-4">
                <div
                  class="icon-wrapper bg-warning bg-opacity-10 rounded-circle mb-4 d-flex align-items-center justify-content-center"
                >
                  <i class="bi bi-droplet-fill text-warning fs-2"></i>
                </div>
                <h5 class="fw-bold mb-3 text-dark">Haematology</h5>
                <p class="text-muted mb-0">
                  Diagnosis and treatment of blood disorders.
                </p>
              </div>
            </router-link>
          </div>
        </div>

        <!-- Other Services -->
        <div class="other-services mt-5">
          <h3 class="fw-bold mb-4">Other Services</h3>
          <div class="row g-4">
            <div
              v-for="service in otherServices"
              :key="service.id"
              class="col-md-6 col-lg-4"
            >
              <router-link
                :to="{ name: 'ServiceDetail', params: { id: service.id } }"
                class="card border-0 shadow-sm hover-card text-decoration-none"
              >
                <div class="card-body p-4">
                  <div class="d-flex align-items-center">
                    <div class="icon-wrapper" :class="service.iconClass">
                      <i :class="service.icon"></i>
                    </div>
                    <div>
                      <h5 class="fw-bold mb-2 text-dark">
                        {{ service.title }}
                      </h5>
                      <p class="text-muted mb-0 small">
                        {{ service.description }}
                      </p>
                    </div>
                    <i
                      class="bi bi-chevron-right ms-auto"
                      :class="service.arrowClass"
                    ></i>
                  </div>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us -->
    <section class="why-choose-us py-5 bg-light">
      <div class="container-fluid px-md-5 px-3">
        <h2 class="section-title text-center fw-bold">Why Choose BSH?</h2>
        <p class="text-center mb-5">
          Your health is our priority. We are committed to providing exceptional
          care.
        </p>

        <div class="row g-4">
          <div v-for="benefit in benefits" :key="benefit.id" class="col-md-4">
            <div class="card border-0 bg-transparent h-100">
              <div class="card-body p-4 text-center">
                <div
                  class="icon-wrapper mx-auto mb-4 d-flex justify-content-center align-items-center bg-success bg-opacity-10 rounded-circle"
                  :class="benefit.iconClass"
                >
                  <i :class="benefit.icon" class="text-bsh-accent fs-4"></i>
                </div>
                <h5 class="fw-bold mb-3">{{ benefit.title }}</h5>
                <p class="text-muted mb-0">{{ benefit.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="testimonials-section py-5">
      <div class="container-fluid px-md-5 px-3">
        <h2 class="section-title text-center fw-bold mb-2">
          What Our Patients Say
        </h2>
        <p class="text-center text-muted mb-5">
          Real experiences from our valued patients
        </p>

        <div class="row g-4">
          <div
            v-for="testimonial in testimonials.slice(0, 3)"
            :key="testimonial.id"
            class="col-md-4"
          >
            <div class="card bg-light h-100 border-0">
              <div class="card-body p-4">
                <div class="d-flex align-items-center mb-4">
                  <div class="flex-shrink-0">
                    <img
                      :src="
                        testimonial.avatar ||
                        'https://ui-avatars.com/api/?name=' +
                          encodeURIComponent(testimonial.name)
                      "
                      :alt="testimonial.name"
                      class="rounded-circle"
                      width="50"
                      height="50"
                    />
                  </div>
                  <div class="flex-grow-1 ms-3">
                    <h5 class="mb-1 fw-bold">{{ testimonial.name }}</h5>
                    <div class="text-warning">
                      <i
                        v-for="n in 5"
                        :key="n"
                        class="bi"
                        :class="
                          n <= testimonial.rating ? 'bi-star-fill' : 'bi-star'
                        "
                      >
                      </i>
                    </div>
                  </div>
                </div>

                <p class="mb-0 text-muted">
                  <i class="bi bi-quote fs-5 text-body-tertiary"></i>
                  {{
                    testimonial.text.length > 200
                      ? testimonial.text.substring(0, 200) + "..."
                      : testimonial.text
                  }}
                  <i
                    class="bi bi-quote fs-5 text-body-tertiary"
                    style="transform: rotate(180deg); float: right"
                  ></i>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Book Appointment -->
    <section class="appt-section py-5" style="background-color: #cff4fc52">
      <div class="container-fluid px-md-5 px-3">
        <div class="row align-items-center g-3">
          <div class="col-md-6">
            <h2 class="fw-bold mb-4">Ready to Book an Appointment?</h2>
            <p class="text-muted mb-4">
              Fill out the form to schedule an appointment with one of our
              specialists. Our team will get back to you shortly to confirm your
              booking.
            </p>

            <div class="d-flex align-items-center">
              <div class="me-3">
                <i class="bi bi-clock fs-3 text-bsh-accent"></i>
              </div>
              <div class="small">
                <h6>Opening Hours</h6>
                <ul class="text-muted p-0 mb-0" style="list-style-type: none">
                  <li>Monday - Friday: 8:00 AM - 9:00 PM</li>
                  <li>Saturday: 9:00 AM - 6:00 PM</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card border-0 shadow-sm">
              <div class="card-body">
                <form action="">
                  <div class="mb-3">
                    <label for="exampleFormControlInput2" class="form-label">
                      Full Name
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleFormControlInput2"
                      placeholder="John Doe"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id="exampleFormControlInput1"
                      placeholder="name@example.com"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="exampleFormControlInput3" class="form-label">
                      Service
                    </label>
                    <select
                      class="form-select"
                      aria-label="Default select example"
                    >
                      <option selected>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                  <div class="mb-3">
                    <label for="exampleFormControlInput4" class="form-label">
                      Preffered Date
                    </label>
                    <input
                      type="datetime-local"
                      class="form-control"
                      id="exampleFormControlInput4"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">
                      Message (Optional)
                    </label>
                    <textarea
                      class="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                    ></textarea>
                  </div>
                  <button type="button" class="btn btn-bsh-accent w-100">
                    Book Appointment
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section bg-bsh-primary py-5">
      <div class="container-fluid px-md-5 px-3">
        <div class="text-center">
          <h2 class="fw-bold">24/7 Emergency Help Line</h2>
          <p class="mb-4">
            We are here for you around the clock. Do not hestitate to reach out
            in an emergency.
          </p>
          <div class="d-flex gap-5 col-6 mx-auto">
            <a
              class="text-white link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
              href="tel:+2347033449959"
            >
              <i class="bi bi-telephone-fill me-1"></i>
              +234 703 344 9959
            </a>
            <a
              class="text-white link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
              href="mailto:basespecialisthospital@gmail.com"
            >
              <i class="bi bi-envelope-fill me-1"></i>
              basespecialisthospital@gmail.com
            </a>
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

.min-vh-50 {
  min-height: 50vh;
}

.hover-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.hover-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15) !important;
}

.icon-wrapper {
  width: 50px;
  height: 50px;
  transition: transform 0.3s ease;
}

.hover-card:hover .icon-wrapper {
  transform: scale(1.1);
}

.why-choose-us .icon-wrapper {
  width: 50px;
  height: 50px;
}

@media (max-width: 768px) {
  .min-vh-50 {
    min-height: 40vh;
  }

  .hero-banner h1 {
    font-size: 2.5rem !important;
  }
}
</style>
