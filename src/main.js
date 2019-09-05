import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

import _ from 'lodash'

Vue.config.productionTip = false

new Vue({
  vuetify,
  _,
  render: h => h(App)
}).$mount('#app')
