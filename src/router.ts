import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'
import PaymentPage from './pages/PaymentPage.vue'
import PaymentCompletedPage from './pages/PaymentCompletedPage.vue'
import ContactsPage from './pages/ContactsPage/index.vue'
import AddContactPage from './pages/ContactsPage/AddContactPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Payment',
    component: PaymentPage
  },
  {
    path: '/success',
    name: 'PaymentCompleted',
    component: PaymentCompletedPage
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: ContactsPage
  },
  {
    path: '/contacts/add',
    name: 'AddContact',
    component: AddContactPage
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
