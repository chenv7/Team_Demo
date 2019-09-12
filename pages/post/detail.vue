<template>
  <div class="detail">
      <el-row type="flex">
          <el-col>
              <div class="content">
                  <CityTop :data="destData"/>
                  <CityMiddle/>
                  <CityBottom/>
              </div>
          </el-col>
          <el-col>
              <div class="aside"></div>
          </el-col>
      </el-row>
  </div>
</template>

<script>
import CityTop from '@/components/post/cityTop'
import CityBottom from '@/components/post/cityBottom'
import CityMiddle from '@/components/post/cityMiddle'
export default {
    components:{
        CityTop,
        CityBottom,
        CityMiddle
    },
    data(){
        return{
            destData:{
                data:[
                    {title:''}
                ],
            }
        }
    },
    mounted(){
        // console.log(this.$route.query)
        const {id} = this.$route.query;
        this.$axios({
            url:'/posts',
            params:{id}
        }) .then(res=>{
            // console.log(res)
            this.destData = res.data
        }) .catch(err=>{
            console.log(err)
        })
    }
}
</script>

<style lang='less' scoped>
.detail{
    margin: 0 auto;
    width: 1000px;
    .content{
        // background-color: red;
        width: 700px;
        .middle{
            background-color: pink;
            height: 200px;
        }
        
    }
    .aside{
        background-color: blue;
        width: 280px;
        margin-left: 20px;
        height: 200px;
    }
}
</style>