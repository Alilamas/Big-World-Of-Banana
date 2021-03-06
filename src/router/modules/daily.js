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
      path: 'love/:id',
      name: 'love',
      component: () => import('@/views/_06_daily/love'),
      meta: {
        title: '浪漫和爱',
        date: '202103221722'
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
    },
    {
      path: 'daily04',
      name: 'daily04',
      component: () => import('@/views/_06_daily/daily04'),
      meta: {
        title: '情深一往',
        date: '202105012350'
      }
    },
    {
      path: 'daily05',
      name: 'daily05',
      component: () => import('@/views/_06_daily/daily05'),
      meta: {
        title: '幸运不够',
        date: '202105021113'
      }
    },
    {
      path: 'daily06',
      name: 'daily06',
      component: () => import('@/views/_06_daily/daily06'),
      meta: {
        title: '思君',
        date: '202105060918'
      }
    },
    {
      path: 'daily07',
      name: 'daily07',
      component: () => import('@/views/_06_daily/daily07'),
      meta: {
        title: '我去接你',
        date: '202105071355'
      }
    },
    {
      path: 'daily08',
      name: 'daily08',
      component: () => import('@/views/_06_daily/daily08'),
      meta: {
        title: '请听我讲',
        date: '202105082345'
      }
    },
    {
      path: 'daily09',
      name: 'daily09',
      component: () => import('@/views/_06_daily/daily09'),
      meta: {
        title: '等你',
        date: '202105102329'
      }
    },
    {
      path: 'daily10',
      name: 'daily10',
      component: () => import('@/views/_06_daily/daily10'),
      meta: {
        title: '陌上花开',
        date: '202105111019'
      }
    },
    {
      path: 'daily11',
      name: 'daily11',
      component: () => import('@/views/_06_daily/daily11'),
      meta: {
        title: '天涯海角',
        date: '202105122340'
      }
    },
    {
      path: 'daily12',
      name: 'daily12',
      component: () => import('@/views/_06_daily/daily12'),
      meta: {
        title: '青春期',
        date: '202105162149'
      }
    }
  ]
}]