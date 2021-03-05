export default [{
  path: '/usedHome',
  name: 'usedHome',
  component: () => import('@/views/_05_used/home'),
  meta: {
    title: '实践出真知'
  },
  children: [
    {
      path: 'used',
      name: 'used',
      component: () => import('@/views/_05_used'),
      meta: {
        title: '实践出真知'
      }
    },
    {
      path: 'kylinCup',
      name: 'kylinCup',
      component: () => import('@/views/_05_used/kylinCup'),
      meta: {
        title: '麒麟杯'
      }
    }
  ]
}]