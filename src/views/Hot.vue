<template>
    <div id="hot">
        <div class="hot-container">
            <!-- 顶部tab导航 -->
            <ul class="tab-title border-bottom">
                <li v-for="(title, index) in tabTitle" @click="change(index)"
                    :class="{ active: cur == index }" :key="index">
                    {{ title }}
                </li>
            </ul>
            <!-- 切换的内容区 -->
            <div class="hot-content">
                <div v-for="(content, index) in tabContent" v-show="cur == index" :key="index">
                  <div v-for="(item, index1) in content" :key="index1">
                      <div class="row hot-content-2" v-if="!item.children[0].thumbnail">
                          <div class="col-hot-1">
                              <h3 class="col-hot-1-h3":class="{ top: index1 < 3 }">{{ index1 + 1 }}</h3>
                          </div>
                          <div class="col-hot-2">
                              <a :href="'https://www.zhihu.com/question/' + item.target.id" target="_blank">{{ item.target.title }}</a>
                              <div class="row">
                                  <div class="col-hot-2-1">
                                      <p>{{ item.target.excerpt | suolv2}}</p>
                                      <ul class="hot-ul">
                                          <li>
                                              <svg class="grey-icon" viewBox="0 0 24 24" width="18" height="18">
                                                  <path
                                                          d="M14.553 20.78c.862-.651 1.39-1.792 1.583-3.421.298-2.511-.656-4.904-2.863-7.179.209 2.291.209 3.73 0 4.314-.41 1.143-1.123 1.983-1.91 2.03-1.35.079-2.305-.512-2.863-1.774-.676 1.25-.782 2.556-.318 3.915.31.906.94 1.684 1.89 2.333C7.144 20.131 5 17.336 5 14.022c0-2.144.898-4.072 2.325-5.4.062 2.072.682 3.598 2.13 4.822-.67-1.112-.734-2.11-.734-3.517 0-3.253 2.067-6.007 4.913-6.927a7.35 7.35 0 0 0 2.157 4.918C17.722 9.214 19 11.463 19 14.022c0 3.073-1.844 5.7-4.447 6.758z"
                                                          fill-rule="evenodd"
                                                  ></path>
                                              </svg>
                                              {{ item.detail_text }}
                                          </li>
                                          <li>
                                              <i class="fa fa fa-paper-plane"></i>
                                              分享
                                          </li>
                                      </ul>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="row hot-content-1" v-else>
                          <div class="col-hot-1">
                              <h3 class="col-hot-1-h3":class="{ top: index1 < 3 }">{{ index1 + 1 }}</h3>
                          </div>
                          <div class="col-hot-2">
                              <a :href="'https://www.zhihu.com/question/' + item.target.id" target="_blank">{{ item.target.title }}</a>
                              <div class="row">
                                  <div class="col-hot-2-1">
                                      <p>{{ item.target.excerpt | suolv2}}</p>
                                      <ul class="hot-ul">
                                          <li>
                                              <svg class="grey-icon" viewBox="0 0 24 24" width="18" height="18">
                                                  <path
                                                          d="M14.553 20.78c.862-.651 1.39-1.792 1.583-3.421.298-2.511-.656-4.904-2.863-7.179.209 2.291.209 3.73 0 4.314-.41 1.143-1.123 1.983-1.91 2.03-1.35.079-2.305-.512-2.863-1.774-.676 1.25-.782 2.556-.318 3.915.31.906.94 1.684 1.89 2.333C7.144 20.131 5 17.336 5 14.022c0-2.144.898-4.072 2.325-5.4.062 2.072.682 3.598 2.13 4.822-.67-1.112-.734-2.11-.734-3.517 0-3.253 2.067-6.007 4.913-6.927a7.35 7.35 0 0 0 2.157 4.918C17.722 9.214 19 11.463 19 14.022c0 3.073-1.844 5.7-4.447 6.758z"
                                                          fill-rule="evenodd"
                                                  ></path>
                                              </svg>
                                              {{ item.detail_text }}
                                          </li>
                                          <li>
                                              <i class="fa fa fa-paper-plane"></i>
                                              分享
                                          </li>
                                      </ul>
                                  </div>
                                  <div class="col-hot-img">
                                      <img :src="item.children[0].thumbnail" class="">
                                  </div>
                              </div>
                          </div>

                      </div>

                  </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Hot",
        data() {
            return {
                tabTitle: ['全站', '科学', '数码', '体育', '时尚', '影视', '校园', '汽车'],
                category: ['total', 'science', 'digital', 'sport', 'fashion', 'film', 'school', 'car'],
                tabContent: [[], [], [], [], [], [], [], []],
                cur: 0
            };
        },
        created() {
            this.axios.get('/api/hot-lists/total').then(res => {
                this.tabContent.splice(0, 0, res.data.data.data);
            });
        },
        methods: {
            change(index) {
                this.cur = index;
                //取出对应的参数数组的值
                let param = this.category[index];
                //发起对应请求
                this.axios.get('/api/hot-lists/' + param).then(res => {
                    this.tabContent.splice(index, 0, res.data.data.data);
                });
                if (param == 'total') {
                    this.$router.push('/home/hot');
                } else {
                    this.$router.push('/home/hot?list=' + param);
                }

            }
        }
    };
</script>
<style lang="scss" scoped>
    @import url("../assets/css/basic.css");
    @import url('../assets/css/font-awesome-4.7.0/css/font-awesome.min.css');
    .tab-title {
        display: flex;
        align-items: center;
        height: 63px;
        padding: 0.625rem;
        background-color: #fff;
        li {
            width: 68px;
            height: 30px;
            line-height: 30px;
            text-align: center;
            border-radius: 2px;
            margin: 8px;
            background-color: #f6f6f6;
            color: #646464;
            cursor: pointer;
        }
        .active {
            background-color: #e6f3ff;
            color: #0c89ff;
        }
    }
    .hot-content{
        padding-right: 10px;
        [class*='hot-content-']{
            height: 200px;
            border-bottom: 1px solid #eee;
        }
        /*div{*/
            /*border: 1px solid #0084ff;*/
        /*}*/
        .hot-content-1{
            padding-right: 10px;
        }
        .col-hot-1{
            flex: 0 0 5%;
            .top[data-v-078288fa] {
                color: #fc9300;
            }
           h3{
               margin-top: 0;
               color: #8591a7;
           }
        }
        .col-hot-2{
            flex: 0 0 97%;
            a{
                font-weight: 600;
                font-size: 19px;
                color: #000;
            }
            .col-hot-2-1{
                min-width: 500px;
                height: 150px;
                p{
                    min-width: 400px;
                }
                .hot-ul{
                    margin:0px;
                    display: inline-block;
                    width: 100%;
                    padding-left: 0px;
                    color: gray;
                    fill: gray;
                    li:nth-child(2){
                        margin-left:3%;

                    }
                }
            }

        }

        .col-hot-img{
            flex: 0 0 25%;
            position: relative;
            margin-right: 10px;
            margin-left: 10px;
           img{
               width: 170px;
               height: 110px;
               position: absolute;
               margin: auto;
               top: 7px;
               left: 0;
               right: 0;
               bottom: 0;
           }
        }
    }



</style>

