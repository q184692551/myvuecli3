import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import My from './views/my'
import Shake from './views/shake'
import Array from './jstree/Array'
import canvas from './views/canvas'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'My',
            component: My
        },
        {
            path: '/Array',
            name: 'Array',
            component: Array
        },
        {
            path: '/canvas',
            name: 'canvas',
            component: canvas
        },
        {
            path: '/Shake',
            name: 'Shake',
            component: Shake
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        }
    ]
})
