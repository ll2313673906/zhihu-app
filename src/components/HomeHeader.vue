<template>
    <div id="home-header">
      <div class="home-nav">
             <ul class="home-nav-ul">
                 <li class="home-nav-item" ><router-link to="/home/recommoned" exact>推荐</router-link></li>
                 <li class="home-nav-item" ><router-link to="/home/follow" exact>关注</router-link></li>
                 <li class="home-nav-item" ><router-link to="/home/hot" exact>热榜</router-link></li>
             </ul>
      </div>
    <router-view/>
    </div>

</template>

<script>
    export default {
        name: "HomeHeader"
    }
</script>

<style scoped>
#home-header{
    width: 100%;
    height:50px;
    background:#fff;
    border-bottom: 1px solid #eee;
    margin-top: 3px;
}

.home-nav-ul{
    display: flex;
    width:100%;
    height: 50px;
}
    .home-nav-item{
        list-style-type: none;
        margin: 20px 20px;
        color: #000;
    }
    a{
        height: 30px;
        display: inline-block;
    }
.router-link-active {
  color: #0084ff;

}

router-link {
    text-decoration: none;
}

</style>
