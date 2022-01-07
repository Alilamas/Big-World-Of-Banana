import Com from './modules/common'  //首页其他
import Basic from './modules/basic'  //海报
import Poster from './modules/poster'  //海报
import Fun from './modules/fun'  //错觉
import WebpPage from './modules/webpPage'  //页面
import Used from './modules/used'  //用过的例子
import Daily from './modules/daily'  //每日情话

const routes = [
  {
    path: '/',
    meta: {
      title: '香蕉CSS大世界'
    },
    component: () => import('@/layout/banana'),
    children: [
      ...Com, //首页金额其他
      ...Basic, //基础
      ...Poster, //海报
      ...Fun, //乐事
      ...WebpPage, //页面
      ...Used, //用过的例子
      ...Daily //每日情话
    ]
  }
]
export default routes