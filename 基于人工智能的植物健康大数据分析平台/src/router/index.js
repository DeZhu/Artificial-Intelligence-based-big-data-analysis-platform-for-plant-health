import Vue from 'vue'
import VueRouter from 'vue-router'

const Login = () => import(/* webpackChunkName: "login-home" */ '../components/login/Login.vue')
const Register = () => import(/* webpackChunkName: "login-home" */ '../components/login/Register.vue')
const Home = () => import(/* webpackChunkName: "login-home" */ '../components/login/Home.vue')

const Homepage = () => import(/* webpackChunkName: "App_s" */ '../components/apps/Homepage.vue')
const Zhishi = () => import(/* webpackChunkName: "App_s" */ '../components/apps/Zhishi.vue')
const Zhineng = () => import(/* webpackChunkName: "App_s" */ '../components/apps/Zhineng.vue')
const Yonghu = () => import(/* webpackChunkName: "App_s" */ '../components/apps/Yonghu.vue')

const Shuidao = () => import(/* webpackChunkName: "App_p" */ '../components/page/Shuidao.vue')
const Xiaomai = () => import(/* webpackChunkName: "App_p" */ '../components/page/Xiaomai.vue')
const Yumi = () => import(/* webpackChunkName: "App_p" */ '../components/page/Yumi.vue')
const Dadou = () => import(/* webpackChunkName: "App_p" */ '../components/page/Dadou.vue')

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  {
    path: '/home',
    component: Home,
    redirect: { name: 'homePage' },
    children: [
      {
        path: 'homePage',
        name: 'homePage',
        component: Homepage
      },
      {
        path: 'zhishi',
        component: Zhishi,
        redirect: { name: 'shuidao' },
        children: [
          {
            path: 'shuidao',
            name: 'shuidao',
            component: Shuidao
          },
          {
            path: 'xiaomai',
            component: Xiaomai
          },
          {
            path: 'yumi',
            component: Yumi
          },
          {
            path: 'dadou',
            component: Dadou
          }
        ]
      },
      {
        path: 'zhineng',
        component: Zhineng
      },
      {
        path: 'yonghu',
        component: Yonghu
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
