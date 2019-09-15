<template>
  <div class="container">
    <el-row>
      <el-col :span="7">
        <Menu />
      </el-col>
      <el-col :span="17">
        <div class="post-wrapper">
          <!-- 搜索框内容 -->
          <div class="search-wrapper">
            <div class="search-bar el-row is-justify-space-between is-align-middle el-row--flex">
              <input type="text" placeholder="请输入想去的地方，比如：'广州'" />
              <i class="el-icon-search"></i>
            </div>
            <div class="search-recommend">
              推荐：
              <a href>
                <span>广州</span>
              </a>
              <a href>
                <span>上海</span>
              </a>
              <a href>
                <span>北京</span>
              </a>
            </div>
          </div>
          <div class="post-title el-row is-justify-space-between is-align-middle el-row--flex">
            <h4>
              推荐攻略
              <span></span>
            </h4>
            <button type="button" class="el-button el-button--primary" @click="$router.push('/post/create')">
              <i class="el-icon-edit"></i>
              <span>写游记</span>
            </button>
          </div>
        </div>
        <Postlist :data='dataList'/>
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="pageIndex"
          :page-sizes="[3, 4, 5, 6]"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="dataList.total"
        ></el-pagination>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import Menu from "@/components/post/menu";
import Postlist from "@/components/post/post-list";
export default {
  components: {
    Menu,
    Postlist
  },
  data(){
    return{
      dataList:{},
      pageIndex:1,
      pageSize:3
    }
  },
  mounted(){
    this.init()
  },
  methods: {
    init(){
      this.$axios({
      url: `/posts?_start=${(this.pageIndex-1)*2}&_limit=${this.pageSize}`
    }).then(res => {
      // console.log(res);
      this.dataList=res.data;
      console.log(this.dataList)
    });
    },
    // 每页条数切换时候触发, val是条数
    handleSizeChange(val) {
      this.pageSize = val;
      this.init()
    },
    // 页码切换时候触发, val是点击的页码
    handleCurrentChange(val) {
      this.pageIndex = val; // 当前页
      this.init()
    }
  }
};
</script>
<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}
.container {
  width: 1000px;
  margin: 0 auto;
}
.post-wrapper {
  margin-top: 16px;
  margin-left: 30px;
  .search-bar {
    width: 100%;
    box-sizing: border-box;
    height: 40px;
    line-height: 40px;
    border: 3px solid orange;
    input {
      flex: 1;
      padding: 0 20px;
      line-height: 40px;
      outline: none;
      border: none;
      background: none;
    }
    i {
      font-size: 24px;
      color: orange;
      font-weight: 700;
      margin-right: 10px;
    }
  }

  .search-recommend {
    padding: 10px 0;
    font-size: 12px;
    color: #666;
    a {
      text-decoration: none;
      color: #666;
      span {
        &:hover {
          color: orange;
        }
        margin-right: 5px;
      }
    }
  }

  .post-title {
    padding-bottom: 10px;
    border-bottom: 1px solid #eee;
    position: relative;
    h4 {
      font-weight: 400;
      font-size: 18px;
      color: orange;
      span {
        display: block;
        content: "";
        width: 72px;
        height: 2px;
        background: orange;
        position: absolute;
        bottom: 0;
        left: 0;
      }
    }

    .el-button {
      display: inline-block;
      line-height: 1;
      white-space: nowrap;
      cursor: pointer;
      background: #fff;
      border: 1px solid #dcdfe6;
      -webkit-appearance: none;
      text-align: center;
      box-sizing: border-box;
      outline: 0;
      margin: 0;
      transition: 0.1s;
      font-weight: 500;
      padding: 12px 20px;
      font-size: 14px;
      border-radius: 4px;
    }
    .el-button--primary {
      color: #fff;
      background-color: #409eff;
      border-color: #409eff;
    }
  }
}
</style>