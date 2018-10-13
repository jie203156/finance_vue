<template>
    <div class="collector w">

        <!-- 更多文章列表信息内容 -->
        <div class=" moreArticlesList_box">
            <div class="collectorS_box">
                <ul>
                    <li>
                        <router-link to="/writerArticle">
                            <div class="icon"><img src="../../images/master01.png" alt=""></div>
                            <p class="txt">你家区块链</p>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/writerArticle">
                            <div class="icon"><img src="../../images/master01.png" alt=""></div>
                            <p class="txt">你家区块链</p>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/writerArticle">
                            <div class="icon"><img src="../../images/master01.png" alt=""></div>
                            <p class="txt">你家区块链</p>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/writerArticle">
                            <div class="icon"><img src="../../images/master01.png" alt=""></div>
                            <p class="txt">你家区块链</p>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/writerArticle">
                            <div class="icon"><img src="../../images/master01.png" alt=""></div>
                            <p class="txt">你家区块链</p>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/writerArticle">
                            <div class="icon"><img src="../../images/master01.png" alt=""></div>
                            <p class="txt">你家区块链</p>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/writerArticle">
                            <div class="icon"><img src="../../images/master01.png" alt=""></div>
                            <p class="txt">你家区块链</p>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/writerArticle">
                            <div class="icon"><img src="../../images/master01.png" alt=""></div>
                            <p class="txt">你家区块链</p>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/writerArticle">
                            <div class="icon"><img src="../../images/master01.png" alt=""></div>
                            <p class="txt">你家区块链</p>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/writerArticle">
                            <div class="icon"><img src="../../images/master01.png" alt=""></div>
                            <p class="txt">你家区块链</p>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/writerArticle">
                            <div class="icon"><img src="../../images/master01.png" alt=""></div>
                            <p class="txt">你家区块链</p>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/writerArticle">
                            <div class="icon"><img src="../../images/master01.png" alt=""></div>
                            <p class="txt">你家区块链</p>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/writerArticle">
                            <div class="icon"><img src="../../images/master01.png" alt=""></div>
                            <p class="txt">你家区块链</p>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/writerArticle">
                            <div class="icon"><img src="../../images/master01.png" alt=""></div>
                            <p class="txt">你家区块链</p>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/writerArticle">
                            <div class="icon"><img src="../../images/master01.png" alt=""></div>
                            <p class="txt">你家区块链</p>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/writerArticle">
                            <div class="icon"><img src="../../images/master01.png" alt=""></div>
                            <p class="txt">你家区块链</p>
                        </router-link>
                    </li>
                </ul>
            </div>

            <!-- 浏览更多 -->
            <div class="moveBtn">
                <a href="#">浏览更多</a>
            </div>
        </div>

        <!-- 主体内容右边 -->
        <div class="contentRight">
            <!-- 用户点评 -->
            <div class="comments">
                <div class="title">
                    <i>用户点评</i>
                    <a href="#">我要点评></a>
                </div>

                <!-- 评分 -->
                <div class="star_box">
                    <p class="txt">综合评分</p>
                    <div class="Num">{{valueDisabled}}</div>
                    <Rate disabled v-model="valueDisabled" />

                </div>

                <!-- 进度条 -->
                <div class="progressBar_box">
                    <div class="progressBar business">
                        <p>商业模式</p>
                        <Progress :percent="100" hide-info />
                        <i>5.0分</i>
                    </div>
                    <div class="progressBar team">
                        <p>团队实力</p>
                        <Progress :percent="80" hide-info />
                        <i>4.0分</i>
                    </div>
                    <div class="progressBar counselor">
                        <p>顾问团队</p>
                        <Progress :percent="80" hide-info />
                        <i>4.0分</i>
                    </div>
                    <div class="progressBar product">
                        <p>产品实力</p>
                        <Progress :percent="60" hide-info />
                        <i>3.2分</i>
                    </div>
                    <div class="progressBar message">
                        <p>通讯渠道</p>
                        <Progress :percent="100" hide-info />
                        <i>5.0分</i>
                    </div>
                </div>
            </div>

            <!-- 项目尽调 -->
            <div class="Project_box">
                <div class="title">
                    <i>项目尽调</i>
                    <a href="#">查看详情></a>
                </div>

                <!-- 评分 -->
                <div class="grade" v-if="productShow == true">
                    <div class="left">
                        <div class="num">64.25</div>
                        <p>综合评分</p>
                    </div>
                    <div class="line"></div>
                    <div class="right">
                        <div class="num">NO.20</div>
                        <p>评分排名</p>
                    </div>
                </div>

                <!-- 图表 -->
                <div class="chart_box" v-if="productShow == true">
                    <div id="myChart" :style="{width: '90%', height: '90%'}"></div>
                </div>

                <!-- 暂无尽调信息 -->
                <div class="noINfo" v-else></div>
            </div>
        </div>
    </div>
</template>
<script>
    import {Progress,Rate} from 'iview'
    export default {
        components:{Progress,Rate},
        data(){
            return{
                valueDisabled: 3.9,
                productShow:true,
            }
        },
        mounted(){
            this.drawLine();
        },
        methods:{
            drawLine(){
                // 基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(document.getElementById('myChart'))
                // 绘制图表
                myChart.setOption({
                    tooltip: {},
                    radar: {
                        // shape: 'circle',
                        name: {
                            textStyle: {
                                color: '#999',
                                // borderRadius: 3,
                                // padding: [3, 5]
                        }
                        },
                        indicator: [
                        { name: '产品', max: 100},
                        { name: '代币', max: 100},
                        { name: '业务', max: 100},
                        { name: '社区', max: 100},
                        { name: '顾问', max: 100},
                        { name: '社交', max: 100},
                        { name: '沟通', max: 100},
                        { name: '团队', max: 100},
                        ]
                    },
                    series: [{
                        // name: '预算 vs 开销（Budget vs spending）',
                        type: 'radar',
                        // areaStyle: {normal: {}},
                        data : [
                            {
                                value : [97, 31, 33, 60, 100, 50,100,24],
                                name : '预算分配（Allocated Budget）'
                            }
                        ]
                    }]
                });
            }
        }
    }
</script>