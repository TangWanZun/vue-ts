import Main from '@/components/Main'

export default  [
	{
		path: "/app",
		name: "app",
		component: Main,
		meta:{
			title:"首页"
		},
		children: [
			{
				path: 'index',
				name: 'appHome',
				meta:{
					title:"首页",
				},
				component:()=>import('@/views/app/index.ts')
			},
		]
	},
]