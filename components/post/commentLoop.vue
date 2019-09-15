<template>
  <div class="comment-content" >
    <item :data="data.parent" v-if="data.parent"/>
    <el-row type="flex" justify="space-between" class="title">
      <div class="userInfo" type="flex">
        <span>{{data.account.nickname}}</span>
        <span>{{data.created_at | timeFormat}}</span>
      </div>
      <div class="level" style="margin-right:10px">{{data.level}}</div>
    </el-row>
    <div class="content" @mouseenter="isShow=true" @mouseleave="isShow=false">
      {{data.content}}
      <el-row type="flex">
        <img :src="`${$axios.defaults.baseURL}${imgItem.url}`" alt="" v-for="(imgItem,imgId) in data.pics" :key="imgId" style="width:100px">
      </el-row>
    </div>
    <div class="reSay" @mouseenter="isShow=true" @mouseleave="isShow=false">
      <a href="JavaScript:" v-show="isShow" @click="setCommentId(data)">回复</a>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  name: "item",
  data() {
    return {
      isShow: false
    };
  },
  methods: {
    setCommentId(item){
      const commentInfo = {};
      commentInfo.id=item.id;
      commentInfo.nickname = item.account.nickname
      this.$store.commit('post/setCommentInfo',commentInfo)
      this.$store.commit('post/setCommentIsShow',1)
      // console.log(this.$store.state.post.commentInfo)
    }
  },
  filters: {
    timeFormat(time) {
      return moment(time).format("YYYY-MM-DD HH:mm");
    }
  },
  props: {
    data: {
      type: Object,
      default: {

      }
    }
  }
};
</script>

<style lang="less" scoped>
.comment-content {
  border: 1px solid #ccc;
  background-color: #eee;
  position: relative;
  margin: 1px;
  .title{
      padding-left: 10px;
  }
  .content{
      padding-left: 10px;
  }
  .reSay {
    height: 20px;
    a {
      position: absolute;
      right: 0;
      text-decoration: none;
      font-size: 16px;
    }
  }
}
</style>