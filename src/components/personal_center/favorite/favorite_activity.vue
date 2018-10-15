<template>
    <div class="favorite_article">
        <div class="topTitle w">
            <div class="btn">
                <button >动态</button>
                <button @click="favorite_article">文章</button>
                <button >问答</button>
                <button >帖子</button>
                <button  @click="favorite_activity" class="active">活动</button>
                <button  @click="favorite_product">项目</button>
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
                        <!-- 列表 -->
            <div class="activitygoodsList">
                <ul>
                    <li>
                        <img src="../../../images/activitygoodsList.png" alt="">
                        <div class="activitygoodsListInfo">
                            <p>【线上】</p>
                            <p class="txt">千万投资——复星“星未来InnoStar”大健康+区块链全球创新创业大赛</p>
                            <div class="activitygoodsListInfoBtn">
                                <p>6月18日~6月20日</p>
                                <router-link to="/activityInfo">报名中</router-link>
                            </div>
                        </div>
                    </li>
                    <li>
                        <img src="../../../images/activitygoodsList.png" alt="">
                        <div class="activitygoodsListInfo">
                            <p>【线上】</p>
                            <p class="txt">千万投资——复星“星未来InnoStar”大健康+区块链全球创新创业大赛</p>
                            <div class="activitygoodsListInfoBtn">
                                <p>6月18日~6月20日</p>
                                <router-link to="/activityInfo">报名中</router-link>
                            </div>
                        </div>
                    </li>
                    <li>
                        <img src="../../../images/activitygoodsList.png" alt="">
                        <div class="activitygoodsListInfo">
                            <p>【线上】</p>
                            <p class="txt">千万投资——复星“星未来InnoStar”大健康+区块链全球创新创业大赛</p>
                            <div class="activitygoodsListInfoBtn">
                                <p>6月18日~6月20日</p>
                                <router-link to="/activityInfo">报名中</router-link>
                            </div>
                        </div>
                    </li>
                    <li>
                        <img src="../../../images/activitygoodsList.png" alt="">
                        <div class="activitygoodsListInfo">
                            <p>【线上】</p>
                            <p class="txt">千万投资——复星“星未来InnoStar”大健康+区块链全球创新创业大赛</p>
                            <div class="activitygoodsListInfoBtn">
                                <p>6月18日~6月20日</p>
                                <router-link to="/activityInfo" class="activeY">即将开始</router-link>
                            </div>
                        </div>
                    </li>
                    <li>
                        <img src="../../../images/activitygoodsList.png" alt="">
                        <div class="activitygoodsListInfo">
                            <p>【线上】</p>
                            <p class="txt">千万投资——复星“星未来InnoStar”大健康+区块链全球创新创业大赛</p>
                            <div class="activitygoodsListInfoBtn">
                                <p>6月18日~6月20日</p>
                                <router-link to="/activityInfo" class="activeY">即将开始</router-link>
                            </div>
                        </div>
                    </li>
                    <li>
                        <img src="../../../images/activitygoodsList.png" alt="">
                        <div class="activitygoodsListInfo">
                            <p>【线上】</p>
                            <p class="txt">千万投资——复星“星未来InnoStar”大健康+区块链全球创新创业大赛</p>
                            <div class="activitygoodsListInfoBtn">
                                <p>6月18日~6月20日</p>
                                <router-link to="/activityInfo" class="activeY">即将开始</router-link>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                title
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
