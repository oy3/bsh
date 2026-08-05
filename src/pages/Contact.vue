<script>
import PageHero from '../components/PageHero.vue'
import hospitalInfo from '../data/hospital-info.json'
import emailService from '../services/emailService.js'

export default {
  name: 'Contact',
  components: { PageHero },
  data() {
    return {
      info: hospitalInfo,
      isSubmitting: false,
      submitMessage: '',
      submitSuccess: false,
      form: this.emptyForm(),
    }
  },
  computed: {
    phone() { return this.info.contact.phones[0].number },
    phoneLink() { return `tel:${this.phone.replace(/\s/g, '')}` },
    whatsappLink() { return `https://wa.me/${this.phone.replace(/\D/g, '')}` },
  },
  methods: {
    emptyForm() {
      return { fullName: '', email: '', phone: '', subject: '', message: '' }
    },
    async submitForm() {
      this.isSubmitting = true
      this.submitMessage = ''
      try {
        const [firstName, ...remainingName] = this.form.fullName.trim().split(/\s+/)
        const result = await emailService.sendContactEmail({ ...this.form, firstName, lastName: remainingName.join(' ') || 'Patient', department: 'General enquiry', urgency: 'normal' })
        this.submitSuccess = result.success
        this.submitMessage = result.message
        if (result.success) this.form = this.emptyForm()
      } catch (error) {
        this.submitSuccess = false
        this.submitMessage = 'An error occurred. Please try again later.'
      } finally {
        this.isSubmitting = false
      }
    },
  },
}
</script>

<template>
  <main class="contact-page">
    <PageHero eyebrow="Contact" title="We are easy to reach"
      description="22 Demurin Street, Alapere, Ketu, Lagos 100001, Nigeria — with free on-site parking and a 24-hour emergency department." />

    <section class="contact-intro section section--mist">
      <div class="site-container">
        <a class="contact-callout" :href="phoneLink"><i class="bi bi-telephone-fill"></i><span>{{ phone
        }}</span><small>Book an appointment</small></a>
        <div class="contact-options">
          <a :href="info.address.gmap" target="_blank" rel="noopener"><i class="bi bi-geo-alt"></i><span><strong>Visit
                us</strong><small>22 Demurin Street<br>Alapere, Ketu, Lagos</small></span><b>Get directions <i
                class="bi bi-arrow-up-right"></i></b></a>
          <a :href="phoneLink"><i class="bi bi-telephone"></i><span><strong>Call us</strong><small>{{ phone }}<br>Front
                desk & emergencies</small></span><b>Call now <i class="bi bi-arrow-up-right"></i></b></a>
          <a :href="`mailto:${info.contact.emails[0].address}`"><i class="bi bi-envelope"></i><span><strong>Email
                us</strong><small>{{ info.contact.emails[0].address }}<br>{{ info.contact.emails[1].address
                }}</small></span><b>Send email <i class="bi bi-arrow-up-right"></i></b></a>
          <a :href="whatsappLink" target="_blank" rel="noopener"><i
              class="bi bi-whatsapp"></i><span><strong>WhatsApp</strong><small>Quick questions & bookings<br>Replies
                during clinic hours</small></span><b>Open chat <i class="bi bi-arrow-up-right"></i></b></a>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="site-container contact-grid">
        <div class="contact-form-wrap">
          <div class="section-heading">
            <p class="eyebrow">Send a message</p>
            <h2>How can we help?</h2>
            <p>For non-urgent enquiries. In an emergency, please call <a :href="phoneLink">{{ phone }}</a> or come
              straight to the hospital.</p>
          </div>
          <p v-if="submitMessage" class="form-message" :class="{ 'form-message--error': !submitSuccess }" role="status">
            {{ submitMessage }}</p>
          <form @submit.prevent="submitForm">
            <label>Full name *<input v-model.trim="form.fullName" required autocomplete="name"></label>
            <div class="field-grid"><label>Phone number *<input v-model.trim="form.phone" required type="tel"
                  autocomplete="tel"></label><label>Email *<input v-model.trim="form.email" required type="email"
                  autocomplete="email"></label></div>
            <label>Subject *<input v-model.trim="form.subject" required></label>
            <label>Message *<textarea v-model.trim="form.message" required rows="5"></textarea></label>
            <button class="button-primary" :disabled="isSubmitting"><i class="bi bi-send"></i>{{ isSubmitting ?
              'Sending…' : 'Send message' }}</button>
          </form>
        </div>
        <aside class="hours-panel">
          <p class="eyebrow">Plan your visit</p>
          <h2>Opening hours</h2>
          <dl><template v-for="(hours, day) in info.workingHours.regular" :key="day">
              <dt>{{ day }}</dt>
              <dd>{{ day === 'sunday' ? 'Emergencies only' : hours.replace(' - ', ' – ') }}</dd>
            </template>
          </dl>
          <div><i class="bi bi-heart-pulse-fill"></i><strong>Emergency department</strong><span>Open 24 hours, 7 days a
              week</span></div>
        </aside>
      </div>
    </section>

    <section class="section">
      <div class="site-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.399640022085!2d3.387433776031318!3d6.597153093396644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b92efc4eb0043%3A0xa73eb3c54f9a58ea!2s22%20Demurin%20St%2C%20Ketu%2C%20Lagos%20105102%2C%20Lagos!5e0!3m2!1sen!2sng!4v1785949994622!5m2!1sen!2sng"
          width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" class="rounded-4 shadow-sm"
          referrerpolicy="strict-origin-when-cross-origin"></iframe>
      </div>
    </section>
  </main>
</template>

<style scoped>
.contact-intro {
  padding-top: 3.5rem;
  padding-bottom: 3.5rem
}

.contact-callout {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .7rem;
  margin: 0 auto 2.4rem;
  color: var(--blue);
  font-weight: 800
}

.contact-callout i {
  font-size: 1.15rem
}

.contact-callout small {
  padding-left: .7rem;
  border-left: 1px solid var(--line);
  color: var(--muted);
  font-size: .76rem
}

.contact-options {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem
}

.contact-options>a {
  padding: 1.45rem;
  background: #fff;
  border: 1px solid var(--line);
  border-radius: 18px;
  transition: .2s
}

.contact-options>a:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 26px rgba(23, 72, 103, .1);
  border-color: #9bd2e7
}

.contact-options>a>i {
  display: grid;
  place-items: center;
  width: 42px;
  height: 42px;
  margin-bottom: 1rem;
  border-radius: 13px;
  background: #e7f6fa;
  color: var(--aqua);
  font-size: 1.15rem
}

.contact-options span,
.contact-options strong,
.contact-options small {
  display: block
}

.contact-options strong {
  font-family: Sora, sans-serif;
  font-size: .92rem
}

.contact-options small {
  margin: .45rem 0 1rem;
  color: var(--muted);
  font-size: .75rem;
  line-height: 1.6
}

.contact-options b {
  font-size: .73rem;
  color: var(--blue)
}

.contact-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.5fr) minmax(270px, .7fr);
  gap: 5rem
}

.section-heading a {
  color: var(--blue);
  font-weight: 800
}

.contact-form-wrap form {
  display: grid;
  gap: 1rem
}

.field-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem
}

.contact-form-wrap label {
  display: grid;
  gap: .4rem;
  color: var(--ink);
  font-size: .78rem;
  font-weight: 800
}

.contact-form-wrap input,
.contact-form-wrap select,
.contact-form-wrap textarea {
  width: 100%;
  border: 1px solid var(--line);
  border-radius: 11px;
  padding: .75rem .9rem;
  background: #fff;
  color: var(--ink);
  font-weight: 500;
  outline: 0
}

.contact-form-wrap textarea {
  resize: vertical
}

.contact-form-wrap input:focus,
.contact-form-wrap select:focus,
.contact-form-wrap textarea:focus {
  border-color: #58afcf;
  box-shadow: 0 0 0 3px rgba(45, 145, 201, .13)
}

.contact-form-wrap button {
  border: 0;
  width: max-content;
  margin-top: .4rem;
  cursor: pointer
}

.contact-form-wrap button:disabled {
  cursor: wait;
  opacity: .72
}

.form-message {
  margin: 0 0 1.4rem;
  padding: .8rem 1rem;
  border-radius: 11px;
  background: #e5f7ee;
  color: #08784e;
  font-size: .82rem;
  font-weight: 700
}

.form-message--error {
  background: #fce9ea;
  color: #a5262e
}

.hours-panel {
  align-self: start;
  padding: 2rem;
  border: 1px solid var(--line);
  border-radius: 20px;
  background: var(--mist)
}

.hours-panel h2 {
  margin: .5rem 0 1.4rem;
  font-family: Sora, sans-serif;
  font-size: 1.45rem;
  letter-spacing: -.04em
}

.hours-panel dl {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: .75rem 1rem;
  margin: 0
}

.hours-panel dt,
.hours-panel dd {
  font-size: .78rem
}

.hours-panel dd {
  margin: 0;
  color: var(--muted);
  text-align: right
}

.hours-panel>div {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: .2rem .65rem;
  margin-top: 1.6rem;
  padding-top: 1.4rem;
  border-top: 1px solid var(--line)
}

.hours-panel>div i {
  grid-row: span 2;
  color: var(--emergency);
  font-size: 1.1rem
}

.hours-panel>div strong,
.hours-panel>div span {
  font-size: .76rem
}

.hours-panel>div span {
  color: var(--muted)
}

@media(max-width:950px) {
  .contact-options {
    grid-template-columns: repeat(2, 1fr)
  }

  .contact-grid {
    gap: 3rem
  }
}

@media(max-width:600px) {

  .contact-options,
  .field-grid,
  .contact-grid {
    grid-template-columns: 1fr
  }

  .contact-callout {
    align-items: flex-start;
    flex-wrap: wrap;
    justify-content: flex-start
  }

  .contact-callout small {
    border: 0;
    padding-left: 1.8rem;
    flex-basis: 100%
  }
}
</style>
