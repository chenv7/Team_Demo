<template>
    <div class="tab">
        <span v-for="(item,index) in ['新闻','体育','财经']" :key="index" @click="handc(index)" :class="{active : curron===index}">{{item}}</span>
        <ul v-show="curron === 0">
            <li>大大大大新闻</li>
            <li>大大大大新闻</li>
            <li>大大大大新闻</li>
        </ul>
        <ul v-show="curron === 1">
            <li>体育体育体育</li>
            <li>体育体育体育</li>
            <li>体育体育体育</li>
        </ul>
        <ul v-show="curron === 2">
            <li>财经财经财经</li>
            <li>财经财经财经</li>
            <li>财经财经财经</li>
        </ul>
    </div>
    
</template>
<script>
export default {
    data(){
        return{
            curron : 0
        }
    },
    methods:{
        handc(index){
            this.curron = index
        }
    }
}
</script>
<style lang="less" scoped>
    .active{
        color: red
    }
</style>