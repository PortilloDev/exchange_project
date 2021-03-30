import Vue from 'vue' //importa libreria del npm
import App from './App.vue' //importa el componente App
import '@/assets/css/tailwind.css' //importa el componente tailwind

import router from '@/router'
import { dollarFilter, percentFilter } from '@/filter'

Vue.filter('dollar', dollarFilter) //nombre, función 
Vue.filter('percent', percentFilter) //nombre, función 
Vue.config.productionTip = false

// instancia de Vue
new Vue({
    router,
    render: (h) => h(App),
}).$mount('#app')