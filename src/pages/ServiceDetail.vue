<script>
import PageHero from '../components/PageHero.vue'
import servicesData from '../data/services.json'
import doctorsData from '../data/doctors.json'
import hospitalInfo from '../data/hospital-info.json'

export default {
  name: 'ServiceDetail',
  components: { PageHero },
  data: () => ({ service: null, info: hospitalInfo, doctors: doctorsData.doctors }),
  computed: {
    otherServices() { return servicesData.filter((item) => item.id !== this.service?.id) },
    relatedDoctors() {
      if (!this.service) return []
      const title = this.service.title.toLowerCase()
      return this.doctors.filter((doctor) => doctor.specialties.some((specialty) => title.includes(specialty.toLowerCase()) || specialty.toLowerCase().includes(title))).slice(0, 3)
    }
  },
  created() { this.loadService() },
  watch: { '$route.params.id': 'loadService' },
  methods: {
    loadService() {
      this.service = servicesData.find((item) => item.id === this.$route.params.id) || null
      if (!this.service) this.$router.replace('/services')
    }
  }
}
</script>

<template>
  <div v-if="service" class="service-detail-page">
    <PageHero eyebrow="Our services" :title="service.title" :description="service.shortDescription" />
    <section class="section">
      <div class="site-container detail-layout">
        <article>
          <router-link to="/services" class="back-link"><i class="bi bi-arrow-left"></i> All services</router-link>
          <p class="detail-intro">{{ service.description }}</p>
          <div class="feature-grid">
            <article v-for="feature in service.features" :key="feature.title" class="feature-card"><i class="bi bi-check2-circle"></i><h2>{{ feature.title }}</h2><p>{{ feature.description }}</p></article>
          </div>
          <div v-if="relatedDoctors.length" class="specialists">
            <div class="section-heading"><p class="eyebrow">Our people</p><h2>Meet your care team</h2></div>
            <div class="specialist-grid"><router-link v-for="doctor in relatedDoctors" :key="doctor.id" :to="{ name: 'DoctorDetail', params: { id: doctor.id } }" class="specialist-card"><img v-if="doctor.image" :src="doctor.image" :alt="doctor.name"><div v-else class="specialist-placeholder"><i class="bi bi-person"></i></div><div><span>{{ doctor.division }}</span><h3>{{ doctor.name }}</h3><p>{{ doctor.role }}</p></div></router-link></div>
          </div>
        </article>
        <aside class="detail-aside">
          <div class="appointment-card"><i class="bi bi-calendar2-check"></i><h2>Speak to our team</h2><p>Request an appointment and we will help you find the right next step.</p><router-link to="/book-appointment" class="button-primary">Request appointment <i class="bi bi-arrow-right"></i></router-link></div>
          <div class="emergency-card"><i class="bi bi-heart-pulse"></i><h2>Need urgent care?</h2><p>Our emergency department is open 24 hours, every day.</p><a :href="`tel:${info.contact.phones[0].number.replace(/\s/g, '')}`">{{ info.contact.phones[0].number }}</a></div>
          <nav class="other-services" aria-label="Other services"><h2>Explore other services</h2><router-link v-for="item in otherServices" :key="item.id" :to="{ name: 'ServiceDetail', params: { id: item.id } }"><i :class="['bi', item.icon]"></i>{{ item.title }}<i class="bi bi-arrow-right"></i></router-link></nav>
        </aside>
      </div>
    </section>
  </div>
</template>

<style scoped>
.detail-layout{display:grid;grid-template-columns:minmax(0,1fr) 340px;gap:5rem}.back-link{display:inline-flex;align-items:center;gap:.45rem;color:var(--blue);font-size:.82rem;font-weight:800;margin-bottom:1.7rem;transition:transform .2s}.back-link:hover{transform:translateX(-3px)}.detail-intro{max-width:790px;font-size:1.15rem;line-height:1.8;color:var(--muted);margin:0 0 2.3rem;animation:detail-enter .5s both}.feature-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:1rem}.feature-card{padding:1.5rem;border:1px solid var(--line);border-radius:17px;animation:detail-enter .55s both}.feature-card:nth-child(2){animation-delay:.06s}.feature-card:nth-child(3){animation-delay:.12s}.feature-card:nth-child(4){animation-delay:.18s}.feature-card>i{color:var(--aqua);font-size:1.25rem}.feature-card h2{font-family:Sora,sans-serif;font-size:1rem;margin:.75rem 0 .4rem}.feature-card p{margin:0;color:var(--muted);font-size:.84rem;line-height:1.65}.detail-aside{display:grid;align-content:start;gap:1rem}.appointment-card,.emergency-card,.other-services{padding:1.55rem;border-radius:18px}.appointment-card{background:var(--mist);border:1px solid var(--line)}.appointment-card>i,.emergency-card>i{font-size:1.45rem}.appointment-card>i{color:var(--aqua)}.appointment-card h2,.emergency-card h2,.other-services h2{font-family:Sora,sans-serif;font-size:1.08rem;margin:.75rem 0 .5rem}.appointment-card p,.emergency-card p{font-size:.84rem;line-height:1.65;color:var(--muted);margin:0 0 1.15rem}.appointment-card .button-primary{width:100%;font-size:.78rem;padding:.75rem}.emergency-card{background:var(--emergency);color:#fff}.emergency-card p{color:#fee7e8}.emergency-card a{font-size:.85rem;font-weight:800}.other-services{border:1px solid var(--line)}.other-services h2{margin:0 0 .6rem}.other-services a{display:grid;grid-template-columns:20px 1fr 15px;align-items:center;gap:.55rem;padding:.72rem 0;border-top:1px solid var(--line);font-size:.8rem;font-weight:700}.other-services a>i:first-child{color:var(--aqua)}.other-services a>i:last-child{font-size:.7rem;color:var(--muted);transition:transform .2s}.other-services a:hover>i:last-child{transform:translateX(3px)}.specialists{margin-top:4.5rem}.specialist-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1rem}.specialist-card{overflow:hidden;border:1px solid var(--line);border-radius:16px;transition:transform .2s,box-shadow .2s;animation:detail-enter .55s both}.specialist-card:nth-child(2){animation-delay:.08s}.specialist-card:nth-child(3){animation-delay:.16s}.specialist-card:hover{transform:translateY(-3px);box-shadow:0 12px 22px rgba(10,54,84,.1)}.specialist-card img,.specialist-placeholder{width:100%;height:170px;object-fit:cover;background:var(--mist)}.specialist-placeholder{display:grid;place-items:center;color:var(--sky);font-size:2.3rem}.specialist-card>div:last-child{padding:1rem}.specialist-card span{color:var(--aqua);font-size:.66rem;font-weight:800;text-transform:uppercase;letter-spacing:.08em}.specialist-card h3{font-family:Sora,sans-serif;font-size:.84rem;line-height:1.35;margin:.35rem 0}.specialist-card p{color:var(--muted);font-size:.72rem;margin:0}@keyframes detail-enter{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:none}}@media(max-width:950px){.detail-layout{grid-template-columns:1fr;gap:3rem}.detail-aside{grid-template-columns:repeat(2,1fr)}.other-services{grid-column:1/-1}}@media(max-width:650px){.feature-grid,.specialist-grid,.detail-aside{grid-template-columns:1fr}.other-services{grid-column:auto}.detail-intro{font-size:1rem}.specialists{margin-top:3rem}}@media(prefers-reduced-motion:reduce){.detail-intro,.feature-card,.specialist-card{animation:none}.back-link,.other-services a>i:last-child,.specialist-card{transition:none}}
</style>
