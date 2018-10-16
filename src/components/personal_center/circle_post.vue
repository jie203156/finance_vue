<template>
    <div class="circle_post w">
        <!-- 头部 -->
        <div class="nav">
            <div class="btns">
                <button @click="circle_index">圈子</button>
                <button class="active">帖子</button>
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
            <div class="content_left">
                <ul>
                    <li>
                        <!-- 头部 -->
                        <div class="title_box">
                            <p class="title">当你老了，AI养你</p>
                            <div class="btns">
                                <button >删除</button>
                                <button style="display:none">编辑</button>
                                <button class="btnG">已发布</button>
                            </div>
                        </div>
                        <p class="txt">清华区块链公开课本期嘉宾是斯坦福大学物理系、电子工程系和应用物理系终身教授张首晟,清华区块链公开课本期嘉宾是清华区块链公开课本期嘉宾是斯坦福大学物理系...</p>
                        <div class="icon_box">
                            <div class="icon">
                                <div class="smile">
                                    <i></i>120
                                </div>
                                <div class="infoborder">
                                    <i></i>10
                                </div>
                                <div class="eye">
                                    <i></i>45888
                                </div>
                            </div>
                            <div class="time">2018-05-30 16:37:16</div>
                        </div>
                    </li>
                    <li>
                        <!-- 头部 -->
                        <div class="title_box">
                            <p class="title">当你老了，AI养你</p>
                            <div class="btns">
                                <button >删除</button>
                                <button >编辑</button>
                                <button class="btnR">未通过</button>
                            </div>
                        </div>
                        <p class="txt">清华区块链公开课本期嘉宾是斯坦福大学物理系、电子工程系和应用物理系终身教授张首晟,清华区块链公开课本期嘉宾是清华区块链公开课本期嘉宾是斯坦福大学物理系...</p>
                        <div class="icon_box">
                            <div class="icon">
                                <div class="smile">
                                    <i></i>120
                                </div>
                                <div class="infoborder">
                                    <i></i>10
                                </div>
                                <div class="eye">
                                    <i></i>45888
                                </div>
                            </div>
                            <div class="time">2018-05-30 16:37:16</div>
                        </div>
                    </li>
                    <li>
                        <!-- 头部 -->
                        <div class="title_box">
                            <p class="title">当你老了，AI养你</p>
                            <div class="btns">
                                <button style="display:none">删除</button>
                                <button >撤销</button>
                                <button  class="btnY">审核中</button>
                            </div>
                        </div>
                        <p class="txt">清华区块链公开课本期嘉宾是斯坦福大学物理系、电子工程系和应用物理系终身教授张首晟,清华区块链公开课本期嘉宾是清华区块链公开课本期嘉宾是斯坦福大学物理系...</p>
                        <div class="icon_box">
                            <div class="icon">
                                <div class="smile">
                                    <i></i>120
                                </div>
                                <div class="infoborder">
                                    <i></i>10
                                </div>
                                <div class="eye">
                                    <i></i>45888
                                </div>
                            </div>
                            <div class="time">2018-05-30 16:37:16</div>
                        </div>
                    </li>
                </ul>
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
                cousesList: [{
                    value: '选项1',
                    label: '全部'
                    }, {
                    value: '选项2',
                    label: '已发布'
                    }, {
                    value: '选项3',
                    label: '未通过'
                    }, {
                    value: '选项4',
                    label: '审核中'
                    }],
                couses: '全部',
            }
        },
        methods:{
            circle_index(){
                this.$router.push({path:'/personal_centerIndex/circle_index'})
            },
        }
    }
</script>
