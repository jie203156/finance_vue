<template>
    <div class="circle_index w">
        <!-- 头部 -->
        <div class="nav">
            <div class="btns">
                <button class="active">圈子</button>
                <button @click="circle_post">帖子</button>
            </div>
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
        </div>

        <!-- 列表内容 -->
        <div class="content">
            <ul>
                <li>
                    <div class="bigPic">
                        <img src="../../images/circle_index.png" alt="">
                    </div>
                    <p class="title">ThinkSNS+产品测...</p>
                    <div class="btn">
                        <div class="num">
                            <p>帖子 <i>20</i></p>
                            <p>成员 <i>129</i></p>
                        </div>

                        <button class="btnY">创建审核中</button>
                    </div>
                </li>
                <li>
                    <div class="bigPic">
                        <img src="../../images/circle_index.png" alt="">
                    </div>
                    <p class="title">ThinkSNS+产品测...</p>
                    <div class="btn">
                        <div class="num">
                            <p>帖子 <i>20</i></p>
                            <p>成员 <i>129</i></p>
                        </div>

                        <button class="btnG">创建审核中</button>
                    </div>
                </li>
                <li>
                    <div class="bigPic">
                        <img src="../../images/circle_index.png" alt="">
                    </div>
                    <p class="title">ThinkSNS+产品测...</p>
                    <div class="btn">
                        <div class="num">
                            <p>帖子 <i>20</i></p>
                            <p>成员 <i>129</i></p>
                        </div>

                        <button >创建审核中</button>
                    </div>
                </li>
                <li>
                    <div class="bigPic">
                        <img src="../../images/circle_index.png" alt="">
                    </div>
                    <p class="title">ThinkSNS+产品测...</p>
                    <div class="btn">
                        <div class="num">
                            <p>帖子 <i>20</i></p>
                            <p>成员 <i>129</i></p>
                        </div>

                        <button class="btnY">创建审核中</button>
                    </div>
                </li>
                <li>
                    <div class="bigPic">
                        <img src="../../images/circle_index.png" alt="">
                    </div>
                    <p class="title">ThinkSNS+产品测...</p>
                    <div class="btn">
                        <div class="num">
                            <p>帖子 <i>20</i></p>
                            <p>成员 <i>129</i></p>
                        </div>

                        <button class="btnG">创建审核中</button>
                    </div>
                </li>
                <li>
                    <div class="bigPic">
                        <img src="../../images/circle_index.png" alt="">
                    </div>
                    <p class="title">ThinkSNS+产品测...</p>
                    <div class="btn">
                        <div class="num">
                            <p>帖子 <i>20</i></p>
                            <p>成员 <i>129</i></p>
                        </div>

                        <button >创建审核中</button>
                    </div>
                </li>
            </ul>
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
                    label: '我加入的'
                    }, {
                    value: '选项3',
                    label: '我创建的'
                    }],
                couses: '全部',
            }
        },
        methods:{
            circle_post(){
                this.$router.push({path:'/personal_centerIndex/circle_post'})
            }
        }
    }
</script>
