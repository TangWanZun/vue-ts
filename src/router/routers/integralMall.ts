import Main from '@/components/Main'

export default  [
	{
		path: "/integralMall",
		name: "integralMall",
		component: Main,
		meta:{
			title:"积分商城"
		},
		children: [
			{
				path: 'home',
				name: 'integralMallHome',
				meta:{
					title:"积分首页",
				},
				component:()=>import('@/views/integralMall/Home.vue')
			},
		]
	},
]