import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from '~/store'
import router from '~/router'
import i18n from '~/plugins/i18n'
import Toast from '~/components/toast'

//全局配置
axios.defaults.baseURL = '/api';

// 请求拦截
axios.interceptors.request.use(request => {
  const token = store.getters['auth/token']
  if (token) {
    request.headers.common['Authorization'] = token
  }
  const locale = store.getters['lang/locale']
  if (locale) {
    request.headers.common['Accept-Language'] = locale
  }
  
  return request
})

// 响应拦截
axios.interceptors.response.use(response => response, error => {
  const { status } = error.response
  if (status >= 500) {
    Toast({message:i18n.t('error_alert_text'),color:"error"})
  }

  if (status === 401 && store.getters['auth/check']) {
    Toast({message:"用户已过期，请重新登录",color:"info"})
    store.commit('auth/LOGOUT')
    router.push({ name: 'login' })
  }

  return Promise.reject(error)
})

Vue.use(VueAxios,axios);