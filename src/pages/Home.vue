<script>
import HeroSection from "../components/HeroSection.vue";
import services from "../data/services.json";
import doctorsData from "../data/doctors.json";
import testimonials from "../data/testimonials.json";
import hospitalInfo from "../data/hospital-info.json";
import familyImage from "../assets/home-bsh.jpg";
import surgeryImage from "/images/services/surgeries.jpeg";
import haematologyImage from "../assets/bg-doc.jpg";
import womenImage from "../assets/home-bsh2.jpg";
import emergencyImage from "../assets/bg-bsh.jpeg";
export default {
  name: "Home",
  components: { HeroSection },
  data: () => ({
    services,
    serviceImages: [
      familyImage,
      surgeryImage,
      womenImage,
      haematologyImage,
      emergencyImage,
    ],
    doctors: doctorsData.doctors.slice(0, 4),
    testimonials:
      testimonials.testimonials?.slice(0, 3) ||
      testimonials.slice?.(0, 3) ||
      [],
    healthTips: [
      {
        category: "Chronic care",
        title: "Living well with hypertension in Lagos",
        excerpt:
          "High blood pressure is common, quiet and treatable. Here is what our physicians want every Lagos household to understand about controlling it.",
        date: "18 June 2026",
        time: "6 min read",
        slug: "future-of-telemedicine-transforming-healthcare-access",
        image: familyImage,
      },
      {
        category: "Maternal health",
        title: "Antenatal care at BSH: what to expect, visit by visit",
        excerpt:
          "From your first booking appointment to delivery day, here is how our obstetrics team supports you through a safe pregnancy.",
        date: "27 May 2026",
        time: "7 min read",
        slug: "mental-health-awareness-breaking-stigma",
        image: womenImage,
      },
      {
        category: "Haematology",
        title: "Understanding your genotype: sickle cell explained",
        excerpt:
          "Genotype testing takes minutes and can shape decisions that last a lifetime. Our haematologist explains what the results mean.",
        date: "30 April 2026",
        time: "5 min read",
        slug: "preventive-care-key-to-longterm-health",
        image: surgeryImage,
      },
    ],
    info: hospitalInfo,
    openFaq: 0,
    faqs: [
      {
        q: "Do I need an appointment?",
        a: "Appointments help us prepare for your visit, but our emergency department is available 24 hours a day, every day.",
      },
      {
        q: "Which services does BSH provide?",
        a: "We provide family health, surgery, gynaecology and obstetrics, haematology and emergency care.",
      },
      {
        q: "Where is Base Specialist Hospital located?",
        a: "We are at 22 Demurin Street, Alapere, Ketu, Lagos 100001, Nigeria.",
      },
    ],
  }),
  methods: {
    truncateText(text, maxLength) {
      if (!text || text.length <= maxLength) return text || "";

      return `${text.slice(0, maxLength).trimEnd()}...`;
    },
  },
};
</script>
<template>
  <div class="home">
    <HeroSection />
    <section class="trust-strip">
      <div class="site-container">
        <span><i class="bi bi-shield-check"></i> Specialist-led care</span
        ><span><i class="bi bi-heart-pulse"></i> Emergency cover, 24/7</span
        ><span><i class="bi bi-people"></i> Care for the whole family</span
        ><span><i class="bi bi-hospital"></i> Lagos-based hospital</span>
      </div>
    </section>
    <section class="section">
      <div class="site-container">
        <div class="section-heading">
          <p class="eyebrow">Our services</p>
          <h2>Expert care for every stage of life</h2>
          <p>
            Our clinicians bring together expertise, modern facilities and a
            deeply personal approach to your care.
          </p>
        </div>
        <div class="service-grid">
          <router-link
            v-for="(service, index) in services"
            :key="service.id"
            :to="`/services/${service.id}`"
            class="service-card"
          >
            <div class="service-card__media">
              <img
                :src="serviceImages[index]"
                :alt="`${service.title} at Base Specialist Hospital`"
                loading="lazy"
              />
            </div>
            <div class="service-card__body">
              <i :class="`bi ${service.icon}`"></i>
              <h3>{{ service.title }}</h3>
              <p>{{ service.summary }}</p>
              <span>Learn more <i class="bi bi-arrow-right"></i></span>
            </div>
          </router-link>
        </div>
      </div>
    </section>
    <section class="section section--mist">
      <div class="site-container story-grid">
        <div class="story-image">
          <img
            src="../assets/home-bsh.jpg"
            alt="A member of the Base Specialist Hospital team"
            loading="lazy"
          />
          <div><strong>24/7</strong><span>Emergency care</span></div>
        </div>
        <div>
          <div class="section-heading">
            <p class="eyebrow">Why choose BSH</p>
            <h2>Healthcare delivered with warmth, skill and respect</h2>
            <p>
              At Base Specialist Hospital, your well-being takes centre stage.
              We combine clinical rigour with compassionate, attentive care for
              every patient and family.
            </p>
          </div>
          <ul class="check-list">
            <li>Specialist medical professionals</li>
            <li>Personalised treatment plans</li>
            <li>Modern diagnostic and clinical care</li>
            <li>A welcoming environment for patients and families</li>
          </ul>
          <router-link to="/about" class="button-primary"
            >Discover BSH <i class="bi bi-arrow-right"></i
          ></router-link>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="site-container">
        <div class="section-heading">
          <p class="eyebrow">Our specialists</p>
          <h2>Meet the people behind your care</h2>
          <p>
            Experienced doctors and healthcare professionals, ready to listen
            and help.
          </p>
        </div>
        <div class="doctor-grid">
          <router-link
            v-for="doctor in doctors"
            :key="doctor.id"
            :to="`/doctors/${doctor.id}`"
            class="doctor-card"
          >
            <img
              v-if="doctor.image"
              :src="doctor.image"
              :alt="doctor.name"
              loading="lazy"
            />
            <div v-else class="doctor-placeholder">
              <i class="bi bi-person"></i>
            </div>
            <div>
              <span>{{ doctor.division }}</span>
              <h3>{{ doctor.name }}</h3>
              <p>{{ doctor.role }}</p>
            </div></router-link
          >
        </div>
        <div class="center-action">
          <router-link to="/doctors" class="button-primary">
            Meet our doctors <i class="bi bi-arrow-right"></i>
          </router-link>
        </div>
      </div>
    </section>
    <section class="appointment-band">
      <div class="site-container">
        <div>
          <p class="eyebrow">Your health, our priority</p>
          <h2>Ready to speak with a doctor?</h2>
          <p>Book a convenient appointment with our care team today.</p>
        </div>
        <router-link to="/book-appointment" class="button-primary"
          >Book an appointment <i class="bi bi-calendar-plus"></i
        ></router-link>
      </div>
    </section>
    <section class="section section--mist">
      <div class="site-container">
        <div class="section-heading section-heading--center">
          <p class="eyebrow">Patient voices</p>
          <h2>Care that patients remember</h2>
        </div>
        <div class="testimonial-grid">
          <article
            v-for="(testimonial, index) in testimonials"
            :key="index"
            class="testimonial-card"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="mb-2"
              style="color: #58afcf"
              aria-hidden="true"
            >
              <path
                d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"
              ></path>
              <path
                d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"
              ></path>
            </svg>
            <div
              class="stars"
              :aria-label="`${testimonial.rating} out of 5 stars`"
            >
              <i
                v-for="star in 5"
                :key="star"
                class="bi"
                :class="star <= testimonial.rating ? 'bi-star-fill' : 'bi-star'"
                aria-hidden="true"
              ></i>
            </div>
            <blockquote>“{{ truncateText(testimonial.text, 220) }}”</blockquote>
            <strong>{{ testimonial.name }}</strong>
            <span>{{ testimonial.role || "BSH patient" }}</span>
          </article>
        </div>
        <div class="center-action">
          <router-link to="/testimonials" class="button-primary">
            Read more <i class="bi bi-arrow-right"></i>
          </router-link>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="site-container">
        <div class="health-tips-heading">
          <div class="section-heading">
            <p class="eyebrow">Health tips</p>
            <h2>Practical guidance from our clinicians</h2>
          </div>
          <router-link to="/blog" class="health-tips-all">
            All articles <i class="bi bi-arrow-right"></i>
          </router-link>
        </div>
        <div class="health-tips-grid">
          <router-link
            v-for="article in healthTips"
            :key="article.slug"
            :to="`/blog/${article.slug}`"
            class="news-card"
          >
            <div class="news-card__media">
              <img :src="article.image" :alt="article.title" loading="lazy" />
            </div>
            <div class="news-card__body">
              <p class="eyebrow">{{ article.category }}</p>
              <h3>{{ article.title }}</h3>
              <p>{{ article.excerpt }}</p>
              <div class="news-card__meta">
                <span><i class="bi bi-calendar3"></i>{{ article.date }}</span>
                <span><i class="bi bi-clock"></i>{{ article.time }}</span>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </section>

    <section class="section section--mist">
      <div class="site-container faq-layout">
        <div class="section-heading">
          <p class="eyebrow">Frequently asked questions</p>
          <h2>Helpful answers, before you visit</h2>
          <p>Still need help? Our friendly team is only a call away.</p>
          <a href="tel:+2347033449959" class="button-primary mt-3">
            Call us now <i class="bi bi-telephone"></i>
          </a>
        </div>
        <div class="faq-list">
          <article
            v-for="(faq, index) in faqs"
            :key="faq.q"
            :class="{ open: openFaq === index }"
          >
            <button
              @click="openFaq = openFaq === index ? -1 : index"
              :aria-expanded="openFaq === index"
            >
              {{ faq.q
              }}<i :class="openFaq === index ? 'bi bi-dash' : 'bi bi-plus'"></i>
            </button>
            <p v-show="openFaq === index">{{ faq.a }}</p>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.home {
  margin-top: -76px;
}
.trust-strip {
  background: #eaf6fb;
  border-block: 1px solid #d7edf5;
}
.trust-strip .site-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  padding: 1rem 0;
}
.trust-strip span {
  font-size: 0.78rem;
  font-weight: 800;
  color: #215979;
}
.trust-strip i {
  color: #129aa6;
  margin-right: 0.35rem;
}
.service-grid,
.doctor-grid,
.testimonial-grid {
  display: grid;
  gap: 1.25rem;
}
.service-grid,
.testimonial-grid {
  grid-template-columns: repeat(3, 1fr);
}
.doctor-grid {
  grid-template-columns: repeat(4, 1fr);
}
.service-card {
  display: flex;
  min-height: 100%;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid var(--line);
  border-radius: 24px;
  background: #fff;
  box-shadow: 0 8px 22px rgba(23, 72, 103, 0.07);
  transition:
    border-color 0.3s ease,
    box-shadow 0.3s ease;
}
.service-card:hover {
  border-color: #a6d7e9;
  box-shadow: 0 16px 34px rgba(23, 72, 103, 0.14);
}
.service-card__media {
  height: 175px;
  overflow: hidden;
  background: var(--mist);
}
.service-card__media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.55s cubic-bezier(0.16, 1, 0.3, 1);
}
.service-card:hover .service-card__media img,
.service-card:focus-visible .service-card__media img {
  transform: scale(1.055);
}
.service-card__body {
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  padding: 1.7rem;
}
.service-card__body > i {
  display: grid;
  place-items: center;
  width: 52px;
  height: 52px;
  border-radius: 16px;
  background: #eaf7fb;
  color: var(--blue);
  font-size: 1.45rem;
}
.service-card h3,
.doctor-card h3 {
  font-family: Sora, sans-serif;
  font-size: 1rem;
  margin: 1rem 0 0.4rem;
}
.service-card p {
  margin-bottom: 1.2rem;
  color: var(--muted);
  font-size: 0.84rem;
  line-height: 1.7;
  min-height: 0;
}
.service-card span {
  display: inline-flex;
  align-items: center;
  gap: 0.65rem;
  margin-top: auto;
  color: var(--sky);
  font-size: 0.82rem;
  font-weight: 800;
}
.service-card span i {
  transition: transform 0.25s ease;
}
.service-card:hover span i {
  transform: translateX(4px);
}
.service-card:focus-visible {
  outline: 3px solid rgba(43, 145, 201, 0.25);
  outline-offset: 3px;
}
@media (prefers-reduced-motion: reduce) {
  .service-card__media img,
  .service-card span i {
    transition: none;
  }
  .service-card:hover .service-card__media img,
  .service-card:focus-visible .service-card__media img {
    transform: none;
  }
}
.story-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6rem;
  align-items: center;
}
.story-image {
  position: relative;
}
.story-image img {
  width: 100%;
  min-height: 450px;
  object-fit: cover;
  border-radius: 24px;
}
.story-image > div {
  position: absolute;
  bottom: 1.2rem;
  right: -1rem;
  display: grid;
  padding: 1rem 1.2rem;
  border-radius: 16px;
  background: #fff;
  box-shadow: 0 12px 28px rgba(23, 72, 103, 0.15);
}
.story-image strong {
  font-family: Sora, sans-serif;
  font-size: 1.5rem;
  color: var(--blue);
}
.story-image span {
  font-size: 0.69rem;
  color: var(--muted);
}
.check-list {
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;
}
.check-list li {
  margin: 0.7rem 0;
  font-size: 0.86rem;
  font-weight: 700;
}
.check-list li:before {
  content: "✓";
  margin-right: 0.7rem;
  color: #119f78;
}
.doctor-card {
  overflow: hidden;
  border: 1px solid var(--line);
  border-radius: 18px;
  background: #fff;
  transition: 0.2s;
}
.doctor-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 28px rgba(23, 72, 103, 0.12);
}
.doctor-card img,
.doctor-placeholder {
  width: 100%;
  height: 230px;
  object-fit: cover;
  object-position: top;
  background: #e5f2f7;
}
.doctor-placeholder {
  display: grid;
  place-items: center;
  font-size: 3rem;
  color: #6da5bb;
}
.doctor-card > div:last-child {
  padding: 1.15rem;
}
.doctor-card span {
  font-size: 0.67rem;
  font-weight: 800;
  color: #159aa5;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}
.doctor-card h3 {
  margin: 0.45rem 0;
  font-size: 0.91rem;
}
.doctor-card p {
  margin: 0;
  font-size: 0.75rem;
  color: var(--muted);
}
.center-action {
  text-align: center;
  margin-top: 2rem;
}
.appointment-band {
  padding: 4rem 0;
  background: linear-gradient(112deg, #073969, #0b699a);
  color: #fff;
}
.appointment-band .site-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
}
.appointment-band h2 {
  font:
    700 clamp(1.9rem, 3.5vw, 3rem)/1.1 Sora,
    sans-serif;
  margin: 0.5rem 0;
}
.appointment-band p:not(.eyebrow) {
  margin: 0;
  color: #cce5f2;
}
.appointment-band .button-primary {
  background: #fff;
  color: var(--blue);
  white-space: nowrap;
}
.testimonial-grid {
  grid-template-columns: repeat(3, 1fr);
}
.testimonial-card {
  padding: 1.6rem;
  border: 1px solid var(--line);
  border-radius: 18px;
  background: #fff;
}
.stars {
  color: #e69a24;
  font-size: 0.85rem;
  letter-spacing: 0.14em;
}
.testimonial-card blockquote {
  margin: 1rem 0;
  font-size: 0.88rem;
  line-height: 1.75;
}
.testimonial-card strong,
.testimonial-card span {
  display: block;
  font-size: 0.75rem;
}
.testimonial-card span {
  color: var(--muted);
}
.health-tips-section {
  background: #fff;
}
.health-tips-heading {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 2rem;
  margin-bottom: 2.4rem;
}
.health-tips-heading .section-heading {
  margin-bottom: 0;
}
.health-tips-all {
  display: inline-flex;
  flex: 0 0 auto;
  align-items: center;
  gap: 0.65rem;
  padding: 0.82rem 1.25rem;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: #fff;
  color: var(--ink);
  box-shadow: 0 4px 12px rgba(23, 72, 103, 0.08);
  font-size: 0.82rem;
  font-weight: 800;
  transition: 0.25s ease;
}
.health-tips-all:hover {
  transform: translateY(-2px);
  border-color: #9bd2e7;
  color: var(--blue);
  box-shadow: 0 9px 20px rgba(23, 72, 103, 0.12);
}
.health-tips-all i {
  transition: transform 0.25s ease;
}
.health-tips-all:hover i {
  transform: translateX(4px);
}
.health-tips-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.25rem;
}
.news-card {
  display: flex;
  min-width: 0;
  overflow: hidden;
  flex-direction: column;
  border: 1px solid var(--line);
  border-radius: 24px;
  background: #fff;
  box-shadow: 0 8px 22px rgba(23, 72, 103, 0.07);
  transition:
    transform 0.3s ease,
    border-color 0.3s ease,
    box-shadow 0.3s ease;
}
.news-card:hover {
  transform: translateY(-5px);
  border-color: #a6d7e9;
  box-shadow: 0 16px 34px rgba(23, 72, 103, 0.14);
}
.news-card:focus-visible {
  outline: 3px solid rgba(43, 145, 201, 0.25);
  outline-offset: 3px;
}
.news-card__media {
  height: 175px;
  overflow: hidden;
  background: var(--mist);
}
.news-card__media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.55s cubic-bezier(0.16, 1, 0.3, 1);
}
.news-card:hover .news-card__media img,
.news-card:focus-visible .news-card__media img {
  transform: scale(1.055);
}
.news-card__body {
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 1.5rem;
}
.news-card h3 {
  margin: 0.65rem 0 0.7rem;
  font-family: Sora, sans-serif;
  font-size: 1.05rem;
  line-height: 1.4;
  letter-spacing: -0.025em;
}
.news-card__body > p:not(.eyebrow) {
  margin: 0;
  color: var(--muted);
  font-size: 0.82rem;
  line-height: 1.7;
}
.news-card__meta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.85rem;
  margin-top: auto;
  padding-top: 1.5rem;
  color: var(--muted);
  font-size: 0.72rem;
}
.news-card__meta span {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
}
.news-card__meta i {
  color: var(--aqua);
}
.faq-layout {
  display: grid;
  grid-template-columns: 0.82fr 1fr;
  gap: 5rem;
}
.faq-list article {
  border-bottom: 1px solid var(--line);
}
.faq-list button {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 1.15rem 0;
  border: 0;
  background: transparent;
  text-align: left;
  font-weight: 800;
  font-size: 0.92rem;
  color: var(--ink);
}
.faq-list p {
  margin: 0 0 1.1rem;
  color: var(--muted);
  font-size: 0.84rem;
}
@media (max-width: 950px) {
  .service-grid,
  .doctor-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .health-tips-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .story-grid,
  .faq-layout {
    grid-template-columns: 1fr;
    gap: 2.6rem;
  }
  .story-image > div {
    right: 1rem;
  }
  .footer-grid {
    grid-template-columns: 1fr 1fr;
  }
  .trust-strip .site-container {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 600px) {
  .service-grid,
  .doctor-grid,
  .testimonial-grid {
    grid-template-columns: 1fr;
  }
  .trust-strip .site-container {
    gap: 0.5rem;
    font-size: 0.7rem;
  }
  .trust-strip span {
    font-size: 0.67rem;
  }
  .story-image img {
    min-height: 330px;
  }
  .appointment-band .site-container {
    display: block;
  }
  .appointment-band .button-primary {
    margin-top: 1.2rem;
  }
  .service-card__media {
    height: 205px;
  }
  .service-card__body {
    padding: 1.35rem;
  }
  .health-tips-heading {
    align-items: flex-start;
    flex-direction: column;
  }
  .health-tips-grid {
    grid-template-columns: 1fr;
  }
  .news-card__media {
    height: 205px;
  }
}
</style>
