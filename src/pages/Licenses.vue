<script>
import hospitalInfo from "../data/hospital-info.json";

export default {
  name: "Licenses",
  data() {
    return {
      info: hospitalInfo,
      lastUpdated: "April 23, 2026",
      sections: [
        { id: "operating-license", icon: "bi bi-building-check-fill", title: "Operating License" },
        { id: "medical-council", icon: "bi bi-patch-check-fill", title: "Medical Council Registration" },
        { id: "state-accreditation", icon: "bi bi-award-fill", title: "State Accreditation" },
        { id: "specialty-certs", icon: "bi bi-mortarboard-fill", title: "Specialty Certifications" },
        { id: "health-insurance", icon: "bi bi-shield-fill-check", title: "Health Insurance" },
        { id: "commitments", icon: "bi bi-journal-check", title: "Our Commitments" },
      ],
      accreditations: [
        {
          id: 1,
          category: "Federal",
          icon: "bi bi-building-fill-check",
          iconBg: "bg-primary",
          badge: "Federal License",
          badgeClass: "bg-primary",
          title: "Federal Ministry of Health — Hospital Operating License",
          body: "Base Specialist Hospital holds a valid hospital operating license issued by the Federal Ministry of Health (FMoH) of Nigeria, authorising us to operate as a specialist healthcare facility in the country.",
          number: "FMoH/HSL/LAG/2024",
          status: "Active",
          statusClass: "text-success",
        },
        {
          id: 2,
          category: "State",
          icon: "bi bi-map-fill",
          iconBg: "bg-success",
          badge: "State License",
          badgeClass: "bg-success",
          title: "Lagos State Health Facility Monitoring & Accreditation Agency (HEFAMAA)",
          body: "We are fully accredited by HEFAMAA — the Lagos State agency responsible for monitoring and accrediting health facilities — confirming our compliance with state healthcare standards.",
          number: "HEFAMAA/ACC/2024/0812",
          status: "Active",
          statusClass: "text-success",
        },
        {
          id: 3,
          category: "Professional",
          icon: "bi bi-stethoscope",
          iconBg: "bg-info",
          badge: "Professional Registration",
          badgeClass: "bg-info",
          title: "Medical and Dental Council of Nigeria (MDCN)",
          body: "All physicians at BSH are registered with the Medical and Dental Council of Nigeria. Our facility is listed on the MDCN approved institutions register, ensuring all medical practice meets the highest professional standards.",
          number: "MDCN/INST/LAG/7041",
          status: "Active",
          statusClass: "text-success",
        },
        {
          id: 4,
          category: "Professional",
          icon: "bi bi-heart-pulse-fill",
          iconBg: "bg-danger",
          badge: "Professional Body",
          badgeClass: "bg-danger",
          title: "Nigerian Medical Association (NMA) — Member Institution",
          body: "BSH is a member institution of the Nigerian Medical Association, committing our practice to the NMA's ethical guidelines, standards of care, and continuing medical education requirements.",
          number: "NMA/INST/2023/LAG-019",
          status: "Active",
          statusClass: "text-success",
        },
      ],
      specialties: [
        {
          icon: "bi bi-scissors",
          title: "General Surgery",
          desc: "Certified surgical unit with qualified consultant surgeons and accredited theatre facilities.",
        },
        {
          icon: "bi bi-gender-female",
          title: "Gynaecology & Obstetrics",
          desc: "Accredited maternity and gynaecology unit, meeting SOGON standards for obstetric care.",
        },
        {
          icon: "bi bi-droplet-fill",
          title: "Haematology & Blood Bank",
          desc: "Licensed blood banking and haematology laboratory meeting NBS (National Blood Service) standards.",
        },
        {
          icon: "bi bi-person-workspace",
          title: "Family Health & Outpatient",
          desc: "Registered outpatient department offering comprehensive family health and preventive care services.",
        },
        {
          icon: "bi bi-thermometer-half",
          title: "Emergency & Critical Care",
          desc: "Certified 24/7 emergency services meeting national standards for acute and critical patient care.",
        },
        {
          icon: "bi bi-cpu-fill",
          title: "Diagnostic Imaging & Lab",
          desc: "Accredited radiology and pathology laboratory with equipment meeting national safety standards.",
        },
      ],
      insurers: [
        { name: "NHIS (National Health Insurance Scheme)", icon: "bi bi-shield-fill-check" },
        { name: "Hygeia HMO", icon: "bi bi-shield-fill-check" },
        { name: "Leadway Health", icon: "bi bi-shield-fill-check" },
        { name: "Reliance HMO", icon: "bi bi-shield-fill-check" },
        { name: "Prudential Zenith Life", icon: "bi bi-shield-fill-check" },
        { name: "AXA Mansard Health", icon: "bi bi-shield-fill-check" },
      ],
    };
  },
};
</script>

<template>
  <div class="licenses-page">
    <!-- Hero Banner -->
    <section class="hero-banner position-relative overflow-hidden py-5 bg-bsh-primary">
      <div class="container-fluid px-md-5 px-3 position-relative">
        <div
          class="row min-vh-50 d-flex align-items-center justify-content-center text-center py-5"
        >
          <div class="col-lg-8">
            <h6 class="text-white text-uppercase mb-3 fw-light tracking-wider">
              Compliance &amp; Accreditation
            </h6>
            <h1 class="text-white display-4 fw-bold mb-3">Licenses &amp; Accreditations</h1>
            <p class="text-white-50 mb-0 lead">
              Our credentials, certifications, and regulatory approvals that affirm our commitment to safe, quality healthcare.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Trust Banner -->
    <section class="py-4 bg-bsh-accent">
      <div class="container-fluid px-md-5 px-3">
        <div class="row g-4 justify-content-center text-center">
          <div v-for="(stat, idx) in [
            { icon: 'bi bi-patch-check-fill', value: '15+', label: 'Years Licensed' },
            { icon: 'bi bi-award-fill', value: '4', label: 'Active Accreditations' },
            { icon: 'bi bi-shield-fill-check', value: '6+', label: 'Insurance Partners' },
            { icon: 'bi bi-people-fill', value: '100%', label: 'MDCN Registered Doctors' },
          ]" :key="idx" class="col-6 col-md-3">
            <i :class="[stat.icon, 'text-white fs-3 mb-2 d-block']"></i>
            <h3 class="text-white fw-bold mb-0">{{ stat.value }}</h3>
            <p class="text-white-50 small mb-0">{{ stat.label }}</p>
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
                  <li v-for="section in sections" :key="section.id" class="mb-2">
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
                  <h5 class="fw-bold mb-2">Why Licensing Matters</h5>
                  <p class="text-muted mb-0">
                    At Base Specialist Hospital, our licenses and accreditations are more than regulatory requirements — they are a promise to our patients. Each certification represents our commitment to meeting and exceeding the national standards for healthcare safety, quality, and ethics in Nigeria.
                  </p>
                </div>
              </div>
            </div>

            <!-- Section 1 & 2: Accreditations -->
            <div id="operating-license" class="mb-2">
              <h4 class="fw-bold mb-1 d-flex align-items-center gap-2">
                <span class="d-flex align-items-center justify-content-center rounded-3 bg-bsh-accent text-white" style="width: 36px; height: 36px; flex-shrink: 0;">
                  <i class="bi bi-building-check-fill fs-6"></i>
                </span>
                Regulatory Licenses &amp; Registrations
              </h4>
              <hr class="border-bsh-accent border-2 opacity-75 mt-2 mb-4" style="max-width: 60px;" />
            </div>

            <div id="medical-council">
              <div class="row g-4 mb-5">
                <div v-for="accred in accreditations" :key="accred.id" class="col-12">
                  <div class="card border-0 shadow-sm rounded-4">
                    <div class="card-body p-4">
                      <div class="d-flex align-items-start gap-4">
                        <div
                          class="d-flex align-items-center justify-content-center rounded-3 flex-shrink-0"
                          :class="accred.iconBg"
                          style="width: 56px; height: 56px;"
                        >
                          <i :class="[accred.icon, 'text-white fs-4']"></i>
                        </div>
                        <div class="flex-grow-1">
                          <div class="d-flex align-items-start justify-content-between flex-wrap gap-2 mb-2">
                            <h5 class="fw-bold mb-0">{{ accred.title }}</h5>
                            <span :class="['badge', 'rounded-pill', accred.badgeClass]" style="font-size: 0.7rem;">{{ accred.badge }}</span>
                          </div>
                          <p class="text-muted mb-3">{{ accred.body }}</p>
                          <div class="d-flex flex-wrap gap-3">
                            <div class="d-flex align-items-center gap-2">
                              <span class="text-muted small fw-semibold">License No:</span>
                              <code class="bg-light px-2 py-1 rounded small">{{ accred.number }}</code>
                            </div>
                            <div class="d-flex align-items-center gap-2">
                              <span class="text-muted small fw-semibold">Status:</span>
                              <span :class="['fw-bold', 'small', accred.statusClass]">
                                <i class="bi bi-circle-fill me-1" style="font-size: 0.5rem;"></i>{{ accred.status }}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Section 3: State Accreditation -->
            <div id="state-accreditation" class="mb-5">
              <!-- already covered in accreditations above, link to HEFAMAA -->
              <h4 class="fw-bold mb-1 d-flex align-items-center gap-2">
                <span class="d-flex align-items-center justify-content-center rounded-3 bg-bsh-accent text-white" style="width: 36px; height: 36px; flex-shrink: 0;">
                  <i class="bi bi-award-fill fs-6"></i>
                </span>
                Specialty Certifications
              </h4>
              <hr class="border-bsh-accent border-2 opacity-75 mt-2 mb-4" style="max-width: 60px;" />
            </div>

            <!-- Section 4: Specialty Certifications -->
            <div id="specialty-certs" class="mb-5">
              <p class="text-muted mb-4">
                Beyond our general hospital license, our individual departments and units hold specialist certifications:
              </p>
              <div class="row g-4">
                <div v-for="(spec, idx) in specialties" :key="idx" class="col-md-6">
                  <div class="card border-0 shadow-sm rounded-4 h-100 hover-card">
                    <div class="card-body p-4">
                      <div class="d-flex align-items-center justify-content-center bg-bsh-primary rounded-3 mb-3" style="width: 48px; height: 48px;">
                        <i :class="[spec.icon, 'text-white fs-5']"></i>
                      </div>
                      <h6 class="fw-bold mb-2">{{ spec.title }}</h6>
                      <p class="text-muted small mb-0">{{ spec.desc }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Section 5: Health Insurance -->
            <div id="health-insurance" class="mb-5">
              <h4 class="fw-bold mb-1 d-flex align-items-center gap-2">
                <span class="d-flex align-items-center justify-content-center rounded-3 bg-bsh-accent text-white" style="width: 36px; height: 36px; flex-shrink: 0;">
                  <i class="bi bi-shield-fill-check fs-6"></i>
                </span>
                Health Insurance Partners
              </h4>
              <hr class="border-bsh-accent border-2 opacity-75 mt-2 mb-4" style="max-width: 60px;" />
              <p class="text-muted mb-4">
                BSH is an accredited provider for the following health management organisations (HMOs) and insurance schemes:
              </p>
              <div class="row g-3">
                <div v-for="(insurer, idx) in insurers" :key="idx" class="col-md-4 col-sm-6">
                  <div class="d-flex align-items-center gap-3 p-3 border rounded-3">
                    <i :class="[insurer.icon, 'text-bsh-accent fs-5 flex-shrink-0']"></i>
                    <span class="small fw-semibold">{{ insurer.name }}</span>
                  </div>
                </div>
              </div>
              <p class="text-muted small mt-4">
                Don't see your insurer? Contact us at
                <a :href="`tel:${info.contact.phones.find(p => p.type === 'main').number}`" class="text-bsh-accent text-decoration-none fw-semibold">
                  {{ info.contact.phones.find(p => p.type === 'main').number }}
                </a>
                — we are continuously expanding our insurance partnerships.
              </p>
            </div>

            <!-- Section 6: Commitments -->
            <div id="commitments" class="mb-5">
              <h4 class="fw-bold mb-1 d-flex align-items-center gap-2">
                <span class="d-flex align-items-center justify-content-center rounded-3 bg-bsh-accent text-white" style="width: 36px; height: 36px; flex-shrink: 0;">
                  <i class="bi bi-journal-check fs-6"></i>
                </span>
                Our Commitments
              </h4>
              <hr class="border-bsh-accent border-2 opacity-75 mt-2 mb-4" style="max-width: 60px;" />
              <div class="row g-4">
                <div
                  v-for="(item, idx) in [
                    { icon: 'bi bi-arrow-repeat', title: 'Ongoing Renewals', desc: 'All licenses and accreditations are actively maintained and renewed before their expiry dates.' },
                    { icon: 'bi bi-clipboard2-pulse-fill', title: 'Continuous Audits', desc: 'We welcome and actively participate in regulatory inspections and quality audits.' },
                    { icon: 'bi bi-person-hearts', title: 'Staff Certification', desc: 'All clinical staff maintain valid professional registrations and engage in continuous professional development.' },
                    { icon: 'bi bi-graph-up-arrow', title: 'Quality Improvement', desc: 'We regularly review our processes against accreditation benchmarks to identify and implement improvements.' },
                  ]"
                  :key="idx"
                  class="col-md-6"
                >
                  <div class="d-flex gap-3">
                    <div class="d-flex align-items-center justify-content-center rounded-3 bg-bsh-accent flex-shrink-0" style="width: 44px; height: 44px;">
                      <i :class="[item.icon, 'text-white fs-5']"></i>
                    </div>
                    <div>
                      <h6 class="fw-bold mb-1">{{ item.title }}</h6>
                      <p class="text-muted small mb-0">{{ item.desc }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Verification Note -->
            <div class="card border-0 bg-light rounded-4 p-4">
              <div class="d-flex align-items-start gap-3">
                <i class="bi bi-patch-question-fill text-bsh-accent fs-3 flex-shrink-0 mt-1"></i>
                <div>
                  <h5 class="fw-bold mb-2">Verify Our Credentials</h5>
                  <p class="text-muted mb-3">
                    All BSH licenses and accreditations are verifiable through the issuing regulatory bodies. If you would like to confirm any of our credentials or request official documentation, please contact us directly.
                  </p>
                  <router-link to="/contact" class="btn btn-bsh-primary btn-sm px-4">
                    Request Documentation <i class="bi bi-arrow-right ms-2"></i>
                  </router-link>
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
        <h4 class="text-white fw-bold mb-2">Confident in Our Standards</h4>
        <p class="text-white-50 mb-4">Book an appointment with our fully licensed and accredited team of specialists.</p>
        <router-link to="/services#book-appt" class="btn btn-bsh-accent px-5">
          Book Appointment <i class="bi bi-calendar-check ms-2"></i>
        </router-link>
      </div>
    </section>
  </div>
</template>

<style scoped>
.licenses-page {
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

.btn-bsh-primary {
  background-color: var(--bsh-primary);
  color: white;
  border: none;
}

.btn-bsh-primary:hover {
  background-color: var(--bsh-primary-hover);
  color: white;
}

.hover-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.hover-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12) !important;
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
