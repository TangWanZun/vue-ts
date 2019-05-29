import { Commit } from 'vuex';

export default {
	namespaced: true,
	state: {
		//从后台获取的路由权限列表
		routerList: [],
		//当前tab页签的全部页签
		navTabBerList:[]
	},
	mutations: {
		setRouterList(state: any, data: any[]) {
			state.routerList = data;
		},
		setNavTabBerList(state:any,data:any[]){
			state.navTabBerList = data;
		}
	},
	actions: {
		/**
		 * 	获取后台 传递的 菜单权限
		 */
		getRouterList(context: { commit: Commit }, data: object) {
			context.commit('setRouterList', [
				{
					"MenuType":"A01",
					"ScopeName":"",
					"id":"a8b78528734945cca6632800a6f29360",
					"parentId":"root",
					"text":"积分商城",
					"leaf":false,
					"expanded":true,
					"iconCls":"Computeroff",
					"icon":"",
					"list":[
						{
							"MenuType":"A01",
							"ScopeName":"sm",
							"id":"IntegralMallHome",
							"parentId":"a8b78528734945cca6632800a6f29360",
							"text":"积分首页",
							"leaf":true,
							"expanded":true,
							"iconCls":"Images",
							"icon":""
						}
					]
				},
				{
					"MenuType":"A02",
					"ScopeName":"",
					"id":"a8b78528734945cca6632800aasdfasdf",
					"parentId":"root",
					"text":"社群联盟",
					"leaf":false,
					"expanded":true,
					"iconCls":"Computeroff",
					"icon":"",
					"list":[
						{
							"MenuType":"A01",
							"ScopeName":"sm",
							"id":"QuestionnaireWorld",
							"parentId":"a8b78528734945cca6632800aasdfasdf",
							"text":"推广海报自定义",
							"leaf":true,
							"expanded":true,
							"iconCls":"Images",
							"icon":""
						}
					]
				}
			])
		},
	}
}