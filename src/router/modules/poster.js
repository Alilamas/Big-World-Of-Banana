export default [
  {
    path: '/poster',
    name: 'poster',
    component: () => import('@/views/_03_poster/01_design'),
    meta: {
      title: 'CSS海报'
    }
  },
  {
    path: '/38',
    name: '38',
    component: () => import('@/views/_03_poster/38'),
    meta: {
      title: '38妇女节'
    }
  },
]
