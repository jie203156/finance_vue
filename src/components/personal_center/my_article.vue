<template>
    <div class="my_article w">
        <!-- 头部 -->
        <div class="nav">
            <div class="btns">
                <button class="active">全部</button>
                <button >已发布</button>
                <button >审核中</button>
                <button >未通过</button>
                <button >草稿箱</button>
            </div>
            <!-- 搜索 -->
            <div class="search_box">
                <!-- 搜索部分 -->
                <div class="search">
                    <input type="text" placeholder="已发布101篇文章，输入关键词搜索">
                    <div class="bigGlass"><a href="#"></a></div>
                </div>
            </div>
        </div>

        <!-- 列表内容 -->
        <div class="content">
            <div class="content_left">
                <ul class="content_box">
                    <li>
                        <!-- 头部 -->
                        <div class="title_box">
                            <a href="#"><p class="title">斯坦福大学物理教授张首晟：In Math We Trust | 清华x-lab公开课</p></a>
                            <div class="btns">
                                <button @click="delShow =1">删除</button>
                                <button style="display:none">编辑</button>
                                <button class="btnG">已发布</button>
                            </div>
                        </div>
                        <div class="icon_box">
                            <div class="icon">
                                <div class="time">
                                    <i></i>2018年04月28日
                                </div>
                                <div class="eye">
                                    <i></i>4.5万
                                </div>
                                <div class="infoborder">
                                    <i></i>120
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <!-- 头部 -->
                        <div class="title_box">
                            <a href="#"><p class="title">斯坦福大学物理教授张首晟：In Math We Trust | 清华x-lab公开课</p></a>
                            <div class="btns">
                                <button @click="delShow =2">撤销</button>
                                <button style="display:none">编辑</button>
                                <button style="display:none" class="btnG">已发布</button>
                                <button class="btnY">审核中</button>
                            </div>
                        </div>
                        <div class="icon_box">
                            <div class="icon">
                                <div class="time">
                                    <i></i>2018年04月28日
                                </div>
                                <div class="eye">
                                    <i></i>4.5万
                                </div>
                                <div class="infoborder">
                                    <i></i>120
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <!-- 头部 -->
                        <div class="title_box">
                            <a href="#"><p class="title">斯坦福大学物理教授张首晟：In Math We Trust | 清华x-lab公开课</p></a>
                            <div class="btns">
                                <button @click="delShow =1">删除</button>
                                <button >编辑</button>
                                <button class="btnR">未通过</button>
                            </div>
                        </div>
                        <div class="icon_box">
                            <div class="icon">
                                <div class="time">
                                    <i></i>2018年04月28日
                                </div>
                                <div class="eye">
                                    <i></i>4.5万
                                </div>
                                <div class="infoborder">
                                    <i></i>120
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <!-- 头部 -->
                        <div class="title_box">
                            <a href="#"><p class="title">斯坦福大学物理教授张首晟：In Math We Trust | 清华x-lab公开课</p></a>
                            <div class="btns">
                                <button @click="delShow =1">删除</button>
                                <button >编辑</button>
                                <button class="btnH">草稿箱</button>
                            </div>
                        </div>
                        <div class="icon_box">
                            <div class="icon">
                                <div class="time">
                                    <i></i>2018年04月28日
                                </div>
                                <div class="eye">
                                    <i></i>4.5万
                                </div>
                                <div class="infoborder">
                                    <i></i>120
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>

                
                <!-- 分页 -->
                <div class="projectListPage">
                    <Page :total="36" page-size="9" prev-text="上一页" next-text="下一页" />
                </div>

                <!-- 删除弹窗 -->
                <div class="mask" v-if="delShow == 1">
                    <div class="delWins">
                        <p class="txt">您确定要删除文章?</p>
                        <p class="txt">删除后将不可恢复!</p>
                        <div class="btn">
                            <button class="delBtn">删除</button>
                            <button class="keepBtn" @click="delShow = 0">我要保留</button>
                        </div>
                    </div>
                </div>
                <!-- 撤回弹窗 -->
                <div class="mask" v-if="delShow == 2">
                    <div class="packWins">
                        <p class="txt">您确定要删除文章?</p>
                        <p class="txt">删除后将不可恢复!</p>
                        <div class="btn">
                            <button class="delBtn">删除</button>
                            <button class="keepBtn" @click="delShow = 0">我要保留</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="content_right">
                <div class="title">用户推荐</div>
                <div class="icon_box">
                    <ul>
                        <li>
                            <a href="#">
                                <div class="icon"><img src="../../images/master01.png" alt=""></div>
                                <p class="txt">鲁鲁不...</p>
                            </a>
                            
                        </li>
                        <li>
                            <a href="#">
                                <div class="icon"><img src="../../images/master01.png" alt=""></div>
                                <p class="txt">鲁鲁不...</p>
                            </a>
                            
                        </li>
                        <li>
                            <a href="#">
                                <div class="icon"><img src="../../images/master01.png" alt=""></div>
                                <p class="txt">鲁鲁不...</p>
                            </a>
                            
                        </li>
                        <li>
                            <a href="#">
                                <div class="icon"><img src="../../images/master01.png" alt=""></div>
                                <p class="txt">鲁鲁不...</p>
                            </a>
                            
                        </li>
                        <li>
                            <a href="#">
                                <div class="icon"><img src="../../images/master01.png" alt=""></div>
                                <p class="txt">鲁鲁不...</p>
                            </a>
                            
                        </li>
                        <li>
                            <a href="#">
                                <div class="icon"><img src="../../images/master01.png" alt=""></div>
                                <p class="txt">鲁鲁不...</p>
                            </a>
                            
                        </li>
                        <li>
                            <a href="#">
                                <div class="icon"><img src="../../images/master01.png" alt=""></div>
                                <p class="txt">鲁鲁不...</p>
                            </a>
                            
                        </li>
                        <li>
                            <a href="#">
                                <div class="icon"><img src="../../images/master01.png" alt=""></div>
                                <p class="txt">鲁鲁不...</p>
                            </a>
                            
                        </li>
                        <li>
                            <a href="#">
                                <div class="icon"><img src="../../images/master01.png" alt=""></div>
                                <p class="txt">鲁鲁不...</p>
                            </a>
                            
                        </li>
                    </ul>
                </div>
                <button >更多用户</button>
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
               delShow : 0,
            }
        },
        methods:{

        }
    }
</script>
