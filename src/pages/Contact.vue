<script>
import FAQSection from "../components/FAQSection.vue";
import hospitalInfo from "../data/hospital-info.json";

export default {
  name: "Contact",
  components: {
    FAQSection,
  },
  data() {
    return {
      info: hospitalInfo,
      form: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        department: "",
        subject: "",
        message: "",
        urgency: "normal",
      },
      departments: [
        { value: "general", label: "General Inquiry" },
        { value: "appointments", label: "Appointments" },
        { value: "emergency", label: "Emergency" },
        { value: "billing", label: "Billing & Insurance" },
        { value: "records", label: "Medical Records" },
        { value: "feedback", label: "Feedback & Complaints" },
        { value: "careers", label: "Careers" },
      ],
      isSubmitting: false,
      submitMessage: "",
      submitSuccess: false,
    };
  },
  methods: {
    async submitForm() {
      if (!this.validateForm()) return;

      this.isSubmitting = true;
      this.submitMessage = "";

      // Simulate form submission
      setTimeout(() => {
        this.isSubmitting = false;
        this.submitSuccess = true;
        this.submitMessage =
          "Thank you for contacting us! We'll respond within 24 hours.";
        this.resetForm();
      }, 2000);
    },
    validateForm() {
      const required = [
        "firstName",
        "lastName",
        "email",
        "phone",
        "department",
        "subject",
        "message",
      ];
      for (let field of required) {
        if (!this.form[field]) {
          alert(
            `Please fill in the ${field
              .replace(/([A-Z])/g, " $1")
              .toLowerCase()} field.`
          );
          return false;
        }
      }
      return true;
    },
    resetForm() {
      this.form = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        department: "",
        subject: "",
        message: "",
        urgency: "normal",
      };

      // Clear success message after 5 seconds
      setTimeout(() => {
        this.submitMessage = "";
        this.submitSuccess = false;
      }, 5000);
    },
  },
};
</script>

<template>
  <div class="contact">
    <!-- Hero Banner -->
    <section
      class="hero-banner position-relative overflow-hidden py-5 bg-bsh-primary"
    >
      <div class="container-fluid px-md-5 px-3">
        <div
          class="row min-vh-50 d-flex align-items-center justify-content-center text-center py-5"
        >
          <div class="col-lg-8">
            <h6 class="text-white text-uppercase mb-3 fw-light">
              Get in Touch
            </h6>
            <h1 class="text-white display-4 fw-bold">Contact Us</h1>
            <p class="text-white-50 lead mt-3">
              We're here to help with all your healthcare needs. Reach out to us
              anytime.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Information Cards -->
    <section class="py-5 bg-light">
      <div class="container-fluid px-md-5 px-3">
        <div class="row g-4 mb-5">
          <!-- Emergency Contact -->
          <div class="col-lg-3 col-md-6">
            <div class="card border-0 h-100 shadow-sm hover-card">
              <div class="card-body text-center p-4">
                <div
                  class="icon-wrapper bg-danger bg-opacity-10 rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center"
                  style="width: 70px; height: 70px"
                >
                  <i class="bi bi-telephone-fill text-danger fs-2"></i>
                </div>
                <h5 class="fw-bold mb-2 text-danger">Emergency</h5>
                <p class="text-muted mb-2">24/7 Emergency Line</p>
                <a
                  :href="`tel:${
                    info.contact.phones.find(
                      (phone) => phone.type === 'emergency'
                    ).number
                  }`"
                  class="text-decoration-none fw-semibold text-danger"
                >
                  {{
                    info.contact.phones.find(
                      (phone) => phone.type === "emergency"
                    ).number
                  }}
                </a>
              </div>
            </div>
          </div>

          <!-- General Contact -->
          <div class="col-lg-3 col-md-6">
            <div class="card border-0 h-100 shadow-sm hover-card">
              <div class="card-body text-center p-4">
                <div
                  class="icon-wrapper bg-primary bg-opacity-10 rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center"
                  style="width: 70px; height: 70px"
                >
                  <i class="bi bi-headset text-primary fs-2"></i>
                </div>
                <h5 class="fw-bold mb-2">General Inquiries</h5>
                <p class="text-muted mb-2">For appointments & questions</p>
                <a
                  :href="`tel:${
                    info.contact.phones.find((phone) => phone.type === 'main')
                      .number
                  }`"
                  class="text-decoration-none fw-semibold text-primary"
                  >{{
                    info.contact.phones.find((phone) => phone.type === "main")
                      .number
                  }}</a
                >
              </div>
            </div>
          </div>

          <!-- Email -->
          <div class="col-lg-3 col-md-6">
            <div class="card border-0 h-100 shadow-sm hover-card">
              <div class="card-body text-center p-4">
                <div
                  class="icon-wrapper bg-success bg-opacity-10 rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center"
                  style="width: 70px; height: 70px"
                >
                  <i class="bi bi-envelope-fill text-success fs-2"></i>
                </div>
                <h5 class="fw-bold mb-2">Email Us</h5>
                <p class="text-muted mb-2">Send us a message</p>
                <a
                  :href="`mailto:${
                    info.contact.emails.find(
                      (email) => email.type === 'general'
                    ).address
                  }`"
                  class="text-decoration-none fw-semibold text-success"
                >
                  {{
                    info.contact.emails.find(
                      (email) => email.type === "general"
                    ).address
                  }}
                </a>
              </div>
            </div>
          </div>

          <!-- Location -->
          <div class="col-lg-3 col-md-6">
            <div class="card border-0 h-100 shadow-sm hover-card">
              <div class="card-body text-center p-4">
                <div
                  class="icon-wrapper bg-warning bg-opacity-10 rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center"
                  style="width: 70px; height: 70px"
                >
                  <i class="bi bi-geo-alt-fill text-warning fs-2"></i>
                </div>
                <h5 class="fw-bold mb-2">Visit Us</h5>
                <p class="text-muted mb-2">Our location</p>
                <a
                  :href="`${info.address.gmap}`"
                  target="_blank"
                  class="text-decoration-none fw-semibold text-warning small"
                  >{{ info.address.fullAddress }}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <section class="py-5">
      <div class="container-fluid px-md-5 px-3">
        <div class="row g-5">
          <!-- Contact Form -->
          <div class="col-lg-8">
            <div class="card border-0 shadow-sm">
              <div class="card-body p-5">
                <h3 class="fw-bold mb-4">Send us a Message</h3>

                <!-- Success Message -->
                <div
                  v-if="submitSuccess"
                  class="alert alert-success d-flex align-items-center mb-4"
                >
                  <i class="bi bi-check-circle-fill me-2"></i>
                  {{ submitMessage }}
                </div>

                <form @submit.prevent="submitForm">
                  <div class="row g-3">
                    <!-- Name Fields -->
                    <div class="col-md-6">
                      <label for="firstName" class="form-label fw-semibold"
                        >First Name *</label
                      >
                      <input
                        type="text"
                        class="form-control form-control-lg"
                        id="firstName"
                        v-model="form.firstName"
                        required
                      />
                    </div>
                    <div class="col-md-6">
                      <label for="lastName" class="form-label fw-semibold"
                        >Last Name *</label
                      >
                      <input
                        type="text"
                        class="form-control form-control-lg"
                        id="lastName"
                        v-model="form.lastName"
                        required
                      />
                    </div>

                    <!-- Contact Fields -->
                    <div class="col-md-6">
                      <label for="email" class="form-label fw-semibold"
                        >Email Address *</label
                      >
                      <input
                        type="email"
                        class="form-control form-control-lg"
                        id="email"
                        v-model="form.email"
                        required
                      />
                    </div>
                    <div class="col-md-6">
                      <label for="phone" class="form-label fw-semibold"
                        >Phone Number *</label
                      >
                      <input
                        type="tel"
                        class="form-control form-control-lg"
                        id="phone"
                        v-model="form.phone"
                        required
                      />
                    </div>

                    <!-- Department and Urgency -->
                    <div class="col-md-6">
                      <label for="department" class="form-label fw-semibold"
                        >Department *</label
                      >
                      <select
                        class="form-select form-select-lg"
                        id="department"
                        v-model="form.department"
                        required
                      >
                        <option value="">Select a department</option>
                        <option
                          v-for="dept in departments"
                          :key="dept.value"
                          :value="dept.value"
                        >
                          {{ dept.label }}
                        </option>
                      </select>
                    </div>
                    <div class="col-md-6">
                      <label for="urgency" class="form-label fw-semibold"
                        >Urgency Level</label
                      >
                      <select
                        class="form-select form-select-lg"
                        id="urgency"
                        v-model="form.urgency"
                      >
                        <option value="normal">Normal</option>
                        <option value="urgent">Urgent</option>
                        <option value="emergency">Emergency</option>
                      </select>
                    </div>

                    <!-- Subject -->
                    <div class="col-12">
                      <label for="subject" class="form-label fw-semibold"
                        >Subject *</label
                      >
                      <input
                        type="text"
                        class="form-control form-control-lg"
                        id="subject"
                        v-model="form.subject"
                        placeholder="Brief description of your inquiry"
                        required
                      />
                    </div>

                    <!-- Message -->
                    <div class="col-12">
                      <label for="message" class="form-label fw-semibold"
                        >Message *</label
                      >
                      <textarea
                        class="form-control"
                        id="message"
                        rows="5"
                        v-model="form.message"
                        placeholder="Please provide detailed information about your inquiry..."
                        required
                      ></textarea>
                    </div>

                    <!-- Submit Button -->
                    <div class="col-12">
                      <button
                        type="submit"
                        class="btn btn-bsh-primary btn-lg px-5"
                        :disabled="isSubmitting"
                      >
                        <span
                          v-if="isSubmitting"
                          class="spinner-border spinner-border-sm me-2"
                        ></span>
                        {{ isSubmitting ? "Sending..." : "Send Message" }}
                        <i
                          v-if="!isSubmitting"
                          class="bi bi-arrow-right ms-2"
                        ></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <!-- Sidebar -->
          <div class="col-lg-4">
            <!-- Business Hours -->
            <div class="card border-0 shadow-sm mb-4">
              <div class="card-body p-4">
                <h5 class="fw-bold mb-3 d-flex align-items-center">
                  <i class="bi bi-clock text-primary me-2"></i>
                  Business Hours
                </h5>
                <div class="space-y-3">
                  <!-- <div
                    v-for="(hours, day) in info.workingHours.regular"
                    :key="day"
                    class="d-flex justify-content-between align-items-center py-2 border-bottom"
                  >
                    <span class="fw-semibold text-muted">{{ day }}</span>
                    <span class="text-primary fw-semibold">{{ hours }}</span>
                  </div> -->
                  <!-- Weekdays -->
                  <div
                    class="d-flex justify-content-between align-items-center py-2 border-bottom"
                  >
                    <span class="fw-semibold text-muted">Monday - Friday</span>
                    <span class="text-primary fw-semibold">{{
                      info.workingHours.regular.monday
                    }}</span>
                  </div>
                  <!-- Saturday -->
                  <div
                    class="d-flex justify-content-between align-items-center py-2 border-bottom"
                  >
                    <span class="fw-semibold text-muted">Saturday</span>
                    <span class="text-primary fw-semibold">{{
                      info.workingHours.regular.saturday
                    }}</span>
                  </div>
                  <!-- Sunday -->
                  <div
                    class="d-flex justify-content-between align-items-center py-2 border-bottom"
                  >
                    <span class="fw-semibold text-muted">Sunday</span>
                    <span class="text-primary fw-semibold">{{
                      info.workingHours.regular.sunday
                    }}</span>
                  </div>
                  <!-- Emergency Hours -->
                  <div class="">
                    <div
                      class="d-flex justify-content-between align-items-center py-2"
                    >
                      <span class="fw-semibold text-danger"
                        >Emergency Care</span
                      >
                      <span class="text-danger fw-semibold">{{
                        info.workingHours.emergency
                      }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Quick Contact -->
            <div class="card border-0 shadow-sm mb-4">
              <div class="card-body p-4">
                <h5 class="fw-bold mb-3 d-flex align-items-center">
                  <i class="bi bi-lightning-charge text-warning me-2"></i>
                  Quick Contact
                </h5>
                <div class="d-grid gap-2">
                  <a
                    :href="`tel:${
                      info.contact.phones.find(
                        (phone) => phone.type === 'emergency'
                      ).number
                    }`"
                    class="btn btn-danger"
                  >
                    <i class="bi bi-telephone-fill me-2"></i>Emergency Line
                  </a>
                  <a
                    :href="`tel:${
                      info.contact.phones.find((phone) => phone.type === 'main')
                        .number
                    }`"
                    class="btn btn-outline-primary"
                  >
                    <i class="bi bi-headset me-2"></i>General Inquiries
                  </a>
                  <a
                    :href="`mailto:${
                      info.contact.emails.find(
                        (email) => email.type === 'general'
                      ).address
                    }`"
                    class="btn btn-outline-success"
                  >
                    <i class="bi bi-envelope me-2"></i>Email Us
                  </a>
                </div>
              </div>
            </div>

            <!-- Additional Info -->
            <div class="card border-0 shadow-sm">
              <div class="card-body p-4">
                <h5 class="fw-bold mb-3 d-flex align-items-center">
                  <i class="bi bi-info-circle text-info me-2"></i>
                  Additional Information
                </h5>
                <ul class="list-unstyled mb-0">
                  <li class="mb-2">
                    <i class="bi bi-check-circle text-success me-2"></i>
                    Response within 24 hours
                  </li>
                  <li class="mb-2">
                    <i class="bi bi-check-circle text-success me-2"></i>
                    Emergency consultations available
                  </li>
                  <li class="mb-2">
                    <i class="bi bi-check-circle text-success me-2"></i>
                    Multilingual support
                  </li>
                  <li class="mb-0">
                    <i class="bi bi-check-circle text-success me-2"></i>
                    Secure patient information
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Map Section -->
    <section class="py-5 bg-light">
      <div class="container-fluid px-md-5 px-3">
        <div class="row">
          <div class="col-12">
            <h3 class="fw-bold mb-4 text-center">Find Us</h3>
            <div
              class="map-container position-relative rounded-4 overflow-hidden shadow"
            >
              <!-- Placeholder for Google Maps -->
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.3987655859155!2d3.387522674379743!3d6.59726239339652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b93d29dd6636d%3A0x7d6c56c706112584!2sBase%20Specialist%20hospital!5e0!3m2!1sen!2sng!4v1760878955531!5m2!1sen!2sng"
                width="100%"
                height="400"
                style="border: 0"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>

              <!-- Map Overlay Info -->
              <div class="position-absolute top-0 end-0 m-4">
                <div class="card border-0 shadow">
                  <div class="card-body p-3">
                    <h6 class="fw-bold mb-1">Base Specialist Hospital</h6>
                    <p class="text-muted small mb-0">
                      {{ info.address.fullAddress }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <FAQSection
      id="contact-page"
      title="Common Questions"
      subtitle="Need Quick Answers?"
      :maxItems="6"
    />
  </div>
</template>

<style scoped>
.contact {
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
  transition: all 0.3s ease;
}

.hover-card:hover .icon-wrapper {
  transform: scale(1.1);
}

.form-control:focus,
.form-select:focus {
  border-color: var(--bsh-primary);
  box-shadow: 0 0 0 0.2rem rgba(44, 62, 80, 0.25);
}

.space-y-3 > * + * {
  margin-top: 1rem;
}

.map-container {
  position: relative;
  height: 400px;
}

.map-container iframe {
  filter: grayscale(0.3);
  transition: filter 0.3s ease;
}

.map-container:hover iframe {
  filter: grayscale(0);
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

  .card-body.p-5 {
    padding: 2rem !important;
  }
}
</style>
