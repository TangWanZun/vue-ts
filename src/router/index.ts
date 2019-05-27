import Vue from 'vue'
import Router, { RouteConfig } from 'vue-router'

//加载全部路由
import integralMall from './routers/integralMall'
import questionnaire from './routers/questionnaire'

//路由合并
let router:RouteConfig[] = [];
router = router.concat(integralMall,questionnaire);

Vue.use(Router)

export default new Router({
  routes:router
})
