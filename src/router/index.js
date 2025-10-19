import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Doctors from '../pages/Doctors.vue'
import Blog from '../pages/Blog.vue'
import BlogDetail from '../pages/BlogDetail.vue'
import Contact from '../pages/Contact.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/doctors', component: Doctors },
    { path: '/blog', component: Blog },
    { path: '/blog/:slug', component: BlogDetail, props: true },
    { path: '/contact', component: Contact }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
