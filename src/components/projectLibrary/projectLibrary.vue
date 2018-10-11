<template>
    <div class="projectLibrary">
        
        <!-- 优选项目 -->
        <div class="banner">
            <div class="optimizing w">
                <p class="title">优选项目</p>
                <!-- 轮播图 -->
                <div class="swiper_box">

                </div>
            </div>
        </div>

        <!-- 项目列表 -->
        <div class="projectList_box w">

            <!-- 列表头 -->
            <div class="projectListTitle">
                <!-- 筛选 -->
                <div class="screen_box">
                    <i class="txt">项目筛选：</i>
                    <button :class="screenIsshow == 1?'active':''" @click="screenIsshow = 1">全部</button>
                    <button :class="screenIsshow == 2?'active':''" @click="screenIsshow = 2">热门</button>
                    <button :class="screenIsshow == 3?'active':''" @click="screenIsshow = 3">精选</button>
                </div>
                <!-- 排序 -->
                <div class="sort_box">
                    <div class="sorts" @click="sortsShow = !sortsShow">
                        <i>评分</i>
                        <div class="icons">
                            <i class="top" :class="{topgary : !sortsShow}"></i>
                            <i class="bottom " :class="{bottomgary : sortsShow}"></i>
                        </div>
                    </div>
                    <div class="sorts" @click="timeShow = !timeShow">
                        <i>时间</i>
                        <div class="icons">
                            <i class="top" :class="{topgary : !timeShow}"></i>
                            <i class="bottom" :class="{bottomgary : timeShow}"></i>
                        </div>
                    </div>
                    <div class="sorts" @click="marketShow = !marketShow">
                        <i>市值</i>
                        <div class="icons">
                            <i class="top" :class="{topgary : !marketShow}"></i>
                            <i class="bottom" :class="{bottomgary : marketShow}"></i>
                        </div>
                    </div>
                </div>
                <!-- 搜索 -->
                <div class="search_box">
                                 <!-- 搜索部分 -->
                    <div class="search">
                        <input type="text" placeholder="搜索作家昵称">
                        <div class="bigGlass"><a href="#"></a></div>
                    </div>
                </div>
            </div>

            <!-- 列表内容 -->
            <div class="projectList_Content">
                <ul class="projectLists">
                    <li>

                        <div class="sanjiao green"></div>
                        <!-- 内容的左边 -->
                        <div class="contentL">
                            <a href="#"><img src="../../images/projectList_Contenticon.png" alt=""></a>
                        </div>

                        <!-- 内容的右边 -->
                        <div class="contentR">
                            
                            <div class="contentTitle">星云链nebulas</div>

                            <!-- 评分 -->
                            <div class="star_box">
                                <ul class="star ">
                                    <li class="starY"></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>

                                <div class="Num">{{num}}</div>
                            </div>

                            <p class="txt">Hi,欢迎来到彼得的思想空间，在这里彼得将和你共同探索区块链的本质和规律...</p>
                            <p class="time">2014年07月24日上线 / 香港</p>
                            <div class="twoBtn">
                                <p>浏览量：<i>2,250</i></p>
                                
                                <div class="btns">
                                    <button >白皮书</button>
                                    <button >查看</button>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>

                        <div class="sanjiao red"></div>
                        <!-- 内容的左边 -->
                        <div class="contentL">
                            <a href="#"><img src="../../images/projectList_Contenticon.png" alt=""></a>
                        </div>

                        <!-- 内容的右边 -->
                        <div class="contentR">
                            
                            <div class="contentTitle">星云链nebulas</div>

                            <!-- 评分 -->
                            <div class="star_box">
                                <ul class="star ">
                                    <li class="starY"></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>

                                <div class="Num">{{num}}</div>
                            </div>

                            <p class="txt">Hi,欢迎来到彼得的思想空间，在这里彼得将和你共同探索区块链的本质和规律...</p>
                            <p class="time">2014年07月24日上线 / 香港</p>
                            <div class="twoBtn">
                                <p>浏览量：<i>2,250</i></p>
                                
                                <div class="btns">
                                    <button >白皮书</button>
                                    <button >查看</button>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>

                        <div class="sanjiao green"></div>
                        <!-- 内容的左边 -->
                        <div class="contentL">
                            <a href="#"><img src="../../images/projectList_Contenticon.png" alt=""></a>
                        </div>

                        <!-- 内容的右边 -->
                        <div class="contentR">
                            
                            <div class="contentTitle">星云链nebulas</div>

                            <!-- 评分 -->
                            <div class="star_box">
                                <ul class="star ">
                                    <li class="starY"></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>

                                <div class="Num">{{num}}</div>
                            </div>

                            <p class="txt">Hi,欢迎来到彼得的思想空间，在这里彼得将和你共同探索区块链的本质和规律...</p>
                            <p class="time">2014年07月24日上线 / 香港</p>
                            <div class="twoBtn">
                                <p>浏览量：<i>2,250</i></p>
                                
                                <div class="btns">
                                    <button >白皮书</button>
                                    <button >查看</button>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>

                        <div class="sanjiao red"></div>
                        <!-- 内容的左边 -->
                        <div class="contentL">
                            <a href="#"><img src="../../images/projectList_Contenticon.png" alt=""></a>
                        </div>

                        <!-- 内容的右边 -->
                        <div class="contentR">
                            
                            <div class="contentTitle">星云链nebulas</div>

                            <!-- 评分 -->
                            <div class="star_box">
                                <ul class="star ">
                                    <li class="starY"></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>

                                <div class="Num">{{num}}</div>
                            </div>

                            <p class="txt">Hi,欢迎来到彼得的思想空间，在这里彼得将和你共同探索区块链的本质和规律...</p>
                            <p class="time">2014年07月24日上线 / 香港</p>
                            <div class="twoBtn">
                                <p>浏览量：<i>2,250</i></p>
                                
                                <div class="btns">
                                    <button >白皮书</button>
                                    <button >查看</button>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>

                        <div class="sanjiao green"></div>
                        <!-- 内容的左边 -->
                        <div class="contentL">
                            <a href="#"><img src="../../images/projectList_Contenticon.png" alt=""></a>
                        </div>

                        <!-- 内容的右边 -->
                        <div class="contentR">
                            
                            <div class="contentTitle">星云链nebulas</div>

                            <!-- 评分 -->
                            <div class="star_box">
                                <ul class="star ">
                                    <li class="starY"></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>

                                <div class="Num">{{num}}</div>
                            </div>

                            <p class="txt">Hi,欢迎来到彼得的思想空间，在这里彼得将和你共同探索区块链的本质和规律...</p>
                            <p class="time">2014年07月24日上线 / 香港</p>
                            <div class="twoBtn">
                                <p>浏览量：<i>2,250</i></p>
                                
                                <div class="btns">
                                    <button >白皮书</button>
                                    <button >查看</button>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>

                        <div class="sanjiao"></div>
                        <!-- 内容的左边 -->
                        <div class="contentL">
                            <a href="#"><img src="../../images/projectList_Contenticon.png" alt=""></a>
                        </div>

                        <!-- 内容的右边 -->
                        <div class="contentR">
                            
                            <div class="contentTitle">星云链nebulas</div>

                            <!-- 评分 -->
                            <div class="star_box">
                                <ul class="star ">
                                    <li class="starY"></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>

                                <div class="Num">{{num}}</div>
                            </div>

                            <p class="txt">Hi,欢迎来到彼得的思想空间，在这里彼得将和你共同探索区块链的本质和规律...</p>
                            <p class="time">2014年07月24日上线 / 香港</p>
                            <div class="twoBtn">
                                <p>浏览量：<i>2,250</i></p>
                                
                                <div class="btns">
                                    <button >白皮书</button>
                                    <button >查看</button>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>

                        <div class="sanjiao green"></div>
                        <!-- 内容的左边 -->
                        <div class="contentL">
                            <a href="#"><img src="../../images/projectList_Contenticon.png" alt=""></a>
                        </div>

                        <!-- 内容的右边 -->
                        <div class="contentR">
                            
                            <div class="contentTitle">星云链nebulas</div>

                            <!-- 评分 -->
                            <div class="star_box">
                                <ul class="star ">
                                    <li class="starY"></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>

                                <div class="Num">{{num}}</div>
                            </div>

                            <p class="txt">Hi,欢迎来到彼得的思想空间，在这里彼得将和你共同探索区块链的本质和规律...</p>
                            <p class="time">2014年07月24日上线 / 香港</p>
                            <div class="twoBtn">
                                <p>浏览量：<i>2,250</i></p>
                                
                                <div class="btns">
                                    <button >白皮书</button>
                                    <button >查看</button>
                                </div>
                            </div>
                        </div>
                    </li >
                    <li>

                        <div class="sanjiao"></div>
                        <!-- 内容的左边 -->
                        <div class="contentL">
                            <a href="#"><img src="../../images/projectList_Contenticon.png" alt=""></a>
                        </div>

                        <!-- 内容的右边 -->
                        <div class="contentR">
                            
                            <div class="contentTitle">星云链nebulas</div>

                            <!-- 评分 -->
                            <div class="star_box">
                                <ul class="star ">
                                    <li class="starY"></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>

                                <div class="Num">{{num}}</div>
                            </div>

                            <p class="txt">Hi,欢迎来到彼得的思想空间，在这里彼得将和你共同探索区块链的本质和规律...</p>
                            <p class="time">2014年07月24日上线 / 香港</p>
                            <div class="twoBtn">
                                <p>浏览量：<i>2,250</i></p>
                                
                                <div class="btns">
                                    <button >白皮书</button>
                                    <button >查看</button>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>

                        <div class="sanjiao red"></div>
                        <!-- 内容的左边 -->
                        <div class="contentL">
                            <a href="#"><img src="../../images/projectList_Contenticon.png" alt=""></a>
                        </div>

                        <!-- 内容的右边 -->
                        <div class="contentR">
                            
                            <div class="contentTitle">星云链nebulas</div>

                            <!-- 评分 -->
                            <div class="star_box">
                                <ul class="star ">
                                    <li class="starY"></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>

                                <div class="Num">{{num}}</div>
                            </div>

                            <p class="txt">Hi,欢迎来到彼得的思想空间，在这里彼得将和你共同探索区块链的本质和规律...</p>
                            <p class="time">2014年07月24日上线 / 香港</p>
                            <div class="twoBtn">
                                <p>浏览量：<i>2,250</i></p>
                                
                                <div class="btns">
                                    <button >白皮书</button>
                                    <button >查看</button>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>

                        <div class="sanjiao red"></div>
                        <!-- 内容的左边 -->
                        <div class="contentL">
                            <a href="#"><img src="../../images/projectList_Contenticon.png" alt=""></a>
                        </div>

                        <!-- 内容的右边 -->
                        <div class="contentR">
                            
                            <div class="contentTitle">星云链nebulas</div>

                            <!-- 评分 -->
                            <div class="star_box">
                                <ul class="star ">
                                    <li class="starY"></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>

                                <div class="Num">{{num}}</div>
                            </div>

                            <p class="txt">Hi,欢迎来到彼得的思想空间，在这里彼得将和你共同探索区块链的本质和规律...</p>
                            <p class="time">2014年07月24日上线 / 香港</p>
                            <div class="twoBtn">
                                <p>浏览量：<i>2,250</i></p>
                                
                                <div class="btns">
                                    <button >白皮书</button>
                                    <button >查看</button>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>

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
        data (){
            return{
                screenIsshow:1,
                sortsShow : true,
                timeShow : true,
                marketShow : true,
                num : 3.9,
            
            }
        }
    }
</script>
