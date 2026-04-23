<script>
import hospitalInfo from "../data/hospital-info.json";

export default {
  name: "PrivacyPolicy",
  data() {
    return {
      info: hospitalInfo,
      lastUpdated: "April 23, 2026",
      sections: [
        {
          id: "information-we-collect",
          icon: "bi bi-collection-fill",
          title: "Information We Collect",
        },
        {
          id: "how-we-use",
          icon: "bi bi-gear-fill",
          title: "How We Use Your Information",
        },
        {
          id: "sharing",
          icon: "bi bi-share-fill",
          title: "Sharing of Information",
        },
        {
          id: "data-security",
          icon: "bi bi-shield-lock-fill",
          title: "Data Security",
        },
        {
          id: "your-rights",
          icon: "bi bi-person-check-fill",
          title: "Your Rights",
        },
        {
          id: "cookies",
          icon: "bi bi-cookie",
          title: "Cookies & Tracking",
        },
        {
          id: "contact",
          icon: "bi bi-envelope-fill",
          title: "Contact Us",
        },
      ],
    };
  },
};
</script>

<template>
  <div class="privacy-policy">
    <!-- Hero Banner -->
    <section class="hero-banner position-relative overflow-hidden py-5 bg-bsh-primary">
      <div class="container-fluid px-md-5 px-3 position-relative">
        <div
          class="row min-vh-50 d-flex align-items-center justify-content-center text-center py-5"
        >
          <div class="col-lg-8">
            <h6 class="text-white text-uppercase mb-3 fw-light tracking-wider">
              Legal
            </h6>
            <h1 class="text-white display-4 fw-bold mb-3">Privacy Policy</h1>
            <p class="text-white-50 mb-0">
              Last updated: {{ lastUpdated }}
            </p>
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
            <div class="card border-0 shadow-sm rounded-4 sticky-top" style="top: 100px;">
              <div class="card-body p-4">
                <h6 class="fw-bold text-bsh-primary mb-3 text-uppercase" style="font-size: 0.75rem; letter-spacing: 0.1em;">
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
                <i class="bi bi-info-circle-fill text-bsh-accent fs-3 flex-shrink-0 mt-1"></i>
                <div>
                  <h5 class="fw-bold mb-2">Your Privacy Matters to Us</h5>
                  <p class="text-muted mb-0">
                    Base Specialist Hospital ("BSH", "we", "us", or "our") is committed to protecting your personal and medical information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our healthcare services. We comply with the <strong>Nigeria Data Protection Regulation (NDPR)</strong> and all applicable Nigerian healthcare privacy laws.
                  </p>
                </div>
              </div>
            </div>

            <!-- Section 1: Information We Collect -->
            <div id="information-we-collect" class="mb-5">
              <h4 class="fw-bold mb-1 d-flex align-items-center gap-2">
                <span class="d-flex align-items-center justify-content-center rounded-3 bg-bsh-accent text-white" style="width: 36px; height: 36px; flex-shrink: 0;">
                  <i class="bi bi-collection-fill fs-6"></i>
                </span>
                Information We Collect
              </h4>
              <hr class="border-bsh-accent border-2 opacity-75 mt-2 mb-4" style="max-width: 60px;" />

              <p class="text-muted mb-4">We may collect the following categories of information:</p>

              <div class="row g-4 mb-4">
                <div class="col-md-6">
                  <div class="card border-0 shadow-sm rounded-4 h-100">
                    <div class="card-body p-4">
                      <h6 class="fw-bold mb-3 d-flex align-items-center gap-2">
                        <i class="bi bi-person-fill text-primary"></i>
                        Personal Information
                      </h6>
                      <ul class="list-unstyled text-muted small mb-0">
                        <li class="mb-2"><i class="bi bi-dot fs-4 me-1"></i>Full name, date of birth, gender</li>
                        <li class="mb-2"><i class="bi bi-dot fs-4 me-1"></i>Contact details (phone, email, address)</li>
                        <li class="mb-2"><i class="bi bi-dot fs-4 me-1"></i>Next of kin and emergency contacts</li>
                        <li class="mb-2"><i class="bi bi-dot fs-4 me-1"></i>National Identification Number (NIN)</li>
                        <li class="mb-0"><i class="bi bi-dot fs-4 me-1"></i>Payment and insurance details</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="card border-0 shadow-sm rounded-4 h-100">
                    <div class="card-body p-4">
                      <h6 class="fw-bold mb-3 d-flex align-items-center gap-2">
                        <i class="bi bi-heart-pulse-fill text-danger"></i>
                        Medical Information
                      </h6>
                      <ul class="list-unstyled text-muted small mb-0">
                        <li class="mb-2"><i class="bi bi-dot fs-4 me-1"></i>Medical history and diagnoses</li>
                        <li class="mb-2"><i class="bi bi-dot fs-4 me-1"></i>Medications and treatment records</li>
                        <li class="mb-2"><i class="bi bi-dot fs-4 me-1"></i>Lab results and imaging reports</li>
                        <li class="mb-2"><i class="bi bi-dot fs-4 me-1"></i>Appointment history</li>
                        <li class="mb-0"><i class="bi bi-dot fs-4 me-1"></i>Physician notes and care plans</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="card border-0 shadow-sm rounded-4 h-100">
                    <div class="card-body p-4">
                      <h6 class="fw-bold mb-3 d-flex align-items-center gap-2">
                        <i class="bi bi-globe text-info"></i>
                        Website Usage Data
                      </h6>
                      <ul class="list-unstyled text-muted small mb-0">
                        <li class="mb-2"><i class="bi bi-dot fs-4 me-1"></i>IP address and browser type</li>
                        <li class="mb-2"><i class="bi bi-dot fs-4 me-1"></i>Pages visited and time spent</li>
                        <li class="mb-2"><i class="bi bi-dot fs-4 me-1"></i>Referring URLs</li>
                        <li class="mb-0"><i class="bi bi-dot fs-4 me-1"></i>Device and operating system information</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="card border-0 shadow-sm rounded-4 h-100">
                    <div class="card-body p-4">
                      <h6 class="fw-bold mb-3 d-flex align-items-center gap-2">
                        <i class="bi bi-chat-dots-fill text-success"></i>
                        Communications
                      </h6>
                      <ul class="list-unstyled text-muted small mb-0">
                        <li class="mb-2"><i class="bi bi-dot fs-4 me-1"></i>Messages sent via our contact form</li>
                        <li class="mb-2"><i class="bi bi-dot fs-4 me-1"></i>Appointment booking requests</li>
                        <li class="mb-2"><i class="bi bi-dot fs-4 me-1"></i>Newsletter subscription details</li>
                        <li class="mb-0"><i class="bi bi-dot fs-4 me-1"></i>Feedback and survey responses</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Section 2: How We Use Your Information -->
            <div id="how-we-use" class="mb-5">
              <h4 class="fw-bold mb-1 d-flex align-items-center gap-2">
                <span class="d-flex align-items-center justify-content-center rounded-3 bg-bsh-accent text-white" style="width: 36px; height: 36px; flex-shrink: 0;">
                  <i class="bi bi-gear-fill fs-6"></i>
                </span>
                How We Use Your Information
              </h4>
              <hr class="border-bsh-accent border-2 opacity-75 mt-2 mb-4" style="max-width: 60px;" />

              <p class="text-muted mb-4">We use your information for the following purposes:</p>
              <div class="row g-3">
                <div
                  v-for="(item, idx) in [
                    { icon: 'bi bi-hospital-fill', color: 'text-primary', title: 'Patient Care', desc: 'To provide diagnosis, treatment, and follow-up care tailored to your health needs.' },
                    { icon: 'bi bi-calendar-check-fill', color: 'text-success', title: 'Appointment Management', desc: 'To schedule, confirm, and remind you of appointments and medical procedures.' },
                    { icon: 'bi bi-envelope-check-fill', color: 'text-info', title: 'Communications', desc: 'To respond to your inquiries, send health updates, and deliver newsletters you opt into.' },
                    { icon: 'bi bi-bar-chart-fill', color: 'text-warning', title: 'Service Improvement', desc: 'To analyse usage patterns and improve the quality and efficiency of our services.' },
                    { icon: 'bi bi-shield-check-fill', color: 'text-danger', title: 'Legal & Regulatory', desc: 'To comply with Nigerian healthcare regulations, legal obligations, and reporting requirements.' },
                    { icon: 'bi bi-credit-card-fill', color: 'text-secondary', title: 'Billing & Payments', desc: 'To process payments, manage insurance claims, and handle financial transactions securely.' },
                  ]"
                  :key="idx"
                  class="col-md-6"
                >
                  <div class="d-flex gap-3 p-3 border rounded-3">
                    <i :class="[item.icon, item.color, 'fs-4 flex-shrink-0 mt-1']"></i>
                    <div>
                      <h6 class="fw-bold mb-1">{{ item.title }}</h6>
                      <p class="text-muted small mb-0">{{ item.desc }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Section 3: Sharing -->
            <div id="sharing" class="mb-5">
              <h4 class="fw-bold mb-1 d-flex align-items-center gap-2">
                <span class="d-flex align-items-center justify-content-center rounded-3 bg-bsh-accent text-white" style="width: 36px; height: 36px; flex-shrink: 0;">
                  <i class="bi bi-share-fill fs-6"></i>
                </span>
                Sharing of Information
              </h4>
              <hr class="border-bsh-accent border-2 opacity-75 mt-2 mb-4" style="max-width: 60px;" />

              <p class="text-muted mb-4">
                We do <strong>not sell or rent</strong> your personal or medical information. We may share your information only in the following circumstances:
              </p>
              <ul class="list-unstyled">
                <li
                  v-for="(item, idx) in [
                    { icon: 'bi bi-people-fill', title: 'Healthcare Providers', desc: 'Specialists, laboratories, pharmacies, and other providers involved in your direct care.' },
                    { icon: 'bi bi-building-fill', title: 'Health Insurance Companies', desc: 'Only as necessary to process claims and verify coverage on your behalf.' },
                    { icon: 'bi bi-bank2', title: 'Regulatory Bodies', desc: 'Government agencies or healthcare regulators when required by Nigerian law.' },
                    { icon: 'bi bi-tools', title: 'Service Providers', desc: 'Trusted third-party vendors (e.g., IT providers) bound by confidentiality agreements who help us operate the hospital.' },
                    { icon: 'bi bi-exclamation-triangle-fill', title: 'Emergency Situations', desc: 'When necessary to protect your vital interests or the safety of others.' },
                  ]"
                  :key="idx"
                  class="mb-3"
                >
                  <div class="d-flex align-items-start gap-3 p-3 bg-light rounded-3">
                    <i :class="[item.icon, 'text-bsh-accent fs-5 flex-shrink-0 mt-1']"></i>
                    <div>
                      <h6 class="fw-semibold mb-1">{{ item.title }}</h6>
                      <p class="text-muted small mb-0">{{ item.desc }}</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <!-- Section 4: Data Security -->
            <div id="data-security" class="mb-5">
              <h4 class="fw-bold mb-1 d-flex align-items-center gap-2">
                <span class="d-flex align-items-center justify-content-center rounded-3 bg-bsh-accent text-white" style="width: 36px; height: 36px; flex-shrink: 0;">
                  <i class="bi bi-shield-lock-fill fs-6"></i>
                </span>
                Data Security
              </h4>
              <hr class="border-bsh-accent border-2 opacity-75 mt-2 mb-4" style="max-width: 60px;" />

              <p class="text-muted mb-4">
                We implement industry-standard security measures to protect your information from unauthorised access, alteration, disclosure, or destruction:
              </p>
              <div class="row g-3">
                <div
                  v-for="(measure, idx) in [
                    { icon: 'bi bi-lock-fill', title: 'Encrypted Storage', desc: 'All patient records are stored in encrypted databases with access controls.' },
                    { icon: 'bi bi-wifi-protected', title: 'Secure Transmission', desc: 'Data transmitted via our website is protected using SSL/TLS encryption.' },
                    { icon: 'bi bi-person-badge-fill', title: 'Access Controls', desc: 'Only authorised personnel can access your medical and personal records.' },
                    { icon: 'bi bi-clipboard2-check-fill', title: 'Regular Audits', desc: 'We conduct regular security audits to identify and address potential vulnerabilities.' },
                  ]"
                  :key="idx"
                  class="col-sm-6"
                >
                  <div class="card border-0 shadow-sm rounded-4 h-100">
                    <div class="card-body p-3 text-center">
                      <div class="d-flex align-items-center justify-content-center bg-bsh-primary rounded-3 mx-auto mb-3" style="width: 48px; height: 48px;">
                        <i :class="[measure.icon, 'text-white fs-5']"></i>
                      </div>
                      <h6 class="fw-bold mb-2">{{ measure.title }}</h6>
                      <p class="text-muted small mb-0">{{ measure.desc }}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="alert border-0 bg-warning-subtle mt-4 rounded-3" role="alert">
                <i class="bi bi-exclamation-triangle-fill text-warning me-2"></i>
                <span class="text-muted small">While we take every reasonable precaution to protect your data, no method of transmission over the internet is 100% secure. We encourage you to use strong passwords and report any suspicious activity immediately.</span>
              </div>
            </div>

            <!-- Section 5: Your Rights -->
            <div id="your-rights" class="mb-5">
              <h4 class="fw-bold mb-1 d-flex align-items-center gap-2">
                <span class="d-flex align-items-center justify-content-center rounded-3 bg-bsh-accent text-white" style="width: 36px; height: 36px; flex-shrink: 0;">
                  <i class="bi bi-person-check-fill fs-6"></i>
                </span>
                Your Rights (NDPR)
              </h4>
              <hr class="border-bsh-accent border-2 opacity-75 mt-2 mb-4" style="max-width: 60px;" />

              <p class="text-muted mb-4">
                Under the Nigeria Data Protection Regulation (NDPR), you have the following rights regarding your personal data:
              </p>
              <div class="row g-3">
                <div
                  v-for="(right, idx) in [
                    { icon: 'bi bi-eye-fill', title: 'Right to Access', desc: 'Request a copy of the personal data we hold about you.' },
                    { icon: 'bi bi-pencil-fill', title: 'Right to Rectification', desc: 'Request correction of inaccurate or incomplete personal data.' },
                    { icon: 'bi bi-trash-fill', title: 'Right to Erasure', desc: 'Request deletion of your data where there is no compelling reason for its continued use.' },
                    { icon: 'bi bi-slash-circle-fill', title: 'Right to Object', desc: 'Object to the processing of your data for specific purposes, including marketing.' },
                    { icon: 'bi bi-download', title: 'Right to Portability', desc: 'Request your data in a structured, commonly used, machine-readable format.' },
                    { icon: 'bi bi-hand-index-thumb-fill', title: 'Right to Restrict', desc: 'Request restriction of processing in certain circumstances.' },
                  ]"
                  :key="idx"
                  class="col-md-4"
                >
                  <div class="d-flex align-items-start gap-2 p-3 border rounded-3 h-100">
                    <i :class="[right.icon, 'text-bsh-accent flex-shrink-0 mt-1']"></i>
                    <div>
                      <h6 class="fw-bold mb-1" style="font-size: 0.85rem;">{{ right.title }}</h6>
                      <p class="text-muted small mb-0">{{ right.desc }}</p>
                    </div>
                  </div>
                </div>
              </div>
              <p class="text-muted small mt-4">
                To exercise any of these rights, please contact us at
                <a :href="`mailto:${info.contact.emails.find(e => e.type === 'general').address}`" class="text-bsh-accent fw-semibold text-decoration-none">
                  {{ info.contact.emails.find(e => e.type === 'general').address }}
                </a>.
                We will respond within <strong>30 days</strong> of receiving your request.
              </p>
            </div>

            <!-- Section 6: Cookies -->
            <div id="cookies" class="mb-5">
              <h4 class="fw-bold mb-1 d-flex align-items-center gap-2">
                <span class="d-flex align-items-center justify-content-center rounded-3 bg-bsh-accent text-white" style="width: 36px; height: 36px; flex-shrink: 0;">
                  <i class="bi bi-cookie fs-6"></i>
                </span>
                Cookies &amp; Tracking
              </h4>
              <hr class="border-bsh-accent border-2 opacity-75 mt-2 mb-4" style="max-width: 60px;" />

              <p class="text-muted mb-4">
                Our website uses cookies and similar technologies to enhance your experience:
              </p>
              <div class="table-responsive">
                <table class="table table-bordered rounded-3 overflow-hidden">
                  <thead class="bg-bsh-primary text-white">
                    <tr>
                      <th class="py-3">Cookie Type</th>
                      <th class="py-3">Purpose</th>
                      <th class="py-3">Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="fw-semibold">Essential</td>
                      <td class="text-muted small">Required for the website to function properly (e.g., session management)</td>
                      <td class="text-muted small">Session</td>
                    </tr>
                    <tr>
                      <td class="fw-semibold">Analytics</td>
                      <td class="text-muted small">Help us understand how visitors use the site to improve our services</td>
                      <td class="text-muted small">Up to 2 years</td>
                    </tr>
                    <tr>
                      <td class="fw-semibold">Preferences</td>
                      <td class="text-muted small">Remember your settings and preferences for a personalised experience</td>
                      <td class="text-muted small">Up to 1 year</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p class="text-muted small mt-3">
                You can control or disable cookies through your browser settings. Note that disabling essential cookies may affect the functionality of our website.
              </p>
            </div>

            <!-- Section 7: Contact -->
            <div id="contact" class="mb-5">
              <h4 class="fw-bold mb-1 d-flex align-items-center gap-2">
                <span class="d-flex align-items-center justify-content-center rounded-3 bg-bsh-accent text-white" style="width: 36px; height: 36px; flex-shrink: 0;">
                  <i class="bi bi-envelope-fill fs-6"></i>
                </span>
                Contact Us
              </h4>
              <hr class="border-bsh-accent border-2 opacity-75 mt-2 mb-4" style="max-width: 60px;" />

              <p class="text-muted mb-4">
                If you have any questions about this Privacy Policy or how we handle your information, please contact us:
              </p>
              <div class="card border-0 shadow-sm rounded-4">
                <div class="card-body p-4">
                  <div class="row g-3">
                    <div class="col-md-3 d-flex align-items-start gap-3">
                      <div class="d-flex align-items-center justify-content-center rounded-3 bg-bsh-primary" style="width: 44px; height: 44px; flex-shrink: 0;">
                        <i class="bi bi-building-fill text-white"></i>
                      </div>
                      <div>
                        <h6 class="fw-bold mb-1">Data Controller</h6>
                        <p class="text-muted small mb-0">{{ info.name }}</p>
                      </div>
                    </div>
                    <div class="col-md-4 d-flex align-items-start gap-3">
                      <div class="d-flex align-items-center justify-content-center rounded-3 bg-bsh-primary" style="width: 44px; height: 44px; flex-shrink: 0;">
                        <i class="bi bi-geo-alt-fill text-white"></i>
                      </div>
                      <div>
                        <h6 class="fw-bold mb-1">Address</h6>
                        <p class="text-muted small mb-0">{{ info.address.fullAddress }}</p>
                      </div>
                    </div>
                    <div class="col-md-5 d-flex align-items-start gap-3">
                      <div class="d-flex align-items-center justify-content-center rounded-3 bg-bsh-primary" style="width: 44px; height: 44px; flex-shrink: 0;">
                        <i class="bi bi-envelope-fill text-white"></i>
                      </div>
                      <div>
                        <h6 class="fw-bold mb-1">Email</h6>
                        <a
                          :href="`mailto:${info.contact.emails.find(e => e.type === 'general').address}`"
                          class="text-bsh-accent small text-decoration-none"
                        >
                          {{ info.contact.emails.find(e => e.type === 'general').address }}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p class="text-muted small mt-4">
                We may update this Privacy Policy from time to time. We will notify you of any significant changes by updating the date at the top of this page. We encourage you to review this page periodically.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-5 bg-bsh-primary">
      <div class="container-fluid px-md-5 px-3 text-center">
        <h4 class="text-white fw-bold mb-2">Have Questions About Your Privacy?</h4>
        <p class="text-white-50 mb-4">Our team is here to help. Reach out and we'll respond promptly.</p>
        <router-link to="/contact" class="btn btn-bsh-accent px-5">
          Contact Us <i class="bi bi-arrow-right ms-2"></i>
        </router-link>
      </div>
    </section>
  </div>
</template>

<style scoped>
.privacy-policy {
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
