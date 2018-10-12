<template>
    <div class="projectOverview w">

        <!-- 主体内容左边 -->
        <div class="contentLeft">
            <div class="project common">
                <p class="title">项目介绍</p>
                <p class="txt">HPB 是一种全新的区块链体系架构，定位为易用的高性能区块 链平台，旨在实现分布式应用的性能扩展，以满足现实世界的真实 商业需求。这是通过创建一个可以构建应用程序的类似操作系统的 架构来实现的。该体系架构提供帐户、身份与授权管理、策略管 理、数据库、异步通信以及在数以千计的 CPU、FPGA 或群集上的程 序调度。该区块链为一个全新的体系架构，通过低延时高并发硬件 加速技术，可实现每秒支持数百万个交易，且达到秒级确认。</p>
                <p class="line"></p>
            </div>
            <div class="team common">
                <p class="title">团队介绍</p>
                <p>汪晓明</p>
                <p class="txt">知名区块链技术布道师，以太坊技术的布道师，10年互联网技术开发经验。曾参与创立银联大数据、Beltal，并担任Beltal CTO。在跨境电商、金融支付、大数据、区块链等领域有丰富的技术架构和跨界经验。作为区块链技术早期探索者，一直积极推动区块链技术在国内的传播和应用落地，发起了深受行业认可的区块链视频节目《明说》，亲自编写了《以太坊官网文档中文版》一书，并作为主要作者参与了《区块链开发指南》一书的编写，持续影响着更多人参与到区块链技术的研究和推广。</p>
                <p>许理</p>
                <p class="txt">高级副总裁/首席架构华中科技大学硕士师,十年芯片研发经验，全球首款基于硬件加速的高性能区块链技术发起者，HPB首席架构师；曾参与华为、中科院、艾睿等公司和机构的重大项目研发</p>
                <p>娄山林</p>
                <p class="txt">技术副总裁/体系架构师，大连理工大学硕士，负责HPB底层体系架构设计及相应软件开发。曾任浪潮嵌入式首席工程师、识益生物研发总监，多次参与国家863重大专项研发。</p>
                <p>马燕涛</p>
                <p class="txt">硬件架构师，北京邮电大学硕士，拥有20年通信系统硬件及芯片研发经验。曾担任系统研发工程师、系统研发经理、芯片研发项目经理等职位。一直专注于光通信和数据传输、交换领域，熟悉数据的传输、复用、交换、安全等产品的研发，熟悉各种网络协议、接口技术及其处理方法，积累了丰富的设计经验。</p>
                <p class="line"></p>
            </div>
            <div class="light common">
                <p class="title">项目亮点</p>
                <p>芯片级加速引擎</p>
                <p class="txt">全球首个提供硬件芯片加速的平台。</p>
                <p>软硬件深度融合</p>
                <p class="txt">软件系统融入硬件加速引擎，深度定制。</p>
                <p>百万级并发算法</p>
                <p class="txt">通过软硬件体系架构设计，稳定支持百万级并发。</p>
                <p class="line"></p>
            </div>
            <div class="scene common">
                <p class="title">运用场景</p>
                <p class="txt">共享医疗经济、普惠金融</p>
                <p class="line"></p>
            </div>
            <div class="partner common">
                <p class="title">合作伙伴</p>
                <p class="txt">NEO、BIHU、BOTTOS、Bixin币信、ALLCOIN、CLPS、华链、Nebulas等</p>
                <p class="line"></p>
            </div>
            <div class="partner common">
                <p class="title">交易平台</p>
                <p class="txt">allcoin、bibox</p>
                <p class="line"></p>
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