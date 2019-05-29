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
				name: 'QuestionnaireWorld',
				meta:{
					title:"推广海报自定义"
				},
				component:()=>import('@/views/questionnaire/World.vue')
			},
		]
	},
]