export default [{
  path: '/illusionHome',
  name: 'illusionHome',
  component: () => import('@/views/illusion/home'),
  meta: {
    title: '视觉错觉'
  },
  children: [{
    path: '/illusion',
    name: 'illusion',
    component: () => import('@/views/illusion'),
    meta: {
      title: '视觉错觉'
    }
  }, {
    path: '/details/:id',
    name: 'illusionDetails',
    component: () => import('@/views/illusion/details'),
    meta: {
      title: '视觉错觉'
    }
  }]
}]