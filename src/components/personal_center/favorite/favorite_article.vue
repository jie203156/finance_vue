<template>
    <div class="favorite_article">
        <div class="topTitle w">
            <div class="btn">
                <button >动态</button>
                <button @click="favorite_article" class="active">文章</button>
                <button >问答</button>
                <button >帖子</button>
                <button  @click="favorite_activity" >活动</button>
                <button  @click="favorite_product">项目</button>
            </div>

            <!-- 搜索 -->
            <div class="search_box">
                <!-- 搜索部分 -->
                <div class="search">
                    <input type="text" placeholder="输入关键词搜索">
                    <div class="bigGlass"><a href="#"></a></div>
                </div>
            </div>
        </div>
                <!-- 更多文章列表信息内容 -->
        <div class=" moreArticlesList_box w">
            <div class="infoContent">
                <ul>
                    <li>
                        <div class="listPic">
                            <router-link to="/wirterArticleContent"><img src="../../../images/201809281051.png" alt=""></router-link>
                        </div>
                        <div class="rightInfo">
                            <p class="title"><router-link to="/wirterArticleContent">斯坦福大学物理教授张首晟：In Math We Trust | 清华x-lab公开课</router-link></p>
                            <p class="introduce">清华区块链公开课本期嘉宾是斯坦福大学物理系、电子工程系和应用物理系终身教授张首晟,清华区块链公开课本期嘉宾是清华区块链公开课本期嘉宾是斯坦福大学物理系...</p>
                            <div>
                                <div class="smallLogo">
                                    <a href="#">
                                        <div class="iconPic"><img src="../../../images/writerArticlespersonIcon01.png" alt=""></div>
                                        <i>你家区块链</i>
                                    </a>
                                </div>
                                <div class="icons">
                                    <div class="times">
                                        <p></p>
                                        <i>30分钟前</i>
                                    </div>
                                    <div class="eye">
                                        <p></p>
                                        <i>45888</i>
                                    </div>
                                    <div class="infoborder">
                                        <p></p>
                                        <i>好感人数 120</i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="listPic">
                            <router-link to="/wirterArticleContent"><img src="../../../images/201809281051.png" alt=""></router-link>
                        </div>
                        <div class="rightInfo">
                            <p class="title"><router-link to="/wirterArticleContent">斯坦福大学物理教授张首晟：In Math We Trust | 清华x-lab公开课</router-link></p>
                            <p class="introduce">清华区块链公开课本期嘉宾是斯坦福大学物理系、电子工程系和应用物理系终身教授张首晟,清华区块链公开课本期嘉宾是清华区块链公开课本期嘉宾是斯坦福大学物理系...</p>
                            <div>
                                <div class="smallLogo">
                                    <a href="#">
                                        <div class="iconPic"><img src="../../../images/writerArticlespersonIcon01.png" alt=""></div>
                                        <i>你家区块链</i>
                                    </a>
                                </div>
                                <div class="icons">
                                    <div class="times">
                                        <p></p>
                                        <i>30分钟前</i>
                                    </div>
                                    <div class="eye">
                                        <p></p>
                                        <i>45888</i>
                                    </div>
                                    <div class="infoborder">
                                        <p></p>
                                        <i>好感人数 120</i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="listPic">
                            <router-link to="/wirterArticleContent"><img src="../../../images/201809281051.png" alt=""></router-link>
                        </div>
                        <div class="rightInfo">
                            <p class="title"><router-link to="/wirterArticleContent">斯坦福大学物理教授张首晟：In Math We Trust | 清华x-lab公开课</router-link></p>
                            <p class="introduce">清华区块链公开课本期嘉宾是斯坦福大学物理系、电子工程系和应用物理系终身教授张首晟,清华区块链公开课本期嘉宾是清华区块链公开课本期嘉宾是斯坦福大学物理系...</p>
                            <div>
                                <div class="smallLogo">
                                    <a href="#">
                                        <div class="iconPic"><img src="../../../images/writerArticlespersonIcon01.png" alt=""></div>
                                        <i>你家区块链</i>
                                    </a>
                                </div>
                                <div class="icons">
                                    <div class="times">
                                        <p></p>
                                        <i>30分钟前</i>
                                    </div>
                                    <div class="eye">
                                        <p></p>
                                        <i>45888</i>
                                    </div>
                                    <div class="infoborder">
                                        <p></p>
                                        <i>好感人数 120</i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="listPic">
                            <router-link to="/wirterArticleContent"><img src="../../../images/201809281051.png" alt=""></router-link>
                        </div>
                        <div class="rightInfo">
                            <p class="title"><router-link to="/wirterArticleContent">斯坦福大学物理教授张首晟：In Math We Trust | 清华x-lab公开课</router-link></p>
                            <p class="introduce">清华区块链公开课本期嘉宾是斯坦福大学物理系、电子工程系和应用物理系终身教授张首晟,清华区块链公开课本期嘉宾是清华区块链公开课本期嘉宾是斯坦福大学物理系...</p>
                            <div>
                                <div class="smallLogo">
                                    <a href="#">
                                        <div class="iconPic"><img src="../../../images/writerArticlespersonIcon01.png" alt=""></div>
                                        <i>你家区块链</i>
                                    </a>
                                </div>
                                <div class="icons">
                                    <div class="times">
                                        <p></p>
                                        <i>30分钟前</i>
                                    </div>
                                    <div class="eye">
                                        <p></p>
                                        <i>45888</i>
                                    </div>
                                    <div class="infoborder">
                                        <p></p>
                                        <i>好感人数 120</i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return{

            }
        },
        methods:{
            // 跳转收藏夹文章
            favorite_article (){
                this.$router.push('/personal_centerIndex/favorite_article')
            },
            // 跳转收藏夹活动
            favorite_activity (){
                this.$router.push('/personal_centerIndex/favorite_activity')
            },
            // 跳转收藏夹项目
            favorite_product (){
                this.$router.push('/personal_centerIndex/favorite_product')
            },


        }
    }
</script>
