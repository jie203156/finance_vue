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
//忘记密码界面
import forgetPassword from '../components/forgetpassword/forgetPassword.vue'
//作家主页界面
import writerIndex from '../components/writer/writerIndex.vue'
//作家文章界面
import writerArticle from '../components/writer/writerArticle.vue'
//更多作家界面
import moreWriters from '../components/writer/moreWriters.vue'
//作家文章内容界面
import wirterArticleContent from '../components/writer/wirterArticleContent.vue'
//集结号主页
import assembly from '../components/assembly/assemblyIndex.vue'
//项目库界面
import projectLibrary from '../components/projectLibrary/projectLibrary.vue'
//项目主页界面
import projectIndex from '../components/projectLibrary/projectIndex.vue'
//项目概况界面
import projectOverview from '../components/projectLibrary/projectOverview.vue'
//项目尽调界面
import productDiligence from '../components/projectLibrary/productDiligence.vue'

const router = new VueRouter({
    routes:[
        {path:'/',redirect:'/indexList'},
        {path:'/indexList', component:indexList},
        {path:'/activityList', component:activityList},
        {path:'/activityInfo', component:activityInfo},
        {path:'/login',component:login},
        {path:'/phoneRegister',component:phoneRegister},
        {path:'/emailRegister',component:emailRegister},
        {path:'/forgetPassword',component:forgetPassword},
        {path:'/writerIndex',component:writerIndex},
        {path:'/writerArticle',component:writerArticle},
        {path:'/moreWriters',component:moreWriters},
        {path:'/wirterArticleContent',component:wirterArticleContent},
        {path:'/assembly',component:assembly},
        {path:'/projectLibrary',component:projectLibrary},

        //项目主页界面
        {
            path:'/projectIndex',component:projectIndex,
            children:[
                // 项目概况界面
                {path:'/',redirect:'/projectIndex/projectOverview'},
                {path:'projectOverview',component:projectOverview},
                {path:'productDiligence',component:productDiligence},
            ]
        },
    ]
})

export default router
