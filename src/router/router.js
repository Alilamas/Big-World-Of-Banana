import Home from './modules/home'  //首页
import Poster from './modules/poster'  //海报
import Graphical from './modules/graphical'  //图形
import Illusion from './modules/illusion'  //图形
import WebpPage from './modules/webpPage'  //图形

const routes = [
  {
    path: '/',
    meta: {
      title: '香蕉CSS大世界'
    },
    component: () => import('@/layout/banana'),
    children: [
      ...Home, //首页
      ...Graphical, //图形
      ...Poster, //海报
      ...Illusion, //错觉
      ...WebpPage, //页面
    ]
  }
]
export default routes