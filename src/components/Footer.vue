<script>
import hospitalInfo from '../data/hospital-info.json'
import services from '../data/services.json'
export default { name: 'SiteFooter', data: () => ({ info: hospitalInfo, services, email: '' }) }
</script>
<template>
  <footer class="site-footer"><div class="site-container footer-grid">
    <section><router-link to="/" class="brand brand--footer"><img src="../assets/bsh.svg" alt="Base Specialist Hospital" width="54" height="54" /><span><strong>Base Specialist Hospital</strong><small>Compassionate care. Exceptional results.</small></span></router-link><p>{{ info.description }}</p><div class="socials"><a v-for="(url, name) in info.socialMedia" :key="name" :href="url" target="_blank" rel="noopener" :aria-label="name"><i :class="`bi bi-${name}`"></i></a></div></section>
    <section><h2>Quick links</h2><router-link to="/about">About BSH</router-link><router-link to="/doctors">Our Doctors</router-link><router-link to="/book-appointment">Book Appointment</router-link><router-link to="/gallery">Gallery</router-link><router-link to="/testimonials">Testimonials</router-link><router-link to="/health-tips">Health Tips</router-link><router-link to="/faq">FAQ</router-link></section>
    <section><h2>Services</h2><router-link v-for="service in services" :key="service.id" :to="`/services/${service.id}`">{{ service.title }}</router-link></section>
    <section><h2>Get in touch</h2><p><i class="bi bi-geo-alt"></i>{{ info.address.fullAddress }}</p><p><i class="bi bi-telephone"></i><a :href="`tel:${info.contact.phones[0].number.replace(/\s/g, '')}`">{{ info.contact.phones[0].number }}<small>Emergency line, 24 hours</small></a></p><p><i class="bi bi-envelope"></i><a :href="`mailto:${info.contact.emails[0].address}`">{{ info.contact.emails[0].address }}</a></p><p><i class="bi bi-clock"></i>Mon – Fri: 8:00 AM – 9:00 PM<br>Sat: 9:00 AM – 6:00 PM</p><form class="newsletter" @submit.prevent><label for="newsletter-email">Health newsletter</label><div><input id="newsletter-email" v-model="email" type="email" placeholder="Your email address" required><button>Join</button></div></form></section>
  </div><div class="site-container footer-bottom"><span>© {{ new Date().getFullYear() }} Base Specialist Hospital. All rights reserved.</span><span><router-link to="/privacy-policy">Privacy Policy</router-link><router-link to="/terms-of-use">Terms of Use</router-link><a :href="info.address.gmap" target="_blank" rel="noopener">Find us on Google Maps</a></span></div></footer>
</template>
