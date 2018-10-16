<template>
    <div class="concern">
        <div class="topTitle w">
            <div class="btn">
                <p>你关注了 1688 位</p>
                <button :class="{active:isShow}" @click="isShow = true">全部</button>
                <button :class="{active:!isShow}" @click="isShow = false">互相关注</button>
            </div>

            <!-- 搜索 -->
            <div class="search_box">
                <!-- 搜索部分 -->
                <div class="search">
                    <input type="text" placeholder="输入关键词搜索">
                    <div class="bigGlass"><a href="#"></a></div>
                </div>
            </div>
        </div>

        <div class="content w">
            <ul class="concernList">
                <li>
                    <div class="content_top">
                        <!-- 头像 -->
                        <a href="#" class="icon"><img src="../../images/master01.png" alt=""></a>
                        <!-- 用户名 -->
                        <div class="title_box">
                            <a href="#" class="title">你家区块链</a>
                            <p class="txt">广东省广州市</p>
                        </div>

                        <!-- 按钮 -->
                        <button class="concernBtn">互相关注</button>
                    </div>

                    <div class="content_bottom">
                        <div class="nums"><i>101</i>文章数</div>
                        <p class="line"></p>
                        <div class="nums"><i>4.5</i>万浏览量</div>
                        <p class="line"></p>
                        <div class="nums"><i>1688</i>粉丝</div>
                    </div>
                </li>
                <li>
                    <div class="content_top">
                        <!-- 头像 -->
                        <a href="#" class="icon"><img src="../../images/master01.png" alt=""></a>
                        <!-- 用户名 -->
                        <div class="title_box">
                            <a href="#" class="title">你家区块链</a>
                            <p class="txt">广东省广州市</p>
                        </div>

                        <!-- 按钮 -->
                        <button class="concernBtn">互相关注</button>
                    </div>

                    <div class="content_bottom">
                        <div class="nums"><i>101</i>文章数</div>
                        <p class="line"></p>
                        <div class="nums"><i>4.5</i>万浏览量</div>
                        <p class="line"></p>
                        <div class="nums"><i>1688</i>粉丝</div>
                    </div>
                </li>
                <li>
                    <div class="content_top">
                        <!-- 头像 -->
                        <a href="#" class="icon"><img src="../../images/master01.png" alt=""></a>
                        <!-- 用户名 -->
                        <div class="title_box">
                            <a href="#" class="title">你家区块链</a>
                            <p class="txt">广东省广州市</p>
                        </div>

                        <!-- 按钮 -->
                        <button class="concernBtn">互相关注</button>
                    </div>

                    <div class="content_bottom">
                        <div class="nums"><i>101</i>文章数</div>
                        <p class="line"></p>
                        <div class="nums"><i>4.5</i>万浏览量</div>
                        <p class="line"></p>
                        <div class="nums"><i>1688</i>粉丝</div>
                    </div>
                </li>
                <li>
                    <div class="content_top">
                        <!-- 头像 -->
                        <a href="#" class="icon"><img src="../../images/master01.png" alt=""></a>
                        <!-- 用户名 -->
                        <div class="title_box">
                            <a href="#" class="title">你家区块链</a>
                            <p class="txt">广东省广州市</p>
                        </div>

                        <!-- 按钮 -->
                        <button class="concernBtn">已关注</button>
                    </div>

                    <div class="content_bottom">
                        <div class="nums"><i>101</i>文章数</div>
                        <p class="line"></p>
                        <div class="nums"><i>4.5</i>万浏览量</div>
                        <p class="line"></p>
                        <div class="nums"><i>1688</i>粉丝</div>
                    </div>
                </li>
                <li>
                    <div class="content_top">
                        <!-- 头像 -->
                        <a href="#" class="icon"><img src="../../images/master01.png" alt=""></a>
                        <!-- 用户名 -->
                        <div class="title_box">
                            <a href="#" class="title">你家区块链</a>
                            <p class="txt">广东省广州市</p>
                        </div>

                        <!-- 按钮 -->
                        <button class="concernBtn">已关注</button>
                    </div>

                    <div class="content_bottom">
                        <div class="nums"><i>101</i>文章数</div>
                        <p class="line"></p>
                        <div class="nums"><i>4.5</i>万浏览量</div>
                        <p class="line"></p>
                        <div class="nums"><i>1688</i>粉丝</div>
                    </div>
                </li>
                <li>
                    <div class="content_top">
                        <!-- 头像 -->
                        <a href="#" class="icon"><img src="../../images/master01.png" alt=""></a>
                        <!-- 用户名 -->
                        <div class="title_box">
                            <a href="#" class="title">你家区块链</a>
                            <p class="txt">广东省广州市</p>
                        </div>

                        <!-- 按钮 -->
                        <button class="concernBtn">已关注</button>
                    </div>

                    <div class="content_bottom">
                        <div class="nums"><i>101</i>文章数</div>
                        <p class="line"></p>
                        <div class="nums"><i>4.5</i>万浏览量</div>
                        <p class="line"></p>
                        <div class="nums"><i>1688</i>粉丝</div>
                    </div>
                </li>
                <li>
                    <div class="content_top">
                        <!-- 头像 -->
                        <a href="#" class="icon"><img src="../../images/master01.png" alt=""></a>
                        <!-- 用户名 -->
                        <div class="title_box">
                            <a href="#" class="title">你家区块链</a>
                            <p class="txt">广东省广州市</p>
                        </div>

                        <!-- 按钮 -->
                        <button class="concernBtn">互相关注</button>
                    </div>

                    <div class="content_bottom">
                        <div class="nums"><i>101</i>文章数</div>
                        <p class="line"></p>
                        <div class="nums"><i>4.5</i>万浏览量</div>
                        <p class="line"></p>
                        <div class="nums"><i>1688</i>粉丝</div>
                    </div>
                </li>
                <li>
                    <div class="content_top">
                        <!-- 头像 -->
                        <a href="#" class="icon"><img src="../../images/master01.png" alt=""></a>
                        <!-- 用户名 -->
                        <div class="title_box">
                            <a href="#" class="title">你家区块链</a>
                            <p class="txt">广东省广州市</p>
                        </div>

                        <!-- 按钮 -->
                        <button class="concernBtn">互相关注</button>
                    </div>

                    <div class="content_bottom">
                        <div class="nums"><i>101</i>文章数</div>
                        <p class="line"></p>
                        <div class="nums"><i>4.5</i>万浏览量</div>
                        <p class="line"></p>
                        <div class="nums"><i>1688</i>粉丝</div>
                    </div>
                </li>
                <li>
                    <div class="content_top">
                        <!-- 头像 -->
                        <a href="#" class="icon"><img src="../../images/master01.png" alt=""></a>
                        <!-- 用户名 -->
                        <div class="title_box">
                            <a href="#" class="title">你家区块链</a>
                            <p class="txt">广东省广州市</p>
                        </div>

                        <!-- 按钮 -->
                        <button class="concernBtn">互相关注</button>
                    </div>

                    <div class="content_bottom">
                        <div class="nums"><i>101</i>文章数</div>
                        <p class="line"></p>
                        <div class="nums"><i>4.5</i>万浏览量</div>
                        <p class="line"></p>
                        <div class="nums"><i>1688</i>粉丝</div>
                    </div>
                </li>
                <li>
                    <div class="content_top">
                        <!-- 头像 -->
                        <a href="#" class="icon"><img src="../../images/master01.png" alt=""></a>
                        <!-- 用户名 -->
                        <div class="title_box">
                            <a href="#" class="title">你家区块链</a>
                            <p class="txt">广东省广州市</p>
                        </div>

                        <!-- 按钮 -->
                        <button class="concernBtn">互相关注</button>
                    </div>

                    <div class="content_bottom">
                        <div class="nums"><i>101</i>文章数</div>
                        <p class="line"></p>
                        <div class="nums"><i>4.5</i>万浏览量</div>
                        <p class="line"></p>
                        <div class="nums"><i>1688</i>粉丝</div>
                    </div>
                </li>
                <li>
                    <div class="content_top">
                        <!-- 头像 -->
                        <a href="#" class="icon"><img src="../../images/master01.png" alt=""></a>
                        <!-- 用户名 -->
                        <div class="title_box">
                            <a href="#" class="title">你家区块链</a>
                            <p class="txt">广东省广州市</p>
                        </div>

                        <!-- 按钮 -->
                        <button class="concernBtn">已关注</button>
                    </div>

                    <div class="content_bottom">
                        <div class="nums"><i>101</i>文章数</div>
                        <p class="line"></p>
                        <div class="nums"><i>4.5</i>万浏览量</div>
                        <p class="line"></p>
                        <div class="nums"><i>1688</i>粉丝</div>
                    </div>
                </li>
                <li>
                    <div class="content_top">
                        <!-- 头像 -->
                        <a href="#" class="icon"><img src="../../images/master01.png" alt=""></a>
                        <!-- 用户名 -->
                        <div class="title_box">
                            <a href="#" class="title">你家区块链</a>
                            <p class="txt">广东省广州市</p>
                        </div>

                        <!-- 按钮 -->
                        <button class="concernBtn">已关注</button>
                    </div>

                    <div class="content_bottom">
                        <div class="nums"><i>101</i>文章数</div>
                        <p class="line"></p>
                        <div class="nums"><i>4.5</i>万浏览量</div>
                        <p class="line"></p>
                        <div class="nums"><i>1688</i>粉丝</div>
                    </div>
                </li>
                <li>
                    <div class="content_top">
                        <!-- 头像 -->
                        <a href="#" class="icon"><img src="../../images/master01.png" alt=""></a>
                        <!-- 用户名 -->
                        <div class="title_box">
                            <a href="#" class="title">你家区块链</a>
                            <p class="txt">广东省广州市</p>
                        </div>

                        <!-- 按钮 -->
                        <button class="concernBtn">互相关注</button>
                    </div>

                    <div class="content_bottom">
                        <div class="nums"><i>101</i>文章数</div>
                        <p class="line"></p>
                        <div class="nums"><i>4.5</i>万浏览量</div>
                        <p class="line"></p>
                        <div class="nums"><i>1688</i>粉丝</div>
                    </div>
                </li>
                <li>
                    <div class="content_top">
                        <!-- 头像 -->
                        <a href="#" class="icon"><img src="../../images/master01.png" alt=""></a>
                        <!-- 用户名 -->
                        <div class="title_box">
                            <a href="#" class="title">你家区块链</a>
                            <p class="txt">广东省广州市</p>
                        </div>

                        <!-- 按钮 -->
                        <button class="concernBtn">互相关注</button>
                    </div>

                    <div class="content_bottom">
                        <div class="nums"><i>101</i>文章数</div>
                        <p class="line"></p>
                        <div class="nums"><i>4.5</i>万浏览量</div>
                        <p class="line"></p>
                        <div class="nums"><i>1688</i>粉丝</div>
                    </div>
                </li>
                <li>
                    <div class="content_top">
                        <!-- 头像 -->
                        <a href="#" class="icon"><img src="../../images/master01.png" alt=""></a>
                        <!-- 用户名 -->
                        <div class="title_box">
                            <a href="#" class="title">你家区块链</a>
                            <p class="txt">广东省广州市</p>
                        </div>

                        <!-- 按钮 -->
                        <button class="concernBtn">互相关注</button>
                    </div>

                    <div class="content_bottom">
                        <div class="nums"><i>101</i>文章数</div>
                        <p class="line"></p>
                        <div class="nums"><i>4.5</i>万浏览量</div>
                        <p class="line"></p>
                        <div class="nums"><i>1688</i>粉丝</div>
                    </div>
                </li>
            </ul>

                <!-- 分页 -->
            <div class="projectListPage">
                <Page :total="36" page-size="9" prev-text="上一页" next-text="下一页" />
            </div>
        </div>

    </div>
</template>
<script>
    import {Page} from 'iview'
    export default {
        components:{Page},
        data(){
            return {
                isShow:true,
            }
        }
    }
</script>
