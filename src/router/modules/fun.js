export default [{
  path: '/funHome',
  name: 'funHome',
  component: () => import('@/views/_04_fun/home'),
  meta: {
    title: '视觉错觉'
  },
  children: [
  {
    path: '/fun',
    name: 'fun',
    component: () => import('@/views/_04_fun'),
    meta: {
      title: '视觉错觉'
    }
  }, 
  {
    path: '/fun/details/:id',
    name: 'funDetails',
    component: () => import('@/views/_04_fun/details'),
    meta: {
      title: '视觉错觉'
    }
  }, 
  {
    path: '/fun/Fn=F(n-1)+F(n-2)',
    name: 'Fn=F(n-1)+F(n-2)',
    component: () => import('@/views/_04_fun/fibonacciSpiral'),
    meta: {
      title: '视觉错觉'
    }
  }
]
}]