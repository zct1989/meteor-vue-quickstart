import {Meteor} from 'meteor/meteor'
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from '/imports/config/route'

// UI
import iView from 'iview'
import 'iview/dist/styles/iview.css'

// App layout
import App from '/imports/App.vue'
import VueMeteorTracker from 'vue-meteor-tracker'

Vue.use(VueRouter)
Vue.use(iView)
Vue.use(VueMeteorTracker)

const router = new VueRouter({
  mode: 'history',
  routes
})
// App start
Meteor.startup(() => {
  new Vue({
    router,
    render: h => h(App)
  }).$mount('app')
})
