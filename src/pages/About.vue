<script>
import TeamSection from '../components/TeamSection.vue'
import homeImage from '../assets/home-bsh.jpg'

export default {
  name: 'About',
  components: { TeamSection },
  data: () => ({
    homeImage,
    values: [
      ['bi-heart-pulse', 'Compassion', 'We listen carefully, treat every person with dignity and make room for the human side of care.'],
      ['bi-shield-check', 'Clinical excellence', 'Our teams pair specialist expertise with evidence-based standards and careful attention to detail.'],
      ['bi-people', 'Respect & teamwork', 'Patients, families and clinicians work together to make each care plan clear and personal.']
    ],
    strengths: [
      ['Consultant-led care', 'Specialist doctors coordinate care across our departments.'],
      ['Modern equipment', 'On-site laboratory, ultrasound and monitoring support faster answers.'],
      ['24/7 emergency services', 'A staffed emergency department every hour of every day.'],
      ['HMO partnerships', 'Cover accepted from leading Nigerian health maintenance organisations.'],
      ['Fast appointments', 'Same-week slots for most clinics and same-day urgent reviews.'],
      ['Excellent reviews', 'Warm, dependable care for families across Ketu and Alapere.']
    ]
  })
}
</script>

<template>
  <div class="about-v2">
    <section class="about-hero">
      <div class="site-container">
        <nav class="about-breadcrumb" aria-label="Breadcrumb"><router-link to="/">Home</router-link><i class="bi bi-chevron-right"></i><span>About BSH</span></nav>
        <div class="about-hero__content">
          <p class="about-kicker">About BSH</p>
          <h1>Specialist healthcare, delivered with humanity</h1>
          <p>Base Specialist Hospital is a Lagos-based specialist hospital offering family medicine, surgery, obstetrics and gynaecology, haematology and 24/7 emergency care — delivered with warmth, clinical rigour and respect for every patient.</p>
          <div class="about-hero__actions">
            <router-link to="/book-appointment" class="button-primary">Book an appointment</router-link>
            <router-link to="/doctors" class="about-button-light">Meet our doctors</router-link>
          </div>
        </div>
      </div>
    </section>

    <section class="section about-story"><div class="site-container about-story__grid">
      <img :src="homeImage" alt="Inside Base Specialist Hospital, Alapere Ketu Lagos" class="about-story__image">
      <div>
        <p class="eyebrow">Our story</p>
        <h2>A hospital built around the families of Alapere and Ketu</h2>
        <p class="about-intro">Base Specialist Hospital was founded to close a simple gap: specialist-grade medicine that local families could actually reach, afford and trust.</p>
        <div class="about-copy"><p>What began as a small outpatient practice has grown into a multi-department hospital covering family medicine, surgery, obstetrics and gynaecology, haematology and round-the-clock emergency care.</p><p>Today our team of consultants, resident doctors, nurses and laboratory scientists looks after families from Alapere, Ketu and across greater Lagos.</p></div>
        <ul class="about-checklist"><li><i class="bi bi-check-circle"></i>Consultant-led departments</li><li><i class="bi bi-check-circle"></i>On-site laboratory &amp; ultrasound</li><li><i class="bi bi-check-circle"></i>24/7 emergency department</li><li><i class="bi bi-check-circle"></i>Leading HMO partnerships</li></ul>
      </div>
    </div></section>

    <section class="about-values"><div class="site-container"><div class="about-values__heading"><p class="eyebrow">What guides us</p><h2>Care that is clinical, personal and dependable</h2><p>Every BSH service is shaped by a commitment to safe treatment, clear communication and a better experience for patients and families.</p></div><div class="about-values__grid"><article v-for="value in values" :key="value[1]"><span><i :class="['bi', value[0]]"></i></span><h3>{{ value[1] }}</h3><p>{{ value[2] }}</p></article></div></div></section>

    <TeamSection />

    <section class="section about-strengths"><div class="site-container"><div class="section-heading section-heading--center"><p class="eyebrow">Why families choose BSH</p><h2>Specialist care, close to home</h2><p>We bring together the services, people and practical support that help patients feel confident in their care.</p></div><div class="about-strengths__grid"><article v-for="strength in strengths" :key="strength[0]"><h3>{{ strength[0] }}</h3><p>{{ strength[1] }}</p></article></div></div></section>

    <section class="about-cta"><div class="site-container"><div><h2>Ready to see a specialist?</h2><p>Same-week appointments across our departments, and emergencies seen immediately.</p></div><div><router-link to="/book-appointment" class="about-button-light">Book appointment</router-link><a href="tel:+2347033449959" class="about-button-outline">+234 703 344 9959</a></div></div></section>
  </div>
</template>

<style scoped>
.about-hero{background:linear-gradient(112deg,rgba(5,49,92,.97),rgba(11,79,138,.9)),url('../assets/bg-bsh.jpeg') center/cover;color:#fff;padding:3.5rem 0 5rem}.about-breadcrumb{display:flex;align-items:center;gap:.5rem;font-size:.75rem;opacity:.86}.about-breadcrumb i{font-size:.65rem;opacity:.7}.about-hero__content{max-width:780px;margin-top:2.4rem}.about-kicker{display:inline-block;margin:0;padding:.35rem .8rem;border:1px solid rgba(255,255,255,.26);border-radius:999px;background:rgba(255,255,255,.1);font-size:.69rem;font-weight:800;letter-spacing:.14em;text-transform:uppercase}.about-hero h1,.about-story h2,.about-values h2,.about-cta h2{font-family:Sora,sans-serif;letter-spacing:-.045em;line-height:1.08}.about-hero h1{margin:1.3rem 0 1rem;font-size:clamp(2.55rem,5.2vw,4rem);max-width:710px}.about-hero__content>p:not(.about-kicker){max-width:700px;font-size:1.05rem;line-height:1.7;opacity:.88}.about-hero__actions{display:flex;flex-wrap:wrap;gap:.75rem;margin-top:2rem}.about-button-light,.about-button-outline{display:inline-flex;align-items:center;justify-content:center;padding:.88rem 1.35rem;border-radius:999px;font-size:.85rem;font-weight:800;transition:.2s}.about-button-light{background:#fff;color:var(--blue-deep)}.about-button-outline{border:1px solid rgba(255,255,255,.5);color:#fff}.about-button-light:hover,.about-button-outline:hover{transform:translateY(-2px)}.about-story__grid{display:grid;grid-template-columns:1fr 1fr;align-items:center;gap:clamp(2.5rem,6vw,5rem)}.about-story__image{width:100%;aspect-ratio:4/3;object-fit:cover;border-radius:24px;box-shadow:0 16px 32px rgba(14,54,79,.16)}.about-story h2{margin:.65rem 0 1rem;font-size:clamp(1.9rem,3.5vw,2.65rem)}.about-intro{color:var(--muted);font-size:1rem;line-height:1.7}.about-copy{color:var(--muted);line-height:1.75}.about-checklist{display:grid;grid-template-columns:1fr 1fr;gap:.8rem;margin:1.8rem 0 0;padding:0;list-style:none;font-size:.84rem;font-weight:800}.about-checklist i{margin-right:.45rem;color:var(--sky)}.about-values{padding:5.5rem 0;background:var(--mist);border-block:1px solid var(--line)}.about-values__heading{max-width:680px;margin:0 auto 2.5rem;text-align:center}.about-values h2{margin:.6rem 0 .8rem;font-size:clamp(1.9rem,3.5vw,2.65rem)}.about-values__heading>p:last-child{color:var(--muted)}.about-values__grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.2rem}.about-values article,.about-strengths article{padding:1.7rem;border:1px solid var(--line);border-radius:18px;background:#fff}.about-values span{display:grid;place-items:center;width:46px;height:46px;margin-bottom:1.1rem;border-radius:14px;background:#e8f6fb;color:var(--blue);font-size:1.25rem}.about-values h3,.about-strengths h3{margin:0;font-family:Sora,sans-serif;font-size:1rem}.about-values p,.about-strengths p{margin:.55rem 0 0;color:var(--muted);font-size:.88rem;line-height:1.65}.about-strengths__grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1rem}.about-cta{background:linear-gradient(112deg,var(--blue-deep),var(--blue));color:#fff}.about-cta>.site-container{display:flex;justify-content:space-between;align-items:center;gap:2rem;padding-block:3.5rem}.about-cta h2{margin:0;font-size:clamp(1.75rem,3vw,2.35rem)}.about-cta p{margin:.55rem 0 0;opacity:.86}.about-cta>div>div:last-child{display:flex;flex-wrap:wrap;gap:.75rem}@media(max-width:850px){.about-story__grid{grid-template-columns:1fr}.about-values__grid,.about-strengths__grid{grid-template-columns:1fr 1fr}.about-cta>.site-container{align-items:flex-start;flex-direction:column}}@media(max-width:600px){.about-hero{padding:2.6rem 0 3.8rem}.about-hero h1{font-size:2.35rem}.about-checklist,.about-values__grid,.about-strengths__grid{grid-template-columns:1fr}.about-values{padding:4rem 0}.about-cta>.site-container{padding-block:3rem}}
</style>
