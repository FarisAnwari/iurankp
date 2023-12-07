import { createRouter, createWebHistory } from 'vue-router'
import BerandaView from '@/views/BerandaView.vue'
import IuranView from '@/views/IuranView.vue'
import PengeluaranView from '@/views/PengeluaranView'

const routes = [
  {
    path: '/',
    name: 'beranda',
    component: BerandaView
  },
  {
    path: '/iuran',
    name: 'iuran',
    component: IuranView
  },
  {
    path: '/pengeluaran',
    name: 'pengeluaran',
    component: PengeluaranView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router