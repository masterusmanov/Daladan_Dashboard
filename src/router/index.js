import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/Login/Login.vue'; 
import Admin from '../views/Admin/Admin.vue'
import Dashboard from '../views/Dashboard.vue';
import Home from '../views/Home/Home.vue';
import Category from '../views/Category/Category.vue';
import News from '../views/News/News.vue';
import Banner from '../views/Banner/Banner.vue';
import Faq from '../views/Faq/Faq.vue';
import Users from '../views/Users/Users.vue';
import Contact from '../views/Contact/Contact.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard,
      children: [
        {
          path: '/home',
          name: 'home',
          component: Home
        },
        {
          path: '/admin',
          name: 'admin',
          component: Admin
        },
        {
          path: '/category',
          name: 'category',
          component: Category
        },
        {
          path: '/news',
          name: 'news',
          component: News
        },
        {
          path: '/banner',
          name: 'banner',
          component: Banner
        },
        {
          path: '/faq',
          name: 'faq',
          component: Faq
        },
        {
          path: '/users',
          name: 'users',
          component: Users
        },
        {
          path: '/contact',
          name: 'contact',
          component: Contact
        }
      ],
      // beforeEnter:((to, from, next) => {

      //   let token = localStorage.getItem('token')
      
      //   if (to.name !== "login" && !token) {
      //     next({ name: 'login' })
      //   } else {
      //     next()
      //   }
      
      // })
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})

export default router
