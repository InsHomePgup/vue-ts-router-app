import { createRouter, createWebHashHistory} from 'vue-router'

import HomeView from '@/pages/home.vue'
import AboutView from '@/pages/about.vue'
import UserView from '@/pages/user.vue'

const routes = [
    { path: '/', component: HomeView },
    { path: '/about', component: AboutView },
    { path: '/user/:id', component: UserView },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router;
