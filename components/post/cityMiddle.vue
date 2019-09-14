<template>
  <div class="middle">
    <h3>评论</h3>
    <div v-show="$store.state.post.commentIsShow">
      <el-tag
        closable
        :disable-transitions="false"
        @close="handleClose"
      >{{$store.state.post.commentInfo.nickname}}</el-tag>
    </div>
    <el-input type="textarea" :rows="2" resize="none" placeholder="请输入内容" v-model="textarea"></el-input>
    <el-row class="cmt-input" type="flex" justify="space-between">
      <div style="width:644px">
        <el-upload
          action="https://jsonplaceholder.typicode.com/posts/"
          list-type="picture-card"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove"
          :on-change="handleChange"
        >
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible" size="tiny">
          <img width="100%" :src="dialogImageUrl" alt />
        </el-dialog>
      </div>
      <div style="width:56px">
        <button
          type="info"
          style="width:100%;backgroundColor:#409eff;border-radius:5px"
          @click="handleUpload"
        >提交</button>
      </div>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      textarea: "",
      dialogImageUrl: "",
      dialogVisible: false,
      fileList: []
    };
  },
  props: {
    data: {
      type: Object,
      default: {}
    }
  },
  methods: {
    handleClose() {
      this.$store.commit("post/setCommentIsShow", 0);
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
      // this.handleUpload=fileList
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleUpload() {
      // console.log(this.fileList);
      // console.log(this.data.data[0].id)
      let uploadData = {};
      uploadData.content = this.textarea;
      uploadData.post = this.data.data[0].id;
      if (this.$store.state.post.commentIsShow) {
        uploadData.follow = this.$store.state.post.commentInfo.id;
      }
      uploadData.pics = this.fileList;
      let token = JSON.parse(localStorage.getItem("yourkey")).user.userInfo
        .token;
      // console.log(token);
      console.log(uploadData);
      // this.$axios({
      //   url:'/comments',
      //   method:'post',
      //   headers:{
      //     Authorization:`Bearer ${token}`,
      //     // ContentType:'application/json'
      //   },
      //   data:uploadData,
      // }) .then(res=>{
      //   console.log(res)
      // }) .catch(err=>{
      //   // console.log(123),
      //   console.log(err)
      // })
    },
    handleChange(file, fileList) {
      this.fileList = fileList;
    }
  }
};
</script>

<style>
.el-upload-list--picture-card .el-upload-list__item {
  overflow: hidden;
  background-color: #fff;
  border: 1px solid #c0ccda;
  border-radius: 6px;
  box-sizing: border-box;
  width: 100px;
  height: 100px;
  margin: 0 8px 8px 0;
  display: inline-block;
}
.el-upload--picture-card {
  width: 100px;
  height: 100px;
  text-align: center;
  line-height: 100px;
}
.el-upload-list__item-actions {
  width: 100px !important;
  height: 100px !important;
  line-height: 100px;
}
h3{
  margin-bottom: 30px;
}
.el-textarea__inner {
  display: block;
  resize: vertical;
  padding: 5px 15px;
  margin: 10px 0;
  line-height: 1.5;
  box-sizing: border-box;
  width: 100%;
  font-size: inherit;
  color: #606266;
  background-color: #fff;
  background-image: none;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.cmt-input{
  margin-bottom: 30px
}
</style>