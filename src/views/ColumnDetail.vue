<template>
    <div class="column-detail" >
     <div class="card" v-for="(column,index) in columns" :key="columns.index">
         <div class="title">{{ column.title }}</div>
         <div class="avatar"></div>
     </div>
    </div>
</template>

<script>
    export default {
        name: "ColumnDetail",
        data(){
            return{
                columns:[],
                index: this.$route.params.index
            }
        },
        created() {
            this.axios.get('http://localhost:8080/api/columns/topColumns/' + this.index).then( res =>{
                console.log(res)
                this.columns = res.data.data
            })
        }
    }
</script>

<style scoped>
    .column-detail{
        background: red;
    }
</style>
