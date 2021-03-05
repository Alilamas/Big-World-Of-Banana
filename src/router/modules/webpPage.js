export default [{
  path: '/webpPageHome',
  name: 'webpPageHome',
  component: () => import('@/views/_02_design/home'),
  meta: {
    title: '页面设计'
  },
  children: [{
    path: '/webpPage',
    name: 'webpPage',
    component: () => import('@/views/_02_design'),
    meta: {
      title: '页面设计'
    }
  }, {
    path: '/webpPage/details/:id',
    name: 'webpPageDetails',
    component: () => import('@/views/_02_design/details'),
    meta: {
      title: '页面设计'
    }
  }]
}]