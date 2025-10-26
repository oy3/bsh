<script>
import testimonialData from "../data/testimonials.json";
import hospitalInfo from "../data/hospital-info.json";
import servicesData from "../data/services.json";
import emailService from "../services/emailService.js";

export default {
  name: "Services",
  data() {
    return {
      info: hospitalInfo,
      services: servicesData,
      testimonials: testimonialData,
      appointmentForm: {
        fullName: "",
        email: "",
        service: "",
        preferredDate: "",
        message: "",
      },
      isSubmittingAppointment: false,
      appointmentMessage: "",
      appointmentSuccess: false,
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
  computed: {
    mainServices() {
      return this.services.filter((service) =>
        ["family-health", "surgery", "gynaecology", "haematology"].includes(
          service.id
        )
      );
    },
    otherServices() {
      return this.services.filter(
        (service) =>
          !["family-health", "surgery", "gynaecology", "haematology"].includes(
            service.id
          )
      );
    },
  },
  methods: {
    async submitAppointment() {
      if (!this.validateAppointmentForm()) return;

      this.isSubmittingAppointment = true;
      this.appointmentMessage = "";

      try {
        const result = await emailService.sendAppointmentEmail(this.appointmentForm);
        
        this.isSubmittingAppointment = false;
        this.appointmentSuccess = result.success;
        this.appointmentMessage = result.message;
        
        if (result.success) {
          this.resetAppointmentForm();
        }
      } catch (error) {
        this.isSubmittingAppointment = false;
        this.appointmentSuccess = false;
        this.appointmentMessage = "An error occurred. Please try again later.";
        console.error('Appointment submission error:', error);
      }
    },
    validateAppointmentForm() {
      const required = ["fullName", "email", "service", "preferredDate"];
      for (let field of required) {
        if (!this.appointmentForm[field]) {
          alert(`Please fill in the ${field.replace(/([A-Z])/g, " $1").toLowerCase()} field.`);
          return false;
        }
      }
      return true;
    },
    resetAppointmentForm() {
      this.appointmentForm = {
        fullName: "",
        email: "",
        service: "",
        preferredDate: "",
        message: "",
      };

      // Clear success message after 5 seconds
      setTimeout(() => {
        this.appointmentMessage = "";
        this.appointmentSuccess = false;
      }, 5000);
    },
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
          <div
            v-for="(service, index) in mainServices"
            :key="service.id"
            class="col-md-6 col-lg-3"
          >
            <router-link
              :to="{ name: 'ServiceDetail', params: { id: service.id } }"
              class="card text-bg-light h-100 border-0 hover-card text-decoration-none"
            >
              <div class="card-body p-4">
                <div
                  class="icon-wrapper rounded-circle mb-4 d-flex align-items-center justify-content-center bg-primary bg-opacity-10"
                >
                  <i
                    class="text-bsh-primary fs-3 bi"
                    :class="[service.icon]"
                  ></i>
                </div>
                <h5 class="fw-bold mb-3 text-dark">{{ service.title }}</h5>
                <p class="text-muted mb-0">{{ service.shortDescription }}</p>
              </div>
            </router-link>
          </div>
        </div>

        <!-- Other Services -->
        <div class="other-services mt-5">
          <h3 class="fw-bold mb-4">Other Services</h3>
          <div class="row g-4">
            <div
              v-for="(service, index) in otherServices"
              :key="service.id"
              class="col-md-6 col-lg-4"
            >
              <router-link
                :to="{ name: 'ServiceDetail', params: { id: service.id } }"
                class="card border-0 shadow-sm hover-card text-decoration-none h-100"
              >
                <div class="card-body p-4">
                  <div class="d-flex align-items-center">
                    <div>
                      <div
                        class="icon-wrapper rounded-circle me-3 d-flex align-items-center justify-content-center bg-opacity-10 bg-success"
                      >
                        <i
                          class="bi text-bsh-accent fs-4"
                          :class="[service.icon]"
                        ></i>
                      </div>
                    </div>
                    <div>
                      <h5 class="fw-bold mb-2 text-dark">
                        {{ service.title }}
                      </h5>
                      <p class="text-muted mb-0 small">
                        {{ service.shortDescription }}
                      </p>
                    </div>
                    <i class="bi bi-chevron-right ms-auto text-bsh-accent"></i>
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
                <ul
                  v-for="(hours, day) in info.workingHours.regular"
                  :key="day"
                  class="text-muted text-capitalize p-0 mb-0"
                  style="list-style-type: none"
                >
                  <li class="mb-2">{{ day }}: {{ hours }}</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card border-0 shadow-sm">
              <div class="card-body">
                <!-- Success Message -->
                <div
                  v-if="appointmentSuccess"
                  class="alert alert-success d-flex align-items-center mb-4"
                >
                  <i class="bi bi-check-circle-fill me-2"></i>
                  {{ appointmentMessage }}
                </div>

                <!-- Error Message -->
                <div
                  v-if="!appointmentSuccess && appointmentMessage"
                  class="alert alert-danger d-flex align-items-center mb-4"
                >
                  <i class="bi bi-exclamation-triangle-fill me-2"></i>
                  {{ appointmentMessage }}
                </div>

                <form @submit.prevent="submitAppointment">
                  <div class="mb-3">
                    <label for="appointmentName" class="form-label">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="appointmentName"
                      v-model="appointmentForm.fullName"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div class="mb-3">
                    <label for="appointmentEmail" class="form-label">
                      Email address *
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id="appointmentEmail"
                      v-model="appointmentForm.email"
                      placeholder="name@example.com"
                      required
                    />
                  </div>
                  <div class="mb-3">
                    <label for="appointmentService" class="form-label">
                      Service *
                    </label>
                    <select
                      class="form-select"
                      id="appointmentService"
                      v-model="appointmentForm.service"
                      required
                    >
                      <option value="">Select a service</option>
                      <option v-for="service in services" :key="service.id" :value="service.title">
                        {{ service.title }}
                      </option>
                    </select>
                  </div>
                  <div class="mb-3">
                    <label for="appointmentDate" class="form-label">
                      Preferred Date *
                    </label>
                    <input
                      type="datetime-local"
                      class="form-control"
                      id="appointmentDate"
                      v-model="appointmentForm.preferredDate"
                      required
                    />
                  </div>
                  <div class="mb-3">
                    <label for="appointmentMessage" class="form-label">
                      Message (Optional)
                    </label>
                    <textarea
                      class="form-control"
                      id="appointmentMessage"
                      v-model="appointmentForm.message"
                      rows="3"
                      placeholder="Any additional information..."
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    class="btn btn-bsh-accent w-100"
                    :disabled="isSubmittingAppointment"
                  >
                    <span
                      v-if="isSubmittingAppointment"
                      class="spinner-border spinner-border-sm me-2"
                    ></span>
                    {{ isSubmittingAppointment ? 'Booking...' : 'Book Appointment' }}
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
          <div class="d-flex gap-5 col-md-6 mx-auto">
            <a
              class="text-white link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
              :href="`tel:${
                info.contact.phones.find((phone) => phone.type === 'emergency')
                  .number
              }`"
            >
              <i class="bi bi-telephone-fill me-1"></i>
              {{
                info.contact.phones.find((phone) => phone.type === "emergency")
                  .number
              }}
            </a>
            <a
              class="text-white link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
              :href="`mailto:${
                info.contact.emails.find((email) => email.type === 'general')
                  .address
              }`"
            >
              <i class="bi bi-envelope-fill me-1"></i>
              {{
                info.contact.emails.find((email) => email.type === "general")
                  .address
              }}
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
