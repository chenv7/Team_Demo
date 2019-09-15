<template>
  <div class="hotel">
    <!-- 面包屑区 -->
    <el-breadcrumb separator-class="el-icon-arrow-right" class="mianbao">
      <el-breadcrumb-item>酒店</el-breadcrumb-item>
      <el-breadcrumb-item>南京市酒店预订</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 输入框内容区 -->
<<<<<<< HEAD
    <el-row type="flex">
      <el-col :span="4">
        <el-input placeholder="目的地"></el-input>
      </el-col>
      <el-col :span="16">
        <el-date-picker
          v-model="value6"
          type="daterange"
          range-separator="-"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        ></el-date-picker>
        <el-select v-model="value7" placeholder="请选择">
          <el-option-group v-for="group in options3" :key="group.label" :label="group.label">
            <el-option
              v-for="item in group.options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-option-group>
        </el-select>
      </el-col>
      <el-col :span="4"></el-col>
    </el-row>

    <!-- 住宿要求 -->
    <div class="list-filter" style="height:68px">
      <div style="margin-left:-20px;margin-right:-20px">
        <!-- 价格 -->
        <el-col :span="8" class="hua" style="padding:5px 20px;border-right: 1px solid #ccc">
          <div style="width:205px;height:19px">
            <el-col :span="12">价格</el-col>
            <el-col :span="12" style="text-align:right;">0-0</el-col>
          </div>
          <el-slider style="width:205px" v-model="value1"></el-slider>
        </el-col>
        <!-- 住宿等级 -->
        <el-col class="Levelimport" :span="6" style="padding:5px 20px;border-right: 1px solid #ccc">
          <el-col>住宿等级</el-col>
          <div class="profession">
            <el-dropdown>
              <span>
                不限
                <i class="el-icon-arrow-down el-icon--right" style="margin-left:98px"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item
                  v-for="(item,index) in grangehotel.levels"
                  :key="index"
                >{{item.name}}</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </el-col>
        <!-- 住宿类型 -->
        <el-col class="Levelimport" :span="6" style="padding:5px 20px;border-right: 1px solid #ccc">
          <el-col>住宿类型</el-col>
          <div class="profession">
            <el-dropdown>
              <span>
                不限
                <i class="el-icon-arrow-down el-icon--right" style="margin-left:98px"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item
                  v-for="(item,index) in grangehotel.types"
                  :key="index"
                >{{item.name}}</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </el-col>
        <!-- 住宿设施 -->
        <el-col class="Levelimport" :span="6" style="padding:5px 20px;border-right: 1px solid #ccc">
          <el-col>住宿设施</el-col>
          <div class="profession">
            <el-dropdown>
              <span>
                不限
                <i class="el-icon-arrow-down el-icon--right" style="margin-left:98px"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item
                  v-for="(item,index) in grangehotel.assets"
                  :key="index"
                >{{item.name}}</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </el-col>
        <!-- 住宿品牌 -->
        <el-col class="Levelimport" :span="6" style="padding:5px 20px">
          <el-col>住宿品牌</el-col>
          <div class="profession">
            <el-dropdown>
              <span>
                不限
                <i class="el-icon-arrow-down el-icon--right" style="margin-left:98px"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item
                  v-for="(item,index) in grangehotel.brands"
                  :key="index"
                >{{item.name}}</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </el-col>
      </div>
    </div>

    <!-- 酒店详情 -->
    <div>
      <el-row class="hotel-item" v-for="(item,index) in formlist" :key="index">
        <!-- 左侧图片 -->
        <el-col :span="8" class="docs-sidebar">
          <span class="img-wrapper">
            <a :href="`${item.id}`">
              <img :src="`${item.photos}`" width="320px" height="210px" />
            </a>
          </span>
        </el-col>
        <!-- 中间详情 -->
        <el-col :span="10" class="nationally">
          <h4 class="hotel-cn-name">
            <a href="#">{{item.name}}</a>
          </h4>
          <div class="hotel-en-name">
            <span>{{item.alias}}</span>
            <span title>
              <!-- 皇冠 -->
              <i class="iconfont iconhuangguan"></i>
              <i class="iconfont iconhuangguan"></i>
              <i class="iconfont iconhuangguan"></i>
            </span>
            <span>{{item.hoteltype.name}}</span>
          </div>
          <div class="anaddress">
            <el-col :span="10">
              <el-rate
                v-model="value12"
                disabled
                show-score
                text-color="#ff9900"
                score-template="{value}"
              ></el-rate>
            </el-col>
            <el-col :span="7">
              <span>20</span>
              条评价
            </el-col>
            <el-col :span="7">
              <span>20</span>
              篇游记
            </el-col>
          </div>
          <div class="hotel-summary-row"></div>
          <!-- 地点 -->
          <div class="location-row">
            <i class="iconfont iconlocation"></i>
            位于: {{item.address}}
          </div>
        </el-col>
        <!-- 右侧价格 -->
        <el-col class="pice" :span="6">
          <table style="width: 100%">
            <tbody class="buanshou">
              <tr @click="hadelClick" v-for="(items,index) in item.products" :key="index">
                <td class="column-td">
                  <div>{{items.name}}</div>
                </td>
                <td class="column-td">
                  <div>
                    <span>￥{{items.price}}</span>起
                    <i class="el-icon-arrow-right"></i>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </el-col>
      </el-row>
    </div>

    <!-- 分页 -->
    <div class="enablePaging">
      <el-pagination
        small
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="form._start"
        :page-size="form._limit"
        prev-text="上一页"
        next-text="下一页"

        :total="total"
      ></el-pagination>
    </div>
=======
    <HotelMap :data="hotelData" />
>>>>>>> 2a8389aa746beb4b96fc0f7bde143ce66babc2e8
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
<<<<<<< HEAD
      value12: 3.5, //评分
=======
>>>>>>> 2a8389aa746beb4b96fc0f7bde143ce66babc2e8
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
<<<<<<< HEAD
      value7: ""
=======
      value7: "",
      hotelData: []
>>>>>>> 2a8389aa746beb4b96fc0f7bde143ce66babc2e8
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