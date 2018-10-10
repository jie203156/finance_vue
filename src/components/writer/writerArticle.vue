<template>
    <div class="writerArticles">
        <div class="writerArticlesBanner">
            <!-- 作家用户信息 -->
            <div class="personInfo w">
                <a href="#"><img src="../../images/writerArticlespersonIcon.png" alt=""></a>
                <div class="writerPersonInfo">
                    <p class="writerPersonInfoTitle">你家区块链</p>
                    <p class="writerPersonInfoTalk">Hi,欢迎来到彼得的思想空间，在这里彼得将和你共同探索区块链的本质和规律； 彼得也非常乐意分享关于项目...</p>
                    <!-- 文章数/浏览量/被关注 -->
                    <div class="writerPersonInfoSmallIcon">
                        <ul>
                            <li><i class="num"></i>101文章数</li>
                            <li class="line"></li>
                            <li><i class="eye"></i>4.5万浏览量</li>
                            <li class="line"></li>
                            <li><i class="xin"></i>1688被关注</li>
                        </ul>
                    </div>
                </div>

                <!-- 关注按钮 -->
                <button class="attentionBtn">取消关注</button>
            </div>
        </div>

        <!-- 更多文章 -->
        <div class="moreArticlesTitle">
            <div class="w moreArticles_box">
                <p>你家区块链的全部文章</p>
                <router-link to="/moreWriters">更多作家>></router-link>
            </div>
        </div>
        <!-- 更多文章列表信息内容 -->
        <div class="w moreArticlesList_box">
            <div class="infoContent">
                <ul>
                    <li>
                        <div class="listPic">
                            <router-link to="/wirterArticleContent"><img src="../../images/201809281051.png" alt=""></router-link>
                        </div>
                        <div class="rightInfo">
                            <p class="title"><router-link to="/wirterArticleContent">斯坦福大学物理教授张首晟：In Math We Trust | 清华x-lab公开课</router-link></p>
                            <p class="introduce">清华区块链公开课本期嘉宾是斯坦福大学物理系、电子工程系和应用物理系终身教授张首晟,清华区块链公开课本期嘉宾是清华区块链公开课本期嘉宾是斯坦福大学物理系...</p>
                            <div>
                                <div class="smallLogo">
                                    <a href="#">
                                        <div class="iconPic"><img src="../../images/writerArticlespersonIcon01.png" alt=""></div>
                                        <i>你家区块链</i>
                                    </a>
                                </div>
                                <div class="icons">
                                    <div class="times">
                                        <p></p>
                                        <i>30分钟前</i>
                                    </div>
                                    <div class="eye">
                                        <p></p>
                                        <i>45888</i>
                                    </div>
                                    <div class="infoborder">
                                        <p></p>
                                        <i>好感人数 120</i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="listPic">
                            <a href="#"><img src="../../images/201809281051.png" alt=""></a>
                        </div>
                        <div class="rightInfo">
                            <p class="title"><a href="#">斯坦福大学物理教授张首晟：In Math We Trust | 清华x-lab公开课</a></p>
                            <p class="introduce">清华区块链公开课本期嘉宾是斯坦福大学物理系、电子工程系和应用物理系终身教授张首晟,清华区块链公开课本期嘉宾是清华区块链公开课本期嘉宾是斯坦福大学物理系...</p>
                            <div>
                                <div class="smallLogo">
                                    <a href="#">
                                        <div class="iconPic"><img src="../../images/writerArticlespersonIcon01.png" alt=""></div>
                                        <i>你家区块链</i>
                                    </a>
                                </div>
                                <div class="icons">
                                    <div class="times">
                                        <p></p>
                                        <i>30分钟前</i>
                                    </div>
                                    <div class="eye">
                                        <p></p>
                                        <i>45888</i>
                                    </div>
                                    <div class="infoborder">
                                        <p></p>
                                        <i>好感人数 120</i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="listPic">
                            <a href="#"><img src="../../images/201809281051.png" alt=""></a>
                        </div>
                        <div class="rightInfo">
                            <p class="title"><a href="#">斯坦福大学物理教授张首晟：In Math We Trust | 清华x-lab公开课</a></p>
                            <p class="introduce">清华区块链公开课本期嘉宾是斯坦福大学物理系、电子工程系和应用物理系终身教授张首晟,清华区块链公开课本期嘉宾是清华区块链公开课本期嘉宾是斯坦福大学物理系...</p>
                            <div>
                                <div class="smallLogo">
                                    <a href="#">
                                        <div class="iconPic"><img src="../../images/writerArticlespersonIcon01.png" alt=""></div>
                                        <i>你家区块链</i>
                                    </a>
                                </div>
                                <div class="icons">
                                    <div class="times">
                                        <p></p>
                                        <i>30分钟前</i>
                                    </div>
                                    <div class="eye">
                                        <p></p>
                                        <i>45888</i>
                                    </div>
                                    <div class="infoborder">
                                        <p></p>
                                        <i>好感人数 120</i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="listPic">
                            <a href="#"><img src="../../images/201809281051.png" alt=""></a>
                        </div>
                        <div class="rightInfo">
                            <p class="title"><a href="#">斯坦福大学物理教授张首晟：In Math We Trust | 清华x-lab公开课</a></p>
                            <p class="introduce">清华区块链公开课本期嘉宾是斯坦福大学物理系、电子工程系和应用物理系终身教授张首晟,清华区块链公开课本期嘉宾是清华区块链公开课本期嘉宾是斯坦福大学物理系...</p>
                            <div>
                                <div class="smallLogo">
                                    <a href="#">
                                        <div class="iconPic"><img src="../../images/writerArticlespersonIcon01.png" alt=""></div>
                                        <i>你家区块链</i>
                                    </a>
                                </div>
                                <div class="icons">
                                    <div class="times">
                                        <p></p>
                                        <i>30分钟前</i>
                                    </div>
                                    <div class="eye">
                                        <p></p>
                                        <i>45888</i>
                                    </div>
                                    <div class="infoborder">
                                        <p></p>
                                        <i>好感人数 120</i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>

            <!-- 浏览更多 -->
            <div class="moveBtn">
                <a href="#">浏览更多</a>
            </div>
        </div>
    </div>
</template>
