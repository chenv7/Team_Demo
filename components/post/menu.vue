<template>
  <div class="menu">
    <ul type="flex" style="padding:0">
      <li
        class="menu-item"
        v-for="(item,index) in menuData"
        :key="index"
        @mouseenter="handleHover(index)"
        @mouseleave="handleLeave"
      >
        <!-- 左边导航栏 -->
        <div class="left">
          {{item.type}}
          <i class="el-icon-arrow-right"></i>
        </div>
        <!-- 右边隐藏导航栏详情 -->
        <ul class="right" v-show="isRight===index">
          <li v-for="(item2,index2) in item.children" :key="index2" @click="handleCity(item2.city)">
            <i>{{index2+1}}</i>
            <em>{{item2.city}}</em>
            <span>{{item2.desc}}</span>
          </li>
        </ul>
      </li>
    </ul>
    <!-- 推荐城市部分 -->
    <div class="aside-recommend">
      <h4 class="aside-title">推荐城市</h4>
      <a href="/post#" class="aside-recommend-item">
        <img src="http://157.122.54.189:9093/images/pic_sea.jpeg" />
      </a>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      menuData: {},
      isRight: false
    };
  },
  mounted() {
    this.$axios({
      url: "/posts/cities"
    }).then(res => {
      this.menuData = res.data.data;
    });
  },
  methods: {
    handleHover(index) {
      this.isRight = index;
    },
    handleLeave() {
      this.isRight = "";
    },
    handleCity(city) {
      this.$router.push(`/post?city=${city}`);
    }
  }
};
</script>
<style lang="less" scoped>
.menu {
  li {
    list-style: none;
  }
  box-sizing: border-box;
  .menu-item {
    border: 1px solid #ddd;
    width: 258px;
    height: 39px;
    line-height: 39px;
    padding: 0 10px;
    &:hover {
      color: orange;
      border-right: none;
    }
    .left {
      font-size: 14px;
      i {
        float: right;
        line-height: 39px;
        font-size: 20px;
        color: #999999;
      }
    }
    .right {
      position: absolute;
      border: 1px solid #ddd;
      border-left: none;
      width: 350px;
      z-index: 1;
      left: 280px;
      top: 16px;
      background: #fff;
      padding-left: 60px;
      box-shadow: 0 0 1px #eee;
      li {
        i {
          margin-left: -40px;
          font-size: 20px;
        }
        em {
          font-size: 14px;
          font-style: normal;
          margin: 0 10px;
          &:hover {
            text-decoration: underline;
            cursor: pointer;
          }
        }
        span {
          font-size: 14px;
          color: #999;
          &:hover {
            text-decoration: underline;
            cursor: pointer;
          }
        }
      }
    }
  }

      .aside-recommend {
      margin-top: 20px;

      img {
        width: 100%;
        display: block;
      }
      .aside-title {
        font-weight: 400;
        padding-bottom: 10px;
        border-bottom: 1px solid #ddd;
        margin-bottom: 10px;
      }
    }
}
</style>