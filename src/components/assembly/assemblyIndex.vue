<template>
    <div class="assemblyIndex">
        <div class="bg01"></div>
        <div class="bg02"></div>
        <div class="bg04"></div>
        <div class="bg03"></div>
        <div class="assemblyIndexTitle">链氪集结号</div>
        <a class="live" @click="applyLive = true">立即入驻</a>

        <!-- 申请入驻 -->
        <div class="applyLive_Bigbox" v-if="applyLive == true">
            <div class="applyLive">
                <div class="applyLiveTitle">
                    申请入驻
                </div>

                <div class="applyLive_box">
                    <!-- 申请入驻左侧边栏 -->
                    <div class="applyLiveLeft">
                        <!-- 入驻方 -->
                        <div class="LivePosition">
                            <p>入驻方：</p>
                            <div class="LivePositionInput">
                                <el-select v-model="positionsers" placeholder="项目方">
                                    <el-option
                                    v-for="item in positionsersList"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                            </div>
                        </div>
                        <!-- 入驻者昵称 -->
                        <div class="LiveNickname">
                            <p>入驻者昵称：</p>
                            <input type="text" placeholder="填写昵称">
                        </div>
                        <!-- 入驻者姓名： -->
                        <div class="LiveName">
                            <p>入驻者姓名：</p>
                            <input type="text" placeholder="填写姓名（本人/委托人/代理人姓名）">
                        </div>
                        <!-- 身份证号： -->
                        <div class="LiveIdcard">
                            <p>身份证号：</p>
                            <input type="text" placeholder="身份证号码（本人/委托人/代理人身份证号码）">
                        </div>
                    </div>

                    <!-- 申请入驻右侧边栏 -->
                    <div class="applyLiveRight">
                        <p class="applyLiveRightTitle">上传头像</p>

                        <!-- 显示人物图片 -->
                        <div class="iconPic">
                            <img src="" alt="">
                        </div>

                        <!-- 上传图片按钮 -->
                        <div class="inputfile">
                            <input type="file" name="file">
                            <button class="btn">选择图片</button>
                        </div>

                        <!-- 同意链氪作者投稿须知 -->
                        <div class="accept">
                            <Radio v-model="single" class="radio">同意链氪作者投稿须知</Radio>       
                        </div> 

                        <!-- 提交申请 -->
                        <div class="submit">
                            <button class="submitBtn">提交申请</button>
                            <button class="submitCancel" @click="applyLive = false">取消</button>
                        </div>
                    </div>
                </div>

                
            </div>
            <button class="applyLiveCancel"  @click="applyLive = false">取消</button>
        </div>

        <div class="liveContent">
            <div class="info">
                <p>近日，由比璟公司开发的区块链价值生态平台“火球"正式上线，“火球"是专注于区块链行业的行情分析、数字资产管理、媒体服务、项目调查和投资者服务的平台，更运用了丰富的社区用户激励机制服务众多投资者。</p>
                <p>“火球"上线后将吸纳大批自媒体、新闻机构、企业、智库和专栏作家入驻“火球号”。截止04月30日 ,“火球"已有三十万的注册量，网页浏览量已经达到了日均10万多次,访客数达到7万人次,这是用户对火球最大的认可和期待。</p>
                <p>全方位的功能设置可以让用户获得最佳体验感受， “火球"包括资讯、快讯、行情、发现和钱包五大功能，通过7*24小时全天候的文字、视频、可视化播报，让用户随时随地了解全球市场的最新变化。</p>
                <p>“火球号”现诚邀个人和机构入驻，入驻用户可利用“火球号”三端平台强大的媒体影响力，提升自己的行业影响力。同时，“火球号”采取了“写多少奖多少”的奖励机制，给你一个平台，为你喜爱的区块链观点发声。</p>
            </div>

            <div class="bigLivetxt">我们诚邀您入驻
                <div class="smalltxt">我们诚邀您入驻</div>
            </div>

            <div class="liveExplain">
                入驻方式：点击进入申请后台即可申请（因为需要上传身份证等，目前只支持PC端申请）。申请审核通过后就可以发文章了。注意申请入驻时登陆的火球财经账号就是之后发布文章的账号，最好用运营人员自己的火球财经账号登陆。
            </div>

            <div class="liveList">
                <ul>
                    <li>
                        <div class="quan01">
                        </div>
                        <p class="title">项目方入驻</p>
                        <p class="txt">提供项目方委托主理人的身份信息即可</p>
                    </li>
                    <li>
                        <div class="quan02">
                        </div>
                        <p class="title">项目方入驻</p>
                        <p class="txt">提供项目方委托主理人的身份信息即可</p>
                    </li>
                    <li>
                        <div class="quan03">
                        </div>
                        <p class="title">项目方入驻</p>
                        <p class="txt">提供项目方委托主理人的身份信息即可</p>
                    </li>
                    <li>
                        <div class="quan04">
                        </div>
                        <p class="title">项目方入驻</p>
                        <p class="txt">提供项目方委托主理人的身份信息即可</p>
                    </li>
                </ul>
            </div>

            <div class="bigLivetxt">链氪优势
                <div class="smalltxt">链氪优势</div>
            </div>

            <div class="advantageList">
                <ul>
                    <li>
                        <div class="icon"></div>
                        <div class="txt_box">
                            <p>流量优势</p>
                            <i>“火球号”集中三端流量，全力推广入驻媒体区块链内容，具有广场传播加关系链传播两大途径支持从零到有的流量扶持，协助搭建社群、社区，入驻媒体认真耕耘即可快速获取优质区块链用户。</i>
                        </div>
                    </li>
                    <li class="right">
                        <div class="txt_box">
                            <p>精准推送</p>
                            <i>编辑 7X24 小时审核，每篇文章通过机器算法与人工审核双重把关，严格把关文章质量为用户精准推送区块链内容。</i>
                        </div>
                        <div class="icon icon01"></div>
                    </li>
                    <li>
                        <div class="icon icon02"></div>
                        <div class="txt_box">
                            <p>内容精良</p>
                            <i>区别于其他自媒体平台，“火球号”主打精选区块链内容，在账号入驻审核和文章审核上都采用“严进严出”的标准，把通过率控制在 30%以内。目前平台入驻财经类优质自媒体20家左右，日发稿约50篇。</i>
                        </div>
                    </li>
                    <li class="right">
                        <div class="txt_box">
                            <p>精准推送</p>
                            <i>“火球号”账号内容生产形式包括文字、图集、两种，符合读者多样化需求。</i>
                        </div>
                        <div class="icon icon03"></div>
                    </li>
                </ul>
            </div>
        </div>

        <!-- 遮罩层 -->
        <div class="shade" v-if="applyLive == true"></div>
    </div>
</template>
<script>
    import {Radio} from 'iview'
    export default {
        components:{Radio},
        data (){
            return {
                positionsersList: [{
                    value: '选项1',
                    label: '项目方'
                    }, {
                    value: '选项2',
                    label: '区块链从业者'
                    }, {
                    value: '选项3',
                    label: '知名大V'
                    }, {
                    value: '选项4',
                    label: '专栏作家'
                    }],
                positionsers: '',

                // 入驻申请
                applyLive:false,
            }
        }
    }
</script>
