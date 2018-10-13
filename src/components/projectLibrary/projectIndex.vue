<template>
    <div class="projectIndex">
        <div class="banner">
            <div class="bannerInfo w">
                <div class="left">
                    <img src="../../images/projectOverview01.png" alt="">
                    <div class="titleRight">

                        <button class="collectBtn">加入收藏</button>
                        <div class="title">芯链HPB</div>

                        <!-- 评分 -->
                        <div class="star_box">
                            
                            <Rate disabled v-model="valueDisabled" />

                            <div class="Num">{{valueDisabled}}</div>
                        </div>

                        <!-- 简介说明 -->
                        <div class="txt">HPB 是一种全新的区块链体系架构，定位为易用的高性能区块 链平台，旨在实现分布式应用的性能扩展，以满足现实世界的真实 商业需求。这是通过创建一个可以构建应用程序的类 ...</div>

                        <!-- 浏览量/点评数/收藏者 -->
                        <div class="everyNum">
                            <div>浏览量：<i>1.2万</i></div>
                            <div>点评数：<i>200</i></div>
                            <div>收藏者：<i>8920</i></div>
                        </div>
                    </div>
                </div>
                <div class="right">
                    <p class="title">基本信息</p>
                    <p class="garyTxt">项目名称：<i class="Wtxt">芯链HPB</i></p>
                    <p class="garyTxt">项目概念：<i class="Wtxt">数据存储</i></p>
                    <p class="garyTxt">官网网址：<i class="Wtxt">查看</i></p>
                    <p class="garyTxt">查询区块：<i class="Wtxt">区块1</i></p>
                    <p class="garyTxt">团队规模：<i class="Wtxt">28人</i></p>
                    <p class="garyTxt">上线时间：<i class="Wtxt">2017年08月23日</i></p>
                    <p class="garyTxt">所在国籍：<i class="Wtxt">新加坡</i></p>
                    <button class="whiteBook">查看白皮书</button>
                </div>
            </div>
        </div>

        <!-- 列表头 -->
        <div class="projectIndexTitle_box w">
            <div class="projectIndexTitle">
                <ul>
                    <li><a @click="projectOverview" :class="activeShow == 1?'active':''">项目概况</a></li>
                    <li><a @click="productDiligence" :class="activeShow == 2?'active':''">项目尽调</a></li>
                    <li><a @click="remark" :class="activeShow == 3?'active':''">点评 (<i>10</i>)</a></li>
                    <li><a @click="projectArticles" :class="activeShow == 4?'active':''">文章 (<i>102</i>)</a></li>
                    <li><a @click="collector" :class="activeShow == 5?'active':''">收藏者 (<i>8920</i>)</a></li>
                </ul>
            </div>

            <div class="share">
                <a href="#"><i></i>分享</a>
            </div>
        </div>

        <!-- 窗口切换 -->
        <router-view></router-view>
    </div>
</template>
<script>
    import {Rate} from 'iview'
    export default {
        components:{Rate},
        data(){
            return {
                valueDisabled: 3.9,
                activeShow:1,
            }
        },
        methods:{
            projectOverview(){
                this.activeShow = 1
                this.$router.push({path:'/projectIndex/projectOverview'})
            },
            productDiligence(){
                this.activeShow = 2
                this.$router.push({path:'/projectIndex/productDiligence'})
            },

            projectArticles(){
                this.activeShow = 4
                this.$router.push({path:'/projectIndex/projectArticles'})
            },

            collector(){
                this.activeShow = 5
                this.$router.push({path:'/projectIndex/collector'})
            },

            remark(){
                this.activeShow = 3
                this.$router.push({path:'/projectIndex/remark'})
            },


        }
    }
</script>
