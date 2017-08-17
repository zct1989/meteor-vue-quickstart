import {Meteor} from 'meteor/meteor'
import Vue from 'vue'

import routerFactory from '/imports/config/route'
import iView from 'iview'
import 'iview/dist/styles/iview.css'    // 使用 CSS

// App layout
import App from '/imports/App.vue'
Vue.use(iView)
// App start
Meteor.startup(() => {
  // Start the router
  const router = routerFactory.create()

  new Vue({
    router,
    render: h => h(App)
  }).$mount('app')
})
