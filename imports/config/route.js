// Import the router
import { RouterFactory, nativeScrollBehavior } from 'meteor/akryum:vue-router2'

// Create router instance
const routerFactory = new RouterFactory({
  mode: 'history',
  scrollBehavior: nativeScrollBehavior
});

// Not found
import NotFound from '/imports/pages/NotFound.vue';
import Page1 from '/imports/pages/page1.vue';
import Page2 from '/imports/pages/page2.vue';
import Page3 from '/imports/pages/page3.vue';
RouterFactory.configure(router => {
  router.addRoutes([{
    path: '/',
    name:'home',
    component: Page1,
  },{
    path: '/page1',
    name:'page1',
    component: Page1,
  },{
    path: '/page2',
    name:'page2',
    component: Page2,
  },{
    path: '/page3',
    name:'page3',
    component: Page3,
  },{
    path: '*',
    component: NotFound,
  }])
}, -1);

export default routerFactory;