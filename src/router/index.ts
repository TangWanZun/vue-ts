import Vue from 'vue'
import Router, { RouteConfig } from 'vue-router'

//加载全部路由
import app from './routers/app'
import integralMall from './routers/integralMall'
import questionnaire from './routers/questionnaire'
import $config from '@/$config';

//路由合并
let routes:RouteConfig[] = [];
routes = routes.concat(app,integralMall,questionnaire);

Vue.use(Router)


let router =  new Router({
  routes,
})


router.beforeEach((to, from, next) => {
  if(to.path=="/"){
    //表示当访问跟目录的时候，自动跳转到首页
    next({
      name:$config.homeName
    })
  }
  next()
})

export default router