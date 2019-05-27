import Main from '@/components/Main'

export default  [
	{
		path: "/questionnaire",
		name: "questionnaire",
		component: Main,
		meta:{
			title:"调查问卷"
		},
		children: [
			{
				path: 'world',
				name: 'questionnaireWorld',
				meta:{
					title:"调查首页"
				},
				component:()=>import('@/views/questionnaire/World.vue')
			},
		]
	},
]