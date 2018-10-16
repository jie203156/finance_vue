<template>
    <div class="about_Us">
        <div class="bgL"></div>
        <div class="bgR"></div>
        <div class="content_box w">

            <!-- logo -->
            <h1 class="logo"><img src="../../assets/logo@2x.png" alt=""></h1>
            <!-- 按钮 -->
            <div class="btns">
                <button class="btnR">关于我们</button>
                <button @click="noticeBtn">投稿须知</button>
                <button @click="terms_Us">使用条款</button>
                <button @click="copyright_Us">版权声明</button>
            </div>
            <!-- 关于我们 -->
            <div class="about_box">
                <p class="title"><i>* </i> 关于我们</p>
                <p class="txt">容链向财经(www.chainfor.com)，由区块链行业资深团队创办，多位行业大咖投资，是深圳链向科技有限公司旗下专业的区块链信息服务平台，主要为广大区块链爱好者提供区块链项目报道、投资顾问、项目分析、市场行情、项目路演、社区服务等专业服务。</p>
                <p class="txt">链向财经将专注于区块链行业，秉承区块链社区共识理念，努力给区块链爱好者提供客观科学的、第三方视角的区块链内容信息服务。链向财经与行业区块链及各服务平台形成创新动力，共同推进区块链相关应用的发展，为行业构建更加健康的服务创新发展环境，建立一个良好的区块链生态圈，将链向财经打造成为区块链行业发展的风向标。 此外，我们努力为广大缺乏区块链理解的用户提供一个安全、诚信、可靠的学习渠道。在各种区块链不断出现让人眼花缭乱、各种投资区块链鱼龙混杂的今天，链向财经希望能帮助您化解看似高深的区块链技术，低门槛的读懂区块链未来。</p>
            </div>

            <!-- 我们的优势 -->
            <div class="advantage" style="margin-top:73px;">
                <p class="title"><i>* </i> 我们的优势</p>
                <p class="txt">金色财经是多家搜索引擎新闻源合作媒体，并且和和讯、腾讯、猎云、新浪、网易、今日头条、一条新闻等数十家财经及科技媒体达成内容合作。<br>
                截止到2017年7月，金色财经已有1000余家企业、个人自媒体、行情分析师入驻平台，每日200篇以上的内容输出；<br>
                近3月以来，金色财经日均UV(独立访客)35万，高峰时100万，已成为区块链行业最具影响力的服务平台之一。
                </p>
            </div>

            <!-- 联系方式 -->
            <div class="information">
                <ul>
                    <li>
                        <p class="txt">客服电话</p>
                        <p class="info">020-82515729</p>
                    </li>
                    <li>
                        <p class="txt">商务合作</p>
                        <p class="info">hq@inesv.com</p>
                    </li>
                    <li>
                        <p class="txt">广告合作</p>
                        <p class="info">QQ 452663281</p>
                    </li>
                    <li>
                        <p class="txt">工作时间/周一至周五</p>
                        <p class="info">上午9:00-12:00 下午14:00-18:00</p>
                    </li>
                </ul>
            </div>

            <!-- 意见反馈 -->
            <div class="feedback">
                <div class="title">意见反馈</div>
                <div class="input_box">
                    <div>
                        您的姓名：<input type="text">
                    </div>
                    <div>
                        您的邮箱地址：<input type="text">
                    </div>
                    <div>
                        您的联系电话：<input type="text">
                    </div>
                </div>

                <div class="content_txt">
                    <div class="content_title">您的反馈与建议：</div>
                    <textarea></textarea>
                </div>

                <div class="btn_box">
                    <button >提交</button>
                </div>
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
            noticeBtn(){
                this.$router.push({path:'/notice_Us'})
            },
            copyright_Us(){
                this.$router.push({path:'/copyright_Us'})
            },
            terms_Us(){
                this.$router.push({path:'/terms_Us'})
            },
        }
    }
</script>
