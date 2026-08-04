import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Doctors from '../pages/Doctors.vue'
import DoctorDetail from '../pages/DoctorDetail.vue'
import Blog from '../pages/Blog.vue'
import BlogDetail from '../pages/BlogDetail.vue'
import Contact from '../pages/Contact.vue'
import Services from '../pages/Services.vue'
import ServiceDetail from '../pages/ServiceDetail.vue'
import PrivacyPolicy from '../pages/PrivacyPolicy.vue'
import TermsConditions from '../pages/TermsConditions.vue'
import Licenses from '../pages/Licenses.vue'
import Gallery from '../pages/Gallery.vue'
import FaqPage from '../pages/FaqPage.vue'
import Testimonials from '../pages/Testimonials.vue'

const routes = [
    { path: '/', component: Home, meta: { title: 'Base Specialist Hospital | Specialist Healthcare in Lagos' } },
    { path: '/about', component: About, meta: { title: 'About BSH | Base Specialist Hospital' } },
    { path: '/doctors', component: Doctors, meta: { title: 'Our Doctors | Base Specialist Hospital' } },
    { path: '/doctors/:id', name: 'DoctorDetail', component: DoctorDetail },
    { path: '/services', component: Services, meta: { title: 'Services | Base Specialist Hospital' } },
    { path: '/services/:id', name: 'ServiceDetail', component: ServiceDetail },
    { path: '/blog', alias: '/health-tips', component: Blog, meta: { title: 'Health Tips | Base Specialist Hospital' } },
    { path: '/blog/:slug', component: BlogDetail, props: true },
    { path: '/contact', component: Contact, meta: { title: 'Contact BSH | Base Specialist Hospital' } },
    { path: '/privacy-policy', component: PrivacyPolicy },
    { path: '/terms', alias: '/terms-of-use', component: TermsConditions },
    { path: '/licenses', component: Licenses },
    { path: '/gallery', component: Gallery, meta: { title: 'Gallery | Base Specialist Hospital' } },
    { path: '/faq', component: FaqPage, meta: { title: 'FAQ | Base Specialist Hospital' } },
    { path: '/testimonials', component: Testimonials, meta: { title: 'Testimonials | Base Specialist Hospital' } },
    { path: '/book-appointment', redirect: { path: '/services', hash: '#book-appt' } },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        // If the user is using browser navigation (back/forward)
        if (savedPosition) {
            return savedPosition
        }
        // If there's a hash, scroll to that element
        if (to.hash) {
            // Add a small delay to ensure the element is rendered
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve({
                        el: to.hash,
                        behavior: 'smooth',
                        top: 80 // Offset for fixed navbar
                    })
                }, 100)
            })
        }
        // For all other navigation, scroll to top
        return { top: 0 }
    }
})

router.beforeEach((to) => {
    document.title = to.meta.title || 'Base Specialist Hospital'
    let description = document.querySelector('meta[name="description"]')
    if (!description) {
        description = document.createElement('meta')
        description.name = 'description'
        document.head.appendChild(description)
    }
    description.content = 'Specialist healthcare in Lagos: family health, surgery, gynaecology, haematology and 24-hour emergency care at Base Specialist Hospital.'
})

export default router
