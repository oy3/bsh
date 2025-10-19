import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Doctors from '../pages/Doctors.vue'
import Services from '../pages/Services.vue'
import Contact from '../pages/Contact.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/doctors', component: Doctors },
    { path: '/services', component: Services },
    { path: '/contact', component: Contact }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
