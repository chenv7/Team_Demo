<template>
  <div class="flight-item" @click="isdui=!isdui">
    <el-row type="flex" align="middle" class="flight-info">
      <el-col :span="6">
        <span>{{data.airline_name}}</span>
        {{data.flight_no}}
      </el-col>
      <el-col :span="12">
        <el-row type="flex" justify="space-between" class="flight-info-center">
          <el-col :span="8" class="flight-airport">
            <span>{{data.dep_time}}</span>
            <span>{{data.org_airport_name}}{{data.org_airport_quay}}</span>
          </el-col>
          <el-col :span="8" class="flight-time">
            <span>{{rankTime}}</span>
            <span></span>
          </el-col>
          <el-col :span="8" class="flight-airport">
            <span>{{data.arr_time}}</span>
            <span>{{data.dst_airport_name}}{{data.dst_airport_quay}}</span>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="6">
        <el-row type="flex" class="abc" align="bottom">
          <span>￥</span>
          <i>{{data.base_price/2}}</i>
          <span>起</span>
        </el-row>
      </el-col>
    </el-row>
    <!-- 点击弹出 -->
    <el-row type="flex" justify="space-between" align="middle" class="csa" v-show="isdui">
      <el-col :span="4">
        <span>低价推荐</span>
      </el-col>
      <el-col :span="20">
        <el-row
          type="flex"
          justify="space-between"
          align="middle"
          class="ccx"
          v-for="(item,index) in data.seat_infos"
          :key="index"
        >
          <el-col :span="15" class="fi1">
            <span>{{item.name}}</span>
            | {{item.supplierName}}
          </el-col>
          <el-col :span="6" class="price">
            <span>￥</span>
            {{item.org_settle_price}}
          </el-col>
          <el-col :span="3" class="lastt">
            <el-button type="warning" size="mini" @click="handleChoose(data.id, item.seat_xid)">选定</el-button>
            <span>剩余：{{item.discount}}</span>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Object,
      default: {}
    }
  },
  data() {
    return {
      isdui: false
    };
  },
  mounted() {},
  methods: {
    handleChoose(id, seatId) {
      this.$router.push({
        path: "/air/order",
        query: {
          id,
          seat_xid: seatId
        }
      });
    }
  },
  computed: {
    rankTime() {
      let a = this.data.dep_time.split(":");
      let b = this.data.arr_time.split(":");
      // console.log(a)
      let c = a[0] * 60 + +a[1];
      let d = b[0] * 60 + +b[1];
      //到达时间为
      let times = d - c;
      if (times < 0) {
        times = d + 24 * 60 - c;
      }
      return `${Math.floor(times / 60)}时${times % 60} 分`;
    }
  }
};
</script>
<style lang="less" scoped>
.flight-item {
  border: 1px #ddd solid;
  background: #fff;
  padding-top: 15px;
  text-align: center;
  margin: 15px 0;
  .flight-info-center {
    .flight-time {
      color: #999;
      margin-top: 10px;
      position: relative;
      span {
        &:nth-child(2) {
          display: block;
          width: 54px;
          height: 1px;
          background-color: #eee;
          position: absolute;
          top: 30px;
          left: 34px;
        }
      }
    }
    .flight-airport {
      display: flex;
      flex-direction: column;
      margin-bottom: 15px;
      span {
        &:nth-child(1) {
          font-size: 24px;
        }
        &:nth-child(2) {
          font-size: 12px;
          margin-top: 5px;
          color: #999;
        }
      }
    }
  }
  .abc {
    margin-left: 60px;
    i {
      font-size: 24px;
      color: #ffa500;
      font-style: normal;
      margin-right: 3px;
    }
    span {
      margin-bottom: 3px;
    }
  }
  .csa {
    background-color: #f6f6f6;
    padding: 15px 0;
    padding-right: 10px;
    .ccx {
      border-bottom: 1px solid #eee;
      padding: 5px 0;
      &:nth-last-child(1) {
        border-bottom: none;
      }
    }
  }
  .fi1 {
    font-size: 12px;
    > span {
      color: #008000;
    }
  }
  .price {
    font-size: 20px;
    color: #ffa500;
  }
  .lastt {
    span {
      &:nth-child(1) {
        display: block;
        font-size: 12px;
        color: #fff;
        background-color: #e6a23c;
        width: 70px;
        height: 28px;
        line-height: 28px;
        border-radius: 5%;
        margin-bottom: 5px;
      }
      &:nth-child(2) {
        font-size: 14px;
        color: #666;
        margin-right: 7px;
      }
    }
  }
}
</style>