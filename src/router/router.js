import Com from './modules/common'  //首页
import Basic from './modules/basic'  //海报
import Poster from './modules/poster'  //海报
import Illusion from './modules/illusion'  //错觉
import WebpPage from './modules/webpPage'  //页面
import Used from './modules/used'  //用过的例子

const routes = [
  {
    path: '/',
    meta: {
      title: '香蕉CSS大世界'
    },
    component: () => import('@/layout/banana'),
    children: [
      ...Com, //首页
      ...Basic, //基础
      ...Poster, //海报
      ...Illusion, //错觉
      ...WebpPage, //页面
      ...Used, //用过的例子
    ]
  }
]
export default routes