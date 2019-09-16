<template>
  <div class="aside">
    <p>相关攻略</p>
    <hr />
    <nuxt-link :to="'/post/detail?id='+item.id"  v-for="(item,index) in dataList" :key="index">
    <el-row type="flex" class="loop"  @click.native="handle(item.id)"> 
      <div class="img">
        <img
          :src="item.images[0]"
          alt
        />
      </div>
      <div class="content">
          <h5>{{item.title}}</h5>
          <span>{{item.created_at | timeFormat}}
          阅读 {{item.watch}}</span>
      </div>
    </el-row>
    </nuxt-link>
    <!-- {{data}} -->
  </div>
</template>

<script>
import moment from 'moment'
export default {
  props: {
    data: {
      type: Object,
      default: {}
    }
  },
  data() {
    return {
      dataList: []
    };
  },
  mounted() {
    if (this.data.data) {
      this.$axios({
        url: "/posts/recommend",
        params: {
          id: this.data.data[0].id
        }
      }).then(res => {
        // console.log(res)
        this.dataList = res.data.data;
      });
    }
  },
filters:{
    timeFormat(time){
        return moment(time).format('YYYY-MM-DD hh:mm')
    }
},
methods:{
    handle(id){
        console.log(this.$route)
        // this.location.href(`${this.$axios.defaults.baseURL}/post/detail?id=${id}`)
    }
}
};
</script>

<style lang="less" scoped>
.aside {
  p {
      font-size: 20px;
        padding: 20px 0
  }
  hr {
      color: #eee;
  }
  .loop {
      cursor: pointer;
      padding: 20px 0;
      border-bottom: 1px solid #aaa;
    .img {
      width: 100px;
      height: 80px;
      flex-shrink: 0;
      background: #ddd;
      overflow: hidden;
      margin-right: 10px;
      img{
          width: 100%;
          height: 100%;
      }
    }
    .content{
        position: relative;
        width: 170px;
        span{
          width: 170px;
            font-size: 12px;
            color: #aaa;
            position: absolute;
            bottom: 0
        }
    }
  }
}
</style>