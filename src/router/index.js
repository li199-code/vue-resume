import Vue from 'vue'
import Router from 'vue-router'
import detail from '../components/detail'
import home from '../components/home'

Vue.use(Router)

export default new Router({
	routes: [
		// {
		// 	path: '/detail',
		// 	component: detail,
		// },
		{
			path: '/',
			component: home,
		},
		{
			path: '/detail/:resume_id',
			component: detail

		}
	],
	mode: 'history',
})
