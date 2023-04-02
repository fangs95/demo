import { createRouter, createWebHistory } from 'vue-router'
import login from "@/pages/login/index.vue";



const routes = [
    {
        path: '/',
        name: 'login',
        component: login
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router;