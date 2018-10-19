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
                    <button :class="screenShow == 1?'active':''" @click="addbtn">全部</button>
                    <button :class="screenShow == 2?'active':''" @click="hotbtn">热门</button>
                    <button :class="screenShow == 3?'active':''" @click="choiceness">精选</button>
                </div>
                <!-- 排序 -->
                <div class="sort_box">
                    <div class="sorts" @click="gradebtn">
                        <i>评分</i>
                        <div class="icons">
                            <i class="top" :class="{topgary:sortsShow}"></i>
                            <i class="bottom" :class="{bottomgary:!sortsShow}"></i>
                        </div>
                    </div>
                    <div class="sorts" @click="timebtn">
                        <i>时间</i>
                        <div class="icons">
                            <i class="top" :class="{topgary:timeShow}"></i>
                            <i class="bottom" :class="{bottomgary:!timeShow}"></i>
                        </div>
                    </div>
                    <div class="sorts"  @click="marketbtn">
                        <i>市值</i>
                        <div class="icons">
                            <i class="top" :class="{topgary:marketShow}"></i>
                            <i class="bottom" :class="{bottomgary:!marketShow}"></i>
                        </div>
                    </div>
                </div>       
                <!-- 搜索 -->
                <div class="search_box">
                    <!-- 搜索部分 -->
                    <div class="search">
                        <input type="text" placeholder="共收录120个项目，可搜索">
                        <div class="bigGlass"><a href="#"></a></div>
                    </div>
                </div>
            </div>

            <!-- 列表内容 -->
            <div class="projectList_Content">
                <ul class="projectLists">
                    <li v-for="item in project_all.projectLists" :key="item.id">

                        <div class="sanjiao red" v-if="item.txt == '热门'"></div>
                        <div class="sanjiao green" v-else-if="item.txt == '精选'"></div>
                        <div class="sanjiao " v-else></div>
                        <!-- 内容的左边 -->
                        <div class="contentL">
                            <router-link to="/projectIndex"><img src="../../images/projectList_Contenticon.png" alt=""></router-link>
                        </div>

                        <!-- 内容的右边 -->
                        <div class="contentR">
                            
                            <div class="contentTitle">{{item.title}}</div>

                            <!-- 评分 -->
                            <div class="star_box">
                                <Rate disabled v-model="item.score" />

                                <div class="Num">{{item.score}}</div>
                            </div>

                            <p class="txt">{{item.content}}</p>
                            <p class="time">{{item.time}}上线 / {{item.address}}</p>
                            <div class="twoBtn">
                                <p>浏览量：<i>{{item.page_view}}</i></p>
                                
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
                <Page :total="12" page-size="4" prev-text="上一页" next-text="下一页" />
            </div>
        </div>
    </div>
</template>
<script>
    import {Page,Rate} from 'iview'
    export default {
        components:{Page,Rate},
        data (){
            return{
                screenShow:1,
                sortsShow : true,
                timeShow : true,
                marketShow : true,
                pageSize:10, //当前页数量
                
                project_all:{
                    pageTotal:12, //总条数
                    projectLists:[
                        {id:1,title:'星云链nebulas',txt:'热门',content:'Hi,欢迎来到彼得的思想空间，在这里彼得将和你共同探索区块链的本质和规律...',time:'2011年07月24日',address:'香港',page_view:2250,score:3.9},
                        {id:2,title:'星云',txt:'精选',content:'Hi,欢迎来到彼得的思想空间，在这里彼得将和你共同探索区块链的本质和规律...',time:'2014年07月24日',address:'香港',page_view:1000,score:3.9},
                        {id:3,title:'星云链',txt:'',content:'Hi,欢迎来到彼得的思想空间，在这里彼得将和你共同探索区块链的本质和规律...',time:'2014年07月24日',address:'香港',page_view:3890,score:1.9},
                        {id:4,title:'星云链nebulas',txt:'热门',content:'Hi,欢迎来到彼得的思想空间，在这里彼得将和你共同探索区块链的本质和规律...',time:'2014年07月24日',address:'香港',page_view:2250,score:3},
                        {id:5,title:'星云',txt:'精选',content:'Hi,欢迎来到彼得的思想空间，在这里彼得将和你共同探索区块链的本质和规律...',time:'2000年07月24日',address:'香港',page_view:6250,score:3.9},
                        {id:6,title:'星云链',txt:'',content:'Hi,欢迎来到彼得的思想空间，在这里彼得将和你共同探索区块链的本质和规律...',time:'2014年07月24日',address:'香港',page_view:28250,score:2.9},
                        {id:7,title:'星云链nebulas',txt:'热门',content:'Hi,欢迎来到彼得的思想空间，在这里彼得将和你共同探索区块链的本质和规律...',time:'2014年07月24日',address:'香港',page_view:'2,250',score:3.9},
                        {id:8,title:'星云',txt:'精选',content:'Hi,欢迎来到彼得的思想空间，在这里彼得将和你共同探索区块链的本质和规律...',time:'2016年07月24日',address:'香港',page_view:250,score:3.9},
                        {id:9,title:'星云链',txt:'',content:'Hi,欢迎来到彼得的思想空间，在这里彼得将和你共同探索区块链的本质和规律...',time:'2015年07月24日',address:'香港',page_view:2450,score:5},
                        {id:10,title:'星云链nebulas',txt:'热门',content:'Hi,欢迎来到彼得的思想空间，在这里彼得将和你共同探索区块链的本质和规律...',time:'2014年07月24日',address:'香港',page_view:225,score:3.9},
                        {id:11,title:'星云',txt:'精选',content:'Hi,欢迎来到彼得的思想空间，在这里彼得将和你共同探索区块链的本质和规律...',time:'2014年07月24日',address:'香港',page_view:26250,score:3.9},
                        {id:12,title:'星云链',txt:'',content:'Hi,欢迎来到彼得的思想空间，在这里彼得将和你共同探索区块链的本质和规律...',time:'2008年07月24日',address:'香港',page_view:3250,score:5},
                    ],
                },


                all_projectLists:[],
            
            }
        },
        created(){
            this.all_projectLists = this.project_all.projectLists

            this.project_all.projectLists.sort(this.getSortMinFun('desc', 'score'))
        },
        methods:{
            projectIndexBtn(){
                this.$router.push({path:'/projectIndex'})
            },
            // 所有筛选
            addbtn(){
                this.screenShow = 1
                this.project_all.projectLists = this.all_projectLists
            },
            // 热门筛选
            hotbtn(){
                this.screenShow = 2
                const arr =[]

                this.all_projectLists.forEach(goods=>{
                    if(goods.txt == '热门'){
                        arr.push(goods)
                    }

                    this.project_all.projectLists = arr
                })
            },

            // 精选筛选
            choiceness(){
                this.screenShow = 3
                const arr =[]

                this.all_projectLists.forEach(goods=>{
                    if(goods.txt == '精选'){
                        arr.push(goods)
                    }

                    this.project_all.projectLists = arr
                })
            },

            // 评分大小按钮
            gradebtn(){
                this.sortsShow = !this.sortsShow
                
                this.timeShow = true
                this.marketShow = true

                if(this.sortsShow){
                    this.project_all.projectLists.sort(this.getSortMinFun('desc', 'score'));
                }else {
                    this.project_all.projectLists.sort(this.getSortMaxFun('desc', 'score'));
                }

            },
            // 时间大小按钮
            timebtn(){
                this.timeShow = !this.timeShow

                this.sortsShow = true
                this.marketShow = true

                if(this.timeShow){
                    this.project_all.projectLists.sort(this.getSortMinFun('desc', 'time'));
                }else {
                    this.project_all.projectLists.sort(this.getSortMaxFun('desc', 'time'));
                }

            },
            // 市值大小按钮
            marketbtn(){
                this.marketShow = !this.marketShow

                this.sortsShow = true
                this.timeShow = true

                if(this.marketShow){
                    this.project_all.projectLists.sort(this.getSortMinFun('desc', 'page_view'));
                }else {
                    this.project_all.projectLists.sort(this.getSortMaxFun('desc', 'page_view'));
                }

            },

            // 小到大函数分装
            getSortMaxFun(order, sortBy) {
                    var ordAlpah = (order == 'asc') ? '>' : '<';
                    var sortFun = new Function('a', 'b', 'return a.' + sortBy + ordAlpah + 'b.' + sortBy + '?-1:1');
                    return sortFun;

             },
            // 大到小函数分装
            getSortMinFun(order, sortBy) {
                    var ordAlpah = (order == 'asc') ? '>' : '<';
                    var sortFun = new Function('a', 'b', 'return a.' + sortBy + ordAlpah + 'b.' + sortBy + '?1:-1');
                    return sortFun;
             },

        }
    }
</script>
