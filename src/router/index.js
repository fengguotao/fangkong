import Vue from 'vue'
import Router from 'vue-router'
// import Index from '@/components/Index/Index'
const Login = r => require.ensure([], () => r(require('../components/Login/Login.vue')), 'Login')
const ForgetPassword = r => require.ensure([], () => r(require('../components/Login/ForgetPassword.vue')), 'ForgetPassword')
const ResetPassword = r => require.ensure([], () => r(require('../components/Login/ResetPassword.vue')), 'ResetPassword')
const Register = r => require.ensure([], () => r(require('../components/Register/Register.vue')), 'Register')
const RegisterPassword = r => require.ensure([], () => r(require('../components/Register/RegisterPassword/RegisterPassword.vue')), 'RegisterPassword')

const Middleman = r => require.ensure([], () => r(require('../components/Middleman/Middleman.vue')), 'Middleman')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Middleman',
      name: 'Middleman',
      component: Middleman,
      meta: {
        title: '个人中心-经纪人'
      }
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login,
      meta: {
        title: '登陆'
      }
    },
    {
      path: '/Login/ForgetPassword',
      name: 'ForgetPassword',
      component: ForgetPassword,
      meta: {
        title: '找回登录密码'
      }
    },
    {
      path: '/Login/ResetPassword',
      name: 'ResetPassword',
      component: ResetPassword,
      meta: {
        title: '找回登录密码'
      }
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register,
      meta: {
        title: '注册'
      }
    },
    {
      path: '/Register/RegisterPassword',
      name: 'RegisterPassword',
      component: RegisterPassword,
      meta: {
        title: '立即注册'
      }
    }
  ],
  mode: 'history'
})
