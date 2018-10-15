<template>
    <div class="myRemark w">

        <!-- 头部 -->
        <div class="title_box">
            <p class="title">我要点评</p>
            <button class="back" @click="remarkBtn">返回详情</button>
        </div>

        <div class="content_box">

            <!-- 总体评价 -->
            <div class="evaluate">
                <i class="yuan"></i>
                <p>总体评价</p>
                <button :class="btnColorShow == 1?'btnG':''" @click="btnColorShow = 1">优质（1）</button>
                <button :class="btnColorShow == 2?'btnB':''" @click="btnColorShow = 2">不错（1）</button>
                <button :class="btnColorShow == 3?'btnY':''" @click="btnColorShow = 3">一般（1）</button>
                <button :class="btnColorShow == 4?'btnR':''" @click="btnColorShow = 4">差劲（1）</button>
            </div>

            <!-- 商业模式 -->
            <div class="business">
                <i class="yuan"></i>
                <p>商业模式</p>
                <button :class="businessShow==1?'btnR':''" @click="businessShow = 1">1</button>
                <div class="line"></div>
                <button :class="businessShow==2?'btnR':''" @click="businessShow = 2">2</button>
                <div class="line"></div>
                <button :class="businessShow==3?'btnR':''" @click="businessShow = 3">3</button>
                <div class="line"></div>
                <button :class="businessShow==4?'btnR':''" @click="businessShow = 4">4</button>
                <div class="line"></div>
                <button :class="businessShow==5?'btnR':''" @click="businessShow = 5">5</button>
            </div>
            <!-- 团队实力 -->
            <div class="team">
                <i class="yuan"></i>
                <p>商业模式</p>
                <button :class="teamShow==1?'btnR':''" @click="teamShow = 1">1</button>
                <div class="line"></div>
                <button :class="teamShow==2?'btnR':''" @click="teamShow = 2">2</button>
                <div class="line"></div>
                <button :class="teamShow==3?'btnR':''" @click="teamShow = 3">3</button>
                <div class="line"></div>
                <button :class="teamShow==4?'btnR':''" @click="teamShow = 4">4</button>
                <div class="line"></div>
                <button :class="teamShow==5?'btnR':''" @click="teamShow = 5">5</button>
            </div>
            <!-- 顾问团队 -->
            <div class="counselor">
                <i class="yuan"></i>
                <p>商业模式</p>
                <button :class="counselorShow==1?'btnR':''" @click="counselorShow = 1">1</button>
                <div class="line"></div>
                <button :class="counselorShow==2?'btnR':''" @click="counselorShow = 2">2</button>
                <div class="line"></div>
                <button :class="counselorShow==3?'btnR':''" @click="counselorShow = 3">3</button>
                <div class="line"></div>
                <button :class="counselorShow==4?'btnR':''" @click="counselorShow = 4">4</button>
                <div class="line"></div>
                <button :class="counselorShow==5?'btnR':''" @click="counselorShow = 5">5</button>
            </div>
            <!-- 产品实力 -->
            <div class=" product">
                <i class="yuan"></i>
                <p>商业模式</p>
                <button :class="productShow==1?'btnR':''" @click="productShow = 1">1</button>
                <div class="line"></div>
                <button :class="productShow==2?'btnR':''" @click="productShow = 2">2</button>
                <div class="line"></div>
                <button :class="productShow==3?'btnR':''" @click="productShow = 3">3</button>
                <div class="line"></div>
                <button :class="productShow==4?'btnR':''" @click="productShow = 4">4</button>
                <div class="line"></div>
                <button :class="productShow==5?'btnR':''" @click="productShow = 5">5</button>
            </div>
            <!-- 通讯渠道 -->
            <div class=" message">
                <i class="yuan"></i>
                <p>商业模式</p>
                <button :class="messageShow==1?'btnR':''" @click="messageShow = 1">1</button>
                <div class="line"></div>
                <button :class="messageShow==2?'btnR':''" @click="messageShow = 2">2</button>
                <div class="line"></div>
                <button :class="messageShow==3?'btnR':''" @click="messageShow = 3">3</button>
                <div class="line"></div>
                <button :class="messageShow==4?'btnR':''" @click="messageShow = 4">4</button>
                <div class="line"></div>
                <button :class="messageShow==5?'btnR':''" @click="messageShow = 5">5</button>
            </div>
            
            <!-- 项目印象 -->
            <div class="impression">
                <i class="yuan"></i>
                <p>项目印象</p>
                <ul class="label">
                    <li v-for="item in addLabel" :key="item.id">{{item}}</li>
                </ul>

                <div class="addLabel">
                    <input type="text" placeholder="添加标签" v-model="addLabelTxt">
                    <button @click="addLabelBtn">自定添加</button>
                </div>
            </div>

            <!-- 热门评语  -->
            <div class="hotLabel">
                <i class="yuan"></i>
                <p>热门评语</p>
                <ul class="label">
                    <li :class="{active:item.isSelected}" v-for="(item,index) in hotlabel" :key="item.id" @click="changeLabel(index)">{{item.content}}</li>
                </ul>
            </div>

            <!-- 点评内容 -->
            <div class="remarkContent">
                <i class="yuan"></i>
                <p>点评内容</p>

                <div class="content">
                    <textarea placeholder="限500个字" v-model="remarkContent"></textarea>
                    <div class="btns">
                        <button class="submit" @click="submitBtn">提交点评</button>
                        <a @click="reset">重置内容</a>
                    </div>
                </div>

                <div class="txt">
                    <p>温馨提示：</p>
                    <p>评分和点评内容将会成为其他用户的参考依据，并影响该项目的综合评分，请发布真实客观的本人体验评价！</p>
                </div>

            </div>

        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                btnColorShow:-1,
                businessShow:-1,
                teamShow:-1,
                counselorShow:-1,
                productShow:-1,
                messageShow:-1,
                // 自定义添加
                addLabel:[],
                addLabelTxt:'',
                // 热门评语数据
                hotlabel:[
                    {id:1,content:'团队优秀',isSelected:false},
                    {id:2,content:'技术强',isSelected:false},
                    {id:3,content:'靠谱',isSelected:false},
                    {id:4,content:'社区强大',isSelected:false},
                    {id:5,content:'资源多',isSelected:false},
                    {id:6,content:'负责任',isSelected:false},
                    {id:7,content:'老板牛',isSelected:false},
                    {id:8,content:'不透明',isSelected:false},
                    {id:9,content:'垃圾网站',isSelected:false},
                    {id:10,content:'提现快',isSelected:false},
                    {id:11,content:'还算透明',isSelected:false},
                    {id:12,content:'服务差',isSelected:false},
                    {id:13,content:'不诚信',isSelected:false},
                    {id:14,content:'高危',isSelected:false},
                    {id:15,content:'圈线',isSelected:false},
                    {id:16,content:'不靠谱',isSelected:false},
                    {id:17,content:'网站很LOW',isSelected:false},
                    {id:18,content:'网站高颜值',isSelected:false},
                ],
                
                remarkContent:'', //点评内容
            }
        },
        methods:{
            changeLabel(index){
                this.hotlabel[index].isSelected = !this.hotlabel[index].isSelected
            },
            // 点评内容点击事件
            submitBtn(){
                console.log(this.remarkContent);
                
            },

            // 自定义添加按钮事件
            addLabelBtn(){

                // 判断有没有内容, 有内容就添加, 没有内容就不添加
                if(this.addLabelTxt.trim().length == 0){
                    this.addLabelTxt = ''
                    return
                }else {
                    this.addLabel.push(this.addLabelTxt)
                    this.addLabelTxt = ''
                }

            },

            // 重置内容点击事件
            reset(){
                this.remarkContent = ''
            },

            // 返回点评页面事件
            remarkBtn(){
                this.$router.push({path:'/projectIndex/remark'})
            }
        }
    }
</script>
