<template>
  <div class="bottom">
    <div class="comment-item" v-for="(item,index) in resData.data" :key="index">
      <el-row type="flex">
        <el-col :span="1">
          <img
            :src="`${$axios.defaults.baseURL}${item.account.defaultAvatar}`"
            alt
            style="width:70%;border-radius:50%"
          />
        </el-col>
        <el-col :span="23" class="comment">
          <el-row type="flex" justify="space-between">
            <div class="userInfo" type="flex">
              <span>{{item.account.nickname}}</span>
              <span>{{item.created_at | timeFormat}}</span>
            </div>
            <div class="level" style="margin-right:10px">{{item.level}}</div>
          </el-row>
          <CommentLoop :data="item.parent" v-if="item.parent" />
          <div class="content" @mouseenter="current=index" @mouseleave="current=-1">
            <span>{{item.content}}</span>
            <el-row type="flex">
              <img
                :src="`${$axios.defaults.baseURL}${imgItem.url}`"
                alt
                v-for="(imgItem,imgId) in item.pics"
                :key="imgId"
              />
            </el-row>
          </div>
          <div class="reSay" @mouseenter="current=index" @mouseleave="current=-1">
            <a href="#comment" v-show="current===index" @click="setCommentId(item)">回复</a>
          </div>
        </el-col>
      </el-row>
    </div>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="$store.state.post._start"
      :page-sizes="[2, 5, 10, 20]"
      :page-size="commentsData._limit"
      layout="total, sizes, prev, pager, next, jumper"
      :total="resData.total"
      class="pagination"
    ></el-pagination>
  </div>
</template>

<script>
import CommentLoop from "@/components/post/commentLoop";
import moment from "moment";
export default {
  components: {
    CommentLoop
  },
  data() {
    return {
      current: 0,
      isShow: false,
      commentsData: {
        post: 0,
        // _sort:'1',
        _limit: 2,
        _start: 0
      },
      resData: {
        //   account:{
        //       nickname:'',
        //       created_at:''
        //   }
      }
    };
  },
  watch: {
    "$store.state.post.commentCount": {
      handler(newStart, oldStart) {
        this.commentsData._start = 0;
        const { id } = this.$route.query;
        this.commentsData.post = id;
        console.log(this.commentsData)
        this.$axios({
          url: "/posts/comments",
          params: this.commentsData
        }).then(res => {
          this.resData = res.data;
          // console.log(this.resData);
          this.$store.commit("post/setCommentCount", res.data.total);
          // console.log(this.$axios.defaults.baseURL);
        });
      },
      deep: true,
      immediate: true
    },
    
  },
  filters: {
    timeFormat(time) {
      return moment(time).format("YYYY-MM-DD HH:mm");
    }
  },
  mounted() {
    this.$store.commit("post/setCommentIsShow", 0);
    this.init();
  },
  methods: {
    setCommentId(item) {
      // console.log(item);
      const commentInfo = {};
      commentInfo.id = item.id;
      commentInfo.nickname = item.account.nickname;
      this.$store.commit("post/setCommentInfo", commentInfo);
      this.$store.commit("post/setCommentIsShow", 1);
      // console.log(this.$store.state.post)
    },
    init() {
      const { id } = this.$route.query;
      this.commentsData.post = id;
      // console.log(this.commentsData)
      this.$axios({
        url: "/posts/comments",
        params: this.commentsData
      }).then(res => {
        this.resData = res.data;
        // console.log(this.resData);
        this.$store.commit("post/setCommentCount", res.data.total);
        // console.log(this.$axios.defaults.baseURL);
      });
    },
    handleSizeChange(val) {
      this.commentsData._limit = val;
      this.init();
    },
    handleCurrentChange(val) {
      this.$store.commit("post/setStart", (val - 1) * 2);
      // console.log(this.$store.state.post._start,this.commentsData)
      this.commentsData._start = this.$store.state.post._start;
      this.init();
      // console.log(this.$store.state.post.commentCount);
    }
  }
};
</script>

<style lang="less" scoped>
.bottom {
  border: 1px solid #999;
  .comment-item {
    border-bottom: 1px dashed #666;
    padding: 10px;
    .comment {
      .content{
        img{
          width: 100px;
          
        }
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
  }
  .pagination {
    margin: 10px auto;
  }
}
</style>