<template>
    <div class="personPhoneRegister">
        <div class="registerInfo">
            <div class="loginTitle">
                手机注册
                <div class="loginTitleBtn">
                    <button class="emailRegister" @click="emailRegister">使用邮箱注册</button>
                    <button @click="login">使用已有帐号</button>
                </div>
            </div>  

            <!-- 表单填写 -->
            <div class="login_box">
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

                <!-- 昵称 -->
                <div class="personname_bigBox">
                    <div class="personname_box">
                        <input type="text" class="personname" placeholder="设置您的昵称（2~6个字符）">
                        <i class="usernameIcon"></i>
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
                
                <!-- 阅读并接受 -->
                <div class="accept">
                    <Radio v-model="single">我已阅读并接受<a href="#">《金色财经媒体平台服务协议》</a></Radio>       
                </div> 

                <!-- 注册按钮 -->
                <button class="registerBtn">注册</button>

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
    import {Radio} from 'iview'
    export default {
        components :{Radio},
        data () {
            return {
                single: false
            }
        },
        methods:{
            //邮箱注册点击事件
            emailRegister(){
                this.$router.push({path:'/emailRegister'})
            },
            //已有账号点击事件
            login(){
                this.$router.push({path:'/login'})
            }
        }
    }
</script>
