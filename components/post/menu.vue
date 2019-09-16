<template>
  <div class="menu">
    <ul type="flex">
      <li
        class="menu-item"
        v-for="(item,index) in menuData"
        :key="index"
        @mouseenter="handleHover(index)"
        @mouseleave="handleLeave"
      >
        <div class="left">
          {{item.type}}
          <i class="el-icon-arrow-right"></i>
        </div>
        <ul class="right" v-show="isRight===index">
          <li v-for="(item2,index2) in item.children" :key="index2" @click="handleCity(item2.city)">
            &nbsp;<i>{{index2+1}} &nbsp;</i>
            &nbsp;<em>{{item2.city}}</em> &nbsp;
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
      //   console.log(index)
      this.isRight = index;
    },
    handleLeave() {
      this.isRight = "";
    },
    handleCity(city) {
        this.$router.push(`/post?city=${city}`)
    }
  }
};
</script>

<style lang="less" scoped>
.menu {
  margin-top: 16px;
  box-sizing: border-box;
  .menu-item {
    border: 1px solid #ddd;
    width: 258px;
    height: 40px;
    line-height: 40px;
    padding: 0 10px;
    font-size: 14px;
    z-index: 2;
    &:hover {
      color: orange;
      border-right: none;
    }
    .left {
      img{
        width: 100%;
      }
      i {
        display: block;
        font-size: 20px;
        float: right;
        line-height: 40px;
      }
    }
    .right {
      position: absolute;
      border:1px solid #eee;
      border-left: none;
      width: 360px;
      z-index: 9;
      left: 280px;
      top: 0;
      background-color: #fff;
      li {
        i {
          padding-left: 15px;
          font-size: 24px;
          font-style: italic;
        }
        em {
          &:hover {
            text-decoration: underline;
            cursor: pointer;
          }
        }
        span {
          color: #999;
          &:hover {
            text-decoration: underline;
            cursor: pointer;
          }
        }
      }
    }
  }
  .aside-recommend{
    margin-top: 20px;
    .aside-title{
      font-weight: 400;
    padding-bottom: 10px;
    border-bottom: 1px solid #ddd;
    margin-bottom: 10px;
    }
    .aside-recommend-item{
      img{
        width: 100%;
      }
    }
  }
}
</style>