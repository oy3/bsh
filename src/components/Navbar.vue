<script>
import hospitalInfo from '../data/hospital-info.json'
import services from '../data/services.json'

export default {
  name: 'MainNavbar',
  props: { transparent: { type: Boolean, default: false } },
  data: () => ({ isOpen: false, scrolled: false, info: hospitalInfo, services }),
  watch: { $route() { this.isOpen = false } },
  mounted() { window.addEventListener('keydown', this.onKeydown); window.addEventListener('scroll', this.onScroll, { passive: true }); this.onScroll() },
  beforeUnmount() { window.removeEventListener('keydown', this.onKeydown); window.removeEventListener('scroll', this.onScroll) },
  methods: { onKeydown(event) { if (event.key === 'Escape') this.isOpen = false }, onScroll() { this.scrolled = window.scrollY > 24 } }
}
</script>

<template>
    <div class="emergency-bar">
      <div class="site-container emergency-bar__inner">
        <span><i class="bi bi-clock"></i> Emergency department open 24 hours, 7 days a week</span>
        <span class="emergency-bar__contacts"><a :href="`tel:${info.contact.phones[0].number.replace(/\s/g, '')}`"><i class="bi bi-telephone"></i> {{ info.contact.phones[0].number }}</a><a :href="`mailto:${info.contact.emails[0].address}`">{{ info.contact.emails[0].address }}</a></span>
      </div>
    </div>
    <header class="site-header" :class="{ 'site-header--transparent': transparent && !scrolled, 'site-header--scrolled': scrolled }">
      <div class="site-container nav-inner">
        <router-link to="/" class="brand" aria-label="Base Specialist Hospital home">
          <img src="../assets/bsh.svg" alt="Base Specialist Hospital" width="50" height="50" />
          <span><strong>Base Specialist Hospital</strong><small>Compassionate care. Exceptional results.</small></span>
        </router-link>
        <nav class="desktop-nav" aria-label="Main navigation">
          <router-link to="/">Home</router-link><router-link to="/about">About</router-link>
          <div class="services-menu"><router-link to="/services">Services <i class="bi bi-chevron-down"></i></router-link><div class="services-popover"><router-link v-for="service in services" :key="service.id" :to="`/services/${service.id}`"><strong>{{ service.title }}</strong><small>{{ service.shortDescription }}</small></router-link></div></div>
          <router-link to="/doctors">Doctors</router-link><router-link to="/gallery">Gallery</router-link><router-link to="/health-tips">Health Tips</router-link><router-link to="/contact">Contact</router-link>
        </nav>
        <div class="nav-actions"><router-link class="appointment-button" to="/book-appointment"><i class="bi bi-calendar-plus"></i><span>Book Appointment</span></router-link><button class="menu-toggle" type="button" :aria-expanded="isOpen" aria-controls="mobile-menu" @click="isOpen = !isOpen"><i :class="isOpen ? 'bi bi-x-lg' : 'bi bi-list'"></i><span class="visually-hidden">Open menu</span></button></div>
      </div>
      <div v-if="isOpen" id="mobile-menu" class="mobile-menu">
        <router-link to="/">Home</router-link><router-link to="/about">About</router-link><router-link to="/services">Services</router-link><router-link v-for="service in services" :key="service.id" :to="`/services/${service.id}`" class="mobile-sub-link">{{ service.title }}</router-link><router-link to="/doctors">Doctors</router-link><router-link to="/gallery">Gallery</router-link><router-link to="/health-tips">Health Tips</router-link><router-link to="/testimonials">Testimonials</router-link><router-link to="/faq">FAQ</router-link><router-link to="/contact">Contact</router-link>
      </div>
    </header>
</template>
