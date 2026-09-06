<script>
import PageHero from '../components/PageHero.vue'
import hospitalInfo from '../data/hospital-info.json'

export default {
  name: 'PrivacyPolicy',
  components: { PageHero },
  data() {
    return {
      info: hospitalInfo,
      updated: '5 August 2026',
      principles: [
        'We only collect information needed to provide safe care and improve your experience.',
        'We protect your personal and medical data using technical and organisational safeguards.',
        'We do not sell your personal data to third parties.',
        'You may request access, correction or deletion of your data where legally applicable.'
      ],
      uses: [
        ['Patient care', 'To provide diagnosis, treatment, referrals and follow-up.'],
        ['Appointments', 'To schedule, confirm and remind you of bookings and procedures.'],
        ['Communication', 'To respond to enquiries and send requested updates.'],
        ['Compliance', 'To satisfy legal, regulatory and medical record obligations.']
      ],
      rights: [
        'Request access to information we hold about you.',
        'Request correction of inaccurate or incomplete records.',
        'Withdraw consent for optional communications at any time.',
        'Request deletion where retention is not legally required.',
        'Lodge a complaint with the appropriate data protection authority.'
      ]
    }
  }
}
</script>

<template>
  <main class="legal-page">
    <PageHero
      eyebrow="Privacy"
      title="Privacy Policy"
      description="How Base Specialist Hospital collects, uses and protects your information when you use our website or receive care."
    />

    <section class="section section--mist">
      <div class="site-container legal-wrap">
        <aside class="legal-aside">
          <p class="eyebrow">Updated</p>
          <h2>{{ updated }}</h2>
          <p>Base Specialist Hospital is committed to protecting your privacy and handling personal data responsibly.</p>
          <a :href="`mailto:${info.contact.emails[0].address}`">{{ info.contact.emails[0].address }}</a>
        </aside>

        <div class="legal-content">
          <article>
            <h2>Our privacy principles</h2>
            <ul>
              <li v-for="item in principles" :key="item"><i class="bi bi-check2-circle"></i>{{ item }}</li>
            </ul>
          </article>

          <article>
            <h2>How we use your information</h2>
            <div class="legal-grid">
              <div v-for="item in uses" :key="item[0]" class="legal-card">
                <h3>{{ item[0] }}</h3>
                <p>{{ item[1] }}</p>
              </div>
            </div>
          </article>

          <article>
            <h2>Data sharing</h2>
            <p>
              We may share relevant information with clinical staff, laboratories, insurers/HMOs and lawful authorities only where
              required to provide care, process approved claims or comply with applicable law.
            </p>
          </article>

          <article>
            <h2>Your rights</h2>
            <ul>
              <li v-for="item in rights" :key="item"><i class="bi bi-shield-check"></i>{{ item }}</li>
            </ul>
          </article>

          <article>
            <h2>Cookies and analytics</h2>
            <p>
              We may use essential cookies and limited analytics to improve performance and usability. You can manage cookie settings
              in your browser at any time.
            </p>
          </article>

          <article>
            <h2>Contact for privacy requests</h2>
            <p>
              For requests, corrections or complaints, contact us at
              <a :href="`mailto:${info.contact.emails[0].address}`">{{ info.contact.emails[0].address }}</a>
              or call
              <a :href="`tel:${info.contact.phones[0].number.replace(/\s/g, '')}`">{{ info.contact.phones[0].number }}</a>.
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
