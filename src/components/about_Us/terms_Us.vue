<template>
    <div class="terms_Us">
        <div class="bgL"></div>
        <div class="bgR"></div>
        <div class="content_box w">

            <!-- logo -->
            <h1 class="logo"><img src="../../assets/logo@2x.png" alt=""></h1>
            <!-- 按钮 -->
            <div class="btns">
                <button @click="about_Us">关于我们</button>
                <button @click="notice_Us">投稿须知</button>
                <button class="btnR">使用条款</button>
                <button @click="copyright_Us">版权声明</button>
            </div>
            <!-- 使用条款 -->
            <div class="about_box" style="margin-bottom:80px;">
                <p class="title"><i>* </i> 使用条款</p>
                <p class="txt">
                    服务内容<br>
                    链向财经具体的服务内容由链向财经提供，例如区块链创业报道、7*24快讯、项目库、活动、问答社区等，用户必须遵守本服务条款下使用链向财经提供的服务。链向财经并不承诺服务在开始、变更或者结束时，均事先通知用户。
                </p>
                <p class="txt">
                    条款更改、添加或删除<br>
                    链向财经有随时更改、添加或删除部分条款的最终决定权。一旦更改条款，链向财经将提前一个月通过用户的账户告知其条款的更改，必要时会在网站首页给以公告。用户在收到通知后，有责任检查修订的条款。条款公布后如若用户继续使用链向财经服务，则视为接受这些条款的变更，并同意以后在使用链向财经服务时须遵循这些条款。
                </p>
                <p class="txt">
                    服务变更、中断或终止<br>
                    鉴于互联网服务的特殊性，用户同意链向财经有权随时变更、中断或终止部分或全部的网络服务。如变更、中断或终止的网络服务，链向财经无需通知用户，也无需对任何用户或任何第三方承担任何责任。
                </p>
                <p class="txt">
                    用户账号<br>
                    链向财经为了保障用户账号信息安全，用户须同意以下条款：<br>
                    (1) 用户有责任保管好自己的账号信息及密码，以及在此账号下发生的包括网络交易在内的任何活动。<br>
                    (2) 当发生非本人授权的账号或密码登录，或任何违反服务条款的登录，用户须立即通知链向财经。<br>
                    (3) 由于他人使用自己账号和密码而导致链向财经或平台其他用户带来的任何损失，用户须对此负责。 <br>
                    (3) 由于他人使用自己账号和密码而导致链向财经或平台其他用户带来的任何损失，用户须对此负责。 <br>
                    (4) 任何情况下用户不得使用除自己账号以外的其他任何账号登录，否则链向财经有权冻结此类审查此类账号。  <br>
                    (5) 用户同意提供在注册过程中按系统要求提供的准确，最新，完整的个人信息给链向财经，并保证这些信息是最新的。  <br>
                </p>
                <p class="txt">
                    隐私保护<br>
                    用户在创建账号使用链向财经时，会被要求提供个人信息，这些个人信息将被保密。非经用户许可，链向财经保证不对外公开或向第三方提供单个用户的注册资料及用户在使用网络服务时存储在链向财经的非公开内容，但下列情况除外：遵守有关法律、法规的规定，包括在国家有关机关查询时，提供用户的注册信息，存储资料，以及用户在链向财经的操作记录等。<br>
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
            notice_Us(){
                this.$router.push({path:'/notice_Us'})
            },
            copyright_Us(){
                this.$router.push({path:'/copyright_Us'})
            },
        }
    }
</script>
