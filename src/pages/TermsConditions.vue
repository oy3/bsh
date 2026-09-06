<script>
import PageHero from '../components/PageHero.vue'
import hospitalInfo from '../data/hospital-info.json'

export default {
  name: 'TermsConditions',
  components: { PageHero },
  data() {
    return {
      info: hospitalInfo,
      updated: '5 August 2026',
      rules: [
        ['Website use', 'Use this website lawfully and do not attempt to disrupt services, scrape data, or impersonate others.'],
        ['Medical information', 'Website content is educational and does not replace in-person medical consultation.'],
        ['Appointments', 'Bookings are requests and become final only after confirmation by our front desk.'],
        ['Payments and HMOs', 'Insurance/HMO acceptance is subject to eligibility checks at the point of care.'],
        ['Intellectual property', 'Logos, content and media belong to Base Specialist Hospital unless otherwise credited.'],
        ['Liability', 'BSH is not liable for losses arising from misuse of website information without professional consultation.']
      ],
      responsibilities: [
        'Provide accurate personal and medical information.',
        'Arrive on time and follow clinical guidance provided by your care team.',
        'Treat hospital staff and other patients with respect.',
        'Comply with hospital safety protocols and applicable laws.'
      ]
    }
  }
}
</script>

<template>
  <main class="legal-page">
    <PageHero
      eyebrow="Terms"
      title="Terms and Conditions"
      description="The terms governing use of our website, appointment requests and patient interactions with Base Specialist Hospital."
    />

    <section class="section section--mist">
      <div class="site-container legal-wrap">
        <aside class="legal-aside">
          <p class="eyebrow">Updated</p>
          <h2>{{ updated }}</h2>
          <p>By using this website and our services, you agree to these terms and our privacy policy.</p>
          <router-link to="/privacy-policy">Read privacy policy</router-link>
        </aside>

        <div class="legal-content">
          <article>
            <h2>Acceptance</h2>
            <p>
              Accessing or using this website indicates acceptance of these terms. If you disagree with any part, please discontinue
              use of the site.
            </p>
          </article>

          <article>
            <h2>Key terms</h2>
            <div class="legal-grid">
              <div v-for="item in rules" :key="item[0]" class="legal-card">
                <h3>{{ item[0] }}</h3>
                <p>{{ item[1] }}</p>
              </div>
            </div>
          </article>

          <article>
            <h2>Patient responsibilities</h2>
            <ul>
              <li v-for="item in responsibilities" :key="item"><i class="bi bi-check2-circle"></i>{{ item }}</li>
            </ul>
          </article>

          <article>
            <h2>Emergency disclaimer</h2>
            <p>
              If you have an emergency, call
              <a :href="`tel:${info.contact.phones[0].number.replace(/\s/g, '')}`">{{ info.contact.phones[0].number }}</a>
              or go to the nearest emergency department immediately.
            </p>
          </article>

          <article>
            <h2>Changes to terms</h2>
            <p>
              We may update these terms periodically. Continued use after updates means you accept the revised version.
            </p>
          </article>

          <article>
            <h2>Contact</h2>
            <p>
              Questions about these terms can be sent to
              <a :href="`mailto:${info.contact.emails[0].address}`">{{ info.contact.emails[0].address }}</a>.
            </p>
          </article>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.legal-wrap{display:grid;grid-template-columns:300px minmax(0,1fr);gap:2rem}.legal-aside{position:sticky;top:98px;align-self:start;padding:1.4rem;border:1px solid var(--line);border-radius:18px;background:#fff}.legal-aside h2{margin:.4rem 0 .75rem;font:700 1.25rem Sora,sans-serif}.legal-aside p{margin:0;color:var(--muted);font-size:.84rem;line-height:1.65}.legal-aside a{display:inline-block;margin-top:1rem;font-size:.78rem;font-weight:800;color:var(--blue)}.legal-content{display:grid;gap:1rem}.legal-content article{padding:1.6rem;border:1px solid var(--line);border-radius:18px;background:#fff;box-shadow:0 8px 20px rgba(12,58,90,.06)}.legal-content h2{margin:0 0 .8rem;font:700 1.28rem Sora,sans-serif;letter-spacing:-.03em}.legal-content p{margin:0;color:var(--muted);font-size:.87rem;line-height:1.72}.legal-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:.8rem}.legal-card{padding:1rem;border:1px solid var(--line);border-radius:14px;background:#f9fcff}.legal-card h3{margin:0 0 .35rem;font-size:.9rem}.legal-card p{font-size:.8rem}.legal-content ul{margin:0;padding:0;list-style:none;display:grid;gap:.6rem}.legal-content li{display:flex;align-items:flex-start;gap:.55rem;color:var(--muted);font-size:.84rem;line-height:1.6}.legal-content li i{margin-top:.15rem;color:var(--aqua)}.legal-content a{color:var(--blue);font-weight:800}
@media(max-width:900px){.legal-wrap{grid-template-columns:1fr}.legal-aside{position:static}}
@media(max-width:620px){.legal-grid{grid-template-columns:1fr}.legal-content article{padding:1.2rem}}
</style>
