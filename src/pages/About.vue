<script lang="js">
import BlogSection from '../components/BlogSection.vue'
import TestimonialsSection from '../components/TestimonialsSection.vue'
import TeamSection from '../components/TeamSection.vue'

export default {
  name: 'About',
  components: {
    TestimonialsSection,
    BlogSection,
    TeamSection
  },
  data() {
    return {
      faqColumn1: [
        {
          id: 'collapseOne',
          question: 'How do I book an appointment with a doctor?',
          answer: 'To book an appointment with a doctor, you can visit our website and click on the "Book an Appointment" button. You will need to provide your personal information, the doctor you are interested in, and the date and time you would like to schedule.',
          expanded: true
        },
        {
          id: 'collapseTwo',
          question: 'What insurance plans do you accept?',
          answer: 'We accept most major insurance plans including NHS, BUPA, AXA Health, Vitality Health, and many others. Please contact our billing department to verify your specific insurance coverage.',
          expanded: false
        },
        {
          id: 'collapseThree',
          question: 'What are your operating hours?',
          answer: 'Our hospital is open 24/7 for emergency services. Regular consultations are available Monday to Friday 8:00 AM - 6:00 PM, and weekends 9:00 AM - 4:00 PM.',
          expanded: false
        },
        {
          id: 'collapseFour',
          question: 'Do you offer telemedicine consultations?',
          answer: 'Yes, we offer virtual consultations for certain medical conditions. You can schedule a telemedicine appointment through our online portal or by calling our appointment line.',
          expanded: false
        },
        {
          id: 'collapseFive',
          question: 'How do I access my medical records?',
          answer: 'You can access your medical records through our secure patient portal. Simply create an account on our website using your patient ID and follow the verification process.',
          expanded: false
        }
      ],
      faqColumn2: [
        {
          id: 'collapseSix',
          question: 'What should I bring to my first appointment?',
          answer: 'Please bring a valid ID, your insurance card, a list of current medications, medical history, and any previous test results or referral letters from other healthcare providers.',
          expanded: false
        },
        {
          id: 'collapseSeven',
          question: 'How far in advance should I schedule an appointment?',
          answer: 'For routine check-ups, we recommend scheduling 2-4 weeks in advance. For specialist consultations, it may take 1-2 weeks. Emergency appointments are available same-day.',
          expanded: false
        },
        {
          id: 'collapseEight',
          question: 'Do you have parking facilities?',
          answer: 'Yes, we provide free parking for patients and visitors. Our parking facility is located adjacent to the main building with easy access to the hospital entrance.',
          expanded: false
        },
        {
          id: 'collapseNine',
          question: 'Can I change or cancel my appointment?',
          answer: 'Yes, you can change or cancel your appointment up to 24 hours before the scheduled time through our online portal, mobile app, or by calling our appointment line.',
          expanded: false
        },
        {
          id: 'collapseTen',
          question: 'What safety measures do you have in place?',
          answer: 'We maintain strict hygiene protocols, regular sanitization, social distancing measures, and follow all health authority guidelines to ensure patient and staff safety.',
          expanded: false
        }
      ]
    }
  }
}
</script>

<template>
  <div class="about">
    <!-- Hero Banner -->
    <section class="hero-banner position-relative overflow-hidden py-5">
      <div class="hero-overlay position-absolute w-100 h-100"></div>
      <div class="container-fluid px-md-5 px-3 position-relative">
        <div class="row min-vh-50 d-flex align-items-center justify-content-center text-center py-5">
          <div class="col-lg-8">
            <h6 class="text-white text-uppercase mb-3 fw-light tracking-wider">About</h6>
            <h1 class="text-white display-4 fw-bold mb-0">
              Dedicated to your Health and Wellness
            </h1>
          </div>
        </div>
      </div>
    </section>

    <section class="py-5 px-md-5 px-3">
      <div class="row g-4 mb-5">
        <div class="col-md-6 position-relative d-flex justify-content-center">
          <div style="width: 400px; height: 400px">
            <img
              src="../assets/home-bsh.jpg"
              class="w-100 h-100 rounded-4 object-fit-cover"
              alt=""
            />
          </div>

          <!-- Top left card -->
          <div class="position-absolute top-0 start-0 m-3">
            <div
              class="card border-light-subtle rounded-4 bg-white shadow-sm p-2"
              style="width: 220px"
            >
              <div class="d-flex align-items-center">
                <i class="bi bi-headset text-primary fs-3 me-2"></i>
                <div>
                  <h6 class="mb-0 fw-bold" style="font-size: smaller">24/7</h6>
                  <p class="text-muted mb-0" style="font-size: x-small"
                    >We are available when you want
                </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Bottom left card -->
          <div class="position-absolute bottom-0 end-0 m-3">
            <div
              class="card border-light-subtle bg-white shadow-sm rounded-4 p-2"
              style="width: 220px"
            >
              <div class="d-flex align-items-start">
                <i class="bi bi-patch-check text-success fs-3 me-2"></i>
                <div>
                  <h6 class="mb-0 fw-bold" style="font-size: smaller">
                    15 Years of experience
                  </h6>
                  <p class="text-muted mb-0" style="font-size: x-small">
                    We have been serving the community with excellence and
                    compassion for over 15 years
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <h6
            class="text-uppercase border-bsh-accent border-start border-3 ps-3 mb-3"
          >
            Who we are
          </h6>
          <h4 class="mb-4 fw-bold">
            We provide finnest patient's Care & Amenities
          </h4>

          <p class="text-black-50 mb-3">
            Base Specialist Hospital is a leading healthcare provider in the Nigeria. We are committed to
            providing the best healthcare services to our patients. We have a
            team of highly qualified professionals who are dedicated to
            providing the best care possible.
          </p>

          <div class="row mb-4">
            <div class="col-md-6">
              <ul class="list-unstyled">
                <li class="mb-2">
                  <i class="bi bi-check-square-fill text-bsh-accent me-2"></i>
                  <span>Seamless Care</span>
                </li>
                <li class="mb-2">
                  <i class="bi bi-check-square-fill text-bsh-accent me-2"></i>
                  <span>Patient-Centered Care</span>
                </li>
                <li class="mb-2">
                  <i class="bi bi-check-square-fill text-bsh-accent me-2"></i>
                  <span>Warm and Welcoming Environment</span>
                </li>
                <li class="mb-2">
                  <i class="bi bi-check-square-fill text-bsh-accent me-2"></i>
                  <span>Personalized Approach</span>
                </li>
              </ul>
            </div>
            <div class="col-md-6">
              <ul class="list-unstyled">
                <li class="mb-2">
                  <i class="bi bi-check-square-fill text-bsh-accent me-2"></i>
                  <span>Comprehensive Care</span>
                </li>
                <li class="mb-2">
                  <i class="bi bi-check-square-fill text-bsh-accent me-2"></i>
                  <span>Cutting-Edge Technology</span>
                </li>
                <li class="mb-2">
                  <i class="bi bi-check-square-fill text-bsh-accent me-2"></i>
                  <span>Expert Doctors</span>
                </li>
                <li class="mb-2">
                  <i class="bi bi-check-square-fill text-bsh-accent me-2"></i>
                  <span>Positive Reviews</span>
                </li>
              </ul>
            </div>
          </div>

          <button
            class="btn bg-bsh-primary btn-sm d-flex align-items-center rounded-3 px-3"
          >
            Book Appointment
            <i
              class="bi bi-arrow-up-short fs-4 d-inline-block mb-0"
              style="transform: rotate(45deg)"
            ></i>
          </button>
        </div>
      </div>

      <div class="row g-5">
        <div class="col-sm-4">
          <div class="card bg-info-subtle rounded-4 border-0">
            <div class="card-body">
              <div
                class="d-flex align-items-center justify-content-center border border-white border-2 rounded-3 mb-3"
                style="height: 50px; width: 50px"
              >
                <i class="bi bi-rocket-fill fs-4 text-info"></i>
              </div>
              <h5 class="card-title fw-bold">Our Mission</h5>
              <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="card bg-success-subtle rounded-4 border-0">
            <div class="card-body">
              <div
                class="d-flex align-items-center justify-content-center border border-white border-2 rounded-3 mb-3"
                style="height: 50px; width: 50px"
              >
                <i class="bi bi-eye-fill fs-4 text-success"></i>
              </div>
              <h5 class="card-title fw-bold">Our Vision</h5>
              <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="card bg-danger-subtle rounded-4 border-0">
            <div class="card-body">
              <div
                class="d-flex align-items-center justify-content-center border border-white border-2 rounded-3 mb-3"
                style="height: 50px; width: 50px"
              >
                <i class="bi bi-balloon-heart fs-4 text-danger"></i>
              </div>
              <h5 class="card-title fw-bold">Our Values</h5>
              <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <TeamSection />

    <!-- FAQ -->
    <section class="py-5 px-md-5 px-3">
      <h6 class="text-uppercase border-bsh-accent border-start border-3 ps-2">
        FAQ
      </h6>
      <h2 class="fw-bold mb-4">Frequently Asked Questions</h2>

      <div class="row g-4">
        <!-- First Column -->
        <div class="col-md-6">
          <div class="accordion border-0" id="faqAccordion1">
            <div
              v-for="(faq, index) in faqColumn1"
              :key="faq.id"
              class="accordion-item border rounded-4 mb-3"
            >
              <h2 class="accordion-header">
                <button
                  class="accordion-button bg-white fw-bold text-dark rounded-4"
                  :class="{ collapsed: !faq.expanded }"
                  type="button"
                  data-bs-toggle="collapse"
                  :data-bs-target="`#${faq.id}`"
                  :aria-expanded="faq.expanded"
                  :aria-controls="faq.id"
                >
                  {{ faq.question }}
                </button>
              </h2>
              <div
                :id="faq.id"
                class="accordion-collapse collapse"
                :class="{ show: faq.expanded }"
                data-bs-parent="#faqAccordion1"
              >
                <div class="accordion-body text-body-tertiary">
                  {{ faq.answer }}
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Second Column -->
        <div class="col-md-6">
          <div class="accordion" id="faqAccordion2">
            <div
              v-for="(faq, index) in faqColumn2"
              :key="faq.id"
              class="accordion-item border rounded-4 mb-3"
            >
              <h2 class="accordion-header">
                <button
                  class="accordion-button bg-white fw-bold text-dark rounded-4"
                  :class="{ collapsed: !faq.expanded }"
                  type="button"
                  data-bs-toggle="collapse"
                  :data-bs-target="`#${faq.id}`"
                  :aria-expanded="faq.expanded"
                  :aria-controls="faq.id"
                >
                  {{ faq.question }}
                </button>
              </h2>
              <div
                :id="faq.id"
                class="accordion-collapse collapse"
                :class="{ show: faq.expanded }"
                data-bs-parent="#faqAccordion2"
              >
                <div class="accordion-body text-body-tertiary">
                  {{ faq.answer }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <TestimonialsSection />
    <BlogSection />
  </div>
</template>

<style scoped>
.about {
  min-height: 100vh;
}

.hero-banner {
  background: linear-gradient(135deg, var(--bsh-primary) 0%, var(--bsh-secondary) 100%);
  min-height: 50vh;
}

.hero-overlay {
  background: linear-gradient(135deg, rgba(44, 62, 80, 0.8) 0%, rgba(26, 37, 47, 0.9) 100%);
}

.min-vh-50 {
  min-height: 50vh;
}

.tracking-wider {
  letter-spacing: 0.1em;
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
