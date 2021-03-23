export default [{
  path: '/basic',
  name: 'basicHome',
  component: () => import('@/views/_01_basic/home'),
  meta: {
    title: '实践出真知'
  },
  children: [
    {
      path: '',
      name: 'basic',
      component: () => import('@/views/_01_basic'),
      meta: {
        title: '实践出真知'
      }
    },
    {
      path: '/graphical',
      name: 'graphical',
      component: () => import('@/views/_01_basic/graphical/hexagon.vue'),
      meta: {
        title: '六边形的多种做法'
      }
    },
    {
      path: '/cssWorld',
      name: 'cssWorld',
      component: () => import('@/views/_01_basic/cssWorld.vue'),
      meta: {
        title: '六边形的多种做法'
      }
    },
    {
      path: '/scss-study',
      name: 'scss-study',
      component: () => import('@/views/_01_basic/scss-study.vue'),
      meta: {
        title: 'scss-study'
      }
    },
    {
      path: '/animation',
      name: 'animation',
      component: () => import('@/views/_01_basic/animation.vue'),
      meta: {
        title: '动画学习'
      }
    }
  ]
}]