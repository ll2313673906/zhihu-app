<template>
    <div id="recommoned">
      <div class="container">
        <div class="recommoned-content"  v-for="(item, index) in recommenedList" :key="index">
            <div class="row">
                <div class="col-1">
                    <h3 v-if="item.target.question == null">{{ item.target.title }}</h3>
                    <h3 v-else>{{ item.target.question.title }}</h3>
                </div>
            </div>
            <div class="row-1" v-if="!flags[index]">
                <div class="row">
                    <div class="col-2">
                        <div class="row" v-if="item.target.thumbnail">
                            <div class="col-2-1"><img :src="item.target.thumbnail" alt="图片"></div>
                            <div class="col-2-2">
                                <p>
                                    {{ item.target.author.name }}:{{ item.target.excerpt | suolv }}
                                    <span class="read-span" @click="change(index)">阅读全文<i class="fa fa-angle-right fa-rotate-90"></i> </span>
                                </p>
                            </div>
                        </div>
                        <div class="row" v-else>
                            <div class="col-2-2">
                                <p>
                                    {{ item.target.author.name }}:{{ item.target.excerpt | suolv }}
                                    <span class="read-span"  @click="change(index)">阅读全文<i class="fa fa-angle-right fa-rotate-90"></i> </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-1">
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
                        </ul>
                    </div>
                </div>
            </div>
            <!--点击阅读全文显示内容-->
            <div class="read-content" v-if="flags[index]">
                  <div class="row">
                      <div class="col-a">
                          <img :src="item.target.author.avatar_url" class="avatar mr-2" />
                      </div>
                      <div class="col-b">
                          <h4 class="mr-2">{{ item.target.author.name }}</h4>
                      </div>
                  </div>
                <div class="row">
                    <div class="col-c"><span>{{ item.target.voteup_count }}人赞同了该回答</span></div>
                </div>
                <div class="row">
                    <span>{{ item.target.author.headline }}</span>
                </div>
                <div class="row">
                    <div v-html="item.target.content" class="content"></div>
                </div>

                <div class="row sticky-bar">
                    <div class="col-1">
                        <ul class="  col-1-ul clear-box "  :class="{ active: flags[index] }" >
                            <button class="btn-1">
                                <svg class="blue-icon" viewBox="0 0 24 24" width="10" height="10">
                                    <path
                                            d="M2 18.242c0-.326.088-.532.237-.896l7.98-13.203C10.572 3.57 11.086 3 12 3c.915 0 1.429.571 1.784 1.143l7.98 13.203c.15.364.236.57.236.896 0 1.386-.875 1.9-1.955 1.9H3.955c-1.08 0-1.955-.517-1.955-1.9z"
                                            fill-rule="evenodd"
                                    ></path>
                                </svg>
                                赞同3.7k
                            </button>
                            <button class="btn-2" >
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
                            <li class="col-1-ul-item-5"  @click="change(index)" v-if="flags[index]">
                                <i class="fa fa-angle-right fa-rotate-270"></i>
                                收起
                            </li>
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
        name: "Recommoned",
        data() {
            return {
                recommenedList: [],
                flags: []
            };
        },
        mounted() {
            window.addEventListener('scroll', this.scrollToTop);
        },
        created() {
            this.axios.get('/api/recommend').then(res => {
                this.recommenedList = res.data.data.data;
                //定义一个正则规则，用来处理富文本中的图片
                const regex = new RegExp('<img', 'gi');
                for (var i = 0; i < this.recommenedList.length; i++) {
                    //给每篇文章添加一个标记，默认为false，表示未展开全文
                    this.flags.splice(i, 0, false);
                    //将富文本中的图片处理大小
                    this.recommenedList[i].target.content = this.recommenedList[i].target.content.replace(regex, `<img style="max-width: 100%; height: auto"`);
                }
            });
        },
        methods: {
            //展开、收起的切换
            change(index) {
                //将flag数组索引为index的项置反，注意splice用法，不要直接给数组元素赋值（无法监听flag变化）
                this.flags.splice(index, 1, !this.flags[index]);

            }
        }
    };
</script>
<style lang="scss" scoped>
    @import url('../assets/css/basic.css');
    @import url('../assets/css/font-awesome-4.7.0/css/font-awesome.min.css');
  #recommoned{
      .container{
          width: 100%;
          padding-right: 1%;
          min-width: 700px;
          .recommoned-content{
            margin-top: 10px;
              .row{
                  .col-1{
                      h3{
                          margin-top: 10px;
                      }
                      padding-left: 10px;
                      flex:0 0 100%;
                      height: 40px;

                      .col-1-ul{
                          width:100%;
                          margin: 0px -1px;
                          padding: 0;
                          height: 50px;
                          line-height: 50px;
                          border-bottom: 1px solid #eee;


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

                  }
                  .col-2{
                      flex: 0 0 100%;
                      height: 115px;

                      .col-2-1{
                          padding-left: 10px;
                          img{
                              width: 180px;
                              height: 100px;
                              border-radius: 3px;
                              margin-right:5%;
                              margin-top:12px;
                          }
                      }
                      .col-2-2{
                          padding-top: 0;
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
                  }
              }
              .read-content{
                  width: 100%;
                  .col-a{
                      flex: 0 0 7%;
                      height: 40px;
                      display: flex;
                      line-height: 40px;
                      img{
                          width: 45px;
                          height: 45px;
                          border-radius: 50%;
                      }
                  }
                  .col-b{
                      height: 40px;
                      line-height: 40px;
                      h4{
                          margin-top: 1px;
                      }
                  }
                  .col-c{
                      margin-top: 20px;
                      span{
                          color: gray;
                      }
                  }
                  .sticky-bar{
                      position: sticky;
                      bottom: 0;
                      z-index: 1000;
                      background-color: #fff;


                  }
              }
          }

      }
  }
</style>
