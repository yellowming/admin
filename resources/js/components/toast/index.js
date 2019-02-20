import Vue from 'vue'
import ToastComponent from './ToastComponent.vue'

let ToastTem = Vue.extend(ToastComponent)
let instance
let Timer
let Toast = (options) => {
  if (!instance) {
    instance = new ToastTem()
    instance.vm = instance.$mount()
    document.body.appendChild(instance.vm.$el)
  }else{
    instance.show = false
  }
  clearTimeout(Timer)
  Timer = setTimeout(() => {
    instance.show = true
  },500)
  if (typeof options === 'string') {
    instance.message = options
  } else if (typeof options === 'object') {
    let {message, time, color} = options
    instance.message = message
    instance.color = color || "success"
    instance.timeout = time || 3000
  } else {
    return
  }
}

Toast.install = (Vue) => {
  Vue.prototype.$toast = Toast
}

export default Toast


