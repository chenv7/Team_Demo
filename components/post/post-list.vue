<template>
  <div class="post-list">
    <div class="post-item" v-for="(item,id) in data.data" :key="id">
      <nuxt-link :to="'/post/detail?id='+item.id">
      <h4 class="post-title">{{item.title}}</h4>
      <p class="post-desc" v-html="item.content"></p>
      <div class="post-images">
        <a href v-for="(imgItem,imgIndex) in item.images" :key="imgIndex">
          <img :src="imgItem" alt />
        </a>
      </div>
      </nuxt-link>
      <div class="post-footer">
        <div class="post-footer-left">
          <span>
            <i class="el-icon-location-outline"></i>
            <span >
              <span>{{item.cityName}}</span>
            </span>
          </span>&nbsp;&nbsp;&nbsp;
          <div class="post-user">
            by&nbsp;&nbsp;
            <a href >
              <img :src="`${$axios.defaults.baseURL}${item.account.defaultAvatar}`" />
            </a>&nbsp;&nbsp;
            <a href >
              <span>{{item.account.nickname}}</span>
            </a>
          </div>&nbsp;&nbsp;&nbsp;
          <span>
            <i class="el-icon-view"></i> {{item.watch}}
          </span>
        </div>
        <span class="post-footer-right">{{item.like}} 赞</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dataList: [],
    };
  },
  props:{
    data:{
      type:Object,
      default:{}
    }
  },
  mounted() {
    this.$axios({
      url: "/posts?_start=0&_limit=3"
    }).then(res => {
      // console.log(res);
      this.dataList = res.data.data;
    });
  }
};
</script>
<style lang="less" scoped>
.post-list {
  margin-left: 30px;
  .post-item {
    width: 100%;
    padding: 20px 0;
    border-bottom: 1px solid #eee;

    .post-title {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin-bottom: 15px;
      font-weight: 400;
      font-size: 18px;
      a {
        text-decoration: none;
        color: inherit;
        &:hover {
          color: orange;
        }
      }
    }
    .post-desc {
      margin-bottom: 15px;
      line-height: 1.5;
      font-size: 14px;
      height: 63px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      a {
        text-decoration: none;
        color: #666;
      }
    }
    .post-images {
      overflow: hidden;
      margin: 15px 0;
      align-items: center;
      justify-content: space-between;
      display: flex;
      box-sizing: border-box;
      img {

        width: 220px;
        height: 150px;
        display: block;
      }
    }
    .post-footer {
      justify-content: space-between;
      display: flex;
      box-sizing: border-box;
      .post-footer-left {
        display: flex;
        font-size: 12px;
        color: #999;
        margin-right: 10px;
        .post-user {
          display: flex;
          a {
            text-decoration: none;
            color: orange;
          }
          img {
            display: block;
            width: 16px;
            height: 16px;
            border-radius: 100px;
          }
        }
      }
      .post-footer-right {
        color: orange;
        font-size: 16px;
      }
    }
  }
  .post-item2 {
    display: flex;
    .post-images {
      margin: 15px 0;
      align-items: center;
      justify-content: space-between;
      display: flex;
      box-sizing: border-box;
      img {
        width: 220px;
        height: 150px;
        display: block;
      }
    }
    width: 100%;
    padding: 5px 0;
    border-bottom: 1px solid #eee;

    .post-right {
      margin-left: 10px;
      width: 448px;
      .post-title {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-bottom: 15px;
        font-weight: 400;
        font-size: 18px;
        overflow: hidden;
        a {
          text-decoration: none;
          color: inherit;
          &:hover {
            color: orange;
          }
        }
      }
      .post-desc {
        margin-bottom: 15px;
        line-height: 1.5;
        font-size: 14px;
        height: 63px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        a {
          text-decoration: none;
          color: #666;
        }
      }
      .post-footer {
        justify-content: space-between;
        display: flex;
        box-sizing: border-box;
        .post-footer-left {
          display: flex;
          font-size: 12px;
          color: #999;
          margin-right: 10px;
          .post-user {
            display: flex;
            a {
              text-decoration: none;
              color: orange;
            }
            img {
              display: block;
              width: 16px;
              height: 16px;
              border-radius: 100px;
            }
          }
        }
        .post-footer-right {
          color: orange;
          font-size: 16px;
        }
      }
    }
  }
}
</style>