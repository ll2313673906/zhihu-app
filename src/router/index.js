import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Nav from '../views/Nav.vue'
import Explore from '../views/Explore.vue'
import Special from '../views/Special.vue'
import Recommoned from '../views/Recommoned.vue'
import Follow from '../views/Follow.vue'
import Hot from '../views/Hot.vue'
import QuestionWating from '../views/QuestionWaiting.vue'
import Login from '../views/Login.vue'
import ExploreMore from '../views/ExploreMore.vue'
import MoreFavorites from '../views/MoreFavorites.vue'
import MoreColumns from '../views/MoreColumns.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name:'Nav',
		component:Nav,
		children:[
			{
			path:'/',
			redirect:'/home/recommoned',
			name:'home',
			component: Home
			},
			{
				path:'home',
				component:() => import('../views/Home.vue'),
				children:[
					{
						path:'/',
						// redirect:'recommoned'
						name:'recommoned',

					},
					{
						path:'recommoned',
						component:()=> import('../views/Recommoned.vue')
					},
					{
						path:'follow',
						component:() =>import('../views/Follow.vue')
					},
					{
						path:'hot',
						component:() => import('../views/Hot.vue')
					}
				]
			},
			{
				path:'explore',
				component:() => import('../views/Explore.vue'),

			},
			{
				path:'explore-more',
				component:() => import('../views/ExploreMore.vue'),
			},
			{
				path:'more-favorites'	,
				component:() =>import('../views/MoreFavorites.vue')
			},

			{
				path:'special/all',
				component: ()=> import('../views/Special.vue')
			},
			{
				path:'question/waiting',
				component: ()=>import('../views/QuestionWaiting.vue')
			},


		]
	},
	// 更多的专题页
	{
		path:'/more-columns',
		component:() => import('../views/MoreColumns.vue')
	},
	{
		path:'/column/:id',
		component:() =>import('../views/ColumnDetail.vue')
	},
	{
		path:'/login',
		component: Login
	}
]
const router = new VueRouter({
	routes,
	mode:"history"
})
export default router
