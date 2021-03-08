export default [{
  path: '/design',
  name: 'designHome',
  component: () => import('@/views/_02_design/home'),
  meta: {
    title: '页面设计'
  },
  children: [{
      path: '',
      name: 'design',
      component: () => import('@/views/_02_design'),
      meta: {
        title: '页面设计'
      }
    },
    {
      path: '/webpPage',
      name: 'webpPage',
      component: () => import('@/views/_02_design/webpPage'),
      meta: {
        title: '页面设计'
      }
    },
    {
      path: '/webpPage/details/:id',
      name: 'webpPageDetails',
      component: () => import('@/views/_02_design/details'),
      meta: {
        title: '页面设计'
      }
    }
  ]
}]