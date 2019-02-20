import Vue from 'vue'
import ToastComponent from './ToastComponent.vue'

let ToastTem = Vue.extend(ToastComponent)
let instance
let Toast = (options) => {
  if (!instance) {
    instance = new ToastTem()
    instance.timeout = 7000000
    instance.vm = instance.$mount()
    document.body.appendChild(instance.vm.$el)
  }
  console.log(options)
  
  let time = 3000
  if (typeof options === 'string') {
    instance.message = options
  } else if (typeof options === 'object') {
    let {message, time} = options
    instance.message = message
    time = time || 3000
  } else {
    return
  }
  console.log()
  instance.show = true
  instance.timeout = time
}

Toast.install = (Vue) => {
  console.log('install--------Toast')
  Vue.prototype.$toast = Toast
}

Vue.use(Toast)
