import { createRouter, createWebHistory } from 'vue-router'
import BerandaView from '@/views/BerandaView.vue'

const routes = [
  {
    path: '/',
    name: 'beranda',
    component: BerandaView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router