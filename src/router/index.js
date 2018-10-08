// 引入
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 主页列表
import indexList from '../components/index/indexList.vue'
// 活动列表
import activityList from '../components/activity/activityList.vue'
// 活动内容
import activityInfo from "../components/activity/activityInfo.vue"
// 登录界面
import login from '../components/login/login.vue'
// 手机注册界面
import phoneRegister from '../components/register/phoneRegister.vue'
//邮箱注册界面
import emailRegister from '../components/register/emailRegister.vue'

const router = new VueRouter({
    routes:[
        {path:'/',redirect:'/indexList'},
        {path:'/indexList', component:indexList},
        {path:'/activityList', component:activityList},
        {path:'/activityInfo', component:activityInfo},
        {path:'/login',component:login},
        {path:'/phoneRegister',component:phoneRegister},
        {path:'/emailRegister',component:emailRegister},
    ]
})

export default router
