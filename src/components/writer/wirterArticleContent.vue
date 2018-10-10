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
                <p @click="writerArticleBtn" class="moreArticlesTitleTxt">阅读你家区块链更多文章>></p>
            </div>
        </div>

        <!-- 作家文章内容 -->
        <div class="writerArticleContent w">

            <!-- 作家文章内容左侧边栏 -->
            <div class="writerArticleContent_Lbox">
                <div class="title">
                    EOS主网上线只是开始，如何运营决定未来
                </div>

                <!-- 小图标 -->
                <div class="contentIcons">
                    <div class="contentIcon">
                        <div>
                            <i class="time"></i>32分钟前
                        </div>
                        <div>
                            <i class="eye"></i>45888
                        </div>
                        <div>
                            <i class="smile"></i>好感人数 120
                        </div>
                        <div>
                            标签 eos，v神
                        </div>
                        <div>
                            来源： hexi007
                        </div>

                    </div>
                    <a href="#" class="share"><i></i>分享</a>
                </div>

                <!-- 文章主体内容 -->
                <div class="main">
                    <p>相比前段时间大佬力挺，交易所争相竞选超级节点的利好，EOS近来的日子真是不太平。先是被360公司Vulcan（伏尔甘）团队爆出“百亿美金”的致命漏洞，日前又被V神侧击，这个6月，EOS不好过。</p>
                    <p>目前虽然EOS主网上线正在推进中，虽然EOS当前收到“百亿美金”致命漏洞，V神侧击的影响，但这并不影响EOS主网上线的节奏。事实上，当前EOS主网上线并不是EOS发展的重点，真正决定EOS未来的，是EOS主网上线之后的公链运营。</p>
                    <p class="bold">一、EOS“百亿美金”致命漏洞暴露团队安全短板</p>
                    <p>5月29日下午2点，360创始人周鸿祎发布微博称“360安全大脑发现的区块链漏洞，价值超过“百亿美金”，如果被非法利用，可以远程攻击控制和接管EOS上运行的所有节点，严重情况下，EOS乃至整个虚拟货币市场都会遭遇滑铁卢。”。</p>
                    <p>一直以来，EOS都试图以挑战者、革新者的角色对外传播。不管是每秒百万TPS的交易速度，还是区块链3.0的传播点，都让人对EOS充满了期待。</p>
                    <p>但这一次的“百亿美金”致命漏洞事件，一下将人们对EOS的期待拉回了现实。要知道，区块链除了去中心化、开放、自治外，不可篡改的安全也是备受人们信赖的地方。现在，EOS爆出的安全漏洞让人们认识到，区块链也不是那么的安全，起码不是绝对安全。</p>
                    <p>EOS爆出的安全漏洞，也让人们认识EOS开发在安全上的短板。EOS为了提高性能使用了C++语音进行开发，出发点是好的，但没有做好代码测试、审计就是团队问题了。虽然说代码测试的成本不低，但对募集金额超过40亿美金的EOS开发团队来说，这个成本几乎可以忽略不计。</p>
                    <p>这次EOS爆出的致命漏洞，从某种角度来说，可以看着是EOS开发团队不够认真，没有对代码进行可靠性安全测试导致的，或者说EOS团队做了代码测试，但是没有发现这个漏洞，如果是这样，那也说明EOS开发团队的代码测试、审计流程不够完善，需要继续改进。</p>
                    <p>EOS“百亿美金”漏洞暴露的，不仅仅是团队安全短板，还暴露EOS开发团队在管理上存在的不足。</p>
                    <p class="bold">二、V神侧击EOS，以太坊在行动</p>
                    <p>以太坊创始人V神近日在一次会议中表示，采用分片技术（Sharding）和Plasma等第二层扩展解决方案后，以太坊网络最终将能每秒处理100万次交易，并且有可能超过每秒1亿次。</p>
                    <p>V神解释说：“我认为第1层网络和第2层网络是互补的原因是，仔细观察相关数学数据，你会发现从第1层和第2层的改进中获得的可扩展性最终会相互叠加。如果拥有分片解决方案，那么以太坊的可伸缩性可以增加100倍，甚至更多。如果在可伸缩性解决方案的基础上利用Plasma，那么这意味着，不仅活动量增加100倍，入口数量和出口数量也可以增加100倍。</p>
                    <p>V神进一步指出，第1层和第2层解决方案之间的增效将使以太坊的可扩展性提高10000倍，从而使得网络每秒交易处理量达百万次，并支持大多数应用程序”。一直以来，交易速度是以太坊备受人们诟病的问题，如果真是这样，以太坊的交易速度将不再是其发展的桎梏，以太坊将变得足够强壮，比EOS还要强大。</p>
                </div>

                <!-- 好感度 -->
                <div class="likability">
                    <div class="pic"></div>
                    <p>已有<i>120</i>人好感</p>
                </div>

                <!-- 温馨提示 -->
                <div class="reminder">
                    <i>温馨提示：</i>本文经授权发布，不代表链向财经立场。如若转载请标注文章来源：<a href="#">链氪财经(www.lianke.com)</a>
                </div>

                <!-- 上一篇/下一篇 -->
                <div class="Parts">
                    <a href="#">上一篇： 柚子的升天之路还得暂缓，你昨晚减仓了吗？</a>
                    <a href="#">下一篇： 厉害了，区块链再次被传统主流媒体聚焦，将引领未来科技发展新风向</a>
                </div>

                <!-- 用户评论 -->
                <div class="writerArticleComment">
                    <div class="personComment">
                        <input type="text" placeholder="请发表您的评论......">
                        <button class="">评论</button>
                    </div>
                </div>

                <!-- 所有评论 -->
                <div class="writerArticleAllComment">
                    <p>全部评论 <i> 4</i></p>
                    <div class="viewComment">
                        <ul class="allviewComments">
                            <li>
                                <div class="personInfo">
                                    <div class="left">
                                        <img src="../../images/headicon.png" alt="">
                                        <p>猫笑你</p>
                                        <i>2018-05-30 16:37:16</i>
                                    </div>

                                    <div class="right">
                                        <button class="reply">回复</button>
                                        <button >赞 <i> 0</i></button>
                                    </div>
                                </div>
                                <div class="commentInfo">
                                    <p>古古怪怪古古怪怪古古怪怪</p>
                                </div>
                            </li>
                            <li>
                                <div class="personInfo">
                                    <div class="left">
                                        <img src="../../images/headicon.png" alt="">
                                        <p>猫笑你</p>
                                        <i>2018-05-30 16:37:16</i>
                                    </div>

                                    <div class="right">
                                        <button class="reply">回复</button>
                                        <button >赞 <i> 0</i></button>
                                    </div>
                                </div>
                                <div class="commentInfo">
                                    <p>古古怪怪古古怪怪古古怪怪</p>
                                </div>
                            </li>
                        </ul>
                        <div class="allCommentPage">
                            <Page :total="36" page-size="9" prev-text="上一页" next-text="下一页" />
                        </div>
                    </div>
                </div>
            </div>

            <!-- 作家文章内容右侧边栏 -->
            <div class="writerArticleContent_Rbox">

                <div class="hotArticle"></div>
            </div>
        </div>
    </div>
</template>
<script>
    import {Page} from 'iview'
    export default {
        components:{Page},
        data(){
            return{

            }
        },
        methods:{
            writerArticleBtn(){
                this.$router.push({path:'/writerArticle'})
            }
        }
    }
</script>
