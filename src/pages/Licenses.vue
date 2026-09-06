<script>
import PageHero from '../components/PageHero.vue'

export default {
  name: 'Licenses',
  components: { PageHero },
  data() {
    return {
      licenses: [
        ['Federal Ministry of Health', 'Hospital operating license', 'Active'],
        ['HEFAMAA Lagos State', 'Facility accreditation', 'Active'],
        ['Medical & Dental Council of Nigeria', 'Institution recognition', 'Active'],
        ['Nigerian Medical Association', 'Professional membership', 'Active']
      ],
      specialtyApprovals: [
        'Family Health and preventive care',
        'General and orthopaedic surgery',
        'Gynaecology and obstetrics services',
        'Haematology and blood disorder care',
        '24/7 emergency and acute care',
        'Diagnostic imaging and laboratory support'
      ],
      hmoPartners: [
        'Hygeia HMO',
        'Reliance HMO',
        'AXA Mansard Health',
        'Leadway Health',
        'Avon HMO',
        'Police HMO',
        'Redcare HMO',
        'Total Health Trust',
        'Clearline HMO',
        'Venus Medicare'
      ]
    }
  }
}
</script>

<template>
  <main class="licenses-page">
    <PageHero
      eyebrow="Compliance"
      title="Licenses and Accreditations"
      description="Our active registrations and approvals that support safe, specialist-led healthcare delivery."
    />

    <section class="section section--mist">
      <div class="site-container licenses-grid">
        <article class="panel">
          <p class="eyebrow">Regulatory standing</p>
          <h2>Institutional licenses</h2>
          <div class="rows">
            <div v-for="item in licenses" :key="item[0]" class="row-item">
              <div>
                <strong>{{ item[0] }}</strong>
                <span>{{ item[1] }}</span>
              </div>
              <em>{{ item[2] }}</em>
            </div>
          </div>
        </article>

        <article class="panel">
          <p class="eyebrow">Service approvals</p>
          <h2>Specialist units</h2>
          <ul>
            <li v-for="item in specialtyApprovals" :key="item"><i class="bi bi-check2-circle"></i>{{ item }}</li>
          </ul>
        </article>

        <article class="panel panel--wide">
          <p class="eyebrow">Insurance coverage</p>
          <h2>HMO partners</h2>
          <p>We work with leading HMOs to make specialist healthcare more accessible.</p>
          <div class="badges">
            <span v-for="hmo in hmoPartners" :key="hmo">{{ hmo }}</span>
          </div>
        </article>
      </div>
    </section>
  </main>
</template>

<style scoped>
.licenses-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:1rem}.panel{padding:1.6rem;border:1px solid var(--line);border-radius:18px;background:#fff;box-shadow:0 8px 20px rgba(12,58,90,.06)}.panel h2{margin:.5rem 0 1rem;font:700 1.35rem Sora,sans-serif;letter-spacing:-.03em}.rows{display:grid;gap:.65rem}.row-item{display:flex;align-items:center;justify-content:space-between;gap:1rem;padding:.9rem;border:1px solid var(--line);border-radius:12px;background:#f9fcff}.row-item strong,.row-item span{display:block}.row-item strong{font-size:.85rem}.row-item span{margin-top:.2rem;color:var(--muted);font-size:.75rem}.row-item em{font-style:normal;font-size:.73rem;font-weight:800;color:#0a8f61;background:#e3f6ed;padding:.25rem .55rem;border-radius:999px}.panel ul{margin:0;padding:0;list-style:none;display:grid;gap:.6rem}.panel li{display:flex;align-items:flex-start;gap:.55rem;color:var(--muted);font-size:.84rem;line-height:1.6}.panel li i{margin-top:.15rem;color:var(--aqua)}.panel--wide{grid-column:1/-1}.panel p{margin:0;color:var(--muted);font-size:.86rem;line-height:1.68}.badges{display:flex;flex-wrap:wrap;gap:.55rem;margin-top:1rem}.badges span{padding:.46rem .8rem;border:1px solid #cfe2ef;border-radius:999px;background:#eef6fb;color:var(--blue);font-size:.75rem;font-weight:800}
@media(max-width:820px){.licenses-grid{grid-template-columns:1fr}}
</style>
