<script>
import PageHero from '../components/PageHero.vue'
const articles = [
  { category:'Chronic Care', title:'Living well with hypertension in Lagos', excerpt:'High blood pressure is common, quiet and treatable. Here is what our physicians want every Lagos household to understand about controlling it.', date:'18 June 2026', time:'6 min read', slug:'future-of-telemedicine-transforming-healthcare-access', featured:true },
  { category:'Maternal Health', title:'Antenatal care at BSH: what to expect, visit by visit', excerpt:'From your first booking appointment to delivery day, here is how our obstetrics team supports you through a safe pregnancy.', date:'27 May 2026', time:'7 min read', slug:'mental-health-awareness-breaking-stigma' },
  { category:'Haematology', title:'Understanding your genotype: sickle cell explained', excerpt:'Genotype testing takes minutes and can shape decisions that last a lifetime. Our haematologist explains what the results mean.', date:'30 April 2026', time:'5 min read', slug:'preventive-care-key-to-longterm-health' },
  { category:'Emergency Care', title:'When to go to the emergency department — and when to book a clinic visit', excerpt:'Knowing the difference saves time, money and sometimes lives. A practical guide from our emergency team.', date:'21 March 2026', time:'4 min read', slug:'understanding-heart-disease-prevention-treatment' },
]
export default { name:'Blog', components:{PageHero}, data:()=>({articles}) }
</script>
<template>
  <main class="tips-page"><PageHero eyebrow="Health tips" title="Guidance you can actually use" description="Short, practical articles written by the clinicians who see these conditions every day." />
    <section class="section"><div class="site-container tips-list">
      <article v-for="article in articles" :key="article.title" :class="['tip-card', { 'tip-card--featured': article.featured }]">
        <p class="eyebrow">{{ article.category }}</p><h2>{{ article.title }}</h2><p>{{ article.excerpt }}</p><div class="tip-card__meta"><span><i class="bi bi-calendar3"></i>{{ article.date }}</span><span><i class="bi bi-clock"></i>{{ article.time }}</span></div><router-link :to="`/blog/${article.slug}`">Read article <i class="bi bi-arrow-right"></i></router-link>
      </article>
    </div></section>
  </main>
</template>
<style scoped>.tips-list{display:grid;grid-template-columns:repeat(2,1fr);gap:1.2rem}.tip-card{padding:2rem;border:1px solid var(--line);border-radius:20px;transition:.22s}.tip-card:hover{border-color:#9bd2e7;box-shadow:0 14px 28px rgba(23,72,103,.1);transform:translateY(-3px)}.tip-card--featured{grid-column:span 2;padding:3rem;background:var(--mist)}.tip-card h2{max-width:760px;margin:.55rem 0 .8rem;font-family:Sora,sans-serif;font-size:clamp(1.35rem,2.4vw,2.15rem);line-height:1.2;letter-spacing:-.04em}.tip-card>p:not(.eyebrow){max-width:760px;margin:0;color:var(--muted);font-size:.88rem}.tip-card__meta{display:flex;gap:1rem;margin:1.4rem 0;color:var(--muted);font-size:.73rem}.tip-card__meta i{margin-right:.35rem;color:var(--aqua)}.tip-card a{font-size:.8rem;font-weight:800;color:var(--blue)}.tip-card a i{margin-left:.35rem;transition:.2s}.tip-card a:hover i{transform:translateX(4px)}@media(max-width:650px){.tips-list{grid-template-columns:1fr}.tip-card--featured{grid-column:auto;padding:2rem}}</style>
