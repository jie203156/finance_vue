<template>
    <div class="forgetPassword">
        <div class="forgetInfo">
            <div class="forgetTitle">
                忘记密码
                <div class="forgetTitleBtn">
                    <button class="emailRegister" @click="login">登录</button>
                    <button @click="phoneRegister">注册</button>
                </div>
            </div>  

            <!-- 表单填写 -->
            <div class="forget_box">
                <!-- 账号 -->
                <div class="username_bigBox">
                    <div class="username_box">
                        <input type="text" class="username" placeholder="输入手机号码">
                        <i class="usernameIcon"></i>
                    </div>
                    <i class="line"></i>
                </div>

                <!-- 图形验证码 -->
                <div class="picCode_bigBox">
                    <div class="picCode_box">
                        <input type="text" class="picCode" placeholder="输入图形验证码">
                        <div class="picCodeNum"></div>
                    </div>
                    <i class="line picCodeLine"></i>
                </div>

                <!-- 手机验证码 -->
                <div class="phoneCode_bigBox">
                    <div class="phoneCode_box">
                        <input type="text" class="phoneCode" placeholder="输入手机验证码">
                        <a class="getPhoneCode">获取验证码</a>
                    </div>
                    <i class="line"></i>
                </div>

                <!-- 密码 -->
                <div class="password_bigBox">
                    <div class="password_box">
                        <input type="password" class="password" placeholder="输入6~15位字符，区分大小写">
                        <i class="passwordIcon"></i>
                    </div>
                    <i class="line"></i>
                </div>

                <!-- 密码 -->
                <div class="passwordAgain_bigBox">
                    <div class="ppasswordAgain_box">
                        <input type="password" class="passwordAgain" placeholder="再次确认密码">
                        <i class="passwordIcon"></i>
                    </div>
                    <i class="line"></i>
                </div>

                <!-- 找回按钮 -->
                <button class="findBtn">找回</button>

            </div>
        </div>

        <div class="ThirdTxt">第三方登录</div>
        <div class="ThirdIcon">
            <a href="#" class="weixin"></a>
            <a href="#" class="qq"></a>
            <a href="#" class="xinlang"></a>
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {

            }
        },
        methods:{
            //手机注册点击事件
            phoneRegister(){
                this.$router.push({path:'/phoneRegister'})
            },
            //已有账号点击事件
            login(){
                this.$router.push({path:'/login'})
            }
        }
    }
</script>

