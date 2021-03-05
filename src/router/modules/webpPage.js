export default [{
  path: '/usedHome',
  name: 'usedHome',
  component: () => import('@/views/_05_used/home'),
  meta: {
    title: '实践出真知'
  },
  children: [{
    path: '/webpPage',
    name: 'webpPage',
    component: () => import('@/views/_05_used'),
    meta: {
      title: '麒麟杯'
    }
  }
  ]
}]