export default [{
  path: '/poster',
  name: 'posterHome',
  component: () => import('@/views/_03_poster/home'),
  meta: {
    title: 'CSS海报'
  },
  children: [{
      path: '/',
      name: 'poster',
      component: () => import('@/views/_03_poster'),
      meta: {
        title: '海报首页'
      }
    }, {
      path: './01_design',
      name: '01_design',
      component: () => import('@/views/_03_poster/01_design'),
      meta: {
        title: '设计'
      }
    },
    {
      path: './38',
      name: '38',
      component: () => import('@/views/_03_poster/38'),
      meta: {
        title: '38妇女节'
      }
    },

  ]
}, ]