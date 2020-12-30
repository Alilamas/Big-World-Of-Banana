export default [{
  path: '/webpPageHome',
  name: 'webpPageHome',
  component: () => import('@/views/webpPage/home'),
  meta: {
    title: '页面设计'
  },
  children: [{
    path: '/webpPage',
    name: 'webpPage',
    component: () => import('@/views/webpPage'),
    meta: {
      title: '页面设计'
    }
  }, {
    path: '/webpPage/details/:id',
    name: 'webpPageDetails',
    component: () => import('@/views/webpPage/details'),
    meta: {
      title: '页面设计'
    }
  }]
}]