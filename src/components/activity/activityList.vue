    <template>
    <div class="activityList w">
        <!-- 区块链商会 -->
        <div class="chamber">

            <!-- 图片 -->
            <div class="pic">
                <img src="../../images/chamber.png" alt="">
            </div>

            <!-- 列表 -->
            <div class="list">
                <ul>
                    <li><a href="#"><p>2018全球智能+新区块链商会</p></a></li>
                    <li><a href="#"><p class="active">2018全球智能+新区块链商会</p></a></li>
                    <li><a href="#"><p>2018全球智能+新区块链商会</p></a></li>
                    <li><a href="#"><p>2018全球智能+新区块链商会</p></a></li>
                    <li><a href="#"><p>2018全球智能+新区块链商会</p></a></li>
                    <li><a href="#"><p>2018全球智能+新区块链商会</p></a></li>
                </ul>
            </div>
        </div>

        <!-- 活动信息列表 -->
        <div class="activitygoods">
            <!-- 搜索 -->
            <div class="search">
                <div class="searchTime">
                    <a href="#" class="active">本周</a>
                    <a href="#" >本月</a>
                </div>

                <!-- 搜索活动 -->
                <div class="searchActivity">
                    <div class="mold">
                        <i>类型：</i>
                        <div class="couses">
                            <el-select v-model="couses" placeholder="请选择">
                                <el-option
                                v-for="item in cousesList"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
                        </div>
                    </div>
                    <div class="mold">
                        <i>地点：</i>
                        <div class="site">
                            <el-select v-model="site" placeholder="请选择">
                                <el-option
                                v-for="item in siteList"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
                        </div>
                    </div>
                    <a href="#" class="searchBtn">搜索活动</a>
                </div>
            </div>

            <!-- 列表 -->
            <div class="activitygoodsList">
                <ul>
                    <li>
                        <img src="../../images/activitygoodsList.png" alt="">
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
                        <img src="../../images/activitygoodsList.png" alt="">
                        <div class="activitygoodsListInfo">
                            <p>【线上】</p>
                            <p class="txt">千万投资——复星“星未来InnoStar”大健康+区块链全球创新创业大赛</p>
                            <div class="activitygoodsListInfoBtn">
                                <p>6月18日~6月20日</p>
                                <a href="#">报名中</a>
                            </div>
                        </div>
                    </li>
                    <li>
                        <img src="../../images/activitygoodsList.png" alt="">
                        <div class="activitygoodsListInfo">
                            <p>【线上】</p>
                            <p class="txt">千万投资——复星“星未来InnoStar”大健康+区块链全球创新创业大赛</p>
                            <div class="activitygoodsListInfoBtn">
                                <p>6月18日~6月20日</p>
                                <a href="#" class="activeG">已结束</a>
                            </div>
                        </div>
                    </li>
                    <li>
                        <img src="../../images/activitygoodsList.png" alt="">
                        <div class="activitygoodsListInfo">
                            <p>【线上】</p>
                            <p class="txt">千万投资——复星“星未来InnoStar”大健康+区块链全球创新创业大赛</p>
                            <div class="activitygoodsListInfoBtn">
                                <p>6月18日~6月20日</p>
                                <a href="#" class="activeY">即将开始</a>
                            </div>
                        </div>
                    </li>
                    <li>
                        <img src="../../images/activitygoodsList.png" alt="">
                        <div class="activitygoodsListInfo">
                            <p>【线上】</p>
                            <p class="txt">千万投资——复星“星未来InnoStar”大健康+区块链全球创新创业大赛</p>
                            <div class="activitygoodsListInfoBtn">
                                <p>6月18日~6月20日</p>
                                <a href="#" class="activeY">即将开始</a>
                            </div>
                        </div>
                    </li>
                    <li>
                        <img src="../../images/activitygoodsList.png" alt="">
                        <div class="activitygoodsListInfo">
                            <p>【线上】</p>
                            <p class="txt">千万投资——复星“星未来InnoStar”大健康+区块链全球创新创业大赛</p>
                            <div class="activitygoodsListInfoBtn">
                                <p>6月18日~6月20日</p>
                                <a href="#">报名中</a>
                            </div>
                        </div>
                    </li>
                    <li>
                        <img src="../../images/activitygoodsList.png" alt="">
                        <div class="activitygoodsListInfo">
                            <p>【线上】</p>
                            <p class="txt">千万投资——复星“星未来InnoStar”大健康+区块链全球创新创业大赛</p>
                            <div class="activitygoodsListInfoBtn">
                                <p>6月18日~6月20日</p>
                                <a href="#">报名中</a>
                            </div>
                        </div>
                    </li>
                    <li>
                        <img src="../../images/activitygoodsList.png" alt="">
                        <div class="activitygoodsListInfo">
                            <p>【线上】</p>
                            <p class="txt">千万投资——复星“星未来InnoStar”大健康+区块链全球创新创业大赛</p>
                            <div class="activitygoodsListInfoBtn">
                                <p>6月18日~6月20日</p>
                                <a href="#">报名中</a>
                            </div>
                        </div>
                    </li>
                    <li>
                        <img src="../../images/activitygoodsList.png" alt="">
                        <div class="activitygoodsListInfo">
                            <p>【线上】</p>
                            <p class="txt">千万投资——复星“星未来InnoStar”大健康+区块链全球创新创业大赛</p>
                            <div class="activitygoodsListInfoBtn">
                                <p>6月18日~6月20日</p>
                                <a href="#">报名中</a>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>

            <!-- 分页 -->
            <div class="activitygoodsPage">
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
                cousesList: [{
                    value: '选项1',
                    label: '全部'
                    }, {
                    value: '选项2',
                    label: '线上'
                    }, {
                    value: '选项3',
                    label: '论坛'
                    }, {
                    value: '选项4',
                    label: '峰会'
                    }, {
                    value: '选项5',
                    label: '培训'
                    }, {
                    value: '选项6',
                    label: '其他'
                }],
                couses: '',
                siteList: [{
                    value: '选项1',
                    label: '全部'
                    }, {
                    value: '选项2',
                    label: '线上'
                    }, {
                    value: '选项3',
                    label: '论坛'
                    }, {
                    value: '选项4',
                    label: '峰会'
                    }, {
                    value: '选项5',
                    label: '培训'
                    }, {
                    value: '选项6',
                    label: '其他'
                }],
                site: '',
            }
        }
    }
</script>
       
