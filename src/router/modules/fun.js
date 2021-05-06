export default [{
  path: '/funHome',
  name: 'funHome',
  component: () => import('@/views/_04_fun/home'),
  meta: {
    title: '视觉错觉'
  },
  children: [{
    path: '/fun',
    name: 'fun',
    component: () => import('@/views/_04_fun'),
    meta: {
      title: '视觉错觉'
    }
  }, {
    path: '/fun/details/:id',
    name: 'funDetails',
    component: () => import('@/views/_04_fun/details'),
    meta: {
      title: '视觉错觉'
    }
  }]
}]