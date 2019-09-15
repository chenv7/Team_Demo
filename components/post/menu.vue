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
          <i class="el-icon-arrow-right">&nbsp;&nbsp;</i>
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
  box-sizing: border-box;
  .menu-item {
    border: 1px solid #eee;
    width: 258px;
    height: 39px;
    line-height: 39px;
    padding: 0 10px;
    &:hover {
      color: orange;
      border-right: none;
    }
    .left {
      img{
        width: 100%;
      }
      i {
        float: right;
        line-height: 39px;
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
          font-size: 20px;
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
    .aside-recommend-item{
      img{
        width: 100%;
      }
    }
  }
}
</style>