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
//项目点评界面
import remark from '../components/projectLibrary/remark.vue'
//项目文章界面
import projectArticles from '../components/projectLibrary/projectArticles.vue'
//收藏者界面
import collector from '../components/projectLibrary/collector.vue'
//我要点评界面
import myRemark from '../components/projectLibrary/myRemark.vue'
//个人中心主页界面
import personal_centerIndex from '../components/personal_center/personal_centerIndex.vue'
//个人中心(收藏夹/文章)界面
import favorite_article from '../components/personal_center/favorite/favorite_article.vue'
//个人中心(收藏夹/活动)界面
import favorite_activity from '../components/personal_center/favorite/favorite_activity.vue'
//个人中心(收藏夹/项目)界面
import favorite_product from '../components/personal_center/favorite/favorite_product.vue'
//我的圈子(圈子)界面
import circle_index from '../components/personal_center/circle_index.vue'
//我的圈子(帖子)界面
import circle_post from '../components/personal_center/circle_post.vue'
//我的关注界面
import concern from '../components/personal_center/concern.vue'
//我的粉丝界面
import my_fans from '../components/personal_center/my_fans.vue'
//我的文章界面
import my_article from '../components/personal_center/my_article.vue'
//关于我们
import about_Us from '../components/about_Us/about_Us.vue'
//投稿须知
import notice_Us from '../components/about_Us/notice_Us.vue'
//使用条款
import terms_Us from '../components/about_Us/terms_Us.vue'
//版权声明
import copyright_Us from '../components/about_Us/copyright_Us.vue'

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
        {path:'/about_Us',component:about_Us},
        {path:'/notice_Us',component:notice_Us},
        {path:'/terms_Us',component:terms_Us},
        {path:'/copyright_Us',component:copyright_Us},

        //项目主页界面主页及子分页
        {
            path:'/projectIndex',component:projectIndex,
            children:[
                // 项目概况界面
                {path:'/',redirect:'/projectIndex/projectOverview'},
                {path:'projectOverview',component:projectOverview},
                {path:'productDiligence',component:productDiligence},
                {path:'projectArticles',component:projectArticles},
                {path:'collector',component:collector},
                {path:'remark',component:remark},
                {path:'myRemark',component:myRemark},
            ]
        },

        // 个人中心界面主页及子分页
        {
            path:'/personal_centerIndex',component:personal_centerIndex,
            children:[
                // 收藏夹文章界面
                {path:'/',redirect:'/personal_centerIndex/favorite_article'},
                {path:'favorite_article',component:favorite_article},
                {path:'favorite_activity',component:favorite_activity},
                {path:'favorite_product',component:favorite_product},
                {path:'circle_index',component:circle_index},
                {path:'circle_post',component:circle_post},
                {path:'concern',component:concern},
                {path:'my_fans',component:my_fans},
                {path:'my_article',component:my_article},

            ]
        },
    ]
})

export default router
