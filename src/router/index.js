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

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/doctors', component: Doctors },
    { path: '/doctors/:id', name: 'DoctorDetail', component: DoctorDetail },
    { path: '/services', component: Services },
    { path: '/services/:id', name: 'ServiceDetail', component: ServiceDetail },
    { path: '/blog', component: Blog },
    { path: '/blog/:slug', component: BlogDetail, props: true },
    { path: '/contact', component: Contact }
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

export default router
