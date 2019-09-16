<template>
  <div class="hotel">
    <!-- 面包屑区 -->
    <el-breadcrumb separator-class="el-icon-arrow-right" class="mianbao">
      <el-breadcrumb-item>酒店</el-breadcrumb-item>
      <el-breadcrumb-item>南京市酒店预订</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 输入框内容区 -->
    <el-form class="search-form-content" ref="form">
      <el-row type="flex">
        <el-col :span="4">
          <el-autocomplete
            placeholder="目的地"
            :fetch-suggestions="endSearch"
            @select="handleendSelect"
            class="el-autocomplete mudidi"
            v-model="form.endCity"
          ></el-autocomplete>
        </el-col>
        <el-col :span="16">
          <el-date-picker
            v-model="form.times"
            type="daterange"
            range-separator="-"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          ></el-date-picker>
          <div @click="isShow=!isShow" class="dakuangkuang">
            <el-input
              placeholder="人数未定"
              suffix-icon="el-input__icon iconfont iconuser"
              style="width:217px"
            ></el-input>
          </div>
          <div class="inkuang" style="width:300px;height:97px" v-show="isShow" readonly="readonly">
            <span class="adult">成人</span>
            <span class="childern">儿童</span>
            <span class="meijian">每间</span>
            <el-select v-model="chengren" class="heng">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
            <el-select v-model="ertong" class="heng">
              <el-option
                v-for="item in options2"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
            <div class="btn1">
              <el-button type="primary" class="btn2">确定</el-button>
            </div>
          </div>
        </el-col>
        <el-col :span="4">
          <el-button type="primary">查看价格</el-button>
        </el-col>
      </el-row>
    </el-form>
    <!-- 地图区域 -->
    <HotelMap :data="hotelData" />
    <!-- 酒店住房情况 -->
    <HotelContent/>
  </div>
</template>

<script>
import HotelMap from "@/components/hotel/hotel_map";
import HotelContent from '@/components/hotel/HotelContent';
export default {
  components: {
    HotelMap,HotelContent
  },
  mounted() {
    /* 请求酒店数据 */
    this.$axios({
      url: "http://157.122.54.189:9095/hotels?"
    }).then(res => {
      console.log(res);
      this.hotelData = res.data.data[0].scenic;
    });
  },
  data() {
    return {
      chengren: 2,
      ertong: 0,
      options: [
        {
          value: "选项1",
          label: "1"
        },
        {
          value: "选项2",
          label: "2"
        },
        {
          value: "选项3",
          label: "3"
        },
        {
          value: "选项4",
          label: "4"
        },
        {
          value: "选项5",
          label: "5"
        },
        {
          value: "选项6",
          label: "6"
        }
      ],
      options2: [
        {
          value: "选项1",
          label: "1"
        },
        {
          value: "选项2",
          label: "2"
        },
        {
          value: "选项3",
          label: "3"
        },
        {
          value: "选项4",
          label: "4"
        },
        {
          value: "选项5",
          label: "5"
        },
        {
          value: "选项6",
          label: "6"
        }
      ],
      isShow: false,
      form: {
        times: "",
        endCity: "南京市",
        value7: ""
      },
      hotelData: []
    };
  },
  methods: {
    async endSearch(value, cb) {
      const arr = await this.querySearchAsync(value);
      if (arr.length > 0) {
        // 不在下拉列表中选择，则默认选择第一项
        this.form.endCity = arr[0].value;
      }
      console.log(arr);
      cb(arr);
    },
    querySearchAsync(qstring) {
      return new Promise((resolve, reject) => {
        //如果关键字是空的，直接返回
        if (!qstring) {
          resolve([]);
          return;
        }
        this.$axios({
          url: "/airs/city",
          params: {
            name: qstring
          }
        }).then(res => {
          const { data } = res.data;
          const arr = data.map(v => {
            return {
              ...v,
              value: v.name
            };
          });
          resolve(arr);
        });
      });
    } ,
    handleendSelect(i){
      this.form.endCity = i.value;
    }
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
.mudidi {
  margin-right: 5px;
}
.dakuangkuang {
  display: inline-block;
}
.inkuang {
  position: absolute;
  top: 50px;
  left: 524px;
  background-color: #fff;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  z-index: 100;
  padding: 12px;
  transform-origin: center top;
  color: #606266;
  line-height: 1.4;
  text-align: justify;
  font-size: 14px;
  .meijian {
    margin-right: 81px;
  }
  .btn1 {
    margin-top: 28px;
    border-top: 1px solid #ddd;
    padding-top: 10px;
    .btn2 {
      margin-left: 230px;
      height: 20px;
      line-height: 0px;
    }
  }
  .adult {
    position: absolute;
    top: 23px;
    left: 157px;
    z-index: 1000;
    font-size: 12px;
  }
  .childern {
    position: absolute;
    top: 23px;
    left: 252px;
    z-index: 1000;
    font-size: 12px;
  }
  .heng {
    width: 90px;
    height: 28px !important;
  }
}
</style>