<template>
    <div class="productDiligence w">

        <!-- 主体内容左边 -->
        <div class="contentLeft" v-if="productShow == true">
            <div class="title_box">
                <div class="title">项目尽详情</div>
                <div class="time">2018年01月08日</div>
            </div>

            <div class="contentInfo_box">

                <!-- 图表 -->
                <div class="chart_box" >
                    <div id="myChart" :style="{width: '90%', height: '90%'}"></div>
                </div>

                <div class="contentInfo">
                    <div class="left">
                        <p class="num">64.25 <i>综合评分</i></p>

                        <ul>
                            <li><i></i>沟通渠道 ( 100 )</li>
                            <li><i></i>团队实力 ( 24 )</li>
                            <li><i></i>产品实力 ( 97 )</li>
                            <li><i></i>代币优势 ( 31 )</li>
                        </ul>
                    </div>
                    <div class="right">
                        <p class="num">NO.20 <i>评分排名</i></p>

                        <ul>
                            <li><i></i>社区 ( 60 )</li>
                            <li><i></i>顾问团队 ( 100 )</li>
                            <li><i></i>社交媒体 ( 50 )</li>
                            <li><i></i>业务/公司实力 ( 33 )</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <!-- 没有信息 -->
        <div class="noinfo" v-else></div>

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