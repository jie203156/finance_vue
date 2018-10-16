<template>
    <div class="personal_centerIndex">
        <div class="banner">
            <div class="content w">
                <div class="iconL">
                    <img src="" alt="">
                </div>
                <div class="personalInfo">
                    <p class="personalInfoTitle">洪金宝的侄女 <i class="icon"><em></em>广东省广州市</i></p>
                    <p class="writerPersonInfoTalk">Hi,欢迎来到彼得的思想空间，在这里彼得将和你共同探索区块链的本质和规律； 彼得也非常乐意分享关于项目...</p>
                    <!-- 文章数/浏览量/被关注 -->
                    <div class="writerPersonInfoSmallIcon">
                        <ul>
                            <li><i class="money"></i>10 积分</li>
                            <li class="line"></li>
                            <li><i class="xin"></i>1688粉丝</li>
                            <li class="line"></li>
                            <li><i class="xin"></i>1688关注</li>
                            <li class="line"></li>
                            <li><i class="eye"></i>4.5万浏览量</li>
                        </ul>
                    </div>
                </div>

                <!-- 关注按钮 -->
                <button class="attentionBtn">更换封面</button>

            </div>

            <!-- 导航栏 -->
            <div class="nav">
                <div class="nav_box w">
                    <ul>
                        <li ><a href="#">我的动态</a></li>
                        <li :class="nav == 2?'active':''" @click="my_article"><a >我的文章</a></li>
                        <li :class="nav == 3?'active':''" @click="circle"><a>我的圈子</a></li>
                        <li><a href="#">我的问答</a></li>
                        <li :class="nav == 5?'active':''" @click="my_fans"><a>我的粉丝</a></li>
                        <li :class="nav == 6?'active':''" @click="concern"><a>我的关注</a></li>
                        <li :class="nav == 7?'active':''" @click="favorite"><a>收藏夹</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                nav:7,
            }
        },
        methods:{
            // 收藏夹
            favorite(){
                this.nav = 7
                this.$router.push({path:'/personal_centerIndex/favorite_article'})
            },

            //我的圈子
            circle(){
                this.nav = 3
                this.$router.push({path:'/personal_centerIndex/circle_index'})
            },

            // 我的关注
            concern (){
                this.nav = 6
                this.$router.push({path:'/personal_centerIndex/concern'})
            },

            // 我的粉丝
            my_fans(){
                this.nav = 5
                this.$router.push({path:'/personal_centerIndex/my_fans'})
            },

            //我的文章
            my_article(){
                this.nav = 2
                this.$router.push({path:'/personal_centerIndex/my_article'})
            }
        }
    }
</script>
