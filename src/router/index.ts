import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from '@/pages/home.vue'
import AboutView from '@/pages/about.vue'
import UserView from '@/pages/user.vue'

const routes = [
    { path: '/', component: HomeView },
    { path: '/about', component: AboutView },
    { path: '/user', component: UserView },
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export default router;
