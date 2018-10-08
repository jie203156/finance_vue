<template>
    <div class="index">

        <div class="header">
            <!-- 大图制作 -->
            <div class="bigPic">
    
            </div>
            <!--小图制作 -->
            <div class="smallPics w">
                <ul>
                    <li><a href="#"><img src="../../images/smallPics04.png" alt=""></a></li>
                    <li><a href="#"><img src="../../images/smallPics03.png" alt=""></a></li>
                    <li><a href="#"><img src="../../images/smallPics01.png" alt=""></a></li>
                    <li><a href="#"><img src="../../images/smallPics02.png" alt=""></a></li>
                </ul>
            </div>
        </div>
        <!-- 主体部分 -->
        <div class="body w">
            <!-- 左侧边栏 -->
            <div class="leftSide">
                <!-- 轮播图制作 -->
                <div class="swipers">
                    <div class="content">
                        <el-carousel :interval="5000" arrow="always" style="height:100%;">
                            <el-carousel-item v-for="item in 4" :key="item" style="height:320px;">
                            <img :src="item" alt="">
                            </el-carousel-item>
                        </el-carousel>
    
                    </div>
                    <div class="bottomTxt">随着现金使用下降 挪威央行或将推出数字货币</div>
                </div>
    
                <!-- 两张广告图 -->
                <div class="twoPic">
                    <div class="leftPic"><a href="#"><img src="../../images/005.png" alt=""></a></div>
                    <div class="rightPic"><a href="#"><img src="../../images/007.png" alt=""></a></div>
                </div>
    
                <!-- 左侧列表信息 -->
                <div class="leftListinfo">
                    <div class="leftListBar">
                        <ul>
                            <li><a href="#" class="active">头条</a></li>
                            <li><a href="#">国际新闻</a></li>
                            <li><a href="#">项目专访</a></li>
                            <li><a href="#">项目报告</a></li>
                            <li><a href="#">精英视点</a></li>
                            <li><a href="#">热门视频</a></li>
                            <li><a href="#">行业分析</a></li>
                            <li><a href="#">早班车</a></li>
                        </ul>
                    </div>
                    <!-- 左侧列表信息内容 -->
                    <div class="infoContent">
                        <ul>
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
                                                <div class="iconPic"><img src="../../images/smallLogo.png" alt=""></div>
                                                <i>链氪区块律动团</i>
                                            </a>
                                        </div>
                                        <div class="icons">
                                            <div class="times">
                                                <p></p>
                                                <i>30分钟前</i>
                                            </div>
                                            <div class="eye">
                                                <p></p>
                                                <i>4.5万</i>
                                            </div>
                                            <div class="infoborder">
                                                <p></p>
                                                <i>10</i>
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
                                                <div class="iconPic"><img src="../../images/smallLogo.png" alt=""></div>
                                                <i>链氪区块律动团</i>
                                            </a>
                                        </div>
                                        <div class="icons">
                                            <div class="times">
                                                <p></p>
                                                <i>30分钟前</i>
                                            </div>
                                            <div class="eye">
                                                <p></p>
                                                <i>4.5万</i>
                                            </div>
                                            <div class="infoborder">
                                                <p></p>
                                                <i>10</i>
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
                                                <div class="iconPic"><img src="../../images/smallLogo.png" alt=""></div>
                                                <i>链氪区块律动团</i>
                                            </a>
                                        </div>
                                        <div class="icons">
                                            <div class="times">
                                                <p></p>
                                                <i>30分钟前</i>
                                            </div>
                                            <div class="eye">
                                                <p></p>
                                                <i>4.5万</i>
                                            </div>
                                            <div class="infoborder">
                                                <p></p>
                                                <i>10</i>
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
                                                <div class="iconPic"><img src="../../images/smallLogo.png" alt=""></div>
                                                <i>链氪区块律动团</i>
                                            </a>
                                        </div>
                                        <div class="icons">
                                            <div class="times">
                                                <p></p>
                                                <i>30分钟前</i>
                                            </div>
                                            <div class="eye">
                                                <p></p>
                                                <i>4.5万</i>
                                            </div>
                                            <div class="infoborder">
                                                <p></p>
                                                <i>10</i>
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
                                                <div class="iconPic"><img src="../../images/smallLogo.png" alt=""></div>
                                                <i>链氪区块律动团</i>
                                            </a>
                                        </div>
                                        <div class="icons">
                                            <div class="times">
                                                <p></p>
                                                <i>30分钟前</i>
                                            </div>
                                            <div class="eye">
                                                <p></p>
                                                <i>4.5万</i>
                                            </div>
                                            <div class="infoborder">
                                                <p></p>
                                                <i>10</i>
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
                                                <div class="iconPic"><img src="../../images/smallLogo.png" alt=""></div>
                                                <i>链氪区块律动团</i>
                                            </a>
                                        </div>
                                        <div class="icons">
                                            <div class="times">
                                                <p></p>
                                                <i>30分钟前</i>
                                            </div>
                                            <div class="eye">
                                                <p></p>
                                                <i>4.5万</i>
                                            </div>
                                            <div class="infoborder">
                                                <p></p>
                                                <i>10</i>
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
                                                <div class="iconPic"><img src="../../images/smallLogo.png" alt=""></div>
                                                <i>链氪区块律动团</i>
                                            </a>
                                        </div>
                                        <div class="icons">
                                            <div class="times">
                                                <p></p>
                                                <i>30分钟前</i>
                                            </div>
                                            <div class="eye">
                                                <p></p>
                                                <i>4.5万</i>
                                            </div>
                                            <div class="infoborder">
                                                <p></p>
                                                <i>10</i>
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
                                                <div class="iconPic"><img src="../../images/smallLogo.png" alt=""></div>
                                                <i>链氪区块律动团</i>
                                            </a>
                                        </div>
                                        <div class="icons">
                                            <div class="times">
                                                <p></p>
                                                <i>30分钟前</i>
                                            </div>
                                            <div class="eye">
                                                <p></p>
                                                <i>4.5万</i>
                                            </div>
                                            <div class="infoborder">
                                                <p></p>
                                                <i>10</i>
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
                                                <div class="iconPic"><img src="../../images/smallLogo.png" alt=""></div>
                                                <i>链氪区块律动团</i>
                                            </a>
                                        </div>
                                        <div class="icons">
                                            <div class="times">
                                                <p></p>
                                                <i>30分钟前</i>
                                            </div>
                                            <div class="eye">
                                                <p></p>
                                                <i>4.5万</i>
                                            </div>
                                            <div class="infoborder">
                                                <p></p>
                                                <i>10</i>
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
                                                <div class="iconPic"><img src="../../images/smallLogo.png" alt=""></div>
                                                <i>链氪区块律动团</i>
                                            </a>
                                        </div>
                                        <div class="icons">
                                            <div class="times">
                                                <p></p>
                                                <i>30分钟前</i>
                                            </div>
                                            <div class="eye">
                                                <p></p>
                                                <i>4.5万</i>
                                            </div>
                                            <div class="infoborder">
                                                <p></p>
                                                <i>10</i>
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
                                                <div class="iconPic"><img src="../../images/smallLogo.png" alt=""></div>
                                                <i>链氪区块律动团</i>
                                            </a>
                                        </div>
                                        <div class="icons">
                                            <div class="times">
                                                <p></p>
                                                <i>30分钟前</i>
                                            </div>
                                            <div class="eye">
                                                <p></p>
                                                <i>4.5万</i>
                                            </div>
                                            <div class="infoborder">
                                                <p></p>
                                                <i>10</i>
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
                                                <div class="iconPic"><img src="../../images/smallLogo.png" alt=""></div>
                                                <i>链氪区块律动团</i>
                                            </a>
                                        </div>
                                        <div class="icons">
                                            <div class="times">
                                                <p></p>
                                                <i>30分钟前</i>
                                            </div>
                                            <div class="eye">
                                                <p></p>
                                                <i>4.5万</i>
                                            </div>
                                            <div class="infoborder">
                                                <p></p>
                                                <i>10</i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
    
                    <!-- 左侧浏览更多 -->
                    <div class="moveBtn">
                        <a href="#">浏览更多</a>
                    </div>
                </div>
            </div>
            <!-- 右侧边栏 -->
            <div class="rightSide">
                <!-- 平台公告 -->
                <div class="notice">
                    <div class="title">
                        <p>平台公告</p>
                        <a href="#"></a>
                    </div>
                    <div class="noticeList">
                        <ul>
                            <li>
                                <p class="box"></p> <a href="#">Preventive dentistry</a>
                            </li>
                            <li>
                                <p class="box"></p> <a href="#">Dental surgery</a>
                            </li>
                            <li>
                                <p class="box"></p> <a href="#">Prosthetics</a>
                            </li>
                        </ul>
                    </div>
                </div>
    
                <!-- 涨跌幅榜 -->
                <div class="announcement">
                    <div class="announcementTitle">
                        <div><a href="#" class="rise actvie">涨幅榜</a></div>
                        <div><a href="#" class="fall">跌幅榜</a></div>
                        <a href="#" class="next"></a>
                    </div>
                    <div class="announcementTime">
                        <a href="#" class="active">一小时</a>
                        <a href="#">24小时</a>
                        <a href="#">一周</a>
                    </div>
                    <div class="variety">
                        <table class="varietyTab" border="0" cellspacing="0" cellpadding="0">
                            <tr class="headTab">
                                <th align="left">#</th>
                                <th align="left">币种</th>
                                <th align="left">￥最新价格</th>
                                <th align="left">涨幅</th>
                            </tr>
                            <tr class="bodyTab">
                                <td align="left">
                                    <div class="varietyIndex">1</div>
                                </td>
                                <td align="left">
                                    <div class="currency">BNB/币安币</div>
                                </td>
                                <td align="left">
                                    <div class="price">1,890.79</div>
                                </td>
                                <td align="left" style="padding-left:0px;">
                                    <div class="riseNum">+2.43%</div>
                                </td>
                            </tr>
                            <tr class="bodyTab">
                                <td align="left">
                                    <div class="varietyIndex">2</div>
                                </td>
                                <td align="left">
                                    <div class="currency">BNB/币安币</div>
                                </td>
                                <td align="left">
                                    <div class="price">1,890.79</div>
                                </td>
                                <td align="left" style="padding-left:0px;">
                                    <div class="riseNum">+2.43%</div>
                                </td>
                            </tr>
                            <tr class="bodyTab">
                                <td align="left">
                                    <div class="varietyIndex">3</div>
                                </td>
                                <td align="left">
                                    <div class="currency">BNB/币安币</div>
                                </td>
                                <td align="left">
                                    <div class="price">1,890.79</div>
                                </td>
                                <td align="left" style="padding-left:0px;">
                                    <div class="riseNum">+2.43%</div>
                                </td>
                            </tr>
                            <tr class="bodyTab">
                                <td align="left">
                                    <div class="varietyIndex">4</div>
                                </td>
                                <td align="left">
                                    <div class="currency">BNB/币安币</div>
                                </td>
                                <td align="left">
                                    <div class="price">1,890.79</div>
                                </td>
                                <td align="left" style="padding-left:0px;">
                                    <div class="riseNum">+2.43%</div>
                                </td>
                            </tr>
                            <tr class="bodyTab">
                                <td align="left">
                                    <div class="varietyIndex">5</div>
                                </td>
                                <td align="left">
                                    <div class="currency">BNB/币安币</div>
                                </td>
                                <td align="left">
                                    <div class="price">1,890.79</div>
                                </td>
                                <td align="left" style="padding-left:0px;">
                                    <div class="riseNum">+2.43%</div>
                                </td>
                            </tr>
                            <tr class="bodyTab">
                                <td align="left">
                                    <div class="varietyIndex">6</div>
                                </td>
                                <td align="left">
                                    <div class="currency">BNB/币安币</div>
                                </td>
                                <td align="left">
                                    <div class="price">1,890.79</div>
                                </td>
                                <td align="left" style="padding-left:0px;">
                                    <div class="riseNum">+2.43%</div>
                                </td>
                            </tr>
                            <tr class="bodyTab">
                                <td align="left">
                                    <div class="varietyIndex">7</div>
                                </td>
                                <td align="left">
                                    <div class="currency">BNB/币安币</div>
                                </td>
                                <td align="left">
                                    <div class="price">1,890.79</div>
                                </td>
                                <td align="left" style="padding-left:0px;">
                                    <div class="riseNum">+2.43%</div>
                                </td>
                            </tr>
                            <tr class="bodyTab">
                                <td align="left">
                                    <div class="varietyIndex">8</div>
                                </td>
                                <td align="left">
                                    <div class="currency">BNB/币安币</div>
                                </td>
                                <td align="left">
                                    <div class="price">1,890.79</div>
                                </td>
                                <td align="left" style="padding-left:0px;">
                                    <div class="riseNum">+2.43%</div>
                                </td>
                            </tr>
                            <tr class="bodyTab">
                                <td align="left">
                                    <div class="varietyIndex">9</div>
                                </td>
                                <td align="left">
                                    <div class="currency">BNB/币安币</div>
                                </td>
                                <td align="left">
                                    <div class="price">1,890.79</div>
                                </td>
                                <td align="left" style="padding-left:0px;">
                                    <div class="riseNum">+2.43%</div>
                                </td>
                            </tr>
                            <tr class="bodyTab">
                                <td align="left">
                                    <div class="varietyIndex">10</div>
                                </td>
                                <td align="left">
                                    <div class="currency">BNB/币安币</div>
                                </td>
                                <td align="left">
                                    <div class="price">1,890.79</div>
                                </td>
                                <td align="left" style="padding-left:0px;">
                                    <div class="riseNum">+2.43%</div>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
    
                <!-- 右侧边栏图片 -->
                <div class="rightSidePics">
                    <a href="#"><img src="../../images/rightSidePics01.png" alt=""></a>
                    <a href="#"><img src="../../images/rightSidePics02.png" alt=""></a>
                </div>
    
                <!-- 右侧边栏链氪快讯 -->
                <div class="newsFlash">
                    <div class="newsTitle">
                        <div>
                            <p class="newsIcon"></p>
                            <p>链氪快讯</p>
                        </div>
                        <a href="#"></a>
                    </div>
    
                    <!-- 右侧边栏链氪快讯信息 -->
                    <div class="newsInfo">
                        <ul>
                            <li>
                                <i class="quan"></i>
                                <p>1小时前</p>
                                <div class="newsContent">
                                    <a href="#">诺奖得主Scholes：区块链技术能极大减少交易结算成本</a>
                                    <p>5月24日，诺贝尔经济学奖获得者Myron Samuel
                                        Scholes在上海交通大学上海高级金融学院主办的SAIF-CAFR名家讲堂上表示，区块链技术能极大减少交易结算成本，但是比特币没有持有的价值，更不要...</p>
                                </div>
                            </li>
                            <li>
                                <i class="quan"></i>
                                <p>1小时前</p>
                                <div class="newsContent">
                                    <a href="#">诺奖得主Scholes：区块链技术能极大减少交易结算成本</a>
                                    <p>5月24日，诺贝尔经济学奖获得者Myron Samuel
                                        Scholes在上海交通大学上海高级金融学院主办的SAIF-CAFR名家讲堂上表示，区块链技术能极大减少交易结算成本，但是比特币没有持有的价值，更不要...</p>
                                </div>
                            </li>
                            <li>
                                <i class="quan"></i>
                                <p>1小时前</p>
                                <div class="newsContent">
                                    <a href="#">诺奖得主Scholes：区块链技术能极大减少交易结算成本</a>
                                    <p>5月24日，诺贝尔经济学奖获得者Myron Samuel
                                        Scholes在上海交通大学上海高级金融学院主办的SAIF-CAFR名家讲堂上表示，区块链技术能极大减少交易结算成本，但是比特币没有持有的价值，更不要...</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
    
                <!-- 右侧边栏热门作家 -->
                <div class="hotWriter">
                    <div class="hotWriterTitle">
                        <p>热门作家</p>
                        <a href="#"></a>
                    </div>
                    <!-- 轮播图 -->
                    <div class="hotWriterswiper">
    
                    </div>
                    <!-- 公众号信息 -->
                    <div class="official">
                        每天第一手区块链资讯速递、数字货币市场分析，更多内容请关注微信公众号（Hashpai）
                    </div>
    
                    <!-- 查看文章 -->
                    <div class="checkArticle">
                        <div class="icon">
                            <img src="../../images/headicon.png" alt="">
                        </div>
                        <div class="checkArticleView">
                            <p>Berg Devien</p>
                            <p class="view">文章总浏览量 1578594</p>
                        </div>
                        <a href="#" class="article">查看文章</a>
                    </div>
                </div>
    
                <!-- 右侧栏精选活动 -->
    
                <div class="activity">
                    <div class="activityTitle">
                        <p>精选活动</p>
                        <router-link to="/activityList"></router-link>
                    </div>
                    <!-- 时间 -->
                    <div class="activityTime">
                        <ul>
                            <li>
                                <div :class="activeClass == 1 ? 'active':''"  @click="activeClass = 1" >06月18日</div>
                                <p :class="activeClass == 1 ? 'active':''" >
                                    <i class="line"></i>
                                </p>
                            </li>
                            <li>
                                <div  :class="activeClass == 2 ? 'active':''"  @click="activeClass = 2" >07月23日</div>
                                <p :class="activeClass == 2 ? 'active':''" >
                                    <i class="line"></i>
                                </p>
                            </li>
                            <li>
                                <div :class="activeClass == 3 ? 'active':''"  @click="activeClass = 3">08月10日</div>
                                <p :class="activeClass == 3 ? 'active':''">
                                    <i class="line"></i>
                                </p>
                            </li>
                            <li>
                                <div :class="activeClass == 4 ? 'active':''"  @click="activeClass = 4">09月01日</div>
                                <p :class="activeClass == 4 ? 'active':''"> 
                                    <i class="line"></i>
                                </p>
                            </li>
                            <li>
                                <div :class="activeClass == 5 ? 'active':''"  @click="activeClass = 5">10月01日</div>
                                <p :class="activeClass == 5 ? 'active':''">
                                    <i class="line"></i>
                                </p>
                            </li>
                        </ul>
                    </div>
    
                    <!-- 轮播图 -->
                    <div class="activitySwiper">
    
                    </div>
                </div>
    
                <!--   右侧栏查看详情  -->
                <div class="particulars">
                    <a href="#"><img src="../../images/particulars.png" alt=""></a>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
    
    .el-carousel__item img {
        width: 100%;
        height: 100%;
    }
    
    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }
    
    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
</style>

<script>
    export default {
        data(){
            return{
                activeClass:1
            }
        },
        mounted(){

        }


    }
</script>

