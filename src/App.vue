<template>

    <div class="index">
        <!-- 头部 -->
        <div class="header">
            <!-- 导航栏 -->
            <!-- 顶部 -->
            <div class="topBar">
                <div class="w">
                    <!-- 搜索部分 -->
                    <div class="search">
                        <input type="text" placeholder="输入搜索关键内容">
                        <div class="bigGlass"><a href="#"></a></div>
                    </div>
                    <!-- logo部分 -->
                    <h1 class="logo"><img src="../public/logo.png" alt=""></h1>
                    <!-- 登录和注册 -->
                    <div class="login" style="display:none">
                        <router-link to="/login">登录</router-link>
                        <i>&nbsp;&nbsp;/&nbsp;&nbsp; </i>
                        <router-link to="/phoneRegister">注册</router-link>
                    </div>

                    <!-- 个人中心 -->
                    <div class="personal_center ">
                        <router-link to="/personal_centerIndex"><img src="" alt=""></router-link>
                    </div>

                </div>
            </div>
            <!-- 底部 -->
            <div class="bottomBar">
                <div class="content w">
                    <div class="listB">
                        <ul>
                            <li><router-link to="/indexList">首页</router-link></li>
                            <li><a href="">快讯</a></li>
                            <li><router-link to="/projectLibrary">项目库</router-link></li>
                            <li><a href="">行情</a></li>
                            <li><a href="">动态</a></li>
                            <li><a href="">圈子</a></li>
                            <li><a href="">问答</a></li>
                            <li><a href="">找伙伴</a></li>
                            <li><router-link to="/assembly">链氪集结号</router-link></li>
                        </ul>
                    </div>
                    <div class="writeArticle"><a href="#">写文章</a></div>
                </div>
            </div>
        </div>
    
        <!-- 中间部分 -->
        <router-view></router-view>

    
        <!-- 底部部分 -->
        <div class="bottom">
            <div class="bottomInfo">
                <div class="content w">
    
                    <!-- logo -->
                    <div class="bottomLogo">
                        <a href="#"></a>
                    </div>
    
                    <!-- 联系方式 -->
                    <div class="contact">
                        <div class="contactIcon">
                            <ul>
                                <li :class="activeClass == 1 ? 'active':''"  @click="activeClass = 1"><a></a></li>
                                <li :class="activeClass == 2 ? 'active':''"  @click="activeClass = 2"><a></a></li>
                                <li :class="activeClass == 3 ? 'active':''"  @click="activeClass = 3"><a></a></li>
                                <li :class="activeClass == 4 ? 'active':''"  @click="activeClass = 4"><a></a></li>
                                <li :class="activeClass == 5 ? 'active':''"  @click="activeClass = 5"><a></a></li>
                                <!-- <li :class="activeClass == index ? 'active':''" v-for="(itme,index) in tab" :key="index" @click="getItme(index)"><a></a></li> -->
                            </ul>
                        </div>
    
                        <div class="contactinfo">
                            <router-link to="/about_Us">关于我们</router-link>
                            <router-link to="/notice_Us">投稿须知</router-link>
                            <router-link to="/terms_Us">服务条款</router-link>
                            <router-link to="/about_Us">意见反馈</router-link>
                        </div>               
                    </div>
    
                    <!-- 友情链接 -->
                    <div class="interlinkage">
                        <div class="linkTitle">友情链接</div>
                        <div class="linkTxt">
                            <a href="#">非小号</a>
                            <a href="#">比特时代</a>
                            <a href="#">比特大陆</a>
                            <a href="#">viabtc</a>
                            <a href="#">coinex</a>
                            <a href="#">EXX</a>
                            <a href="#">库神</a>
                            <a href="#">金塔</a>
                            <a href="#">比特币资讯网</a>
                            <a href="#">比特币之家</a>
                            <a href="#">比特头条</a>
                            <a href="#">币源社区</a>
                            <a href="#">块讯</a>
                            <a href="#">比特币中文网</a>
                            <a href="#">金牛财经</a>
                            <a href="#">未来财经</a>
                            <a href="#">巴比特</a>
                            <a href="#">金色财经</a>
                            <a href="#">比特币世界</a>
                            <a href="#">铅笔</a>
                            <a href="#">共享财经</a>
                            <a href="#">炒客网</a>
                            <a href="#">挖币网</a>
                            <a href="#">挖币网</a>
                            <a href="#">玩币族</a>
                            <a href="#">Block123</a>
                            <a href="#">九个亿财经</a>
                            <a href="#">云财经</a>
                            <a href="#">COINEGG</a>
                            <a href="#">YYEX交易平台</a>
                            <a href="#">火球财经</a>
                            <a href="#">牛比特</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="copyrights">
                <div class="content w">
                    <p>Copyrights © 2018 All Rights Reserved by EngoCreative Inc</p>
                    <div class="copyrightsLink">
                        <ul>
                            <li><router-link to="/indexList">首页</router-link></li>
                            <li>|</li>
                            <li><a href="#">快讯</a></li>
                            <li>|</li>
                            <li><router-link to="/projectLibrary">项目库</router-link></li>
                            <li>|</li>
                            <li><a href="#">动态</a></li>
                            <li>|</li>
                            <li><a href="#">圈子</a></li>
                            <li>|</li>
                            <li><a href="#">找伙伴</a></li>
                            <li>|</li>
                            <li><router-link to="/assembly">链氪集结号</router-link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<style>
@import './static/css/style.css';
</style>
<script>
    export default {
        data (){
            return{
                activeClass: -1,
                // tab:[1,2,3,4,5]

            }
        },
        mounted() {
            
        },
        methods:{
            // getItme(index) {
            //     this.activeClass = index;  
            // },

        }
    }
</script>