<template>
  <div class="hotel">
    <!-- 面包屑区 -->
    <el-breadcrumb separator-class="el-icon-arrow-right" class="mianbao">
      <el-breadcrumb-item>酒店</el-breadcrumb-item>
      <el-breadcrumb-item>南京市酒店预订</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 输入框内容区 -->
    <HotelMap :data="hotelData" />
  </div>
</template>

<script>
import HotelMap from "@/components/hotel/hotel_map";
export default {
  components: {
    HotelMap
  },
  mounted() {
    /* 请求酒店数据 */
    this.$axios({
      url: "http://157.122.54.189:9095/hotels?",
    }).then(res => {
      console.log(res.data.data[0]);
      this.hotelData = res.data.data[0].scenic;
    });
  },
  data() {
    return {
      grangehotel: [], //酒店选项
      formlist: [], //酒店列表
      form: {
        id: 1, //酒店id
        city: 1, //城市id
        price_in: 20, // 酒店价格
        scenic: 1, // 景点id
        name_contains: "你好", //名字模糊查询
        hotellevel: 1, //酒店星级
        hoteltype: 2, //酒店类型
        hotelbrand: 3, //酒店品牌
        hotelasset: 2, //酒店设施
        enterTime: "", // 	Date	入店时间
        person: 2, //人数
        _sort: "好", //排序
        _limit: 10, //条数
        _start: 3 //开始数据（分页）
      },
      total: 0, //总条数
      value1: 4000, //滑块
      value6: "",
      options3: [
        {
          label: "热门城市",
          options: [
            {
              value: "Shanghai",
              label: "上海"
            },
            {
              value: "Beijing",
              label: "北京"
            }
          ]
        }
      ],
      value7: "",
      hotelData: []
    };
  },
  methods: {
    hadelClick() {
      //跳转新窗口
      window.open("https://hotels.ctrip.com/hotel/694679.html");
    },
    // 当前条数
    handleSizeChange(val) {
      this.form._limit = val;
      console.log(val);
    },
    // 当前页数
    handleCurrentChange(val) {
      this.form._start = val;
    }
  },
  mounted() {
    //酒店详情
    this.$axios({
      url: "/hotels",
      data: this.form
    }).then(res => {
      this.formlist = res.data.data; //酒店列表渲染

      this.total = res.data.total; //分页的总页数
    });

    //酒店选项
    this.$axios({
      url: "/hotels/options"
    }).then(res => {
      this.grangehotel = res.data.data;
      console.log(res);
    });
  }
};
</script>

<style lang="less" scoped>
// 面包屑
.hotel {
  width: 1000px;
  margin: 0 auto;
  .mianbao {
    padding: 15px 0;
  }
}

// 住宿条件
.list-filter {
  border: 1px solid #ddd;
  margin-top: 20px;
  padding: 5px 20px;
  font-size: 14px;
  color: #666;
  .hua {
    width: 246px;
  }
  .Levelimport {
    width: 187px;
    height: 67px;
    .profession {
      line-height: 40px;
    }
  }
  .sotofipugu {
    border-right: none;
  }
}

// 酒店详情
.hotel-item {
  padding: 25px 0;
  border-bottom: 1px solid #eee;
  // 左侧图片
  .docs-sidebar {
    // 酒店详情图片
    .img-wrapper {
      width: 420px;
    }
  }
  // 中间详情
  .nationally {
    // 酒店名称
    .hotel-cn-name {
      font-weight: 400;
      font-size: x-large;
      a {
        text-decoration: none;
        color: inherit;
      }
    }
    // 类型
    .hotel-en-name {
      margin-bottom: 0.5em;
      color: #999;
      // 皇冠颜色
      .iconhuangguan {
        color: orange;
      }
    }
    // 酒店评论
    .anaddress {
      span {
        color: orange;
      }
    }
    // 地点
    .location-row {
      font-size: 14px;
      color: #666;
    }
  }
  // 右侧价格
  .pice {
    margin-top: 20px;
    .buanshou {
      cursor: pointer;
    }
    .column-td {
      padding: 12px 0;
      border-bottom: 1px solid #ccc;
      div {
        font-size: 14px;
        color: rgb(96, 98, 102);
        padding-left: 10px;
        span {
          color: orange;
        }
      }
    }
  }
}
el-col {
  margin-left: -10px;
  margin-right: -10px;
}

// 分页
.enablePaging {
  display: flex;
  justify-content: flex-end;
  padding: 20px 0 40px;
}
</style>