<template>
    <div id="explore-more">

        <div class="container">
            <div class="header">
                <div class="header1">圆桌</div>
                <div class="header2">举办圆桌</div>
            </div>
            <div class="content">
                <div class="card" v-for="(roundTable,index) in roundTables" :key="index">
                    <div class="col-4 " >
                        <img :src="roundTable.banner" alt="">
                        <div class="top">{{ roundTable.name }}</div>
                    </div>
                    <p class="meta">该圆桌被{{ roundTable.includeCount }}次浏览</p>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "explore-more",
        data(){
            return {
             roundTables:[]
            }
        },
        created() {
            this.axios.get('http://localhost:8080/api/roundTables/all').then(res => {
                console.log(res);
                this.roundTables = res.data.data;
            });
        }
    }
</script>

<style lang="scss" scoped>
.header{
    width: 1100px;
    height: 40px;
    background:#fff;
    padding-left:20%;
    padding-top:15px;
    margin-top: 60px;
   display: flex;
    font-weight: bold;
    border-bottom: 1px solid #eee;
    .header1{
        margin-left: -170px;
    }
    .header2{
        color:#0084ff ;
        margin-left: 850px;
    }
}

.container{
    width: 1100px;
    background: #fff;
    margin-top: 10px;
    min-height: 500px;
}


.content{
    background: #fff;
    margin-top:10px;
    margin-left:40px;

    height: 500px;
    width: 95% ;

    .card{
        width: 210px;
        height: 210px;
        margin-top: 30px;
        float: left;
        margin-left: 35px;
    }
}
.bottom {
    margin-top: 0;
    scroll-padding: 20px;
}
.top{
    width: 700px;
    display: flex;
    margin-top: -40px;
    text-align: center;
    word-break: break-all;word-wrap: break-word;
    height: 20%;
    color: #fff;
}
.meta {
    color: #8590a6;
    font-size: 13px;
    margin-top: 8px;
}


.col-4 {
    box-shadow: 0 2px 10px 0 rgba(0,0,0,0.1);
    width: 100%;
    height: 190px;
    img{
        width: 100%;
        height: 100%;
        border-radius: 5px;
    }
}




</style>
