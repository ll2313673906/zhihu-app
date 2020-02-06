<template>
    <div id="explore">
       <div class="container">
           <h2>圆桌讨论</h2>
              <div class="content">
                <div class="card" v-for="(roundTable,index) in roundTables" :key="index">
                    <div class="card-header" >
                        <img :src="roundTable.banner" alt="">

                    </div>
                    <div class="card-bottom">
                        <div class="name">
                            <h3>{{ roundTable.name }}</h3>
                            <p>{{ roundTable.urlToken }}</p>
                            <ul>
                                <li>{{ roundTable.visitsCount }}参与嘉宾</li>
                                <li>{{ roundTable.includeCount }} 关注</li>
                            </ul>

                        </div>
                    </div>

                </div>

              </div>
           <div class="more">
               <router-link to="/explore-more"><input type="button" value="查看更多圆桌"></router-link>
           </div>
           <Favorite></Favorite>
           <Columns></Columns>
           </div>
       </div>

</template>

<script>
    // 引入收藏夹组件
    import Favorite from '../components/Favoriter.vue'
    //引入专栏组件
    import Columns from '../components/Columns.vue'
    export default {
        name: "Explore",
      data(){
            return {
                roundTables:[],
            }
      },
        components:{
            Favorite,
            Columns
        },

        created() {
            this.axios.get('http://localhost:8080/api/roundTables/topFour').then(res => {
                console.log(res);
                this.roundTables = res.data.data;
            });
        }
    }
</script>

<style lang="scss" scoped>
#explore{
    width: 100%;
    padding: 80px;
    background: #eee;
   min-height:2500px;
}
h2 {
    margin: 0 20px;
}
.container{
    width:75%;
    min-height: 600px;
    .content{
          width:100%;
          margin-left: 10px;
          .card{
              width:45%;
              height: 364px;
              border-radius: 4px;
              -webkit-box-shadow: 0 1px 3px 0 rgba(26,26,26,.1);
              box-shadow: 0 1px 3px 0
              rgba(26,26,26,.1);
              background-color:#fff;
              margin:10px 15px;
              padding: 10px 10px 10px;
              float: left;

          }

      }
    .card-header{
        width: 100%;
        height: 250px;
        text-align: center;
        color: #fff;
        position: relative;
        float: left;

    }

    .name{
        width: 100%;

         ul{
             display: flex;
             padding-left: 0;
             li{
                 list-style-type: none;
             }
             li:last-child{
                 margin-left: 40px;
             }
         }
    }

}

       input[type=button]{
           width: 150px;
           height:50px;
           margin-top:50px ;
           text-align: center;
           border-radius:50px;
           margin-left: 40%;
           padding: 12px;
           border: none;
           background: #fff;
           font-weight: 600;
           color: #8590a6;
       }




</style>
