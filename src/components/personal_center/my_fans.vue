<template>
    <div class="my_fans">
        <div class="topTitle w">
            <div class="btn">
                <p>你有 1688 位粉丝</p>
                <button :class="isShow == 1?'active':''" @click="allBtn">全部</button>
                <button :class="isShow == 2?'active':''" @click="each">互相关注</button>
                <button :class="isShow == 3?'active':''" @click="concernbtn">我未关注</button>
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
                <li v-for="item in fans" :key="item.id">
                    <div class="content_top">
                        <!-- 头像 -->
                        <a href="#" class="icon"><img src="../../images/master01.png" alt=""></a>
                        <!-- 用户名 -->
                        <div class="title_box">
                            <a href="#" class="title">{{item.title}}</a>
                            <p class="txt">{{item.address}}</p>
                        </div>

                        <!-- 按钮 -->
                        <button class="btnR" v-if="item.btn == '关注'">{{item.btn}}</button>
                        <button  v-else>{{item.btn}}</button>
                    </div>

                    <div class="content_bottom">
                        <div class="nums"><i>{{item.article}}</i>文章数</div>
                        <p class="line"></p>
                        <div class="nums"><i>{{item.browse}}</i>万浏览量</div>
                        <p class="line"></p>
                        <div class="nums"><i>{{item.fan}}</i>粉丝</div>
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
                isShow:1,
                fans:[
                    {id:1,title:'你家区块链',address:'广东省广州市',btn:'互相关注', article:101,browse:4.5,fan:1688},
                    {id:2,title:'你家区块链',address:'广东省广州市',btn:'已关注', article:101,browse:3.5,fan:1688},
                    {id:3,title:'你家区块链',address:'广东省广州市',btn:'关注', article:101,browse:1.8,fan:1688},
                    {id:4,title:'你家区块链',address:'广东省广州市',btn:'关注', article:101,browse:1.8,fan:567},
                    {id:5,title:'你家区块链',address:'广东省广州市',btn:'互相关注', article:101,browse:4.5,fan:1688},
                    {id:6,title:'你家区块链',address:'广东省广州市',btn:'已关注', article:101,browse:3.5,fan:1688},
                    {id:7,title:'你家区块链',address:'广东省广州市',btn:'关注', article:101,browse:1.8,fan:1688},
                    {id:8,title:'你家区块链',address:'广东省广州市',btn:'关注', article:101,browse:1.8,fan:567},
                    {id:9,title:'你家区块链',address:'广东省广州市',btn:'互相关注', article:101,browse:4.5,fan:1688},
                    {id:10,title:'你家区块链',address:'广东省广州市',btn:'已关注', article:101,browse:3.5,fan:1688},
                    {id:11,title:'你家区块链',address:'广东省广州市',btn:'关注', article:101,browse:1.8,fan:1688},
                    {id:12,title:'你家区块链',address:'广东省广州市',btn:'关注', article:101,browse:1.8,fan:567},
                    {id:13,title:'你家区块链',address:'广东省广州市',btn:'互相关注', article:101,browse:4.5,fan:1688},
                    {id:14,title:'你家区块链',address:'广东省广州市',btn:'已关注', article:101,browse:3.5,fan:1688},
                    {id:15,title:'你家区块链',address:'广东省广州市',btn:'关注', article:101,browse:1.8,fan:1688},
                    {id:16,title:'你家区块链',address:'广东省广州市',btn:'关注', article:101,browse:1.8,fan:567},
                    {id:17,title:'你家区块链',address:'广东省广州市',btn:'互相关注', article:101,browse:4.5,fan:1688},
                    {id:18,title:'你家区块链',address:'广东省广州市',btn:'已关注', article:101,browse:3.5,fan:1688},
                    {id:19,title:'你家区块链',address:'广东省广州市',btn:'关注', article:101,browse:1.8,fan:1688},
                    {id:20,title:'你家区块链',address:'广东省广州市',btn:'关注', article:101,browse:1.8,fan:567},
                ],
                allarr:[]
            }
        },
        created(){
             this.allarr = this.fans
        },
        methods:{
            // 我为关注
            concernbtn(){
                this.isShow = 3
                const arr = []
                this.allarr.forEach(goods=>{
                    if (goods.btn == '关注'){
                        arr.push(goods)
                    }
                })
                this.fans = arr
            },

            // 所有关注
            allBtn(){
                this.isShow = 1
                this.fans = this.allarr
            },

            // 互相关注
            each(){
                this.isShow = 2
                const arr = []
                this.allarr.forEach(goods=>{
                    if(goods.btn == '互相关注'){
                        arr.push(goods)
                    }
                })
                this.fans = arr
            }
        }
    }
</script>
