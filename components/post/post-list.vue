<template>
  <div class="post-list">
    <div class="post-item1" v-for="(item,id) in data.data" :key="id">
      <h4 class="post-title">
        <nuxt-link :to="'/post/detail?id='+item.id">{{item.title}}</nuxt-link>
      </h4>
      <p class="post-desc" v-html="item.content"></p>
      <div class="post-images">
        <a href v-for="(imgItem,imgIndex) in item.images" :key="imgIndex">
          <img :src="imgItem" alt />
        </a>
      </div>
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
    <!-- <div class="post-item2">
      <div class="post-images">
        <a href>
          <img
            src="https://p3-q.mafengwo.net/s13/M00/41/C4/wKgEaVyaOs2AA9IKAAj8Lg2YzaU64.jpeg?imageMogr2%2Fthumbnail%2F1360x%2Fstrip%2Fquality%2F90"
            alt
          />
        </a>
      </div>
      <div class="post-right">
        <h4 class="post-title">
          <a href>远东行：用好奇心打量这座城 —— 最值得收藏的海参崴出行攻略</a>
        </h4>
        <p class="post-desc">
          <a
            href
          >大家对塞班岛总存在着这样的误解，知道它是美属地盘，就理所当然地觉得这里的花费一定很高，花费高有高的玩法，那如果只有6000块的预算呢？要怎么玩？关于旅行这件事，我们要让钱花得更有道理，收下这份攻略，带你6000块花式玩转塞班。图：塞班岛。 by第5季旅游一、怎样用6000块玩转塞班？大多数出境游客人不做预算或最终花费远远超出预算，对预算的合理分配对控制我们旅行的花费就很重要了，如何只花6000块玩转塞班岛，对预算超支say no？</a>
        </p>
        <div class="post-footer">
          <div class="post-footer-left">
            <span>
              <i class="el-icon-location-outline">北京市</i>
            </span>&nbsp;&nbsp;&nbsp;
            <div class="post-user">
              by&nbsp;&nbsp;
              <a href>
                <img src="http://157.122.54.189:9095/assets/images/avatar.jpg" />
              </a>&nbsp;&nbsp;
              <a href>地球发动机</a>
            </div>&nbsp;&nbsp;&nbsp;
            <span>
              <i class="el-icon-view"></i> 7777
            </span>
          </div>
          <span class="post-footer-right">50 赞</span>
        </div>
      </div>
    </div> -->
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
  .post-item1 {
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