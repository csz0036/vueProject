const _import = require('../config/_import_' + process.env.NODE_ENV)
/**
 * 业务模块home
 */
export default [
  // 例子
  {
    path: '/exampie',
    // name: 'moduleValue',
    redirect: 'moduleValue',
    meta: {
      keepAlive: false,
      requiresAuth: true // 要求验证的页面,在此情况下其子页面也会被验证.
    },
    children:[
        {
            path:'/moduleToValue',
            name:'moduleValue',
            component:_import('table/index'),
        },
        
      ]
  }
]