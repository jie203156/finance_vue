<template>
    <div class="remark w">

        <!-- 更多文章列表信息内容 -->
        <div class=" productRemark_box">
            <!-- 头部 -->
            <div class="title_box">
                <p class="title">项目点评</p>
                <button class="forRemarkBtn" @click="myRemark">我要点评</button>
            </div>
            <!-- 评分信息 -->
            <div class="content_box">
                <div class="left_box">
                    <!-- 综合评分  -->
                    <div class="synthesize">
                        <p class="txt">综合评分</p>
                        <p class="num">3.9<i>分</i></p>
                         <Rate disabled v-model="valueDisabled" />

                    </div>

                    <!-- 用户印象  -->
                    <div class="impression">
                        <p class="txt">用户印象</p>

                        <div class="impression_box">
                            <ul>
                                <li>团队优秀(3)</li>
                                <li>技术强(3)</li>
                                <li>靠谱（2)</li>
                                <li>社区强大(1)</li>
                                <li>资源多(1)</li>
                                <li>负责任（1)</li>
                                <li>老板牛(1)</li>
                                <li>不透明(2)</li>
                                <li>垃圾网站(1)</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="right_box">
                    <div class="title">
                        <p>各项评分</p>
                        <p>项目相比</p>
                    </div>

                    <div class="content_box">
                        <!-- 进度条 -->
                        <div class="progressBar_box">
                            <div class="progressBar business">
                                <p>商业模式</p>
                                <Progress :percent="100" hide-info />
                                <i>5.0分</i>
                                <div class="iconG"></div>
                                <em>+2.43%</em>
                            </div>
                            <div class="progressBar team">
                                <p>团队实力</p>
                                <Progress :percent="80" hide-info />
                                <i>4.0分</i>
                                <div class="iconG"></div>
                                <em>+2.43%</em>
                            </div>
                            <div class="progressBar counselor">
                                <p>顾问团队</p>
                                <Progress :percent="80" hide-info />
                                <i>4.0分</i>
                                <div class="iconG"></div>
                                <em>+2.43%</em>
                            </div>
                            <div class="progressBar product">
                                <p>产品实力</p>
                                <Progress :percent="60" hide-info />
                                <i>3.2分</i>
                                <div class="iconR"></div>
                                <em class="red">+2.43%</em>
                            </div>
                            <div class="progressBar message">
                                <p>通讯渠道</p>
                                <Progress :percent="100" hide-info />
                                <i>5.0分</i>
                                <div class="iconG"></div>
                                <em>+2.43%</em>
                            </div>
                        </div>

                        
                    </div>


                </div>
            </div>
            
        </div>

        <!-- 主体内容右边 -->
        <div class="contentRight">

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

        <div class="comment">

            <!--选择标签 -->
            <div class="select_box">
                <div class="select">
                    <ul>
                        <li :class="selectshow == 1?'active':''" @click="selectshow = 1">全部</li>
                        <li :class="selectshow == 2?'active':''" @click="selectshow = 2">优质（1）</li>
                        <li :class="selectshow == 3?'active':''" @click="selectshow = 3">不错（1）</li>
                        <li :class="selectshow == 4?'active':''" @click="selectshow = 4">一般（1）</li>
                        <li :class="selectshow == 5?'active':''" @click="selectshow = 5">差劲（1）</li>
                    </ul>

                    <p>已有 <i>4</i> 人点评</p>
                </div>

            </div>

            <!-- 评论内容 -->
            <div class="commentInfo_box">
                <div class="commentInfo">
                    <ul>
                        <li>
                            <div class="title">
                                <div class="icon"><img src="../../images/master01.png" alt=""></div>
                                <p class="user">猫笑你</p>
                                <p class="time">2018-05-30 16:37:16</p>
                                <i>优质</i>
                            </div>

                            <div class="content_box">
                                <div class="contentInfo">
                                    各项评分 :
                                    <ul class="grade">
                                        <li class="gradeL">商业模式(<i>3</i>)</li>
                                        <li class="gradeL">团队实力(<i>3</i>)</li>
                                        <li class="gradeL">顾问团队(<i>3</i>)</li>
                                        <li class="gradeL">产品实力(<i>3</i>)</li>
                                        <li class="gradeL">通讯渠道(<i>3</i>)</li>
                                    </ul>
                                </div>
                                <div class="contentInfo">
                                    用户印象 :
                                    <ul class="grade">
                                        <li class="gradeG">社区强大(1)</li>
                                        <li class="gradeG">资源多(1)</li>
                                        <li class="gradeG">负责任（1)</li>
                                    </ul>
                                </div>

                                <p class="reply">NEO项目做的很好，国内外社区运营也很棒。</p>

                                <div class="icon_box">
                                    <i class="iconB"></i>支持 120
                                </div>
                            </div>

                        </li>
                        <li>
                            <div class="title">
                                <div class="icon"><img src="../../images/master01.png" alt=""></div>
                                <p class="user">猫笑你</p>
                                <p class="time">2018-05-30 16:37:16</p>
                                <i class="blue">不错</i>
                            </div>

                            <div class="content_box">
                                <div class="contentInfo">
                                    各项评分 :
                                    <ul class="grade">
                                        <li class="gradeL">商业模式(<i>3</i>)</li>
                                        <li class="gradeL">团队实力(<i>3</i>)</li>
                                        <li class="gradeL">顾问团队(<i>3</i>)</li>
                                        <li class="gradeL">产品实力(<i>3</i>)</li>
                                        <li class="gradeL">通讯渠道(<i>3</i>)</li>
                                    </ul>
                                </div>
                                <div class="contentInfo">
                                    用户印象 :
                                    <ul class="grade">
                                        <li class="gradeG">社区强大(1)</li>
                                        <li class="gradeG">资源多(1)</li>
                                        <li class="gradeG">负责任（1)</li>
                                    </ul>
                                </div>

                                <p class="reply">不错不错</p>

                                <div class="icon_box">
                                    <i class="iconB"></i>支持 120
                                </div>
                            </div>

                        </li>
                        <li>
                            <div class="title">
                                <div class="icon"><img src="../../images/master01.png" alt=""></div>
                                <p class="user">猫笑你</p>
                                <p class="time">2018-05-30 16:37:16</p>
                                <i class="yellow">一般</i>
                            </div>

                            <div class="content_box">
                                <div class="contentInfo">
                                    各项评分 :
                                    <ul class="grade">
                                        <li class="gradeL">商业模式(<i>3</i>)</li>
                                        <li class="gradeL">团队实力(<i>3</i>)</li>
                                        <li class="gradeL">顾问团队(<i>3</i>)</li>
                                        <li class="gradeL">产品实力(<i>3</i>)</li>
                                        <li class="gradeL">通讯渠道(<i>3</i>)</li>
                                    </ul>
                                </div>
                                <div class="contentInfo">
                                    用户印象 :
                                    <ul class="grade">
                                        <li class="gradeG">社区强大(1)</li>
                                        <li class="gradeG">资源多(1)</li>
                                        <li class="gradeG">负责任（1)</li>
                                    </ul>
                                </div>

                                <p class="reply">Doloremque nihil quaerat quibusdam voluptatibus est et est explicabo Consequatur voluptatibus ut et necessitatibus reiciendis uteiusmod tempor aut</p>

                                <div class="icon_box">
                                    <i class="iconB"></i>支持 120
                                </div>
                            </div>

                        </li>
                        <li>
                            <div class="title">
                                <div class="icon"><img src="../../images/master01.png" alt=""></div>
                                <p class="user">猫笑你</p>
                                <p class="time">2018-05-30 16:37:16</p>
                                <i class="red">差劲</i>
                            </div>

                            <div class="content_box">
                                <div class="contentInfo">
                                    各项评分 :
                                    <ul class="grade">
                                        <li class="gradeL">商业模式(<i>3</i>)</li>
                                        <li class="gradeL">团队实力(<i>3</i>)</li>
                                        <li class="gradeL">顾问团队(<i>3</i>)</li>
                                        <li class="gradeL">产品实力(<i>3</i>)</li>
                                        <li class="gradeL">通讯渠道(<i>3</i>)</li>
                                    </ul>
                                </div>
                                <div class="contentInfo">
                                    用户印象 :
                                    <ul class="grade">
                                        <li class="gradeG">社区强大(1)</li>
                                        <li class="gradeG">资源多(1)</li>
                                        <li class="gradeG">负责任（1)</li>
                                    </ul>
                                </div>

                                <p class="reply">不好</p>

                                <div class="icon_box">
                                    <i class="iconB"></i>支持 120
                                </div>
                            </div>

                        </li>
                    </ul>
                </div>
            </div>

            <!-- 浏览更多 -->
            <div class="moveBtn">
                <a href="#">浏览更多</a>
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
                selectshow:1,
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
            },
            myRemark(){
                this.$router.push({path:'/projectIndex/myRemark'})
            }
        }
    }
</script>