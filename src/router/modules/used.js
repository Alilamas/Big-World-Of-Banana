export default [{
  path: '/used',
  name: 'usedHome',
  component: () => import('@/views/_05_used/home'),
  meta: {
    title: '实践出真知'
  },
  children: [
    {
      path: '',
      name: 'used',
      component: () => import('@/views/_05_used'),
      meta: {
        title: '实践出真知'
      }
    },
    {
      path: 'kycup',
      name: 'kycup',
      component: () => import('@/views/_05_used/kycup'),
      meta: {
        title: '可以杯'
      }
    },
    {
      path: 'parabola',
      name: 'parabola',
      component: () => import('@/views/_05_used/parabola'),
      meta: {
        title: '抛物线'
      }
    }
  ]
}]