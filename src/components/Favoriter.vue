<template>
    <div id="favorite">
        <i class="fa fa-star"></i>  <span>热门收藏夹</span>
        <div class="container" >
            <div class="card"   v-for="(favorite,index) in favorites" :key="index">
                <div class="card-heard">
                    <div class="card-header-row">
                        <div class="header-col-1"><h3>{{ favorite.title }}</h3></div>
                        <div class="header-col-2"><input type="button" value="关注收藏夹"></div>
                    </div>
                    <div class="card-header-row">
                        <div class="header-col-3">
                            <ul class="" style="margin-left: -20px">
                                <li><img :src="favorite.creatorAvatar" alt=""></li>
                                <li>{{ favorite.creatorName }}</li>
                                <li class="header-text"><div class="line">创建</div></li>
                                <li class="header-text">{{ favorite.followers }}人关注</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="card-body">
                    <div class="card-body-row"><div class="card-col-1">{{ favorite.questionTitle}}</div></div>
                    <div class="card-body-row"><div class="card-col-2">{{ favorite.answerAuthorName}}:{{ favorite.answerContent}}</div></div>
                    <div class="card-body-row"><div class="card-col-3">
                        <ul class="body-ul">
                            <li>回答</li>
                            <li>{{ favorite.voteUpCount }}赞同</li>
                            <li>{{ favorite.commentCount }}评论</li>
                        </ul>
                    </div></div>
                    <div class="card-body-row"><div class="card-col-1">{{ favorite.questionTitle}}</div></div>
                    <div class="card-body-row"><div class="card-col-2">{{ favorite.answerAuthorName}}:{{ favorite.answerContent}}</div></div>
                    <div class="card-body-row"><div class="card-col-3">
                        <ul class="body-ul">
                            <li>回答</li>
                            <li>{{ favorite.voteUpCount }}赞同</li>
                            <li>{{ favorite.commentCount }}评论</li>
                        </ul>
                    </div></div>

                    <div class="card-body-row"><div class="card-col-4">已经收藏{{ favorite.totalCount }}条内容<i class="fa fa-angle-right"></i></div></div>
                </div>
            </div>
            <div class="more">
                <router-link to="/more-favorites"><input type="button" value="查看更多收藏夹"></router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Favoriter",
        data(){
            return {
                favorites:[]
            }
        },
        created() {
            this.axios.get('http://localhost:8080/api/favorites/hotFavorites').then(res => {
                console.log(res);
                this.favorites = res.data.data;
            });
        }
    }
</script>

<style lang="scss" scoped>
    @import url('../assets/css/basic.css');
    #favorite{
        margin-top:50px;
        width: 100%;
    }
  span {
      margin-left: 12px;
      font-size: 25px;
      font-weight: 600;
      font-synthesis: style;
  }
  .container{
      padding:0 20px;
      height: 700px;
      width: 100%;
      input[type=button]{
          width: 150px;
          height:50px;
          margin-top:20px ;
          text-align: center;
          border-radius:50px;
          margin-left: 40%;
          padding: 12px;
          border: none;
          background: #fff;
          font-weight: 600;
          color: #8590a6;
      }


  }
    i{
        color:#0084ff;
        font-size: 36px;
        margin-left: 40px;
    }
    .card{
        width: 450px;
        height: 364px;
        border-radius: 4px;
        -webkit-box-shadow: 0 1px 3px 0 rgba(26,26,26,.1);
        box-shadow: 0 1px 3px 0
        rgba(26,26,26,.1);
        background-color:#fff;
        margin: 20px 15px;
        float: left;
        .card-heard{
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            height: 112px;
            border-bottom: 1px solid #ebebeb;
            overflow: hidden;
            margin:0px 10px 20px 20px;
            width: 92%;
            .card-header-row{
                margin:15px;
                display: flex;
                width: 100%;
                height: 48%;
                .header-col-1{
                    flex: 0 0 60%;

                }
                .header-col-3{
                    flex: 0 0 100%;
                    ul{
                        margin-left: -40px;
                        margin-top: -20px;
                        width: 100%;
                        display: flex;
                        img{
                            margin-left: -30px;
                            width: 30px;
                            height: 30px;
                            border-radius: 2px;
                        }
                        li{
                            margin-left: 10px;
                            list-style-type: none;
                        }
                        li:last-child{
                            margin-left: 30px;
                        }
                        .header-text{
                            color: #999;
                        }
                    }
                }
                .header-col-2{
                    flex: 0 0 37%;
                    input[type=button]{
                        width: 102px;
                        height: 34px;
                        border-radius: 3px;
                        font-size: 14px;
                        font-weight: 600;
                        color: #0084ff;
                        border: none;
                        float: right;
                        outline: none;
                        padding-top: 4px;
                        background-color: rgba(0,132,255,.08);
                        margin-top: 20px;
                    }
                }
            }

        }
        .line{
            padding-right: 20px;
            border-right: 2px solid #eee;
            margin-right: -15px;
        }
        .card-body{
            width: 92%;
            height: 210px;
            margin: 20px 20px 20px 20px;
            .card-body-row{
                display: flex;
                width: 100%;
                margin-top: -3px;
                .card-col-1{
                    flex: 0 0 100%;
                    display: block;
                    height: 21px;
                    line-height: 21px;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    font-weight: 600;
                    font-synthesis: style;
                }
                .card-col-2{
                    margin-top: 4px;
                    height: 21px;
                    line-height: 21px;
                    color:
                            #444;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
                .card-col-3{
                   .body-ul{
                       height: 17px;
                       line-height: 17px;
                       font-size: 12px;
                       color: #999;
                       display: flex;
                       margin-left: -20px;
                       list-style-type: none;
                       li:first-child{
                           margin-left: -15px;
                       }
                       li{
                           margin-left: 20px;
                       }

                   }
                }
                .card-col-4{
                    height: 24px;
                    font-size: 14px;
                    color: #8590a6;
                    font-weight: 600;
                    font-synthesis: style;
                    i{
                        color: #8590a6;
                        font-size: 22px;
                        margin:5px 20px;
                    }
                }
            }
        }
    }

</style>
