<template>
    <div class="notice_Us">
        <div class="bgL"></div>
        <div class="bgR"></div>
        <div class="content_box w">

            <!-- logo -->
            <h1 class="logo"><img src="../../assets/logo@2x.png" alt=""></h1>
            <!-- 按钮 -->
            <div class="btns">
                <button @click="about_Us">关于我们</button>
                <button class="btnR">投稿须知</button>
                <button @click="terms_Us">使用条款</button>
                <button @click="copyright_Us">版权声明</button>
            </div>
            <!-- 关于我们 -->
            <div class="about_box">
                <p class="title"><i>* </i> 投稿须知</p>
                <p class="txt">
                    (1) 支持投稿的文章类型：区块链的热点新闻、外文翻译、创业资讯、项目评级、行业政策、前沿技术等行业相关；<br>
                    (2)本站有权对来稿进行编辑、修改以及删减，如果作者有特殊要求，请在稿件中注明； <br>
                    (3) 投稿的文章仅为作者个人观点，不代表本网站赞同其观点和对其真实性负责； <br>
                    (4) 尊重版权：链向财经是一家专业的服务区块链创业的媒体平台，秉承区块链社区诚信思想，尊重原作者及用户，所投稿的文章必须是原创（可接受替朋友投稿）； <br>
                    (5) 文章末尾：必须注明完整作者信息，参考格式：李雷雷：微信号公众号lileilei，（关注点）关注区块链项目、政策、技术发展等； <br>
                    (6) 正文配图：跟正文内容相符，不能是广告，并保证清晰无水印； <br>
                    (7) 审核时间：因稿量较大，链向财经承诺会在24小时内审核完毕，无论通过与否都会给以通知回复； <br>
                    (8) 审核通过后，即发布在链向财经信息平台上，请保留原文，如需修改或删除，请联系小编QQ（1065169497）； <br>
                    若不符合以上要求，小编将拒绝发布（如果是软文/新闻稿/公关稿，请发邮件至商务合作邮箱：business@chainfor.com ），谢谢理解！  <br>

                </p>

            </div>

            <!-- 我们的优势 -->
            <div class="advantage" style="margin-top:73px;margin-bottom:137px;">
                <p class="title"><i>* </i> 投稿方式</p>
                <p class="txt">在链向财经首页注册个人账号，直接点击写文章提交即可（会有专属编辑审核，审核时间24小时内。）<br>
                    如有问题，欢迎随时联系客服<i>（ 020-82515729 ）</i>
                </p>
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
            about_Us(){
                this.$router.push({path:'/about_Us'})
            },
            terms_Us(){
                this.$router.push({path:'/terms_Us'})
            },
            copyright_Us(){
                this.$router.push({path:'/copyright_Us'})
            },
        }
    }
</script>
