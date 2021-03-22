export default [{
  path: '/daily',
  name: 'dailyHome',
  component: () => import('@/views/_06_daily/home'),
  meta: {
    title: '每日情话'
  },
  children: [
    {
      path: '',
      name: 'daily',
      component: () => import('@/views/_06_daily'),
      meta: {
        title: '每日情话'
      }
    },
    {
      path: './storage',
      name: 'daliyStorage',
      component: () => import('@/views/_06_daily/storage'),
      meta: {
        title: '每日情话'
      }
    },
    {
      path: 'daily01',
      name: 'daily01',
      component: () => import('@/views/_06_daily/daily01'),
      meta: {
        title: '每日情话'
      }
    }
  ]
}]