<template>
  <div class="middle">
    <h3 id="comment">评论</h3>
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
          action=""
          ref="upload"
          list-type="picture-card"
          :on-preview="handlePictureCardPreview"
          :http-request="handleFile" 
          :on-success="handleSuccess"
          :headers="
          {Authorization: `Bearer [${$store.state.user.userInfo.token}]`}"
          name="files"
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
      fileList: [],
      pics:[]
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
    handleSuccess(response, file, fileList){
      // console.log(response, 111);
      // console.log(file, 222);
      console.log(fileList,333)
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
      uploadData.pics = this.pics;
      let token = JSON.parse(localStorage.getItem("store")).user.userInfo
        .token;
      // console.log(token);
      // console.log(uploadData);
      this.$axios({
        url: "/comments",
        method: "post",
        headers: {
          Authorization: `Bearer ${token}`
          // ContentType:'application/json'
        },
        data: uploadData
      })
        .then(res => {
          // console.log(res);
          if(res.status===200){
            this.$message.success('提交成功')
            this.textarea='';
            this.follow=0;
            this.pics=[];
            this.fileList=[];
            this.$store.commit("post/setCommentIsShow", 0);
            this.$store.commit('post/setStart',0);
            this.$refs.upload.clearFiles();
            this.$axios({
              url:'/posts/comments',
              params:{
                post:uploadData.post,
                _limit:2,
                _start:0
              }
            }) .then(res=>{
              // console.log(res)
              this.$store.commit('post/setCommentCount',res.data.total)
            })
          }
          // this.$router.push("/post/detail?id=" + this.data.data[0].id);
        })
        .catch(err => {
          // console.log(123),
          console.log(err);
        });
    },
    handleChange(file, fileList) {
      // this.fileList = fileList;
      console.log(this.fileList);
    },
    handleFile(files){
      this.$axios
        .post("http://127.0.0.1:1337/upload", null, {
          transformRequest: [
            () => {
              let formData = new FormData();
              formData.append("files", files.file);
              return formData;
            }
          ]
        })
        .then(res => {
          // this.discussImg=data.data
          this.pics.push(res.data[0]);
          console.log(this.pics);
          // this.pics=[]
          // console.log(this.content.pics);
        });
    }
  },
  mounted() {
    // console.log(localStorage.getItem('yourkey'))
    this.$store.commit("post/setCommentIsShow", 0);
    this.tokenOrg = JSON.parse(
      localStorage.getItem("store")
    ).user.userInfo.token;
    setTimeout(()=>{
      console.log(this.$store.state.user.userInfo.token);
      console.log(JSON.parse(localStorage.getItem("store")).user.userInfo.token)
    },10)
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
h3 {
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
.cmt-input {
  margin-bottom: 30px;
}
</style>