<template>
  <div class="comment-content" >
    <item :data="data.parent" v-if="data.parent"/>
    <el-row type="flex" justify="space-between" class="title">
      <div class="userInfo" type="flex">
        <span>{{data.account.nickname}}</span>
        <span>{{data.account.created_at | timeFormat}}</span>
      </div>
      <div class="level" style="margin-right:10px">{{data.level}}</div>
    </el-row>
    <div class="content" @mouseenter="isShow=true" @mouseleave="isShow=false">{{data.content}}</div>
    <div class="reSay" @mouseenter="isShow=true" @mouseleave="isShow=false">
      <a href="JavaScript:" v-show="isShow" @click="setCommentId(data.id)">回复</a>
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
    setCommentId(id){
      // console.log(id)
      this.$store.commit('post/setCommentId',id)
      console.log(this.$store.state.post.commentId)
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
      default: {}
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