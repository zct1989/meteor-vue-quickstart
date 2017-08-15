import {Meteor} from 'meteor/meteor';
import Vue from 'vue';
import routerFactory from '/imports/config/route';

// App layout
import App from '/imports/App.vue';

// App start
Meteor.startup(() => {
  // Start the router
  const router = routerFactory.create();
  new Vue({
    router,
    render: h => h(App),
  }).$mount('app');
});