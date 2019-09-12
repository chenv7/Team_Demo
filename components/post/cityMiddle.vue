<template>
  <div class="middle">
    <h3>评论</h3>
    <el-input type="textarea" :rows="2" resize="none" placeholder="请输入内容" v-model="textarea"></el-input>
    <el-row class="cmt-input" type="flex" justify="space-between">
      <div style="width:644px">
        <el-upload
          action="https://jsonplaceholder.typicode.com/posts/"
          list-type="picture-card"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove"
        >
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible" size="tiny">
          <img width="100%" :src="dialogImageUrl" alt />
        </el-dialog>
      </div>
      <div style="width:56px">
        <button type="info" style="width:100%;backgroundColor:#409eff;border-radius:5px">提交</button>
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
      dialogVisible: false
    };
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    }
  }
};
</script>

<style>
.el-upload--picture-card{
    width: 100px;
    height: 100px;
    text-align: center;
    line-height: 100px
}
.el-upload-list__item-actions{
    width: 100px !important;
    height: 100px !important;
    line-height: 100px;
    
}
</style>