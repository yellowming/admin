import Vue from 'vue'
import Child from './Child'
import Toast from './toast'


// Components that are registered globaly.
[
  Child
].forEach(Component => {
  Vue.component(Component.name, Component)
})
Vue.use(Toast)

