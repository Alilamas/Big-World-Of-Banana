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
      path: '/helloAnimation',
      name: 'helloAnimation',
      component: () => import('@/views/_01_basic/helloAnimation.vue'),
      meta: {
        title: '动画大世界'
      }
    },
    {
      path: 'transform',
      name: 'transform',
      component: () => import('@/views/_01_basic/animation/transform.vue'),
      meta: {
        title: 'CSS3变形'
      }
    },
    {
      path: 'transition&animation',
      name: 'transition&animation',
      component: () => import('@/views/_01_basic/animation/transition&animation.vue'),
      meta: {
        title: 'CSS3过渡与动画'
      }
    }
  ]
}]