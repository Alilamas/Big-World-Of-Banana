import Home from './modules/home'  //首页
import Poster from './modules/poster'  //海报

const routes = [
  {
    path: '/',
    // component: () => import('@/layout/top'),
    meta: {
      title: '麒麟云'
    },
    children: [
      ...Home, //首页
      ...Poster //海报
    ]
  }
]
export default routes