<template>
  <div class="top">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/post' }">旅游攻略</el-breadcrumb-item>
      <el-breadcrumb-item>旅游详情</el-breadcrumb-item>
    </el-breadcrumb>
    <h1>{{data.data[0].title}}</h1>
    <hr>
    <div class="contentTime">
      <span class="updateTime">攻略：{{data.data[0].updated_at | timeFormat}}</span>
      <span class="watchCount"> 阅读：{{data.data[0].watch}}</span>
    </div>
    <div v-html="data.data[0].content" class="content1"></div>
    <el-row type="flex" justify="center" class="iconButton">
      <div class="ctrl-item">
        <i class="iconfont iconpinglun"></i>
        <p>评论({{$store.state.post.commentCount}})</p>
      </div>
      <div class="ctrl-item" @click="handleStar">
        <i class="iconfont iconstar1"></i>
        <p>收藏</p>
      </div>
      <div class="ctrl-item">
        <i class="iconfont iconfenxiang"></i>
        <p>分享</p>
      </div>
      <div class="ctrl-item" @click="handleLike">
        <i class="iconfont iconding"></i>
        <p>点赞(<span v-text="data.data[0].like"></span>)</p>
      </div>
    </el-row>
    <!-- <button @click="abc">123</button> -->
  </div>
</template>

<script>
import moment from 'moment'
export default {
    props:{
        data:{
            type:Object,
            default:{}
        }
    },
    filters:{
      timeFormat(time){
        return moment(time).format('YYYY-MM-DD HH:mm')
      },
      
    },
    methods:{
        abc(){
            console.log(this.data)
        },
        handleStar(){
          const {id} = this.$route.query
          // console.log(id)
          this.$axios({
            url:'/posts/star',
            params:{id},
            headers:{
              Authorization: `Bearer ${this.$store.state.user.userInfo.token}`
            }
            
          }) .then(res=>{
            console.log(res)
          })
        },
        handleLike(){
          const {id} = this.$route.query
          // console.log(id)
          this.$axios({
            url:'/posts/like',
            params:{id},
            headers:{
              Authorization: `Bearer ${this.$store.state.user.userInfo.token}`
            }
            
          }) .then(res=>{
            console.log(res)
          })
        }
    }
};
</script>

<style lang='less'>
  .top{
    margin-top: 20px;
    .contentTime{
        padding-left: 400px;
        position: relative;
        right: 0;
        color: #999;
        height: 40px;
        line-height: 40px;
        .watchCount{
          margin-left: 20px
        }
      }
    .content1{
      // width: 100%; 
      // background-color: blue;
      
      p{
        span{
          img{
            width: 700px;
          }
        }
      }
    }
    .iconButton{
      .ctrl-item{
        margin: 20px;
        text-align: center;
        cursor: pointer;
        i{
         font-size: 28px;
         color: orange;
         
        }
      }
    }
  }
</style>