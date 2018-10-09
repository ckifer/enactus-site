import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Main from '../components/Main.vue'
import About from '../components/About.vue'
import FunRun from '../components/FunRun.vue'
import HatProject from '../components/HatProject.vue'
import WWD from '../components/WWD.vue'




export default new Router({
  routes: [
    {
        name: 'Home',
        path: '/',
        component: Main
    },
    {
        name: 'About',
        path: '/about',
        component: About
    },
    {
        name: 'Fun-Run',
        path: '/funrun',
        component: FunRun
    }
    ,
    {
        name: 'Hat-Project',
        path: '/hatproject',
        component: HatProject
    }
    ,
    {
        name: 'Womens-Wear-Drive',
        path: '/wwd',
        component: WWD
    }
  ]
})