<template>
    <div class="personLogin">
        
        <div class="loginInfo">
            <div class="loginTitle">
                欢迎来到<i>链氪</i>财经
            </div>  

            <!-- 账号和密码 -->
            <div class="login_box">
                <!-- 账号 -->
                <div class="username_bigBox">
                    <div class="username_box">
                        <input type="text" class="username" placeholder="输入手机号码 /邮箱/ 昵称">
                        <i class="usernameIcon"></i>
                    </div>
                    <i class="line"></i>
                </div>
                <!-- 密码 -->
                <div class="password_bigBox">
                    <div class="password_box">
                        <input type="password" class="password" placeholder="输入登陆密码">
                        <i class="passwordIcon"></i>
                    </div>
                    <i class="line"></i>
                </div>

                <!-- 登录按钮 -->
                <button class="loginBtn">登录</button>

                <!-- 去注册 忘记密码 -->
                <div class="register">
                    <i>没有链氪帐号？<router-link to="/phoneRegister">去注册>></router-link></i>
                    <a href="#" class="forget">忘记密码？</a>
                </div>
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
