import Vue from 'vue';
import Router from 'vue-router';

import routerModules from './modules';
import routerCommon from './common';

Vue.use(Router);

var router =  new Router({
  routes: [
    ...routerModules,
    ...routerCommon,
  ]

})

export default router