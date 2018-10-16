<template>
    <div class="favorite_product">
        <div class="topTitle w">
            <div class="btn">
                <button >动态</button>
                <button @click="favorite_article">文章</button>
                <button >问答</button>
                <button >帖子</button>
                <button  @click="favorite_activity" >活动</button>
                <button  @click="favorite_product" class="active">项目</button>
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

            <!-- 列表内容 -->
            <div class="projectList_Content">
                <ul class="projectLists">
                    <li>

                        <div class="sanjiao red"></div>
                        <!-- 内容的左边 -->
                        <div class="contentL">
                            <router-link to="/projectIndex"><img src="../../../images/projectList_Contenticon.png" alt=""></router-link>
                        </div>

                        <!-- 内容的右边 -->
                        <div class="contentR">
                            
                            <div class="contentTitle">星云链nebulas</div>

                            <!-- 评分 -->
                            <div class="star_box">
                                <Rate disabled v-model="valueDisabled" />

                                <div class="Num">{{valueDisabled}}</div>
                            </div>

                            <p class="txt">Hi,欢迎来到彼得的思想空间，在这里彼得将和你共同探索区块链的本质和规律...</p>
                            <p class="time">2014年07月24日上线 / 香港</p>
                            <div class="twoBtn">
                                <p>浏览量：<i>2,250</i></p>
                                
                                <div class="btns">
                                    <button >白皮书</button>
                                    <button @click="projectIndexBtn">查看</button>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>

                        <div class="sanjiao green"></div>
                        <!-- 内容的左边 -->
                        <div class="contentL">
                            <router-link to="/projectIndex"><img src="../../../images/projectList_Contenticon.png" alt=""></router-link>
                        </div>

                        <!-- 内容的右边 -->
                        <div class="contentR">
                            
                            <div class="contentTitle">星云链nebulas</div>

                            <!-- 评分 -->
                            <div class="star_box">
                                <Rate disabled v-model="valueDisabled" />

                                <div class="Num">{{valueDisabled}}</div>
                            </div>

                            <p class="txt">Hi,欢迎来到彼得的思想空间，在这里彼得将和你共同探索区块链的本质和规律...</p>
                            <p class="time">2014年07月24日上线 / 香港</p>
                            <div class="twoBtn">
                                <p>浏览量：<i>2,250</i></p>
                                
                                <div class="btns">
                                    <button >白皮书</button>
                                    <button @click="projectIndexBtn">查看</button>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>

                        <div class="sanjiao green"></div>
                        <!-- 内容的左边 -->
                        <div class="contentL">
                            <router-link to="/projectIndex"><img src="../../../images/projectList_Contenticon.png" alt=""></router-link>
                        </div>

                        <!-- 内容的右边 -->
                        <div class="contentR">
                            
                            <div class="contentTitle">星云链nebulas</div>

                            <!-- 评分 -->
                            <div class="star_box">
                                <Rate disabled v-model="valueDisabled" />

                                <div class="Num">{{valueDisabled}}</div>
                            </div>

                            <p class="txt">Hi,欢迎来到彼得的思想空间，在这里彼得将和你共同探索区块链的本质和规律...</p>
                            <p class="time">2014年07月24日上线 / 香港</p>
                            <div class="twoBtn">
                                <p>浏览量：<i>2,250</i></p>
                                
                                <div class="btns">
                                    <button >白皮书</button>
                                    <button @click="projectIndexBtn">查看</button>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>

                        <div class="sanjiao red"></div>
                        <!-- 内容的左边 -->
                        <div class="contentL">
                            <router-link to="/projectIndex"><img src="../../../images/projectList_Contenticon.png" alt=""></router-link>
                        </div>

                        <!-- 内容的右边 -->
                        <div class="contentR">
                            
                            <div class="contentTitle">星云链nebulas</div>

                            <!-- 评分 -->
                            <div class="star_box">
                                <Rate disabled v-model="valueDisabled" />

                                <div class="Num">{{valueDisabled}}</div>
                            </div>

                            <p class="txt">Hi,欢迎来到彼得的思想空间，在这里彼得将和你共同探索区块链的本质和规律...</p>
                            <p class="time">2014年07月24日上线 / 香港</p>
                            <div class="twoBtn">
                                <p>浏览量：<i>2,250</i></p>
                                
                                <div class="btns">
                                    <button >白皮书</button>
                                    <button @click="projectIndexBtn">查看</button>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>

                        <div class="sanjiao "></div>
                        <!-- 内容的左边 -->
                        <div class="contentL">
                            <router-link to="/projectIndex"><img src="../../../images/projectList_Contenticon.png" alt=""></router-link>
                        </div>

                        <!-- 内容的右边 -->
                        <div class="contentR">
                            
                            <div class="contentTitle">星云链nebulas</div>

                            <!-- 评分 -->
                            <div class="star_box">
                                <Rate disabled v-model="valueDisabled" />

                                <div class="Num">{{valueDisabled}}</div>
                            </div>

                            <p class="txt">Hi,欢迎来到彼得的思想空间，在这里彼得将和你共同探索区块链的本质和规律...</p>
                            <p class="time">2014年07月24日上线 / 香港</p>
                            <div class="twoBtn">
                                <p>浏览量：<i>2,250</i></p>
                                
                                <div class="btns">
                                    <button >白皮书</button>
                                    <button @click="projectIndexBtn">查看</button>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>

                        <div class="sanjiao red"></div>
                        <!-- 内容的左边 -->
                        <div class="contentL">
                            <router-link to="/projectIndex"><img src="../../../images/projectList_Contenticon.png" alt=""></router-link>
                        </div>

                        <!-- 内容的右边 -->
                        <div class="contentR">
                            
                            <div class="contentTitle">星云链nebulas</div>

                            <!-- 评分 -->
                            <div class="star_box">
                                <Rate disabled v-model="valueDisabled" />

                                <div class="Num">{{valueDisabled}}</div>
                            </div>

                            <p class="txt">Hi,欢迎来到彼得的思想空间，在这里彼得将和你共同探索区块链的本质和规律...</p>
                            <p class="time">2014年07月24日上线 / 香港</p>
                            <div class="twoBtn">
                                <p>浏览量：<i>2,250</i></p>
                                
                                <div class="btns">
                                    <button >白皮书</button>
                                    <button @click="projectIndexBtn">查看</button>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>

                        <div class="sanjiao green"></div>
                        <!-- 内容的左边 -->
                        <div class="contentL">
                            <router-link to="/projectIndex"><img src="../../../images/projectList_Contenticon.png" alt=""></router-link>
                        </div>

                        <!-- 内容的右边 -->
                        <div class="contentR">
                            
                            <div class="contentTitle">星云链nebulas</div>

                            <!-- 评分 -->
                            <div class="star_box">
                                <Rate disabled v-model="valueDisabled" />

                                <div class="Num">{{valueDisabled}}</div>
                            </div>

                            <p class="txt">Hi,欢迎来到彼得的思想空间，在这里彼得将和你共同探索区块链的本质和规律...</p>
                            <p class="time">2014年07月24日上线 / 香港</p>
                            <div class="twoBtn">
                                <p>浏览量：<i>2,250</i></p>
                                
                                <div class="btns">
                                    <button >白皮书</button>
                                    <button @click="projectIndexBtn">查看</button>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>

                        <div class="sanjiao green"></div>
                        <!-- 内容的左边 -->
                        <div class="contentL">
                            <router-link to="/projectIndex"><img src="../../../images/projectList_Contenticon.png" alt=""></router-link>
                        </div>

                        <!-- 内容的右边 -->
                        <div class="contentR">
                            
                            <div class="contentTitle">星云链nebulas</div>

                            <!-- 评分 -->
                            <div class="star_box">
                                <Rate disabled v-model="valueDisabled" />

                                <div class="Num">{{valueDisabled}}</div>
                            </div>

                            <p class="txt">Hi,欢迎来到彼得的思想空间，在这里彼得将和你共同探索区块链的本质和规律...</p>
                            <p class="time">2014年07月24日上线 / 香港</p>
                            <div class="twoBtn">
                                <p>浏览量：<i>2,250</i></p>
                                
                                <div class="btns">
                                    <button >白皮书</button>
                                    <button @click="projectIndexBtn">查看</button>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>

                        <div class="sanjiao green"></div>
                        <!-- 内容的左边 -->
                        <div class="contentL">
                            <router-link to="/projectIndex"><img src="../../../images/projectList_Contenticon.png" alt=""></router-link>
                        </div>

                        <!-- 内容的右边 -->
                        <div class="contentR">
                            
                            <div class="contentTitle">星云链nebulas</div>

                            <!-- 评分 -->
                            <div class="star_box">
                                <Rate disabled v-model="valueDisabled" />

                                <div class="Num">{{valueDisabled}}</div>
                            </div>

                            <p class="txt">Hi,欢迎来到彼得的思想空间，在这里彼得将和你共同探索区块链的本质和规律...</p>
                            <p class="time">2014年07月24日上线 / 香港</p>
                            <div class="twoBtn">
                                <p>浏览量：<i>2,250</i></p>
                                
                                <div class="btns">
                                    <button >白皮书</button>
                                    <button @click="projectIndexBtn">查看</button>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>

                        <div class="sanjiao green"></div>
                        <!-- 内容的左边 -->
                        <div class="contentL">
                            <router-link to="/projectIndex"><img src="../../../images/projectList_Contenticon.png" alt=""></router-link>
                        </div>

                        <!-- 内容的右边 -->
                        <div class="contentR">
                            
                            <div class="contentTitle">星云链nebulas</div>

                            <!-- 评分 -->
                            <div class="star_box">
                                <Rate disabled v-model="valueDisabled" />

                                <div class="Num">{{valueDisabled}}</div>
                            </div>

                            <p class="txt">Hi,欢迎来到彼得的思想空间，在这里彼得将和你共同探索区块链的本质和规律...</p>
                            <p class="time">2014年07月24日上线 / 香港</p>
                            <div class="twoBtn">
                                <p>浏览量：<i>2,250</i></p>
                                
                                <div class="btns">
                                    <button >白皮书</button>
                                    <button @click="projectIndexBtn">查看</button>
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
        data(){
            return{
           
            }
        },
        methods:{
            // 跳转收藏夹文章
            favorite_article (){
                this.$router.push('/personal_centerIndex/favorite_article')
            },
            // 跳转收藏夹活动
            favorite_activity (){
                this.$router.push('/personal_centerIndex/favorite_activity')
            },
            // 跳转收藏夹项目
            favorite_product (){
                this.$router.push('/personal_centerIndex/favorite_product')
            },
        }
    }
</script>
