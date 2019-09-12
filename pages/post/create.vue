<template>
  <div class="container">
    <div class="main">
      <el-row type="flex" justify="space-between">
        <div class="publish">
          <h2 class="title">发表新攻略</h2>
          <p class="share">分享你的个人游记，让更多人看到哦！</p>
          <el-form ref="form" class="form">
            <el-form-item class="input-title">
              <el-input v-model="addPost.title" placeholder="请输入标题"></el-input>
            </el-form-item>
            <el-form-item class="textarea">
              <VueEditor :config="config" ref="vueEditor" />
            </el-form-item>
            <el-form-item label="选择城市" class="city">
              <i class="el-icon-location"></i>
              <el-autocomplete
                v-model="addPost.city"
                :fetch-suggestions="querySearchCity"
                :trigger-on-focus="false"
                placeholder="请搜索游玩城市"
                @select="handleSelect"
                @blur="handleBlur"
              ></el-autocomplete>
            </el-form-item>
          </el-form>
          <div class="submit-btn">
            <el-button type="primary" size="small" @click="handleAdd">发布</el-button>
            <span class="submit-text">
              或者
              <a href="#">保存到草稿箱</a>
            </span>
          </div>
        </div>
        <div class="drafts-aside">
          <h4>草稿箱 ( 1 )</h4>
          <div class="drafts-list">
            <div class="drafts-item">
              <div class="drafts-post-title">
                文字
                <i class="el-icon-edit"></i>
              </div>
              <p class="time">{{new Date() | timeFormat}}</p>
            </div>
            <div class="drafts-item">
              <div class="drafts-post-title">
                文字
                <i class="el-icon-edit"></i>
                <p class="time">{{new Date() | timeFormat}}</p>
              </div>
            </div>
          </div>
        </div>
      </el-row>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>

<style lang="less" scoped>
.container {
  width: 1000px;
  min-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  .main {
    .publish {
      width: 750px;
      .title {
        font-size: 22px;
        font-weight: normal;
        margin-bottom: 10px;
      }
      .share {
        font-size: 12px;
        color: #999;
        margin-bottom: 10px;
      }
      .form {
        .textarea {
          /deep/.ql-editor {
            height: 400px;
          }
        }
        .city {
          .el-icon-location {
            font-size: 18px;
            color: #00a0ff;
          }
        }
      }
      .submit-btn {
        .submit-text {
          font-size: 14px;
          margin-left: 10px;
          a {
            color: #ffa500;
            &:hover {
              text-decoration: underline;
            }
          }
        }
      }
    }
    .drafts-aside {
      width: 200px;
      padding: 10px;
      box-sizing: border-box;
      border: 1px solid #ddd;
      height: fit-content;
      h4 {
        font-weight: normal;
        font-size: 16px;
        color: #666;
        margin-bottom: 10px;
      }
      .drafts-list {
        .drafts-item {
          margin-bottom: 10px;
          .drafts-post-title {
            font-size: 14px;
          }
          .time {
            font-size: 14px;
            color: #999;
          }
        }
      }
    }
  }
}
</style>