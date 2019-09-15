<template>
  <div class="menu">
<<<<<<< HEAD
    <ul type="flex" style="padding:0">
=======
    <ul type="flex">
>>>>>>> a465af5ec2d68741a4b9342b223307cca9cd54d7
      <li
        class="menu-item"
        v-for="(item,index) in menuData"
        :key="index"
        @mouseenter="handleHover(index)"
        @mouseleave="handleLeave"
      >
<<<<<<< HEAD
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
=======
        <div class="left">
          {{item.type}}
          <i class="el-icon-arrow-right">&nbsp;&nbsp;</i>
        </div>
        <ul class="right" v-show="isRight===index">
          <li v-for="(item2,index2) in item.children" :key="index2" @click="handleCity(item2.city)">
            &nbsp;<i>{{index2+1}} &nbsp;</i>
            &nbsp;<em>{{item2.city}}</em> &nbsp;
>>>>>>> a465af5ec2d68741a4b9342b223307cca9cd54d7
            <span>{{item2.desc}}</span>
          </li>
        </ul>
      </li>
    </ul>
<<<<<<< HEAD
    <!-- 推荐城市部分 -->
    <div class="aside-recommend">
      <h4 class="aside-title">推荐城市</h4>
      <a href="/post#" class="aside-recommend-item">
        <img src="http://157.122.54.189:9093/images/pic_sea.jpeg" />
      </a>
    </div>
  </div>
</template>
=======
  </div>
</template>

>>>>>>> a465af5ec2d68741a4b9342b223307cca9cd54d7
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
<<<<<<< HEAD
    }).then(res => {
      this.menuData = res.data.data;
    });
  },
  methods: {
    handleHover(index) {
=======
    })
      .then(res => {
        this.menuData = res.data.data;
        console.log(this.menuData);
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    handleHover(index) {
      //   console.log(index)
>>>>>>> a465af5ec2d68741a4b9342b223307cca9cd54d7
      this.isRight = index;
    },
    handleLeave() {
      this.isRight = "";
    },
<<<<<<< HEAD
    handleCity(city) {
      this.$router.push(`/post?city=${city}`);
=======
    handleCity(city){
        this.$router.push(`/post?city=${city}`)
>>>>>>> a465af5ec2d68741a4b9342b223307cca9cd54d7
    }
  }
};
</script>
<<<<<<< HEAD
<style lang="less" scoped>
.menu {
  li {
    list-style: none;
  }
  box-sizing: border-box;
  .menu-item {
    border: 1px solid #ddd;
=======

<style lang="less" scoped>
.menu {
  box-sizing: border-box;
  .menu-item {
    border: 1px solid #eee;
>>>>>>> a465af5ec2d68741a4b9342b223307cca9cd54d7
    width: 258px;
    height: 39px;
    line-height: 39px;
    padding: 0 10px;
    &:hover {
      color: orange;
      border-right: none;
    }
    .left {
<<<<<<< HEAD
      font-size: 14px;
      i {
        float: right;
        line-height: 39px;
        font-size: 20px;
        color: #999999;
=======
      i {
        float: right;
        line-height: 39px;
>>>>>>> a465af5ec2d68741a4b9342b223307cca9cd54d7
      }
    }
    .right {
      position: absolute;
<<<<<<< HEAD
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
=======
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
>>>>>>> a465af5ec2d68741a4b9342b223307cca9cd54d7
          &:hover {
            text-decoration: underline;
            cursor: pointer;
          }
        }
        span {
<<<<<<< HEAD
          font-size: 14px;
=======
>>>>>>> a465af5ec2d68741a4b9342b223307cca9cd54d7
          color: #999;
          &:hover {
            text-decoration: underline;
            cursor: pointer;
          }
        }
      }
    }
  }
<<<<<<< HEAD

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
=======
>>>>>>> a465af5ec2d68741a4b9342b223307cca9cd54d7
}
</style>