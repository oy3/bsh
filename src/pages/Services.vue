<script>
import PageHero from '../components/PageHero.vue'
import hospitalInfo from '../data/hospital-info.json'
import servicesData from '../data/services.json'
import emailService from '../services/emailService.js'
import familyImage from '../assets/home-bsh.jpg'
import surgeryImage from '../assets/bg-doc.jpg'
import womenImage from '../assets/home-bsh2.jpg'
import emergencyImage from '../assets/bg-bsh.jpeg'

export default {
  name: 'ServicesPage',
  components: { PageHero },
  data() {
    return {
      info: hospitalInfo,
      services: servicesData,
      appointmentForm: { fullName: '', email: '', service: '', preferredDate: '', message: '' },
      isSubmittingAppointment: false,
      appointmentMessage: '',
      appointmentSuccess: false,
      minAppointmentDate: this.getMinDate()
    }
  },
  methods: {
    getMinDate() {
      const date = new Date()
      date.setHours(date.getHours() + 24)
      const pad = (value) => String(value).padStart(2, '0')
      return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}T${pad(date.getHours())}:${pad(date.getMinutes())}`
    },
    async submitAppointment() {
      this.isSubmittingAppointment = true
      this.appointmentMessage = ''
      try {
        const result = await emailService.sendAppointmentEmail(this.appointmentForm)
        this.appointmentSuccess = result.success
        this.appointmentMessage = result.message
        if (result.success) this.appointmentForm = { fullName: '', email: '', service: '', preferredDate: '', message: '' }
      } catch (error) {
        this.appointmentSuccess = false
        this.appointmentMessage = 'An error occurred. Please try again later.'
      } finally {
        this.isSubmittingAppointment = false
      }
    }
  },
  computed: {
    journey() {
      return [
        ['01', 'Book', 'Reserve a slot online, by phone or on WhatsApp — it takes two minutes.'],
        ['02', 'Visit', 'Arrive, register at the front desk and be triaged by our nursing team.'],
        ['03', 'Diagnosis', 'Consultation with your specialist, supported by on-site laboratory tests.'],
        ['04', 'Treatment', 'A clear treatment plan explained in full before anything begins.'],
        ['05', 'Follow-up', 'Your care continues with reviews, guidance and recovery support.']
      ]
    }
  }
}
</script>

<template>
  <div class="services-page">
    <PageHero eyebrow="Our services" title="Specialist care across five departments"
      description="Every department at BSH is consultant-led and supported by our on-site laboratory, ultrasound and 24-hour emergency team.">
      <router-link to="/appointment" class="button-primary">Book an appointment</router-link>
    </PageHero>

    <section class="section">
      <div class="site-container">
        <div class="service-showcase">
          <article v-for="(service, index) in services" :key="service.id" class="service-panel"
            :class="{ 'service-panel--reverse': index % 2 === 1 }">
            <div class="service-panel__media">
              <img :src="service.image" :alt="service.title" loading="lazy">
            </div>
            <div class="service-panel__body"><span class="service-panel__icon"><i
                  :class="['bi', service.icon]"></i></span>
              <h2>{{ service.title }}</h2>
              <p class="service-panel__lead">{{ service.shortDescription }}</p>
              <p>{{ service.description }}</p>
              <ul>
                <li v-for="feature in service.features.slice(0, 4)" :key="feature.title">• {{ feature.title }}</li>
              </ul><router-link :to="{ name: 'ServiceDetail', params: { id: service.id } }"
                class="button-primary">Explore {{ service.title }} <i class="bi bi-arrow-right"></i></router-link>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="section section--mist journey-section">
      <div class="site-container">
        <div class="section-heading section-heading--center">
          <p class="eyebrow">Patient journey</p>
          <h2>How care works at BSH</h2>
          <p>Five clear steps, from your first message to full recovery.</p>
        </div>
        <ol class="journey-grid mb-4">
          <li v-for="item in journey" :key="item[0]"><span>{{ item[0] }}</span>
            <h3>{{ item[1] }}</h3>
            <p>{{ item[2] }}</p>
          </li>
        </ol>

        <p class="text-muted small text-center"> Questions about a department? Call <a
            :href="`tel:${info.contact.phones[0].number.replace(/\s/g, '')}`" class="text-link"> {{
              info.contact.phones[0].number }} </a> </p>
      </div>
    </section>

    <section id="book-appt" class="section appointment-section">
      <div class="site-container appointment-layout">
        <div>
          <p class="eyebrow">Appointments</p>
          <h2>Take the next step towards feeling better</h2>
          <p>Send an appointment request and our team will be in touch to confirm a convenient time.</p>
          <div class="appointment-note"><i class="bi bi-clock"></i><span><strong>Need urgent help?</strong><br>Our
              emergency department is open 24 hours, every day.</span></div>
          <a :href="`tel:${info.contact.phones[0].number.replace(/\s/g, '')}`" class="text-link"><i
              class="bi bi-telephone"></i> {{ info.contact.phones[0].number }}</a>
        </div>
        <form class="appointment-form" @submit.prevent="submitAppointment">
          <div class="form-message"
            :class="{ 'form-message--success': appointmentSuccess, 'form-message--error': !appointmentSuccess }"
            v-if="appointmentMessage" aria-live="polite">{{ appointmentMessage }}</div>
          <label>Full name<input v-model.trim="appointmentForm.fullName" type="text" autocomplete="name"
              required></label>
          <label>Email address<input v-model.trim="appointmentForm.email" type="email" autocomplete="email"
              required></label>
          <label>Service<select v-model="appointmentForm.service" required>
              <option value="" disabled>Select a service</option>
              <option v-for="service in services" :key="service.id" :value="service.title">{{ service.title }}</option>
            </select></label>
          <label>Preferred date and time<input v-model="appointmentForm.preferredDate" :min="minAppointmentDate"
              type="datetime-local" required></label>
          <label class="form-span">How can we help? <span>Optional</span><textarea
              v-model.trim="appointmentForm.message" rows="4"
              placeholder="Tell us anything useful before your visit."></textarea></label>
          <button class="button-primary form-span" type="submit" :disabled="isSubmittingAppointment"><span
              v-if="isSubmittingAppointment" class="spinner-border spinner-border-sm"></span>{{ isSubmittingAppointment
                ? 'Sending request…' : 'Request an appointment' }} <i v-if="!isSubmittingAppointment"
              class="bi bi-arrow-right"></i></button>
        </form>
      </div>
    </section>
  </div>
</template>

<style scoped>
.service-showcase {
  display: grid;
  gap: 2rem
}

.service-panel {
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 480px;
  overflow: hidden;
  border: 1px solid var(--line);
  border-radius: 24px;
  background: #fff;
  box-shadow: 0 8px 28px rgba(13, 52, 79, .08);
  transition: transform .3s, box-shadow .3s
}

.service-panel:hover {
  transform: translateY(-4px);
  box-shadow: 0 18px 38px rgba(13, 52, 79, .13)
}

.service-panel__media {
  height: 100%;
  min-height: 100%;
}

.service-panel__media>img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  aspect-ratio: 4 / 3
}

.service-panel--reverse>.service-panel__media {
  order: 2
}

.service-panel__body {
  padding: clamp(2rem, 4vw, 3rem);
  align-self: center
}

.service-panel__icon {
  display: grid;
  place-items: center;
  width: 56px;
  height: 56px;
  border-radius: 16px;
  background: #e8f6fb;
  color: var(--blue);
  font-size: 1.5rem
}

.service-panel h2 {
  margin: 1.25rem 0 .35rem;
  font-family: Sora, sans-serif;
  font-size: clamp(1.6rem, 3vw, 2rem);
  letter-spacing: -.035em
}

.service-panel__lead {
  color: var(--sky) !important;
  font-weight: 800
}

.service-panel p {
  color: var(--muted);
  line-height: 1.7
}

.service-panel ul {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: .5rem;
  margin: 1.5rem 0;
  padding: 0;
  list-style: none;
  font-size: .82rem;
  font-weight: 700
}

.service-panel .button-primary {
  margin-top: .4rem
}

.journey-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
  padding: 0;
  list-style: none
}

.journey-grid li {
  padding: 1.7rem;
  border: 1px solid var(--line);
  border-radius: 22px;
  background: #fff;
  box-shadow: 0 5px 18px rgba(13, 52, 79, .06)
}

.journey-grid span {
  font: 800 1.8rem Sora, sans-serif;
  color: var(--sky)
}

.journey-grid h3 {
  margin: .7rem 0 .4rem;
  font-family: Sora, sans-serif;
  font-size: 1rem
}

.journey-grid p {
  margin: 0;
  color: var(--muted);
  font-size: .78rem;
  line-height: 1.65
}

.appointment-section {
  background: linear-gradient(130deg, #073969, #0b669c);
  color: #fff
}

.appointment-layout {
  display: grid;
  grid-template-columns: .9fr 1.1fr;
  gap: 5rem;
  align-items: center
}

.appointment-layout h2 {
  max-width: 460px;
  font-family: Sora, sans-serif;
  font-size: clamp(2rem, 3vw, 3rem);
  letter-spacing: -.04em;
  line-height: 1.12;
  margin: .5rem 0 1rem
}

.appointment-layout>div>p:not(.eyebrow) {
  max-width: 480px;
  color: #d8eafa
}

.appointment-note {
  display: flex;
  gap: .8rem;
  margin: 1.7rem 0;
  color: #dceefa;
  font-size: .85rem
}

.appointment-note i {
  font-size: 1.25rem;
  color: #72cfeb
}

.appointment-note strong {
  color: #fff
}

.text-link {
  display: inline-flex;
  align-items: center;
  gap: .45rem;
  font-weight: 800
}

.appointment-form {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  padding: 1.5rem;
  background: #fff;
  border-radius: 20px;
  color: var(--ink);
  box-shadow: 0 20px 45px rgba(0, 0, 0, .17)
}

.appointment-form label {
  display: grid;
  gap: .38rem;
  color: #385369;
  font-size: .76rem;
  font-weight: 800
}

.appointment-form label span {
  font-weight: 500;
  color: var(--muted)
}

.appointment-form input,
.appointment-form select,
.appointment-form textarea {
  width: 100%;
  border: 1px solid var(--line);
  border-radius: 10px;
  background: #fff;
  color: var(--ink);
  padding: .7rem .75rem;
  font-size: .88rem;
  outline: none
}

.appointment-form input:focus,
.appointment-form select:focus,
.appointment-form textarea:focus {
  border-color: var(--sky);
  box-shadow: 0 0 0 3px rgba(43, 145, 201, .14)
}

.form-span,
.form-message {
  grid-column: 1/-1
}

.appointment-form button {
  border: 0;
  cursor: pointer
}

.appointment-form button:disabled {
  cursor: wait;
  opacity: .72
}

.form-message {
  padding: .7rem .8rem;
  border-radius: 10px;
  font-size: .82rem
}

.form-message--success {
  background: #e5f7ee;
  color: #087548
}

.form-message--error {
  background: #fce8e9;
  color: #a42c33
}

@media(max-width:1000px) {
  .journey-grid {
    grid-template-columns: repeat(3, 1fr)
  }
}

@media(max-width:850px) {
  .service-panel {
    grid-template-columns: 1fr;
    min-height: auto
  }

  .service-panel__media>img {
    height: 330px
  }

  .service-panel--reverse>.service-panel__media {
    order: 0
  }

  .appointment-layout {
    grid-template-columns: 1fr;
    gap: 2rem
  }
}

@media(max-width:600px) {

  .service-panel ul,
  .journey-grid {
    grid-template-columns: 1fr
  }

  .service-panel__body {
    padding: 1.5rem
  }

  .appointment-form {
    grid-template-columns: 1fr;
    padding: 1.1rem
  }

  .appointment-form>* {
    grid-column: auto
  }

  .form-span,
  .form-message {
    grid-column: auto
  }
}

@media(prefers-reduced-motion:reduce) {
  .service-panel {
    transition: none
  }
}
</style>
