// 引入
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 主页列表
import indexList from '../components/index/indexList.vue'
// 活动列表
import activityList from '../components/activity/activityList.vue'

const router = new VueRouter({
    routes:[
        {path:'/',redirect:'/indexList'},
        {path:'/indexList', component:indexList},
        {path:'/activityList', component:activityList},
    ]
})

export default router
