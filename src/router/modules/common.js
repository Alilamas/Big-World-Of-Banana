export default [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/_00_page/home'),
    meta: {
      title: '香蕉大狂欢'
    }
  },
  {
    path: '/imageReading',
    name: 'imageReading',
    component: () => import('@/views/_00_page/imageReading'),
    meta: {
      title: '图片浏览器'
    }
  },
]
