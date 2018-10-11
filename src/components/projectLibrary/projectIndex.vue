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
                            <ul class="star ">
                                <li class="starY"></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>

                            <div class="Num">{{num}}</div>
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
                    <li><router-link to="/projectIndex/projectOverview" class="active">项目概况</router-link></li>
                    <li><a href="#">项目尽调</a></li>
                    <li><a href="#">点评 (<i>10</i>)</a></li>
                    <li><a href="#">文章 (<i>102</i>)</a></li>
                    <li><a href="#">收藏者 (<i>8920</i>)</a></li>
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
    export default {
        data(){
            return {
                num:3.9,
            }
        }
    }
</script>
