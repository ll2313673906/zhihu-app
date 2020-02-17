<template>
    <div id="follow">
        <div class="follow-container">
            <div class="follow-content" v-for="(item,index) in followList"  :key="index">
                <div class="row">
                    <div class="col-follow-1"> <span>{{ item.target.author.name }}:</span>回答了该问题</div>
                </div>
                <div class="row avatar-info-div1">
                    <div class="col-avatar col-follow-1">
                        <img :src="item.target.author.avatar_url" alt="">
                        <div class="avatar-info">
                            <div class="row avatar-info-row">
                                <div class="col-1-1"><img :src="item.target.author.avatar_url" alt=""></div>
                                <div class="col-1-2">
                                    <span>{{ item.target.author.name }}</span>
                                    <p>{{ item.target.author.headline | suolv3}}</p>
                                </div>
                            </div>
                            <div class="row avatar-info-row">
                                <div class="col-2">
                                    <span>回答</span>
                                    <h3>233</h3>
                                </div>
                                <div class="col-2">
                                    <span>文章</span>
                                    <h3>33</h3>
                                </div>
                                <div class="col-2">
                                    <span>关注数</span>
                                    <h3>3223</h3>
                                </div>
                            </div>
                            <div class="row avatar-info-row">
                                <div class="col-3"><button class="blue-btn"><i class="fa fa-plus"></i>关注他</button></div>
                                <div class="col-3"><button><i class="fa fa-comments"></i>发私信</button></div>
                            </div>

                        </div>
                    </div>

                    <div class="col-follow-2"><span class="name-span">{{ item.target.author.name }}</span>,<span style="margin-left: 10px"> {{ item.target.author.headline }}</span></div>

                </div>
                <div class="row">
                    <div class="col-follow-3">
                        <h3 v-if="item.target.question == null">{{ item.target.title }}</h3>
                        <h3 v-else>{{ item.target.question.title}}</h3>
                    </div>
                </div>

                <!--默认展示/-->
                <div class="fist-div" v-if="!flags[index]">
                    <div class="row" v-if="item.target.thumbnail">
                        <div class="col-follow-4"><img :src="item.target.thumbnail" alt=""></div>
                        <div class="col-follow-5">
                            <span class="follow-p ellipsis-4" v-html="item.target.excerpt" ></span>
                            <span class="follow-span read-span" @click="change(index)">阅读全文<i class="fa fa-angle-right fa-rotate-90"></i></span>
                        </div>
                    </div>
                    <div class="row" v-else>
                        <div class="col-follow-5">
                            <span class="follow-p ellipsis-4" v-html="item.target.excerpt" ></span>
                            <span class="follow-span read-span" @click="change(index)">阅读全文<i class="fa fa-angle-right fa-rotate-90"></i></span>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-1 follow-6">
                            <ul class="col-1-ul clear-box">
                                <button class="btn-1">
                                    <svg class="blue-icon" viewBox="0 0 24 24" width="10" height="10">
                                        <path
                                                d="M2 18.242c0-.326.088-.532.237-.896l7.98-13.203C10.572 3.57 11.086 3 12 3c.915 0 1.429.571 1.784 1.143l7.98 13.203c.15.364.236.57.236.896 0 1.386-.875 1.9-1.955 1.9H3.955c-1.08 0-1.955-.517-1.955-1.9z"
                                                fill-rule="evenodd"
                                        ></path>
                                    </svg>
                                    赞同3.7k
                                </button>
                                <button class="btn-2">
                                    <svg class="blue-icon" viewBox="0 0 24 24" width="10" height="10">
                                        <path
                                                d="M2 18.242c0-.326.088-.532.237-.896l7.98-13.203C10.572 3.57 11.086 3 12 3c.915 0 1.429.571 1.784 1.143l7.98 13.203c.15.364.236.57.236.896 0 1.386-.875 1.9-1.955 1.9H3.955c-1.08 0-1.955-.517-1.955-1.9z"
                                                fill-rule="evenodd"
                                        ></path>
                                    </svg>
                                </button>
                                <li class="col-1-ul-item-1">
                                    <i class="fa fa-comment"></i>
                                    {{ item.target.comment_count }}条评论
                                </li>
                                <li class="col-1-ul-item-2">
                                    <i class="fa fa-paper-plane"></i>
                                    分享
                                </li>
                                <li class="col-1-ul-item-3">
                                    <i class="fa fa-star"></i>
                                    收藏
                                </li>
                                <li class="col-1-ul-item-4">
                                    <i class="fa fa-heart"></i>
                                    喜欢
                                </li>
                                <li class="col-1-ul-item-5">
                                    <svg class="Zi Zi--Dots Button-zi" fill="currentColor" viewBox="0 0 24 24" width="1.2em" height="1.2em"><path d="M5 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm7 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm7 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" fill-rule="evenodd"></path></svg>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
                <!--阅读更多内容展示-->
                <div class="read-div"  v-if="flags[index]">
                    <div class="follow-read-more">
                        <img :src="item.target.column.img_url" alt="">
                        <p v-html="item.target.content"></p>
                    </div>
                    <div class="row sticky-bar"  :class="{ active: flags[index] }" >
                        <div class="col-1 follow-6" >
                            <ul class="col-1-ul clear-box" >
                                <button class="btn-1">
                                    <svg class="blue-icon" viewBox="0 0 24 24" width="10" height="10">
                                        <path
                                                d="M2 18.242c0-.326.088-.532.237-.896l7.98-13.203C10.572 3.57 11.086 3 12 3c.915 0 1.429.571 1.784 1.143l7.98 13.203c.15.364.236.57.236.896 0 1.386-.875 1.9-1.955 1.9H3.955c-1.08 0-1.955-.517-1.955-1.9z"
                                                fill-rule="evenodd"
                                        ></path>
                                    </svg>
                                    赞同3.7k
                                </button>
                                <button class="btn-2">
                                    <svg class="blue-icon" viewBox="0 0 24 24" width="10" height="10">
                                        <path
                                                d="M2 18.242c0-.326.088-.532.237-.896l7.98-13.203C10.572 3.57 11.086 3 12 3c.915 0 1.429.571 1.784 1.143l7.98 13.203c.15.364.236.57.236.896 0 1.386-.875 1.9-1.955 1.9H3.955c-1.08 0-1.955-.517-1.955-1.9z"
                                                fill-rule="evenodd"
                                        ></path>
                                    </svg>
                                </button>
                                <li class="col-1-ul-item-1">
                                    <i class="fa fa-comment"></i>
                                    22条评论
                                </li>
                                <li class="col-1-ul-item-2">
                                    <i class="fa fa-paper-plane"></i>
                                    分享
                                </li>
                                <li class="col-1-ul-item-3">
                                    <i class="fa fa-star"></i>
                                    收藏
                                </li>
                                <li class="col-1-ul-item-4">
                                    <i class="fa fa-heart"></i>
                                    喜欢
                                </li>
                                <li class="col-1-ul-item-5">
                                    <svg class="Zi Zi--Dots Button-zi" fill="currentColor" viewBox="0 0 24 24" width="1.2em" height="1.2em"><path d="M5 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm7 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm7 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" fill-rule="evenodd"></path></svg>
                                </li>
                                <li  @click="change(index)"  v-if="flags[index]">收起 <i class="fa fa-angle-right fa-rotate-270"></i></li>

                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Follow",
        data() {
            return {
                followList: [],
                flags: []
            }
        },
        mounted() {
            window.addEventListener('scroll', this.scrollToTop);
        },
        created(){
            this.axios.get('/api/follow').then(res => {
                this.followList = res.data.data.data;
                console.log(this.followList)
                //定义一个正则规则，用来处理富文本中的图片
                const regex = new RegExp('<img', 'gi');
                for (var i = 0; i < this.followList.length; i++) {
                    //给每篇文章添加一个标记，默认为false，表示未展开全文
                    this.flags.splice(i, 0, false);
                    //将富文本中的图片处理大小
                    this.followList[i].target.content = this.followList[i].target.content.replace(regex, `<img style="max-width: 100%; height: auto"`);
                }
            })

        },
        methods: {
            //展开、收起的切换
            change(index) {
                //将flag数组索引为index的项置反，注意splice用法，不要直接给数组元素赋值（无法监听flag变化）
                this.flags.splice(index, 1, !this.flags[index]);

            }
        }
    }
</script>

<style lang="scss" scoped>
    @import url('../assets/css/basic.css');
    @import url('../assets/css/font-awesome-4.7.0/css/font-awesome.min.css');
    #follow{
        width: 100%;
    }

    .follow-content{
        border-bottom: 1px solid #eee;
        padding-bottom: 10px;
        margin-top: 10px;
        width: 100%;
        .col-follow-1{
            color: gray;
        }
        .col-follow-1 img{
            width: 25px;
            height: 25px;
            border-radius: 3px;
        }
        .col-follow-2{
            display: flex;
            flex-direction: row;
            height: 40px;
            .name-span{
               font-weight: bold;
                margin-left: 8px;
            }
        }
        .col-follow-3{
            height: 40px;
           h3{
               margin-top: 1px;
           }
        }
        .col-follow-4{
            margin-top: 10px;
            img{
                width: 167px;
                height: 100px;
                border-radius: 3px;
            }
        }
        .col-follow-5{
            padding-left: 10px;
            .read-span{
                color:#175199;
                height: 10px;
                line-height: 10px;
                i{
                    margin-top: 6px;
                    font-size: 20px;
                    margin-left: 6px
                }
            }
        }
        .follow-6{
            flex: 0 0 100%;
        }
        .read-div{
            width: 100%;
            padding-right: 10px;
        }

    }
    .col-1-ul{
        width:100%;
        margin: 0px -1px;
        padding: 0;
        height: 40px;
        line-height: 40px;


        [class*='btn-']{
            background: rgba(0,132,255,.1);
            color: #0084ff;
            border-radius: 3px;
            cursor: pointer;
            display: inline-block;
            padding: 0 16px;
            font-size: 14px;
            line-height: 30px;
            text-align: center;
            float: left;
            margin-top: 10px;
        }

        [class*='col-1-ul-item-']{
            margin-right: 10px;
            color: #8591a7;
            fill: #8591a7;
            margin-left:4%;
        }
        .col-1-ul-item-1{
            margin-left:3%;
        }

        .btn-2{
            margin-left: 5px;

        }
    }
    .sticky-bar{
        height: 40px;
    }
    .ellipsis-4{
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp:2;
        overflow: hidden;
    }
    .avatar-info-div1{
        position: relative;
        .avatar-info{
            background:#fff;
            width: 340px;
            height: 220px;
            z-index: 55;
            position: absolute;
            margin-top:30px;
            display: none;
            padding-left: 10px;
            padding-right: 10px;
            box-shadow: 1px 1px 5px 3px #eee;
            .avatar-info-row{
                margin-top: 10px;
                [class*='col-1-']{
                    color: black;
                    border-bottom: 1px solid #eee;
                    height: 60px;
                }
                .col-1-1{
                    flex: 0 0 25%;

                    img{
                        width: 100%;
                        height: 69px;
                        margin-top: -25px;
                    }
                }
                .col-1-2{
                        flex: 0 0 70%;
                        padding-left: 10px;

                       p{
                           margin-top: 2px;
                           font-size: 14px;
                       }

                }
                .col-2{
                    flex: 0 0 23%;
                    margin-left: 20px;
                    text-align: center;
                    height: 46px;
                    margin-bottom: 10px;
                    h3{
                        margin-top: 1px;
                        color: black;
                    }
                }
                .col-3{
                    flex: 0 0 44%;
                    background: yellowgreen;
                    height:34px;
                    margin-left:10px;
                    button{
                        width: 100%;
                        height: 100%;
                        background:none;
                        border: 1px solid gray;
                        color: #8590a6;
                        font-size: 15px;
                        i{
                            margin-right: 14px;
                        }

                    }
                    .blue-btn{
                        background:#0084ff;
                        color: #fff;
                        border: none;

                    }

                }
            }
        }
         .col-avatar:hover .avatar-info{
            display: block;
        }
    }


</style>
