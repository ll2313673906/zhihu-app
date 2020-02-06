<template>
    <div id="home">
        <div class="container">
          <div class="left">
              <div class="banner">
                  <!--头部导航栏-->
                  <HomeHeader></HomeHeader>
              </div>
        </div>
          <div class="right">
                <HomeRight></HomeRight>
            </div>
        </div>
    </div>
</template>

<script>
    /*引入头部组件*/
    import HomeHeader from '../components/HomeHeader.vue'
    // 引入右边栏组件/
    import  HomeRight from '../components/HomeRight.vue'
    export default {
        name: "specials",
        data() {
            return {
                specials: [],
            };
        },
        /*组件*/
        components:{
        HomeHeader, /*头部导航栏*/
        HomeRight

        },
        created() {
            this.axios.get('http://localhost:8080/api/specials/all').then(res => {
                console.log(res);
                this.specials = res.data.data;
            });
        }
    };
</script>

<style lang="scss" scoped>
    #home{
        width: 100%;
        display: flex;
        margin: 0 12%;
    }
.banner{
    width: 100%;

}
    .container{
       min-width: 700px;
        padding: 20px 1%;
        margin:40px 4%;
        z-index: 22;
        display: flex;
         height: 9900px;

        .left{
            min-width: 740px;
            background:#fff;
            padding-left: 1%;
        }

    }

    h3{
       margin-top: 40px;
    }

.right{
    min-width:280px;
    margin: -25px 10px;

}
</style>
