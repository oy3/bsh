<script>
import hospitalInfo from "../data/hospital-info.json";

export default {
  name: "TermsConditions",
  data() {
    return {
      info: hospitalInfo,
      lastUpdated: "April 23, 2026",
      sections: [
        {
          id: "acceptance",
          icon: "bi bi-hand-thumbs-up-fill",
          title: "Acceptance of Terms",
        },
        {
          id: "use-of-website",
          icon: "bi bi-laptop-fill",
          title: "Use of Website",
        },
        {
          id: "medical-disclaimer",
          icon: "bi bi-hospital-fill",
          title: "Medical Disclaimer",
        },
        {
          id: "appointments",
          icon: "bi bi-calendar-check-fill",
          title: "Appointment Terms",
        },
        {
          id: "patient-responsibilities",
          icon: "bi bi-person-check-fill",
          title: "Patient Responsibilities",
        },
        {
          id: "intellectual-property",
          icon: "bi bi-award-fill",
          title: "Intellectual Property",
        },
        {
          id: "liability",
          icon: "bi bi-shield-exclamation",
          title: "Limitation of Liability",
        },
        { id: "governing-law", icon: "bi bi-bank2", title: "Governing Law" },
        { id: "contact", icon: "bi bi-envelope-fill", title: "Contact Us" },
      ],
    };
  },
};
</script>

<template>
  <div class="terms-conditions">
    <!-- Hero Banner -->
    <section
      class="hero-banner position-relative overflow-hidden py-5 bg-bsh-primary"
    >
      <div class="container-fluid px-md-5 px-3 position-relative">
        <div
          class="row min-vh-50 d-flex align-items-center justify-content-center text-center py-5"
        >
          <div class="col-lg-8">
            <h6 class="text-white text-uppercase mb-3 fw-light tracking-wider">
              Legal
            </h6>
            <h1 class="text-white display-4 fw-bold mb-3">
              Terms &amp; Conditions
            </h1>
            <p class="text-white-50 mb-0">Last updated: {{ lastUpdated }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <section class="py-5">
      <div class="container-fluid px-md-5 px-3">
        <div class="row g-5">
          <!-- Table of Contents Sidebar -->
          <div class="col-lg-3 d-none d-lg-block">
            <div
              class="card border-0 shadow-sm rounded-4 sticky-top"
              style="top: 100px"
            >
              <div class="card-body p-4">
                <h6
                  class="fw-bold text-bsh-primary mb-3 text-uppercase"
                  style="font-size: 0.75rem; letter-spacing: 0.1em"
                >
                  On This Page
                </h6>
                <ul class="list-unstyled mb-0">
                  <li
                    v-for="section in sections"
                    :key="section.id"
                    class="mb-2"
                  >
                    <a
                      :href="`#${section.id}`"
                      class="text-decoration-none text-muted small d-flex align-items-center gap-2 toc-link py-1"
                    >
                      <i :class="[section.icon, 'text-bsh-accent fs-6']"></i>
                      {{ section.title }}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Content -->
          <div class="col-lg-9">
            <!-- Intro -->
            <div class="card border-0 bg-light rounded-4 p-4 mb-5">
              <div class="d-flex align-items-start gap-3">
                <i
                  class="bi bi-info-circle-fill text-bsh-accent fs-3 flex-shrink-0 mt-1"
                ></i>
                <div>
                  <h5 class="fw-bold mb-2">Please Read Carefully</h5>
                  <p class="text-muted mb-0">
                    These Terms and Conditions govern your access to and use of
                    the Base Specialist Hospital website and services. By
                    accessing our website or using our services, you agree to be
                    bound by these terms. If you do not agree with any part of
                    these terms, please do not use our website or services.
                  </p>
                </div>
              </div>
            </div>

            <!-- Section 1: Acceptance -->
            <div id="acceptance" class="mb-5">
              <h4 class="fw-bold mb-1 d-flex align-items-center gap-2">
                <span
                  class="d-flex align-items-center justify-content-center rounded-3 bg-bsh-accent text-white"
                  style="width: 36px; height: 36px; flex-shrink: 0"
                >
                  <i class="bi bi-hand-thumbs-up-fill fs-6"></i>
                </span>
                Acceptance of Terms
              </h4>
              <hr
                class="border-bsh-accent border-2 opacity-75 mt-2 mb-4"
                style="max-width: 60px"
              />
              <p class="text-muted">
                By accessing this website or using any of the services provided
                by Base Specialist Hospital ("BSH", "we", "us", or "our"), you
                confirm that:
              </p>
              <ul class="list-unstyled">
                <li
                  v-for="(item, idx) in [
                    'You are at least 18 years of age, or have the consent of a parent or legal guardian.',
                    'You have read, understood, and agree to be bound by these Terms and Conditions.',
                    'You agree to our Privacy Policy, which is incorporated into these terms by reference.',
                    'You will use this website and our services only for lawful purposes.',
                  ]"
                  :key="idx"
                  class="mb-3"
                >
                  <div class="d-flex align-items-start gap-3">
                    <i
                      class="bi bi-check-square-fill text-bsh-accent flex-shrink-0 mt-1"
                    ></i>
                    <p class="text-muted mb-0">{{ item }}</p>
                  </div>
                </li>
              </ul>
              <p class="text-muted mt-2">
                We reserve the right to amend these terms at any time. Continued
                use of our website following any changes constitutes your
                acceptance of the revised terms.
              </p>
            </div>

            <!-- Section 2: Use of Website -->
            <div id="use-of-website" class="mb-5">
              <h4 class="fw-bold mb-1 d-flex align-items-center gap-2">
                <span
                  class="d-flex align-items-center justify-content-center rounded-3 bg-bsh-accent text-white"
                  style="width: 36px; height: 36px; flex-shrink: 0"
                >
                  <i class="bi bi-laptop-fill fs-6"></i>
                </span>
                Use of Website
              </h4>
              <hr
                class="border-bsh-accent border-2 opacity-75 mt-2 mb-4"
                style="max-width: 60px"
              />
              <p class="text-muted mb-4">
                You agree to use our website only for its intended purposes. The
                following activities are strictly prohibited:
              </p>
              <div class="row g-3">
                <div
                  v-for="(item, idx) in [
                    {
                      icon: 'bi bi-bug-fill',
                      color: 'text-danger',
                      title: 'Malicious Activity',
                      desc: 'Uploading viruses, malware, or any other harmful code to our website or systems.',
                    },
                    {
                      icon: 'bi bi-person-x-fill',
                      color: 'text-warning',
                      title: 'Impersonation',
                      desc: 'Impersonating BSH staff, other patients, or any other person or entity.',
                    },
                    {
                      icon: 'bi bi-robot',
                      color: 'text-info',
                      title: 'Automated Scraping',
                      desc: 'Using bots, scrapers, or automated tools to extract data from our website.',
                    },
                    {
                      icon: 'bi bi-lock-fill',
                      color: 'text-secondary',
                      title: 'Unauthorised Access',
                      desc: 'Attempting to access restricted areas, systems, or accounts without permission.',
                    },
                  ]"
                  :key="idx"
                  class="col-md-6"
                >
                  <div class="d-flex gap-3 p-3 border rounded-3 h-100">
                    <i
                      :class="[
                        item.icon,
                        item.color,
                        'fs-4 flex-shrink-0 mt-1',
                      ]"
                    ></i>
                    <div>
                      <h6 class="fw-bold mb-1">{{ item.title }}</h6>
                      <p class="text-muted small mb-0">{{ item.desc }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Section 3: Medical Disclaimer -->
            <div id="medical-disclaimer" class="mb-5">
              <h4 class="fw-bold mb-1 d-flex align-items-center gap-2">
                <span
                  class="d-flex align-items-center justify-content-center rounded-3 bg-bsh-accent text-white"
                  style="width: 36px; height: 36px; flex-shrink: 0"
                >
                  <i class="bi bi-hospital-fill fs-6"></i>
                </span>
                Medical Disclaimer
              </h4>
              <hr
                class="border-bsh-accent border-2 opacity-75 mt-2 mb-4"
                style="max-width: 60px"
              />

              <div
                class="alert border-danger border-start border-1 bg-danger-subtle rounded-3 mb-4"
                role="alert"
              >
                <h6 class="fw-bold text-danger mb-2">
                  <i class="bi bi-exclamation-triangle-fill me-2"></i>Important
                  Notice
                </h6>
                <p class="text-muted small mb-0">
                  The health information on this website is provided for
                  <strong>general informational purposes only</strong> and does
                  not constitute medical advice. It is not a substitute for
                  professional medical advice, diagnosis, or treatment from a
                  qualified healthcare provider.
                </p>
              </div>
              <ul class="list-unstyled">
                <li
                  v-for="(item, idx) in [
                    'Always seek the advice of your doctor or other qualified health provider with any questions regarding a medical condition.',
                    'Never disregard professional medical advice or delay in seeking it because of something you have read on this website.',
                    'In a medical emergency, call your local emergency services immediately or visit the nearest emergency room.',
                    'BSH does not recommend or endorse any specific tests, physicians, products, procedures, or other information mentioned on this website.',
                  ]"
                  :key="idx"
                  class="mb-3"
                >
                  <div class="d-flex align-items-start gap-3">
                    <i
                      class="bi bi-dot text-bsh-accent fs-2 flex-shrink-0"
                      style="margin-top: -8px"
                    ></i>
                    <p class="text-muted mb-0">{{ item }}</p>
                  </div>
                </li>
              </ul>
            </div>

            <!-- Section 4: Appointments -->
            <div id="appointments" class="mb-5">
              <h4 class="fw-bold mb-1 d-flex align-items-center gap-2">
                <span
                  class="d-flex align-items-center justify-content-center rounded-3 bg-bsh-accent text-white"
                  style="width: 36px; height: 36px; flex-shrink: 0"
                >
                  <i class="bi bi-calendar-check-fill fs-6"></i>
                </span>
                Appointment Terms
              </h4>
              <hr
                class="border-bsh-accent border-2 opacity-75 mt-2 mb-4"
                style="max-width: 60px"
              />

              <div class="row g-4">
                <div
                  v-for="(item, idx) in [
                    {
                      icon: 'bi bi-calendar-plus-fill',
                      title: 'Booking',
                      desc: 'Appointment requests submitted online are subject to availability and confirmation by our team. A booking is only confirmed upon receiving our acknowledgement.',
                    },
                    {
                      icon: 'bi bi-clock-fill',
                      title: 'Cancellations',
                      desc: 'Please cancel or reschedule at least 24 hours in advance. Repeated no-shows may result in restrictions on future bookings.',
                    },
                    {
                      icon: 'bi bi-person-vcard-fill',
                      title: 'Patient Information',
                      desc: 'You must provide accurate and complete information when booking an appointment. Falsified information may result in termination of services.',
                    },
                    {
                      icon: 'bi bi-cash-coin',
                      title: 'Payments',
                      desc: 'Consultation fees are due at the time of the appointment. Accepted payment methods will be communicated during booking confirmation.',
                    },
                  ]"
                  :key="idx"
                  class="col-md-6"
                >
                  <div class="card border-0 shadow-sm rounded-4 h-100">
                    <div class="card-body p-4">
                      <h6 class="fw-bold mb-2 d-flex align-items-center gap-2">
                        <i :class="[item.icon, 'text-bsh-accent']"></i>
                        {{ item.title }}
                      </h6>
                      <p class="text-muted small mb-0">{{ item.desc }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Section 5: Patient Responsibilities -->
            <div id="patient-responsibilities" class="mb-5">
              <h4 class="fw-bold mb-1 d-flex align-items-center gap-2">
                <span
                  class="d-flex align-items-center justify-content-center rounded-3 bg-bsh-accent text-white"
                  style="width: 36px; height: 36px; flex-shrink: 0"
                >
                  <i class="bi bi-person-check-fill fs-6"></i>
                </span>
                Patient Responsibilities
              </h4>
              <hr
                class="border-bsh-accent border-2 opacity-75 mt-2 mb-4"
                style="max-width: 60px"
              />
              <p class="text-muted mb-4">
                As a patient or website user, you are responsible for:
              </p>
              <div class="row g-3">
                <div
                  v-for="(item, idx) in [
                    'Providing accurate and truthful medical history and personal information.',
                    'Following the care plans and medical advice provided by our healthcare professionals.',
                    'Treating all BSH staff, patients, and visitors with respect and courtesy.',
                    'Informing us of any changes in your health condition relevant to your treatment.',
                    'Settling all financial obligations for services rendered in a timely manner.',
                    'Keeping your account credentials (if applicable) confidential and secure.',
                  ]"
                  :key="idx"
                  class="col-md-6"
                >
                  <div class="d-flex align-items-start gap-2">
                    <i
                      class="bi bi-check-circle-fill text-bsh-accent flex-shrink-0 mt-1"
                    ></i>
                    <p class="text-muted small mb-0">{{ item }}</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Section 6: Intellectual Property -->
            <div id="intellectual-property" class="mb-5">
              <h4 class="fw-bold mb-1 d-flex align-items-center gap-2">
                <span
                  class="d-flex align-items-center justify-content-center rounded-3 bg-bsh-accent text-white"
                  style="width: 36px; height: 36px; flex-shrink: 0"
                >
                  <i class="bi bi-award-fill fs-6"></i>
                </span>
                Intellectual Property
              </h4>
              <hr
                class="border-bsh-accent border-2 opacity-75 mt-2 mb-4"
                style="max-width: 60px"
              />
              <p class="text-muted">
                All content on this website — including but not limited to text,
                images, logos, graphics, videos, blog posts, and design elements
                — is the property of
                <strong>Base Specialist Hospital</strong> or its licensed
                content providers and is protected by applicable Nigerian and
                international intellectual property laws.
              </p>
              <p class="text-muted">
                You may not reproduce, distribute, modify, transmit, or use any
                content from this website for commercial purposes without prior
                written consent from BSH. Personal, non-commercial use is
                permitted provided that you maintain all copyright and
                proprietary notices.
              </p>
            </div>

            <!-- Section 7: Limitation of Liability -->
            <div id="liability" class="mb-5">
              <h4 class="fw-bold mb-1 d-flex align-items-center gap-2">
                <span
                  class="d-flex align-items-center justify-content-center rounded-3 bg-bsh-accent text-white"
                  style="width: 36px; height: 36px; flex-shrink: 0"
                >
                  <i class="bi bi-shield-exclamation fs-6"></i>
                </span>
                Limitation of Liability
              </h4>
              <hr
                class="border-bsh-accent border-2 opacity-75 mt-2 mb-4"
                style="max-width: 60px"
              />
              <p class="text-muted mb-4">
                To the fullest extent permitted by applicable law:
              </p>
              <div class="card border-0 bg-light rounded-4 p-4">
                <ul class="list-unstyled mb-0">
                  <li
                    v-for="(item, idx) in [
                      'BSH shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of this website.',
                      'We do not guarantee that our website will be error-free, uninterrupted, or free from viruses or other harmful components.',
                      'BSH is not responsible for the content or privacy practices of any third-party websites linked from our website.',
                      'Any links to external websites are provided for convenience only and do not constitute our endorsement of the content.',
                    ]"
                    :key="idx"
                    class="mb-3 d-flex align-items-start gap-2"
                  >
                    <i
                      class="bi bi-arrow-right text-bsh-accent flex-shrink-0 mt-1"
                    ></i>
                    <p class="text-muted small mb-0">{{ item }}</p>
                  </li>
                </ul>
              </div>
            </div>

            <!-- Section 8: Governing Law -->
            <div id="governing-law" class="mb-5">
              <h4 class="fw-bold mb-1 d-flex align-items-center gap-2">
                <span
                  class="d-flex align-items-center justify-content-center rounded-3 bg-bsh-accent text-white"
                  style="width: 36px; height: 36px; flex-shrink: 0"
                >
                  <i class="bi bi-bank2 fs-6"></i>
                </span>
                Governing Law
              </h4>
              <hr
                class="border-bsh-accent border-2 opacity-75 mt-2 mb-4"
                style="max-width: 60px"
              />
              <p class="text-muted">
                These Terms and Conditions are governed by and construed in
                accordance with the laws of the
                <strong>Federal Republic of Nigeria</strong>. Any disputes
                arising from the use of this website or our services shall be
                subject to the exclusive jurisdiction of the courts of Lagos
                State, Nigeria.
              </p>
              <p class="text-muted">
                If any provision of these terms is found to be unenforceable,
                the remaining provisions shall continue in full force and
                effect.
              </p>
            </div>

            <!-- Section 9: Contact -->
            <div id="contact" class="mb-5">
              <h4 class="fw-bold mb-1 d-flex align-items-center gap-2">
                <span
                  class="d-flex align-items-center justify-content-center rounded-3 bg-bsh-accent text-white"
                  style="width: 36px; height: 36px; flex-shrink: 0"
                >
                  <i class="bi bi-envelope-fill fs-6"></i>
                </span>
                Contact Us
              </h4>
              <hr
                class="border-bsh-accent border-2 opacity-75 mt-2 mb-4"
                style="max-width: 60px"
              />
              <p class="text-muted mb-4">
                If you have questions about these Terms and Conditions, please
                contact us:
              </p>
              <div class="card border-0 shadow-sm rounded-4">
                <div class="card-body p-4">
                  <div class="row g-4">
                    <div class="col-md-4 d-flex align-items-start gap-3">
                      <div
                        class="d-flex align-items-center justify-content-center rounded-3 bg-bsh-primary"
                        style="width: 44px; height: 44px; flex-shrink: 0"
                      >
                        <i class="bi bi-building-fill text-white"></i>
                      </div>
                      <div>
                        <h6 class="fw-bold mb-1">{{ info.name }}</h6>
                        <p class="text-muted small mb-0">
                          {{ info.address.fullAddress }}
                        </p>
                      </div>
                    </div>
                    <div class="col-md-5 d-flex align-items-start gap-3">
                      <div
                        class="d-flex align-items-center justify-content-center rounded-3 bg-bsh-primary"
                        style="width: 44px; height: 44px; flex-shrink: 0"
                      >
                        <i class="bi bi-envelope-fill text-white"></i>
                      </div>
                      <div>
                        <h6 class="fw-bold mb-1">Email</h6>
                        <a
                          :href="`mailto:${info.contact.emails.find((e) => e.type === 'general').address}`"
                          class="text-bsh-accent small text-decoration-none"
                        >
                          {{
                            info.contact.emails.find(
                              (e) => e.type === "general",
                            ).address
                          }}
                        </a>
                      </div>
                    </div>
                    <div class="col-md-3 d-flex align-items-start gap-3">
                      <div
                        class="d-flex align-items-center justify-content-center rounded-3 bg-bsh-primary"
                        style="width: 44px; height: 44px; flex-shrink: 0"
                      >
                        <i class="bi bi-telephone-fill text-white"></i>
                      </div>
                      <div>
                        <h6 class="fw-bold mb-1">Phone</h6>
                        <a
                          :href="`tel:${info.contact.phones.find((p) => p.type === 'main').number}`"
                          class="text-bsh-accent small text-decoration-none"
                        >
                          {{
                            info.contact.phones.find((p) => p.type === "main")
                              .number
                          }}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-5 bg-bsh-primary">
      <div class="container-fluid px-md-5 px-3 text-center">
        <h4 class="text-white fw-bold mb-2">Questions About Our Terms?</h4>
        <p class="text-white-50 mb-4">
          We're happy to clarify any aspect of our terms. Get in touch with our
          team.
        </p>
        <router-link to="/contact" class="btn btn-bsh-accent px-5">
          Contact Us <i class="bi bi-arrow-right ms-2"></i>
        </router-link>
      </div>
    </section>
  </div>
</template>

<style scoped>
.terms-conditions {
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

.tracking-wider {
  letter-spacing: 0.1em;
}

.toc-link {
  color: #666;
  transition: color 0.2s ease;
}

.toc-link:hover {
  color: var(--bsh-accent) !important;
}

.text-bsh-accent {
  color: var(--bsh-accent) !important;
}

.bg-bsh-accent {
  background-color: var(--bsh-accent) !important;
}

.bg-bsh-primary {
  background-color: var(--bsh-primary) !important;
}

.border-bsh-accent {
  border-color: var(--bsh-accent) !important;
}

.btn-bsh-accent {
  background-color: var(--bsh-accent);
  color: white;
  border: none;
}

.btn-bsh-accent:hover {
  background-color: var(--bsh-accent-hover);
  color: white;
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
}
</style>
