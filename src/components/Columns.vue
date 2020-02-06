<template>
    <div id="columns">
        <svg class="Zi Zi--EditCircle" fill="#0084ff" viewBox="0 0 24 24"
             width="36" height="36"><path d="M12 22C6.477 22 2 17.523 2
             12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm4.043-15.524a.745.745 0 0 0-1.053.017l-6.857
        7.071 2.237 2.17 6.857-7.071a.743.743
         0 0 0-.016-1.052l-1.168-1.135zm-9.028
          9.476l-.348 1.381 1.37-.39 1.274-.36-1.973-1.916-.323 1.285z"
            fill-rule="evenodd"></path></svg>
        <span class="title">专栏</span>
        <div class="container">
           <div class="content">
               <div class="card" v-for="(column,index) in columns" :key="index">
                   <div class="card-header">
                       <div class="avatar">
                           <img :src="column.imageUrl" alt="头像">
                       </div>
                   </div>
                   <div class="card-body">
                       <div  class="card-title" >
                           <a href="">{{ column.title }}</a>
                       </div>

                       <div class="count">
                           <span class="count-span">{{ column.followers }}关注</span><span class="count-span">.{{ column.articlesCount }}文章</span>
                       </div>
                       <div class="card-info">
                          {{  column.description }}
                       </div>
                       <div class="card-button">
                           <router-link v-bind:to="'/column/' +index">
                           <input type="button" value="进入专栏">
                           </router-link>
                       </div>
                   </div>
               </div>
               <router-link to="/more-columns">
                   <div class="div-bottom" style="margin-left: 380px">
                   查看更多专栏<i class=" fa fa-angle-right"></i>
                   </div>
               </router-link>

               <div class="footer">
                   <p>刘看山，知乎指南，知乎协议，应用，工作，联系我们</p>
               </div>
           </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "Columns",
       data(){
            return{
                columns:[]
            }
       },
        created() {
            this.axios.get('http://localhost:8080/api/columns/topColumns').then( res =>{
                console.log(res)
                this.columns = res.data.data
            })
        }

    }
</script>

<style lang="scss" scoped>
   @import url("../assets/css/basic.css");
   @import url("../assets/css/style.css");
    #columns{
        margin-top:220px;
        width: 100%;
    }
   .title {
       margin-left: 92px;
       font-size: 25px;
       font-weight: 600;
       font-synthesis: style;
   }
   .Zi{
       position: absolute;
       color:#0084ff;
       font-size: 36px;
       margin-left: 40px;
       margin-top:1px;
   }
 .container {
     padding: 25px 0px;
     height: 700px;
     margin: auto;
     width: 95%;
     .content{
         width: 100%;
         height: 100%;
         .footer{
             width: 100%;
             text-align: center;
             height: 24px;
             font-size: 13px;
             color: #8590a6;
             margin-top: 480px;
             margin-left: -250px;
             position: absolute;

         }
         .div-bottom{
             margin-top: 350px;
             margin-left:450px;

             i{
                 margin-left: 10px;
                 font-size: 20px;
             }
         }

     }
     .card{

         text-align: center;
         padding: 28px 24px;
         box-sizing: border-box;
         width: 235px;
         height: 313px;
         border-radius: 4px;
         -webkit-box-shadow: 0 1px 3px 0 rgba(26,26,26,.1);
         box-shadow: 0 1px 3px 0
         rgba(26,26,26,.1);
         background-color: #fff;
         margin-left: 10px;
         width: 23%;
         float: left;
         .card-header{
             text-align: center;
             .avatar {
                 width: 80px;
                 height: 80px;
                 margin: 0 auto;

                 img {
                     border-radius: 50%;
                     width: 100%;
                     height: 100%;
                 }
             }
             }
         .card-body{
             width: 100%;
             .card-title{
                 margin-top:10px;
                 height: 22px;
                 line-height: 22px;
                 font-size: 16px;
                 max-width: 187px;
                 white-space: nowrap;
                 overflow: hidden;
                 text-overflow: ellipsis;
                 font-weight: 600;
                 font-synthesis: style;
                  text-align: center;
                 a{
                     color: inherit;
                     text-decoration: none;
                 }

             }
             .count{
                 margin-top: 4px;
                 height: 17px;
                 line-height:17px;
                 font-size: 12px;
                 color:
                         #999;
                .count-span{

                }
             }
             .card-info{
                 margin-top: 20px;
                 height: 40px;
                 line-height: 20px;
                 font-size: 14px;
                 color: #444;
                 text-align: center;
                 display: -webkit-box;

                 overflow: hidden;
                 text-overflow: ellipsis;
             }
             .card-button{
                 input[type=button]{
                     margin-top: 20px;
                     padding: 0 16px;
                     height: 34px;
                     font-size: 14px;
                     color: #0084ff;
                     background-color: rgba(0,132,255,.08);
                     border-radius: 3px;
                     font-weight: 600;
                     font-synthesis: style;
                     cursor: pointer;
                     border: none;
                     outline: none;
                 }
             }

         }

         }
     }


</style>
