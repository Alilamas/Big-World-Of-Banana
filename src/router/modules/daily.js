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
        title: '浪漫和爱',
        date: '202103221722'
      }
    },
    {
      path: 'daily02',
      name: 'daily02',
      component: () => import('@/views/_06_daily/daily02'),
      meta: {
        title: '与山与海',
        date: '202103291512'
      }
    },
    {
      path: 'daily03',
      name: 'daily03',
      component: () => import('@/views/_06_daily/daily03'),
      meta: {
        title: '请别再爱',
        date: '202104300958'
      }
    }
  ]
}]